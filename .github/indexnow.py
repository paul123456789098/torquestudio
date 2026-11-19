#!/usr/bin/env python3
"""Changed files of this push -> page URLs that are in sitemap.xml -> IndexNow.
Waits until GitHub Pages serves the new version first, so the engines fetch the fresh page."""
import os, re, json, glob, time, subprocess, urllib.request

HOST = 'torquestudio.es'
keys = [f[:-4] for f in glob.glob('*.txt') if len(f) == 36 and re.fullmatch(r'[0-9a-f]{32}', f[:-4])]
if not keys: raise SystemExit('no IndexNow key file in the repo root')
KEY = keys[0]
sitemap = re.findall(r'<loc>([^<]+)</loc>', open('sitemap.xml', encoding='utf-8').read())

def url_of(path):
    if path == 'index.html': return f'https://{HOST}/'
    if path.endswith('/index.html'): return f'https://{HOST}/' + path[:-len('index.html')]
    if path.endswith('.html'): return f'https://{HOST}/' + path[:-5]
    return None

if os.environ.get('ALL') == 'true':
    urls = sitemap
else:
    before, after = os.environ.get('BEFORE', ''), os.environ.get('AFTER', 'HEAD')
    if not before or set(before) == {'0'}: before = after + '~1'
    try:
        changed = subprocess.check_output(['git', 'diff', '--name-only', before, after], text=True).split()
    except subprocess.CalledProcessError:
        changed = subprocess.check_output(['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'], text=True).split()
    urls = sorted({u for u in map(url_of, changed) if u and u in sitemap})
    if 'sitemap.xml' in changed or 'index.html' in changed:   # new articles are listed on the home page and the blog index
        urls = sorted(set(urls) | {u for u in sitemap if u.endswith('/blog/')})
print('pages:', urls)
if not urls: raise SystemExit(0)

# wait for the Pages deploy: the key file and the new sitemap must already be served
deadline = time.time() + 600
want = open('sitemap.xml', encoding='utf-8').read().strip()
while time.time() < deadline:
    try:
        live = urllib.request.urlopen(f'https://{HOST}/sitemap.xml?nc={int(time.time())}', timeout=20).read().decode().strip()
        keyok = urllib.request.urlopen(f'https://{HOST}/{KEY}.txt', timeout=20).read().decode().strip() == KEY
        if live == want and keyok: break
    except Exception as e:
        print('waiting:', e)
    time.sleep(20)
else:
    print('Pages not updated after 10 min, submitting anyway')

body = json.dumps({'host': HOST, 'key': KEY, 'keyLocation': f'https://{HOST}/{KEY}.txt', 'urlList': urls}).encode()
req = urllib.request.Request('https://api.indexnow.org/indexnow', data=body, headers={'Content-Type': 'application/json; charset=utf-8'})
try:
    r = urllib.request.urlopen(req, timeout=30); print('IndexNow:', r.status)
except urllib.error.HTTPError as e:
    print('IndexNow:', e.code, e.read()[:300]); raise SystemExit(0 if e.code in (200, 202) else 1)
