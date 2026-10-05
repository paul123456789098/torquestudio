var Aa="160";var Xc=0,za=1,qc=2;var pc=1,Yc=2,Qe=3,Xe=0,Se=1,ze=2;var pn=0,ni=1,Va=2,ka=3,Ha=4,Zc=5,Tn=100,Jc=101,$c=102,Ga=103,Wa=104,Kc=200,Qc=201,jc=202,tl=203,Ur=204,Dr=205,el=206,nl=207,il=208,sl=209,rl=210,al=211,ol=212,cl=213,ll=214,hl=0,ul=1,dl=2,gs=3,fl=4,pl=5,ml=6,gl=7,mc=0,_l=1,xl=2,mn=0,vl=1,yl=2,Ml=3,Ta=4,Sl=5,bl=6;var gc=300,ri=301,ai=302,Ai=303,Nr=304,Ws=306,Ti=1e3,Ve=1001,Or=1002,ve=1003,Xa=1004;var Qs=1005;var Pe=1006,El=1007;var wi=1008;var gn=1009,Al=1010,Tl=1011,wa=1012,_c=1013,dn=1014,fn=1015,Ri=1016,xc=1017,vc=1018,Rn=1020,wl=1021,ke=1023,Rl=1024,Cl=1025,Cn=1026,oi=1027,Pl=1028,yc=1029,Ll=1030,Mc=1031,Sc=1033,js=33776,tr=33777,er=33778,nr=33779,qa=35840,Ya=35841,Za=35842,Ja=35843,bc=36196,$a=37492,Ka=37496,Qa=37808,ja=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,co=37818,lo=37819,ho=37820,uo=37821,ir=36492,fo=36494,po=36495,Il=36283,mo=36284,go=36285,_o=36286;var _s=2300,xs=2301,sr=2302,xo=2400,vo=2401,yo=2402;var Ec=3e3,Pn=3001,Ul=3200,Dl=3201,Ac=0,Nl=1,Le="",se="srgb",nn="srgb-linear",Ra="display-p3",Xs="display-p3-linear",vs="linear",$t="srgb",ys="rec709",Ms="p3";var On=7680;var Mo=519,Ol=512,Fl=513,Bl=514,Tc=515,zl=516,Vl=517,kl=518,Hl=519,So=35044;var bo="300 es",Fr=1035,tn=2e3,Ss=2001,_n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rr=Math.PI/180,Br=180/Math.PI;function di(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function Gl(i,t){return(i%t+t)%t}function ar(i,t,e){return(1-e)*i+e*t}function Eo(i){return(i&i-1)===0&&i!==0}function zr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],d=s[6],E=s[1],v=s[4],A=s[7],I=s[2],R=s[5],w=s[8];return r[0]=o*_+a*E+c*I,r[3]=o*p+a*v+c*R,r[6]=o*d+a*A+c*w,r[1]=l*_+h*E+u*I,r[4]=l*p+h*v+u*R,r[7]=l*d+h*A+u*w,r[2]=f*_+m*E+g*I,r[5]=f*p+m*v+g*R,r[8]=f*d+m*A+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(or.makeScale(t,e)),this}rotate(t){return this.premultiply(or.makeRotation(-t)),this}translate(t,e){return this.premultiply(or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},or=new kt;function wc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wl(){let i=bs("canvas");return i.style.display="block",i}var Ao={};function yi(i){i in Ao||(Ao[i]=!0,console.warn(i))}var To=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wo=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[nn]:{transfer:vs,primaries:ys,toReference:i=>i,fromReference:i=>i},[se]:{transfer:$t,primaries:ys,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xs]:{transfer:vs,primaries:Ms,toReference:i=>i.applyMatrix3(wo),fromReference:i=>i.applyMatrix3(To)},[Ra]:{transfer:$t,primaries:Ms,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wo),fromReference:i=>i.applyMatrix3(To).convertLinearToSRGB()}},Xl=new Set([nn,Xs]),qt={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Wi[t].toReference,s=Wi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wi[i].primaries},getTransfer:function(i){return i===Le?vs:Wi[i].transfer}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fn,Es=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fn===void 0&&(Fn=bs("canvas")),Fn.width=t.width,Fn.height=t.height;let n=Fn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=bs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ql=0,As=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=di(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lr(s[o].image)):r.push(lr(s[o]))}else r=lr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Es.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yl=0,De=class i extends _n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ve,s=Ve,r=Pe,o=wi,a=ke,c=gn,l=i.DEFAULT_ANISOTROPY,h=Le){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=di(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Pn?se:Le),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case Ve:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case Ve:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===se?Pn:Ec}set encoding(t){yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Pn?se:Le}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=gc;De.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,A=(m+1)/2,I=(d+1)/2,R=(h+f)/4,w=(u+_)/4,X=(g+p)/4;return v>A&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=w/n):A>I?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=X/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=X/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vr=class extends _n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pn?se:Le),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new As(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Vr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ts=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==m||h!==g){let p=1-a,d=c*f+l*m+h*g+u*_,E=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let I=Math.sqrt(v),R=Math.atan2(I,d*E);p=Math.sin(p*R)/I,a=Math.sin(a*R)/I}let A=a*E;if(c=c*p+f*A,l=l*p+m*A,h=h*p+g*A,u=u*p+_*A,p===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*f,t[e+1]=c*g+h*f+l*u-a*m,t[e+2]=l*g+h*m+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ro.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ro.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hr=new L,Ro=new xn,Ln=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oe):Oe.fromBufferAttribute(r,o),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gi),qi.subVectors(this.max,gi),Bn.subVectors(t.a,gi),zn.subVectors(t.b,gi),Vn.subVectors(t.c,gi),on.subVectors(zn,Bn),cn.subVectors(Vn,zn),Mn.subVectors(Bn,Vn);let e=[0,-on.z,on.y,0,-cn.z,cn.y,0,-Mn.z,Mn.y,on.z,0,-on.x,cn.z,0,-cn.x,Mn.z,0,-Mn.x,-on.y,on.x,0,-cn.y,cn.x,0,-Mn.y,Mn.x,0];return!ur(e,Bn,zn,Vn,qi)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,Bn,zn,Vn,qi))?!1:(Yi.crossVectors(on,cn),e=[Yi.x,Yi.y,Yi.z],ur(e,Bn,zn,Vn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ye=[new L,new L,new L,new L,new L,new L,new L,new L],Oe=new L,Xi=new Ln,Bn=new L,zn=new L,Vn=new L,on=new L,cn=new L,Mn=new L,gi=new L,qi=new L,Yi=new L,Sn=new L;function ur(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Sn.fromArray(i,r);let a=s.x*Math.abs(Sn.x)+s.y*Math.abs(Sn.y)+s.z*Math.abs(Sn.z),c=t.dot(Sn),l=e.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Zl=new Ln,_i=new L,dr=new L,Ci=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_i.subVectors(t,this.center);let e=_i.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_i.copy(t.center).add(dr)),this.expandByPoint(_i.copy(t.center).sub(dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ze=new L,fr=new L,Zi=new L,ln=new L,pr=new L,Ji=new L,mr=new L,Hr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fr.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(fr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zi),a=ln.dot(this.direction),c=-ln.dot(Zi),l=ln.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fr).addScaledVector(Zi,f),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);let n=Ze.dot(this.direction),s=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,s,r){pr.subVectors(e,t),Ji.subVectors(n,t),mr.crossVectors(pr,Ji);let o=this.direction.dot(mr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,t);let c=a*this.direction.dot(Ji.crossVectors(ln,Ji));if(c<0)return null;let l=a*this.direction.dot(pr.cross(ln));if(l<0||c+l>o)return null;let h=-a*ln.dot(mr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,m,g,_,p)}set(t,e,n,s,r,o,a,c,l,h,u,f,m,g,_,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/kn.setFromMatrixColumn(t,0).length(),r=1/kn.setFromMatrixColumn(t,1).length(),o=1/kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,m=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,m=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jl,t,$l)}lookAt(t,e,n){let s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),hn.crossVectors(n,Te),hn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),hn.crossVectors(n,Te)),hn.normalize(),$i.crossVectors(Te,hn),s[0]=hn.x,s[4]=$i.x,s[8]=Te.x,s[1]=hn.y,s[5]=$i.y,s[9]=Te.y,s[2]=hn.z,s[6]=$i.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],E=n[3],v=n[7],A=n[11],I=n[15],R=s[0],w=s[4],X=s[8],S=s[12],b=s[1],O=s[5],Q=s[9],rt=s[13],P=s[2],N=s[6],H=s[10],J=s[14],Y=s[3],G=s[7],$=s[11],j=s[15];return r[0]=o*R+a*b+c*P+l*Y,r[4]=o*w+a*O+c*N+l*G,r[8]=o*X+a*Q+c*H+l*$,r[12]=o*S+a*rt+c*J+l*j,r[1]=h*R+u*b+f*P+m*Y,r[5]=h*w+u*O+f*N+m*G,r[9]=h*X+u*Q+f*H+m*$,r[13]=h*S+u*rt+f*J+m*j,r[2]=g*R+_*b+p*P+d*Y,r[6]=g*w+_*O+p*N+d*G,r[10]=g*X+_*Q+p*H+d*$,r[14]=g*S+_*rt+p*J+d*j,r[3]=E*R+v*b+A*P+I*Y,r[7]=E*w+v*O+A*N+I*G,r[11]=E*X+v*Q+A*H+I*$,r[15]=E*S+v*rt+A*J+I*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*m-n*c*m)+_*(+e*c*m-e*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+p*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],E=u*p*l-_*f*l+_*c*m-a*p*m-u*c*d+a*f*d,v=g*f*l-h*p*l-g*c*m+o*p*m+h*c*d-o*f*d,A=h*_*l-g*u*l+g*a*m-o*_*m-h*a*d+o*u*d,I=g*u*c-h*_*c-g*a*f+o*_*f+h*a*p-o*u*p,R=e*E+n*v+s*A+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=E*w,t[1]=(_*f*r-u*p*r-_*s*m+n*p*m+u*s*d-n*f*d)*w,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*d+n*c*d)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*m-n*c*m)*w,t[4]=v*w,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*d+e*f*d)*w,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*d-e*c*d)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*m+e*c*m)*w,t[8]=A*w,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*d-e*u*d)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*w,t[12]=I*w,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*p+e*u*p)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*p-e*a*p)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,E=c*l,v=c*h,A=c*u,I=n.x,R=n.y,w=n.z;return s[0]=(1-(_+d))*I,s[1]=(m+A)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(f+d))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+v)*w,s[9]=(p-E)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=kn.set(s[0],s[1],s[2]).length(),o=kn.set(s[4],s[5],s[6]).length(),a=kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fe.copy(this);let l=1/r,h=1/o,u=1/a;return Fe.elements[0]*=l,Fe.elements[1]*=l,Fe.elements[2]*=l,Fe.elements[4]*=h,Fe.elements[5]*=h,Fe.elements[6]*=h,Fe.elements[8]*=u,Fe.elements[9]*=u,Fe.elements[10]*=u,e.setFromRotationMatrix(Fe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=tn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(a===tn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ss)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=tn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,m=(n+s)*h,g,_;if(a===tn)g=(o+r)*u,_=-2*u;else if(a===Ss)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},kn=new L,Fe=new re,Jl=new L(0,0,0),$l=new L(1,1,1),hn=new L,$i=new L,Te=new L,Co=new re,Po=new xn,ws=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Co.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Co,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Po.setFromEuler(this),this.setFromQuaternion(Po,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ws.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kl=0,Lo=new L,Hn=new xn,Je=new re,Ki=new L,xi=new L,Ql=new L,jl=new xn,Io=new L(1,0,0),Uo=new L(0,1,0),Do=new L(0,0,1),th={type:"added"},eh={type:"removed"},Ee=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new ws,n=new xn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new kt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.premultiply(Hn),this}rotateX(t){return this.rotateOnAxis(Io,t)}rotateY(t){return this.rotateOnAxis(Uo,t)}rotateZ(t){return this.rotateOnAxis(Do,t)}translateOnAxis(t,e){return Lo.copy(t).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Io,t)}translateY(t){return this.translateOnAxis(Uo,t)}translateZ(t){return this.translateOnAxis(Do,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(xi,Ki,this.up):Je.lookAt(Ki,xi,this.up),this.quaternion.setFromRotationMatrix(Je),s&&(Je.extractRotation(s.matrixWorld),Hn.setFromRotationMatrix(Je),this.quaternion.premultiply(Hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,t,Ql),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,jl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new L(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=new L,$e=new L,gr=new L,Ke=new L,Gn=new L,Wn=new L,No=new L,_r=new L,xr=new L,vr=new L,Qi=!1,Qn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Be.subVectors(t,e),s.cross(Be);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Be.subVectors(s,e),$e.subVectors(n,e),gr.subVectors(t,e);let o=Be.dot(Be),a=Be.dot($e),c=Be.dot(gr),l=$e.dot($e),h=$e.dot(gr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getUV(t,e,n,s,r,o,a,c){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ke)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ke.x),c.addScaledVector(o,Ke.y),c.addScaledVector(a,Ke.z),c)}static isFrontFacing(t,e,n,s){return Be.subVectors(n,e),$e.subVectors(t,e),Be.cross($e).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Be.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qi=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gn.subVectors(s,n),Wn.subVectors(r,n),_r.subVectors(t,n);let c=Gn.dot(_r),l=Wn.dot(_r);if(c<=0&&l<=0)return e.copy(n);xr.subVectors(t,s);let h=Gn.dot(xr),u=Wn.dot(xr);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gn,o);vr.subVectors(t,r);let m=Gn.dot(vr),g=Wn.dot(vr);if(g>=0&&m<=g)return e.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Wn,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return No.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(No,a);let d=1/(p+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Gn,o).addScaledVector(Wn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},ji={h:0,s:0,l:0};function yr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Gl(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=yr(o,r,t+1/3),this.g=yr(o,r,t),this.b=yr(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){let n=Rc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return qt.fromWorkingColorSpace(me.copy(this),t),Math.round(de(me.r*255,0,255))*65536+Math.round(de(me.g*255,0,255))*256+Math.round(de(me.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(me.copy(this),e);let n=me.r,s=me.g,r=me.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=se){qt.fromWorkingColorSpace(me.copy(this),t);let e=me.r,n=me.g,s=me.b;return t!==se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(ji);let n=ar(un.h,ji.h,e),s=ar(un.s,ji.s,e),r=ar(un.l,ji.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},me=new Gt;Gt.NAMES=Rc;var nh=0,In=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ni,this.side=Xe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Dr,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==Xe&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Dr&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Cs=class extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ie=new L,ts=new ht,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=So,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==So&&(t.usage=this.usage),t}};var Ps=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ls=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ue=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ih=0,Ce=new re,Mr=new Ee,Xn=new L,we=new Ln,vi=new Ln,he=new L,rn=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wc(t)?Ls:Ps)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return Mr.lookAt(t),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(we.min,vi.min),we.expandByPoint(he),he.addVectors(we.max,vi.max),we.expandByPoint(he)):(we.expandByPoint(vi.min),we.expandByPoint(vi.max))}we.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)he.fromBufferAttribute(a,l),c&&(Xn.fromBufferAttribute(t,l),he.add(Xn)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new L,h[b]=new L;let u=new L,f=new L,m=new L,g=new ht,_=new ht,p=new ht,d=new L,E=new L;function v(b,O,Q){u.fromArray(s,b*3),f.fromArray(s,O*3),m.fromArray(s,Q*3),g.fromArray(o,b*2),_.fromArray(o,O*2),p.fromArray(o,Q*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);let rt=1/(_.x*p.y-p.x*_.y);isFinite(rt)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(rt),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(rt),l[b].add(d),l[O].add(d),l[Q].add(d),h[b].add(E),h[O].add(E),h[Q].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let b=0,O=A.length;b<O;++b){let Q=A[b],rt=Q.start,P=Q.count;for(let N=rt,H=rt+P;N<H;N+=3)v(n[N+0],n[N+1],n[N+2])}let I=new L,R=new L,w=new L,X=new L;function S(b){w.fromArray(r,b*3),X.copy(w);let O=l[b];I.copy(O),I.sub(w.multiplyScalar(w.dot(O))).normalize(),R.crossVectors(X,O);let rt=R.dot(h[b])<0?-1:1;c[b*4]=I.x,c[b*4+1]=I.y,c[b*4+2]=I.z,c[b*4+3]=rt}for(let b=0,O=A.length;b<O;++b){let Q=A[b],rt=Q.start,P=Q.count;for(let N=rt,H=rt+P;N<H;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[m++]}return new be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oo=new re,bn=new Hr,es=new Ci,Fo=new L,qn=new L,Yn=new L,Zn=new L,Sr=new L,ns=new L,is=new ht,ss=new ht,rs=new ht,Bo=new L,zo=new L,Vo=new L,as=new L,os=new L,Ie=class extends Ee{constructor(t=new rn,e=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ns.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Sr.fromBufferAttribute(u,t),o?ns.addScaledVector(Sr,h):ns.addScaledVector(Sr.sub(e),h))}e.add(ns)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),bn.copy(t.ray).recast(t.near),!(es.containsPoint(bn.origin)===!1&&(bn.intersectSphere(es,Fo)===null||bn.origin.distanceToSquared(Fo)>(t.far-t.near)**2))&&(Oo.copy(r).invert(),bn.copy(t.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,I=v;A<I;A+=3){let R=a.getX(A),w=a.getX(A+1),X=a.getX(A+2);s=cs(this,d,t,n,l,h,u,R,w,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let E=a.getX(p),v=a.getX(p+1),A=a.getX(p+2);s=cs(this,o,t,n,l,h,u,E,v,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,I=v;A<I;A+=3){let R=A,w=A+1,X=A+2;s=cs(this,d,t,n,l,h,u,R,w,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let E=p,v=p+1,A=p+2;s=cs(this,o,t,n,l,h,u,E,v,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function sh(i,t,e,n,s,r,o,a){let c;if(t.side===Se?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xe,a),c===null)return null;os.copy(a),os.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(os);return l<e.near||l>e.far?null:{distance:l,point:os.clone(),object:i}}function cs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,qn),i.getVertexPosition(c,Yn),i.getVertexPosition(l,Zn);let h=sh(i,t,e,n,qn,Yn,Zn,as);if(h){s&&(is.fromBufferAttribute(s,a),ss.fromBufferAttribute(s,c),rs.fromBufferAttribute(s,l),h.uv=Qn.getInterpolation(as,qn,Yn,Zn,is,ss,rs,new ht)),r&&(is.fromBufferAttribute(r,a),ss.fromBufferAttribute(r,c),rs.fromBufferAttribute(r,l),h.uv1=Qn.getInterpolation(as,qn,Yn,Zn,is,ss,rs,new ht),h.uv2=h.uv1),o&&(Bo.fromBufferAttribute(o,a),zo.fromBufferAttribute(o,c),Vo.fromBufferAttribute(o,l),h.normal=Qn.getInterpolation(as,qn,Yn,Zn,Bo,zo,Vo,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Qn.getNormal(qn,Yn,Zn,u.normal),h.face=u}return h}var Pi=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(_,p,d,E,v,A,I,R,w,X,S){let b=A/w,O=I/X,Q=A/2,rt=I/2,P=R/2,N=w+1,H=X+1,J=0,Y=0,G=new L;for(let $=0;$<H;$++){let j=$*O-rt;for(let ut=0;ut<N;ut++){let k=ut*b-Q;G[_]=k*E,G[p]=j*v,G[d]=P,l.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[d]=R>0?1:-1,h.push(G.x,G.y,G.z),u.push(ut/w),u.push(1-$/X),J+=1}}for(let $=0;$<X;$++)for(let j=0;j<w;j++){let ut=f+j+N*$,k=f+j+N*($+1),F=f+(j+1)+N*($+1),Z=f+(j+1)+N*$;c.push(ut,k,Z),c.push(k,F,Z),Y+=6}a.addGroup(m,Y,S),m+=Y,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ci(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xe(i){let t={};for(let e=0;e<i.length;e++){let n=ci(i[e]);for(let s in n)t[s]=n[s]}return t}function rh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cc(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}var ah={clone:ci,merge:xe},oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ci(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Is=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ye=class extends Is{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Jn=-90,$n=1,Gr=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(Jn,$n,t,e);s.layers=this.layers,this.add(s);let r=new ye(Jn,$n,t,e);r.layers=this.layers,this.add(r);let o=new ye(Jn,$n,t,e);o.layers=this.layers,this.add(o);let a=new ye(Jn,$n,t,e);a.layers=this.layers,this.add(a);let c=new ye(Jn,$n,t,e);c.layers=this.layers,this.add(c);let l=new ye(Jn,$n,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Us=class extends De{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ri,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wr=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Pn?se:Le),this.texture=new Us(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pi(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:pn});r.uniforms.tEquirect.value=e;let o=new Ie(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Pe),new Gr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},br=new L,lh=new L,hh=new kt,je=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=br.subVectors(n,e).cross(lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hh.getNormalMatrix(t),s=this.coplanarPoint(br).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},En=new Ci,ls=new L,Li=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,o=new je){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],E=s[13],v=s[14],A=s[15];if(n[0].setComponents(c-r,f-l,p-m,A-d).normalize(),n[1].setComponents(c+r,f+l,p+m,A+d).normalize(),n[2].setComponents(c+o,f+h,p+g,A+E).normalize(),n[3].setComponents(c-o,f-h,p-g,A-E).normalize(),n[4].setComponents(c-a,f-u,p-_,A-v).normalize(),e===tn)n[5].setComponents(c+a,f+u,p+_,A+v).normalize();else if(e===Ss)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(t){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(t.matrixWorld),this.intersectsSphere(En)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ls.x=s.normal.x>0?t.max.x:t.min.x,ls.y=s.normal.y>0?t.max.y:t.min.y,ls.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uh(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let d=g[_];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Xr=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){let E=d*f-o;for(let v=0;v<l;v++){let A=v*u-r;g.push(A,-E,0),_.push(0,0,1),p.push(v/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){let v=E+l*d,A=E+l*(d+1),I=E+1+l*(d+1),R=E+1+l*d;m.push(v,A,R),m.push(A,I,R)}this.setIndex(m),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Th=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ru=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Su=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Au=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,td=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ad=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ed=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ud=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:dh,alphahash_pars_fragment:fh,alphamap_fragment:ph,alphamap_pars_fragment:mh,alphatest_fragment:gh,alphatest_pars_fragment:_h,aomap_fragment:xh,aomap_pars_fragment:vh,batching_pars_vertex:yh,batching_vertex:Mh,begin_vertex:Sh,beginnormal_vertex:bh,bsdfs:Eh,iridescence_fragment:Ah,bumpmap_pars_fragment:Th,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ch,clipping_planes_vertex:Ph,color_fragment:Lh,color_pars_fragment:Ih,color_pars_vertex:Uh,color_vertex:Dh,common:Nh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Bh,displacementmap_vertex:zh,emissivemap_fragment:Vh,emissivemap_pars_fragment:kh,colorspace_fragment:Hh,colorspace_pars_fragment:Gh,envmap_fragment:Wh,envmap_common_pars_fragment:Xh,envmap_pars_fragment:qh,envmap_pars_vertex:Yh,envmap_physical_pars_fragment:ru,envmap_vertex:Zh,fog_vertex:Jh,fog_pars_vertex:$h,fog_fragment:Kh,fog_pars_fragment:Qh,gradientmap_pars_fragment:jh,lightmap_fragment:tu,lightmap_pars_fragment:eu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:su,lights_toon_fragment:au,lights_toon_pars_fragment:ou,lights_phong_fragment:cu,lights_phong_pars_fragment:lu,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:du,lights_fragment_maps:fu,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:xu,map_fragment:vu,map_pars_fragment:yu,map_particle_fragment:Mu,map_particle_pars_fragment:Su,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Eu,morphcolor_vertex:Au,morphnormal_vertex:Tu,morphtarget_pars_vertex:wu,morphtarget_vertex:Ru,normal_fragment_begin:Cu,normal_fragment_maps:Pu,normal_pars_fragment:Lu,normal_pars_vertex:Iu,normal_vertex:Uu,normalmap_pars_fragment:Du,clearcoat_normal_fragment_begin:Nu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Fu,iridescence_pars_fragment:Bu,opaque_fragment:zu,packing:Vu,premultiplied_alpha_fragment:ku,project_vertex:Hu,dithering_fragment:Gu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ju,shadowmask_pars_fragment:$u,skinbase_vertex:Ku,skinning_pars_vertex:Qu,skinning_vertex:ju,skinnormal_vertex:td,specularmap_fragment:ed,specularmap_pars_fragment:nd,tonemapping_fragment:id,tonemapping_pars_fragment:sd,transmission_fragment:rd,transmission_pars_fragment:ad,uv_pars_fragment:od,uv_pars_vertex:cd,uv_vertex:ld,worldpos_vertex:hd,background_vert:ud,background_frag:dd,backgroundCube_vert:fd,backgroundCube_frag:pd,cube_vert:md,cube_frag:gd,depth_vert:_d,depth_frag:xd,distanceRGBA_vert:vd,distanceRGBA_frag:yd,equirect_vert:Md,equirect_frag:Sd,linedashed_vert:bd,linedashed_frag:Ed,meshbasic_vert:Ad,meshbasic_frag:Td,meshlambert_vert:wd,meshlambert_frag:Rd,meshmatcap_vert:Cd,meshmatcap_frag:Pd,meshnormal_vert:Ld,meshnormal_frag:Id,meshphong_vert:Ud,meshphong_frag:Dd,meshphysical_vert:Nd,meshphysical_frag:Od,meshtoon_vert:Fd,meshtoon_frag:Bd,points_vert:zd,points_frag:Vd,shadow_vert:kd,shadow_frag:Hd,sprite_vert:Gd,sprite_frag:Wd},lt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},We={basic:{uniforms:xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:xe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:xe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:xe([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:xe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:xe([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:xe([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:xe([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:xe([lt.lights,lt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};We.physical={uniforms:xe([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var hs={r:0,b:0,g:0};function Xd(i,t,e,n,s,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,u=null,f=0,m=null;function g(p,d){let E=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ws)?(h===void 0&&(h=new Ie(new Pi(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ci(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=qt.getTransfer(v.colorSpace)!==$t,(u!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ie(new Xr(2,2),new an({name:"BackgroundMaterial",uniforms:ci(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==$t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,d){p.getRGB(hs,Cc(i)),n.buffers.color.setClear(hs.r,hs.g,hs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function qd(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function u(P,N,H,J,Y){let G=!1;if(o){let $=_(J,H,N);l!==$&&(l=$,m(l.object)),G=d(P,J,H,Y),G&&E(P,J,H,Y)}else{let $=N.wireframe===!0;(l.geometry!==J.id||l.program!==H.id||l.wireframe!==$)&&(l.geometry=J.id,l.program=H.id,l.wireframe=$,G=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,X(P,N,H,J),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,N,H){let J=H.wireframe===!0,Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let G=Y[N.id];G===void 0&&(G={},Y[N.id]=G);let $=G[J];return $===void 0&&($=p(f()),G[J]=$),$}function p(P){let N=[],H=[],J=[];for(let Y=0;Y<s;Y++)N[Y]=0,H[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:J,object:P,attributes:{},index:null}}function d(P,N,H,J){let Y=l.attributes,G=N.attributes,$=0,j=H.getAttributes();for(let ut in j)if(j[ut].location>=0){let F=Y[ut],Z=G[ut];if(Z===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),F===void 0||F.attribute!==Z||Z&&F.data!==Z.data)return!0;$++}return l.attributesNum!==$||l.index!==J}function E(P,N,H,J){let Y={},G=N.attributes,$=0,j=H.getAttributes();for(let ut in j)if(j[ut].location>=0){let F=G[ut];F===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(F=P.instanceColor));let Z={};Z.attribute=F,F&&F.data&&(Z.data=F.data),Y[ut]=Z,$++}l.attributes=Y,l.attributesNum=$,l.index=J}function v(){let P=l.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function A(P){I(P,0)}function I(P,N){let H=l.newAttributes,J=l.enabledAttributes,Y=l.attributeDivisors;H[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),Y[P]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),Y[P]=N)}function R(){let P=l.newAttributes,N=l.enabledAttributes;for(let H=0,J=N.length;H<J;H++)N[H]!==P[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function w(P,N,H,J,Y,G,$){$===!0?i.vertexAttribIPointer(P,N,H,Y,G):i.vertexAttribPointer(P,N,H,J,Y,G)}function X(P,N,H,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let Y=J.attributes,G=H.getAttributes(),$=N.defaultAttributeValues;for(let j in G){let ut=G[j];if(ut.location>=0){let k=Y[j];if(k===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let F=k.normalized,Z=k.itemSize,it=e.get(k);if(it===void 0)continue;let at=it.buffer,yt=it.type,At=it.bytesPerElement,_t=n.isWebGL2===!0&&(yt===i.INT||yt===i.UNSIGNED_INT||k.gpuType===_c);if(k.isInterleavedBufferAttribute){let bt=k.data,T=bt.stride,ot=k.offset;if(bt.isInstancedInterleavedBuffer){for(let W=0;W<ut.locationSize;W++)I(ut.location+W,bt.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let W=0;W<ut.locationSize;W++)A(ut.location+W);i.bindBuffer(i.ARRAY_BUFFER,at);for(let W=0;W<ut.locationSize;W++)w(ut.location+W,Z/ut.locationSize,yt,F,T*At,(ot+Z/ut.locationSize*W)*At,_t)}else{if(k.isInstancedBufferAttribute){for(let bt=0;bt<ut.locationSize;bt++)I(ut.location+bt,k.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let bt=0;bt<ut.locationSize;bt++)A(ut.location+bt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let bt=0;bt<ut.locationSize;bt++)w(ut.location+bt,Z/ut.locationSize,yt,F,Z*At,Z/ut.locationSize*bt*At,_t)}}else if($!==void 0){let F=$[j];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(ut.location,F);break;case 3:i.vertexAttrib3fv(ut.location,F);break;case 4:i.vertexAttrib4fv(ut.location,F);break;default:i.vertexAttrib1fv(ut.location,F)}}}}R()}function S(){Q();for(let P in a){let N=a[P];for(let H in N){let J=N[H];for(let Y in J)g(J[Y].object),delete J[Y];delete N[H]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;let N=a[P.id];for(let H in N){let J=N[H];for(let Y in J)g(J[Y].object),delete J[Y];delete N[H]}delete a[P.id]}function O(P){for(let N in a){let H=a[N];if(H[P.id]===void 0)continue;let J=H[P.id];for(let Y in J)g(J[Y].object),delete J[Y];delete H[P.id]}}function Q(){rt(),h=!0,l!==c&&(l=c,m(l.object))}function rt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:rt,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:A,disableUnusedAttributes:R}}function Yd(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Zd(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,A=o||t.has("OES_texture_float"),I=v&&A,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:R}}function Jd(i){let t=this,e=null,n=0,s=!1,r=!1,o=new je,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let E=r?0:n,v=E*4,A=d.clippingState||null;c.value=A,A=h(g,f,v,m);for(let I=0;I!==v;++I)A[I]=e[I];d.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let d=m+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,A=m;v!==_;++v,A+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(p,A),p[A+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function $d(i){let t=new WeakMap;function e(o,a){return a===Ai?o.mapping=ri:a===Nr&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ai||a===Nr)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wr(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ds=class extends Is{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jn=4,ko=[.125,.215,.35,.446,.526,.582],wn=20,Er=new Ds,Ho=new Gt,Ar=null,Tr=0,wr=0,An=(1+Math.sqrt(5))/2,Kn=1/An,Go=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,An,Kn),new L(0,An,-Kn),new L(Kn,0,An),new L(-Kn,0,An),new L(An,Kn,0),new L(-An,Kn,0)],li=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ar=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ar,Tr,wr),t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ar=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Ri,format:ke,colorSpace:nn,depthBuffer:!1},s=Wo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(r)),this._blurMaterial=Qd(r,t,e)}return s}_compileMaterial(t){let e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,n,s){let a=new ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ho),h.toneMapping=mn,h.autoClear=!1;let m=new Cs({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),g=new Ie(new Pi,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ho),_=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let v=this._cubeSize;us(s,E*v,d>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ri||t.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Er)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Go[(s-1)%Go.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*wn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):wn;p>wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wn}`);let d=[],E=0;for(let w=0;w<wn;++w){let X=w/_,S=Math.exp(-X*X/2);d.push(S),w===0?E+=S:w<p&&(E+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let A=this._sizeLods[s],I=3*A*(s>v-jn?s-v+jn:0),R=4*(this._cubeSize-A);us(e,I,R,3*A,2*A),c.setRenderTarget(e),c.render(u,Er)}};function Kd(i){let t=[],e=[],n=[],s=i,r=i-jn+1+ko.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-jn?c=ko[o-i+jn-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,E=new Float32Array(_*g*m),v=new Float32Array(p*g*m),A=new Float32Array(d*g*m);for(let R=0;R<m;R++){let w=R%3*2/3-1,X=R>2?0:-1,S=[w,X,0,w+2/3,X,0,w+2/3,X+1,0,w,X,0,w+2/3,X+1,0,w,X+1,0];E.set(S,_*g*R),v.set(f,p*g*R);let b=[R,R,R,R,R,R];A.set(b,d*g*R)}let I=new rn;I.setAttribute("position",new be(E,_)),I.setAttribute("uv",new be(v,p)),I.setAttribute("faceIndex",new be(A,d)),t.push(I),s>jn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wo(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qd(i,t,e){let n=new Float32Array(wn),s=new L(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Xo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function qo(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ai||c===Nr,h=c===ri||c===ai;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new li(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new li(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ef(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let v=0,A=E.length;v<A;v+=3){let I=E[v+0],R=E[v+1],w=E[v+2];f.push(I,R,R,w,w,I)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,A=E.length/3-1;v<A;v+=3){let I=v+0,R=v+1,w=v+2;f.push(I,R,R,w,w,I)}}else return;let p=new(wc(f)?Ls:Ps)(f,1);p.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function nf(i,t,e,n){let s=n.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*c),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*c,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let d=0;for(let E=0;E<_;E++)d+=g[E];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function sf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rf(i,t){return i[0]-t[0]}function af(i,t){return Math.abs(t[1])-Math.abs(i[1])}function of(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ue,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],X=0;E===!0&&(X=1),v===!0&&(X=2),A===!0&&(X=3);let S=h.attributes.position.count*X,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let O=new Float32Array(S*b*4*g),Q=new Ts(O,S,b,g);Q.type=fn,Q.needsUpdate=!0;let rt=X*4;for(let N=0;N<g;N++){let H=I[N],J=R[N],Y=w[N],G=S*b*4*N;for(let $=0;$<H.count;$++){let j=$*rt;E===!0&&(o.fromBufferAttribute(H,$),O[G+j+0]=o.x,O[G+j+1]=o.y,O[G+j+2]=o.z,O[G+j+3]=0),v===!0&&(o.fromBufferAttribute(J,$),O[G+j+4]=o.x,O[G+j+5]=o.y,O[G+j+6]=o.z,O[G+j+7]=0),A===!0&&(o.fromBufferAttribute(Y,$),O[G+j+8]=o.x,O[G+j+9]=o.y,O[G+j+10]=o.z,O[G+j+11]=Y.itemSize===4?o.w:1)}}_={count:g,texture:Q,size:new ht(S,b)},r.set(h,_),h.addEventListener("dispose",P)}let p=0;for(let E=0;E<f.length;E++)p+=f[E];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){let A=g[v];A[0]=v,A[1]=f[v]}g.sort(af);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(rf);let _=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let A=a[v],I=A[0],R=A[1];I!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+v)!==_[I]&&h.setAttribute("morphTarget"+v,_[I]),p&&h.getAttribute("morphNormal"+v)!==p[I]&&h.setAttribute("morphNormal"+v,p[I]),s[v]=R,d+=R):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function cf(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ns=class extends De{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Cn,h!==Cn&&h!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cn&&(n=dn),n===void 0&&h===oi&&(n=Rn),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ve,this.minFilter=c!==void 0?c:ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lc=new De,Ic=new Ns(1,1);Ic.compareFunction=Tc;var Uc=new Ts,Dc=new kr,Nc=new Us,Yo=[],Zo=[],Jo=new Float32Array(16),$o=new Float32Array(9),Ko=new Float32Array(4);function fi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Yo[s];if(r===void 0&&(r=new Float32Array(s),Yo[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qs(i,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function ff(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Ko.set(n),i.uniformMatrix2fv(this.addr,!1,Ko),oe(e,n)}}function pf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;$o.set(n),i.uniformMatrix3fv(this.addr,!1,$o),oe(e,n)}}function mf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Jo.set(n),i.uniformMatrix4fv(this.addr,!1,Jo),oe(e,n)}}function gf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function vf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function yf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function Sf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function bf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function Ef(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ic:Lc;e.setTexture2D(t||r,s)}function Af(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Dc,s)}function Tf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nc,s)}function wf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uc,s)}function Rf(i){switch(i){case 5126:return lf;case 35664:return hf;case 35665:return uf;case 35666:return df;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return gf;case 35667:case 35671:return _f;case 35668:case 35672:return xf;case 35669:case 35673:return vf;case 5125:return yf;case 36294:return Mf;case 36295:return Sf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return wf}}function Cf(i,t){i.uniform1fv(this.addr,t)}function Pf(i,t){let e=fi(t,this.size,2);i.uniform2fv(this.addr,e)}function Lf(i,t){let e=fi(t,this.size,3);i.uniform3fv(this.addr,e)}function If(i,t){let e=fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Uf(i,t){let e=fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Df(i,t){let e=fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nf(i,t){let e=fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Of(i,t){i.uniform1iv(this.addr,t)}function Ff(i,t){i.uniform2iv(this.addr,t)}function Bf(i,t){i.uniform3iv(this.addr,t)}function zf(i,t){i.uniform4iv(this.addr,t)}function Vf(i,t){i.uniform1uiv(this.addr,t)}function kf(i,t){i.uniform2uiv(this.addr,t)}function Hf(i,t){i.uniform3uiv(this.addr,t)}function Gf(i,t){i.uniform4uiv(this.addr,t)}function Wf(i,t,e){let n=this.cache,s=t.length,r=qs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lc,r[o])}function Xf(i,t,e){let n=this.cache,s=t.length,r=qs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Dc,r[o])}function qf(i,t,e){let n=this.cache,s=t.length,r=qs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nc,r[o])}function Yf(i,t,e){let n=this.cache,s=t.length,r=qs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uc,r[o])}function Zf(i){switch(i){case 5126:return Cf;case 35664:return Pf;case 35665:return Lf;case 35666:return If;case 35674:return Uf;case 35675:return Df;case 35676:return Nf;case 5124:case 35670:return Of;case 35667:case 35671:return Ff;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return Vf;case 36294:return kf;case 36295:return Hf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Yf}}var qr=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rf(e.type)}},Yr=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zf(e.type)}},Zr=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Rr=/(\w+)(\])?(\[|\.)?/g;function Qo(i,t){i.seq.push(t),i.map[t.id]=t}function Jf(i,t,e){let n=i.name,s=n.length;for(Rr.lastIndex=0;;){let r=Rr.exec(n),o=Rr.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qo(e,l===void 0?new qr(a,i,t):new Yr(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Zr(a),Qo(e,u)),e=u}}}var si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jf(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function jo(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $f=37297,Kf=0;function Qf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function jf(i){let t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i),n;switch(t===e?n="":t===Ms&&e===ys?n="LinearDisplayP3ToLinearSRGB":t===ys&&e===Ms&&(n="LinearSRGBToLinearDisplayP3"),i){case nn:case Xs:return[n,"LinearTransferOETF"];case se:case Ra:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function tc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qf(i.getShaderSource(t),o)}else return s}function tp(i,t){let e=jf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ep(i,t){let e;switch(t){case vl:e="Linear";break;case yl:e="Reinhard";break;case Ml:e="OptimizedCineon";break;case Ta:e="ACESFilmic";break;case bl:e="AgX";break;case Sl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function np(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ti).join(`
`)}function ip(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ti).join(`
`)}function sp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ti(i){return i!==""}function ec(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(i){return i.replace(ap,cp)}var op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cp(i,t){let e=Ft[t];if(e===void 0){let n=op.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jr(e)}var lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(lp,hp)}function hp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function up(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qe&&(t="SHADOWMAP_TYPE_VSM"),t}function dp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case ai:t="ENVMAP_TYPE_CUBE";break;case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:t="ENVMAP_MODE_REFRACTION";break}return t}function pp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case _l:t="ENVMAP_BLENDING_MIX";break;case xl:t="ENVMAP_BLENDING_ADD";break}return t}function mp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gp(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=up(e),l=dp(e),h=fp(e),u=pp(e),f=mp(e),m=e.isWebGL2?"":np(e),g=ip(e),_=sp(r),p=s.createProgram(),d,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ti).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ti).join(`
`),E.length>0&&(E+=`
`)):(d=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ti).join(`
`),E=[m,sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==mn?ep("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,tp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ti).join(`
`)),o=Jr(o),o=ec(o,e),o=nc(o,e),a=Jr(a),a=ec(a,e),a=nc(a,e),o=ic(o),a=ic(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let A=v+d+o,I=v+E+a,R=jo(s,s.VERTEX_SHADER,A),w=jo(s,s.FRAGMENT_SHADER,I);s.attachShader(p,R),s.attachShader(p,w),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function X(Q){if(i.debug.checkShaderErrors){let rt=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(R).trim(),N=s.getShaderInfoLog(w).trim(),H=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,w);else{let Y=tc(s,R,"vertex"),G=tc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+Y+`
`+G)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(P===""||N==="")&&(J=!1);J&&(Q.diagnostics={runnable:H,programLog:rt,vertexShader:{log:P,prefix:d},fragmentShader:{log:N,prefix:E}})}s.deleteShader(R),s.deleteShader(w),S=new si(s,p),b=rp(s,p)}let S;this.getUniforms=function(){return S===void 0&&X(this),S};let b;this.getAttributes=function(){return b===void 0&&X(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(p,$f)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}var _p=0,$r=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kr(t),e.set(t,n)),n}},Kr=class{constructor(t){this.id=_p++,this.code=t,this.usedTimes=0}};function xp(i,t,e,n,s,r,o){let a=new Rs,c=new $r,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,b,O,Q,rt){let P=Q.fog,N=rt.geometry,H=S.isMeshStandardMaterial?Q.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),Y=J&&J.mapping===Ws?J.image.height:null,G=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=$!==void 0?$.length:0,ut=0;N.morphAttributes.position!==void 0&&(ut=1),N.morphAttributes.normal!==void 0&&(ut=2),N.morphAttributes.color!==void 0&&(ut=3);let k,F,Z,it;if(G){let ge=We[G];k=ge.vertexShader,F=ge.fragmentShader}else k=S.vertexShader,F=S.fragmentShader,c.update(S),Z=c.getVertexShaderID(S),it=c.getFragmentShaderID(S);let at=i.getRenderTarget(),yt=rt.isInstancedMesh===!0,At=rt.isBatchedMesh===!0,_t=!!S.map,bt=!!S.matcap,T=!!J,ot=!!S.aoMap,W=!!S.lightMap,st=!!S.bumpMap,q=!!S.normalMap,Et=!!S.displacementMap,mt=!!S.emissiveMap,y=!!S.metalnessMap,x=!!S.roughnessMap,D=S.anisotropy>0,nt=S.clearcoat>0,tt=S.iridescence>0,K=S.sheen>0,Mt=S.transmission>0,dt=D&&!!S.anisotropyMap,xt=nt&&!!S.clearcoatMap,wt=nt&&!!S.clearcoatNormalMap,Dt=nt&&!!S.clearcoatRoughnessMap,et=tt&&!!S.iridescenceMap,Wt=tt&&!!S.iridescenceThicknessMap,Ht=K&&!!S.sheenColorMap,It=K&&!!S.sheenRoughnessMap,Tt=!!S.specularMap,vt=!!S.specularColorMap,Ot=!!S.specularIntensityMap,Xt=Mt&&!!S.transmissionMap,te=Mt&&!!S.thicknessMap,zt=!!S.gradientMap,ct=!!S.alphaMap,C=S.alphaTest>0,ft=!!S.alphaHash,pt=!!S.extensions,Pt=!!N.attributes.uv1,Rt=!!N.attributes.uv2,Yt=!!N.attributes.uv3,Zt=mn;return S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Zt=i.toneMapping),{isWebGL2:h,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:F,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:it,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:At,instancing:yt,instancingColor:yt&&rt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:nn,map:_t,matcap:bt,envMap:T,envMapMode:T&&J.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:W,bumpMap:st,normalMap:q,displacementMap:f&&Et,emissiveMap:mt,normalMapObjectSpace:q&&S.normalMapType===Nl,normalMapTangentSpace:q&&S.normalMapType===Ac,metalnessMap:y,roughnessMap:x,anisotropy:D,anisotropyMap:dt,clearcoat:nt,clearcoatMap:xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Dt,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:Wt,sheen:K,sheenColorMap:Ht,sheenRoughnessMap:It,specularMap:Tt,specularColorMap:vt,specularIntensityMap:Ot,transmission:Mt,transmissionMap:Xt,thicknessMap:te,gradientMap:zt,opaque:S.transparent===!1&&S.blending===ni,alphaMap:ct,alphaTest:C,alphaHash:ft,combine:S.combine,mapUv:_t&&_(S.map.channel),aoMapUv:ot&&_(S.aoMap.channel),lightMapUv:W&&_(S.lightMap.channel),bumpMapUv:st&&_(S.bumpMap.channel),normalMapUv:q&&_(S.normalMap.channel),displacementMapUv:Et&&_(S.displacementMap.channel),emissiveMapUv:mt&&_(S.emissiveMap.channel),metalnessMapUv:y&&_(S.metalnessMap.channel),roughnessMapUv:x&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:xt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(S.sheenRoughnessMap.channel),specularMapUv:Tt&&_(S.specularMap.channel),specularColorMapUv:vt&&_(S.specularColorMap.channel),specularIntensityMapUv:Ot&&_(S.specularIntensityMap.channel),transmissionMapUv:Xt&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:ct&&_(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(q||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Rt,vertexUv3s:Yt,pointsUvs:rt.isPoints===!0&&!!N.attributes.uv&&(_t||ct),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:_t&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===$t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ze,flipSided:S.side===Se,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pt&&S.extensions.derivatives===!0,extensionFragDepth:pt&&S.extensions.fragDepth===!0,extensionDrawBuffers:pt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)b.push(O),b.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(E(b,S),v(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function A(S){let b=g[S.type],O;if(b){let Q=We[b];O=ah.clone(Q.uniforms)}else O=S.uniforms;return O}function I(S,b){let O;for(let Q=0,rt=l.length;Q<rt;Q++){let P=l[Q];if(P.cacheKey===b){O=P,++O.usedTimes;break}}return O===void 0&&(O=new gp(i,b,S,r),l.push(O)),O}function R(S){if(--S.usedTimes===0){let b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),S.destroy()}}function w(S){c.remove(S)}function X(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:I,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:X}}function vp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ac(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,m,g,_,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function a(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function c(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||yp),n.length>1&&n.sort(f||rc),s.length>1&&s.sort(f||rc)}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Mp(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ac,i.set(n,[o])):s>=r.length?(o=new ac,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function bp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ep=0;function Ap(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tp(i,t){let e=new Sp,n=bp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new re,a=new re;function c(h,u){let f=0,m=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let _=0,p=0,d=0,E=0,v=0,A=0,I=0,R=0,w=0,X=0,S=0;h.sort(Ap);let b=u===!0?Math.PI:1;for(let Q=0,rt=h.length;Q<rt;Q++){let P=h[Q],N=P.color,H=P.intensity,J=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=N.r*H*b,m+=N.g*H*b,g+=N.b*H*b;else if(P.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(P.sh.coefficients[G],H);S++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){let $=P.shadow,j=n.get(P);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,s.directionalShadow[_]=j,s.directionalShadowMap[_]=Y,s.directionalShadowMatrix[_]=P.shadow.matrix,A++}s.directional[_]=G,_++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(H*b),G.distance=J,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,s.spot[d]=G;let $=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,$.updateMatrices(P),P.castShadow&&X++),s.spotLightMatrix[d]=$.matrix,P.castShadow){let j=n.get(P);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,s.spotShadow[d]=j,s.spotShadowMap[d]=Y,R++}d++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(N).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),s.rectArea[E]=G,E++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*b),G.distance=P.distance,G.decay=P.decay,P.castShadow){let $=P.shadow,j=n.get(P);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,s.pointShadow[p]=j,s.pointShadowMap[p]=Y,s.pointShadowMatrix[p]=P.shadow.matrix,I++}s.point[p]=G,p++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H*b),G.groundColor.copy(P.groundColor).multiplyScalar(H*b),s.hemi[v]=G,v++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==_||O.pointLength!==p||O.spotLength!==d||O.rectAreaLength!==E||O.hemiLength!==v||O.numDirectionalShadows!==A||O.numPointShadows!==I||O.numSpotShadows!==R||O.numSpotMaps!==w||O.numLightProbes!==S)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=E,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+w-X,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=S,O.directionalLength=_,O.pointLength=p,O.spotLength=d,O.rectAreaLength=E,O.hemiLength=v,O.numDirectionalShadows=A,O.numPointShadows=I,O.numSpotShadows=R,O.numSpotMaps=w,O.numLightProbes=S,s.version=Ep++)}function l(h,u){let f=0,m=0,g=0,_=0,p=0,d=u.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){let A=h[E];if(A.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(A.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),g++}else if(A.isRectAreaLight){let I=s.rectArea[_];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),a.identity(),o.copy(A.matrixWorld),o.premultiply(d),a.extractRotation(o),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),m++}else if(A.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:s}}function oc(i,t){let e=new Tp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function wp(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new oc(i,t),e.set(r,[c])):o>=a.length?(c=new oc(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Qr=class extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jr=class extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pp(i,t,e){let n=new Li,s=new ht,r=new ht,o=new ue,a=new Qr({depthPacking:Dl}),c=new jr,l={},h=e.maxTextureSize,u={[Xe]:Se,[Se]:Xe,[ze]:ze},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Rp,fragmentShader:Cp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ie(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let d=this.type;this.render=function(R,w,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(pn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let rt=d!==Qe&&this.type===Qe,P=d===Qe&&this.type!==Qe;for(let N=0,H=R.length;N<H;N++){let J=R[N],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let G=Y.getFrameExtents();if(s.multiply(G),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,Y.mapSize.y=r.y)),Y.map===null||rt===!0||P===!0){let j=this.type!==Qe?{minFilter:ve,magFilter:ve}:{};Y.map!==null&&Y.map.dispose(),Y.map=new sn(s.x,s.y,j),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let $=Y.getViewportCount();for(let j=0;j<$;j++){let ut=Y.getViewport(j);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),Q.viewport(o),Y.updateMatrices(J,j),n=Y.getFrustum(),A(w,X,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===Qe&&E(Y,X),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(S,b,O)};function E(R,w){let X=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new sn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,X,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,X,m,_,null)}function v(R,w,X,S){let b=null,O=X.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)b=O;else if(b=X.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let Q=b.uuid,rt=w.uuid,P=l[Q];P===void 0&&(P={},l[Q]=P);let N=P[rt];N===void 0&&(N=b.clone(),P[rt]=N,w.addEventListener("dispose",I)),b=N}if(b.visible=w.visible,b.wireframe=w.wireframe,S===Qe?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Q=i.properties.get(b);Q.light=X}return b}function A(R,w,X,S,b){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Qe)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld);let rt=t.update(R),P=R.material;if(Array.isArray(P)){let N=rt.groups;for(let H=0,J=N.length;H<J;H++){let Y=N[H],G=P[Y.materialIndex];if(G&&G.visible){let $=v(R,G,S,b);R.onBeforeShadow(i,R,w,X,rt,$,Y),i.renderBufferDirect(X,null,rt,$,R,Y),R.onAfterShadow(i,R,w,X,rt,$,Y)}}}else if(P.visible){let N=v(R,P,S,b);R.onBeforeShadow(i,R,w,X,rt,N,null),i.renderBufferDirect(X,null,rt,N,R,null),R.onAfterShadow(i,R,w,X,rt,N,null)}}let Q=R.children;for(let rt=0,P=Q.length;rt<P;rt++)A(Q[rt],w,X,S,b)}function I(R){R.target.removeEventListener("dispose",I);for(let X in l){let S=l[X],b=R.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function Lp(i,t,e){let n=e.isWebGL2;function s(){let C=!1,ft=new ue,pt=null,Pt=new ue(0,0,0,0);return{setMask:function(Rt){pt!==Rt&&!C&&(i.colorMask(Rt,Rt,Rt,Rt),pt=Rt)},setLocked:function(Rt){C=Rt},setClear:function(Rt,Yt,Zt,ce,ge){ge===!0&&(Rt*=ce,Yt*=ce,Zt*=ce),ft.set(Rt,Yt,Zt,ce),Pt.equals(ft)===!1&&(i.clearColor(Rt,Yt,Zt,ce),Pt.copy(ft))},reset:function(){C=!1,pt=null,Pt.set(-1,0,0,0)}}}function r(){let C=!1,ft=null,pt=null,Pt=null;return{setTest:function(Rt){Rt?At(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(Rt){ft!==Rt&&!C&&(i.depthMask(Rt),ft=Rt)},setFunc:function(Rt){if(pt!==Rt){switch(Rt){case hl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case dl:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Rt}},setLocked:function(Rt){C=Rt},setClear:function(Rt){Pt!==Rt&&(i.clearDepth(Rt),Pt=Rt)},reset:function(){C=!1,ft=null,pt=null,Pt=null}}}function o(){let C=!1,ft=null,pt=null,Pt=null,Rt=null,Yt=null,Zt=null,ce=null,ge=null;return{setTest:function(Jt){C||(Jt?At(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Jt){ft!==Jt&&!C&&(i.stencilMask(Jt),ft=Jt)},setFunc:function(Jt,_e,Ge){(pt!==Jt||Pt!==_e||Rt!==Ge)&&(i.stencilFunc(Jt,_e,Ge),pt=Jt,Pt=_e,Rt=Ge)},setOp:function(Jt,_e,Ge){(Yt!==Jt||Zt!==_e||ce!==Ge)&&(i.stencilOp(Jt,_e,Ge),Yt=Jt,Zt=_e,ce=Ge)},setLocked:function(Jt){C=Jt},setClear:function(Jt){ge!==Jt&&(i.clearStencil(Jt),ge=Jt)},reset:function(){C=!1,ft=null,pt=null,Pt=null,Rt=null,Yt=null,Zt=null,ce=null,ge=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,v=null,A=null,I=null,R=null,w=null,X=null,S=new Gt(0,0,0),b=0,O=!1,Q=null,rt=null,P=null,N=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,G=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=G>=2);let j=null,ut={},k=i.getParameter(i.SCISSOR_BOX),F=i.getParameter(i.VIEWPORT),Z=new ue().fromArray(k),it=new ue().fromArray(F);function at(C,ft,pt,Pt){let Rt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(C,Yt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<pt;Zt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(ft+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Yt}let yt={};yt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),At(i.DEPTH_TEST),c.setFunc(gs),mt(!1),y(za),At(i.CULL_FACE),q(pn);function At(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function _t(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function bt(C,ft){return m[C]!==ft?(i.bindFramebuffer(C,ft),m[C]=ft,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ft),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function T(C,ft){let pt=_,Pt=!1;if(C)if(pt=g.get(ft),pt===void 0&&(pt=[],g.set(ft,pt)),C.isWebGLMultipleRenderTargets){let Rt=C.texture;if(pt.length!==Rt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,Zt=Rt.length;Yt<Zt;Yt++)pt[Yt]=i.COLOR_ATTACHMENT0+Yt;pt.length=Rt.length,Pt=!0}}else pt[0]!==i.COLOR_ATTACHMENT0&&(pt[0]=i.COLOR_ATTACHMENT0,Pt=!0);else pt[0]!==i.BACK&&(pt[0]=i.BACK,Pt=!0);Pt&&(e.isWebGL2?i.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function ot(C){return p!==C?(i.useProgram(C),p=C,!0):!1}let W={[Tn]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[$c]:i.FUNC_REVERSE_SUBTRACT};if(n)W[Ga]=i.MIN,W[Wa]=i.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(W[Ga]=C.MIN_EXT,W[Wa]=C.MAX_EXT)}let st={[Kc]:i.ZERO,[Qc]:i.ONE,[jc]:i.SRC_COLOR,[Ur]:i.SRC_ALPHA,[rl]:i.SRC_ALPHA_SATURATE,[il]:i.DST_COLOR,[el]:i.DST_ALPHA,[tl]:i.ONE_MINUS_SRC_COLOR,[Dr]:i.ONE_MINUS_SRC_ALPHA,[sl]:i.ONE_MINUS_DST_COLOR,[nl]:i.ONE_MINUS_DST_ALPHA,[al]:i.CONSTANT_COLOR,[ol]:i.ONE_MINUS_CONSTANT_COLOR,[cl]:i.CONSTANT_ALPHA,[ll]:i.ONE_MINUS_CONSTANT_ALPHA};function q(C,ft,pt,Pt,Rt,Yt,Zt,ce,ge,Jt){if(C===pn){d===!0&&(_t(i.BLEND),d=!1);return}if(d===!1&&(At(i.BLEND),d=!0),C!==Zc){if(C!==E||Jt!==O){if((v!==Tn||R!==Tn)&&(i.blendEquation(i.FUNC_ADD),v=Tn,R=Tn),Jt)switch(C){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,I=null,w=null,X=null,S.set(0,0,0),b=0,E=C,O=Jt}return}Rt=Rt||ft,Yt=Yt||pt,Zt=Zt||Pt,(ft!==v||Rt!==R)&&(i.blendEquationSeparate(W[ft],W[Rt]),v=ft,R=Rt),(pt!==A||Pt!==I||Yt!==w||Zt!==X)&&(i.blendFuncSeparate(st[pt],st[Pt],st[Yt],st[Zt]),A=pt,I=Pt,w=Yt,X=Zt),(ce.equals(S)===!1||ge!==b)&&(i.blendColor(ce.r,ce.g,ce.b,ge),S.copy(ce),b=ge),E=C,O=!1}function Et(C,ft){C.side===ze?_t(i.CULL_FACE):At(i.CULL_FACE);let pt=C.side===Se;ft&&(pt=!pt),mt(pt),C.blending===ni&&C.transparent===!1?q(pn):q(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let Pt=C.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),D(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(C){Q!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),Q=C)}function y(C){C!==Xc?(At(i.CULL_FACE),C!==rt&&(C===za?i.cullFace(i.BACK):C===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),rt=C}function x(C){C!==P&&(Y&&i.lineWidth(C),P=C)}function D(C,ft,pt){C?(At(i.POLYGON_OFFSET_FILL),(N!==ft||H!==pt)&&(i.polygonOffset(ft,pt),N=ft,H=pt)):_t(i.POLYGON_OFFSET_FILL)}function nt(C){C?At(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function tt(C){C===void 0&&(C=i.TEXTURE0+J-1),j!==C&&(i.activeTexture(C),j=C)}function K(C,ft,pt){pt===void 0&&(j===null?pt=i.TEXTURE0+J-1:pt=j);let Pt=ut[pt];Pt===void 0&&(Pt={type:void 0,texture:void 0},ut[pt]=Pt),(Pt.type!==C||Pt.texture!==ft)&&(j!==pt&&(i.activeTexture(pt),j=pt),i.bindTexture(C,ft||yt[C]),Pt.type=C,Pt.texture=ft)}function Mt(){let C=ut[j];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(C){Z.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function Xt(C){it.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),it.copy(C))}function te(C,ft){let pt=u.get(ft);pt===void 0&&(pt=new WeakMap,u.set(ft,pt));let Pt=pt.get(C);Pt===void 0&&(Pt=i.getUniformBlockIndex(ft,C.name),pt.set(C,Pt))}function zt(C,ft){let Pt=u.get(ft).get(C);h.get(ft)!==Pt&&(i.uniformBlockBinding(ft,Pt,C.__bindingPointIndex),h.set(ft,Pt))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},j=null,ut={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,v=null,A=null,I=null,R=null,w=null,X=null,S=new Gt(0,0,0),b=0,O=!1,Q=null,rt=null,P=null,N=null,H=null,Z.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:At,disable:_t,bindFramebuffer:bt,drawBuffers:T,useProgram:ot,setBlending:q,setMaterial:Et,setFlipSided:mt,setCullFace:y,setLineWidth:x,setPolygonOffset:D,setScissorTest:nt,activeTexture:tt,bindTexture:K,unbindTexture:Mt,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:Tt,texImage3D:vt,updateUBOMapping:te,uniformBlockBinding:zt,texStorage2D:Ht,texStorage3D:It,texSubImage2D:wt,texSubImage3D:Dt,compressedTexSubImage2D:et,compressedTexSubImage3D:Wt,scissor:Ot,viewport:Xt,reset:ct}}function Ip(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return m?new OffscreenCanvas(y,x):bs("canvas")}function _(y,x,D,nt){let tt=1;if((y.width>nt||y.height>nt)&&(tt=nt/Math.max(y.width,y.height)),tt<1||x===!0)if(typeof HTMLImageElement!="undefined"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&y instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&y instanceof ImageBitmap){let K=x?zr:Math.floor,Mt=K(tt*y.width),dt=K(tt*y.height);u===void 0&&(u=g(Mt,dt));let xt=D?g(Mt,dt):u;return xt.width=Mt,xt.height=dt,xt.getContext("2d").drawImage(y,0,0,Mt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Mt+"x"+dt+")."),xt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Eo(y.width)&&Eo(y.height)}function d(y){return a?!1:y.wrapS!==Ve||y.wrapT!==Ve||y.minFilter!==ve&&y.minFilter!==Pe}function E(y,x){return y.generateMipmaps&&x&&y.minFilter!==ve&&y.minFilter!==Pe}function v(y){i.generateMipmap(y)}function A(y,x,D,nt,tt=!1){if(a===!1)return x;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=x;if(x===i.RED&&(D===i.FLOAT&&(K=i.R32F),D===i.HALF_FLOAT&&(K=i.R16F),D===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.R8UI),D===i.UNSIGNED_SHORT&&(K=i.R16UI),D===i.UNSIGNED_INT&&(K=i.R32UI),D===i.BYTE&&(K=i.R8I),D===i.SHORT&&(K=i.R16I),D===i.INT&&(K=i.R32I)),x===i.RG&&(D===i.FLOAT&&(K=i.RG32F),D===i.HALF_FLOAT&&(K=i.RG16F),D===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RGBA){let Mt=tt?vs:qt.getTransfer(nt);D===i.FLOAT&&(K=i.RGBA32F),D===i.HALF_FLOAT&&(K=i.RGBA16F),D===i.UNSIGNED_BYTE&&(K=Mt===$t?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function I(y,x,D){return E(y,D)===!0||y.isFramebufferTexture&&y.minFilter!==ve&&y.minFilter!==Pe?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function R(y){return y===ve||y===Xa||y===Qs?i.NEAREST:i.LINEAR}function w(y){let x=y.target;x.removeEventListener("dispose",w),S(x),x.isVideoTexture&&h.delete(x)}function X(y){let x=y.target;x.removeEventListener("dispose",X),O(x)}function S(y){let x=n.get(y);if(x.__webglInit===void 0)return;let D=y.source,nt=f.get(D);if(nt){let tt=nt[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(y),Object.keys(nt).length===0&&f.delete(D)}n.remove(y)}function b(y){let x=n.get(y);i.deleteTexture(x.__webglTexture);let D=y.source,nt=f.get(D);delete nt[x.__cacheKey],o.memory.textures--}function O(y){let x=y.texture,D=n.get(y),nt=n.get(x);if(nt.__webglTexture!==void 0&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(D.__webglFramebuffer[tt]))for(let K=0;K<D.__webglFramebuffer[tt].length;K++)i.deleteFramebuffer(D.__webglFramebuffer[tt][K]);else i.deleteFramebuffer(D.__webglFramebuffer[tt]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[tt])}else{if(Array.isArray(D.__webglFramebuffer))for(let tt=0;tt<D.__webglFramebuffer.length;tt++)i.deleteFramebuffer(D.__webglFramebuffer[tt]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let tt=0;tt<D.__webglColorRenderbuffer.length;tt++)D.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[tt]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let tt=0,K=x.length;tt<K;tt++){let Mt=n.get(x[tt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(x[tt])}n.remove(x),n.remove(y)}let Q=0;function rt(){Q=0}function P(){let y=Q;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),Q+=1,y}function N(y){let x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function H(y,x){let D=n.get(y);if(y.isVideoTexture&&Et(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){let nt=y.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(D,y,x);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function J(y,x){let D=n.get(y);if(y.version>0&&D.__version!==y.version){Z(D,y,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function Y(y,x){let D=n.get(y);if(y.version>0&&D.__version!==y.version){Z(D,y,x);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function G(y,x){let D=n.get(y);if(y.version>0&&D.__version!==y.version){it(D,y,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}let $={[Ti]:i.REPEAT,[Ve]:i.CLAMP_TO_EDGE,[Or]:i.MIRRORED_REPEAT},j={[ve]:i.NEAREST,[Xa]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[El]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},ut={[Ol]:i.NEVER,[Hl]:i.ALWAYS,[Fl]:i.LESS,[Tc]:i.LEQUAL,[Bl]:i.EQUAL,[kl]:i.GEQUAL,[zl]:i.GREATER,[Vl]:i.NOTEQUAL};function k(y,x,D){if(D?(i.texParameteri(y,i.TEXTURE_WRAP_S,$[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,$[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,$[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,j[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,j[x.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ve||x.wrapT!==Ve)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,R(x.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==ve&&x.minFilter!==Pe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===ve||x.minFilter!==Qs&&x.minFilter!==wi||x.type===fn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ri&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(y,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function F(y,x){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",w));let nt=x.source,tt=f.get(nt);tt===void 0&&(tt={},f.set(nt,tt));let K=N(x);if(K!==y.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),tt[K].usedTimes++;let Mt=tt[y.__cacheKey];Mt!==void 0&&(tt[y.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(x)),y.__cacheKey=K,y.__webglTexture=tt[K].texture}return D}function Z(y,x,D){let nt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=i.TEXTURE_3D);let tt=F(y,x),K=x.source;e.bindTexture(nt,y.__webglTexture,i.TEXTURE0+D);let Mt=n.get(K);if(K.version!==Mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+D);let dt=qt.getPrimaries(qt.workingColorSpace),xt=x.colorSpace===Le?null:qt.getPrimaries(x.colorSpace),wt=x.colorSpace===Le||dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Dt=d(x)&&p(x.image)===!1,et=_(x.image,Dt,!1,s.maxTextureSize);et=mt(x,et);let Wt=p(et)||a,Ht=r.convert(x.format,x.colorSpace),It=r.convert(x.type),Tt=A(x.internalFormat,Ht,It,x.colorSpace,x.isVideoTexture);k(nt,x,Wt);let vt,Ot=x.mipmaps,Xt=a&&x.isVideoTexture!==!0&&Tt!==bc,te=Mt.__version===void 0||tt===!0,zt=I(x,et,Wt);if(x.isDepthTexture)Tt=i.DEPTH_COMPONENT,a?x.type===fn?Tt=i.DEPTH_COMPONENT32F:x.type===dn?Tt=i.DEPTH_COMPONENT24:x.type===Rn?Tt=i.DEPTH24_STENCIL8:Tt=i.DEPTH_COMPONENT16:x.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Cn&&Tt===i.DEPTH_COMPONENT&&x.type!==wa&&x.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=dn,It=r.convert(x.type)),x.format===oi&&Tt===i.DEPTH_COMPONENT&&(Tt=i.DEPTH_STENCIL,x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Rn,It=r.convert(x.type))),te&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Tt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Tt,et.width,et.height,0,Ht,It,null));else if(x.isDataTexture)if(Ot.length>0&&Wt){Xt&&te&&e.texStorage2D(i.TEXTURE_2D,zt,Tt,Ot[0].width,Ot[0].height);for(let ct=0,C=Ot.length;ct<C;ct++)vt=Ot[ct],Xt?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,vt.width,vt.height,Ht,It,vt.data):e.texImage2D(i.TEXTURE_2D,ct,Tt,vt.width,vt.height,0,Ht,It,vt.data);x.generateMipmaps=!1}else Xt?(te&&e.texStorage2D(i.TEXTURE_2D,zt,Tt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Ht,It,et.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,et.width,et.height,0,Ht,It,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Tt,Ot[0].width,Ot[0].height,et.depth);for(let ct=0,C=Ot.length;ct<C;ct++)vt=Ot[ct],x.format!==ke?Ht!==null?Xt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,et.depth,Ht,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Tt,vt.width,vt.height,et.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,et.depth,Ht,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Tt,vt.width,vt.height,et.depth,0,Ht,It,vt.data)}else{Xt&&te&&e.texStorage2D(i.TEXTURE_2D,zt,Tt,Ot[0].width,Ot[0].height);for(let ct=0,C=Ot.length;ct<C;ct++)vt=Ot[ct],x.format!==ke?Ht!==null?Xt?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,vt.width,vt.height,Ht,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Tt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,vt.width,vt.height,Ht,It,vt.data):e.texImage2D(i.TEXTURE_2D,ct,Tt,vt.width,vt.height,0,Ht,It,vt.data)}else if(x.isDataArrayTexture)Xt?(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Tt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Ht,It,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,et.width,et.height,et.depth,0,Ht,It,et.data);else if(x.isData3DTexture)Xt?(te&&e.texStorage3D(i.TEXTURE_3D,zt,Tt,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Ht,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,et.width,et.height,et.depth,0,Ht,It,et.data);else if(x.isFramebufferTexture){if(te)if(Xt)e.texStorage2D(i.TEXTURE_2D,zt,Tt,et.width,et.height);else{let ct=et.width,C=et.height;for(let ft=0;ft<zt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Tt,ct,C,0,Ht,It,null),ct>>=1,C>>=1}}else if(Ot.length>0&&Wt){Xt&&te&&e.texStorage2D(i.TEXTURE_2D,zt,Tt,Ot[0].width,Ot[0].height);for(let ct=0,C=Ot.length;ct<C;ct++)vt=Ot[ct],Xt?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Ht,It,vt):e.texImage2D(i.TEXTURE_2D,ct,Tt,Ht,It,vt);x.generateMipmaps=!1}else Xt?(te&&e.texStorage2D(i.TEXTURE_2D,zt,Tt,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,It,et)):e.texImage2D(i.TEXTURE_2D,0,Tt,Ht,It,et);E(x,Wt)&&v(nt),Mt.__version=K.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function it(y,x,D){if(x.image.length!==6)return;let nt=F(y,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+D);let K=n.get(tt);if(tt.version!==K.__version||nt===!0){e.activeTexture(i.TEXTURE0+D);let Mt=qt.getPrimaries(qt.workingColorSpace),dt=x.colorSpace===Le?null:qt.getPrimaries(x.colorSpace),xt=x.colorSpace===Le||Mt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let wt=x.isCompressedTexture||x.image[0].isCompressedTexture,Dt=x.image[0]&&x.image[0].isDataTexture,et=[];for(let ct=0;ct<6;ct++)!wt&&!Dt?et[ct]=_(x.image[ct],!1,!0,s.maxCubemapSize):et[ct]=Dt?x.image[ct].image:x.image[ct],et[ct]=mt(x,et[ct]);let Wt=et[0],Ht=p(Wt)||a,It=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),vt=A(x.internalFormat,It,Tt,x.colorSpace),Ot=a&&x.isVideoTexture!==!0,Xt=K.__version===void 0||nt===!0,te=I(x,Wt,Ht);k(i.TEXTURE_CUBE_MAP,x,Ht);let zt;if(wt){Ot&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,te,vt,Wt.width,Wt.height);for(let ct=0;ct<6;ct++){zt=et[ct].mipmaps;for(let C=0;C<zt.length;C++){let ft=zt[C];x.format!==ke?It!==null?Ot?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,0,0,ft.width,ft.height,It,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,0,0,ft.width,ft.height,It,Tt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C,vt,ft.width,ft.height,0,It,Tt,ft.data)}}}else{zt=x.mipmaps,Ot&&Xt&&(zt.length>0&&te++,e.texStorage2D(i.TEXTURE_CUBE_MAP,te,vt,et[0].width,et[0].height));for(let ct=0;ct<6;ct++)if(Dt){Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,et[ct].width,et[ct].height,It,Tt,et[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,vt,et[ct].width,et[ct].height,0,It,Tt,et[ct].data);for(let C=0;C<zt.length;C++){let pt=zt[C].image[ct].image;Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,0,0,pt.width,pt.height,It,Tt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,vt,pt.width,pt.height,0,It,Tt,pt.data)}}else{Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It,Tt,et[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,vt,It,Tt,et[ct]);for(let C=0;C<zt.length;C++){let ft=zt[C];Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,0,0,It,Tt,ft.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,C+1,vt,It,Tt,ft.image[ct])}}}E(x,Ht)&&v(i.TEXTURE_CUBE_MAP),K.__version=tt.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function at(y,x,D,nt,tt,K){let Mt=r.convert(D.format,D.colorSpace),dt=r.convert(D.type),xt=A(D.internalFormat,Mt,dt,D.colorSpace);if(!n.get(x).__hasExternalTextures){let Dt=Math.max(1,x.width>>K),et=Math.max(1,x.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,xt,Dt,et,x.depth,0,Mt,dt,null):e.texImage2D(tt,K,xt,Dt,et,0,Mt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),q(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,tt,n.get(D).__webglTexture,0,st(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,tt,n.get(D).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(y,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let nt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(D||q(x)){let tt=x.depthTexture;tt&&tt.isDepthTexture&&(tt.type===fn?nt=i.DEPTH_COMPONENT32F:tt.type===dn&&(nt=i.DEPTH_COMPONENT24));let K=st(x);q(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,nt,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,nt,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){let nt=st(x);D&&q(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,x.width,x.height):q(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{let nt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let tt=0;tt<nt.length;tt++){let K=nt[tt],Mt=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),xt=A(K.internalFormat,Mt,dt,K.colorSpace),wt=st(x);D&&q(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,xt,x.width,x.height):q(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let nt=n.get(x.depthTexture).__webglTexture,tt=st(x);if(x.depthTexture.format===Cn)q(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(x.depthTexture.format===oi)q(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function _t(y){let x=n.get(y),D=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,y)}else if(D){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]=i.createRenderbuffer(),yt(x.__webglDepthbuffer[nt],y,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),yt(x.__webglDepthbuffer,y,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(y,x,D){let nt=n.get(y);x!==void 0&&at(nt.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&_t(y)}function T(y){let x=y.texture,D=n.get(y),nt=n.get(x);y.addEventListener("dispose",X),y.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=x.version,o.memory.textures++);let tt=y.isWebGLCubeRenderTarget===!0,K=y.isWebGLMultipleRenderTargets===!0,Mt=p(y)||a;if(tt){D.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[dt]=[];for(let xt=0;xt<x.mipmaps.length;xt++)D.__webglFramebuffer[dt][xt]=i.createFramebuffer()}else D.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let dt=0;dt<x.mipmaps.length;dt++)D.__webglFramebuffer[dt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(K)if(s.drawBuffers){let dt=y.texture;for(let xt=0,wt=dt.length;xt<wt;xt++){let Dt=n.get(dt[xt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&q(y)===!1){let dt=K?x:[x];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){let wt=dt[xt];D.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[xt]);let Dt=r.convert(wt.format,wt.colorSpace),et=r.convert(wt.type),Wt=A(wt.internalFormat,Dt,et,wt.colorSpace,y.isXRRenderTarget===!0),Ht=st(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Wt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,D.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(D.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),k(i.TEXTURE_CUBE_MAP,x,Mt);for(let dt=0;dt<6;dt++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)at(D.__webglFramebuffer[dt][xt],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else at(D.__webglFramebuffer[dt],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);E(x,Mt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let dt=y.texture;for(let xt=0,wt=dt.length;xt<wt;xt++){let Dt=dt[xt],et=n.get(Dt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),k(i.TEXTURE_2D,Dt,Mt),at(D.__webglFramebuffer,y,Dt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),E(Dt,Mt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?dt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,nt.__webglTexture),k(dt,x,Mt),a&&x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)at(D.__webglFramebuffer[xt],y,x,i.COLOR_ATTACHMENT0,dt,xt);else at(D.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,dt,0);E(x,Mt)&&v(dt),e.unbindTexture()}y.depthBuffer&&_t(y)}function ot(y){let x=p(y)||a,D=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let nt=0,tt=D.length;nt<tt;nt++){let K=D[nt];if(E(K,x)){let Mt=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(K).__webglTexture;e.bindTexture(Mt,dt),v(Mt),e.unbindTexture()}}}function W(y){if(a&&y.samples>0&&q(y)===!1){let x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],D=y.width,nt=y.height,tt=i.COLOR_BUFFER_BIT,K=[],Mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(y),xt=y.isWebGLMultipleRenderTargets===!0;if(xt)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){K.push(i.COLOR_ATTACHMENT0+wt),y.depthBuffer&&K.push(Mt);let Dt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Dt===!1&&(y.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),xt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[wt]),Dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Mt])),xt){let et=n.get(x[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,D,nt,0,0,D,nt,tt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[wt]);let Dt=n.get(x[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function st(y){return Math.min(s.maxSamples,y.samples)}function q(y){let x=n.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(y){let x=o.render.frame;h.get(y)!==x&&(h.set(y,x),y.update())}function mt(y,x){let D=y.colorSpace,nt=y.format,tt=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Fr||D!==nn&&D!==Le&&(qt.getTransfer(D)===$t?a===!1?t.has("EXT_sRGB")===!0&&nt===ke?(y.format=Fr,y.minFilter=Pe,y.generateMipmaps=!1):x=Es.sRGBToLinear(x):(nt!==ke||tt!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}this.allocateTextureUnit=P,this.resetTextureUnits=rt,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=bt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=at,this.useMultisampledRTT=q}function Up(i,t,e){let n=e.isWebGL2;function s(r,o=Le){let a,c=qt.getTransfer(o);if(r===gn)return i.UNSIGNED_BYTE;if(r===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Al)return i.BYTE;if(r===Tl)return i.SHORT;if(r===wa)return i.UNSIGNED_SHORT;if(r===_c)return i.INT;if(r===dn)return i.UNSIGNED_INT;if(r===fn)return i.FLOAT;if(r===Ri)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===wl)return i.ALPHA;if(r===ke)return i.RGBA;if(r===Rl)return i.LUMINANCE;if(r===Cl)return i.LUMINANCE_ALPHA;if(r===Cn)return i.DEPTH_COMPONENT;if(r===oi)return i.DEPTH_STENCIL;if(r===Fr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Pl)return i.RED;if(r===yc)return i.RED_INTEGER;if(r===Ll)return i.RG;if(r===Mc)return i.RG_INTEGER;if(r===Sc)return i.RGBA_INTEGER;if(r===js||r===tr||r===er||r===nr)if(c===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qa||r===Ya||r===Za||r===Ja)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ya)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$a||r===Ka)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===$a)return c===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ka)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qa||r===ja||r===to||r===eo||r===no||r===io||r===so||r===ro||r===ao||r===oo||r===co||r===lo||r===ho||r===uo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qa)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ja)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===to)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eo)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===no)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===io)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===so)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ro)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ao)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oo)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===co)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lo)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ho)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uo)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ir||r===fo||r===po)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ir)return c===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Il||r===mo||r===go||r===_o)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ir)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_o)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ta=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},en=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dp={type:"move"},Mi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ea=class extends _n{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null,_=e.getContextAttributes(),p=null,d=null,E=[],v=[],A=new ht,I=null,R=new ye;R.layers.enable(1),R.viewport=new ue;let w=new ye;w.layers.enable(2),w.viewport=new ue;let X=[R,w],S=new ta;S.layers.enable(1),S.layers.enable(2);let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let F=E[k];return F===void 0&&(F=new Mi,E[k]=F),F.getTargetRaySpace()},this.getControllerGrip=function(k){let F=E[k];return F===void 0&&(F=new Mi,E[k]=F),F.getGripSpace()},this.getHand=function(k){let F=E[k];return F===void 0&&(F=new Mi,E[k]=F),F.getHandSpace()};function Q(k){let F=v.indexOf(k.inputSource);if(F===-1)return;let Z=E[F];Z!==void 0&&(Z.update(k.inputSource,k.frame,l||o),Z.dispatchEvent({type:k.type,data:k.inputSource}))}function rt(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",P);for(let k=0;k<E.length;k++){let F=v[k];F!==null&&(v[k]=null,E[k].disconnect(F))}b=null,O=null,t.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let F={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new sn(m.framebufferWidth,m.framebufferHeight,{format:ke,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let F=null,Z=null,it=null;_.depth&&(it=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=_.stencil?oi:Cn,Z=_.stencil?Rn:dn);let at={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(at),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new sn(f.textureWidth,f.textureHeight,{format:ke,type:gn,depthTexture:new Ns(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let yt=t.properties.get(d);yt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(k){for(let F=0;F<k.removed.length;F++){let Z=k.removed[F],it=v.indexOf(Z);it>=0&&(v[it]=null,E[it].disconnect(Z))}for(let F=0;F<k.added.length;F++){let Z=k.added[F],it=v.indexOf(Z);if(it===-1){for(let yt=0;yt<E.length;yt++)if(yt>=v.length){v.push(Z),it=yt;break}else if(v[yt]===null){v[yt]=Z,it=yt;break}if(it===-1)break}let at=E[it];at&&at.connect(Z)}}let N=new L,H=new L;function J(k,F,Z){N.setFromMatrixPosition(F.matrixWorld),H.setFromMatrixPosition(Z.matrixWorld);let it=N.distanceTo(H),at=F.projectionMatrix.elements,yt=Z.projectionMatrix.elements,At=at[14]/(at[10]-1),_t=at[14]/(at[10]+1),bt=(at[9]+1)/at[5],T=(at[9]-1)/at[5],ot=(at[8]-1)/at[0],W=(yt[8]+1)/yt[0],st=At*ot,q=At*W,Et=it/(-ot+W),mt=Et*-ot;F.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(mt),k.translateZ(Et),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let y=At+Et,x=_t+Et,D=st-mt,nt=q+(it-mt),tt=bt*_t/x*y,K=T*_t/x*y;k.projectionMatrix.makePerspective(D,nt,tt,K,y,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,F){F===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(F.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;S.near=w.near=R.near=k.near,S.far=w.far=R.far=k.far,(b!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,O=S.far);let F=k.parent,Z=S.cameras;Y(S,F);for(let it=0;it<Z.length;it++)Y(Z[it],F);Z.length===2?J(S,R,w):S.projectionMatrix.copy(R.projectionMatrix),G(k,S,F)};function G(k,F,Z){Z===null?k.matrix.copy(F.matrixWorld):(k.matrix.copy(Z.matrixWorld),k.matrix.invert(),k.matrix.multiply(F.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(F.projectionMatrix),k.projectionMatrixInverse.copy(F.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Br*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let $=null;function j(k,F){if(h=F.getViewerPose(l||o),g=F,h!==null){let Z=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let it=!1;Z.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let at=0;at<Z.length;at++){let yt=Z[at],At=null;if(m!==null)At=m.getViewport(yt);else{let bt=u.getViewSubImage(f,yt);At=bt.viewport,at===0&&(t.setRenderTargetTextures(d,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(d))}let _t=X[at];_t===void 0&&(_t=new ye,_t.layers.enable(at),_t.viewport=new ue,X[at]=_t),_t.matrix.fromArray(yt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(yt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(At.x,At.y,At.width,At.height),at===0&&(S.matrix.copy(_t.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(_t)}}for(let Z=0;Z<E.length;Z++){let it=v[Z],at=E[Z];it!==null&&at!==void 0&&at.update(it,F,l||o)}$&&$(k,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),g=null}let ut=new Pc;ut.setAnimationLoop(j),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}};function Np(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Cc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,v,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,E,v):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Se&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Se&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E=t.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,E,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=v*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Se&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Op(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,v){let A=v.program;n.uniformBlockBinding(E,A)}function l(E,v){let A=s[E.id];A===void 0&&(g(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",p));let I=v.program;n.updateUBOMapping(E,I);let R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let v=u();E.__bindingPointIndex=v;let A=i.createBuffer(),I=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let v=s[E.id],A=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,w=A.length;R<w;R++){let X=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,b=X.length;S<b;S++){let O=X[S];if(m(O,R,S,I)===!0){let Q=O.__offset,rt=Array.isArray(O.value)?O.value:[O.value],P=0;for(let N=0;N<rt.length;N++){let H=rt[N],J=_(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,Q+P,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,v,A,I){let R=E.value,w=v+"_"+A;if(I[w]===void 0)return typeof R=="number"||typeof R=="boolean"?I[w]=R:I[w]=R.clone(),!0;{let X=I[w];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return I[w]=R,!0}else if(X.equals(R)===!1)return X.copy(R),!0}return!1}function g(E){let v=E.uniforms,A=0,I=16;for(let w=0,X=v.length;w<X;w++){let S=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,O=S.length;b<O;b++){let Q=S[b],rt=Array.isArray(Q.value)?Q.value:[Q.value];for(let P=0,N=rt.length;P<N;P++){let H=rt[P],J=_(H),Y=A%I;Y!==0&&I-Y<J.boundary&&(A+=I-Y),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=J.storage}}}let R=A%I;return R>0&&(A+=I-R),E.__size=A,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){let v=E.target;v.removeEventListener("dispose",p);let A=o.indexOf(v.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ii=class{constructor(t={}){let{canvas:e=Wl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=se,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;let v=this,A=!1,I=0,R=0,w=null,X=-1,S=null,b=new ue,O=new ue,Q=null,rt=new Gt(0),P=0,N=e.width,H=e.height,J=1,Y=null,G=null,$=new ue(0,0,N,H),j=new ue(0,0,N,H),ut=!1,k=new Li,F=!1,Z=!1,it=null,at=new re,yt=new ht,At=new L,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return w===null?J:1}let T=n;function ot(M,U){for(let z=0;z<M.length;z++){let V=M[z],B=e.getContext(V,U);if(B!==null)return B}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",ft,!1),T===null){let U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),T=ot(U,M),T===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&T instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let W,st,q,Et,mt,y,x,D,nt,tt,K,Mt,dt,xt,wt,Dt,et,Wt,Ht,It,Tt,vt,Ot,Xt;function te(){W=new tf(T),st=new Zd(T,W,t),W.init(st),vt=new Up(T,W,st),q=new Lp(T,W,st),Et=new sf(T),mt=new vp,y=new Ip(T,W,q,mt,st,vt,Et),x=new $d(v),D=new jd(v),nt=new uh(T,st),Ot=new qd(T,W,nt,st),tt=new ef(T,nt,Et,Ot),K=new cf(T,tt,nt,Et),Ht=new of(T,st,y),Dt=new Jd(mt),Mt=new xp(v,x,D,W,st,Ot,Dt),dt=new Np(v,mt),xt=new Mp,wt=new wp(W,st),Wt=new Xd(v,x,D,q,K,f,c),et=new Pp(v,K,st),Xt=new Op(T,Et,st,q),It=new Yd(T,W,Et,st),Tt=new nf(T,W,Et,st),Et.programs=Mt.programs,v.capabilities=st,v.extensions=W,v.properties=mt,v.renderLists=xt,v.shadowMap=et,v.state=q,v.info=Et}te();let zt=new ea(v,T);this.xr=zt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let M=W.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=W.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(N,H,!1))},this.getSize=function(M){return M.set(N,H)},this.setSize=function(M,U,z=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,H=U,e.width=Math.floor(M*J),e.height=Math.floor(U*J),z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(N*J,H*J).floor()},this.setDrawingBufferSize=function(M,U,z){N=M,H=U,J=z,e.width=Math.floor(M*z),e.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,U,z,V){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,U,z,V),q.viewport(b.copy($).multiplyScalar(J).floor())},this.getScissor=function(M){return M.copy(j)},this.setScissor=function(M,U,z,V){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,U,z,V),q.scissor(O.copy(j).multiplyScalar(J).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(M){q.setScissorTest(ut=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){G=M},this.getClearColor=function(M){return M.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(M=!0,U=!0,z=!0){let V=0;if(M){let B=!1;if(w!==null){let gt=w.texture.format;B=gt===Sc||gt===Mc||gt===yc}if(B){let gt=w.texture.type,St=gt===gn||gt===dn||gt===wa||gt===Rn||gt===xc||gt===vc,Ct=Wt.getClearColor(),Lt=Wt.getClearAlpha(),Bt=Ct.r,Ut=Ct.g,Nt=Ct.b;St?(m[0]=Bt,m[1]=Ut,m[2]=Nt,m[3]=Lt,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Bt,g[1]=Ut,g[2]=Nt,g[3]=Lt,T.clearBufferiv(T.COLOR,0,g))}else V|=T.COLOR_BUFFER_BIT}U&&(V|=T.DEPTH_BUFFER_BIT),z&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),xt.dispose(),wt.dispose(),mt.dispose(),x.dispose(),D.dispose(),K.dispose(),Ot.dispose(),Xt.dispose(),Mt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",ge),zt.removeEventListener("sessionend",Jt),it&&(it.dispose(),it=null),_e.stop()};function ct(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=Et.autoReset,U=et.enabled,z=et.autoUpdate,V=et.needsUpdate,B=et.type;te(),Et.autoReset=M,et.enabled=U,et.autoUpdate=z,et.needsUpdate=V,et.type=B}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function pt(M){let U=M.target;U.removeEventListener("dispose",pt),Pt(U)}function Pt(M){Rt(M),mt.remove(M)}function Rt(M){let U=mt.get(M).programs;U!==void 0&&(U.forEach(function(z){Mt.releaseProgram(z)}),M.isShaderMaterial&&Mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,V,B,gt){U===null&&(U=_t);let St=B.isMesh&&B.matrixWorld.determinant()<0,Ct=kc(M,U,z,V,B);q.setMaterial(V,St);let Lt=z.index,Bt=1;if(V.wireframe===!0){if(Lt=tt.getWireframeAttribute(z),Lt===void 0)return;Bt=2}let Ut=z.drawRange,Nt=z.attributes.position,ne=Ut.start*Bt,Ae=(Ut.start+Ut.count)*Bt;gt!==null&&(ne=Math.max(ne,gt.start*Bt),Ae=Math.min(Ae,(gt.start+gt.count)*Bt)),Lt!==null?(ne=Math.max(ne,0),Ae=Math.min(Ae,Lt.count)):Nt!=null&&(ne=Math.max(ne,0),Ae=Math.min(Ae,Nt.count));let le=Ae-ne;if(le<0||le===1/0)return;Ot.setup(B,V,Ct,z,Lt);let qe,Qt=It;if(Lt!==null&&(qe=nt.get(Lt),Qt=Tt,Qt.setIndex(qe)),B.isMesh)V.wireframe===!0?(q.setLineWidth(V.wireframeLinewidth*bt()),Qt.setMode(T.LINES)):Qt.setMode(T.TRIANGLES);else if(B.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),q.setLineWidth(Vt*bt()),B.isLineSegments?Qt.setMode(T.LINES):B.isLineLoop?Qt.setMode(T.LINE_LOOP):Qt.setMode(T.LINE_STRIP)}else B.isPoints?Qt.setMode(T.POINTS):B.isSprite&&Qt.setMode(T.TRIANGLES);if(B.isBatchedMesh)Qt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Qt.renderInstances(ne,le,B.count);else if(z.isInstancedBufferGeometry){let Vt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Zs=Math.min(z.instanceCount,Vt);Qt.renderInstances(ne,le,Zs)}else Qt.render(ne,le)};function Yt(M,U,z){M.transparent===!0&&M.side===ze&&M.forceSinglePass===!1?(M.side=Se,M.needsUpdate=!0,Gi(M,U,z),M.side=Xe,M.needsUpdate=!0,Gi(M,U,z),M.side=ze):Gi(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),p=wt.get(z),p.init(),E.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),M!==z&&M.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);let V=new Set;return M.traverse(function(B){let gt=B.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let Ct=gt[St];Yt(Ct,z,B),V.add(Ct)}else Yt(gt,z,B),V.add(gt)}),E.pop(),p=null,V},this.compileAsync=function(M,U,z=null){let V=this.compile(M,U,z);return new Promise(B=>{function gt(){if(V.forEach(function(St){mt.get(St).currentProgram.isReady()&&V.delete(St)}),V.size===0){B(M);return}setTimeout(gt,10)}W.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Zt=null;function ce(M){Zt&&Zt(M)}function ge(){_e.stop()}function Jt(){_e.start()}let _e=new Pc;_e.setAnimationLoop(ce),typeof self!="undefined"&&_e.setContext(self),this.setAnimationLoop=function(M){Zt=M,zt.setAnimationLoop(M),M===null?_e.stop():_e.start()},zt.addEventListener("sessionstart",ge),zt.addEventListener("sessionend",Jt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(U),U=zt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,w),p=wt.get(M,E.length),p.init(),E.push(p),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(at),Z=this.localClippingEnabled,F=Dt.init(this.clippingPlanes,Z),_=xt.get(M,d.length),_.init(),d.push(_),Ge(M,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,G),this.info.render.frame++,F===!0&&Dt.beginShadows();let z=p.state.shadowsArray;if(et.render(z,M,U),F===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Wt.render(_,M),p.setupLights(v._useLegacyLights),U.isArrayCamera){let V=U.cameras;for(let B=0,gt=V.length;B<gt;B++){let St=V[B];Ua(_,M,St,St.viewport)}}else Ua(_,M,U);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,U),Ot.resetDefaultState(),X=-1,S=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ge(M,U,z,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||k.intersectsSprite(M)){V&&At.setFromMatrixPosition(M.matrixWorld).applyMatrix4(at);let St=K.update(M),Ct=M.material;Ct.visible&&_.push(M,St,Ct,z,At.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||k.intersectsObject(M))){let St=K.update(M),Ct=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),At.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),At.copy(St.boundingSphere.center)),At.applyMatrix4(M.matrixWorld).applyMatrix4(at)),Array.isArray(Ct)){let Lt=St.groups;for(let Bt=0,Ut=Lt.length;Bt<Ut;Bt++){let Nt=Lt[Bt],ne=Ct[Nt.materialIndex];ne&&ne.visible&&_.push(M,St,ne,z,At.z,Nt)}}else Ct.visible&&_.push(M,St,Ct,z,At.z,null)}}let gt=M.children;for(let St=0,Ct=gt.length;St<Ct;St++)Ge(gt[St],U,z,V)}function Ua(M,U,z,V){let B=M.opaque,gt=M.transmissive,St=M.transparent;p.setupLightsView(z),F===!0&&Dt.setGlobalState(v.clippingPlanes,z),gt.length>0&&Vc(B,gt,U,z),V&&q.viewport(b.copy(V)),B.length>0&&Hi(B,U,z),gt.length>0&&Hi(gt,U,z),St.length>0&&Hi(St,U,z),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Vc(M,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let gt=st.isWebGL2;it===null&&(it=new sn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")?Ri:gn,minFilter:wi,samples:gt?4:0})),v.getDrawingBufferSize(yt),gt?it.setSize(yt.x,yt.y):it.setSize(zr(yt.x),zr(yt.y));let St=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(rt),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Ct=v.toneMapping;v.toneMapping=mn,Hi(M,z,V),y.updateMultisampleRenderTarget(it),y.updateRenderTargetMipmap(it);let Lt=!1;for(let Bt=0,Ut=U.length;Bt<Ut;Bt++){let Nt=U[Bt],ne=Nt.object,Ae=Nt.geometry,le=Nt.material,qe=Nt.group;if(le.side===ze&&ne.layers.test(V.layers)){let Qt=le.side;le.side=Se,le.needsUpdate=!0,Da(ne,z,V,Ae,le,qe),le.side=Qt,le.needsUpdate=!0,Lt=!0}}Lt===!0&&(y.updateMultisampleRenderTarget(it),y.updateRenderTargetMipmap(it)),v.setRenderTarget(St),v.setClearColor(rt,P),v.toneMapping=Ct}function Hi(M,U,z){let V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,gt=M.length;B<gt;B++){let St=M[B],Ct=St.object,Lt=St.geometry,Bt=V===null?St.material:V,Ut=St.group;Ct.layers.test(z.layers)&&Da(Ct,U,z,Lt,Bt,Ut)}}function Da(M,U,z,V,B,gt){M.onBeforeRender(v,U,z,V,B,gt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(v,U,z,V,M,gt),B.transparent===!0&&B.side===ze&&B.forceSinglePass===!1?(B.side=Se,B.needsUpdate=!0,v.renderBufferDirect(z,U,V,B,M,gt),B.side=Xe,B.needsUpdate=!0,v.renderBufferDirect(z,U,V,B,M,gt),B.side=ze):v.renderBufferDirect(z,U,V,B,M,gt),M.onAfterRender(v,U,z,V,B,gt)}function Gi(M,U,z){U.isScene!==!0&&(U=_t);let V=mt.get(M),B=p.state.lights,gt=p.state.shadowsArray,St=B.state.version,Ct=Mt.getParameters(M,B.state,gt,U,z),Lt=Mt.getProgramCacheKey(Ct),Bt=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?D:x).get(M.envMap||V.environment),Bt===void 0&&(M.addEventListener("dispose",pt),Bt=new Map,V.programs=Bt);let Ut=Bt.get(Lt);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===St)return Oa(M,Ct),Ut}else Ct.uniforms=Mt.getUniforms(M),M.onBuild(z,Ct,v),M.onBeforeCompile(Ct,v),Ut=Mt.acquireProgram(Ct,Lt),Bt.set(Lt,Ut),V.uniforms=Ct.uniforms;let Nt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Nt.clippingPlanes=Dt.uniform),Oa(M,Ct),V.needsLights=Gc(M),V.lightsStateVersion=St,V.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function Na(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=si.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Oa(M,U){let z=mt.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function kc(M,U,z,V,B){U.isScene!==!0&&(U=_t),y.resetTextureUnits();let gt=U.fog,St=V.isMeshStandardMaterial?U.environment:null,Ct=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:nn,Lt=(V.isMeshStandardMaterial?D:x).get(V.envMap||St),Bt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Nt=!!z.morphAttributes.position,ne=!!z.morphAttributes.normal,Ae=!!z.morphAttributes.color,le=mn;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(le=v.toneMapping);let qe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=qe!==void 0?qe.length:0,Vt=mt.get(V),Zs=p.state.lights;if(F===!0&&(Z===!0||M!==S)){let Re=M===S&&V.id===X;Dt.setState(V,M,Re)}let ee=!1;V.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Zs.state.version||Vt.outputColorSpace!==Ct||B.isBatchedMesh&&Vt.batching===!1||!B.isBatchedMesh&&Vt.batching===!0||B.isInstancedMesh&&Vt.instancing===!1||!B.isInstancedMesh&&Vt.instancing===!0||B.isSkinnedMesh&&Vt.skinning===!1||!B.isSkinnedMesh&&Vt.skinning===!0||B.isInstancedMesh&&Vt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Vt.instancingColor===!1&&B.instanceColor!==null||Vt.envMap!==Lt||V.fog===!0&&Vt.fog!==gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Dt.numPlanes||Vt.numIntersection!==Dt.numIntersection)||Vt.vertexAlphas!==Bt||Vt.vertexTangents!==Ut||Vt.morphTargets!==Nt||Vt.morphNormals!==ne||Vt.morphColors!==Ae||Vt.toneMapping!==le||st.isWebGL2===!0&&Vt.morphTargetsCount!==Qt)&&(ee=!0):(ee=!0,Vt.__version=V.version);let vn=Vt.currentProgram;ee===!0&&(vn=Gi(V,U,B));let Fa=!1,pi=!1,Js=!1,fe=vn.getUniforms(),yn=Vt.uniforms;if(q.useProgram(vn.program)&&(Fa=!0,pi=!0,Js=!0),V.id!==X&&(X=V.id,pi=!0),Fa||S!==M){fe.setValue(T,"projectionMatrix",M.projectionMatrix),fe.setValue(T,"viewMatrix",M.matrixWorldInverse);let Re=fe.map.cameraPosition;Re!==void 0&&Re.setValue(T,At.setFromMatrixPosition(M.matrixWorld)),st.logarithmicDepthBuffer&&fe.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(T,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,pi=!0,Js=!0)}if(B.isSkinnedMesh){fe.setOptional(T,B,"bindMatrix"),fe.setOptional(T,B,"bindMatrixInverse");let Re=B.skeleton;Re&&(st.floatVertexTextures?(Re.boneTexture===null&&Re.computeBoneTexture(),fe.setValue(T,"boneTexture",Re.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(fe.setOptional(T,B,"batchingTexture"),fe.setValue(T,"batchingTexture",B._matricesTexture,y));let $s=z.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&st.isWebGL2===!0)&&Ht.update(B,z,vn),(pi||Vt.receiveShadow!==B.receiveShadow)&&(Vt.receiveShadow=B.receiveShadow,fe.setValue(T,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yn.envMap.value=Lt,yn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),pi&&(fe.setValue(T,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Hc(yn,Js),gt&&V.fog===!0&&dt.refreshFogUniforms(yn,gt),dt.refreshMaterialUniforms(yn,V,J,H,it),si.upload(T,Na(Vt),yn,y)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(si.upload(T,Na(Vt),yn,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(T,"center",B.center),fe.setValue(T,"modelViewMatrix",B.modelViewMatrix),fe.setValue(T,"normalMatrix",B.normalMatrix),fe.setValue(T,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Re=V.uniformsGroups;for(let Ks=0,Wc=Re.length;Ks<Wc;Ks++)if(st.isWebGL2){let Ba=Re[Ks];Xt.update(Ba,vn),Xt.bind(Ba,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Hc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Gc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,U,z){mt.get(M.texture).__webglTexture=U,mt.get(M.depthTexture).__webglTexture=z;let V=mt.get(M);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){let z=mt.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){w=M,I=U,R=z;let V=!0,B=null,gt=!1,St=!1;if(M){let Lt=mt.get(M);Lt.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(T.FRAMEBUFFER,null),V=!1):Lt.__webglFramebuffer===void 0?y.setupRenderTarget(M):Lt.__hasExternalTextures&&y.rebindTextures(M,mt.get(M.texture).__webglTexture,mt.get(M.depthTexture).__webglTexture);let Bt=M.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);let Ut=mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?B=Ut[U][z]:B=Ut[U],gt=!0):st.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?B=mt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[z]:B=Ut,b.copy(M.viewport),O.copy(M.scissor),Q=M.scissorTest}else b.copy($).multiplyScalar(J).floor(),O.copy(j).multiplyScalar(J).floor(),Q=ut;if(q.bindFramebuffer(T.FRAMEBUFFER,B)&&st.drawBuffers&&V&&q.drawBuffers(M,B),q.viewport(b),q.scissor(O),q.setScissorTest(Q),gt){let Lt=mt.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,z)}else if(St){let Lt=mt.get(M.texture),Bt=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Lt.__webglTexture,z||0,Bt)}X=-1},this.readRenderTargetPixels=function(M,U,z,V,B,gt,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){q.bindFramebuffer(T.FRAMEBUFFER,Ct);try{let Lt=M.texture,Bt=Lt.format,Ut=Lt.type;if(Bt!==ke&&vt.convert(Bt)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Nt=Ut===Ri&&(W.has("EXT_color_buffer_half_float")||st.isWebGL2&&W.has("EXT_color_buffer_float"));if(Ut!==gn&&vt.convert(Ut)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===fn&&(st.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&z>=0&&z<=M.height-B&&T.readPixels(U,z,V,B,vt.convert(Bt),vt.convert(Ut),gt)}finally{let Lt=w!==null?mt.get(w).__webglFramebuffer:null;q.bindFramebuffer(T.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(M,U,z=0){let V=Math.pow(2,-z),B=Math.floor(U.image.width*V),gt=Math.floor(U.image.height*V);y.setTexture2D(U,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,M.x,M.y,B,gt),q.unbindTexture()},this.copyTextureToTexture=function(M,U,z,V=0){let B=U.image.width,gt=U.image.height,St=vt.convert(z.format),Ct=vt.convert(z.type);y.setTexture2D(z,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,V,M.x,M.y,B,gt,St,Ct,U.image.data):U.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,V,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,St,U.mipmaps[0].data):T.texSubImage2D(T.TEXTURE_2D,V,M.x,M.y,St,Ct,U.image),V===0&&z.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z,V,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=M.max.x-M.min.x+1,St=M.max.y-M.min.y+1,Ct=M.max.z-M.min.z+1,Lt=vt.convert(V.format),Bt=vt.convert(V.type),Ut;if(V.isData3DTexture)y.setTexture3D(V,0),Ut=T.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)y.setTexture2DArray(V,0),Ut=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);let Nt=T.getParameter(T.UNPACK_ROW_LENGTH),ne=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ae=T.getParameter(T.UNPACK_SKIP_PIXELS),le=T.getParameter(T.UNPACK_SKIP_ROWS),qe=T.getParameter(T.UNPACK_SKIP_IMAGES),Qt=z.isCompressedTexture?z.mipmaps[B]:z.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Qt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Qt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,M.min.x),T.pixelStorei(T.UNPACK_SKIP_ROWS,M.min.y),T.pixelStorei(T.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?T.texSubImage3D(Ut,B,U.x,U.y,U.z,gt,St,Ct,Lt,Bt,Qt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),T.compressedTexSubImage3D(Ut,B,U.x,U.y,U.z,gt,St,Ct,Lt,Qt.data)):T.texSubImage3D(Ut,B,U.x,U.y,U.z,gt,St,Ct,Lt,Bt,Qt),T.pixelStorei(T.UNPACK_ROW_LENGTH,Nt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ne),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ae),T.pixelStorei(T.UNPACK_SKIP_ROWS,le),T.pixelStorei(T.UNPACK_SKIP_IMAGES,qe),B===0&&V.generateMipmaps&&T.generateMipmap(Ut),q.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),q.unbindTexture()},this.resetState=function(){I=0,R=0,w=null,q.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ra?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Xs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===se?Pn:Ec}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Pn?se:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},na=class extends Ii{};na.prototype.isWebGL1Renderer=!0;var Os=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ui=class extends De{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ne=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new re;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(de(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(de(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Di=class extends Ne{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ht,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ia=class extends Di{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pa(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ds=new L,Cr=new Pa,Pr=new Pa,Lr=new Pa,sa=class extends Ne{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ds.subVectors(s[0],s[1]).add(s[0]),l=ds);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ds),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Cr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,p),Pr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,p),Lr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Cr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Pr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Lr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Cr.calc(c),Pr.calc(c),Lr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Fp(i,t){let e=1-i;return e*e*t}function Bp(i,t){return 2*(1-i)*i*t}function zp(i,t){return i*i*t}function Si(i,t,e,n){return Fp(i,t)+Bp(i,e)+zp(i,n)}function Vp(i,t){let e=1-i;return e*e*e*t}function kp(i,t){let e=1-i;return 3*e*e*i*t}function Hp(i,t){return 3*(1-i)*i*i*t}function Gp(i,t){return i*i*i*t}function bi(i,t,e,n,s){return Vp(i,t)+kp(i,e)+Hp(i,n)+Gp(i,s)}var Fs=class extends Ne{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bi(t,s.x,r.x,o.x,a.x),bi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ra=class extends Ne{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bi(t,s.x,r.x,o.x,a.x),bi(t,s.y,r.y,o.y,a.y),bi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bs=class extends Ne{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends Ne{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zs=class extends Ne{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Si(t,s.x,r.x,o.x),Si(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends Ne{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Si(t,s.x,r.x,o.x),Si(t,s.y,r.y,o.y),Si(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vs=class extends Ne{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cc(a,c.x,l.x,h.x,u.x),cc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},ca=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:sa,CubicBezierCurve:Fs,CubicBezierCurve3:ra,EllipseCurve:Di,LineCurve:Bs,LineCurve3:aa,QuadraticBezierCurve:zs,QuadraticBezierCurve3:oa,SplineCurve:Vs}),la=class extends Ne{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ca[s.type]().fromJSON(s))}return this}},hi=class extends la{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Bs(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zs(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Fs(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Di(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ni=class extends hi{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new hi().fromJSON(s))}return this}},Wp={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Oc(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,m;if(n&&(r=Jp(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Oi(r,o,e,a,c,m,0),o}};function Oc(i,t,e,n,s){let r,o;if(s===am(i,t,e,n)>0)for(r=t;r<e;r+=n)o=lc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=lc(r,i[r],i[r+1],o);return o&&Ys(o,o.next)&&(Bi(o),o=o.next),o}function Un(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||jt(e.prev,e,e.next)===0)){if(Bi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oi(i,t,e,n,s,r,o){if(!i)return;!o&&r&&tm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?qp(i,n,s,r):Xp(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Bi(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Yp(Un(i),t,e),Oi(i,t,e,n,s,r,2)):o===2&&Zp(i,t,e,n,s,r):Oi(Un(i),t,e,n,s,r,1);break}}}function Xp(i){let t=i.prev,e=i,n=i.next;if(jt(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&ei(s,a,r,c,o,l,g.x,g.y)&&jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(jt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,d=ha(m,g,t,e,n),E=ha(_,p,t,e,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=d&&A&&A.z<=E;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&ei(a,h,c,u,l,f,v.x,v.y)&&jt(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=m&&A.x<=_&&A.y>=g&&A.y<=p&&A!==s&&A!==o&&ei(a,h,c,u,l,f,A.x,A.y)&&jt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&ei(a,h,c,u,l,f,v.x,v.y)&&jt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=E;){if(A.x>=m&&A.x<=_&&A.y>=g&&A.y<=p&&A!==s&&A!==o&&ei(a,h,c,u,l,f,A.x,A.y)&&jt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Yp(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ys(s,r)&&Fc(s,n,n.next,r)&&Fi(s,r)&&Fi(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Bi(n),Bi(n.next),n=i=r),n=n.next}while(n!==i);return Un(n)}function Zp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&im(o,a)){let c=Bc(o,a);o=Un(o,o.next),c=Un(c,c.next),Oi(o,t,e,n,s,r,0),Oi(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Jp(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Oc(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(nm(l));for(s.sort($p),r=0;r<s.length;r++)e=Kp(s[r],e);return e}function $p(i,t){return i.x-t.x}function Kp(i,t){let e=Qp(i,t);if(!e)return t;let n=Bc(e,i);return Un(n,n.next),Un(e,e.next)}function Qp(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ei(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Fi(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&jp(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function jp(i,t){return jt(i.prev,i,t.prev)<0&&jt(t.next,i,i.next)<0}function tm(i,t,e,n){let s=i;do s.z===0&&(s.z=ha(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,em(s)}function em(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ha(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function nm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ei(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function im(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sm(i,t)&&(Fi(i,t)&&Fi(t,i)&&rm(i,t)&&(jt(i.prev,i,t.prev)||jt(i,t.prev,t))||Ys(i,t)&&jt(i.prev,i,i.next)>0&&jt(t.prev,t,t.next)>0)}function jt(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ys(i,t){return i.x===t.x&&i.y===t.y}function Fc(i,t,e,n){let s=ps(jt(i,t,e)),r=ps(jt(i,t,n)),o=ps(jt(e,n,i)),a=ps(jt(e,n,t));return!!(s!==r&&o!==a||s===0&&fs(i,e,t)||r===0&&fs(i,n,t)||o===0&&fs(e,i,n)||a===0&&fs(e,t,n))}function fs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ps(i){return i>0?1:i<0?-1:0}function sm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fi(i,t){return jt(i.prev,i,i.next)<0?jt(i,t,i.next)>=0&&jt(i,i.prev,t)>=0:jt(i,t,i.prev)<0||jt(i,i.next,t)<0}function rm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bc(i,t){let e=new ua(i.i,i.x,i.y),n=new ua(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lc(i,t,e,n){let s=new ua(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ua(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function am(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ei=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hc(t),uc(n,t);let o=t.length;e.forEach(hc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,uc(n,e[c]);let a=Wp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function hc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ks=class i extends rn{constructor(t=new Ni([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:om,v,A=!1,I,R,w,X;d&&(v=d.getSpacedPoints(h),A=!0,f=!1,I=d.computeFrenetFrames(h,!1),R=new L,w=new L,X=new L),f||(p=0,m=0,g=0,_=0);let S=a.extractPoints(l),b=S.shape,O=S.holes;if(!Ei.isClockWise(b)){b=b.reverse();for(let T=0,ot=O.length;T<ot;T++){let W=O[T];Ei.isClockWise(W)&&(O[T]=W.reverse())}}let rt=Ei.triangulateShape(b,O),P=b;for(let T=0,ot=O.length;T<ot;T++){let W=O[T];b=b.concat(W)}function N(T,ot,W){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(ot,W)}let H=b.length,J=rt.length;function Y(T,ot,W){let st,q,Et,mt=T.x-ot.x,y=T.y-ot.y,x=W.x-T.x,D=W.y-T.y,nt=mt*mt+y*y,tt=mt*D-y*x;if(Math.abs(tt)>Number.EPSILON){let K=Math.sqrt(nt),Mt=Math.sqrt(x*x+D*D),dt=ot.x-y/K,xt=ot.y+mt/K,wt=W.x-D/Mt,Dt=W.y+x/Mt,et=((wt-dt)*D-(Dt-xt)*x)/(mt*D-y*x);st=dt+mt*et-T.x,q=xt+y*et-T.y;let Wt=st*st+q*q;if(Wt<=2)return new ht(st,q);Et=Math.sqrt(Wt/2)}else{let K=!1;mt>Number.EPSILON?x>Number.EPSILON&&(K=!0):mt<-Number.EPSILON?x<-Number.EPSILON&&(K=!0):Math.sign(y)===Math.sign(D)&&(K=!0),K?(st=-y,q=mt,Et=Math.sqrt(nt)):(st=mt,q=y,Et=Math.sqrt(nt/2))}return new ht(st/Et,q/Et)}let G=[];for(let T=0,ot=P.length,W=ot-1,st=T+1;T<ot;T++,W++,st++)W===ot&&(W=0),st===ot&&(st=0),G[T]=Y(P[T],P[W],P[st]);let $=[],j,ut=G.concat();for(let T=0,ot=O.length;T<ot;T++){let W=O[T];j=[];for(let st=0,q=W.length,Et=q-1,mt=st+1;st<q;st++,Et++,mt++)Et===q&&(Et=0),mt===q&&(mt=0),j[st]=Y(W[st],W[Et],W[mt]);$.push(j),ut=ut.concat(j)}for(let T=0;T<p;T++){let ot=T/p,W=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let q=0,Et=P.length;q<Et;q++){let mt=N(P[q],G[q],st);at(mt.x,mt.y,-W)}for(let q=0,Et=O.length;q<Et;q++){let mt=O[q];j=$[q];for(let y=0,x=mt.length;y<x;y++){let D=N(mt[y],j[y],st);at(D.x,D.y,-W)}}}let k=g+_;for(let T=0;T<H;T++){let ot=f?N(b[T],ut[T],k):b[T];A?(w.copy(I.normals[0]).multiplyScalar(ot.x),R.copy(I.binormals[0]).multiplyScalar(ot.y),X.copy(v[0]).add(w).add(R),at(X.x,X.y,X.z)):at(ot.x,ot.y,0)}for(let T=1;T<=h;T++)for(let ot=0;ot<H;ot++){let W=f?N(b[ot],ut[ot],k):b[ot];A?(w.copy(I.normals[T]).multiplyScalar(W.x),R.copy(I.binormals[T]).multiplyScalar(W.y),X.copy(v[T]).add(w).add(R),at(X.x,X.y,X.z)):at(W.x,W.y,u/h*T)}for(let T=p-1;T>=0;T--){let ot=T/p,W=m*Math.cos(ot*Math.PI/2),st=g*Math.sin(ot*Math.PI/2)+_;for(let q=0,Et=P.length;q<Et;q++){let mt=N(P[q],G[q],st);at(mt.x,mt.y,u+W)}for(let q=0,Et=O.length;q<Et;q++){let mt=O[q];j=$[q];for(let y=0,x=mt.length;y<x;y++){let D=N(mt[y],j[y],st);A?at(D.x,D.y+v[h-1].y,v[h-1].x+W):at(D.x,D.y,u+W)}}}F(),Z();function F(){let T=s.length/3;if(f){let ot=0,W=H*ot;for(let st=0;st<J;st++){let q=rt[st];yt(q[2]+W,q[1]+W,q[0]+W)}ot=h+p*2,W=H*ot;for(let st=0;st<J;st++){let q=rt[st];yt(q[0]+W,q[1]+W,q[2]+W)}}else{for(let ot=0;ot<J;ot++){let W=rt[ot];yt(W[2],W[1],W[0])}for(let ot=0;ot<J;ot++){let W=rt[ot];yt(W[0]+H*h,W[1]+H*h,W[2]+H*h)}}n.addGroup(T,s.length/3-T,0)}function Z(){let T=s.length/3,ot=0;it(P,ot),ot+=P.length;for(let W=0,st=O.length;W<st;W++){let q=O[W];it(q,ot),ot+=q.length}n.addGroup(T,s.length/3-T,1)}function it(T,ot){let W=T.length;for(;--W>=0;){let st=W,q=W-1;q<0&&(q=T.length-1);for(let Et=0,mt=h+p*2;Et<mt;Et++){let y=H*Et,x=H*(Et+1),D=ot+st+y,nt=ot+q+y,tt=ot+q+x,K=ot+st+x;At(D,nt,tt,K)}}}function at(T,ot,W){c.push(T),c.push(ot),c.push(W)}function yt(T,ot,W){_t(T),_t(ot),_t(W);let st=s.length/3,q=E.generateTopUV(n,s,st-3,st-2,st-1);bt(q[0]),bt(q[1]),bt(q[2])}function At(T,ot,W,st){_t(T),_t(ot),_t(st),_t(ot),_t(W),_t(st);let q=s.length/3,Et=E.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);bt(Et[0]),bt(Et[1]),bt(Et[3]),bt(Et[1]),bt(Et[2]),bt(Et[3])}function _t(T){s.push(c[T*3+0]),s.push(c[T*3+1]),s.push(c[T*3+2])}function bt(T){r.push(T.x),r.push(T.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ca[s.type]().fromJSON(s)),new i(n,t.options)}},om={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(f,1-g),new ht(_,1-d)]:[new ht(a,1-c),new ht(h,1-u),new ht(m,1-g),new ht(p,1-d)]}};function cm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var da=class extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zi=class extends da{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ms(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fa=class extends ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xo,endingEnd:xo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vo:r=t,a=2*e-n;break;case yo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vo:o=t,c=2*n-e;break;case yo:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,E=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-m)*p+(1.5+m)*_+.5*g,A=m*p-m*_;for(let I=0;I!==a;++I)r[I]=d*o[h+I]+E*o[l+I]+v*o[c+I]+A*o[u+I];return r}},pa=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},ma=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},He=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case xs:e=this.InterpolantFactoryMethodLinear;break;case sr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return sr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&lm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=xs;var Dn=class extends He{};Dn.prototype.ValueTypeName="bool";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=_s;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends He{};ga.prototype.ValueTypeName="color";var _a=class extends He{};_a.prototype.ValueTypeName="number";var xa=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Vi=class extends He{InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.DefaultInterpolation=xs;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nn=class extends He{};Nn.prototype.ValueTypeName="string";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=_s;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends He{};va.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},hm=new ya,Ma=class{constructor(t){this.manager=t!==void 0?t:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Ir=new re,dc=new L,fc=new L,Sa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),Ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ba=class extends Sa{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new ba}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gs=class extends Hs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var La="\\[\\]\\.:\\/",um=new RegExp("["+La+"]","g"),Ia="[^"+La+"]",dm="[^"+La.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",Ia),pm=/(WCOD+)?/.source.replace("WCOD",dm),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ia),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ia),_m=new RegExp("^"+fm+pm+mm+gm+"$"),xm=["material","materials","bones","map"],Ea=class{constructor(t,e,n){let s=n||Kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Kt=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(um,"")}static parseTrackName(t){let e=_m.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=Ea;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ym=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function zc(i,t=Math.PI/3){let e=Math.cos(t),n=(1+1e-10)*100,s=[new L,new L,new L],r=new L,o=new L,a=new L,c=new L;function l(_){let p=~~(_.x*n),d=~~(_.y*n),E=~~(_.z*n);return`${p},${d},${E}`}let h=i.index?i.toNonIndexed():i,u=h.attributes.position,f={};for(let _=0,p=u.count/3;_<p;_++){let d=3*_,E=s[0].fromBufferAttribute(u,d+0),v=s[1].fromBufferAttribute(u,d+1),A=s[2].fromBufferAttribute(u,d+2);r.subVectors(A,v),o.subVectors(E,v);let I=new L().crossVectors(r,o).normalize();for(let R=0;R<3;R++){let w=s[R],X=l(w);X in f||(f[X]=[]),f[X].push(I)}}let m=new Float32Array(u.count*3),g=new be(m,3,!1);for(let _=0,p=u.count/3;_<p;_++){let d=3*_,E=s[0].fromBufferAttribute(u,d+0),v=s[1].fromBufferAttribute(u,d+1),A=s[2].fromBufferAttribute(u,d+2);r.subVectors(A,v),o.subVectors(E,v),a.crossVectors(r,o).normalize();for(let I=0;I<3;I++){let R=s[I],w=l(R),X=f[w];c.set(0,0,0);for(let S=0,b=X.length;S<b;S++){let O=X[S];a.dot(O)>e&&c.add(O)}c.normalize(),g.setXYZ(d+I,c.x,c.y,c.z)}}return h.setAttribute("normal",g),h}(function(){var i=document.getElementById("g3d");if(!i)return;var t;try{t=new Ii({canvas:i,antialias:!0,alpha:!0})}catch{return}t.setPixelRatio(Math.min(innerWidth<=880?1.25:1.5,window.devicePixelRatio||1)),t.toneMapping=Ta,t.toneMappingExposure=1.05;var e=new Os,n=new ye(30,1,.1,100);n.position.z=7.3;var s=new li(t);(function(){var F=document.createElement("canvas");F.width=1024,F.height=512;var Z=F.getContext("2d"),it=Z.createLinearGradient(0,0,0,512);it.addColorStop(0,"#e2c89c"),it.addColorStop(.25,"#8a6e48"),it.addColorStop(.5,"#4a3420"),it.addColorStop(.75,"#5a3c22"),it.addColorStop(1,"#1a100a"),Z.fillStyle=it,Z.fillRect(0,0,1024,512);function at(At,_t,bt,T,ot){var W=Z.createRadialGradient(At,_t,2,At,_t,Math.max(bt,T));W.addColorStop(0,ot),W.addColorStop(.6,ot),W.addColorStop(1,"rgba(0,0,0,0)"),Z.fillStyle=W,Z.save(),Z.translate(At,_t),Z.scale(bt/Math.max(bt,T),T/Math.max(bt,T)),Z.beginPath(),Z.arc(0,0,Math.max(bt,T),0,6.3),Z.fill(),Z.restore()}at(520,100,460,30,"rgba(255,243,220,1)"),at(360,215,360,18,"rgba(255,234,204,0.95)"),at(90,200,40,200,"rgba(255,238,210,1)"),at(900,300,70,130,"rgba(255,244,222,0.9)"),at(520,330,420,22,"rgba(255,200,130,0.8)"),at(300,400,300,18,"rgba(255,180,100,0.6)"),at(760,440,260,20,"rgba(255,170,90,0.5)");var yt=new Ui(F);yt.mapping=Ai,yt.colorSpace=se,e.environment=s.fromEquirectangular(yt).texture})(),e.add(new Gs(16777215,.15));var r=new ki(16773855,2.1);r.position.set(2,4,6),e.add(r);var o=new ki(16766636,.85);o.position.set(-5,-1,2),e.add(o);var a=.11;function c(F){return new ht(F[0]+a*(1040-F[1]),F[1])}var l=[[40,40],[350,40],[350,560],[720,560],[720,40],[1030,40],[1030,1040],[720,1040],[720,820],[40,820]],h=[[40,40],[1030,40],[1030,1040],[40,1040]],u=[[350,300],[720,300],[720,780],[350,780]];function f(F,Z){var it=new Ni(F.map(c));return Z&&it.holes.push(new hi(Z.map(c))),it}var m=2.35/1100;function g(F){var Z=new ks(F,{depth:250,bevelEnabled:!0,bevelThickness:22,bevelSize:16,bevelSegments:14,curveSegments:4,steps:1});Z.rotateX(Math.PI),Z.computeBoundingBox();var it=new L;return Z.boundingBox.getCenter(it),Z.translate(-it.x,-it.y,-it.z),Z.scale(m,m,m),zc(Z,.55)}var _=new zi({color:8015130,metalness:0,roughness:.03,transparent:!0,opacity:.6,depthWrite:!1,ior:1.52,reflectivity:1,clearcoat:1,clearcoatRoughness:0,side:Xe,envMapIntensity:3,specularIntensity:1.4}),p=function(){var F=2048,Z=document.createElement("canvas");Z.width=Z.height=F;var it=Z.getContext("2d");it.fillStyle="#444",it.fillRect(0,0,F,F);var at,yt,At,_t,bt;for(at=0;at<70;at++)yt=Math.random()*F,it.fillStyle="rgba("+(Math.random()<.5?20:110)+","+(Math.random()<.5?20:110)+","+(Math.random()<.5?20:110)+",0.06)",it.fillRect(0,yt,F,8+Math.random()*40);for(at=0;at<7e3;at++)yt=Math.random()*F,At=200+Math.random()*1600,_t=Math.random()*F,bt=24+Math.random()*80|0,it.strokeStyle="rgba("+bt+","+bt+","+bt+","+(.35+Math.random()*.65).toFixed(2)+")",it.lineWidth=.4+Math.random()*1.3,it.beginPath(),it.moveTo(_t-At,yt),it.lineTo(_t+At,yt),it.stroke();var T=new Ui(Z);return T.wrapS=T.wrapT=Ti,T.repeat.set(1/1400,1/1400),T.offset.set(.2,.2),T.anisotropy=t.capabilities.getMaxAnisotropy(),T}(),d=new zi({color:15783588,metalness:1,roughness:.9,roughnessMap:p,bumpMap:p,bumpScale:.01,anisotropy:.85,side:ze,envMapIntensity:2.4}),E=new en;e.add(E);var v=g(f(l)),A=g(f(h,u)),I=.42,R=2.35,w=[-(R+I),0,R+I],X=[];[v,A,v].forEach(function(F,Z){var it=new en;it.position.x=w[Z],it.add(new Ie(F,[_,d])),it.rotation.set(.14,-.22,0),E.add(it),X.push(it)}),E.rotation.set(0,0,0);var S=document.getElementById("hint"),b=!1,O=0,Q=0,rt=0,P=0,N=0;function H(F){return F.touches&&F.touches[0]?F.touches[0]:F}function J(F){b=!0,N=0;var Z=H(F);O=Z.clientX,Q=Z.clientY,i.classList.add("grabbing"),S&&S.classList.add("gone"),F.cancelable&&F.type!=="touchstart"&&F.preventDefault(),document.body.classList.add("grabbing")}function Y(F){if(b){var Z=H(F),it=Z.clientX-O,at=Z.clientY-Q;O=Z.clientX,Q=Z.clientY,E.rotation.y+=it*.01,E.rotation.x+=at*.01,rt=it*.01,P=at*.01}}function G(){b&&(b=!1,document.body.classList.remove("grabbing")),i.classList.remove("grabbing")}i.addEventListener("pointerdown",J),i.addEventListener("mousedown",function(F){F.preventDefault()}),window.addEventListener("pointermove",Y,{passive:!0}),window.addEventListener("pointerup",G),window.addEventListener("pointercancel",G),i.addEventListener("touchstart",J,{passive:!0}),window.addEventListener("touchmove",Y,{passive:!0}),window.addEventListener("touchend",G);function $(){var F=i.getBoundingClientRect(),Z=Math.max(2,F.width|0),it=Math.max(2,F.height|0);t.setSize(Z,it,!1),n.aspect=Z/it;var at=(R*3+I*2)/2*1.12,yt=1.25,At=Math.tan(n.fov*Math.PI/360);n.position.z=Math.max(at/(At*n.aspect),yt/At,4.5),n.updateProjectionMatrix()}$(),window.addEventListener("resize",$);var j=matchMedia("(prefers-reduced-motion: reduce)").matches,ut=0;function k(){if(requestAnimationFrame(k),!document.hidden&&!(innerWidth<=880&&!b&&(ut=ut+1&1))){if(!b&&!j){rt*=.95,P*=.95,E.rotation.y+=rt,E.rotation.x+=P,N+=.016,E.rotation.y+=Math.sin(N*.5)*.0018,E.rotation.x+=Math.cos(N*.42)*.0011;for(var F=0;F<3;F++)X[F].rotation.y=-.22+Math.sin(N*.6+F*2.1)*.05,X[F].rotation.x=.14+Math.cos(N*.5+F*1.7)*.035}t.render(e,n)}}k()})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
