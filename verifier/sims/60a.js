
var PSP82=false;const SPK=k=>(k=='heal'&&!PSP82)?undefined:SP[k];window.LDS={};window.IMGP={n:0,d:0};(function(){try{const D=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,'src');Object.defineProperty(HTMLImageElement.prototype,'src',{configurable:true,get(){return D.get.call(this)},set(v){if(v&&!this.__c&&!window.__ldz){this.__c=1;IMGP.n++;const f=()=>{IMGP.d++};this.addEventListener('load',f,{once:true});this.addEventListener('error',f,{once:true})}D.set.call(this,v)}})}catch(e){}})();
/* ===== Iconos como imágenes (sprites) =====
   Para cambiar un icono: sube img/<nombre>.png junto a index.html y añade su nombre aquí.
   Si la imagen no carga, se muestra el emoji de respaldo. */
/* ===== Base Rush: iconos SVG neón ===== */
var BRI=(function(){const S=(p,x)=>`<svg class="bri" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
 const F='fill="currentColor" fill-opacity=".2"';
 return{
 g:S(`<path ${F} d="M12 2.6l8 4.6v9.6l-8 4.6-8-4.6V7.2z"/><circle cx="12" cy="12" r="3.3"/>`),
 e:S(`<path ${F} d="M12 2.8c3.7 4.4 6 7.2 6 10.3a6 6 0 0 1-12 0c0-3.1 2.3-5.9 6-10.3z"/><path d="M9.2 13.4a3 3 0 0 0 2.2 2.6"/>`),
 tr:S(`<path ${F} d="M7 4h10v5.2a5 5 0 0 1-10 0z"/><path d="M7 6H4v1.4A3.6 3.6 0 0 0 7.4 11M17 6h3v1.4A3.6 3.6 0 0 1 16.6 11M12 14.3V18M8.4 20.5h7.2"/>`),
 gm:S(`<path ${F} d="M7.2 4h9.6l4.2 5.2L12 20.4 3 9.2z"/><path d="M3 9.2h18M9.4 4L7.6 9.2 12 20.4l4.4-11.2L14.6 4"/>`),
 hm:S(`<path ${F} d="M13.6 3.6l6.8 6.8-3.2 3.2-6.8-6.8z"/><path d="M10.4 9.6l-7 7a2.1 2.1 0 0 0 3 3l7-7"/>`),
 sh:S(`<path ${F} d="M12 3l7.5 3v5.6c0 4.5-3.2 7.9-7.5 9.4-4.3-1.5-7.5-4.9-7.5-9.4V6z"/><path d="M9 12l2.2 2.2L15.2 10"/>`),
 tm:S(`<circle ${F} cx="12" cy="12" r="8.6"/><path d="M12 7v5.2l3.3 2"/>`),
 dm:S(`<path ${F} d="M12 2.2l2.3 5.3 5.7-.8-3.5 4.6 3.5 4.6-5.7-.8L12 21.8l-2.3-5.3-5.7.8 3.5-4.6L4 7.7l5.7.8z"/>`),
 st:S(`<path ${F} d="M12 2.8l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.7 6.1 20.8l1.2-6.5L2.5 9.7l6.6-.9z"/>`),
 shop:S(`<path ${F} d="M5.2 8h13.6l-1.1 12.2H6.3z"/><path d="M8.6 8a3.4 3.4 0 0 1 6.8 0"/>`),
 atk:S(`<path d="M4 4l9 9M20 4l-9 9M3.2 6.2L6 3.4M20.8 6.2L18 3.4"/><path ${F} d="M13 13l-4.6 4.6 1.6 1.6L14.6 14.6zM11 13l4.6 4.6-1.6 1.6L9.4 14.6z"/><path d="M6.4 17.6l-2 2M17.6 17.6l2 2"/>`),
 ms:S(`<rect ${F} x="5" y="3" width="14" height="18" rx="2.4"/><path d="M9 8.2h6M9 12h6M9 15.8h3.6"/>`),
 rk:S(`<path ${F} d="M9 20V5h6v15z"/><path d="M3.6 20v-8h5.4M15 20v-10.5h5.4V20M2.5 20h19"/>`),
 menu:S(`<path d="M4 7h16M4 12h16M4 17h16"/>`),
 flame:S(`<path ${F} d="M12 2.4c.9 3.9 5.4 6 5.4 10.8a5.4 5.4 0 0 1-10.8 0c0-2.2 1-3.6 2.2-4.8.2 1.9 1 2.9 2.2 3.2-.8-3.7-.4-6.2 1-9.2z"/>`),
 key:S(`<circle cx="8" cy="14" r="4.2"/><path d="M11 11l8.6-8.6M16 5.6l2.8 2.8M13.8 7.8l2.2 2.2"/>`),
 user:S(`<circle cx="12" cy="8.2" r="4"/><path d="M4.6 20.4a7.4 7.4 0 0 1 14.8 0"/>`),
 lock:S(`<rect x="4.6" y="10.4" width="14.8" height="10" rx="2.4"/><path d="M8 10.4V7.6a4 4 0 0 1 8 0v2.8"/>`),
 box:S(`<path ${F} d="M3.6 8.4L12 4l8.4 4.4v8.4L12 21.2l-8.4-4.4z"/><path d="M3.6 8.4L12 12.8l8.4-4.4M12 12.8v8.4"/>`),
 chk:S(`<path d="M5 12.6l4.4 4.4L19 7.4"/>`),
 bell:S(`<path ${F} d="M6 16.8V11a6 6 0 0 1 12 0v5.8l1.6 1.8H4.4z"/><path d="M10 21h4"/>`),
 slot:S(`<rect ${F} x="4" y="4" width="14" height="16" rx="2.6"/><path d="M7.5 9h2M11 9h2M14.5 9h0M7 13.5h8"/><path d="M18 8v6M18 8h2.2v2.6H18"/>`),
 vol:S(`<path ${F} d="M4 9.6h3.4L12 5.6v12.8l-4.6-4H4z"/><path d="M15.4 9a4 4 0 0 1 0 6M17.8 6.6a7.4 7.4 0 0 1 0 10.8"/>`),
 gfx:S(`<rect ${F} x="3" y="4.6" width="18" height="12" rx="2.2"/><path d="M8.6 20h6.8M12 16.6V20"/>`),
 fx:S(`<path ${F} d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15.6l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>`),
 scr:S(`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`),
 help:S(`<circle ${F} cx="12" cy="12" r="8.6"/><path d="M9.6 9.6a2.5 2.5 0 1 1 3.6 2.2c-.8.5-1.2 1-1.2 1.9M12 16.8h0"/>`),
 out:S(`<path d="M9.5 4.6H6.4A2.4 2.4 0 0 0 4 7v10a2.4 2.4 0 0 0 2.4 2.4h3.1M15 8l4 4-4 4M19 12H9.6"/>`),
 chev:S(`<path d="M9.4 6l6 6-6 6"/>`),
 back:S(`<path d="M14.6 6l-6 6 6 6"/>`),
 chat:S(`<path ${F} d="M4.4 5.6h15.2a1.6 1.6 0 0 1 1.6 1.6v8.2a1.6 1.6 0 0 1-1.6 1.6H11l-4.6 3.4v-3.4H4.4a1.6 1.6 0 0 1-1.6-1.6V7.2a1.6 1.6 0 0 1 1.6-1.6z"/>`),
 x:S(`<path d="M6 6l12 12M18 6L6 18"/>`)}})();

var BRFX=(function(){const d={spark:1,conf:1,amb:1,rip:1,shk:1,vib:1};try{const j=JSON.parse(localStorage.getItem('brfx')||'{}');for(const k in d)if(j[k]===0||j[k]===1)d[k]=j[k]}catch(e){}return d})();function brfxSave(){try{localStorage.setItem('brfx',JSON.stringify(BRFX))}catch(e){}}
var brSlotOk=function(){return false},brSlotDot=function(){return false};

const BUILD='v80';
const IMG_DIR='img/',IMGS={ranking:1};
const ICO=(k,fb)=>IMGS[k]?`<img class=pic src="${IMG_DIR}${k}.png" alt="" draggable=false onerror="this.replaceWith(document.createTextNode('${fb}'))">`:fb;
const OFFLINE=false;let N=50,TW=36,TH=25,OX=340,OY=84,VT=0,cv=document.getElementById('c'),g=cv.getContext('2d'),K='clanclash2';
const M=l=>1+.4*(l-1);
/* ================= v19: mina de oro 3x3, grama bajo estructuras y zona de despliegue fusionada ================= */
const MINE=[null,
{cap:1000,rate:400,hp:400,boost:0,cost:300,time:20,th:1},
{cap:2000,rate:800,hp:440,boost:0,cost:600,time:120,th:1},
{cap:3000,rate:1200,hp:480,boost:0,cost:1400,time:480,th:2},
{cap:5000,rate:1600,hp:520,boost:0,cost:2800,time:1200,th:2},
{cap:10000,rate:2000,hp:560,boost:4,cost:6000,time:4800,th:3},
{cap:20000,rate:2600,hp:600,boost:5,cost:14000,time:21600,th:3},
{cap:30000,rate:3200,hp:640,boost:6,cost:28000,time:43200,th:4},
{cap:50000,rate:3800,hp:680,boost:7,cost:56000,time:57600,th:4},
{cap:75000,rate:4400,hp:720,boost:8,cost:112000,time:72000,th:5},
{cap:100000,rate:5600,hp:780,boost:9,cost:150000,time:86400,th:5},
{cap:150000,rate:7000,hp:860,boost:10,cost:200000,time:115200,th:7},
{cap:200000,rate:8400,hp:960,boost:10,cost:400000,time:144000,th:8},
{cap:250000,rate:9800,hp:1080,boost:11,cost:800000,time:288000,th:10}];
const MSC=.78; /* escala del diseño de la mina dentro de su 3x3 */
const PS=(b,u,v,z=0)=>P(b.x+1.5+(u-1.5)*MSC,b.y+1.5+(v-1.5)*MSC,z*MSC);
const STO=[null,
{cap:2250,hp:400,cost:600,time:10,th:1},
{cap:4500,hp:600,cost:1500,time:300,th:2},
{cap:9000,hp:800,cost:3000,time:1200,th:2},
{cap:18000,hp:1000,cost:6000,time:3600,th:3},
{cap:37500,hp:1200,cost:12000,time:7200,th:3},
{cap:67500,hp:1400,cost:24000,time:10800,th:3},
{cap:150000,hp:1600,cost:50000,time:14400,th:4},
{cap:337500,hp:1700,cost:100000,time:18000,th:4},
{cap:675000,hp:1800,cost:200000,time:28800,th:5},
{cap:1275000,hp:1900,cost:250000,time:43200,th:6},
{cap:2625000,hp:2100,cost:500000,time:57600,th:7}];
const isSt=b=>b.t=='gst'||b.t=='est';
const BOOST_SECS=3600; /* duración de la potenciación x2 (segundos) */
const ZM=1; /* margen (casillas) del cuadro transparente alrededor de cada estructura */
const fmtFill=s=>{s=Math.round(s);const h=s/3600|0,m=s%3600/60|0,x=s%60;return[h&&h+'h',m&&m+'m',x&&x+'s'].filter(Boolean).join(' ')||'0s'};
const fmtHM=s=>{s=Math.ceil(s);const h=s/3600|0,m=(s%3600)/60|0,x=s%60;return h>=24?(h/24|0)+'d'+(h%24?' '+h%24+'h':''):h?h+'h '+String(m).padStart(2,'0')+'m':m?m+'m '+String(x).padStart(2,'0')+'s':x+'s'};

/* ---- zona de despliegue: unión de los cuadros de todas las estructuras ---- */
const ZK=(x,y)=>(x+20)*128+(y+20);
function zoneSet(L){const Z=new Set();for(const b of L){if(!b||(b.hp<=0&&!b.dd)||!TY[b.t]||TY[b.t].trap)continue;const s=TY[b.t].s;for(let y=b.y-ZM;y<b.y+s+ZM;y++)for(let x=b.x-ZM;x<b.x+s+ZM;x++)Z.add(ZK(x,y))}return Z}
const inZone=(L,x,y)=>zoneSet(L).has(ZK(Math.floor(x),Math.floor(y)));
function drZone(Z,rd=0){if(!Z.size)return;const q=(x,y)=>P(x,y);
 g.beginPath();const seg=[];
 for(const k of Z){const x=(k>>7)-20,y=(k&127)-20;
  const a=q(x-.03,y-.03),b2=q(x+1.03,y-.03),c=q(x+1.03,y+1.03),d=q(x-.03,y+1.03);
  g.moveTo(a[0],a[1]);g.lineTo(b2[0],b2[1]);g.lineTo(c[0],c[1]);g.lineTo(d[0],d[1]);g.closePath();
  if(!Z.has(ZK(x,y-1)))seg.push([x,y,x+1,y]);
  if(!Z.has(ZK(x+1,y)))seg.push([x+1,y,x+1,y+1]);
  if(!Z.has(ZK(x,y+1)))seg.push([x,y+1,x+1,y+1]);
  if(!Z.has(ZK(x-1,y)))seg.push([x,y,x,y+1])}
 g.fillStyle=rd>0?`rgba(255,70,60,${(.13+.15*rd).toFixed(3)})`:'rgba(255,255,255,.15)';g.fill();
 g.beginPath();for(const s of seg){const a=q(s[0],s[1]),b2=q(s[2],s[3]);g.moveTo(a[0],a[1]);g.lineTo(b2[0],b2[1])}
 g.strokeStyle=rd>0?`rgba(255,90,80,${(.4+.35*rd).toFixed(3)})`:'rgba(255,255,255,.42)';g.lineWidth=1.6;g.lineCap='round';g.stroke();g.lineCap='butt'}
let _zpk=null,_zt=0;
function drWZone(){const L=mode=='a'?E.b:S.b,now=performance.now();WMAP={};for(const b of L)if(b.t=='wall'&&b.hp>0)WMAP[b.x+','+b.y]=b;
 if(mode=='v'){if(pk!==_zpk){_zpk=pk;if(pk)_zt=now+5000}
  let al=0;if(sel&&gh)al=1;else if(pk&&now<_zt)al=Math.min(1,(_zt-now)/500);
  if(al<=0)return;g.save();g.globalAlpha=al;drZone(zoneSet(L));g.restore();return}
 const wz=A&&A.zw>now,rd=wz?.5+.5*Math.sin(now/330):0;drZone(zoneSet(L),wz?rd+.001:0)}

/* ---- grama bajo cada estructura (marca el espacio que ocupa) ---- */
const MR=n=>{n=Math.imul(n^61,0x45d9f3b);n=Math.imul(n^(n>>>16),0x45d9f3b);return((n^(n>>>16))>>>0)%1000/1000};
function drGrass(){const L=mode=='a'?E.b:S.b;
 for(const b of L){if(!b||(b.hp<=0&&!(mode=='a'))||b.t=='wall'||!TY[b.t]||TY[b.t].trap)continue;
  const s=TY[b.t].s,sd=b.x*131+b.y*71+s,C=[[0,0,0,-1],[s,0,1,0],[s,s,0,1],[0,s,-1,0]],pts=[],n=s*3;
  for(let e=0;e<4;e++){const A=C[e],B=C[(e+1)%4],nx=[0,1,0,-1][e],ny=[-1,0,1,0][e];
   for(let i=0;i<n;i++){const t=i/n,j=-MR(sd+e*17+i*5)*.14;pts.push([A[0]+(B[0]-A[0])*t+nx*j,A[1]+(B[1]-A[1])*t+ny*j])}}
  g.beginPath();pts.forEach((p,i)=>{const q=P(b.x+p[0],b.y+p[1]);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])});g.closePath();
  g.fillStyle='#8ed24c';g.fill();
  g.beginPath();for(let i=0;i<s*s*7;i++){const u=.12+MR(sd+i*3)*(s-.24),v=.12+MR(sd+i*3+1)*(s-.24),q=P(b.x+u,b.y+v);g.moveTo(q[0],q[1]);g.lineTo(q[0]+(MR(sd+i)-.5)*3,q[1]-2.5-MR(sd+i*7)*3)}
  g.strokeStyle='#5f9e2e';g.lineWidth=1.3;g.stroke();
  g.beginPath();for(let i=0;i<s*s*5;i++){const u=.12+MR(sd+i*5+2)*(s-.24),v=.12+MR(sd+i*5+4)*(s-.24),q=P(b.x+u,b.y+v);g.moveTo(q[0],q[1]);g.lineTo(q[0]+(MR(sd+i+9)-.5)*3,q[1]-2-MR(sd+i*11)*3)}
  g.strokeStyle='#b9ec72';g.lineWidth=1.1;g.stroke()}}

/* ---- Mina de oro (3x3) ---- */
function mPoly(b,pts,col,st){g.beginPath();for(let i=0;i<pts.length;i++){const p=pts[i],q=PS(b,p[0],p[1],p[2]);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])}g.closePath();g.fillStyle=col;g.fill();if(st){g.strokeStyle=st;g.lineWidth=1;g.stroke()}}
function mBox(b,u0,v0,u1,v1,z0,z1,c,st){mPoly(b,[[u0,v1,z0],[u1,v1,z0],[u1,v1,z1],[u0,v1,z1]],sh(c,.9),st);mPoly(b,[[u1,v0,z0],[u1,v1,z0],[u1,v1,z1],[u1,v0,z1]],sh(c,.62),st);mPoly(b,[[u0,v0,z1],[u1,v0,z1],[u1,v1,z1],[u0,v1,z1]],sh(c,1.08),st)}
function mNug(b,u,v,z,k){const[x,y]=PS(b,u,v,z),s=(k||3.2)*MSC;g.beginPath();g.moveTo(x-s,y);g.lineTo(x-s*.5,y-s*.9);g.lineTo(x+s*.55,y-s);g.lineTo(x+s,y-s*.1);g.lineTo(x+s*.4,y+s*.7);g.lineTo(x-s*.6,y+s*.6);g.closePath();g.fillStyle='#ffd02e';g.fill();g.strokeStyle='#9a5d05';g.lineWidth=1;g.stroke();g.beginPath();g.moveTo(x-s*.4,y-s*.3);g.lineTo(x-s*.1,y-s*.8);g.lineTo(x+s*.4,y-s*.6);g.closePath();g.fillStyle='#fff3a3';g.fill()}
function mStar(x,y,r){g.beginPath();g.moveTo(x,y-r);g.lineTo(x+r*.3,y-r*.3);g.lineTo(x+r,y);g.lineTo(x+r*.3,y+r*.3);g.lineTo(x,y+r);g.lineTo(x-r*.3,y+r*.3);g.lineTo(x-r,y);g.lineTo(x-r*.3,y-r*.3);g.closePath();g.fill()}
function mPile(b,u0,v0,u1,v1,z0,top,n,seed){const L=[];for(let i=0;i<n;i++)L.push([u0+MR(seed+i*3)*(u1-u0),v0+MR(seed+i*3+1)*(v1-v0),MR(seed+i*3+2)]);L.sort((a,c)=>a[0]+a[1]-c[0]-c[1]);
 for(const[u,v,r]of L){const k=(u-u0)/(u1-u0||1),z=z0+Math.sin(k*Math.PI)*top*.6*(1-(v-v0)/(v1-v0||1)*.4)+r*1.5;mNug(b,u,v,z,3+r*1.4)}}
function drMine(b){const s=3,h=TY.mine.h,lv=Math.max(1,Math.min(MT(b).length-1,b.lv|0)),T=Math.min(5,Math.ceil(lv/2)),f=Math.max(0,Math.min(1,(b.st||0)/LIMF(b))),now=performance.now(),rz=u=>34-6*(u-.6)/1.4;
 mPoly(b,[[.45,.4,0],[2.8,.4,0],[2.95,2.8,0],[.45,2.85,0]],'rgba(20,40,10,.16)');
 /* pared lateral (+y) de tablones */
 const wd=['#8a5a2b','#7a4f25','#946130','#6f4522'];
 for(let i=0,u=.6;u<1.99;i++,u+=.14){const u2=Math.min(2,u+.14);mPoly(b,[[u,2,0],[u2,2,0],[u2,2,rz(u2)],[u,2,rz(u)]],sh(wd[i%4],.95),'rgba(30,15,5,.6)')}
 /* cara frontal (+x) */
 mPoly(b,[[2,.5,0],[2,2,0],[2,2,28],[2,.5,28]],sh('#7a4d22',.66),'#1b0f06');
 for(const v of[.58,.66,.74,1.88,1.96,1.8]){mPoly(b,[[2,v,0],[2,v+.003,0],[2,v+.003,28],[2,v,28]],'rgba(20,10,3,.6)')}
 /* boca de la mina */
 {const a=PS(b,2,1.3,0),c2=PS(b,2,1.3,22),gr=g.createLinearGradient(0,c2[1],0,a[1]);gr.addColorStop(0,'#1d1007');gr.addColorStop(.5,'#4a2c0c');gr.addColorStop(1,T>=3?'#d49a22':'#b9801c');
  mPoly(b,[[2,.88,0],[2,1.72,0],[2,1.72,22],[2,.88,22]],gr,'#120a04');
  mPoly(b,[[2,.95,0],[2,1.1,12],[2,1.2,0]],'rgba(20,8,2,.55)');mPoly(b,[[2,1.45,0],[2,1.6,13],[2,1.68,0]],'rgba(20,8,2,.55)');
  const gn=2+T;for(let i=0;i<gn;i++)mNug(b,2,.95+MR(i*7+3)*.7,1.5+MR(i*5+1)*4,2+MR(i)*1.2)}
 /* vigas, dintel */
 mBox(b,2,.76,2.1,.9,0,25,'#7a4d22','#1b0f06');mBox(b,2,1.7,2.1,1.84,0,25,'#7a4d22','#1b0f06');
 mBox(b,2,.72,2.1,1.88,22,27,'#8a5a2b','#1b0f06');
 if(T>=5){mPoly(b,[[2.1,.72,27],[2.1,1.88,27],[2.1,1.88,26],[2.1,.72,26]],'#ffd23f');mPoly(b,[[2.1,.9,0],[2.1,.9,22],[2.1,.88,22],[2.1,.88,0]],'#ffd23f');mPoly(b,[[2.1,1.7,0],[2.1,1.7,22],[2.1,1.72,22],[2.1,1.72,0]],'#ffd23f')}
 /* techo */
 const rc2=['#9a6633','#8a5a2b','#a8743a'];
 for(let j=0;j<6;j++){const v0=.5+j*.25,v1=v0+.25;mPoly(b,[[.6,v0,34],[2,v0,28],[2,v1,28],[.6,v1,34]],rc2[j%3],'rgba(30,15,5,.55)')}
 if(T>=3)for(const u of[.95,1.55]){const u2=u+.14;mPoly(b,[[u,.5,rz(u)+.2],[u2,.5,rz(u2)+.2],[u2,2,rz(u2)+.2],[u,2,rz(u)+.2]],'#6a7380','#2d3540');for(let v=.65;v<2;v+=.35){const[x,y]=P(b.x+u+.07,b.y+v,rz(u)+.4);g.fillStyle='#c5ccd6';g.beginPath();g.arc(x,y,1.2,0,7);g.fill()}}
 if(T>=5)mPoly(b,[[1.92,.5,28.3],[2,.5,28.3],[2,2,28.3],[1.92,2,28.3]],'#ffd23f','#a86a00');
 /* piedras del borde del techo y marco */
 const st=['#b98a55','#a8794a','#c79a66'];
 for(let i=0,u=.6;u<1.95;i++,u+=.27)mBox(b,u,1.93,Math.min(2,u+.24),2.1,rz(u)-2,rz(u)+2.5,st[i%3],'#4a2f14');
 for(let i=0,v=.55;v<1.9;i++,v+=.3)mBox(b,2,v,2.12,Math.min(1.95,v+.26),27,30.5,st[(i+1)%3],'#4a2f14');
 if(T>=4){const[lx,ly]=PS(b,2.15,.8,16),gl=g.createRadialGradient(lx,ly,1,lx,ly,12);gl.addColorStop(0,'rgba(255,220,110,.9)');gl.addColorStop(1,'rgba(255,200,60,0)');g.fillStyle=gl;g.beginPath();g.arc(lx,ly,12,0,7);g.fill();g.fillStyle='#ffe58a';g.strokeStyle='#4a2f14';g.lineWidth=1;g.beginPath();g.arc(lx,ly,3,0,7);g.fill();g.stroke()}
 /* vías */
 for(let u=2.1;u<2.95;u+=.2)mPoly(b,[[u,1.08,.2],[u+.08,1.08,.2],[u+.08,1.66,.2],[u,1.66,.2]],'#5b3a1a');
 mPoly(b,[[2.05,1.15,.6],[2.98,1.15,.6],[2.98,1.2,.6],[2.05,1.2,.6]],'#8a8a94');mPoly(b,[[2.05,1.54,.6],[2.98,1.54,.6],[2.98,1.59,.6],[2.05,1.59,.6]],'#8a8a94');
 /* caja con oro */
 mBox(b,2.45,.45,2.95,.95,0,9,'#8a5a2b','#2a170a');
 mPile(b,2.48,.48,2.92,.92,9,6,Math.round(4+f*10),b.x*3+b.y);
 if(T>=4){mBox(b,2.15,.42,2.42,.7,0,7,'#7a4f25','#2a170a');mPile(b,2.17,.44,2.4,.68,7,3,3+Math.round(f*4),b.x+b.y*5)}
 /* vagoneta */
 mBox(b,2.25,1.12,2.78,1.64,2.5,11,'#d2cfca','#3a3a3a');
 for(const[u,v]of[[2.4,1.64],[2.6,1.64]]){const[x,y]=PS(b,u,v,2.6);g.beginPath();g.ellipse(x,y,4.4*MSC,5.2*MSC,0,0,7);g.fillStyle='#2e63b5';g.fill();g.strokeStyle='#10264a';g.lineWidth=1.5;g.stroke();g.beginPath();g.arc(x,y,1.6,0,7);g.fillStyle='#a9c2ea';g.fill()}
 {const[x,y]=PS(b,2.5,1.64,7);g.fillStyle='rgba(170,80,50,.7)';g.beginPath();g.ellipse(x-4,y,3,1.6,0,0,7);g.ellipse(x+5,y+1.5,2,1.2,0,0,7);g.fill()}
 mPile(b,2.28,1.15,2.75,1.6,11,8,Math.round(5+f*13),b.x*7+b.y*3);
 /* piedras */
 {const L=[[.8,2.35,4],[1.2,2.5,5],[1.6,2.32,3.6],[.55,2.55,3.4],[1.9,2.5,3],[1.05,2.8,3.6],[1.45,2.78,4],[.72,2.82,3]];if(T>=2)L.push([1.75,2.8,3.2],[.4,2.3,3.4]);if(T>=4)L.push([.5,2.15,3],[2.1,2.75,3]);L.sort((a,c)=>a[0]+a[1]-c[0]-c[1]);
  for(const[u,v,r0]of L){const r=r0*MSC,[x,y]=PS(b,u,v,r0*.5);g.beginPath();g.ellipse(x,y,r*1.9,r*1.35,0,0,7);g.fillStyle='#cfc9bd';g.fill();g.beginPath();g.ellipse(x+r*.2,y+r*.2,r*1.6,r*1.0,0,.2,3.1);g.fillStyle='#9b9588';g.fill();g.beginPath();g.ellipse(x-r*.4,y-r*.4,r*.7,r*.4,0,0,7);g.fillStyle='rgba(255,255,255,.35)';g.fill()}}
 if(T>=5){mBox(b,2.5,2.0,2.85,2.3,0,2.5,'#f2b21a','#8a5a05');mBox(b,2.55,2.05,2.8,2.25,2.5,5,'#ffd23f','#8a5a05')}
 /* potenciación */
 if(b.bst>0){const[ax,ay]=P(b.x+1.5,b.y+1.5);g.save();const pu=.5+.5*Math.sin(now/260),gr=g.createRadialGradient(ax,ay,5,ax,ay,s*TW*.62);gr.addColorStop(0,'rgba(255,225,90,'+(.16+.14*pu)+')');gr.addColorStop(1,'rgba(255,200,40,0)');g.fillStyle=gr;g.beginPath();g.ellipse(ax,ay,s*TW*.62,s*TH*.62,0,0,7);g.fill();
  for(let i=0;i<6;i++){const ph=(now/1100+i/6)%1,[x,y]=P(b.x+.7+MR(i*13)*2.1,b.y+.7+MR(i*7+3)*2,16+ph*46);g.globalAlpha=Math.sin(ph*Math.PI);g.fillStyle='#fff3a3';mStar(x,y,3+MR(i)*2.5)}g.restore()}
 /* insignia de nivel, vida y selección */
 const[cx,cy]=P(b.x+1.5,b.y+1.5,h);g.font='14px Lilita One,Arial Black,sans-serif';const[bx,by]=P(b.x+s,b.y+s);g.beginPath();g.arc(bx,by+10,10,0,7);g.fillStyle='#1d4f9a';g.fill();g.lineWidth=2.5;g.strokeStyle='#fff';g.stroke();g.fillStyle='#fff';g.fillText(b.lv,bx,by+11);
 if(b.hp<b.max&&b.rg==null)bar(cx,cy-26,30,b.hp/b.max);
 if(mode=='v'&&b===pk){const[ax,ay]=P(b.x+1.5,b.y+1.5);g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.ellipse(ax,ay,s*TW*.45,s*TH*.45,0,0,7);g.stroke()}}
async function boostMine(b){if(GB||!isMn(b)||b.nb||b.ruin||b.bst>0)return;const c=(MT(b)[Math.max(1,Math.min(MT(b).length-1,b.lv))].boost*2);if(!c){snd('deny');return}GB=1;try{if(!(await gemPay(c))){snd('deny');POP.push({x:b.x+1.5,y:b.y+1.5,t:1.6,txt:'Faltan esmeraldas'});return}b.bst=BOOST_SECS;snd(660);POP.push({x:b.x+1.5,y:b.y+1.5,t:1.8,txt:'⚡ Minería x2'});save()}finally{GB=0}}

/* ---- Extractor de elixir (3x3) ---- */
const PUMP=[null,
{cap:500,rate:400,hp:400,boost:0,cost:300,time:20,th:1},
{cap:1000,rate:800,hp:450,boost:0,cost:600,time:120,th:1},
{cap:1500,rate:1200,hp:500,boost:0,cost:1400,time:1800,th:2},
{cap:2500,rate:1600,hp:550,boost:0,cost:2800,time:7200,th:2},
{cap:10000,rate:2000,hp:590,boost:4,cost:6000,time:7200,th:3},
{cap:20000,rate:2600,hp:610,boost:5,cost:14000,time:28800,th:3},
{cap:30000,rate:3200,hp:630,boost:6,cost:28000,time:43200,th:4},
{cap:50000,rate:3800,hp:660,boost:7,cost:56000,time:57600,th:4},
{cap:75000,rate:4400,hp:680,boost:8,cost:112000,time:72000,th:5},
{cap:100000,rate:5600,hp:710,boost:9,cost:168000,time:86400,th:5},
{cap:150000,rate:7000,hp:860,boost:10,cost:336000,time:115200,th:7},
{cap:200000,rate:8400,hp:960,boost:10,cost:672000,time:172800,th:8},
{cap:250000,rate:9800,hp:1080,boost:11,cost:1008000,time:518400,th:10}];
const isMn=b=>b.t=='mine'||b.t=='pump';
const MT=b=>b.t=='pump'?PUMP:MINE;
function mOct(b,cu,cv,r,z0,z1,c,st){const V=[];for(let k=0;k<8;k++){const a=(k+.5)*Math.PI/4;V.push([cu+Math.cos(a)*r,cv+Math.sin(a)*r])}
 for(let k=0;k<8;k++){const a=(k+1)*Math.PI/4,nu=Math.cos(a),nv=Math.sin(a);if(nu+nv<=-.2)continue;const p=V[k],q=V[(k+1)%8];mPoly(b,[[p[0],p[1],z0],[q[0],q[1],z0],[q[0],q[1],z1],[p[0],p[1],z1]],sh(c,Math.max(.45,.74+.17*(nv-nu))),st)}
 mPoly(b,V.map(p=>[p[0],p[1],z1]),sh(c,1.1),st)}
function mPipe(b,pts,w,col,hl){g.save();g.lineJoin='round';g.lineCap='round';g.beginPath();pts.forEach((p,i)=>{const q=PS(b,p[0],p[1],p[2]);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])});
 g.strokeStyle='#4d525c';g.lineWidth=(w+2.4)*MSC;g.stroke();g.strokeStyle=col;g.lineWidth=w*MSC;g.stroke();g.strokeStyle=hl;g.lineWidth=w*.3*MSC;g.stroke();g.restore()}
function drPump(b){const s=3,h=TY.pump.h,lv=Math.max(1,Math.min(MT(b).length-1,b.lv|0)),T=Math.min(5,Math.ceil(lv/2)),f=Math.max(0,Math.min(1,(b.st||0)/LIMF(b))),now=performance.now();
 const cu=1.75,cv=1.2;
 mPoly(b,[[.5,.5,0],[2.8,.4,0],[2.9,2.6,0],[.6,2.7,0]],'rgba(20,40,10,.16)');
 /* base octagonal */
 mOct(b,cu,cv,1.02,0,2,'#e0a82a','#5a3a12');
 mOct(b,cu,cv,.92,2,6,'#8a5a2b','#3a2209');
 mOct(b,cu,cv,.84,6,7.4,T>=2?'#ffd23f':'#f0c040','#5a3a12');
 /* tanque de cristal con elixir */
 const lc=[Math.round(112+f*100),Math.round(34+f*55),Math.round(150+f*90)],hx=lc.map(v=>v.toString(16).padStart(2,'0')).join('');
 mOct(b,cu,cv,.76,7.4,24,'#'+hx,'#2a1038');
 {const[x,y]=PS(b,cu-.2,cv+.76,16);g.fillStyle='rgba(255,255,255,.28)';g.fillRect(x-1.5*MSC,y-4*MSC,2.4*MSC,8*MSC)}
 /* tapa de madera */
 mOct(b,cu,cv,.98,24,29,'#a06a30','#3a2209');
 for(const k of[-.35,.1,.5]){mPoly(b,[[cu-.9,cv+k,29.1],[cu+.9,cv+k,29.1],[cu+.9,cv+k+.03,29.1],[cu-.9,cv+k+.03,29.1]],'rgba(40,20,5,.45)')}
 /* chimenea */
 mOct(b,cu+.52,cv-.5,.17,29,45,'#8a4a22','#2a1208');mOct(b,cu+.52,cv-.5,.1,45,45.3,'#2a1208','#000');
 /* tuerca de latón y tornillos */
 mOct(b,cu-.1,cv+.05,.44,29,32,'#e8b43a','#6a4510');mOct(b,cu-.1,cv+.05,.3,32,35,'#f2c94c','#6a4510');
 for(let k=0;k<4;k++){const a=k*Math.PI/2+.5,[x,y]=PS(b,cu-.1+Math.cos(a)*.62,cv+.05+Math.sin(a)*.62,29.4);g.fillStyle='#c5ccd8';g.beginPath();g.arc(x,y,2*MSC,0,7);g.fill()}
 /* caja de válvula */
 const vu=1.0,vv=2.1;
 mOct(b,vu,vv,.36,0,13,'#d9a02a','#4a2d08');mOct(b,vu,vv,.28,13,16,'#f0c040','#4a2d08');
 {const[x,y]=PS(b,vu+.08,vv+.36,7);g.beginPath();g.arc(x,y,5.5*MSC,0,7);g.fillStyle='#8a5a2b';g.fill();g.strokeStyle='#3a2209';g.lineWidth=1.2;g.stroke();g.beginPath();g.arc(x,y,2.6*MSC,0,7);g.fillStyle='#ffd23f';g.fill();g.stroke()}
 /* tuberías */
 mPipe(b,[[vu,vv,16],[vu,vv,50],[1.25,1.9,60],[cu-.35,cv+.9,60],[cu-.1,cv+.05,56],[cu-.1,cv+.05,35]],6,'#c4c8d0','#fff');
 if(T>=3)mPipe(b,[[vu+.14,vv-.05,16],[vu+.14,vv-.05,44],[1.4,1.75,52],[cu-.2,cv+.7,52],[cu-.1,cv+.05,48]],5,'#b9bec8','#f4f6fa');
 if(T>=5)mPipe(b,[[vu-.14,vv+.05,16],[vu-.14,vv+.05,38],[1.1,1.9,44],[cu-.3,cv+.85,44],[cu-.1,cv+.05,40]],4.5,'#d2a845','#fff0b0');
 if(b.bst>0){const[ax,ay]=P(b.x+1.5,b.y+1.5);g.save();const pu=.5+.5*Math.sin(now/260),gr=g.createRadialGradient(ax,ay,5,ax,ay,s*TW*.62);gr.addColorStop(0,'rgba(230,110,255,'+(.16+.14*pu)+')');gr.addColorStop(1,'rgba(200,80,240,0)');g.fillStyle=gr;g.beginPath();g.ellipse(ax,ay,s*TW*.62,s*TH*.62,0,0,7);g.fill();
  for(let i=0;i<6;i++){const ph=(now/1100+i/6)%1,[x,y]=PS(b,.9+MR(i*13)*1.8,.8+MR(i*7+3)*1.6,16+ph*46);g.globalAlpha=Math.sin(ph*Math.PI);g.fillStyle='#f6c8ff';mStar(x,y,3+MR(i)*2.5)}g.restore()}
 const[cx,cy]=P(b.x+1.5,b.y+1.5,h);g.font='14px Lilita One,Arial Black,sans-serif';const[bx,by]=P(b.x+s,b.y+s);g.beginPath();g.arc(bx,by+10,10,0,7);g.fillStyle='#1d4f9a';g.fill();g.lineWidth=2.5;g.strokeStyle='#fff';g.stroke();g.fillStyle='#fff';g.fillText(b.lv,bx,by+11);
 if(b.hp<b.max&&b.rg==null)bar(cx,cy-30,30,b.hp/b.max);
 if(mode=='v'&&b===pk){const[ax,ay]=P(b.x+1.5,b.y+1.5);g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.ellipse(ax,ay,s*TW*.45,s*TH*.45,0,0,7);g.stroke()}}

/* ---- ajuste de balance: minas/extractores x2 producción, x2 coste y tiempo; almacenes x2 capacidad, x1.5 coste ---- */
for(const T of[MINE,PUMP])for(const r of T)if(r){r.rate*=2;r.cost*=2;r.time*=2}
for(const r of STO)if(r){r.cap*=2;r.cost=Math.round(r.cost*1.5)}

/* ---- Ayuntamiento: capacidad base de oro/elixir por nivel ---- */
const HCAP=[0,1500,1500,15000,75000,150000,450000,750000,1125000,1500000,2250000];
const HC=()=>HCAP[Math.min(10,Math.max(1,hl()))];
const HHP=[0,450,1600,1850,2100,2400,2800,3300,3900,4600,5500];
const HCOST=[1500,5000,30000,180000,800000,1450000,2250000,3500000,5000000];
const HTIME=[10,3600,10800,21600,43200,64800,86400,172800,216000];
const BMAX=[0,0,0,0,0,36,42,54,63,76,83],TMAX=[0,0,0,0,0,8,11,15,23,26,30];
const totKind=t=>TY[t].trap?'t':t=='wall'?'w':'b';
const totCnt=k=>S.b.filter(b=>totKind(b.t)==k).length;
const totLim=k=>(k=='t'?TMAX:BMAX)[Math.min(10,Math.max(1,hl()))];
const totOk=t=>{const k=totKind(t);if(k=='w'||hl()<5)return true;return totCnt(k)<totLim(k)};
const cntOk=t=>cnt(t)<mx(t)&&totOk(t);
const totTxt=()=>hl()<5?'':' · Edificios '+totCnt('b')+'/'+totLim('b')+' · Trampas '+totCnt('t')+'/'+totLim('t');

/* ---- estructuras nuevas (aún no disponibles): "Próximamente / En desarrollo" ---- */
/* [nombre, icono, categoría de tienda, máximo por nivel de Ayuntamiento 1..10] */
/* ================= v45: Campamento (fogata 4x4) ================= */
const CMP=[null,
{cap:20,hp:250,cost:200,time:300,th:1},
{cap:30,hp:270,cost:2000,time:900,th:2},
{cap:35,hp:290,cost:10000,time:7200,th:3},
{cap:40,hp:310,cost:100000,time:18000,th:4},
{cap:45,hp:330,cost:250000,time:28800,th:5},
{cap:50,hp:350,cost:750000,time:43200,th:6},
{cap:55,hp:400,cost:1500000,time:172800,th:9},
{cap:60,hp:500,cost:2500000,time:259200,th:10}];
const cpLv=b=>Math.max(1,Math.min(CMP.length-1,b.lv|0));
function cFlame(x,y,w,h,col,ph,now){const sw=Math.sin(now/115+ph)*w*.38,hh=h*(1+.13*Math.sin(now/83+ph*2));g.beginPath();g.moveTo(x-w,y);g.quadraticCurveTo(x-w*1.15,y-hh*.55,x+sw,y-hh);g.quadraticCurveTo(x+w*1.15,y-hh*.5,x+w,y);g.quadraticCurveTo(x,y+w*.5,x-w,y);g.closePath();g.fillStyle=col;g.fill()}
function drCamp(b){const s=4,h=TY.camp.h,lv=cpLv(b),T=Math.ceil(lv/2),now=performance.now(),Q=(u,v,z=0)=>P(b.x+u,b.y+v,z),sd=b.x*17+b.y*31;
 const cu=2,cv=2,fs=1+.13*(T-1);
 /* suelo chamuscado (borde irregular) */
 {const pts=[];const n=28;for(let i=0;i<n;i++){const a=i/n*Math.PI*2,c=Math.cos(a),s2=Math.sin(a),m=Math.max(Math.abs(c),Math.abs(s2)),r=1.55/m*.82*(1+(MR(sd+i*3)-.5)*.22)*(1+(i%2?.04:0));pts.push([cu+c*r,cv+s2*r])}
  g.beginPath();pts.forEach((p,i)=>{const q=Q(p[0],p[1]);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])});g.closePath();g.fillStyle='#d98a3a';g.fill();g.strokeStyle='#b8651f';g.lineWidth=1.2;g.stroke();
  g.beginPath();pts.forEach((p,i)=>{const q=Q(cu+(p[0]-cu)*.72,cv+(p[1]-cv)*.72);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])});g.closePath();g.fillStyle='#8c4a20';g.fill();
  g.beginPath();pts.forEach((p,i)=>{const q=Q(cu+(p[0]-cu)*.4,cv+(p[1]-cv)*.4);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])});g.closePath();g.fillStyle='#2c170b';g.fill()}
 /* brillo de brasas en el suelo */
 {const[ax,ay]=Q(cu,cv),pu=.5+.5*Math.sin(now/170),gr=g.createRadialGradient(ax,ay,2,ax,ay,52*fs);gr.addColorStop(0,'rgba(255,170,50,'+(.5+.15*pu)+')');gr.addColorStop(1,'rgba(255,120,20,0)');g.fillStyle=gr;g.beginPath();g.ellipse(ax,ay,52*fs,26*fs,0,0,7);g.fill()}
 /* troncos de atrás (v menor) */
 const nl=T>=3?7:6,logs=[];for(let i=0;i<nl;i++){const a=i/nl*Math.PI*2+.4+MR(sd+i)*.25;logs.push({a,d:Math.sin(a)+Math.cos(a)})}
 logs.sort((p,q)=>p.d-q.d);
 const drLog=L=>{const a=L.a,r0=.2,r1=.95,p0=Q(cu+Math.cos(a)*r0,cv+Math.sin(a)*r0,3),p1=Q(cu+Math.cos(a)*r1,cv+Math.sin(a)*r1,2);
  g.lineCap='round';g.beginPath();g.moveTo(p0[0],p0[1]);g.lineTo(p1[0],p1[1]);g.strokeStyle='#2e1808';g.lineWidth=8.5;g.stroke();
  g.beginPath();g.moveTo(p0[0],p0[1]);g.lineTo(p1[0],p1[1]);g.strokeStyle='#8a5a2b';g.lineWidth=6.2;g.stroke();
  g.beginPath();g.moveTo(p0[0]-.5,p0[1]-1.4);g.lineTo(p1[0]-.5,p1[1]-1.4);g.strokeStyle='#b3814a';g.lineWidth=1.8;g.stroke();
  g.beginPath();g.moveTo(p0[0],p0[1]);g.lineTo(p1[0],p1[1]);g.strokeStyle='rgba(255,120,30,'+(.35+.2*Math.sin(now/130+a)).toFixed(2)+')';g.lineWidth=2;g.stroke();
  g.beginPath();g.ellipse(p1[0],p1[1],3.1,2.5,0,0,7);g.fillStyle='#c99a62';g.fill();g.strokeStyle='#3a2209';g.lineWidth=1;g.stroke();g.beginPath();g.arc(p1[0],p1[1],1,0,7);g.fillStyle='#8a5a2b';g.fill();g.lineCap='butt'};
 for(const L of logs)if(L.d<0)drLog(L);
 /* piedras del aro */
 {const n=7+T*2,st=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2+.15,r=1.12+(MR(sd+i*5)-.5)*.1;st.push({a,r,k:.7+MR(sd+i*7)*.6,d:Math.sin(a)+Math.cos(a)})}
  st.sort((p,q)=>p.d-q.d);
  const back=st.filter(o=>o.d<0),front=st.filter(o=>o.d>=0);
  const dr=o=>{const q=Q(cu+Math.cos(o.a)*o.r,cv+Math.sin(o.a)*o.r,2),rw=5.6*o.k,rh=4*o.k,gold=T>=4;
   g.beginPath();g.ellipse(q[0]+1,q[1]+2,rw,rh,0,0,7);g.fillStyle='rgba(0,0,0,.22)';g.fill();
   g.beginPath();g.ellipse(q[0],q[1],rw,rh,0,0,7);g.fillStyle=gold?'#cdbb86':'#c9c3b4';g.fill();g.strokeStyle='#4a4538';g.lineWidth=1;g.stroke();
   g.beginPath();g.ellipse(q[0]+rw*.15,q[1]+rh*.35,rw*.8,rh*.6,0,.1,3.1);g.fillStyle=gold?'#a8935a':'#9d978a';g.fill();
   g.beginPath();g.ellipse(q[0]-rw*.35,q[1]-rh*.35,rw*.45,rh*.3,0,0,7);g.fillStyle='rgba(255,255,255,.5)';g.fill();
   g.beginPath();g.ellipse(q[0],q[1],rw,rh,0,0,7);g.fillStyle='rgba(255,110,30,'+(.12+.08*Math.sin(now/140+o.a)).toFixed(2)+')';g.fill()};
  back.forEach(dr);
  /* llama */
  const[fx,fy]=Q(cu,cv,4);
  g.save();
  cFlame(fx,fy+2,15*fs,38*fs,'#d8431a',0,now);cFlame(fx+1,fy+2,11.5*fs,32*fs,'#ff7a1c',1.7,now);cFlame(fx-2,fy+2,8*fs,25*fs,'#ffb02e',3.1,now);cFlame(fx+1,fy+1,5*fs,16*fs,'#ffe27a',4.3,now);cFlame(fx,fy,2.6*fs,9*fs,'#fff6c8',5.2,now);
  g.restore();
  /* hijuelas y humo */
  for(let i=0;i<7;i++){const ph=(now/900+i/7)%1,ox=Math.sin(i*2.3+now/700)*9*fs*ph,py=fy-8-ph*58*fs;g.globalAlpha=Math.sin(ph*Math.PI)*.9;g.fillStyle=i%2?'#ffd86a':'#ff9a3a';g.fillRect(fx+ox-1,py,2,2)}
  for(let i=0;i<3;i++){const ph=(now/2600+i/3)%1,ox=Math.sin(i*1.9+now/1400)*7+ph*8,py=fy-30*fs-ph*34;g.globalAlpha=.18*(1-ph);g.fillStyle='#6b6b6b';g.beginPath();g.arc(fx+ox,py,5+ph*7,0,7);g.fill()}
  g.globalAlpha=1;
  front.forEach(dr)}
 for(const L of logs)if(L.d>=0)drLog(L);
 /* nivel 3+: troncos-asiento; nivel 4+: antorchas */
 if(T>=3){const seat=(u0,v0,u1,v1)=>{const a=Q(u0,v0,3),c=Q(u1,v1,3);g.lineCap='round';g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(c[0],c[1]);g.strokeStyle='#2e1808';g.lineWidth=10;g.stroke();g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(c[0],c[1]);g.strokeStyle='#7a4d22';g.lineWidth=7.4;g.stroke();g.beginPath();g.moveTo(a[0],a[1]-1.6);g.lineTo(c[0],c[1]-1.6);g.strokeStyle='#a87444';g.lineWidth=1.6;g.stroke();g.beginPath();g.ellipse(c[0],c[1],3.6,3,0,0,7);g.fillStyle='#c99a62';g.fill();g.strokeStyle='#3a2209';g.lineWidth=1;g.stroke();g.lineCap='butt'};
  seat(3.45,1.2,3.45,2.8);seat(.9,3.45,2.6,3.45)}
 if(T>=4)for(const[tu,tv]of[[.55,.6],[3.45,3.4]]){const bs=Q(tu,tv,0),tp=Q(tu,tv,22);g.lineCap='round';g.beginPath();g.moveTo(bs[0],bs[1]);g.lineTo(tp[0],tp[1]);g.strokeStyle='#2e1808';g.lineWidth=5;g.stroke();g.beginPath();g.moveTo(bs[0],bs[1]);g.lineTo(tp[0],tp[1]);g.strokeStyle='#8a5a2b';g.lineWidth=3;g.stroke();g.lineCap='butt';
  cFlame(tp[0],tp[1]+1,4.2,11,'#ff7a1c',tu*5,now);cFlame(tp[0],tp[1]+1,2.6,7,'#ffd86a',tu*5+2,now)}
 /* insignia, vida, selección */
 const[cx,cy]=P(b.x+s/2,b.y+s/2,h);g.font='14px Lilita One,Arial Black,sans-serif';const[bx,by]=P(b.x+s,b.y+s);g.beginPath();g.arc(bx,by+10,10,0,7);g.fillStyle='#1d4f9a';g.fill();g.lineWidth=2.5;g.strokeStyle='#fff';g.stroke();g.fillStyle='#fff';g.fillText(b.lv,bx,by+11);
 if(b.hp<b.max&&b.rg==null)bar(cx,cy-44,30,b.hp/b.max);
 if(mode=='v'&&b===pk){const[ax,ay]=P(b.x+s/2,b.y+s/2);g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.ellipse(ax,ay,s*TW*.45,s*TH*.45,0,0,7);g.stroke()}}

/* ================= v61: Cohetes de defensa (3x3, 8 niveles, solo aéreos) ================= */
const RKT=[null,
{dmg:80,hp:800,cost:22000,time:10800,th:4},
{dmg:110,hp:850,cost:90000,time:43200,th:4},
{dmg:140,hp:900,cost:270000,time:57600,th:5},
{dmg:160,hp:950,cost:500000,time:86400,th:6},
{dmg:190,hp:1000,cost:1000000,time:129600,th:7},
{dmg:230,hp:1050,cost:1350000,time:172800,th:8},
{dmg:280,hp:1100,cost:1750000,time:259200,th:9},
{dmg:320,hp:1210,cost:3000000,time:367200,th:10}];
for(const r of RKT)if(r)r.dps=r.dmg;
function mSide(b,cu,cv,r,z0,z1,c,st){const V=[];for(let k=0;k<8;k++){const a=(k+.5)*Math.PI/4;V.push([cu+Math.cos(a)*r,cv+Math.sin(a)*r])}
 for(let k=0;k<8;k++){const a=(k+1)*Math.PI/4,nu=Math.cos(a),nv=Math.sin(a);if(nu+nv<=-.2)continue;const p=V[k],q=V[(k+1)%8];mPoly(b,[[p[0],p[1],z0],[q[0],q[1],z0],[q[0],q[1],z1],[p[0],p[1],z1]],sh(c,Math.max(.45,.74+.17*(nv-nu))),st)}}
function mCone(b,cu,cv,r,z0,z1,c,st){const V=[];for(let k=0;k<8;k++){const a=(k+.5)*Math.PI/4;V.push([cu+Math.cos(a)*r,cv+Math.sin(a)*r])}
 for(let k=0;k<8;k++){const a=(k+1)*Math.PI/4,nu=Math.cos(a),nv=Math.sin(a);if(nu+nv<=-.2)continue;const p=V[k],q=V[(k+1)%8];mPoly(b,[[p[0],p[1],z0],[q[0],q[1],z0],[cu,cv,z1]],sh(c,Math.max(.45,.74+.17*(nv-nu))),st)}}
function rkRocket(b,u,v,z0,len,r,c1,c2,tip,T){
 /* cuerpo a franjas + punta cónica */
 const n=3,h=len*.62/n;for(let i=0;i<n;i++)mOct(b,u,v,r,z0+i*h,z0+(i+1)*h,i%2?c2:c1);
 const zt=z0+len*.62;mCone(b,u,v,r*1.05,zt,zt+len*.38,tip);
 {const[x,y]=PS(b,u-r*.3,v+r*.5,zt+len*.14);g.fillStyle='rgba(255,255,255,.55)';g.fillRect(x-1,y-2*MSC,1.6,4*MSC)}
 if(T>=4){const[x,y]=PS(b,u,v,z0+len*.03);g.fillStyle='rgba(255,160,40,.55)';g.beginPath();g.arc(x,y,r*14*MSC,0,7);g.fill()}}
function drRocket(b){const s=3,h=TY.rocket.h,lv=Math.max(1,Math.min(8,b.lv|0)),T=lv;
 const L=lv<=3?0:lv<=6?1:2; /* 0: madera y cuerda, 1: amarillo/rojo, 2: negro y dorado */
 const woodC=['#7a4a24','#7a4a24','#8a5a2b'][L],ropeC='#d9a840',metal=['#6f4a28','#5f6068','#2b2b33'][L===1&&lv==6?0:L],steel='#5d79a8',gold='#f0b323';
 const frameC=L==0?'#7a4a24':lv==6?'#9a6a2e':L==1?'#7a5230':lv==7?'#2b2b33':gold;
 const plateC=L==0?'#7a4a24':L==1?(lv==6?'#9a9aa6':'#6a6a74'):lv==7?gold:'#2b2b33';
 const brc=[['#d63a3a','#26262b','#d63a3a'],['#f3c431','#d63a3a','#e8a820'],['#26262b','#f3c431','#26262b']][L];
 mPoly(b,[[.35,.45,0],[2.75,.4,0],[2.9,2.6,0],[.45,2.7,0]],'rgba(20,40,10,.17)');
 /* patines y travesaños */
 mBox(b,.3,.55,2.8,.92,0,3.2,frameC,'#2a170a');mBox(b,.3,2.08,2.8,2.45,0,3.2,frameC,'#2a170a');
 for(const u of[.75,1.55,2.3])mBox(b,u,.5,u+.3,2.5,3.2,5.6,L==2?(lv==7?'#33333b':'#caa030'):woodC,'#2a170a');
 if(L==0)for(const u of[.75,1.55,2.3])for(const v of[.53,2.2]){const[x,y]=PS(b,u+.15,v+.2,5);g.fillStyle=ropeC;g.fillRect(x-4*MSC,y-3*MSC,8*MSC,5*MSC);g.strokeStyle='#8a6420';g.lineWidth=1;g.strokeRect(x-4*MSC,y-3*MSC,8*MSC,5*MSC)}
 /* placas delanteras y patas en A */
 mBox(b,2.55,.45,3.0,.95,0,6.5,plateC,'#1a1a1f');mBox(b,2.55,2.05,3.0,2.55,0,6.5,plateC,'#1a1a1f');
 if(L>=1){for(const v of[.62,2.25]){mPoly(b,[[2.5,v,3],[2.78,v,3],[1.85,v+.1,24],[1.58,v+.1,24]],sh(frameC,.85),'#1a1a1f')}mBox(b,2.1,1.05,2.6,1.95,4,10,plateC,'#1a1a1f')}
 /* barriles y cohetes */
 let bs;
 if(lv==1)bs=[[1.5,1.5,.5,[[0,0,26]]]];
 else if(lv==2)bs=[[1.05,1.95,.42,[[0,0,24]]],[1.95,1.05,.42,[[0,0,24]]]];
 else if(lv==3)bs=[[1.0,1.9,.4,[[0,0,24]]],[1.9,1.0,.4,[[0,0,24]]],[1.55,1.55,.38,[[0,0,15]]]];
 else if(lv==4)bs=[[1.5,1.5,.62,[[-.2,.22,26],[.2,-.2,28],[.24,.26,22],[-.22,-.22,24]]]];
 else if(lv==5)bs=[[1.1,1.9,.5,[[0,-.1,26],[-.12,.15,22],[.12,.12,20]]],[1.9,1.1,.5,[[0,.1,28],[.14,-.1,22]]]];
 else if(lv==6)bs=[[1.05,1.95,.52,[[0,-.1,26],[-.15,.15,22],[.14,.14,20]]],[1.95,1.05,.52,[[0,.12,28],[.16,-.1,23],[-.14,-.12,20]]]];
 else if(lv==7)bs=[[1.5,1.5,.66,[[-.22,.2,30],[.22,-.2,32],[.22,.26,24],[-.2,-.22,28]]]];
 else bs=[[1.5,1.5,.72,[[-.26,.24,34],[.26,-.22,36],[.26,.28,28],[0,-.3,32],[0,0,22]]]];
 bs.sort((p,q)=>p[0]+p[1]-q[0]-q[1]);
 const bw=lv==8?'#8a2c2c':L==2?'#4a3a2a':woodC,bz=lv>=4?9:7;
 for(const[cu,cv,r,rk]of bs){
  const top=26;mOct(b,cu,cv,r,bz,top,bw,'#2a170a');
  mSide(b,cu,cv,r+.025,bz+3,bz+5.4,L==2?gold:steel);mSide(b,cu,cv,r+.025,top-5,top-2.6,L==2?gold:steel);
  for(let k=0;k<5;k++){const a=k*1.26+cu,[x,y]=PS(b,cu+Math.cos(a)*r*.85,cv+Math.sin(a)*r*.85+.15,(bz+top)/2);g.fillStyle='rgba(255,255,255,.12)';g.fillRect(x-.5,y-5*MSC,1,9*MSC)}
  for(const[du,dv,zr]of rk.slice().sort((p,q)=>p[0]+p[1]-q[0]-q[1]))rkRocket(b,cu+du,cv+dv,top-4,zr+4,.13+(lv>=7?.03:0),brc[0],brc[1],brc[2],T)}
 if(L==2){for(const[u,v]of[[2.75,.5],[2.75,2.5],[.4,.6],[.4,2.4]]){const[x,y]=PS(b,u,v,5);g.fillStyle=lv==7?gold:'#3a3a42';g.beginPath();g.arc(x,y,3*MSC,0,7);g.fill();g.strokeStyle='#1a1a1f';g.lineWidth=1;g.stroke()}}
 const[cx,cy]=P(b.x+1.5,b.y+1.5,h);g.font='14px Lilita One,Arial Black,sans-serif';const[bx,by]=P(b.x+s,b.y+s);g.beginPath();g.arc(bx,by+10,10,0,7);g.fillStyle='#1d4f9a';g.fill();g.lineWidth=2.5;g.strokeStyle='#fff';g.stroke();g.fillStyle='#fff';g.fillText(b.lv,bx,by+11);
 if(b.hp<b.max&&b.rg==null)bar(cx,cy-30,30,b.hp/b.max);
 if(mode=='v'&&b===pk){const[ax,ay]=P(b.x+1.5,b.y+1.5);g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.ellipse(ax,ay,s*TW*.45,s*TH*.45,0,0,7);g.stroke()}}

/* ---- Mortero: tabla de niveles 1-8, salva de 3 proyectiles y retroceso ---- */
const MOR=[null,
{dps:4,dmg:20,hp:400,cost:5000,time:10800,th:3},
{dps:5,dmg:25,hp:450,cost:25000,time:21600,th:4},
{dps:6,dmg:30,hp:500,cost:100000,time:43200,th:5},
{dps:7,dmg:35,hp:550,cost:200000,time:64800,th:6},
{dps:9,dmg:45,hp:600,cost:300000,time:86400,th:7},
{dps:11,dmg:55,hp:650,cost:560000,time:172800,th:8},
{dps:15,dmg:75,hp:700,cost:1300000,time:216000,th:9},
{dps:20,dmg:100,hp:800,cost:1900000,time:216000,th:10}];
const MOR_SHELLS=1,MOR_GAP=.24; /* 3 proyectiles por salva, cada 5 s */
function mortarHit(tx,ty,sp,dm){const gr=E.grid,n=E.N;
 for(const q of A.tr){if(q.hp<=0||q.fly||q.jump)continue;const dx=q.x-tx,dy=q.y-ty,d=Math.hypot(dx,dy);if(d>=sp)continue;q.hp-=dm;if(q.hp<=0)continue;
  const k=1.2-.55*d/sp,ang=(q.sid||1)*2.399,ux=d<.05?Math.cos(ang):dx/d,uy=d<.05?Math.sin(ang):dy/d;let x=q.x,y=q.y;
  for(let s=.1;s<=k+1e-6;s+=.1){const nx=q.x+ux*s,ny=q.y+uy*s,cx=Math.floor(nx),cy=Math.floor(ny);if(gr&&cx>=0&&cy>=0&&cx<n&&cy<n&&(gr.blk[cy*n+cx]||gr.wc[cy*n+cx]>0))break;x=nx;y=ny}
  if(Math.hypot(x-q.x,y-q.y)>.05)q.kbf={sx:q.x,sy:q.y,tx:x,ty:y,t:.24,L:.24}}
 A.fx.push({k:'boom',x:tx,y:ty,t:.4,L:.4,R:.6});snd('morhit')}
/* ---- Torre de arqueras: tabla de niveles 1-13 ---- */
const TWR=[null,
{dps:11,dmg:5.5,hp:380,cost:1000,time:60,th:2},
{dps:15,dmg:7.5,hp:420,cost:2000,time:900,th:2},
{dps:19,dmg:9.5,hp:460,cost:5000,time:2700,th:3},
{dps:25,dmg:12.5,hp:500,cost:20000,time:10800,th:4},
{dps:30,dmg:15,hp:540,cost:80000,time:18000,th:5},
{dps:35,dmg:17.5,hp:580,cost:180000,time:28800,th:5},
{dps:42,dmg:21,hp:630,cost:360000,time:36000,th:6},
{dps:48,dmg:24,hp:690,cost:600000,time:43200,th:7},
{dps:56,dmg:28,hp:750,cost:800000,time:50400,th:8},
{dps:63,dmg:31.5,hp:810,cost:1000000,time:64800,th:8},
{dps:70,dmg:35,hp:890,cost:1200000,time:86400,th:9},
{dps:75,dmg:37.5,hp:970,cost:1500000,time:108000,th:10},
{dps:80,dmg:40,hp:1050,cost:2000000,time:194400,th:10}];
/* ---- Cañón: tabla de niveles 1-13 ---- */
const CAN=[null,
{dps:9,dmg:7.2,hp:420,cost:250,time:10,th:1},
{dps:11,dmg:8.8,hp:470,cost:1000,time:120,th:1},
{dps:15,dmg:12,hp:520,cost:4000,time:600,th:2},
{dps:19,dmg:15.2,hp:570,cost:16000,time:2700,th:3},
{dps:25,dmg:20,hp:620,cost:50000,time:7200,th:4},
{dps:31,dmg:24.8,hp:670,cost:100000,time:14400,th:5},
{dps:40,dmg:32,hp:730,cost:200000,time:28800,th:6},
{dps:48,dmg:38.4,hp:800,cost:300000,time:36000,th:7},
{dps:56,dmg:44.8,hp:880,cost:500000,time:43200,th:8},
{dps:64,dmg:51.2,hp:960,cost:700000,time:64800,th:8},
{dps:74,dmg:59.2,hp:1060,cost:1000000,time:86400,th:9},
{dps:85,dmg:68,hp:1160,cost:1200000,time:108000,th:10},
{dps:95,dmg:76,hp:1260,cost:1700000,time:194400,th:10}];
const RXHP=[375,435,495,555,630,705,780,870,975,1095,1215,1350],RXC=[150,750,3750,7500,30000,180000,405000,1200000,1800000,2550000,3900000,5550000],RXT=[20,120,1200,7200,57600,86400,129600,172800,259200,432000,518400,950400];
const TUS={9:['Dragón','🐉'],10:['P.E.K.K.A','🤖'],11:['Bebé dragón','🐲'],12:['Minero','⛏️']};
const TSOON=pk=>Object.keys(TUS).map(l=>`<button class="tcard off" disabled><span class=big>${TUS[l][1]}</span><b>${TUS[l][0]}</b><span class=sm>🔜 Próximamente</span><span class="sm bad">En desarrollo</span><span class=sm>${pk.lv<l?'🔒 Cuartel nv '+l:'Cuartel nv '+l}</span></button>`).join('');
const SOON={
 airsw:['Controlador aéreo','🌀','def',[0,0,0,0,0,1,1,1,2,2]],
 tesla:['Torre tesla','⚡','def',[0,0,0,0,0,0,2,3,4,4]],
 btower:['Torre bombardera','💥','def',[0,0,0,0,0,0,0,1,1,2]],
 xbow:['Ballesta','🏹','def',[0,0,0,0,0,0,0,0,2,3]],
 infern:['Torre infernal','🔥','def',[0,0,0,0,0,0,0,0,0,2]],
 gbomb:['Conjunto de explosivos','💣','trap',[0,0,0,0,0,1,2,3,4,5]],
 amine:['Mina de rastreo aérea','🎯','trap',[0,0,0,0,0,0,1,2,4,5]],
 sktrap:['Trampa de esqueletos','💀','trap',[0,0,0,0,0,0,0,2,2,3]],
 dext:['Extractor de elixir oscuro','🖤','res',[0,0,0,0,0,0,1,2,2,3]],
 dsto:['Almacén de elixir oscuro','🗄️','res',[0,0,0,0,0,0,1,1,1,1]],
 drax:['Cuartel oscuro','🏴','mil',[0,0,0,0,0,0,1,2,2,2]],
 dcauld:['Caldero de hechizos oscuros','🔮','mil',[0,0,0,0,0,0,0,1,1,1]],
 smith:['Herrería','⚒️','mil',[0,0,0,0,0,0,0,1,1,1]],
 queenalt:['Altar de la reina arquera','🏹','mil',[0,0,0,0,0,0,0,0,1,1]]};
const SOONN=new Set(Object.values(SOON).map(v=>v[0]));
const NEWBY={
6:[['Muros',25],['Mortero',1],['Cohetes de defensa',1],['Trampa con muelle',2],['Torre de magos',1],['Controlador aéreo',1],['Conjunto de explosivos',1],['Mina de oro',1],['Extractor de elixir',1]],
7:[['Cañón',2],['Torre de arqueras',1],['Muros',50],['Mortero',1],['Bomba',2],['Cohetes de defensa',1],['Conjunto de explosivos',1],['Torre tesla',2],['Mina de rastreo aérea',1],['Extractor de elixir oscuro',1],['Almacén de elixir oscuro',1],['Cuartel oscuro',1],['Cuartel',1],['Campamento',1],['Altar del rey guerrero',1]],
8:[['Torre de arqueras',1],['Muros',50],['Mortero',1],['Trampa con muelle',2],['Torre de magos',1],['Bomba aérea',2],['Conjunto de explosivos',1],['Torre tesla',1],['Mina de rastreo aérea',1],['Torre bombardera',1],['Trampa de esqueletos',2],['Almacén de oro',1],['Almacén de elixir',1],['Extractor de elixir oscuro',1],['Cuartel oscuro',1],['Caldero de hechizos oscuros',1],['Herrería',1]],
9:[['Torre de arqueras',1],['Muros',25],['Cohetes de defensa',1],['Torre de magos',1],['Controlador aéreo',1],['Conjunto de explosivos',1],['Torre tesla',1],['Mina de rastreo aérea',2],['Ballesta',2],['Almacén de oro',1],['Almacén de elixir',1],['Altar de la reina arquera',1]],
10:[['Cañón',1],['Torre de arqueras',1],['Muros',25],['Bomba aérea',1],['Conjunto de explosivos',1],['Mina de rastreo aérea',1],['Torre bombardera',1],['Trampa de esqueletos',1],['Ballesta',1],['Torre infernal',2],['Mina de oro',1],['Extractor de elixir',1],['Extractor de elixir oscuro',1]]};
const newbyHTML=l=>'<div class="st wide"><b style="font-size:15px">Al subir a nivel '+l+' recibes</b><br>'+NEWBY[l].map(([n,q])=>q+'× '+n+(SOONN.has(n)?' 🔜':'')).join(' · ')+'<br><small>🔜 = en desarrollo</small></div>';
function soonCards(){let h='';for(const k in SOON){const[n,e,c,L]=SOON[k];if(c!=UI.cat)continue;const m=L[Math.min(10,hl())-1],first=L.findIndex(v=>v>0)+1;
 h+=`<button class="tcard" disabled><span class=big>${e}</span><b>${n}</b><span class=sm>🔜 Próximamente</span><span class="sm bad">En desarrollo</span><span class=sm>${m?'0/'+m:'🔒 Ayuntamiento '+first}</span></button>`}return h}

const TY={
hall:{n:'Ayuntamiento',s:3,h:38,hp:1200,c:'#b9a27a',r:'#c0392b',e:'🏰'},
mine:{n:'Mina de oro',s:3,h:26,hp:400,c:'#8b6a3e',r:'#f5c542',e:'⛏️',cost:600,cur:'e',prod:'g',max:2},
pump:{n:'Extractor',s:3,h:30,hp:400,c:'#6d4a8a',r:'#c06be8',e:'💧',cost:600,cur:'g',prod:'e',max:2},
gst:{n:'Almacén oro',s:3,h:36,hp:600,c:'#8b6a3e',r:'#d4a017',e:'💰',cost:900,cur:'e',max:1},
est:{n:'Almacén elixir',s:3,h:40,hp:600,c:'#6d4a8a',r:'#8e44ad',e:'🧪',cost:900,cur:'g',max:1},
rax:{n:'Cuartel',s:3,h:56,hp:375,c:'#7a5a36',r:'#2f7fb8',e:'⚔️',cost:150,cur:'e',max:2},
wblock:{n:'Muro 2×2',s:2,h:10,hp:1,c:'#8a6a3e',r:'#b08a52',e:'',cost:72,cur:'g',max:100,flat:1},
scout:{n:'Puesto de exploración',s:3,h:30,hp:450,c:'#5a4a7a',r:'#7a4fb0',e:'',cost:500,cur:'g',max:1},
hut:{n:'Choza de constructores',s:2,h:18,hp:250,c:'#8a5a2b',r:'#a0522d',e:'🔨',cost:800,cur:'g',max:6},
camp:{n:'Campamento',s:4,h:20,hp:250,c:'#7a5a36',r:'#4f9a3a',e:'🔥',cost:200,cur:'e',max:2},
cannon:{n:'Cañón',s:3,h:22,hp:420,c:'#777',r:'#444',e:'💣',cost:250,cur:'g',max:5,rg:9,dmg:7.2,rt:.8,col:'#fff'},
tower:{n:'Torre arquera',s:3,h:66,hp:380,c:'#8c6a45',r:'#b5844f',e:'🏹',cost:1000,cur:'g',max:4,rg:10,dmg:5.5,rt:.5,col:'#ffd27a'},
mortar:{n:'Mortero',s:3,h:34,hp:400,c:'#666',r:'#383838',e:'🎯',cost:5000,cur:'g',max:2,rg:11,mn:4,sp:1.5,dmg:20,rt:5},
wall:{n:'Muro',s:1,h:15,hp:300,c:'#8d8d8d',r:'#cfcfcf',e:'',cost:50,cur:'g',max:100,flat:1},
lab:{n:'Laboratorio',s:3,h:28,hp:500,c:'#4a6a8a',r:'#5fb0e8',e:'🔬',cost:900,cur:'e',max:1},
cauldron:{n:'Caldero de hechizos',s:3,h:24,hp:450,c:'#5a3a7a',r:'#9b59b6',e:'⚗️',cost:1100,cur:'e',max:1},
kalt:{n:'Altar del Rey',s:3,h:34,hp:700,c:'#a8832e',r:'#f5c542',e:'👑',cost:4000,cur:'g',max:1},
rocket:{n:'Cohetes de defensa',s:3,h:40,hp:800,c:'#6a6a7a',r:'#c0392b',e:'🚀',cost:22000,cur:'g',max:1,rg:10,dmg:80,rt:1,col:'#ff8a3c'},
wizard:{n:'Torre de magos',s:3,h:40,hp:480,c:'#5a4a8a',r:'#8e44ad',e:'🔮',cost:1600,cur:'g',max:1,rg:7.5,dmg:22,rt:1.1,sp:1.3,col:'#d98cff'},
bomb:{n:'Bomba',s:1,h:2,hp:1,c:'#333',r:'#555',e:'💣',cost:400,cur:'g',max:4,flat:1,trap:1},
spring:{n:'Trampa con muelle',s:1,h:2,hp:1,c:'#555',r:'#aaa',e:'🌀',cost:400,cur:'g',max:2,flat:1,trap:1},
abomb:{n:'Bomba aérea',s:1,h:2,hp:1,c:'#444',r:'#8a8a9a',e:'💥',cost:550,cur:'g',max:2,flat:1,trap:1}};
const TR={
barb:{n:'Guerrero',e:'🗡️',sp:1,cost:32,hp:45,dmg:8,v:1.6,rg:.4,rt:1,c:'#f2c14e'},
arch:{n:'Arquera',e:'🏹',sp:1,cost:58,hp:20,dmg:7,v:2.4,rg:3.5,rt:1,c:'#ff7ab0'},
giant:{n:'Gigante',e:'💪',sp:5,cost:320,hp:300,dmg:22,v:1.2,rg:.5,rt:2,c:'#e08a3c',pf:['cannon','tower','mortar','rocket','wizard'],r:12},
gob:{n:'Duende',e:'👺',sp:1,cost:38,hp:25,dmg:11,v:3.2,rg:.4,rt:1,c:'#6fcf62',pf:['mine','pump','gst','est'],bn:2},
wb:{n:'Rompemuros',e:'💥',sp:2,cost:100,hp:60,dmg:0,v:2.4,rg:.4,rt:1,c:'#aab',w:1},
loon:{n:'Globo bombástico',e:'🎈',sp:5,cost:600,hp:150,dmg:75,v:1.8,rg:.4,rt:3,c:'#e8523a',pf:['cannon','tower','mortar','rocket','wizard'],ar:1,fly:1,dd:25},
mage:{n:'Mago',e:'🧙',sp:4,cost:450,hp:150,dmg:34,v:1.9,rg:3.8,rt:1.3,c:'#8e44ad',ar:1.3},
heal:{n:'Curandera',e:'💖',sp:14,cost:1500,hp:600,dmg:0,v:2,rg:.5,rt:1,c:'#fff',heal:45,hr:3}};
const LAB=[null,{hp:500,cost:5000,time:60,th:3},{hp:550,cost:25000,time:3600,th:4},{hp:600,cost:50000,time:7200,th:5},{hp:650,cost:100000,time:14400,th:6},{hp:700,cost:200000,time:28800,th:7},{hp:750,cost:400000,time:57600,th:8},{hp:830,cost:800000,time:86400,th:9},{hp:950,cost:1300000,time:151200,th:10}];
const mhp=b=>b.t=='lab'?LAB[Math.min(8,Math.max(1,b.lv))].hp:b.t=='rocket'?RKT[Math.min(8,Math.max(1,b.lv))].hp:b.t=='mortar'?MOR[Math.min(8,Math.max(1,b.lv))].hp:b.t=='camp'?CMP[cpLv(b)].hp:b.t=='tower'?TWR[Math.min(13,Math.max(1,b.lv))].hp:b.t=='cannon'?CAN[Math.min(13,Math.max(1,b.lv))].hp:isSt(b)?STO[Math.min(STO.length-1,Math.max(1,b.lv))].hp:isMn(b)?MT(b)[Math.min(MT(b).length-1,Math.max(1,b.lv))].hp:b.t=='wall'?[0,300,500,700][Math.min(3,Math.max(1,b.lv))]:b.t=='rax'?RXHP[Math.min(11,b.lv-1)]:b.t=='hall'?HHP[Math.min(10,b.lv)]:b.t=='wall'?[300,300,800,1800][Math.min(3,b.lv)]:Math.round(TY[b.t].hp*(1+.3*(b.lv-1)));
const mk=(t,x,y,lv=1)=>{const b={t,x,y,lv,st:0,cd:0,up:0};b.max=b.hp=mhp(b);return b};
const fresh=()=>({gem:0,wins:0,tut:0,ob:null,shield:0,g:700,e:700,tr:0,lv:0,army:{barb:0,arch:0,giant:0,gob:0,wb:0,loon:0,mage:0,heal:0,king:0},sp:{zap:0,heal:0,rage:0},q:[],sc:0,b:[mk('hall',10,10),mk('mine',6,7),mk('pump',14,6),mk('camp',11,14),mk('hut',6,12),mk('hut',16,12)]});
let S=fresh(),mode='v',tab=null,sel=null,pk=null,hov=null,E=null,A=null,pick='barb',rs=0,pc='',last=performance.now();
const sum=(t,k)=>S.b.filter(b=>b.t==t).reduce((a,b)=>a+M(b.lv)*k,0);
const capS=l=>STO[Math.min(STO.length-1,Math.max(1,l|0))].cap;
const cap={g:()=>HC()+S.b.filter(b=>b.t=='gst'&&!b.nb&&(b.rg==null||b.rg>=1)).reduce((a,b)=>a+capS(b.lv),0),e:()=>HC()+S.b.filter(b=>b.t=='est'&&!b.nb&&(b.rg==null||b.rg>=1)).reduce((a,b)=>a+capS(b.lv),0)};
const campCap=()=>S.b.filter(b=>b.t=='camp').reduce((a,b)=>a+CMP[cpLv(b)].cap,0);
const used=a=>Object.keys(TR).reduce((s,k)=>s+(a[k]|0)*TR[k].sp,0);
const cnt=t=>t=='wblock'?S.b.filter(b=>b.t=='wall').length>>2:S.b.filter(b=>b.t==t).length;
const cost=t=>{const v=cost0(t);return v>=99999?v:Math.round(v*(1-((window.CLAN90&&CLAN90.disc)||0)/100))};const cost0=t=>t=='lab'?LAB[1].cost:t=='rocket'?RKT[1].cost:t=='mortar'?MOR[1].cost:t=='camp'?CMP[1].cost:t=='tower'?TWR[1].cost:t=='cannon'?CAN[1].cost:t=='rax'?150:(t=='gst'||t=='est')?STO[1].cost:(t=='mine'||t=='pump')?(t=='pump'?PUMP:MINE)[1].cost:t=='hut'?[0,0,600,1500,3000,6000][cnt(t)]||99999:TY[t].flat?TY[t].cost:Math.round(TY[t].cost*(1+.25*cnt(t)));
const BMB={c:[0,400,1000,10000,100000,300000,500000,850000],t:[0,0,360,7200,28800,64800,129600,216000],th:[0,3,3,5,7,8,9,10]};
const upc=b=>{const v=upc0(b);return v>=99999?v:Math.round(v*(1-((window.CLAN90&&CLAN90.disc)||0)/100))};const upc0=b=>b.t=='bomb'?(BMB.c[b.lv+1]||99999):b.t=='lab'?(LAB[b.lv+1]||{cost:99999}).cost:b.t=='rocket'?(RKT[b.lv+1]||{cost:99999}).cost:b.t=='mortar'?(MOR[b.lv+1]||{cost:99999}).cost:b.t=='camp'?(CMP[b.lv+1]||{cost:99999}).cost:b.t=='tower'?(TWR[b.lv+1]||{cost:99999}).cost:b.t=='cannon'?(CAN[b.lv+1]||{cost:99999}).cost:isSt(b)?(STO[b.lv+1]||{cost:99999}).cost:isMn(b)?(MT(b)[b.lv+1]||{cost:99999}).cost:b.t=='hall'?HCOST[b.lv-1]||99999:b.t=='rax'?RXC[b.lv]||99999:b.t=='wall'?[0,1000,5000][b.lv]||99999:Math.round(TY[b.t].cost*b.lv*1.9);
const bz=b=>b.up>0&&b.t!='wall'&&!(b.t=='hut'&&(b.nb||b.rpr));
const nBld=()=>S.b.filter(b=>b.t=='hut'&&!b.ruin&&!b.nb&&(b.rg==null||b.rg>=1)).reduce((a,b)=>a+1,0);
const builders=()=>Math.max(0,nBld()-S.b.filter(bz).length-(S.ob||[]).filter(o=>o.up>0).length);
const free=(l,x,y,s)=>x>=0&&y>=0&&x+s<=N&&y+s<=N&&!l.some(b=>b.hp>0&&x<b.x+TY[b.t].s&&x+s>b.x&&y<b.y+TY[b.t].s&&y+s>b.y)&&!(l===S.b&&(S.ob||[]).some(o=>x<o.x+o.sx&&x+s>o.x&&y<o.y+o.sy&&y+s>o.y));
const at=(l,x,y)=>l.find(b=>b.hp>0&&x>=b.x&&x<b.x+TY[b.t].s&&y>=b.y&&y<b.y+TY[b.t].s);
const ctr=b=>[b.x+TY[b.t].s/2,b.y+TY[b.t].s/2];
const edge=(p,b)=>{const s=TY[b.t].s;return Math.hypot(Math.max(b.x-p.x,0,p.x-b.x-s),Math.max(b.y-p.y,0,p.y-b.y-s))};
const P=(x,y,z=0)=>VT?[OX+x*TW,OY+y*TH-z]:[OX+(x-y)*TW/2,OY+(x+y)*TH/2-z*.62];
const tl=e=>{const r=cv.getBoundingClientRect(),u=((e.clientX-r.left)/r.width*680-OX)/(TW/2),v=((e.clientY-r.top)/r.height*420-OY)/(TH/2);return[(u+v)/2,(v-u)/2]};
const save=()=>{if(OFFLINE){try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}}try{syncBase()}catch(e){}}; /* v57: en la versión online la partida NO se guarda en el dispositivo, solo en Supabase */
if(!OFFLINE){try{localStorage.removeItem(K)}catch(e){}}else try{const o=JSON.parse(localStorage.getItem(K));if(o&&o.b){S=o;S.army={...fresh().army,...S.army};S.sp=S.sp||fresh().sp;S.b.forEach(b=>{if(b.hp<=0)b.hp=b.max})}}catch(e){}


/* ================= v27: botín por diferencia de Ayuntamiento + estado crítico de minería/almacenes ================= */
const LOOTF=[1,.9,.75,.5,.25]; /* 0 = mismo nivel o más, 1 = -1 nivel, ... 4 = -4 o menos */
const lootF=()=>{const h=E&&E.b?E.b.find(o=>o.t=='hall'):null,eh=h?h.lv:1;return LOOTF[Math.max(0,Math.min(4,hl()-eh))]};
const RES=new Set(['mine','pump','gst','est']);
const REGEN_S=10; /* segundos que tarda en regenerarse una estructura crítica */
function setCrit(b,created){if(b.rg!=null)return;
 const off=Math.max(0,Math.min(2592000,(Date.now()-(Date.parse(created)||Date.now()))/1000));
 if(TY[b.t].prod&&b.st>0){const fl=Math.min(b.st,b.stS||0);b.st=Math.max(fl,b.st-prodRate(b)*off/3600)} /* no produjo desde el ataque (sin bajar de lo que ya tenía al desconectarte) */
 b.rg=0;b.rf=0;b.hp=Math.max(1,Math.round(b.max*.1))}
function rgStep(b,dt){if(b.rg==null||CU)return; /* solo se regenera con el jugador conectado */
 if(b.rg<1){b.rg=Math.min(1,b.rg+dt/REGEN_S);b.hp=Math.max(1,Math.round(b.max*(.1+.9*b.rg)));if(b.rg>=1){b.hp=b.max;b.rf=1.3}}
 else{b.rf-=dt;if(b.rf<=0){delete b.rg;delete b.rf}}}
function drCrit(){for(const b of S.b){if(b.rg==null||b.ruin||b.nb)continue;const d=TY[b.t],f=Math.max(0,Math.min(1,b.rg)),p=P(b.x+d.s/2,b.y+d.s/2,d.h+(RFx[b.t]||0)+24),w=44,x=p[0]-w/2,y=p[1];
  const a=f>=1?Math.max(0,Math.min(1,(b.rf||0)/.9)):1,c=[229+(82-229)*f,57+(217-57)*f,53+(74-53)*f].map(Math.round);
  g.save();g.globalAlpha=a;g.fillStyle='rgba(0,0,0,.65)';g.fillRect(x-2,y-2,w+4,11);g.fillStyle='rgb('+c.join(',')+')';g.fillRect(x,y,Math.max(2,w*f),7);g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=1.2;g.strokeRect(x-.5,y-.5,w+1,8);g.restore()}}
function vil(dt){rsAdv(dt);for(const b of S.b){const d=TY[b.t];rgStep(b,dt);
 if(d.prod&&!b.ruin&&!b.nb&&(b.rg==null||b.rg>=1)&&b.st<LIMF(b)){let k=1;if(b.bst>0){k=1+Math.min(dt,b.bst)/dt;b.bst=Math.max(0,b.bst-dt)}b.st=Math.min(LIMF(b),b.st+prodRate(b)*dt*k/3600)}
 if(b.up>0&&(b.up-=dt)<=0){b.up=0;snd(b.nb||b.rpr?'built':'done');if(b.nb){b.nb=0;if(b.t!='wall')mRep('build',1)}else if(b.rpr){b.rpr=0;b.ruin=0}else{b.lv++;b.max=mhp(b);b.hp=b.max;if(b.t!='wall')mRep('build',1)}}}}
const TNOW=()=>(typeof SB0=='number')?SB0+(performance.now()-PB0):Date.now();
const flash=h=>{const m=document.getElementById('msg');m.firstChild.innerHTML=h;m.classList.add('on')};

function ui(){
 const $=id=>document.getElementById(id);let h='';
 $('top').innerHTML=mode=='v'?`<span>🪙 ${S.g|0}/${cap.g()}</span><span class=e>💧 ${S.e|0}/${cap.e()}</span><span>${ICO('ranking','🏆')} ${S.tr}</span><span>🔨 ${builders()}/${nBld()}</span><button data-menu=1 style="min-width:0;min-height:0;padding:2px 10px">⚙</button>${isAdm()?'<button data-adm=1 style="min-width:0;min-height:0;padding:2px 10px">👑</button>':''}`:`<span>⏱ ${Math.max(0,A.time|0)}s</span><span>💥 ${Math.round(pct()*100)}%</span><span>💰 ${Math.round(lootF()*100)}%</span><span>${'★'.repeat(stars())+'☆'.repeat(3-stars())}</span>`;
 if(mode=='v'){
  h=`<div class="row sc"><button data-tab=shop>🛒 Tienda</button><button class=atk data-a=1 ${used(S.army)||S.army.king?'':'disabled'}>⚔️ ¡Atacar!</button>${S.b.some(b=>b.ruin)?'<button data-fix=1>🔧 Reparar todo</button>':''}<button data-m=1 ${ONL&&(used(S.army)||S.army.king)?'':'disabled'}>🌐 Atacar jugador real</button><button data-l=1 ${ONL?'':'disabled'}>${ICO('ranking','🏆')} Ranking</button></div><div class=hint>${ONL?'En línea: otros jugadores pueden atacar tu aldea':'Modo solo (sin conexión multijugador)'}</div>`;
  if(tab=='shop')h+='<div class="row sc">'+Object.keys(TY).filter(t=>TY[t].cost&&t!='wall').map(t=>{const d=TY[t],c=cost(t);return`<button data-b=${t} class="${sel==t?'on':''}" ${S[d.cur]<c||cnt(t)>=mx(t)?'disabled':''}>${d.e||'🧱'} ${d.n}<small>${c} ${d.cur=='g'?'🪙':'💧'} · ${cnt(t)}/${mx(t)}</small></button>`}).join('')+'</div>'+(sel?(sel=='wall'?'<div class=row><button data-no=1>✖ Terminar muros</button></div><div class=hint>Arrastra el dedo por el mapa para dibujar muros.</div>':'<div class=row><button class=okb data-ok=1>✔ Construir</button><button data-no=1>✖ Cancelar</button></div><div class=hint>Arrastra el edificio o toca el mapa para moverlo.</div>'):'');
  if(tab=='army')h+=armyX();if(0)h+=`<div class="row sc">`+Object.keys(TR).map(k=>{const d=TR[k];return`<button data-t=${k} ${S.e<d.cost||used(S.army)+d.sp>campCap()||(d.hero&&S.army[k])?'disabled':''}>${d.e} ${d.n} ×${S.army[k]}<small>${d.cost} 💧 · ${d.hero?'Héroe':d.sp+' espacio'}</small></button>`}).join('')+`${Object.keys(SP).map(k=>`<button data-s=${k} ${spLocked()||S.e<SP[k].cost||spn()>=spCap()?'disabled':''}>${SP[k].e} ${SP[k].n} ×${S.sp[k]}<small>${SP[k].cost} 💧 · hechizo</small></button>`).join('')}</div><div class=hint>Espacio: ${used(S.army)}/${campCap()} · Hechizos: ${spn()}/5</div>`;
  if(tab=='info'&&pk){const d=TY[pk.t];h+=`<div class=info>${d.n} · Nivel ${pk.lv}/${lcap(pk)} · ❤️ ${pk.hp|0}/${pk.max}`+(pk.up>0?`<br>🔨 Mejorando… ${Math.ceil(pk.up)}s`:(d.cost||pk.t=='hall')&&pk.lv<(lcap(pk))?`<br><button data-u=1 ${S[d.cur]<upc(pk)||!builders()||!reqOk(pk)?'disabled':''}>Mejorar a nivel ${pk.lv+1}<small>${upc(pk)} ${d.cur=='g'?'🪙':'💧'}</small></button>`:'')+`</div>`}
  if(tab=='scout'&&pk)h+=scoutX();if(tab=='info'&&pk)h+=infoX();if(!tab)h+=`<div class=hint>Los recursos se recolectan solos hasta llenar cada estructura (burbuja): tócala para reiniciar. Toca el cuartel para entrenar.</div>`;
  if(mv&&sel)h+='<div class=row><button class=okb data-ok=1>✔ Mover aquí</button><button data-no=1>✖ Cancelar</button></div>';h+=`<div class=hint>${ONL?'<button data-out=1 style="min-width:0;font-size:.7rem">Cerrar sesión ('+esc(S.name||'')+')</button>':''}</div>`;
 } else h=`<div class=row>`+Object.keys(TR).map(k=>`<button data-p=${k} class="${pick==k?'on':''}" >${TR[k].e} ×${A.army[k]}</button>`).join('')+`<button data-r=1>🏳️ Retirada</button>${Object.keys(SP).map(k=>`<button data-p=${k} class="${pick==k?'on':''}" ${A.sp[k]?'':'disabled'}>${SP[k].e} ×${A.sp[k]}</button>`).join('')}</div>${atkCtl()}<div class=hint>Toca el terreno a 2 casillas de los edificios para desplegar. Los muros bloquean el paso.</div>`;
 if(mode=='v'&&(tab=='info'||tab=='army'||tab=='scout')&&pk&&!sel)h=h.replace(/^<div class="row sc">.*?<\/div><div class=hint>[^<]*<\/div>/,'<div class=row><button data-x=1>✕ Cerrar</button></div>');if(h!==pc){$('panel').innerHTML=h;pc=h}
}
document.getElementById('panel').onclick=e=>{
 const b=e.target.closest('button');if(!b)return;const d=b.dataset;
 if(d.tab)tab=tab==d.tab?null:d.tab,sel=null;
 else if(d.b){sel=sel==d.b?null:d.b;mkGh()}else if(d.ok)buildGh();else if(d.no){cancelMv();sel=null;gh=null;hov=null}
 else if(d.t){const t=TR[d.t];if(S.e>=t.cost&&used(S.army)+t.sp<=campCap()&&!(t.hero&&S.army[d.t])){S.e-=t.cost;S.army[d.t]++}}
 else if(d.q){A.qty[pick]=Math.max(1,Math.min(A.army[pick]||1,(A.qty[pick]||1)+Number(d.q)))}else if(d.o){A.ord[pick]=d.o;for(const t of A.tr)if(t.k==pick&&t.hp>0){t.tc=d.o;t.tg=null}}else if(d.x){pk=null;tab=null}else if(d.ti)tab='info';else if(d.ta)tab='army';else if(d.tq){const[k,dd]=d.tq.split(':');TQ[k]=Math.max(1,Math.min(20,(TQ[k]||1)+Number(dd)))}else if(d.tr)enqueue(d.tr);else if(d.sc){if(S.e>=60&&(S.sc||0)<8){S.e-=60;S.sc=(S.sc||0)+1}}else if(d.ub&&pk)upBlock();else if(d.fix)fixAll();else if(d.del&&pk)demolish();else if(d.ua&&pk)upAllWalls();else if(d.rep&&pk){const c=rc(pk),k=TY[pk.t].cur;if(pk.ruin&&S[k]>=c){S[k]-=c;pk.ruin=0}}else if(d.mv&&pk){if(pk.t=='wall'&&WROW.on&&WROW.pk===pk)mvR=wRow(pk).map(w=>({w,ox:w.x-pk.x,oy:w.y-pk.y}));else mvR=null;mv=pk;mv.hp0=mv.hp;mv.hp=0;if(mvR)for(const r of mvR)if(r.w!==pk){r.w.hp0=r.w.hp;r.w.hp=0}sel=pk.t;gh={x:pk.x,y:pk.y};hov=[pk.x+TY[pk.t].s/2,pk.y+TY[pk.t].s/2];tab=null}else if(d.m)findReal();else if(d.l)ranking();else if(d.s){const s=SP[d.s];if(!spLocked()&&S.e>=s.cost&&spn()<spCap()){S.e-=s.cost;S.sp[d.s]++}}else if(d.a)startAttack();
 else if(d.p)pick=d.p;
 else if(d.r)endAttack();
 else if(d.u){const t=TY[pk.t],c=upc(pk);if(pk.lv<(lcap(pk))&&S[t.cur]>=c&&builders()&&reqOk(pk)){S[t.cur]-=c;if(t.flat){pk.lv++;pk.max=mhp(pk);pk.hp=pk.max}else pk.up=pk.lv*12}}
 else if(d.out)logout()
 ui();save();
};
cv.onpointermove=e=>{const[x,y]=tl(e);hov=[x,y]};cv.onpointerleave=()=>hov=null;
cv.onpointerdown=e=>{
 if(document.getElementById('msg').classList.contains('on'))return;try{AC.resume()}catch(e){}
 const[x,y]=tl(e),tx=Math.floor(x),ty=Math.floor(y);
 if(mode=='v'){
  if(sel){const d=TY[sel],s=d.s,px=Math.max(0,Math.min(N-s,Math.round(x-s/2))),py=Math.max(0,Math.min(N-s,Math.round(y-s/2))),c=cost(sel);
   if(free(S.b,px,py,s)&&S[d.cur]>=c&&cntOk(sel)){S[d.cur]-=c;S.b.push(mk(sel,px,py));if(sel!='wall'||S[d.cur]<c)sel=null}}
  else{const b=at(S.b,tx,ty);pk=b||null;tab=b?'info':null;
   if(b&&TY[b.t].prod&&b.st>=LIMF(b)-1){b.st=0;snd(880,.12,'triangle',.05)}}
 } else if(A.on&&SPK(pick)){if(A.sp[pick]>0){A.sp[pick]--;castSp(pick,x,y);if(!A.sp[pick]&&(PSP82=false)===false)pick=Object.keys(TR).find(k=>A.army[k])||pick}} else if(A.on&&A.army[pick]>0&&x>-2&&y>-2&&x<N+2&&y<N+2&&!E.b.some(b=>b.hp>0&&b.t!='wall'&&edge({x,y},b)<2)){
  snd(300,.07,'square');A.army[pick]--;A.tr.push({k:pick,x,y,hp:TR[pick].hp,max:TR[pick].hp,cd:0,tg:null});
  if(!A.army[pick])pick=Object.keys(TR).find(k=>A.army[k])||pick;
 }
 ui();save();
};

function startAttack0(){
 const L=S.lv,tutm=S.tut!=null&&S.tut<TUTS.length,el=Math.min(5,1+(L>>2)),b=[mk('hall',7,7,el)],lv=(t,x,y)=>b.push(mk(t,x,y,el));
 if(!tutm)for(let i=4;i<=13;i++)for(const[x,y]of[[i,4],[i,13],[4,i],[13,i]])if((x+y)%3&&!b.some(w=>w.t=='wall'&&w.x==x&&w.y==y))lv('wall',x,y);
 const put=(t,lo,hi,out)=>{for(let k=0;k<90;k++){const x=lo+Math.random()*(hi-lo)|0,y=lo+Math.random()*(hi-lo)|0;if((!out||x<3||x>14||y<3||y>14)&&free(b,x,y,TY[t].s)){lv(t,x,y);return}}};
 const df=['cannon','tower','mortar'];
 for(let i=0,nd=tutm?1:Math.min(1+(L>>1),4);i<nd;i++)put(i<2?df[i%2]:df[Math.random()*3|0],5,11);
 for(const t of['mine','pump','gst','camp'])put(t,5,11);
 for(const t of['mine','pump','est','mine'])put(t,0,16,1);
 b.forEach(o=>{o.x+=3;o.y+=3;if(df.includes(o.t)){o.lv=Math.max(1,el-1);o.max=o.hp=Math.max(1,Math.round(mhp(o)*(tutm?.5:.75)))}});const wm={};b.forEach(w=>{if(w.t=='wall')wm[w.x+','+w.y]=w});const tr=[];for(let i=0;i<(tutm?0:1+Math.min(L>>1,3));i++)for(let k=0;k<60;k++){const x=8+Math.random()*7,y=8+Math.random()*7;if(!at(b,x|0,y|0)){tr.push({x,y,k:TRK(),lv:Math.max(1,Math.min(7,L>>1))});break}}
 E={N:24,b,wm,traps:tr,tot:b.filter(w=>w.t!='wall').length,lg:300+L*180+(Math.random()*200|0),le:300+L*160+(Math.random()*200|0)};
 A={on:true,time:180,army:{...S.army},sp:{...S.sp},zones:[],qty:{},ord:{},tr:[],shots:[],fx:[],pend:[],sh:0};
 for(const k in S.army)S.army[k]=0;for(const k in S.sp)S.sp[k]=0;
 pick=Object.keys(TR).find(k=>A.army[k]);mode='a';sel=null;tab=null;ui();
}
const dead=()=>E.b.filter(b=>b.hp<=0&&b.t!='wall').length;
const hallDead=()=>E.b[0].hp<=0;
const pct=()=>E?dead()/E.tot:0;
const stars=()=>(pct()>=.5?1:0)+(hallDead()?1:0)+(pct()>=1?1:0);
function endAttack(){
 if(mode!='a'||!A.on)return;A.on=false;
 const p=pct(),s=stars(),fr=E.real?(hallDead()?.7:p>=.5?(sto()?.6:.3):.3*p/.5):p,lg=Math.round(E.lg*fr),le=Math.round(E.le*fr);
 if(!E.real){S.g=Math.min(cap.g(),S.g+lg);S.e=Math.min(cap.e(),S.e+le);}
 for(const k in A.army)S.army[k]+=A.army[k];for(const k in A.sp)S.sp[k]+=A.sp[k];for(const t of A.tr)if(t.hp>0&&t.k!='king'&&!t.sm)S.army[t.k]++;;
 const dt=E.real?(s?1:0):0;S.tr=Math.max(0,S.tr+dt);if(s)S.lv++;snd(s?990:200);if(E.real)sendRaid(E.real,lg,le,s,p,sto(),hallDead());
 flash(`<b style="font-size:1.6rem;color:${s?'#8fe36f':'#ff7a66'}">${s?'¡Victoria!':'Derrota'}</b><br><span style="font-size:2rem;color:#f5c542">${'★'.repeat(s)}${'☆'.repeat(3-s)}</span><br>Destrucción: ${Math.round(p*100)}%<br>Botín: ${lg} 🪙 ${le} 💧<br>Trofeos: ${dt>0?'+':''}${dt} ${ICO('ranking','🏆')}<br><br><button id="ok">Volver a la aldea</button>`);
 document.getElementById('ok').onclick=()=>{document.getElementById('msg').classList.remove('on');mode='v';A=null;E=null;ui();save()};
}
const wallAt=(x,y)=>{const w=E.wm[Math.floor(x)+','+Math.floor(y)];return w&&w.hp>0?w:null};

function sim(dt){
 A.time-=dt;const al=E.b.filter(b=>b.hp>0),nw=al.filter(b=>b.t!='wall'),ws=al.filter(b=>b.t=='wall');
 for(const t of A.tr){if(t.hp<=0)continue;const D=TR[t.k];t.mv=0;if(t.sw>0)t.sw-=dt;t.rm=A.zones.some(z=>z.k=='rage'&&Math.hypot(t.x-z.x,t.y-z.y)<z.r)?1.5:1;if(t.ifr>0){t.ifr-=dt;t.rm=Math.max(t.rm,t.ifm||1.3)}
  if(!t.tg||t.tg.hp<=0){let l=D.w&&ws.length?ws:nw;const p=D.pf?l.filter(b=>D.pf.includes(b.t)):[];if(p.length)l=p;if(t.tc&&OC[t.tc]){const q=al.filter(b=>OC[t.tc].includes(b.t));if(q.length)l=q}t.tg=l.reduce((m,b)=>!m||edge(t,b)<edge(t,m)?b:m,null)}
  if(!t.tg)continue;const d=edge(t,t.tg);
  if(D.w&&d<.6){for(const b of al)if(edge(t,b)<1.7)b.hp-=b.t=='wall'?560:110;t.hp=0;A.shots.push({a:[t.x,t.y],b:[t.x,t.y],c:'#ffd',l:.3,sp:1.7});continue}
  let hit=t.tg;
  if(d>D.rg){const[cx,cy]=ctr(t.tg),a=Math.atan2(cy-t.y,cx-t.x),nx=t.x+Math.cos(a)*D.v*t.rm*dt,ny=t.y+Math.sin(a)*D.v*t.rm*dt,w=wallAt(nx,ny);
   if(w&&!D.w)hit=w;else{t.x=nx;t.y=ny;hit=null;t.mv=1}}
  if(hit){t.cd-=dt;if(t.cd<=0){t.cd=D.rt;const _hf=()=>{if(!D.ar){const hq=ctr(hit);A.fx.push({k:'imp',x:hq[0],y:hq[1],t:.28,L:.28,v:t.k})}hit.hp-=(t.dm||D.dmg)*t.rm*(D.bn&&D.pf.includes(hit.t)?D.bn:1);if(D.ar){const hc=ctr(hit);for(const b of E.b)if(b!==hit&&b.hp>0&&edge({x:hc[0],y:hc[1]},b)<D.ar)b.hp-=(t.dm||D.dmg)*t.rm;A.fx.push({k:'boom',x:hc[0],y:hc[1],t:.35,L:.35,R:Math.max(.55,D.ar*.5)})}};if(D.rg<1)_hf();else A.pend.push({t:.3,f:_hf});if(D.rg<1){t.sw=.25;t.at=performance.now();t.tx=ctr(hit);A.shots.push({k:'m',a:[t.x,t.y],b:ctr(hit),l:.25,L:.25})}else{A.shots.push({k:'ar',tk:t.k,a:[t.x,t.y],b:ctr(hit),l:.3,L:.3});if(t.k=='arch'){t.at=performance.now();t.tx=ctr(hit)}};snd(HS(t))}}}
 for(const c of nw){const d=TY[c.t];if(!d.rg)continue;c.cd-=dt;if(c.cd>0)continue;
  const[cx,cy]=ctr(c);let tg=null,bd=1e9;
  for(const t of A.tr){if(t.hp<=0)continue;const q=Math.hypot(t.x-cx,t.y-cy);if(q<=d.rg&&q>=(d.mn||0)&&q<bd){bd=q;tg=t}}
  if(tg){c.cd=d.rt;const dm=d.dmg*M(c.lv);
   if(d.sp){for(const t of A.tr)if(t.hp>0&&Math.hypot(t.x-tg.x,t.y-tg.y)<d.sp)t.hp-=dm;A.shots.push({a:[cx,cy],b:[tg.x,tg.y],c:'#ffb',l:.3,sp:d.sp})}
   else{tg.hp-=dm;A.shots.push({a:[cx,cy],b:[tg.x,tg.y],c:d.col,l:.1});snd(140,.05,'square',.02)}}}
 for(const tp of E.traps){if(tp.d)continue;if(A.tr.some(t=>t.hp>0&&Math.hypot(t.x-tp.x,t.y-tp.y)<.9)){tp.d=1;for(const t of A.tr)if(t.hp>0&&Math.hypot(t.x-tp.x,t.y-tp.y)<2)t.hp-=170;A.shots.push({a:[tp.x,tp.y],b:[tp.x,tp.y],c:'#f90',l:.4,sp:2});snd(70,.4,'sawtooth',.08)}}A.zones=A.zones.filter(z=>{z.t-=dt;if(z.k=='heal')for(const t of A.tr)if(t.hp>0&&Math.hypot(t.x-z.x,t.y-z.y)<z.r)t.hp=Math.min(t.max,t.hp+SP.heal.hl*dt);return z.t>0});A.shots=A.shots.filter(s=>(s.l-=dt)>0);
 if(pct()>=1||(A.all===false&&!E.b.some(b=>b.hp>0&&b.t!='wall'&&!TY[b.t].trap&&tierOf(b)<99))||A.time<=0||(!A.tr.some(t=>t.hp>0&&!TR[t.k].heal)&&!Object.keys(TR).some(k=>!TR[k].heal&&A.army[k]>0)&&!A.army.king))endAttack();
}

const poly=(p,c)=>{g.beginPath();p.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.fillStyle=c;g.fill()};
const sh=(c,f)=>{const n=parseInt(c.slice(1),16);return'rgb('+[n>>16,n>>8&255,n&255].map(v=>Math.min(255,v*f|0))+')'};
function box(x,y,s,h,c,r){poly([P(x+.25,y+.25),P(x+s+.45,y+.25),P(x+s+.45,y+s+.45),P(x+.25,y+s+.45)],'rgba(0,0,0,.22)');poly([P(x,y+s),P(x+s,y+s),P(x+s,y+s,h),P(x,y+s,h)],sh(c,.8));poly([P(x+s,y),P(x+s,y+s),P(x+s,y+s,h),P(x+s,y,h)],sh(c,.55));poly([P(x,y,h),P(x+s,y,h),P(x+s,y+s,h),P(x,y+s,h)],r);g.strokeStyle='#0005';g.lineWidth=1;g.stroke()}
function bar(x,y,w,f){g.fillStyle='#000b';g.fillRect(x-w/2-1,y-1,w+2,6);g.fillStyle=f>.4?'#6fe04a':'#e8523a';g.fillRect(x-w/2,y,w*f,4)}
function drB(b){const d=TY[b.t],s=d.s,h=d.h;box(b.x,b.y,s,h,d.c,d.r);
 const[cx,cy]=P(b.x+s/2,b.y+s/2,h);
 if(d.e){g.font=(s*11+10)+'px serif';g.fillText(d.e,cx,cy-3)}
 if(b.t=='wall')return;
 g.font='12px "Lilita One",sans-serif';g.lineWidth=3;g.strokeStyle='#000';g.fillStyle='#fff';const[bx,by]=P(b.x+s/2,b.y+s);
 g.strokeText('Nv'+b.lv,bx,by+9);g.fillText('Nv'+b.lv,bx,by+9);
 if(b.hp<b.max&&b.rg==null)bar(cx,cy-s*7-16,30,b.hp/b.max);
 if(mode=='v'){
  if(b.up>0){}
  else if(d.prod&&b.st>=LIMF(b)-1){g.fillStyle='#000b';g.beginPath();g.arc(cx,cy-24,12,0,7);g.fill();g.font='15px serif';g.fillText(d.prod=='g'?'🪙':'💧',cx,cy-23)}
  if(b===pk){const[ax,ay]=P(b.x+s/2,b.y+s/2);g.strokeStyle='#fff';g.lineWidth=2;g.beginPath();g.ellipse(ax,ay,s*TW*.45,s*TH*.45,0,0,7);g.stroke();
   if(d.rg){g.strokeStyle='#fff8';g.beginPath();g.ellipse(ax,ay,d.rg*TW*ER(),d.rg*TH*ER(),0,0,7);g.stroke()}}}}
function drTOld(t){const D=TR[t.k],[x,y]=P(t.x,t.y),r=D.r||8;
 g.fillStyle='#0005';g.beginPath();g.ellipse(x,y,r,r/2,0,0,7);g.fill();
 g.fillStyle=D.c;g.beginPath();g.arc(x,y-r,r,0,7);g.fill();g.strokeStyle='#000';g.lineWidth=2;g.stroke();
 g.font=(r+4)+'px serif';g.fillText(D.e,x,y-r+1);bar(x,y-2*r-8,18,t.hp/t.max)}
function draw(){
 g.clearRect(0,0,680,420);g.fillStyle='#3f7a2c';g.fillRect(0,0,680,420);g.textAlign='center';g.textBaseline='middle';
 poly([P(-.8,-.8),P(N+.8,-.8),P(N+.8,N+.8),P(-.8,N+.8)],'#7a5a36');
 for(let y=0;y<N;y++)for(let x=0;x<N;x++)poly([P(x,y),P(x+1,y),P(x+1,y+1),P(x,y+1)],(x+y)%2?'#79bd48':'#6fb43f');
 g.font='28px serif';for(let i=0;i<N;i+=2)for(const[x,y]of[[i,-1.7],[i,N+.7],[-1.7,i],[N+.7,i]]){const p=P(x+.5,y+.5);g.fillText('🌲',p[0],p[1]-8)}
 if(mode=='v'&&sel&&hov){const s=TY[sel].s,px=Math.max(0,Math.min(N-s,Math.round(hov[0]-s/2))),py=Math.max(0,Math.min(N-s,Math.round(hov[1]-s/2)));poly([P(px,py),P(px+s,py),P(px+s,py+s),P(px,py+s)],free(S.b,px,py,s)?'#2f2a':'#e03a2aaa')}
 drWZone();const en=[];for(const b of mode=='a'?E.b:S.b)if(b.hp>0)en.push({d:b.x+b.y+TY[b.t].s,b});if(mode=='v')for(const o of S.ob||[])if(o.x+o.sx<=N&&o.y+o.sy<=N)en.push({d:o.x+o.y+o.s,ob:o});
 if(mode=='a')for(const t of A.tr)if(t.hp>0||(t.dk&&performance.now()-t.dk<2100))en.push({d:t.x+t.y,t});
 en.sort((a,b)=>a.d-b.d);for(const o of en)o.b?drB(o.b):drT(o.t);try{drWallSel()}catch(e){}
 if(mode=='a')for(const s of A.shots){const a=P(s.a[0],s.a[1],s.z||12),b=P(s.b[0],s.b[1],6);
  if(s.sp){g.fillStyle='#ffc86a77';g.beginPath();g.ellipse(b[0],b[1]+6,s.sp*TW*ER(),s.sp*TH*ER(),0,0,7);g.fill()}
  g.strokeStyle=s.c;g.lineWidth=2;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}
}
const PL={k:'#1b1208',w:'#fff',g:'#f5c542',y:'#fff09a',o:'#b9780f',p:'#c06be8',q:'#7b3fa0',d:'#f0c8ff',r:'#e8604c',R:'#b8301f',s:'#c4ccd6',S:'#7d8791',b:'#6b4626',B:'#a87444',n:'#f0c9a0',G:'#59b34a',H:'#2f7a35',t:'#d9a441',f:'#ff9a3c'};const IC={coin:['...yg.....','..yggo.yg.','.yggggogo.','yggggggggo','oggggggooo','.oooooooo.'],drop:['...pp...','..pdpp..','.pdpppp.','.pdpppq.','pdppppqq','pppppqqq','ppppqqqq','.pqqqqq.','..qqqq..'],flame:['....f....','...fff...','..ffyff..','.ffyyyff.','.fyyyyyf.','..fffff..'],cannon:['......sss.','.....sSSSs','.sSSSSSSSs','sSSSSSSSS.','.kSSSSSk..','kkkSSSkkk.','.kk...kk..'],mortar:['..sSSs..','.sSSSSS.','.SSSSSS.','SSSSSSSS','.kSSSSk.','kkkkkkkk'],flag:['kRRRRR','kRRRRr','kRRRR.','k.....','k.....','k.....','k.....'],bomb:['.....yo.','....k...','...kkkk.','..kkkkkk','..kwkkkk','..kkkkkk','...kkkk.'],tree:['....H....','...HHH...','...HGH...','..HHGHH..','..HGHHH..','.HHHGHHH.','.HGHHHHH.','HHHHHHHHH','....b....','....b....']};const TT=['..hhhh..','.hhhhhh.','.nnnnnn.','.nknknn.','..nnnn..','.tttttt.','nttttttn','.tttttt.','.tt..tt.','.tt..tt.','.kk..kk.'];const TP={barb:{...PL,h:'#f2c14e',t:'#8a5a2b'},arch:{...PL,h:'#ff7ab0',t:'#3f9a3a'},giant:{...PL,h:'#e08a3c',t:'#b0452a'},gob:{...PL,h:'#2f7a35',n:'#7fd35f',t:'#7a4a22'},wb:PL,loon:{...PL,h:'#e8523a',t:'#b8301f'},mage:{...PL,h:'#6a3fa0',t:'#5a2d91'},heal:{...PL,h:'#fff',t:'#f3f3ff',n:'#f0c9a0'}};function spr(a,x,y,pal,c=2){const X=Math.round((x-a[0].length*c/2)/2)*2,Y=Math.round((y-a.length*c)/2)*2;for(let j=0;j<a.length;j++)for(let i=0;i<a[j].length;i++){const k=a[j][i];if(k!='.'){g.fillStyle=pal[k];g.fillRect(X+i*c,Y+j*c,c,c)}}}function box(x,y,s,h,c,r){poly([P(x+.25,y+.25),P(x+s+.45,y+.25),P(x+s+.45,y+s+.45),P(x+.25,y+s+.45)],'rgba(0,0,0,.22)');poly([P(x,y+s),P(x+s,y+s),P(x+s,y+s,h),P(x,y+s,h)],sh(c,.8));poly([P(x+s,y),P(x+s,y+s),P(x+s,y+s,h),P(x+s,y,h)],sh(c,.55));g.strokeStyle='#0004';g.lineWidth=2;for(let z=6;z<h;z+=6){g.beginPath();g.moveTo(...P(x,y+s,z));g.lineTo(...P(x+s,y+s,z));g.lineTo(...P(x+s,y,z));g.stroke()}poly([P(x-.08,y-.08,h),P(x+s+.08,y-.08,h),P(x+s+.08,y+s+.08,h),P(x-.08,y+s+.08,h)],r);g.strokeStyle='#0007';g.lineWidth=2;g.stroke()}function pyr(b,hh,c){const d=TY[b.t],s=d.s,x=b.x,y=b.y,h=d.h,A=P(x+s/2,y+s/2,h+hh);poly([P(x-.15,y+s+.15,h),P(x+s+.15,y+s+.15,h),A],sh(c,.95));poly([P(x+s+.15,y+s+.15,h),P(x+s+.15,y-.15,h),A],sh(c,.6))}function drB0Old(b){const d=TY[b.t],s=d.s,h=d.h,t=b.t;if(t=='wall'){drWall(b);return}if(b.ruin){box(b.x,b.y,s,Math.max(4,h/3|0),'#555','#7a7a7a');return}if(t=='camp'){drCamp(b);return}if(t=='rocket'){drRocket(b);return}if(t=='mine'){drMine(b);return}if(t=='pump'){drPump(b);return}const wc=t=='wall'?[0,['#8a6a3e','#b08a52'],['#8d8d8d','#cfcfcf'],['#4d6b8a','#9fb8d0']][Math.min(3,b.lv)]:null;if(t=='gst')drGst(b);else if(t=='est')drEst(b);else if(t=='hall')drHallA(b);else if(t=='rax')drRax(b);else box(b.x,b.y,s,h,wc?wc[0]:d.c,wc?wc[1]:d.r);if(t=='wall')return;if(TY[t].trap){drTrap(b);return}const[cx,cy]=P(b.x+s/2,b.y+s/2,h),[dx,dy]=P(b.x+s/2,b.y+s),ex={hall:30+(b.lv>=4?18:b.lv>=3?8:0),tower:32,camp:20}[t]||8;const sto=t=='gst'||t=='est';if(!sto&&t!='hall'&&t!='rax'){g.fillStyle='#2b1809';g.fillRect(dx-6,dy-14,12,14);if(h>=24){g.fillStyle='#ffe58a';g.fillRect(dx-18,dy-28,6,6);g.fillRect(dx+12,dy-28,6,6)}}if(t=='hall'){drHallB(b,cx,cy)}else if(t=='tower'){pyr(b,14,'#8a4b2a');spr(IC.flag,cx,cy-14,PL)}else if(t=='camp'){pyr(b,16,'#e8d9a8');spr(IC.flame,...P(b.x+s/2,b.y+s+.3),PL)}else if(t=='scout'){pyr(b,18,'#7a4fb0');spr(IC.flag,cx,cy-18,PL)}else if(t=='rax'){}else if(t=='hut'){pyr(b,14,'#a0522d')}else if(t=='lab'){pyr(b,12,'#5fb0e8');drEm('🔬',cx,cy-12,20)}else if(t=='cauldron'){pyr(b,10,'#9b59b6');drEm('⚗️',cx,cy-10,20)}else if(t=='rocket'){pyr(b,10,'#c0392b');drEm('🚀',cx,cy-14,24)}else if(t=='wizard'){pyr(b,18,'#8e44ad');drOrb(cx,cy-24)}else if(t=='cannon')spr(IC.cannon,cx,cy+6,PL,3);else if(t=='mortar')spr(IC.mortar,cx,cy+6,PL,3);else if(sto){}else if(t=='mine')spr(IC.coin,cx,cy+6,PL,2);else spr(IC.drop,cx,cy+8,PL,2);g.font='14px Lilita One,Arial Black,sans-serif';const[bx,by]=P(b.x+s,b.y+s);g.beginPath();g.arc(bx,by+10,10,0,7);g.fillStyle='#1d4f9a';g.fill();g.lineWidth=2.5;g.strokeStyle='#fff';g.stroke();g.fillStyle='#fff';g.fillText(b.lv,bx,by+11);if(b.hp<b.max&&b.rg==null)bar(cx,cy-ex-12,30,b.hp/b.max);if(mode=='v'){const bob=(performance.now()/300|0)%2*4;if(b===pk){const[ax,ay]=P(b.x+s/2,b.y+s/2);g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.ellipse(ax,ay,s*TW*.45,s*TH*.45,0,0,7);g.stroke();if(d.rg){g.strokeStyle='#fff8';g.beginPath();g.ellipse(ax,ay,d.rg*TW*ER(),d.rg*TH*ER(),0,0,7);g.stroke()}}}}function drTOld(t){let[x,y]=P(t.x,t.y);if(t.sw>0&&t.tx){const q=P(t.tx[0],t.tx[1]),dx=q[0]-x,dy=q[1]-y,dl=Math.hypot(dx,dy)||1,k=Math.sin((1-t.sw/.25)*Math.PI)*9;x+=dx/dl*k;y+=dy/dl*k}const c=t.k=='giant'||t.k=='king'||t.k=='loon'?3:2,m=t.mv?(performance.now()/120|0)%2*2:0;g.fillStyle='#0006';g.beginPath();g.ellipse(x,y,7*c,(VT?4:3)*c,0,0,7);g.fill();spr(t.k=='wb'?IC.bomb:TT,x,y-m,TP[t.k],c);if(t.k=='arch'){g.fillStyle='#a87444';g.fillRect(x+8,y-24,2,16)}if(t.k=='king'){g.fillStyle='#f5c542';g.fillRect(x-9,y-40,18,7)}if(t.hp<t.max)bar(x,y-(t.k=='giant'||t.k=='king'?46:32),20,t.hp/t.max)}function drTerrainRaw(){g.setTransform(1,0,0,1,0,0);g.fillStyle=FBG();g.fillRect(0,0,cv.width,cv.height);g.setTransform(KS*cam.z,0,0,KS*cam.z,KS*cam.x+(A&&A.sh>0?(Math.random()-.5)*9*KS:0),KS*cam.y+(A&&A.sh>0?(Math.random()-.5)*9*KS:0));g.textAlign='center';g.textBaseline='middle';drForest(0);poly([P(-.55,-.55),P(N+.55,-.55),P(N+.55,N+.55),P(-.55,N+.55)],SK1('#7fae47'));for(let y=0;y<N;y++)for(let x=0;x<N;x++)poly([P(x-.01,y-.01),P(x+1.01,y-.01),P(x+1.01,y+1.01),P(x-.01,y+1.01)],(x+y)%2?SK1('#b0da66'):SK1('#93c64d'));}
function draw(){drTerrain();drPlaceGrid();drWZone();if(_tcG)drGrassOv();else drGrass();const en=[];for(const b of mode=='a'?E.b:S.b)if(b.hp>0||(mode=='a'&&!TY[b.t].trap))en.push({d:b.x+b.y+TY[b.t].s,b});if(mode=='v'){for(const o of S.ob||[])if(o.x+o.sx<=N&&o.y+o.sy<=N)en.push({d:o.x+o.y+o.s,ob:o});for(const u of vuList())en.push({d:u.d,t:u})}if(mode=='a')for(const t of A.tr)if(t.hp>0||(t.dk&&performance.now()-t.dk<2100))en.push({d:t.x+t.y,t});if(mode=='a')for(const z of A.zones){const[p,q]=P(z.x,z.y);g.fillStyle=z.k=='heal'?'#6fe04a55':'#e0523a55';g.beginPath();g.ellipse(p,q,z.r*TW*ER(),z.r*TH*ER(),0,0,7);g.fill()}en.sort((a,b)=>a.d-b.d);for(const o of en){if(o.ob)drOb(o.ob);else if(o.b){if(occl(o.b))g.globalAlpha=.4;drB(o.b);g.globalAlpha=1}else drT(o.t)}drProgs();try{drWallSel()}catch(e){console.error(e)}drFx();drBubbles();drPlaceTop();if(mode=='a')for(const s of A.shots){const a=P(s.a[0],s.a[1],s.z||12),b=P(s.b[0],s.b[1],6);if(s.sp){g.fillStyle='#ffc86a77';g.beginPath();g.ellipse(b[0],b[1]+6,s.sp*TW*ER(),s.sp*TH*ER(),0,0,7);g.fill()}if(s.k)drShot(s,a,b);else{g.strokeStyle=s.c;g.lineWidth=4;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}}}
const SP={zap:{n:'Rayo',e:'⚡',cost:75,r:2.2,dmg:170},heal:{n:'Curación',e:'💚',cost:75,r:3,t:6,hl:70},rage:{n:'Furia',e:'😡',cost:100,r:3,t:8}};const spn=()=>S.sp.zap+S.sp.heal+S.sp.rage;const spCap=()=>5+(S.spx|0)+S.b.filter(b=>b.t=='cauldron'&&!b.ruin&&!b.nb&&(b.rg==null||b.rg>=1)).reduce((a,b)=>a+b.lv,0);TP.king={...PL,h:'#ffd24a',t:'#7a2f9a'};function castSp(k,x,y){const s=SP[k];if(k=='zap'){for(const b of E.b){const c=ctr(b);if(b.hp>0&&Math.hypot(c[0]-x,c[1]-y)<s.r)b.hp-=s.dmg}A.shots.push({a:[x,y],b:[x,y],c:'#fff',l:.35,sp:s.r})}else A.zones.push({x,y,r:s.r,k,t:s.t})}
const lc=()=>2+Math.min(5,(S.b.find(b=>b.t=='hall')||{lv:1}).lv);TY.hall.cur='g';let AC=null;try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}let CU=0,MUTE=false;try{MUTE=localStorage.getItem('ccm')=='1'}catch(e){}
const _ls={};
function tone(f,d,ty='sine',v=.1,t0=0,f2){const o=AC.createOscillator(),a=AC.createGain(),t=AC.currentTime+t0;o.type=ty;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);a.gain.setValueAtTime(.0001,t);a.gain.exponentialRampToValueAtTime(v,t+.012);a.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(a);a.connect(OUT());o.start(t);o.stop(t+d+.03)}
function noise(d,v=.2,fq=800,t0=0,ty='lowpass'){const n=AC.sampleRate*d|0,bf=AC.createBuffer(1,n,AC.sampleRate),c=bf.getChannelData(0);for(let i=0;i<n;i++)c[i]=Math.random()*2-1;const s=AC.createBufferSource(),f=AC.createBiquadFilter(),a=AC.createGain(),t=AC.currentTime+t0;s.buffer=bf;f.type=ty;f.frequency.setValueAtTime(fq,t);f.frequency.exponentialRampToValueAtTime(Math.max(80,fq/6),t+d);a.gain.setValueAtTime(v,t);a.gain.exponentialRampToValueAtTime(.0001,t+d);s.connect(f);f.connect(a);a.connect(OUT());s.start(t)}
const SFX={880:()=>{tone(1175,.14,'sine',.1);tone(1568,.2,'sine',.08,.07)},300:()=>{tone(200,.12,'triangle',.16,0,420);noise(.05,.05,4000,0,'highpass')},140:()=>{tone(95,.2,'sine',.28,0,38);noise(.14,.1,900)},70:()=>{noise(.55,.35,1600);tone(70,.45,'sine',.32,0,24)},520:()=>{noise(.06,.16,2600);tone(120,.1,'square',.1,0,70);tone(784,.16,'triangle',.07,.09);tone(1047,.2,'triangle',.06,.16)},500:()=>{noise(.05,.12,2400);tone(190,.07,'triangle',.09)},660:()=>{tone(660,.12,'triangle',.1);tone(880,.18,'triangle',.1,.09)},990:()=>{[523,659,784,1047].forEach((f,i)=>tone(f,.28,'triangle',.11,i*.11))},200:()=>{tone(300,.5,'sawtooth',.08,0,110)},410:()=>{noise(.07,.1,1900);tone(150,.07,'square',.05)}};
const snd=f=>{if(CU||MUTE||!AC)return;const n=performance.now();if(n-(_ls[f]||0)<(f=='slash'||f=='stab'?28:70))return;_ls[f]=n;const _mr=Math.random;if(typeof RAWR=='function')Math.random=RAWR;try{AC.resume();(SFX[f]||(()=>tone(f,.1,'triangle',.1)))()}catch(e){}finally{Math.random=_mr}};
let DB=null,ME=null,USR=null,ONL=0,lastW='',lastT=0;const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');const closeMsg=()=>document.getElementById('msg').classList.remove('on');const note=h=>{flash(h+'<br><br><button id=ok>Cerrar</button>');document.getElementById('ok').onclick=closeMsg};function syncBase(){if(!DB||mode!='v')return;const n=Date.now();if(n-lastT<15000)return;const h=S.b.find(b=>b.t=='hall'),p={tr:S.tr,hl:h?h.lv:1,g:Math.floor(S.g),e:Math.floor(S.e),b:S.b.map(b=>[b.t,b.x,b.y,b.lv])},j=JSON.stringify(p);if(j===lastW)return;lastT=n;lastW=j;DB.doc('bases/'+ME).set({...p,ts:n}).catch(()=>{lastW=''})}
(async()=>{try{const C=window.claude;if(!C)return;const db=await C.use('db'),u=await C.use('user');if(!db||!u)return;const id=await u.id();if(!id)return;DB=db;ME=id;USR=u;ONL=1;DB.collection('raids').where('def','==',ME).onSnapshot(async sn=>{const rs=sn.docs.filter(d=>(d.data().ts||0)>(S.rt||0)).sort((a,b)=>a.data().ts-b.data().ts);if(!rs.length)return;let tg=0,te=0,who=[];for(const d of rs){const r=d.data(),lg=Math.min(r.lg|0,Math.round(S.g*.35)),le=Math.min(r.le|0,Math.round(S.e*.35));S.g-=lg;S.e-=le;tg+=lg;te+=le;S.tr=Math.max(0,S.tr+(r.st?-(5+4*Math.min(3,r.st|0)):8));S.rt=Math.max(S.rt||0,r.ts);who.push(r.att);DB.collection('raids').doc(d.id).delete().catch(()=>{})}save();let ps={};try{ps=await USR.profiles(who)}catch(e){}if(mode=='v')note('<b>¡Te atacaron!</b><br>'+who.map(w=>esc((ps[w]&&ps[w].name)||'Un jugador')).join(', ')+'<br>Estructuras dañadas: '+(typeof nr=='number'?nr:0)+'<br>Perdiste '+tg+' 🪙 y '+te+' 💧')},()=>{})}catch(e){}})();
function sendRaid(id,lg,le,st,p){if(!DB)return;DB.collection('raids').add({def:id,att:ME,lg,le,st,p:Math.round(p*100),ts:Date.now()}).catch(()=>{})}
async function findReal(){if(!DB)return;flash('Buscando rival…');try{const q=await DB.collection('bases').orderBy('tr','desc').limit(60).get(),c=q.docs.filter(d=>d.id!==ME&&(d.data().b||[]).length>3).sort((a,b)=>Math.abs(a.data().tr-S.tr)-Math.abs(b.data().tr-S.tr)).slice(0,6);if(!c.length)return note('Todavía no hay otros jugadores.<br>Invita a alguien y vuelve a intentarlo.');const d=c[Math.random()*c.length|0];closeMsg();startReal(d.id,d.data())}catch(e){note('Error de conexión')}}
async function ranking(){if(!DB)return;try{const q=await DB.collection('bases').orderBy('tr','desc').limit(10).get();let ps={};try{ps=await USR.profiles(q.docs.map(d=>d.id))}catch(e){}note('<b>Ranking</b><br>'+q.docs.map((d,i)=>(i+1)+'. '+esc((ps[d.id]&&ps[d.id].name)||'Jugador')+(d.id===ME?' (tú)':'')+' · '+d.data().tr+' '+ICO('ranking','🏆')).join('<br>'))}catch(e){note('Error de conexión')}}
function startReal0(id,d){const cn=cen81(d.b||[]),b0=(d.b||[]).filter(a=>TY[a[0]]).map(a=>mk(a[0],a[1]+cn[0],a[2]+cn[1],a[3]||1)),b=b0.filter(o=>!TY[o.t].trap),trp=b0.filter(o=>TY[o.t].trap);b.sort((p,q)=>(q.t=='hall')-(p.t=='hall'));if(!b.length||b[0].t!='hall')b.unshift(mk('hall',7,7,1));const wm={};b.forEach(w=>{if(w.t=='wall')wm[w.x+','+w.y]=w});const tr=trp.map(o=>({x:o.x+.5,y:o.y+.5,k:o.t,lv:o.lv||1}));E={N:50,b,wm,traps:tr,real:id,tot:b.filter(w=>w.t!='wall').length,lg:d.g||0,le:d.e||0};A={on:true,time:180,army:{...S.army},sp:{...S.sp},zones:[],qty:{},ord:{},tr:[],shots:[],fx:[],pend:[],sh:0};for(const k in S.army)S.army[k]=0;for(const k in S.sp)S.sp[k]=0;pick=Object.keys(TR).find(k=>A.army[k]);mode='a';sel=null;tab=null;ui()}
const SUPABASE_URL='https://agezfxgwxnomkffemgqm.supabase.co',SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZXpmeGd3eG5vbWtmZmVtZ3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyOTg5MjEsImV4cCI6MjEwNzg3NDkyMX0.X9AmQAapuJ91LkJJ0AwgciYThgxpz9WfuL7oJQb3WJg';
let sb=null,gr=0;

async function getRaids(){if(!sb||gr)return;gr=1;try{
 const r=await sb.from('raids').select('*').eq('defender',ME).eq('seen',false).order('created_at');
 if(r.error||!r.data.length)return;let tg=0,te=0,nr=0,dtr=0,dsh=0;
 for(const x of r.data){const dd=x.detail;if(dd){S.g-=Math.min(dd.sg||0,S.g|0);S.e-=Math.min(dd.se||0,S.e|0);for(const m of dd.mines||[]){const bm=S.b.find(b=>b.x==m[0]&&b.y==m[1]&&TY[b.t].prod);if(bm)bm.st=Math.max(0,(bm.st||0)-m[2])}dtr+=dd.dt||0;if(dd.sm)dsh=Math.max(dsh,dd.sm)}else{S.g-=Math.min(x.gold,S.g|0);S.e-=Math.min(x.elixir,S.e|0)}tg+=x.gold;te+=x.elixir;for(const q of x.broken||[]){const isR=RES.has(q[0]);if(isR||Math.random()<(q[0]=='wall'?.6:.35)){const b=S.b.find(b=>b.t==q[0]&&b.x==q[1]&&b.y==q[2]);if(b&&b.t!='hall'&&!b.ruin){if(isR)setCrit(b,x.created_at);else b.ruin=1;nr++}}}}
 await sb.from('raids').update({seen:true}).in('id',r.data.map(x=>x.id));
 const me=await sb.from('players').select('trophies,shield_until').eq('id',ME).single();if(me.data){S.tr=me.data.trophies;const su=me.data.shield_until?Date.parse(me.data.shield_until):0;S.shield=su>TNOW()?su:0}
 save();let who='';try{const qq=await sb.rpc('raid_names',{p_ids:[...new Set(r.data.map(x=>x.attacker))]});who='Atacó: '+qq.data.map(p=>esc(p.name)).join(', ')}catch(e){}btlPoll();
}finally{gr=0}}
function syncBase(f){if(!sb||!ME||BAN||mode!='v'||!_ent)return;const n=Date.now();if(!f&&n-lastT<4000)return;
 const p={p_name:S.name,p_save:S},j=JSON.stringify(p);
 if(j===lastW)return;lastT=n;lastW=j;
 /* v58: el servidor valida la partida (save_state). Si detecta oro/elixir imposible, devuelve la última partida válida */
 sb.rpc('save_state',p).then(r=>{if(r.error){lastW='';return}const d=r.data;if(d&&d.ok===false){lastW='';svRollback(d)}})}
function svRollback(d){try{
 if(d&&d.save&&d.save.b){S=d.save;S.army={...fresh().army,...S.army};S.sp=S.sp||fresh().sp;S.b.forEach(b=>{if(b.hp<=0)b.hp=b.max});S.name=S.name||ME;mode='v';pk=null;tab=null;sel=null;try{ensureS()}catch(e){}
  note('<b>Partida restaurada</b><br>El servidor detectó un cambio no válido en tus recursos y volvió a la última versión válida.')}
 else location.reload()}catch(e){location.reload()}}
async function findReal(){if(!sb)return;flash('Buscando rival…');try{
 const r=await sb.rpc('find_opponent');
 if(r.error||!r.data||!r.data.id)return note('Todavía no hay rivales disponibles (o tienen escudo).');
 closeMsg();startReal(r.data.id,{b:r.data.base,g:r.data.gold,e:r.data.elixir})}catch(e){note('Error de conexión')}}
async function sendRaid(id,dep,sur){if(!sb)return;try{
 const dmg=[];for(const b of E.b){if(b.t=='wall')continue;const fr=b.hp<=0?100:Math.round(100*(1-b.hp/b.max));if(fr>0)dmg.push([b.t,b.x,b.y,Math.min(100,fr)])}
 const broken=E.b.filter(b=>b.hp<=0).sort((a,c)=>(a.t=='wall')-(c.t=='wall')).map(b=>[b.t,b.x,b.y]).slice(0,600),cp=A.cap0||campCap();
 const tro={};for(const t of A.tr)tro[t.k]=(tro[t.k]||0)+1;let rep=null;try{if(REC&&REC.id==id){rep={v:BUILD,b:REC.b,army:REC.army,sp:REC.sp,th:REC.th,seed:REC.seed,ev:REC.ev,end:A.tk|0};if(JSON.stringify(rep).length>400000)rep=null}}catch(e){rep=null}
 const base={p_defender:id,p_dmg:dmg.slice(0,700),p_dep:dep,p_cap:cp,p_broken:broken,p_sur:!!sur};
 let r=await sb.rpc('submit_raid',{...base,p_troops:tro,p_replay:rep,p_revenge:A.rev||null});
 if(r.error&&/Could not find the function|schema cache/i.test(r.error.message||'')&&!A.rev)r=await sb.rpc('submit_raid',base);
 if(r.error){console.error(r.error);return{err:r.error.message}}
 const d=r.data;S.g=Math.min(cap.g(),S.g+d.gold);S.e=Math.min(cap.e(),S.e+d.elixir);S.tr=d.trophies;S.shield=0;save();return d}catch(e){console.error(e);return{err:'sin conexión'}}}
async function ranking(){if(!sb)return;try{
 const r=await sb.from('players').select('id,name,trophies').order('trophies',{ascending:false}).limit(10);
 if(r.error)throw r.error;
 note('<b>Ranking</b><br>'+r.data.map((d,i)=>(i+1)+'. '+esc(d.name||'Jugador')+(d.id===ME?' (tú)':'')+' · '+d.trophies+' '+ICO('ranking','🏆')).join('<br>'))}catch(e){note('Error de conexión')}}

/* ================= v66: ajustes de gráficos (Bajo / Medio / Alto) =================
   Alto = como siempre. Medio = resolución 1,5x, terreno en caché, 30 FPS cuando la aldea está quieta.
   Bajo = resolución 1x, terreno en caché, 20 FPS en aldea quieta y 30 FPS máx., menos efectos. */
const GFXD={high:{ks:2.5,cap:0,idle:0,raid:0,tc:0,fxm:0,dtm:.05,wb:0,bk:0,sc:0},mid:{ks:1.5,cap:0,idle:30,raid:0,tc:1,fxm:60,dtm:.08,wb:1,bk:900,sc:1},low:{ks:1,cap:30,idle:20,raid:30,tc:1,fxm:14,dtm:.1,wb:1,bk:0,sc:2}};
let GFX='high';try{const q=localStorage.getItem('ccgfx');if(q&&GFXD[q])GFX=q}catch(e){}
let GX=GFXD[GFX];
function setGfx(q){if(!GFXD[q])return;GFX=q;GX=GFXD[q];try{localStorage.setItem('ccgfx',q)}catch(e){}_tck=_tcp='';TCv=null;TCx=null;try{rs2()}catch(e){}}
let TCv=null,TCx=null,_tck='',_tcp='',_tcG=0;
let GFPS=0;try{GFPS=+localStorage.getItem('ccfps')||0}catch(e){}
function setFps(v){GFPS=+v||0;try{localStorage.setItem('ccfps',GFPS)}catch(e){}}
let KS=1;const cam={x:0,y:0,z:1},ptr=new Map();let gh=null,drag=null,pinch=0,moved=0;
const LW=()=>cv.width/KS,LH=()=>cv.height/KS;
const scr=e=>{const r=cv.getBoundingClientRect();return[(e.clientX-r.left)/r.width*LW(),(e.clientY-r.top)/r.height*LH()]};
const w2t=(sx,sy)=>{const px=(sx-cam.x)/cam.z-OX,py=(sy-cam.y)/cam.z-OY;if(VT)return[px/TW,py/TH];const u=px/(TW/2),v=py/(TH/2);return[(u+v)/2,(v-u)/2]};
const dist2=()=>{const a=[...ptr.values()];return Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1])||1};
function fit(){const W=LW(),H=LH();cam.z=Math.max(ZMIN81(),Math.max(.5,Math.min(1.5,Math.min((W-lwid())/(N*TW+80),H/(N*TH+210)))));cam.x=(W-lwid())/2-cx0()*cam.z;cam.y=(H-30)/2-(OY+N*TH/2-14)*cam.z}
function clampCam(){const W=LW(),H=LH(),mx=cx0()*cam.z+cam.x,my=(OY+N*TH/2)*cam.z+cam.y;cam.x+=Math.min(W*.85,Math.max(W*.15,mx))-mx;cam.y+=Math.min(H*.85,Math.max(H*.15,my))-my}
function zoomAt(sx,sy,f){const z=Math.max(ZMIN81(),Math.min(2.4,cam.z*f));cam.x=sx-(sx-cam.x)*z/cam.z;cam.y=sy-(sy-cam.y)*z/cam.z;cam.z=z;clampCam()}
function rs2(){const w=cv.parentElement,W=w.clientWidth,H=w.clientHeight;if(W<50||H<50)return;KS=Math.min(GX.ks,window.devicePixelRatio||1);cv.width=Math.round(W*KS);cv.height=Math.round(H*KS);const lL=document.body.classList.contains('land');if(!rs2.d||rs2.l!==lL){rs2.d=1;rs2.l=lL;fit()}clampCam()}
new ResizeObserver(rs2).observe(cv.parentElement);rs2();
function moveGh(x,y){if(!gh||!sel)return;const s=TY[sel].s;gh.x=Math.max(0,Math.min(N-s,Math.round(x-s/2)));gh.y=Math.max(0,Math.min(N-s,Math.round(y-s/2)));hov=[gh.x+s/2,gh.y+s/2]}
function mkGh(){gh=null;hov=null;if(sel){gh={x:0,y:0};const[x,y]=w2t(LW()/2,LH()/2);moveGh(x,y)}}
function buildGh(){if(!gh||!sel)return;if(mv){if(mvOk()){mvCommit();sel=null;gh=null;hov=null;snd(520,.1,'triangle',.05)}return}const d=TY[sel],c=cost(sel);if(free(S.b,gh.x,gh.y,d.s)&&S[d.cur]>=c&&cntOk(sel)&&(sel=='wall'||sel=='hut'||TY[sel].trap||builders()>0)){S[d.cur]-=c;const nb=mk(sel,gh.x,gh.y);if(sel!='wall'){nb.up=nb.ut=BT[sel]||20;nb.nb=1}S.b.push(nb);if(sel=='wall'){pk=nb;tab='info'}snd(520,.1,'triangle',.05);sel=null;gh=null;hov=null}}
function paint(x,y){const tx=Math.floor(x),ty=Math.floor(y);hov=[x,y];const c=cost('wall');if(free(S.b,tx,ty,1)&&S.g>=c&&cnt('wall')<mx('wall')){S.g-=c;S.b.push(mk('wall',tx,ty));snd(500,.04,'square',.03)}}
function pickB(l,sx,sy){const px=(sx-cam.x)/cam.z,py=(sy-cam.y)/cam.z;let best=null;for(const b of l){if(b.hp<=0)continue;const d=TY[b.t],s=d.s,h=d.h+(b.t=='hall'?26:b.t=='tower'?14:b.t=='camp'?16:0);
 if(px>=P(b.x,b.y+s)[0]&&px<=P(b.x+s,b.y)[0]&&py>=P(b.x,b.y,h)[1]&&py<=P(b.x+s,b.y+s)[1]&&(!best||b.x+b.y+s>best.x+best.y+TY[best.t].s))best=b}return best}
function deployAt(x,y){
 if(SPK(pick)){if(A.sp[pick]>0){A.sp[pick]--;castSp(pick,x,y);if(!A.sp[pick]&&(PSP82=false)===false)pick=Object.keys(TR).find(k=>A.army[k])||pick}}
 else if(A.army[pick]>0&&x>-2&&y>-2&&x<N+2&&y<N+2&&inZone(E.b,x,y)){zoneWarn()}
 else if(A.army[pick]>0&&x>-2&&y>-2&&x<N+2&&y<N+2&&!inZone(E.b,x,y)){spawn(x,y);return;snd(300,.07,'square');A.army[pick]--;A.tr.push({k:pick,x,y,hp:TR[pick].hp,max:TR[pick].hp,cd:0,tg:null});if(!A.army[pick])pick=Object.keys(TR).find(k=>A.army[k])||pick}}
function tap(sx,sy){const[x,y]=w2t(sx,sy);
 if(mode=='v'){if(sel){moveGh(x,y);return}
  {const px=(sx-cam.x)/cam.z,py=(sy-cam.y)/cam.z,ar=pk&&pk.t=='wall'?ARR.find(a=>Math.hypot(a.sx-px,a.sy-py)<22):null;if(ar){wBuild(ar);return}}
  const b=pickB(S.b,sx,sy);pk=b||null;tab=b?'info':null;if(b&&b.t=='rax'&&!b.ruin&&!b.nb)tab='army';if(b&&b.t=='scout'&&!b.ruin&&!b.nb)tab='scout';
  if(b&&TY[b.t].prod&&b.st>=LIMF(b)-1){b.st=0;snd(880,.12,'triangle',.05)}}
 else if(A&&A.on)deployAt(x,y)}
cv.onpointerleave=null;
cv.onpointerdown=e=>{
 if(document.getElementById('msg').classList.contains('on'))return;
 try{AC.resume()}catch(_){}
 try{cv.setPointerCapture(e.pointerId)}catch(_){}
 if(e.isPrimary){ptr.clear();pinch=0;drag=null;if(DM.on)dmRevert()}ptr.set(e.pointerId,scr(e));moved=0;
 if(ptr.size==2){pinch=dist2();drag=null;return}
 const[sx,sy]=scr(e),[x,y]=w2t(sx,sy);drag={sx,sy,cx:cam.x,cy:cam.y};if(dmCan()){const s0=TY[pk.t].s;if(x>pk.x-1.3&&x<pk.x+s0+1.3&&y>pk.y-1.3&&y<pk.y+s0+1.3)drag.dm={ox:x-pk.x,oy:y-pk.y,x0:pk.x,y0:pk.y}}
 if(false){}
 else if(mode=='v'&&sel&&gh&&x>gh.x-1&&x<gh.x+TY[sel].s+1&&y>gh.y-1&&y<gh.y+TY[sel].s+1)drag.gh=1;
};
cv.onpointermove=e=>{
 if(!ptr.has(e.pointerId))return;const p=scr(e);ptr.set(e.pointerId,p);
 if(ptr.size==2){const a=[...ptr.values()],d=dist2();if(pinch)zoomAt((a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2,d/pinch);pinch=d;moved=1;return}
 if(!drag)return;const dx=p[0]-drag.sx,dy=p[1]-drag.sy;if(Math.hypot(dx,dy)>10)moved=1;
 const[x,y]=w2t(p[0],p[1]);
 if(drag.paint)paint(x,y);else if(drag.gh)moveGh(x,y);else if(drag.dm){if(moved)dmMove(x,y)}else if(moved){cam.x=drag.cx+dx;cam.y=drag.cy+dy;clampCam()}};
cv.onpointerup=cv.onpointercancel=e=>{
 ptr.delete(e.pointerId);if(ptr.size<2)pinch=0;
 if(drag&&drag.dm){if(DM.on){if(e.type=='pointerup'&&moved)dmEnd();else dmRevert()}}
 else if(ptr.size==1){const pp=[...ptr.values()][0];drag={sx:pp[0],sy:pp[1],cx:cam.x,cy:cam.y};moved=1;pinch=0}
 if(drag&&!moved&&!drag.paint&&!drag.dm&&ptr.size==0&&e.type=='pointerup')tap(drag.sx,drag.sy);
 if(ptr.size==0)drag=null;ui();save()};
cv.addEventListener('wheel',e=>{e.preventDefault();const[sx,sy]=scr(e);zoomAt(sx,sy,e.deltaY<0?1.12:.89)},{passive:false});

let mv=null;
const OC={def:['cannon','tower','mortar','rocket','wizard'],res:['mine','pump','gst','est'],hall:['hall'],camp:['camp','rax','scout','hut'],wall:['wall']};
const sto=()=>{const l=E.b.filter(b=>b.t=='gst'||b.t=='est');return l.length>0&&l.every(b=>b.hp<=0)};
const wallVal=lv=>[0,50,1000,5000][Math.min(3,Math.max(1,lv))];
const rc=b=>b.t=='wall'?Math.round(wallVal(b.lv)*.5):Math.round((TY[b.t].cost||0)*.8);
function cancelMv(){if(mv){mv.hp=mv.hp0||mv.max;if(mvR){for(const r of mvR)r.w.hp=r.w.hp0||r.w.max;mvR=null}mv=null}}
const RT=b=>b.t=='wall'?.01:Math.max(6,Math.round((BT[b.t]||20)*.5));
const canFix=b=>b.ruin&&!(b.up>0)&&S[TY[b.t].cur||'g']>=rc(b)&&(b.t=='hut'||b.t=='wall'||builders()>0);
function fixAll(){let n=0;for(const b of S.b){if(!canFix(b))continue;const k=TY[b.t].cur||'g';S[k]-=rc(b);b.rpr=1;b.up=b.ut=RT(b);n++}return n}
function spawn(x,y){const n=Math.min(A.qty[pick]||1,A.army[pick]),ZZ=zoneSet(E.b);for(let i=0;i<n;i++){A.army[pick]--;let px=x+(i%3-1)*.45,py=y+(i/3|0)*.45;if(ZZ.has(ZK(Math.floor(px),Math.floor(py)))){px=x;py=y}A.tr.push({k:pick,x:px,y:py,hp:thp(pick),max:thp(pick),dm:tdm(pick),wl:tlv(pick),cd:0,tg:null,tc:A.ord[pick]||'auto',fly:TR[pick].fly})}snd(300,.07,'square');if(!A.army[pick])pick=Object.keys(TR).find(k=>A.army[k])||pick}
function atkCtl(){if(!A||SPK(pick))return'';const o=A.ord[pick]||'auto',q=Math.min(A.qty[pick]||1,A.army[pick]||1);
 return '<div class="row sc"><button data-q=-1>−</button><button disabled>×'+q+'</button><button data-q=1>+</button>'+[['auto','Auto'],['def','🛡 Defensas'],['res','💰 Recursos'],['hall','🏰 Ayunt.'],['camp','🔥 Campam.'],['wall','🧱 Muros']].map(a=>`<button data-o=${a[0]} class="${o==a[0]?'on':''}">${a[1]}</button>`).join('')+'</div>'}
function infoX(){if(!pk)return'';const c=rc(pk),k=TY[pk.t].cur;
 return '<div class=row>'+(pk.ruin?`<button class=okb data-rep=1 ${S[k]<c?'disabled':''}>🔧 Reparar<small>${c} ${k=='g'?'🪙':'💧'}</small></button>`:'')+'</div>'}

const hl=()=>(S.b.find(b=>b.t=='hall')||{lv:1}).lv;
const vN=()=>50;
const LIM={cannon:[2,2,2,2,3,3,5,5,5,6],tower:[0,1,1,2,3,3,4,5,6,7],mortar:[0,0,1,1,1,2,3,4,4,4],wall:[0,25,50,75,100,125,175,225,250,275],mine:[1,2,3,4,5,6,6,6,6,7],pump:[1,2,3,4,5,6,6,6,6,7],gst:[1,1,2,2,2,2,2,3,4,4],est:[1,1,2,2,2,2,2,3,4,4],rax:[1,2,2,3,3,3,4,4,4,4],camp:[1,1,2,2,3,3,4,4,4,4],scout:[0,1,1,1,1,1,1,1,1,1],lab:[0,0,1,1,1,1,1,1,1,1],bomb:[0,0,2,2,4,4,6,6,6,6],spring:[0,0,0,2,2,4,4,6,6,6],rocket:[0,0,0,1,1,2,3,3,4,4],wizard:[0,0,0,0,1,2,2,3,4,4],abomb:[0,0,0,0,2,2,2,4,4,5],cauldron:[0,0,0,0,1,1,1,1,1,1],kalt:[0,0,0,1,1,1,1,1,1,1]};
const mx=t=>t=='hut'?Math.min(6,1+hl()):LIM[t]?LIM[t][Math.min(10,hl())-1]:TY[t].max;
const REQ={1:[['cannon',1],['rax',1]],2:[['tower',1],['mine',2],['pump',2],['rax',2]],3:[['mortar',1],['mine',3],['pump',3],['gst',2],['est',2],['camp',2],['lab',1]],4:[['tower',2],['rocket',1],['mine',4],['pump',4],['rax',3]]};
const reqOk=b=>b.t=='bomb'?(!!BMB.th[b.lv+1]&&hl()>=BMB.th[b.lv+1]):b.t=='lab'?(!!LAB[b.lv+1]&&hl()>=LAB[b.lv+1].th):b.t=='rocket'?(!!RKT[b.lv+1]&&hl()>=RKT[b.lv+1].th):b.t=='mortar'?(!!MOR[b.lv+1]&&hl()>=MOR[b.lv+1].th):b.t=='camp'?(!!CMP[b.lv+1]&&hl()>=CMP[b.lv+1].th):b.t=='tower'?(!!TWR[b.lv+1]&&hl()>=TWR[b.lv+1].th):b.t=='cannon'?(!!CAN[b.lv+1]&&hl()>=CAN[b.lv+1].th):isSt(b)?(!!STO[b.lv+1]&&hl()>=STO[b.lv+1].th):isMn(b)?(!!MT(b)[b.lv+1]&&hl()>=MT(b)[b.lv+1].th):b.t=='wall'?hl()>=(b.lv<2?2:3):b.t=='rax'?hl()>=RXH[b.lv]:b.t!='hall'||(REQ[b.lv]||[]).every(([t,n])=>cnt(t)>=n);
const DESC={hall:'Corazón de tu aldea. Si cae, el rival gana una estrella. Mejorarlo amplía el terreno y da +1 espacio de minas, extractores, almacenes y campamentos.',mine:'Mina de oro: produce oro sola hasta llenarse. Cuando aparece la burbuja, tócala para reiniciar el límite.',pump:'Extractor de elixir: produce elixir solo hasta llenarse. Tócalo con la burbuja para reiniciar.',gst:'Almacén de oro: aumenta el oro máximo que puedes guardar. Si lo derriban en un ataque no se destruye: queda en estado crítico y se recupera solo cuando te conectas.',est:'Almacén de elixir: aumenta el elixir máximo que puedes guardar.',rax:'Cuartel: tócalo para entrenar tropas, héroe y hechizos.',camp:'Campamento: una fogata donde descansan tus tropas. Más campamentos y niveles dan más espacio de ejército. Ocupa 4×4 casillas.',cannon:'Cañón: defensa terrestre de daño constante.',tower:'Torre arquera: defensa de largo alcance y disparo rápido.',mortar:'Mortero: daño en área lento. No puede disparar a tropas muy cercanas.',wall:'Muro de 2×2 casillas (madera, piedra o metal). Bloquea el paso y se rompe casilla por casilla.',scout:'Puesto de exploración: entrena exploradores. Un explorador te muestra la aldea de un jugador antes de atacarlo; sin él no puedes atacar jugadores.'};
let dq=0;
function demolish(){if(!pk||pk.t=='hall')return;if(dq!==pk){dq=pk;return}const d=TY[pk.t];S[d.cur]=Math.min(cap[d.cur](),S[d.cur]+Math.round(d.cost*.2));S.b=S.b.filter(b=>b!==pk);pk=null;dq=0;tab=null}
const wallsUp=()=>S.b.filter(b=>b.t=='wall'&&!b.ruin&&b.lv<3);
function upAllWalls(){for(const b of wallsUp().sort((a,c)=>a.lv-c.lv)){const c=upc(b);if(S.g<c)break;S.g-=c;b.lv++;b.max=mhp(b);b.hp=b.max}}
function infoX(){if(!pk)return'';const d=TY[pk.t],c=rc(pk),k=d.cur||'g',r=[];let h=`<div class=hint>${DESC[pk.t]||''}</div>`;if(d.prod)h+='<div class=hint>Límite de minería: '+Math.round(LIMF(pk))+(pk.lv<lcap(pk)?' → '+Math.round(LIMF({t:pk.t,lv:pk.lv+1}))+' al mejorar':'')+'</div>';
 if(pk.t=='hall'&&pk.lv<5)h+='<div class=hint>Requisitos nivel '+(pk.lv+1)+': '+(REQ[pk.lv]||[]).map(([t,n])=>`<span style="color:${cnt(t)>=n?'#8fe36f':'#ff7a66'}">${TY[t].n} ${cnt(t)}/${n}</span>`).join(' · ')+'</div>';
 if(pk.t=='rax'&&!pk.ruin&&!pk.nb)r.push('<button data-ta=1>🪖 Entrenar</button>');if(pk.ruin)r.push(`<button class=okb data-rep=1 ${S[k]<c?'disabled':''}>🔧 Reparar<small>${c}</small></button>`);
 else{
  if(pk.t=='wall'){const w=wallsUp();if(w.length)r.push(`<button data-ua=1>⬆ Todos los muros<small>${w.reduce((a,b)=>a+upc(b),0)} 🪙</small></button>`)}
  if(pk.t!='hall')r.push(`<button data-del=1>${dq===pk?'¿Seguro?':'🗑 Demoler'}<small>+${Math.round(d.cost*.2)}</small></button>`)}
 return h+'<div class="row sc">'+r.join('')+'</div>'}
const authEl=document.getElementById('auth');
async function boot(){try{if(OFFLINE){ONL=0;authEl.style.display='none';S.name=S.name||'Jugador';return}
 if(!window.supabase||SUPABASE_URL.startsWith('PEGA'))return;
 sb=window.supabase.createClient(SUPABASE_URL.replace(/\/(rest|auth)\/v1\/?$/,''),SUPABASE_ANON_KEY);try{sbHook()}catch(e){}
 const ss=(await sb.auth.getSession()).data.session;LDS.sess=1;
 if(ss&&!ss.user.is_anonymous)await enter(ss.user);else authEl.style.display='flex'}catch(e){console.error(e);ONL=0}}
async function enter(u){try{
 authEl.style.display='none';ME=u.id;const nm=(u.email||'').split('@')[0];
 const me=await sb.from('players').select('trophies,save,shield_until,name').eq('id',ME).maybeSingle();
 if(me.data&&me.data.save){S=me.data.save;S.army={...fresh().army,...S.army};S.sp=S.sp||fresh().sp;S.b.forEach(b=>{if(b.hp<=0)b.hp=b.max})}else S=fresh();
 S.name=(me.data&&me.data.name)||nm;S.sc=S.sc||0;mode='v';pk=null;tab=null;sel=null;
 if(!me.data){let ir;try{ir=await sb.rpc('init_player',{p_name:(window.PENDNAME||(window.NM89?NM89(nm):nm)),p_code:PENDCODE})}catch(e){ir={error:{message:'Error de conexión'}}}
  if(ir&&ir.error){const m=ir.error.message||'Error';authEl.style.display='flex';document.getElementById('am').textContent=/MANTENIMIENTO|BETA_TERMINADA/.test(m)?'':(/inv[aá]lid|v[aá]lid|usado/i.test(m)?m+'. Si ya creaste el usuario, escribe tu código y pulsa Entrar.':(!PENDCODE?'Escribe tu código de invitación para activar la cuenta.':m));try{await sb.auth.signOut()}catch(e){}ME=null;return}
  PENDCODE=null;window.PENDNAME=null;try{const q=await sb.from('players').select('name').eq('id',ME).maybeSingle();if(q.data&&q.data.name)S.name=q.data.name}catch(e){}}else{S.tr=me.data.trophies;const su=me.data.shield_until?Date.parse(me.data.shield_until):0;S.shield=su>TNOW()?su:0}
 ONL=1;try{gstLoad()}catch(e){}LDS.player=1;await srvSync();LDS.sync=1;try{ensureS();S.ts=Date.now()}catch(e){console.error(e)}_ent=1;await tsync(1);LDS.tsync=1;{const mm=await sb.from('moderation').select('*').eq('id',ME).maybeSingle();onMod(mm.data);sb.channel('mod-'+ME).on('postgres_changes',{event:'*',schema:'public',table:'moderation',filter:'id=eq.'+ME},p=>onMod(p.new)).subscribe()}await getRaids();LDS.raids=1;
 sb.channel('raids-'+ME).on('postgres_changes',{event:'INSERT',schema:'public',table:'raids',filter:'defender=eq.'+ME},getRaids).subscribe();
}catch(e){console.error(e);ONL=0}}
async function doAuth(reg){const am=document.getElementById('am'),u=document.getElementById('au').value.trim().toLowerCase(),p=document.getElementById('ap').value;
 if(!sb){am.textContent='Sin conexión con el servidor';return}
 if(!/^[a-z0-9_]{3,16}$/.test(u)){am.textContent='Usuario: 3-16 letras minúsculas, números o _';return}
 if(p.length<6){am.textContent='La contraseña necesita 6 caracteres o más';return}
 const code='';PENDCODE=null;
 am.textContent='…';const email=u+'@clanclash.game';let r=reg?await sb.auth.signUp({email,password:p}):await sb.auth.signInWithPassword({email,password:p});if(reg&&r.error&&/already/i.test(r.error.message||'')){const r2=await sb.auth.signInWithPassword({email,password:p});if(!r2.error)r=r2}
 if(r.error){const m=r.error.message;am.textContent=/already/i.test(m)?'Ese usuario ya existe':/invalid login/i.test(m)?'Usuario o contraseña incorrectos':m;return}
 if(!r.data.session){am.textContent='Desactiva «Confirm email» en Supabase (Authentication → Providers → Email)';return}
 enter(r.data.user)}
async function logout(){_ent=0;gateEl.style.display='none';BAN=0;try{await sb.auth.signOut()}catch(e){}ONL=0;ME=null;S=fresh();try{localStorage.removeItem(K)}catch(e){}authEl.style.display='flex'}
document.getElementById('al').onclick=()=>doAuth(0);document.getElementById('ar').onclick=()=>doAuth(1);
window.BOOTP=boot();

let BAN=0,lu=0,OPL=[],OPS=null,OPD=null,AP=[],AS=null,OPW=0;
const oppEl=document.getElementById('opp'),admEl=document.getElementById('adm'),gateEl=document.getElementById('gate');
const lcap=b=>b.t=='lab'?8:b.t=='rocket'?8:b.t=='mortar'?8:b.t=='camp'?CMP.length-1:b.t=='tower'||b.t=='cannon'?13:isSt(b)?STO.length-1:isMn(b)?MT(b).length-1:b.t=='bomb'?7:b.t=='hut'||b.t=='kalt'||b.t=='cclan'||TY[b.t].trap?1:b.t=='rax'?12:b.t=='lab'?10:b.t=='hall'?10:b.t=='wall'?3:lc();
const isAdm=()=>!!ONL&&S.name==='spidxr';
const grp=b=>b.g?S.b.filter(x=>x.g===b.g):[b];
const inPoly=(p,x,y)=>{let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++)if((p[i][1]>y)!=(p[j][1]>y)&&x<(p[j][0]-p[i][0])*(y-p[i][1])/(p[j][1]-p[i][1])+p[i][0])c=!c;return c};
function pickB(l,sx,sy){const px=(sx-cam.x)/cam.z,py=(sy-cam.y)/cam.z;let best=null;
 for(const b of l){if(b.hp<=0)continue;const d=TY[b.t],s=d.s,h=b.ruin?Math.max(4,d.h/3|0):d.h,x=b.x,y=b.y,e={hall:26,tower:30,camp:16,rax:0,scout:18}[b.t]||0;
  let hit=inPoly([P(x,y,h),P(x+s,y,h),P(x+s,y,0),P(x+s,y+s,0),P(x,y+s,0),P(x,y+s,h)],px,py);
  if(!hit&&e&&!b.ruin){const A=P(x+s/2,y+s/2,h+e);hit=inPoly([P(x-.15,y+s+.15,h),P(x+s+.15,y+s+.15,h),A],px,py)||inPoly([P(x+s+.15,y+s+.15,h),P(x+s+.15,y-.15,h),A],px,py)}
  if(hit&&(!best||x+y+s>best.x+best.y+TY[best.t].s))best=b}return best}
function demolish(){if(!pk||pk.t=='hall')return;if(dq!==pk){dq=pk;return}if(pk.q)for(const j of pk.q)S.e=Math.min(cap.e(),S.e+j.n*TR[j.k].cost);const d=TY[pk.t],g=grp(pk);S[d.cur]=Math.min(cap[d.cur](),S[d.cur]+Math.round(d.cost*.2*g.length));S.b=S.b.filter(b=>!g.includes(b));pk=null;dq=0;tab=null}
function upBlock(){for(const b of grp(pk).filter(b=>b.lv<3)){const c=upc(b);if(S.g<c)break;S.g-=c;b.lv++;b.max=mhp(b);b.hp=b.max}}
function infoX(){if(!pk)return'';const d=TY[pk.t],c=rc(pk),k=d.cur||'g',r=[];let h=`<div class=hint>${DESC[pk.t]||''}</div>`;if(d.prod)h+='<div class=hint>Límite de minería: '+Math.round(LIMF(pk))+(pk.lv<lcap(pk)?' → '+Math.round(LIMF({t:pk.t,lv:pk.lv+1}))+' al mejorar':'')+'</div>';
 if(pk.t=='hall'&&pk.lv<5)h+='<div class=hint>Requisitos nivel '+(pk.lv+1)+': '+(REQ[pk.lv]||[]).map(([t,n])=>`<span style="color:${cnt(t)>=n?'#8fe36f':'#ff7a66'}">${TY[t].n} ${cnt(t)}/${n}</span>`).join(' · ')+'</div>';
 if(pk.t=='rax'&&!pk.ruin&&!pk.nb)r.push('<button data-ta=1>🪖 Entrenar</button>');if(pk.ruin)r.push(`<button class=okb data-rep=1 ${S[k]<c?'disabled':''}>🔧 Reparar<small>${c}</small></button>`);
 else{
  if(pk.t=='wall'){const nm=['','madera','piedra','metal'][Math.min(3,pk.lv)],a=grp(pk).filter(b=>b.lv<3),w=wallsUp();
   h+=`<div class=hint>Muro de ${nm} (nivel ${Math.min(3,pk.lv)}/3)</div>`;
   if(a.length)r.push(`<button data-ub=1>⬆ Bloque 2×2<small>${a.reduce((s,b)=>s+upc(b),0)} 🪙</small></button>`);
   if(w.length)r.push(`<button data-ua=1>⬆ Todos los muros<small>${w.reduce((s,b)=>s+upc(b),0)} 🪙</small></button>`)}
  if(pk.t!='hall')r.push(`<button data-del=1>${dq===pk?'¿Seguro?':'🗑 Demoler'}<small>+${Math.round(d.cost*.2*grp(pk).length)}</small></button>`)}
 return h+'<div class="row sc">'+r.join('')+'</div>'}
function scoutX(){return `<div class=hint>${DESC.scout}</div><div class=row><button data-sc=1 ${S.e<60||(S.sc||0)>=8?'disabled':''}>🔭 Entrenar explorador<small>60 💧 · tienes ${S.sc||0}/8</small></button></div>`}
function scoutRep(d){const c={};let hl=1;for(const a of d.base||[]){c[a[0]]=(c[a[0]]||0)+1;if(a[0]=='hall')hl=a[3]||1}
 const df=(c.cannon||0)+(c.tower||0)+(c.mortar||0),w=(c.wall||0)>>2,rec=Math.max(6,Math.round(6+df*5+w*1.5+(hl-1)*3));
 return `Ayuntamiento nv ${hl}<br>Defensas: ${c.cannon||0} cañones · ${c.tower||0} torres · ${c.mortar||0} morteros<br>Muros: ${w} bloques · Almacenes: ${(c.gst||0)+(c.est||0)}<br>Botín: ${d.gold||0} 🪙 ${d.elixir||0} 💧<br><b>Tropas recomendadas: ~${rec} de espacio</b>`}
async function findReal(){if(!sb)return;oppEl.style.display='flex';oppEl.innerHTML='<div class=hint>Buscando rivales…</div>';OPS=null;OPD=null;
 const r=await sb.rpc('find_opponents');OPL=r.data||[];oppDraw()}
function oppDraw(){const p=OPL.find(x=>x.id==OPS),ok=OPD&&p&&OPD.id==p.id;
 oppEl.innerHTML=`<div class=row><b>⚔ Elige rival</b><button data-oa=close>✕ Cerrar</button><button data-oa=refresh>🔄 Otros</button></div><div class=al>`+(OPL.length?OPL.map(x=>`<button data-op=${x.id} class="${x.id==OPS?'on':''}">${esc(x.name)} · ${x.trophies} ${ICO('ranking','🏆')}</button>`).join(''):'<div class=hint>No hay rivales disponibles ahora.</div>')+`</div>`+(p?`<div class=ad><b>${esc(p.name)}</b> · ${p.trophies} ${ICO('ranking','🏆')}<br>`+(ok?OPD.rep:'<span class=hint>Sin explorar: envía un explorador para ver su aldea y poder atacar.</span>')+`<div class=row><button data-oa=scout ${(S.sc||0)>0&&!ok?'':'disabled'}>🔭 Explorar (${S.sc||0})</button><button class=atk data-oa=go ${ok&&(used(S.army)||S.army.king)?'':'disabled'}>${(S.shield||0)>TNOW()?(OPW?'⚠ Sí, romper mi escudo':'⚔ Atacar (rompe tu escudo)'):'⚔ Atacar'}</button></div></div>`:'')}
oppEl.onclick=async e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;
 if(d.op){OPS=d.op;oppDraw();return}
 if(d.oa=='close'){oppEl.style.display='none';return}
 if(d.oa=='refresh'){findReal();return}
 if(d.oa=='scout'){const r=await sb.rpc('get_opponent',{p_id:OPS});if(!r.data){OPL=OPL.filter(x=>x.id!=OPS);OPS=null;oppDraw();return}S.sc--;OPD={...r.data,rep:scoutRep(r.data)};save();oppDraw();return}
 if(d.oa=='go'&&OPD){if((S.shield||0)>TNOW()&&!OPW){OPW=1;oppDraw();setTimeout(()=>{OPW=0;try{oppDraw()}catch(e){}},4000);return}OPW=0;oppEl.style.display='none';startReal(OPD.id,{b:OPD.base,g:OPD.gold,e:OPD.elixir,loot:OPD.loot,offer:OPD.offer})}};
function showGate(h){gateEl.innerHTML='<div class=hint style="font-size:13px">'+h+'</div><button data-lo=1>Cerrar sesión</button>';gateEl.style.display='flex'}
gateEl.onclick=e=>{if(e.target.closest('[data-lo]'))logout()};
function onMod(m){if(!m)return;
 if(m.banned){BAN=1;showGate('⛔ Tu cuenta fue suspendida por el administrador.');return}
 BAN=0;gateEl.style.display='none';
 if(m.reset_at&&S.ra!==m.reset_at){const n=S.name;S=fresh();S.name=n;S.ra=m.reset_at;S.gt=m.gt||0;S.et=m.et||0;S.sc=0;pk=null;tab=null;sel=null;mode='v'}
 if((m.gt||0)!==(S.gt||0)||(m.et||0)!==(S.et||0)){S.g=Math.max(0,S.g+(m.gt||0)-(S.gt||0));S.e=Math.max(0,S.e+(m.et||0)-(S.et||0));S.gt=m.gt||0;S.et=m.et||0}
 if((m.warn_seq||0)>(S.ws||0)){S.ws=m.warn_seq;note('<b>⚠ Advertencia del administrador</b><br>'+esc(m.warn||''))}
 sb.from('players').select('trophies').eq('id',ME).single().then(r=>{if(r.data)S.tr=r.data.trophies})}
async function admLoad(){const r=await sb.rpc('admin_list');if(r.error){admEl.innerHTML='<div class=hint>'+esc(r.error.message)+'</div><button data-aa=close>✕ Cerrar</button>';return}AP=r.data||[];try{const g=await sb.rpc('admin_gems_list');if(!g.error&&g.data){const m={};for(const x of g.data)m[x.id]=x;for(const p of AP){const x=m[p.id];p.gm=x?x.gems:0;p.wn=x?x.wins:0}}}catch(e){}admDraw()}
function admDraw(m){const p=AP.find(x=>x.id==AS);
 admEl.innerHTML=`<div class=row><b>👑 Panel de administrador</b><button data-aa=close>✕ Cerrar</button><button data-aa=reload>🔄</button></div><div class=al>`+AP.map(x=>`<button data-ap=${x.id} class="${x.id==AS?'on':''}">${esc(x.name)} · ${x.tr}${ICO('ranking','🏆')} · ${x.g}🪙 ${x.e}💧 ${x.gm|0}💚${x.banned?' ⛔':''}${x.warns?' ⚠'+x.warns:''}</button>`).join('')+`</div>`+(p?`<div class=ad><b>${esc(p.name)}</b><input id=aw type=number placeholder="wins"><div class=row><button data-aa=wp>+ wins</button><button data-aa=wm>− wins</button></div><div class=hint>💚 Esmeraldas: ${p.gm|0} · victorias: ${p.wn|0}</div><input id=agm type=number placeholder="esmeraldas"><div class=row><button data-aa=gp>+ esmeraldas</button><button data-aa=gm>− esmeraldas</button><button data-aa=gs>= fijar</button></div><input id=ag type=number placeholder="oro"><input id=ae type=number placeholder="elixir"><div class=row><button data-aa=rp>+ recursos</button><button data-aa=rm>− recursos</button></div><div class=row><button data-aa=${p.banned?'unban':'ban'}>${p.banned?'Desbanear':'Banear'}</button><button data-aa=reset>Reiniciar jugador</button></div><input id=am2 maxlength=150 placeholder="Mensaje de advertencia"><button data-aa=warn>⚠ Dar advertencia</button></div>`:'<div class=hint>Selecciona un jugador</div>')+`<div class=ad><button data-aa=resetall>Reiniciar a TODOS</button></div><div class=hint>${esc(m||'')}</div>`}
admEl.onclick=async e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset,v=id=>parseInt(document.getElementById(id).value)||0;
 if(d.ap){AS=d.ap;admDraw();return}const a=d.aa;if(!a)return;
 if(a=='close'){admEl.style.display='none';return}if(a=='reload'){admLoad();return}
 let r;
 if(a=='gp'||a=='gm'||a=='gs'){if(!AS)return;const n=v('agm');r=await sb.rpc('admin_gems',{p_id:AS,p_n:a=='gm'?-n:n,p_set:a=='gs'})}
 else if(a=='resetall'){if(!confirm('¿Reiniciar a TODOS los jugadores?'))return;r=await sb.rpc('admin_reset_all')}
 else{if(!AS)return;if(a=='reset'&&!confirm('¿Reiniciar a este jugador?'))return;
  const m={wp:['wins',v('aw')],wm:['wins',-v('aw')],rp:['res',v('ag'),v('ae')],rm:['res',-v('ag'),-v('ae')],ban:['ban'],unban:['unban'],reset:['reset'],warn:['warn',0,0,document.getElementById('am2').value]}[a];
  r=await sb.rpc('admin_act',{p_id:AS,p_act:m[0],p_a:m[1]||0,p_b:m[2]||0,p_msg:m[3]||null})}
 if(r.error){admDraw(r.error.message);return}await admLoad()};
document.getElementById('top').onclick=e=>{if(e.target.closest('[data-menu]')){menuEl.style.display='flex';menuDraw()}if(e.target.closest('[data-adm]')){admEl.style.display='flex';admLoad()}};

const BT={mine:40,pump:40,gst:10,est:10,camp:300,rax:20,scout:30,cannon:10,tower:60,mortar:10800,lab:60,cauldron:60,kalt:600,rocket:10800,wizard:70,bomb:3,spring:3,abomb:4};
const TS={barb:5,arch:8,giant:30,gob:7,wb:12,king:60,loon:30,mage:24,heal:60};let TQ={};
const rxLv=()=>Math.max(1,...S.b.filter(b=>b.t=='rax'&&!b.ruin&&!b.nb).map(b=>b.lv));
const rxF=()=>Math.max(.35,1-.15*(rxLv()-1));
const tt=k=>Math.max(1,Math.round(TS[k]*rxF()*10)/10);
const ttb=(k,b)=>(freeTr()||evtOn('train'))?.01:Math.max(1,Math.round(TS[k]*(window.EVTM91||1)*Math.max(.35,1-.15*((b?b.lv:1)-1))*(typeof S=='object'&&S&&S.rs&&S.rs.k==k?2:1)*10)/10);
const qAll=()=>S.b.flatMap(b=>b.t=='rax'&&b.q?b.q:[]).concat(S.q||[]);
const qsp=()=>qAll().reduce((a,j)=>a+j.n*TR[j.k].sp,0);
function trainTick(dt){const q=S.q;if(!q||!q.length)return;const j=q[0];j.t=(j.t==null?tt(j.k):j.t)-dt;if(j.t<=0){S.army[j.k]=(S.army[j.k]||0)+1;j.n--;j.t=null;snd(660);if(j.n<=0)q.shift()}}
function enqueue(k){const d=TR[k],n=d.hero?1:(TQ[k]||1),c=n*d.cost;S.q=S.q||[];if(S.e<c||d.sp*n>campCap()-used(S.army)-qsp()||(d.hero&&(S.army[k]||S.q.some(j=>j.k==k))))return;S.e-=c;const l=S.q[S.q.length-1];if(l&&l.k==k&&l.t==null)l.n+=n;else S.q.push({k,n,t:null});snd(500)}
function armyX(){const lv=rxLv(),fr=campCap()-used(S.army)-qsp(),q=S.q||[];
 let h=`<div class=hint>Cuartel nv ${lv}: −${Math.round((1-rxF())*100)}% tiempo de entrenamiento · Espacio libre ${fr}/${campCap()}</div><div class=row><button data-ti=1>⬆ Mejorar cuartel</button></div>`;
 for(const k of Object.keys(TR)){const d=TR[k],n=d.hero?1:Math.min(TQ[k]||1,20),c=n*d.cost,ok=S.e>=c&&d.sp*n<=fr&&!(d.hero&&(S.army[k]||qAll().some(j=>j.k==k)));
  h+=`<div class=row><button disabled>${d.e} ${d.n} ×${S.army[k]||0}<small>${tt(k)}s c/u · ${d.cost} 💧</small></button>`+(d.hero?'':`<button data-tq=${k}:-1>−</button><button disabled>${n}</button><button data-tq=${k}:1>+</button>`)+`<button class=okb data-tr=${k} ${ok?'':'disabled'}>Entrenar<small>${c} 💧 · ${Math.round(tt(k)*n)}s</small></button></div>`}
 h+='<div class=row>'+Object.keys(SP).map(k=>`<button data-s=${k} ${spLocked()||S.e<SP[k].cost||spn()>=spCap()?'disabled':''}>${SP[k].e} ${SP[k].n} ×${S.sp[k]}<small>${SP[k].cost} 💧</small></button>`).join('')+'</div>';
 if(q.length)h+=`<div class=hint>En cola: ${q.map(j=>TR[j.k].e+'×'+j.n).join(' ')} · siguiente en ${Math.ceil(q[0].t==null?tt(q[0].k):q[0].t)}s</div>`;
 return h}
const menuEl=document.getElementById('menu');let FORCE=false;
const mqL=matchMedia('(orientation:landscape)');
function applyLand(){document.body.classList.toggle('land',FORCE||mqL.matches)}
mqL.addEventListener('change',applyLand);applyLand();
function menuDraw(){menuEl.innerHTML=`<div class=mbox><div class=row><b>Menú</b><button data-m2=close>✕</button></div><button data-m2=fs>⛶ Pantalla completa</button><button data-m2=snd>${MUTE?'🔇 Sonido: OFF':'🔊 Sonido: ON'}</button><button data-m2=view>${VT?'🏰 Vista isométrica':'🧭 Vista cenital'}</button><button data-m2=land>${FORCE?'🔓 Rotación automática':'🔒 Bloquear horizontal'}</button>${ONL?'<button data-m2=out>🚪 Cerrar sesión</button>':''}<div class=hint>Versión ${BUILD}</div></div>`}
menuEl.onclick=async e=>{const b=e.target.closest('button');if(!b)return;const a=b.dataset.m2;
 if(a=='close'){menuEl.style.display='none';return}if(a=='out'){menuEl.style.display='none';logout();return}
 if(a=='snd'){MUTE=!MUTE;try{localStorage.setItem('ccm',MUTE?'1':'0')}catch(_){}if(!MUTE)snd(880)}
 if(a=='fs'){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch(_){}}
 if(a=='view')setView(VT?0:1);if(a=='land'){FORCE=!FORCE;try{localStorage.setItem('ccl',FORCE?'1':'0')}catch(_){}applyLand();try{if(FORCE){await document.documentElement.requestFullscreen();await screen.orientation.lock('landscape')}else screen.orientation.unlock()}catch(_){}}
 menuDraw()};

function ER(){return VT?1:.707}
function cx0(){return VT?OX+N*TW/2:OX}
/* ===================== v7: producción por hora, burbujas, almacenes y colocación ===================== */
function LIMF(b){return isMn(b)?MT(b)[Math.min(MT(b).length-1,Math.max(1,b.lv))].cap:Math.round(3*prodRate(b))}
const prodRate=b=>Math.round(prodRate0(b)*(1+((window.CLAN90&&CLAN90.prod)||0)/100));const prodRate0=b=>isMn(b)?MT(b)[Math.min(MT(b).length-1,Math.max(1,b.lv))].rate:Math.round(3600*(1+.45*(b.lv-1)));
const bMin=b=>Math.max(12,LIMF(b)*.05);
const bFull=b=>b.st>=LIMF(b)-.5;
const bOn=b=>!!TY[b.t].prod&&!b.ruin&&!b.nb&&b.hp>0&&b.st>=bMin(b);
function collect(b){const d=TY[b.t],k=d.prod;if(!k||!(b.st>=1))return false;const room=Math.floor(cap[k]()-S[k]),n=Math.min(Math.floor(b.st),room),s=d.s;
 if(n<1){POP.push({x:b.x+s/2,y:b.y+s/2,t:1.6,txt:'¡Almacén lleno!'});snd('deny');return false}
 S[k]+=n;b.st-=n;POP.push({x:b.x+s/2,y:b.y+s/2,t:1.8,txt:'+'+n+(k=='g'?' 🪙':' 💧')});snd(k=='g'?'coin':'drop');return true}
function bubGeom(b){const d=TY[b.t],s=d.s,[cx,cy]=P(b.x+s/2,b.y+s/2,d.h),full=bFull(b),sc=full?1.15:.68,lift=b.hp<b.max?10:0,tip=cy-({hall:30}[b.t]||8)-6-lift;
 return{x:cx,tip,sc,full,cyBody:tip-(7+16)*sc,r:22*sc+4}}
function bubbleAt(sx,sy){const px=(sx-cam.x)/cam.z,py=(sy-cam.y)/cam.z;let best=null,bd=1e9;for(const b of S.b){if(!bOn(b))continue;const m=bubGeom(b),dd=Math.hypot(px-m.x,py-m.cyBody);if(dd<=m.r&&dd<bd){bd=dd;best=b}}return best}
function rrp(l,t,w,h,r){g.beginPath();g.moveTo(l+r,t);g.arcTo(l+w,t,l+w,t+h,r);g.arcTo(l+w,t+h,l,t+h,r);g.arcTo(l,t+h,l,t,r);g.arcTo(l,t,l+w,t,r);g.closePath()}
/* burbuja estilo "juego de estrategia": cuadro redondeado verde grisáceo con cola */
function drBub(x,y,sc,kind,txt){g.save();g.translate(x,y);g.scale(sc,sc);g.lineJoin='round';
 let w=36,h=34;if(kind=='txt'){g.font='19px "Lilita One",Arial Black,sans-serif';w=Math.ceil(g.measureText(txt).width)+26;h=30}
 const t=-(h+7),bt=-7,l=-w/2,rt=w/2,r=9;
 const path=()=>{g.beginPath();g.moveTo(l+r,t);g.lineTo(rt-r,t);g.arcTo(rt,t,rt,t+r,r);g.lineTo(rt,bt-r);g.arcTo(rt,bt,rt-r,bt,r);g.lineTo(7,bt);g.lineTo(0,0);g.lineTo(-7,bt);g.lineTo(l+r,bt);g.arcTo(l,bt,l,bt-r,r);g.lineTo(l,t+r);g.arcTo(l,t,l+r,t,r);g.closePath()};
 g.save();g.translate(2,3);path();g.fillStyle='rgba(0,0,0,.28)';g.fill();g.restore();
 path();if(kind=='txt'){g.fillStyle='rgba(176,186,150,.86)'}else{const gr=g.createLinearGradient(0,t,0,bt);gr.addColorStop(0,'#e6ead2');gr.addColorStop(1,'#b3ba94');g.fillStyle=gr}g.fill();
 if(kind=='txt')g.setLineDash([6,4]);g.lineWidth=3.2;g.strokeStyle='#1b1b1b';g.stroke();g.setLineDash([]);
 if(kind!='txt'){g.fillStyle='rgba(255,255,255,.4)';rrp(l+4,t+4,w-8,h*.34,6);g.fill()}
 const cy=t+h/2;
 if(kind=='coin'){const gr=g.createRadialGradient(-3,cy-4,2,0,cy,13);gr.addColorStop(0,'#fff6b0');gr.addColorStop(.45,'#ffcf2e');gr.addColorStop(1,'#c78406');g.beginPath();g.arc(0,cy,12.5,0,7);g.fillStyle=gr;g.fill();g.lineWidth=2.2;g.strokeStyle='#6b4300';g.stroke();g.beginPath();g.arc(0,cy,8,0,7);g.lineWidth=1.8;g.strokeStyle='#b97a08';g.stroke();g.beginPath();g.arc(-3,cy-3,4,3.6,5.2);g.lineWidth=2;g.strokeStyle='rgba(255,255,255,.85)';g.stroke()}
 else if(kind=='drop'){g.beginPath();g.moveTo(0,cy-14);g.bezierCurveTo(4,cy-7,11,cy-2,11,cy+4);g.arc(0,cy+4,11,0,Math.PI,false);g.bezierCurveTo(-11,cy-2,-4,cy-7,0,cy-14);g.closePath();const gr=g.createRadialGradient(-4,cy,2,0,cy+3,14);gr.addColorStop(0,'#ffc2ff');gr.addColorStop(.5,'#d447e6');gr.addColorStop(1,'#8a1fa8');g.fillStyle=gr;g.fill();g.lineWidth=2.2;g.strokeStyle='#4f0e66';g.stroke();g.beginPath();g.ellipse(-4.5,cy+2,2.6,4.6,.4,0,7);g.fillStyle='rgba(255,255,255,.75)';g.fill()}
 else{g.textAlign='center';g.textBaseline='middle';g.lineWidth=5;g.strokeStyle='#111';g.fillStyle='#fff';g.strokeText(txt,0,cy+1);g.fillText(txt,0,cy+1)}
 g.restore()}
function drBubbles(){if(mode!='v')return;const T=performance.now();
 for(const b of S.b){if(b.hp<=0||b.nb||b.ruin)continue;const d=TY[b.t];
  if(d.prod){if(!bOn(b))continue;const m=bubGeom(b),bob=Math.sin(T/(m.full?190:420)+b.x*.7)*(m.full?4:2.4),sc=m.sc*(m.full?1+.05*Math.sin(T/150):1);drBub(m.x,m.tip-bob,sc,d.prod=='g'?'coin':'drop')}
  else if((b.t=='gst'&&S.g>=cap.g()-.5)||(b.t=='est'&&S.e>=cap.e()-.5)){const s=d.s,[cx,cy]=P(b.x+s/2,b.y+s/2,b.t=='gst'?58:56),bob=Math.sin(T/420+b.x)*2.5;drBub(cx,cy-bob,.82,'txt','¡Lleno!')}}}

/* ---- almacenes ---- */
function slab(x,y,s){const z=6,e=.06;poly([P(x-e,y+s+e),P(x+s+e,y+s+e),P(x+s+e,y+s+e,z),P(x-e,y+s+e,z)],'#5a7392');poly([P(x+s+e,y-e),P(x+s+e,y+s+e),P(x+s+e,y+s+e,z),P(x+s+e,y-e,z)],'#3f5873');poly([P(x-e,y-e,z),P(x+s+e,y-e,z),P(x+s+e,y+s+e,z),P(x-e,y+s+e,z)],'#9db3cf');g.strokeStyle='#1d2b3d';g.lineWidth=1.6;g.stroke();
 poly([P(x+.12,y+.12,z+.5),P(x+s-.12,y+.12,z+.5),P(x+s-.12,y+s-.12,z+.5),P(x+.12,y+s-.12,z+.5)],'#5b4630');
 g.fillStyle='#c98c3c';for(const[u,v]of[[x+.1,y+.1],[x+s-.1,y+.1],[x+s-.1,y+s-.1],[x+.1,y+s-.1]]){const[a,b]=P(u,v,z+.5);g.beginPath();g.arc(a,b,2.4,0,7);g.fill();g.strokeStyle='#5a3606';g.lineWidth=1;g.stroke()}}
function stump(x,y,sz,h0,h1){const c='#8b4f26';poly([P(x,y+sz,h0),P(x+sz,y+sz,h0),P(x+sz,y+sz,h1),P(x,y+sz,h1)],sh(c,.9));poly([P(x+sz,y,h0),P(x+sz,y+sz,h0),P(x+sz,y+sz,h1),P(x+sz,y,h1)],sh(c,.58));g.strokeStyle='rgba(30,12,2,.55)';g.lineWidth=1.2;g.stroke();
 g.strokeStyle='rgba(30,12,2,.35)';for(let z=h0+5;z<h1-1;z+=5){g.beginPath();g.moveTo(...P(x,y+sz,z));g.lineTo(...P(x+sz,y+sz,z));g.lineTo(...P(x+sz,y,z));g.stroke()}
 poly([P(x,y,h1),P(x+sz,y,h1),P(x+sz,y+sz,h1),P(x,y+sz,h1)],'#d39a58');g.strokeStyle='#4a260c';g.lineWidth=1.4;g.stroke();const[a,b]=P(x+sz/2,y+sz/2,h1);g.beginPath();g.ellipse(a,b,sz*TW*.16,sz*TH*.16,0,0,7);g.strokeStyle='rgba(90,45,10,.6)';g.stroke()}
const GOLD=['#f5b820','#ffd84a','#e8a010','#ffe27a'];
function coin(x,y,z,k){const[a,b]=P(x,y,z);g.beginPath();g.ellipse(a,b+2.2,6.2,3.4,0,0,7);g.fillStyle='#9c6208';g.fill();g.beginPath();g.ellipse(a,b,6.2,3.4,0,0,7);g.fillStyle=GOLD[k&3];g.fill();g.lineWidth=1;g.strokeStyle='#7a4a05';g.stroke();g.beginPath();g.ellipse(a-.6,b-.3,3.2,1.6,0,0,7);g.fillStyle='rgba(255,246,170,.55)';g.fill()}
function fillOf(b,k){return b.ghost?0:mode=='a'?.6:Math.max(0,Math.min(1,S[k]/cap[k]()))}
function drGst(b){const x=b.x,y=b.y,s=3,cx=x+1.5,cy=y+1.5,f=fillOf(b,'g'),full=f>=.999,Z=6.5,N=230;
 poly([P(x+.2,y+.2),P(x+s+.45,y+.2),P(x+s+.45,y+s+.45),P(x+.2,y+s+.45)],'rgba(0,0,0,.24)');
 slab(x,y,s);const sz=.52,H=17;
 stump(x,y,sz,Z,H);stump(x,y+s-sz,sz,Z,H);stump(x+s-sz,y,sz,Z,H);
 const n=Math.ceil(N*f),Rf=.4+.95*Math.sqrt(f),Hf=36*Math.pow(f,.72),L=[];let sd=((b.x+3)*7919+(b.y+5)*104729)>>>0;const rnd=()=>(sd=(sd*1664525+1013904223)>>>0)/4294967296;
 for(let i=0;i<n;i++){const th=rnd()*6.2832,rho=Math.sqrt(rnd()),r2=rnd(),ux=Math.cos(th)*rho*Rf,uy=Math.sin(th)*rho*Rf,z=Z+1.5+Hf*(1-Math.pow(rho,1.7))*(.78+.22*r2);L.push({u:ux,v:uy,z,k:i})}
 L.sort((p,q)=>(p.u+p.v)-(q.u+q.v)||p.z-q.z);for(const c of L)coin(cx+c.u,cy+c.v,c.z,c.k);
 sd=77;const ov=[];if(full)for(let i=0;i<22;i++){const side=i&3,t=rnd()*2.3-1.15;let u,v;if(side==0){u=-1.52-.06*rnd();v=t}else if(side==1){u=t;v=-1.52-.06*rnd()}else if(side==2){u=1.52+.06*rnd();v=t}else{u=t;v=1.52+.06*rnd()}ov.push({u,v,z:H-3+rnd()*7,k:i,front:side>=2})}
 for(const c of ov)if(!c.front)coin(cx+c.u,cy+c.v,c.z,c.k);
 stump(x+s-sz,y+s-sz,sz,Z,H);
 for(const c of ov)if(c.front)coin(cx+c.u,cy+c.v,c.z,c.k)}
function drEst(b){const x=b.x,y=b.y,s=3,cx=x+1.5,cy=y+1.5,f=fillOf(b,'e'),full=f>=.999,R=.78,H=32,z0=7;
 poly([P(x+.6,y+.6),P(x+s-.2,y+.6),P(x+s-.05,y+s-.05),P(x+.6,y+s-.2)],'rgba(0,0,0,.24)');slab(x+.55,y+.55,1.9);
 const[a,b0]=P(cx,cy,z0),rx=VT?R*TW:R*TW*.7071,ry=VT?R*TH:R*TH*.7071,top=b0-H,lv=Math.max(0,Math.min(1,f)),ly=b0-(H-4)*lv-1;
 const body=(yt)=>{g.beginPath();g.moveTo(a-rx,yt);g.lineTo(a-rx,b0);g.ellipse(a,b0,rx,ry,0,Math.PI,0,true);g.lineTo(a+rx,yt);g.closePath()};
 body(top);let gr=g.createLinearGradient(a-rx,0,a+rx,0);gr.addColorStop(0,'#3a2f55');gr.addColorStop(.35,'#6a5a98');gr.addColorStop(1,'#2d2444');g.fillStyle=gr;g.fill();
 if(lv>0.005){body(ly);gr=g.createLinearGradient(a-rx,0,a+rx,0);gr.addColorStop(0,'#a82bc8');gr.addColorStop(.3,'#e87bff');gr.addColorStop(.7,'#c34be0');gr.addColorStop(1,'#7f1f9c');g.fillStyle=gr;g.fill();g.beginPath();g.ellipse(a,ly,rx,ry,0,0,7);g.fillStyle='#f6a6ff';g.fill()}
 g.beginPath();g.ellipse(a,top,rx,ry,0,0,7);g.fillStyle=lv>=.999?'#f6a6ff':'rgba(120,100,170,.55)';g.fill();g.lineWidth=3;g.strokeStyle='#c98c3c';g.stroke();
 g.beginPath();g.moveTo(a-rx+4,top+4);g.lineTo(a-rx+4,b0-4);g.lineWidth=3;g.strokeStyle='rgba(255,255,255,.35)';g.stroke();
 g.lineWidth=2;g.strokeStyle='#1d1230';body(top);g.stroke();
 for(const q of[.35,.7]){g.beginPath();g.ellipse(a,b0-H*q,rx,ry,0,0,Math.PI);g.lineWidth=3;g.strokeStyle='#c98c3c';g.stroke()}
 if(full){g.fillStyle='#f6a6ff';g.beginPath();g.ellipse(a,top-3,rx*.7,ry*.8,0,0,7);g.fill();g.fillStyle='#ffe0ff';g.beginPath();g.ellipse(a-rx*.25,top-5,rx*.22,ry*.3,0,0,7);g.fill();for(const dx of[-.55,.5]){g.beginPath();g.moveTo(a+rx*dx,top);g.quadraticCurveTo(a+rx*dx+3,top+8,a+rx*dx,top+14);g.lineWidth=4;g.strokeStyle='#e87bff';g.stroke()}}}

/* ---- colocación (cuadrícula verde, flechas y botones ✔ ✖ flotantes) ---- */
const gridCells=(x,y,s)=>{const L=[];for(let i=0;i<s;i++)for(let j=0;j<s;j++)L.push([P(x+i,y+j),P(x+i+1,y+j),P(x+i+1,y+j+1),P(x+i,y+j+1)]);return L};
function placeOk(){if(!gh||!sel)return false;const s=TY[sel].s;if(mv)return mvOk();const d=TY[sel],c=cost(sel);return free(S.b,gh.x,gh.y,s)&&S[d.cur]>=c&&cntOk(sel)&&(sel=='wall'||sel=='hut'||TY[sel].trap||builders()>0)}
function placeWhy(){if(!gh||!sel)return'';const s=TY[sel].s,d=TY[sel];if(mv&&mvR)return mvOk()?'':'Lugar ocupado';if(!free(S.b,gh.x,gh.y,s))return'Lugar ocupado';if(mv)return'';if(S[d.cur]<cost(sel))return'Falta '+(d.cur=='g'?'oro':'elixir');if(cnt(sel)>=mx(sel))return'Máximo alcanzado';if(!totOk(sel))return TY[sel].trap?'Límite de trampas':'Límite de edificios';if(!(sel=='wall'||sel=='hut'||TY[sel].trap||builders()>0))return'Sin constructor libre';return''}
function drPlaceGrid(){if(!(mode=='v'&&sel&&gh))return;const s=TY[sel].s,ok=free(S.b,gh.x,gh.y,s);
 for(const q of gridCells(gh.x,gh.y,s)){poly(q,ok?'rgba(80,235,50,.40)':'rgba(240,60,40,.45)');g.strokeStyle=ok?'#38ff1e':'#ff3a28';g.lineWidth=2;g.stroke()}
 const o=[P(gh.x,gh.y),P(gh.x+s,gh.y),P(gh.x+s,gh.y+s),P(gh.x,gh.y+s)];g.beginPath();o.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.strokeStyle=ok?'#1cc40a':'#c01a0e';g.lineWidth=3.5;g.stroke()}
function arrow(x,y,ang,k){g.save();g.translate(x,y);g.rotate(ang);g.scale(k,k);g.lineJoin='round';g.beginPath();[[20,0],[3,-15],[3,-7],[-15,-7],[-15,7],[3,7],[3,15]].forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();
 const gr=g.createLinearGradient(0,-15,0,15);gr.addColorStop(0,'#c7f56a');gr.addColorStop(.5,'#7fd72e');gr.addColorStop(.52,'#58b81a');gr.addColorStop(1,'#6ccb27');g.fillStyle=gr;g.fill();g.lineWidth=3;g.strokeStyle='#17400a';g.stroke();g.restore()}
function drPlaceTop(){if(!(mode=='v'&&sel&&gh))return;const d=TY[sel],s=d.s;g.globalAlpha=.88;
 if(sel=='wblock')box(gh.x,gh.y,s,d.h,d.c,d.r);else if(mv&&mvR){const ks=mvR.map(r=>(gh.x+r.ox)+','+(gh.y+r.oy));ks.forEach(k=>WMAP[k]=1);for(const r of mvR)drB({t:'wall',x:gh.x+r.ox,y:gh.y+r.oy,lv:r.w.lv,hp:1,max:1,st:0,up:0,ghost:1});ks.forEach(k=>delete WMAP[k])}else drB({t:sel,x:gh.x,y:gh.y,lv:1,hp:1,max:1,st:0,up:0,ghost:1});g.globalAlpha=1;
 const T=performance.now(),pl=Math.sin(T/190)*3.5,ed=[[P(gh.x+s/2,gh.y),-1,-1],[P(gh.x+s,gh.y+s/2),1,-1],[P(gh.x+s/2,gh.y+s),1,1],[P(gh.x,gh.y+s/2),-1,1]];
 for(const[m,dx,dy]of ed){const n=Math.SQRT2,off=30+pl;arrow(m[0]+dx/n*off,m[1]+dy/n*off*.8,Math.atan2(dy*.8,dx),1)}}
document.body.insertAdjacentHTML('beforeend','<div id="bld"><div class="bpill"></div><div class="bbs"><button class="bb no" data-no=1 aria-label="Cancelar"><svg viewBox="0 0 40 40"><path d="M9 9L31 31M31 9L9 31" stroke="#1b0f06" stroke-width="11" stroke-linecap="round"/><path d="M9 9L31 31M31 9L9 31" stroke="#fff" stroke-width="6.5" stroke-linecap="round"/></svg></button><button class="bb ok" data-ok=1 aria-label="Construir"><svg viewBox="0 0 40 40"><path d="M7 21L16 30L33 10" fill="none" stroke="#1b0f06" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 21L16 30L33 10" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div>');
let _bt='';
function posBld(){const el=document.getElementById('bld');if(!el)return;if(mode!='v'||!sel||!gh||UI.shop||UI.train||UI.lab){el.style.display='none';return}
 const d=TY[sel],s=d.s,p=P(gh.x+s/2,gh.y+s/2,d.h+16),x=p[0]*cam.z+cam.x,y=p[1]*cam.z+cam.y,vw=innerWidth,vh=innerHeight;
 const ok=placeOk(),why=placeWhy(),bs=el.querySelector('.bbs'),pill=el.querySelector('.bpill'),tag=(mv?'Mover '+d.n:d.n+' · '+cost(sel)+(d.cur=='g'?' 🪙':' 💧')+' · ⏱ '+fmtT(sel=='wall'?0:BT[sel]||20))+(why?'|'+why:'');
 el.style.display='block';const top=Math.max(96,Math.min(vh-170,y-d.h*cam.z-84)),left=Math.max(70,Math.min(vw-70,x));
 bs.style.transform='translate('+left+'px,'+top+'px) translate(-50%,0)';pill.style.transform='translate('+left+'px,'+(top-8)+'px) translate(-50%,-100%)';
 if(tag!==_bt){_bt=tag;const[a,b]=tag.split('|');pill.innerHTML=a+(b?'<br><span class=bad>'+b+'</span>':'')}
 bs.querySelector('.ok').classList.toggle('dis',!ok);bs.querySelector('.no').title=sel=='wblock'?'Terminar':'Cancelar'}
document.getElementById('bld').onclick=e=>{const b=e.target.closest('button');if(!b)return;try{AC.resume()}catch(_){}
 if(b.dataset.ok){if(!placeOk()){snd('deny');return}buildGh()}else if(b.dataset.no){cancelMv();sel=null;gh=null;hov=null;snd('ui')}
 ui();save()};

function setView(v){VT=v;if(v){TH=36;OX=60;OY=60}else{TH=25;OX=340;OY=84}try{localStorage.setItem('ccv',v)}catch(e){}fit();clampCam()}
function sil(b){const d=TY[b.t],s=d.s,h=b.ruin?Math.max(4,d.h/3|0):d.h,x=b.x,y=b.y,e={hall:26,tower:30,camp:16,rax:0,scout:18}[b.t]||0,L=[[P(x,y,h),P(x+s,y,h),P(x+s,y,0),P(x+s,y+s,0),P(x,y+s,0),P(x,y+s,h)]];
 if(e&&!b.ruin){const A=P(x+s/2,y+s/2,h+e);L.push([P(x-.15,y+s+.15,h),P(x+s+.15,y+s+.15,h),A],[P(x+s+.15,y+s+.15,h),P(x+s+.15,y-.15,h),A])}return L}
function occl(b){if(mode!='a'||!A||b.hp<=0)return false;const s=TY[b.t].s;
 for(const t of A.tr){if(t.hp<=0||t.x+t.y>=b.x+b.y+s||Math.abs(t.x-b.x-s/2)>s/2+4||Math.abs(t.y-b.y-s/2)>s/2+4)continue;const p=P(t.x,t.y);if(sil(b).some(pl=>inPoly(pl,p[0],p[1]-10)))return true}return false}
function drShot(s,a,b){const p=Math.min(1,Math.max(0,1-s.l/s.L));
 if(s.k=='m'){const an=Math.atan2(b[1]-a[1],b[0]-a[0]),cx=b[0]-Math.cos(an)*6,cy=b[1]-8-Math.sin(an)*6;g.lineCap='round';
  g.strokeStyle='rgba(255,255,255,'+(1-p*.8)+')';g.lineWidth=5;g.beginPath();g.arc(cx,cy,15,an-1.25,an-1.25+2.5*Math.min(1,p*1.6));g.stroke();
  g.strokeStyle='rgba(255,220,120,'+(1-p)+')';g.lineWidth=2;g.beginPath();g.arc(cx,cy,10,an-1,an-1+2*Math.min(1,p*1.6));g.stroke();g.lineCap='butt'}
 else if(s.k=='ar'){const H=26,dx=b[0]-a[0],x=a[0]+dx*p,y=a[1]+(b[1]-a[1])*p-Math.sin(p*Math.PI)*H-6,an=Math.atan2((b[1]-a[1])-Math.cos(p*Math.PI)*Math.PI*H,dx);
  g.save();g.translate(x,y);g.rotate(an);g.strokeStyle='#8a5a2b';g.lineWidth=2.5;g.beginPath();g.moveTo(-9,0);g.lineTo(7,0);g.stroke();
  g.fillStyle='#e8eef5';g.beginPath();g.moveTo(11,0);g.lineTo(5,-3.5);g.lineTo(5,3.5);g.fill();g.fillStyle='#e04a4a';g.beginPath();g.moveTo(-9,0);g.lineTo(-13,-3);g.lineTo(-6,0);g.lineTo(-13,3);g.fill();g.restore()}}
try{if(localStorage.getItem('ccv')=='1')setView(1)}catch(e){}

function loop(t){if((GX.cap||GX.idle||GX.raid||GFPS)&&gfxSkip(t)){requestAnimationFrame(loop);return}const dt=Math.min(GFPS&&GFPS<30?Math.max(GX.dtm,.07):GX.dtm,(t-last)/1000);last=t;gfxFps(t);try{posBld()}catch(e){}if(mode=='v'&&S){if(OFFLINE){const nw=Date.now();if(S.ts&&(nw-S.ts)/1000>2)catchUp((nw-S.ts)/1000);S.ts=nw}else{S.ts=Date.now();simC+=dt;if(S.tsrv>0)S.tsrv+=dt*1000}}trainTick(dt);try{conSfx(dt)}catch(e){}if(mv&&!sel)cancelMv();if(mode=='v'&&t-lu>250){lu=t;ui()}{const n=mode=='a'&&E?E.N:vN();if(n!=N){N=n;fit();clampCam()}}
 try{if(mode=='v')vil(dt);else if(A.on){stepAtk(dt);if(A)ui()}}catch(e){loopErr('sim',e)}
 try{draw()}catch(e){loopErr('draw',e)}
 requestAnimationFrame(loop)}
let _le={};function loopErr(w,e){const k=w+':'+(e&&e.message);_le[k]=(_le[k]||0)+1;if(_le[k]==1)console.error('[loop]',w,e)}
/* ================= v3: UI nueva, entrenamiento, combate, efectos, sfx ================= */
const $e=id=>document.getElementById(id);
const UI={shop:0,cat:'res',train:0,desc:0,rq:0};
let LV={},LVP={},_sT='',_sP='',_sS='',_sTr='';
const lvT=(id,t)=>{LV[id]=t;return `<b class=lv data-lv="${id}"></b>`};
const lvP=(id,f)=>{LVP[id]=f;return `<i class=pb><u data-pb="${id}"></u></i>`};
const syncLV=r=>{r.querySelectorAll('[data-lv]').forEach(e=>{const v=LV[e.dataset.lv];if(v!=null&&e.textContent!==String(v))e.textContent=v});r.querySelectorAll('[data-pb]').forEach(e=>{const v=Math.round(Math.max(0,Math.min(1,LVP[e.dataset.pb]||0))*100)+'%';if(e.style.width!==v)e.style.width=v})};
const fmtT=s=>{s=Math.ceil(s);if(s>=3600)return fmtHM(s);return s>=60?(s/60|0)+'m'+String(s%60).padStart(2,'0')+'s':s+'s'};
const ico=t=>TY[t].e||{wblock:'🧱',scout:'🔭',wall:'🧱'}[t]||'🏠';
const dmgOf=(b,l=b.lv)=>b.t=='rocket'?RKT[Math.min(8,Math.max(1,l))].dmg:b.t=='mortar'?MOR[Math.min(8,Math.max(1,l))].dmg:b.t=='tower'?TWR[Math.min(13,Math.max(1,l))].dmg:b.t=='cannon'?CAN[Math.min(13,Math.max(1,l))].dmg:Math.round(TY[b.t].dmg*(1+.65*(l-1)));
const rtOf=b=>b.t=='rocket'?1:b.t=='mortar'?5:b.t=='tower'?.76:b.t=='cannon'?1.25:TY[b.t].rt*Math.max(.55,1-.06*(b.lv-1));
const rgOf=b=>b.t=='rocket'?10:b.t=='mortar'?11:b.t=='tower'?10:b.t=='cannon'?9:TY[b.t].rg+.3*(b.lv-1);
BT.hall=60;TS.sc=10;
const UT=b=>b.t=='bomb'?(BMB.t[b.lv+1]||99999):b.t=='lab'?(LAB[b.lv+1]||{time:99999}).time:b.t=='rocket'?(RKT[b.lv+1]||{time:99999}).time:b.t=='mortar'?(MOR[b.lv+1]||{time:99999}).time:b.t=='camp'?(CMP[b.lv+1]||{time:99999}).time:b.t=='tower'?(TWR[b.lv+1]||{time:99999}).time:b.t=='cannon'?(CAN[b.lv+1]||{time:99999}).time:isSt(b)?(STO[b.lv+1]||{time:99999}).time:isMn(b)?(MT(b)[b.lv+1]||{time:99999}).time:b.t=='rax'?RXT[Math.min(11,b.lv)]:b.t=='hall'?HTIME[Math.min(8,b.lv-1)]:Math.round((BT[b.t]||30)*b.lv*1.5);
const WBT=6,WUT=l=>8*l;
const ORD={auto:'Auto',def:'Defensas',res:'Recursos',hall:'Ayunt.',camp:'Campam.',wall:'Muros'};
const RFx={hall:26,tower:30,camp:16,rax:0,scout:18};

/* ---------- iconos de tropas (sprites) ---------- */
const _ic={};
function tIcon(k){if(_ic[k])return _ic[k];if(k=='barb')return _ic[k]=barbIcon();if(k=='arch')return _ic[k]=archIcon();if(k=='giant')return _ic[k]=giantIcon();if(k=='gob')return _ic[k]=gobIcon();const c=document.createElement('canvas');c.width=44;c.height=48;const x=c.getContext('2d'),a=k=='wb'?IC.bomb:TT,pal=TP[k]||PL,cs=(k=='giant'||k=='king')?4:3,w=a[0].length*cs,X=Math.round((44-w)/2),Y=48-a.length*cs-2;
 if(k=='loon'){loonShape(x,22,22,1.05);return _ic[k]=c.toDataURL()}
 for(let j=0;j<a.length;j++)for(let i=0;i<a[j].length;i++){const ch=a[j][i];if(ch!='.'){x.fillStyle=pal[ch];x.fillRect(X+i*cs,Y+j*cs,cs,cs)}}
 if(k=='arch'){x.fillStyle='#a87444';x.fillRect(X+w,Y+6,3,16)}x.textAlign='center';if(k=='mage'){x.font='16px serif';x.fillText('🪄',36,34);x.fillStyle='#5a2d91';x.beginPath();x.moveTo(14,18);x.lineTo(22,6);x.lineTo(30,18);x.fill()}if(k=='heal'){x.fillStyle='#fff';x.fillRect(20,4,4,12);x.fillRect(16,8,12,4);x.fillStyle='#3fd36a';x.fillRect(21,5,2,10);x.fillRect(17,9,10,2)}if(k=='king'){x.fillStyle='#f5c542';x.fillRect(X+3,Y-6,w-6,6)}
 return _ic[k]=c.toDataURL()}

/* ---------- sonidos ---------- */
Object.assign(SFX,{
 ui:()=>tone(520,.05,'square',.05,0,760),open:()=>{tone(400,.08,'triangle',.08,0,620);tone(820,.1,'triangle',.06,.06)},sel:()=>tone(680,.06,'triangle',.07),
 done:()=>{[523,659,784,1047].forEach((f,i)=>tone(f,.2,'triangle',.1,i*.08));noise(.06,.05,3000)},
 arrow:()=>{noise(.08,.07,3600,0,'highpass');tone(900,.1,'triangle',.04,0,300)},cball:()=>{tone(110,.16,'sawtooth',.2,0,40);noise(.12,.18,1400)},
 mortar:()=>{tone(80,.3,'sine',.3,0,30);noise(.2,.14,700)},boom:()=>{noise(.5,.4,1800);tone(60,.5,'sine',.35,0,22)},
 jump:()=>tone(260,.32,'square',.08,0,720),zap:()=>{noise(.32,.3,5000,0,'highpass');tone(1300,.28,'sawtooth',.12,0,90)},
 heal:()=>[660,880,1100].forEach((f,i)=>tone(f,.25,'sine',.09,i*.1)),rage:()=>{tone(110,.5,'sawtooth',.14,0,230);noise(.35,.12,700)},
 deny:()=>tone(190,.18,'square',.1,0,120),destroy:()=>{noise(.35,.25,1200);tone(90,.3,'sine',.25,0,30)},dep:()=>{tone(220,.1,'triangle',.14,0,440)}});

/* ---------- orientación: sigue siempre al tamaño real de la pantalla ---------- */
function lwid(){return document.body.classList.contains('land')?Math.min(310,innerWidth*.4):0}
function applyLand(){document.body.classList.toggle('land',innerWidth>innerHeight)}
addEventListener('resize',applyLand);addEventListener('orientationchange',()=>setTimeout(applyLand,120));applyLand();

/* ---------- muros con tiempo ---------- */
const wlv=l=>Math.max(...l.map(b=>b.lv));
function wallGroups(){const m={};for(const b of S.b)if(b.t=='wall'){const k=b.g||('s'+b.x+'_'+b.y);(m[k]=m[k]||[]).push(b)}return Object.values(m)}
const gUpOk=l=>l.length>0&&l.every(b=>!b.ruin&&!b.nb&&!(b.up>0))&&wlv(l)<3;
const gUpC=l=>l.length*upc({t:'wall',lv:wlv(l)});
function wallUp1(l){if(!gUpOk(l))return 0;const lv=wlv(l),c=gUpC(l);if(S.g<c)return 0;S.g-=c;for(const b of l){b.lv=lv;b.max=mhp(b);b.hp=b.max;b.up=b.ut=WUT(lv)}return 1}
function upBlock(){if(!wallUp1(grp(pk)))snd('deny')}
function upAllWalls(){let n=0;for(const l of wallGroups().filter(gUpOk).sort((a,c)=>wlv(a)-wlv(c)))n+=wallUp1(l);if(!n)snd('deny')}

/* ---------- entrenamiento (cola tipo Clash) ---------- */
function trainTick0(dt){for(const b of S.b){if(b.t!='rax'||b.ruin||b.nb||b.up>0||!b.q||!b.q.length)continue;const q=b.q,j=q[0];j.t=(j.t==null?ttb(j.k,b):j.t)-dt;if(j.t<=0){S.army[j.k]=(S.army[j.k]||0)+1;j.n--;j.t=null;snd(660);if(j.n<=0)q.shift()}}
 const s=S.qs;if(s&&s.length){const j=s[0];j.t=(j.t==null?TS.sc:j.t)-dt;if(j.t<=0){S.sc=(S.sc||0)+1;j.n--;j.t=null;snd(660);if(j.n<=0)s.shift()}}}
function enqueue(k){const b=pk;if(!b||b.t!='rax'||b.ruin||b.nb||b.lv<(TU[k]||1)){if(b&&b.t=='rax')snd('deny');return}const q=b.q||(b.q=[]),d=TR[k],c=d.cost;
 if(S.e<c||d.sp>campCap()-used(S.army)-qsp()||(d.hero&&(S.army[k]||qAll().some(j=>j.k==k)))){snd('deny');return}
 S.e-=c;const l=q[q.length-1];if(l&&l.k==k)l.n++;else q.push({k,n:1,t:null});snd(500)}
function scEnq(){S.qs=S.qs||[];const n=S.qs.reduce((a,j)=>a+j.n,0);if(S.e<60||(S.sc||0)+n>=8){snd('deny');return}S.e-=60;const l=S.qs[S.qs.length-1];if(l)l.n++;else S.qs.push({n:1,t:null});snd(500)}
function qCancel(i,sc){const q=sc?S.qs:(pk&&pk.q),j=q&&q[i];if(!j)return;S.e+=sc?60:TR[j.k].cost;j.n--;if(i==0)j.t=null;if(j.n<=0)q.splice(i,1);snd('deny')}
const qRem=(q,b)=>(q||[]).reduce((a,j,i)=>a+(j.k?ttb(j.k,b):TS.sc)*(j.n-1)+(j.t==null?(j.k?ttb(j.k,b):TS.sc):j.t),0);

function trainDrawOld(){const el=$e('train');if(!UI.train||!pk){el.style.display='none';_sTr='';return}
 LV={};LVP={};const isS=pk.t=='scout',q=isS?(S.qs||[]):(pk.q||[]);
 let h=`<div class=row2><b>${isS?'🔭 Puesto de exploración':'⚔️ Cuartel nv '+pk.lv}</b><button data-tc=close>✕ Cerrar</button></div>`;
 if(!isS){const u=used(S.army)+qsp();h+=`<div class=sm>Espacio de ejército ${u}/${campCap()} · −${Math.round((1-Math.max(.35,1-.15*(pk.lv-1)))*100)}% de tiempo por su nivel · este cuartel entrena por su cuenta</div>`+lvP('sp',u/Math.max(1,campCap()))}
 else{const n=q.reduce((a,j)=>a+j.n,0);h+=`<div class=sm>Exploradores ${S.sc||0}+${n} en cola / 8 · 60 💧 y ${TS.sc}s cada uno</div>`}
 h+='<div class=sm>Cola de entrenamiento (toca un elemento para cancelar uno y recuperar el costo)</div><div class=qwrap>'+(q.length?q.map((j,i)=>{const u=j.k?ttb(j.k,pk):TS.sc,f=i==0?1-(j.t==null?u:j.t)/u:0;
  return `<button class=qs data-qc=${i}>${j.k?`<img class=ti src="${tIcon(j.k)}">`:'<span class=ib>🔭</span>'}<b>×${j.n}</b>${i==0?lvP('q0',f):'<span class=sm>espera</span>'}</button>`}).join('')+`<span class=sm>Total: ${lvT('qt',fmtT(qRem(q,pk)))}</span>`:'<span class=sm>Cola vacía</span>')+'</div>'+(q.length?`<div class=row>${gbtn('data-gq=1',qRem(q,pk),'Terminar cola ya')}</div>`:'');
 if(isS){h+=`<div class=grid><button class=tcard data-sct=1 ${S.e<60?'disabled':''}><span class=big>🔭</span><b>Explorador</b><span class=sm>60 💧 · ${TS.sc}s</span></button></div>`}
 else{const fr=campCap()-used(S.army)-qsp();
  h+='<div class=grid>'+Object.keys(TR).map(k=>{const d=TR[k],ok=pk.lv>=TU[k]&&S.e>=d.cost&&d.sp<=fr&&!(d.hero&&(S.army[k]||qAll().some(j=>j.k==k)));
   return `<button class="tcard ${ok?'':'off'}" data-tr=${k}><img class=ti src="${tIcon(k)}"><b>${d.n}</b><span class=sm>En aldea ×${S.army[k]||0} · ${d.hero?'Héroe':d.sp+' esp.'}</span><span class=sm>${pk.lv<TU[k]?'🔒 Cuartel nv '+TU[k]:d.cost+' 💧 · '+ttb(k,pk)+'s'+(S.rs&&S.rs.k==k?' ×2':'')}</span></button>`}).join('')+TSOON(pk)+'</div>';
  h+='<div class=sm>Hechizos (se preparan al instante)</div><div class=grid>'+Object.keys(SP).map(k=>`<button class=tcard data-s=${k} ${spLocked()||S.e<SP[k].cost||spn()>=spCap()?'disabled':''}><span class=big>${SP[k].e}</span><b>${SP[k].n}</b><span class=sm>×${S.sp[k]} · ${SP[k].cost} 💧</span></button>`).join('')+`</div><div class=sm>Mantén pulsada una tropa para entrenar varias · Hechizos ${spn()}/5</div>`}
 el.style.display='flex';el.className='ov';if(h!==_sTr){const st=el.scrollTop;el.innerHTML=h;_sTr=h;el.scrollTop=st}syncLV(el)}
const trEl=$e('train');
trEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;if(d.tr)return;if(d.rm){if(S.army[d.rm]>0){S.army[d.rm]--;snd('ui')}trainDraw();ui();save();return}if(d.ti){if(TINFO[d.ti]){UI.tinfo=d.ti;tinfoDraw();snd('open')}else trMsg(String(d.ti).startsWith('soon')?'La información de esta tropa llegará cuando esté lista.':'La información de esta tropa llegará pronto.');return}
 if(d.tc=='close'){UI.train=0;snd('ui')}
 else if(d.qc!=null)qCancel(+d.qc,pk&&pk.t=='scout');
 else if(d.s){const s=SP[d.s];if(!spLocked()&&S.e>=s.cost&&spn()<spCap()){S.e-=s.cost;S.sp[d.s]++;snd(500)}else snd('deny')}
 else if(d.sct)scEnq();
 else if(d.gq&&pk){const sc=pk.t=='scout';gemQueue(sc?S.qs:pk.q,sc,pk)}
 trainDraw();ui();save()};
let holdT=null,holdI=null;const holdStop=()=>{clearTimeout(holdT);clearInterval(holdI)};
trEl.addEventListener('pointerdown',e=>{if(e.target.closest('[data-ti]'))return;const sn=e.target.closest('[data-soon]');if(sn){trMsg(trWhy('soon'+sn.dataset.soon));return}const b=e.target.closest('[data-tr]');if(!b)return;const k=b.dataset.tr;try{AC.resume()}catch(_){}{const why=trWhy(k);if(why){trMsg(why);return}}enqueue(k);trainDraw();holdStop();holdT=setTimeout(()=>{holdI=setInterval(()=>{enqueue(k);trainDraw()},110)},380)});
addEventListener('pointerup',holdStop);addEventListener('pointercancel',holdStop);

/* ---------- tienda (pantalla completa, por categorías) ---------- */
const CATS={res:['⛏️ Recursos',['mine','pump','gst','est']],mil:['⚔️ Ejército',['rax','camp','scout','lab','cauldron','kalt']],def:['🛡 Defensas',['cannon','tower','mortar','rocket','wizard']],trap:['🪤 Trampas',['bomb','spring','abomb']],wall:['🧱 Muros',['wall']],util:['🏗 Otros',['hut']]};
const shSvg=()=>`<svg viewBox="0 0 100 112" aria-hidden=true><defs><linearGradient id=sg1 x1=0 y1=0 x2=0 y2=1><stop offset=0 stop-color=#f2f7ff /><stop offset=1 stop-color=#6a82b8 /></linearGradient><linearGradient id=sg2 x1=0 y1=0 x2=0 y2=1><stop offset=0 stop-color=#ffbe55 /><stop offset=1 stop-color=#d4700f /></linearGradient><linearGradient id=sg3 x1=0 y1=0 x2=0 y2=1><stop offset=0 stop-color=#fff /><stop offset=1 stop-color=#8da3d0 /></linearGradient><clipPath id=sgc><path d="M50 13 L84 23 V52 C84 76 68 91 50 99 C32 91 16 76 16 52 V23 Z"/></clipPath></defs><path d="M50 3 L93 15 V52 C93 81 73 101 50 109 C27 101 7 81 7 52 V15 Z" fill="url(#sg1)" stroke="#2a3f78" stroke-width="3"/><path d="M50 13 L84 23 V52 C84 76 68 91 50 99 C32 91 16 76 16 52 V23 Z" fill="url(#sg2)" stroke="#8a4a08" stroke-width="2"/><g clip-path="url(#sgc)" stroke="#7a3d05" stroke-opacity=".28" stroke-width="1.5"><path d="M28 10V110M40 10V110M60 10V110M72 10V110"/></g><path d="M50 28 L57 49 L78 56 L57 63 L50 86 L43 63 L22 56 L43 49 Z" fill="url(#sg3)" stroke="#3b4f86" stroke-width="2.5" stroke-linejoin="round"/></svg>`;
const SHLD=[['Escudo Mágico (1 día)','1d','4d',100],['Escudo Mágico (2 días)','2d','7d',150],['Escudo Mágico (1 semana)','7d','35d',250]];
function shopTop(){return `<div class=stp><button class="stt ${UI.st!='s'&&UI.st!='u'?'on':''}" data-st=b aria-label=Estructuras><span class=ti2>🏗️</span></button><button class="stt ${UI.st=='u'?'on':''}" data-st=u aria-label=Mejoras><span class=ti2>🔨</span>${upN()?'<b class=bdg>'+upN()+'</b>':''}</button><div class=sp></div><button class=stx data-sc=close aria-label=Cerrar>✕</button></div>`}
const shopBar=()=>`<div class=shbar><span>${(S.g|0)} 🪙</span><span>${(S.e|0)} 💧</span><span>${S.gem|0} <i class=gm></i></span></div>`;
function shieldPage(){return `<div class=shw><div class=shh>Escudos<small>Protege tus recursos de los ataques</small></div><div class=shg>`+SHLD.map(c=>`<div class="shc off"><div class=nm>${c[0]}</div><span class=inf>i</span><div class=sv>${shSvg()}<span class=tm>⏱ ${c[1]}</span></div><div class=rc>Recuperación:<b>${c[2]}</b></div><div class=soon>Próximamente</div><div class=pr>${c[3]} <i class=gm></i></div></div>`).join('')+`</div><div class=shn>Los escudos mágicos aún no están disponibles.</div></div>`}
function shopDraw(){const el=$e('shop');if(!UI.shop){el.style.display='none';_sS='';return}
 if(UI.st=='u'){const h=shopTop()+upPage()+shopBar();el.style.display='flex';el.className='ov';if(h!==_sS){const st=el.scrollTop;el.innerHTML=h;_sS=h;el.scrollTop=st}return}
 if(UI.st=='s'){const h=shopTop()+shieldPage()+shopBar();el.style.display='flex';el.className='ov';if(h!==_sS){const st=el.scrollTop;el.innerHTML=h;_sS=h;el.scrollTop=st}return}
 let h=shopTop()+`<div class=tabs style="margin-top:8px">`+Object.keys(CATS).map(k=>`<button class="${UI.cat==k?'on':''}" data-sk=${k}>${CATS[k][0]}</button>`).join('')+`</div><div class=sm>Constructores libres: ${builders()}/${nBld()}${totTxt()}</div><div class=grid>`;
 for(const t of CATS[UI.cat][1]){const d=TY[t],c=cost(t),n=cnt(t),m=mx(t);let why='';
  if(n>=m)why=m==0?'🔒 Ayuntamiento '+(LIM[t].findIndex(v=>v>0)+1):(t=='hut'&&m<6)||(LIM[t]&&LIM[t][9]>m)?'Sube el Ayuntamiento':'Máximo alcanzado';else if(!totOk(t))why=TY[t].trap?'Límite de trampas':'Límite de edificios';else if(S[d.cur]<c)why='Falta '+(d.cur=='g'?'oro':'elixir');else if(t!='wall'&&t!='hut'&&!TY[t].trap&&!builders())why='Sin constructor libre';
  h+=`<button class=tcard data-b=${t} ${why?'disabled':''}><span class=big>${ico(t)}</span><b>${d.n}</b><span class=sm>${c} ${d.cur=='g'?'🪙':'💧'} · ${n}/${m}</span><span class=sm>⏱ ${fmtT(t=='wall'?0:BT[t]||20)}</span>${why?`<span class="sm bad">${why}</span>`:''}</button>`}
 h+=soonCards()+'</div>'+shopBar();el.style.display='flex';el.className='ov';if(h!==_sS){const st=el.scrollTop;el.innerHTML=h;_sS=h;el.scrollTop=st}}
$e('shop').onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;const d=b.dataset;
 if(d.sc){UI.shop=0;snd('ui')}else if(d.st){UI.st=d.st;snd('ui')}else if(d.sk){UI.cat=d.sk;snd('ui')}else if(d.b){sel=d.b;mkGh();UI.shop=0;snd('open')}
 shopDraw();ui()};

/* ---------- tarjeta de estructura seleccionada ---------- */
function selCard(){const b=pk,d=TY[b.t],mxl=lcap(b),isW=b.t=='wall',nm=isW?'Muro de '+['','madera','roca','piedra tallada'][Math.min(3,b.lv)]:d.n,lvn=Math.min(b.lv,mxl);
 let h=`<div class=card><div class=ch><span class=ci>${ico(b.t)}</span><div><b>${nm}</b><br><span class=sm>Nv ${lvn}/${mxl} · ❤ ${b.hp|0}/${b.max}${b.ruin?' · 💥 DESTRUIDO':''}</span></div><button class=cx data-desc=1>ℹ</button><button class=cx data-x=1>✕</button></div>`;
 if(UI.desc)h+=`<div class=sm>${DESC[b.t]||''}</div>`;
 if(b.up>0){const T=b.ut||b.up;h+=`<div class=sm>🔨 ${b.nb?'Construyendo':b.rpr?'Reparando':'Mejorando'}… ${lvT('ub',fmtT(b.up))}</div>`+lvP('ubp',1-b.up/T)}
 const bits=[];
 if(d.rg){bits.push(`⚔ Daño ${dmgOf(b)}${b.lv<mxl?' → <span class=up>'+dmgOf(b,b.lv+1)+'</span>':''}`);bits.push(`🎯 Alcance ${rgOf(b).toFixed(1)}`)}
 if(d.prod){bits.push(`⛏ Producción ${prodRate(b)}/h${b.lv<mxl?' → <span class=up>'+prodRate({t:b.t,lv:b.lv+1})+'</span>':''}`);bits.push(`📦 Límite ${Math.round(LIMF(b))}${b.lv<mxl?' → <span class=up>'+Math.round(LIMF({t:b.t,lv:b.lv+1}))+'</span>':''}`)}
 if(b.t=='hut')bits.push('🔨 1 constructor');if(b.t=='rax'){const nx=Object.keys(TU).find(k=>TU[k]==b.lv+1);if(nx)bits.push('🔓 Nv '+(b.lv+1)+': '+TR[nx].n);else if(TUS[b.lv+1])bits.push('🔓 Nv '+(b.lv+1)+': '+TUS[b.lv+1][0]+' 🔜')}if(b.t=='lab')bits.push(`🧬 Vida de tropas +${8*b.lv}%${b.lv<mxl?' → <span class=up>+'+8*(b.lv+1)+'%</span>':''}`);if(b.t=='cauldron')bits.push(`⚡ +${b.lv} slots de hechizo${b.lv<mxl?' → <span class=up>+'+(b.lv+1)+'</span>':''}`);if(b.t=='bomb')bits.push(`⚔ Daño ${BMBD[b.lv]}${b.lv<mxl?' → <span class=up>'+BMBD[b.lv+1]+'</span>':''} · 🎯 Se activa a 1.5 casillas · 💥 Radio 3 · Solo tropas terrestres`);if(TY[b.t].trap)bits.push('Invisible para el enemigo. Se activa una sola vez.');
 if(b.t=='gst'||b.t=='est')bits.push(`📦 Capacidad +${capS(b.lv)}${b.lv<mxl?' → <span class=up>+'+capS(b.lv+1)+'</span>':''}`);
 if(b.t=='rax')bits.push(`⏱ Entrenamiento −${Math.round((1-Math.max(.35,1-.15*(b.lv-1)))*100)}%${b.lv<mxl?' → <span class=up>−'+Math.round((1-Math.max(.35,1-.15*b.lv))*100)+'%</span>':''}`);
 if(bits.length)h+=`<div class=sm>${bits.join(' · ')}</div>`;if(d.prod&&!b.ruin&&!b.nb)h+=`<div class=sm>📥 Almacenado ${lvT('sto',Math.floor(b.st)+' / '+Math.round(LIMF(b)))}</div>`+lvP('stp',b.st/LIMF(b));if(b.t=='hut'&&!b.ruin&&!b.nb)h+=hutList();
 if(b.t=='hall'&&REQ[b.lv])h+='<div class=sm>Requisitos nv '+(b.lv+1)+': '+(REQ[b.lv]||[]).map(([t,n])=>`<span class="${cnt(t)>=n?'up':'bad'}">${TY[t].n} ${cnt(t)}/${n}</span>`).join(' · ')+'</div>';
 let r='';const nb=b.nb;
 if(b.up>0)r+=gbtn('data-gf=1',(b.t=='wall'?grp(b).filter(x=>x.up>0):[b]).reduce((a,x)=>a+x.up,0));
 if(b.ruin){if(!b.up){const c=rc(b),k=d.cur||'g',why=S[k]<c?'Faltan recursos':(b.t!='hut'&&!builders())?'Sin constructor':'';r+=`<button class="db okb" data-rep=1 ${why?'disabled':''}><i>🔧</i>Reparar<small>${c} ${k=='g'?'🪙':'💧'} · ⏱ ${fmtT(RT(b))}</small>${why?'<small class=bad>'+why+'</small>':''}</button>`}}
 else{
  if(d.prod&&!nb&&!b.ruin&&b.st>=1)r+=`<button class="db okb" data-col=1><i>${d.prod=='g'?'🪙':'💧'}</i>Reclamar<small>${Math.floor(b.st)}</small></button>`;
  if((b.t=='rax'||b.t=='scout')&&!nb)r+=`<button class="db okb" data-ta=1><i>${b.t=='rax'?'🪖':'🔭'}</i>Entrenar</button>`;
  if(!isW&&(d.cost||b.t=='hall')&&b.lv<mxl&&!b.up){const c=upc(b),why=!builders()?'Sin constructor':!reqOk(b)?(b.t=='rax'?'Requiere Ayuntamiento '+RXH[b.lv]:'Faltan requisitos'):S[d.cur]<c?'Faltan recursos':'';
   r+=`<button class=db data-u=1 ${why?'disabled':''}><i>⬆</i>Mejorar<small>${c} ${d.cur=='g'?'🪙':'💧'} · ⏱ ${fmtT(UT(b))}</small>${why?'<small class=bad>'+why+'</small>':''}</button>`}
  if(isW){const nbr=wNb(b)>0,on=WROW.on&&WROW.pk===b,tg=wTg(),multi=on&&tg.length>1,up=tg.filter(x=>x.lv<3&&!x.ruin&&reqOk(x)),c1=up.reduce((a,x)=>a+upc(x),0),why1=b.lv>=3&&!multi?'Nivel máximo':!up.length?(reqOk(b)?'Nivel máximo':'Requiere Ayuntamiento '+(b.lv<2?2:3)):S.g<c1?'Faltan recursos':'';
   if(nbr)r+=`<button class=db data-wr=1><i>⇔</i>${on?'Quitar fila':'Seleccionar fila'}<small>${on?tg.length+' muros':'Fila más larga'}</small></button>`;
   if(multi)r+=`<button class=db data-wrot=1><i>↷</i>Rotar fila</button>`;
   r+=`<button class=db data-ub=1 ${why1?'disabled':''}><i>${multi?'⚒':'⬆'}</i>${multi?'Actualizar':'Mejorar'}<small>${up.length?c1+' 🪙':'—'}</small>${why1&&why1!='Nivel máximo'?'<small class=bad>'+why1+'</small>':''}</button>`}
  if(isW)r+=`<button class=db data-mv=1><i>↔</i>Mover</button>`;
  if(b.t!='hall'&&!isW)r+=`<button class=db data-del=1><i>🗑</i>${dq===b?'¿Seguro?':'Demoler'}<small>+${Math.round(d.cost*.2*grp(b).length)}</small></button>`}
 return h+`<div class=dock>${r}</div></div>`}

/* ---------- barra de ataque (despliegue) ---------- */
function atkUI(){const tc=Object.keys(TR).filter(k=>(A.army[k]||0)>0).map(k=>`<button class="tc ${pick==k?'on':''}" data-p=${k}><img class=ti src="${tIcon(k)}"><b class=bd>${A.army[k]}</b></button>`).join('');
 const sc=Object.keys(SP).filter(k=>A.sp[k]>0).map(k=>`<button class="tc ${pick==k?'on':''}" data-p=${k}><span class=ib>${SP[k].e}</span><b class=bd>${A.sp[k]}</b></button>`).join('');
 const q=A.qty[pick]||1,o=A.ord[pick]||'auto';
 return `<div class=dock><button class="db sm2" data-r=1><i>🏳️</i>${UI.rq?'¿Seguro?'+(E&&E.real?' −1 '+ICO('ranking','🏆'):''):'Rendirse'}</button>${tc}${sc}`+(SPK(pick)?'':`<button class="db sm2" data-qv=1><i>×${q>=99?'Todo':q}</i>Cantidad</button><button class="db sm2" data-oc=1><i>🎯</i>${ORD[o]}</button>`)+`</div><div class=sm>Toca el terreno lejos de los edificios para desplegar</div>`}

/* ---------- ui() sin parpadeo: solo se reconstruye si cambia la estructura ---------- */
function ui(){LV={};LVP={};let top,h='';const tE=$e('top'),pE=$e('panel');
 if(mode=='v'){top=`<span class="pill gold"><em>${BRI.g}</em>${lvT('g',fkr(S.g|0,cap.g()))}${lvP('gp',S.g/cap.g())}</span><span class="pill elx"><em>${BRI.e}</em>${lvT('e',fkr(S.e|0,cap.e()))}${lvP('ep',S.e/cap.e())}</span><span class="pill tro"><em>${BRI.tr}</em>${lvT('tr',S.tr)}</span><span class="pill gem"><em>${BRI.gm}</em>${lvT('gm',S.gem|0)}</span>${S.shield>TNOW()?`<span class="pill shd"><em>${BRI.sh}</em>${lvT('sh',fmtT((S.shield-TNOW())/1000))}</span>`:''}<span class="pill bld"><em>${BRI.hm}</em>${lvT('bd',builders()+'/'+nHut())}</span><button data-menu=1 class=hbg aria-label="Menú">${BRI.menu}</button>${prfBtn()}${isAdm()?'<button data-adm=1>👑</button>':''}`;
  const can=used(S.army)||S.army.king;
  if(sel){h=''}
  else if(selOb&&tab=='ob')h=obCard();else if(pk&&tab=='info')h=selCard();
  else if(!UI.shop&&!UI.train&&!UI.lab){const rn=S.b.filter(b=>b.ruin&&!(b.up>0)),cg=rn.filter(b=>(TY[b.t].cur||'g')=='g').reduce((a,b)=>a+rc(b),0),ce=rn.filter(b=>TY[b.t].cur=='e').reduce((a,b)=>a+rc(b),0);
   h=(rn.length?`<div class=fixbar><button class="db fix" data-fix=1 ${rn.some(canFix)?'':'disabled'}><i>🔧</i><span>Reparar todo (${rn.length})</span><small>${cg?cg+' 🪙 ':''}${ce?ce+' 💧 ':''}· ⏱ ${fmtT(Math.max(...rn.map(RT)))}</small></button></div>`:'')+`<div class="dock main"><button class=db data-tab=shop aria-label=Construir><i>${BRI.hm}</i></button><button class=db data-ms=1><i>${BRI.ms}</i>Misiones${cl80().n?'<b class=dot>!</b>':''}</button>${btlBtn()}${OFFLINE?'<span class="db sp"></span>':`<button class=db data-l=1 ${ONL?'':'disabled'}><i>${BRI.rk}</i>Ranking</button>`}${brSlotOk()?`<button class=db data-sl=1><i>${BRI.slot}</i>Ruleta${brSlotDot()?'<b class=dot>!</b>':''}</button>`:'<span class="db sp"></span>'}</div>${OFFLINE?'<div class=sm>Modo prueba · sin conexión</div>':''}`}}
 else{top=`<span class="pill tim"><em>${BRI.tm}</em>${lvT('tm',Math.max(0,A.time|0)+'s')}</span><span class="pill dmg"><em>${BRI.dm}</em>${lvT('pc',pctDisp(pct())+'%')}</span>${E&&E.sh?`<span class="pill gold"><em>${BRI.g}</em>${lvT('lg',lootNow().g)}</span><span class="pill elx"><em>${BRI.e}</em>${lvT('le2',lootNow().e)}</span>`:''}<span class="pill tro"><em>${BRI.st}</em>${lvT('st','★'.repeat(stars())+'☆'.repeat(3-stars()))}</span>`;h=atkUI()}
 if(top!==_sT){tE.innerHTML=top;_sT=top}if(h!==_sP){pE.innerHTML=h;_sP=h}
 syncLV(tE);syncLV(pE);if(UI.train||_sTr)trainDraw();if(UI.shop||_sS)shopDraw();try{labDraw()}catch(e){console.error(e)}try{btlDraw()}catch(e){console.error(e)}try{prfDraw()}catch(e){console.error(e)}try{infoDraw()}catch(e){console.error(e)}try{slBtnVis()}catch(e){}}
$e('panel').onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;const d=b.dataset;try{AC.resume()}catch(_){}let sfx='ui';
 if(d.tab){UI.shop=1;UI.st='b';pk=null;tab=null;sel=null;gh=null;sfx='open'}
 else if(d.ok)buildGh();else if(d.no){cancelMv();sel=null;gh=null;hov=null}
 else if(d.x){pk=null;tab=null;dq=0;UI.desc=0;selOb=null}else if(d.desc)UI.desc=!UI.desc;else if(d.info){UI.info=1;sfx='open'}
 else if(d.ta){UI.train=1;sfx='open'}else if(d.lb){UI.lab=1;sfx='open'}
 else if(d.u&&pk){const t=TY[pk.t],c=upc(pk);if(pk.up>0||pk.lv>=lcap(pk)||S[t.cur]<c||!builders()||!reqOk(pk))sfx='deny';else{S[t.cur]-=c;pk.up=pk.ut=UT(pk);sfx=520}}
 else if(d.bst&&pk){boostMine(pk)}else if(d.ub&&pk)upBlock();else if(d.ua&&pk)upAllWalls();else if(d.wr&&pk)wrToggle();else if(d.wrot&&pk)wRot();else if(d.fix)sfx=fixAll()?520:'deny';else if(d.del&&pk)demolish();
 else if(d.rep&&pk){const c=rc(pk),k=TY[pk.t].cur||'g';if(canFix(pk)){S[k]-=c;pk.rpr=1;pk.up=pk.ut=RT(pk);sfx=520}else sfx='deny'}
 else if(d.mv&&pk){if(pk.t=='wall'&&WROW.on&&WROW.pk===pk)mvR=wRow(pk).map(w=>({w,ox:w.x-pk.x,oy:w.y-pk.y}));else mvR=null;mv=pk;mv.hp0=mv.hp;mv.hp=0;if(mvR)for(const r of mvR)if(r.w!==pk){r.w.hp0=r.w.hp;r.w.hp=0}sel=pk.t;gh={x:pk.x,y:pk.y};hov=[pk.x+TY[pk.t].s/2,pk.y+TY[pk.t].s/2];tab=null;pk=null}
 else if(d.m)findReal();else if(d.l)ranking();else if(d.a){btlOpen();sfx='open'}else if(d.rmv&&selOb){const o=selOb,d2=OBT[o.k];if(!o.up&&builders()&&S.e>=d2.c){S.e-=d2.c;o.up=o.ut=d2.t;sfx='chop'}else sfx='deny'}
 else if(d.p){pick=d.p;sfx='sel'}
 else if(d.qv){const c=[1,5,10,99],i=c.indexOf(A.qty[pick]||1);A.qty[pick]=c[(i+1)%4]}
 else if(d.gm){A.all=A.all===false;resetTg();sfx='sel'}else if(d.hf){A.hf=!A.hf;resetTg();sfx='sel'}
 else if(d.r){if(UI.rq){UI.rq=0;endAttack(1)}else{UI.rq=1;setTimeout(()=>{UI.rq=0;ui()},3000)}}
 else if(d.col&&pk){sfx=collect(pk)?'quiet':'deny'}
 else if(d.gf&&pk){gemFin(pk)}else if(d.gfo&&selOb){gemObs(selOb)}else if(d.ms){showMissions();sfx='open'}
 else if(d.out)logout();
 if(sfx!='quiet')snd(sfx);ui();save()};

/* ---------- toque en el mapa ---------- */
function tap(sx,sy){const[x,y]=w2t(sx,sy);
 if(mode=='v'){if(UI.shop||UI.train||UI.lab)return;if(sel){moveGh(x,y);return}
  const b=pickB(S.b,sx,sy);
  if(b&&TY[b.t].prod&&b.st>=LIMF(b)-1){b.st=0;snd(880);pk=null;tab=null;return}
  pk=b||null;tab=b?'info':null;UI.desc=0;dq=0;if(b)snd('sel')}
 else if(A&&A.on)deployAt(x,y)}

/* ---------- progreso sobre estructuras: círculo gris→verde + segundos ---------- */
function pring(cx,cy,f,txt){g.fillStyle='#000b';g.beginPath();g.arc(cx,cy,15,0,7);g.fill();g.strokeStyle='#8a8f98';g.lineWidth=5;g.beginPath();g.arc(cx,cy,10,0,7);g.stroke();
 g.strokeStyle='#6fe04a';g.beginPath();g.arc(cx,cy,10,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.max(.03,Math.min(1,f)));g.stroke();
 g.font='13px Lilita One,Arial Black,sans-serif';g.textAlign='center';g.lineWidth=3;g.strokeStyle='#000';g.fillStyle='#fff';g.strokeText(txt,cx,cy+25);g.fillText(txt,cx,cy+25)}
function drProgs(){if(mode!='v')return;drCrit();const seen=new Set();let rx=null,sc=null;
 for(const b of S.b){if(b.hp<=0)continue;if(b.t=='rax'&&!b.ruin&&!b.nb&&!rx)rx=b;if(b.t=='scout'&&!b.ruin&&!b.nb&&!sc)sc=b;
  if(b.up>0){const k=b.g||b;if(seen.has(k))continue;seen.add(k);const d=TY[b.t];let p;
   if(b.g){const gr=grp(b);p=P(Math.min(...gr.map(c=>c.x))+1,Math.min(...gr.map(c=>c.y))+1,d.h+24)}else p=P(b.x+d.s/2,b.y+d.s/2,d.h+(RFx[b.t]||0)+30);
   if(b.g||b.t=='wall')pring(p[0],p[1],1-b.up/(b.ut||b.up),Math.ceil(b.up)+'s')}}
 const one=(b,q,u)=>{if(!b||!q||!q.length)return;const j=q[0],f=1-(j.t==null?u(j):j.t)/u(j),p=P(b.x+TY[b.t].s/2,b.y+TY[b.t].s/2,TY[b.t].h+(RFx[b.t]||0)+30);pring(p[0],p[1],f,Math.ceil(qRem(q,b))+'s')};
 for(const b of S.b)if(b.t=='rax'&&!b.ruin&&!b.nb&&!(b.up>0)&&b.hp>0)one(b,b.q,j=>ttb(j.k,b));if(sc&&!(sc.up>0))one(sc,S.qs,()=>TS.sc)}

/* ---------- ataque ---------- */
function endAttack(sur){
 if(mode!='a'||!A.on)return;A.on=false;
 const real=!!E.real,p=pct(),s=stars(),dep=A.tr.reduce((a,t)=>a+((TR[t.k]&&TR[t.k].sp)||1),0),back=()=>{for(const k in A.army)S.army[k]+=A.army[k];for(const k in A.sp)S.sp[k]+=A.sp[k];for(const t of A.tr)if(t.hp>0&&t.k!='king'&&!t.sm)S.army[t.k]++;};
 const done=()=>cloudRun(()=>{closeMsg();mode='v';A=null;E=null;ui();save()});
 /* sin tropas desplegadas: se cancela sin penalización */
 if(!A.tr.length){back();flash('<b>Ataque cancelado</b><br><span class=sm>No desplegaste tropas, no pierdes nada.</span><br><br><button id="ok">Volver a la aldea</button>');$e('ok').onclick=done;return}
 const lt=lootNow(),lg=lt.g,le=lt.e;back();
 const g0=S.g,e0=S.e,tr0=S.tr;let gmN=0,gmP=0;if(s){S.lv++;gmN=reportWin()}gmP=(S.wins||0)%5;snd(s?990:200);
 const show=(note,sv)=>{const gg=Math.round(S.g-g0),ge=Math.round(S.e-e0),_m=mRep('loot',Math.max(0,gg+ge)),full=((sv&&sv.gold!=null?sv.gold:lg)>gg||(sv&&sv.elixir!=null?sv.elixir:le)>ge)?'<br><span style="font-size:.7rem;color:#ffd27a">Almacén lleno: parte del botín no cabe</span>':'';
  flash(`<b class="vti" style="color:${s?'#8fe36f':'#ff7a66'}">${sur&&!s?'Te rendiste':s?'¡Victoria!':'Derrota'}</b><div class="vst" data-s="${s}"><i class="vs${s>0?' on':''}"></i><i class="vs${s>1?' on':''}"></i><i class="vs${s>2?' on':''}"></i></div><span class="vrow">Destrucción: ${pctDisp(p)}%</span><br><span class="vrow">Botín: <b class="cu" data-v="${gg}">${gg}</b> 🪙 <b class="cu" data-v="${ge}">${ge}</b> 💧</span>${full}${gmN?'<br><span style="color:#7dffa8"><i class=gm></i> ¡+10 esmeraldas por 5 victorias!</span>':s?'<br><span class=sm><i class=gm></i> Victorias '+gmP+'/5 para +10 esmeraldas</span>':''}${real?`<br><span class="vrow">Trofeos: <b class="cu" data-p="1" data-v="${S.tr-tr0}">${S.tr-tr0}</b> ${ICO('ranking','🏆')}</span>`:''}${sv&&sv.shield?`<br><span class=sm>Escudo para el rival: ${sv.shield} min</span>`:''}${note?'<br><span style="font-size:.7rem;color:#ff9a8a">'+note+'</span>':''}<br><br><button id="ok">Volver a la aldea</button>`);
  $e('ok').onclick=done};
 if(!real){S.g=Math.min(cap.g(),S.g+lg);S.e=Math.min(cap.e(),S.e+le);show();return}
 flash('<b>Registrando ataque…</b><br><br><button id="ok">Volver a la aldea</button>');$e('ok').onclick=done;
 const id=E.real;sendRaid(id,dep,!!sur).then(r=>{if(mode!='a'||!A||A.on)return;if(r&&r.err)show('No se pudo registrar el ataque: '+r.err);else show('',r)})
}

/* ---------- pathfinding (Dijkstra) para que las tropas rodeen o rompan por el hueco ---------- */
function mkGrid(){const n=E.N,blk=new Uint8Array(n*n),wc=new Float32Array(n*n);
 for(const b of E.b){if(b.hp<=0)continue;const s=TY[b.t].s;for(let y=b.y;y<b.y+s;y++)for(let x=b.x;x<b.x+s;x++)if(x>=0&&y>=0&&x<n&&y<n){if(b.t=='wall')wc[y*n+x]=3+b.hp/90;else if(s<3||(x>b.x&&x<b.x+s-1&&y>b.y&&y<b.y+s-1))blk[y*n+x]=1}}E.grid={blk,wc}} /* v37: solo el núcleo de la estructura bloquea; la grama alrededor es transitable */
function dj(sx,sy,goal,wp=1){const n=E.N,{blk,wc}=E.grid,dist=new Float64Array(n*n).fill(1e9),prev=new Int32Array(n*n).fill(-1),h=[[0,sy*n+sx]];dist[sy*n+sx]=0;
 const push=it=>{h.push(it);let i=h.length-1;while(i>0){const p=(i-1)>>1;if(h[p][0]<=h[i][0])break;[h[p],h[i]]=[h[i],h[p]];i=p}};
 const pop=()=>{const r=h[0],l=h.pop();if(h.length){h[0]=l;let i=0;for(;;){const a=2*i+1,b=a+1;let m=i;if(a<h.length&&h[a][0]<h[m][0])m=a;if(b<h.length&&h[b][0]<h[m][0])m=b;if(m==i)break;[h[m],h[i]]=[h[i],h[m]];i=m}}return r};
 while(h.length){const[d,u]=pop();if(d>dist[u])continue;const ux=u%n,uy=(u/n)|0;
  if(goal(ux,uy)){const p=[];let c=u;while(c>=0){p.push([c%n,(c/n)|0]);c=prev[c]}return p.reverse()}
  for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){if(!dx&&!dy)continue;const x=ux+dx,y=uy+dy;if(x<0||y<0||x>=n||y>=n)continue;const v=y*n+x;if(blk[v]||(!wp&&wc[v]))continue;
   if(dx&&dy&&(blk[uy*n+x]||blk[y*n+ux]||wc[uy*n+x]||wc[y*n+ux]))continue;
   const nd=d+(dx&&dy?1.41:1)+wc[v];if(nd<dist[v]){dist[v]=nd;prev[v]=u;push([nd,v])}}}
 return null}
function repath(t,D){t.pt=.5+Math.random()*.3;const n=E.N,tg=t.tg,rr=Math.max(D.rg,.6),sx=Math.max(0,Math.min(n-1,Math.floor(t.x))),sy=Math.max(0,Math.min(n-1,Math.floor(t.y)));
 t.path=dj(sx,sy,(x,y)=>edge({x:x+.5,y:y+.5},tg)<=rr);if(t.path&&t.path.length)t.path.shift()}
function startJump(t,x,y){t.jump={t:.4,L:.4,sx:t.x,sy:t.y,tx:x,ty:y};snd('jump')}
function explode(x,y){const R=1.7;for(const b of E.b)if(b.hp>0&&edge({x,y},b)<R)b.hp-=b.t=='wall'?600:16;A.fx.push({k:'boom',x,y,t:.6,L:.6,R:1.4});A.sh=.4;snd('wbatk')}

function sim0(dt){
 A.time-=dt;if(A.sh>0)A.sh-=dt;
 for(const b of E.b)if(b.hp<=0&&!b.dd){b.dd=1;if(b.t=='wall')snd('wallbreak');if(b.t!='wall'){snd(b.t=='hall'?'bigcrumble':'crumble');const s=TY[b.t].s;A.fx.push({k:'boom',x:b.x+s/2,y:b.y+s/2,t:.5,L:.5,R:.8})}}
 const al=E.b.filter(b=>b.hp>0),nw=al.filter(b=>b.t!='wall'),ws=al.filter(b=>b.t=='wall');
 E.gt=(E.gt||0)-dt;if(E.gt<=0||!E.grid){mkGrid();E.gt=.3}
 for(const t of A.tr){if(t.hp<=0)continue;const D=TR[t.k];t.mv=0;if(t.sw>0)t.sw-=dt;t.rm=A.zones.some(z=>z.k=='rage'&&Math.hypot(t.x-z.x,t.y-z.y)<z.r)?1.5:1;if(t.ifr>0){t.ifr-=dt;t.rm=Math.max(t.rm,t.ifm||1.3)}
  if(t.kbf){const k=t.kbf;k.t-=dt;const p=Math.min(1,1-k.t/k.L),e=1-Math.pow(1-p,2);t.x=k.sx+(k.tx-k.sx)*e;t.y=k.sy+(k.ty-k.sy)*e;if(k.t<=0)t.kbf=null;continue}
  if(D.heal){healT(t,D,dt);continue}
  if(D.fly){flyT(t,D,dt);continue}
  if(t.jump){const j=t.jump;j.t-=dt;const p=Math.min(1,1-j.t/j.L);t.x=j.sx+(j.tx-j.sx)*p;t.y=j.sy+(j.ty-j.sy)*p;t.jh=Math.sin(p*Math.PI)*28;if(j.t<=0){t.sx=1;t.hp=0;t.jh=0;explode(t.x,t.y,t)}continue}
  if(!t.tg||t.tg.hp<=0){acquire(t,D,al,ws)}
  if(!t.tg)continue;let d=edge(t,t.tg);
  if(t.bt!==t.tg){t.bt=t.tg;t.bd=null;t.sk=0}
  if(d>D.rg&&!D.w){if(t.bd==null||d<t.bd-.12){t.bd=d;t.sk=0}else{t.sk=(t.sk||0)+dt;if(t.sk>2.2){t.sk=0;t.bd=null;stuckRe(t,D,al,ws);if(!t.tg)continue;d=edge(t,t.tg)}}}else{t.bd=null;t.sk=0}
  if(D.w&&d<1.3){const c=ctr(t.tg);startJump(t,c[0],c[1]);continue}
  let hit=null;
  if(d>D.rg){if(!t.path||(t.pt-=dt)<=0)repath(t,D);
   const wp=t.path&&t.path[0];let tx,ty;if(wp){tx=wp[0]+.5;ty=wp[1]+.5}else{[tx,ty]=ctr(t.tg)}
   const dx=tx-t.x,dy=ty-t.y,dl=Math.hypot(dx,dy)||.01,w=wallAt(wp?tx:t.x+dx/dl*.6,wp?ty:t.y+dy/dl*.6);
   if(w&&(wp?dl<1.25:true)){if(D.w){startJump(t,tx,ty);continue}hit=w}
   else{const st=Math.min(dl,D.v*t.rm*dt);t.x+=dx/dl*st;t.y+=dy/dl*st;t.mv=1;if(wp&&dl<=st+.06)t.path.shift()}}
  else hit=t.tg;
  if(hit){t.cd-=dt;if(t.cd<=0){t.cd=D.rt;const _hf=()=>{if(!D.ar){const hq=ctr(hit);A.fx.push({k:'imp',x:hq[0],y:hq[1],t:.28,L:.28,v:t.k})}hit.hp-=(t.dm||D.dmg)*t.rm*(D.bn&&D.pf.includes(hit.t)?D.bn:1);if(D.ar){const hc=ctr(hit);for(const b of E.b)if(b!==hit&&b.hp>0&&edge({x:hc[0],y:hc[1]},b)<D.ar)b.hp-=(t.dm||D.dmg)*t.rm;A.fx.push({k:'boom',x:hc[0],y:hc[1],t:.35,L:.35,R:Math.max(.55,D.ar*.5)})}};if(D.rg<1)_hf();else A.pend.push({t:.3,f:_hf});if(D.rg<1){t.sw=.25;t.at=performance.now();t.tx=ctr(hit);A.shots.push({k:'m',a:[t.x,t.y],b:ctr(hit),l:.25,L:.25})}else{A.shots.push({k:'ar',tk:t.k,a:[t.x,t.y],b:ctr(hit),l:.3,L:.3});if(t.k=='arch'){t.at=performance.now();t.tx=ctr(hit)}};snd(HS(t))}}}
 for(const c of nw){const d=TY[c.t];if(!d.rg)continue;c.cd-=dt;if(c.cd>0)continue;
  const[cx,cy]=ctr(c),R=rgOf(c);let tg=null,bd=1e9;
  for(const t of A.tr){if(t.hp<=0||t.jump||(t.fly&&(c.t=='cannon'||c.t=='mortar'))||(!t.fly&&c.t=='rocket'))continue;const q=Math.hypot(t.x-cx,t.y-cy);if(q<=R&&q>=(d.mn||0)&&q<bd){bd=q;tg=t}}
  if(tg){c.cd=rtOf(c);const dm=dmgOf(c);
   if(d.sp){const tgt=tg,per=dm/MOR_SHELLS;for(let i=0;i<MOR_SHELLS;i++)A.pend.push({t:i*MOR_GAP,f:()=>{if(c.hp<=0)return;const tx=tgt.hp>0?tgt.x:(tgt.lx||tgt.x),ty=tgt.hp>0?tgt.y:(tgt.ly||tgt.y);tgt.lx=tx;tgt.ly=ty;const L=.9;A.shots.push({k:'mo',a:[cx,cy],b:[tx,ty],l:L,L,z:18});A.pend.push({t:L,f:()=>mortarHit(tx,ty,d.sp,per)});A.fx.push({k:'puff',x:cx,y:cy,z:TY[c.t].h,t:.4,L:.4});snd('mortar')}})}
   else if(c.t=='tower'){tg.hp-=dm;A.shots.push({k:'ar',a:[cx,cy],b:[tg.x,tg.y],l:.32,L:.32,z:46,H:36});snd('arrow')}
   else{tg.hp-=dm;A.shots.push({k:'cb',a:[cx,cy],b:[tg.x,tg.y],l:.15,L:.15,z:22});A.fx.push({k:'puff',x:cx,y:cy,z:TY[c.t].h,t:.3,L:.3});snd('cball')}}}
 trapTick();
 A.zones=A.zones.filter(z=>{z.t-=dt;if(z.k=='heal')for(const t of A.tr)if(t.hp>0&&Math.hypot(t.x-z.x,t.y-z.y)<z.r)t.hp=Math.min(t.max,t.hp+SP.heal.hl*dt);return z.t>0});
 A.shots=A.shots.filter(s=>(s.l-=dt)>0);A.fx=A.fx.filter(f=>(f.t-=dt)>0);
 for(const p of A.pend)p.t-=dt;const du=A.pend.filter(p=>p.t<=0);A.pend=A.pend.filter(p=>p.t>0);du.forEach(p=>p.f());
 if(pct()>=1||(A.all===false&&!E.b.some(b=>b.hp>0&&b.t!='wall'&&!TY[b.t].trap&&tierOf(b)<99))||A.time<=0||(!A.tr.some(t=>t.hp>0&&!TR[t.k].heal)&&!Object.keys(TR).some(k=>!TR[k].heal&&A.army[k]>0)&&!A.army.king))endAttack()}

/* ---------- hechizos con animación y sonido ---------- */
function castSp(k,x,y){const s=SP[k];
 if(k=='zap'){for(const b of E.b){const c=ctr(b);if(b.hp>0&&Math.hypot(c[0]-x,c[1]-y)<s.r)b.hp-=s.dmg}
  const pts=[];for(let i=0;i<9;i++)pts.push((Math.random()-.5)*26);A.fx.push({k:'zap',x,y,t:.5,L:.5,pts},{k:'ring',x,y,r:s.r,t:.45,L:.45,c:'200,230,255'});A.sh=.25;snd('zap')}
 else{A.zones.push({x,y,r:s.r,k,t:s.t});A.fx.push(k=='heal'?{k:'hpulse',x,y,r:s.r,t:1,L:1}:{k:'ring',x,y,r:s.r,t:.5,L:.5,c:'255,120,90'});snd(k)}}

/* ---------- proyectiles ---------- */
function drShot(s,a,b){const p=Math.min(1,Math.max(0,1-s.l/s.L));
 if(s.k=='m'){const an=Math.atan2(b[1]-a[1],b[0]-a[0]),cx=b[0]-Math.cos(an)*6,cy=b[1]-8-Math.sin(an)*6;g.lineCap='round';
  g.strokeStyle='rgba(255,255,255,'+(1-p*.8)+')';g.lineWidth=5;g.beginPath();g.arc(cx,cy,15,an-1.25,an-1.25+2.5*Math.min(1,p*1.6));g.stroke();
  g.strokeStyle='rgba(255,220,120,'+(1-p)+')';g.lineWidth=2;g.beginPath();g.arc(cx,cy,10,an-1,an-1+2*Math.min(1,p*1.6));g.stroke();g.lineCap='butt'}
 else if(s.k=='ar'){const H=s.H||26,dx=b[0]-a[0],x=a[0]+dx*p,y=a[1]+(b[1]-a[1])*p-Math.sin(p*Math.PI)*H-6,an=Math.atan2((b[1]-a[1])-Math.cos(p*Math.PI)*Math.PI*H,dx);
  g.save();g.translate(x,y);g.rotate(an);g.strokeStyle='#8a5a2b';g.lineWidth=2.5;g.beginPath();g.moveTo(-9,0);g.lineTo(7,0);g.stroke();
  g.fillStyle='#e8eef5';g.beginPath();g.moveTo(11,0);g.lineTo(5,-3.5);g.lineTo(5,3.5);g.fill();g.fillStyle='#e04a4a';g.beginPath();g.moveTo(-9,0);g.lineTo(-13,-3);g.lineTo(-6,0);g.lineTo(-13,3);g.fill();g.restore()}
 else if(s.k=='cb'){const x=a[0]+(b[0]-a[0])*p,y=a[1]+(b[1]-a[1])*p-Math.sin(p*Math.PI)*8;
  g.strokeStyle='rgba(200,200,200,.5)';g.lineWidth=3;g.beginPath();g.moveTo(a[0]+(b[0]-a[0])*Math.max(0,p-.25),a[1]+(b[1]-a[1])*Math.max(0,p-.25));g.lineTo(x,y);g.stroke();
  g.fillStyle='#1d1d1d';g.beginPath();g.arc(x,y,5,0,7);g.fill();g.fillStyle='#fff8';g.beginPath();g.arc(x-1.5,y-1.5,1.6,0,7);g.fill()}
 else if(s.k=='mo'){const gx=a[0]+(b[0]-a[0])*p,gy=a[1]+(b[1]-a[1])*p,y=gy-Math.sin(p*Math.PI)*95;
  g.fillStyle='#0004';g.beginPath();g.ellipse(gx,gy+6,7,3,0,0,7);g.fill();
  g.fillStyle='#262626';g.beginPath();g.arc(gx,y,7,0,7);g.fill();g.fillStyle='#fff6';g.beginPath();g.arc(gx-2,y-2,2,0,7);g.fill();
  g.fillStyle=(performance.now()/90|0)%2?'#ffd24a':'#ff7a1a';g.beginPath();g.arc(gx+3,y-8,3,0,7);g.fill()}}

/* ---------- efectos (explosión, rayo, curación, furia, humo) ---------- */
function drFx(){if(mode!='a'||!A)return;const now=performance.now();fxTrim();try{drMarks(now)}catch(e){}
 for(const z of A.zones){const[p,q]=P(z.x,z.y),Rx=z.r*TW*ER(),Ry=z.r*TH*ER(),ph=(now/900)%1;
  if(z.k=='heal'){for(let i=0;i<2;i++){const u=(ph+i*.5)%1;g.strokeStyle=`rgba(140,255,140,${1-u})`;g.lineWidth=3;g.beginPath();g.ellipse(p,q,Rx*u,Ry*u,0,0,7);g.stroke()}
   g.fillStyle='#caffca';g.font='16px Lilita One,Arial Black,sans-serif';for(let i=0;i<5;i++){const u=(ph+i*.2)%1;g.globalAlpha=1-u;g.fillText('+',p+Math.cos(i*2.4)*Rx*.7,q-u*46+Math.sin(i*2.4)*Ry*.6)}g.globalAlpha=1}
  else{const u=.5+.5*Math.sin(now/180);g.strokeStyle=`rgba(255,90,60,${.35+.4*u})`;g.lineWidth=4;g.beginPath();g.ellipse(p,q,Rx*(.9+.1*u),Ry*(.9+.1*u),0,0,7);g.stroke();
   g.fillStyle='#ff8a6a';g.font='14px Lilita One,Arial Black,sans-serif';for(let i=0;i<4;i++){const v=(ph+i*.25)%1;g.globalAlpha=1-v;g.fillText('▲',p+Math.cos(i*1.7)*Rx*.6,q-v*40+Math.sin(i*1.7)*Ry*.5)}g.globalAlpha=1}}
 for(const f of A.fx){const u=1-f.t/f.L;
  if(f.k=='boom'&&!window.BX82){const[p,q]=P(f.x,f.y,6),r=(f.R||1)*(10+38*u);g.globalAlpha=Math.max(0,1-u);
   g.fillStyle='#ffb347';g.beginPath();g.arc(p,q,r,0,7);g.fill();g.fillStyle='#ff5a1f';g.beginPath();g.arc(p,q,r*.66,0,7);g.fill();g.fillStyle='#fff3b0';g.beginPath();g.arc(p,q,r*.3,0,7);g.fill();
   g.strokeStyle='#ffd27a';g.lineWidth=3;for(let i=0;i<10;i++){const an=i*.628+f.x,d=r*(1.1+u*.9);g.beginPath();g.moveTo(p+Math.cos(an)*r,q+Math.sin(an)*r*.7);g.lineTo(p+Math.cos(an)*d,q+Math.sin(an)*d*.7-u*22);g.stroke()}
   g.fillStyle='rgba(60,60,60,.6)';for(let i=0;i<4;i++){g.beginPath();g.arc(p+Math.cos(i*1.6)*r*.9,q-u*30-i*3,r*.35,0,7);g.fill()}g.globalAlpha=1}
  else if(f.k=='puff'){const[p,q]=P(f.x,f.y,f.z||20);g.globalAlpha=Math.max(0,1-u);g.fillStyle='#ddd';g.beginPath();g.arc(p,q-u*12,5+u*12,0,7);g.fill();g.globalAlpha=1}
  else if(f.k=='ring'){const[p,q]=P(f.x,f.y);g.strokeStyle=`rgba(${f.c},${1-u})`;g.lineWidth=4;g.beginPath();g.ellipse(p,q,f.r*TW*ER()*u,f.r*TH*ER()*u,0,0,7);g.stroke()}
  else if(f.k=='zap'){const[p,q]=P(f.x,f.y);g.globalAlpha=Math.max(0,1-u);
   if(u<.6){for(const w of[[9,'#7fd0ff'],[4,'#ffffff']]){g.strokeStyle=w[1];g.lineWidth=w[0]*(1-u);g.beginPath();g.moveTo(p,q-300);f.pts.forEach((o,i)=>g.lineTo(p+o,q-300+(i+1)*300/f.pts.length));g.lineTo(p,q);g.stroke()}}
   g.fillStyle='rgba(255,255,255,.85)';g.beginPath();g.arc(p,q,12+30*u,0,7);g.fill();g.globalAlpha=1}}}

/* ---------- tropa con salto (zapador) ---------- */
function drTOld(t){let[x,y]=P(t.x,t.y);if(t.sw>0&&t.tx){const q=P(t.tx[0],t.tx[1]),dx=q[0]-x,dy=q[1]-y,dl=Math.hypot(dx,dy)||1,k=Math.sin((1-t.sw/.25)*Math.PI)*9;x+=dx/dl*k;y+=dy/dl*k}
 const jh=t.jh||0,c=t.k=='giant'||t.k=='king'||t.k=='loon'?3:2,m=t.mv?(performance.now()/120|0)%2*2:0;
 g.fillStyle='#0006';g.beginPath();g.ellipse(x,y,7*c*(1-jh/90),(VT?4:3)*c*(1-jh/90),0,0,7);g.fill();
 if(t.k=='loon'){drLoon(t,x,y);if(t.hp<t.max)bar(x,y-62,26,t.hp/t.max);return}spr(t.k=='wb'?IC.bomb:TT,x,y-m-jh,TP[t.k],c);if(t.k=='barb'||t.k=='king')drSword(t,x,y-m-jh,c);
 trOv(t,x,y-m-jh,c);if(t.k=='wb'){g.fillStyle=(performance.now()/80|0)%2?'#ffd24a':'#ff5a1f';g.beginPath();g.arc(x+4,y-m-jh-26,3,0,7);g.fill()}
 if(t.k=='arch'){g.fillStyle='#a87444';g.fillRect(x+8,y-24,2,16)}if(t.k=='king'){g.fillStyle='#f5c542';g.fillRect(x-9,y-40,18,7)}
 if(t.hp<t.max)bar(x,y-(t.k=='giant'||t.k=='king'?46:32)-jh,20,t.hp/t.max)}

/* ================= v4: obstáculos, choza, tutorial, música, sfx ================= */
let selOb=null;UI.om=0;const POP=[];
const nHut=()=>nBld();
BT.hut=8;
/* ---------- volumen ---------- */
let MV=.5,SV=.8;try{const a=localStorage.getItem('ccmv'),b=localStorage.getItem('ccsv');if(a!=null)MV=+a;if(b!=null)SV=+b}catch(e){}
let sfxG=null,musG=null;
function OUT(){if(!sfxG){sfxG=AC.createGain();sfxG.gain.value=SV;sfxG.connect(AC.destination)}return sfxG}
function MOUT(){if(!musG){musG=AC.createGain();musG.gain.value=MV*.6;musG.connect(AC.destination)}return musG}

/* ---------- sfx modernos ---------- */
Object.assign(SFX,{
 520:()=>{tone(170,.09,'square',.13,0,80);noise(.07,.22,1800);tone(950,.06,'triangle',.05,.05)},
 500:()=>tone(720,.07,'sine',.12,0,430),660:()=>{tone(988,.1,'triangle',.1);tone(1319,.16,'triangle',.09,.07)},
 990:()=>{[523,659,784,1047,784,1047,1319].forEach((f,i)=>tone(f,.3,'triangle',.11,i*.1));noise(.4,.08,5000,.5,'highpass')},
 200:()=>{[392,349,311,262].forEach((f,i)=>tone(f,.4,'sawtooth',.07,i*.17))},
 coin:()=>{[1319,1568,2093].forEach((f,i)=>tone(f,.13,'triangle',.07,i*.045));noise(.05,.04,6000,0,'highpass')},
 drop:()=>{tone(520,.15,'sine',.16,0,190);tone(920,.1,'sine',.07,.05,420)},
 horn:()=>{tone(196,.55,'sawtooth',.09,0,230);tone(294,.55,'sawtooth',.06,0,320);tone(392,.4,'square',.03,.15)},
 star:()=>{tone(880,.12,'triangle',.1);tone(1320,.28,'triangle',.1,.08);noise(.1,.04,6000,.08,'highpass')},
 chop:()=>{noise(.07,.22,2200);tone(140,.1,'square',.1,0,60)},crunch:()=>{noise(.3,.3,1400);tone(100,.25,'sine',.2,0,40)},
 tut:()=>{tone(880,.08,'sine',.09);tone(1175,.14,'sine',.09,.07)},notif:()=>{tone(740,.1,'triangle',.1);tone(988,.18,'triangle',.1,.1)}});

/* ---------- música (procedural, suave) ---------- */
const NF=n=>440*Math.pow(2,(n-69)/12);let NB=null;
function mt(n,dur,ty,v,when,att=.01){const o=AC.createOscillator(),a=AC.createGain();o.type=ty;o.frequency.value=NF(n);a.gain.setValueAtTime(.0001,when);a.gain.linearRampToValueAtTime(v,when+att);a.gain.exponentialRampToValueAtTime(.0001,when+dur);o.connect(a);a.connect(MOUT());o.start(when);o.stop(when+dur+.05)}
function mn(dur,v,fq,when,ty){if(!NB){NB=AC.createBuffer(1,AC.sampleRate,AC.sampleRate);const c=NB.getChannelData(0);for(let i=0;i<c.length;i++)c[i]=Math.random()*2-1}const s=AC.createBufferSource(),f=AC.createBiquadFilter(),a=AC.createGain();s.buffer=NB;f.type=ty||'highpass';f.frequency.value=fq;a.gain.setValueAtTime(v,when);a.gain.exponentialRampToValueAtTime(.0001,when+dur);s.connect(f);f.connect(a);a.connect(MOUT());s.start(when,Math.random()*.5,dur+.05)}
const PV=[[50,57,62,66],[47,54,59,62],[43,50,55,59],[45,52,57,61]],PB=[[45,52,57,60],[41,48,53,57],[43,50,55,59],[40,47,52,56]];
const SCV=[74,76,78,81,83,86],MOT=[[0,2,3,2],[3,2,1,2],[2,3,4,3],[1,2,3,5]],MS=[0,3,5,6];
const MUS={t:0,s:0,on:0};
function musStep(s,w,bat){const e=bat?.25:.375,bar=s>>3,i=s&7,ch=(bat?PB:PV)[bar%4];
 if(i==0)ch.slice(1).forEach(n=>mt(n+12,e*7.5,'sine',bat?.035:.05,w,.3));
 if(i==0||i==4)mt(ch[0],e*3.5,'triangle',.12,w,.02);
 if(!bat){mt(ch[1+(i%3)]+12+(i>3?12:0),.9,'sine',.028,w,.02);const k=MS.indexOf(i);if(k>=0&&((bar>>1)%2==0||k%2==0)){mt(SCV[MOT[(bar>>1)%4][k]%SCV.length],.7,'triangle',.05,w,.015);mt(SCV[MOT[(bar>>1)%4][k]%SCV.length]-12,.9,'sine',.02,w+e*.75,.02)}}
 else{if(i==0||i==4||i==7){mt(36,.18,'sine',.22,w,.005)}if(i==2||i==6)mn(.12,.09,1800,w,'bandpass');mn(.04,.025,7000,w);if([0,3,5].includes(i))mt(ch[1]+24,.2,'square',.018,w,.01)}}
function musTick(){if(!AC||!MUS.on||MUTE||MV<=.001||document.hidden){if(AC&&MUS.on)MUS.t=Math.max(MUS.t,AC.currentTime+.1);return}
 const bat=mode=='a',e=bat?.25:.375;if(MUS.t<AC.currentTime)MUS.t=AC.currentTime+.05;
 while(MUS.t<AC.currentTime+.5){musStep(MUS.s,MUS.t,bat);MUS.t+=e;MUS.s++}}
function startMusic(){if(!AC||MUS.on)return;try{AC.resume()}catch(_){}MUS.on=1;MUS.t=AC.currentTime+.1}
addEventListener('pointerdown',startMusic);setInterval(()=>musTick(),150);

/* ---------- menú con volúmenes ---------- */
function menuDraw(){menuEl.innerHTML=`<div class=mbox><div class=row><b>Menú</b><button data-m2=close>✕</button></div>
<label class=sm>🎵 Música ${Math.round(MV*100)}%<input type=range min=0 max=100 value=${Math.round(MV*100)} data-vol=mus></label>
<label class=sm>🔊 Efectos ${Math.round(SV*100)}%<input type=range min=0 max=100 value=${Math.round(SV*100)} data-vol=sfx></label>
<div class=sm>🖼 Gráficos</div><div class=row>${[['low','Bajo'],['mid','Medio'],['high','Alto']].map(([k,n])=>`<button data-g=${k} style="${GFX==k?'outline:3px solid #ffe27a;outline-offset:-3px;':''}">${n}</button>`).join('')}</div><div class=sm>⏱ FPS máximos</div><div class=row>${[[20,'20'],[30,'30'],[60,'60'],[0,'Sin límite']].map(([k,n])=>`<button data-fps=${k} style="${GFPS==k?'outline:3px solid #ffe27a;outline-offset:-3px;':''}">${n}</button>`).join('')}</div><div class=hint>Bajo o Medio mejoran el rendimiento en móviles lentos. Alto y Sin límite son la calidad completa.</div><button data-m2=snd>${MUTE?'🔇 Sonido: OFF':'🔊 Sonido: ON'}</button><button data-m2=fs>⛶ Pantalla completa</button><button data-m2=view>${VT?'🏰 Vista isométrica':'🧭 Vista cenital'}</button><button data-m2=land>${FORCE?'🔓 Rotación automática':'🔒 Bloquear horizontal'}</button><button data-m2=tut>🎓 Repetir tutorial</button>${ONL?'<button data-m2=out>🚪 Cerrar sesión</button>':''}<div class=hint>Versión ${BUILD}</div></div>`}
menuEl.addEventListener('input',e=>{const r=e.target.closest('[data-vol]');if(!r)return;const v=r.value/100,mus=r.dataset.vol=='mus';
 if(mus){MV=v;if(musG)musG.gain.value=MV*.6;try{localStorage.setItem('ccmv',v)}catch(_){}}else{SV=v;if(sfxG)sfxG.gain.value=SV;try{localStorage.setItem('ccsv',v)}catch(_){}snd('coin')}
 r.parentNode.firstChild.nodeValue=(mus?'🎵 Música ':'🔊 Efectos ')+Math.round(v*100)+'%';startMusic()});
menuEl.addEventListener('click',e=>{if(e.target.closest('[data-m2=tut]')){S.tut=0;tutE=-1;if(S.tutRew==null)S.tutRew=0;menuEl.style.display='none';UI.shop=0;UI.train=0}});

/* ---------- obstáculos ---------- */
const OBT={tree:{n:'Árbol',sx:1,sy:1,c:90,t:6,e:'🌳',w:55},pine:{n:'Árbol grande',sx:2,sy:2,c:260,t:14,e:'🌲',w:160},rock:{n:'Roca',sx:1,sy:1,c:110,t:8,e:'🪨',w:70},boulder:{n:'Peñasco',sx:2,sy:2,c:420,t:18,e:'⛰️',w:250},log:{n:'Troncos',sx:2,sy:1,c:140,t:9,e:'🪵',w:85},bush:{n:'Arbusto',sx:1,sy:1,c:40,t:4,e:'🌿',w:25}};
const RK=['...ssss...','..sssSSs..','.sssSSSSS.','ssSSSSSSSS','sSSSSkSSSS','SSSSSSSSkS','.kkkkkkkk.'],LG=['..bbbbbbbbbbbb..','.bBBbbbbbbbbbBb.','bBttBbbbbbbbBttB','bBttBbbbbbbbBttB','.bBBbbbbbbbbBBb.','..bbbbbbbbbbbb..'],BU=['..GGG..','.GGHGG.','GGGGGGG','GHGrGHG','.GGGGG.','..bbb..'];
function genOb(){let sd=12345;const rnd=()=>(sd=(sd*1664525+1013904223)>>>0)/4294967296,L=[],ks=['tree','tree','bush','rock','bush','log','tree','pine','boulder','rock'];
 const okp=(x,y,w,h)=>x+w<=50&&y+h<=50&&!S.b.some(b=>{const s=TY[b.t].s;return x<b.x+s+1&&x+w>b.x-1&&y<b.y+s+1&&y+h>b.y-1})&&!L.some(o=>x<o.x+o.sx+1&&x+w>o.x-1&&y<o.y+o.sy+1&&y+h>o.y-1);
 for(let k=0;k<900&&L.length<56;k++){const kk=ks[rnd()*ks.length|0],d=OBT[kk],x=rnd()*50|0,y=rnd()*50|0,inner=x>=15&&x<35&&y>=15&&y<35;if(inner&&rnd()<.88)continue;if(okp(x,y,d.sx,d.sy))L.push({k:kk,x,y,sx:d.sx,sy:d.sy,s:Math.max(d.sx,d.sy),up:0,ut:0})}
 return L}

/* ---- troncos y rocas en isométrico (prismas con caras sombreadas) ---- */
function logDraw(o){
 const cyl=(x0,x1,cy,z0,rg,rz)=>{const m=12,segs=[];for(let i=0;i<m;i++){const a0=i*Math.PI*2/m,a1=(i+1)*Math.PI*2/m,am=(a0+a1)/2;segs.push({a0,a1,am,nv:Math.cos(am)+Math.sin(am)})}
  const pt=(x,a,k=1)=>P(x,cy+Math.cos(a)*rg*k,z0+rz+Math.sin(a)*rz*k);
  segs.filter(s=>s.nv>-.35).sort((p,q)=>p.nv-q.nv).forEach(s=>{const b=Math.max(.5,.62+.42*(.8*Math.cos(s.am)+.6*Math.sin(s.am)));
   poly([pt(x0,s.a0),pt(x1,s.a0),pt(x1,s.a1),pt(x0,s.a1)],sh(s.nv>.3&&s.am%2>0&&(Math.round(s.am*10)%2)?'#7a5230':'#6b4626',b));
   g.strokeStyle='rgba(30,15,5,.35)';g.lineWidth=1.2;g.beginPath();g.moveTo(...pt(x0,s.a0));g.lineTo(...pt(x1,s.a0));g.stroke()});
  const cap=k=>{const a=[];for(let i=0;i<m;i++)a.push(pt(x1,i*Math.PI*2/m,k));return a};
  poly(cap(1),'#cf9d56');g.strokeStyle='#3a2210';g.lineWidth=1.6;g.beginPath();cap(1).forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.stroke();
  poly(cap(.62),'#e2b872');g.strokeStyle='#9a6a30';g.lineWidth=1.2;g.beginPath();cap(.62).forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.stroke();
  poly(cap(.25),'#b98543')};
 const x=o.x;cyl(x+.1,x+1.9,o.y+.27,0,.2,8);cyl(x+.22,x+1.75,o.y+.5,9,.19,7.5);cyl(x+.06,x+1.94,o.y+.73,0,.2,8)}
function rockDraw(o){
 const big=o.k=='boulder',cx=o.x+o.sx/2,cy=o.y+o.sy/2,n=big?9:7;let sd=((o.x+1)*73856093^(o.y+1)*19349663)>>>0;const rnd=()=>(sd=(sd*1664525+1013904223)>>>0)/4294967296;
 const R=big?.9:.42,H=big?21:10,jit=[],ph=rnd()*6.28;for(let i=0;i<n;i++)jit.push(.8+rnd()*.32);const hj=.85+rnd()*.3;
 const ring=(s,z)=>jit.map((j,i)=>{const t=ph+i*Math.PI*2/n;return{p:P(cx+Math.cos(t)*R*s*j,cy+Math.sin(t)*R*s*j,z*hj),t}});
 const r0=ring(1,0),r1=ring(.94,H*.55),r2=ring(.58,H),L=[-.5,.8];
 const faces=[];for(let i=0;i<n;i++){const k=(i+1)%n,t=(r0[i].t+r0[k].t)/2,nx=Math.cos(t),ny=Math.sin(t),nv=nx+ny;if(nv<-.3)continue;const b=.62+.5*(nx*L[0]+ny*L[1]);
  faces.push({nv,pts:[r0[i].p,r0[k].p,r1[k].p,r1[i].p],c:sh('#8c929b',Math.max(.5,b))});faces.push({nv:nv+.01,pts:[r1[i].p,r1[k].p,r2[k].p,r2[i].p],c:sh('#a3a9b2',Math.max(.6,b+.2))})}
 faces.sort((a,b)=>a.nv-b.nv);g.strokeStyle='rgba(20,22,30,.45)';g.lineWidth=1.4;
 for(const f of faces){poly(f.pts,f.c);g.beginPath();f.pts.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.stroke()}
 poly(r2.map(r=>r.p),'#b9bfc7');g.beginPath();r2.forEach((r,i)=>i?g.lineTo(r.p[0],r.p[1]):g.moveTo(r.p[0],r.p[1]));g.closePath();g.stroke();
 const[mx,my]=P(cx-R*.12,cy-R*.1,H*hj+.5);g.fillStyle='#6f9a54';g.beginPath();g.ellipse(mx,my,big?9:4,big?4:2,0,0,7);g.fill()}
function drOb(o){const[x,y]=P(o.x+o.sx/2,o.y+o.sy/2);g.fillStyle='#0003';g.beginPath();g.ellipse(x,y+2,o.sx*TW*.38,o.sy*TH*.38,0,0,7);g.fill();
 if(o.k=='log')logDraw(o);else if(o.k=='rock'||o.k=='boulder')rockDraw(o);else drObTree(o,x,y)
 if(o===selOb&&mode=='v'){g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.ellipse(x,y,o.sx*TW*.45,o.sy*TH*.45,0,0,7);g.stroke()}}
function obAt(sx,sy){for(const dy of[0,14,26]){const[x,y]=w2t(sx,sy+dy*cam.z);for(const o of(S.ob||[]).filter(o=>o.x+o.sx<=N&&o.y+o.sy<=N).sort((a,b)=>b.x+b.y-a.x-a.y))if(x>=o.x&&x<o.x+o.sx&&y>=o.y&&y<o.y+o.sy)return o}return null}
function obCard(){const o=selOb,d=OBT[o.k];let h=`<div class=card><div class=ch><span class=ci>${d.e}</span><div><b>${d.n}</b><br><span class=sm>Estorba para construir</span></div><button class=cx data-x=1>✕</button></div>`;
 if(o.up>0)h+=`<div class=sm>⛏ Limpiando… ${lvT('ob',fmtT(o.up))}</div>`+lvP('obp',1-o.up/o.ut)+`<div class=dock>${gbtn('data-gfo=1',o.up)}</div>`;
 else{const why=!builders()?'Sin constructor libre':S.e<d.c?'Falta elixir':'';h+=`<div class=dock><button class="db okb" data-rmv=1 ${why?'disabled':''}><i>⛏</i>Quitar<small>${d.c} 💧 · ⏱ ${fmtT(d.t)}</small><small class=up>Recompensa +${d.w} 🪙</small>${why?'<small class=bad>'+why+'</small>':''}</button></div>`}
 return h+'</div>'}

/* ---------- choza de constructores ---------- */
function hutList(){const jobs=[...S.b.filter(b=>bz(b)).map((b,i)=>({n:TY[b.t].n+(b.nb?' (nuevo)':b.rpr?' (reparando)':' → nv '+(b.lv+1)),up:b.up,ut:b.ut||b.up,id:'j'+i})),...(S.ob||[]).filter(o=>o.up>0).map((o,i)=>({n:'Limpiar '+OBT[o.k].n,up:o.up,ut:o.ut,id:'o'+i}))],tot=nHut();
 let h=`<div class=sm>Constructores libres ${builders()}/${tot}</div>`;for(let i=0;i<Math.min(jobs.length,tot);i++){const j=jobs[i];h+=`<div class=sm>🔨 ${j.n} · ${lvT(j.id,fmtT(j.up))}</div>`+lvP(j.id,1-j.up/j.ut)}if(tot>jobs.length)h+=`<div class=sm>💤 ${tot-jobs.length} libre${tot-jobs.length>1?'s':''}</div>`;return h}

/* ---------- inicialización / migración de partidas ---------- */
function ensureS(){if(!S||!S.b)return;const old=S.b.length>4||S.lv>0;
 if(!S.b.some(b=>b.t=='hut')){let n=0;for(let y=2;y<N-2&&n<2;y+=2)for(let x=2;x<N-2&&n<2;x+=2)if(free(S.b,x,y,2)&&(x<8||y<8||x>14)){S.b.push(mk('hut',x,y));n++}}
 if(!S.ob)S.ob=genOb();if(S.tut==null)S.tut=old?99:0;if(S.shield==null)S.shield=0;if(S.gem==null)S.gem=0;if(S.wins==null)S.wins=0;
 if(S.q&&S.q.length){const r=S.b.find(b=>b.t=='rax'&&!b.nb);if(r){r.q=(r.q||[]).concat(S.q);S.q=[]}else{for(const j of S.q)S.e+=j.n*TR[j.k].cost;S.q=[]}}
 if(!S.tutRew&&S.tut>=TUTS.length)S.tutRew=1;
 if(S.prk!=1){for(const b of S.b)if(b.t=='rocket'){b.lv=Math.max(1,Math.min(8,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max)}S.prk=1} if(S.plb!=1){for(const b of S.b)if(b.t=='lab'){b.lv=Math.max(1,Math.min(8,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max)}S.plb=1}
 if(S.pr!=1){for(const b of S.b)if(b.t=='mortar'){b.lv=Math.max(1,Math.min(8,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max)}S.pr=1}
 if(S.pk!=1){for(const b of S.b){if(b.t!='camp')continue;b.lv=Math.max(1,Math.min(8,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max);
  const oth=S.b.filter(o=>o!==b),ok=(x,y)=>free(oth,x,y,4)&&!(S.ob||[]).some(o=>x<o.x+o.sx&&x+4>o.x&&y<o.y+o.sy&&y+4>o.y);
  if(!ok(b.x,b.y)){let f=0;for(let r=1;r<N&&!f;r++)for(let dy=-r;dy<=r&&!f;dy++)for(let dx=-r;dx<=r&&!f;dx++){if(Math.max(Math.abs(dx),Math.abs(dy))!=r)continue;if(ok(b.x+dx,b.y+dy)){b.x+=dx;b.y+=dy;f=1}}}}S.pk=1}
 if(S.pt!=1){for(const b of S.b)if(b.t=='tower'){b.lv=Math.max(1,Math.min(13,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max)}S.pt=1}
 if(S.pc!=1){for(const b of S.b)if(b.t=='cannon'){b.lv=Math.max(1,Math.min(13,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max)}S.pc=1}
 if(S.ps!=1){for(const b of S.b)if(isSt(b)){b.lv=Math.max(1,Math.min(STO.length-1,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max)}S.ps=1}
 if(S.pv!=2){for(const b of S.b)if(TY[b.t].prod)b.st=0;S.pv=2}
 if(S.pm!=3){for(const b of S.b){if(!isMn(b))continue;b.lv=Math.max(1,Math.min(MT(b).length-1,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=Math.max(b.hp,b.max);b.st=Math.min(b.st||0,LIMF(b));
  const oth=S.b.filter(o=>o!==b),ok=(x,y)=>free(oth,x,y,3)&&!(S.ob||[]).some(o=>x<o.x+o.sx&&x+3>o.x&&y<o.y+o.sy&&y+3>o.y);
  if(!ok(b.x,b.y)){let f=0;for(let r=1;r<N&&!f;r++)for(let dy=-r;dy<=r&&!f;dy++)for(let dx=-r;dx<=r&&!f;dx++){if(Math.max(Math.abs(dx),Math.abs(dy))!=r)continue;if(ok(b.x+dx,b.y+dy)){b.x+=dx;b.y+=dy;f=1}}}}S.pm=3}
 if(S.pd!=1){const ov=(a,x,y,sz)=>S.b.some(o=>o!==a&&TY[o.t]&&x<o.x+TY[o.t].s&&x+sz>o.x&&y<o.y+TY[o.t].s&&y+sz>o.y)||(S.ob||[]).some(o=>x<o.x+o.sx&&x+sz>o.x&&y<o.y+o.sy&&y+sz>o.y),inb=(x,y,sz)=>x>=0&&y>=0&&x+sz<=vN()&&y+sz<=vN();
  for(const b of S.b){if(!TY[b.t]||b.t=='wall'||TY[b.t].trap)continue;const sz=TY[b.t].s;if(inb(b.x,b.y,sz)&&!ov(b,b.x,b.y,sz))continue;let f=0;for(let r=1;r<vN()&&!f;r++)for(let dy=-r;dy<=r&&!f;dy++)for(let dx=-r;dx<=r&&!f;dx++){if(Math.max(Math.abs(dx),Math.abs(dy))!=r)continue;const x=b.x+dx,y=b.y+dy;if(inb(x,y,sz)&&!ov(b,x,y,sz)){b.x=x;b.y=y;f=1}}}S.pd=1}
 
 for(const k in TR)S.army[k]=S.army[k]|0;
 if((S.pq|0)<2){for(const b of S.b)if(b.t=='hall'||b.t=='rax'){b.max=mhp(b);if(b!==mv)b.hp=Math.max(b.hp,b.max)}S.pq=2}
 if((S.pq|0)<3){for(const b of S.b)if(b.t=='rax'){b.max=mhp(b);if(b!==mv)b.hp=Math.max(b.hp,b.max)}S.pq=3}
 if(S.pw<3){for(const l of wallGroups())if(l.length>1&&!l.some(b=>b.up>0)){const m=wlv(l);for(const b of l){b.lv=m;b.max=mhp(b);if(!b.ruin)b.hp=b.max}}S.pw=3}
 if(S.pw!=4){for(const b of S.b)if(b.t=='wall'){delete b.g;b.up=0;b.nb=0;b.rpr=0;b.lv=Math.max(1,Math.min(3,b.lv|0));b.max=mhp(b);if(!b.ruin)b.hp=b.max}S.pw=4}}

const gemCost=sec=>Math.max(1,Math.ceil(sec/60)); /* v71: 1 esmeralda por minuto */
const obGem=o=>{const p={rock:[.10,1,3],boulder:[.25,3,6]}[o.k];return p&&Math.random()<p[0]?p[1]+Math.floor(Math.random()*(p[2]-p[1]+1)):0};
function obAdvance(dt){if(!S.ob||!S.ob.some(o=>o.up>0))return;S.ob=S.ob.filter(o=>{if(o.up>0&&(o.up-=dt)<=0){if(selOb===o){selOb=null;tab=null}const w=OBT[o.k].w||0,gain=Math.max(0,Math.min(cap.g()-S.g,w));S.g+=gain;mRep('rocks',1);const dr=obGem(o);if(dr){S.gem=(S.gem||0)+dr;CUS.gem=(CUS.gem||0)+dr;if(GS)PEND.gem+=dr}
  if(!CU){POP.push({x:o.x+o.sx/2,y:o.y+o.sy/2,t:1.8,txt:'+'+w+' 🪙'});if(dr)POP.push({x:o.x+o.sx/2,y:o.y+o.sy/2-.9,t:2.4,txt:'+'+dr+' ◆ Esmeralda',c:'#7dffa8'});snd('crunch')}return false}return true})}
const armyN=()=>Object.values(S.army).reduce((a,v)=>a+(v||0),0);
function trainTick(dt){const a0=armyN();trainTick0(dt);{const d=armyN()-a0;if(d>0)mRep('train',d)}ensureS();obAdvance(dt);
 for(const p of POP)p.t-=dt;while(POP.length&&POP[0].t<=0)POP.shift()}

function drWallSel(){if(mode!='v'||!pk||pk.t!='wall'||!pk.g)return;const l=grp(pk);if(l.length<2)return;const x0=Math.min(...l.map(b=>b.x)),y0=Math.min(...l.map(b=>b.y)),x1=Math.max(...l.map(b=>b.x))+1,y1=Math.max(...l.map(b=>b.y))+1;
 g.save();g.strokeStyle='#fff';g.lineWidth=2.5;g.setLineDash([6,4]);g.beginPath();const pts=[P(x0,y0,10),P(x1,y0,10),P(x1,y1,10),P(x0,y1,10)];pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.stroke();g.restore()}
/* ---------- progreso mientras el jugador no está ---------- */
let CUS={};
function trainAdv(dt){for(const b of S.b){if(b.t!='rax'||b.ruin||b.nb||b.up>0||!b.q||!b.q.length)continue;let r=dt;const q=b.q;
  while(q.length&&r>0){const j=q[0],t=j.t==null?ttb(j.k,b):j.t;if(r>=t){r-=t;S.army[j.k]=(S.army[j.k]||0)+1;j.n--;j.t=null;if(j.n<=0)q.shift()}else{j.t=t-r;r=0}}}
 const s=S.qs;let r=dt;while(s&&s.length&&r>0){const j=s[0],t=j.t==null?TS.sc:j.t;if(r>=t){r-=t;S.sc=(S.sc||0)+1;j.n--;j.t=null;if(j.n<=0)s.shift()}else{j.t=t-r;r=0}}}
const fmtL=s=>{s=Math.round(s);const d=s/86400|0,h=(s%86400)/3600|0,m=(s%3600)/60|0;return d?d+' d '+h+' h':h?h+' h '+m+' min':m?m+' min':s+' s'};
function catchUp(sec){if(!S||!S.b||!(sec>1)){if(S)S.ts=Date.now();return}
 sec=Math.min(sec,2592000);ensureS();for(const b of S.b)if(TY[b.t].prod)b.stS=b.st;
 const na=()=>Object.values(S.army).reduce((a,v)=>a+(v||0),0),b0=S.b.filter(b=>b.up>0).length,o0=(S.ob||[]).length,a0=na(),c0=S.sc||0;
 CU=1;CUS={gem:0};
 try{let r=sec;const step=Math.max(20,sec/300);while(r>0){const d=Math.min(step,r);r-=d;trainAdv(d);obAdvance(d);vil(d)}}catch(e){console.error(e)}finally{CU=0}
 {const ad2=na()-a0;if(ad2>0)mRep('train',ad2)}
 S.ts=Date.now();if(!OFFLINE&&typeof SB0=='number')S.tsrv=TNOW();
 if(sec>=300){const L=[],bd=b0-S.b.filter(b=>b.up>0).length,od=o0-(S.ob||[]).length,ad=na()-a0,cd=(S.sc||0)-c0;
  if(bd>0)L.push('🔨 '+bd+(bd>1?' obras terminadas (construcción, mejora o reparación)':' obra terminada (construcción, mejora o reparación)'));
  if(od>0)L.push('⛏ '+od+' obstáculo'+(od>1?'s':'')+' despejado'+(od>1?'s':''));
  if(ad>0)L.push('⚔️ '+ad+' tropa'+(ad>1?'s':'')+' entrenada'+(ad>1?'s':''));
  if(cd>0)L.push('🔭 '+cd+' explorador'+(cd>1?'es':''));
  if(CUS.gem>0)L.push('<i class=gm></i> +'+CUS.gem+' esmeralda'+(CUS.gem>1?'s':''));
  if(L.length&&mode=='v'){const m=document.getElementById('msg');if(!m.classList.contains('on')){flash('<b style="font-size:1.3rem">¡Bienvenido de vuelta!</b><br><span class=sm>Estuviste fuera '+fmtL(sec)+'</span><br><br>'+L.join('<br>')+'<br><br><button id="ok">Continuar</button>');$e('ok').onclick=closeMsg}}}}
async function gemFin(b){if(GB)return;GB=1;try{const l=(b.t=='wall'?grp(b):[b]).filter(x=>x.up>0),c=l.reduce((a,x)=>a+gemCost(x.up),0);if(!l.length||!(await gemPay(c))){snd('deny');return}for(const x of l)if(x.up>0)x.up=.001;snd(520)}finally{GB=0}}
async function gemObs(o){if(GB||!(o.up>0))return;GB=1;try{if(!(await gemPay(gemCost(o.up)))){snd('deny');return}if(o.up>0)o.up=.001;snd(520)}finally{GB=0}}
async function gemQueue(q,sc,b){if(GB||!q||!q.length)return;GB=1;try{if(!(await gemPay(gemCost(qRem(q,sc?null:b))))){snd('deny');return}let n=0;for(const j of q.splice(0)){if(sc)S.sc=(S.sc||0)+j.n;else{S.army[j.k]=(S.army[j.k]||0)+j.n;n+=j.n}}if(n)mRep('train',n);snd(660)}finally{GB=0}}

/* ---------- misiones diarias y esmeraldas (servidor) ---------- */
const MISALL=[
{k:'build1',n:'Termina 1 construcción o mejora',t:1,r:2,e:'🔨',b:'build',s:1},{k:'rocks',n:'Despeja 3 obstáculos',t:3,r:2,e:'🌲',b:'rocks',s:1},{k:'train',n:'Entrena 20 tropas',t:20,r:2,e:'🪖',b:'train',s:1},{k:'win1',n:'Gana 1 batalla',t:1,r:3,e:'⚔️',b:'win1',s:1},{k:'loot',n:'Roba 5.000 de recursos en ataques',t:5000,r:3,e:'💰',b:'loot',s:1},
{k:'build',n:'Termina 3 construcciones o mejoras',t:3,r:4,e:'🏗️',b:'build'},{k:'rocks6',n:'Despeja 6 obstáculos',t:6,r:4,e:'🪵',b:'rocks'},{k:'train60',n:'Entrena 60 tropas',t:60,r:4,e:'🛡️',b:'train'},{k:'win3',n:'Gana 3 batallas',t:3,r:6,e:'🏆',b:'win3'},{k:'loot15',n:'Roba 15.000 de recursos en ataques',t:15000,r:6,e:'💎',b:'loot'}];
const MIS=[];
function misLocal(day){let h=0;for(const c of day+'x')h=(h*31+c.charCodeAt(0))>>>0;const m=h%5,o=[0,1,2,3,4].filter(i=>i!=m).map(i=>[((h^(i*2654435761))>>>0)%9973,i]).sort((a,b)=>a[0]-b[0]);return [MISALL[5+m].k,MISALL[o[0][1]].k,MISALL[o[1][1]].k]}
function misSet(){const d=S.daily;if(!d)return;let ks=d.k;if(!Array.isArray(ks)){if(GS)ks=['rocks','train','win1'];else ks=d.k=misLocal(d.d)}MIS.length=0;for(const k of ks){const x=MISALL.find(m=>m.k==k);if(x)MIS.push(x)}}
let GS=0,GB=0,FL=0,PEND={gem:0,m:{}};
const TODAY=()=>new Date(Date.now()-4*3600e3).toISOString().slice(0,10);
function dRoll(){if(!S)return;if(!S.daily||S.daily.d!==TODAY())S.daily={d:TODAY(),p:{},c:{}};if(!S.daily.p)S.daily.p={};if(!S.daily.c)S.daily.c={};if(!S.daily.p.login)S.daily.p.login=1;misSet()}
function mRep(k,n){if(!S||!(n>0))return 0;dRoll();let hit=0;const p=S.daily.p;for(const df of MIS){if(df.b!=k)continue;hit=1;p[df.k]=Math.min(df.t,(p[df.k]||0)+n);if(GS&&df.b!='win1'&&df.b!='win3')PEND.m[df.k]=(PEND.m[df.k]||0)+n}return hit}
const mReady=()=>{dRoll();return MIS.filter(m=>!S.daily.c[m.k]&&(S.daily.p[m.k]||0)>=m.t).length};
async function srvSync(){if(typeof sb=='undefined'||!sb||!ME)return;try{const r=await sb.rpc('daily_state');if(r.error)throw r.error;GS=1;S.gem=r.data.gems;S.wins=r.data.wins;S.daily=r.data.daily;S.spx=r.data.spx||0}catch(e){GS=0;console.warn('esmeraldas locales (falta online_v9.sql):',e.message||e)}dRoll()}
async function flushSrv(){if(!GS||FL)return;const m=PEND.m,gm=PEND.gem;if(!gm&&!Object.keys(m).length)return;FL=1;PEND={gem:0,m:{}};
 try{if(Object.keys(m).length){const r=await sb.rpc('mission_report',{p:m});if(r.error)throw r.error;S.daily=r.data}
  let left=gm;while(left>0){const n=Math.min(12,left);left-=n;const r=await sb.rpc('gem_drop',{p_n:n});if(r.error)throw r.error;S.gem=r.data.gems}}catch(e){console.warn(e.message||e)}finally{FL=0}}
async function gemPay(c){if((S.gem|0)<c)return 0;if(!GS){S.gem-=c;return 1}try{const r=await sb.rpc('spend_gems',{p_amount:c});if(r.error)throw r.error;S.gem=r.data;return 1}catch(e){await srvSync();return 0}}
async function mClaim(k){const df=MIS.find(m=>m.k==k);if(!df)return 0;dRoll();const d=S.daily;if(d.c[k]||(d.p[k]||0)<df.t){snd('deny');return 0}
 if(GS){try{await flushSrv();const r=await sb.rpc('mission_claim',{p_key:k});if(r.error)throw r.error;S.gem=r.data.gems;S.daily=r.data.daily;snd(990);return 1}catch(e){await srvSync();snd('deny');return 0}}
 d.c[k]=1;S.gem=(S.gem|0)+df.r;snd(990);return 1}
function reportWin(){S.wins=(S.wins||0)+1;let b=0;if(S.wins%5==0){S.gem=(S.gem|0)+10;b=10}mRep('win1',1);mRep('win3',1);
 if(GS)sb.rpc('report_win').then(r=>{if(!r.error&&r.data){S.wins=r.data.wins;S.gem=r.data.gems;S.daily=r.data.daily}}).catch(()=>{});return b}
function showMissions(){dRoll();const d=S.daily,ms=Math.max(0,86400-((Date.now()-4*3600e3)%86400000)/1000),B='display:block;';
 flash('<b style="font-size:1.3rem">📜 Misiones diarias</b><span style="'+B+'text-align:left;margin-top:8px;max-height:50vh;overflow:auto">'+MIS.map(m=>{const p=Math.min(m.t,d.p[m.k]||0),c=d.c[m.k],ok=p>=m.t;
  return `<span style="display:flex;align-items:center;gap:8px;margin:6px 0"><span style="font-size:1.4rem">${m.e}</span><span style="${B}flex:1;min-width:0"><span style="${B}font-size:.85rem">${m.n}</span><span style="${B}height:6px;border-radius:4px;background:#0006;overflow:hidden;margin:3px 0"><span style="${B}height:100%;width:${p/m.t*100}%;background:${ok?'#4fe07a':'#f5c542'}"></span></span><span class=sm>${p}/${m.t}</span></span>${c?'<span class=sm>✔ Reclamada</span>':`<button data-mc=${m.k} ${ok?'':'disabled'} style="min-width:74px"><i class=gm></i>+${m.r}<br><small>${ok?'Reclamar':'Pendiente'}</small></button>`}</span>`}).join('')+`</span><span class=sm>Se reinician en ${fmtL(ms)}${GS?'':' · modo local'}</span><br><br><button id="ok">Cerrar</button>`);
 $e('ok').onclick=closeMsg}
document.getElementById('msg').addEventListener('click',e=>{const b=e.target.closest('button[data-mc]');if(b&&!b.disabled)mClaim(b.dataset.mc).then(()=>{ui();showMissions()})});
const gbtn=(a,sec,lbl)=>{const c=gemCost(sec);return `<button class="db gemb" ${a} ${(S.gem|0)>=c?'':'disabled'}><i class=gm></i>${lbl||'Terminar ya'}<small>${c} esmeralda${c>1?'s':''}</small></button>`};

/* ---------- colocar en el hueco libre más cercano al centro ---------- */
function mkGh(){gh=null;hov=null;if(!sel)return;const s=TY[sel].s;gh={x:0,y:0};const[cx,cy]=w2t(LW()/2,(LH()-30)/2);let best=null,bd=1e9;
 for(let y=0;y<=N-s;y++)for(let x=0;x<=N-s;x++){if(!free(S.b,x,y,s))continue;const d=Math.hypot(x+s/2-cx,y+s/2-cy);if(d<bd){bd=d;best={x,y}}}
 if(best){gh.x=best.x;gh.y=best.y;hov=[best.x+s/2,best.y+s/2]}else moveGh(cx,cy)}

/* ---------- toque en el mapa ---------- */
function tap(sx,sy){const[x,y]=w2t(sx,sy);
 if(mode=='v'){if(UI.shop||UI.train||UI.lab)return;if(sel){moveGh(x,y);return}
  {const px=(sx-cam.x)/cam.z,py=(sy-cam.y)/cam.z,ar=pk&&pk.t=='wall'?ARR.find(a=>Math.hypot(a.sx-px,a.sy-py)<22):null;if(ar){wBuild(ar);return}}
  const bb=bubbleAt(sx,sy);if(bb){collect(bb);pk=null;tab=null;selOb=null;return}
  const b=pickB(S.b,sx,sy);
  if(b&&bOn(b)){collect(b);pk=null;tab=null;selOb=null;return}
  selOb=null;UI.desc=0;dq=0;UI.om=0;
  if(b){pk=b;tab='info';snd('sel');return}
  const o=obAt(sx,sy);if(o){selOb=o;pk=null;tab='ob';snd('sel');return}
  pk=null;tab=null}
 else if(A&&A.on)deployAt(x,y)}

/* ---------- progreso, constructores trabajando ---------- */
function drProgs(){if(mode!='v')return;drCrit();const seen=new Set();let rx=null,sc=null,hi=0;const busy=S.b.filter(b=>bz(b)).length+(S.ob||[]).filter(o=>o.up>0).length;
 for(const b of S.b){if(b.hp<=0)continue;if(b.t=='rax'&&!b.ruin&&!b.nb&&!rx)rx=b;if(b.t=='scout'&&!b.ruin&&!b.nb&&!sc)sc=b;
  if(b.t=='hut'&&!b.ruin&&!b.nb){const p=P(b.x+1,b.y+1,TY.hut.h+20),w=hi<busy,hh=(hi+=2+b.lv),t=performance.now();g.textAlign='center';g.lineWidth=3;g.strokeStyle='#000';g.fillStyle='#fff';
   if(w){g.font='16px serif';g.save();g.translate(p[0]+6,p[1]);g.rotate(Math.sin(t/110)*.7);g.fillText('🔨',0,0);g.restore()}else{g.font='13px Lilita One,Arial Black,sans-serif';const u=(t/700)%2;g.globalAlpha=1-u/2;g.strokeText('z',p[0]+4+u*4,p[1]-u*8);g.fillText('z',p[0]+4+u*4,p[1]-u*8);g.globalAlpha=1}}
  if(b.up>0){const k=b.g||b;if(seen.has(k))continue;seen.add(k);const d=TY[b.t];let p;
   if(b.g){const gr=grp(b);p=P(Math.min(...gr.map(c=>c.x))+1,Math.min(...gr.map(c=>c.y))+1,d.h+24)}else p=P(b.x+d.s/2,b.y+d.s/2,d.h+(RFx[b.t]||0)+30);
   if(b.g||b.t=='wall')pring(p[0],p[1],1-b.up/(b.ut||b.up),Math.ceil(b.up)+'s')}}
 for(const o of S.ob||[])if(o.up>0){const p=P(o.x+o.sx/2,o.y+o.sy/2,34);pring(p[0],p[1],1-o.up/o.ut,Math.ceil(o.up)+'s')}
 for(const q of POP){const p=P(q.x,q.y,36+(1.8-q.t)*26);g.save();g.globalAlpha=Math.min(1,q.t*1.5);g.font='bold 18px "Lilita One",Arial Black,sans-serif';g.textAlign='center';g.lineWidth=5;g.strokeStyle='#3a2200';g.fillStyle=q.c||'#ffe066';g.strokeText(q.txt,p[0],p[1]);g.fillText(q.txt,p[0],p[1]);g.restore()}
 const one=(b,q,u)=>{if(!b||!q||!q.length)return;const j=q[0],f=1-(j.t==null?u(j):j.t)/u(j),p=P(b.x+TY[b.t].s/2,b.y+TY[b.t].s/2,TY[b.t].h+(RFx[b.t]||0)+30);pring(p[0],p[1],f,Math.ceil(qRem(q,b))+'s')};
 for(const b of S.b)if(b.t=='rax'&&!b.ruin&&!b.nb&&!(b.up>0)&&b.hp>0)one(b,b.q,j=>ttb(j.k,b));if(sc&&!(sc.up>0))one(sc,S.qs,()=>TS.sc)}

/* ---------- barra de ataque con menú de objetivos ---------- */
const OI={auto:'🎯',def:'🛡',res:'💰',hall:'🏰',camp:'🔥',wall:'🧱'};
function atkUI(){const tc=Object.keys(TR).filter(k=>(A.army[k]||0)>0).map(k=>{const o=A.ord[k]||'auto';return `<button class="tc ${pick==k?'on':''}" data-p=${k}><img class=ti src="${tIcon(k)}"><b class=bd>${A.army[k]}</b>${o!='auto'?`<span class=ob2>${OI[o]}</span>`:''}</button>`}).join('');
 const sc=Object.keys(SP).filter(k=>A.sp[k]>0).map(k=>`<button class="tc ${pick==k?'on':''}" data-p=${k}><span class=ib>${SP[k].e}</span><b class=bd>${A.sp[k]}</b></button>`).join('');
 const q=A.qty[pick]||1,o=A.ord[pick]||'auto';let menu='';
 if(UI.om&&!SPK(pick))menu=`<div class=card><div class=ch><img class=ti src="${tIcon(pick)}"><div><b>Objetivo de ${TR[pick].n}</b><br><span class=sm>Las tropas que despliegues ahora irán a esta estructura</span></div><button class=cx data-om=1>✕</button></div><div class=dock>${Object.keys(ORD).map(k=>`<button class="db sm2 ${o==k?'on':''}" data-os=${k}><i>${OI[k]}</i>${ORD[k]}</button>`).join('')}</div><button class=db data-oa=1 style="min-height:40px;min-width:100%">Aplicar también a las ya desplegadas</button></div>`;
 return menu+`<div class="dock tr">${tc}${sc}</div><div class=dock><button class="db sm2" data-r=1><i>🏳️</i>${UI.rq?'¿Seguro?'+(E&&E.real?' −1 '+ICO('ranking','🏆'):''):'Rendirse'}</button>`+(SPK(pick)?'':`<button class="db sm2" data-qv=1><i>×${q>=99?'Todo':q}</i>Cantidad</button><button class="db sm2 ${UI.om?'on':''}" data-om=1><i>${OI[o]}</i>Objetivo ▲</button>`)+`</div><div class=sm>Elige una tropa, su objetivo y toca el terreno lejos de los edificios</div>`}

/* ---------- estrellas con sonido ---------- */
function sim(dt){sim0(dt);if(A&&A.on)try{sepTroops(dt)}catch(e){}if(A){const s=stars();if(s>(A.ls||0)){A.ls=s;snd('star')}if(A.tr)for(const t of A.tr)if(t.hp<=0&&!t.dd){t.dd=1;t.dk=performance.now();snd('die_'+t.k);if(t.fly)loonDie(t)}}}

/* ---------- tutorial ---------- */
document.body.insertAdjacentHTML('beforeend','<div id=tut style="display:none"><div class=tface>🧙</div><div class=tmsg></div><div class=tbt><button data-tn=1>Siguiente ▶</button><button data-ts=1 class=sk>Saltar</button></div></div><div id=tutHl style="display:none"></div><div id=tutAr style="display:none">👇</div>');
let tutE=-1;
const rxB=()=>S.b.find(b=>b.t=='rax');
const TUTS=[
 {m:'¡Bienvenido, jefe! Soy tu consejero. Te enseñaré a construir tu aldea y a luchar.',next:1},
 {m:'Empecemos: abre el menú de <b>construir</b> (el martillo de abajo).',hl:()=>(UI.shop||sel)?null:'[data-tab=shop]',ok:()=>UI.shop||sel},
 {m:'Elige el <b>Cañón</b>: defiende tu aldea.',hl:()=>sel?null:UI.shop?(UI.cat!='def'?'[data-sk=def]':'[data-b=cannon]'):'[data-tab=shop]',ok:()=>sel=='cannon'||cnt('cannon')>=1},
 {m:'Arrastra el edificio al lugar que quieras y pulsa <b>✔ Construir</b>.',hl:()=>sel?'[data-ok]':UI.shop?'[data-b=cannon]':'[data-tab=shop]',ok:()=>cnt('cannon')>=1},
 {m:'Construir tarda y ocupa un constructor 🔨. Mira la barra sobre la obra: se llena con el tiempo. ¡Esta vez la termino rápido!',next:1,on:()=>{if(!S.tutRew)for(const b of S.b)if(b.t=='cannon'&&b.up>3)b.up=b.ut=3}},
 {m:'Ahora un <b>Cuartel</b>: Martillo → Ejército → Cuartel. Sin él no hay tropas.',hl:()=>sel?'[data-ok]':UI.shop?(UI.cat!='mil'?'[data-sk=mil]':'[data-b=rax]'):'[data-tab=shop]',ok:()=>cnt('rax')>=1,on:()=>{if(!S.tutRew)S.e=Math.max(S.e,800)}},
 {m:'Toca el cuartel y pulsa <b>Entrenar</b>.',hlMap:()=>(!pk||pk.t!='rax')&&!UI.train?rxB():null,hl:()=>UI.train?null:(pk&&pk.t=='rax'&&!pk.nb)?'[data-ta]':null,ok:()=>UI.train,on:()=>{if(S.tutRew)return;const r=rxB();if(r&&r.up>2)r.up=r.ut=2;S.e=Math.max(S.e,400)}},
 {m:'Entrena unos <b>Guerreros</b>: toca su tarjeta (mantén pulsado para varios). Cuando falta elixir la tarjeta se ve gris.',hl:()=>UI.train?'[data-tr=barb]':null,ok:()=>(S.army.barb||0)+qAll().filter(j=>j.k=='barb').reduce((a,j)=>a+j.n,0)>=4,after:()=>{if(!S.tutRew){for(const j of qAll())S.army[j.k]=(S.army[j.k]||0)+j.n;for(const b of S.b)if(b.q)b.q=[];S.q=[]}UI.train=0;snd('done')}},
 {m:'¡Tropas listas! Ahora ataca una aldea de práctica.',hl:()=>UI.train?null:(UI.btl?'[data-bgo=solo]':'[data-a]'),ok:()=>mode=='a',on:()=>{UI.train=0;pk=null;tab=null}},
 {m:'Toca el terreno verde, <b>lejos de los edificios</b>, para desplegar tropas. Toca varias veces.',ok:()=>mode!='a'||A.tr.length>=3},
 {m:'<b>💥 Romper todo</b> / <b>🎯 Lo necesario</b> decide qué atacan tus tropas. <b>🏳️ Rendirse</b> termina el ataque sin botín.',next:1,skip:()=>mode!='a',hl:()=>'[data-gm]'},
 {m:'¡Destruye lo que puedas! Más del 50% o el ayuntamiento dan estrellas.',ok:()=>mode=='v'},
 {m:'Ahora sube tu <b>Ayuntamiento</b> al nivel 2: tócalo y pulsa <b>Mejorar</b>.',hl:()=>pk&&pk.t=='hall'?'[data-u]':null,hlMap:()=>pk&&pk.t=='hall'?null:hallB(),ok:()=>hallB().lv>=2||hallB().up>0,on:()=>{if(!S.tutRew){const h=hallB();S.g=Math.max(S.g,Math.min(cap.g(),h?upc(h):1500))}}},
 {m:'¡Lo lograste! Tutorial completo. Toma 500 de oro y 500 de elixir de regalo. ¡Ahora limpia árboles y rocas para ampliar tu aldea!',m2:'¡Listo! Tutorial repasado. La recompensa de regalo es solo para jugadores nuevos. ¡A seguir construyendo!',next:1,on:()=>{if(!S.tutRew){S.g=Math.min(cap.g(),S.g+500);S.e=Math.min(cap.e(),S.e+500);S.tutRew=1}snd('done')},fin:1}];
function tutTick(){const el=$e('tut'),hl=$e('tutHl'),ar=$e('tutAr');const off=()=>{el.style.display=hl.style.display=ar.style.display='none'};
 if(S.tut==null||S.tut>=TUTS.length||document.getElementById('auth').style.display=='flex'){off();return}
 const st=TUTS[S.tut];if(tutE!==S.tut){tutE=S.tut;st.rep=!!S.tutRew;if(st.on)st.on();snd('tut')}
 if(st.skip&&st.skip()){S.tut++;tutE=-1;return}
 if(!st.next&&st.ok&&st.ok()){if(st.after)st.after();S.tut++;tutE=-1;save();return}
 const over=UI.shop||UI.train||UI.lab;el.style.display='flex';el.style.top=over?'auto':'';el.style.bottom=over?'calc(14px + env(safe-area-inset-bottom,0px))':'auto';
 const m=el.querySelector('.tmsg');if(m.dataset.i!=S.tut){m.dataset.i=S.tut;m.innerHTML=(st.rep&&st.m2)?st.m2:st.m}el.querySelector('[data-tn]').style.display=st.next?'':'none';
 let r=null;const sl=st.hl&&st.hl();if(sl){const t=document.querySelector(sl);if(t){const b=t.getBoundingClientRect();if(b.width>0)r={l:b.left-5,t:b.top-5,w:b.width+10,h:b.height+10}}}
 if(!r&&st.hlMap){const b=st.hlMap();if(b){const s=TY[b.t].s,p=P(b.x+s/2,b.y+s/2,TY[b.t].h/2),x=p[0]*cam.z+cam.x,y=p[1]*cam.z+cam.y;r={l:x-34,t:y-34,w:68,h:68}}}
 if(r){hl.style.display=ar.style.display='block';Object.assign(hl.style,{left:r.l+'px',top:r.t+'px',width:r.w+'px',height:r.h+'px'});const below=r.t<110;ar.textContent=below?'👆':'👇';ar.style.left=(r.l+r.w/2-14)+'px';ar.style.top=(below?r.t+r.h+2:r.t-36)+'px'}else hl.style.display=ar.style.display='none'}
$e('tut').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.tn){const st=TUTS[S.tut];if(st&&st.fin)S.tut=99;else S.tut++;tutE=-1;snd('ui');save()}else if(b.dataset.ts){S.tut=99;snd('ui');save()}};
setInterval(()=>{try{tutTick()}catch(e){}},140);
ensureS();
DESC.mine='Mina de oro: produce oro por hora y lo guarda dentro. Cuando aparece la burbuja pequeña, tócala para reclamar lo minado. Si la burbuja está grande, la mina está llena y deja de producir. Al mejorarla suben su vida, su límite y su producción por hora.';DESC.pump='Extractor de elixir: produce elixir por hora y lo guarda dentro. Toca la burbuja para reclamarlo; cuando está grande, el extractor está lleno. Al mejorarlo suben su vida, su límite y su producción por hora.';DESC.gst='Almacén de oro: aumenta el oro máximo que puedes guardar y se va llenando de monedas. Si lo destruyen en ataque, el rival puede robar parte del oro.';DESC.est='Almacén de elixir: aumenta el elixir máximo que puedes guardar. Su tanque se llena según tu elixir.';DESC.rax='Cuartel: entrena tropas. Cada nivel desbloquea una: Guerrero (1), Arquera (2), Gigante (3), Duende (4), Bombardero (5), Aeronave (6), Mago (7), Sanadora (8).';DESC.wall='Muro: toca «Seleccionar fila» para elegir la fila contigua más larga y moverla, rotarla o actualizarla entera. Se coloca al instante, sin tiempo de construcción ni de mejora. Toca un muro y usa las flechas verdes para extender la fila. Se puede mover, pero no demoler. Las tropas enemigas no pueden aparecer en la zona clara que lo rodea.';DESC.lab='Laboratorio: mejora la vida de todas tus tropas +8% por nivel.';DESC.cauldron='Caldero de hechizos: +1 slot de hechizo por nivel.';DESC.rocket='Cohetes de defensa: lanza cohetes de gran daño, lento pero potente.';DESC.wizard='Torre de magos: lanza magia con daño en área.';DESC.bomb='Bomba: trampa invisible, explota cuando pasan tropas terrestres cerca.';DESC.spring='Trampa con muelle: lanza por los aires a hasta 3 tropas pequeñas.';DESC.abomb='Bomba aérea: trampa invisible que solo activan las tropas voladoras (globos).';DESC.hut='Choza de constructores: cada choza aloja a 1 constructor y no se puede mejorar. Más chozas = más obras a la vez. Toca la choza para ver qué construye cada uno. Se desbloquean con el nivel del Ayuntamiento.';DESC.rax='Cuartel: cada cuartel tiene su propia cola y entrena por su cuenta. Más cuarteles = más tropas al mismo tiempo (comparten el espacio de los campamentos).';DESC.wall=DESC.wall;DESC.pump+=' Desde el nivel 5 puedes potenciarlo con esmeraldas para que produzca el doble durante un tiempo. Ocupa 3×3 casillas.';DESC.mine+=' Desde el nivel 5 puedes potenciarla con esmeraldas para que mine el doble durante un tiempo. Ocupa 3×3 casillas.';

/* ================= v11: efectos, guerrero con espada, ayuntamiento por nivel, construcción ================= */
Object.assign(SFX,{
 slash:()=>{noise(.14,.16,4500,0,'highpass');tone(1100,.12,'sawtooth',.05,0,300);tone(2200,.06,'square',.04,.08,1500)},
 stab:()=>{tone(700,.08,'square',.06,0,400);noise(.05,.1,3000)},
 thud:()=>{tone(90,.25,'sine',.3,0,40);noise(.12,.2,600)},
 twang:()=>{tone(600,.1,'triangle',.08,0,200);noise(.05,.06,2500)},
 die_barb:()=>{tone(220,.25,'sawtooth',.1,0,90);noise(.1,.1,900)},
 die_arch:()=>{tone(700,.2,'triangle',.1,0,300);tone(520,.18,'triangle',.08,.12,220)},
 die_giant:()=>{tone(70,.6,'sine',.35,0,30);tone(110,.5,'sawtooth',.1,0,40);noise(.3,.2,500)},
 die_gob:()=>{tone(1200,.15,'square',.06,0,500);tone(900,.15,'square',.06,.12,300)},
 die_wb:()=>{noise(.25,.22,2500);tone(200,.2,'sawtooth',.1,0,50)},
 die_king:()=>{tone(165,.5,'sawtooth',.14,0,55);tone(330,.5,'square',.06,.1,110);noise(.3,.15,800)},
 crumble:()=>{noise(.5,.3,900);tone(70,.5,'sine',.3,0,28);for(let k=0;k<5;k++)noise(.05,.12,2500,.1+k*.07)},
 bigcrumble:()=>{noise(.9,.4,700);tone(55,.9,'sine',.4,0,22);tone(80,.7,'sawtooth',.08,0,30);for(let k=0;k<9;k++)noise(.06,.14,2200,.15+k*.08)},
 wallbreak:()=>{noise(.2,.25,1800);tone(130,.15,'square',.12,0,60);noise(.04,.12,3000,.12);noise(.04,.1,3200,.2)},
 hammer:()=>{tone(240,.06,'square',.09,0,120);noise(.04,.1,2800)},
 saw:()=>{noise(.3,.07,4000);tone(300,.3,'sawtooth',.03,0,250)},
 built:()=>{[1,1.25,1.5,2].forEach((m,i)=>tone(392*m,.18,'triangle',.1,i*.07));tone(90,.2,'sine',.25,0,45)}
});
const HS=t=>t.k=='barb'||t.k=='king'?'slash':t.k=='gob'?'stab':t.k=='giant'?'thud':t.k=='arch'?'twang':t.k=='mage'?'zap':t.k=='loon'?'boom':410;
let CT=0;
function conSfx(dt){if(mode!='v'||document.hidden)return;CT-=dt;if(CT>0)return;
 if(!S.b.some(b=>b.up>0&&b.t!='wall'&&(b.nb||b.rpr||b.up>0))){CT=.5;return}
 CT=.4;const nw=performance.now(),fst=!window.__cs;window.__cs=window.__cs||new WeakMap();let pl=0;for(const b of S.b){if(!(b.up>0)||b.t=='wall')continue;if(!window.__cs.get(b)){window.__cs.set(b,nw);if(!fst)pl=1}}if(pl)snd('hammer')}
/* --- guerrero / rey con espada animada --- */
function drSword(t,x,y,c){const u=c/2,now=performance.now(),king=t.k=='king';
 if(t.tg&&t.tg.hp>0){const q=P(...ctr(t.tg));if(Math.abs(q[0]-x)>3)t.fc=q[0]>x?1:-1}
 const f=t.fc||1;let ang,p=0;
 if(t.sw>0){p=1-t.sw/.25;ang=-1.95+(1-(1-p)*(1-p))*3.2}
 else if(t.cd>0&&t.cd<.35&&!t.mv)ang=-.6-(1-t.cd/.35)*1.4;
 else if(t.mv)ang=-.55+Math.sin(now/110)*.2;
 else ang=-.5+Math.sin(now/420)*.07;
 const hx=x+f*3.5*c,hy=y-4.5*c,L=(king?11:8.5)*c;
 if(t.sw>0&&p>.08){g.save();g.globalAlpha=.75*(t.sw/.25);g.strokeStyle=king?'#ffe27a':'#fff';g.lineWidth=2.6*u;g.lineCap='round';g.beginPath();g.arc(hx,hy,L*.88,-Math.PI/2-1.95*f,-Math.PI/2+ang*f,f<0);g.stroke();g.restore()}
 g.save();g.translate(hx,hy);g.rotate(ang*f);
 g.fillStyle=king?'#ffe27a':'#dfe7f0';g.strokeStyle='#4b5a6b';g.lineWidth=1;g.beginPath();g.moveTo(-1.5*u,-2*u);g.lineTo(-1.5*u,-L);g.lineTo(0,-L-3*u);g.lineTo(1.5*u,-L);g.lineTo(1.5*u,-2*u);g.closePath();g.fill();g.stroke();
 g.fillStyle='#fff';g.fillRect(-.4*u,-L,.8*u,L-2*u);
 g.fillStyle='#d4a017';g.fillRect(-4*u,-2.4*u,8*u,2*u);g.fillStyle='#6b4626';g.fillRect(-.9*u,-.6*u,1.8*u,3.4*u);g.fillStyle='#d4a017';g.beginPath();g.arc(0,3.2*u,1.2*u,0,7);g.fill();
 g.restore();
 if(t.sw>0&&p>.7){const tx=hx+Math.sin(ang*f)*(L+3*u),ty=hy-Math.cos(ang*f)*(L+3*u);g.strokeStyle='#fff3a0';g.lineWidth=1.6;for(let i=0;i<5;i++){const a=i*1.3+now/50,r1=2*u,r2=(5+i%3*2)*u;g.beginPath();g.moveTo(tx+Math.cos(a)*r1,ty+Math.sin(a)*r1);g.lineTo(tx+Math.cos(a)*r2,ty+Math.sin(a)*r2);g.stroke()}}}
/* --- ayuntamiento que evoluciona --- */
function pyr2(x,y,sz,z0,hh,c){const A=P(x+sz/2,y+sz/2,z0+hh);poly([P(x-.1,y+sz+.1,z0),P(x+sz+.1,y+sz+.1,z0),A],sh(c,.95));poly([P(x+sz+.1,y+sz+.1,z0),P(x+sz+.1,y-.1,z0),A],sh(c,.6))}
function bx2(x,y,s,z0,h,c,r){poly([P(x,y+s,z0),P(x+s,y+s,z0),P(x+s,y+s,z0+h),P(x,y+s,z0+h)],sh(c,.8));poly([P(x+s,y,z0),P(x+s,y+s,z0),P(x+s,y+s,z0+h),P(x+s,y,z0+h)],sh(c,.55));poly([P(x,y,z0+h),P(x+s,y,z0+h),P(x+s,y+s,z0+h),P(x,y+s,z0+h)],r);g.strokeStyle='#0005';g.lineWidth=1;g.stroke()}
const HP=[0,{c:'#9a6a3a',r:'#c08a52',h:30,roof:'#d9b84a',rh:20},{c:'#b9a27a',r:'#d8c9a0',h:38,roof:'#c0392b',rh:26},{c:'#9c9ca8',r:'#c5c5d2',h:40,roof:'#3a5f9a',rh:28,tc:'#8c8c9a',tr:'#b5b5c4',th:10,tr2:'#c0392b'},{c:'#7e7f94',r:'#a8a9c2',h:44,roof:'#3a5f9a',rh:14,tc:'#6e6f84',tr:'#9a9bb4',th:14,tr2:'#2f5fae'},{c:'#f1e6c6',r:'#fff6dc',h:48,roof:'#e8b923',rh:14,tc:'#efe0b0',tr:'#fff3cc',th:18,tr2:'#e8b923'}];
const hhOf=b=>HP[Math.min(5,Math.max(1,b.lv))].h;
function drHallA(b){const L=Math.min(5,Math.max(1,b.lv)),k=HP[L],x=b.x,y=b.y,s=3,h=k.h;
 box(x,y,s,h,k.c,k.r);
 const[dx,dy]=P(x+s/2,y+s);g.fillStyle='#2b1809';g.beginPath();g.moveTo(dx-7,dy);g.lineTo(dx-7,dy-12);g.arc(dx,dy-12,7,Math.PI,0);g.lineTo(dx+7,dy);g.closePath();g.fill();
 g.fillStyle=L>=5?'#fff':'#ffe58a';for(const[a,c]of[[x+.7,y+s],[x+2.1,y+s],[x+s,y+.7],[x+s,y+2.1]]){const[wx,wy]=P(a,c,h*.62);g.fillRect(wx-3,wy-4,6,8)}
 if(L>=2){g.strokeStyle='#0004';g.lineWidth=1;const[bx,by]=P(x+.2,y+s,h*.34);g.beginPath();g.moveTo(bx,by);g.lineTo(...P(x+s,y+s,h*.34));g.lineTo(...P(x+s,y,h*.34));g.stroke()}
 const tw=.9,TP2=[[x-.15,y-.15],[x+s-.75,y-.15],[x-.15,y+s-.75],[x+s-.75,y+s-.75]],TH=h+(k.th||0);
 if(L>=3){bx2(TP2[0][0],TP2[0][1],tw,0,TH,k.tc,k.tr);pyr2(TP2[0][0],TP2[0][1],tw,TH,14,k.tr2)}
 if(L==1)pyr2(x-.1,y-.1,s+.2,h,k.rh,k.roof);else if(L==2||L==3)pyr2(x-.15,y-.15,s+.3,h,k.rh,k.roof);
 else if(L==4){bx2(x+.9,y+.9,1.2,h,16,k.tc,k.tr);pyr2(x+.8,y+.8,1.4,h+16,24,'#e8b923')}
 else{bx2(x+.75,y+.75,1.5,h,12,k.tc,k.tr);const[dcx,dcy]=P(x+1.5,y+1.5,h+12),gr=g.createRadialGradient(dcx-6,dcy-12,2,dcx,dcy-4,20);gr.addColorStop(0,'#fff6b0');gr.addColorStop(.5,'#f0b92b');gr.addColorStop(1,'#a56a0a');g.fillStyle=gr;g.beginPath();g.arc(dcx,dcy,17,Math.PI,0);g.closePath();g.fill();g.strokeStyle='#7a4a00';g.lineWidth=1.2;g.stroke();g.fillStyle='#ffd23f';g.fillRect(dcx-1.5,dcy-30,3,13)}
 if(L>=4){for(let i=0;i<5;i++){const t0=.35+i*.55;bx2(x+t0,y+s-.05,.3,h,5,k.c,k.r);bx2(x+s-.05,y+t0,.3,h,5,k.c,k.r)}}
 if(L>=3){for(const i of[1,2]){const[a,c]=TP2[i];bx2(a,c,tw,0,TH,k.tc,k.tr);pyr2(a,c,tw,TH,14,k.tr2)}const[a,c]=TP2[3];bx2(a,c,tw,0,TH,k.tc,k.tr);pyr2(a,c,tw,TH,14,k.tr2)}}
function drHallB(b,cx,cy){const L=Math.min(5,Math.max(1,b.lv)),k=HP[L];const top=L<=3?k.rh:L==4?40:46;spr(IC.flag,cx,cy-top,PL);
 if(L>=3){const now=performance.now();for(const i of[0,1]){const[a,c]=[[b.x-.15,b.y+2.25],[b.x+2.25,b.y+2.25]][i];const p=P(a+.45,c+.45,k.h+(k.th||0)+14);spr(IC.flag,p[0],p[1],PL)}}
 if(L==5){const now=performance.now();g.save();for(let i=0;i<4;i++){const ph=(now/700+i/4)%1,a=i*1.7+now/900,px=cx+Math.cos(a)*22,py=cy-34+Math.sin(a)*8-ph*10;g.globalAlpha=1-ph;g.fillStyle='#fff6b0';g.beginPath();g.moveTo(px,py-4);g.lineTo(px+1.3,py-1.3);g.lineTo(px+4,py);g.lineTo(px+1.3,py+1.3);g.lineTo(px,py+4);g.lineTo(px-1.3,py+1.3);g.lineTo(px-4,py);g.lineTo(px-1.3,py-1.3);g.closePath();g.fill()}g.restore()}}
/* --- animación de construcción --- */
function drScaf(b,hh,al){const s=TY[b.t].s,x=b.x,y=b.y;g.save();g.globalAlpha=al;g.strokeStyle='#c8975a';g.lineWidth=2;
 const C=[[x-.1,y-.1],[x+s+.1,y-.1],[x+s+.1,y+s+.1],[x-.1,y+s+.1]];
 for(const[a,c]of C){g.beginPath();g.moveTo(...P(a,c,0));g.lineTo(...P(a,c,hh));g.stroke()}
 g.lineWidth=1.5;for(let z=8;z<=hh;z+=9){g.beginPath();C.forEach(([a,c],i)=>{const p=P(a,c,z);i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.closePath();g.stroke()}
 g.beginPath();g.moveTo(...P(x-.1,y+s+.1,0));g.lineTo(...P(x+s+.1,y+s+.1,hh));g.stroke();g.restore()}
function drBuild(b){const d=TY[b.t],s=d.s,h=d.h,t=b.t,now=performance.now(),p=Math.max(0,Math.min(1,1-b.up/(b.ut||b.up)));
 const ex={hall:30,tower:32,camp:20,rax:0,scout:18,hut:14,cannon:6,mortar:6,mine:10,pump:10,gst:4,est:4}[t]||8,H=h+ex;
 box(b.x,b.y,s,Math.max(4,h/3|0),'#555','#7a7a7a');
 if(p<.55){const sd=(b.x*7+b.y*13)%5;for(let i=0;i<4;i++){const a=b.x+.2+((i*37+sd*11)%10)/10*(s-.6),c=b.y+.2+((i*53+sd*7)%10)/10*(s-.6);box(a,c,.3,5+i%2*3,'#6a6a6a','#8a8a8a')}}
 const q=p<.1?0:Math.min(1,(p-.1)/.85);
 if(q>0){const yb=P(b.x+s,b.y+s,0)[1]+6,yt=P(b.x,b.y,H)[1]-26,xl=P(b.x,b.y+s,0)[0]-(s+2)*TW,xr=P(b.x+s,b.y,0)[0]+(s+2)*TW,hgt=(yb-yt)*q;
  g.save();g.beginPath();g.rect(xl,yb-hgt,xr-xl,hgt+4);g.clip();drB0({...b,nb:0,rpr:0,ruin:0,up:0,hp:b.max});g.restore()}
 drScaf(b,Math.max(16,H*q+10),p>.85?Math.max(0,1-(p-.85)/.15):1);
 const[px,py]=P(b.x+s/2,b.y+s/2,Math.max(16,H*q+10));g.save();g.translate(px,py);g.rotate(Math.sin(now/90)*.7-.3);g.font='17px serif';g.textAlign='center';g.fillStyle='#fff';g.fillText('🔨',0,-4);g.restore();
 for(let i=0;i<3;i++){const ph=(now/520+i/3)%1,[ux,uy]=P(b.x+s/2+(i-1)*.55,b.y+s+.1,0);g.save();g.globalAlpha=.55*(1-ph);g.fillStyle='#e8dcc0';g.beginPath();g.arc(ux,uy-ph*16,3+ph*4,0,7);g.fill();g.restore()}
 bar(px,py-26,32,p);}
function drB(b){if(mode=='a'&&b.hp<=0){drRubble(b);return}if(mode=='v'&&b.up>0&&!b.ghost&&b.t!='wall'&&!TY[b.t].trap){if(b.nb||b.rpr){drBuild(b);return}drB0(b);drScaf(b,TY[b.t].h+10,.6);const[px,py]=P(b.x+TY[b.t].s/2,b.y+TY[b.t].s/2,TY[b.t].h+34);bar(px,py,32,1-b.up/(b.ut||b.up));return}drB0(b)}

/* ================= v12: ayuntamiento por niveles, edificios nuevos y trampas ================= */
Object.assign(SFX,{spring:()=>{tone(300,.12,'sine',.1,0,900);tone(600,.15,'triangle',.08,.08,200)}});
const TRK=()=>{const r=Math.random();return r<.2?'spring':r<.35?'abomb':'bomb'};
const labF=()=>1; /* v65: el laboratorio ya no sube la vida de las tropas, solo permite investigarlas */
const drEm=(e,x,y,sz)=>{g.font=sz+'px serif';g.textAlign='center';g.fillStyle='#fff';g.fillText(e,x,y)};
function drOrb(x,y){const t=performance.now()/400,r=5+Math.sin(t)*1.2;const gr=g.createRadialGradient(x,y,1,x,y,r+5);gr.addColorStop(0,'#fff');gr.addColorStop(.4,'#d98cff');gr.addColorStop(1,'#d98cff00');g.fillStyle=gr;g.beginPath();g.arc(x,y,r+5,0,7);g.fill()}
function drTrap(b){const[x,y]=P(b.x+.5,b.y+.5,2);g.save();
 if(b.t=='bomb'){g.fillStyle='#1c1c24';g.beginPath();g.arc(x,y-3,6,0,7);g.fill();g.fillStyle='#555';g.fillRect(x-1.5,y-11,3,4);g.fillStyle=(performance.now()/150|0)%2?'#ffd24a':'#ff5a1f';g.beginPath();g.arc(x+2,y-12,2.2,0,7);g.fill()}
 else if(b.t=='spring'){g.strokeStyle='#d9d9e6';g.lineWidth=2.2;g.beginPath();for(let i=0;i<5;i++){g.moveTo(x-6,y-i*2.6);g.lineTo(x+6,y-i*2.6-1.3)}g.stroke();g.fillStyle='#e8523a';g.beginPath();g.arc(x,y-13,3.5,0,7);g.fill()}
 else{g.fillStyle='#4a4a5a';g.beginPath();g.arc(x,y-3,7.5,0,7);g.fill();g.strokeStyle='#aab';g.lineWidth=2;g.stroke();g.fillStyle='#e8523a';g.fillRect(x-1,y-8,2,10);g.fillRect(x-5,y-4,10,2)}
 g.restore()}
function trapTick(){for(const tp of E.traps){if(tp.d)continue;const k=tp.k||'bomb',rad=k=='spring'?1:.9;
 const af=k=='abomb';if(!A.tr.some(t=>t.hp>0&&!!t.fly==af&&Math.hypot(t.x-tp.x,t.y-tp.y)<rad))continue;tp.d=1;
 if(k=='spring'){let n=0;for(const t of A.tr)if(t.hp>0&&Math.hypot(t.x-tp.x,t.y-tp.y)<1.6&&!t.fly&&TR[t.k].sp<=4&&n<3){t.hp=0;n++}A.fx.push({k:'puff',x:tp.x,y:tp.y,z:4,t:.5,L:.5});snd('spring')}
 else{const R=k=='abomb'?3.2:2,D=k=='abomb'?240:170;for(const t of A.tr)if(t.hp>0&&!!t.fly==af&&Math.hypot(t.x-tp.x,t.y-tp.y)<R)t.hp-=D;A.fx.push({k:'boom',x:tp.x,y:tp.y,t:.5,L:.5,R:k=='abomb'?1.8:1});A.sh=k=='abomb'?.5:.3;snd('boom')}}}
const hallB=()=>S.b.find(b=>b.t=='hall');

/* ================= v13: niveles de cuartel y tropas nuevas ================= */
Object.assign(SFX,{
 die_loon:()=>{noise(.3,.25,1800);tone(300,.3,'sawtooth',.1,0,60)},
 die_mage:()=>{tone(900,.3,'sine',.1,0,200);tone(1300,.25,'triangle',.07,.08,300)},
 die_heal:()=>{tone(520,.3,'sine',.1,0,260);tone(390,.35,'sine',.08,.12,150)}});
const TU={barb:1,arch:2,giant:3,gob:4,wb:5,loon:6,mage:7,heal:8};
const RXH=[1,1,1,2,3,4,5,6,7,8,9,10];
function healT(t,D,dt){let m=null,bd=1e9;for(const o of A.tr){if(o===t||o.hp<=0||TR[o.k].heal)continue;const q=Math.hypot(o.x-t.x,o.y-t.y);if(q<bd){bd=q;m=o}}
 if(m&&bd>1.6){const st=Math.min(bd,D.v*dt);t.x+=(m.x-t.x)/bd*st;t.y+=(m.y-t.y)/bd*st;t.mv=1}
 for(const o of A.tr)if(o!==t&&o.hp>0&&o.hp<o.max&&!TR[o.k].heal&&Math.hypot(o.x-t.x,o.y-t.y)<D.hr)o.hp=Math.min(o.max,o.hp+D.heal*dt);
 t.hc=(t.hc||0)-dt;if(t.hc<=0){t.hc=1;A.fx.push({k:'hpulse',x:t.x,y:t.y,r:D.hr,t:.9,L:.9})}}
function trOv(t,x,y,c){g.textAlign='center';g.fillStyle='#fff';
 if(t.k=='mage'){g.font='15px serif';g.fillText('🪄',x+9,y-8);g.fillStyle='#5a2d91';g.beginPath();g.moveTo(x-6,y-21);g.lineTo(x,y-33);g.lineTo(x+6,y-21);g.fill()}
 else if(t.k=='heal'){g.fillStyle='#fff';g.fillRect(x-2,y-34,4,12);g.fillRect(x-6,y-30,12,4);g.fillStyle='#3fd36a';g.fillRect(x-1,y-33,2,10);g.fillRect(x-5,y-29,10,2)}}

/* ================= v14: globo bombástico volador ================= */
function loonShape(c,cx,cy,s){c.save();c.translate(cx,cy);c.scale(s,s);
 c.strokeStyle='#c9a36b';c.lineWidth=1.3;for(const dx of[-9,-3,3,9]){c.beginPath();c.moveTo(dx*.8,6);c.lineTo(dx*.45,17);c.stroke()}
 c.fillStyle='#6b4626';c.fillRect(-5,17,10,7);c.fillStyle='#8a5a30';c.fillRect(-5,17,10,2);c.fillStyle='#3b2412';c.fillRect(-5,23,10,1.5);
 const gr=c.createRadialGradient(-5,-10,2,0,-4,18);gr.addColorStop(0,'#ff7a4a');gr.addColorStop(.6,'#e8381a');gr.addColorStop(1,'#a82210');
 c.fillStyle=gr;c.beginPath();c.moveTo(0,-20);c.bezierCurveTo(18,-20,19,0,5,8);c.lineTo(-5,8);c.bezierCurveTo(-19,0,-18,-20,0,-20);c.fill();
 c.fillStyle='#ff9a4c';c.beginPath();c.moveTo(3,-12);c.lineTo(10,-8);c.lineTo(8,-1);c.lineTo(2,-4);c.fill();
 c.strokeStyle='#c9a36b';c.lineWidth=1.4;c.beginPath();c.moveTo(0,-20);c.quadraticCurveTo(-6,-4,-3,8);c.moveTo(0,-20);c.quadraticCurveTo(7,-4,3,8);c.moveTo(-14,-9);c.quadraticCurveTo(0,-5,14,-9);c.stroke();
 c.restore()}
function drLoon(t,x,y){const al=36+Math.sin(performance.now()/380+t.x*3)*3;
 loonShape(g,x,y-al-8,1.05);
 if(t.bm){const p=1-t.bm.t/t.bm.L,q=P(t.bm.tx,t.bm.ty),bx=x+(q[0]-x)*p,by=(y-al+14)+(q[1]-(y-al+14))*p*p;g.fillStyle='#15151c';g.beginPath();g.arc(bx,by,4,0,7);g.fill();g.fillStyle='#ff9a3c';g.fillRect(bx-1,by-7,2,3)}}
function loonDie(t){const D=TR.loon;for(const b of E.b)if(b.hp>0&&edge(t,b)<1.5)b.hp-=D.dd;A.fx.push({k:'boom',x:t.x,y:t.y,t:.5,L:.5,R:1});A.sh=.2;snd('boom')}
function flyT(t,D,dt){
 if(t.bm){t.bm.t-=dt;if(t.bm.t<=0){const tg=t.bm.tg,c=[t.bm.tx,t.bm.ty];if(tg.hp>0)tg.hp-=(t.dm||D.dmg)*t.rm;for(const b of E.b)if(b!==tg&&b.hp>0&&edge({x:c[0],y:c[1]},b)<D.ar)b.hp-=(t.dm||D.dmg)*t.rm;A.fx.push({k:'boom',x:c[0],y:c[1],t:.4,L:.4,R:.9});snd('boom');t.bm=null}}
 const al=E.b.filter(b=>b.hp>0&&b.t!='wall');
 if(!t.tg||t.tg.hp<=0){pickAir(t,D,al)}
 if(!t.tg)return;const c=ctr(t.tg),d=edge(t,t.tg);
 if(d>.35){const dx=c[0]-t.x,dy=c[1]-t.y,dl=Math.hypot(dx,dy)||1,st=Math.min(dl,D.v*t.rm*dt);t.x+=dx/dl*st;t.y+=dy/dl*st;t.mv=1}
 else if(!t.bm){t.cd-=dt;if(t.cd<=0){t.cd=D.rt;t.bm={t:.7,L:.7,tg:t.tg,tx:c[0],ty:c[1]};snd('arrow')}}}

/* ================= v15: muros individuales con enlaces, flechas y fila ================= */
let WMAP={},ARR=[];const WROW={pk:null,on:false};
const wAtM=(x,y)=>WMAP[x+','+y];
function bx3(x0,y0,x1,y1,z0,z1,c,t){poly([P(x0,y1,z0),P(x1,y1,z0),P(x1,y1,z1),P(x0,y1,z1)],sh(c,.8));poly([P(x1,y0,z0),P(x1,y1,z0),P(x1,y1,z1),P(x1,y0,z1)],sh(c,.55));poly([P(x0,y0,z1),P(x1,y0,z1),P(x1,y1,z1),P(x0,y1,z1)],t||c)}
function drWall(b){const x=b.x,y=b.y,cx=x+.5,cy=y+.5;
 if(b.ruin){bx3(cx-.28,cy-.28,cx+.28,cy+.28,0,3,'#5a5a5a','#7a7a7a');return}
 const lv=Math.max(1,Math.min(3,b.lv|0||1)),C=[0,{b:'#8a5a2b',t:'#b98443'},{b:'#7d7d80',t:'#b2b2b6'},{b:'#aeb4be',t:'#e4e8ee'}][lv],H=lv==2?12:15;
 g.fillStyle='#0003';g.beginPath();const sp=P(cx+.1,cy+.1,0);g.ellipse(sp[0],sp[1],9,4.5,0,0,7);g.fill();
 for(const[dx,dy]of[[1,0],[0,1]])if(wAtM(x+dx,y+dy)){
  const a0=dx?cx:x+.4,a1=dx?cx+1:x+.6,b0=dx?y+.4:cy,b1=dx?y+.6:cy+1;
  if(lv==1){bx3(a0,b0,a1,b1,3,5.5,'#9a6a35','#c8995a');bx3(a0,b0,a1,b1,8.5,11,'#9a6a35','#c8995a')}
  else if(lv==2){bx3(a0,b0,a1,b1,0,9,'#86868a','#b8b8bd')}
  else{bx3(a0,b0,a1,b1,0,10,'#b6bcc6','#e8ecf2');g.strokeStyle='#8a92a0';g.lineWidth=1;g.beginPath();const q0=P(a0,b1,5),q1=P(a1,b1,5);g.moveTo(q0[0],q0[1]);g.lineTo(q1[0],q1[1]);g.stroke()}}
 bx3(cx-.17,cy-.17,cx+.17,cy+.17,0,H,C.b,C.t);
 if(lv==1)bx3(cx-.2,cy-.2,cx+.2,cy+.2,5,8,'#cdb27c','#e4d0a0');
 if(lv==2)bx3(cx-.1,cy-.1,cx+.26,cy+.26,H-1,H+3,'#8d8d90','#bdbdc2');
 if(lv==3){g.strokeStyle='#8a92a0';g.lineWidth=1;g.beginPath();for(const z of[5,10]){const q0=P(cx-.17,cy+.17,z),q1=P(cx+.17,cy+.17,z),q2=P(cx+.17,cy-.17,z);g.moveTo(q0[0],q0[1]);g.lineTo(q1[0],q1[1]);g.lineTo(q2[0],q2[1])}g.stroke()}
 const T=P(cx,cy,H+7);poly([P(cx-.17,cy+.17,H),P(cx+.17,cy+.17,H),T],sh(C.t,.9));poly([P(cx+.17,cy+.17,H),P(cx+.17,cy-.17,H),T],sh(C.t,.62));poly([P(cx-.17,cy+.17,H),P(cx-.17,cy-.17,H),T],sh(C.t,1.05));
 if(mode=='a'&&b.hp<b.max&&b.hp>0)bar(T[0],T[1]-6,22,b.hp/b.max)}

const wNb=b=>[[1,0],[-1,0],[0,1],[0,-1]].filter(([dx,dy])=>wAtM(b.x+dx,b.y+dy)).length;
function wRow(b){let best=[b];for(const[dx,dy]of[[1,0],[0,1]]){const l=[b];for(const s of[1,-1]){let k=1;while(wAtM(b.x+dx*k*s,b.y+dy*k*s)){l.push(wAtM(b.x+dx*k*s,b.y+dy*k*s));k++}}if(l.length>best.length)best=l}return best}
function wrToggle(){if(WROW.pk===pk)WROW.on=!WROW.on;else{WROW.pk=pk;WROW.on=true}snd('ui')}
const wTg=()=>WROW.on&&WROW.pk===pk?wRow(pk):[pk];
function wUp(list){let n=0;for(const x of list.slice().sort((a,c)=>a.lv-c.lv)){if(x.ruin||x.lv>=3||!reqOk(x))continue;const c=upc(x);if(S.g<c)break;S.g-=c;x.lv++;x.max=mhp(x);x.hp=x.max;n++}snd(n?'done':'deny')}
function upBlock(){if(pk&&pk.t=='wall')wUp(wTg())}
function upAllWalls(){if(pk&&pk.t=='wall')wUp(S.b.filter(x=>x.t=='wall'&&x.lv==pk.lv))}
function wBuild(a){const k=Math.min(a.n,Math.floor(S.g/cost('wall')));if(!k){snd('deny');return}
 let last=null;for(let i=1;i<=k;i++){const x=pk.x+a.dx*i,y=pk.y+a.dy*i;if(!free(S.b,x,y,1))break;S.g-=cost('wall');last=mk('wall',x,y);S.b.push(last)}if(last){pk=last;tab='info'}snd(500,.06,'square',.04)}
function drWallSel0(){ARR=[];if(mode!='v'||!pk||pk.t!='wall'||pk.ruin||sel||mv){if(!pk)WROW.pk=null;return}
 if(WROW.on&&WROW.pk===pk){g.save();g.strokeStyle='#fff';g.lineWidth=2.2;g.setLineDash([5,3]);for(const w of wRow(pk)){g.beginPath();[P(w.x,w.y,15),P(w.x+1,w.y,15),P(w.x+1,w.y+1,15),P(w.x,w.y+1,15)].forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.stroke()}g.restore()}
 const T=P(pk.x+.5,pk.y+.5,36),nm='Muro nivel '+Math.min(3,pk.lv);g.font='13px "Lilita One",sans-serif';g.textAlign='center';g.lineWidth=3;g.strokeStyle='#000';g.fillStyle='#fff';g.strokeText(nm,T[0],T[1]);g.fillText(nm,T[0],T[1]);
 const rem=mx('wall')-cnt('wall');if(rem<=0)return;const can=S.g>=cost('wall');
 for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const cells=[];for(let k=1;k<=3;k++){const x=pk.x+dx*k,y=pk.y+dy*k;if(!free(S.b,x,y,1))break;cells.push([x,y])}
  const n=Math.min(cells.length,rem);if(!n)continue;
  
  const c=P(pk.x+.5+dx*(n+1),pk.y+.5+dy*(n+1),8),a=P(0,0),b=P(dx,dy);let vx=b[0]-a[0],vy=b[1]-a[1];const vl=Math.hypot(vx,vy)||1;vx/=vl;vy/=vl;const px=-vy,py=vx;
  g.fillStyle=can?'#5fe03a':'#8a8f98';g.strokeStyle=can?'#1b5e12':'#444';g.lineWidth=2.5;g.beginPath();
  const pts=[[c[0]+vx*15,c[1]+vy*15],[c[0]-vx*2+px*11,c[1]-vy*2+py*11],[c[0]-vx*2+px*4,c[1]-vy*2+py*4],[c[0]-vx*14+px*4,c[1]-vy*14+py*4],[c[0]-vx*14-px*4,c[1]-vy*14-py*4],[c[0]-vx*2-px*4,c[1]-vy*2-py*4],[c[0]-vx*2-px*11,c[1]-vy*2-py*11]];
  pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.fill();g.stroke();ARR.push({dx,dy,n,sx:c[0],sy:c[1]})}}

/* ================= v16: fila de muros (seleccionar, mover, rotar, actualizar) ================= */
let mvR=null;
const mvOk=()=>{if(!gh||!mv)return false;if(!mvR)return free(S.b,gh.x,gh.y,TY[mv.t].s);return mvR.every(r=>free(S.b,gh.x+r.ox,gh.y+r.oy,1))};
function mvCommit(){if(mvR){for(const r of mvR){r.w.x=gh.x+r.ox;r.w.y=gh.y+r.oy;r.w.hp=r.w.hp0||r.w.max}mvR=null;mv=null;return}mv.x=gh.x;mv.y=gh.y;mv.hp=mv.hp0;mv=null}
function wRot(){if(!pk||pk.t!='wall'||!(WROW.on&&WROW.pk===pk))return;const row=wRow(pk);if(row.length<2){snd('deny');return}
 const nw=row.map(w=>[w,pk.x+(w.y-pk.y),pk.y+(w.x-pk.x)]);
 if(!nw.every(([w,x,y])=>w===pk||free(S.b,x,y,1))){snd('deny');return}
 for(const[w,x,y]of nw){w.x=x;w.y=y}snd(520,.08,'triangle',.05)}

/* ================= v18: barra compacta, menú de información, horizontal ================= */
function lwid(){return 0}
const CI=k=>k=='g'?'🪙':'💧';
function actBtn(attr,ico,lbl,price,o={}){return `<button class="db ab${o.dis?' off':''}${o.cls?' '+o.cls:''}" ${attr}>${price!=null&&price!==''?`<span class="pr${o.bad?' bad':''}">${price}</span>`:''}${ico}<span class=lb>${lbl}</span></button>`}
const IC_=e=>`<i>${e}</i>`;
function upWhy(b){const d=TY[b.t];if(b.t=='wall'){if(b.lv>=3)return'Nivel máximo';if(!reqOk(b))return'Requiere Ayuntamiento '+(b.lv<2?2:3);return S.g<upc(b)?'Faltan recursos':''}
 if(b.lv>=lcap(b))return'Nivel máximo';if(b.up>0)return'En obras';if(!builders())return'Sin constructor libre';if(!reqOk(b))return isSt(b)?'Requiere Ayuntamiento '+(STO[b.lv+1]||{th:5}).th:isMn(b)?'Requiere Ayuntamiento '+(MT(b)[b.lv+1]||{th:5}).th:b.t=='rax'?'Requiere Ayuntamiento '+RXH[b.lv]:'Faltan requisitos';return S[d.cur]<upc(b)?'Faltan recursos':''}
function selCard(){const b=pk,d=TY[b.t],isW=b.t=='wall',mxl=lcap(b),lvn=Math.min(b.lv,mxl);
 let h=`<div class=selbar><div class=tt>${d.n} <span>(Nivel ${lvn})</span></div>`;
 if(b.up>0){const T=b.ut||b.up;h+=`<div class=sprog>🔨 ${b.nb?'Construyendo':b.rpr?'Reparando':'Mejorando'} ${lvT('ub',fmtT(b.up))}</div>`+lvP('ubp',1-b.up/T)}
 if(isMn(b)&&b.bst>0)h+=`<div class=sprog>⚡ Potenciada x2 ${lvT('bs',fmtHM(b.bst))}</div>`;
 let r=actBtn('data-info=1','<b class=ibl>i</b>','Info');
 if(b.up>0){const c=gemCost(b.up);r+=actBtn('data-gf=1','<i class=gm style="font-size:26px"></i>','Terminar',c,{cls:'gem2',dis:(S.gem|0)<c,bad:(S.gem|0)<c})}
 if(b.ruin){if(!b.up){const c=rc(b),k=d.cur||'g',why=S[k]<c||(b.t!='hut'&&!builders());r+=actBtn('data-rep=1',IC_('🔧'),'Reparar',c+' '+CI(k),{dis:why,bad:S[k]<c})}}
 else{
  if(d.prod&&!b.nb&&b.st>=1)r+=actBtn('data-col=1',IC_(CI(d.prod)),'Reclamar',Math.floor(b.st),{cls:'ok2'});
  if(isMn(b)&&!b.nb&&(MT(b)[Math.max(1,Math.min(MT(b).length-1,b.lv))].boost*2)){const c=(MT(b)[Math.max(1,Math.min(MT(b).length-1,b.lv))].boost*2),on=b.bst>0;r+=actBtn('data-bst=1','<i class=gm style="font-size:26px"></i>',on?'Potenciada':'Potenciar',on?'':c,{cls:'gem2',dis:on||(S.gem|0)<c,bad:!on&&(S.gem|0)<c})}
  if((b.t=='rax'||b.t=='scout')&&!b.nb)r+=actBtn('data-ta=1',IC_(b.t=='rax'?'🪖':'🔭'),'Entrenar',null,{cls:'ok2'});
  if(b.t=='lab'&&!b.nb)r+=actBtn('data-lb=1',IC_('⚗️'),'Investigar',null,{cls:'ok2'});if(b.t=='kalt'&&!b.nb&&!b.ruin)r+=actBtn('data-kg=1',IC_('👑'),'Rey',null,{cls:'ok2'});if(b.t=='cclan'&&!b.nb&&!b.ruin)r+=actBtn('data-cc=1',IC_('🏰'),'Clan',null,{cls:'ok2'});if(b.t=='hall'&&!b.nb&&!b.ruin)r+=actBtn('data-ls=1',IC_('🏞️'),'Paisaje',null,{cls:'ok2'});
  if(isW){const nbr=wNb(b)>0,on=WROW.on&&WROW.pk===b,tg=wTg(),multi=on&&tg.length>1,up=tg.filter(x=>x.lv<3&&!x.ruin&&reqOk(x)),c1=up.reduce((a,x)=>a+upc(x),0);
   if(nbr)r+=actBtn('data-wr=1',IC_('⇔'),on?'Soltar':'Fila',on?tg.length:'',{cls:on?'ok2':''});
   if(multi)r+=actBtn('data-wrot=1',IC_('↷'),'Rotar');
   r+=actBtn('data-ub=1',IC_(multi?'⚒️':'🔨'),multi?'Actualizar':'Mejorar',up.length?c1+' 🪙':'',{dis:!up.length||S.g<c1,bad:S.g<c1})}
  else if((d.cost||b.t=='hall')&&b.lv<mxl&&!b.up){const c=upc(b),why=upWhy(b);r+=actBtn('data-u=1',IC_('🔨'),'Mejorar',c+' '+CI(d.cur),{dis:why,bad:S[d.cur]<c})}
  if(isW)r+=actBtn('data-mv=1',IC_('↔️'),'Mover');
  if(b.t!='hall'&&!isW)r+=actBtn('data-del=1',IC_('🗑️'),dq===b?'¿Seguro?':'Demoler','+'+Math.round(d.cost*.2),{})}
 return h+`<div class=dock>${r}</div></div>`}
/* ---- información ---- */
function statsOf(b){const d=TY[b.t],mxl=lcap(b),nx=b.lv<mxl,nb={...b,lv:b.lv+1},R=[];
 R.push(['❤️','Vida',b.max,nx?mhp(nb):null,b.hp/b.max]);
 if(b.t=='hall'){R.push(['🪙','Capacidad de oro',HCAP[Math.min(10,b.lv)],nx?HCAP[Math.min(10,b.lv+1)]:null]);R.push(['💧','Capacidad de elixir',HCAP[Math.min(10,b.lv)],nx?HCAP[Math.min(10,b.lv+1)]:null]);if(BMAX[b.lv]||(nx&&BMAX[b.lv+1])){R.push(['🏠','Edificios máx.',BMAX[b.lv]||'—',nx?BMAX[b.lv+1]:null]);R.push(['🪤','Trampas máx.',TMAX[b.lv]||'—',nx?TMAX[b.lv+1]:null])}}
 if(b.t=='cannon'||b.t=='tower'||b.t=='mortar'||b.t=='rocket'){const tw=b.t=='tower',mo=b.t=='mortar',rk=b.t=='rocket',TB=rk?RKT:tw?TWR:mo?MOR:CAN,C0=TB[Math.min(13,b.lv)],C1=nx?TB[b.lv+1]:null;R.push(['💥','Daño por segundo',C0.dps,C1?C1.dps:null]);R.push([tw?'🏹':'⚔️',tw?'Daño por disparo':'Daño por ataque',C0.dmg,C1?C1.dmg:null]);R.push(['🎯','Alcance',mo?'4-11 casillas':(tw||rk)?'10 casillas':'9 casillas',null]);R.push(['⏱️','Velocidad de ataque',mo?'3 tiros cada 5 s':rk?'1 s':tw?'0.5 s':'0.8 s',null]);R.push(['🎯','Tipo de daño',mo?'Salpicadura - 1.5 casillas (con retroceso)':'Objetivo único',null]);R.push(['👁️','Objetivos',rk?'Aéreos':tw?'Terrestres y aéreos':'Terrestres',null])}else if(d.rg){R.push(['⚔️','Daño',dmgOf(b),nx?dmgOf(b,b.lv+1):null]);R.push(['🎯','Alcance',rgOf(b).toFixed(1),nx?rgOf(nb).toFixed(1):null])}
 if(d.prod){R.push([d.prod=='g'?'🪙':'💧','Producción /h',prodRate(b),nx?prodRate(nb):null]);R.push(['📦','Capacidad',Math.floor(b.st)+'/'+Math.round(LIMF(b)),nx?Math.round(LIMF(nb)):null,b.st/LIMF(b)])}
 if(isMn(b)){R.push(['⏱️','Tiempo para llenar',fmtFill(LIMF(b)/prodRate(b)*3600),nx?fmtFill(LIMF(nb)/prodRate(nb)*3600):null]);const bc=(MT(b)[Math.max(1,Math.min(MT(b).length-1,b.lv))].boost*2);R.push(['⚡',bc?'Potenciación x2 ('+Math.round(BOOST_SECS/60)+' min)':'Potenciación',bc?bc+' esmeraldas':'Desde nivel 5',null])}
 if(b.t=='gst'||b.t=='est')R.push(['📦','Capacidad',capS(b.lv),nx?capS(b.lv+1):null]);
 if(b.t=='camp')R.push(['⛺','Capacidad de unidades',CMP[cpLv(b)].cap,nx?CMP[b.lv+1].cap:null]);
 if(b.t=='rax'){R.push(['⏱️','Tiempo de entrenamiento','−'+Math.round((1-Math.max(.35,1-.15*(b.lv-1)))*100)+'%',nx?'−'+Math.round((1-Math.max(.35,1-.15*b.lv))*100)+'%':null]);const u=Object.keys(TU).find(k=>TU[k]==b.lv+1);if(u)R.push(['🔓','Desbloquea nv '+(b.lv+1),TR[u].n,null]);else if(TUS[b.lv+1])R.push(['🔓','Desbloquea nv '+(b.lv+1),TUS[b.lv+1][0]+' 🔜',null])}
 if(b.t=='lab'){const cn=l=>{let n=0;for(const k in TRS)for(const r of TRS[k])if(r&&r.lab<=l)n++;return n};R.push(['🔬','Mejoras de tropa disponibles',cn(b.lv),nx?cn(b.lv+1):null]);R.push(['⏱️','Entrenamiento de la tropa investigada','×2',null])}
 if(b.t=='kalt')R.push(['👑','Héroe','Rey Guerrero nv '+kLv(),null]);if(b.t=='cauldron')R.push(['⚡','Slots de hechizo','+'+b.lv,nx?'+'+(b.lv+1):null]);
 if(b.t=='hut')R.push(['🔨','Constructores',1,null]);
 if(b.t=='wall')R.push(['🧱','Material',['','Madera','Roca','Piedra tallada'][Math.min(3,b.lv)],nx?['','Madera','Roca','Piedra tallada'][b.lv+1]:null]);
 return R}
let _sIh='',_sIs='',_sIf='',_sIk='';
function drawPrev(b){const cvp=document.getElementById('ipv');if(!cvp)return;const c=cvp.getContext('2d'),W=cvp.width,H=cvp.height;
 const sg=g,sOX=OX,sOY=OY,sTH=TH,sVT=VT,sW=WMAP;g=c;VT=0;TH=25;OX=0;OY=0;WMAP={};
 try{c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,W,H);c.fillStyle='#7cc24a';c.fillRect(0,0,W,H);
  const s=TY[b.t].s,k=s==1?3.2:s==2?2.4:s==4?1.6:2,bx=3,by=3,cp=P(bx+s/2,by+s/2,0);c.setTransform(k,0,0,k,W/2-cp[0]*k,H*.56-cp[1]*k);
  for(let y=-3;y<10;y++)for(let x=-3;x<10;x++)poly([P(x,y),P(x+1,y),P(x+1,y+1),P(x,y+1)],(x+y)&1?'#79bd48':'#6fb43f');
  poly([P(bx,by),P(bx+s,by),P(bx+s,by+s),P(bx,by+s)],'#93d35a');
  g.textAlign='center';g.textBaseline='middle';drB({...b,x:bx,y:by,up:0,nb:0,rpr:0,ruin:0,hp:b.max,ghost:0})}catch(e){}
 g=sg;OX=sOX;OY=sOY;TH=sTH;VT=sVT;WMAP=sW;c.setTransform(1,0,0,1,0,0)}
function infoDraw(){const el=document.getElementById('infoM');if(!el)return;if(UI.tinfo&&(UI.train||UI.lab)){tinfoDraw();return}if(UI.tinfo){UI.tinfo=0}el.style.zIndex='';{const pv=document.getElementById('tpv'),cv=document.getElementById('ipv');if(pv&&pv.style.display!='none'){pv.style.display='none';cv.style.display='';_sIh=_sIs=_sIf=_sIk=''}}
 if(!UI.info||!pk||mode!='v'||tab!='info'){el.style.display='none';document.body.classList.remove('info');if(!pk)UI.info=0;_sIk='';return}
 const b=pk,d=TY[b.t],mxl=lcap(b),lvn=Math.min(b.lv,mxl);el.style.display='flex';document.body.classList.add('info');
 const hh=`<div class=ih><b>${d.n}</b> <em>de nivel ${lvn}</em></div><div class=ibar><i style="width:${Math.round(lvn/mxl*100)}%"></i></div>`;
 if(hh!==_sIh){document.getElementById('iHead').innerHTML=hh;_sIh=hh}
 let st='';for(const[ic,lb,v,n,bar]of statsOf(b))st+=`<div class=st><span class=si>${ic}</span><div><small>${lb}</small><b>${v}${n!=null?` <u>→ ${n}</u>`:''}</b>${bar!=null?`<div class=sb2><i style="width:${Math.round(Math.max(0,Math.min(1,bar))*100)}%"></i></div>`:''}</div></div>`;
 if(b.t=='hall'&&REQ[b.lv])st+='<div class="st wide"><b style="font-size:15px">Requisitos nivel '+(b.lv+1)+'</b><br>'+(REQ[b.lv]||[]).map(([t,n])=>`<span style="color:${cnt(t)>=n?'#2c9a1c':'#c8281a'}">${TY[t].n} ${cnt(t)}/${n}</span>`).join(' · ')+'</div>';
 if(b.t=='hall'&&NEWBY[b.lv+1])st+=newbyHTML(b.lv+1);st+=`<div class="st wide">${DESC[b.t]||''}</div>`;
 if(st!==_sIs){document.getElementById('iStats').innerHTML=st;_sIs=st}
 const why=b.ruin?'Destruido: repáralo primero':upWhy(b),mm=b.lv<mxl&&!b.ruin,c=b.t=='wall'?upc(b):(mm?upc(b):0);
 let ft='';
 if(b.up>0)ft=`<div class=du style="flex:1"><small>${b.nb?'Construyendo':b.rpr?'Reparando':'Mejorando'}</small><b>${fmtT(b.up)}</b></div>`;
 else if(mm)ft=`<button data-iu=1 class="${why?'off':''}"><span>Mejorar</span><small>${c} ${CI(d.cur||'g')}</small></button><div class="du${why?' bad':''}">${why?`<b>${why}</b>`:`Duración de la mejora:<b>${b.t=='wall'?'Instantánea':fmtT(UT(b))}</b>`}</div>`;
 else ft=`<div class=du style="flex:1"><b>${b.ruin?why:'Nivel máximo'}</b></div>`;
 if(ft!==_sIf){document.getElementById('iFoot').innerHTML=ft;_sIf=ft}
 const key=b.t+'|'+b.lv;if(key!==_sIk){_sIk=key;drawPrev(b)}}
function upOne(b){if(b.t=='wall'){wUp([b]);return}const t=TY[b.t],c=upc(b);if(b.up>0||b.lv>=lcap(b)||S[t.cur]<c||!builders()||!reqOk(b)){snd('deny');return}S[t.cur]-=c;b.up=b.ut=UT(b);snd(520)}
document.body.insertAdjacentHTML('beforeend','<div id="infoM"><div class="im"><div id="iHead"></div><button class="ix" data-ix=1>✕</button><div class="ib"><div class="ipw"><canvas id="ipv" width="300" height="300"></canvas><div id="tpv"></div></div><div class="ist" id="iStats"></div></div><div class="if" id="iFoot"></div></div></div>');
document.getElementById('infoM').addEventListener('click',e=>{const bt=e.target.closest('button');if(e.target.id==='infoM'){if(UI.tinfo){UI.tinfo=0;snd('ui')}else UI.info=0;ui();return}if(!bt)return;const d=bt.dataset;try{AC.resume()}catch(_){}
 if(d.ix){if(UI.tinfo)UI.tinfo=0;else UI.info=0;snd('ui')}else if(d.iu&&pk){upOne(pk)}else if(d.tup){troopUp()}else if(d.tgm){troopGem()}ui();save()});

/* ================= v20: escombros y zona en raideos, aviso de zona roja ================= */
function drRubble(b){const d=TY[b.t],s=d.s,x=b.x,y=b.y;
 if(b.t=='wall'){drWall({...b,ruin:1,hp:1});return}
 const sd=x*131+y*71+s,R=n=>MR(sd+n);
 const pts=[];for(let i=0;i<16;i++){const a=i/16*6.2832,rx=s*.5*(.86+.14*R(i)),k=[Math.cos(a),Math.sin(a)];pts.push(P(x+s/2+k[0]*rx*1.02,y+s/2+k[1]*rx*1.02))}
 g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.fillStyle='#6a5a45';g.fill();
 const n=s*s*3,L=[];for(let i=0;i<n;i++)L.push([x+.2+R(i*3+50)*(s-.4),y+.2+R(i*3+51)*(s-.4),R(i*3+52)]);L.sort((a,c)=>a[0]+a[1]-c[0]-c[1]);
 const cols=['#7d7d80','#6a6a6e','#8d8478','#5e5e62'];
 for(const[u,v,r]of L){const w=.14+r*.22,hh=2+r*6,c=r>.82?'#7a5230':cols[(r*40|0)%4];bx3(u-w/2,v-w/2,u+w/2,v+w/2,0,hh,c,sh(c,1.15))}
 g.strokeStyle='rgba(40,25,10,.55)';g.lineWidth=2;g.beginPath();for(let i=0;i<4;i++){const u=x+.3+R(i+90)*(s-.6),v=y+.3+R(i+95)*(s-.6),a=R(i+99)*3.14,p=P(u,v,3),q=P(u+Math.cos(a)*.45,v+Math.sin(a)*.45,6);g.moveTo(p[0],p[1]);g.lineTo(q[0],q[1])}g.stroke()}
let _zwT=0;
function zoneWarn(){A.zw=performance.now()+4000;snd('deny');const el=document.getElementById('zwarn');if(!el)return;el.style.display='block';clearTimeout(_zwT);_zwT=setTimeout(()=>{el.style.display='none'},4000)}
document.body.insertAdjacentHTML('beforeend','<div id="zwarn">⛔ No se pueden colocar tropas en la zona roja</div>');

/* ================= v21: IA de tropas (huecos en muros, prioridades, marca de objetivo) ================= */
const DEFT=['cannon','tower','mortar','rocket','wizard'];
function tierOf(b){const all=A.all!==false,ty=b.t;
 if(ty=='hall')return A.hf?-1:(all?8:3);
 if(DEFT.includes(ty))return 0;if(ty=='gst'||ty=='est')return 1;if(ty=='mine'||ty=='pump')return 2;
 if(!all)return 99;const k={rax:3,camp:4,lab:5,scout:6}[ty];return k==null?7:k}
function cands(D,al){const nt=al.filter(b=>b.t!='wall'&&!TY[b.t].trap);
 if(D.pf){const f=nt.filter(b=>D.pf.includes(b.t));if(f.length)return[f]}
 {const lst=nt.filter(b=>b.t!='hall'&&tierOf(b)<99),hl=nt.filter(b=>b.t=='hall'&&tierOf(b)<99);
  if(A.hf&&hl.length)return lst.length?[hl,lst]:[hl];const o=[];if(lst.length)o.push(lst);if(hl.length)o.push(hl);return o}
 /* v39: las defensas siguen primero y el ayuntamiento al final, pero entre almacenes/minas/resto la IA elige lo más cercano (con una ligera preferencia por prioridad) */
 const m={},mix=[];for(const b of nt){const k=tierOf(b);if(k>=99)continue;if(b.t!='hall'&&k>=1&&!DEFT.includes(b.t))mix.push(b);else(m[k]=m[k]||[]).push(b)}
 const ks=Object.keys(m).map(Number).sort((a,b)=>a-b),out=[];for(const k of ks)if(k<1)out.push(m[k]);if(mix.length){mix.mixed=1;out.push(mix)}for(const k of ks)if(k>=1)out.push(m[k]);return out}
const MXB={gst:8,est:8,mine:6,pump:6,rax:4,camp:3,lab:2,scout:1},mxb=b=>MXB[b.t]||0;
function dfield(sx,sy,wp){const n=E.N,{blk,wc}=E.grid,dist=new Float64Array(n*n).fill(1e9),prev=new Int32Array(n*n).fill(-1),h=[[0,sy*n+sx]];dist[sy*n+sx]=0;
 const push=it=>{h.push(it);let i=h.length-1;while(i>0){const p=(i-1)>>1;if(h[p][0]<=h[i][0])break;[h[p],h[i]]=[h[i],h[p]];i=p}};
 const pop=()=>{const r=h[0],l=h.pop();if(h.length){h[0]=l;let i=0;for(;;){const a=2*i+1,b=a+1;let m=i;if(a<h.length&&h[a][0]<h[m][0])m=a;if(b<h.length&&h[b][0]<h[m][0])m=b;if(m==i)break;[h[m],h[i]]=[h[i],h[m]];i=m}}return r};
 while(h.length){const[d,u]=pop();if(d>dist[u])continue;const ux=u%n,uy=(u/n)|0;
  for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){if(!dx&&!dy)continue;const x=ux+dx,y=uy+dy;if(x<0||y<0||x>=n||y>=n)continue;const v=y*n+x;if(blk[v]||(!wp&&wc[v]))continue;
   if(dx&&dy&&(blk[uy*n+x]||blk[y*n+ux]||wc[uy*n+x]||wc[y*n+ux]))continue;
   const nd=d+(dx&&dy?1.41:1)+wc[v];if(nd<dist[v]){dist[v]=nd;prev[v]=u;push([nd,v])}}}
 return{dist,prev}}
function bestCell(F,b,rr){const n=E.N,s=TY[b.t].s,m=Math.ceil(rr)+1;let bc=-1,bd=1e8;
 for(let y=Math.max(0,b.y-m);y<Math.min(n,b.y+s+m);y++)for(let x=Math.max(0,b.x-m);x<Math.min(n,b.x+s+m);x++){const d=F.dist[y*n+x];if(d<bd&&edge({x:x+.5,y:y+.5},b)<=rr){bd=d;bc=y*n+x}}
 return bc<0?null:[bc,bd]}
function pathTo(F,c){const n=E.N,p=[];let u=c;while(u>=0){p.push([u%n,(u/n)|0]);u=F.prev[u]}return p.reverse()}
function chooseG(t,D,tiers){const n=E.N,rr=Math.max(D.rg,.6),sx=Math.max(0,Math.min(n-1,Math.floor(t.x))),sy=Math.max(0,Math.min(n-1,Math.floor(t.y)));
 const F0=dfield(sx,sy,0);let F1=null;
 for(const tier of tiers){
  let best=null,bd=1e8;
  for(const b of tier){const r=bestCell(F0,b,rr);if(r){const sc=r[1]-(tier.mixed?mxb(b):0);if(sc<bd){bd=sc;best=[b,r[0]]}}}
  if(best)return{b:best[0],F:F0,c:best[1],wp:0};
  if(!F1)F1=dfield(sx,sy,1);
  for(const b of tier){const r=bestCell(F1,b,rr);if(r){const sc=r[1]-(tier.mixed?mxb(b):0);if(sc<bd){bd=sc;best=[b,r[0]]}}}
  if(best)return{b:best[0],F:F1,c:best[1],wp:1}}
 return null}
function markT(b){const now=performance.now();A.marks=A.marks||[];const m=A.marks.find(m=>m.b===b);if(m)m.t0=now;else A.marks.push({b,t0:now})}
function acquire(t,D,al,ws){t.path=null;t.tg=null;
 if(D.w&&ws&&ws.length){let m=null,bd=1e9;for(const w of ws){if(w.hp<=0)continue;const q=edge(t,w);if(q<bd){bd=q;m=w}}if(m){t.tg=m;markT(m);return}}
 const tiers=cands(D,al);if(!tiers.length)return;
 const r=chooseG(t,D,tiers);
 if(!r){t.tg=tiers[0].reduce((m,b)=>!m||edge(t,b)<edge(t,m)?b:m,null);if(t.tg)markT(t.tg);return}
 if(D.w&&r.wp){for(const[x,y]of pathTo(r.F,r.c)){if(E.grid.wc[y*E.N+x]>0){const w=ws.find(w=>w.x==x&&w.y==y);if(w){t.tg=w;markT(w);return}}}}
 t.tg=r.b;markT(r.b);
 if(!D.w){t.path=pathTo(r.F,r.c);t.path.shift();t.pt=.5+Math.random()*.3}}
function pickAir(t,D,al){t.tg=null;const tiers=cands(D,al);if(!tiers.length)return;t.tg=tiers[0].reduce((m,b)=>!m||edge(t,b)<edge(t,m)?b:m,null);markT(t.tg)}
/* v69: tropas atascadas (sitio apretado): prueban otro objetivo y, si sigue igual, golpean lo más cercano que las estorba */
function stuckRe(t,D,al,ws){const old=t.tg;t.sn=(t.sn||0)+1;
 if(t.sn<=1){acquire(t,D,al.filter(b=>b!==old),ws);if(t.tg&&t.tg!==old)return;t.tg=old}
 t.sn=0;let m=null,bd=1e9;for(const b of al){if(b===old||b.hp<=0)continue;const q=edge(t,b);if(q<bd){bd=q;m=b}}
 if(m&&bd<3){t.tg=m;t.path=null;markT(m)}}
function repath(t,D){t.pt=.5+Math.random()*.3;const n=E.N,tg=t.tg,rr=Math.max(D.rg,.6),sx=Math.max(0,Math.min(n-1,Math.floor(t.x))),sy=Math.max(0,Math.min(n-1,Math.floor(t.y))),goal=(x,y)=>edge({x:x+.5,y:y+.5},tg)<=rr;
 t.path=dj(sx,sy,goal,0)||dj(sx,sy,goal,1);if(t.path&&t.path.length)t.path.shift()}
function drMarks(now){if(!A.marks||!A.marks.length)return;A.marks=A.marks.filter(m=>now-m.t0<1500&&m.b.hp>0);
 for(const m of A.marks){const u=(now-m.t0)/1500,b=m.b,s=TY[b.t].s,a=Math.max(0,1-u*u*u),pul=1+.1*Math.sin(now/90);
  const pts=[[b.x-.15,b.y-.15],[b.x+s+.15,b.y-.15],[b.x+s+.15,b.y+s+.15],[b.x-.15,b.y+s+.15]].map(p=>P(p[0],p[1],0));
  g.save();g.globalAlpha=a;g.lineJoin='round';g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.fillStyle='rgba(255,59,48,.18)';g.fill();g.strokeStyle='#ff3b30';g.lineWidth=3.5;g.stroke();
  const[cx,cy]=P(b.x+s/2,b.y+s/2,(TY[b.t].h||20)+30+Math.abs(Math.sin(now/130))*10);
  g.fillStyle='#ff3b30';g.strokeStyle='#fff';g.lineWidth=2.5;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx-14*pul,cy-19*pul);g.lineTo(cx-5,cy-19*pul);g.lineTo(cx-5,cy-38*pul);g.lineTo(cx+5,cy-38*pul);g.lineTo(cx+5,cy-19*pul);g.lineTo(cx+14*pul,cy-19*pul);g.closePath();g.stroke();g.fill();g.restore()}}
function resetTg(){if(!A||!A.tr)return;for(const t of A.tr)if(t.hp>0){t.tg=null;t.path=null}}
function atkUI(){const tc=Object.keys(TR).filter(k=>(A.army[k]||0)>0).map(k=>`<button class="tc ${pick==k?'on':''}" data-p=${k}><img class=ti src="${tIcon(k)}"><b class=bd>${A.army[k]}</b></button>`).join('');
 const sc=Object.keys(SP).filter(k=>A.sp[k]>0).map(k=>`<button class="tc ${pick==k?'on':''}" data-p=${k}><span class=ib>${SP[k].e}</span><b class=bd>${A.sp[k]}</b></button>`).join('');
 const q=A.qty[pick]||1,al=A.all!==false;
 return `<div class="dock tr">${tc}${sc}</div><div class="dock ctl"><button class="db sm2" data-r=1><i>🏳️</i>${UI.rq?'¿Seguro?'+(E&&E.real?' −1 '+ICO('ranking','🏆'):''):'Rendirse'}</button>`+(SPK(pick)?'':`<button class="db sm2" data-qv=1><i>×${q>=99?'Todo':q}</i>Cantidad</button>`)+`<button class="db sm2" data-gm=1><i>${al?'💥':'🎯'}</i>${al?'Romper todo':'Lo necesario'}</button><button class="db sm2" data-hf=1><i>🏰</i>${A.hf?'Ayunt. primero':'Ayunt. último'}</button></div><div class=sm>Elige una tropa y toca el terreno lejos de los edificios</div>`}

/* ================= v22: Cuartel nuevo, grama unida ================= */
function swordG(x,y,ang,len,gold){g.save();g.translate(x,y);g.rotate(ang);g.fillStyle='#eef4fc';g.strokeStyle='#76839a';g.lineWidth=1.3;g.beginPath();g.moveTo(0,-len);g.lineTo(4.6,-len+11);g.lineTo(4,0);g.lineTo(-4,0);g.lineTo(-4.6,-len+11);g.closePath();g.fill();g.stroke();
 g.strokeStyle='#b4c2d8';g.lineWidth=1.2;g.beginPath();g.moveTo(0,-len+6);g.lineTo(0,-2);g.stroke();
 g.fillStyle=gold;g.strokeStyle='#7a4d05';g.lineWidth=1.2;g.fillRect(-12,0,24,5);g.strokeRect(-12,0,24,5);g.fillStyle='#7a4a1f';g.fillRect(-2.4,5,4.8,11);g.fillStyle=gold;g.beginPath();g.arc(0,18,3.4,0,7);g.fill();g.stroke();g.restore()}
function drRax(b){const lv=Math.max(1,Math.min(12,b.lv|0)),T=Math.ceil(lv/3),Q=(u,v,z)=>P(b.x+1.5+(u-1.5)*.8,b.y+1.5+(v-1.5)*.8,z),
 pl=(a,c,st,lw)=>{g.beginPath();a.forEach((p,i)=>{const q=Q(p[0],p[1],p[2]);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])});g.closePath();g.fillStyle=c;g.fill();if(st){g.strokeStyle=st;g.lineWidth=lw||1.2;g.stroke()}},
 ln=(a,c,w)=>{g.beginPath();a.forEach((p,i)=>{const q=Q(p[0],p[1],p[2]);i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1])});g.strokeStyle=c;g.lineWidth=w;g.stroke()},
 u0=.3,u1=2.7,v0=.3,v1=2.7,zb=8,zw=32,zr=54,gold=T>=2?'#f2b81f':'#d9a441',rd=['#c4412c','#b83a28','#a8321f','#8f2a8f'][T-1],rd2=['#a33323','#962d1d','#872617','#712271'][T-1];
 pl([[.1,.1,0],[3.15,.2,0],[3.2,3.2,0],[.15,3.1,0]],'rgba(20,40,10,.2)');
 /* base de piedra */
 pl([[u0,v1,0],[u1,v1,0],[u1,v1,zb],[u0,v1,zb]],'#9a9aa2','#52525a');pl([[u1,v0,0],[u1,v1,0],[u1,v1,zb],[u1,v0,zb]],'#6c6c75','#52525a');
 for(let i=0;i<4;i++){const u=u0+(i+.5)*(u1-u0)/4;ln([[u,v1,0],[u,v1,zb]],'rgba(40,40,50,.5)',1);const v=v0+(i+.5)*(v1-v0)/4;ln([[u1,v,0],[u1,v,zb]],'rgba(30,30,40,.5)',1)}
 ln([[u0,v1,4],[u1,v1,4],[u1,v0,4]],'rgba(40,40,50,.45)',1);
 /* paredes de madera */
 const wd=['#a8703d','#9a6535','#b07a45','#93602f'];
 for(let i=0,u=u0;u<u1-.01;i++,u+=.2)pl([[u,v1,zb],[Math.min(u1,u+.2),v1,zb],[Math.min(u1,u+.2),v1,zw],[u,v1,zw]],sh(wd[i%4],.98),'rgba(40,20,6,.55)',1);
 for(let i=0,v=v0;v<v1-.01;i++,v+=.2)pl([[u1,v,zb],[u1,Math.min(v1,v+.2),zb],[u1,Math.min(v1,v+.2),zw],[u1,v,zw]],sh(wd[i%4],.64),'rgba(30,14,4,.55)',1);
 pl([[u1-.06,v1-.06,zb],[u1+.04,v1-.06,zb],[u1+.04,v1+.04,zb],[u1-.06,v1+.04,zb],[u1-.06,v1+.04,zw],[u1+.04,v1+.04,zw]],'#5a3716');
 ln([[u1,v1,zb],[u1,v1,zw]],'#4a2d10',4);ln([[u0,v1,zb],[u0,v1,zw]],'#4a2d10',4);ln([[u1,v0,zb],[u1,v0,zw]],'#4a2d10',4);
 ln([[u0,v1,zb+.5],[u1,v1,zb+.5],[u1,v0,zb+.5]],'#5a3716',3);
 /* escalón y puerta (cara +v) */
 pl([[1,v1,2.5],[2,v1,2.5],[2,v1+.3,2.5],[1,v1+.3,2.5]],'#b4b4bc','#52525a');pl([[1,v1+.3,0],[2,v1+.3,0],[2,v1+.3,2.5],[1,v1+.3,2.5]],'#85858e','#52525a');
 pl([[1.1,v1,3],[1.9,v1,3],[1.9,v1,22],[1.72,v1,26.5],[1.28,v1,26.5],[1.1,v1,22]],'#2a170b','#c9c9d0',2.2);
 pl([[1.1,v1,3],[1.5,v1,3],[1.5,v1,22],[1.28,v1,26.5],[1.1,v1,22]],'rgba(0,0,0,.28)');
 /* ventana (cara +u) */
 pl([[u1,1.15,16],[u1,1.85,16],[u1,1.85,26],[u1,1.15,26]],'#2a170b','#d9c08a',2);ln([[u1,1.5,16],[u1,1.5,26]],'#d9c08a',1.5);ln([[u1,1.15,21],[u1,1.85,21]],'#d9c08a',1.5);
 /* techo a cuatro aguas: las dos caras visibles (+v y +u) llevan tejas */
 const ra=-.1,rb=3.1,r0=1.0,r1=2.0,vm=1.5,zev=31;
 /* vertientes traseras (se ven por encima de las delanteras desde la cámara): -v y -u */
 pl([[ra,ra,zev],[rb,ra,zev],[r1,vm,zr],[r0,vm,zr]],sh(rd,.86),rd2,1.6);
 for(let k=1;k<6;k++){const f=k/6,v=ra+(vm-ra)*f,z=zev+(zr-zev)*f,ua=ra+(r0-ra)*f,ub=rb-(rb-r1)*f;ln([[ua,v,z],[ub,v,z]],'rgba(70,10,5,.34)',1.2)}
 pl([[ra,ra,zev],[ra,rb,zev],[r0,vm,zr]],sh(rd2,.9),'#5a170d',1.6);
 for(let k=1;k<5;k++){const f=k/5,u=ra+(r0-ra)*f,z=zev+(zr-zev)*f,va=ra+(vm-ra)*f,vb=rb-(rb-vm)*f;ln([[u,va,z],[u,vb,z]],'rgba(60,8,4,.34)',1.2)}
 ln([[ra,ra,zev],[rb,ra,zev]],'#6d1f12',3);ln([[ra,ra,zev],[ra,rb,zev]],'#5a170d',3);
 /* faldón derecho (+u), más oscuro */
 pl([[rb,ra,zev],[rb,rb,zev],[r1,vm,zr]],rd2,'#5a170d',1.6);
 for(let k=1;k<6;k++){const f=k/6,u=rb-(rb-r1)*f,z=zev+(zr-zev)*f,va=ra+(vm-ra)*f,vb=rb-(rb-vm)*f;ln([[u,va,z],[u,vb,z]],'rgba(60,8,4,.4)',1.2)}
 for(let k=1;k<6;k++){const f=k/6,va=ra+(vm-ra)*f,vb=rb-(rb-vm)*f,u=rb-(rb-r1)*f,z=zev+(zr-zev)*f;if(k%2)ln([[u,va+(vb-va)*.33,z],[rb-(rb-r1)*(k-1)/6,va+(vb-va)*.33-(k>0?0:0),zev+(zr-zev)*(k-1)/6]],'rgba(60,8,4,.25)',1)}
 /* faldón delantero (+v) */
 pl([[ra,rb,zev],[rb,rb,zev],[r1,vm,zr],[r0,vm,zr]],rd,rd2,1.6);
 for(let k=1;k<6;k++){const f=k/6,v=rb-(rb-vm)*f,z=zev+(zr-zev)*f,ua=ra+(r0-ra)*f,ub=rb-(rb-r1)*f;ln([[ua,v,z],[ub,v,z]],'rgba(70,10,5,.38)',1.3);
  const f0=(k-1)/6,v0_=rb-(rb-vm)*f0,z0_=zev+(zr-zev)*f0,ua0=ra+(r0-ra)*f0,ub0=rb-(rb-r1)*f0,off=k%2?.18:0;
  for(let u=ua+.3+off;u<ub-.1;u+=.36){const t0=(u-ua)/(ub-ua),t1=t0;ln([[ua0+(ub0-ua0)*t0,v0_,z0_],[u,v,z]],'rgba(70,10,5,.28)',1.1)}}
 /* aristas: alero frontal, arista de la esquina y cumbrera */
 ln([[ra,rb,zev],[rb,rb,zev]],'#6d1f12',3.2);ln([[rb,rb,zev],[r1,vm,zr]],'#5a170d',3.6);ln([[rb,ra,zev],[rb,rb,zev]],'#5a170d',3);
 ln([[r0,vm,zr],[r1,vm,zr]],T>=2?gold:'#7a2316',4.6);
 if(T>=2){for(let u=r0+.1;u<=r1+.01;u+=.3){const q=Q(u,vm,zr+1);g.fillStyle=gold;g.beginPath();g.arc(q[0],q[1],2,0,7);g.fill()}}
 /* espadas cruzadas en el techo */
 const[sx,sy]=Q(1.5,2.28,41.5);g.save();g.translate(sx,sy);g.scale(1,.92);swordG(0,2,-.78,27,gold);swordG(0,2,.78,27,gold);g.restore();
 if(T>=3){for(const[u,v]of[[u1+.05,v1+.02],[u0-.02,v1+.02]]){ln([[u,v,zw],[u,v,zw+16]],'#4a2d10',2.5);const q=Q(u,v,zw+16),w=T==4?'#8f2a8f':'#e0462f';g.fillStyle=w;g.beginPath();g.moveTo(q[0],q[1]);g.lineTo(q[0]+(u>1?13:-13),q[1]+4);g.lineTo(q[0],q[1]+8);g.closePath();g.fill();g.strokeStyle='#3a1a08';g.lineWidth=1;g.stroke()}}
 if(T==4){const q=Q(1.5,1.5,zr+5),t=performance.now()/500;const gr=g.createRadialGradient(q[0]-1,q[1]-2,1,q[0],q[1],7);gr.addColorStop(0,'#eaffff');gr.addColorStop(.5,'#5fd6ff');gr.addColorStop(1,'#1f7fb0');g.fillStyle=gr;g.beginPath();g.arc(q[0],q[1],5+.6*Math.sin(t),0,7);g.fill();g.strokeStyle='#fff';g.lineWidth=1;g.stroke()}}
/* grama bajo cada estructura: parche cuadrado, con textura, que resalta sobre el terreno limpio */
function drGrass0(){const L=mode=='a'?E.b:S.b;
 for(const b of L){if(!b||(b.hp<=0&&mode!='a')||b.t=='wall'||!TY[b.t]||TY[b.t].trap)continue;
  const s=TY[b.t].s,sd=b.x*131+b.y*71+s,q=(u,v)=>P(b.x+u,b.y+v);
  g.beginPath();[[0,0],[s,0],[s,s],[0,s]].forEach((p,i)=>{const a=q(p[0],p[1]);i?g.lineTo(a[0],a[1]):g.moveTo(a[0],a[1])});g.closePath();
  g.fillStyle='#64a82f';g.fill();
  g.save();g.clip();
  g.beginPath();for(let i=0;i<s*s*16;i++){const u=.03+MR(sd+i*3)*(s-.06),v=.03+MR(sd+i*3+1)*(s-.06),a=q(u,v);g.moveTo(a[0],a[1]);g.lineTo(a[0]+(MR(sd+i)-.5)*3,a[1]-2.5-MR(sd+i*7)*3.5)}
  g.strokeStyle='#4b8c22';g.lineWidth=1.3;g.stroke();
  g.beginPath();for(let i=0;i<s*s*11;i++){const u=.03+MR(sd+i*5+2)*(s-.06),v=.03+MR(sd+i*5+4)*(s-.06),a=q(u,v);g.moveTo(a[0],a[1]);g.lineTo(a[0]+(MR(sd+i+9)-.5)*3,a[1]-2-MR(sd+i*11)*3.5)}
  g.strokeStyle='#8fd04a';g.lineWidth=1.1;g.stroke();
  g.restore()}}

/* ================= v24: pantalla "Mi ejército" del cuartel + carta de información de tropa ================= */
let trMT=0;
function trMsg(t){UI.tm=t;clearTimeout(trMT);trMT=setTimeout(()=>{UI.tm=null;trainDraw()},3800);try{snd('deny')}catch(e){}trainDraw()}
function trWhy(k){const b=pk;if(!b||b.t!='rax')return'';
 if(String(k).startsWith('soon')){const l=+String(k).slice(4);return 'Esta tropa está en desarrollo: se desbloqueará con el cuartel nivel '+l+' cuando esté lista.'}
 const d=TR[k],L=TU[k]||1;
 if(b.lv<L){const rq=RXH[L-1]||1;return hl()<rq?`Sube el Ayuntamiento a nivel ${rq} y mejora el cuartel a nivel ${L} para desbloquear esta tropa.`:`Mejora el cuartel a nivel ${L} para desbloquear esta tropa.`}
 if(S.e<d.cost)return 'No tienes suficiente elixir para entrenar esta tropa.';
 if(d.sp>campCap()-used(S.army)-qsp())return 'No hay espacio en los campamentos: mejora o construye más campamentos.';
 return''}
function trainDraw(){const el=$e('train');
 if(!UI.train||!pk||pk.t!='rax')return trainDrawOld();
 LV={};LVP={};const q=pk.q||[],u=used(S.army)+qsp(),cap=campCap(),fr=cap-used(S.army)-qsp();
 const army=Object.keys(TR).filter(k=>(S.army[k]||0)>0).map(k=>`<div class=ac><img class=ti2 src="${tIcon(k)}"><b class=ax>×${S.army[k]}</b><button class=rmb data-rm=${k}>−</button></div>`).join('')||'<span class=sm>Sin tropas todavía</span>';
 const qh=q.length?q.map((j,i)=>{const t=ttb(j.k,pk),f=i==0?1-(j.t==null?t:j.t)/t:0;return `<button class=qs data-qc=${i}><img class=ti src="${tIcon(j.k)}"><b>×${j.n}</b>${i==0?lvP('q0',f):'<span class=sm>espera</span>'}</button>`}).join(''):'<span class=sm>Cola vacía (toca una tropa abajo)</span>';
 const sp=Object.keys(SP).map(k=>`<button class=spc data-s=${k} ${spLocked()||S.e<SP[k].cost||spn()>=spCap()?'disabled':''}><span class=sbig>${SP[k].e}</span><b>×${S.sp[k]}</b><small>${SP[k].cost} 💧</small></button>`).join('');
 const cards=Object.keys(TR).map(k=>{const d=TR[k],lock=pk.lv<(TU[k]||1),bad=!lock&&(S.e<d.cost||d.sp>fr);
  return `<div class="tc2${lock?' lock':bad?' dim':''}" data-tr=${k}><button class=ibtn data-ti=${k}>i</button><img class=ti2 src="${tIcon(k)}"><span class=nm>${d.n}</span><span class=ct>${lock?'🔒 Cuartel nv '+TU[k]:d.cost+' 💧 · '+ttb(k,pk)+'s'+(S.rs&&S.rs.k==k?' ×2':'')}</span></div>`}).join('')
  +Object.keys(TUS).map(l=>`<div class="tc2 lock" data-soon=${l}><button class=ibtn data-ti=soon${l}>i</button><span class="ti2 emo">${TUS[l][1]}</span><span class=nm>${TUS[l][0]}</span><span class=ct>🔒 Cuartel nv ${l}</span></div>`).join('');
 const h=`<div class=tmw><div class=tmtop><div class=tmhead><span class=tmtab>Mi ejército</span><button class=tmx data-tc=close>✕</button></div><div class=tmbody>
  <div class="tmc cap"><div class=tmct><b>🪖 ${u}/${cap}</b><span class=sm>Cuartel nv ${pk.lv} · −${Math.round((1-Math.max(.35,1-.15*(pk.lv-1)))*100)}% de tiempo · entrena por su cuenta</span></div>${lvP('sp',u/Math.max(1,cap))}</div>
  <div class=tmc><h4>Ejército</h4><div class=tmrow>${army}</div></div>
  <div class=tmc><h4>En entrenamiento <small>(toca para cancelar uno)</small></h4><div class=tmrow>${qh}</div>${q.length?`<div class=tmq><span class=sm>Total: ${lvT('qt',fmtT(qRem(q,pk)))}</span>${gbtn('data-gq=1',qRem(q,pk),'Terminar cola ya')}</div>`:''}</div>
  <div class=tmc><h4>Hechizos <small>${spLocked()?'🔒 Se desbloquean con el Ayuntamiento nv 5':spn()+'/'+spCap()+' · se preparan al instante'}</small></h4><div class=tmrow>${sp}</div></div>
  </div></div><div class=tmbot><div class=tg>${cards}</div></div>${UI.tm?`<div class=trmsg>${UI.tm}</div>`:''}</div>`;
 el.style.display='flex';el.className='ov trm';
 if(h!==_sTr){const tg=el.querySelector('.tg'),tp=el.querySelector('.tmbody'),a=tg?[tg.scrollLeft,tg.scrollTop]:[0,0],c=tp?tp.scrollTop:0;el.innerHTML=h;_sTr=h;const n1=el.querySelector('.tg'),n2=el.querySelector('.tmbody');if(n1){n1.scrollLeft=a[0];n1.scrollTop=a[1]}if(n2)n2.scrollTop=c}
 syncLV(el)}
/* carta de información de tropa (por ahora solo el Guerrero) */
const TINFO={barb:1,arch:1,giant:1,gob:1};
function tinfoDraw(){const el=document.getElementById('infoM'),k=UI.tinfo,D=TR[k];el.style.display='flex';el.style.zIndex=12;
 document.getElementById('ipv').style.display='none';const pv=document.getElementById('tpv');pv.style.display='flex';
 pv.innerHTML=`<div class=tart><img src="${tIcon(k)}"><div class=slab></div></div>`;
 document.getElementById('iHead').innerHTML=`<div class=ih><b>${D.n}</b> <em>de nivel 1</em></div><div class=ibar><i style="width:12%"></i></div>`;
 const rw=[['❤️','Vida',Math.round(D.hp*labF())],['💥','Daño por segundo',(D.dmg/D.rt).toFixed(1)],['📏','Alcance',D.rg+' casillas'],['🎯','Tipo de daño',D.ar?'Área':'Único'],['👁️','Objetivos',D.fly?'Terrestres y aéreos':'Terrestres'],['🏠','Espacio en viviendas',D.sp],['👟','Velocidad',D.v]];
 document.getElementById('iStats').innerHTML=rw.map(([ic,lb,v])=>`<div class=st><span class=si>${ic}</span><div><small>${lb}:</small><b>${v}</b></div></div>`).join('');
 document.getElementById('iFoot').innerHTML=`<button class=off disabled><span>Mejorar</span><small>Laboratorio</small></button><div class="du bad"><b>Mejoras de tropa próximamente</b></div>`;
 _sIh=_sIs=_sIf=_sIk=''}

/* ================= v25: Guerrero rediseñado (niveles, laboratorio, sprite animado 3/4) ================= */
var BL=[{dps:8,hp:45},{dps:11,hp:54},{dps:14,hp:65},{dps:18,hp:85},{dps:23,hp:105},{dps:26,hp:125},{dps:30,hp:160}];
var BR=[null,{c:20000,t:7200,lab:1},{c:60000,t:18000,lab:3},{c:200000,t:43200,lab:5},{c:650000,t:86400,lab:6},{c:1400000,t:129600,lab:7},{c:2100000,t:216000,lab:8}];
const tlv=k=>Math.max(1,Math.min((TLV[k]||[0]).length,(S.tl&&S.tl[k])||1));
const thp=k=>(typeof AUT!='undefined'&&AUT[k])?AUT[k][aul(k)].hp:TLV[k]?TLV[k][tlv(k)-1].hp:Math.round(TR[k].hp*labF());
const tdm=k=>(typeof AUT!='undefined'&&AUT[k])?AUT[k][aul(k)].dps*TR[k].rt:TLV[k]?TLV[k][tlv(k)-1].dps*TR[k].rt:undefined;
const labLv=()=>Math.max(0,...S.b.filter(b=>b.t=='lab'&&!b.ruin&&!b.nb&&!(b.up>0)).map(b=>b.lv));
function rsDone(){const k=S.rs.k;S.tl=S.tl||{};S.tl[k]=(S.tl[k]||1)+1;S.rs=null;snd('done');if(!CU)save();if(UI.tinfo)tinfoDraw()}
function rsAdv(dt){if(S&&S.rs){if(S.rs.rem==null)S.rs.rem=Math.max(0,((S.rs.end||0)-Date.now())/1000);S.rs.rem-=dt;if(S.rs.rem<=0)rsDone()}}
function rsTick(){try{if(S&&S.rs&&UI.tinfo)tinfoDraw()}catch(e){}}
setInterval(rsTick,1000);
function troopUp(){const k=UI.tinfo;if(!TLV[k]||S.rs)return;const cur=tlv(k),R=TRS[k][cur];if(!R){snd('deny');return}
 if(labLv()<R.lab||S.e<R.c){snd('deny');return}S.e-=R.c;S.rs={k,rem:R.t,T:R.t};snd(520);save()}
async function troopGem(){if(!S.rs)return;const rem=Math.max(0,S.rs.rem),c=gemCost(rem);if((S.gem|0)<c){snd('deny');return}if(!await gemPay(c)){snd('deny');ui();return}if(S.rs){S.rs.rem=0;rsAdv(0)}ui()}
/* ---- sprite del Guerrero: esqueleto del HTML, vista 3/4 con volumen, contorno y sombreado ---- */
var BOC=null,BXC=null;const BOX=48,BOY=74,OL='#3b2412';
function bctx(){if(!BOC){BOC=document.createElement('canvas');BOC.width=96;BOC.height=90;BXC=BOC.getContext('2d')}return BXC}
const bR=(x,y,w,h,c)=>{BXC.fillStyle=c;BXC.fillRect(Math.round(BOX+x),Math.round(BOY+y),w,h)};
function bL(a,b,w,c){const n=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])*2)+1,h=w/2;BXC.fillStyle=c;for(let i=0;i<=n;i++){const t=i/n;BXC.fillRect(Math.round(BOX+a[0]+(b[0]-a[0])*t-h),Math.round(BOY+a[1]+(b[1]-a[1])*t-h),w,w)}}
function bP(pts,c,st){BXC.beginPath();pts.forEach((p,i)=>{const X=BOX+p[0],Y=BOY+p[1];i?BXC.lineTo(X,Y):BXC.moveTo(X,Y)});BXC.closePath();if(st){BXC.lineJoin='round';BXC.lineWidth=2.4;BXC.strokeStyle=st;BXC.stroke()}BXC.fillStyle=c;BXC.fill()}
function bDraw(P,bk){const R=Math.PI/180,th=(P.rot||0)*R,cs=Math.cos(th),sn=Math.sin(th),px=P.x||0;
 const vv=(a,l)=>[Math.sin(a*R)*l,Math.cos(a*R)*l],ad=(p,q)=>[p[0]+q[0],p[1]+q[1]];
 const limb=(o,a1,a2,l1,l2)=>{const k=ad(o,vv(a1,l1));return[o,k,ad(k,vv(a2,l2))]};
 const TL=13,neck=[Math.sin(P.lean*R)*TL,-Math.cos(P.lean*R)*TL],sh=[neck[0]*.9,neck[1]*.9];
 const nl=limb([3,0],P.nl[0],P.nl[1],8,8),fl=limb([-3,0],P.fl[0],P.fl[1],8,8);
 const hy=P.hy!==undefined?P.hy:-Math.max(nl[2][1],fl[2][1])-1;
 const tf=p=>[px+p[0]*cs-p[1]*sn,hy+p[0]*sn+p[1]*cs];
 const SK='#f1c59b',SKD='#cf9462',SKL='#f9ddbb',HAIR='#f3c432',HAIRD='#c08d17',LEA='#5a3a1c',TR_='#8e3f1e',TRD='#6a2c14';
 const leg=(l,col)=>{const A=tf(l[0]),K=tf(l[1]),F=tf(l[2]);bL(A,K,9,OL);bL(K,F,8,OL);bL(A,K,7,col);bL(K,F,6,col);
  bR(F[0]-3,F[1]-3,8,5,OL);bR(F[0]-2,F[1]-2,6,3,'#9a6a35');bR(F[0]-1,F[1]-2,4,1,'#c9954f');bR(F[0]-1,F[1]-5,1,3,LEA);bR(F[0]+2,F[1]-5,1,3,LEA)};
 const fa=limb(ad(sh,[-6,0]),P.fa[0],P.fa[1],6.5,6.5),na=limb(ad(sh,[5,0]),P.na[0],P.na[1],6.5,6.5);
 /* atrás: pierna y brazo lejanos */
 leg(fl,SKD);
 {const A=tf(fa[0]),K=tf(fa[1]),F=tf(fa[2]);bL(A,K,8,OL);bL(K,F,8,OL);bL(A,K,6,SKD);bL(K,F,6,SKD);bR(F[0]-4,F[1]-4,8,8,OL);bR(F[0]-3,F[1]-3,6,6,SKD)}
 leg(nl,SK);
 /* torso */
 const hp=tf([0,0]),nk=tf(neck),ax=[nk[0]-hp[0],nk[1]-hp[1]],al=Math.hypot(ax[0],ax[1])||1,u=[ax[0]/al,ax[1]/al],n=[u[1],-u[0]],at=(s,w)=>[hp[0]+u[0]*s+n[0]*w,hp[1]+u[1]*s+n[1]*w];
 bP([at(0,-6),at(0,6),at(TL*.62,9),at(TL,8),at(TL,-8),at(TL*.62,-9)],SK,OL);
 bP([at(0,-6),at(0,0),at(TL,0),at(TL,-8),at(TL*.62,-9)],SKD);
 bP([at(2,1.5),at(2,6),at(TL*.62,8.8),at(TL-1,7.2),at(TL-2,2)],SKL);
 if(!bk){for(const s of[-1,1]){bL(at(TL*.52,s*6.5),at(TL*.58,s*1.2),1,SKD)}bL(at(2.5,0),at(TL*.45,0),1,SKD);bL(at(4,-3),at(4,3),1,SKD);bL(at(6.5,-2.6),at(6.5,2.6),1,SKD)}
 else{bL(at(1,0),at(TL-1,0),1,SKD);bL(at(TL*.6,-4.5),at(TL*.8,-1.5),1,SKD);bL(at(TL*.6,4.5),at(TL*.8,1.5),1,SKD)}
 /* taparrabos y cinturón */
 bP([at(2,-6.6),at(2,6.6),at(-3,6),at(-7,2.4),at(-7,-2.4),at(-3,-6)],TR_,OL);
 bP([at(-1,-5.2),at(-1,5.2),at(-6.5,2),at(-6.5,-2)],TRD);
 bL(at(1.6,-6.8),at(1.6,6.8),3,OL);bL(at(1.6,-6),at(1.6,6),1,LEA);{const q=at(1.6,0);bR(q[0]-1,q[1]-1,3,3,'#cdd5dd')}
 /* brazo cercano (detrás de la cabeza) */
 {const A=tf(na[0]),K=tf(na[1]),F=tf(na[2]);bL(A,K,8,OL);bL(K,F,8,OL);bL(A,K,6,SK);bL(K,F,6,SK);bR(A[0]-4,A[1]-4,8,8,OL);bR(A[0]-3,A[1]-3,6,6,SK)}
 /* cabeza (grande, estilo Clash) */
 const hc=tf([neck[0]+Math.sin(P.lean*R)*8,neck[1]-8*Math.cos(P.lean*R)]),hx=Math.round(hc[0]),hyy=Math.round(hc[1]);
 bR(hx-11,hyy-10,22,22,OL);bR(hx-12,hyy-7,24,15,OL);
 if(bk){bR(hx-10,hyy-9,20,19,HAIR);bR(hx-10,hyy+3,20,7,HAIRD);bR(hx-7,hyy-7,7,4,'#f8d95a');for(let i=-8;i<9;i+=3)bR(hx+i,hyy-2,1,11,HAIRD);bR(hx-12,hyy-1,3,5,SKD);bR(hx+9,hyy-1,3,5,SKD)}
 else{
  bR(hx-10,hyy-9,20,9,HAIR);bR(hx-10,hyy-4,5,13,HAIR);bR(hx+6,hyy-4,4,8,HAIR);bR(hx-10,hyy+5,4,5,HAIRD);
  bR(hx-5,hyy-5,15,16,SK);bR(hx-5,hyy-5,3,16,SKD);bR(hx+8,hyy-2,2,10,SKD);
  bR(hx-4,hyy-9,4,4,'#f8d95a');bR(hx+2,hyy-9,6,3,'#f8d95a');
  bR(hx-5,hyy-5,15,3,HAIRD);bR(hx-4,hyy-2,3,2,HAIR);bR(hx+2,hyy-2,4,1,HAIR);bR(hx+7,hyy-3,3,2,HAIR);
  bL([hx-4,hyy-1],[hx,hyy+1],2,'#7a4a12');bL([hx+2,hyy+1],[hx+8,hyy-2],2,'#7a4a12');
  bR(hx-4,hyy+1,4,3,'#fff');bR(hx+3,hyy,4,3,'#fff');bR(hx-2,hyy+1,3,3,'#111');bR(hx+4,hyy+1,3,3,'#111');
  bR(hx+1,hyy+4,3,4,SKD);
  bR(hx-7,hyy+6,19,4,HAIR);bR(hx-9,hyy+7,4,4,HAIR);bR(hx+10,hyy+7,4,4,HAIR);bR(hx-5,hyy+9,13,1,HAIRD);
  bR(hx-3,hyy+10,8,4,'#5a1a10');bR(hx-2,hyy+10,6,1,'#fff');bR(hx-1,hyy+13,4,1,SKD)}
 /* mano y espada (delante de la cabeza) */
 {const A=tf(na[0]),K=tf(na[1]),F=tf(na[2]);
  bL([K[0]*.3+F[0]*.7,K[1]*.3+F[1]*.7],F,6,LEA);bR(F[0]-4,F[1]-4,8,8,OL);bR(F[0]-3,F[1]-3,6,6,SK);bR(Math.round(K[0]*.5+F[0]*.5),Math.round(K[1]*.5+F[1]*.5)-3,1,1,'#cdd5dd');
  /* espada */
  const d=vv(P.ax,1),p=[-Math.cos(P.ax*R),Math.sin(P.ax*R)],hd=na[2],pt=(k,m)=>tf([hd[0]+d[0]*k+p[0]*m,hd[1]+d[1]*k+p[1]*m]);
  bL(pt(-4,0),pt(3,0),4,OL);bL(pt(-3,0),pt(3,0),2,'#7a4a1f');bL(pt(-5,0),pt(-5,0),4,'#e8b923');
  bL(pt(4,-4.5),pt(4,4.5),4,OL);bL(pt(4,-3.5),pt(4,3.5),2,'#e8b923');
  bL(pt(5,0),pt(22,0),6,OL);bL(pt(24,0),pt(24,0),3,OL);bL(pt(5,0),pt(22,0),4,'#dfe8f2');bL(pt(23,0),pt(23,0),2,'#dfe8f2');bL(pt(6,-.8),pt(21,-.8),1,'#ffffff');bL(pt(6,1),pt(21,1),1,'#9aa9bb')}}
function bPose(st,T,t,D){
 const I={lean:6,na:[55,140],ax:178,fa:[15,45],nl:[10,5],fl:[-10,-5]};
 const lp=(a,b,u)=>{const o={};for(const k in a)o[k]=Array.isArray(a[k])?a[k].map((x,i)=>x+(b[k][i]-x)*u):a[k]+(b[k]-a[k])*u;return o};
 const ATK=[{t:0,p:I},{t:.16,p:{lean:-8,dx:-2,na:[165,205],ax:215,fa:[20,80],nl:[8,0],fl:[-8,-4]}},{t:.30,p:{lean:26,dx:6,na:[95,70],ax:55,fa:[60,110],nl:[-28,-38],fl:[42,12]}},{t:.44,p:{lean:30,dx:7,na:[60,25],ax:25,fa:[55,105],nl:[-28,-38],fl:[42,12]}},{t:.80,p:I}];
 const seq=(K,q)=>{for(let i=1;i<K.length;i++)if(q<=K[i].t)return lp(K[i-1].p,K[i].p,(q-K[i-1].t)/(K[i].t-K[i-1].t));return K[K.length-1].p};
 const cl=x=>Math.max(0,Math.min(1,x));
 if(st=='idle'){const f=Math.floor(T*2)%2;return{...I,lean:I.lean+f,na:[I.na[0],I.na[1]+4*f]}}
 if(st=='run'){const fr=Math.floor(T*10)%8,p=fr/8*2*Math.PI,s=Math.sin(p),fx=q=>70*Math.max(0,Math.cos(q-.6)),nu=50*s,fu=-50*s,nau=-40*s,fau=40*s;
  return{lean:15,nl:[nu,nu-fx(p)],fl:[fu,fu-fx(p+Math.PI)],na:[50+nau*.4,135+nau*.4],ax:172+nau*.3,fa:[fau*.8,fau*.8+55]}}
 if(st=='attack'){const q=Math.floor(t*12)/12,s=t>=.8?I:seq(ATK,q);return{...s,x:s.dx||0}}
 const tq=Math.floor(T*12)/12,k1=cl(tq/.2),k=Math.pow(cl((tq-.15)/.8),2);
 return{lean:-22*k1*(1-k),na:[150-70*k,160-100*k],ax:200-60*k,fa:[110-40*k,90-20*k],nl:[15*k,-35*k],fl:[-10-5*k,-60*k],rot:-92*k,x:-10*k,hy:-17+13*k}}
function bFace(t){const now=performance.now();let dx=0,dy=0;
 if(t.at&&now-t.at<900&&t.tx){const a=P(t.x,t.y),b=P(t.tx[0],t.tx[1]);dx=b[0]-a[0];dy=b[1]-a[1]}
 else if(t.lx!=null&&t.mv){const a=P(t.lx,t.ly),b=P(t.x,t.y);dx=b[0]-a[0];dy=b[1]-a[1]}
 t.lx=t.x;t.ly=t.y;
 if(Math.hypot(dx,dy)>.15){if(Math.abs(dx)>.3)t.fx=dx>0?1:-1;t.bk=dy<-Math.abs(dx)*.5?1:0}
 if(!t.fx)t.fx=1}
function drBarb(t){const now=performance.now(),D=TR.barb;if(t.ao==null)t.ao=Math.random()*5000;
 const dead=t.hp<=0;if(!dead)bFace(t);else if(!t.fx)t.fx=1;
 const[x0,y0]=P(t.x,t.y),x=Math.round(x0),y=Math.round(y0),SC=.78;
 let st,Tm=(now+t.ao)/1000,tt=0,al=1;
 if(dead){st='death';Tm=(now-(t.dk||now))/1000;al=Tm>1.5?Math.max(0,1-(Tm-1.5)/.55):1}
 else if(t.at&&now-t.at<D.rt*1000*1.7&&!t.mv){st='attack';tt=(((now-t.at)/1000)+.34)%D.rt;tt=D.rt==1?tt:tt/D.rt}
 else if(t.mv)st='run';else st='idle';
 if(al<=0)return;
 const bkk=dead?0:(t.bk?1:0),spr=sprGet('b'+st+bkk+'_'+skey(st,Tm,tt,0),()=>bDraw(bPose(st,Tm,tt,D),bkk));
 g.save();g.globalAlpha*=al;g.fillStyle='#0006';g.beginPath();g.ellipse(x,y,11*SC,(VT?5:4)*SC,0,0,7);g.fill();
 g.translate(x,y);g.scale(t.fx*SC,SC);g.imageSmoothingEnabled=false;g.drawImage(spr,-BOX,-BOY);g.restore();
 if(!dead&&t.hp<t.max)bar(x,y-45,22,t.hp/t.max)}
/* ================= v28: Arquera rediseñada (sprite animado 3/4 como el Guerrero) ================= */
var AL=[{dps:7,hp:20},{dps:9,hp:23},{dps:12,hp:28},{dps:16,hp:33},{dps:20,hp:40},{dps:22,hp:44},{dps:25,hp:48}];
var AR=[null,{c:30000,t:10800,lab:1},{c:80000,t:21600,lab:3},{c:300000,t:43200,lab:5},{c:800000,t:86400,lab:6},{c:2000000,t:129600,lab:7},{c:2500000,t:216000,lab:8}];
var TLV={barb:BL,arch:AL},TRS={barb:BR,arch:AR};
function aDraw(P,bk){const R=Math.PI/180,th=(P.rot||0)*R,cs=Math.cos(th),sn=Math.sin(th),px=P.x||0;
 const vv=(a,l)=>[Math.sin(a*R)*l,Math.cos(a*R)*l],ad=(p,q)=>[p[0]+q[0],p[1]+q[1]],rt2=(p,d)=>[p[0]*Math.cos(d*R)-p[1]*Math.sin(d*R),p[0]*Math.sin(d*R)+p[1]*Math.cos(d*R)];
 const limb=(o,a1,a2,l1,l2)=>{const k=ad(o,vv(a1,l1));return[o,k,ad(k,vv(a2,l2))]};
 const ik=(s,t,l1,l2)=>{let dx=t[0]-s[0],dy=t[1]-s[1],d=Math.hypot(dx,dy);const m=l1+l2-.01;if(d>m){dx*=m/d;dy*=m/d;d=m}if(d<1)d=1;
  const a=(l1*l1-l2*l2+d*d)/(2*d),h=Math.sqrt(Math.max(0,l1*l1-a*a)),ux=dx/d,uy=dy/d;let qx=uy,qy=-ux;if(ux<0){qx=-uy;qy=ux}
  return[s,[s[0]+ux*a+qx*h,s[1]+uy*a+qy*h],[s[0]+dx,s[1]+dy]]};
 const TL=13,neck=[Math.sin(P.lean*R)*TL,-Math.cos(P.lean*R)*TL],sh=[neck[0]*.9,neck[1]*.9];
 const nl=limb([3,0],P.nl[0],P.nl[1],8,8),fl=limb([-3,0],P.fl[0],P.fl[1],8,8);
 const hy=P.hy!==undefined?P.hy:-Math.max(nl[2][1],fl[2][1])-1;
 const tf=p=>[px+p[0]*cs-p[1]*sn,hy+p[0]*sn+p[1]*cs];
 const SK='#f1c59b',SKD='#cf9462',SKL='#f9ddbb',HAIR='#dd4f9f',HAIRL='#f67fbe',HAIRD='#a53279',DR='#b9d63a',DRD='#8caa27',DRL='#d8f06c',CL='#3f7b33',CLD='#2b5a24',BELT='#7a4a1f',BOW='#8a5428',BOWL='#bb8444',GOLD='#e8b923',FEA='#ff7ab0';
 const leg=(l,col)=>{const A=tf(l[0]),K=tf(l[1]),F=tf(l[2]);bL(A,K,8,OL);bL(K,F,7,OL);bL(A,K,6,col);bL(K,F,5,col);
  bR(F[0]-3,F[1]-3,8,5,OL);bR(F[0]-2,F[1]-2,6,3,SK);bR(F[0]-2,F[1]-2,6,1,SKL);bR(F[0]-1,F[1]-4,4,2,BELT)};
 /* brazo del arco (lejano) y brazo de la cuerda (cercano) */
 const fa=limb(ad(sh,[3,0]),P.fa[0],P.fa[1],6.5,6.5),grip=ad(fa[2],[1,0]),bw=P.bw||0,pulled=(P.pull===undefined?-1:P.pull)>=0,pl=Math.max(0,P.pull||0);
 const nockL=ad(grip,rt2([-4-5*pl,0],bw)),nsh=ad(sh,[-4,0]),na=pulled?ik(nsh,nockL,6.5,6.5):limb(nsh,P.na[0],P.na[1],6.5,6.5);
 /* atrás: pierna lejana */
 leg(fl,SKD);
 /* torso: ejes */
 const hp=tf([0,0]),nk=tf(neck),ax=[nk[0]-hp[0],nk[1]-hp[1]],al=Math.hypot(ax[0],ax[1])||1,u=[ax[0]/al,ax[1]/al],n=[u[1],-u[0]],at=(s,w)=>[hp[0]+u[0]*s+n[0]*w,hp[1]+u[1]*s+n[1]*w];
 /* capa verde oscura y carcaj (espalda) */
 bP([at(TL*.92,3),at(TL*.9,11),at(1,13.5),at(-9,11),at(-5,3)],CL,OL);bP([at(TL*.6,5),at(TL*.6,11),at(1,13),at(-7,10.5),at(-4,5)],CLD);
 bL(at(TL*.45,9.5),at(TL*1.02,11.5),7,OL);bL(at(TL*.45,9.5),at(TL*1.02,11.5),5,'#6b4423');bL(at(TL*.5,9),at(TL*.95,10.8),1,'#8a5a30');
 for(let i=0;i<3;i++){const a=at(TL*1.0,10+i*1.3),b=at(TL*1.0+6+i*1.2,11.6+i*2.6);bL(a,b,1,'#e2d3a8');bR(b[0]-1,b[1]-1,3,3,OL);bR(b[0]-1,b[1]-1,2,2,FEA)}
 /* brazo del arco (lejano, detrás del torso) */
 {const A=tf(fa[0]),K=tf(fa[1]),F=tf(fa[2]);bL(A,K,8,OL);bL(K,F,7,OL);bL(A,K,6,SKD);bL(K,F,5,SKD)}
 leg(nl,SK);
 /* vestido */
 bP([at(0,-6),at(0,6),at(TL*.62,7.6),at(TL,6.6),at(TL,-6.6),at(TL*.62,-7.6)],DR,OL);
 bP([at(0,0),at(0,6),at(TL*.62,7.6),at(TL,6.6),at(TL,0)],DRD);
 bP([at(1,-5.4),at(1,-1),at(TL-1.5,-1),at(TL-2,-5.2)],DRL);
 bP([at(2,-7.2),at(2,7.2),at(-4,10),at(-7.5,6.2),at(-7.5,-6.2),at(-4,-9.4)],DR,OL);
 bP([at(1,0),at(1,7),at(-4,9.8),at(-7,6),at(-7,0)],DRD);
 bL(at(-6,-6),at(-6,6),2,DRD);for(let w=-5;w<=5;w+=2.5)bL(at(-.5,w),at(-6,w*1.15),1,w>0?'#7a9322':DRL);
 bL(at(1.6,-7.2),at(1.6,7.2),4,OL);bL(at(1.6,-6.2),at(1.6,6.2),2,BELT);{const q=at(1.6,-1);bR(q[0]-2,q[1]-2,5,5,OL);bR(q[0]-1,q[1]-1,3,3,GOLD)}
 if(!bk){bL(at(TL*.95,5.4),at(2,-5.2),4,OL);bL(at(TL*.95,5.4),at(2,-5.2),2,BELT)}
 /* cuello */
 {const q=at(TL-1,0);bR(q[0]-3,q[1]-2,6,5,SKD)}
 /* arco, cuerda y flecha (delante del cuerpo) */
 const pts=[];for(let yy=-13;yy<=13;yy++)pts.push(tf(ad(grip,rt2([-4.5*Math.pow(yy/13,2),yy],bw))));
 for(let i=1;i<pts.length;i++)bL(pts[i-1],pts[i],5,OL);
 for(let i=1;i<pts.length;i++)bL(pts[i-1],pts[i],3,BOW);
 for(let i=1;i<pts.length;i+=2)bL(pts[i],pts[i],1,BOWL);
 bL(pts[0],pts[1],4,GOLD);bL(pts[26],pts[25],4,GOLD);
 const g0=pts[13],NK=tf(nockL);
 bL(pts[0],NK,1,'#f4f1e6');bL(NK,pts[26],1,'#f4f1e6');
 bL(ad(g0,[0,-4]),ad(g0,[0,4]),6,OL);bL(ad(g0,[0,-4]),ad(g0,[0,4]),4,BELT);
 if(P.arrow){const dir=rt2([1,0],bw),tipL=ad(nockL,[dir[0]*15,dir[1]*15]),tip=tf(tipL);
  bL(NK,tip,2,OL);bL(NK,tip,1,'#e8dbb2');bL(tf(ad(tipL,[-dir[0]*3,-dir[1]*3])),tip,3,OL);bL(tf(ad(tipL,[-dir[0]*3,-dir[1]*3])),tip,2,'#dfe8f2');
  const f0=tf(ad(nockL,[dir[0]*1,dir[1]*1])),f1=tf(ad(nockL,[dir[0]*5,dir[1]*5]));bL(f0,f1,4,OL);bL(f0,f1,2,FEA)}
 /* mano del arco */
 {const F=tf(fa[2]);bR(F[0]-3,F[1]-3,7,7,OL);bR(F[0]-2,F[1]-2,5,5,SKD);bR(F[0]-2,F[1]-2,5,1,SK)}
 /* cabeza */
 const hc=tf([neck[0]+Math.sin(P.lean*R)*8,neck[1]-8*Math.cos(P.lean*R)]),hx=Math.round(hc[0]),hyy=Math.round(hc[1]),sw=Math.round(P.sw||0);
 bR(hx-11,hyy-10,22,22,OL);bR(hx-12,hyy-6,24,15,OL);bR(hx-10+sw,hyy+11,20,2,OL);
 if(bk){bR(hx-10,hyy-9,20,19,HAIR);bR(hx-10+sw,hyy+3,20,8,HAIRD);bR(hx-7,hyy-8,9,4,HAIRL);bR(hx-3,hyy-4,3,10,HAIRL);for(let i=-8;i<9;i+=4)bR(hx+i,hyy,1,11,HAIRD)}
 else{
  bR(hx-10,hyy-9,20,19,HAIR);bR(hx-10+sw,hyy+3,20,7,HAIRD);bR(hx-9,hyy+9,8,3,HAIRD);bR(hx+4,hyy+9,6,3,HAIRD);
  bR(hx-5,hyy-4,15,15,OL);bR(hx-4,hyy-3,13,14,SK);bR(hx-4,hyy-3,3,14,SKD);bR(hx+6,hyy-2,2,11,SKL);
  bR(hx-10,hyy-9,19,8,HAIR);bR(hx-6,hyy-9,9,3,HAIRL);bR(hx-9,hyy-5,3,5,HAIRL);
  bR(hx-6,hyy-4,16,4,HAIR);bR(hx-1,hyy-1,3,2,HAIR);bR(hx+4,hyy-1,4,1,HAIR);bR(hx+8,hyy-3,3,4,HAIR);bR(hx-6,hyy-2,4,1,HAIRD);bR(hx+3,hyy-4,7,1,HAIRL);
  bR(hx-11,hyy-3,6,15,HAIR);bR(hx-11,hyy+4,6,8,HAIRD);bR(hx-9,hyy,2,9,HAIRL);bR(hx+9,hyy-2,3,11,HAIR);bR(hx+9,hyy+4,3,5,HAIRD);
  if(P.cl){bL([hx-2,hyy+2],[hx+1,hyy+3],1,'#4a2a1a');bL([hx+4,hyy+3],[hx+7,hyy+2],1,'#4a2a1a')}
  else{bR(hx-2,hyy+1,3,4,'#fff');bR(hx+4,hyy+1,3,4,'#fff');bR(hx-1,hyy+1,2,4,'#3a2412');bR(hx+5,hyy+1,2,4,'#3a2412');bR(hx-1,hyy+1,1,1,'#fff');bR(hx+5,hyy+1,1,1,'#fff');bL([hx-3,hyy],[hx+1,hyy-1],1,'#6a2a52');bL([hx+3,hyy-1],[hx+8,hyy],1,'#6a2a52')}
  bR(hx+2,hyy+5,2,2,SKD);bR(hx+2,hyy+8,4,1,'#b4505c');bR(hx+3,hyy+9,2,1,'#e08a90');
  bR(hx-12,hyy+2,2,3,GOLD)}
 /* brazo de la cuerda (cercano) y mano */
 {const A=tf(na[0]),K=tf(na[1]),F=tf(na[2]);bL(A,K,8,OL);bL(K,F,7,OL);bL(A,K,6,SK);bL(K,F,5,SK);
  const m=[K[0]*.4+F[0]*.6,K[1]*.4+F[1]*.6];bL(m,F,5,BELT);
  bR(F[0]-3,F[1]-3,7,7,OL);bR(F[0]-2,F[1]-2,5,5,SK);bR(F[0]-2,F[1]-2,5,1,SKL)}}
function aPose(st,T,t){
 const lp=(a,b,u)=>{const o={};for(const k in a)o[k]=Array.isArray(a[k])?a[k].map((x,i)=>x+(b[k][i]-x)*u):a[k]+(b[k]-a[k])*u;return o};
 const I={lean:3,dx:0,na:[18,65],fa:[28,58],nl:[8,4],fl:[-8,-4],bw:0,pull:-1,sw:0};
 const SH=[{t:0,p:I},{t:.16,p:{lean:2,dx:0,na:[60,90],fa:[85,92],nl:[10,5],fl:[-14,-8],bw:0,pull:0,sw:0}},{t:.60,p:{lean:-3,dx:0,na:[60,90],fa:[88,92],nl:[12,6],fl:[-16,-9],bw:0,pull:1,sw:1}},{t:.84,p:{lean:-3,dx:0,na:[60,90],fa:[88,92],nl:[12,6],fl:[-16,-9],bw:-1,pull:1,sw:1}},{t:.88,p:{lean:-1,dx:-1,na:[-10,-5],fa:[82,88],nl:[12,6],fl:[-16,-9],bw:-6,pull:0,sw:-1}},{t:.95,p:{lean:0,dx:-1,na:[-35,-50],fa:[75,82],nl:[10,5],fl:[-14,-8],bw:-8,pull:-1,sw:-2}},{t:1.3,p:I}];
 const seq=(K,q)=>{for(let i=1;i<K.length;i++)if(q<=K[i].t)return lp(K[i-1].p,K[i].p,(q-K[i-1].t)/(K[i].t-K[i-1].t));return K[K.length-1].p};
 const cl=x=>Math.max(0,Math.min(1,x));
 if(st=='idle'){const f=Math.floor(T*2)%2;return{...I,lean:I.lean+f,na:[I.na[0],I.na[1]+3*f]}}
 if(st=='run'){const p=(Math.floor(T*10)%8)/8*2*Math.PI,s=Math.sin(p),fx=q=>50*1.2*Math.max(0,Math.cos(q-.6)),nu=50*s,fu=-50*s,nau=-50*.8*s,fau=50*.7*s;
  return{lean:15,nl:[nu,nu-fx(p)],fl:[fu,fu-fx(p+Math.PI)],na:[nau,nau+70],fa:[fau,fau+80],bw:10,pull:-1,sw:-4+Math.round(s*1.5)}}
 if(st=='shoot'){const q=Math.floor(t*1.3*12)/12,s=seq(SH,q);return{...s,x:s.dx||0,arrow:q<.9}}
 const tq=Math.floor(T*12)/12,k1=cl(tq/.2),k=Math.pow(cl((tq-.15)/.8),2);
 return{lean:-22*k1*(1-k),na:[150-70*k,160-100*k],fa:[110-40*k,90-20*k],nl:[15*k,-35*k],fl:[-10-5*k,-60*k],bw:30*k,pull:-1,sw:-3*k,rot:-92*k,x:-10*k,hy:-17+13*k,cl:tq>.18}}
function drArch(t){const now=performance.now(),D=TR.arch;if(t.ao==null)t.ao=Math.random()*5000;
 const dead=t.hp<=0;if(!dead)bFace(t);else if(!t.fx)t.fx=1;
 const[x0,y0]=P(t.x,t.y),x=Math.round(x0),y=Math.round(y0),SC=.78;
 let st,Tm=(now+t.ao)/1000,tt=0,al=1;
 if(dead){st='death';Tm=(now-(t.dk||now))/1000;al=Tm>1.5?Math.max(0,1-(Tm-1.5)/.55):1}
 else if(t.at&&now-t.at<D.rt*1000*1.7&&!t.mv){st='shoot';tt=(((now-t.at)/1000)+.677*D.rt)%D.rt/D.rt}
 else if(t.mv)st='run';else st='idle';
 if(al<=0)return;
 const bkk=dead?0:(t.bk?1:0),spr=sprGet('a'+st+bkk+'_'+skey(st,Tm,tt,1),()=>aDraw(aPose(st,Tm,tt),bkk));
 g.save();g.globalAlpha*=al;g.fillStyle='#0006';g.beginPath();g.ellipse(x,y,11*SC,(VT?5:4)*SC,0,0,7);g.fill();
 g.translate(x,y);g.scale(t.fx*SC,SC);g.imageSmoothingEnabled=false;g.drawImage(spr,-BOX,-BOY);g.restore();
 if(!dead&&t.hp<t.max)bar(x,y-45,22,t.hp/t.max)}
function archIcon(big){const c=bctx();c.clearRect(0,0,96,90);aDraw({lean:3,x:0,na:[18,65],fa:[28,58],nl:[8,4],fl:[-8,-4],bw:0,pull:-1,sw:0},0);
 const k=big?2:1,o=document.createElement('canvas');o.width=48*k;o.height=60*k;const x=o.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(BOC,BOX-24,BOY-58,48,60,0,0,48*k,60*k);return o.toDataURL()}

/* ================= v53: Gigante rediseñado (sprite animado 3/4, más grande que el Guerrero) ================= */
var GL=[{dps:11,hp:300},{dps:14,hp:360},{dps:19,hp:450},{dps:24,hp:600},{dps:31,hp:800},{dps:43,hp:1100},{dps:55,hp:1300}];
var GR=[null,{c:40000,t:14400,lab:2},{c:150000,t:28800,lab:4},{c:500000,t:43200,lab:5},{c:1200000,t:86400,lab:6},{c:2000000,t:172800,lab:7},{c:3000000,t:244800,lab:8}];
TLV.giant=GL;TRS.giant=GR;
function gDraw(P,bk){const R=Math.PI/180,th=(P.rot||0)*R,cs=Math.cos(th),sn=Math.sin(th),px=P.x||0,KX=1.45,KY=1.2;
 const vv=(a,l)=>[Math.sin(a*R)*l,Math.cos(a*R)*l],ad=(p,q)=>[p[0]+q[0],p[1]+q[1]];
 const limb=(o,a1,a2,l1,l2)=>{const k=ad(o,vv(a1,l1));return[o,k,ad(k,vv(a2,l2))]};
 const ik=(s,t,l1,l2)=>{let dx=t[0]-s[0],dy=t[1]-s[1],d=Math.hypot(dx,dy);const m=l1+l2-.01;if(d>m){dx*=m/d;dy*=m/d;d=m}if(d<1)d=1;
  const a=(l1*l1-l2*l2+d*d)/(2*d),h=Math.sqrt(Math.max(0,l1*l1-a*a)),ux=dx/d,uy=dy/d;let qx=uy,qy=-ux;if(ux<0){qx=-uy;qy=ux}
  return[s,[s[0]+ux*a+qx*h,s[1]+uy*a+qy*h],[s[0]+dx,s[1]+dy]]};
 const blend=(a,b,w)=>a.map((p,i)=>[p[0]+(b[i][0]-p[0])*w,p[1]+(b[i][1]-p[1])*w]);
 const TL=15,neck=[Math.sin(P.lean*R)*TL,-Math.cos(P.lean*R)*TL],sh=[neck[0]*.9,neck[1]*.9];
 const nl=limb([3,0],P.nl[0],P.nl[1],9.5,9.5),fl=limb([-3,0],P.fl[0],P.fl[1],9.5,9.5);
 const hy=(P.hy!==undefined?P.hy:-KY*Math.max(nl[2][1],fl[2][1])+2)+(P.dy||0);
 const tf=p=>{const x=p[0]*KX,y=p[1]*KY;return[px+x*cs-y*sn,hy+x*sn+y*cs]};
 const SKIN='#e9ad86',SKD='#c27d57',SKL='#f9d2ac',VEST='#7d4b3c',VESTD='#5b3025',VESTL='#9a6354',PATCH='#b23a2c',BELT='#c8322b',BELTD='#8e1f1c',GOLD='#f2c334',PANT='#5a3a22',BEARD='#ee8f2d',BEARDD='#c4651a',BEARDL='#ffb85e';
 const dir=vv(P.ax||0,1);
 const nsh=ad(sh,[10.5,3]),fsh=ad(sh,[-10.5,3]);
 const na=limb(nsh,P.na[0],P.na[1],7.5,7.5);let fa=limb(fsh,P.fa[0],P.fa[1],7.5,7.5);
 if(P.tw>0)fa=blend(fa,ik(fsh,ad(na[2],[dir[0]*5,dir[1]*5]),7.5,7.5),P.tw);
 const farFront=P.tw>.5;
 const fist=F=>{bR(F[0]-7,F[1]-7,14,13,OL);bR(F[0]-6,F[1]-6,12,11,SKIN);bR(F[0]-6,F[1]-6,12,2,SKL);bR(F[0]-6,F[1]+2,12,3,SKD);for(let i=0;i<3;i++)bR(F[0]-4+i*3,F[1]-1,1,5,SKD)};
 const arm=(l,sleeve)=>{const A=tf(l[0]),K=tf(l[1]),F=tf(l[2]),lr=(p,q,w)=>[p[0]+(q[0]-p[0])*w,p[1]+(q[1]-p[1])*w];
  /* brazo musculoso: hombro redondo, bíceps más grueso, antebrazo con muñequera */
  bL(A,K,15,OL);bL(K,F,13,OL);bL(A,A,16,OL);
  bL(A,K,13,SKIN);bL(K,F,11,SKIN);bL(A,A,14,SKIN);
  const bi=lr(A,K,.5);bL(ad(A,[-3,-3]),ad(bi,[-3,-3]),3,SKL);bL(ad(A,[3,3]),ad(K,[3,3]),3,SKD);
  bL(ad(K,[-3,-2]),ad(F,[-3,-2]),2,SKL);bL(ad(K,[3,3]),ad(F,[3,3]),3,SKD);
  bL(K,K,12,SKD);bL(K,K,9,SKIN);
  const w1=lr(K,F,.62),w2=lr(K,F,.8);bL(w1,w2,12,OL);bL(w1,w2,10,VEST);bL(ad(w1,[0,-2]),ad(w2,[0,-2]),2,VESTL);
  fist(F)};
 const leg=l=>{const A=tf(l[0]),K=tf(l[1]),F=tf(l[2]);bL(A,K,12,OL);bL(K,F,11,OL);bL(A,K,10,SKIN);bL(K,F,9,SKIN);bL(ad(K,[3,0]),ad(F,[3,0]),2,SKD);
  bL(A,[A[0]*.55+K[0]*.45,A[1]*.55+K[1]*.45],12,PANT);
  bR(F[0]-4,F[1]-4,15,7,OL);bR(F[0]-3,F[1]-3,13,5,SKIN);bR(F[0]-3,F[1]-3,13,1,SKL);for(let i=0;i<3;i++)bR(F[0]+5+i*2,F[1]-2,1,4,SKD)};
 leg(fl);leg(nl);
 const nBack=Math.abs(P.na[0])<40&&Math.abs(P.na[1])<60&&!(P.tw>0)&&!P.rot;
 if(!farFront)arm(fa);if(nBack)arm(na);
 /* torso */
 const Hp=tf([0,0]),N=tf(neck),ax=[N[0]-Hp[0],N[1]-Hp[1]],len=Math.hypot(ax[0],ax[1])||1,u=[ax[0]/len,ax[1]/len],n=[u[1],-u[0]],at=(s,w)=>[Hp[0]+u[0]*s+n[0]*w,Hp[1]+u[1]*s+n[1]*w];
 bP([at(-2,-9),at(-2,9),at(4,10),at(4,-10)],PANT,OL);
 bP([at(3,-10.5),at(3,10.5),at(len*.55,12.5),at(len*.98,13),at(len*.98,-13),at(len*.55,-12.5)],VEST,OL);
 bP([at(3,0),at(3,10.5),at(len*.55,12.5),at(len*.98,13),at(len*.98,0)],VESTD);
 bP([at(8,-9.5),at(8,-3),at(len*.92,-3),at(len*.92,-11)],VESTL);
 if(!bk){bP([at(len*.5,-10),at(len*.5,-4),at(len*.72,-4),at(len*.72,-10)],PATCH,OL);for(const[s2,w2]of[[.55,-9],[.55,-5],[.68,-9],[.68,-5]]){const q=at(len*s2,w2);bR(q[0],q[1],1,1,'#2a120c')}
  bP([at(len*.99,-3.5),at(len*.99,3.5),at(len*.7,0)],SKD);bL(at(len*.93,-2),at(len*.8,0),1,'#2a120c');bL(at(len*.93,2),at(len*.8,0),1,'#2a120c');bL(at(len*.86,-1.5),at(len*.86,1.5),1,'#2a120c')}
 bP([at(-1,-11),at(-1,11),at(4,11.5),at(4,-11.5)],BELT,OL);bP([at(-1,0),at(-1,11),at(1.5,11)],BELTD);
 if(!bk){const q=at(2,-2);bR(q[0]-4,q[1]-3,9,7,OL);bR(q[0]-3,q[1]-2,7,5,GOLD);bR(q[0]-1,q[1]-1,3,3,BELTD)}
 /* cuello y cabeza calva con barba naranja */
 const hc=tf([neck[0]+Math.sin(P.lean*R)*7,neck[1]-7*Math.cos(P.lean*R)]),hx=Math.round(hc[0]),hyy=Math.round(hc[1]);
 bR(hx-6,hyy+6,12,7,OL);bR(hx-5,hyy+6,10,6,SKD);
 const sk=[[-5,-12],[5,-12],[10,-9],[12,-3],[11,5],[8,10],[-8,10],[-11,5],[-12,-3],[-10,-9]].map(p=>[hx+p[0],hyy+p[1]]);
 bP(sk,SKIN,OL);bR(hx-6,hyy-10,9,3,SKL);bR(hx-9,hyy-7,3,5,SKL);bR(hx+8,hyy-4,3,9,SKD);bR(hx-12,hyy-2,3,5,SKD);bR(hx-11,hyy-1,1,3,OL);
 if(bk){bP([[hx-11,hyy+2],[hx+11,hyy+2],[hx+10,hyy+9],[hx+6,hyy+13],[hx-6,hyy+13],[hx-10,hyy+9]].map(p=>p),BEARD,OL);bR(hx-6,hyy+5,12,3,BEARDD);bR(hx-3,hyy-9,5,2,SKL)}
 else{
  bP([[hx-11,hyy+2],[hx-6,hyy+3],[hx+8,hyy+3],[hx+12,hyy+1],[hx+12,hyy+8],[hx+7,hyy+14],[hx-6,hyy+14],[hx-11,hyy+9]],BEARD,OL);
  bR(hx-10,hyy+3,3,8,BEARDD);bR(hx-6,hyy+10,12,3,BEARDD);bR(hx-4,hyy+4,12,2,BEARDL);bR(hx-8,hyy+2,3,1,BEARDL);
  bR(hx-3,hyy-4,6,3,BEARD);bR(hx+4,hyy-4,7,3,BEARD);bR(hx-3,hyy-4,6,1,BEARDL);bR(hx+4,hyy-4,7,1,BEARDL);bR(hx-3,hyy-2,6,1,BEARDD);bR(hx+4,hyy-2,7,1,BEARDD);
  if(P.cl){bR(hx-2,hyy,4,1,'#2a120c');bR(hx+5,hyy,4,1,'#2a120c')}else{bR(hx-2,hyy-1,4,3,'#fff');bR(hx+5,hyy-1,4,3,'#fff');bR(hx-1,hyy-1,3,3,'#1a1008');bR(hx+6,hyy-1,3,3,'#1a1008')}
  bR(hx+2,hyy+1,4,5,SKD);bR(hx+3,hyy+1,2,4,SKIN);bR(hx+1,hyy+5,6,1,SKD);
  if(P.mouth>.5){bR(hx-2,hyy+7,11,5,'#4a1410');bR(hx-2,hyy+7,11,1,'#f4eee6');bR(hx,hyy+11,7,1,'#c8504a')}else{bR(hx-1,hyy+7,9,1,BEARDD)}}
 if(!nBack)arm(na);
 if(farFront)arm(fa)}
function gPose(st,T,q){
 const lp=(a,b,u)=>{const o={};for(const k in a)o[k]=Array.isArray(a[k])?a[k].map((x,i)=>x+(b[k][i]-x)*u):a[k]+(b[k]-a[k])*u;return o};
 const I={lean:6,dx:0,dy:0,na:[14,-6],ax:0,fa:[-14,6],nl:[4,1],fl:[-4,-1],mouth:0,tw:0},F=o=>({...I,...o});
 const SM=[{t:0,p:I},{t:.22,p:F({lean:-6,dx:-3,na:[-45,-95],fa:[35,105],nl:[14,6],fl:[-14,-6]}),e:'out'},{t:.30,p:F({lean:-10,dx:-4,dy:1,na:[-55,-105],fa:[35,105],nl:[18,4],fl:[-18,-8]})},{t:.38,p:F({lean:24,dx:9,na:[88,92],fa:[35,105],nl:[-30,-40],fl:[42,10]}),e:'in'},{t:.55,p:F({lean:26,dx:10,na:[88,92],fa:[35,105],nl:[-30,-40],fl:[42,10]})},{t:1.2,p:I,e:'out'}];
 const seq=(K,t)=>{for(let i=1;i<K.length;i++)if(t<=K[i].t){let u=(t-K[i-1].t)/(K[i].t-K[i-1].t);const e=K[i].e;u=e==='in'?u*u*u:e==='out'?1-Math.pow(1-u,3):u*u*(3-2*u);return lp(K[i-1].p,K[i].p,u)}return K[K.length-1].p};
 const cl=x=>Math.max(0,Math.min(1,x));
 if(st=='idle'){const f=Math.floor(T/.9)%2;return{...I,lean:I.lean+1.5*f,dy:f,x:0}}
 if(st=='walk'){const fr=Math.floor(T*6.5)%8,p=fr/8*2*Math.PI,s=Math.sin(p),fx=a=>34*Math.max(0,Math.cos(a-.6));
  return{...I,lean:9,dx:Math.round(s),x:Math.round(s),nl:[26*s,26*s-fx(p)],fl:[-26*s,-26*s-fx(p+Math.PI)],na:[12-20*s,12-20*s-22],fa:[-12+20*s,-12+20*s+22]}}
 if(st=='smash'){const s=seq(SM,Math.floor(q*15)/15);return{...s,x:s.dx}}
 const tq=Math.floor(T*15)/15,k1=cl(tq/.35),kf=Math.pow(cl((tq-.55)/.7),2),tb=tq-1.25,bn=(tb>0&&tb<.25)?5*Math.sin(tb/.25*Math.PI):0;
 return{lean:-26*k1*(1-kf),dx:0,dy:0,na:[10+130*k1-50*kf,34+130*k1-70*kf],ax:0,fa:[-8+100*k1-70*kf,16+90*k1-60*kf],nl:[20*k1,-30*k1],fl:[-5*k1,-45*k1],mouth:(k1>.3&&kf<.2)?1:0,tw:0,rot:-92*kf+bn,x:-6*kf,hy:-22+17*kf,cl:tq>.4}}
function gKey(st,T,q){return st=='idle'?Math.floor(T/.9)%2:st=='walk'?Math.floor(T*6.5)%8:st=='smash'?Math.floor(q*15):Math.min(26,Math.floor(T*15))}
function drGiant(t){const now=performance.now(),D=TR.giant;if(t.ao==null)t.ao=Math.random()*5000;
 const dead=t.hp<=0;if(!dead)bFace(t);else if(!t.fx)t.fx=1;
 const[x0,y0]=P(t.x,t.y),x=Math.round(x0),y=Math.round(y0),SC=.95;
 let st,Tm=(now+t.ao)/1000,q=0,al=1;
 if(dead){st='death';Tm=(now-(t.dk||now))/1000;al=Tm>1.9?Math.max(0,1-(Tm-1.9)/.55):1}
 else if(t.at&&now-t.at<D.rt*1000*1.7&&!t.mv){q=(((now-t.at)/1000)+.38)%D.rt;st=q>1.2?'idle':'smash'}
 else if(t.mv)st='walk';else st='idle';
 if(al<=0)return;
 const bkk=dead?0:(t.bk?1:0),spr=sprGet('g'+st+bkk+'_'+gKey(st,Tm,q),()=>gDraw(gPose(st,Tm,q),bkk));
 g.save();g.globalAlpha*=al;g.fillStyle='#0007';g.beginPath();g.ellipse(x,y,15*SC,(VT?6.5:5)*SC,0,0,7);g.fill();
 g.translate(x,y);g.scale(t.fx*SC,SC);g.imageSmoothingEnabled=false;g.drawImage(spr,-BOX,-BOY);g.restore();
 if(!dead&&t.hp<t.max)bar(x,y-62,26,t.hp/t.max)}
function giantIcon(big){const c=bctx();c.clearRect(0,0,96,90);gDraw(gPose('idle',0,0),0);
 const k=big?2:1,o=document.createElement('canvas');o.width=48*k;o.height=60*k;const x=o.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(BOC,BOX-30,BOY-72,60,75,0,0,48*k,60*k);return o.toDataURL()}

/* ================= v62: Duende rediseñado (sprite animado 3/4, un poco más pequeño que el Guerrero) ================= */
var GBL=[{dps:11,hp:25},{dps:14,hp:30},{dps:19,hp:36},{dps:24,hp:50},{dps:32,hp:65},{dps:42,hp:80},{dps:52,hp:105}];
var GBR=[null,{c:45000,t:18000,lab:1},{c:175000,t:32400,lab:3},{c:500000,t:43200,lab:5},{c:1200000,t:86400,lab:6},{c:2000000,t:129600,lab:7},{c:3000000,t:302400,lab:8}];
TLV.gob=GBL;TRS.gob=GBR;
for(const T of[BR,AR,GR,GBR])for(const r of T)if(r)r.t*=1.5; /* investigar en el laboratorio dura 1,5 veces */
function gbDraw(P,bk){const R=Math.PI/180,th=(P.rot||0)*R,cs=Math.cos(th),sn=Math.sin(th),px=P.x||0;
 const vv=(a,l)=>[Math.sin(a*R)*l,Math.cos(a*R)*l],ad=(p,q)=>[p[0]+q[0],p[1]+q[1]],rt2=(p,d)=>[p[0]*Math.cos(d*R)-p[1]*Math.sin(d*R),p[0]*Math.sin(d*R)+p[1]*Math.cos(d*R)];
 const limb=(o,a1,a2,l1,l2)=>{const k=ad(o,vv(a1,l1));return[o,k,ad(k,vv(a2,l2))]};
 const ik=(s,t,l1,l2)=>{let dx=t[0]-s[0],dy=t[1]-s[1],d=Math.hypot(dx,dy);const m=l1+l2-.01;if(d>m){dx*=m/d;dy*=m/d;d=m}if(d<1)d=1;
  const a=(l1*l1-l2*l2+d*d)/(2*d),h=Math.sqrt(Math.max(0,l1*l1-a*a)),ux=dx/d,uy=dy/d;let qx=uy,qy=-ux;if(ux<0){qx=-uy;qy=ux}
  return[s,[s[0]+ux*a+qx*h,s[1]+uy*a+qy*h],[s[0]+dx,s[1]+dy]]};
 const TL=10,neck=[Math.sin(P.lean*R)*TL,-Math.cos(P.lean*R)*TL],sh=[neck[0]*.9,neck[1]*.9];
 const nl=limb([2,0],P.nl[0],P.nl[1],7,7),fl=limb([-2,0],P.fl[0],P.fl[1],7,7);
 const hy=(P.hy!==undefined?P.hy:-Math.max(nl[2][1],fl[2][1])-1)+(P.dy||0);
 const tf=p=>[px+p[0]*cs-p[1]*sn,hy+p[0]*sn+p[1]*cs];
 const SK='#8fd13b',SKD='#5fa22a',SKL='#c2f26e',PINK='#e58f9a',VEST='#7a5234',VESTD='#573a24',RED='#c43a2a',PANT='#5b4630',PANTD='#3f301f',BOOT='#4a3322',BELT='#2f2112',GOLD='#f7d23e',GOLDD='#d9a91c',GOLDL='#fff3a0',BUR='#9a6a42',BURD='#6e4a2c',BURL='#b98558',ROPE='#4d341b',DK='#241408';
 const leg=(l,pc)=>{const A=tf(l[0]),K=tf(l[1]),F=tf(l[2]);bL(A,K,6,OL);bL(K,F,5,OL);bL(A,K,4,pc);bL(K,F,3,SKD);
  bR(F[0]-3,F[1]-3,8,5,OL);bR(F[0]-2,F[1]-2,6,3,BOOT);bR(F[0]+4,F[1]-4,3,3,OL);bR(F[0]+4,F[1]-3,2,2,BOOT);bR(F[0]-2,F[1]-2,6,1,'#6b4a2e')};
 leg(fl,PANTD);
 /* saco a la espalda */
 const scL=ad(ad(neck,rt2([-6.5,-3],P.lean)),P.so||[0,0]),SC=tf(scL),rs=Math.round(8*(P.ss||1));
 for(let y=-rs-1;y<=rs+1;y++)for(let x=-rs-1;x<=rs+1;x++){const d=Math.hypot(x,y*.95);if(d>rs+1)continue;bR(SC[0]+x,SC[1]+y,1,1,d>rs?OL:(y>rs*.35?BURD:((x+y)%3===0?BURL:BUR)))}
 bR(SC[0]-2,SC[1]-1,5,4,BURL);bR(SC[0]-2,SC[1]-1,5,1,ROPE);bR(SC[0]-2,SC[1]+2,5,1,ROPE);bR(SC[0]-2,SC[1]-1,1,4,ROPE);bR(SC[0]+2,SC[1]-1,1,4,ROPE);
 const MT=[SC[0]+Math.round(rs*.55),SC[1]-Math.round(rs*.85)];
 bR(MT[0]-1,MT[1]-1,4,3,ROPE);bR(MT[0],MT[1]-3,2,2,GOLD);bR(MT[0]+2,MT[1]-2,2,2,GOLDD);bR(MT[0]-2,MT[1]-2,2,2,GOLDL);
 /* brazo lejano sujeta el saco */
 {const tie=ad(scL,[4,-7]),fa=ik(sh,tie,5.5,5.5).map(tf);bL(fa[0],fa[1],5,OL);bL(fa[1],fa[2],5,OL);bL(fa[0],fa[1],3,SKD);bL(fa[1],fa[2],3,SKD);bR(fa[2][0]-2,fa[2][1]-2,5,5,OL);bR(fa[2][0]-1,fa[2][1]-1,3,3,SKD)}
 /* torso: chaleco marrón con tirantes rojos */
 const Hp=tf([0,0]),N=tf(neck),ax=[N[0]-Hp[0],N[1]-Hp[1]],len=Math.hypot(ax[0],ax[1])||1,u=[ax[0]/len,ax[1]/len],n=[u[1],-u[0]],at=(s,w)=>[Hp[0]+u[0]*s+n[0]*w,Hp[1]+u[1]*s+n[1]*w];
 bP([at(-1,-5.5),at(-1,5.5),at(4,6),at(4,-6)],PANT,OL);
 bP([at(3,-6),at(3,6),at(len*.6,7),at(len*.98,6.2),at(len*.98,-6.2),at(len*.6,-7)],VEST,OL);
 bP([at(3,0),at(3,6),at(len*.6,7),at(len*.98,6.2),at(len*.98,0)],VESTD);
 if(!bk){bL(at(len*.96,-3.5),at(4,2.5),2,RED);bL(at(len*.96,.5),at(5,5),2,RED);bP([at(3,-6.2),at(3,6.2),at(5.4,6.2),at(5.4,-6.2)],BELT,OL);const q=at(4.2,-1);bR(q[0]-2,q[1]-2,5,4,OL);bR(q[0]-1,q[1]-1,3,2,GOLD)}
 else{bP([at(3,-6.2),at(3,6.2),at(5.4,6.2),at(5.4,-6.2)],BELT,OL)}
 bR(N[0]-2,N[1]-1,5,4,SKD);
 leg(nl,PANT);
 /* cabeza: orejas pequeñas, ojos grandes, nariz puntiaguda */
 const hc=tf(ad(neck,rt2([3,-7],P.lean))),hx=Math.round(hc[0]),hyy=Math.round(hc[1]+(P.hb||0)),ea=P.ear||0;
 bP([[hx-4,hyy-2],[hx-6,hyy-8+ea],[hx-12,hyy-9+ea],[hx-5,hyy+1]],SKD,OL);bP([[hx-5,hyy-2],[hx-7,hyy-6+ea],[hx-10,hyy-7+ea],[hx-5,hyy]],PINK);
 bP([[hx+2,hyy-5],[hx+3,hyy-10+ea],[hx+7,hyy-9+ea],[hx+5,hyy-3]],SK,OL);
 bP([[hx-6,hyy-4],[hx-3,hyy-7],[hx+4,hyy-7],[hx+7,hyy-3],[hx+7,hyy+3],[hx+4,hyy+6],[hx-4,hyy+6],[hx-6,hyy+2]],SK,OL);
 bR(hx-3,hyy-6,8,1,SKL);bR(hx-5,hyy-3,2,6,SKD);
 if(bk){bR(hx-4,hyy-5,9,9,SK);bR(hx-4,hyy-5,9,1,SKL)}
 else{
  bP([[hx+5,hyy-1],[hx+11,hyy+2],[hx+5,hyy+3]],SK,OL);bR(hx+6,hyy,2,1,SKL);bR(hx+9,hyy+2,1,1,PINK);
  if(P.dead){for(const ex of[hx-2,hx+2]){bR(ex,hyy-3,3,3,'#fff');bR(ex,hyy-3,1,1,DK);bR(ex+2,hyy-3,1,1,DK);bR(ex+1,hyy-2,1,1,DK);bR(ex,hyy-1,1,1,DK);bR(ex+2,hyy-1,1,1,DK)}}
  else{bR(hx-2,hyy-3,3,3,'#fff');bR(hx+2,hyy-3,3,3,'#fff');bR(hx-2+(P.l1||0),hyy-2,2,2,DK);bR(hx+2+(P.l2||0),hyy-2,2,2,DK)}
  bR(hx-3,hyy-5,4,1,SKD);bR(hx+2,hyy-5,4,1,SKD);bR(hx-2,hyy-6,7,1,SKD);
  if(P.mouth){bR(hx,hyy+3,7,3,DK);bR(hx,hyy+3,7,1,'#fff');bR(hx+2,hyy+5,3,1,'#c8504a')}else{bR(hx,hyy+3,7,1,DK);bR(hx+6,hyy+2,1,1,DK);bR(hx+2,hyy+4,1,1,'#fff')}}
 /* brazo cercano con monedas */
 {const na=limb(sh,P.na[0],P.na[1],5.5,5.5),A=tf(na[0]),K=tf(na[1]),F=tf(na[2]);bL(A,K,5,OL);bL(K,F,5,OL);bL(A,K,3,SK);bL(K,F,3,SK);bR(F[0]-3,F[1]-3,6,6,OL);bR(F[0]-2,F[1]-2,4,4,SK);bR(F[0]-2,F[1]-2,4,1,SKL);
  if(P.coins){bR(F[0]-3,F[1]-6,3,2,GOLD);bR(F[0]-1,F[1]-6,3,2,GOLDD);bR(F[0]-2,F[1]-8,3,2,GOLDL)}}}
function gbPose(st,T,q){
 const lp=(a,b,u)=>({...a});const cl=x=>Math.max(0,Math.min(1,x)),sm=x=>{x=cl(x);return x*x*(3-2*x)};
 const I={lean:18,dy:0,na:[15,50],nl:[8,4],fl:[-10,-5],so:[0,0],ss:1,coins:1,l1:0,l2:0,mouth:0,hb:0,ear:0,rot:0,x:0};
 if(st=='idle'){const f=Math.floor(T/.8)%2,lk=Math.floor(T/1.1)%2;return{...I,lean:18+f,hb:f,ear:-f,l1:lk,l2:lk,so:[0,f]}}
 if(st=='run'){const p=(Math.floor(T*12)%8)/8*2*Math.PI,s=Math.sin(p),fx=a=>55*Math.max(0,Math.cos(a-.6));
  return{...I,lean:27,nl:[50*s,50*s-fx(p)],fl:[-50*s,-50*s-fx(p+Math.PI)],na:[-42*s,-42*s+42],hb:Math.round(s),ear:Math.round(2*Math.sin(p*2)),so:[-1*s,Math.round(Math.cos(p*2))],dy:-Math.abs(Math.sin(p+.5))*1.5,mouth:1,l1:1,x:Math.round(s)}}
 if(st=='attack'){const h=.18,tq=Math.round(q*15)/15;let a=0;if(tq>=h-.12&&tq<=h)a=Math.pow((tq-(h-.12))/.12,2);else if(tq>h&&tq<h+.22)a=1-(tq-h)/.22;const a1=Math.min(1,a);
  return{...I,x:4*a1,lean:22+16*a1,na:[-50+138*a1,-95+187*a1],nl:[8-30*a1,4-40*a1],fl:[-10+50*a1,-5+15*a1],l1:1,l2:1,mouth:a1>.4?1:0,ear:a1>.3?2:0,hb:Math.round(2*a1),so:[-2*a1,0]}}
 const tq=Math.floor(T*15)/15,k1=sm(tq/.3),kf=Math.pow(cl((tq-.25)/.7),2),tb=tq-.95,hop=(tb>0&&tb<.3)?4*Math.sin(tb/.3*Math.PI):0;
 return{...I,lean:(18-38*k1)*(1-kf)+4*kf,na:[(15+135*k1)*(1-kf)+120*kf,(50+120*k1)*(1-kf)+130*kf],nl:[8+22*k1,4-35*k1],fl:[-10-10*k1,-5-50*k1],rot:-92*kf,x:-4*kf,hy:-17+13*kf,dy:-hop-2*k1*(1-kf),mouth:kf<.9?1:0,dead:tq>.35,ear:kf>.5?3:Math.round(-3*k1),coins:kf<.5?1:0}}
function gbKey(st,T,q){return st=='idle'?Math.floor(T/.8)%2*2+Math.floor(T/1.1)%2:st=='run'?Math.floor(T*12)%8:st=='attack'?Math.floor(q*15):Math.min(22,Math.floor(T*15))}
function drGob(t){const now=performance.now(),D=TR.gob;if(t.ao==null)t.ao=Math.random()*5000;
 const dead=t.hp<=0;if(!dead)bFace(t);else if(!t.fx)t.fx=1;
 const[x0,y0]=P(t.x,t.y),x=Math.round(x0),y=Math.round(y0),SC=.72;
 let st,Tm=(now+t.ao)/1000,q=0,al=1;
 if(dead){st='death';Tm=(now-(t.dk||now))/1000;al=Tm>1.5?Math.max(0,1-(Tm-1.5)/.55):1}
 else if(t.at&&now-t.at<D.rt*1000*1.7&&!t.mv){q=(((now-t.at)/1000)+.18)%D.rt;st=q>.62?'idle':'attack'}
 else if(t.mv)st='run';else st='idle';
 if(al<=0)return;
 const bkk=dead?0:(t.bk?1:0),spr=sprGet('o'+st+bkk+'_'+gbKey(st,Tm,q),()=>gbDraw(gbPose(st,Tm,q),bkk));
 g.save();g.globalAlpha*=al;g.fillStyle='#0006';g.beginPath();g.ellipse(x,y,10*SC,(VT?5:4)*SC,0,0,7);g.fill();
 g.translate(x,y);g.scale(t.fx*SC,SC);g.imageSmoothingEnabled=false;g.drawImage(spr,-BOX,-BOY);g.restore();
 if(!dead&&t.hp<t.max)bar(x,y-38,20,t.hp/t.max)}
function gobIcon(big){const c=bctx();c.clearRect(0,0,96,90);gbDraw(gbPose('idle',0,0),0);
 const k=big?2:1,o=document.createElement('canvas');o.width=48*k;o.height=60*k;const x=o.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(BOC,BOX-26,BOY-46,52,52,0,6*k,48*k,48*k);return o.toDataURL()}

function drT(t){if(t.k=='barb')return drBarb(t);if(t.k=='arch')return drArch(t);if(t.k=='giant')return drGiant(t);if(t.k=='gob')return drGob(t);return drTOld(t)}
function barbIcon(big){const c=bctx();c.clearRect(0,0,96,90);bDraw({lean:6,x:0,na:[55,140],ax:178,fa:[15,45],nl:[10,5],fl:[-10,-5]},0);
 const k=big?2:1,o=document.createElement('canvas');o.width=48*k;o.height=60*k;const x=o.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(BOC,BOX-24,BOY-58,48,60,0,0,48*k,60*k);return o.toDataURL()}
function tIconBig(k){if(k=='arch')return _ic.archBig||(_ic.archBig=archIcon(1));if(k=='giant')return _ic.giantBig||(_ic.giantBig=giantIcon(1));if(k=='gob')return _ic.gobBig||(_ic.gobBig=gobIcon(1));if(k!='barb')return tIcon(k);return _ic.barbBig||(_ic.barbBig=barbIcon(1))}
/* ---- carta de información del Guerrero con niveles e investigación ---- */
let _tiH='',_tiS='',_tiF='';
function tinfoDraw(){const el=document.getElementById('infoM'),k=UI.tinfo,D=TR[k];el.style.display='flex';el.style.zIndex=12;
 document.getElementById('ipv').style.display='none';const pv=document.getElementById('tpv');pv.style.display='flex';
 const set=(id,h,key)=>{if(window[key]!==h){document.getElementById(id).innerHTML=h;window[key]=h}};
 const art=`<div class=tart><img src="${tIconBig(k)}"><div class=slab></div></div>`;if(pv.dataset.k!==k){pv.innerHTML=art;pv.dataset.k=k}
 const cur=tlv(k),TT=TLV[k],N=TT[cur],L=TT[cur-1],mx=TT.length;
 set('iHead',`<div class=ih><b>${D.n}</b> <em>de nivel ${cur}</em></div><div class=ibar><i style="width:${Math.round(cur/mx*100)}%"></i></div>`,'_tiH');
 const row=(ic,lb,v,n)=>`<div class=st><span class=si>${ic}</span><div><small>${lb}:</small><b>${v}${n!=null?` <u>→ ${n}</u>`:''}</b></div></div>`;
 const rs=k=='wb'?[row('❤️','Vida',L.hp,N&&N.hp),row('💥','Daño a estructuras',L.d,N&&N.d),row('🧱','Daño vs. muros',L.w,N&&N.w),row('☠️','Daño al ser destruido',L.dd,N&&N.dd),row('🧱','Daño al ser destruido (muros)',L.dw,N&&N.dw),row('⭐','Objetivo preferido','Muros (daño x40)'),row('🗡️','Tipo de daño','Salpicadura de 2 casillas (solo tierra)'),row('🎯','Objetivos','Terrestres'),row('🏠','Espacio en viviendas',D.sp),row('👟','Velocidad de movimiento',Math.round(D.v*10)),row('⏱️','Velocidad de ataque',D.rt+' s'),row('📏','Rango','1 casilla'),row('🏛️','Cuartel requerido','Nivel '+(TU[k]||1))]:k=='heal'?[row('❤️','Vida',L.hp,N&&N.hp),row('💖','Curación por segundo',L.dps,N&&N.dps),row('💖','Curación por pulso',L.pp,N&&N.pp),row('💖','Curación en héroes',L.hh,N&&N.hh),row('⭐','Objetivo preferido','Ninguno'),row('✨','Tipo de efecto','Salpicadura de curación de 1,5 casillas (solo terrestres)'),row('🏠','Espacio en viviendas',D.sp),row('👟','Velocidad de movimiento',Math.round(D.v*10)),row('⏱️','Velocidad de curación','0,7 s'),row('🏛️','Cuartel requerido','Nivel '+(TU[k]||1)),row('📏','Alcance','5 casillas')]:k=='mage'?[row('❤️','Vida',L.hp,N&&N.hp),row('💥','Daño por segundo',L.dps,N&&N.dps),row('⚔️','Daño por ataque',L.dps*1.5,N&&N.dps*1.5),row('⭐','Objetivo preferido','Ninguno'),row('🗡️','Tipo de daño','Salpicadura de 0,3 casillas (terrestre y aéreo)'),row('🏠','Espacio en viviendas',D.sp),row('👟','Velocidad de movimiento',Math.round(D.v*10)),row('⏱️','Velocidad de ataque',D.rt+' s'),row('🏛️','Cuartel requerido','Nivel '+(TU[k]||1)),row('📏','Alcance','3 casillas')]:k=='loon'?[row('❤️','Vida',L.hp,N&&N.hp),row('💥','Daño por segundo',L.dps,N&&N.dps),row('⚔️','Daño por ataque',L.dps*3,N&&N.dps*3),row('☠️','Daño por muerte (bomba 1,5 s)',L.dd,N&&N.dd),row('⭐','Objetivo preferido','Defensas'),row('🗡️','Tipo de daño','Salpicadura de 1,2 casillas (solo suelo)'),row('🎯','Objetivos','Terrestres'),row('🏠','Espacio en viviendas',D.sp),row('👟','Velocidad de movimiento',Math.round(D.v*10)),row('⏱️','Velocidad de ataque',D.rt+' s'),row('📏','Rango','0,5 casillas'),row('💣','Radio de daño por muerte','1,2 casillas'),row('🏛️','Cuartel requerido','Nivel '+(TU[k]||1))]:[row('❤️','Vida',L.hp,N&&N.hp),row('💥','Daño por segundo',L.dps,N&&N.dps),row('⚔️','Daño por ataque',Math.round(L.dps*D.rt*10)/10,N&&Math.round(N.dps*D.rt*10)/10),...(k=='gob'?[row('💰','DPS en edificios de recursos',L.dps*2,N&&N.dps*2)]:[]),row('⭐','Objetivo preferido',k=='giant'?'Defensas':k=='gob'?'Recursos (daño x2)':'Ninguno'),row('🗡️','Tipo de daño',k=='arch'?'A distancia (tierra y aire)':'Cuerpo a cuerpo'),row('🎯','Objetivos',k=='arch'?'Terrestres y aéreos':'Terrestres'),row('🏠','Espacio en viviendas',D.sp),row('👟','Velocidad de movimiento',Math.round(D.v*10)),row('⏱️','Velocidad de ataque',D.rt+' s'),row('📏','Rango',D.rg+' casillas'),row('🏛️','Cuartel requerido','Nivel '+(TU[k]||1))];
 set('iStats',rs.join(''),'_tiS');
 let ft;const R=TRS[k][cur],busy=S.rs&&S.rs.k==k,other=S.rs&&S.rs.k!=k;
 if(busy){const rem=Math.max(0,S.rs.rem!=null?S.rs.rem:((S.rs.end||0)-Date.now())/1000);ft=`<div class=du style="flex:1"><small>Investigando · entrenamiento ×2</small><b>${fmtT(rem)}</b></div>${gbtn('data-tgm=1',rem,'Terminar ya')}`}
 else if(!R)ft=`<div class=du style="flex:1"><b>Nivel máximo</b></div>`;
 else{let why='';const LB=S.b.filter(b=>b.t=='lab'&&!b.ruin&&!b.nb);if(other)why='Laboratorio ocupado';else if(!LB.length)why='Construye un Laboratorio';else if(LB.every(b=>b.up>0))why='Laboratorio en mejora';else if(labLv()<R.lab)why='Requiere Laboratorio nivel '+R.lab;else if(S.e<R.c)why='Faltan recursos';
  ft=`<button data-tup=1 class="${why?'off':''}"><span>Mejorar</span><small>${R.c} 💧</small></button><div class="du${why?' bad':''}">${why?`<b>${why}</b>`:`Duración de la mejora:<b>${fmtT(R.t)}</b>`}</div>`}
 set('iFoot',ft,'_tiF');
 _sIh=_sIs=_sIf=_sIk=''}


/* ================= v65: Laboratorio rediseñado (3x3, 8 niveles) ================= */
function drLab(b){const lv=Math.max(1,Math.min(8,b.lv|0)),T=Math.ceil(lv/2),now=performance.now(),busy=mode=='v'&&typeof S=='object'&&S&&S.rs&&!(b.up>0),s=3,h=TY.lab.h;
 const roof=['#3d8fd6','#2fb5a5','#8a58d6','#e2b23a'][T-1],liq=['#5ff2ff','#8cff6a','#d98bff','#ffd84a'][T-1],wall='#e9ecf1',dk='#27323f',trim=T==4?'#e2b23a':T==3?'#b9a8e8':'#7e8ea6',glow=['rgba(95,242,255,','rgba(140,255,106,','rgba(217,139,255,','rgba(255,216,74,'][T-1];
 mPoly(b,[[.1,.2,0],[2.95,.15,0],[3.0,2.95,0],[.15,3.0,0]],'rgba(20,40,10,.2)');
 mBox(b,.12,.12,2.88,2.88,0,2.6,'#8e98a6',dk);mBox(b,.2,.2,2.8,2.8,2.6,3.2,'#a9b3c0',dk);
 /* ventanas de una cara del octágono */
 const wins=(b0,cu,cv,r,z0,z1,col)=>{const V=[];for(let k=0;k<8;k++){const a=(k+.5)*Math.PI/4;V.push([cu+Math.cos(a)*r,cv+Math.sin(a)*r])}
  for(let k=0;k<8;k++){const a=(k+1)*Math.PI/4,nu=Math.cos(a),nv=Math.sin(a);if(nu+nv<=.15)continue;const p=V[k],q=V[(k+1)%8],f=(t)=>[p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t],A=f(.3),B=f(.7);
   mPoly(b,[[A[0],A[1],z0],[B[0],B[1],z0],[B[0],B[1],z1],[A[0],A[1],z1]],col,dk)}};
 /* chimenea trasera con humo de color */
 mBox(b,.3,1.0,.75,1.45,3.2,24,'#80604a','#2a170a');mBox(b,.25,.95,.8,1.5,22,26,'#5a4132','#2a170a');mBox(b,.33,1.03,.72,1.42,26,26.1,'#1c1008');
 for(let i=0;i<4;i++){const ph=(now/(busy?1500:2400)+i/4)%1,[sx,sy]=PS(b,.52,1.22,27),ox=Math.sin(i*2.1+now/900)*5+ph*9,py=sy-ph*(busy?44:32);g.globalAlpha=(.5*(1-ph))*(busy?1:.7);g.fillStyle=glow+'.9)';g.beginPath();g.arc(sx+ox,py,3+ph*7,0,7);g.fill()}g.globalAlpha=1;
 /* depósito trasero con líquido */
 mOct(b,2.42,.72,.4,3.2,17,'#7d95b0',dk);mSide(b,2.42,.72,.405,6,8,trim,dk);mSide(b,2.42,.72,.405,13,15,trim,dk);
 {const[x,y]=PS(b,2.42,.72,17);g.beginPath();g.ellipse(x,y,.32*TW*MSC*.72,.32*TH*MSC*.9,0,0,7);g.fillStyle=liq;g.fill();g.beginPath();g.ellipse(x-2,y-1,5,2.4,0,0,7);g.fillStyle='rgba(255,255,255,.55)';g.fill()}
 /* sala principal */
 mOct(b,1.5,1.6,1.0,3.2,16,wall,dk);mSide(b,1.5,1.6,1.012,3.2,6,trim,dk);mSide(b,1.5,1.6,1.012,13,16,roof,dk);
 wins(b,1.5,1.6,1.012,7.5,12,glow+(busy?'.95)':'.75)'));
 /* puerta y escalones al frente */
 mBox(b,1.05,2.9,1.95,3.15,3.2,5,'#a9b3c0',dk);mBox(b,1.2,2.5,1.8,2.78,3.2,13,'#5a3b24',dk);mBox(b,1.28,2.74,1.72,2.8,3.4,11,'#7a5233');
 /* cúpula escalonada */
 for(let i=0;i<4;i++){const r=.94-i*.2;mOct(b,1.5,1.6,r,16+i*3.4,19.4+i*3.4,i==3?trim:roof,dk)}
 mOct(b,1.5,1.6,.2,30,33,dk,dk);
 /* depósito izquierdo (nivel 3+) y tubos */
 if(T>=2){mOct(b,.62,2.42,.34,3.2,13,'#7d95b0',dk);mSide(b,.62,2.42,.345,5,7,trim,dk);const[x,y]=PS(b,.62,2.42,13);g.beginPath();g.ellipse(x,y,.26*TW*MSC*.72,.26*TH*MSC*.9,0,0,7);g.fillStyle=liq;g.fill()}
 mBox(b,1.95,.6,2.2,.85,9,11.5,'#9aa5b3',dk);
 /* soporte de tubos de ensayo */
 mBox(b,2.1,2.15,2.75,2.55,3.2,6.5,'#8a5a2b','#2a170a');
 for(let i=0;i<4;i++){const[x,y]=PS(b,2.2+i*.14,2.35+i*.03,6.5),c=[liq,'#ff7a7a','#ffe27a',liq][i];g.fillStyle='rgba(235,248,255,.9)';g.fillRect(x-2,y-12,4.4,12);g.fillStyle=c;g.fillRect(x-1.6,y-8,3.6,8);g.strokeStyle='#2a3a50';g.lineWidth=1;g.strokeRect(x-2,y-12,4.4,12)}
 /* matraz grande sobre la cúpula */
 {const[x,y]=PS(b,1.5,1.6,33),k=MSC*1.15,fy=y-1;
  g.save();g.translate(x,fy);g.scale(k,k);
  const path=()=>{g.beginPath();g.moveTo(-3,-24);g.lineTo(-3,-13);g.lineTo(-12,-1);g.quadraticCurveTo(-13,5,-7,5);g.lineTo(7,5);g.quadraticCurveTo(13,5,12,-1);g.lineTo(3,-13);g.lineTo(3,-24);g.closePath()};
  path();g.fillStyle='rgba(225,247,255,.92)';g.fill();
  g.save();path();g.clip();const wv=Math.sin(now/300)*1.4;g.fillStyle=liq;g.beginPath();g.moveTo(-14,-7+wv);g.quadraticCurveTo(-6,-10+wv,0,-7-wv);g.quadraticCurveTo(6,-4-wv,14,-7+wv);g.lineTo(14,8);g.lineTo(-14,8);g.closePath();g.fill();
  g.fillStyle='rgba(255,255,255,.4)';g.fillRect(-9,-4,3,8);g.restore();
  path();g.strokeStyle='#27323f';g.lineWidth=1.8;g.stroke();g.fillStyle='#8a5a2b';g.fillRect(-4,-27,8,4);g.strokeStyle='#27323f';g.lineWidth=1;g.strokeRect(-4,-27,8,4);
  for(let i=0;i<(busy?6:3);i++){const ph=(now/(busy?700:1300)+i/(busy?6:3))%1,bx=Math.sin(i*2.7+now/400)*5,by=-4-ph*(busy?30:22);g.globalAlpha=1-ph*.8;g.fillStyle=glow+'.9)';g.beginPath();g.arc(bx,by,1.6+ph*2.4,0,7);g.fill();g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=.8;g.stroke()}
  g.globalAlpha=1;g.restore()}
 /* antena con orbe (nivel 5+) */
 if(T>=3){const[x,y]=PS(b,2.55,1.55,3.2),[x2,y2]=PS(b,2.55,1.55,34);g.strokeStyle=dk;g.lineWidth=2.4;g.beginPath();g.moveTo(x,y);g.lineTo(x2,y2);g.stroke();g.beginPath();g.arc(x2,y2-2,4,0,7);g.fillStyle=glow+(.65+.3*Math.sin(now/250)).toFixed(2)+')';g.fill();g.strokeStyle=dk;g.lineWidth=1;g.stroke()}
 /* nivel 7-8: destellos dorados */
 if(T==4)for(let i=0;i<3;i++){const ph=(now/1600+i/3)%1,[x,y]=PS(b,1.5+Math.cos(i*2.1)*.9,1.6+Math.sin(i*2.1)*.9,20+ph*18);g.globalAlpha=Math.sin(ph*Math.PI);g.fillStyle='#fff3a3';g.fillRect(x-1.5,y-1.5,3,3)}
 g.globalAlpha=1;
 /* insignia, vida, selección */
 const[cx,cy]=P(b.x+1.5,b.y+1.5,h);g.font='14px Lilita One,Arial Black,sans-serif';const[bx,by]=P(b.x+s,b.y+s);g.beginPath();g.arc(bx,by+10,10,0,7);g.fillStyle='#1d4f9a';g.fill();g.lineWidth=2.5;g.strokeStyle='#fff';g.stroke();g.fillStyle='#fff';g.fillText(b.lv,bx,by+11);
 if(b.hp<b.max&&b.rg==null)bar(cx,cy-30,30,b.hp/b.max);
 if(mode=='v'&&b===pk){const[ax,ay]=P(b.x+1.5,b.y+1.5);g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.ellipse(ax,ay,s*TW*.45,s*TH*.45,0,0,7);g.stroke()}}

/* ================= v65: menú del laboratorio ("Elige qué mejorar") ================= */
(function(){const st=document.createElement('style');st.textContent=`
#labM{position:fixed;inset:0;z-index:11;display:none;align-items:center;justify-content:center;background:rgba(5,10,20,.55);padding:calc(8px + env(safe-area-inset-top,0px)) 8px calc(8px + env(safe-area-inset-bottom,0px))}
#labM .lbw{width:min(920px,100%);max-height:100%;display:flex;flex-direction:column;border-radius:18px;background:#7b7b7e;border:3px solid #3f3f45;box-shadow:0 8px 0 #0007,inset 0 2px 0 #fff4;overflow:hidden;font-family:'Lilita One','Arial Black',sans-serif}
#labM .lbh{position:relative;display:flex;align-items:center;justify-content:center;height:46px;background:linear-gradient(#8e8e92,#6a6a6e);color:#fff;font-size:21px;letter-spacing:.3px;text-shadow:0 2px 0 #000a,0 0 6px #000}
#labM .lbx{position:absolute;right:6px;top:5px;width:44px;height:36px;border-radius:9px;border:2px solid #fff8;background:linear-gradient(#ff5f5f,#c4262a);color:#fff;font-size:20px;line-height:1;cursor:pointer;box-shadow:0 3px 0 #0006;font-family:inherit}
#labM .lbb{margin:8px;border-radius:12px;background:#e4e3dd;padding:8px;display:flex;flex-direction:column;gap:8px;min-height:0;overflow:hidden}
#labM .lbn{display:flex;align-items:center;gap:12px;min-height:84px;border-radius:10px;background:linear-gradient(100deg,#8d9ac4 0%,#7f8ab5 55%,#6f7aa6 100%);border:1px solid #5d6794;padding:6px 12px;color:#fff}
#labM .lbn .av{flex:none;width:68px;height:68px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#bfe7ff,#4c8cd6 70%);border:3px solid #fff;display:flex;align-items:center;justify-content:center;font-size:38px;box-shadow:0 3px 0 #0005}
#labM .lbn .tx{flex:1;font-size:18px;line-height:1.2;text-shadow:0 2px 0 #000a}
#labM .lbn .tx small{display:block;font-size:13px;opacity:.95;margin-top:3px;text-shadow:0 1px 0 #000a}
#labM .lbn .tx b{color:#ffe27a}
#labM .lbn .db{flex:none;min-width:104px}
#labM .lbg{display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:8px;overflow:auto;padding:6px 2px 4px;border-radius:10px;background:#d6d5cf;max-height:52vh}
#labM .lbc{position:relative;border-radius:10px;height:112px;background:linear-gradient(#8fd0f5,#4f9fd4);border:2px solid #2b6b9a;box-shadow:0 3px 0 #0005;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:3px 2px;color:#fff;user-select:none;-webkit-user-select:none;overflow:hidden}
#labM .lbc img{position:absolute;top:4px;left:50%;transform:translateX(-50%);width:62px;height:70px;image-rendering:pixelated;object-fit:contain}
#labM .lbc .lv{position:absolute;left:4px;bottom:26px;min-width:20px;height:20px;border-radius:6px;background:#1b1b1f;border:1px solid #fff6;font-size:13px;line-height:19px;text-align:center;padding:0 4px}
#labM .lbc .ct{position:relative;z-index:1;font-size:15px;text-shadow:0 2px 0 #000b;background:rgba(0,0,0,.28);width:100%;text-align:center;border-radius:0 0 7px 7px;padding:2px 0}
#labM .lbc.on{box-shadow:0 0 0 3px #ffe27a,0 3px 0 #0005}
#labM .lbc.lock,#labM .lbc.soon{background:linear-gradient(#cfcfcf,#aaa);border-color:#8a8a8a;cursor:default}
#labM .lbc.lock img,#labM .lbc.soon img{filter:grayscale(1) opacity(.55)}
#labM .lbc.lock .ct,#labM .lbc.soon .ct{font-size:12px;color:#f0f0f0}
#labM .lbc.max{background:linear-gradient(#ffe48a,#d9a73a);border-color:#a8791c}
#labM .lbc .pb{position:absolute;left:4px;right:4px;bottom:24px;height:5px;border-radius:3px;background:#0006;overflow:hidden}#labM .lbc .pb i{display:block;height:100%;background:#8fe36f}
#labM .lbf{font-size:13px;color:#4a4a50;text-align:center;font-family:'Lilita One',Arial,sans-serif;text-shadow:none;-webkit-text-stroke:0;paint-order:normal;opacity:1}
body.land #labM .lbn{min-height:60px}body.land #labM .lbn .av{width:48px;height:48px;font-size:26px}body.land #labM .lbn .tx{font-size:15px}body.land #labM .lbg{max-height:46vh;grid-template-columns:repeat(auto-fill,minmax(84px,1fr))}body.land #labM .lbc{height:98px}body.land #labM .lbh{height:38px;font-size:18px}body.land #labM .lbx{height:30px;top:4px}
`;document.head.appendChild(st)})();
const labBs=()=>S.b.filter(b=>b.t=='lab'&&!b.ruin&&!b.nb);
const labSt=()=>{const L=labBs();return L.length?(L.every(b=>b.up>0)?'up':'ok'):'none'};
let _sLab='';
function labDraw(){let el=document.getElementById('labM');
 if(!el){el=document.createElement('div');el.id='labM';document.body.appendChild(el);el.addEventListener('click',labClick)}
 if(!UI.lab||mode!='v'||!S){if(el.style.display!='none'){el.style.display='none';_sLab=''}if(UI.lab&&mode!='v')UI.lab=0;return}
 const stt=labSt(),rs=S.rs,keys=Object.keys(TR).filter(k=>!TR[k].hero);
 let ban;
 if(rs&&TR[rs.k]){const rem=Math.max(0,rs.rem!=null?rs.rem:((rs.end||0)-Date.now())/1000);ban=`<div class=tx>Investigando: <b>${TR[rs.k].n}</b> → nivel ${tlv(rs.k)+1}<small>Tiempo restante: ${fmtT(rem)}${stt=='up'?' · el laboratorio se está mejorando; la investigación continúa':''}</small></div>${gbtn('data-tgm=1',rem,'Terminar ya')}`}
 else if(stt=='none')ban=`<div class=tx>Necesitas un Laboratorio<small>Constrúyelo (Ayuntamiento 3) para mejorar tus tropas.</small></div>`;
 else if(stt=='up')ban=`<div class=tx>El laboratorio se está mejorando<small>No puedes iniciar nuevas investigaciones hasta que termine la mejora.</small></div>`;
 else ban=`<div class=tx>Selecciona una unidad para mejorarla.<small>Solo se puede investigar una tropa a la vez.</small></div>`;
 const cards=keys.map(k=>{const D=TR[k],ic=tIcon(k);
  if(!TLV[k])return `<div class="lbc soon" data-lk=${k}><img src="${ic}"><span class=lv>1</span><span class=ct>Próximamente</span></div>`;
  const cur=tlv(k),R=TRS[k][cur],busy=rs&&rs.k==k;
  if(!R)return `<div class="lbc max" data-lk=${k}><img src="${ic}"><span class=lv>${cur}</span><span class=ct>Nivel máx.</span></div>`;
  const lock=labLv()<R.lab&&stt!='none'?1:0,pb=busy?`<span class=pb><i style="width:${Math.round(100*(1-Math.max(0,rs.rem)/Math.max(1,rs.T||R.t)))}%"></i></span>`:'';
  return `<div class="lbc${busy?' on':lock?' lock':''}" data-lk=${k}><img src="${ic}"><span class=lv>${cur}</span>${pb}<span class=ct>${busy?fmtT(Math.max(0,rs.rem)):lock?'Lab. nv '+R.lab:R.c.toLocaleString('es')+' 💧'}</span></div>`}).join('');
 const h=`<div class=lbw><div class=lbh>Elige qué mejorar<button class=lbx data-lx=1>✕</button></div><div class=lbb><div class=lbn><div class=av>🧑‍🔬</div>${ban}</div><div class=lbg>${cards}</div><div class=lbf>Las tropas tardan el doble en entrenarse mientras se investigan.</div></div></div>`;
 if(h!==_sLab){const sc=el.querySelector('.lbg'),y=sc?sc.scrollTop:0;el.innerHTML=h;_sLab=h;const n=el.querySelector('.lbg');if(n)n.scrollTop=y}
 el.style.display='flex'}
function labClick(e){const t=e.target;if(t.id==='labM'){UI.lab=0;UI.tinfo=0;snd('ui');ui();return}
 const bt=t.closest('[data-lx],[data-lk],[data-tgm]');if(!bt)return;const d=bt.dataset;
 if(d.lx!=null){UI.lab=0;UI.tinfo=0;snd('ui');ui();return}
 if(d.tgm){troopGem();return}
 if(d.lk){if(TLV[d.lk]&&TINFO[d.lk]){UI.tinfo=d.lk;snd('open')}else snd('deny');ui()}}

/* ---- v66: ritmo de fotogramas y caché del terreno ---- */
let _gl=0,_gAct=0,_gc='';
function gfxSkip(t){let act=ptr.size>0||!!sel||mv||(typeof DM!='undefined'&&DM.on);const ck=cam.x+'|'+cam.y+'|'+cam.z;if(ck!==_gc){_gc=ck;act=true}
 if(act)_gAct=t+500;let f=mode=='a'?GX.raid:(t<_gAct?GX.cap:GX.idle);if(GFPS)f=f?Math.min(f,GFPS):GFPS;if(!f)return false;if(t-_gl<1000/f-4)return true;_gl=t;return false}
function drTerrain(){
 if(!GX.tc||(A&&A.sh>0)){_tcG=0;drTerrainRaw();return}
 const L=mode=='a'?E.b:S.b;let h=0;for(const b of L)h=(h*31+b.x*7+b.y*13+(b.hp>0?1:0))|0;
 const bake=!sel&&!(typeof DM!='undefined'&&DM.on),key=[cv.width,cv.height,cam.x,cam.y,cam.z,KS,N,VT,mode,L.length,h,bake?1:0].join('|');
 const blit=()=>{g.setTransform(1,0,0,1,0,0);g.drawImage(TCv,0,0);g.setTransform(KS*cam.z,0,0,KS*cam.z,KS*cam.x,KS*cam.y);g.textAlign='center';g.textBaseline='middle'};
 if(key===_tck&&TCv){_tcG=bake?1:0;blit();return}
 if(key===_tcp){if(!TCv)TCv=document.createElement('canvas');if(TCv.width!==cv.width||TCv.height!==cv.height){TCv.width=cv.width;TCv.height=cv.height;TCx=null}
  TCx=TCx||TCv.getContext('2d');const sg=g;g=TCx;try{drTerrainRaw();if(bake)drGrass0()}finally{g=sg}_tck=key;_tcG=bake?1:0;blit();return}
 _tcp=key;_tcG=0;drTerrainRaw()}
function drGrassOv(){if(DM.on&&pk&&mode=='v'){const s=TY[pk.t].s;poly([P(pk.x,pk.y),P(pk.x+s,pk.y),P(pk.x+s,pk.y+s),P(pk.x,pk.y+s)],DM.ok?'rgba(60,220,40,.45)':'rgba(230,50,40,.5)')}}
function fxTrim(){if(!GX.fxm||!A||!A.fx)return;const f=A.fx;if(GX.fxm<20)for(let i=f.length-1;i>=0;i--)if(f[i].k=='puff')f.splice(i,1);if(f.length>GX.fxm)f.splice(0,f.length-GX.fxm)}
/* aviso único si el dispositivo va lento con gráficos Alto */
let _fw=0,_fn=0,_fbad=0,_fgap=0,_fl=0,_fst=0;
function gfxFps(t){if(GFX!=='high'||document.hidden)return;if(!_fst)_fst=t;if(_fl&&t-_fl>400)_fgap=1;_fl=t;_fn++;if(!_fw)_fw=t;
 if(t-_fw>=2500){const fps=_fn/((t-_fw)/1000);if(!_fgap&&t-_fst>9000&&mode!=null){_fbad=fps<26?_fbad+1:0;if(_fbad>=3){_fbad=-99;gfxHint()}}_fw=t;_fn=0;_fgap=0}}
function gfxHint(){try{if(localStorage.getItem('ccgh')==='1')return;localStorage.setItem('ccgh','1')}catch(e){}
 const d=document.createElement('div');d.style.cssText='position:fixed;left:50%;bottom:calc(120px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:60;background:#1c2a44;color:#fff;border:2px solid #ffe27a;border-radius:14px;padding:10px 12px;font:14px/1.3 "Lilita One",Arial,sans-serif;max-width:92vw;text-align:center;box-shadow:0 6px 0 #0007';
 d.innerHTML='🐢 Tu dispositivo va lento.<br>¿Bajar los gráficos para ganar FPS?<div style="display:flex;gap:6px;justify-content:center;margin-top:8px"><button data-gh=mid>Medio</button><button data-gh=low>Bajo</button><button data-gh=no>No, gracias</button></div><div style="font-size:11px;opacity:.8;margin-top:6px">Puedes cambiarlo en Menú → Gráficos</div>';
 d.onclick=e=>{const b=e.target.closest('[data-gh]');if(!b)return;if(b.dataset.gh!=='no')setGfx(b.dataset.gh);d.remove()};document.body.appendChild(d);setTimeout(()=>{try{d.remove()}catch(e){}},20000)}
menuEl.addEventListener('click',e=>{const b=e.target.closest('[data-g],[data-fps]');if(!b)return;if(b.dataset.g)setGfx(b.dataset.g);else setFps(b.dataset.fps);try{menuDraw()}catch(_){}});

/* ================= v26: reloj del servidor (anti-trampa de hora) ================= */
let _ent=0,SB0,PB0,simC=0,_tsb=0,_tsT=0,_tsSeq=0,_tsLast=0,_tsRetry=0;
/* v29: sincronización robusta. Antes, si una petición quedaba colgada al bloquear/dormir el móvil, _tsb se quedaba en 1 para siempre
   y la aldea nunca recuperaba el tiempo offline. Ahora: timeout de 12 s, nunca se bloquea, reintenta y aplica respuestas tardías. */
async function tsync(first){if(OFFLINE||typeof sb=='undefined'||!sb||!ME)return;if(!first&&!_ent)return;if(mode!='v'&&!first)return;
 const now=performance.now();if(_tsb&&now-_tsT<12000&&!first)return;
 _tsb=1;_tsT=now;const my=++_tsSeq,used=simC;simC=0;
 try{const r=await Promise.race([sb.rpc('time_sync'),new Promise((_,rj)=>setTimeout(()=>rj('timeout'),12000))]);
  if(!r||r.error||!r.data)throw (r&&r.error)||'sin datos';
  if(my>=_tsLast){_tsLast=my;SB0=r.data.now+(performance.now()-now)/2;PB0=performance.now()}
  if(!S||!S.b){simC+=used;return}
  /* v56: el tiempo fuera se calcula con la hora del servidor guardada en la propia partida (S.tsrv).
     Así no se pierde aunque la respuesta tarde, falle o llegue en mal momento: se puede repetir sin contar dos veces. */
  let extra,legacy=0;
  if(S.tsrv>0)extra=(TNOW()-S.tsrv)/1000;else{extra=(+r.data.el||0)-used;legacy=1}
  if(legacy&&!(extra>2))S.tsrv=TNOW();
  if(extra>2){if(mode=='v')catchUp(extra);else if(legacy){S.tsrv=TNOW();_tsPend=(_tsPend||0)+extra}}
  if(legacy&&mode=='v'&&!(S.tsrv>0))S.tsrv=TNOW();
 }catch(e){console.warn('time_sync',e);simC+=used;if(!_tsRetry){_tsRetry=1;setTimeout(()=>{_tsRetry=0;tsync()},4000)}}
 finally{if(my==_tsSeq)_tsb=0}}
let _tsPend=0;
/* si el tiempo llegó mientras estabas en un ataque, se aplica al volver a la aldea */
setInterval(()=>{if(_tsPend>2&&S&&mode=='v'){const x=_tsPend;_tsPend=0;catchUp(x)}},1000);
/* ================= v31: caché de fotogramas de sprites + colisión suave + despliegue separado ================= */
const SPC={};
const skey=(st,T,t,ar)=>st=='idle'?Math.floor(T*2)%2:st=='run'?Math.floor(T*10)%8:st=='death'?Math.min(12,Math.floor(T*12)):ar?Math.floor(t*15.6):Math.floor(t*12)*2+(t>=.8?1:0);
function sprGet(key,draw){let c=SPC[key];if(!c){bctx();BXC.clearRect(0,0,96,90);draw();c=document.createElement('canvas');c.width=96;c.height=90;c.getContext('2d').drawImage(BOC,0,0);SPC[key]=c}return c}
const SEP_R=.34;
function sepTroops(dt){if(!A||!E||!A.tr||A.tr.length<2||!E.grid)return;
 const H=new Map(),live=[];
 for(const t of A.tr){if(t.hp<=0||t.jump)continue;live.push(t);if(!t.sid)t.sid=A.sid=(A.sid||0)+1;const k=(Math.floor(t.x/SEP_R)+2)*4096+Math.floor(t.y/SEP_R)+2;let a=H.get(k);if(!a)H.set(k,a=[]);a.push(t)}
 if(live.length<2)return;const{blk,wc}=E.grid,N=E.N,g1=Math.min(1,10*dt);
 for(const a of live){if(!a.mv)continue; /* solo se empuja a las que caminan: las que atacan se quedan en su sitio */
  const i0=Math.floor(a.x/SEP_R)+2,j0=Math.floor(a.y/SEP_R)+2;let px=0,py=0;const near=a.tg&&a.tg.hp>0&&edge(a,a.tg)<2.2;
  for(let i=i0-1;i<=i0+1;i++)for(let j=j0-1;j<=j0+1;j++){const L=H.get(i*4096+j);if(!L)continue;
   for(const b of L){if(b===a||!!a.fly!==!!b.fly)continue;if(near&&b.tg===a.tg&&!b.mv)continue;let dx=a.x-b.x,dy=a.y-b.y;const d2=dx*dx+dy*dy;if(d2>=SEP_R*SEP_R)continue;let d=Math.sqrt(d2);
    if(d<.002){const an=Math.min(a.sid,b.sid)*7.1+Math.max(a.sid,b.sid)*3.3,sg=a.sid<b.sid?1:-1;dx=Math.cos(an)*sg;dy=Math.sin(an)*sg;d=1}
    const ov=SEP_R-Math.min(d,SEP_R),f=ov*g1/(d||1)*(b.mv?.5:1)*(near?.35:1);px+=dx*f;py+=dy*f}}
  const m=Math.hypot(px,py);if(m<1e-4)continue;if(m>.05){px*=.05/m;py*=.05/m}
  const nx=a.x+px,ny=a.y+py;
  if(!a.fly){const ix=Math.floor(nx),iy=Math.floor(ny);if(ix<0||iy<0||ix>=N||iy>=N||blk[iy*N+ix]||wc[iy*N+ix])continue}
  a.x=nx;a.y=ny}}
function spawn(x,y){const n=Math.min(A.qty[pick]||1,A.army[pick]),ZZ=zoneSet(E.b),fl=!!TR[pick].fly,okz=(px,py)=>!ZZ.has(ZK(Math.floor(px),Math.floor(py)));
 for(let i=0,k=0;i<n;i++){A.army[pick]--;let px=x,py=y,found=0,last=null;
  for(let tr=0;tr<48&&!found;tr++,k++){const an=k*2.399+Math.random()*.5,r=k?.46*Math.sqrt(k)+Math.random()*.07:0,cx=x+Math.cos(an)*r,cy=y+Math.sin(an)*r*.85;
   if(!okz(cx,cy))continue;last=[cx,cy];if(!A.tr.some(t=>t.hp>0&&!!t.fly==fl&&Math.hypot(t.x-cx,t.y-cy)<.5)){px=cx;py=cy;found=1}}
  if(!found&&last){px=last[0];py=last[1]}
  A.tr.push({k:pick,x:px,y:py,hp:thp(pick),max:thp(pick),dm:tdm(pick),wl:tlv(pick),cd:0,tg:null,tc:A.ord[pick]||'auto',fly:TR[pick].fly,sid:A.sid=(A.sid||0)+1})}
 snd(300,.07,'square');if(!A.army[pick])pick=Object.keys(TR).find(k=>A.army[k])||pick}
/* ================= v32: anti "click fantasma" (el toque en el mapa no debe activar el botón que aparece debajo) ================= */
let _tapT=0,_tapX=-999,_tapY=-999,_ckT=0,_ckSig='',_ckX=-999,_ckY=-999;
cv.addEventListener('pointerup',e=>{_tapT=performance.now();_tapX=e.clientX;_tapY=e.clientY},true);
addEventListener('click',e=>{const t=e.target;if(!t||t===cv)return;const now=performance.now(),near=(x,y)=>Math.hypot(e.clientX-x,e.clientY-y)<64;
 const stop=()=>{e.stopImmediatePropagation();e.preventDefault()};
 /* 1) clic generado por el mismo toque que acabas de dar en el mapa (el menú apareció justo debajo del dedo) */
 if(now-_tapT<450&&near(_tapX,_tapY)){stop();return}
 /* 2) un botón que desaparece/cambia y deja otro distinto bajo el dedo */
 const bt=t.closest&&t.closest('button,[data-b],[data-tr],[data-ti],[data-tab],[data-sk]');
 if(bt){const sig=JSON.stringify(bt.dataset)+'|'+bt.className;
  if(now-_ckT<380&&near(_ckX,_ckY)&&sig!==_ckSig){stop();return}
  _ckT=now;_ckSig=sig;_ckX=e.clientX;_ckY=e.clientY}},true);
/* ================= v33: Torre arquera nueva (atalaya de madera sobre pilotes, con arquera visible solo en ataques) ================= */
function drB0(b){if(b.t=='tower'&&!b.ruin&&!b.nb){drTower(b);if(b.hp<b.max&&b.rg==null){const[bx,by]=P(b.x+1.5,b.y+1.5,86);bar(bx,by,30,b.hp/b.max)}return}if(b.t=='cannon'&&!b.ruin&&!b.nb){drCannon(b);return}if(b.t=='mortar'&&!b.ruin&&!b.nb){drMortar(b);return}if(b.t=='lab'&&!b.ruin&&!b.nb){drLab(b);return}drB0Old(b)}
function drTower(b){const x=b.x,y=b.y,Hp=46,x0=x+.62,x1=x+2.38,y0=y+.62,y1=y+2.38,w=.14,ln=(a,c,col,wd)=>{g.strokeStyle=col;g.lineWidth=wd;g.lineCap='round';g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(c[0],c[1]);g.stroke()};
 poly([P(x+.55,y+.55),P(x+2.95,y+.55),P(x+3.1,y+3.0),P(x+.55,y+3.0)],'rgba(0,0,0,.09)');poly([P(x+.8,y+.8),P(x+2.85,y+.8),P(x+2.95,y+2.85),P(x+.8,y+2.85)],'rgba(0,0,0,.14)');
 const post=(px,py)=>bx3(px-w,py-w,px+w,py+w,0,Hp+2,'#7d4f27','#a06b36'),band=(px,py,z)=>bx3(px-w-.03,py-w-.03,px+w+.03,py+w+.03,z,z+4,'#d6bd86','#e8d39c');
 post(x0,y0);post(x1,y0);post(x0,y1);
 /* contravientos en X (cara derecha y cara izquierda) */
 const bz0=7,bz1=Hp-8;
 ln(P(x1,y0,bz0),P(x1,y1,bz1),'#5f3d1d',4.5);ln(P(x1,y0,bz1),P(x1,y1,bz0),'#6e4723',4.5);
 ln(P(x0,y1,bz0),P(x1,y1,bz1),'#5f3d1d',4.5);ln(P(x0,y1,bz1),P(x1,y1,bz0),'#6e4723',4.5);
 ln(P(x1,y0,Hp*.52),P(x1,y1,Hp*.52),'#7d4f27',4);ln(P(x0,y1,Hp*.52),P(x1,y1,Hp*.52),'#7d4f27',4);
 post(x1,y1);
 band(x0,y0,18);band(x1,y0,18);band(x0,y1,18);band(x1,y1,18);band(x1,y1,Hp-9);band(x0,y1,Hp-9);band(x1,y0,Hp-9);
 /* escalera en la cara izquierda */
 {const lx0=x0+.18,lx1=x0+.7,ly0=y1+.34,ly1=y1+.06,A0=P(lx0,ly0,0),A1=P(lx0,ly1,Hp+4),B0=P(lx1,ly0,0),B1=P(lx1,ly1,Hp+4);
  ln(A0,A1,'#5a3a1b',4);ln(B0,B1,'#5a3a1b',4);ln(A0,A1,'#a8743a',2);ln(B0,B1,'#a8743a',2);
  for(let k=1;k<7;k++){const u=k/7,a=P(lx0,ly0+(ly1-ly0)*u,(Hp+4)*u),c=P(lx1,ly0+(ly1-ly0)*u,(Hp+4)*u);ln(a,c,'#5a3a1b',3.6);ln(a,c,'#c28a4c',1.8)}}
 /* plataforma */
 const xa=x+.28,xb=x+2.72,ya=y+.28,yb=y+2.72,zt=Hp+2,zu=zt+8;
 poly([P(xa,yb,zt),P(xb,yb,zt),P(xb,yb,zu),P(xa,yb,zu)],'#8a5a2c');
 poly([P(xb,ya,zt),P(xb,yb,zt),P(xb,yb,zu),P(xb,ya,zu)],'#6a431f');
 g.strokeStyle='rgba(40,22,8,.55)';g.lineWidth=1.2;
 for(let k=1;k<5;k++){const u=xa+(xb-xa)*k/5;g.beginPath();let p=P(u,yb,zt),q=P(u,yb,zu);g.moveTo(p[0],p[1]);g.lineTo(q[0],q[1]);g.stroke()}
 for(let k=1;k<5;k++){const u=ya+(yb-ya)*k/5;g.beginPath();let p=P(xb,u,zt),q=P(xb,u,zu);g.moveTo(p[0],p[1]);g.lineTo(q[0],q[1]);g.stroke()}
 const pl=['#c9905a','#b87d46','#d29b62','#be8650','#c58c54'];
 for(let k=0;k<5;k++){const v0=ya+(yb-ya)*k/5,v1=ya+(yb-ya)*(k+1)/5;poly([P(xa,v0,zu),P(xb,v0,zu),P(xb,v1,zu),P(xa,v1,zu)],pl[k]);
  g.strokeStyle='rgba(60,32,10,.6)';g.lineWidth=1.3;const p=P(xa,v1,zu),q=P(xb,v1,zu);g.beginPath();g.moveTo(p[0],p[1]);g.lineTo(q[0],q[1]);g.stroke();
  const cx=xa+(xb-xa)*(.25+.5*((k*37)%5)/5);g.beginPath();const p2=P(cx,v0+.05,zu),q2=P(cx,v1-.05,zu);g.moveTo(p2[0],p2[1]);g.lineTo(q2[0],q2[1]);g.strokeStyle='rgba(60,32,10,.35)';g.lineWidth=1;g.stroke()}
 g.strokeStyle='#4a2c10';g.lineWidth=1.4;g.beginPath();[[xa,ya],[xb,ya],[xb,yb],[xa,yb]].forEach((c,i)=>{const p=P(c[0],c[1],zu);i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.closePath();g.stroke();
 /* la arquera solo se ve cuando atacan la aldea */
 if(mode=='a'&&b.hp>0&&E&&A)drTowerArcher(b,P(x+1.5,y+1.5,zu))}
function drTowerArcher(b,p){const now=performance.now(),rt=rtOf(b);let tx=null,bd=1e9;
 for(const t of A.tr){if(t.hp<=0||t.jump)continue;const d=Math.hypot(t.x-b.x-1.5,t.y-b.y-1.5);if(d<bd){bd=d;tx=t}}
 if(tx){const q=P(tx.x,tx.y);const dx=q[0]-p[0],dy=q[1]-p[1];if(Math.abs(dx)>3)b.afx=dx>0?1:-1;b.abk=dy<-Math.abs(dx)*.5?1:0}
 const fx=b.afx||1,bk=b.abk?1:0,sh=b.cd>0&&b.cd<=rt,st=sh?'shoot':'idle',tt=sh?Math.max(0,Math.min(.99,1-b.cd/rt)):0,T=now/1000+b.x*.37;
 const spr=sprGet('a'+st+bk+'_'+skey(st,T,tt,1),()=>aDraw(aPose(st,T,tt),bk));
 g.save();g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(p[0],p[1],10,4,0,0,7);g.fill();
 g.translate(Math.round(p[0]),Math.round(p[1]));g.scale(fx*.72,.72);g.imageSmoothingEnabled=false;g.drawImage(spr,-BOX,-BOY);g.restore()}
/* ================= v34: Cañón nuevo (cañón de hierro sobre soporte de madera, apunta a los enemigos) ================= */
function drCannon(b){const cx=b.x+1.5,cy=b.y+1.5,zc=21,now=performance.now(),ln=(a,c,col,wd)=>{g.strokeStyle=col;g.lineWidth=wd;g.lineCap='round';g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(c[0],c[1]);g.stroke()};
 let tgA=null;
 if(mode=='a'&&b.hp>0&&A&&A.tr){let bd=1e9,tg=null;for(const t of A.tr){if(t.hp<=0||t.jump||t.fly)continue;const d=Math.hypot(t.x-cx,t.y-cy);if(d<bd){bd=d;tg=t}}if(tg&&bd<(TY.cannon.rg||7)+2)tgA=Math.atan2(tg.y-cy,tg.x-cx)}
 if(tgA==null)tgA=.2+Math.sin(now/2600+b.x*1.3)*.45;
 if(b.ca==null)b.ca=tgA;let da=tgA-b.ca;da=Math.atan2(Math.sin(da),Math.cos(da));b.ca+=da*.2;
 const dx=Math.cos(b.ca),dy=Math.sin(b.ca),rt=rtOf(b),rc=(mode=='a'&&b.cd>rt-.14&&b.cd<=rt)?(b.cd-(rt-.14))/.14:0,rec=rc*.3;
 gShd(cx,cy,1.28,.2,.24,.07);gShd(cx,cy,1.1,.2,.24,.13);gCap(cx+.15,cy+.15,cx+dx*(1.1+.025*Math.min(8,b.lv))+.5,cy+dy*(1.1+.025*Math.min(8,b.lv))+.5,.2,.2);
 /* plataforma redonda de tablones */
 const ring=(r,z,n)=>{const o=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2;o.push(P(cx+Math.cos(a)*r,cy+Math.sin(a)*r,z))}return o};
 {const N2=20,lo=ring(1.05,0,N2),hi=ring(1.05,6,N2);
  for(let i=0;i<N2;i++){const j=(i+1)%N2,am=(i+.5)/N2*Math.PI*2;if(Math.sin(am)+Math.cos(am)>-.25)poly([lo[i],lo[j],hi[j],hi[i]],i%2?'#7a4c24':'#6c421e')}
  poly(hi,'#a8743a');poly(ring(.88,6.2,N2),'#bd8446');
  g.strokeStyle='rgba(60,32,10,.55)';g.lineWidth=1.2;for(let k=-2;k<=2;k++){const h=Math.sqrt(Math.max(0,.88*.88-(k*.34)**2)),a=P(cx-h,cy+k*.34,6.3),c=P(cx+h,cy+k*.34,6.3);g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(c[0],c[1]);g.stroke()}}
 /* soporte: patas cruzadas alineadas a la perspectiva + pedestal */
 for(const[sx,sy]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const a=P(cx+sx*.22,cy+sy*.22,zc-8),c=P(cx+sx*.78,cy+sy*.78,6.4);ln(a,c,'#4a2b10',6.6);ln(a,c,'#936031',4)}
 bx3(cx-.27,cy-.27,cx+.27,cy+.27,6,zc-4,'#7d4f27','#a06b36');
 bx3(cx-.34,cy-.34,cx+.34,cy+.34,zc-6,zc-2,'#5a3a1b','#8a5a2c');
 /* cañón: cilindro hecho con círculos con luz arriba-izquierda (no se deforma con la perspectiva) */
 const L=1.1+.025*Math.min(8,b.lv),tilt=2,p0=P(cx-dx*(.5-rec),cy-dy*(.5-rec),zc),p1=P(cx+dx*(L-rec),cy+dy*(L-rec),zc+tilt);
 const vx=p1[0]-p0[0],vy=p1[1]-p0[1],ang=Math.atan2(vy,vx),R0=8.6,R1=6.8,K=34,bandC=b.lv>=4?'#d9a441':'#a7aeb9';
 const seg=[];for(let i=0;i<=K;i++){const t=i/K;seg.push({t,x:p0[0]+vx*t,y:p0[1]+vy*t,r:R0+(R1-R0)*t})}
 {const nl=Math.hypot(vx,vy)||1,nx=-vy/nl,ny=vx/nl,q=(t,w)=>[p0[0]+vx*t+nx*w,p0[1]+vy*t+ny*w];poly([q(0,R0),q(1,R1),q(1,-R1),q(0,-R0)],'#3f434c');poly([q(0,-R0*.2),q(1,-R1*.2),q(1,-R1*.75),q(0,-R0*.75)],'#6a7280')}
 if(vy<0)seg.reverse();
 for(const s of seg){const band=Math.abs(s.t-.25)<.04||Math.abs(s.t-.58)<.04||s.t>.94;
  g.beginPath();g.arc(s.x,s.y,s.r,0,7);g.fillStyle=band?'#2a2c32':'#3f434c';g.fill();
  g.beginPath();g.arc(s.x-s.r*.14,s.y-s.r*.2,s.r*.78,0,7);g.fillStyle=band?bandC:'#5e6571';g.fill();
  g.beginPath();g.arc(s.x-s.r*.3,s.y-s.r*.42,s.r*.4,0,7);g.fillStyle=band?'#d8dde5':'#8b94a1';g.fill()}
 /* boca oscura en la punta */
 {g.save();g.translate(p1[0],p1[1]);g.rotate(ang+Math.PI/2);const f=Math.abs(Math.cos(ang+Math.PI/2));g.beginPath();g.ellipse(0,0,R1*.74,Math.max(2,R1*.74*Math.abs(Math.sin(ang))*.9),0,0,7);if(vx*0+vy>-2){g.fillStyle='#0d0e11';g.fill()}g.restore()}
 /* perno del eje */
 {const m=P(cx,cy,zc-1);g.beginPath();g.arc(m[0],m[1]+2,3,0,7);g.fillStyle='#d6bd86';g.fill();g.strokeStyle='#4a2b10';g.lineWidth=1.2;g.stroke()}
 /* barra de vida cuando está dañado */
 if(b.hp<b.max&&b.rg==null){const[bx,by]=P(cx,cy,zc+24);bar(bx,by,30,b.hp/b.max)}}
/* ================= v35: Mortero nuevo (tubo de hierro inclinado sobre base dorada, apunta y retrocede al disparar) ================= */
function drMortar(b){const cx=b.x+1.5,cy=b.y+1.5,now=performance.now(),ln=(a,c,col,wd)=>{g.strokeStyle=col;g.lineWidth=wd;g.lineCap='round';g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(c[0],c[1]);g.stroke()};
 const mn=TY.mortar.mn||3;let tgA=null;
 if(mode=='a'&&b.hp>0&&A&&A.tr){let bd=1e9,tg=null;for(const t of A.tr){if(t.hp<=0||t.jump||t.fly)continue;const d=Math.hypot(t.x-cx,t.y-cy);if(d>=mn&&d<bd){bd=d;tg=t}}if(tg&&bd<(TY.mortar.rg||10)+2)tgA=Math.atan2(tg.y-cy,tg.x-cx)}
 if(tgA==null)tgA=.5+Math.sin(now/3200+b.x*1.7)*.5;
 if(b.ca==null)b.ca=tgA;let da=tgA-b.ca;da=Math.atan2(Math.sin(da),Math.cos(da));b.ca+=da*.14;
 const dx=Math.cos(b.ca),dy=Math.sin(b.ca),rt=rtOf(b),since=(mode=='a'&&b.cd>0)?rt-b.cd:9,rc=since<.35?Math.max(0,1-since/.35):0,kick=Math.sin(Math.min(1,since/.35)*Math.PI)*(since<.35?1:0);
 gShd(cx,cy,1.3,.2,.24,.07);gShd(cx,cy,1.12,.2,.24,.13);gCap(cx+.1,cy+.1,cx+dx*.5+.7,cy+dy*.5+.7,.34,.2);
 /* base dorada con dientes */
 const ring=(r,z,n,tooth)=>{const o=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2,rr=tooth?r*(i%2?1:1.1):r;o.push(P(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr,z))}return o};
 {const N2=24,lo=ring(1.0,0,N2,1),hi=ring(1.0,6,N2,1);
  for(let i=0;i<N2;i++){const j=(i+1)%N2,am=(i+.5)/N2*Math.PI*2;if(Math.sin(am)+Math.cos(am)>-.3)poly([lo[i],lo[j],hi[j],hi[i]],i%2?'#8f6420':'#a8782a')}
  poly(hi,'#d6a23e');poly(ring(.82,6.2,N2),'#c28a2e');poly(ring(.58,6.6,N2),'#4a4f58');poly(ring(.46,7,N2),'#5d636f');
  for(let k=0;k<8;k++){const a=k/8*Math.PI*2+.2,p=P(cx+Math.cos(a)*.7,cy+Math.sin(a)*.7,7.2);g.beginPath();g.arc(p[0],p[1],1.9,0,7);g.fillStyle='#f0cf7a';g.fill();g.strokeStyle='#6a4713';g.lineWidth=.9;g.stroke()}}
 const px=-dy,py=dx,sB=(px+py)>=0?1:-1;
 /* placas laterales de oro (muñones): una placa plana por lado */
 const plate=sg=>{const o=.56*sg,w=.34,z0=7,z1=25,pts=[[-w,z0],[w,z0],[w,z1],[-w,z1]].map(([a,z])=>P(cx+px*o+dx*(a-.12),cy+py*o+dy*(a-.12),z));
  poly(pts,sg==sB?'#e0ac3c':'#a8782a');g.strokeStyle='#4a2e0a';g.lineWidth=1.6;g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.stroke();
  const m=P(cx+px*o-dx*.12,cy+py*o-dy*.12,18);g.beginPath();g.arc(m[0],m[1],3.2,0,7);g.fillStyle='#2a2c32';g.fill();g.strokeStyle='#f0cf7a';g.lineWidth=1.2;g.stroke()};
 plate(-sB);
 /* tubo corto y ancho, inclinado unos 30° */
 const pv=P(cx-dx*(.5-kick*.12),cy-dy*(.5-kick*.12),16),tip=P(cx+dx*(.62-kick*.12),cy+dy*(.62-kick*.12),16+19-kick*3);
 const vx=tip[0]-pv[0],vy=tip[1]-pv[1],nl=Math.hypot(vx,vy)||1,nx=-vy/nl,ny=vx/nl,R0=12,R1=14,K=22;
 const q=(t,w)=>[pv[0]+vx*t+nx*w,pv[1]+vy*t+ny*w];
 poly([q(0,R0),q(1,R1),q(1,-R1),q(0,-R0)],'#363940');poly([q(0,-R0*.05),q(1,-R1*.05),q(1,-R1*.8),q(0,-R0*.8)],'#5b626e');
 for(let i=0;i<=K;i++){const t=i/K,x=pv[0]+vx*t,y=pv[1]+vy*t,r=R0+(R1-R0)*t,gold=t<.1;
  g.beginPath();g.arc(x,y,r,0,7);g.fillStyle=gold?'#8f6420':'#363940';g.fill();
  g.beginPath();g.arc(x-r*.14,y-r*.2,r*.78,0,7);g.fillStyle=gold?'#d6a23e':'#535a66';g.fill();
  g.beginPath();g.arc(x-r*.32,y-r*.42,r*.38,0,7);g.fillStyle=gold?'#f0cf7a':'#7e8794';g.fill()}
 /* aro dorado a media altura del tubo */
 {const t=.55,w=R0+(R1-R0)*t+1.2,a=q(t,w),c=q(t,-w);ln(a,c,'#2a2c32',5);ln(a,c,'#d6a23e',3)}
 /* boca: si apunta hacia la cámara se ve el agujero; si apunta de espaldas solo el aro */
 {const face=dx+dy,mi=R1*Math.max(.2,Math.min(.9,.32+.38*face)),rot=Math.atan2(vy,vx)+Math.PI/2;
  g.save();g.translate(tip[0],tip[1]);g.rotate(rot);
  g.beginPath();g.ellipse(0,0,R1+1,mi+1,0,0,7);g.fillStyle='#24262b';g.fill();
  if(face>-.1){g.beginPath();g.ellipse(0,0,R1*.82,mi*.8,0,0,7);g.fillStyle='#14151a';g.fill();g.beginPath();g.ellipse(0,-mi*.06,R1*.64,mi*.6,0,0,7);g.fillStyle='#5a3a22';g.fill();g.beginPath();g.ellipse(0,-mi*.3,R1*.52,mi*.28,0,0,7);g.fillStyle='#2b1b10';g.fill()}
  else{g.beginPath();g.ellipse(0,0,R1*.8,mi*.78,0,0,7);g.fillStyle='#4a505b';g.fill()}
  g.strokeStyle='#d6a23e';g.lineWidth=2;g.beginPath();g.ellipse(0,0,R1+1,mi+1,0,0,7);g.stroke();g.restore()
  if(rc>0&&face>-.1){const f=g.createRadialGradient(tip[0],tip[1]-3,1,tip[0],tip[1]-3,26*rc+6);f.addColorStop(0,'rgba(255,240,170,'+(.9*rc)+')');f.addColorStop(.5,'rgba(255,150,40,'+(.6*rc)+')');f.addColorStop(1,'rgba(255,100,20,0)');g.fillStyle=f;g.beginPath();g.arc(tip[0],tip[1]-3,26*rc+6,0,7);g.fill()}}
 plate(sB);
 if(b.hp<b.max&&b.rg==null){const[bx,by]=P(cx,cy,60);bar(bx,by,30,b.hp/b.max)}}
/* ================= v40: mover estructuras arrastrándolas (sin botón Mover) + cámara con zoom ================= */
const DM={on:0,ok:1};
const dmCan=()=>{try{return mode=='v'&&pk&&S.b.includes(pk)&&pk.t!='wall'&&!pk.nb&&!pk.rpr&&!sel&&!mv&&!UI.shop&&!UI.train&&!UI.lab&&!UI.info&&!UI.tinfo&&!document.getElementById('msg').classList.contains('on')}catch(e){return false}};
const dmFree=(x,y,s,self)=>x>=0&&y>=0&&x+s<=N&&y+s<=N&&!S.b.some(o=>o!==self&&o.hp>0&&x<o.x+TY[o.t].s&&x+s>o.x&&y<o.y+TY[o.t].s&&y+s>o.y)&&!(S.ob||[]).some(o=>x<o.x+o.sx&&x+s>o.x&&y<o.y+o.sy&&y+s>o.y);
function dmMove(x,y){const b=pk,s=TY[b.t].s,d=drag.dm,nx=Math.max(0,Math.min(N-s,Math.round(x-d.ox))),ny=Math.max(0,Math.min(N-s,Math.round(y-d.oy)));
 if(!DM.on){DM.on=1;try{snd(420,.04,'triangle',.04)}catch(e){}}
 if(nx!=b.x||ny!=b.y){b.x=nx;b.y=ny}DM.ok=dmFree(b.x,b.y,s,b)}
function dmRevert(){if(drag&&drag.dm&&pk){pk.x=drag.dm.x0;pk.y=drag.dm.y0}DM.on=0}
function dmEnd(){const d=drag.dm,b=pk;DM.on=0;
 if(!dmFree(b.x,b.y,TY[b.t].s,b)){b.x=d.x0;b.y=d.y0;try{snd('deny')}catch(e){}return}
 if(b.x!=d.x0||b.y!=d.y0){try{snd(520,.1,'triangle',.05)}catch(e){}}}
function drMoveArrows(){if(!(dmCan()||DM.on)||!pk)return;const b=pk,s=TY[b.t].s,T=performance.now(),pl=Math.sin(T/190)*3.5,k=s>1?1:.7,
 ed=[[P(b.x+s/2,b.y),-1,-1],[P(b.x+s,b.y+s/2),1,-1],[P(b.x+s/2,b.y+s),1,1],[P(b.x,b.y+s/2),-1,1]];
 g.save();g.globalAlpha=DM.on?.5:1;for(const[m,dx,dy]of ed){const n=Math.SQRT2,off=(s>1?30:20)+pl;arrow(m[0]+dx/n*off,m[1]+dy/n*off*.8,Math.atan2(dy*.8,dx),k)}g.restore()}
function drWallSel(){drWallSel0();try{drMoveArrows()}catch(e){}}
function drGrass(){drGrass0();if(DM.on&&pk&&mode=='v'){const s=TY[pk.t].s;poly([P(pk.x,pk.y),P(pk.x+s,pk.y),P(pk.x+s,pk.y+s),P(pk.x,pk.y+s)],DM.ok?'rgba(60,220,40,.45)':'rgba(230,50,40,.5)')}}
/* cámara: con zoom se puede recorrer todo el mapa (el borde del mapa puede llegar al centro de la pantalla) */
function clampCam(){const W=LW(),H=LH(),z=cam.z,mx=cx0()*z+cam.x,my=(OY+N*TH/2)*z+cam.y,dxm=Math.max(W*.35,N*TW*z/2),dym=Math.max(H*.35,N*TH*z/2);
 cam.x+=Math.min(W/2+dxm,Math.max(W/2-dxm,mx))-mx;cam.y+=Math.min(H/2+dym,Math.max(H/2-dym,my))-my}
/* ================= v41: sombras suaves con la forma real (círculo / cápsula) ================= */
function gShd(cx,cy,r,ox,oy,a){const o=[];for(let i=0;i<28;i++){const t=i/28*Math.PI*2;o.push(P(cx+ox+Math.cos(t)*r,cy+oy+Math.sin(t)*r,0))}poly(o,'rgba(0,0,0,'+a+')')}
function gCap(x0,y0,x1,y1,w,a){const dx=x1-x0,dy=y1-y0,l=Math.hypot(dx,dy)||1,ux=dx/l,uy=dy/l,o=[],n=8,a0=Math.atan2(uy,ux);
 for(let i=0;i<=n;i++){const t=a0-Math.PI/2+Math.PI*i/n;o.push(P(x1+Math.cos(t)*w,y1+Math.sin(t)*w,0))}
 for(let i=0;i<=n;i++){const t=a0+Math.PI/2+Math.PI*i/n;o.push(P(x0+Math.cos(t)*w,y0+Math.sin(t)*w,0))}
 poly(o,'rgba(0,0,0,'+a+')')}
document.body.insertAdjacentHTML('beforeend',"<button id=\"slotBtn\" aria-label=\"Tragaperras\"><svg viewBox=\"0 0 64 64\"><defs><clipPath id=\"slc\"><rect x=\"19\" y=\"23\" width=\"22\" height=\"16\" rx=\"2\"/></clipPath></defs>\n<rect x=\"12\" y=\"10\" width=\"34\" height=\"46\" rx=\"7\" fill=\"#ffd23f\" stroke=\"#7a4a00\" stroke-width=\"2.5\"/><rect x=\"15\" y=\"13\" width=\"28\" height=\"9\" rx=\"3\" fill=\"#7a1f66\"/><circle class=\"lamp\" cx=\"22\" cy=\"17.5\" r=\"2.2\" fill=\"#ffd23f\"/><circle class=\"lamp\" cx=\"29\" cy=\"17.5\" r=\"2.2\" fill=\"#00f0ff\" style=\"animation-delay:.25s\"/><circle class=\"lamp\" cx=\"36\" cy=\"17.5\" r=\"2.2\" fill=\"#ff2d95\"/>\n<rect x=\"17\" y=\"21\" width=\"26\" height=\"20\" rx=\"3\" fill=\"#1a0a40\" stroke=\"#7a4a00\" stroke-width=\"1.5\"/>\n<g clip-path=\"url(#slc)\" font-size=\"13\" text-anchor=\"middle\"><g class=\"rl a\"><circle cx=\"22.3\" cy=\"32.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"26.7\" cy=\"33\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M22.3 30.2Q24.5 26.4 25.5 26.6M26.7 30.6Q26.1 27.2 25.5 26.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><text x=\"24.5\" y=\"47\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text><polygon points=\"20.5,54 22.0,51 27.0,51 28.5,54 24.5,59.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"22.0,51 24.5,54 27.0,51\" fill=\"#c8f6ff\"/><circle cx=\"22.3\" cy=\"68.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"26.7\" cy=\"69\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M22.3 66.2Q24.5 62.4 25.5 62.6M26.7 66.6Q26.1 63.2 25.5 62.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><text x=\"24.5\" y=\"83\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text><polygon points=\"20.5,90 22.0,87 27.0,87 28.5,90 24.5,95.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"22.0,87 24.5,90 27.0,87\" fill=\"#c8f6ff\"/><circle cx=\"22.3\" cy=\"104.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"26.7\" cy=\"105\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M22.3 102.2Q24.5 98.4 25.5 98.6M26.7 102.6Q26.1 99.2 25.5 98.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><text x=\"24.5\" y=\"119\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text><polygon points=\"20.5,126 22.0,123 27.0,123 28.5,126 24.5,131.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"22.0,123 24.5,126 27.0,123\" fill=\"#c8f6ff\"/><circle cx=\"22.3\" cy=\"140.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"26.7\" cy=\"141\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M22.3 138.2Q24.5 134.4 25.5 134.6M26.7 138.6Q26.1 135.2 25.5 134.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><text x=\"24.5\" y=\"155\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text><polygon points=\"20.5,162 22.0,159 27.0,159 28.5,162 24.5,167.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"22.0,159 24.5,162 27.0,159\" fill=\"#c8f6ff\"/></g><g class=\"rl b\"><polygon points=\"30.00,26.40 31.12,29.46 34.37,29.58 31.81,31.59 32.70,34.72 30.00,32.90 27.30,34.72 28.19,31.59 25.63,29.58 28.88,29.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/><ellipse cx=\"30\" cy=\"43\" rx=\"4.4\" ry=\"3.1\" fill=\"#ffe033\" stroke=\"#b79a00\" stroke-width=\".6\"/><circle cx=\"34.2\" cy=\"43\" r=\".9\" fill=\"#b79a00\"/><text x=\"30\" y=\"59\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text><polygon points=\"30.00,62.40 31.12,65.46 34.37,65.58 31.81,67.59 32.70,70.72 30.00,68.90 27.30,70.72 28.19,67.59 25.63,65.58 28.88,65.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/><ellipse cx=\"30\" cy=\"79\" rx=\"4.4\" ry=\"3.1\" fill=\"#ffe033\" stroke=\"#b79a00\" stroke-width=\".6\"/><circle cx=\"34.2\" cy=\"79\" r=\".9\" fill=\"#b79a00\"/><text x=\"30\" y=\"95\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text><polygon points=\"30.00,98.40 31.12,101.46 34.37,101.58 31.81,103.59 32.70,106.72 30.00,104.90 27.30,106.72 28.19,103.59 25.63,101.58 28.88,101.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/><ellipse cx=\"30\" cy=\"115\" rx=\"4.4\" ry=\"3.1\" fill=\"#ffe033\" stroke=\"#b79a00\" stroke-width=\".6\"/><circle cx=\"34.2\" cy=\"115\" r=\".9\" fill=\"#b79a00\"/><text x=\"30\" y=\"131\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text><polygon points=\"30.00,134.40 31.12,137.46 34.37,137.58 31.81,139.59 32.70,142.72 30.00,140.90 27.30,142.72 28.19,139.59 25.63,137.58 28.88,137.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/><ellipse cx=\"30\" cy=\"151\" rx=\"4.4\" ry=\"3.1\" fill=\"#ffe033\" stroke=\"#b79a00\" stroke-width=\".6\"/><circle cx=\"34.2\" cy=\"151\" r=\".9\" fill=\"#b79a00\"/><text x=\"30\" y=\"167\" font-size=\"12\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#ff3b3b\" stroke=\"#fff\" stroke-width=\".5\" font-family=\"Arial Black,Arial\">7</text></g><g class=\"rl c\"><polygon points=\"31.5,30 33.0,27 38.0,27 39.5,30 35.5,35.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"33.0,27 35.5,30 38.0,27\" fill=\"#c8f6ff\"/><circle cx=\"33.3\" cy=\"44.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"37.7\" cy=\"45\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M33.3 42.2Q35.5 38.4 36.5 38.6M37.7 42.6Q37.1 39.2 36.5 38.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><polygon points=\"35.50,50.40 36.62,53.46 39.87,53.58 37.31,55.59 38.20,58.72 35.50,56.90 32.80,58.72 33.69,55.59 31.13,53.58 34.38,53.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/><polygon points=\"31.5,66 33.0,63 38.0,63 39.5,66 35.5,71.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"33.0,63 35.5,66 38.0,63\" fill=\"#c8f6ff\"/><circle cx=\"33.3\" cy=\"80.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"37.7\" cy=\"81\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M33.3 78.2Q35.5 74.4 36.5 74.6M37.7 78.6Q37.1 75.2 36.5 74.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><polygon points=\"35.50,86.40 36.62,89.46 39.87,89.58 37.31,91.59 38.20,94.72 35.50,92.90 32.80,94.72 33.69,91.59 31.13,89.58 34.38,89.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/><polygon points=\"31.5,102 33.0,99 38.0,99 39.5,102 35.5,107.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"33.0,99 35.5,102 38.0,99\" fill=\"#c8f6ff\"/><circle cx=\"33.3\" cy=\"116.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"37.7\" cy=\"117\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M33.3 114.2Q35.5 110.4 36.5 110.6M37.7 114.6Q37.1 111.2 36.5 110.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><polygon points=\"35.50,122.40 36.62,125.46 39.87,125.58 37.31,127.59 38.20,130.72 35.50,128.90 32.80,130.72 33.69,127.59 31.13,125.58 34.38,125.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/><polygon points=\"31.5,138 33.0,135 38.0,135 39.5,138 35.5,143.5\" fill=\"#4fe0ff\" stroke=\"#0a7aa0\" stroke-width=\".6\"/><polygon points=\"33.0,135 35.5,138 38.0,135\" fill=\"#c8f6ff\"/><circle cx=\"33.3\" cy=\"152.6\" r=\"2.4\" fill=\"#e8283a\"/><circle cx=\"37.7\" cy=\"153\" r=\"2.4\" fill=\"#c81d2e\"/><path d=\"M33.3 150.2Q35.5 146.4 36.5 146.6M37.7 150.6Q37.1 147.2 36.5 146.6\" stroke=\"#3a8a2a\" stroke-width=\"1\" fill=\"none\"/><polygon points=\"35.50,158.40 36.62,161.46 39.87,161.58 37.31,163.59 38.20,166.72 35.50,164.90 32.80,166.72 33.69,163.59 31.13,161.58 34.38,161.46\" fill=\"#ffd23f\" stroke=\"#b07a00\" stroke-width=\".5\"/></g></g>\n<rect x=\"19\" y=\"43\" width=\"22\" height=\"9\" rx=\"3\" fill=\"#7a1f66\"/><circle cx=\"30\" cy=\"47.5\" r=\"2.5\" fill=\"#7dffa8\"/>\n<g class=\"lv\"><rect x=\"46\" y=\"22\" width=\"3.4\" height=\"18\" rx=\"1.7\" fill=\"#e8e8f0\" stroke=\"#555\" stroke-width=\".8\"/><circle cx=\"47.7\" cy=\"21\" r=\"5\" fill=\"#ff2d95\" stroke=\"#fff\" stroke-width=\"1.2\"/></g><rect x=\"44.5\" y=\"38\" width=\"6.4\" height=\"8\" rx=\"2\" fill=\"#666\" stroke=\"#222\" stroke-width=\"1\"/></svg><span class=\"dot\" id=\"slDot\">!</span></button>\n<div id=\"slotOv\"><div class=\"blob b1\"></div><div class=\"blob b2\"></div><div class=\"blob b3\"></div><div class=\"stars\"></div>\n<canvas id=\"slFx\"></canvas><div id=\"slFlash\"></div><div id=\"slBanner\"></div>\n<div class=\"sl-app\" id=\"slApp\"><button class=\"sl-x\" id=\"slX\" aria-label=\"Cerrar\">✕</button>\n<div class=\"sl-h\">NEON FORTUNE</div>\n<div class=\"sl-stats\"><div class=\"sl-stat\"><small>ESMERALDAS</small><b id=\"slBal\">0</b></div><div class=\"sl-stat\"><small>ÚLTIMO PREMIO</small><b id=\"slLast\">—</b></div></div>\n<div class=\"sl-wrap\"><div class=\"sl-frame\" id=\"slFrame\"><div class=\"sl-bulbs\"></div><div class=\"sl-machine\"><div class=\"sl-combo\" id=\"slCombo\">🔥 RACHA x1</div>\n<div class=\"sl-reels\" id=\"slReels\"><div class=\"sl-reel\"><div class=\"sl-strip\"></div></div><div class=\"sl-reel\"><div class=\"sl-strip\"></div></div><div class=\"sl-reel\"><div class=\"sl-strip\"></div></div><div class=\"sl-line\" id=\"slLine\"></div><div class=\"sl-winpop\" id=\"slPop\"></div></div></div></div>\n<button class=\"sl-lever\" id=\"slLever\" aria-label=\"Palanca\"><span class=\"base\"></span><span class=\"arm\"></span></button></div>\n<div class=\"sl-msg\" id=\"slMsg\">Tira de la palanca o pulsa GIRAR</div>\n<div class=\"sl-ctrl\"><div class=\"sl-col\"><button class=\"sl-btn\" id=\"slAuto\">AUTO</button></div><button id=\"slSpin\">GIRAR<small>5 <i class=\"gm\"></i></small></button><div class=\"sl-col\"><button class=\"sl-btn\" id=\"slTurbo\">⚡ TURBO</button></div></div>\n<div class=\"sl-pay\" id=\"slPay\"></div>\n<div class=\"sl-fine\">Cada giro cuesta 5 esmeraldas. Premios: parejas y tríos.</div></div></div>\n");
/* ===== Tragaperras Neon Fortune (apuestas con esmeraldas) ===== */
(()=>{
const q=s=>document.querySelector(s),sleep=ms=>new Promise(r=>setTimeout(r,ms)),COST=5;
const SYM=[{e:'🍒',w:30},{e:'🍋',w:25},{e:'🔔',w:18},{e:'⭐',w:12},{e:'🍀',w:8},{e:'💎',w:5},{e:'7️⃣',w:2}];
const TRI=[{gold:1800},{elixir:3000},{gems:90},{gems:150},{gems:100,spell:1},{gems:500},{gems:1000}];
const PAR=[{gold:420},{elixir:420},{gems:8},{gems:8},{gems:12},{gems:12},{gems:12}];
const GM='<i class="gm"></i>';
const prTxt=p=>[p.gems?p.gems+' '+GM:'',p.gold?p.gold+' 🪙':'',p.elixir?p.elixir+' 💧':'',p.spell?'+1 slot de hechizo ⚡':''].filter(Boolean).join(' ');
const eqv=o=>(o.gems_won||0)+((o.gold||0)+(o.elixir||0))/60+(o.spell?150:0);
let busy=false,auto=false,turbo=false,combo=0,open=false;
const reelsEl=[...document.querySelectorAll('.sl-reel')],strips=reelsEl.map(r=>r.firstElementChild);
const rnd=()=>Math.floor(Math.random()*SYM.length);
const pick=()=>{let r=Math.random()*100;for(let i=0;i<SYM.length;i++){r-=SYM[i].w;if(r<=0)return i}return 0};
const rs=[0,1,2].map(()=>[rnd(),rnd(),rnd()]);
const cells=a=>a.map(i=>`<div class="sl-cell">${SYM[i].e}</div>`).join('');
const draw=i=>{strips[i].style.transition='none';strips[i].style.transform='none';strips[i].innerHTML=cells(rs[i])};
[0,1,2].forEach(draw);
q('#slPay').innerHTML=SYM.map((s,i)=>`<span>${s.e.repeat(3)}<b>${prTxt(TRI[i])}</b></span>`).join('')+`<span>Pareja 🍒<b>${prTxt(PAR[0])}</b></span><span>Pareja 🍋<b>${prTxt(PAR[1])}</b></span><span>Pareja 🔔⭐<b>${prTxt(PAR[2])}</b></span><span>Pareja 🍀💎7️⃣<b>${prTxt(PAR[4])}</b></span>`;
/* ---------- AUDIO (los mismos sonidos) ---------- */
let ac,nb;
function A(){if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();nb=ac.createBuffer(1,ac.sampleRate*.3,ac.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}if(ac.state==='suspended')ac.resume();return ac}
function tone(f,d=.15,type='sine',v=.15,t0=0,f2){if(MUTE)return;const c=A(),t=c.currentTime+t0,o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(c.destination);o.start(t);o.stop(t+d+.03)}
function noise(d=.06,v=.15,t0=0){if(MUTE)return;const c=A(),t=c.currentTime+t0,s=c.createBufferSource(),g=c.createGain(),f=c.createBiquadFilter();s.buffer=nb;f.type='highpass';f.frequency.value=1500;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);s.connect(f).connect(g).connect(c.destination);s.start(t);s.stop(t+d+.02)}
const sClick=()=>tone(700,.06,'triangle',.12,0,1100);
const sSpin=()=>{tone(180,.6,'sawtooth',.07,0,1100);tone(360,.6,'square',.03,0,1600);noise(.25,.1)};
const sTick=()=>tone(850+Math.random()*250,.03,'square',.035);
const sStop=i=>{tone(160,.2,'sine',.35,0,45);noise(.07,.18);tone(500+i*160,.09,'triangle',.12)};
const sAnt=()=>{tone(300,1.3,'sine',.11,0,1500);tone(305,1.3,'triangle',.06,0,1510)};
const sCoin=(p=1)=>{tone(1250*p,.07,'square',.05);tone(1900*p,.22,'square',.05,.07)};
const sLose=()=>tone(280,.3,'sine',.07,0,170);
const sLever=()=>{tone(120,.18,'square',.12,0,60);noise(.08,.14);tone(90,.25,'sine',.2,.2,40)};
function sCoinAt(t){tone(1300+Math.random()*500,.07,'square',.045,t);tone(2000,.18,'square',.045,t+.06)}
function sWin(t){const n=[1,1.25,1.5,2,2.5,3,3.75,4];const len=[0,4,6,8,8,8][t];for(let k=0;k<len;k++){tone(523*n[k%8]*(k>7?2:1),.2,t>2?'square':'triangle',t>2?.07:.12,k*.075);if(t>2)tone(262*n[k%8],.25,'sawtooth',.05,k*.075)}
 if(t>=3){for(let k=0;k<10;k++)sCoinAt(k*.08+.5)}if(t>=4){[1,1.25,1.5,2].forEach((m,k)=>{tone(392*m,.9,'sawtooth',.06,.9+k*.02);tone(784*m,.9,'square',.04,.9)})}}
/* ---------- PARTÍCULAS ---------- */
const cv=q('#slFx'),cx=cv.getContext('2d');let P=[],run=false;
const COL=['#ff2d95','#ffd23f','#00f0ff','#8a3dff','#fff','#ff6a00','#7dffa8'];
function size(){const d=devicePixelRatio||1;cv.width=innerWidth*d;cv.height=innerHeight*d;cx.setTransform(d,0,0,d,0,0)}
addEventListener('resize',()=>{if(open)size()});
function burst(n,kind){const r=q('#slReels').getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
 for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=4+Math.random()*(kind?13:10);P.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-6,g:.28,l:1,d:.008+Math.random()*.008,s:6+Math.random()*7,c:COL[i%7],r:Math.random()*6,vr:(Math.random()-.5)*.4,k:kind&&i%3===0?kind:(i%5===0?'star':'')})}go()}
function rain(n,kind){for(let i=0;i<n;i++)setTimeout(()=>{if(!open)return;P.push({x:Math.random()*innerWidth,y:-30,vx:(Math.random()-.5)*2,vy:3+Math.random()*4,g:.12,l:1.4,d:.004,s:22+Math.random()*10,c:'#ffd23f',r:0,vr:(Math.random()-.5)*.2,k:kind});go()},i*22)}
function go(){if(!run){run=true;requestAnimationFrame(loop)}}
function loop(){cx.clearRect(0,0,innerWidth,innerHeight);P=P.filter(p=>p.l>0&&p.y<innerHeight+50);
 for(const p of P){p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.vx*=.992;p.r+=p.vr;p.l-=p.d;cx.save();cx.globalAlpha=Math.min(1,p.l);cx.translate(p.x,p.y);cx.rotate(p.r);
  if(p.k==='coin'){cx.font=p.s+'px serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillText('🪙',0,0)}
  else if(p.k==='elx'){cx.font=p.s+'px serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillText('💧',0,0)}
  else if(p.k==='gem'){const s=p.s;cx.shadowColor='#3fd37b';cx.shadowBlur=10;cx.fillStyle='#2fd36f';cx.beginPath();cx.moveTo(-s/2,-s/6);cx.lineTo(-s/4,-s/2);cx.lineTo(s/4,-s/2);cx.lineTo(s/2,-s/6);cx.lineTo(0,s/2);cx.closePath();cx.fill();cx.fillStyle='#b5ffcb';cx.beginPath();cx.moveTo(-s/4,-s/2);cx.lineTo(0,-s/6);cx.lineTo(s/4,-s/2);cx.closePath();cx.fill()}
  else if(p.k==='star'){cx.fillStyle='#fff';cx.shadowColor=p.c;cx.shadowBlur=12;const s=p.s/2;cx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4,r=i%2?s*.3:s;cx.lineTo(Math.cos(a)*r,Math.sin(a)*r)}cx.closePath();cx.fill()}
  else{cx.fillStyle=p.c;cx.shadowColor=p.c;cx.shadowBlur=8;cx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2)}cx.restore()}
 if(P.length)requestAnimationFrame(loop);else run=false}
/* ---------- UI ---------- */
const fmt=n=>Math.round(n).toLocaleString('es-ES');
let shown=0;
function setBal(v,pop){shown=v;const b=q('#slBal');b.textContent=fmt(v);if(pop){b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop')}}
async function countUp(from,to,ms){const t0=performance.now();let lt=0;while(true){const k=Math.min(1,(performance.now()-t0)/ms);setBal(from+(to-from)*(1-Math.pow(1-k,3)));if(performance.now()-lt>70){lt=performance.now();sCoin(1+k*.6)}if(k>=1)break;await sleep(16)}setBal(to,true)}
function banner(t){const b=q('#slBanner');b.textContent=t;b.classList.remove('show');void b.offsetWidth;b.classList.add('show')}
function flash(){const f=q('#slFlash');f.classList.remove('go');void f.offsetWidth;f.classList.add('go')}
function shake(){const a=q('#slApp');a.classList.remove('sl-shake');void a.offsetWidth;a.classList.add('sl-shake');navigator.vibrate&&navigator.vibrate([60,40,120])}
function setCombo(){const c=q('#slCombo');c.textContent='🔥 RACHA x'+combo;c.classList.toggle('on',combo>1)}
const msg=t=>{q('#slMsg').innerHTML=t};
function reelRun(i,fin,dur){return new Promise(res=>{const n=16+i*7,st=[...rs[i]];for(let k=0;k<n;k++)st.push(rnd());st.push(...fin);
 const s=strips[i];s.style.transition='none';s.style.transform='translateY(0)';s.innerHTML=cells(st);void s.offsetWidth;
 const h=s.querySelector('.sl-cell').offsetHeight;reelsEl[i].classList.add('blur');
 s.style.transition=`transform ${dur}s cubic-bezier(.1,.72,.2,1.06)`;s.style.transform=`translateY(${-(st.length-3)*h}px)`;
 setTimeout(()=>reelsEl[i].classList.remove('blur'),dur*750);
 setTimeout(()=>{rs[i]=fin;draw(i);res()},dur*1000+40)})}
/* ---------- resultado: servidor (si hay) o local con la misma tabla ---------- */
function localRoll(){const r=Math.random();let reels,kind='none',sym=-1,pr={};
 if(r<.025){sym=pick();reels=[sym,sym,sym];kind='triple';pr=TRI[sym]}
 else if(r<.195){sym=pick();let o;do{o=pick()}while(o===sym);reels=[sym,sym,sym];reels[Math.floor(Math.random()*3)]=o;kind='pair';pr=PAR[sym]}
 else{let a,b,c;do{a=pick();b=pick();c=pick()}while(a===b||b===c||a===c);reels=[a,b,c]}
 return{reels,kind,sym,gems_won:pr.gems||0,gold:pr.gold||0,elixir:pr.elixir||0,spell:pr.spell||0}}
async function getOutcome(){
 if(GS){const r=await sb.rpc('slot_spin');if(r.error)throw r.error;S.gem=r.data.gems;if(r.data.spx!=null)S.spx=r.data.spx;return r.data}
 if((S.gem|0)<COST)throw new Error('esmeraldas insuficientes');S.gem-=COST;const o=localRoll();if(o.spell){if((S.spx|0)<3)S.spx=(S.spx|0)+1;else{o.spell=0;o.gems_won+=150}}S.gem+=o.gems_won;o.gems=S.gem;return o}
async function spin(){
 if(busy||!open)return;
 if((S.gem|0)<COST){msg('Necesitas '+COST+' '+GM+' para girar');shake();sLose();auto=false;q('#slAuto').classList.remove('on');return}
 busy=true;A();q('#slSpin').disabled=true;q('#slX').disabled=true;msg('');q('#slLine').classList.remove('on');q('#slFrame').classList.remove('hot');
 document.querySelectorAll('.sl-cell.win').forEach(c=>c.classList.remove('win'));
 const before=S.gem|0;setBal(before-COST);
 const lev=q('#slLever');lev.classList.add('pull');sLever();setTimeout(()=>lev.classList.remove('pull'),420);
 let o;try{o=await getOutcome()}catch(e){await srvSync().catch(()=>{});setBal(S.gem|0);msg('No se pudo girar: '+(e.message||'error'));busy=false;q('#slSpin').disabled=false;q('#slX').disabled=false;auto=false;q('#slAuto').classList.remove('on');return}
 sSpin();
 const mid=o.reels,t=turbo?.45:1,d=[1.1,1.55,2].map(x=>x*t),ant=mid[0]===mid[1];if(ant)d[2]+=1.4*t;
 const tk=setInterval(sTick,65);
 await Promise.all([0,1,2].map(i=>reelRun(i,[rnd(),mid[i],rnd()],d[i]).then(()=>{sStop(i);reelsEl[i].classList.remove('land');void reelsEl[i].offsetWidth;reelsEl[i].classList.add('land');if(i===1&&ant){sAnt();q('#slFrame').classList.add('hot');msg('¡Casi casi...!')}})));
 clearInterval(tk);q('#slFrame').classList.remove('hot');
 const win=o.kind!=='none';
 if(win){combo++;setCombo();
  const eq=eqv(o),tier=eq<=14?1:eq<=60?2:eq<=160?3:eq<=300?4:5,kind=o.gems_won>=o.gold/60&&o.gems_won>0?'gem':(o.gold?'coin':'elx');
  const idx=o.kind==='triple'?[0,1,2]:mid[0]===mid[1]?[0,1]:mid[1]===mid[2]?[1,2]:[0,2];
  idx.forEach(i=>reelsEl[i].querySelectorAll('.sl-cell')[1].classList.add('win'));q('#slLine').classList.add('on');
  sWin(tier);burst([30,60,100,160,240][tier-1],kind);flash();
  const wp=q('#slPop');const pz={gems:o.gems_won,gold:o.gold,elixir:o.elixir,spell:o.spell};wp.innerHTML='+'+prTxt(pz);wp.classList.remove('show');void wp.offsetWidth;wp.classList.add('show');
  q('#slLast').innerHTML=prTxt(pz);q('#slFrame').classList.add('hot');
  if(tier>=2)banner(['','','¡GENIAL!','¡BIG WIN!','¡¡MEGA WIN!!','💎 JACKPOT 💎'][tier]);
  if(tier>=3)shake();if(tier>=4)rain(tier===5?90:50,kind);
  msg(o.kind==='triple'?'¡TRIPLE! ✨':'¡Pareja! 🎉');
  if(o.gold)S.g=(S.g||0)+o.gold;if(o.elixir)S.e=(S.e||0)+o.elixir;
  if(o.gems_won)await countUp(before-COST,S.gem|0,[0,500,800,1500,2600,4000][tier]);else{setBal(before-COST);await sleep(600)}
  await sleep(tier>=3?500:150);q('#slFrame').classList.remove('hot')
 }else{combo=0;setCombo();sLose();msg(['Casi... otra más 😏','La próxima cae seguro','¡Tu racha está por llegar!','Sigue girando 🔥'][Math.floor(Math.random()*4)])}
 setBal(S.gem|0);try{save()}catch(e){}
 busy=false;q('#slSpin').disabled=false;q('#slX').disabled=false;
 if(auto){if((S.gem|0)>=COST){await sleep(turbo?250:650);if(auto&&open)spin()}else{auto=false;q('#slAuto').classList.remove('on');msg('Sin esmeraldas para seguir')}}
}
function openSlot(){if(open)return;open=true;const o=q('#slotOv');o.style.display='block';size();setBal(S.gem|0);q('#slLast').textContent='—';combo=0;setCombo();msg('Tira de la palanca o pulsa GIRAR');A();sClick()}
function closeSlot(){if(busy||!open)return;open=false;auto=false;q('#slAuto').classList.remove('on');q('#slotOv').style.display='none';P=[];sClick();try{ui()}catch(e){}}
q('#slotBtn').onclick=openSlot;q('#slX').onclick=closeSlot;q('#slSpin').onclick=spin;q('#slLever').onclick=spin;
q('#slAuto').onclick=e=>{A();auto=!auto;e.currentTarget.classList.toggle('on',auto);sClick();if(auto)spin()};
q('#slTurbo').onclick=e=>{turbo=!turbo;e.currentTarget.classList.toggle('on',turbo);sClick()};
addEventListener('keydown',e=>{if(!open)return;if(e.code==='Space'){e.preventDefault();spin()}else if(e.code==='Escape')closeSlot()});
window.slBtnVis=()=>{const b=q('#slotBtn');if(!b)return;try{const t=document.getElementById('top').getBoundingClientRect();b.style.top=Math.max(64,t.bottom+10)+'px'}catch(e){}const ok=typeof S!=='undefined'&&S&&mode=='v'&&!sel&&!mv&&!UI.shop&&!UI.train&&!UI.lab&&!open&&(S.tut||0)>=TUTS.length;b.style.display=ok?'grid':'none'};
})();

try{ensureS();if(OFFLINE&&S.ts)catchUp((Date.now()-S.ts)/1000);S.ts=Date.now()}catch(e){console.error(e)}
ui();setInterval(()=>{if(mode=='v'){ui();save()}},1000);setInterval(()=>{try{flushSrv();if(S&&S.daily&&S.daily.d!==TODAY()){if(GS)srvSync();else dRoll()}}catch(e){}},3000);try{dRoll()}catch(e){}
requestAnimationFrame(loop);

/* ---------- música mp3 (aldea) + pantalla de carga ---------- */
const MP3=['audio/musica1.mp3','audio/musica2.mp3'];
let mpA=null,mpI=0,mpS=0,mpBad=0; /* mpS: 0 sin probar, 1 sonando ok, -1 no hay archivos */
function mpInit(){if(mpA||mpS<0)return;mpA=new Audio();mpA.preload='auto';mpA.src=MP3[0];
 mpA.addEventListener('playing',()=>{mpS=1;mpBad=0});
 mpA.addEventListener('ended',()=>{mpI=(mpI+1)%MP3.length;mpA.src=MP3[mpI];mpA.play().catch(()=>{})});
 mpA.addEventListener('error',()=>{mpBad++;if(mpBad>=MP3.length){mpS=-1;return}mpI=(mpI+1)%MP3.length;mpA.src=MP3[mpI];mpA.play().catch(()=>{})})}
function mpTick(){ /* devuelve true si el mp3 se encarga de la música */
 if(mpS<0)return false;if(!MUS.on)return false;
 const want=mode=='v'&&!MUTE&&MV>.001&&!document.hidden&&!LD.on;mpInit();if(!mpA)return false;
 mpA.volume=Math.min(1,MV*.8);
 if(want){if(mpA.paused&&mpS>=0)mpA.play().catch(()=>{})}else if(!mpA.paused)mpA.pause();
 return mode=='v'}
const musTick0=musTick;
musTick=function(){if(LD.on){ldTick();return}if(mpTick())return;musTick0()};
/* música de carga: distinta (arpegio brillante en La menor) */
const LD={on:1,t:0,s:0,tr:0,done:0};
const LDC=[[57,60,64,69],[53,57,60,65],[48,52,55,60],[55,59,62,67]],LDM=[76,79,81,79,84,81,79,76];
function ldStep(s,w){const e=.19,bar=(s>>4)%4,i=s&15,ch=LDC[bar];
 mt(ch[i%4]+12,.35,'triangle',.07,w,.01);
 if(i==0||i==8)mt(ch[0]-12,e*7,'sine',.16,w,.02);
 if(i%2==0)mt(ch[(i>>1)%4]+24,.28,'sine',.035,w,.01);
 if(i%4==2)mt(LDM[((s>>2)+bar)%8]+(bar>1?-2:0),.45,'square',.022,w,.01);
 if(i%4==0)mn(.05,.05,5000,w);if(i==4||i==12)mn(.1,.07,1400,w,'bandpass')}
function ldTick(){if(!AC||MUTE||MV<=.001)return;if(AC.state!='running'){try{AC.resume()}catch(_){}return}
 if(!LD.tr){LD.tr=1;LD.t=AC.currentTime+.05}
 while(LD.t<AC.currentTime+.5){ldStep(LD.s,LD.t);LD.t+=.19;LD.s++}}
(function(){const el=document.getElementById('ldg'),bar=document.getElementById('ldb'),msg=document.getElementById('ldm'),tip=document.getElementById('ldt'),snd=document.getElementById('lds');
 const TIPS=['Mejora el ayuntamiento para desbloquear nuevas estructuras.','Los muros frenan a las tropas: colócalos con cuidado.','Mientras estás offline, tus minas siguen produciendo.','Despliega las tropas separadas para que no se estorben.','Un escudo te protege de ataques mientras te recuperas.','Las minas y almacenes dañados quedan en estado crítico, no se destruyen.'];
 tip.textContent='💡 '+TIPS[Math.random()*TIPS.length|0];setInterval(()=>{if(!LD.done)tip.textContent='💡 '+TIPS[Math.random()*TIPS.length|0]},2600);

 const T0=Date.now(),MAXW=30000;let cur=0;
 const ST={fonts:0,boot:0,draw:0,streak:0};
 const W={fonts:8,imgs:22,sess:10,player:14,sync:10,tsync:10,raids:6,streak:8,draw:12};
 const M={fonts:'Cargando fuentes…',imgs:'Cargando imágenes…',sess:'Conectando con el servidor…',player:'Cargando tu aldea…',sync:'Sincronizando recursos…',tsync:'Sincronizando tropas…',raids:'Revisando ataques…',streak:'Cargando tu racha…',draw:'Preparando el mapa…'};
 const fin=k=>{ST[k]=1};
 const fam=["400 16px 'Lilita One'","600 16px 'Baloo 2'","700 16px 'Lilita One'","600 16px 'Baloo 2'"];
 (document.fonts&&document.fonts.load?Promise.race([Promise.all(fam.map(f=>document.fonts.load(f).catch(()=>{}))),new Promise(r=>setTimeout(r,6000))]):Promise.resolve()).then(()=>fin('fonts'));
 Promise.resolve(window.BOOTP).catch(()=>{}).then(()=>{try{ensureS()}catch(e){}['sess','player','sync','tsync','raids'].forEach(k=>LDS[k]=1);
  return Promise.race([Promise.resolve(window.__br&&__br.skLoad&&__br.skLoad()).catch(()=>{}),new Promise(r=>setTimeout(r,6000))])}).then(()=>{fin('streak');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{try{ui();draw()}catch(e){}fin('draw')}))});
 function prog(){let p=0,m=null;const im=IMGP.n?Math.min(1,IMGP.d/IMGP.n):1;
  for(const k in W){const v=k=='imgs'?im:(k=='fonts'?ST.fonts:k=='streak'?ST.streak:k=='draw'?ST.draw:LDS[k]?1:0);p+=W[k]*v;if(v<1&&!m)m=k}
  return[p,m,im]}
 function close(){if(LD.done)return;LD.done=1;window.__ldz=1;bar.style.width='100%';msg.textContent='¡Listo!';
  setTimeout(()=>{el.classList.add('out');LD.on=0;try{if(MUS.on){MUS.t=AC.currentTime+.3}}catch(_){}setTimeout(()=>el.remove(),600)},200)}
 setInterval(()=>{if(LD.done)return;const[p,m,im]=prog();if(m)msg.textContent=M[m]+(m=='imgs'?' '+Math.round(im*100)+'%':'');
  cur+=(Math.min(100,p)-cur)*.25;if(Math.abs(p-cur)<.4)cur=p;bar.style.width=cur.toFixed(1)+'%';
  const el0=Date.now()-T0;
  if((p>=99.9&&cur>=99.5)||el0>MAXW)close();
  const sus=AC&&AC.state!='running'&&!MUTE;snd.classList.toggle('on',!!sus)},50);
 /* el primer toque activa el audio (los navegadores no dejan sonar antes) */
 const kick=()=>{try{AC&&AC.resume()}catch(_){}try{if(!MUS.on)startMusic()}catch(_){}};
 addEventListener('pointerdown',kick,{once:false});addEventListener('keydown',kick);
 try{if(AC)AC.resume()}catch(_){}
 /* intento de arrancar la música de carga sin esperar gesto (si el navegador lo permite) */

})();

/* ---------- auto-actualización: si hay una versión nueva en el servidor, guarda y recarga ---------- */
(function(){if(OFFLINE||!/^https?:/.test(location.protocol))return;let busy=0;
 const att=()=>{try{return JSON.parse(sessionStorage.getItem('ccup')||'{}')}catch(e){return{}}};
 async function chk(){if(busy||(typeof LD!='undefined'&&LD.on))return;busy=1;try{
  const u=location.origin+location.pathname+'?_='+Date.now();
  const r=await fetch(u,{cache:'no-store'});if(!r.ok)return;const t=await r.text();
  const m=t.match(/const BUILD='([^']+)'/);if(!m||m[1]===BUILD)return;
  if(mode=='a')return; /* no interrumpir un ataque: se actualiza al volver a la aldea */
  const a=att();if(a.b===m[1]&&a.n>=3&&Date.now()-a.t<10*60e3)return; /* evita bucles si el servidor aún sirve la versión vieja */
  sessionStorage.setItem('ccup',JSON.stringify({b:m[1],n:a.b===m[1]?(a.n||0)+1:1,t:Date.now()}));
  try{flushAll()}catch(e){}
  const d=document.createElement('div');d.style.cssText='position:fixed;inset:0;z-index:99998;display:flex;align-items:center;justify-content:center;background:#0b1226ee;color:#fff;font:22px "Lilita One",sans-serif;text-align:center;padding:20px';d.textContent='⬇ Nueva versión disponible… actualizando';document.body.appendChild(d);
  setTimeout(()=>location.replace(location.origin+location.pathname+'?v='+encodeURIComponent(m[1])),900)
 }catch(e){}finally{busy=0}}
 setInterval(chk,60e3);setTimeout(chk,15e3);document.addEventListener('visibilitychange',()=>{if(!document.hidden)chk()});addEventListener('pageshow',()=>setTimeout(chk,1500));
})();

/* ================= v59: raids rediseñados (botín por estructura, % con candados, trofeos y escudo del servidor) ================= */
const pctDisp=p=>{let r=Math.round(p*100);if(p<.5&&r>=50)r=49;if(p<1&&r>=100)r=99;return r};
function lootNow(){let g=0,e=0;if(!E||!E.sh)return{g:0,e:0};for(const q of E.sh){const b=q.b;let fr=b.hp<=0?1:Math.max(0,Math.min(1,1-b.hp/b.max));if(b.t=='hall'&&b.hp>0)fr=0;g+=q.g*fr;e+=q.e*fr}return{g:Math.floor(g),e:Math.floor(e)}}
function startAttack(){startAttack0();if(!E||E.real)return;
 const L=Math.max(0,S.lv|0),bs=E.b,sg=bs.filter(b=>b.t=='gst'),se=bs.filter(b=>b.t=='est'),hall=bs[0],f=lootF(),R=Math.random;E.f=f;E.sh=[];
 const pg=Math.round(380+L*200+R()*250),pe=Math.round(380+L*180+R()*250),eg=Math.floor(pg/(sg.length+1)),ee=Math.floor(pe/(se.length+1));
 for(const b of sg)E.sh.push({b,g:Math.floor(eg*f),e:0});for(const b of se)E.sh.push({b,g:0,e:Math.floor(ee*f)});
 E.sh.push({b:hall,g:Math.floor((pg-sg.length*eg)*f),e:Math.floor((pe-se.length*ee)*f)});
 for(const b of bs){if(b.t=='mine')E.sh.push({b,g:Math.floor((120+L*45+R()*60)*f),e:0});else if(b.t=='pump')E.sh.push({b,g:0,e:Math.floor((120+L*40+R()*60)*f)})}
 A.cap0=campCap()}
function startReal(id,d){startReal0(id,d);if(!E||E.real!=id)return;const L=d.loot;E.sh=[];E.f=L?L.f:1;
 if(L)for(const r of L.sh){const b=E.b.find(o=>o.t==r[0]&&o.x==r[1]&&o.y==r[2]);if(b&&(r[3]||r[4]))E.sh.push({b,g:r[3],e:r[4]})}
 E.offer=d.offer;A.cap0=campCap()}
const scoutRep0=scoutRep;
scoutRep=function(d){let h=scoutRep0(d);const L=d.loot;if(L){let g=0,e=0;for(const r of L.sh){g+=r[3];e+=r[4]}
  h=h.replace(/Botín: [^<]*<br>/,`Botín disponible: <b>${g} 🪙 ${e} 💧</b>${L.f<1?' <span class=sm>(−'+Math.round((1-L.f)*100)+'% por nivel)</span>':''}<br>`)}
 if(d.offer)h=h.replace('<b>Tropas recomendadas','Trofeos: ★ +'+d.offer[0]+' · ★★ +'+d.offer[1]+' · ★★★ +'+d.offer[2]+' · derrota −'+d.offer[3]+'<br><b>Tropas recomendadas');return h};
const flushAll=()=>{try{flushSrv()}catch(e){}try{if(mode=='v'){S.ts=Date.now();save();try{syncBase(true)}catch(e){}}}catch(e){}};document.addEventListener('visibilitychange',()=>{if(document.hidden)flushAll();else tsync()});addEventListener('pageshow',()=>tsync());setInterval(()=>tsync(),20000);addEventListener('pagehide',flushAll);
/* ================= v67: menú de batalla, historial, venganza y repeticiones ================= */
(function(){const st=document.createElement('style');st.textContent=`
.db.atk.btl{--c1:#fff3a6;--c2:#ffd43b;--c3:#f2a516;--c4:#f8bc23;--bd:#7a4b05;--sd:#4d2e03;min-width:130px}
.db.atk.btl.rv{--c1:#ff9a8a;--c2:#f0392b;--c3:#b81410;--c4:#d82a1c;--bd:#5e0907;--sd:#3d0504}
.bfx{position:absolute;left:50%;top:2px;width:40px;height:30px;transform:translateX(-50%);pointer-events:none}
.bfx u{position:absolute;bottom:0;font-size:15px;text-decoration:none;opacity:0;animation:bfl 1s infinite ease-out}
.bfx u:nth-child(1){left:2px}.bfx u:nth-child(2){left:13px;animation-delay:.33s}.bfx u:nth-child(3){left:24px;animation-delay:.66s}
@keyframes bfl{0%{transform:translateY(8px) scale(.6);opacity:0}30%{opacity:1}100%{transform:translateY(-18px) scale(1.15);opacity:0}}
#btlM{position:fixed;inset:0;z-index:12;display:none;align-items:center;justify-content:center;background:rgba(5,10,20,.6);padding:calc(8px + env(safe-area-inset-top,0px)) 8px calc(8px + env(safe-area-inset-bottom,0px));font-family:'Lilita One',Arial,sans-serif;color:#fff}
#btlM .bw{width:min(860px,100%);max-height:100%;display:flex;flex-direction:column;border-radius:18px;background:#2c3a5a;border:3px solid #141c30;box-shadow:0 8px 0 #0007,inset 0 2px 0 #fff3;overflow:hidden}
#btlM .bh{display:flex;align-items:center;gap:8px;padding:8px 10px;background:linear-gradient(#4a5f8f,#33466e);min-height:54px;flex:none}
#btlM .btabs{display:flex;gap:6px;flex:1;justify-content:center;flex-wrap:wrap}
#btlM .bt{border:2px solid #1b2748;border-radius:10px;background:#43588a;color:#dfe8ff;font:inherit;font-size:17px;padding:6px 14px;cursor:pointer}
#btlM .bt.on{background:linear-gradient(#ffe27a,#f0a60a);color:#4d2e03;border-color:#7a4b05}
#btlM .bt.dis{opacity:.5}
#btlM .bx,#btlM .bk{flex:none;width:44px;height:36px;border-radius:9px;border:2px solid #fff8;color:#fff;font-size:20px;cursor:pointer}
#btlM .bx{background:linear-gradient(#ff5f5f,#c4262a)}#btlM .bk{background:linear-gradient(#6f8fd8,#3f5fa8)}
#btlM .bsc{overflow:auto;min-height:0;flex:1;padding:10px;background:#e4e1d6;color:#222}
#btlM .bcards{display:grid;gap:10px;grid-template-columns:1fr}
@media (min-width:700px){#btlM .bcards{grid-template-columns:1fr 1fr}}
body.land #btlM .bcards{grid-template-columns:1fr 1fr}
#btlM .bcard{position:relative;border-radius:14px;background:linear-gradient(#8fb4e8,#5f86c4);border:3px solid #2b4a82;padding:12px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;color:#fff;text-shadow:0 2px 0 #0008}
#btlM .bcard.lockc{background:linear-gradient(#bdbdbd,#8f8f8f);border-color:#6a6a6a;filter:grayscale(.6)}
#btlM .bart{font-size:46px;line-height:1}body.land #btlM .bart{font-size:34px}
#btlM .bti{font-size:21px}#btlM .bds{font-size:14px;opacity:.95;line-height:1.2}
#btlM .bi{position:absolute;right:8px;top:8px;width:28px;height:28px;border-radius:50%;border:2px solid #fff;background:#2b4a82;color:#fff;font:italic 700 17px Georgia,serif;cursor:pointer}
#btlM .db.big{min-width:170px;min-height:52px;font-size:19px;flex-direction:row;gap:6px}
#btlM .berr{margin-top:10px;text-align:center;color:#e01b1b;font-size:17px;background:#fff0f0;border:2px solid #e01b1b;border-radius:10px;padding:6px 8px;text-shadow:none;-webkit-text-stroke:0}
#btlM .bwarn{font-size:13px;color:#ffe27a}
#btlM .brv{background:#8e1b12;border:2px solid #ffb04a;border-radius:10px;padding:6px 8px;font-size:14px;display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap}
#btlM .brv button,#btlM .bsm{cursor:pointer}
#btlM .bfoot{display:flex;gap:10px;justify-content:space-between;align-items:center;margin-top:10px;flex-wrap:wrap}
#btlM .bsec{--c1:#cfe0ff;--c2:#7fa6e8;--c3:#4d78c8;--c4:#5b86d6;--bd:#1b2f66;--sd:#10204a;min-width:150px;min-height:46px;flex-direction:row;gap:6px;font-size:16px}
#btlM .bhist{min-width:96px;min-height:50px}#btlM .bhist i{font-size:22px}
#btlM .bhist.rv{--c1:#ff9a8a;--c2:#f0392b;--c3:#b81410;--c4:#d82a1c;--bd:#5e0907;--sd:#3d0504}
#btlM .bsub{display:flex;gap:6px;margin-bottom:8px}
#btlM .bsub button{flex:1;border:2px solid #9a96888;border:2px solid #98927f;border-radius:10px;background:#cfcabb;color:#333;font:inherit;font-size:15px;padding:6px 4px;cursor:pointer}
#btlM .bsub button.on{background:#3f5fa8;color:#fff;border-color:#1b2f66}
#btlM .he{background:#f6f3ea;border:2px solid #bdb7a3;border-radius:12px;padding:8px;margin-bottom:8px;display:flex;flex-direction:column;gap:6px}
#btlM .he .hn{font-size:18px;color:#1d2b52;display:flex;justify-content:space-between;gap:6px;flex-wrap:wrap}
#btlM .he .hn .vpf{align-self:center;font-size:14px;padding:4px 10px}#btlM .he .hn small{font-size:13px;color:#666}
#btlM .he .hs{color:#e0a30a;font-size:20px;letter-spacing:1px;-webkit-text-stroke:.5px #7a4b05}
#btlM .he .ht{display:flex;gap:4px;flex-wrap:wrap}
#btlM .tch{position:relative;display:inline-flex;align-items:flex-end;width:38px;height:42px;background:#cfd8ec;border-radius:7px;border:1px solid #8a97b8}
#btlM .tch img{position:absolute;left:50%;top:1px;transform:translateX(-50%);height:30px;image-rendering:pixelated}
#btlM .tch b{position:relative;width:100%;text-align:center;font-size:12px;color:#fff;background:#0007;border-radius:0 0 6px 6px}
#btlM .he .hr{display:flex;gap:8px;align-items:center;flex-wrap:wrap;font-size:15px;color:#333}
#btlM .he .hr .sp{flex:1}
#btlM .bsm{min-width:92px;min-height:38px;font-size:14px;flex-direction:row;gap:4px}
#btlM .rvb{--c1:#ffb68a;--c2:#f2603b;--c3:#c8321a;--c4:#dd4122;--bd:#6e150a;--sd:#4a0e06}
#btlM .rvb small{font-size:11px}
#btlM .bno{font-size:13px;color:#777}
#btlM .bem{text-align:center;padding:24px 8px;color:#555;font-size:17px}
#btlM .btx{background:#f6f3ea;border-radius:12px;padding:12px;font-size:16px;line-height:1.35;color:#222}
#btlM .btx li{margin:6px 0}
#btlM .he,#btlM .btx,#btlM .bem{text-shadow:none;-webkit-text-stroke:0;paint-order:normal}
body.land #btlM .he{display:grid;grid-template-columns:1.1fr 1.5fr 1.5fr;align-items:center}
body.land #btlM .bw{max-height:100%}
`;document.head.appendChild(st)})();

var STEP=1/60,RAWR=Math.random;
var REC=null,RPL=null,INSIM=0,RVS={n:0,left:0,at:0};
var BTL={tab:'solo',view:'main',top:'bat',ht:'def',it:'res',data:{def:null,atk:null},tt:{def:0,atk:0},rvNext:0};
UI.btl=0;
/* ---- simulación a paso fijo (necesaria para que las repeticiones sean idénticas) ---- */
function rngNext(){let t=(A.rs=(A.rs+0x6D2B79F5)>>>0);t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}
function withRng(f){if(!A||A.rs==null)return f();const R0=Math.random;Math.random=rngNext;try{return f()}finally{Math.random=R0}}
function stepAtk(dt){
 if(A.tk==null){A.tk=0;A.acc=0;if(A.rs==null)A.rs=(Math.random()*4294967296)>>>0}
 if(RPL&&RPL.pause)return;
 const sp=RPL?RPL.sp:1,mx=GFPS&&GFPS<30?6:3;
 A.acc=Math.min(A.acc+dt*sp,STEP*mx*sp);
 while(A&&A.on&&A.acc>=STEP){A.acc-=STEP;atkTick()}}
function atkTick(){
 if(RPL)rpEvents();else if(REC)recState();
 INSIM=1;try{withRng(()=>sim(STEP))}finally{INSIM=0}
 if(A)A.tk++}
/* ---- grabación ---- */
function ordSig(){return (A.all===false?0:1)+(A.hf?'h':'')+Object.keys(A.ord).sort().map(k=>k+A.ord[k]).join(',')}
function recState(){const sg=ordSig();if(sg!==REC.sg){REC.sg=sg;REC.ev.push([A.tk|0,'m',{...A.ord},A.all===false?0:1,A.hf?1:0])}}
const startReal1=startReal;
startReal=function(id,d){startReal1(id,d);if(RPL)return;REC=null;if(mode!='a'||!E||E.real!=id)return;
 A.rs=(Math.random()*4294967296)>>>0;A.tk=0;A.acc=0;
 REC={id,b:(d.b||[]).filter(a=>TY[a[0]]).map(a=>[a[0],a[1],a[2],a[3]||1]),army:{...A.army},sp:{...A.sp},th:{},seed:A.rs,ev:[],sg:ordSig()};
 for(const k in A.army)if(A.army[k]>0){const m=tdm(k);REC.th[k]=[thp(k),m==null?null:m,tlv(k)]}
 if(BTL.rvNext){A.rev=BTL.rvNext;BTL.rvNext=0}};
const spawn0=spawn,castSp0=castSp;
spawn=function(x,y){if(REC&&!RPL&&A&&A.on)REC.ev.push([A.tk|0,'s',pick,A.qty[pick]||1,+x.toFixed(3),+y.toFixed(3)]);withRng(()=>spawn0(x,y))};
castSp=function(k,x,y){if(REC&&!RPL&&A&&A.on)REC.ev.push([A.tk|0,'c',k,+x.toFixed(3),+y.toFixed(3)]);return withRng(()=>castSp0(k,x,y))};
const endAttack0=endAttack;
endAttack=function(sur){
 if(RPL){if(mode!='a'||!A||!A.on)return;A.on=false;rpDone();return}
 if(REC&&A&&A.on&&mode=='a'&&!INSIM)REC.ev.push([A.tk|0,'x']);
 const r=endAttack0(sur);REC=null;setTimeout(btlPoll,2500);return r};
/* ---- reproducción ---- */
function rpEvents(){const ev=RPL.R.ev||[];while(RPL.i<ev.length&&ev[RPL.i][0]<=A.tk){const e=ev[RPL.i++];
  if(e[1]=='s'){pick=e[2];A.qty[pick]=e[3];const n0=A.tr.length;withRng(()=>spawn0(e[4],e[5]));const th=RPL.R.th&&RPL.R.th[e[2]];if(th)for(let i=n0;i<A.tr.length;i++){const t=A.tr[i];t.hp=t.max=th[0];if(th[1]!=null)t.dm=th[1];if(th[2])t.wl=th[2]}}
  else if(e[1]=='c'){pick=e[2];if(A.sp[e[2]]>0){A.sp[e[2]]--;withRng(()=>castSp0(e[2],e[3],e[4]))}}
  else if(e[1]=='m'){const o=e[2]||{};for(const k of new Set([...Object.keys(A.ord),...Object.keys(o)])){if((A.ord[k]||'auto')!==(o[k]||'auto')){A.ord[k]=o[k]||'auto';for(const t of A.tr)if(t.k==k&&t.hp>0){t.tc=A.ord[k];t.tg=null}}}
   const al=e[3]?true:false,hf=!!e[4];if((A.all!==false)!==al||!!A.hf!==hf){A.all=al;A.hf=hf;resetTg()}}
  else if(e[1]=='k'){window.kFistRp&&kFistRp()}else if(e[1]=='x'){endAttack(1);return}}}
async function btlReplay(id){if(!sb)return;flash('Cargando repetición…');
 try{const r=await sb.rpc('get_replay',{p_raid:id});closeMsg();
  if(r.error||!r.data||!r.data.b){note('La repetición ya no está disponible (se guardan 72 horas).');return}
  rpStart(r.data,id)}catch(e){closeMsg();note('Error de conexión')}}
function rpStart(R,id){UI.btl=0;const a0={...S.army},s0={...S.sp};
 RPL={R,id,sp:1,i:0,pause:0};REC=null;
 startReal0('replay',{b:R.b,g:0,e:0});
 Object.assign(S.army,a0);Object.assign(S.sp,s0);
 A.army={...R.army};A.sp={...(R.sp||{})};A.rs=R.seed>>>0;A.tk=0;A.acc=0;E.sh=[];E.f=1;
 pick=Object.keys(TR).find(k=>A.army[k])||pick;ui()}
function rpExit(keep){RPL=null;mode='v';A=null;E=null;if(!keep){UI.btl=1;BTL.view='hist'}ui()}
function rpDone(){const s=stars(),p=pct();flash(`<b style="font-size:1.4rem">Repetición terminada</b><br><span style="font-size:2rem;color:#f5c542">${'★'.repeat(s)}${'☆'.repeat(3-s)}</span><br>Destrucción: ${pctDisp(p)}%<br><br><button id="rpa">Ver otra vez</button> <button id="ok">Volver</button>`);
 $e('rpa').onclick=()=>{const R=RPL.R,id=RPL.id;closeMsg();rpExit(1);rpStart(R,id)};$e('ok').onclick=()=>{closeMsg();rpExit()}}
function rpUI(){const s=stars();return `<div class="dock ctl"><button class="db sm2" data-rpx=1><i>✕</i>Salir</button><button class="db sm2" data-rpp=1><i>${RPL.pause?'▶️':'⏸️'}</i>${RPL.pause?'Seguir':'Pausa'}</button><button class="db sm2" data-rps=1><i>⏩</i>x${RPL.sp}</button></div><div class=sm>🎬 Repetición · ⏱ ${fmtT(Math.max(0,A.time))} · ${'★'.repeat(s)}${'☆'.repeat(3-s)} · ${pctDisp(pct())}%${RPL.R.v&&RPL.R.v!==BUILD?' · grabada en '+esc(RPL.R.v):''}</div>`}
const atkUI0=atkUI;atkUI=function(){return RPL?rpUI():atkUI0()};
const tap0=tap;tap=function(sx,sy){if(RPL)return;return tap0(sx,sy)};
const deployAt0=deployAt;deployAt=function(x,y){if(RPL)return;return deployAt0(x,y)};
document.addEventListener('DOMContentLoaded',()=>{});
(function(){const p=document.getElementById('panel');if(p)p.addEventListener('click',e=>{const b=e.target.closest('[data-rpx],[data-rps],[data-rpp]');if(!b||!RPL)return;e.stopImmediatePropagation();e.preventDefault();
 if(b.dataset.rpx!=null){closeMsg();rpExit()}else if(b.dataset.rps!=null)RPL.sp=RPL.sp==1?2:RPL.sp==2?4:1;else RPL.pause=!RPL.pause;ui()},true)})();
/* ---- venganza ---- */
async function btlPoll(){if(!sb||!ME||OFFLINE)return;try{const r=await sb.rpc('revenge_status');if(r.error||!r.data)return;RVS={n:r.data.n|0,left:r.data.left|0,at:performance.now()}}catch(e){}}
setInterval(()=>{if(mode=='v')btlPoll()},45000);setTimeout(btlPoll,6000);
function rvLeft(){return RVS&&RVS.n>0?RVS.left-(performance.now()-RVS.at)/1000:0}
function btlBtn(){const rv=rvLeft()>0;return `<button class="db atk btl${rv?' rv':''}" data-a=1><i>${BRI.atk}</i>${rv?'<span class=bfx><u>🔥</u><u>🔥</u><u>🔥</u></span>':''}Batalla</button>`}
async function startRevenge(id){if(!sb)return;
 if(!(used(S.army)||S.army.king)){note('Necesitas tropas para vengarte. Entrena tu ejército primero.');return}
 flash('Preparando venganza…');
 try{const r=await sb.rpc('get_revenge',{p_raid:id});closeMsg();
  if(r.error||!r.data||!r.data.id){note('Venganza no disponible');btlLoadAll();btlPoll();return}
  const d=r.data;UI.btl=0;BTL.rvNext=id;startReal(d.id,{b:d.base,g:d.gold,e:d.elixir,loot:d.loot,offer:d.offer});BTL.rvNext=0;
 }catch(e){closeMsg();note('Error de conexión')}}
/* ---- menú ---- */
function btlOpen(){UI.btl=1;BTL.view='main';if(OFFLINE||!ONL)BTL.tab='solo';btlPoll();ui()}
function btlLoad(k){BTL.data[k]=null;sb.rpc('battle_log',{p_kind:k}).then(r=>{BTL.data[k]=r.error?'err':(r.data||[]);BTL.tt[k]=performance.now()}).catch(()=>{BTL.data[k]='err'})}
function btlLoadAll(){if(!sb)return;btlLoad('def');btlLoad('atk')}
function agoT(s){return s<60?'hace un momento':s<3600?'hace '+(s/60|0)+' min':s<86400?'hace '+(s/3600|0)+' h':'hace '+(s/86400|0)+' d'}
function btlMain(){const off=OFFLINE||!ONL,can=used(S.army)||S.army.king,rv=rvLeft()>0;
 const tabs=`<div class=btabs><button class="bt${BTL.tab=='solo'?' on':''}" data-bt=solo>Un jugador</button><button class="bt${BTL.tab=='multi'?' on':''}${off?' dis':''}" data-bt=multi>Multijugador</button></div>`;
 let body;
 if(BTL.tab=='solo')body=`<div class=bcards style="grid-template-columns:1fr"><div class=bcard><div class=bart>🏕️</div><div class=bti>Aldea de práctica</div><div class=bds>Ataca una aldea generada para entrenar tus tropas. No afecta a tus trofeos.</div><button class="db atk btl big" data-bgo=solo ${can?'':'disabled'}>Atacar</button>${can?'':'<div class=bwarn>Entrena tropas primero</div>'}</div></div><div class=bfoot><button class="db bsec" data-bea=1>🪖 Editar ejército</button></div>`;
 else body=`<div class=bcards><div class=bcard><button class=bi data-bi=1>i</button><div class=bart>⚔️</div><div class=bti>Batalla</div><div class=bds>Busca un rival real, roba su botín y gana trofeos.</div><button class="db atk btl big" data-bgo=multi ${ONL&&can?'':'disabled'}>Buscar batalla</button>${can?'':'<div class=bwarn>Entrena tropas primero</div>'}${rv?`<div class=brv>🔥 ¡Venganza disponible${RVS.n>1?' ('+RVS.n+')':''}! <button class="db bsm rvb" data-bh=1>Ver</button></div>`:''}</div><div class="bcard lockc"><div class=bart>🔒</div><div class=bti>Batalla competitiva</div><div class=bds>En desarrollo</div></div></div><div class=bfoot><button class="db bsec" data-bea=1>🪖 Editar ejército</button><button class="db bhist${rv?' rv':''}" data-bh=1><i>⚔️📜</i></button></div>`;
 const er=performance.now()-(BTL.errT||-1e9)<3500?'<div class=berr>⚠️ No tienes un cuartel. Construye uno para entrenar tropas.</div>':'';
 return `<div class=bw><div class=bh>${tabs}<button class=bx data-bx=1>✕</button></div><div class=bsc>${body}${er}</div></div>`}
function btlEntry(x,kind){const ex=(performance.now()-(BTL.tt[kind]||0))/1000,age=(x.age||0)+ex;
 const tc=Object.entries(x.troops||{}).filter(([k,n])=>TR[k]&&n>0).map(([k,n])=>`<span class=tch><img src="${tIcon(k)}"><b>${n}</b></span>`).join('')||'<span class=bno>—</span>';
 let act='';if(x.rp)act+=`<button class="db bsm" data-brp=${x.id}>▶ Repetición</button>`;
 if(kind=='def'){if(x.rev=='avail'){const l=(x.left||0)-ex;act+=l>0?`<button class="db bsm rvb" data-brv=${x.id}>🔥 Vengarse<small>${fmtT(Math.ceil(l/60)*60)}</small></button>`:'<span class=bno>Venganza no disponible</span>'}
  else if(x.rev=='done')act+='<span class=bno>Venganza ya hecha</span>';else if(x.rev=='gone')act+='<span class=bno>Venganza no disponible</span>'}
 const tr=x.tr?`<span>${x.tr>0?'+':''}${x.tr} ${ICO('ranking','🏆')}</span>`:'';
 return `<div class=he><div class=hn><span>${esc(x.name||'Jugador')}${x.isrev?' 🔥':''}<br><small>${agoT(age)}</small></span>${x.uid&&!OFFLINE?`<button class="db bsm vpf" data-bpv="${esc(x.uid)}">👤 Ver perfil</button>`:''}<span class=hs>${'★'.repeat(x.stars)}${'☆'.repeat(3-x.stars)}<br><small style="color:#444;-webkit-text-stroke:0;font-size:13px">${x.pct}%</small></span></div><div class=ht>${tc}</div><div class=hr><span>🪙 ${x.gold} · 💧 ${x.elixir}</span>${tr}<span class=sp></span>${act}</div></div>`}
function btlHist(){const t=BTL.ht,L=BTL.data[t];let list;
 if(BTL.top=='comp')list='<div class=bem>Batalla competitiva<br>En desarrollo</div>';
 else{const sub=`<div class=bsub><button class="${t=='def'?'on':''}" data-bhs=def>Registro de defensa</button><button class="${t=='atk'?'on':''}" data-bhs=atk>Registro de ataque</button></div>`;
  list=sub+(L==null?'<div class=bem>Cargando…</div>':L=='err'?'<div class=bem>No se pudo cargar el registro.</div>':!L.length?`<div class=bem>${t=='def'?'Nadie te ha atacado todavía.':'Aún no has atacado a nadie.'}</div>`:L.map(x=>btlEntry(x,t)).join(''))}
 return `<div class=bw><div class=bh><button class=bk data-bback=1>‹</button><div class=btabs><button class="bt${BTL.top=='bat'?' on':''}" data-bht=bat>Batalla</button><button class="bt${BTL.top=='comp'?' on':''}" data-bht=comp>Batalla competitiva</button></div><button class=bx data-bx=1>✕</button></div><div class=bsc>${list}</div></div>`}
function btlInfo(){const it=BTL.it,T={
 res:'<ul><li>Ataca aldeas de otros jugadores para robar oro y elixir y ganar trofeos.</li><li>Estrellas: 50 % de destrucción, destruir el Ayuntamiento y 100 %.</li><li>Cada batalla dura 3 minutos. Las tropas que sobreviven vuelven a tu campamento.</li><li>En el Registro (⚔️📜) ves tus defensas y ataques, y puedes ver su repetición durante 72 horas.</li></ul>',
 esc:'<ul><li>Si te atacan con éxito recibes un escudo: 10 min (10 %+), 20 min (30 %+), 40 min (60 %+) o 60 min (90 %+ de destrucción). Solo cuenta si el atacante desplegó al menos un tercio de su ejército.</li><li>Atacar ya no rompe tu escudo.</li><li>El escudo no cubre las venganzas.</li></ul>',
 ven:'<ul><li>Los jugadores atacados pueden vengarse seleccionando a los atacantes en el Registro de defensa.</li><li>Ni siquiera los escudos pueden detener los ataques de venganza.</li><li>La aldea que ataques en una venganza tendrá al menos la misma cantidad de recursos que te robaron.</li><li>La venganza está disponible durante 5 horas tras el ataque. Una venganza no se puede vengar ni da escudo al rival.</li></ul>'};
 return `<div class=bw><div class=bh><button class=bk data-bback=1>‹</button><div class=btabs><button class="bt${it=='res'?' on':''}" data-bit=res>Resumen</button><button class="bt${it=='esc'?' on':''}" data-bit=esc>Escudos</button><button class="bt${it=='ven'?' on':''}" data-bit=ven>Venganza</button></div><button class=bx data-bx=1>✕</button></div><div class=bsc><div class=btx>${T[it]}</div></div></div>`}
var _sBtl='';
function btlDraw(){let el=document.getElementById('btlM');
 if(!el){el=document.createElement('div');el.id='btlM';document.body.appendChild(el);el.addEventListener('click',btlClick)}
 if(!UI.btl||mode!='v'||!S){if(el.style.display!='none'){el.style.display='none';_sBtl=''}if(UI.btl&&mode!='v')UI.btl=0;return}
 const h=BTL.view=='hist'?btlHist():BTL.view=='info'?btlInfo():btlMain();
 if(h!==_sBtl){const sc=el.querySelector('.bsc'),y=sc?sc.scrollTop:0;el.innerHTML=h;_sBtl=h;const n=el.querySelector('.bsc');if(n)n.scrollTop=y}
 el.style.display='flex'}
function btlClick(e){const t=e.target;if(t.id==='btlM'){UI.btl=0;snd('ui');ui();return}
 const b=t.closest('[data-bx],[data-bt],[data-bgo],[data-bea],[data-bi],[data-bh],[data-bback],[data-bht],[data-bhs],[data-bit],[data-brp],[data-brv],[data-bpv]');if(!b||b.disabled)return;const d=b.dataset;
 if(d.bx!=null){UI.btl=0;snd('ui')}
 else if(d.bt){if(d.bt=='multi'&&(OFFLINE||!ONL)){snd('deny');return}BTL.tab=d.bt;snd('ui')}
 else if(d.bgo=='solo'){UI.btl=0;ui();startAttack();snd('horn');return}
 else if(d.bgo=='multi'){UI.btl=0;ui();findReal();return}
 else if(d.bea!=null){if(!S.b.some(x=>x.t=='rax'&&!x.ruin&&!x.nb)){BTL.errT=performance.now();snd('deny')}else{UI.btl=0;pk=rxB();tab='army';UI.train=1;snd('open')}}
 else if(d.bi!=null){BTL.view='info';BTL.it='res';snd('open')}
 else if(d.bh!=null){BTL.view='hist';BTL.top='bat';BTL.ht='def';btlLoadAll();snd('open')}
 else if(d.bback!=null){BTL.view='main';snd('ui')}
 else if(d.bht){BTL.top=d.bht;snd('ui')}
 else if(d.bhs){BTL.ht=d.bhs;snd('ui')}
 else if(d.bit){BTL.it=d.bit;snd('ui')}
 else if(d.bpv){snd('open');prfView(d.bpv);return}
 else if(d.brp){btlReplay(d.brp);return}
 else if(d.brv){startRevenge(d.brv);return}
 ui()}

/* ===== v70: aldea pre-dibujada (Bajo/Medio): terreno + obstáculos + edificios estáticos en una sola imagen ===== */
var WB={c:null,x:null,key:'',s:0,bx:0,by:0,bw:0,bh:0,t:0};
function wbBounds(){const q=[P(0,0),P(N,0),P(0,N),P(N,N)];let a=1e9,b=1e9,c=-1e9,d=-1e9;for(const p of q){a=Math.min(a,p[0]);c=Math.max(c,p[0]);b=Math.min(b,p[1]);d=Math.max(d,p[1])}return[a-70,b-190,c+70,d+80]}
function wbDyn(b){return b.up>0||b.rpr||b.ghost||b.nb}
function wbKey(){let h=N*7+(VT?3:0)+(mode=='v'?1:0);const L=S.b;for(let i=0;i<L.length;i++){const b=L[i];if(b.hp<=0&&!b.ruin)continue;h=(Math.imul(h,31)+b.x*131+b.y*71+b.lv*17+(b.hp>0?1:0)+(b.ruin?5:0)+(wbDyn(b)?9:0)+(b.rg==null?0:3)+b.t.charCodeAt(0)*7+b.t.length+((TY[b.t]&&TY[b.t].prod&&b.st>=LIMF(b)-1)?11:0))|0}
 const O=S.ob||[];for(let i=0;i<O.length;i++){const o=O[i];h=(Math.imul(h,31)+o.x*13+o.y*7+(o.up>0?1:0)+o.k.charCodeAt(0))|0}return h+'|'+L.length+'|'+O.length}
function wbScale(){const t=KS*cam.z,st=[.5,.75,1,1.5,2,3];let s=st.find(v=>v>=t*.98)||3;if(GFX=='low')s=Math.min(s,1.5);return s}
function wbBake(s,key){
 const[ax,ay,bx,by]=wbBounds();let sc=s;const MP=GFX=='low'?5e6:9e6;while((bx-ax)*sc*(by-ay)*sc>MP&&sc>.4)sc*=.85;
 const w=Math.ceil((bx-ax)*sc),h=Math.ceil((by-ay)*sc);
 if(!WB.c)WB.c=document.createElement('canvas');if(WB.c.width!==w||WB.c.height!==h){WB.c.width=w;WB.c.height=h;WB.x=WB.c.getContext('2d')}else WB.x.setTransform(1,0,0,1,0,0),WB.x.clearRect(0,0,w,h);
 const sg=g,k0=KS,cx=cam.x,cy=cam.y,cz=cam.z;g=WB.x;KS=1;cam.z=sc;cam.x=-ax*sc;cam.y=-ay*sc;
 const fr=g.fillRect;let skip=1;g.fillRect=function(a,b,c,d){if(skip){skip=0;return}return fr.call(this,a,b,c,d)};
 WBK=1;try{drWZone();drTerrainRaw();drGrass0();const en=[];for(const b of S.b)if(b.hp>0&&!wbDyn(b))en.push({d:b.x+b.y+TY[b.t].s,b});for(const o of S.ob||[])if(!(o.up>0)&&o.x+o.sx<=N&&o.y+o.sy<=N)en.push({d:o.x+o.y+o.s,ob:o});
  en.sort((p,q)=>p.d-q.d);for(const o of en){if(o.ob)drOb(o.ob);else drB(o.b)}}
 finally{WBK=0;delete g.fillRect;g=sg;KS=k0;cam.x=cx;cam.y=cy;cam.z=cz}
 WB.s=sc;WB.key=key;WB.bx=ax;WB.by=ay;WB.bw=bx-ax;WB.bh=by-ay;WB.t=performance.now()}
function wbOK(){return GX.wb&&mode=='v'&&S&&!sel&&!mv&&!pk&&!(typeof DM!='undefined'&&DM.on)&&!(typeof RPL!='undefined'&&RPL)}
function drWorld(){
 const key=wbKey(),s=wbScale();
 if(!WB.c||key!==WB.key||s>WB.s*1.3&&WB.s<3||(GX.bk&&performance.now()-WB.t>GX.bk&&!wbHot()))wbBake(s,key);
 g.setTransform(1,0,0,1,0,0);g.fillStyle=FBG();g.fillRect(0,0,cv.width,cv.height);
 g.setTransform(KS*cam.z,0,0,KS*cam.z,KS*cam.x,KS*cam.y);g.textAlign='center';g.textBaseline='middle';drForest(0);
 g.drawImage(WB.c,WB.bx,WB.by,WB.bw,WB.bh);drForest(1);
 const dy=[];for(const b of S.b)if(b.hp>0&&wbDyn(b))dy.push({d:b.x+b.y+TY[b.t].s,b});for(const o of S.ob||[])if(o.up>0&&o.x+o.sx<=N&&o.y+o.sy<=N)dy.push({d:o.x+o.y+o.s,ob:o});for(const u of vuList())dy.push({d:u.d,t:u});
 dy.sort((p,q)=>p.d-q.d);for(const o of dy){if(o.ob)drOb(o.ob);else if(o.t){drT(o.t);vOcc(o.t)}else{drB(o.b);g.globalAlpha=1}}
 drProgs();try{drWallSel()}catch(e){console.error(e)}drFx();drBubbles();drPlaceTop()}
function wbHot(){return ptr.size>0||drag}
const draw1=draw;draw=function(){if(wbOK()){drWorld();return}draw1()};
/* ===== v70: ataques más ligeros (Bajo/Medio): edificios como sprites en caché + zona de despliegue pre-dibujada ===== */
var SPRC={},SPN=0,SPS=1,SPBAR=null;
const bar0=bar;bar=function(x,y,w,f){if(SPBAR){SPBAR.push([x,y,w]);return}return bar0(x,y,w,f)};
const SPR_NO={cannon:1,mortar:1,wizard:1},SPR_ANIM={camp:1,cauldron:1,hut:1};
function sprOK(b){return GX.sc&&mode=='a'&&b.hp>0&&!b.ruin&&!SPR_NO[b.t]&&!(GX.sc<2&&SPR_ANIM[b.t])&&TY[b.t]&&!TY[b.t].trap}
function sprScale(){const t=KS*cam.z;return t<=.55?.5:t<=.8?.75:t<=1.1?1:1.5}
const drB1=drB;
drB=function(b){
 if(!sprOK(b)){drB1(b);return}
 const sc=sprScale();if(sc!==SPS||SPN>150){SPRC={};SPN=0;SPS=sc}
 const k=b.t+'|'+b.lv+(b.t=='wall'?'|'+Math.ceil(4*b.hp/b.max):''),d=TY[b.t],s=d.s,h=d.h,pp=P(b.x,b.y),px=pp[0],py=pp[1];let e=SPRC[k];
 if(!e){const ax=P(b.x,b.y+s)[0]-18,bx=P(b.x+s,b.y)[0]+18,ay=P(b.x,b.y,h+110)[1],by=P(b.x+s,b.y+s)[1]+20,w=Math.ceil((bx-ax)*SPS),hh=Math.ceil((by-ay)*SPS);
  const c=document.createElement('canvas');c.width=w;c.height=hh;const x=c.getContext('2d');
  const sg=g,k0=KS,cx=cam.x,cy=cam.y,cz=cam.z;g=x;KS=1;cam.z=SPS;cam.x=-ax*SPS;cam.y=-ay*SPS;g.setTransform(SPS,0,0,SPS,-ax*SPS,-ay*SPS);g.textAlign='center';g.textBaseline='middle';SPBAR=[];
  try{drB1(b)}finally{g=sg;KS=k0;cam.x=cx;cam.y=cy;cam.z=cz}
  const bb=SPBAR;SPBAR=null;e=SPRC[k]={c,ox:ax-px,oy:ay-py,w:bx-ax,h:by-ay,bar:bb&&bb[0]?[bb[0][0]-px,bb[0][1]-py,bb[0][2]]:null};SPN++}
 g.drawImage(e.c,px+e.ox,py+e.oy,e.w,e.h);
 if(b.hp<b.max&&e.bar&&b.rg==null)bar0(px+e.bar[0],py+e.bar[1],e.bar[2],b.hp/b.max)};
/* zona de despliegue: se redibuja solo si cambian los edificios en pie */
var ZC={k:'',c:null,s:1,bx:0,by:0,bw:0,bh:0},WMK='';
const drWZone1=drWZone;
drWZone=function(){
 if(!(GX.sc&&mode=='a'&&E)||(A&&A.zw>performance.now())){drWZone1();return}
 let h=E.b.length;for(const b of E.b)h=(Math.imul(h,31)+b.x*131+b.y*7+(b.hp>0?1:0))|0;
 if(h+'|'+E.N!==WMK){WMK=h+'|'+E.N;WMAP={};for(const b of E.b)if(b.t=='wall'&&b.hp>0)WMAP[b.x+','+b.y]=b}
 const sc=Math.min(1,sprScale()),key=h+'|'+E.N+'|'+sc;
 if(!ZC.c||key!==ZC.k){const[ax,ay,bx,by]=wbBounds(),w=Math.ceil((bx-ax)*sc),hh=Math.ceil((by-ay)*sc);
  if(!ZC.c)ZC.c=document.createElement('canvas');ZC.c.width=w;ZC.c.height=hh;const x=ZC.c.getContext('2d');
  const sg=g,k0=KS,cx=cam.x,cy=cam.y,cz=cam.z;g=x;KS=1;cam.z=sc;cam.x=-ax*sc;cam.y=-ay*sc;g.setTransform(sc,0,0,sc,-ax*sc,-ay*sc);
  try{drZone(zoneSet(E.b),0)}finally{g=sg;KS=k0;cam.x=cx;cam.y=cy;cam.z=cz}
  ZC.k=key;ZC.bx=ax;ZC.by=ay;ZC.bw=bx-ax;ZC.bh=by-ay}
 g.drawImage(ZC.c,ZC.bx,ZC.by,ZC.bw,ZC.bh)};

/* ================= v71: perfil, nivel/XP, insignias y logros ================= */
(function(){const st=document.createElement('style');st.textContent=`
/* --- insignias --- */
/*BDGCSS*/.bdg{--s:64px;--c3:var(--c1);--tc:#fff;position:relative;display:inline-block;flex:none;width:var(--s);height:var(--s);vertical-align:middle;--gl:var(--c2);--clip:none;--br:50%}
.bdg i,.bdg em,.bdg s,.bdg u,.bdg span{font-style:normal;text-decoration:none}
.bdg .ring{position:absolute;inset:0;border-radius:var(--br);clip-path:var(--clip);background:linear-gradient(160deg,var(--c1),var(--c2))}
.bdg .core{position:absolute;inset:calc(var(--s)*.09);border-radius:var(--br);clip-path:var(--clip);background:radial-gradient(circle at 35% 28%,var(--c2),var(--c1) 78%);display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:inset 0 calc(var(--s)*.03) calc(var(--s)*.06) #fff8,inset 0 calc(var(--s)*-.05) calc(var(--s)*.08) #0006}
.bdg .core::before{content:'';position:absolute;inset:0;pointer-events:none}
.bdg .core b{position:relative;font-family:var(--ff,'Lilita One',Arial,sans-serif);font-weight:400;font-size:calc(var(--s)*.5*var(--fs,1));color:var(--tc);line-height:1;text-shadow:0 calc(var(--s)*.03) 0 #0007,0 0 calc(var(--s)*.12) #fff9;white-space:nowrap}
.bdg .core img{position:relative;width:62%;height:62%;object-fit:contain;filter:drop-shadow(0 2px 2px #0008)}
.bdg em{position:absolute;inset:0;border-radius:var(--br);clip-path:var(--clip);overflow:hidden;pointer-events:none;display:none}
.bdg em::after{content:'';position:absolute;top:-20%;bottom:-20%;width:34%;left:-60%;background:linear-gradient(100deg,#fff0,#fffc,#fff0);transform:skewX(-18deg);animation:bdgSh 2.6s ease-in-out infinite}
.bdg u{position:absolute;color:#fff;font-size:calc(var(--s)*.26);pointer-events:none;display:none;text-shadow:0 0 6px #fff,0 0 10px var(--c2)}
.bdg u.a{left:-6%;top:6%;animation:bdgTw 1.8s ease-in-out infinite}.bdg u.b{right:-4%;top:18%;animation:bdgTw 1.8s ease-in-out .6s infinite}
.bdg u.c{left:8%;bottom:-6%;animation:bdgTw 1.8s ease-in-out 1.1s infinite}.bdg u.d{right:4%;bottom:-8%;animation:bdgTw 1.8s ease-in-out .3s infinite}
.bdg .halo{position:absolute;pointer-events:none;display:none}
.bdg .orn{position:absolute;left:50%;top:calc(var(--s)*-.2);transform:translateX(-50%);font-size:calc(var(--s)*.36);line-height:1;filter:drop-shadow(0 2px 2px #000a);pointer-events:none;white-space:nowrap}
.bdg .rib{position:absolute;left:50%;bottom:calc(var(--s)*-.07);transform:translateX(-50%);min-width:56%;max-width:130%;padding:0 calc(var(--s)*.07);height:calc(var(--s)*.24);line-height:calc(var(--s)*.24);border-radius:calc(var(--s)*.05);font:400 calc(var(--s)*.17)/calc(var(--s)*.24) 'Lilita One',Arial,sans-serif;text-align:center;color:#fff;background:linear-gradient(var(--rc,#c0392b),color-mix(in srgb,var(--rc,#c0392b) 60%,#000));border:calc(var(--s)*.02) solid #fffd;text-shadow:0 1px 0 #0009;white-space:nowrap;box-shadow:0 2px 3px #0008;pointer-events:none}
/* formas */
.bdg.sh-hex{--clip:polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%);--br:0}
.bdg.sh-shield{--clip:polygon(0 5%,50% 0,100% 5%,100% 56%,50% 100%,0 56%);--br:0}
.bdg.sh-star{--clip:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);--br:0}
.bdg.sh-diamond{--clip:polygon(50% 0,100% 50%,50% 100%,0 50%);--br:0}
.bdg.sh-oct{--clip:polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%);--br:0}
.bdg.sh-square{--br:24%}
.bdg.sh-seal{--clip:polygon(50% 0,60% 14%,76% 6%,78% 24%,94% 24%,88% 40%,100% 50%,88% 60%,94% 76%,78% 76%,76% 94%,60% 86%,50% 100%,40% 86%,24% 94%,22% 76%,6% 76%,12% 60%,0 50%,12% 40%,6% 24%,22% 24%,24% 6%,40% 14%);--br:0}
.bdg.sh-star .core,.bdg.sh-seal .core,.bdg.sh-diamond .core{inset:calc(var(--s)*.12)}
.bdg.sh-star .core b{transform:translateY(8%)}
.bdg.sh-hex .ring,.bdg.sh-shield .ring,.bdg.sh-star .ring,.bdg.sh-diamond .ring,.bdg.sh-oct .ring,.bdg.sh-seal .ring{animation:none!important}
/* anillo */
.bdg.rs-solid .ring{background:var(--c1)}
.bdg.rs-grad .ring{background:conic-gradient(from 0deg,var(--c1),var(--c3),var(--c2),var(--c1))}
.bdg.rs-dash .ring{background:repeating-conic-gradient(var(--c1) 0 10deg,var(--c2) 10deg 20deg)}
.bdg.rs-rainbow .ring{background:conic-gradient(from 0deg,#ff3d6e,#ffb02e,#fff35c,#4dff88,#3df0ff,#5a7bff,#c64dff,#ff3d6e)}
.bdg.rs-metal .ring{background:conic-gradient(from 30deg,#fff,var(--c1),#555,var(--c2),#fff,var(--c1),#555,var(--c2),#fff)}
/* patrón del núcleo */
.bdg.pt-rays .core::before{background:repeating-conic-gradient(from 0deg,#fff3 0 8deg,#fff0 8deg 16deg)}
.bdg.pt-stripes .core::before{background:repeating-linear-gradient(45deg,#fff3 0 calc(var(--s)*.06),#fff0 calc(var(--s)*.06) calc(var(--s)*.12))}
.bdg.pt-lines .core::before{background:repeating-linear-gradient(0deg,#0002 0 calc(var(--s)*.04),#fff0 calc(var(--s)*.04) calc(var(--s)*.09))}
.bdg.pt-dots .core::before{background:radial-gradient(circle,#fff5 0 18%,#fff0 20%) 0 0/calc(var(--s)*.14) calc(var(--s)*.14)}
.bdg.pt-checker .core::before{background:conic-gradient(#fff3 0 25%,#fff0 0 50%,#fff3 0 75%,#fff0 0) 0 0/calc(var(--s)*.2) calc(var(--s)*.2)}
.bdg.pt-burst .core::before{background:radial-gradient(circle,#fffc 0,#fff0 62%)}
.bdg.pt-grid .core::before{background:linear-gradient(#fff3 1px,#fff0 1px) 0 0/calc(var(--s)*.14) calc(var(--s)*.14),linear-gradient(90deg,#fff3 1px,#fff0 1px) 0 0/calc(var(--s)*.14) calc(var(--s)*.14)}
/* efectos (los activa la rareza y/o el admin) */
.bdg.fx-shine em{display:block}
.bdg.fx-sparkle u{display:block}
.bdg.fx-spin .ring{animation:bdgSpin 5s linear infinite}
.bdg.fx-glow{animation-name:bdgGl;animation-duration:2.2s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.bdg.fx-float{animation-name:bdgFl;animation-duration:2.6s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.bdg.fx-glow.fx-float{animation-name:bdgGl,bdgFl;animation-duration:2.2s,2.6s}
.bdg.fx-pulse .core{animation-name:bdgPu;animation-duration:1.8s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.bdg.fx-hue .core{animation-name:bdgHue;animation-duration:5s;animation-iteration-count:infinite;animation-timing-function:linear}
.bdg.fx-pulse.fx-hue .core{animation-name:bdgPu,bdgHue;animation-duration:1.8s,5s;animation-timing-function:ease-in-out,linear}
.bdg.fx-rays::before{content:'';position:absolute;inset:-26%;border-radius:50%;background:repeating-conic-gradient(from 0deg,#fff0 0 9deg,#ffffffaa 9deg 11deg,#fff0 11deg 20deg);-webkit-mask:radial-gradient(circle,#0000 0 45%,#000 52%,#0000 72%);mask:radial-gradient(circle,#0000 0 45%,#000 52%,#0000 72%);animation:bdgSpin 14s linear infinite;pointer-events:none}
/* ===== rarezas: cada una tiene estructura propia ===== */
/* común: placa plana, sin brillo */
.bdg.r-common .ring{background:linear-gradient(#e6e9f0,#8a93a6)}
.bdg.r-common .core{box-shadow:inset 0 2px 3px #fff8,inset 0 -3px 5px #0004}
/* rara: doble aro fino + resplandor suave fijo */
.bdg.r-rare{filter:drop-shadow(0 0 calc(var(--s)*.1) var(--c2))}
.bdg.r-rare .halo{display:block;inset:calc(var(--s)*-.07);border:calc(var(--s)*.025) solid var(--c2);border-radius:var(--br);clip-path:var(--clip);opacity:.85}
/* épica: aro facetado + corona de gemas giratoria + brillo y pulso */
.bdg.r-epic .ring{background:repeating-conic-gradient(from 0deg,var(--c1) 0 15deg,#fff 15deg 17deg,var(--c2) 17deg 32deg,#fff 32deg 34deg)}
.bdg.r-epic .halo{display:block;inset:calc(var(--s)*-.16);border-radius:50%;background:repeating-conic-gradient(from 0deg,var(--c2) 0 5deg,#fff0 5deg 30deg);-webkit-mask:radial-gradient(circle,#0000 0 63%,#000 65%,#000 74%,#0000 76%);mask:radial-gradient(circle,#0000 0 63%,#000 65%,#000 74%,#0000 76%);animation:bdgSpin 18s linear infinite;filter:drop-shadow(0 0 calc(var(--s)*.04) #fff)}
/* legendaria: aro dorado girando + aura cálida + destellos */
.bdg.r-legendary{--gl:#ffd24a}
.bdg.r-legendary .ring{background:conic-gradient(from 0deg,#fff6b0,#e6a100,#fff6b0,#c77d00,#fff6b0)}
.bdg.r-legendary .halo{display:block;inset:calc(var(--s)*-.14);border-radius:50%;background:radial-gradient(circle,#0000 56%,#ffd24acc 66%,#ffd24a00 78%);animation:bdgPu 2.4s ease-in-out infinite}
/* mítica: arcoíris, rayos, destellos y tono cambiante */
.bdg.r-mythic{--gl:var(--c1)}
.bdg.r-mythic .ring{background:conic-gradient(from 0deg,#ff3d6e,#ffb02e,#fff35c,#4dff88,#3df0ff,#5a7bff,#c64dff,#ff3d6e)}
.bdg.r-mythic .core{background:radial-gradient(circle at 32% 26%,#fff 0,var(--c2) 22%,var(--c1) 70%,#3a0a5a 100%)}
.bdg.r-mythic .core b{background:linear-gradient(180deg,#fff,#ffe27a 55%,#ff9a3c);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-stroke:calc(var(--s)*.02) #5a1a7a;text-shadow:none}
.bdg.r-mythic .halo{display:block;inset:calc(var(--s)*-.1);border-radius:50%;background:radial-gradient(circle,#0000 58%,var(--c1) 68%,#0000 80%);opacity:.7;animation:bdgPu 1.6s ease-in-out infinite}
.bdg.r-mythic:not(.sh-circle) .halo{display:none}
.bdg.r-legendary:not(.sh-circle) .halo{display:none}
/* iconos con color propio anulan el degradado de texto del mítico */
.bdg.tc .core b{background:none!important;-webkit-text-fill-color:var(--tc)!important;color:var(--tc)!important}
@keyframes bdgSh{0%,55%{left:-60%}100%{left:130%}}
@keyframes bdgSpin{to{transform:rotate(360deg)}}
@keyframes bdgGl{0%,100%{filter:drop-shadow(0 0 calc(var(--s)*.08) var(--gl))}50%{filter:drop-shadow(0 0 calc(var(--s)*.3) var(--gl))}}
@keyframes bdgFl{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--s)*-.07))}}
@keyframes bdgPu{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
@keyframes bdgHue{0%,100%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(40deg)}}
@keyframes bdgTw{0%,100%{transform:scale(.2) rotate(0);opacity:0}50%{transform:scale(1.15) rotate(45deg);opacity:1}}
@media (prefers-reduced-motion:reduce){.bdg,.bdg *,.bdg::before{animation:none!important}}
/*ENDBDGCSS*/
/* --- botón de nivel en el HUD --- */
.prfb{position:relative;min-width:0!important;min-height:0!important;width:44px;height:44px;padding:0!important;border:0!important;background:none!important;box-shadow:none!important;flex:none}
.prfb .stl{position:absolute!important;inset:0;border:0!important;box-shadow:none!important;background:linear-gradient(#8fe0ff,#2a8ae0 60%,#1a5cb8)!important;clip-path:polygon(50% 0,60% 14%,76% 6%,78% 24%,94% 24%,88% 40%,100% 50%,88% 60%,94% 76%,78% 76%,76% 94%,60% 86%,50% 100%,40% 86%,24% 94%,22% 76%,6% 76%,12% 60%,0 50%,12% 40%,6% 24%,22% 24%,24% 6%,40% 14%);filter:drop-shadow(0 2px 0 #0007)}
.prfb b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font:400 18px 'Lilita One',Arial,sans-serif;-webkit-text-stroke:3px #0b3a78;paint-order:stroke fill;text-shadow:0 2px 0 #0b3a78}
.prfb .dt{position:absolute;right:-3px;top:-3px;min-width:18px;height:18px;border-radius:9px;background:#f04a3a;color:#fff;font:700 12px/18px Arial;text-align:center;border:2px solid #fff}
/* --- menú de perfil --- */
#prfM{position:fixed;inset:0;z-index:13;display:none;align-items:center;justify-content:center;background:rgba(5,10,20,.6);padding:calc(8px + env(safe-area-inset-top,0px)) 8px calc(8px + env(safe-area-inset-bottom,0px));font-family:'Lilita One',Arial,sans-serif;color:#fff}
#prfM .pw{width:min(900px,100%);max-height:100%;display:flex;flex-direction:column;border-radius:18px;background:#5d5d62;border:3px solid #2b2b30;box-shadow:0 8px 0 #0007,inset 0 2px 0 #fff3;overflow:hidden}
#prfM .ph{display:flex;align-items:flex-end;gap:8px;padding:8px 10px 0;background:linear-gradient(#77777c,#5d5d62);flex:none;min-height:52px}
#prfM .pt{border:2px solid #2b2b30;border-bottom:0;border-radius:10px 10px 0 0;background:#e4e1d6;color:#2b2b30;font:inherit;font-size:19px;padding:8px 20px}
#prfM .px{margin-left:auto;margin-bottom:8px;width:44px;height:36px;border-radius:9px;border:2px solid #fff8;background:linear-gradient(#ff5f5f,#c4262a);color:#fff;font-size:20px;cursor:pointer}
#prfM .pb{overflow:auto;min-height:0;flex:1;padding:10px;background:#e4e1d6;color:#222;display:flex;flex-direction:column;gap:10px}
#prfM .pc{border-radius:14px;background:linear-gradient(#8d9ac4,#6f7aa6);border:3px solid #4d5784;padding:10px;display:flex;gap:12px;flex-wrap:wrap;color:#fff;text-shadow:0 2px 0 #0008}
#prfM .pid{display:flex;gap:12px;align-items:center;flex:1 1 280px}
#prfM .lvs{position:relative;width:78px;height:78px;flex:none}
#prfM .lvs .st{position:absolute;inset:0;background:linear-gradient(#8fe0ff,#2a8ae0 60%,#1a5cb8);clip-path:polygon(50% 0,60% 14%,76% 6%,78% 24%,94% 24%,88% 40%,100% 50%,88% 60%,94% 76%,78% 76%,76% 94%,60% 86%,50% 100%,40% 86%,24% 94%,22% 76%,6% 76%,12% 60%,0 50%,12% 40%,6% 24%,22% 24%,24% 6%,40% 14%);filter:drop-shadow(0 3px 0 #0007)}
#prfM .lvs b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:400 32px 'Lilita One',Arial,sans-serif;-webkit-text-stroke:4px #0b3a78;paint-order:stroke fill}
#prfM .nm{font-size:26px;line-height:1.05}#prfM .nm small{display:block;font-size:14px;opacity:.9;margin-top:3px;cursor:pointer}
#prfM .xpb{margin-top:6px;height:14px;border-radius:7px;background:#0007;overflow:hidden;position:relative}
#prfM .xpb i{display:block;height:100%;background:linear-gradient(#9dffb3,#2fc65e)}
#prfM .xpb span{position:absolute;inset:0;text-align:center;font-size:11px;line-height:14px}
#prfM .slots{display:flex;gap:10px;flex:1 1 220px;align-items:center;justify-content:center}
#prfM .slot{width:84px;height:84px;border-radius:14px;background:#4a5173;border:2px solid #2d3355;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:inset 0 3px 6px #0006}
#prfM .slot.e{color:#aab;font-size:30px}
#prfM .ph2{width:100%;font-size:20px}
#prfM .th{display:flex;gap:12px;flex-wrap:wrap;width:100%}
#prfM .thi{flex:0 0 150px;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;font-size:15px}
#prfM .thi img{width:132px;height:132px;object-fit:contain;filter:drop-shadow(0 6px 6px #0006)}
#prfM .tg{flex:1 1 260px;display:flex;flex-direction:column;gap:8px}
#prfM .tgr{display:flex;gap:6px;flex-wrap:wrap}
#prfM .tc2{position:relative;width:56px;height:62px;border-radius:9px;background:linear-gradient(#e0b04a,#b07a1e);border:2px solid #fff6;overflow:hidden}
#prfM .tc2 img{position:absolute;left:50%;top:3px;transform:translateX(-50%);height:44px;image-rendering:pixelated}
#prfM .tc2 b{position:absolute;left:0;right:0;bottom:0;text-align:center;font-size:12px;background:#0007;line-height:15px}
#prfM .tc2.off{background:linear-gradient(#777,#555)}#prfM .tc2.off img{filter:grayscale(1) brightness(.75)}
#prfM .soon{flex:1 1 200px;border:2px dashed #fff8;border-radius:10px;padding:10px;text-align:center;font-size:15px;opacity:.9}
#prfM .ah{font-size:21px;color:#2b2b30;text-shadow:none;margin:2px 4px}
#prfM .ar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;background:linear-gradient(#b6bbc9,#9aa0b3);border:2px solid #6f7690;border-radius:10px;padding:8px;color:#fff;text-shadow:0 2px 0 #0008}
#prfM .ar.ok{background:linear-gradient(#cfe9a8,#9fcf6a);border-color:#5b8a2e}
#prfM .ar .sr{font-size:26px;color:#f5c542;-webkit-text-stroke:1px #7a4b05;flex:none;width:34px;text-align:center}
#prfM .ar .tx{flex:1 1 200px;font-size:17px;line-height:1.15}#prfM .ar .tx small{display:block;font-size:13px;opacity:.95;margin-top:2px}
#prfM .ar .rw{display:flex;gap:6px;flex:none;font-size:15px}#prfM .ar .rw span{background:#0006;border-radius:6px;padding:2px 8px}
#prfM .ar .pg{flex:0 0 150px;height:22px;border-radius:6px;background:#0006;overflow:hidden;position:relative}
#prfM .ar .pg i{display:block;height:100%;background:linear-gradient(#9dffb3,#2fc65e)}#prfM .ar .pg span{position:absolute;inset:0;text-align:center;font-size:13px;line-height:22px}
#prfM .ar button{flex:0 0 120px;min-height:38px;border-radius:8px;border:2px solid #2f6a12;background:linear-gradient(#b6f26a,#4fb81c);color:#fff;font:inherit;font-size:16px;text-shadow:0 2px 0 #1b4a05;cursor:pointer}
#prfM .ar .dn{flex:0 0 120px;text-align:center;font-size:15px}
#prfM .pk{display:flex;flex-direction:column;gap:8px}
#prfM .pkr{display:flex;gap:12px;align-items:center;background:#f6f3ea;border:2px solid #bdb7a3;border-radius:12px;padding:8px;cursor:pointer;color:#222;text-shadow:none}
#prfM .pkr.on{border-color:#2fc65e;background:#eaf8e4}
#prfM .pkr .tx{flex:1;font-size:19px}#prfM .pkr .tx small{display:block;font-size:13px;color:#555;margin-top:2px}
#prfM .rar{font-size:12px;border-radius:6px;padding:1px 7px;color:#fff;margin-left:6px;vertical-align:middle}
#prfM .rar.common{background:#8e97a8}#prfM .rar.rare{background:#2f7be0}#prfM .rar.epic{background:#9b3fd8}#prfM .rar.legendary{background:#e0a30a}#prfM .rar.mythic{background:linear-gradient(90deg,#ff3d6e,#ffb02e,#4dff88,#3df0ff,#c64dff)}
#prfM .btn{border:2px solid #1b2f66;border-radius:10px;background:linear-gradient(#cfe0ff,#4d78c8);color:#fff;font:inherit;font-size:16px;padding:8px 14px;cursor:pointer;text-shadow:0 2px 0 #10204a}
body.land #prfM .lvs{width:60px;height:60px}body.land #prfM .lvs b{font-size:24px}body.land #prfM .slot{width:70px;height:70px}
`;document.head.appendChild(st)})();
/*BDGJS*/const BD_SH=['circle','hex','shield','star','diamond','oct','square','seal'],BD_RS=['grad','solid','dash','rainbow','metal'],BD_PT=['none','rays','stripes','lines','dots','checker','burst','grid'],BD_FX=['shine','sparkle','spin','glow','float','pulse','hue','rays'],BD_FF={display:"'Lilita One',Arial,sans-serif",serif:"Georgia,'Times New Roman',serif",mono:"ui-monospace,Menlo,Consolas,monospace",script:"'Brush Script MT','Segoe Script',cursive",sans:"system-ui,Arial,sans-serif"};
const BD_RFX={common:[],rare:[],epic:['shine','glow'],legendary:['spin','glow','sparkle','shine'],mythic:['spin','glow','sparkle','shine','hue','rays']};
const bdCol=(c,d)=>/^#[0-9a-fA-F]{3,8}$/.test(c||'')?c:d;
function badgeHTML(b,s){if(!b)return '';const r=BD_RFX[b.rarity]?b.rarity:'common',st=(b.style&&typeof b.style=='object')?b.style:{};
 const sh=BD_SH.includes(st.shape)?st.shape:'circle',fx=new Set(BD_RFX[r]);if(Array.isArray(st.fx))st.fx.forEach(f=>{if(BD_FX.includes(f))fx.add(f)});if(st.nofx)fx.clear();
 const cl=['bdg','r-'+r,'sh-'+sh];if(BD_RS.includes(st.ring))cl.push('rs-'+st.ring);if(BD_PT.includes(st.pat)&&st.pat!='none')cl.push('pt-'+st.pat);fx.forEach(f=>cl.push('fx-'+f));
 const tc=bdCol(st.tc,''),v=[`--s:${s||64}px`,`--c1:${bdCol(b.c1,'#8aa4ff')}`,`--c2:${bdCol(b.c2,'#3b5bdb')}`];
 if(st.c3&&bdCol(st.c3,''))v.push(`--c3:${st.c3}`);else v.push('--c3:var(--c2)');
 if(tc){v.push(`--tc:${tc}`);cl.push('tc')}
 if(BD_FF[st.font])v.push(`--ff:${BD_FF[st.font]}`);
 const fs=Math.max(.5,Math.min(1.6,+st.fs||1));if(fs!=1)v.push(`--fs:${fs}`);
 if(st.rc&&bdCol(st.rc,''))v.push(`--rc:${st.rc}`);
 const img=typeof st.img=='string'&&/^https:\/\/[^\s"'<>]+$/.test(st.img)?st.img:'';
 const inner=img?`<img src="${esc(img)}" alt="" referrerpolicy="no-referrer">`:`<b>${esc(b.icon||'⭐')}</b>`;
 const orn=st.orn?`<span class=orn>${esc(String(st.orn).slice(0,4))}</span>`:'',rib=st.rib?`<span class=rib>${esc(String(st.rib).slice(0,10))}</span>`:'';
 return `<div class="${cl.join(' ')}" style="${v.join(';')}"><s class=halo></s><i class=ring></i><i class=core>${inner}</i><em></em><u class=a>✦</u><u class=b>✦</u><u class=c>✦</u><u class=d>✦</u>${orn}${rib}</div>`}
/*ENDBDGJS*/
const RAR_N={common:'Común',rare:'Rara',epic:'Épica',legendary:'Legendaria',mythic:'Mítica'};
/* ---- estado del perfil ---- */
var PRF=null,PRV={on:0,view:'main',slot:0};
const xpBase=l=>25*l*(l-1);
function prfLvl(xp){return Math.max(1,Math.floor((1+Math.sqrt(1+4*Math.max(0,xp)/25))/2))}
const ACH_T={th3:['Más grande y mejor','Mejora el ayuntamiento al nivel 3.'],th5:['Gran ciudad','Mejora el ayuntamiento al nivel 5.'],th8:['Metrópolis','Mejora el ayuntamiento al nivel 8.'],th10:['Capital imperial','Mejora el ayuntamiento al nivel 10.'],
 tr50:['Instructor','Entrena 50 tropas.'],tr100:['Sargento','Entrena 100 tropas.'],tr500:['General de ejércitos','Entrena 500 tropas.'],
 win1:['Primera sangre','Gana 1 ataque.'],win10:['Conquistador','Gana 10 ataques.'],win50:['Señor de la guerra','Gana 50 ataques.'],
 gold20k:['Ladrón de oro','Roba 20 000 de oro.'],gold200k:['Saqueador de oro','Roba 200 000 de oro.'],elix20k:['Ladrón de elixir','Roba 20 000 de elixir.'],
 stars25:['Cazador de estrellas','Consigue 25 estrellas atacando.'],tro100:['Primeros trofeos','Alcanza 100 trofeos.'],tro500:['Escalando posiciones','Alcanza 500 trofeos.'],
 rev1:['Dulce venganza','Realiza una venganza.'],can4:['Artillería','Construye 4 cañones.'],bld25:['Aldea en crecimiento','Ten 25 edificios (sin contar muros).'],sto2:['Almacenes más grandes','Mejora un almacén de oro al nivel 2.']};
async function prfLoad(){if(typeof sb=='undefined'||!sb||!ME||OFFLINE)return;try{await flushAch();const r=await sb.rpc('profile_state');if(r.error||!r.data){window.PRFERR90=(r.error&&(r.error.message||r.error.details))||'sin datos';return}window.PRFERR90='';PRF=r.data;if(PRF.gems!=null&&typeof GS!='undefined'&&GS)S.gem=PRF.gems}catch(e){window.PRFERR90=String(e&&e.message||e)}}
function prfReady(){if(!PRF||!PRF.def)return 0;return PRF.def.filter(d=>!(PRF.c&&PRF.c[d.k])&&(PRF.m[d.m]||0)>=d.t).length}
function prfBtn(){if(OFFLINE)return'';const l=PRF?PRF.lvl:1,n=prfReady();return `<button class=prfb data-prf=1><span class=stl></span><b>${l}</b>${n?`<i class=dt>${n}</i>`:''}</button>`}
setInterval(()=>{if(mode=='v')prfLoad()},60000);setTimeout(prfLoad,7000);
/* ---- progreso que mide el cliente (tropas entrenadas) ---- */
var PENDA={};
function aRep(k,n){if(!(n>0)||OFFLINE)return;PENDA[k]=(PENDA[k]||0)+n}
async function flushAch(){if(typeof sb=='undefined'||!sb||!ME||OFFLINE)return;const p=PENDA;if(!Object.keys(p).length)return;PENDA={};try{const r=await sb.rpc('ach_report',{p});if(r.error)throw r.error}catch(e){for(const k in p)PENDA[k]=(PENDA[k]||0)+p[k]}}
setInterval(()=>{flushAch()},20000);
const mRep1=mRep;mRep=function(k,n){if(k=='train')aRep('train',n);return mRep1(k,n)};
/* ---- imagen del ayuntamiento ---- */
var _bp={};
function bldPic(t,lv){const k=t+lv;if(_bp[k])return _bp[k];
 const b=mk(t,3,3,lv),d=TY[t],s=d.s,h=d.h,ax=P(b.x,b.y+s)[0]-16,bx=P(b.x+s,b.y)[0]+16,ay=P(b.x,b.y,h+70)[1],by=P(b.x+s,b.y+s)[1]+12,sc=2,c=document.createElement('canvas');c.width=Math.ceil((bx-ax)*sc);c.height=Math.ceil((by-ay)*sc);
 const x=c.getContext('2d'),sg=g,k0=KS,cx=cam.x,cy=cam.y,cz=cam.z;g=x;KS=1;cam.z=sc;cam.x=-ax*sc;cam.y=-ay*sc;g.setTransform(sc,0,0,sc,-ax*sc,-ay*sc);g.textAlign='center';g.textBaseline='middle';
 try{drB(b)}catch(e){}finally{g=sg;KS=k0;cam.x=cx;cam.y=cy;cam.z=cz}
 return _bp[k]=c.toDataURL()}
/* ---- menú ---- */
function prfView(uid){if(OFFLINE||typeof sb=='undefined'||!sb||!uid)return;PRV.on=1;PRV.view='other';PRV.o=null;PRV.ou=uid;
 sb.rpc('profile_view',{p_player:uid}).then(r=>{if(PRV.ou!==uid)return;PRV.o=(r.error||!r.data)?'err':r.data;ui()}).catch(()=>{PRV.o='err';ui()});ui()}
function prfOther(){const o=PRV.o;let body;
 if(!o)body='<div class=sm style="color:#555;text-align:center;padding:30px">Cargando…</div>';
 else if(o=='err')body='<div class=sm style="color:#555;text-align:center;padding:30px">No se pudo cargar el perfil.</div>';
 else{const l=o.lvl||1,a=xpBase(l),b=xpBase(l+1),pc=Math.max(0,Math.min(100,((o.xp||0)-a)/(b-a)*100)),rl=o.rax||0;
  const trs=Object.keys(TR).map(k=>{const on=rl>0&&rl>=(TU[k]||1);return `<div class="tc2${on?'':' off'}"><img src="${tIcon(k)}"><b>${on?'✔':'🔒 '+(TU[k]||1)}</b></div>`}).join('');
  const sl=[0,1,2].map(i=>{const x=(o.shown||[])[i];return `<div class="slot${x?'':' e'}" style="cursor:default">${x?badgeHTML(x,64):''}</div>`}).join('');
  body=`<div class=pc><div class=pid><div class=lvs><span class=st></span><b>${l}</b></div><div style="flex:1;min-width:0"><div class=nm>${esc(o.name||'Jugador')}<small>${esc(o.pid||'')}</small></div><div class=xpb><i style="width:${pc}%"></i><span>${(o.xp||0)-a} / ${b-a} XP</span></div><div style="margin-top:4px;font-size:14px">${leagueOf(o.trophies)[2]} ${leagueOf(o.trophies)[1]} · 🏆 ${o.trophies||0} · ⚔️ ${o.wins||0} victorias</div></div></div><div class=slots>${sl}</div></div>
 <div class=pc><div class=th><div class=thi><img src="${bldPic('hall',Math.max(1,o.hall||1))}"><div>Ayuntamiento nivel ${o.hall||1}</div></div><div class=tg><div class=ph2>Tropas</div><div class=tgr>${trs}</div><div style="display:flex;gap:10px;flex-wrap:wrap"><div class=soon>Héroes<br><small>En desarrollo</small></div><div class=soon>Hechizos<br><small>En desarrollo</small></div></div></div></div></div>`}
 return `<div class=pw><div class=ph><button class=pt>Perfil de jugador</button><button class=px data-px=1>✕</button></div><div class=pb>${body}</div></div>`}
function prfOpen(){if(OFFLINE||typeof sb=='undefined'||!sb){note('El perfil está disponible en el modo online.');return}PRV.on=1;PRV.view='main';prfLoad().then(()=>{ui()});ui()}
function prfSlots(){const sh=(PRF&&PRF.shown)||[],own=(PRF&&PRF.owned)||[];return [0,1,2].map(i=>{const b=own.find(o=>o.id==sh[i]);return `<div class="slot${b?'':' e'}" data-pslot=${i}>${b?badgeHTML(b,64):'＋'}</div>`}).join('')}
function prfMain(){const P0=PRF,xp=P0?P0.xp:0,l=prfLvl(xp),a=xpBase(l),b=xpBase(l+1),pc=Math.max(0,Math.min(100,(xp-a)/(b-a)*100));
 const hl=(S.b.filter(x=>x.t=='hall').map(x=>x.lv)[0])||1,rl=typeof rxLv=='function'?rxLv():1,hasR=S.b.some(x=>x.t=='rax'&&!x.ruin&&!x.nb);
 const trs=Object.keys(TR).map(k=>{const on=hasR&&rl>=(TU[k]||1);return `<div class="tc2${on?'':' off'}"><img src="${tIcon(k)}"><b>${on?'Nv '+tlv(k):'🔒 '+(TU[k]||1)}</b></div>`}).join('');
 const ach=P0&&P0.def?P0.def.map(d=>{const t=ACH_T[d.k]||[d.k,''],v=Math.min(d.t,P0.m[d.m]||0),done=P0.c&&P0.c[d.k],rdy=!done&&v>=d.t;
  return `<div class="ar${done?' ok':''}"><span class=sr>${done?'★':rdy?'★':'☆'}</span><div class=tx>${esc(t[0])}<small>${esc(t[1])}</small></div><div class=rw><span>✨ ${d.xp}</span><span>💎 ${d.g}</span></div>${done?'<div class=dn>¡Reclamado!</div>':rdy?`<button data-pcl=${d.k}>Reclamar</button>`:`<div class=pg><i style="width:${Math.round(v/d.t*100)}%"></i><span>${v.toLocaleString('es')}/${d.t.toLocaleString('es')}</span></div>`}</div>`}).join(''):'<div class=sm style="color:#444">Cargando logros…</div>';
 return `<div class=pw><div class=ph><button class=pt>Mi perfil</button><button class=px data-px=1>✕</button></div><div class=pb>
 <div class=pc><div class=pid><div class=lvs><span class=st></span><b>${l}</b></div><div style="flex:1;min-width:0"><div class=nm>${esc((P0&&P0.name)||S.name||'Jugador')}<span data-rn89=1 class=rnb89>✎ Editar</span><small data-pcp=1>${P0?esc(P0.pid):''} 📋</small></div><div style="font-size:15px;margin-top:2px">${leagueOf(S.tr)[2]} ${leagueOf(S.tr)[1]} · ${S.tr|0} 🏆</div><div class=xpb><i style="width:${pc}%"></i><span>${xp-a} / ${b-a} XP</span></div></div></div><div class=slots>${prfSlots()}</div></div>
 <div class=pc><div class=th><div class=thi><img src="${bldPic('hall',Math.max(1,hl))}"><div>Ayuntamiento nivel ${hl}</div></div><div class=tg><div class=ph2>Tropas</div><div class=tgr>${trs}</div><div style="display:flex;gap:10px;flex-wrap:wrap"><div class=soon>Héroes<br><small>En desarrollo</small></div><div class=soon>Hechizos<br><small>En desarrollo</small></div></div></div></div></div>
 <div class=ah>🗡️ Logros de la aldea</div>${ach}</div></div>`}
function prfPick(){const own=(PRF&&PRF.owned)||[],sh=(PRF&&PRF.shown)||[],cur=sh[PRV.slot];
 const rows=own.length?own.map(b=>`<div class="pkr${sh.includes(b.id)?' on':''}" data-ppk=${esc(b.id)}>${badgeHTML(b,72)}<div class=tx>${esc(b.name)}<span class="rar ${b.rarity}">${RAR_N[b.rarity]||b.rarity}</span><small>${esc(b.descr||'')}</small></div>${sh.includes(b.id)?'✔':''}</div>`).join(''):'<div class=sm style="color:#555;text-align:center;padding:20px">Todavía no tienes insignias.</div>';
 return `<div class=pw><div class=ph><button class=pt>Insignias · espacio ${PRV.slot+1}</button><button class=px data-px=1>✕</button></div><div class=pb><div class=pk>${rows}</div><div style="display:flex;gap:10px"><button class=btn data-pback=1>‹ Volver</button>${cur?'<button class=btn data-prm=1>Quitar del espacio</button>':''}</div></div></div>`}
var _sPrf='';
function prfDraw(){let el=document.getElementById('prfM');if(!PRV)return;
 if(!el){el=document.createElement('div');el.id='prfM';document.body.appendChild(el);el.addEventListener('click',prfClick)}
 if(!PRV.on||mode!='v'||!S){if(el.style.display!='none'){el.style.display='none';_sPrf=''}if(PRV.on&&mode!='v')PRV.on=0;return}
 const h=PRV.view=='other'?prfOther():PRV.view=='pick'?prfPick():prfMain();
 if(h!==_sPrf){const sc=el.querySelector('.pb'),y=sc?sc.scrollTop:0;el.innerHTML=h;_sPrf=h;const n=el.querySelector('.pb');if(n)n.scrollTop=y}
 el.style.display='flex'}
async function prfSetBadges(ids){try{const r=await sb.rpc('set_badges',{p_ids:ids});if(!r.error&&PRF)PRF.shown=r.data||[]}catch(e){}ui()}
function prfClick(e){const t=e.target;if(t.id==='prfM'){PRV.on=0;snd('ui');ui();return}
 const b=t.closest('[data-px],[data-pslot],[data-ppk],[data-pback],[data-prm],[data-pcl],[data-pcp]');if(!b)return;const d=b.dataset;
 if(d.px!=null){PRV.on=0;snd('ui');ui()}
 else if(PRV.view=='other'&&(d.pslot!=null||d.pcp!=null))return;
 else if(d.pslot!=null){PRV.slot=+d.pslot;PRV.view='pick';snd('open');ui()}
 else if(d.pback!=null){PRV.view='main';snd('ui');ui()}
 else if(d.ppk){const sh=((PRF&&PRF.shown)||[]).filter(x=>x!=d.ppk);sh.splice(Math.min(PRV.slot,sh.length),0,d.ppk);PRF.shown=sh.slice(0,3);PRV.view='main';snd('open');prfSetBadges(PRF.shown)}
 else if(d.prm!=null){const sh=((PRF&&PRF.shown)||[]).slice();sh.splice(PRV.slot,1);PRF.shown=sh;PRV.view='main';prfSetBadges(sh)}
 else if(d.pcl){b.disabled=true;sb.rpc('ach_claim',{p_key:d.pcl}).then(r=>{if(r.error||!r.data){snd('deny');return}PRF=r.data;if(typeof GS!='undefined'&&GS)S.gem=PRF.gems;snd(990);ui()}).catch(()=>{snd('deny')})}
 else if(d.pcp!=null){try{navigator.clipboard.writeText(PRF.pid);flash('ID copiado: <b>'+esc(PRF.pid)+'</b><br><br><button id=ok>Cerrar</button>');document.getElementById('ok').onclick=closeMsg}catch(er){}}}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-prf]');if(b){e.stopPropagation();prfOpen()}},true);

/* ================= v73: beta cerrada (matchmaking, comentarios, errores, estado del servidor) ================= */
(function(){const st=document.createElement('style');st.textContent=`
#authx{margin-top:8px}#ac{text-transform:uppercase;letter-spacing:1px}
#mmX{position:fixed;inset:0;z-index:12;display:none;align-items:center;justify-content:center;background:rgba(5,10,20,.7);padding:calc(8px + env(safe-area-inset-top,0px)) 8px calc(8px + env(safe-area-inset-bottom,0px));font-family:'Lilita One',Arial,sans-serif}
#mmX .mc{width:min(440px,100%);max-height:100%;overflow:auto;border-radius:18px;background:linear-gradient(#f6f3ea,#e3dcc6);border:4px solid #3a2a14;box-shadow:0 8px 30px #000a;color:#222;padding:12px;text-align:center}
#mmX .mt{font-size:22px;color:#7a2a12;margin-bottom:6px}#mmX .mn{font-size:30px;color:#1d2b52;line-height:1.1}#mmX .ml{font-size:15px;color:#555;margin:2px 0 8px}
#mmX .mg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:8px 0}#mmX .mg div{background:#fff9;border:2px solid #bdb7a3;border-radius:10px;padding:6px;font-size:18px}#mmX .mg small{display:block;font-size:12px;color:#666}
#mmX .mr{background:#fff9;border:2px solid #bdb7a3;border-radius:10px;padding:8px;font:13px/1.5 Arial,sans-serif;text-align:left;margin:6px 0}
#mmX .mb{display:flex;gap:8px;margin-top:8px}#mmX .mb button{flex:1;min-height:52px;font-size:20px}
#mmX .ms{font-size:12px;color:#777;margin-top:6px;font-family:Arial,sans-serif}
#fbM,#bgate{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(5,10,20,.78);padding:12px;font-family:'Lilita One',Arial,sans-serif}
#fbM{z-index:14}#bgate{z-index:60}
#fbM .fc,#bgate .fc{width:min(440px,100%);max-height:100%;overflow:auto;border-radius:18px;background:linear-gradient(#f6f3ea,#e3dcc6);border:4px solid #3a2a14;color:#222;padding:14px;text-align:center}
#fbM textarea{width:100%;min-height:110px;border-radius:10px;border:2px solid #bdb7a3;padding:8px;font:15px Arial,sans-serif;resize:vertical;box-sizing:border-box}
#fbM .fk{display:flex;gap:6px;margin:8px 0}#fbM .fk button{flex:1;min-height:44px;font-size:16px;opacity:.65}#fbM .fk button.on{opacity:1;outline:3px solid #2fc65e}
#fbM .fh{font:13px/1.4 Arial,sans-serif;text-align:left;background:#fff9;border:2px solid #bdb7a3;border-radius:10px;padding:6px 8px;margin-top:6px}#fbM .fh b{color:#1d4ed8}
#bgate .fc h2{margin:0 0 8px;font-weight:400;font-size:26px;color:#7a2a12}#bgate .fc p{font:16px/1.4 Arial,sans-serif;margin:6px 0 12px}
.betapill{display:inline-block;margin:4px 0;padding:3px 10px;border-radius:12px;background:#7a2a12;color:#fff;font:700 12px Arial}
`;document.head.appendChild(st)})();
var PENDCODE=null;
const SEARCH_COST=[10,50,75,110,170,250,330,450,600,750];
const LEAGUES=[[0,'Sin liga','⚪'],[50,'Bronce','🥉'],[120,'Plata','🥈'],[220,'Oro','🥇'],[350,'Cristal','💠'],[520,'Maestra','🔮'],[750,'Campeona','🏆'],[1000,'Titán','⚡'],[1400,'Leyenda','👑']];
function leagueOf(tr){let r=LEAGUES[0];for(const l of LEAGUES)if((tr|0)>=l[0])r=l;return r}
var GST=null,MM={on:0,seen:[],cur:null,load:0,msg:'',cost:0,paid:0,warn:0},FBV={on:0,kind:'bug',list:null,busy:0,msg:''};
const myHall=()=>Math.max(1,...(S&&S.b?S.b.filter(x=>x.t=='hall').map(x=>x.lv):[1]));
/* --- interceptar errores de mantenimiento / fin de beta en cualquier llamada al servidor --- */
function sbHook(){if(!sb||sb._hk)return;sb._hk=1;const o=sb.rpc.bind(sb);sb.rpc=function(n,a,opt){const p=o(n,a,opt);return Promise.resolve(p).then(r=>{try{if(r&&r.error&&/MANTENIMIENTO|BETA_TERMINADA/.test(r.error.message||''))bgate(r.error.message)}catch(e){}return r})}}
function bgate(m){let t='🛠️ Mantenimiento',x=String(m||'');if(/^BETA_TERMINADA/.test(x)){t='🏁 Beta terminada';x=x.replace(/^BETA_TERMINADA:\s*/,'')}else x=x.replace(/^MANTENIMIENTO:\s*/,'');
 let el=document.getElementById('bgate');if(!el){el=document.createElement('div');el.id='bgate';document.body.appendChild(el);el.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.bg=='re'){gstLoad(true)}else if(b.dataset.bg=='out'){el.style.display='none';logout()}else if(b.dataset.bg=='adm'){el.style.display='none'}})}
 el.innerHTML=`<div class=fc><h2>${t}</h2><p>${esc(x)}</p><div class=row><button data-bg=re>🔄 Reintentar</button>${ME?'<button data-bg=out>🚪 Cerrar sesión</button>':'<button data-bg=adm>🔑 Soy administrador</button>'}</div></div>`;el.style.display='flex'}
async function gstLoad(manual){if(OFFLINE||typeof sb=='undefined'||!sb)return;sbHook();
 try{const r=await sb.rpc('game_status');if(r.error||!r.data)return;GST=r.data;GST.t0=performance.now();gstApply(manual)}catch(e){}}
function betaLeftMs(){if(!GST||!GST.beta_end)return null;return Date.parse(GST.beta_end)-(GST.now+(performance.now()-GST.t0))}
function betaTxt(){const ms=betaLeftMs();if(ms==null)return '';if(ms<=0)return 'La beta ha terminado';const h=ms/36e5,d=Math.floor(h/24);return 'Beta cerrada · termina en '+(d>0?d+' d '+Math.floor(h-d*24)+' h':Math.max(1,Math.floor(h))+' h')}
function gstApply(manual){if(!GST)return;const adm=!!GST.admin,el=document.getElementById('bgate');
 if(GST.maintenance&&!adm){bgate('MANTENIMIENTO: '+(GST.msg||''));return}
 const ms=betaLeftMs();if(ms!=null&&ms<=0&&!adm){bgate('BETA_TERMINADA: La beta cerrada ha terminado. ¡Gracias por jugar!');return}
 if(el)el.style.display='none';
 const ab=document.getElementById('abeta');if(ab){const t=betaTxt();ab.innerHTML=t?'<span class=betapill>'+esc(t)+'</span>':''}
 try{if(GST.motd&&ME&&localStorage.getItem('ccmotd')!==GST.motd){localStorage.setItem('ccmotd',GST.motd);note('<b>📢 Anuncio</b><br><br>'+esc(GST.motd))}}catch(e){}}
setInterval(()=>{if(!OFFLINE&&sb)gstLoad()},180000);
/* --- matchmaking estilo Clash of Clans: Buscar → Siguiente (gratis) → Atacar --- */
function mmCost(){return SEARCH_COST[Math.min(SEARCH_COST.length,myHall())-1]||10}
async function findReal(){if(!sb||OFFLINE)return;
 if(typeof used=='function'&&!(used(S.army)||S.army.king)){MM.on=1;MM.cur=null;MM.load=0;MM.msg='Necesitas tropas para atacar. Entrena tu ejército primero.';MM.paid=0;mmDraw();return}
 const c=mmCost();if((S.g|0)<c){MM.on=1;MM.cur=null;MM.load=0;MM.msg='Necesitas '+c+' 🪙 para buscar una batalla.';MM.paid=0;mmDraw();return}
 S.g-=c;save();MM={on:1,seen:[],cur:null,load:1,msg:'',cost:c,paid:c,warn:0};mmDraw();mmNext()}
async function mmNext(){if(!sb)return;MM.load=1;MM.cur=null;MM.msg='';mmDraw();
 try{const r=await sb.rpc('find_match',{p_seen:MM.seen});MM.load=0;
  if(r.error){MM.msg=/Demasiadas/.test(r.error.message||'')?'Has buscado demasiado rápido. Espera un momento.':(/MANTENIMIENTO|BETA_TERMINADA/.test(r.error.message||'')?'':(r.error.message||'Error de conexión'));if(MM.paid&&!MM.seen.length){S.g=Math.min(cap.g(),S.g+MM.paid);MM.paid=0;save()}mmDraw();return}
  if(!r.data){MM.msg=MM.seen.length?'No hay más rivales disponibles por ahora. Inténtalo de nuevo en unos minutos.':'No hay rivales disponibles ahora mismo. Se te devolvió el oro de la búsqueda.';if(MM.paid&&!MM.seen.length){S.g=Math.min(cap.g(),S.g+MM.paid);MM.paid=0;save()}mmDraw();return}
  MM.cur=r.data;MM.seen.push(r.data.id);mmDraw()}catch(e){MM.load=0;MM.msg='Error de conexión';mmDraw()}}
function mmDraw(){let el=document.getElementById('mmX');if(!el){el=document.createElement('div');el.id='mmX';document.body.appendChild(el);el.addEventListener('click',mmClick)}
 if(!MM.on){el.style.display='none';return}
 const d=MM.cur,sh=(S.shield||0)>TNOW();let h;
 if(MM.load)h=`<div class=mt>🔍 Buscando rival…</div><div class=ml>Comparando trofeos y nivel de ayuntamiento</div><div class=mb><button class=atk data-mm=close>✕ Cancelar</button></div>`;
 else if(!d)h=`<div class=mt>⚔ Batalla</div><div class=ml>${esc(MM.msg||'')}</div><div class=mb><button data-mm=close>Cerrar</button>${MM.seen.length?'<button class=okb data-mm=next>🔄 Reintentar</button>':''}</div>`;
 else{const lg=leagueOf(d.trophies),of=d.offer||[0,0,0,0],lo=(d.loot&&d.loot.f)||1;
  h=`<div class=mt>⚔ ¡Rival encontrado!</div><div class=mn>${esc(d.name||'Jugador')}</div><div class=ml>${lg[2]} ${lg[1]} · ${d.trophies} ${ICO('ranking','🏆')} · Ayuntamiento nv ${d.hall||1}</div>
  <div class=mg><div>🪙 ${d.gold|0}<small>Oro disponible</small></div><div>💧 ${d.elixir|0}<small>Elixir disponible</small></div><div>🏆 +${of[2]}<small>3 estrellas</small></div><div>🏆 −${of[3]}<small>Si pierdes</small></div></div>
  <div class=mr>${scoutRep(d)}</div>
  <div class=mb><button class=atk data-mm=go ${(used(S.army)||S.army.king)?'':'disabled'}>${sh?(MM.warn?'⚠ Sí, romper mi escudo':'⚔ Atacar (rompe tu escudo)'):'⚔ Atacar'}</button><button class=okb data-mm=next>➡ Siguiente</button></div>
  <div class=ms>${lo<1?'Botín reducido ×'+lo.toFixed(2)+' por diferencia de ayuntamiento · ':''}Siguiente es gratis · rivales vistos: ${MM.seen.length}</div><div class=mb><button data-mm=close>✕ Cerrar</button></div>`}
 el.innerHTML=`<div class=mc>${h}</div>`;el.style.display='flex'}
function mmClick(e){const b=e.target.closest('button');if(!b||b.disabled)return;const a=b.dataset.mm;
 if(a=='close'){MM.on=0;mmDraw();return}
 if(a=='next'){mmNext();return}
 if(a=='go'&&MM.cur){const sh=(S.shield||0)>TNOW();if(sh&&!MM.warn){MM.warn=1;mmDraw();setTimeout(()=>{MM.warn=0;try{if(MM.on)mmDraw()}catch(e){}},4000);return}
  const d=MM.cur;MM.on=0;mmDraw();startReal(d.id,{b:d.base,g:d.gold,e:d.elixir,loot:d.loot,offer:d.offer})}}
/* ranking por función (players ya no es legible) */
async function ranking(){if(!sb)return;try{const r=await sb.rpc('leaderboard',{p_n:20});if(r.error)throw r.error;const t=(r.data&&r.data.top)||[];
 note('<b>Ranking</b><br>'+t.map((d,i)=>(i+1)+'. '+esc(d.name||'Jugador')+(d.id===ME?' (tú)':'')+' · '+d.trophies+' '+ICO('ranking','🏆')).join('<br>')+'<br><br>Tu puesto: #'+((r.data.me&&r.data.me.rank)||'?')+' · '+leagueOf(r.data.me&&r.data.me.trophies)[2]+' '+leagueOf(r.data.me&&r.data.me.trophies)[1])}catch(e){note('Error de conexión')}}
/* --- comentarios (feedback) --- */
function fbInfo(){let ua='';try{ua=(navigator.userAgent||'').slice(0,120)}catch(e){}return{ua,w:innerWidth,h:innerHeight,dpr:window.devicePixelRatio||1,gfx:(typeof GFX!='undefined'?GFX:''),mode:typeof mode!='undefined'?mode:'',hall:myHall(),tr:S&&S.tr,lvl:(typeof PRF!='undefined'&&PRF)?PRF.lvl:null}}
function fbDraw(){let el=document.getElementById('fbM');if(!el){el=document.createElement('div');el.id='fbM';document.body.appendChild(el);el.addEventListener('click',fbClick);el.addEventListener('input',e=>{if(e.target.id=='fbt')FBV.txt=e.target.value})}
 if(!FBV.on){el.style.display='none';return}
 const K={bug:'🐞 Error',idea:'💡 Idea',otro:'💬 Otro'},L=FBV.list;
 el.innerHTML=`<div class=fc><div style="font-size:21px;color:#ffb020;font-family:Lilita One,system-ui,sans-serif;letter-spacing:.5px">💬 Comentarios de la beta</div><div style="font-size:14px;color:#8a97b4;margin:4px 0">Cuéntanos qué falló, qué te gustó o qué falta. Lo leemos todos.</div>
 <div class=fk>${Object.keys(K).map(k=>`<button class="${FBV.kind==k?'on':''}" data-fb=k_${k}>${K[k]}</button>`).join('')}</div>
 <textarea id=fbt maxlength=1000 placeholder="Escribe aquí…">${esc(FBV.txt||'')}</textarea>
 <div style="font:13px Arial;color:${FBV.err?'#ff7a88':'#35e08a'};min-height:18px">${esc(FBV.msg||'')}</div>
 <div class=row style="margin-top:6px"><button class=okb data-fb=send ${FBV.busy?'disabled':''}>${FBV.busy?'Enviando…':'Enviar'}</button><button data-fb=close>Cerrar</button></div>
 ${L&&L.length?'<div style="font-size:16px;margin-top:10px;color:#3de0ff">Tus mensajes</div>'+L.map(x=>`<div class=fh>${esc(K[x.kind]||'')} · <i>${esc(x.status)}</i><br>${esc(x.msg)}${x.reply?'<br><b>Respuesta del equipo:</b> '+esc(x.reply):''}</div>`).join(''):''}</div>`;
 el.style.display='flex'}
async function fbLoad(){try{const r=await sb.rpc('my_feedback');if(!r.error&&r.data){FBV.list=r.data;if(FBV.on)fbDraw()}}catch(e){}}
async function fbClick(e){const t=e.target;if(t.id=='fbM'){FBV.on=0;fbDraw();return}const b=t.closest('button');if(!b)return;const a=b.dataset.fb;if(!a)return;
 if(a=='close'){FBV.on=0;fbDraw();return}
 if(a.startsWith('k_')){FBV.kind=a.slice(2);fbDraw();return}
 if(a=='send'){const m=(FBV.txt||'').trim();if(m.length<5){FBV.err=1;FBV.msg='Escribe un poco más (mínimo 5 letras).';fbDraw();return}
  FBV.busy=1;FBV.msg='';fbDraw();
  try{const r=await sb.rpc('send_feedback',{p_kind:FBV.kind,p_msg:m,p_build:BUILD,p_info:fbInfo()});FBV.busy=0;
   if(r.error){FBV.err=1;FBV.msg=/Demasiadas/.test(r.error.message||'')?'Has enviado muchos mensajes hoy. ¡Gracias!':(r.error.message||'No se pudo enviar');fbDraw();return}
   FBV.err=0;FBV.msg='¡Enviado! Gracias por ayudarnos a mejorar.';FBV.txt='';fbDraw();fbLoad()}catch(er){FBV.busy=0;FBV.err=1;FBV.msg='Error de conexión';fbDraw()}}}
function fbOpen(){if(OFFLINE||!sb){note('Los comentarios solo funcionan en el modo online.');return}FBV.on=1;FBV.msg='';FBV.err=0;fbDraw();fbLoad()}
const menuDraw73=menuDraw;menuDraw=function(){menuDraw73();try{if(OFFLINE||!ONL)return;const bx=menuEl.querySelector('.mbox'),hn=bx&&bx.querySelector('.hint');if(!bx)return;
 const b=document.createElement('button');b.dataset.m2='fb';b.textContent='💬 Enviar comentarios';const bt=betaTxt(),dv=document.createElement('div');if(bt){dv.className='hint';dv.innerHTML='<span class=betapill>'+esc(bt)+'</span>'}
 if(hn){bx.insertBefore(b,hn);if(bt)bx.insertBefore(dv,hn)}else{bx.appendChild(b);if(bt)bx.appendChild(dv)}}catch(e){}};
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-m2=fb]');if(b){e.stopPropagation();menuEl.style.display='none';fbOpen()}},true);
/* --- registro de errores del cliente --- */
var ERRN=0,ERRS={};
function logErr(msg,stack){try{if(OFFLINE||!sb||!ME||ERRN>=8)return;msg=String(msg||'');if(!msg||/ResizeObserver|Script error|Failed to fetch|NetworkError|Load failed|AbortError|supabase|Auth session/i.test(msg))return;
 const k=msg.slice(0,80);if(ERRS[k])return;ERRS[k]=1;ERRN++;sb.rpc('log_error',{p_msg:msg,p_stack:String(stack||''),p_build:BUILD,p_info:fbInfo()}).catch(()=>{})}catch(e){}}
addEventListener('error',e=>logErr(e.message,e.error&&e.error.stack));addEventListener('unhandledrejection',e=>{const r=e.reason;logErr(r&&r.message||r,r&&r.stack)});
{const ce=console.error;console.error=function(){try{const a=arguments[0];if(a instanceof Error)logErr(a.message,a.stack)}catch(e){}return ce.apply(console,arguments)}}
/* --- arranque: estado del servidor --- */
setTimeout(()=>{if(!OFFLINE)gstLoad()},1500);

/* sw */
try{if('serviceWorker' in navigator&&/^https?:/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{})}catch(e){}
/* ===== v74 JUICE: pantalla de resultado animada, confeti, XP, mejoras ===== */
(function(){
const RM=(()=>{try{return matchMedia('(prefers-reduced-motion:reduce)').matches}catch(e){return false}})();
const st=document.createElement('style');st.textContent=`
#msg>div.vres{position:relative;overflow:hidden;min-width:250px;animation:vpop .45s cubic-bezier(.2,1.4,.4,1)}
@keyframes vpop{0%{transform:scale(.4);opacity:0}100%{transform:scale(1);opacity:1}}
.vres .vti{display:inline-block;font-size:1.9rem!important;letter-spacing:1px;text-shadow:0 3px 0 #0007,0 0 18px currentColor;animation:vti .7s .1s both cubic-bezier(.2,1.6,.4,1)}
@keyframes vti{0%{transform:scale(0) rotate(-12deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}
.vst{border:0!important;background:none!important;padding:0!important;border-radius:0!important;display:flex;justify-content:center;align-items:flex-end;gap:6px;height:76px;margin:6px 0 2px}
.vst .vs{display:block;width:50px;height:50px;position:relative;background:#2a1a0a;clip-path:polygon(50% 0,63% 33%,98% 36%,71% 58%,80% 92%,50% 73%,20% 92%,29% 58%,2% 36%,37% 33%);box-shadow:inset 0 0 0 99px #0004}
.vst .vs:nth-child(2){width:64px;height:64px;margin-bottom:10px}
.vst .vs.on{background:linear-gradient(160deg,#fff3a0,#f5c542 45%,#d58a00);box-shadow:none;animation:vstar .75s cubic-bezier(.2,1.5,.35,1) both;filter:drop-shadow(0 0 6px #ffd24a)}
.vst .vs.on::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,#fff9 50%,transparent 65%);transform:translateX(-120%);animation:vshine 1.1s 1.3s 2}
@keyframes vstar{0%{transform:scale(4) rotate(-200deg);opacity:0}55%{transform:scale(.8) rotate(12deg);opacity:1}75%{transform:scale(1.18) rotate(-6deg)}100%{transform:scale(1) rotate(0)}}
@keyframes vshine{to{transform:translateX(120%)}}
.vres .cu{color:#ffe08a;font-variant-numeric:tabular-nums}
.vres .vrow{opacity:0;animation:vrow .4s both}
@keyframes vrow{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.vres #ok{animation:vbtn 1.4s 2.2s infinite}
@keyframes vbtn{0%,100%{transform:scale(1)}50%{transform:scale(1.06);filter:brightness(1.15)}}
.vconf{background:transparent!important;border:0!important;position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2}
#msg.vshk>div{animation:vshk .5s both}
@keyframes vshk{0%,100%{transform:translate(0)}15%{transform:translate(-7px,3px)}30%{transform:translate(6px,-4px)}45%{transform:translate(-5px,-2px)}60%{transform:translate(4px,3px)}80%{transform:translate(-2px,1px)}}
#msg.vlose>div{animation:vlose .6s both}
@keyframes vlose{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.03)}100%{transform:scale(1);opacity:1}}
.vfx{position:fixed;pointer-events:none;z-index:30;font-weight:bold;white-space:nowrap}
.vsp{position:fixed;pointer-events:none;z-index:29;width:8px;height:8px;border-radius:50%;background:radial-gradient(#fff,#ffd24a 60%,transparent 70%)}
#vxp{position:fixed;left:50%;top:14%;transform:translateX(-50%);z-index:31;pointer-events:none;text-align:center}
.vxp1{font-size:15px;color:#c9a6ff;font-weight:bold;text-shadow:0 2px 0 #000a,0 0 10px #8a4dff;animation:vxp 1.8s both}
@keyframes vxp{0%{opacity:0;transform:translateY(14px) scale(.6)}15%{opacity:1;transform:scale(1.15)}30%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:translateY(-22px)}}
.vlvl{font-size:30px;color:#ffe08a;font-weight:bold;text-shadow:0 3px 0 #000,0 0 22px #ffb300;animation:vlvl 2.6s both}
.vlvl small{display:block;font-size:13px;color:#fff}
@keyframes vlvl{0%{opacity:0;transform:scale(.2) rotate(-8deg)}15%{opacity:1;transform:scale(1.25)}25%{transform:scale(1)}85%{opacity:1}100%{opacity:0;transform:translateY(-30px) scale(1.05)}}
@media (prefers-reduced-motion:reduce){.vst .vs.on,.vres .vti,.vres #ok,.vres .vrow,#msg>div.vres{animation-duration:.01s!important;animation-delay:0s!important}}
`;document.head.appendChild(st);
const lowFx=()=>{try{return GFX=='low'}catch(e){return false}};
const el=(c,h)=>{const d=document.createElement('div');d.className=c;if(h!=null)d.innerHTML=h;document.body.appendChild(d);return d};
/* sonido: notas sencillas (no tocan el RNG de la simulación: snd ya lo protege) */
const T=(f,d,t,v,t0)=>{try{if(typeof MUTE!='undefined'&&MUTE)return;if(typeof AC=='undefined'||!AC)return;tone(f,d,t||'triangle',v||.1,t0||0)}catch(e){}};
function chime(i){const b=[523,659,784][i]||784;T(b,.25,'triangle',.13);T(b*2,.3,'sine',.07,.04)}
function fanfare(){T(523,.18,'triangle',.12);T(659,.18,'triangle',.12,.12);T(784,.18,'triangle',.12,.24);T(1047,.5,'triangle',.14,.36);T(1319,.6,'sine',.08,.4)}
function sadsnd(){T(330,.3,'triangle',.12);T(262,.35,'triangle',.12,.25);T(196,.6,'triangle',.12,.5)}
/* partículas DOM */
function spark(x,y,n,col){if(RM||!BRFX.spark)return;n=lowFx()?Math.ceil(n/2):n;for(let i=0;i<n;i++){const p=el('vsp');const a=Math.random()*6.283,d=30+Math.random()*60,s=.5+Math.random()*.9;p.style.left=x+'px';p.style.top=y+'px';if(col)p.style.background=`radial-gradient(#fff,${col} 60%,transparent 70%)`;
 p.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*d-4}px,${Math.sin(a)*d-4}px) scale(0)`,opacity:0}],{duration:600+Math.random()*500,easing:'cubic-bezier(.1,.7,.3,1)'}).onfinish=()=>p.remove()}}
function ftext(x,y,txt,col,sz){const f=el('vfx',txt);f.style.cssText+=`left:${x}px;top:${y}px;color:${col||'#ffe08a'};font-size:${sz||16}px;text-shadow:0 2px 0 #000b`;
 f.animate([{transform:'translate(-50%,0) scale(.5)',opacity:0},{transform:'translate(-50%,-14px) scale(1.2)',opacity:1,offset:.2},{transform:'translate(-50%,-50px) scale(1)',opacity:0}],{duration:1400,easing:'ease-out'}).onfinish=()=>f.remove()}
/* confeti en canvas */
function confetti(box,big){if(RM||!BRFX.conf)return;const cvs=document.createElement('canvas');cvs.className='vconf';box.appendChild(cvs);const r=box.getBoundingClientRect();cvs.width=r.width;cvs.height=r.height;const c=cvs.getContext('2d');
 const N=lowFx()?35:big?110:70,col=['#ffd24a','#ff5d73','#5fd0ff','#8fe36f','#c88bff','#fff'],P=[];
 for(let i=0;i<N;i++)P.push({x:r.width/2+(Math.random()-.5)*60,y:r.height*.3,vx:(Math.random()-.5)*9,vy:-Math.random()*9-3,w:5+Math.random()*5,h:3+Math.random()*4,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:col[i%6]});
 let t0=performance.now(),last=t0;(function f(n){const dt=Math.min(40,n-last)/16;last=n;c.clearRect(0,0,cvs.width,cvs.height);let alive=0;for(const p of P){p.vy+=.28*dt;p.vx*=.995;p.x+=p.vx*dt;p.y+=p.vy*dt;p.r+=p.vr*dt;if(p.y<r.height+20){alive++;c.save();c.translate(p.x,p.y);c.rotate(p.r);c.fillStyle=p.c;c.globalAlpha=Math.max(0,1-(n-t0)/3800);c.fillRect(-p.w/2,-p.h/2,p.w,p.h);c.restore()}}
  if(alive&&n-t0<3800&&cvs.isConnected)requestAnimationFrame(f);else cvs.remove()})(t0)}
/* contador */
function countUp(e,dur,delay){const v=+e.dataset.v||0;if(RM||!v){e.textContent=e.dataset.p?(v>0?'+':'')+v:v;return}let s=null;const pre=e.dataset.p;e.textContent=pre?'+0':'0';setTimeout(()=>{(function f(n){if(s==null)s=n;const k=Math.min(1,(n-s)/dur),q=1-Math.pow(1-k,3),x=Math.round(v*q);e.textContent=(pre&&x>0?'+':'')+x;if(k<1&&e.isConnected)requestAnimationFrame(f);else e.textContent=(pre&&v>0?'+':'')+v})(performance.now())},delay)}
/* pantalla de resultado */
function animRes(box){const stEl=box.querySelector('.vst');if(!stEl||box.dataset.vd)return;box.dataset.vd=1;box.classList.add('vres');
 const s=+stEl.dataset.s||0,win=s>0,m=document.getElementById('msg');
 const rows=[...box.querySelectorAll('br')];let d=.9+s*.45;let i=0;
 /* filas de texto aparecen escalonadas */
 box.querySelectorAll('.vrow').forEach(r=>{r.style.animationDelay=(d+.12*(i++))+'s'});
 const cus=[...box.querySelectorAll('.cu')];cus.forEach((e,k)=>countUp(e,900,(d+.1*k)*1000));
 const stars=[...stEl.querySelectorAll('.vs')];
 stars.forEach((e,k)=>{if(k<s){e.style.animationDelay=(.55+k*.5)+'s';setTimeout(()=>{if(!e.isConnected)return;chime(k);const r=e.getBoundingClientRect();spark(r.left+r.width/2,r.top+r.height/2,k==2?26:14);if(k==2){if(BRFX.shk){m.classList.add('vshk');setTimeout(()=>m.classList.remove('vshk'),600)}try{BRFX.vib&&navigator.vibrate&&navigator.vibrate([30,40,60])}catch(x){}}},(.55+k*.5+.45)*1000)}});
 if(win){setTimeout(()=>{if(box.isConnected){fanfare();confetti(box,s==3)}},(.55+s*.5)*1000-200)}
 else{m.classList.add('vlose');sadsnd()}}
const mo=new MutationObserver(()=>{const b=document.querySelector('#msg>div');if(b&&b.querySelector('.vst')&&!b.dataset.vd)animRes(b);else if(b&&!b.querySelector('.vst')){b.classList.remove('vres');document.getElementById('msg').classList.remove('vlose')}});
try{mo.observe(document.getElementById('msg'),{childList:true,subtree:true})}catch(e){}
/* mejora terminada: destello sobre el edificio */
const UPS=new Map();
function scr(b){try{const g=bubGeom(b),r=cv.getBoundingClientRect(),k=r.width/(cv.width/(typeof KS=='number'?KS:1));return[r.left+(g.x*cam.z+cam.x)*k,r.top+(g.cyBody*cam.z+cam.y)*k]}catch(e){return null}}
setInterval(()=>{try{if(typeof mode=='undefined'||mode!='v'||!S||!S.b||document.hidden)return;
 for(const b of S.b){const was=UPS.get(b),nw=b.up>0?1:0;UPS.set(b,nw)}}catch(e){}},400);
/* XP y nivel */
let lastXP=null,lastLv=null;
setInterval(()=>{try{if(typeof PRF=='undefined'||!PRF||PRF.xp==null)return;const xp=PRF.xp|0,lv=prfLvl(xp);
 if(lastXP==null){lastXP=xp;lastLv=lv;return}
 if(xp>lastXP){const box=document.getElementById('vxp')||el('','');box.id='vxp';const g=xp-lastXP;box.innerHTML='<div class="vxp1">+'+g+' XP</div>'+(lv>lastLv?'<div class="vlvl">⬆ ¡NIVEL '+lv+'!<small>Sigue así, jefe</small></div>':'');
  if(lv>lastLv){fanfare();spark(innerWidth/2,innerHeight*.2,36)}else chime(1);
  clearTimeout(box._t);box._t=setTimeout(()=>{box.innerHTML=''},2800)}
 lastXP=xp;lastLv=lv}catch(e){}},700);
window.__juice={animRes,spark,ftext,confetti,scr};
})();

/* ===== v78: balance según Clash of Clans (sin buffs globales) ===== */
var AUT={};function aul(k){const n=AUT[k].length;let l=0;try{l=labLv()}catch(e){}return Math.max(0,Math.min(n-1,Math.floor(l*(n-1)/8)))}
(function(){if(window.__bal)return;window.__bal=1;
 /* Torre de magos como en CoC: 620 PV, 11 dps con salpicadura */
 TY.wizard.hp=620;TY.wizard.dmg=14.3;TY.wizard.rt=1.3;
 /* Tropas con estadísticas de nivel 1 de CoC */
 TR.giant.hp=400;TR.giant.dmg=24;TR.giant.rt=2;
 TR.mage.hp=75;TR.mage.dmg=75;TR.mage.rt=1.5;TR.mage.rg=3.2;TR.mage.v=1.6;
 TR.loon.hp=150;TR.loon.dmg=75;TR.loon.rt=3;TR.loon.v=1.0;
 TR.heal.v=1.6;TR.wb.hp=30;TR.gob.hp=25;
 /* Niveles automáticos (laboratorio) para las tropas que aún no se investigan */
 const L=(h,d)=>h.map((x,i)=>({hp:x,dps:d[i]}));
 AUT.giant=L([400,500,600,700,900],[12,15,20,24,31]);
 AUT.gob=L([25,30,36,43,52],[11,15,19,24,32]);
 AUT.wb=L([30,36,44,53],[0,0,0,0]);
 AUT.loon=L([150,180,216,280,390],[25,32,48,72,108]);
 AUT.mage=L([75,90,108,135,165,180],[50,70,90,125,170,185]);
 window.balMig=function(){try{if(!S||!S.b||S.bal==78)return;S.bal=78}catch(e){}};
})();

window.__SMP={"m2": "", "a3": "", "depa3": "", "depa2": "", "destroy": "", "cansel": "", "depg": "", "m3": "", "arrow": "", "mdie": "", "diea1": "", "g1": "", "mori": "", "depb": "", "cons": "", "mdep": "", "sw3": "", "canfire": "", "g3": "", "sw1": "", "gd3": "", "wbatk": "", "depa1": "", "a2": "", "gd1": "", "sw2": "", "aimp": "", "m1": "", "gdie": "", "dieb": "", "g2": "", "gd2": "", "diea2": "", "upg": "", "morf": "", "a1": "", "coin": "", "elixir": ""};
/* ===== v78: motor de audio con capas (ruido filtrado, metales, voces con formantes) + muestras reales opcionales ===== */
(function(){
if(window.__aud)return;window.__aud=1;
const rr=(a,b)=>a+Math.random()*(b-a);
let NB=null,BB=null,live=[];
function bufs(){if(NB&&NB._sr===AC.sampleRate)return;const sr=AC.sampleRate;NB=AC.createBuffer(1,sr*2,sr);BB=AC.createBuffer(1,sr*2,sr);const a=NB.getChannelData(0),b=BB.getChannelData(0);let l=0;for(let i=0;i<a.length;i++){const w=Math.random()*2-1;a[i]=w;l=(l+.02*w)/1.02;b[i]=l*3.5}NB._sr=sr}
function dest(){const o=OUT();if(!o._c){try{const c=AC.createDynamicsCompressor();c.threshold.value=-16;c.knee.value=12;c.ratio.value=5;c.attack.value=.003;c.release.value=.18;o.disconnect();o.connect(c);c.connect(AC.destination);o._c=c}catch(e){}}return o}
function room(){const n=live.length;const now=AC.currentTime;live=live.filter(e=>e>now);return live.length<18}
function reg(d){live.push(AC.currentTime+d)}
function env(g,t,a,d,v){g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+Math.min(a,d*.5));g.gain.exponentialRampToValueAtTime(.0001,t+d)}
/* ruido filtrado: {t,d,ty,f,f2,q,v,a,br} */
function N(o){bufs();const t=AC.currentTime+(o.t||0),d=o.d||.1,s=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain();s.buffer=o.br?BB:NB;s.loop=true;f.type=o.ty||'bandpass';f.Q.value=o.q||1;f.frequency.setValueAtTime(o.f||1000,t);if(o.f2)f.frequency.exponentialRampToValueAtTime(Math.max(30,o.f2),t+d);env(g,t,o.a||.004,d,o.v||.2);s.connect(f);f.connect(g);g.connect(dest());s.start(t,Math.random()*1.5);s.stop(t+d+.05);reg(d)}
/* oscilador: {t,d,ty,f,f2,v,a,vib:[hz,cents]} */
function T(o){const t=AC.currentTime+(o.t||0),d=o.d||.15,s=AC.createOscillator(),g=AC.createGain();s.type=o.ty||'sine';s.frequency.setValueAtTime(o.f,t);if(o.f2)s.frequency.exponentialRampToValueAtTime(Math.max(20,o.f2),t+d);
 if(o.vib){const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=o.vib[0];lg.gain.value=o.vib[1];l.connect(lg);lg.connect(s.detune);l.start(t);l.stop(t+d+.05)}
 env(g,t,o.a||.006,d,o.v||.1);s.connect(g);g.connect(dest());s.start(t);s.stop(t+d+.05);reg(d)}
/* metal que resuena (parciales inarmónicos) */
function M(f,d,v,t0){const P=[[1,1],[2.76,.55],[5.4,.3],[8.93,.16]];for(const[r,w]of P)T({t:t0||0,d:d/(.6+r*.35),ty:'sine',f:f*r,v:v*w,a:.002})}
/* voz con formantes */
const FM={a:[800,1150,2900],o:[450,800,2830],u:[325,700,2700],e:[400,2000,2800],i:[270,2140,2950]};
function V(o){const t=AC.currentTime+(o.t||0),d=o.d||.3,src=AC.createOscillator(),mix=AC.createGain(),out=AC.createGain();src.type='sawtooth';src.frequency.setValueAtTime(o.f0,t);src.frequency.exponentialRampToValueAtTime(Math.max(40,o.f1||o.f0),t+d);
 const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=o.vr||5.5;lg.gain.value=(o.vc||18);l.connect(lg);lg.connect(src.detune);l.start(t);l.stop(t+d+.05);
 const v0=FM[o.v0||'a'],v1=FM[o.v1||o.v0||'a'],W=[1,.65,.35];
 for(let i=0;i<3;i++){const f=AC.createBiquadFilter(),g=AC.createGain();f.type='bandpass';f.Q.value=o.q||7;f.frequency.setValueAtTime(v0[i],t);f.frequency.linearRampToValueAtTime(v1[i],t+d);g.gain.value=W[i];src.connect(f);f.connect(g);g.connect(mix)}
 if(o.rough){const am=AC.createOscillator(),ag=AC.createGain();am.frequency.value=o.rough;ag.gain.value=.45;am.connect(ag);ag.connect(out.gain);am.start(t);am.stop(t+d+.05)}
 env(out,t,o.a||.03,d,o.v||.12);mix.connect(out);out.connect(dest());src.start(t);src.stop(t+d+.05);
 if(o.br)N({t:o.t||0,d:d*.8,ty:'bandpass',f:v0[1],q:.8,v:o.v*.35,a:.02});reg(d)}
/* ---------- muestras reales opcionales: sfx/manifest.json ---------- */
let SM=null,SMB={},SMT=0;
function loadMan(){if(SMT||typeof fetch!='function'||!/^https?:/.test(location.protocol))return;SMT=1;fetch('sfx/manifest.json',{cache:'no-cache'}).then(r=>r.ok?r.json():null).then(j=>{if(j)SM=j}).catch(()=>{})}
function smp(name){if(!SM||!SM[name]||!SM[name].length)return false;const L=SM[name],f=L[(Math.random()*L.length)|0];const gv=(SM.volume&&SM.volume[name])||1;
 const play=b=>{try{const s=AC.createBufferSource(),g=AC.createGain();s.buffer=b;s.playbackRate.value=rr(.95,1.05);g.gain.value=gv;s.connect(g);g.connect(dest());s.start()}catch(e){}};
 if(SMB[f]){if(SMB[f]!==1)play(SMB[f]);return true}SMB[f]=1;fetch('sfx/'+f).then(r=>r.arrayBuffer()).then(a=>AC.decodeAudioData(a)).then(b=>{SMB[f]=b;play(b)}).catch(()=>{});return true}
/* ---------- definiciones ---------- */
const D={};
D.ui=()=>{T({d:.05,ty:'sine',f:1400,f2:900,v:.05});N({d:.02,ty:'highpass',f:6000,v:.03})};
D.sel=()=>{T({d:.04,ty:'triangle',f:1900,v:.05});T({t:.03,d:.05,ty:'sine',f:2500,v:.03})};
D.open=()=>{N({d:.18,ty:'bandpass',f:400,f2:2200,q:1.2,v:.07});T({t:.04,d:.18,ty:'sine',f:660,f2:990,v:.05})};
D.deny=()=>{T({d:.07,ty:'triangle',f:420,f2:340,v:.05});T({t:.08,d:.09,ty:'triangle',f:340,f2:280,v:.05})};
D.coin=()=>{M(1568,.28,.07);M(2093,.3,.06,.07)};
D.drop=()=>{T({d:.12,ty:'sine',f:1000,f2:420,v:.1});N({d:.05,ty:'bandpass',f:2500,v:.03})};
D.done=()=>{M(784,.5,.09);M(988,.5,.08,.1);M(1175,.7,.08,.2)};
D.built=()=>{N({d:.06,ty:'bandpass',f:900,q:2,v:.18});T({d:.08,ty:'sine',f:180,f2:70,v:.2});M(1047,.4,.07,.12);M(1319,.5,.06,.2)};
D.hammer=()=>{N({d:.04,ty:'bandpass',f:1800,q:3,v:.14});T({d:.09,ty:'triangle',f:260,f2:120,v:.12});M(2200,.12,.03)};
D.saw=()=>{N({d:.28,ty:'bandpass',f:900,f2:1800,q:2,v:.07,a:.03});N({t:.14,d:.18,ty:'bandpass',f:1500,f2:800,q:2,v:.06})};
D.chop=()=>{N({d:.05,ty:'bandpass',f:1500,q:2,v:.1})};
D.notif=()=>{M(1175,.35,.07);M(1568,.4,.06,.11)};
D.tut=()=>{M(880,.3,.06);M(1320,.35,.05,.09)};
D.star=()=>{M(988,.6,.1);M(1319,.6,.09,.1);M(1760,.9,.08,.2);N({t:.05,d:.6,ty:'highpass',f:7000,v:.04,a:.1})};
D.horn=()=>{T({d:.9,ty:'sawtooth',f:165,f2:196,v:.09,a:.08,vib:[5,10]});T({d:.9,ty:'sawtooth',f:247,f2:294,v:.06,a:.1});N({d:.3,ty:'bandpass',f:600,v:.03})};
D.heal=()=>{M(1047,.5,.06);M(1568,.6,.05,.08);M(2093,.7,.04,.16)};
D.rage=()=>{T({d:.5,ty:'sawtooth',f:90,f2:60,v:.1,vib:[18,60]});N({d:.4,ty:'lowpass',f:700,br:1,v:.15})};
D.spring=()=>{T({d:.22,ty:'sine',f:240,f2:900,v:.14,vib:[30,80]});N({d:.05,ty:'bandpass',f:1500,v:.1})};
D.crunch=()=>{for(let i=0;i<4;i++)N({t:i*.03,d:.05,ty:'bandpass',f:rr(900,2200),q:2,v:.1})};
/* combate: golpes */
D.slash=()=>{const k=rr(.9,1.15);N({d:.1,ty:'bandpass',f:700*k,f2:3800*k,q:.9,v:.13,a:.012});N({t:.06,d:.07,ty:'lowpass',f:700,v:.1,a:.002});T({t:.06,d:.07,ty:'sine',f:150*k,f2:70,v:.14});M(2600*k,.1,.025,.05)};
D.stab=()=>{N({d:.05,ty:'highpass',f:2500,f2:5500,v:.1});T({t:.03,d:.06,ty:'sine',f:220,f2:110,v:.12});N({t:.03,d:.04,ty:'bandpass',f:1500,v:.06})};
D.thud=()=>{T({d:.22,ty:'sine',f:95,f2:34,v:.32});N({d:.16,ty:'lowpass',f:380,br:1,v:.28});N({d:.03,ty:'bandpass',f:1500,q:2,v:.1})};
D.twang=()=>{T({d:.12,ty:'triangle',f:260,f2:150,v:.07,vib:[40,120]});N({d:.08,ty:'bandpass',f:2500,f2:5000,v:.05});T({t:.05,d:.05,ty:'sine',f:900,f2:300,v:.04})};
D.arrow=()=>{T({d:.14,ty:'triangle',f:200,f2:120,v:.06,vib:[35,100]});N({d:.2,ty:'bandpass',f:1500,f2:3800,q:1,v:.08,a:.03})};
D.zap=()=>{N({d:.22,ty:'bandpass',f:3500,f2:900,q:3,v:.1});T({d:.18,ty:'sawtooth',f:500,f2:1900,v:.05,vib:[45,300]});T({t:.04,d:.3,ty:'sine',f:300,f2:120,v:.07})};
D.cball=()=>{T({d:.28,ty:'sine',f:150,f2:42,v:.4});N({d:.22,ty:'lowpass',f:1800,f2:200,v:.3});N({d:.04,ty:'bandpass',f:2000,q:2,v:.12});T({t:.06,d:.4,ty:'sine',f:90,f2:50,v:.12})};
D.mortar=()=>{T({d:.3,ty:'sine',f:110,f2:38,v:.34});N({d:.25,ty:'lowpass',f:900,br:1,v:.25});T({t:.1,d:.7,ty:'sine',f:1700,f2:700,v:.025})};
D.boom=()=>{T({d:.55,ty:'sine',f:105,f2:26,v:.5});N({d:.6,ty:'lowpass',f:1200,f2:120,br:1,v:.45});N({d:.25,ty:'highpass',f:2500,f2:800,v:.12});T({t:.08,d:.5,ty:'sine',f:60,f2:30,v:.2})};
D.crumble=()=>{for(let i=0;i<5;i++)N({t:i*rr(.05,.09),d:rr(.12,.22),ty:'bandpass',f:rr(300,1400),q:1.3,v:rr(.1,.2)});N({d:.55,ty:'lowpass',f:260,br:1,v:.3});T({d:.3,ty:'sine',f:70,f2:35,v:.22})};
D.bigcrumble=()=>{D.crumble();D.boom();for(let i=0;i<6;i++)N({t:.15+i*.08,d:.2,ty:'bandpass',f:rr(250,1200),v:.14})};
D.destroy=()=>D.crumble();
D.wallbreak=()=>{N({d:.03,ty:'highpass',f:3500,v:.14});for(let i=0;i<3;i++)N({t:.02+i*.05,d:.12,ty:'bandpass',f:rr(500,1100),q:1.5,v:.16});T({d:.18,ty:'sine',f:110,f2:50,v:.22})};
D.jump=()=>{N({d:.18,ty:'bandpass',f:500,f2:2200,v:.07});V({d:.18,f0:260,f1:330,v0:'e',v1:'a',v:.07})};
/* despliegue: gritos por tropa */
D.dep_barb=D.dep_arch=D.dep_giant=D.dep_gob=D.dep_wb=D.dep_loon=D.dep_mage=D.dep_heal=D.dep_king=()=>{T({d:.06,ty:'sine',f:1200,f2:800,v:.04})};
D.dep=()=>{N({d:.14,ty:'bandpass',f:500,f2:2000,v:.06});T({d:.1,ty:'sine',f:300,f2:200,v:.05})};
/* muerte */
D.die_barb=()=>{V({d:.35,f0:150,f1:80,v0:'a',v1:'o',v:.12,vc:40})};
D.die_king=()=>{V({d:.5,f0:120,f1:60,v0:'a',v1:'o',v:.14,rough:20})};
D.die_arch=()=>{V({d:.3,f0:300,f1:170,v0:'a',v1:'o',v:.1,vc:40})};
D.die_giant=()=>{V({d:.7,f0:80,f1:40,v0:'o',v1:'u',v:.2,rough:22,q:5});T({d:.35,ty:'sine',f:70,f2:30,v:.22})};
D.die_gob=()=>{V({d:.28,f0:520,f1:260,v0:'i',v1:'e',v:.09,q:9})};
D.die_wb=()=>{V({d:.15,f0:300,f1:200,v0:'a',v1:'a',v:.08})};
D.die_mage=()=>{V({d:.3,f0:210,f1:110,v0:'a',v1:'o',v:.1});N({d:.3,ty:'highpass',f:5000,v:.03})};
D.die_heal=()=>{V({d:.4,f0:340,f1:180,v0:'o',v1:'u',v:.08});M(1175,.4,.03)};
D.die_loon=()=>{N({d:.5,ty:'bandpass',f:3000,f2:700,v:.1});T({d:.4,ty:'sine',f:400,f2:100,v:.06})};
/* instalación: cada clave con límite de voces y muestra opcional */
const SF={};for(const k in D){SF[k]=((fn,name)=>()=>{try{if(!AC)return;loadMan();if(smp(name))return;if(!room())return;fn()}catch(e){}})(D[k],k)}

/* ---------- muestras reales incrustadas (MP3 del usuario) con pitch/volumen aleatorio ---------- */
const SB={};window.__SB=SB;let SBL=0;
function sload(){if(SBL||!AC||!window.__SMP)return;SBL=1;for(const k in __SMP){try{const bin=atob(__SMP[k]),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);const p=AC.decodeAudioData(u.buffer,b=>{SB[k]=b},()=>{});if(p&&p.catch)p.catch(()=>{})}catch(e){}}}
function sp(k,o){o=o||{};const b=SB[k];if(!b)return false;const t=AC.currentTime+(o.t||0),s=AC.createBufferSource(),g=AC.createGain();s.buffer=b;s.playbackRate.value=(o.r||1)*rr(1-(o.j||.08),1+(o.j||.08));g.gain.value=(o.v||1)*rr(.88,1.05);s.connect(g);g.connect(dest());s.start(t);reg(b.duration);return true}
let cn=0,cl=0;
const rv=l=>l[(Math.random()*l.length)|0];
const SM2={
 coin:()=>{const n=performance.now();cn=n-cl<500?Math.min(cn+1,7):0;cl=n;if(!SB.coin)return false;const r=1+cn*.045;sp('coin',{r:r,j:.05,v:.9});if(cn>=2)sp('coin',{t:.045,r:r*1.12,j:.05,v:.55});if(cn>=4)sp('coin',{t:.095,r:r*1.25,j:.05,v:.4});return true},
 drop:()=>sp('elixir',{j:.1,v:1}),140:()=>sp('elixir',{r:1.6,v:.35}),
 slash:()=>sp(rv(['sw1','sw2','sw3']),{j:.07,v:.9}),
 stab:()=>sp(rv(['g1','g2','g3']),{j:.07,v:.9}),zap:()=>sp(rv(['m1','m2','m3']),{j:.06,v:.9}),mortar:()=>sp('morf',{j:.04,v:.95}),morhit:()=>sp('mori',{j:.05,v:.95}),wbatk:()=>sp('wbatk',{j:.05,v:1}),
 dep_gob:()=>sp(rv(['gd1','gd2','gd3']),{j:.07,v:.85}),dep_mage:()=>sp('mdep',{j:.05,v:.9}),die_gob:()=>sp('gdie',{j:.06,v:.9}),die_mage:()=>sp('mdie',{j:.05,v:.9}),
 arrow:()=>sp('arrow',{j:.08,v:.85}),twang:()=>{const ok=sp(rv(['a1','a2','a3']),{j:.06,v:.85});sp('aimp',{t:.3,j:.05,v:.45});return ok},
 built:()=>sp('upg',{j:.03,v:.9}),done:()=>sp('upg',{r:1.08,j:.03,v:.9}),hammer:()=>sp('cons',{j:.02,v:.85}),
 crumble:()=>sp('destroy',{j:.07,v:.9}),destroy:()=>sp('destroy',{j:.07,v:.9}),bigcrumble:()=>sp('destroy',{r:.78,j:.04,v:1}),
 cball:()=>sp('canfire',{j:.05,v:.9}),cansel:()=>sp('cansel',{j:.04,v:.9}),
 dep_barb:()=>sp('depb',{j:.07,v:.9}),dep_king:()=>sp('depb',{r:.8,j:.04,v:.9}),
 dep_arch:()=>sp(rv(['depa1','depa2','depa3']),{j:.06,v:.9}),dep_giant:()=>sp('depg',{j:.04,v:.95}),
 die_barb:()=>sp('dieb',{j:.06,v:.9}),die_king:()=>sp('dieb',{r:.75,j:.04,v:.95}),die_giant:()=>sp('dieb',{r:.6,j:.03,v:1}),
 die_arch:()=>sp(rv(['diea1','diea2']),{j:.06,v:.9}),die_heal:()=>sp('diea1',{r:1.3,j:.05,v:.8})
};
D.cansel=()=>{};D.wbatk=D.boom;D.morhit=D.boom;D[520]=()=>{T({d:.05,ty:'triangle',f:900,f2:1300,v:.05})};
const DR={barb:[.8,.07],arch:[1.3,.05],giant:[.55,.04],gob:[1.75,.1],wb:[1.05,.03],loon:[1.45,.05],mage:[1.15,.05],heal:[1.55,.05],king:[.68,.04]};
for(const k in DR)if(!SM2['dep_'+k])SM2['dep_'+k]=()=>sp('elixir',{r:DR[k][0],j:DR[k][1],v:.9});
for(const k in SM2){const f=SF[k]||(()=>{});SF[k]=()=>{try{if(!AC)return;sload();if(SM2[k]())return}catch(e){}f()}}
Object.assign(SFX,SF);
setTimeout(()=>{try{if(AC)sload()}catch(e){}},400);
window.__audD=D;
/* ---------- efectos visuales de combate + sonido de despliegue/tumbas/estrellas ---------- */
let VX=[],lastV={};
function vsnd(k){const n=performance.now();if(n-(lastV[k]||0)<250)return;lastV[k]=n;try{snd(k)}catch(e){}}
function pxy(x,y){return P(x,y)}
function tomb(g,x,y,sc,al){const[p,q]=P(x,y);g.save();g.globalAlpha=al;g.translate(p,q);g.scale(sc,sc);
 g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(0,2,9,4,0,0,7);g.fill();
 g.fillStyle='#8f98a3';g.strokeStyle='#4a525c';g.lineWidth=1.4;g.beginPath();g.moveTo(-6,2);g.lineTo(-6,-10);g.quadraticCurveTo(0,-19,6,-10);g.lineTo(6,2);g.closePath();g.fill();g.stroke();
 g.strokeStyle='#4a525c';g.lineWidth=1.6;g.beginPath();g.moveTo(0,-13);g.lineTo(0,-5);g.moveTo(-3,-10);g.lineTo(3,-10);g.stroke();
 g.fillStyle='#b9c1cb';g.fillRect(-6,-1,12,3);g.restore()}
const drFx1=drFx;
drFx=function(){drFx1();try{if(mode!='a'||!A||!A.tr)return;const now=performance.now();
 for(const t of A.tr){
  if(!t.vf){t.vf=1;if(t.hp>0&&!t.fly||t.fly){VX.push({k:'dep',x:t.x,y:t.y,t0:now});if(!t.vfs){t.vfs=1;vsnd('dep_'+t.k)}}}
  if(t.hp<=0&&!t.tb&&t.dd){t.tb={x:t.x,y:t.y,t0:now,fly:!!t.fly,sp:TR[t.k].sp||1}}}
 const gct=g;
 /* tumbas */
 for(const t of A.tr){const tb=t.tb;if(!tb||tb.fly)continue;const age=(now-tb.t0)/1000;if(age>22)continue;const al=age<.4?age/.4:age>18?Math.max(0,(22-age)/4):1;const sc=.8+Math.min(.6,tb.sp*.09);
  tomb(gct,tb.x,tb.y,sc,al);
  if(age<1.4){const[p,q]=P(tb.x,tb.y);gct.save();gct.globalAlpha=(1-age/1.4)*.55;gct.fillStyle='#fff';gct.beginPath();gct.ellipse(p,q-16-age*26,4,6,0,0,7);gct.fill();gct.restore()}}
 /* despliegue */
 VX=VX.filter(v=>now-v.t0<700);
 for(const v of VX){if(v.k!='dep')continue;const u=(now-v.t0)/700,[p,q]=P(v.x,v.y);gct.save();gct.globalAlpha=1-u;gct.strokeStyle='rgba(255,230,140,.95)';gct.lineWidth=3*(1-u)+1;gct.beginPath();gct.ellipse(p,q,10+u*26,5+u*13,0,0,7);gct.stroke();gct.fillStyle='rgba(235,220,190,.5)';for(let i=0;i<6;i++){const a=i*1.05+v.t0%7,r=u*22;gct.beginPath();gct.arc(p+Math.cos(a)*r,q+Math.sin(a)*r*.5-u*8,3*(1-u)+1,0,7);gct.fill()}gct.restore()}
 /* estrella ganada */
 const s=stars();if((A.vs||0)<s){A.vs=s;starPop(s)}
 }catch(e){}};
function starPop(n){try{const d=document.createElement('div');d.className='bstar';d.innerHTML='<i></i>';document.body.appendChild(d);setTimeout(()=>d.remove(),1700);if(window.__juice){const r=d.getBoundingClientRect();window.__juice.spark(innerWidth/2,innerHeight*.32,22,'#ffd24a')}}catch(e){}}
const st=document.createElement('style');st.textContent=`.bstar{position:fixed;left:50%;top:26%;width:96px;height:96px;margin-left:-48px;z-index:30;pointer-events:none;animation:bstar 1.5s both}
.bstar i{display:block;width:100%;height:100%;background:linear-gradient(160deg,#fff3a0,#f5c542 45%,#d58a00);clip-path:polygon(50% 0,63% 33%,98% 36%,71% 58%,80% 92%,50% 73%,20% 92%,29% 58%,2% 36%,37% 33%);filter:drop-shadow(0 0 14px #ffb020)}
@keyframes bstar{0%{transform:scale(.1) rotate(-180deg);opacity:0}25%{transform:scale(1.5) rotate(10deg);opacity:1}40%{transform:scale(1) rotate(0)}80%{transform:scale(1) translateY(-8px);opacity:1}100%{transform:scale(.6) translateY(-60px);opacity:0}}`;document.head.appendChild(st);
})();

/* ===== v79: IA por tiempo, flujo de ataque estilo CoC, HUD nuevo, tropas gratis TH2-4 ===== */
function fK(n){n=Math.floor(n);if(n>=1e6){const v=n/1e6;return(v>=100?Math.round(v):Math.floor(v*10)/10)+'M'}if(n>=1e3){const v=n/1e3;return(v>=100?Math.round(v):Math.floor(v*10)/10)+'K'}return''+n}
function fK2(n){return n>=100000?fK(n):''+Math.floor(n)}
function fkr(a,b){const s=a+'/'+b;return s.length>12?fK(a)+'/'+fK(b):s}
let _cB=0;
function cloudRun(fn){const go=(typeof navigator!='undefined'&&navigator.webdriver&&!window.__cloudOn)||window.__cloudOff||_cB;if(go){fn();return}
 _cB=1;let el=document.getElementById('cld');if(!el){el=document.createElement('div');el.id='cld';let h='<div class=cbg></div>';for(let r=0;r<6;r++)for(let c=0;c<5;c++){const s=(r+c)%2?-1:1;h+=`<i style="left:${c*20-9}%;top:${r*17-7}%;--s:${s};--d:${(c*40+r*30+((r*7+c*3)%5)*20)}ms"></i>`}el.innerHTML=h;document.body.appendChild(el)}
 el.className='';void el.offsetWidth;el.classList.add('close');try{snd('open')}catch(e){}
 setTimeout(()=>{try{fn()}catch(e){console.error(e)}el.classList.remove('close');el.classList.add('open');setTimeout(()=>{el.className='rs';_cB=0},750)},560)}
function spLocked(){try{const h=S.b.find(b=>b.t=='hall');return !!h&&h.lv<5}catch(e){return false}}
function freeTr(){try{const h=S.b.find(b=>b.t=='hall');return !!h&&h.lv>=2&&h.lv<=4}catch(e){return false}}
(function(){if(window.__a79)return;window.__a79=1;
for(const r of TWR)if(r)r.dmg*=1.366;for(const r of CAN)if(r)r.dmg*=1.5638;
/* ---------- IA: costo en segundos (caminar vs romper muro) ---------- */
const mkGrid0=mkGrid;
mkGrid=function(){mkGrid0();try{const n=E.N,wh=new Float32Array(n*n);for(const b of E.b){if(b.hp<=0||b.t!='wall')continue;if(b.x>=0&&b.y>=0&&b.x<n&&b.y<n)wh[b.y*n+b.x]=b.hp}E.grid.wh=wh}catch(e){}};
function dfT(sx,sy,t,D){const n=E.N,{blk,wc,wh}=E.grid,dist=new Float64Array(n*n).fill(1e9),prev=new Int32Array(n*n).fill(-1),h=[[0,sy*n+sx]];dist[sy*n+sx]=0;
 const sp=Math.max(.3,D.v),dps=Math.max(1,((t&&t.dm)||D.dmg)/(D.rt||1))*1.6;
 const push=it=>{h.push(it);let i=h.length-1;while(i>0){const p=(i-1)>>1;if(h[p][0]<=h[i][0])break;[h[p],h[i]]=[h[i],h[p]];i=p}};
 const pop=()=>{const r=h[0],l=h.pop();if(h.length){h[0]=l;let i=0;for(;;){const a=2*i+1,b=a+1;let m=i;if(a<h.length&&h[a][0]<h[m][0])m=a;if(b<h.length&&h[b][0]<h[m][0])m=b;if(m==i)break;[h[m],h[i]]=[h[i],h[m]];i=m}}return r};
 while(h.length){const[d,u]=pop();if(d>dist[u])continue;const ux=u%n,uy=(u/n)|0;
  for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){if(!dx&&!dy)continue;const x=ux+dx,y=uy+dy;if(x<0||y<0||x>=n||y>=n)continue;const v=y*n+x;if(blk[v])continue;
   if(dx&&dy&&(blk[uy*n+x]||blk[y*n+ux]||wc[uy*n+x]||wc[y*n+ux]))continue;
   const nd=d+(dx&&dy?1.41:1)/sp+(wc[v]>0?(wh?wh[v]:wc[v]*90)/dps:0);if(nd<dist[v]){dist[v]=nd;prev[v]=u;push([nd,v])}}}
 return{dist,prev}}
cands=function(D,al){const nt=al.filter(b=>b.hp>0&&b.t!='wall'&&!TY[b.t].trap);
 if(D.pf){const f=nt.filter(b=>D.pf.includes(b.t));if(f.length)return[f]}
 return nt.length?[nt]:[]};
chooseG=function(t,D,tiers){const n=E.N,rr=Math.max(D.rg,.6),sx=Math.max(0,Math.min(n-1,Math.floor(t.x))),sy=Math.max(0,Math.min(n-1,Math.floor(t.y)));
 const F=dfT(sx,sy,t,D);
 for(const tier of tiers){let best=null,bd=1e9;for(const b of tier){const r=bestCell(F,b,rr);if(r&&r[1]<bd){bd=r[1];best=[b,r[0]]}}
  if(best)return{b:best[0],F,c:best[1],wp:0}}
 return null};
repath=function(t,D){t.pt=.5+Math.random()*.3;const tg=t.tg;if(!tg)return;const n=E.N,rr=Math.max(D.rg,.6),sx=Math.max(0,Math.min(n-1,Math.floor(t.x))),sy=Math.max(0,Math.min(n-1,Math.floor(t.y)));
 const F=dfT(sx,sy,t,D),r=bestCell(F,tg,rr);t.path=r?pathTo(F,r[0]):null;if(t.path&&t.path.length)t.path.shift()};
stuckRe=function(t,D,al,ws){const old=t.tg;t.sn=(t.sn||0)+1;const pfA=D.pf&&al.some(b=>b.hp>0&&D.pf.includes(b.t));
 if(t.sn<=2){acquire(t,D,al.filter(b=>b!==old),ws);if(t.tg&&t.tg!==old&&(!pfA||D.pf.includes(t.tg.t)))return;t.tg=old}
 t.sn=0;t.path=null;t.pt=0;
 if(pfA)return;
 let m=null,bd=1e9;for(const b of al){if(b===old||b.hp<=0)continue;const q=edge(t,b);if(q<bd){bd=q;m=b}}
 if(m&&bd<3){t.tg=m;t.path=null}};
markT=function(b){};
tierOf=function(b){return b.t=='hall'?3:DEFT.includes(b.t)?0:1};
/* ---------- marca de despliegue (mira naranja) ---------- */
const spawn0=spawn;
spawn=function(x,y){const n0=A?A.tr.length:0;spawn0(x,y);try{if(A&&A.tr.length>n0){A.dk={x,y,t0:performance.now()}}}catch(e){}};
drMarks=function(now){const d=A&&A.dk;if(!d)return;const u=(now-d.t0)/1300;if(u>=1){A.dk=null;return}
 const[p,q]=P(d.x,d.y,0),a=Math.max(0,1-u*u),pul=1+.08*Math.sin(now/70),R=24*pul;
 g.save();g.globalAlpha=a;g.translate(p,q);g.scale(1,.64);g.lineJoin='round';
 g.strokeStyle='#ff8a1c';g.lineWidth=5;g.beginPath();g.arc(0,0,R*.62,0,7);g.stroke();
 g.strokeStyle='#ffd08a';g.lineWidth=1.6;g.beginPath();g.arc(0,0,R*.62,0,7);g.stroke();
 for(let i=0;i<4;i++){g.save();g.rotate(i*Math.PI/2);g.fillStyle='#ff9b2a';g.strokeStyle='#7a3a00';g.lineWidth=2;g.beginPath();g.moveTo(R*1.2,0);g.lineTo(R*1.75,-R*.34);g.lineTo(R*1.75,R*.34);g.closePath();g.fill();g.stroke();g.restore()}
 g.restore()};
/* ---------- tropas gratis TH2-4 ---------- */
const endAttack1=endAttack;
endAttack=function(sur){try{if(mode=='a'&&A&&A.on&&freeTr()&&A.a0){const al={};for(const t of A.tr)if(t.hp>0&&t.k!='king'&&!t.sm)al[t.k]=(al[t.k]||0)+1;for(const k in A.a0){if(k=='king')continue;A.army[k]=Math.max(0,A.a0[k]-(al[k]||0))}}}catch(e){}return endAttack1(sur)};
/* ---------- fase de planeo (30 s) y batalla (3 min al desplegar) ---------- */
const stepAtk1=stepAtk;
stepAtk=function(dt){if(A&&A.on&&A.prep>0&&!RPL){A.prep-=dt;if(A.prep<=0||A.tr.length)A.prep=0;else return}stepAtk1(dt)};
const dep1=deployAt;
deployAt=function(x,y){if(A&&A.on&&!RPL){if(!SPK(pick)&&!(A.army[pick]>0)){hToast('¡Sin tropas de este tipo! ('+((TR[pick]&&TR[pick].n)||SPK(pick).n)+')');snd('deny');return}
  if(A.prep>0&&!(SPK(pick)))A.prep=0;if(E&&E.real&&!A.sb){A.sb=1;if((S.shield||0)>0){S.shield=0;try{save()}catch(e){}}}}
 return dep1(x,y)};
function wrapStart(name){const f=window[name]||eval(name);return f}
const sA1=startAttack;startAttack=function(){const a=arguments,th=this;cloudRun(()=>{sA1.apply(th,a);aInit()})};
const sRv=startRevenge;startRevenge=function(id){cloudRun(()=>{sRv(id)})};
const sR1=startReal;startReal=function(){sR1.apply(this,arguments);aInit()};
function aInit(){PSP82=false;try{if(!A||!A.on||RPL)return;A.a0={...A.army};A.sp0={...A.sp};A.prep=30;A.qty={};A.hf=false;A.all=true;E.nm=E.nm||(E.real?'Rival':'Aldea de práctica');A.mmc=(typeof MM=='object'&&MM&&MM.cost)||0;if(window.__pend){E.nm=window.__pend.nm;A.mm=1;A.mmc=window.__pend.mmc;window.__pend=null}pick=Object.keys(TR).find(k=>A.army[k]>0)||pick;hDirty()}catch(e){}}
/* ---------- emparejamiento directo ---------- */
const btlOpen0=btlOpen;
btlOpen=function(){if(S.tut!=null&&S.tut<TUTS.length)BTL.tab='solo';btlOpen0()};
window.btlOpenMenu=btlOpen0;
const fr1=findReal;
findReal=async function(){if((S.shield||0)>TNOW()&&!window.__shOK){shWarn();return}window.__shOK=0;return fr1.apply(this,arguments)};
function shWarn(){let el=document.getElementById('shW');if(!el){el=document.createElement('div');el.id='shW';document.body.appendChild(el);el.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;el.style.display='none';if(b.dataset.s=='go'){window.__shOK=1;findReal()}})}
 el.innerHTML='<div class=sc><b>🛡 Tienes escudo</b><div>Si atacas a otro jugador, tu escudo de protección se rompe.</div><div class=sb><button data-s=no>Cancelar</button><button data-s=go class=okb>Atacar igual</button></div></div>';el.style.display='flex'}
const mmDraw0=mmDraw;
mmDraw=function(){if(MM&&MM.on&&MM.cur&&!MM.load){const d=MM.cur;try{if(d.shield_until&&Date.parse(d.shield_until)>TNOW()){MM.cur=null;mmNext();return}}catch(e){}MM.on=0;mmDraw0();window.__pend={nm:d.name||'Rival',mmc:MM.cost||mmCost()};cloudRun(()=>startReal(d.id,{b:d.base,g:d.gold,e:d.elixir,loot:d.loot,offer:d.offer}));return}mmDraw0()};
function restoreArmy(){for(const k in A.army)S.army[k]+=A.army[k];for(const k in A.sp)S.sp[k]+=A.sp[k]}
function atkNext(){if(!A||!A.on||A.tr.length||!(A.prep>0))return;if(E&&E.npc){toast80('Aquí no hay Siguiente');return}const real=!!E.real;
 if(real){const c=A.mmc||mmCost();if((S.g|0)<c){hToast('Necesitas '+c+' 🪙 para buscar otro rival.');snd('deny');return}S.g-=c}
 restoreArmy();A=null;E=null;mode='v';closeMsg();snd('ui');ui();
 if(real){MM.on=1;MM.cur=null;MM.load=1;MM.msg='';mmNext()}else startAttack()}
function atkEnd(){if(!A||!A.on)return;
 if(!A.tr.length){A.on=false;restoreArmy();snd('ui');cloudRun(()=>{A=null;E=null;mode='v';closeMsg();ui()});return}
 if(!window.__rq){window.__rq=1;hDirty();setTimeout(()=>{window.__rq=0;hDirty()},3000);snd('ui');return}
 window.__rq=0;endAttack(1)}
/* ---------- mantener pulsado = desplegar varias ---------- */
let hold=null,holdT=0,holdSup=0;
const pd1=cv.onpointerdown;
cv.onpointerdown=function(e){pd1.call(this,e);if(!e.isPrimary){hold=null;return}
 if(mode=='a'&&A&&A.on&&!RPL&&!SPK(pick)){hold={sx:e.clientX,sy:e.clientY,x:e.clientX,y:e.clientY,t0:performance.now(),on:0};clearInterval(holdT);holdT=setInterval(holdTick,100)}};
cv.addEventListener('pointermove',e=>{if(hold&&e.isPrimary){hold.x=e.clientX;hold.y=e.clientY;if(!hold.on&&Math.hypot(hold.x-hold.sx,hold.y-hold.sy)>14)hold=null}});
addEventListener('pointerup',()=>{if(hold&&hold.on)holdSup=1;hold=null;clearInterval(holdT)},true);
addEventListener('pointercancel',()=>{hold=null;clearInterval(holdT)},true);
function holdTick(){if(!hold||mode!='a'||!A||!A.on){hold=null;clearInterval(holdT);return}
 if(performance.now()-hold.t0<380)return;if(!A.army[pick]){hold=null;clearInterval(holdT);return}
 hold.on=1;const[sx,sy]=scr({clientX:hold.x,clientY:hold.y}),[x,y]=w2t(sx,sy);deployAt(x,y)}
const tap1=tap;tap=function(sx,sy){if(holdSup){holdSup=0;return}const p0=mode=='v'?pk:null;const r=tap1(sx,sy);try{if(mode=='v'&&pk&&pk!==p0&&pk.t=='cannon'&&!pk.nb&&!pk.ruin)snd('cansel')}catch(e){}return r};
/* ---------- HUD de ataque ---------- */
let hd=null,hSig='',hMsgT=0,hLast=0;
function hDirty(){hSig=''}
function hToast(m){const el=document.getElementById('ahMsg');if(!el)return;el.textContent=m;el.classList.remove('on');void el.offsetWidth;el.classList.add('on');clearTimeout(hMsgT);hMsgT=setTimeout(()=>el.classList.remove('on'),2200)}
window.hToast=hToast;
function hBuild(){hd=document.createElement('div');hd.id='ah';
 hd.innerHTML=`<div class=ah-tl><b id=ahNm></b><small>Botín disponible:</small><div class=ah-r><i class=ig></i><span id=ahLg></span></div><div class=ah-r><i class=ie></i><span id=ahLe></span></div></div>
 <div class=ah-tm><small id=ahTl></small><b id=ahT></b></div>
 <div class=ah-tr><div class=ah-p><i class=ig></i><span id=ahMg></span></div><div class=ah-p><i class=ie></i><span id=ahMe></span></div></div>
 <div id=ahEnd class=ah-end></div>
 <div class=ah-dm><small>Daño total</small><div class=ah-ps><span class=ah-st id=ahSt></span><b id=ahPc></b></div></div>
 <div id=ahNx class=ah-nx><i>🔍</i><span><b>Siguiente</b><em id=ahNc></em></span></div>
 <div class=ah-cards id=ahCards></div><div id=ahMsg></div><div class=ah-free id=ahFree></div>`;
 document.body.appendChild(hd);
 hd.addEventListener('click',e=>{const b=e.target.closest('[data-ap],#ahEnd,#ahNx');if(!b)return;try{AC.resume()}catch(_){}
  if(b.id=='ahEnd')atkEnd();else if(b.id=='ahNx')atkNext();
  else if(b.dataset.ap){const k=b.dataset.ap,isS=b.classList.contains('sp')||!TR[k];PSP82=isS;pick=k;snd('sel');hDirty();const c=isS?A.sp[k]:A.army[k];if(!(c>0))hToast('¡Sin tropas de este tipo! ('+(isS?SP[k].n:TR[k].n)+')')}})}
const mmss=s=>{s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+'m '+String(s%60).padStart(2,'0')+'s'};
function hUpdate(){
 const on=mode=='a'&&A&&A.on&&!RPL;document.body.classList.toggle('ba',!!on);
 if(!hd)hBuild();hd.style.display=on?'block':'none';if(!on){hSig='';return}
 const $=id=>document.getElementById(id),prep=A.prep>0;
 const lt=lootNow();let tg=0,te=0;if(E.sh)for(const q of E.sh){tg+=q.g;te+=q.e}else{tg=E.lg||0;te=E.le||0}
 $('ahNm').textContent=E.nm||'Rival';$('ahLg').textContent=fK2(Math.max(0,tg-lt.g));$('ahLe').textContent=fK2(Math.max(0,te-lt.e));
 $('ahMg').textContent=fK2(S.g|0)+(lt.g?' +'+fK2(lt.g):'');$('ahMe').textContent=fK2(S.e|0)+(lt.e?' +'+fK2(lt.e):'');
 $('ahTl').textContent=prep?'La batalla empieza en:':'La batalla acaba en:';$('ahT').textContent=prep?Math.ceil(A.prep)+'s':mmss(A.time);
 const s=stars();$('ahSt').textContent='★★★'.slice(0,s)+'☆☆☆'.slice(0,3-s);$('ahPc').textContent=pctDisp(pct())+'%';
 const can=prep&&!A.tr.length;const nx=$('ahNx');nx.style.display=can?'flex':'none';if(can){const c=E.real?(A.mmc||mmCost()):0;$('ahNc').innerHTML=c?c+' 🪙':'Gratis'}
 const en=$('ahEnd');en.textContent=!A.tr.length?'Terminar batalla':(window.__rq?'¿Seguro?':'Rendirse');
 $('ahFree').textContent=freeTr()?'Tropas gratis: no se pierden en este nivel':'';
 const ks=Object.keys(TR).concat(['king']).filter(k=>TR[k]&&((A.a0&&A.a0[k]>0)||A.army[k]>0)),sp=Object.keys(SP).filter(k=>(A.sp0&&A.sp0[k]>0)||A.sp[k]>0);
 const sg=ks.map(k=>k+A.army[k]).join()+'|'+sp.map(k=>k+A.sp[k]).join()+'|'+pick+PSP82;
 if(sg!==hSig){hSig=sg;const lv=k=>((S.tl&&S.tl[k])||1);
  $('ahCards').innerHTML=ks.map(k=>{const c=A.army[k]|0;return `<div class="ahc${pick==k&&!(PSP82&&SP[k])?' on':''}${c?'':' z'}" data-ap="${k}"><img src="${tIcon(k)}" alt=""><b class=n>${k=='king'?(c?'':'x0'):'x'+c}</b><i class=lv>${lv(k)}</i></div>`}).join('')+sp.map(k=>{const c=A.sp[k]|0;return `<div class="ahc sp${pick==k&&(PSP82||!TR[k])?' on':''}${c?'':' z'}" data-ap="${k}"><span class=em>${SP[k].e}</span><b class=n>x${c}</b></div>`}).join('')}}
setInterval(()=>{try{hUpdate()}catch(e){}},120);
/* ---------- tutorial nuevo (sin saltar) ---------- */
(function(){let tm=null;const mine=()=>S.b.find(b=>b.t=='mine'&&!b.nb&&!b.ruin);
TUTS.length=0;
TUTS.push(
 {m:'¡Bienvenido, jefe! Soy tu consejero. Te enseñaré a construir, producir y <b>conquistar</b> en Base Rush.',next:1},
 {m:'Empecemos: abre el menú de <b>construir</b> (el martillo de abajo).',hl:()=>(UI.shop||sel)?null:'[data-tab=shop]',ok:()=>UI.shop||sel},
 {m:'Elige el <b>Cañón</b>: defiende tu aldea de los ataques.',hl:()=>sel?null:UI.shop?(UI.cat!='def'?'[data-sk=def]':'[data-b=cannon]'):'[data-tab=shop]',ok:()=>sel=='cannon'||cnt('cannon')>=1},
 {m:'Arrastra el edificio al lugar que quieras y pulsa <b>✔ Construir</b>.',hl:()=>sel?'[data-ok]':UI.shop?'[data-b=cannon]':'[data-tab=shop]',ok:()=>cnt('cannon')>=1},
 {m:'Construir tarda y ocupa un constructor 🔨. Mira el contador sobre la obra. ¡Esta vez la termino rápido!',next:1,on:()=>{if(!S.tutRew)for(const b of S.b)if(b.t=='cannon'&&b.up>3)b.up=b.ut=3}},
 {m:'Las <b>minas</b> producen oro solas. Cuando se llena su burbuja, <b>tócala</b> para recolectar.',hlMap:()=>tm&&tm.st>=1?tm:null,ok:()=>!tm||tm.st<1,on:()=>{tm=mine();if(tm&&!S.tutRew)tm.st=LIMF(tm)}},
 {m:'Ahora un <b>Cuartel</b>: Martillo → Ejército → Cuartel. Sin él no hay tropas.',hl:()=>sel?'[data-ok]':UI.shop?(UI.cat!='mil'?'[data-sk=mil]':'[data-b=rax]'):'[data-tab=shop]',ok:()=>cnt('rax')>=1,on:()=>{if(!S.tutRew)S.e=Math.max(S.e,800)}},
 {m:'Toca el cuartel y pulsa <b>Entrenar</b>.',hlMap:()=>(!pk||pk.t!='rax')&&!UI.train?rxB():null,hl:()=>UI.train?null:(pk&&pk.t=='rax'&&!pk.nb)?'[data-ta]':null,ok:()=>UI.train,on:()=>{if(S.tutRew)return;const r=rxB();if(r&&r.up>2)r.up=r.ut=2;S.e=Math.max(S.e,400)}},
 {m:'Entrena unos <b>Guerreros</b>: toca su tarjeta (mantén pulsado para varios). Si falta elixir la tarjeta se ve gris.',hl:()=>UI.train?'[data-tr=barb]':null,ok:()=>(S.army.barb||0)+qAll().filter(j=>j.k=='barb').reduce((a,j)=>a+j.n,0)>=4,after:()=>{if(!S.tutRew){for(const j of qAll())S.army[j.k]=(S.army[j.k]||0)+j.n;for(const b of S.b)if(b.q)b.q=[];S.q=[]}UI.train=0;snd('done')}},
 {m:'¡Tropas listas! Pulsa <b>Batalla</b> y elige <b>Atacar</b> en la aldea de práctica.',hl:()=>UI.train?null:(UI.btl?'[data-bgo=solo]':'[data-a]'),ok:()=>mode=='a',on:()=>{UI.train=0;pk=null;tab=null}},
 {m:'Tienes <b>30 segundos</b> para estudiar la base: arrastra para moverte y pellizca para hacer zoom. En la <b>zona roja</b> no puedes desplegar. Si no te gusta, pulsa <b>Siguiente</b>.',next:1,skip:()=>mode!='a'},
 {m:'Toca el terreno verde <b>lejos de los edificios</b> para soltar un guerrero. <b>Mantén pulsado</b> para soltar varios. ¡Al desplegar empiezan los 3 minutos!',ok:()=>mode!='a'||A.tr.length>=4},
 {m:'Tus tropas atacan solas: los guerreros van a lo más cercano, los <b>gigantes</b> a las defensas, los <b>duendes</b> a los recursos y los <b>bombarderos</b> a los muros.',next:1,skip:()=>mode!='a'},
 {m:'Arriba ves el <b>botín</b> y el tiempo. Con el <b>50%</b> de destrucción ganas ⭐, con el ayuntamiento ⭐ y con el <b>100%</b> ⭐⭐⭐.',next:1,skip:()=>mode!='a'},
 {m:'¡Destruye lo que puedas! Si te quedas sin tropas la batalla termina. 🏳️ Rendirse también la termina.',ok:()=>mode=='v'},
 {m:'Ahora sube tu <b>Ayuntamiento</b> al nivel 2: tócalo y pulsa <b>Mejorar</b>.',hl:()=>pk&&pk.t=='hall'?'[data-u]':null,hlMap:()=>pk&&pk.t=='hall'?null:hallB(),ok:()=>hallB().lv>=2||hallB().up>0,on:()=>{if(!S.tutRew){const h=hallB();S.g=Math.max(S.g,Math.min(cap.g(),h?upc(h):1500))}}},
 {m:'En el nivel 2 al 4 tus tropas son <b>gratis</b>: se entrenan al instante y no se pierden al morir. ¡Practica todo lo que quieras!',next:1},
 {m:'El menú ⚙ tiene tu perfil, el historial de batallas y los ajustes. ¡Lo lograste! Toma 500 de oro y 500 de elixir de regalo y sigue ampliando tu aldea.',m2:'¡Listo! Tutorial repasado. La recompensa de regalo es solo para jugadores nuevos. ¡A seguir!',next:1,on:()=>{if(!S.tutRew){S.g=Math.min(cap.g(),S.g+500);S.e=Math.min(cap.e(),S.e+500);S.tutRew=1}snd('done')},fin:1});
})();
/* ---------- estilos ---------- */
const st=document.createElement('style');st.textContent=`
body.ba #top,body.ba #top *,body.ba #top span.pill,body.ba #top button,body.ba #panel,body.ba #brSide,body.ba #brGoal,body.ba .dock,body.ba #slotBtn{display:none!important}
#tut [data-ts]{display:none!important}
#ah{position:fixed;inset:0;z-index:9;pointer-events:none;font-family:'Lilita One','Lilita One',system-ui,sans-serif;color:#fff;text-shadow:0 2px 0 #000,0 0 3px #000,1px 1px 0 #000,-1px -1px 0 #000;user-select:none;-webkit-user-select:none}
#ah [data-ap],#ahEnd,#ahNx{pointer-events:auto;cursor:pointer;touch-action:manipulation;box-sizing:border-box}
#ah small{display:block;font-size:12px;opacity:.95;letter-spacing:.3px}
.ah-tl{position:absolute;left:10px;top:calc(8px + env(safe-area-inset-top,0px))}
.ah-tl b{display:block;font-size:20px;line-height:1.05;margin-bottom:6px;max-width:32vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ah-r{display:flex;align-items:center;gap:6px;font-size:19px;line-height:1.2}
.ig,.ie{display:inline-block;width:22px;height:22px;border-radius:50%;flex:none}
.ig{background:radial-gradient(circle at 35% 30%,#fff4a0,#f5b800 60%,#a86a00);box-shadow:0 0 6px #ffb02088}
.ie{background:radial-gradient(circle at 35% 30%,#f0b8ff,#b028e8 60%,#5c0f86);box-shadow:0 0 6px #b028e888;border-radius:50% 50% 50% 50%/60% 60% 40% 40%}
.ah-tm{position:absolute;left:50%;top:calc(6px + env(safe-area-inset-top,0px));transform:translateX(-50%);text-align:center}
.ah-tm b{display:block;font-size:30px;line-height:1}
.ah-tr{position:absolute;right:10px;top:calc(8px + env(safe-area-inset-top,0px));display:flex;flex-direction:column;gap:5px;align-items:flex-end}
.ah-p{display:flex;align-items:center;gap:6px;font-size:16px;padding:2px 10px 2px 8px;border-radius:12px;background:#0a1120cc;border:1px solid #ffffff26;box-shadow:0 2px 8px #0008;min-width:110px;justify-content:flex-end}
.ah-p .ig,.ah-p .ie{width:18px;height:18px}
.ah-cards{z-index:1;position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:flex-end;gap:6px;padding:8px 6px calc(8px + env(safe-area-inset-bottom,0px));background:linear-gradient(0deg,#0a1226e6 55%,#0a122600);overflow-x:auto;pointer-events:auto}
.ahc{position:relative;flex:none;width:66px;height:80px;border-radius:10px;border:2px solid #2a3c66;background:linear-gradient(180deg,#5a8fd8,#2a5aa8 75%);padding:0;display:grid;place-items:center;box-shadow:0 3px 0 #0a1a3a;transition:transform .1s}
.ahc img{width:48px;height:56px;object-fit:contain;image-rendering:auto;margin-top:6px;pointer-events:none}
.ahc .em{font-size:34px;margin-top:6px}
.ahc.sp{background:linear-gradient(180deg,#b07be8,#6a35b0 75%)}
.ahc .n{position:absolute;right:4px;top:1px;font-size:17px}
.ahc .lv{position:absolute;left:4px;bottom:4px;font-style:normal;font-size:13px;min-width:20px;height:20px;line-height:20px;border-radius:50%;background:#1fb4e8;border:1.5px solid #fff;text-align:center;text-shadow:none;color:#fff;box-shadow:0 1px 3px #0008}
.ahc.on{transform:translateY(-8px) scale(1.06);border-color:#fff;box-shadow:0 0 0 2px #3de0ff,0 0 14px #3de0ffaa}
.ahc.z{background:linear-gradient(180deg,#8a8f98,#555a64 75%);border-color:#3a3d44}.ahc.z img,.ahc.z .em{filter:grayscale(1) brightness(.75)}.ahc.z .lv{background:#6a6f78}
.ah-end{z-index:2;position:absolute;left:10px;bottom:calc(98px + env(safe-area-inset-bottom,0px));padding:9px 16px;font-size:18px;color:#fff;text-shadow:0 2px 0 #5a0a05;border-radius:12px;border:2px solid #5a0a05;background:linear-gradient(180deg,#ff6a5a,#d8281c 60%,#a81810);box-shadow:0 4px 0 #5a0a05,0 6px 10px #0008;max-width:120px;line-height:1.05}
.ah-nx{z-index:2;position:absolute;right:10px;bottom:calc(98px + env(safe-area-inset-bottom,0px));display:none;align-items:center;gap:8px;padding:8px 14px 8px 10px;font-size:20px;color:#fff;text-shadow:0 2px 0 #7a3a00;border-radius:12px;border:2px solid #7a3a00;background:linear-gradient(180deg,#ffc04a,#ff8a1a 60%,#d8660a);box-shadow:0 4px 0 #7a3a00,0 6px 10px #0008}
.ah-nx i{font-style:normal;font-size:30px}.ah-nx span{display:flex;flex-direction:column;align-items:flex-start;line-height:1.05}.ah-nx em{font-style:normal;font-size:17px}
.ah-dm{position:absolute;right:10px;bottom:calc(168px + env(safe-area-inset-bottom,0px));text-align:right;padding:6px 12px;border-radius:12px;background:#0a1120b8;border:1px solid #ffffff22}
.ah-ps{display:flex;align-items:center;gap:8px;justify-content:flex-end}.ah-ps b{font-size:24px}.ah-st{font-size:19px;color:#ffd23a;letter-spacing:1px}
#ahMsg{position:absolute;left:50%;bottom:calc(250px + env(safe-area-inset-bottom,0px));transform:translateX(-50%) scale(.9);color:#ff4a3a;font-size:22px;opacity:0;white-space:nowrap;max-width:94vw;text-align:center;pointer-events:none}
#ahMsg.on{animation:ahm 2.2s both}@keyframes ahm{0%{opacity:0;transform:translateX(-50%) scale(.8)}10%{opacity:1;transform:translateX(-50%) scale(1.08)}18%{transform:translateX(-50%) scale(1)}80%{opacity:1}100%{opacity:0;transform:translateX(-50%) translateY(-16px)}}
.ah-free{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(172px + env(safe-area-inset-bottom,0px));font-size:12px;color:#8ff0b8;white-space:nowrap}
@media (orientation:landscape) and (max-height:560px){
 .ahc{width:54px;height:62px}.ahc img{width:38px;height:44px;margin-top:3px}.ahc .em{font-size:26px}.ahc .n{font-size:14px}.ahc .lv{width:17px;min-width:17px;height:17px;line-height:17px;font-size:11px}
 .ah-cards{padding:4px 6px calc(4px + env(safe-area-inset-bottom,0px));background:linear-gradient(0deg,#0a1226cc 55%,#0a122600)}
 .ah-end{bottom:calc(8px + env(safe-area-inset-bottom,0px));left:10px;font-size:15px;padding:7px 12px}
 .ah-nx{bottom:calc(8px + env(safe-area-inset-bottom,0px));font-size:16px;padding:5px 10px}.ah-nx i{font-size:24px}
 .ah-dm{bottom:calc(66px + env(safe-area-inset-bottom,0px));padding:3px 10px}.ah-ps b{font-size:19px}.ah-st{font-size:15px}
 .ah-tl b{font-size:17px;margin-bottom:3px}.ah-r{font-size:15px}.ig,.ie{width:17px;height:17px}.ah-tm b{font-size:24px}.ah-p{font-size:14px;min-width:90px}
 #ahMsg{bottom:calc(76px + env(safe-area-inset-bottom,0px));font-size:19px}.ah-free{bottom:calc(70px + env(safe-area-inset-bottom,0px))}
}
#cld{position:fixed;inset:0;z-index:60;overflow:hidden;pointer-events:none;visibility:hidden}
#cld.close,#cld.open{visibility:visible;pointer-events:auto}
#cld .cbg{position:absolute;inset:0;background:linear-gradient(180deg,#bcd8ff,#e8f3ff);opacity:0}
#cld.close .cbg{opacity:1;transition:opacity .22s ease .32s}#cld.open .cbg{opacity:0;transition:opacity .3s ease}
#cld i{position:absolute;width:52%;height:34%;transform:translateX(calc(var(--s)*135vw));transition:none;filter:drop-shadow(0 8px 10px #3a64a855);background:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20400%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23ffffff%22/%3E%3Cstop%20offset%3D%22.6%22%20stop-color%3D%22%23f4f9ff%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23cfe2fb%22/%3E%3C/linearGradient%3E%3Cfilter%20id%3D%22b%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%3CfeGaussianBlur%20stdDeviation%3D%223.5%22/%3E%3C/filter%3E%3C/defs%3E%3Cg%20filter%3D%22url%28%23b%29%22%20fill%3D%22url%28%23g%29%22%3E%3Ccircle%20cx%3D%2295%22%20cy%3D%22150%22%20r%3D%2258%22/%3E%3Ccircle%20cx%3D%22165%22%20cy%3D%22108%22%20r%3D%2272%22/%3E%3Ccircle%20cx%3D%22252%22%20cy%3D%22104%22%20r%3D%2278%22/%3E%3Ccircle%20cx%3D%22325%22%20cy%3D%22152%22%20r%3D%2260%22/%3E%3Crect%20x%3D%2260%22%20y%3D%22150%22%20width%3D%22300%22%20height%3D%2266%22%20rx%3D%2233%22/%3E%3Ccircle%20cx%3D%22205%22%20cy%3D%22160%22%20r%3D%2270%22/%3E%3C/g%3E%3C/svg%3E") center/100% 100% no-repeat}
#cld.close i{transform:translateX(0);transition:transform .5s cubic-bezier(.25,.8,.3,1) var(--d)}
#cld.open i{transform:translateX(calc(var(--s)*-135vw));transition:transform .6s cubic-bezier(.65,0,.9,.5) var(--d)}
#cld.rs i,#cld.rs .cbg{transition:none!important}
#shW{position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#050a14b0;font-family:system-ui,sans-serif}
#shW .sc{background:linear-gradient(180deg,#141e34,#0a1120);border:1px solid #3de0ff55;border-radius:16px;padding:18px;max-width:320px;color:#fff;text-align:center;box-shadow:0 10px 40px #000a}
#shW .sc b{font-size:19px;color:#3de0ff;display:block;margin-bottom:8px}#shW .sb{display:flex;gap:8px;margin-top:14px;justify-content:center}
#shW button{padding:10px 16px;border-radius:12px;border:1px solid #ffffff33;background:#1b2a4a;color:#fff;font-size:15px}#shW .okb{background:linear-gradient(180deg,#ffc04a,#ff8a1a);color:#3a1d00;border:0;font-weight:700}`;
document.head.appendChild(st);
})();

/* ===== v80: Bomba rediseñada (niveles 1-7, pop-up, explosión, mancha) ===== */
function bmbLv(o){return Math.max(1,Math.min(7,(o&&o.lv)|0||1))}
function drBombSpr(x,y,lv,z,t,pop){/* bomba negra con mecha */
 const r=8.5;y-=z;g.save();
 g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(x,y+z+2,r*.95,r*.45,0,0,7);g.fill();
 const gr=g.createRadialGradient(x-3,y-r-2,1,x,y-r+1,r+1);gr.addColorStop(0,'#6a6a78');gr.addColorStop(.35,'#26262e');gr.addColorStop(1,'#0c0c10');
 g.fillStyle=gr;g.beginPath();g.arc(x,y-r+1,r,0,7);g.fill();
 g.fillStyle='rgba(255,255,255,.55)';g.beginPath();g.ellipse(x-3,y-r-3,2.6,1.7,-.6,0,7);g.fill();
 g.fillStyle='#8a8a98';g.fillRect(x-2.4,y-r*2+1.2,4.8,3.4);
 g.strokeStyle='#caa46a';g.lineWidth=1.7;g.beginPath();g.moveTo(x,y-r*2+1.4);g.quadraticCurveTo(x+4,y-r*2-3,x+7,y-r*2-1);g.stroke();
 const f=((t/110)|0)%3;g.fillStyle=['#fff3a0','#ffb02e','#ff5a1f'][f];g.beginPath();g.arc(x+7.5,y-r*2-1.5,2.6+(f==0?.8:0),0,7);g.fill();
 g.fillStyle='#fff';g.beginPath();g.arc(x+7.5,y-r*2-1.5,1,0,7);g.fill();
 if(!pop&&lv>1){g.fillStyle='#ffd24a';for(let i=0;i<lv-1;i++){g.beginPath();g.arc(x-((lv-2)*2.2)+i*4.4,y+z+6,1.5,0,7);g.fill()}}
 g.restore()}
function drTrap(b){const[x,y]=P(b.x+.5,b.y+.5,2);g.save();
 if(b.t=='bomb')drBombSpr(x,y+1,bmbLv(b),0,performance.now(),0);
 else if(b.t=='spring'){g.strokeStyle='#d9d9e6';g.lineWidth=2.2;g.beginPath();for(let i=0;i<5;i++){g.moveTo(x-6,y-i*2.6);g.lineTo(x+6,y-i*2.6-1.3)}g.stroke();g.fillStyle='#e8523a';g.beginPath();g.arc(x,y-13,3.5,0,7);g.fill()}
 else{g.fillStyle='#4a4a5a';g.beginPath();g.arc(x,y-3,7.5,0,7);g.fill();g.strokeStyle='#aab';g.lineWidth=2;g.stroke();g.fillStyle='#e8523a';g.fillRect(x-1,y-8,2,10);g.fillRect(x-5,y-4,10,2)}
 g.restore()}
const BMBD=[0,20,24,29,35,42,54,72];
function trapTick(){if(!E.sc)E.sc=[];
 for(const tp of E.traps){const k=tp.k||'bomb';
  if(tp.d){/* bomba armada: explota tras 0.85 s */
   if(k=='bomb'&&tp.at!=null&&A.time<=tp.at-.85){const D=BMBD[bmbLv(tp)];tp.at=null;
    for(const t of A.tr)if(t.hp>0&&!t.fly&&Math.hypot(t.x-tp.x,t.y-tp.y)<3)t.hp-=D;
    A.fx.push({k:'boom',x:tp.x,y:tp.y,t:.32,L:.32,R:.7},{k:'ring',x:tp.x,y:tp.y,r:3,c:'255,214,70',t:.55,L:.55},{k:'puff',x:tp.x,y:tp.y,z:10,t:.7,L:.7},{k:'puff',x:tp.x+.3,y:tp.y-.2,z:22,t:.9,L:.9},{k:'puff',x:tp.x-.3,y:tp.y+.2,z:16,t:.8,L:.8});
    E.sc.push({x:tp.x,y:tp.y,a:A.time,s:tp.x*7.3+tp.y*3.1});A.sh=.3;snd('boom')}
   continue}
  const rad=k=='spring'?1:k=='bomb'?1.5:.9,af=k=='abomb';
  if(!A.tr.some(t=>t.hp>0&&!!t.fly==af&&Math.hypot(t.x-tp.x,t.y-tp.y)<rad))continue;tp.d=1;
  if(k=='bomb'){tp.at=A.time;tp.pt=performance.now();A.fx.push({k:'puff',x:tp.x,y:tp.y,z:2,t:.5,L:.5},{k:'puff',x:tp.x+.25,y:tp.y,z:4,t:.6,L:.6},{k:'puff',x:tp.x-.25,y:tp.y+.15,z:3,t:.55,L:.55});snd('spring');continue}
  if(k=='spring'){let n=0;for(const t of A.tr)if(t.hp>0&&Math.hypot(t.x-tp.x,t.y-tp.y)<1.6&&!t.fly&&TR[t.k].sp<=4&&n<3){t.hp=0;n++}A.fx.push({k:'puff',x:tp.x,y:tp.y,z:4,t:.5,L:.5});snd('spring')}
  else{const R=3.2,D=240;for(const t of A.tr)if(t.hp>0&&!!t.fly==af&&Math.hypot(t.x-tp.x,t.y-tp.y)<R)t.hp-=D;A.fx.push({k:'boom',x:tp.x,y:tp.y,t:.5,L:.5,R:1.8});A.sh=.5;snd('boom')}}}
function drScorch(c,u){/* mancha en estrella */
 const[p,q]=P(c.x,c.y,0),n=14,R=TW*1.5;g.save();g.translate(p,q);g.scale(1,.58);
 const a=Math.min(1,u<0?1:1-u);g.globalAlpha=.88*a;
 const gr=g.createRadialGradient(0,0,2,0,0,R);gr.addColorStop(0,'#1d1209');gr.addColorStop(.55,'#4a2c12');gr.addColorStop(1,'#6b4a22');
 g.fillStyle=gr;g.beginPath();for(let i=0;i<n*2;i++){const an=i*Math.PI/n+c.s,rr=R*(i%2?.62:1)*(.8+.2*Math.sin(i*2.7+c.s));g.lineTo(Math.cos(an)*rr,Math.sin(an)*rr)}g.closePath();g.fill();
 g.globalAlpha=.5*a;g.fillStyle='#120a05';g.beginPath();g.arc(0,0,R*.38,0,7);g.fill();g.restore()}
const dwz0=drWZone;drWZone=function(){dwz0();if(mode!='a'||!E||!E.traps)return;
 for(const c of(E.sc||[])){const age=c.a-A.time,u=(age-5)/4;if(u>=1)continue;drScorch(c,u)}
 const now=performance.now();for(const tp of E.traps){if(!tp.d||tp.at==null||tp.k!='bomb')continue;const e=Math.min(1,(tp.at-A.time)/.85),[p,q]=P(tp.x,tp.y,0),ez=1-Math.pow(1-e,3);
  drBombSpr(p,q,bmbLv(tp),ez*10,now,1);
  if(e>.5||true){g.save();g.globalAlpha=Math.max(0,.55*(1-e));g.fillStyle='#e8e8e8';g.beginPath();g.ellipse(p-9,q-2,6+e*10,3+e*5,0,0,7);g.fill();g.beginPath();g.ellipse(p+9,q-2,6+e*10,3+e*5,0,0,7);g.fill();g.restore()}}};

/* ===== v80: árboles mejorados + bosque alrededor de la isla (sin mar) ===== */
let WBK=0;
const FBG=()=>SKIN80&&SKIN80[S&&S.skin]?'#c3d6e6':'#3f7a2e';
const TPAL80=[['#1f5d24','#3d9a34','#86cf55','#c8f08a'],['#1d5a3e','#35915a','#7fcf8c','#c2f0c4'],['#2c6a1c','#58a82c','#afdc58','#e4f7a0'],['#25643a','#3f9552','#92d56a','#cdf0a0']];
const TSNOW80=['#5d7f99','#a9c6dc','#e6f2fa','#ffffff'];
const T80={};const rr80=s=>{s=(s*9301+49297)%233280;return s/233280};
function mkTree80(kind,v,snow){const SC=3,W=80,H=96,c=document.createElement('canvas');c.width=W*SC;c.height=H*SC;const x=c.getContext('2d');x.scale(SC,SC);let sd=v*131+7;const R=()=>(sd=(sd*9301+49297)%233280)/233280;
 const pal=snow?TSNOW80:TPAL80[v%TPAL80.length],bx=W/2,by=H-8;
 x.fillStyle='rgba(0,0,0,.26)';x.beginPath();x.ellipse(bx+3,by+1,kind=='bush'?16:26,kind=='bush'?6:9,0,0,7);x.fill();
 const trunk=(w,h)=>{x.fillStyle='#4a2f17';x.beginPath();x.moveTo(bx-w-3,by+1);x.quadraticCurveTo(bx-w,by-4,bx-w+1,by-h);x.lineTo(bx+w-1,by-h);x.quadraticCurveTo(bx+w,by-4,bx+w+3,by+1);x.closePath();x.fill();x.fillStyle='#7a4f27';x.beginPath();x.moveTo(bx-w-2,by+1);x.quadraticCurveTo(bx-w,by-4,bx-w+1,by-h);x.lineTo(bx,by-h);x.lineTo(bx,by+1);x.closePath();x.fill()};
 const blob=(cx,cy,r,i)=>{const g2=x.createRadialGradient(cx-r*.35,cy-r*.4,r*.1,cx,cy,r);g2.addColorStop(0,pal[Math.min(3,i+1)]);g2.addColorStop(.55,pal[i]);g2.addColorStop(1,pal[0]);x.fillStyle=g2;x.beginPath();x.arc(cx,cy,r,0,7);x.fill()};
 if(kind=='oak'||kind=='bush'){const s=kind=='bush'?.5:1,yy=kind=='bush'?by-6:by-34;if(kind=='oak')trunk(5,26);
  const lobes=[[0,-14,17],[-15,-4,14],[15,-4,14],[-8,6,14],[8,6,14],[0,-2,17]];
  x.strokeStyle=snow?'#4a6a84':'#1a4a1a';x.lineWidth=1.6;
  for(const l of lobes){x.beginPath();x.arc(bx+l[0]*s,yy+l[1]*s,l[2]*s,0,7);x.stroke()}
  lobes.forEach((l,i)=>blob(bx+l[0]*s,yy+l[1]*s,l[2]*s,i%2?1:1));
  for(let i=0;i<9;i++){const a=R()*6.28,d=R()*16*s;x.fillStyle=pal[3];x.globalAlpha=.55;x.beginPath();x.arc(bx+Math.cos(a)*d-4*s,yy-6*s+Math.sin(a)*d*.8,1.6+R()*1.8,0,7);x.fill()}x.globalAlpha=1;
  if(kind=='bush'&&!snow){x.fillStyle='#e8523a';for(let i=0;i<4;i++){x.beginPath();x.arc(bx-8+R()*16,yy-4+R()*10,1.8,0,7);x.fill()}}
  if(snow){x.fillStyle='#fff';for(const l of lobes){x.beginPath();x.ellipse(bx+l[0]*s,yy+(l[1]-l[2]*.55)*s,l[2]*.7*s,l[2]*.3*s,0,0,7);x.fill()}}}
 else{trunk(3.5,14);const tiers=[[by-12,26,22],[by-26,22,20],[by-40,18,18],[by-54,13,16]];
  tiers.forEach((t,i)=>{const [yb,hw,ht]=t,n=7;x.beginPath();x.moveTo(bx,yb-ht);for(let k=1;k<=n;k++){const u=k/n;x.lineTo(bx+hw*u+(k%2?-2:1),yb-ht+ht*u+(k%2?2:-1))}x.lineTo(bx+hw,yb);x.lineTo(bx-hw,yb);for(let k=n;k>=1;k--){const u=k/n;x.lineTo(bx-hw*u-(k%2?-2:1),yb-ht+ht*u+(k%2?2:-1))}x.closePath();
   const g2=x.createLinearGradient(bx-hw,0,bx+hw,0);g2.addColorStop(0,pal[2]);g2.addColorStop(.5,pal[1]);g2.addColorStop(1,pal[0]);x.fillStyle=g2;x.fill();x.strokeStyle=snow?'#4a6a84':'#173f1c';x.lineWidth=1.3;x.stroke();
   if(snow){x.fillStyle='#fff';x.beginPath();x.moveTo(bx,yb-ht);x.lineTo(bx+hw*.55,yb-ht*.42);x.lineTo(bx+hw*.2,yb-ht*.3);x.lineTo(bx-hw*.1,yb-ht*.45);x.lineTo(bx-hw*.5,yb-ht*.38);x.closePath();x.fill()}})}
 return c}
function tree80(kind,v,snow){const k=kind+v+(snow?'s':'');return T80[k]||(T80[k]=mkTree80(kind,v,snow))}
function drTree(x,y,kind,v,s){const snow=!!(SKIN80&&SKIN80[S&&S.skin]),c=tree80(kind,v&3,snow),sc=(s||1)/3;g.imageSmoothingEnabled=true;g.drawImage(c,x-c.width*sc/2,y-(c.height-8*3)*sc-0,c.width*sc,c.height*sc)}
function drObTree(o,x,y){const h=(o.x*7+o.y*13)&255;if(o.k=='bush')return drTree(x,y+10,'bush',h,.8);if(o.k=='pine')return drTree(x,y+22,h&1?'pine':'oak',h>>1,1.5);return drTree(x,y+10,h%3==0?'pine':'oak',h>>1,.9)}
let F80=null,F80n=0,F80g='';
function forestList(){if(F80&&F80n==N&&F80g==GFX)return F80;F80n=N;F80g=GFX;const L=[],R=GFX=='low'?5:GFX=='mid'?8:11;
 for(let ty=-R;ty<N+R;ty++)for(let tx=-R;tx<N+R;tx++){if(tx>=0&&ty>=0&&tx<N&&ty<N)continue;let h=(tx*73856093^ty*19349663)>>>0;const r1=(h%1000)/1000,r2=((h>>10)%1000)/1000,r3=((h>>5)%1000)/1000;if(r1>.9)continue;
  const jx=(r2-.5)*.7,jy=(r3-.5)*.7,p=P(tx+.5+jx,ty+.5+jy);const k=r2<.5?'oak':r2<.85?'pine':'oak';L.push({x:p[0],y:p[1]+6,k,v:h>>8,s:.95+r3*.45,fr:(ty>=N||tx>=N)?1:0,d:tx+ty+jx+jy})}
 L.sort((a,b)=>a.d-b.d);return F80=L}
function drForest(front){if(WBK)return;const L=forestList(),a=KS*cam.z,x0=(0-KS*cam.x)/a-80,x1=(cv.width-KS*cam.x)/a+80,y0=(0-KS*cam.y)/a-40,y1=(cv.height-KS*cam.y)/a+140;
 for(const t of L){if(t.fr!=front||t.x<x0||t.x>x1||t.y<y0||t.y>y1)continue;drTree(t.x,t.y,t.k,t.v,t.s)}}
const dwz81=drWZone;drWZone=function(){dwz81();if(!WBK&&(mode=='a'||(mode=='v'&&!wbOK())))drForest(1)};
const sk0=skinApply;skinApply=function(){sk0();F80=null};

/* ===== v80: tropas que caminan al campamento (saltan muros) + constructores ===== */
const V80={u:[],pend:[],ready:0,since:0,pm:null,lt:0,id:0,G:null,gt:0,gk:''};
function vGrid(){const now=performance.now();if(V80.G&&now-V80.gt<800)return V80.G;const G=new Uint8Array(N*N);
 for(const b of S.b){const d=TY[b.t];if(!d||d.trap)continue;const v=b.t=='wall'?2:b.t=='camp'?0:1;for(let y=b.y;y<b.y+d.s;y++)for(let x=b.x;x<b.x+d.s;x++)if(x>=0&&y>=0&&x<N&&y<N)G[y*N+x]=v}
 for(const o of S.ob||[])for(let y=o.y;y<o.y+o.sy;y++)for(let x=o.x;x<o.x+o.sx;x++)if(x>=0&&y>=0&&x<N&&y<N&&!G[y*N+x])G[y*N+x]=1;
 V80.gt=now;return V80.G=G}
function vPath(sx,sy,gx,gy,jump){const G=vGrid(),n=N*N,dist=new Float32Array(n).fill(1e9),prev=new Int32Array(n).fill(-1),jm=new Uint8Array(n),done=new Uint8Array(n);
 const s=sy*N+sx,t=gy*N+gx;if(sx<0||sy<0||sx>=N||sy>=N||gx<0||gy<0||gx>=N||gy>=N)return null;dist[s]=0;const open=[s];
 const ok=(x,y)=>x>=0&&y>=0&&x<N&&y<N&&G[y*N+x]==0;
 while(open.length){let bi=0;for(let i=1;i<open.length;i++)if(dist[open[i]]<dist[open[bi]])bi=i;const c=open.splice(bi,1)[0];if(done[c])continue;done[c]=1;if(c==t)break;const cx=c%N,cy=(c/N)|0;
  const rel=(nx,ny,w,j)=>{const k=ny*N+nx;if(dist[c]+w<dist[k]){dist[k]=dist[c]+w;prev[k]=c;jm[k]=j;open.push(k)}};
  for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const nx=cx+dx,ny=cy+dy;
   if(dx&&dy){if(ok(nx,ny)&&G[cy*N+nx]!=1&&G[ny*N+cx]!=1&&ok(nx,cy)&&ok(cx,ny))rel(nx,ny,1.42,0);continue}
   if(ok(nx,ny))rel(nx,ny,1,0);
   else if(jump&&nx>=0&&ny>=0&&nx<N&&ny<N&&G[ny*N+nx]==2){const lx=nx+dx,ly=ny+dy;if(ok(lx,ly))rel(lx,ly,5,1)}}}
 if(dist[t]>=1e9)return null;const P0=[];let c=t;while(c!=s){P0.push({x:c%N+.5,y:((c/N)|0)+.5,j:jm[c]});c=prev[c]}return P0.reverse()}
const vCell=(x,y)=>[Math.max(0,Math.min(N-1,Math.floor(x))),Math.max(0,Math.min(N-1,Math.floor(y)))];
function vNear(b,x,y){/* casilla libre junto a una estructura, la más cercana a (x,y) */const G=vGrid(),s=TY[b.t].s;let best=null,bd=1e9;for(let yy=b.y-1;yy<=b.y+s;yy++)for(let xx=b.x-1;xx<=b.x+s;xx++){if(xx>=b.x&&xx<b.x+s&&yy>=b.y&&yy<b.y+s)continue;if(xx<0||yy<0||xx>=N||yy>=N||G[yy*N+xx]!=0)continue;const d=Math.hypot(xx+.5-x,yy+.5-y);if(d<bd){bd=d;best=[xx,yy]}}return best}
const vCamps=()=>S.b.filter(b=>b.t=='camp'&&!b.nb&&!b.ruin&&b.hp>0);
function vSlot(u,c){const a=((u.id*2.399)%6.28),r=.9+((u.id*37)%10)/10*.8;return[c.x+2+Math.cos(a)*r,c.y+2+Math.sin(a)*r]}
function vSpawn(k,instant){const cs=vCamps();if(!cs.length)return;const c=cs[V80.id%cs.length],u={vu:1,id:++V80.id,k,hp:1,max:1,x:0,y:0,path:[],pi:0,st:'idle',w:Math.random()*2,fx:1,mv:0,camp:c,sw:0,jz:0,d:0},sl=vSlot(u,c);u.slot=sl;
 const rx=S.b.filter(b=>b.t=='rax'&&!b.nb&&!b.ruin);
 if(!instant&&rx.length){const r=rx.reduce((m,b)=>!m||Math.hypot(b.x-c.x,b.y-c.y)<Math.hypot(m.x-c.x,m.y-c.y)?b:m,null),st=vNear(r,sl[0],sl[1]);
  if(st){const[gx,gy]=vCell(sl[0],sl[1]),p=vPath(st[0],st[1],gx,gy,true);if(p){u.x=st[0]+.5;u.y=st[1]+.5;u.path=p;u.path.push({x:sl[0],y:sl[1],j:0});u.st='walk';V80.u.push(u);return}}}
 u.x=sl[0];u.y=sl[1];V80.u.push(u)}
function vMove(u,dt,sp){if(u.jmp){const j=u.jmp;j.t+=dt;const p=Math.min(1,j.t/j.L);u.x=j.sx+(j.tx-j.sx)*p;u.y=j.sy+(j.ty-j.sy)*p;u.jz=Math.sin(p*Math.PI)*24;u.mv=1;if(p>=1){u.jmp=null;u.jz=0;u.pi++}return}
 if(u.pi>=u.path.length){u.mv=0;return false}
 const w=u.path[u.pi];
 if(w.j){u.jmp={t:0,L:.6,sx:u.x,sy:u.y,tx:w.x,ty:w.y};try{snd('jump')}catch(e){}return}
 const dx=w.x-u.x,dy=w.y-u.y,d=Math.hypot(dx,dy),st=sp*dt;u.mv=1;if(d<=st){u.x=w.x;u.y=w.y;u.pi++}else{u.x+=dx/d*st;u.y+=dy/d*st}
 return true}
function vBuilders(){const hs=S.b.filter(b=>b.t=='hut'&&!b.ruin&&!b.nb&&!b.rpr&&b.hp>0);let have=V80.u.filter(u=>u.k=='worker');
 for(const u of have)if(!hs.some(h=>h===u.hut)){V80.u.splice(V80.u.indexOf(u),1)}
 for(const h of hs)if(!V80.u.some(u=>u.k=='worker'&&u.hut===h)){const c=vNear(h,h.x+1,h.y+3)||[h.x,h.y];V80.u.push({vu:1,id:++V80.id,k:'worker',hut:h,hp:1,max:1,x:c[0]+.5,y:c[1]+.5,path:[],pi:0,st:'idle',w:1+Math.random()*3,fx:1,mv:0,jz:0,d:0})}}
function vJobs(){const J=[];for(const b of S.b)if(b.up>0&&b.t!='wall'&&b.t!='hut'&&!TY[b.t].trap&&b.hp>=0)J.push({b,x:b.x+TY[b.t].s/2,y:b.y+TY[b.t].s/2,o:b});for(const o of S.ob||[])if(o.up>0)J.push({b:o,x:o.x+o.sx/2,y:o.y+o.sy/2,o,ob:1});return J}
function vStep(dt){const now=performance.now();
 if(mode!='v'||!S||!S.b){V80.ready=0;V80.since=now;V80.u.length=0;V80.pend.length=0;return}
 if(!V80.ready&&now-V80.since>1500)V80.ready=1;
 if(now-V80.lt>400){V80.lt=now;vBuilders();
  const cs=vCamps(),have={};for(const u of V80.u)if(u.k!='worker')have[u.k]=(have[u.k]||0)+1;let tot=V80.u.length;
  for(const k in TR){if(!cs.length){break}const want=Math.min(S.army[k]|0,k=='king'?1:14),pn=V80.pend.filter(p=>p.k==k).length,h=have[k]||0;
   if(want>h+pn){for(let i=0;i<want-h-pn&&tot<60;i++){if(V80.ready)V80.pend.push({k,at:now+(V80.pend.length+i)*350});else vSpawn(k,1);tot++}}
   else if(want<h){let n=h-want;for(let i=V80.u.length-1;i>=0&&n>0;i--)if(V80.u[i].k==k){V80.u.splice(i,1);n--}}}
  if(!cs.length)V80.u=V80.u.filter(u=>u.k=='worker');
  V80.u=V80.u.filter(u=>u.k=='worker'||!u.camp||S.b.includes(u.camp));
  /* trabajos para constructores */
  const J=vJobs();for(const u of V80.u)if(u.k=='worker'&&u.job&&!J.some(j=>j.o===u.job.o)){u.job=null;u.st='idle';u.w=.5;u.path=[];u.pi=0}
  for(const j of J){if(V80.u.some(u=>u.k=='worker'&&u.job&&u.job.o===j.o))continue;let bu=null,bd=1e9;for(const u of V80.u)if(u.k=='worker'&&!u.job&&!u.jmp){const d=Math.hypot(u.x-j.x,u.y-j.y);if(d<bd){bd=d;bu=u}}
   if(!bu)break;const[sx,sy]=vCell(bu.x,bu.y);let tgt=j.ob?null:vNear(j.b,bu.x,bu.y);if(j.ob){const G=vGrid();let bb=1e9;for(let yy=j.b.y-1;yy<=j.b.y+j.b.sy;yy++)for(let xx=j.b.x-1;xx<=j.b.x+j.b.sx;xx++){if(xx<0||yy<0||xx>=N||yy>=N||G[yy*N+xx])continue;const d=Math.hypot(xx-bu.x,yy-bu.y);if(d<bb){bb=d;tgt=[xx,yy]}}}
   if(!tgt)continue;const p=vPath(sx,sy,tgt[0],tgt[1],false);if(p){bu.job=j;bu.path=p;bu.pi=0;bu.st='go';bu.face=[j.x,j.y]}}}
 for(const u of V80.pend.filter(p=>now>=p.at)){V80.pend.splice(V80.pend.indexOf(u),1);vSpawn(u.k,0)}
 for(const u of V80.u){const px=u.x;
  if(u.k=='worker'){
   if(u.st=='go'||u.st=='home'){if(vMove(u,dt,1.5)===false){if(u.st=='go'){u.st='work';u.mv=0}else{u.st='idle';u.w=1+Math.random()*3}}}
   else if(u.st=='work'){u.mv=0}
   else if(u.st=='wander'){if(vMove(u,dt,1.2)===false){u.st='idle';u.w=1.5+Math.random()*4}}
   else{u.mv=0;u.w-=dt;if(u.w<=0){const h=u.hut,G=vGrid();let t=null;for(let k=0;k<12&&!t;k++){const x=Math.max(0,Math.min(N-1,Math.floor(h.x+1+(Math.random()-.5)*14))),y=Math.max(0,Math.min(N-1,Math.floor(h.y+1+(Math.random()-.5)*14)));if(G[y*N+x]==0)t=[x,y]}
     if(t){const[sx,sy]=vCell(u.x,u.y),p=vPath(sx,sy,t[0],t[1],false);if(p){u.path=p;u.pi=0;u.st='wander'}else u.w=2}else u.w=2}}}
  else{
   if(u.st=='walk'){if(vMove(u,dt,1.7)===false){u.st='idle';u.w=1+Math.random()*3}}
   else if(u.st=='move'){if(vMove(u,dt,.55)===false){u.st='idle';u.w=1.5+Math.random()*4}}
   else{u.mv=0;u.w-=dt;if(u.w<=0&&u.camp){const a=Math.random()*6.28,r=.8+Math.random()*1.0;u.path=[{x:u.camp.x+2+Math.cos(a)*r,y:u.camp.y+2+Math.sin(a)*r,j:0}];u.pi=0;u.st='move'}}}
  if(Math.abs(u.x-px)>.001)u.fx=u.x>px?1:-1;if(u.face&&u.st=='work')u.fx=(u.face[0]-u.face[1])>(u.x-u.y)?1:-1;
  let d=u.x+u.y+.25;if(u.camp&&u.x>=u.camp.x&&u.x<u.camp.x+4&&u.y>=u.camp.y&&u.y<u.camp.y+4)d=u.camp.x+u.camp.y+4.2;u.d=d}}
function vuList(){if(mode!='v')return[];const now=performance.now();if(V80.pt!==now){const dt=Math.min(.1,Math.max(0,(now-(V80.pm||now))/1000));V80.pm=now;V80.pt=now;try{vStep(dt)}catch(e){console.warn('vStep',e)}}return V80.u}
function drWorker(u){const[x0,y0]=P(u.x,u.y),now=performance.now(),x=Math.round(x0),y=Math.round(y0),fx=u.fx||1,w=u.st=='work',bob=u.mv?Math.sin(now/90+u.id)*1.6:0,lz=u.jz||0;
 g.save();g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(x,y,8,3.2,0,0,7);g.fill();g.translate(x,y-lz+bob);g.scale(fx,1);
 const ph=u.mv?Math.sin(now/110+u.id)*3:0;
 g.fillStyle='#4a2f17';g.fillRect(-4,-7+(ph>0?0:1),3,7);g.fillRect(1,-7+(ph>0?1:0),3,7);
 g.fillStyle='#d26a1e';g.fillRect(-5,-17,10,11);g.fillStyle='#ffb13b';g.fillRect(-5,-17,10,3);g.fillStyle='#5a3a1a';g.fillRect(-5,-9,10,2);
 g.fillStyle='#f0c9a0';g.beginPath();g.arc(0,-21,4.6,0,7);g.fill();
 g.fillStyle='#ffd23a';g.beginPath();g.arc(0,-22,5.2,Math.PI,0);g.fill();g.fillRect(-6,-22,12,2);g.fillStyle='#d9a800';g.fillRect(-1,-27,2,2);
 const sw=w?Math.sin(now/110+u.id)*1.1:(u.mv?Math.sin(now/110+u.id)*.5:0.2);
 g.save();g.translate(4,-15);g.rotate(-.8+sw);g.fillStyle='#f0c9a0';g.fillRect(-1.5,0,3,7);g.fillStyle='#7a4f27';g.fillRect(-1,5,2,8);g.fillStyle='#9aa4b0';g.fillRect(-4,10,8,4);g.restore();
 g.restore();
 if(w&&((now/220+u.id)|0)%3==0){g.fillStyle='#ffe9a0';g.fillRect(x+fx*12,y-14,2,2);g.fillRect(x+fx*14,y-17,2,2)}}
const drT80=drT;drT=function(t){if(t.k=='worker')return drWorker(t);if(t.vu){if(t.jz){g.save();g.translate(0,-t.jz);drT80(t);g.restore();return}if(t.k=='barb'&&t.st=='idle'){t.at=0}}return drT80(t)};
function vOcc(u){for(const b of S.b){if(b.hp<=0||b.t=='wall'||!TY[b.t]||TY[b.t].trap||wbDyn(b))continue;const s=TY[b.t].s,d=b.x+b.y+s;if(d<=u.d)continue;if(u.x>=b.x&&u.x<b.x+s&&u.y>=b.y&&u.y<b.y+s)continue;
  const p=P(b.x+s/2,b.y+s/2),q=P(u.x,u.y);if(Math.abs(p[0]-q[0])>s*TW*.55+16||q[1]>p[1]+s*TH*.55||q[1]<p[1]-TY[b.t].h-34)continue;drB(b);g.globalAlpha=1}}

/* ===== v80: enganche (metas, impulso novato, campaña goblin, NPC, cofre, caja de gemas, eventos, aspecto) ===== */
const tut80=()=>!(S&&S.tut!=null&&S.tut<TUTS.length);
const on80=()=>!OFFLINE&&typeof sb!='undefined'&&sb&&typeof ME!='undefined'&&ME;
const day80=()=>new Date(Date.now()-4*36e5).toISOString().slice(0,10);
const dow80=()=>new Date(Date.now()-4*36e5).getUTCDay();
const msToMid80=()=>{const n=new Date(Date.now()-4*36e5);return Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()+1)-n.getTime()};
const fT80=ms=>{const s=Math.max(0,Math.floor(ms/1e3)),h=Math.floor(s/3600),m=Math.floor(s%3600/60);return h?h+' h '+m+' min':m+' min '+(s%60)+' s'};
function toast80(h){const d=document.createElement('div');d.className='t80';d.innerHTML=h;document.body.appendChild(d);setTimeout(()=>d.remove(),3200);try{snd(990)}catch(e){}}
async function claim80(key,amt){/* esmeraldas: servidor (online_v27.sql) o local en offline */
 if(!on80()){S.gem=(S.gem|0)+amt;try{save()}catch(e){}return amt}
 try{const r=await sb.rpc('claim_reward',{p_key:key});if(r.error)throw r.error;S.gem=r.data.gems;return r.data.granted|0}
 catch(e){console.warn('claim_reward',e.message||e);toast80('⚠ Recompensa no disponible ahora');return -1}}
/* ---- aspecto de aldea ---- */
const SKIN80={};
function SK1(c){const k=SKIN80[S&&S.skin];return k&&k.m[c]||c}
const trC0=[PL.G,PL.H];
function skinApply(){const k=SKIN80[S&&S.skin];PL.G=k?k.tr[0]:trC0[0];PL.H=k?k.tr[1]:trC0[1];_tck=_tcp='';TCv=null;TCx=null}
const dg80=drGrass0;drGrass0=function(){if(SKIN80[S&&S.skin]||window.LANDID91)return;dg80()};
async function skinBuy(id){const k=SKIN80[id];if(!k||(S.skins||{})[id])return;if((S.gem|0)<k.p){toast80('Te faltan 💎 ('+k.p+')');return}
 if(!(await gemPay(k.p))){toast80('No se pudo comprar');return}S.skins=S.skins||{};S.skins[id]=1;S.skin=id;skinApply();try{save();ui()}catch(e){}toast80('🎨 ¡'+k.n+' desbloqueada!');modal80(true)}
/* ---- eventos (semana, hora de Caracas) ---- */
const EV80=[{n:'Domingo de gemas',i:'💎',f:['gems','camp'],t:'Cajas de gemas el doble de seguido · botín doble en campaña'},{n:'Obras veloces',i:'⚡',f:['speed'],t:'Construcciones y mejoras al doble de velocidad'},{n:'Botín doble',i:'💰',f:['camp'],t:'Campaña goblin: oro y elixir ×2'},{n:'Entrenamiento relámpago',i:'🪖',f:['train'],t:'Entrenar tropas es instantáneo'},{n:'Obras veloces',i:'⚡',f:['speed'],t:'Construcciones y mejoras al doble de velocidad'},{n:'Lluvia de cajas',i:'🎁',f:['gems'],t:'Las cajas de gemas aparecen el doble de seguido'},{n:'Sábado épico',i:'🔥',f:['train','camp'],t:'Entrenamiento instantáneo + botín doble en campaña'}];
const evNow=()=>EV80[dow80()];
function evtOn(f){return false}
/* ---- impulso novato (24 h) ---- */
const boostMs=()=>S&&S.t0?Math.max(0,S.t0+864e5-Date.now()):0;
const vil80=vil;vil=function(dt){if(S&&S.b&&dt>0){if(!S.t0&&tut80())S.t0=Date.now();const k=(boostMs()>0?2:0)+(evtOn('speed')?1:0);if(k>0)for(const b of S.b)if(b.up>0)b.up=Math.max(.0011,b.up-dt*k)}vil80(dt)};
const gemCost0=gemCost;/* terminar gratis lo que quede ≤10 min durante el impulso */
const gemPay80=gemPay;gemPay=async function(c){if(c<=0)return 1;return gemPay80(c)};
/* ---- campaña goblin / NPC ---- */
const CAMP80=['Aldea de Chispa','Campamento Tuerto','Fuerte Remendón','Torre del Pillo','Mina Robada','Refugio Hediondo','Fortaleza Garra','Bastión Oxidado','Ciudadela Verdosa','Rey Goblin'];
function npcBase(i){const occ=new Set(),b=[];const put=(t,x,y,lv)=>{const s=TY[t].s;for(let a=0;a<s;a++)for(let c=0;c<s;c++)if(occ.has((x+a)+','+(y+c))||x+a<0||y+c<0||x+a>23||y+c>23)return 0;for(let a=0;a<s;a++)for(let c=0;c<s;c++)occ.add((x+a)+','+(y+c));b.push([t,x,y,lv]);return 1};
 put('hall',10,10,Math.max(1,Math.min(5,1+(i>>1))));
 const defs=[['cannon',6,6],['cannon',15,15],['tower',15,6],['tower',6,15],['mortar',10,5],['cannon',10,16],['tower',5,10],['cannon',16,10],['tower',10,2],['cannon',10,19]];
 const n=i==0?1:Math.min(10,2+i),lv=Math.max(1,Math.min(6,Math.ceil((i+1)/2)));
 for(let k=0;k<n;k++){const d=defs[k];if(d[0]=='mortar'&&i<4)continue;put(d[0],d[1],d[2],d[0]=='mortar'?Math.min(3,1+(i>>2)):lv)}
 put('gst',3,3,1);put('est',18,3,1);put('mine',3,18,1);put('pump',18,18,1);
 if(i>=2){const wl=Math.min(3,1+(i>>2)),a=7,z=16;for(let x=a;x<=z;x++)for(const y of[a,z])if(!occ.has(x+','+y)){b.push(['wall',x,y,wl]);occ.add(x+','+y)}for(let y=a+1;y<z;y++)for(const x of[a,z])if(!occ.has(x+','+y)){b.push(['wall',x,y,wl]);occ.add(x+','+y)}}
 const bt=[];for(let k=0;k<Math.min(4,i>>1);k++)bt.push(['bomb',[9,14,9,14][k],[8,8,15,15][k],Math.max(1,Math.min(7,1+(i>>2)))]);
 const g=Math.round(150*Math.pow(i+1,1.3)),e=Math.round(130*Math.pow(i+1,1.3));
 return{b:b.filter(o=>TY[o[0]]).concat(bt),g,e,tr:0}}
function startNpc(i,nm,opt){opt=opt||{};cloudRun(()=>{const d=npcBase(i);startReal0('npc'+i,d);E.real=0;E.npc=1;E.ci=opt.camp?i:-1;E.nm=nm;E.f=1;if(opt.camp&&evtOn('camp')){E.lg*=2;E.le*=2}if(opt.camp&&window.evMult91&&evMult91()>1){E.lg*=evMult91();E.le*=evMult91()}E.sh=[];{const gs=E.b.filter(b=>b.t=='gst'||b.t=='mine'),es=E.b.filter(b=>b.t=='est'||b.t=='pump');gs.forEach(b=>E.sh.push({b,g:Math.round(E.lg/gs.length),e:0}));es.forEach(b=>E.sh.push({b,g:0,e:Math.round(E.le/es.length)}))}try{aInit()}catch(e){console.warn(e)}})}
const eA80=endAttack;endAttack=function(sur){let s=0,ci=-1,np=0;try{if(mode=='a'&&A&&A.on){s=stars();ci=E.ci;np=E.npc}}catch(e){}
 const r=eA80(sur);try{if(s>0||np){S.ds=S.ds&&S.ds.d==day80()?S.ds:{d:day80(),n:0,c:[]};S.ds.n+=s;if(ci>=0&&s>0){S.camp=S.camp||[];const o=S.camp[ci]|0;if(s>o){S.camp[ci]=s;if(s==3&&on80())claim80('camp_'+ci+'_3',(CAMP_G80[ci]|0)).then(g=>{if(g>0)toast80('🏆 Campaña: +'+g+' 💎')});else if(s==3){claim80('camp_'+ci+'_3',CAMP_G80[ci]|0).then(g=>{if(g>0)toast80('🏆 Campaña: +'+g+' 💎')})}}}try{save()}catch(e){}}}catch(e){console.warn(e)}return r};
const CAMP_G80=[2,2,3,3,4,4,5,5,6,10];
/* primera victoria asegurada + rivales de relleno */
const fR80=findReal;findReal=async function(){if(!S.fw&&(S.wins|0)<1&&!(S.camp&&S.camp[0])&&used(S.army)){S.fw=1;try{save()}catch(e){}startNpc(0,'Goblin Novato');return}return fR80.apply(this,arguments)};
const mN80=mmNext;mmNext=async function(){await mN80.apply(this,arguments);try{if(MM&&!MM.cur&&!MM.load&&/No hay/.test(MM.msg||'')){if(MM.paid){S.g=Math.min(cap.g(),S.g+MM.paid);MM.paid=0}MM.on=0;MM.msg='';mmDraw();const i=Math.min(9,Math.max(0,myHall()-1));startNpc(i,'Rival de entrenamiento')}}catch(e){console.warn(e)}};
/* ---- caja de gemas en el mapa ---- */
function boxTick(){try{if(mode!='v'||!S||!S.b||!tut80())return;const d=day80();if(!S.bx||S.bx.d!=d)S.bx={d,n:0,t:Date.now()+(evtOn('gems')?2:4)*6e4,c:null};
 if(!S.bx.c&&S.bx.n<5&&Date.now()>=S.bx.t&&!document.hidden){for(let k=0;k<60;k++){const x=1+Math.floor(Math.random()*(N-2)),y=1+Math.floor(Math.random()*(N-2));if(free(S.b,x,y,1)){S.bx.c={x,y};break}}}}catch(e){}}
setInterval(boxTick,5000);
const dwz80=drWZone;drWZone=function(){dwz80();if(mode!='v'||!S||!S.bx||!S.bx.c)return;const[p,q]=P(S.bx.c.x+.5,S.bx.c.y+.5,0),t=performance.now()/300,z=6+Math.sin(t)*3;g.save();g.fillStyle='rgba(0,0,0,.25)';g.beginPath();g.ellipse(p,q,11,5,0,0,7);g.fill();
 g.translate(p,q-z-12);g.fillStyle='#7a4aa8';g.fillRect(-11,-3,22,16);g.fillStyle='#b07bff';g.fillRect(-11,-3,22,6);g.fillStyle='#ffd24a';g.fillRect(-2,-3,4,16);g.fillStyle='#3de0ff';g.beginPath();g.moveTo(0,-15);g.lineTo(7,-8);g.lineTo(0,-1);g.lineTo(-7,-8);g.closePath();g.fill();g.strokeStyle='#fff';g.lineWidth=1.4;g.stroke();g.restore()};
const tap80=tap;tap=function(sx,sy){if(mode=='v'&&S&&S.bx&&S.bx.c&&!sel){const[x,y]=w2t(sx,sy),c=S.bx.c;if(x>c.x-.8&&x<c.x+1.8&&y>c.y-.8&&y<c.y+1.8){const n=S.bx.n+1;S.bx.c=null;S.bx.n=n;S.bx.t=Date.now()+(evtOn('gems')?3:7)*6e4;claim80('box_'+day80()+'_'+n,2).then(g=>{if(g>0)toast80('🎁 Caja de gemas: +'+g+' 💎');try{ui();save()}catch(e){}});return}}return tap80(sx,sy)};
/* ---- metas ---- */
const ca80=()=>(S.camp||[]).reduce((a,b)=>a+(b|0),0);
const GOALS80=[
 {t:'Construye 2 defensas (cañón o torre)',ok:()=>cnt('cannon')+cnt('tower')>=2,ar:'[data-tab=shop]',g:3},
 {t:'Ten al menos 8 tropas entrenadas',ok:()=>Object.values(S.army).reduce((a,b)=>a+b,0)>=8,g:3},
 {t:'Completa el nivel 1 de la campaña goblin',ok:()=>(S.camp||[])[0]>=1,ar:'.db.atk',g:5},
 {t:'Sube el Ayuntamiento al nivel 2',ok:()=>hl()>=2,g:5},
 {t:'Consigue 6 ⭐ en la campaña',ok:()=>ca80()>=6,ar:'.db.atk',g:8},
 {t:'Gana una batalla contra un jugador',ok:()=>(S.wins|0)>=1,ar:'.db.atk',g:8},
 {t:'Sube el Ayuntamiento al nivel 3',ok:()=>hl()>=3,g:10},
 {t:'Coloca 2 bombas (Ayuntamiento 3)',ok:()=>cnt('bomb')>=2,ar:'[data-tab=shop]',g:10},
 {t:'Compra el aspecto Aldea Nevada',ok:()=>!!(S.skins&&S.skins.nevada),g:12},
 {t:'Llega a 120 🏆 (liga Plata)',ok:()=>(S.tr|0)>=120,g:15}];
const gcl=()=>S.gc||(S.gc=[]);
function cl80(){try{return cl80i()}catch(e){return{g:0,d:0,m:0,n:0}}}function cl80i(){const G=GOALS80[gCur()],g=!!G&&G.ok(),ds=S.ds&&S.ds.d==day80()?S.ds:{n:0,c:[]},d=[3,6,10].some((n,k)=>ds.n>=n&&!ds.c.includes(k+1)),m=(typeof mReady=='function'?mReady():0)>0;return{g,d,m,n:(g?1:0)+(m?1:0)}}window.cl80=cl80;
const gCur=()=>GOALS80.findIndex((_,i)=>!gcl().includes(i+1));
let gBusy=0;async function goalClaim(){const i=gCur();if(i<0||gBusy)return;const G=GOALS80[i];if(!G.ok())return;gBusy=1;try{const r=await claim80('goal_'+(i+1),G.g);if(r>=0){gcl().push(i+1);toast80('🎯 Meta cumplida: +'+G.g+' 💎');try{ui();save()}catch(e){}if(window.__juice)window.__juice.spark(innerWidth/2,innerHeight*.25,30,'#3de0ff')}}finally{gBusy=0}}
/* ---- UI ---- */
const bar80=document.createElement('div');bar80.id='e80g';document.body.appendChild(bar80);
const arr80=document.createElement('div');arr80.id='e80a';arr80.textContent='👇';document.body.appendChild(arr80);
const sb80=document.createElement('button');sb80.id='e80b';sb80.className='fl';sb80.innerHTML='🎯<i class=dt style="display:none"></i>';
setTimeout(()=>{const sd=document.getElementById('brSide');if(sd)sd.appendChild(sb80)},800);
sb80.onclick=()=>{try{snd('open')}catch(e){}modal80()};
bar80.onclick=()=>{const i=gCur();if(i>=0&&GOALS80[i].ok())goalClaim();else modal80()};
function e80ok(){return mode=='v'&&S&&S.b&&tut80()&&!UI.shop&&!UI.train&&!UI.lab&&!sel&&!pk&&!document.getElementById('msg').classList.contains('on')&&document.getElementById('e80m').style.display!='flex'}
function hud80(){try{const ok=e80ok();document.getElementById('brGoal').style.setProperty('display','none','important');
 sb80.style.display=(mode=='v'&&S&&S.b&&tut80())?'':'none';
 const gi=gCur(),G=GOALS80[gi],rdy=!!G&&G.ok(),ds=S.ds&&S.ds.d==day80()?S.ds:{n:0,c:[]},chestRdy=[3,6,10].some((n,k)=>ds.n>=n&&!ds.c.includes(k+1));
 {const c=cl80();sb80.classList.toggle('rdy',c.n>0);sb80.querySelector('.dt').style.display=c.n>0?'':'none'}
 bar80.style.display='none';arr80.style.display='none';return
 let h='';if(typeof SK!='undefined'&&SK&&SK.can){h='🔥 <b>Racha diaria lista</b> · toca para reclamar';bar80.dataset.k='sk'}
 else if(G){h=rdy?`🎯 <b>¡Meta cumplida!</b> Reclama <b>+${G.g} 💎</b>`:`🎯 <b>Meta ${gi+1}/${GOALS80.length}:</b> ${G.t} <small>· ${G.g} 💎</small>`;bar80.dataset.k='g'}
 else{h='🏆 <b>¡Completaste todas las metas!</b>';bar80.dataset.k='x'}
 const bo=boostMs();if(bo>0)h+=`<div class=bst>⚡ Impulso novato: obras ×3 · ${fT80(bo)}</div>`;
 if(h!==bar80._h){bar80.innerHTML=h;bar80._h=h}bar80.classList.toggle('rdy',rdy);bar80.style.display='block';
 let tg=null;if(!rdy&&G&&G.ar&&!(typeof SK!='undefined'&&SK&&SK.can))tg=document.querySelector(G.ar);
 if(tg&&tg.offsetParent){const r=tg.getBoundingClientRect();arr80.style.display='block';arr80.style.left=(r.left+r.width/2-14)+'px';arr80.style.top=(r.top-34)+'px'}else arr80.style.display='none'}catch(e){}}
setInterval(hud80,700);
const bar80c=bar80.onclick;bar80.onclick=()=>{if(bar80.dataset.k=='sk'){const b=document.getElementById('brFl');if(b)b.click();return}bar80c()};
const mod80=document.createElement('div');mod80.id='e80m';document.body.appendChild(mod80);let tab80='g';
function modal80(pref){const c=cl80();tab80=c.g?'g':c.m?'m':(pref&&pref!='c'&&pref!='d'?pref:(tab80=='c'||tab80=='d'?'g':tab80)||'g');mod80.style.display='flex';draw80()}
function draw80(){const ds=S.ds&&S.ds.d==day80()?S.ds:{d:day80(),n:0,c:[]};if(!S.ds||S.ds.d!=ds.d)S.ds=ds;
 const cl=cl80(),tabs=[['g','🎯 Metas'],['m','📜 Diarias']],gi=gCur();let b='';
 if(tab80=='g'){b=GOALS80.map((G,i)=>{const done=gcl().includes(i+1),cur=i==gi;return`<div class="r80 ${done?'dn':cur?'cu':''}"><span>${done?'✅':cur&&G.ok()?'🎁':cur?'🎯':'🔒'}</span><div><b>${G.t}</b><small>${G.g} 💎</small></div>${cur&&G.ok()?'<button data-e=gc>Reclamar</button>':''}</div>`}).join('')}
 else if(tab80=='m'){dRoll();const dd=S.daily,ms=Math.max(0,86400-((Date.now()-4*3600e3)%86400000)/1000);b=`<div class=sm80>Misiones diarias · se reinician en <b>${fmtL(ms)}</b>${GS?'':' · modo local'}</div>`+MIS.map(m=>{const p=Math.min(m.t,dd.p[m.k]||0),c=dd.c[m.k],ok=p>=m.t;return`<div class="r80 ${c?'dn':ok?'cu':''}"><span>${m.e}</span><div><b>${m.n}</b><small>${p}/${m.t} · +${m.r} 💎</small><div class=pb80><i style="width:${p/m.t*100}%"></i></div></div>${c?'<span>✅</span>':ok?`<button data-e=mc data-i=${m.k}>Reclamar</button>`:''}</div>`}).join('')}
 else if(tab80=='c'){b=`<div class=sm80>Ataca bases goblin: sin tropas que perder y con botín. 3 ⭐ en un nivel da 💎${evtOn('camp')?' · <b>¡Hoy botín ×2!</b>':''}</div>`+CAMP80.map((n,i)=>{const s=(S.camp||[])[i]|0,open=i==0||((S.camp||[])[i-1]|0)>=1;return`<div class="r80 ${open?'':'lk'}"><span>${open?'🏕':'🔒'}</span><div><b>${i+1}. ${n}</b><small>${'★'.repeat(s)}${'☆'.repeat(3-s)} · 3★ = ${CAMP_G80[i]} 💎</small></div>${open?`<button data-e=cp data-i=${i}>Atacar</button>`:''}</div>`}).join('')}
 else if(tab80=='d'){b=`<div class=sm80>Gana estrellas hoy (en cualquier ataque). Estrellas de hoy: <b>${ds.n} ⭐</b> · se reinicia en ${fT80(msToMid80())}</div>`+[[3,1,'400 🪙 + 400 💧'],[6,2,'1.200 🪙 + 1.200 💧'],[10,4,'3.000 🪙 + 3.000 💧']].map((c,k)=>{const got=ds.c.includes(k+1),can=ds.n>=c[0]&&!got;return`<div class="r80 ${got?'dn':can?'cu':''}"><span>${got?'✅':can?'🎁':'📦'}</span><div><b>${c[0]} ⭐</b><small>${c[2]} + ${c[1]} 💎</small></div>${can?`<button data-e=ch data-i=${k+1}>Abrir</button>`:''}</div>`}).join('')}
 else if(tab80=='e'){const L=['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],t=dow80();b=`<div class=sm80>Evento de hoy termina en <b>${fT80(msToMid80())}</b></div>`+[0,1,2,3,4,5,6].map(o=>{const d=(t+o)%7,e=EV80[d];return`<div class="r80 ${o==0?'cu':''}"><span>${e.i}</span><div><b>${o==0?'HOY':o==1?'Mañana':L[d]} · ${e.n}</b><small>${e.t}</small></div></div>`}).join('')}
 else{b=Object.keys(SKIN80).map(id=>{const k=SKIN80[id],own=(S.skins||{})[id],on=S.skin==id;return`<div class="r80 ${on?'cu':''}"><span>🎨</span><div><b>${k.n}</b><small>Tu aldea y su isla cubiertas de nieve</small></div>${own?`<button data-e=sk data-i=${id}>${on?'Quitar':'Usar'}</button>`:`<button data-e=bk data-i=${id}>${k.p} 💎</button>`}</div>`}).join('')+`<div class=sm80>Tienes <b>${S.gem|0} 💎</b></div>`}
 mod80.innerHTML=`<div class=m80><div class=h80><b>Misiones y premios</b><button data-e=x>✕</button></div><div class=t80s>${tabs.map(t=>`<button data-e=t data-i=${t[0]} class="${t[0]==tab80?'on':''}">${t[1]}${cl[t[0]]?'<i class=td></i>':''}</button>`).join('')}</div><div class=b80>${b}</div></div>`}
mod80.onclick=async e=>{const b=e.target.closest('button');if(!b){if(e.target===mod80)mod80.style.display='none';return}const k=b.dataset.e,i=b.dataset.i;
 if(k=='x')mod80.style.display='none';else if(k=='t'){tab80=i;draw80()}
 else if(k=='gc'){await goalClaim();draw80()}
 else if(k=='cp'){if(!used(S.army)&&!freeTr()){toast80('Entrena tropas primero (Ayuntamiento 1 las da gratis en cuarteles)');return}mod80.style.display='none';startNpc(+i,CAMP80[+i],{camp:1})}
 else if(k=='ch'){const n=+i,ds=S.ds;if(ds.c.includes(n))return;const r=await claim80('chest_'+day80()+'_'+n,[0,1,2,4][n]);if(r>=0){ds.c.push(n);const v=[0,400,1200,3000][n];S.g=Math.min(cap.g(),S.g+v);S.e=Math.min(cap.e(),S.e+v);toast80('🎁 Cofre: +'+v+' 🪙💧'+(r>0?' +'+r+' 💎':''));try{save();ui()}catch(e){}}draw80()}
 else if(k=='mc'){const r=await mClaim(i);if(r)toast80('📜 Misión completada');try{ui();save()}catch(e){}draw80()}
 else if(k=='bk')skinBuy(i);else if(k=='sk'){S.skin=S.skin==i?'':i;skinApply();try{save()}catch(e){}draw80()}};
setTimeout(()=>{try{skinApply()}catch(e){}},1500);
const st80=document.createElement('style');st80.textContent=`#brGoal{display:none!important}#e80g{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(132px + env(safe-area-inset-bottom,0px));z-index:7;max-width:min(92vw,520px);padding:8px 14px;border-radius:14px;background:#0e1523ee;border:1px solid #3de0ff55;color:#e8f0ff;font:600 14px 'Baloo 2',system-ui,sans-serif;text-align:center;box-shadow:0 4px 18px #0008;cursor:pointer;display:none}
#e80g.rdy{border-color:#ffb020;box-shadow:0 0 18px #ffb02088;animation:e80p 1s infinite alternate}#e80g small{opacity:.7}.bst{margin-top:3px;font-size:12px;color:#ffd24a}
@keyframes e80p{to{box-shadow:0 0 28px #ffb020cc}}#e80a{position:fixed;z-index:8;font-size:28px;pointer-events:none;display:none;animation:e80j .6s infinite alternate}@keyframes e80j{to{transform:translateY(8px)}}
body.land #e80g{left:108px;transform:none;bottom:calc(22px + env(safe-area-inset-bottom,0px));max-width:40vw;font-size:12px;padding:6px 10px}
body.ba #e80g,body.ba #e80a,body.ba #e80b{display:none!important}
#e80b{font-size:22px;margin-top:8px}.t80{position:fixed;left:50%;top:18%;transform:translateX(-50%);z-index:60;padding:10px 18px;border-radius:14px;background:#0e1523f2;border:1px solid #ffb020;color:#fff;font:700 16px 'Baloo 2',system-ui,sans-serif;box-shadow:0 6px 24px #000a}
#e80m{position:fixed;inset:0;z-index:55;background:#000a;display:none;align-items:center;justify-content:center;padding:10px}.m80{width:min(560px,100%);max-height:100%;display:flex;flex-direction:column;border-radius:18px;background:#0e1523;border:1px solid #ffb02055;color:#e8f0ff;font-family:'Baloo 2',system-ui,sans-serif;overflow:hidden}
.h80{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;font:800 18px Lilita One,system-ui,sans-serif;color:#ffb020}.h80 button{all:unset;cursor:pointer;padding:4px 10px;font-size:20px}
.t80s{display:flex;gap:6px;padding:8px 10px 8px;overflow-x:auto}.t80s button{position:relative;all:unset;cursor:pointer;white-space:nowrap;padding:7px 11px;border-radius:10px;background:#141e32;font-weight:700;font-size:14px}.t80s button{position:relative!important}.t80s button.on{background:#ffb020;color:#1a0f00}.t80s .td{position:absolute;top:-5px;right:-4px;width:14px;height:14px;border-radius:50%;background:#ff4d5e;border:2px solid #0e1523;box-shadow:0 0 8px #ff4d5e;animation:e80p 1s infinite alternate}.pb80{height:6px;border-radius:4px;background:#0006;overflow:hidden;margin-top:4px}.pb80 i{display:block;height:100%;background:#4fe07a}
.b80{overflow:auto;padding:4px 10px 12px;display:flex;flex-direction:column;gap:8px}.sm80{font-size:14px;opacity:.85;padding:2px 4px}
.r80{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;background:#141e32;border:1px solid #ffffff14}.r80.cu{border-color:#3de0ff88}.r80.dn{opacity:.55}.r80.lk{opacity:.5}.r80>span{font-size:22px}.r80>div{flex:1;display:flex;flex-direction:column;line-height:1.15}.r80 small{opacity:.75}
.r80 button{all:unset;cursor:pointer;padding:8px 13px;border-radius:10px;background:linear-gradient(#ffd45a,#ff9a00);color:#1a0f00;font-weight:800;font-size:14px}`;document.head.appendChild(st80);

showMissions=function(){try{modal80('m')}catch(e){console.error(e)}};

/* ===== v80 UI: logo/póster, carga, login, guía de bienvenida, iconos opcionales ===== */
const LOGO80='data:x';
(function(){const lg=document.querySelector('#auth .alogo');if(lg)lg.innerHTML='<img alt="Base Rush" src="'+LOGO80+'">';
 const ld=document.getElementById('ldg');if(ld&&!document.getElementById('ldp')){const p=document.createElement('div');p.id='ldp';p.textContent='0%';ld.appendChild(p);const b=document.getElementById('ldb');
  setInterval(()=>{try{const w=parseFloat(b.style.width)||0;p.textContent=Math.round(w)+'%'}catch(e){}},200)}})();
/* guía de bienvenida (8 pasos) */
const SL80=[
 ['¡Bienvenido, líder!','Este es tu pueblo. Construye edificios, consigue recursos, fortalece tus defensas y sube de <b>Ayuntamiento</b>. En un par de minutos estarás al tanto.',()=>'🏰'],
 ['Recursos','<b>Oro</b>: construcción y defensas (cañones, torres, muros). <b>Elixir</b>: ejército, hechizos y almacenes. <b>Gemas</b>: premium, aceleran obras y compran aspectos de aldea.',()=>(BRI.g||'🪙')+(BRI.e||'💧')+(BRI.gm||'💎')],
 ['Minería y almacenamiento','Las <b>minas</b> y <b>extractores</b> producen solos. Toca la burbuja sobre el edificio para recoger. Burbuja naranja = el almacén está lleno.',()=>'⛏️📦'],
 ['Defensa','Cañones, torres de arqueras y morteros frenan los ataques. Los <b>muros</b> retrasan al enemigo y, desde el Ayuntamiento 3, las <b>bombas</b> sorprenden a las tropas.',()=>'💣🧱🏹'],
 ['Ejército y hechizos','Los <b>cuarteles</b> entrenan tropas, que salen caminando hacia el <b>campamento</b>. Los hechizos se desbloquean con el Ayuntamiento 5.',()=>'⚔️🧪'],
 ['Ataca','En <b>Batalla</b> tienes la campaña goblin (sin riesgo), rivales reales y práctica. Planeas 30 s, luchas 3 min y mantienes pulsado para desplegar varias tropas.',()=>'⚔️'],
 ['Defensa y escudo','Mientras no estás, otros jugadores pueden atacarte. Después de un ataque recibes un <b>escudo</b>; si atacas, lo pierdes. Mira quién te atacó y devuélvesela.',()=>'🛡️'],
 ['Constructores y metas','Cada mejora ocupa un <b>constructor</b>. Tus primeras 24 h las obras van ×3. En <b>Misiones</b> tienes metas, campaña, cofre diario y eventos con gemas.',()=>'🔨🎯']];
const i80=document.createElement('div');i80.id='i80';document.body.appendChild(i80);let i80n=0;
function intro80(force){i80n=0;i80.classList.add('on');i80d(0)}
let i80b=null;
function i80d(force){const s=SL80[i80n],last=i80n==SL80.length-1;
 if(!i80b){i80.innerHTML=`<div class=i80c><div class=i80h><span class=i80s></span><button data-i=skip>Saltar</button></div><div class=i80m><div class=i80i></div><h2></h2><p></p></div><div class=i80d>${SL80.map(()=>'<i></i>').join('')}</div><div class=i80b><button class=bk data-i=bk>Atrás</button><button class=nx data-i=nx></button></div></div>`;i80b=1;i80.dataset.dir=0}
 const q=c=>i80.querySelector(c),m=q('.i80m');
 const fill=()=>{q('.i80s').textContent=(i80n+1)+' / '+SL80.length;q('.i80h button').style.visibility=last?'hidden':'visible';q('.i80i').innerHTML=s[2]();q('h2').innerHTML=s[0];q('p').innerHTML=s[1];
  q('.bk').style.display=i80n?'':'none';const nx=q('.i80b [data-i=nx]');nx.className=last?'go':'nx';nx.textContent=last?'¡Empezar a jugar!':'Próximo'};
 i80.querySelectorAll('.i80d i').forEach((d,k)=>d.classList.toggle('on',k==i80n));
 if(force===0||!m.dataset.f){m.dataset.f=1;fill();return}
 const dir=i80n>(+i80.dataset.dir||0)?1:-1;i80.dataset.dir=i80n;
 m.style.transition='transform .16s ease-in,opacity .16s';m.style.transform=`translateX(${-26*dir}px)`;m.style.opacity=0;
 clearTimeout(i80.t);i80.t=setTimeout(()=>{fill();m.style.transition='none';m.style.transform=`translateX(${26*dir}px)`;void m.offsetWidth;m.style.transition='transform .22s ease-out,opacity .22s';m.style.transform='';m.style.opacity=1},160)}
i80.onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=b.dataset.i;try{snd('ui')}catch(x){}
 if(k=='nx'){if(i80n<SL80.length-1){i80n++;i80d()}else i80end()}else if(k=='bk'){i80n=Math.max(0,i80n-1);i80d()}else if(k=='skip')i80end()};
function i80end(){i80.classList.remove('on');try{S.i80=1;save()}catch(e){}}
setInterval(()=>{try{if(mode=='v'&&S&&S.b&&S.tut===0&&!S.i80&&!i80.classList.contains('on')&&document.getElementById('auth').style.display=='none')intro80()}catch(e){}},1000);
const IMG80={};

/* ===== v81: paisaje estilo referencia: anillo de césped, bosque denso, playa y mar a un lado ===== */
const A80={"beach_rock_1": [240, 184, ""], "bush_1": [220, 215, ""], "cliff_1": [274, 280, ""], "flowers_1": [240, 186, ""], "ic_atk": [160, 160, ""], "ic_e": [159, 160, ""], "ic_g": [159, 160, ""], "ic_gm": [159, 160, ""], "ic_hm": [160, 160, ""], "ic_menu": [160, 160, ""], "ic_ms": [160, 160, ""], "ic_rk": [160, 160, ""], "ic_sh": [160, 160, ""], "ic_shop": [160, 160, ""], "ic_tr": [159, 160, ""], "ic_wheel": [160, 160, ""], "log_1": [200, 189, ""], "rock_1": [240, 226, ""], "rock_2": [240, 192, ""], "rock_3": [155, 240, ""], "tile_grass": [247, 256, ""], "tile_sand": [256, 191, ""], "tile_water": [256, 256, ""], "tree_oak_1": [296, 300, ""], "tree_oak_2": [296, 300, ""], "tree_oak_3": [296, 300, ""], "tree_pine_1": [214, 300, ""], "tree_pine_2": [214, 300, ""], "cliff_wall": [786, 640, "", 173.7, 639.2], "waterfall": [787, 640, "", 174.1, 639.2], "cliff_top": [961, 643, "", 270.3, 641.8], "ic_goal": [160, 160, ""]};
const IS81=()=>!!(SKIN80&&SKIN80[S&&S.skin]);
const RING81=2.6,BEACH81=3.4;
(function(){let n=0;const tot=Object.keys(A80).length;for(const k in A80){const im=new Image();im.onload=()=>{IMG80[k]=im;if(k=='ic_goal'){try{sb80.innerHTML='<img class="bri" src="'+im.src+'" alt="" style="width:34px;height:34px"><i class=dt style="display:none"></i>'}catch(e){}}if(k.startsWith('ic_')&&!/^ic_(g|e|gm|hm|tr|sh|ms|menu|rk|shop|atk|slot|flame)$/.test(k)){try{BRI[k.slice(3)]='<img class="bri" src="'+im.src+'" alt="">';ui()}catch(e){}}if(++n>=tot){F80=null;FP81=null;try{_tck=_tcp='';WB.key=''}catch(e){}}};im.src='data:image/webp;base64,'+A80[k][2]}})();
/* ---------- mar: una elipse enorme frente a la cara inferior izquierda ---------- */
const ELL81=()=>({cx:N/2,cy:N+RING81+BEACH81+16,a:46,b:16,ph:1});
function wob81(e,th){return 1+.006*Math.sin(5*th+e.ph)+.004*Math.sin(11*th+2)}
function inE81(x,y,d){const e=ELL81(),dx=x-e.cx,dy=y-e.cy,th=Math.atan2(dy,dx),f=wob81(e,th),a=(e.a+d)*f,b=(e.b+d)*f;if(a<=0||b<=0)return false;return dx*dx/(a*a)+dy*dy/(b*b)<1}
/* y de la orilla en la columna x */
function shore81(x){const e=ELL81();let y=e.cy-e.b-3;while(y<e.cy&&!inE81(x,y,0))y+=.04;return y}
function fl81(d,col,st){g.fillStyle=col;g.strokeStyle=col;const e=ELL81(),a=e.a-d,b=e.b-d;if(a<=0||b<=0)return;g.beginPath();for(let i=0;i<=160;i++){const th=i/160*6.2832,f=wob81(e,th);g[i?'lineTo':'moveTo'](e.cx+Math.cos(th)*a*f,e.cy+Math.sin(th)*b*f)}g.closePath();st?g.stroke():g.fill()}
/* ---------- texturas ---------- */
let TX81=null;
function mkTx81(){const mk=(w,f)=>{const c=document.createElement('canvas');c.width=c.height=w;f(c.getContext('2d'),w);return c};let sd=7;const R=()=>(sd=(sd*9301+49297)%233280)/233280;
 const grass=mk(160,(x,w)=>{x.lineCap='round';for(let i=0;i<260;i++){const px=R()*w,py=R()*w,l=3+R()*5,lt=R()<.5;x.strokeStyle=lt?'rgba(205,240,120,.30)':'rgba(25,70,18,.26)';x.lineWidth=1.3;for(const ox of[0,w])for(const oy of[0,w]){x.beginPath();x.moveTo(px-ox,py-oy);x.lineTo(px-ox+(R()-.5)*3,py-oy-l);x.stroke()}}});
 const sand=mk(128,(x,w)=>{for(let i=0;i<150;i++){const px=R()*w,py=R()*w,r=.6+R()*1.5;x.fillStyle=R()<.5?'rgba(120,80,30,.20)':'rgba(255,248,215,.32)';for(const ox of[0,w])for(const oy of[0,w]){x.beginPath();x.arc(px-ox,py-oy,r,0,7);x.fill()}}});
 const sea=mk(256,(x,w)=>{x.lineCap='round';for(let i=0;i<16;i++){const px=R()*w,py=R()*w,l=26+R()*60;x.strokeStyle='rgba(255,255,255,'+(.12+R()*.16)+')';x.lineWidth=1.5+R()*1.6;for(const ox of[0,w,-w])for(const oy of[0,w]){x.beginPath();x.moveTo(px-ox,py-oy);x.quadraticCurveTo(px-ox+l/2,py-oy-2.5,px-ox+l,py-oy);x.stroke()}}});
 TX81={grass,sand,sea}}
function pat81(k,ppt){if(!TX81)mkTx81();const p=g.createPattern(TX81[k],'repeat');try{p.setTransform(new DOMMatrix().scale(1/ppt))}catch(e){}return p}
/* ---------- bosque infinito: patrón con árboles horneados ---------- */
let FP81=null,FPs81=0;
function mkFP81(){const sn=IS81(),W=1024,c=document.createElement('canvas');c.width=c.height=W;const x=c.getContext('2d');x.fillStyle=sn?'#6f8fa8':'#2f5a1c';x.fillRect(0,0,W,W);
 let sd=11;const R=()=>(sd=(sd*9301+49297)%233280)/233280,L=[];for(let i=0;i<1150;i++)L.push([R()*W,R()*W,R()]);L.sort((a,b)=>a[1]-b[1]);
 for(const t of L){const k=sn?'tree_pine_2':t[2]<.95?'tree_oak_'+(1+(t[2]*100|0)%2):'tree_pine_1',im=IMG80[k];if(!im)continue;const w=TW*2*(sn?.9:1.25)*(.9+t[2]*.25)*(k.includes('pine')?.8:1),h=w*im.height/im.width;
  for(const ox of[0,-W,W])for(const oy of[0,-W,W]){const px=t[0]+ox,py=t[1]+oy;if(px<-w||px>W+w||py<-h||py>W+h)continue;x.drawImage(im,px-w/2,py-h,w,h)}}
 return c}
function drFP81(){const n=Object.keys(IMG80).filter(k=>k.startsWith('tree_')).length;if(!n)return;if(!FP81||FPs81!=n+(IS81()?100:0)){FP81=mkFP81();FPs81=n+(IS81()?100:0)}
 const p=g.createPattern(FP81,'repeat');try{p.setTransform(new DOMMatrix().scale(.5))}catch(e){}
 const a=KS*cam.z,x0=(0-KS*cam.x)/a-60,x1=(cv.width-KS*cam.x)/a+60,y0=(0-KS*cam.y)/a-60,y1=(cv.height-KS*cam.y)/a+60;g.fillStyle=p;g.fillRect(x0,y0,x1-x0,y1-y0)}
/* ---------- capa de terreno: bosque de fondo, mar, arena, anillo ---------- */
function drLand81(){const sn=IS81(),M=VT?[TW,0,0,TH,OX,OY]:[TW/2,TH/2,-TW/2,TH/2,OX,OY];drFP81();
 g.save();g.transform(M[0],M[1],M[2],M[3],M[4],M[5]);
 const C=sn?['#4f82aa','#5d8fb4','#79abcb','#a6cce2','#f6fcff','#dfe9f2','#eef4fa','#f8fbfe']:['#2182ad','#2b93bd','#3fabcb','#69cbe0','#e9fbff','#c99a5c','#dfbb7c','#ecd7a0'];
 const mx=(a,b,t)=>{const h=v=>[parseInt(v.slice(1,3),16),parseInt(v.slice(3,5),16),parseInt(v.slice(5,7),16)],A=h(a),B=h(b);return 'rgb('+A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')+')'};
 /* arena */
 fl81(-BEACH81,C[7]);fl81(-BEACH81*.62,C[6]);fl81(-BEACH81*.25,C[5]);
 g.globalAlpha=.9;g.fillStyle=pat81('sand',64);fl81(-BEACH81,g.fillStyle);g.globalAlpha=1;
 fl81(-.06,C[4]);
 /* mar: bandas suaves de claro a oscuro */
 const NB=20;for(let i=0;i<NB;i++){const t=i/(NB-1),d=.3+Math.pow(t,1.6)*13;fl81(d,mx(C[3],C[0],Math.min(1,t*1.15)))}
 fl81(.3,pat81('sea',70));
 /* anillo de césped alrededor de la isla */
 const q=(v,col)=>{g.fillStyle=col;g.beginPath();g.moveTo(-v,-v);g.lineTo(N+v,-v);g.lineTo(N+v,N+v);g.lineTo(-v,N+v);g.closePath();g.fill()};
 q(RING81,sn?'#9db7c6':'#5f9230');q(RING81-.25,sn?'#a9c2d0':'#69993a');
 g.fillStyle=pat81('grass',44);g.globalAlpha=.9;q(RING81,g.fillStyle);g.globalAlpha=1;
 q(RING81-1.15,sn?'#b9cfdc':'#79a843');g.globalAlpha=.55;g.fillStyle=pat81('grass',44);q(RING81-1.15,g.fillStyle);g.globalAlpha=1;
 g.strokeStyle=sn?'rgba(255,255,255,.55)':'rgba(110,80,38,.55)';g.lineWidth=.06;g.strokeRect(-RING81,-RING81,N+2*RING81,N+2*RING81);
 g.restore()}
/* textura de césped sobre la isla (dentro del bake) */
const dg82=drGrass0;drGrass0=function(){dg82();if(IS81()||bgOn81())return;const M=VT?[TW,0,0,TH,OX,OY]:[TW/2,TH/2,-TW/2,TH/2,OX,OY];g.save();g.transform(M[0],M[1],M[2],M[3],M[4],M[5]);g.globalAlpha=.55;g.fillStyle=pat81('grass',52);g.beginPath();g.moveTo(0,0);g.lineTo(N,0);g.lineTo(N,N);g.lineTo(0,N);g.closePath();g.fill();g.restore()};
/* ---------- árboles ---------- */
function dI81(k,x,y,w){const im=IMG80[k];if(!im)return false;const h=w*im.height/im.width;g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';g.drawImage(im,x-w/2,y-h,w,h);return true}
function dT81(x,y,kind,v,s){const sn=IS81();let k;
 if(kind=='bush'){if(sn||!IMG80.bush_1)return drTree0(x,y,kind,v,s);return dI81('bush_1',x,y+2,TW*.78*s)}
 if(kind=='pine'||sn){k=sn?'tree_pine_2':'tree_pine_1';if(!IMG80[k])return drTree0(x,y,kind,v,s);return dI81(k,x,y+2,TW*1.0*s)}
 k='tree_oak_'+(1+((v>>2)&1));if(!IMG80[k])return drTree0(x,y,kind,v,s);return dI81(k,x,y+2,TW*1.25*s)}
const drTree0=drTree;
drTree=function(x,y,kind,v,s){return dT81(x,y,kind,v,s||1)};
drObTree=function(o,x,y){const h=(o.x*7+o.y*13)&255;if(o.k=='bush')return dT81(x,y+10,'bush',h,.9);if(o.k=='pine')return dT81(x,y+22,'pine',h,1.1);return dT81(x,y+12,h%3==0?'pine':'oak',h>>1,.85)};
/* rocas y troncos del terreno con imágenes */
function rockDraw(o){const big=o.k=='boulder',h=((o.x+1)*73856093^(o.y+1)*19349663)>>>0,p=P(o.x+o.sx/2,o.y+o.sy/2);
 const k=big?'rock_1':(h%3?'rock_2':'rock_3');if(!IMG80[k])return;dI81(k,p[0],p[1]+(big?10:6),TW*(big?1.5:k=='rock_3'?.8:1.0))}
function logDraw(o){const p=P(o.x+o.sx/2,o.y+o.sy/2);if(IMG80.log_1)dI81('log_1',p[0],p[1]+8,TW*1.0)}
function dC81(t){const c=t.cf,im=IMG80[c.k],m=A80[c.k];if(!im||!m)return;const u=4*TW/786,W=m[0]*u,H=m[1]*u,ax=m[3]*u,ay=m[4]*u;g.save();g.translate(t.x,t.y);if(c.fl)g.scale(-1,1);g.imageSmoothingQuality='high';g.drawImage(im,-ax,-ay,W,H);g.restore()}
/* lista: árboles del borde + rocas de playa + mesa de acantilado */

function forestList(){if(F80&&F80n==N&&F80g==GFX)return F80;F80n=N;F80g=GFX;const L=[],R=GFX=='low'?7:GFX=='mid'?9:11;
 const add=o=>{o.fr=(o.ty>=N||o.tx>=N)?1:0;L.push(o)};
 const MES=[];const CF=[];
 const wl=(k,tx,ty,fl)=>CF.push({k,tx,ty,fl});
 const o=window.CLF81||'0';
 if(o=='1'){for(const[i,k]of[[6,'cliff_wall'],[12,'waterfall'],[18,'cliff_wall']])wl(k,i,-9,1)}
 if(o=='2'){for(const[i,k]of[[6,'cliff_wall'],[12,'cliff_wall'],[18,'waterfall']])wl(k,i,-9,1);for(const i of[0,6,12])wl('cliff_wall',-9,i,0)}
 if(o=='3'){wl('cliff_top',2,-11,1);wl('waterfall',9,-9,1);wl('cliff_top',15,-11,1)}
 for(const c of CF){const dp=c.k=='cliff_top'?4:2;c.fx=c.fl?[c.tx,c.tx+6,c.ty,c.ty+dp]:[c.tx,c.tx+dp,c.ty,c.ty+6]}
 const seen={};
 const tile=(tx,ty)=>{const key=tx+','+ty;if(seen[key])return;seen[key]=1;if(tx>=-RING81+.2-.2&&ty>=-RING81&&tx<N+RING81&&ty<N+RING81&&tx>=-RING81)return;
  const h=(tx*73856093^ty*19349663)>>>0,r1=(h%1000)/1000,r2=((h>>10)%1000)/1000,r3=((h>>5)%1000)/1000;
  const x=tx+.5+(r2-.5)*.85,y=ty+.5+(r3-.5)*.85,dd=Math.max(-x,x-N,-y,y-N);
  if(dd<RING81+.35||inE81(x,y,BEACH81+1.0)||r1>.94)return;
  if(CF.some(c=>x>c.fx[0]-.9&&x<c.fx[1]+.9&&y>c.fx[2]-.9&&y<c.fx[3]+.9))return;
  const p=P(x,y),k=r2<.95?'oak':'pine';add({x:p[0],y:p[1]+6,tx,ty,k,v:h>>8,s:.9+r3*.28,d:x+y})};
 for(let ty=-R;ty<N+R;ty++)for(let tx=-R;tx<N+R;tx++)tile(tx,ty);
 for(let ty=N-3;ty<N+14;ty++)for(let tx=-24;tx<N+24;tx++)tile(tx,ty); /* bosque junto a la playa, más allá de las esquinas */
 for(let tx=N-3;tx<N+14;tx++)for(let ty=-6;ty<N+3;ty++)tile(tx,ty);
 /* rocas de playa, SOLO sobre la arena */
 let sd=5;const rr=()=>(sd=(sd*9301+49297)%233280)/233280;
 for(let u=-9;u<N+9;u+=3.1){if(rr()<.25)continue;const x=u+rr()*.8,y=shore81(x)-BEACH81*.55-rr()*.25,p=P(x,y);add({x:p[0],y:p[1]+3,tx:x,ty:y,i:'beach_rock_1',w:TW*(rr()<.5?1.9:1.5),d:x+y});
  if(rr()<.4){const x2=x+.9,y2=shore81(x2)-BEACH81*.5,p2=P(x2,y2);add({x:p2[0],y:p2[1]+3,tx:x2,ty:y2,i:'beach_rock_1',w:TW*1.2,d:x2+y2})}}
 /* mesa de acantilado limpia (cubos que encajan exactamente) */
 for(const c of CF){const bx=c.fl?c.fx[1]:c.fx[1],by=c.fl?c.fx[3]:c.fx[3],p=P(bx,by);L.push({x:p[0],y:p[1],tx:c.tx,ty:c.ty,cf:c,d:bx+by,fr:0})}
 L.sort((a,b)=>a.d-b.d);return F80=L}
function drForest(front){if(WBK)return;if(!front)drLand81();const L=forestList(),a=KS*cam.z,x0=(0-KS*cam.x)/a-100,x1=(cv.width-KS*cam.x)/a+100,y0=(0-KS*cam.y)/a-40,y1=(cv.height-KS*cam.y)/a+180;
 for(const t of L){if(t.fr!=front||t.x<x0||t.x>x1||t.y<y0||t.y>y1)continue;if(t.cf)dC81(t);else if(t.i)dI81(t.i,t.x,t.y,t.w);else drTree(t.x,t.y,t.k,t.v,t.s)}}

/* ===== v81: mapa de fondo único (tamaño fijo 40×40 como Clash of Clans) ===== */
const MAPN81=50;
var BGOK81=false;const BGM81=new Image();BGM81.onload=()=>{BGOK81=true;try{_tck=_tcp='';WB.key=''}catch(e){}};BGM81.src='data:x';
const MG81={L:356,R:1691,T:523,B:1533,S:2048};
function bgOn81(){return BGOK81&&!VT&&!(SKIN80&&SKIN80[S&&S.skin])}
function bgGeo81(){const c={x:(MG81.L+MG81.R)/2,y:(MG81.T+MG81.B)/2},sx=N*TW/(MG81.R-MG81.L),sy=N*TH/(MG81.B-MG81.T);return{sx,sy,x0:OX-c.x*sx,y0:OY+N*TH/2-c.y*sy,w:MG81.S*sx,h:MG81.S*sy,u:(u,v)=>[OX+(u-c.x)*sx,OY+N*TH/2+(v-c.y)*sy]}}
/* límites de cámara: imagen + 22 % de borde espejo */
function bgBounds81(){const G=bgGeo81(),mx=G.w*.10,my=G.h*.10;return{x0:G.x0-mx,x1:G.x0+G.w+mx,y0:G.y0-my,y1:G.y0+G.h+my}}
function ZMIN81(){if(!BGOK81||VT)return .45;const B=bgBounds81();return Math.max(LW()/(B.x1-B.x0),LH()/(B.y1-B.y0),.25)}
function drBG81(){const G=bgGeo81(),a=KS*cam.z,vx0=-cam.x/cam.z,vx1=(cv.width/KS-cam.x)/cam.z,vy0=-cam.y/cam.z,vy1=(cv.height/KS-cam.y)/cam.z;
 g.fillStyle=window.LANDBG91||'#2f5a1c';g.fillRect(vx0-50,vy0-50,vx1-vx0+100,vy1-vy0+100);g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
 for(let j=-1;j<=1;j++)for(let i=-1;i<=1;i++){const ax=G.x0+i*G.w,ay=G.y0+j*G.h;if(ax>vx1||ax+G.w<vx0||ay>vy1||ay+G.h<vy0)continue;
  g.save();g.translate(i?ax+G.w:ax,j?ay+G.h:ay);g.scale(i?-1:1,j?-1:1);g.drawImage(BGM81,0,0,G.w,G.h);g.restore()}
 /* viñeta suave fuera de la imagen para disimular el espejo */
 const f=G.w*.06,fy=G.h*.06,X0=G.x0,X1=G.x0+G.w,Y0=G.y0,Y1=G.y0+G.h,bigx=G.w*.5,bigy=G.h*.5;
 const sd=(x,y,w,h,x2,y2,xa,ya)=>{const gr=g.createLinearGradient(xa,ya,x2,y2);const vc=window.LANDVG91||'8,22,8';gr.addColorStop(0,'rgba('+vc+',0)');gr.addColorStop(.25,'rgba('+vc+',.45)');gr.addColorStop(1,'rgba('+vc+',.85)');g.fillStyle=gr;g.fillRect(x,y,w,h)};
 sd(X0-bigx,Y0-bigy,bigx+f,G.h+2*bigy,X0-bigx,0,X0+f*0,0);
 sd(X1-f,Y0-bigy,bigx+f,G.h+2*bigy,X1+bigx,0,X1,0);
 sd(X0-bigx,Y0-bigy,G.w+2*bigx,bigy+fy,0,Y0-bigy,0,Y0);
 sd(X0-bigx,Y1-fy,G.w+2*bigx,bigy+fy,0,Y1+bigy,0,Y1)}
/* vida ambiental: espuma de la orilla, cascada y nubes */
const SH81=[[43,1210],[151,1290],[208,1370],[360,1450],[448,1530],[566,1610],[640,1690],[721,1770],[821,1850],[946,1930],[1026,2010]];
function drAmb81(){const G=bgGeo81(),t=performance.now()/1000,ok=(typeof GFX!='undefined')&&GFX!='low';if(!ok||window.LANDID91)return;
 /* espuma: 3 líneas que avanzan hacia la arena */
 g.save();g.lineCap='round';g.lineJoin='round';
 for(let k=0;k<3;k++){const ph=(t*.22+k/3)%1,off=(1-ph)*38-8,al=Math.sin(ph*Math.PI)*.5;g.strokeStyle='rgba(255,255,255,'+al.toFixed(3)+')';g.lineWidth=2.2*Math.max(.8,G.sx);g.beginPath();SH81.forEach((p,i)=>{const w=G.u(p[0]-off+Math.sin(t*1.3+i*.9+k)*5,p[1]+off*.18);i?g.lineTo(w[0],w[1]):g.moveTo(w[0],w[1])});g.stroke()}
 /* cascada: gotas de espuma y neblina en la base */
 const base=G.u(1675,424),top=G.u(1738,262);
 for(let i=0;i<14;i++){const ph=(t*.9+i*.37)%1,x=top[0]+(base[0]-top[0])*ph+Math.sin(i*5+t*6)*2.2,y=top[1]+(base[1]-top[1])*ph+ph*ph*8;g.fillStyle='rgba(255,255,255,'+(.75*(1-ph*.5)).toFixed(2)+')';g.beginPath();g.arc(x,y,1.3+(i%3)*.5,0,7);g.fill()}
 for(let i=0;i<5;i++){const ph=(t*.35+i*.2)%1,x=base[0]+Math.sin(i*3+t)*10,y=base[1]-ph*16;g.fillStyle='rgba(235,250,255,'+(.22*(1-ph)).toFixed(3)+')';g.beginPath();g.ellipse(x,y,12+ph*8,6+ph*4,0,0,7);g.fill()}
 /* nubes: dos sombras muy tenues cruzando en diagonal */
 const cw=G.w;for(let k=0;k<2;k++){const ph=((t*(.012+k*.004)+k*.5)%1),x=G.x0+ph*cw*1.3-cw*.15,y=G.y0+G.h*(.25+k*.4)+ph*G.h*.25;g.fillStyle='rgba(0,0,0,.06)';g.beginPath();g.ellipse(x,y,cw*.16,cw*.075,-.35,0,7);g.fill()}
 g.restore()}
/* sustitución del terreno */
const drForestL81=drForest;
drForest=function(front){if(bgOn81()){if(!front){drBG81();drAmb81()}return}return drForestL81(front)};
const dg83=drGrass0;
drGrass0=function(){if(bgOn81()){const G=bgGeo81(),q=P(-.7,-.7),w=P(N+.7,-.7),e=P(N+.7,N+.7),r=P(-.7,N+.7),q2=P(0,0),w2=P(N,0),e2=P(N,N),r2=P(0,N);
  /* solo el anillo exterior viene de la imagen; el interior usa las casillas reales del juego */
  g.save();g.beginPath();g.moveTo(q[0],q[1]);g.lineTo(w[0],w[1]);g.lineTo(e[0],e[1]);g.lineTo(r[0],r[1]);g.closePath();g.moveTo(q2[0],q2[1]);g.lineTo(r2[0],r2[1]);g.lineTo(e2[0],e2[1]);g.lineTo(w2[0],w2[1]);g.closePath();g.clip('evenodd');g.imageSmoothingQuality='high';g.drawImage(BGM81,G.x0,G.y0,G.w,G.h);g.restore()}
 dg83()};
/* cámara: zoom mínimo y límites según la imagen */
const clamp0=clampCam;
clampCam=function(){clamp0();if(!bgOn81())return;const z0=ZMIN81();if(cam.z<z0){const W=LW(),H=LH(),wx=(W/2-cam.x)/cam.z,wy=(H/2-cam.y)/cam.z;cam.z=z0;cam.x=W/2-wx*z0;cam.y=H/2-wy*z0}
 const B=bgBounds81(),W=LW(),H=LH(),z=cam.z;cam.x=Math.min(-B.x0*z,Math.max(W-B.x1*z,cam.x));cam.y=Math.min(-B.y0*z,Math.max(H-B.y1*z,cam.y))};

/* centrar bases dentro del mapa fijo de 40×40 */
function cen81(arr){let a=1e9,b=-1e9,c=1e9,d=-1e9,n=0;for(const e of arr){const t=TY[e[0]];if(!t)continue;n++;a=Math.min(a,e[1]);b=Math.max(b,e[1]+t.s);c=Math.min(c,e[2]);d=Math.max(d,e[2]+t.s)}if(!n)return[0,0];const dx=Math.round((MAPN81-(b-a))/2)-a,dy=Math.round((MAPN81-(d-c))/2)-c;return[Math.abs(dx)<=1?0:dx,Math.abs(dy)<=1?0:dy]}
const es81=ensureS;ensureS=function(){es81.apply(this,arguments);try{if(S&&S.b&&!S.f50){const c=cen81(S.b.map(b=>[b.t,b.x,b.y]));for(const b of S.b){b.x+=c[0];b.y+=c[1]}S.ob=null;S.f50=1;if(mode=='v'){fit();clampCam()}}}catch(e){}};

/* ===== v81: tropas con arte nuevo (póster Base Rush) + animación procedural ===== */
const TS81={"barb": [72, 72, ""], "arch": [56, 76, ""], "gob": [47, 56, ""], "giant": [103, 112, ""], "wb": [63, 60, ""], "mage": [78, 88, ""], "heal": [107, 116, ""], "loon": [104, 92, ""]};const TI81={};
for(const k in TS81){const a=TS81[k],im=new Image();im.src='data:image/webp;base64,'+a[2];TI81[k]={im,w:a[0],h:a[1]}}
const TD81={barb:{h:40,fly:0,sh:7},arch:{h:44,fly:0,sh:6},gob:{h:32,fly:0,sh:6},giant:{h:64,fly:0,sh:12},wb:{h:34,fly:0,sh:7},mage:{h:52,fly:0,sh:8},heal:{h:66,fly:12,sh:9},loon:{h:50,fly:26,sh:13},king:{h:60,fly:0,sh:11}};

/* colisión visual: la tropa no pisa la estructura (sí su grama / el borde) */
function pos81(t){
 let x=t.x,y=t.y;if(TD81[t.k]&&TD81[t.k].fly)return[x,y];
 const L=mode=='a'?(E&&E.b):S&&S.b;if(!L)return[x,y];
 for(const b of L){const d=TY[b.t];if(!d||b.t=='wall'||d.trap||b.hp<=0||b.ruin||(t.vu&&b.t=='camp'))continue;
  const s=d.s,m=.18,x0=b.x+m,x1=b.x+s-m,y0=b.y+m,y1=b.y+s-m;
  if(x>x0&&x<x1&&y>y0&&y<y1){const dl=x-x0,dr=x1-x,dt=y-y0,db=y1-y,mn=Math.min(dl,dr,dt,db);
   if(mn==dl)x=x0-.2;else if(mn==dr)x=x1+.2;else if(mn==dt)y=y0-.2;else y=y1+.2}}
 return[x,y]}
function drT81(t){
 if(drA81(t))return true;
 const T=TI81[t.k],d=TD81[t.k];if(!T||!T.im.complete||!T.im.naturalWidth)return false;
 const now=performance.now(),D=TR[t.k];if(t.ao==null)t.ao=Math.random()*5000;
 const dead=t.hp<=0;if(!dead)bFace(t);else if(!t.fx)t.fx=1;
 const pq=pos81(t);let[x,y]=P(pq[0],pq[1]);const ph=(now+t.ao)/1000;
 let al=1,sy=1,sx=1,lean=0,dy=0,ox=0,oy=0;
 if(dead){const u=(now-(t.dk||now))/1000;
  if(t.fly){al=Math.max(0,1-u/.5);sy=1+u*.25;sx=1+u*.25}else{const f=Math.min(1,u/.35);lean=-f*1.35*(t.fx||1);dy=f*d.h*.28;al=u>1.4?Math.max(0,1-(u-1.4)/.5):1;sy=1-f*.35}
  if(u>2)return true}
 else{
  const ms=t.at?now-t.at:9e9;
  if(t.mv){const sp=t.k=='giant'?6.5:t.k=='gob'?14:10,s=Math.sin(ph*sp*1.0);dy=-Math.abs(s)*(t.k=='giant'?2.6:3.4);lean=s*.07;sy=1+Math.abs(s)*.04;sx=1-Math.abs(s)*.03}
  else if(d.fly){dy=Math.sin(ph*3)*2.4;lean=Math.sin(ph*1.7)*.04}
  else{sy=1+Math.sin(ph*2.6)*.018;sx=1-Math.sin(ph*2.6)*.012}
  if(ms<320){const u=ms/320,k=Math.sin(u*Math.PI);
   if(D.rg>1.5){ox=-(t.fx||1)*k*3;lean=-(t.fx||1)*k*.06}
   else{let tx=0,ty=0;if(t.tx){const a=P(t.x,t.y),b=P(t.tx[0],t.tx[1]);tx=b[0]-a[0];ty=b[1]-a[1];const l=Math.hypot(tx,ty)||1;tx/=l;ty/=l}
    const L=t.k=='giant'?10:7;ox=tx*k*L;oy=ty*k*L*.6;lean=(t.fx||1)*k*.12;sy=1+k*.05}}
  if(t.fl&&now-t.fl<120)al=.55}
 if(al<=0)return true;
 const vs=t.vu?.78:1,H=d.h*vs,W=H*T.w/T.h,fx=t.fx||1;
 g.save();g.globalAlpha*=al;
 if(!dead||!t.fly){g.fillStyle='rgba(0,0,0,'+(d.fly?.22:.32)+')';g.beginPath();g.ellipse(x,y,d.sh*(d.fly?.8:1),d.sh*.42,0,0,7);g.fill()}
 g.translate(x+ox,y+oy-d.fly*(t.vu?.4:1)+dy);g.rotate(lean);g.scale(fx*sx,sy);g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
 g.drawImage(T.im,-W/2,-H,W,H);g.restore();
 if(!dead&&t.hp<t.max)bar(x,y-H-d.fly-6,Math.max(20,W*.55),t.hp/t.max);
 return true}

/* ---- atlas animados (reposo/caminar/atacar/morir) ---- */
const TA81={"barb": {"aseq": null, "dseq": [0, 1, 3, 4, 5], "cw": 176, "ch": 149, "ax": 90, "ay": 148, "hs": 140, "n": [6, 6, 6, 6], "b": ""}, "arch": {"cw": 164, "ch": 149, "ax": 77, "ay": 148, "hs": 140, "n": [6, 6, 6, 6], "b": ""}, "gob": {"dseq": [1, 2, 3, 5], "cw": 166, "ch": 151, "ax": 81, "ay": 150, "hs": 140, "n": [6, 6, 6, 6], "b": ""}, "giant": {"aseq": null, "dseq": null, "cw": 143, "ch": 148, "ax": 68, "ay": 147, "hs": 140, "n": [6, 6, 6, 6], "b": ""}, "wb": {"aseq": [1, 2, 4, 5], "dseq": [1, 2, 3, 4, 5], "cw": 145, "ch": 148, "ax": 67, "ay": 147, "hs": 140, "n": [6, 6, 6, 6], "b": ""}, "loon": {"aseq": [1, 3, 4], "dseq": [0, 3, 4, 5], "cw": 142, "ch": 148, "ax": 72, "ay": 147, "hs": 140, "n": [6, 6, 6, 6], "b": ""}, "mage": {"aseq": null, "dseq": null, "cw": 175, "ch": 158, "ax": 92, "ay": 157, "hs": 150, "n": [6, 6, 6, 6], "b": ""}, "heal": {"aseq": [0, 1, 2, 3, 4], "dseq": [0, 1, 2, 3, 4], "cw": 158, "ch": 155, "ax": 78, "ay": 154, "hs": 150, "n": [6, 6, 6, 6], "b": ""}, "king": {"aseq": [0, 1, 3, 4], "dseq": null, "cw": 158, "ch": 157, "ax": 82, "ay": 156, "hs": 150, "n": [6, 6, 6, 6], "b": ""}};const TAI81={};
for(const k in TA81){const a=TA81[k],im=new Image();im.src='data:image/webp;base64,'+a.b;TAI81[k]={im,a}}
function drA81(t){
 const T=TAI81[t.k];if(!T||!T.im.complete||!T.im.naturalWidth)return false;
 const a=T.a,d=TD81[t.k],now=performance.now(),D=TR[t.k];if(t.ao==null)t.ao=Math.random()*5000;
 const dead=t.hp<=0;if(!dead)bFace(t);else if(!t.fx)t.fx=1;
 const pq=pos81(t);let[x,y]=P(pq[0],pq[1]),row,fi,al=1,ox=0,oy=0,dy=0;
 if(dead){const u=(now-(t.dk||now))/1000;row=3;{const q=a.dseq||[0,1,2,3,4,5];fi=q[Math.min(q.length-1,Math.floor(u/.16))]};if(u>1.7)al=Math.max(0,1-(u-1.7)/.4);if(u>2.2)return true}
 else{const ms=t.at?now-t.at:9e9;
  if(ms<520){row=2;{const q=a.aseq||[1,2,3,4,5];fi=q[Math.min(q.length-1,Math.floor(ms/520*q.length))]}}
  else if(t.mv){row=1;fi=Math.floor((now+t.ao)/(t.k=='giant'?150:95))%6}
  else{row=0;const q=Math.floor((now+t.ao)/260)%8;fi=1+(q<5?q:8-q-1)%5}
  if(t.fl&&now-t.fl<120)al=.6}
 const vs=t.vu?.78:1,sc=d.h*vs/a.hs,fx=t.fx||1,W=a.cw*sc,H=a.ch*sc;
 if(d.fly){const u=dead?Math.min(1,(now-(t.dk||now))/600):0;oy-=d.fly*(t.vu?.4:1)*(1-u)+(dead?0:Math.sin((now+t.ao)/420)*2.6)}
 g.save();g.globalAlpha*=al;
 if(!dead&&AU81[t.k])aura81(t,x+ox,y+oy,d,vs,now,0);
 if(!dead||d.fly){g.fillStyle='rgba(0,0,0,'+(d.fly?.22:.32)+')';g.beginPath();g.ellipse(x,y,d.sh,d.sh*.42,0,0,7);g.fill()}
 g.translate(x+ox,y+oy);g.scale(fx,1);g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
 g.drawImage(T.im,fi*a.cw,row*a.ch,a.cw,a.ch,-a.ax*sc,-a.ay*sc,W,H);g.restore();
 if(!dead&&AU81[t.k])aura81(t,x+ox,y+oy,d,vs,now,1);
 if(t.bm&&t.k=='loon'){const p=1-t.bm.t/t.bm.L,q=P(t.bm.tx,t.bm.ty),y0=y+oy+4,bx=x+(q[0]-x)*p,by=y0+(q[1]-y0)*p*p,B=PJI81.bomb[Math.floor(p*9)%4];if(B&&B.complete&&B.naturalWidth){const w=15,h=w*B.naturalHeight/B.naturalWidth;g.drawImage(B,bx-w/2,by-h/2,w,h)}}
 if(!dead&&t.hp<t.max)bar(x,y-d.h-d.fly-6,Math.max(20,d.h*.6),t.hp/t.max);
 return true}
const drT81o=drT;drT=function(t){if(drT81(t))return;return drT81o(t)};

/* ---- auras (mago / curandera) y proyectiles nuevos ---- */
const AU81={mage:{c:['255,150,40','170,80,255'],n:6,sp:'e'},heal:{c:['255,240,150','255,255,255'],n:7,sp:'s'}};
const GL81={};function glow81(c){if(GL81[c])return GL81[c];const k=document.createElement('canvas');k.width=k.height=96;const x=k.getContext('2d'),r=x.createRadialGradient(48,48,2,48,48,48);r.addColorStop(0,'rgba('+c+',.75)');r.addColorStop(.45,'rgba('+c+',.28)');r.addColorStop(1,'rgba('+c+',0)');x.fillStyle=r;x.fillRect(0,0,96,96);return GL81[c]=k}
function aura81(t,x,y,d,vs,now,front){const A=AU81[t.k],h=d.h*vs,pu=1+Math.sin((now+t.ao)/380)*.1;g.save();g.globalCompositeOperation='lighter';
 if(!front){const R=h*(t.k=='heal'?.95:.85)*pu,cy=y-h*.45;g.globalAlpha*=.5;g.drawImage(glow81(A.c[0]),x-R,cy-R,R*2,R*2);g.globalAlpha*=.7;const R2=R*.62;g.drawImage(glow81(A.c[1]),x-R2,cy-R2*.9,R2*2,R2*2)}
 else{for(let i=0;i<A.n;i++){const ph=((now+t.ao)/1500+i/A.n)%1,a=Math.sin(ph*Math.PI),px=x+Math.sin(i*2.4+(now+t.ao)/640)*h*.3,py=y-h*.1-ph*h*.95;g.globalAlpha=a*.9;g.fillStyle='rgb('+A.c[i&1]+')';
   if(A.sp=='s'){const r=1.4+a*2.2;g.fillRect(px-r,py-.6,r*2,1.2);g.fillRect(px-.6,py-r,1.2,r*2)}else{g.beginPath();g.arc(px,py,1+(1-ph)*2,0,7);g.fill()}}}
 g.restore()}
const PJI81={fire:[],bomb:[],arrow:null};
(function(){const J={"fire": [[72, 68, ""], [72, 69, ""], [72, 68, ""], [72, 72, ""]], "bomb": [[43, 48, ""], [48, 41, ""], [45, 48, ""], [47, 48, ""]], "arrow": [80, 17, ""]},mk=a=>{const i=new Image();i.src='data:image/webp;base64,'+a[2];return i};PJI81.fire=J.fire.map(mk);PJI81.bomb=J.bomb.map(mk);PJI81.arrow=mk(J.arrow)})();
const drShot81o=drShot;drShot=function(s,a,b){
 if(s.k=='ar'){const p=Math.min(1,Math.max(0,1-s.l/s.L)),H=s.H||26,dx=b[0]-a[0],x=a[0]+dx*p,y=a[1]+(b[1]-a[1])*p-Math.sin(p*Math.PI)*H-6,an=Math.atan2((b[1]-a[1])-Math.cos(p*Math.PI)*Math.PI*H,dx);
  if(s.tk=='mage'){const F=PJI81.fire[Math.floor(performance.now()/60)%4];if(F&&F.complete&&F.naturalWidth){g.save();g.globalCompositeOperation='lighter';g.globalAlpha=.55;const R=22;g.drawImage(glow81('255,140,40'),x-R,y-R,R*2,R*2);g.restore();
    g.save();g.translate(x,y);g.rotate(performance.now()/180);const w=24;g.drawImage(F,-w/2,-w/2,w,w*F.naturalHeight/F.naturalWidth);g.restore();return}}
  else{const A=PJI81.arrow;if(A&&A.complete&&A.naturalWidth){g.save();g.translate(x,y);g.rotate(an);const w=(s.H&&s.H>30)?40:30;g.drawImage(A,-w*.55,-w*.1,w,w*A.naturalHeight/A.naturalWidth);g.restore();return}}}
 return drShot81o(s,a,b)};
/* retratos de las tarjetas (arte nuevo) */
const PO81={};(function(){const J={"arch": [131, 132, ""], "wb": [128, 132, ""], "mage": [131, 132, ""], "giant": [132, 127, ""], "gob": [129, 132, ""], "loon": [91, 132, ""], "heal": [132, 124, ""]};for(const k in J){const i=new Image();i.src='data:image/webp;base64,'+J[k][2];PO81[k]={im:i,w:J[k][0],h:J[k][1]}}})();
/* iconos del ejército con el arte nuevo */
const IC81={};
function ic81(k,big){const key=k+(big?'B':''),AT=(typeof TAI81!='undefined')&&TAI81[k],PO=PO81[k];
 if(PO&&PO.im.complete&&PO.im.naturalWidth){if(IC81[key])return IC81[key];const c=document.createElement('canvas'),s=big?2:1;c.width=48*s;c.height=60*s;const x=c.getContext('2d');x.imageSmoothingQuality='high';const r=Math.min((c.width-2)/PO.w,(c.height-2)/PO.h),w=PO.w*r,h=PO.h*r;x.drawImage(PO.im,(c.width-w)/2,(c.height-h)/2,w,h);return IC81[key]=c.toDataURL()}
 if(AT&&AT.im.complete&&AT.im.naturalWidth){if(IC81[key])return IC81[key];const a=AT.a,c=document.createElement('canvas'),s=big?2:1;c.width=48*s;c.height=60*s;const x=c.getContext('2d');x.imageSmoothingQuality='high';
  const r=Math.min((c.width-4)/a.cw,(c.height-4)/a.ch),w=a.cw*r,h=a.ch*r;x.drawImage(AT.im,a.cw,0,a.cw,a.ch,(c.width-w)/2,c.height-h-2,w,h);return IC81[key]=c.toDataURL()}
 const T=TI81[k];if(!T||!T.im.complete||!T.im.naturalWidth)return null;if(IC81[key])return IC81[key];
 const c=document.createElement('canvas'),s=big?2:1;c.width=48*s;c.height=60*s;const x=c.getContext('2d');x.imageSmoothingQuality='high';
 const r=Math.min((c.width-4)/T.w,(c.height-4)/T.h),w=T.w*r,h=T.h*r;x.drawImage(T.im,(c.width-w)/2,c.height-h-2,w,h);return IC81[key]=c.toDataURL()}
const tIcon81=tIcon;tIcon=function(k){const v=ic81(k,0);return v||tIcon81(k)};
const tIB81=tIconBig;tIconBig=function(k){const v=ic81(k,1);return v||tIB81(k)};
setTimeout(()=>{for(const k in PO81)PO81[k].im.decode&&PO81[k].im.decode().then(()=>{IC81[k]=IC81[k+'B']=null;try{ui()}catch(e){}}).catch(()=>{});for(const k in TI81)TI81[k].im.decode&&TI81[k].im.decode().then(()=>{IC81[k]=IC81[k+'B']=null;try{ui()}catch(e){}}).catch(()=>{})},400);

/* ===== Bombardero (antes Rompemuros): niveles, daño de muerte y estadísticas ===== */
(function(){TR.wb.n='Bombardero';TR.wb.cost=50;TS.wb=15;try{delete AUT.wb;delete AUT.giant;delete AUT.gob}catch(e){}
 const W=[[6,6,240,240,20],[10,9,400,360,24],[15,13,600,520,29],[20,16,800,640,35],[43,23,1720,920,53],[55,30,2200,1200,72],[66,36,2640,1440,82],[75,42,3000,1680,92],[86,48,3440,1920,112],[94,54,3760,2160,130],[102,60,4080,2400,140],[110,66,4400,2640,150]];
 const C=[100000,250000,600000,1200000,2000000,2800000,3500000,4000000,4400000,4700000,5000000],H=[6,12,18,24,36,51,84,156,288,300,336],LB=[2,4,5,6,8,9,10,11,12,13,14];
 window.WBL82=W.map(r=>({d:r[0],dd:r[1],w:r[2],dw:r[3],hp:r[4],dps:0}));
 TLV.wb=WBL82;TRS.wb=[null].concat(C.map((c,i)=>({c,t:H[i]*3600*1.5,lab:Math.min(8,LB[i])})));TINFO.wb=1})();
function wbSt(t){const L=WBL82[Math.max(1,Math.min(WBL82.length,(t&&t.wl)||tlv('wb')))-1];return L}
function wbDie(t){const W=wbSt(t);for(const b of E.b)if(b.hp>0&&edge(t,b)<2)b.hp-=b.t=='wall'?W.dw:W.dd;A.fx.push({k:'boom',x:t.x,y:t.y,t:.5,L:.5,R:1.2});A.sh=.25;snd('wbatk')}
explode=function(x,y,t){const R=2,W=wbSt(t);for(const b of E.b)if(b.hp>0&&edge({x,y},b)<R)b.hp-=b.t=='wall'?W.w:W.d;A.fx.push({k:'boom',x,y,t:.6,L:.6,R:1.6});A.sh=.4;snd('wbatk')};
const sim82=sim;sim=function(dt){sim82(dt);if(A&&A.on&&A.tr)for(const t of A.tr)if(t.k=='wb'&&t.hp<=0&&!t.sx&&!t.wd){t.wd=1;wbDie(t)}};

/* ===== Aeronave (antes Globo bombástico): niveles, bomba al morir ===== */
(function(){TR.loon.n='Aeronave';TR.loon.cost=600;TS.loon=30;TR.loon.ar=1.2;try{delete AUT.loon}catch(e){}
 const W=[[25,25,150],[32,32,180],[48,48,216],[72,72,280],[108,108,390],[162,162,545],[198,214,690],[236,268,840],[256,322,940],[276,352,1040]];
 const C=[125000,400000,800000,1500000,2500000,3400000,4200000,4700000,5000000],H=[8,12,18,24,84,126,216,240,408],LB=[2,4,5,6,7,9,10,11,12];
 window.LNL82=W.map(r=>({dps:r[0],dd:r[1],hp:r[2]}));
 TLV.loon=LNL82;TRS.loon=[null].concat(C.map((c,i)=>({c,t:H[i]*3600*1.5,lab:Math.min(8,LB[i])})));TINFO.loon=1})();
loonDie=function(t){const L=LNL82[Math.max(1,Math.min(LNL82.length,t.wl||tlv('loon')))-1],x=t.x,y=t.y;(A.db=A.db||[]).push({x,y,t:1.5,L:1.5});
 A.pend.push({t:1.5,f:()=>{for(const b of E.b)if(b.hp>0&&edge({x,y},b)<1.2)b.hp-=L.dd;A.fx.push({k:'boom',x,y,t:.5,L:.5,R:1.2});A.sh=.3;snd('boom')}})};
const sim83=sim;sim=function(dt){sim83(dt);if(A&&A.db){for(const d of A.db)d.t-=dt;A.db=A.db.filter(d=>d.t>0)}};
function drDb82(){if(!A||!A.db||!A.db.length)return;const now=performance.now();for(const d of A.db){const q=P(d.x,d.y),u=1-d.t/d.L,B=PJI81.bomb[Math.floor(now/110)%4];if(!B||!B.naturalWidth)continue;
  const pu=1+Math.sin(now/(90-u*55))*.08*(1+u*2),w=20*pu,h=w*B.naturalHeight/B.naturalWidth;g.save();g.fillStyle='rgba(0,0,0,.3)';g.beginPath();g.ellipse(q[0],q[1]+1,8,3.2,0,0,7);g.fill();
  g.drawImage(B,q[0]-w/2+(Math.random()-.5)*u*2,q[1]-h+2,w,h);
  if((now/(160-u*110)|0)%2){g.globalCompositeOperation='lighter';g.fillStyle='#ffb040';g.beginPath();g.arc(q[0],q[1]-h,3+u*3,0,7);g.fill()}
  g.restore()}}
const dr83=draw;draw=function(){dr83();try{drDb82()}catch(e){}};

/* ===== Mago: niveles ===== */
(function(){TR.mage.cost=450;TS.mage=30;TR.mage.ar=.3;TR.mage.rg=3;try{delete AUT.mage}catch(e){}
 const W=[[75,50],[90,70],[108,90],[135,125],[165,170],[180,185],[195,200]];
 const C=[120000,320000,620000,1200000,2200000,3500000],H=[8,12,18,24,48,64],LB=[3,4,5,6,7,8];
 window.MGL82=W.map(r=>({hp:r[0],dps:r[1]}));
 TLV.mage=MGL82;TRS.mage=[null].concat(C.map((c,i)=>({c,t:H[i]*3600*1.5,lab:LB[i]})));TINFO.mage=1})();

/* ===== Sanadora (antes Curandera): niveles y curación por pulsos ===== */
(function(){TR.heal.n='Sanadora';TR.heal.cost=1500;TS.heal=60;TR.heal.rg=5;TR.heal.v=1.6;TR.heal.hr=1.5;TU.heal=8;
 const W=[[500,36,25.2,19],[700,48,33.6,26],[900,60,42,33],[1200,66,46.2,36]];
 const C=[450000,900000,2700000],H=[12,24,48],LB=[5,6,7];
 window.SNL82=W.map(r=>({hp:r[0],dps:r[1],pp:r[2],hh:r[3]}));
 TLV.heal=SNL82;TRS.heal=[null].concat(C.map((c,i)=>({c,t:H[i]*3600*1.5,lab:LB[i]})));TINFO.heal=1})();
const SEF82=[1,1,.9,.9,.7,.4,.1,0];
healT=function(t,D,dt){const L=SNL82[Math.max(1,Math.min(SNL82.length,t.wl||tlv('heal')))-1];A.el=A.el||0;
 let m=null,bd=1e9,w=null,wr=1;
 for(const o of A.tr){if(o===t||o.hp<=0||TR[o.k].heal)continue;const q=Math.hypot(o.x-t.x,o.y-t.y);if(q<bd){bd=q;m=o}
  if(!TR[o.k].fly&&o.hp<o.max&&q<=D.rg+.5){const r=o.hp/o.max;if(r<wr){wr=r;w=o}}}
 if(m&&bd>2.4){const st=Math.min(bd,D.v*dt);t.x+=(m.x-t.x)/bd*st;t.y+=(m.y-t.y)/bd*st;t.mv=1}
 t.hc=(t.hc||0)-dt;if(t.hc<=0&&w){t.hc=.7;const n=[];
  for(const o of A.tr)if(o.hp>0&&o.hp<o.max&&!TR[o.k].heal&&!TR[o.k].fly&&Math.hypot(o.x-w.x,o.y-w.y)<=D.hr){const hq=o.hq82||(o.hq82={t:-9,n:0});if(A.el-hq.t>.69){hq.t=A.el;hq.n=0}const ef=SEF82[Math.min(7,hq.n)];hq.n++;o.hp=Math.min(o.max,o.hp+(o.k=='king'?L.hh:L.pp)*ef)}
  A.fx.push({k:'hpulse',x:w.x,y:w.y,r:D.hr,t:.7,L:.7})}
 else if(t.hc<=0)t.hc=0};
const sim84=sim;sim=function(dt){if(A)A.el=(A.el||0)+dt;sim84(dt)};

/* ===== v81: acabado — partículas al construir/mejorar, animación de subida de nivel, sonidos nuevos y música ===== */
const PT81=[];const BS81=new WeakMap(),BA81=new WeakMap();let S81=null,PL81=0,PN81=0;
const lowfx81=()=>{try{return GFX=='low'||RM}catch(e){return false}};
function bc81(b){const s=TY[b.t].s;return[b.x+s/2,b.y+s/2,s]}
function dust81(b,n,big){const[cx,cy,s]=bc81(b);for(let i=0;i<n&&PT81.length<170;i++){const a=Math.random()*6.283,r=s*(.25+Math.random()*.35);PT81.push({k:'dust',x:cx+Math.cos(a)*r,y:cy+Math.sin(a)*r,z:2+Math.random()*4,vx:Math.cos(a)*(.5+Math.random()*1.1),vy:Math.sin(a)*(.5+Math.random()*1.1),vz:6+Math.random()*12,t:0,L:.7+Math.random()*.6,r:(3+Math.random()*4)*(big?1.5:1)})}}
function chip81(b,n){const[cx,cy,s]=bc81(b);for(let i=0;i<n&&PT81.length<170;i++){const a=Math.random()*6.283,r=s*(.3+Math.random()*.2);PT81.push({k:'chip',x:cx+Math.cos(a)*r,y:cy+Math.sin(a)*r,z:6+Math.random()*10,vx:Math.cos(a)*1.4,vy:Math.sin(a)*1.4,vz:22+Math.random()*26,t:0,L:.7+Math.random()*.3,c:['#8a5a2b','#b07a3c','#d9b36a'][i%3],rot:Math.random()*6})}}
function star81(b,n,col){const[cx,cy,s]=bc81(b);for(let i=0;i<n&&PT81.length<170;i++){const a=Math.random()*6.283,r=s*.5*Math.random();PT81.push({k:'star',x:cx+Math.cos(a)*r,y:cy+Math.sin(a)*r,z:4+Math.random()*10,vx:Math.cos(a)*.5,vy:Math.sin(a)*.5,vz:24+Math.random()*34,t:0,L:.9+Math.random()*.7,r:2.6+Math.random()*3.2,c:col||'#ffe27a',ph:Math.random()*6})}}
function ring81(b,col,L,k){const[cx,cy,s]=bc81(b);PT81.push({k:'ring',x:cx,y:cy,z:0,t:0,L:L||.9,R:s*(k||1),c:col||'255,226,120'})}
function beam81(b,col){const[cx,cy,s]=bc81(b);PT81.push({k:'beam',x:cx,y:cy,z:0,t:0,L:1.1,h:TY[b.t].h+70,w:s*TW*.42,c:col||'255,226,120'})}
function banner81(b,txt,col){try{const p=window.__juice&&window.__juice.scr&&window.__juice.scr(b);if(p&&p[0]>0&&p[1]>0&&p[0]<innerWidth&&p[1]<innerHeight)window.__juice.ftext(p[0],p[1]-30,txt,col,22)}catch(e){}}
function onPlace81(b){dust81(b,lowfx81()?5:12,1);try{snd('place81')}catch(e){}}
function onBuilt81(b){BA81.set(b,performance.now());ring81(b,'120,255,170',.8,1);ring81(b,'255,255,255',1.1,1.5);beam81(b,'140,255,190');dust81(b,lowfx81()?6:16,1);star81(b,lowfx81()?6:16,'#c9ffd8');banner81(b,'¡Construido!','#9dffb8');try{snd('bdone81')}catch(e){}}
function onLvUp81(b){BA81.set(b,performance.now());ring81(b,'255,214,90',.9,1);ring81(b,'255,240,170',1.25,1.7);ring81(b,'255,255,255',1.6,2.4);beam81(b,'255,220,100');dust81(b,lowfx81()?6:14,1);star81(b,lowfx81()?10:30,'#ffe27a');banner81(b,'¡Nivel '+b.lv+'!','#ffe08a');try{snd('lvup81')}catch(e){}}
function scan81(now,dt){
 if(typeof S=='undefined'||!S||!S.b||mode!='v')return;
 if(S81!==S){S81=S;for(const b of S.b)BS81.set(b,{lv:b.lv,up:b.up>0,nb:!!b.nb,t:now});return}
 for(const b of S.b){let e=BS81.get(b);
  if(!e){BS81.set(b,{lv:b.lv,up:b.up>0,nb:!!b.nb,t:now});if(b.nb&&b.up>0&&b.t!='wall')onPlace81(b);continue}
  const up=b.up>0&&!b.ruin;
  if(e.up&&!up&&!b.ruin){if(b.lv>e.lv)onLvUp81(b);else if(e.nb&&b.t!='wall')onBuilt81(b)}
  if(up&&b.t!='wall'&&!lowfx81()&&now-e.t>340){e.t=now;dust81(b,2);chip81(b,1);if(Math.random()<.25)star81(b,1,'#fff0b0')}
  else if(up&&b.t!='wall'&&lowfx81()&&now-e.t>900){e.t=now;dust81(b,1)}
  e.lv=b.lv;e.up=up;e.nb=!!b.nb}}
function drPT81(){
 const now=performance.now(),dt=Math.min(.05,(now-(PL81||now))/1000);PL81=now;
 try{scan81(now,dt)}catch(e){}
 if(!PT81.length)return;
 g.save();g.setTransform(KS*cam.z,0,0,KS*cam.z,KS*cam.x,KS*cam.y);
 for(let i=PT81.length-1;i>=0;i--){const p=PT81[i];p.t+=dt;const u=p.t/p.L;if(u>=1){PT81.splice(i,1);continue}
  if(p.k=='ring'){const[x,y]=P(p.x,p.y,0),r=p.R*TW*.5*(.4+u*1.5);g.strokeStyle='rgba('+p.c+','+(.9*(1-u))+')';g.lineWidth=(5*(1-u)+1)*1;g.beginPath();g.ellipse(x,y,r,r*TH/TW,0,0,7);g.stroke();g.fillStyle='rgba('+p.c+','+(.14*(1-u))+')';g.fill();continue}
  if(p.k=='beam'){const[x,y]=P(p.x,p.y,0),h=p.h*Math.min(1,u*4),a=Math.sin(Math.min(1,u*1.15)*Math.PI)*.55,gr=g.createLinearGradient(0,y,0,y-h);gr.addColorStop(0,'rgba('+p.c+','+a+')');gr.addColorStop(1,'rgba('+p.c+',0)');g.fillStyle=gr;g.beginPath();g.moveTo(x-p.w,y);g.lineTo(x-p.w*.55,y-h);g.lineTo(x+p.w*.55,y-h);g.lineTo(x+p.w,y);g.closePath();g.fill();continue}
  p.x+=p.vx*dt*1.2;p.y+=p.vy*dt*1.2;p.z+=p.vz*dt;if(p.k=='chip')p.vz-=90*dt;else if(p.k=='dust')p.vz*=.94;
  const[x,y]=P(p.x,p.y,Math.max(0,p.z));
  if(p.k=='dust'){g.fillStyle='rgba(226,206,164,'+(.5*(1-u))+')';g.beginPath();g.arc(x,y,p.r*(1+u*1.3),0,7);g.fill()}
  else if(p.k=='chip'){g.save();g.translate(x,y);g.rotate(p.rot+u*9);g.globalAlpha=1-u*u;g.fillStyle=p.c;g.fillRect(-2,-1,4,2.4);g.restore()}
  else if(p.k=='star'){const r=p.r*(1-u*.5)*(.75+.25*Math.sin(now/60+p.ph));g.fillStyle=p.c;g.globalAlpha=1-u*u;g.beginPath();g.moveTo(x,y-r*1.6);g.lineTo(x+r*.45,y-r*.45);g.lineTo(x+r*1.6,y);g.lineTo(x+r*.45,y+r*.45);g.lineTo(x,y+r*1.6);g.lineTo(x-r*.45,y+r*.45);g.lineTo(x-r*1.6,y);g.lineTo(x-r*.45,y-r*.45);g.closePath();g.fill();g.globalAlpha=1}}
 g.restore()}
const dr81=draw;draw=function(){dr81();try{drPT81()}catch(e){}};
const drB81=drB;drB=function(b){const e=BA81.get(b);if(e){const u=(performance.now()-e)/700;if(u<1){const k=Math.sin(u*Math.PI*3)*(1-u)*(1-u)*.16,s=TY[b.t].s,[px,py]=P(b.x+s/2,b.y+s/2,0);g.save();g.translate(px,py);g.scale(1-k*.45,1+k);g.translate(-px,-py);if(u<.35){g.shadowColor='#ffe27a';g.shadowBlur=18*(1-u/.35)}drB81(b);g.restore();return}BA81.delete(b)}drB81(b)};
/* ---- sonidos nuevos ---- */
try{
SFX.place81=()=>{noise(.09,.18,420);tone(110,.12,'sine',.14,0,60)};
SFX.bdone81=()=>{noise(.1,.12,900);tone(523,.16,'triangle',.11);tone(659,.16,'triangle',.11,.1);tone(784,.3,'triangle',.12,.2)};
SFX.lvup81=()=>{[523,659,784,1047,1319].forEach((f,i)=>tone(f,.28,'triangle',.11,i*.09));tone(1568,.7,'sine',.07,.45);noise(.3,.06,6000)};
SFX.die_loon=()=>{noise(.35,.2,500);tone(200,.35,'sawtooth',.08,0,60)};SFX.die_wb=()=>{noise(.25,.2,700)};SFX.heal81=()=>{tone(880,.2,'sine',.07);tone(1175,.3,'sine',.07,.08)};
}catch(e){}
/* ---- música procedural (aldea tranquila / batalla) ---- */
const MU81={on:false,nx:0,step:0,g:null,mode:''};
function mus81(){
 try{if(!AC||CU||MUTE||(typeof MV=='number'&&MV<=.001)||document.hidden){if(MU81.g)MU81.g.gain.setTargetAtTime(0,AC.currentTime,.3);return}
  AC.resume();const t=AC.currentTime,m=mode=='a'?'a':'v';
  if(!MU81.g){MU81.g=AC.createGain();MU81.g.gain.value=0;MU81.g.connect(AC.destination);MU81.nx=t+.1}
  MU81.g.gain.setTargetAtTime(.5*Math.min(1,Math.max(0,typeof MV=='number'?MV:1)),t,.4);
  if(MU81.mode!=m){MU81.mode=m;MU81.step=0;MU81.nx=Math.max(MU81.nx,t+.05)}
  const bpm=m=='a'?128:78,sp=60/bpm/2;
  while(MU81.nx<t+.6){const s=MU81.step++,tt=MU81.nx;MU81.nx+=sp;mnote81(m,s,tt,sp)}
 }catch(e){}}
function mt81(f,d,ty,v,tt,a){const o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.setValueAtTime(f,tt);g.gain.setValueAtTime(.0001,tt);g.gain.linearRampToValueAtTime(v,tt+(a||.01));g.gain.exponentialRampToValueAtTime(.0001,tt+d);o.connect(g);g.connect(MU81.g);o.start(tt);o.stop(tt+d+.05)}
function mn81(f,d,v,tt,col){bufs81();const s=AC.createBufferSource(),fl=AC.createBiquadFilter(),g=AC.createGain();s.buffer=MN81;fl.type='bandpass';fl.frequency.value=col||3000;g.gain.setValueAtTime(v,tt);g.gain.exponentialRampToValueAtTime(.0001,tt+d);s.connect(fl);fl.connect(g);g.connect(MU81.g);s.start(tt);s.stop(tt+d+.02)}
let MN81=null;function bufs81(){if(MN81)return;MN81=AC.createBuffer(1,AC.sampleRate,AC.sampleRate);const a=MN81.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=Math.random()*2-1}
const hz81=n=>440*Math.pow(2,(n-69)/12);
function mnote81(m,s,tt,sp){
 if(m=='v'){const bar=Math.floor(s/16)%4,ch=[[0,4,7],[-3,0,4],[-5,-1,2],[-7,-3,0]][bar],pent=[0,2,4,7,9,12,14,16];
  if(s%16==0)for(const n of ch)mt81(hz81(60+n),sp*15,'sine',.022,tt,.6);
  if(s%4==0)mt81(hz81(36+ch[0]+(s%8==4?7:0)),sp*3.5,'triangle',.07,tt,.02);
  if(s%2==0&&Math.random()<.55){const n=pent[(Math.random()*pent.length)|0]+(bar==1||bar==3?-3:0);mt81(hz81(72+n),sp*3,'triangle',.05,tt,.01)}
  if(s%8==6&&Math.random()<.4)mn81(0,.05,.02,tt,6000)}
 else{const bar=Math.floor(s/16)%4,rt=[0,-2,-4,-2][bar],sc=[0,3,5,7,10,12,15];
  if(s%4==0){const o=AC.createOscillator(),g=AC.createGain();o.frequency.setValueAtTime(140,tt);o.frequency.exponentialRampToValueAtTime(42,tt+.14);g.gain.setValueAtTime(.32,tt);g.gain.exponentialRampToValueAtTime(.0001,tt+.2);o.connect(g);g.connect(MU81.g);o.start(tt);o.stop(tt+.22)}
  if(s%8==4)mn81(0,.14,.16,tt,1800);if(s%2==1)mn81(0,.03,.04,tt,7000);
  if(s%2==0)mt81(hz81(33+rt+(s%8==6?7:0)),sp*1.7,'sawtooth',.07,tt,.01);
  if(s%16==0||s%16==10)for(const n of [0,3,7])mt81(hz81(57+rt+n),sp*3,'square',.022,tt,.02);
  if(s%4==2&&Math.random()<.7)mt81(hz81(69+rt+sc[(Math.random()*sc.length)|0]),sp*1.6,'triangle',.045,tt,.01)}}
setInterval(mus81,200);
document.addEventListener('pointerdown',()=>{try{AC&&AC.resume()}catch(e){}},{once:false,passive:true});
/* ---- estilo unificado de botones y paneles (azul neón como la tienda) ---- */
(function(){const st=document.createElement('style');st.textContent=`
html #msg button,html #msg .btn{background:linear-gradient(180deg,#22345c,#14203f)!important;border:2px solid #4aa8ff!important;color:#fff!important;border-radius:14px!important;box-shadow:0 0 12px rgba(74,168,255,.45),inset 0 1px 0 rgba(255,255,255,.18)!important;text-shadow:0 1px 0 #000a}
html #msg button:active{transform:scale(.96);filter:brightness(1.2)}
html #msg>div,html #msg .box{border:2px solid rgba(74,168,255,.7)!important;box-shadow:0 0 28px rgba(74,168,255,.35),0 10px 30px #000a!important;background:linear-gradient(180deg,#17254a,#0c1428)!important;border-radius:20px!important}
html #msg button#ok,html #msg button.pri{background:linear-gradient(180deg,#ffc83d,#e48a00)!important;border-color:#ffe08a!important;color:#2a1600!important;text-shadow:none;box-shadow:0 0 14px rgba(255,190,60,.55)!important}`;document.head.appendChild(st)})();

/* música antigua desactivada: solo suena la nueva */
try{musStep=function(){};mpS=-1;mpBad=9;mpInit=function(){};if(typeof mpA!='undefined'&&mpA){mpA.pause();mpA=null}}catch(e){}

/* ===== v82: efectos de impacto (sprites) y pulso de curación dorado, con partículas ===== */
const FX82={imp:[[],[],[]],pulse:[]};
(function(){const J={"imp": [[[112, 125, "UklGRv4DAABXRUJQVlA4WAoAAAAQAAAAbwAAfAAAQUxQSHMBAAABkEPb2rFH7xfbtm0nnW07lW27tG2Obbuzbdue73/G0fNWo4iYAPLf/3+OFRGhjGVqMmUyNq2ji+ymd68MqGJ2AT7HUiX+DXBa+WgyDQC7lWhyFgAum9NBTU+QYczfAcDHEh7CKyvHg51TZ2+o/0YOAMCd+vD2tUlC2Glvef/0wSf44YeXnLd5gtiJ9rHwy68DCfZcRZ9+7aQKekbr2F+75s2HmZCSefbe9/Dr7PkGOwURBie10L4TL2EO2TuHJxIthPDhtVv2goW5Zl/f3RDBj47zLpjX4ykC2DCCGrE9F9/PCfv0wuoqe1EGm++5DXM2PprdnbFQDW6CNpeo7alZfBrXEWQI6pJrZ/HQjmCvemgWd03Rc7kxi8d+6HmtWNfYcvkHH/e3r93ojp6MhiK3UNLn7w5ocMtoSaP3Q+6zAPAmilB0GACumNMk6AnATgWaGJ4GtoKHJkLLnj/WJlQt2bSK0NU2Jooy/BLilPnv/98JAQBWUDggZAIAABAUAJ0BKnAAfQA+PRyMRSIhoRILbHwgA8SygEtB/APxm2Srmf4wfpn0cmrPcD9qsRK+gflV/me0B4kf8O6gHmA/gH8b/2n+A7AHoAfph1nPoAfq76XfsX/sz+xnwD/yH+wkz4J3wu38fNv5haofaVmFtUj4SDEDAWAt47/TA6hNxLVnodEW0hiX5dh3K0C/Rt9BjzxdrxFe/PUtXr97CMke7MLt9I7z0AAA/uztJ5snR2A1NddF/F/EkiVvgBk8x9FCgalfV6rggT3zPA+3OiUO+fXgj9wCNBhjS2+dw6I4X9kAE/HefOZGFC5FUSz61lxXBcEGZjvVV4HzNj3RmH8acP6eTkIkNxE+gV/hJmhXSdytjsLkn6xZqHUJFeZzwh6IcWIQGSiQkCgMBZgAfBc4TMvRX09bgtxPy8Rtmt71ZOzibemxRZsCWM6xli1J0zI7blPfDg2Idy5fdLL890BALxOmNV8rmIQiRqmLPuxyogvF/z01SqALn7tLz1M5Sz/wo/BMxvIm6AiODJiaQCeED4J8q8/OQkZj0+BHuhXCqjHbF4P6f/neOHWcssTU3YK0ofVIiBbr+Q6Hui18R5h3Z34vWx2GnOtJikUyjcYZtdb+AF/xVnDrBv/+vJ0RXhSm7R5g8mHq2PDKGDr/AgvkR7wYTC+KV02isXB9bAqiYOqviywXEnH5BydIgbChS8exRPjfixOMoGlyB6SiB/9Ly5gMlZIRl3a5jw4S9m2DZMSfKIRuKxAMTsJiqnDX+FZtKJssQps4Su5LERnmt1Lkxz6IbO29XKyZZSwL1qMuOAAAAA=="], [112, 125, ""], [112, 125, ""], [112, 125, ""], [112, 125, "UklGRnQCAABXRUJQVlA4WAoAAAAQAAAAbwAAfAAAQUxQSIcAAAABcBvbtqp8dxc0JXJJ3d2hCu8EYoY+ICaiA1qgEoeLS0RMAPL3/2+9KIEDQzpNYAirdlaEIBCXdu7uasMKS6SY1GBx2JEXejycscPCRwoOWBiLhMLytCZ5ChhKZgBAKXIPjMAACEzH9C4Q6fl2qYLSXW1mLCi99cKFgFqd1HFYGJlC/v6/cwEAVlA4IMYBAADQDwCdASpwAH0APj0ejUUiIaEQ6qzAIAPEsbduoZX+V/jNs/fMPxj/YCnT7A9uAP4B/Hf2A4QD+udQB6AHlTftV8En7W+wB+wz7FUSIhrKmaSVPQQOJsJqrLbuu2rva5l9SBXgHMBrm5AyhWXRzqAi0/YCEJAnVNveP18UHhmBjyFFlTNJGwAA/uyY+e6szVM/8122MbY9hw/64MmRAKhSFf9gaz4UmXpc/+W7nRib4icVHI/lqezUuZc8Pk4tRwLjC9InwxyblQZN+dNe7qZjDeqOv/TmojJ0q2mP8h7b778PEUrqhJ/wtab7KHG9t1kqBWNQvDJSH6yOlaQVsCzKu/RUo6ioPw8xSVKUe4F8m4o+nLSBTtfw+nP/2giYuaMJeVGPHXzi+9QZzCOoPEVM1nSh0nxcICqYmz+Arh51PGqq/gFJcdLvSnfwWvT+9I52BVe7z0rLmPwHpJcVk3aKlvCQAP+GWDGB0u2dzW5psfPdT1Qb9Z8+1SCV2czUU5mnV/2j9K1MMOD7RH2tVm6R/3y5OhfR/bBMZ4VvHbEHbBCr2Peaaa2ug/y30w/dnXw/CJv3CePiM/aOf5APnWzdLgNsAAAA"], [112, 125, "UklGRqIAAABXRUJQVlA4WAoAAAAQAAAAbwAAfAAAQUxQSAQAAAABiIgIVlA4IHgAAABwBwCdASpwAH0APj0ejkUiIaEQVAAgA8S0t26v4CAfgB+gAAGw+pviD+Ks2gMsREmLAP4RkxmiBf9ToWd6LkWQvYIMAAD+7AT///Dj6jCg/8OU//9AGObgj/8+oXOhpblu1hh6Fonjd2BUCsdA8p9cemNhtgvemAA="]], [[112, 125, ""], [112, 125, ""], [112, 125, ""], [112, 125, ""], [112, 125, ""], [112, 125, "UklGRrABAABXRUJQVlA4WAoAAAAQAAAAbwAAfAAAQUxQSEgAAAABcCMAABFl27abOLe319r/H2PcRcQEAH//f+AiOLwx3RJszexvzKNaahpmW+J1NbZmorcFJjHgY7MeuI3pxmxjtNjemL//r2FWUDggQgEAADANAJ0BKnAAfQA+PR6NRKIhoRJN/AAgA8Szt26vuwKvkH43d94d30AU4D+QfbdvAH8AuoDzQPQA6TD9dPgP/XT/AerEA6x7pZr8sSBn65SUZLVzOSVKaE71gLMi6KrA8I1JJAqQfd8DVGQ8ICQEaJhngAD+62YtWXS7eIG/8OUR6+4ouI5f8+oDf9BDW44web+tbdvE+gADe+e1KVJHPmKIfnnboAFpOecQydz+8s1ADxK6L9o/NmCoKjeTsfr+giuogoFxF3Tlf6aXSFNbLFdWBf7cD5HbXcyE1jT/LgLWq4fqkqMh01hXgDWWQqSDjM7R4jMjDhynA+f/0wuG2eQmvFoEzbyqqGjpo3EH/d63361qtY/kIuE3UtNt0FdJDWN0HEGoNoh9Octrx/X7bOP5xTW6cQAA3NkgOPtSeH8LSAA="]], [[112, 125, ""], [112, 125, ""], [112, 125, ""], [112, 125, ""], [112, 125, ""], [112, 125, ""]]], "pulse": [[144, 144, ""], [144, 144, ""], [144, 144, ""], [144, 144, ""]]},mk=a=>{const i=new Image();i.src='data:image/webp;base64,'+a[2];return i};J.imp.forEach((r,i)=>FX82.imp[i]=r.map(mk));FX82.pulse=J.pulse.map(mk)})();
window.BX82=1;
const ok82=i=>i&&i.complete&&i.naturalWidth;
function sp82(row,u,x,y,w,al,add){const n=6,v=Math.max(0,Math.min(.999,u))*n,k=Math.floor(v),fr=v-k,F=FX82.imp[row],h=w*125/112;if(!ok82(F[k]))return;g.save();if(add)g.globalCompositeOperation='lighter';
 g.globalAlpha=Math.max(0,al)*(k<n-1?1-fr*.55:1);g.drawImage(F[k],x-w/2,y-h/2,w,h);if(k<n-1&&ok82(F[k+1])){g.globalAlpha=Math.max(0,al)*fr*.55;g.drawImage(F[k+1],x-w/2,y-h/2,w,h)}g.restore()}
function pt82(o){if(PT81.length<190)PT81.push(Object.assign({t:0,L:.8,vx:0,vy:0,vz:0,z:2},o))}
function boomP82(f){const R=f.R||1,lo=lowfx81();const n=lo?4:Math.round(8+R*5);
 for(let i=0;i<n;i++){const a=Math.random()*6.283,s=.8+Math.random()*2.2;pt82({k:'chip',x:f.x,y:f.y,z:6,vx:Math.cos(a)*s*R,vy:Math.sin(a)*s*R,vz:30+Math.random()*50,L:.6+Math.random()*.5,c:['#ffd27a','#ff9a3c','#ff6a2a','#5a4a3a'][i&3],rot:Math.random()*6})}
 if(lo)return;for(let i=0;i<Math.round(4+R*3);i++){const a=Math.random()*6.283;pt82({k:'star',x:f.x+Math.cos(a)*.3*R,y:f.y+Math.sin(a)*.3*R,z:6+Math.random()*10,vx:Math.cos(a)*.7,vy:Math.sin(a)*.7,vz:26+Math.random()*34,L:.7+Math.random()*.6,r:1.6+Math.random()*2,c:i&1?'#ffb040':'#fff0a0',ph:Math.random()*6})}
 for(let i=0;i<3;i++){const a=Math.random()*6.283;pt82({k:'dust',x:f.x+Math.cos(a)*.4*R,y:f.y+Math.sin(a)*.4*R,z:4,vx:Math.cos(a)*.9,vy:Math.sin(a)*.9,vz:10,L:.9,r:(4+Math.random()*4)*R})}}
function impP82(f){if(lowfx81()||PT81.length>120)return;const R=f.v=='giant'?1.4:1;for(let i=0;i<3;i++){const a=Math.random()*6.283;pt82({k:i?'chip':'star',x:f.x,y:f.y,z:8,vx:Math.cos(a)*1.2,vy:Math.sin(a)*1.2,vz:18+Math.random()*24,L:.4+Math.random()*.3,r:1.4+Math.random()*1.4,c:i?'#e8d2a0':'#fff2a8',ph:Math.random()*6,rot:Math.random()*6})}}
function pulseP82(f){const lo=lowfx81(),n=lo?4:10;for(let i=0;i<n;i++){const a=Math.random()*6.283,r=f.r*Math.sqrt(Math.random())*.9;pt82({k:'star',x:f.x+Math.cos(a)*r,y:f.y+Math.sin(a)*r,z:2+Math.random()*8,vx:0,vy:0,vz:18+Math.random()*26,L:.9+Math.random()*.8,r:1.8+Math.random()*2.4,c:i&1?'#fff6b0':'#ffd84a',ph:Math.random()*6})}
 if(!lo&&A&&A.tr)for(const t of A.tr)if(t.hp>0&&t.hp<t.max&&Math.hypot(t.x-f.x,t.y-f.y)<f.r){for(let i=0;i<2;i++)pt82({k:'star',x:t.x+(Math.random()-.5)*.4,y:t.y+(Math.random()-.5)*.4,z:10+Math.random()*16,vz:22+Math.random()*20,L:.8,r:1.6+Math.random()*1.4,c:'#9dffb0',ph:Math.random()*6})}}
function pulseD82(p,q,r,rot,al){const now=performance.now(),F=FX82.pulse[Math.floor(now/75)%4];if(!ok82(F))return;const Rx=r*TW*ER();g.save();g.translate(p,q);g.scale(1,TH/TW);g.rotate(rot);g.globalCompositeOperation='lighter';g.globalAlpha=Math.max(0,al);g.drawImage(F,-Rx,-Rx,Rx*2,Rx*2);g.globalAlpha*=.45;g.rotate(-rot*1.7);g.drawImage(F,-Rx*.62,-Rx*.62,Rx*1.24,Rx*1.24);g.restore()}
function drFx82(){if(typeof A=='undefined'||!A||mode=='v')return;const now=performance.now();g.save();g.setTransform(KS*cam.z,0,0,KS*cam.z,KS*cam.x,KS*cam.y);
 for(const f of A.fx){const u=1-f.t/f.L;
  if(f.k=='boom'){if(!f.e){f.e=1;boomP82(f)}const[p,q]=P(f.x,f.y,6),R=f.R||1;if(!lowfx81())sp82(1,u*.95,p,q+4*R,R*56,.8);sp82(2,u,p,q-2*R,R*62,1);if(u<.6)sp82(0,u/.6*.75,p,q-3*R,R*58,1-u*.8,true)}
  else if(f.k=='imp'){if(!f.e){f.e=1;impP82(f)}const[p,q]=P(f.x,f.y,10),z=f.v=='giant'?1.45:f.v=='arch'?.7:1;if(f.v=='giant'&&!lowfx81())sp82(1,u*.9,p,q+4,52*z*.8,.55);sp82(0,u*.78,p,q,34*z,1-u*.5,true)}
  else if(f.k=='hpulse'){if(!f.e){f.e=1;pulseP82(f)}const[p,q]=P(f.x,f.y,2),e=Math.min(1,u*1.7);pulseD82(p,q,f.r*(.25+.75*e),now/420,(1-u)*(u<.12?u/.12:1)*.95)}}
 if(A.zones)for(const z of A.zones)if(z.k=='heal'){const[p,q]=P(z.x,z.y,1);pulseD82(p,q,z.r*.96,now/900,.34+.1*Math.sin(now/260));if(!lowfx81()&&now-(z.pt||0)>260){z.pt=now;const a=Math.random()*6.283,r=z.r*Math.sqrt(Math.random())*.9;pt82({k:'star',x:z.x+Math.cos(a)*r,y:z.y+Math.sin(a)*r,z:3,vz:22+Math.random()*18,L:1,r:1.8+Math.random()*1.8,c:'#fff0a0',ph:Math.random()*6})}}
 g.restore()}
const dr82=draw;draw=function(){dr82();try{drFx82()}catch(e){}};

/* ===== v81: panel de pruebas (solo versión SIN internet) ===== */
if(OFFLINE){(function(){
const st=document.createElement('style');st.textContent=`
#dbgB{position:fixed;right:8px;top:44%;z-index:9998;width:44px;height:44px;border-radius:14px;border:2px solid #4aa8ff;background:linear-gradient(180deg,#22345c,#14203f);color:#fff;font-size:22px;box-shadow:0 0 12px rgba(74,168,255,.5);opacity:.85}
#dbgP{position:fixed;left:0;right:0;bottom:0;max-height:72vh;overflow:auto;z-index:9999;background:linear-gradient(180deg,#17254a,#0c1428);border-top:2px solid #4aa8ff;border-radius:20px 20px 0 0;padding:10px 12px 18px;display:none;box-shadow:0 -8px 30px #000a;color:#fff;font:600 13px system-ui,sans-serif}
#dbgP h4{margin:10px 0 6px;font-size:13px;color:#8fd0ff;letter-spacing:.5px}
#dbgP .gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(108px,1fr));gap:6px}
#dbgP button{padding:9px 6px;border-radius:12px;border:2px solid #4aa8ff;background:linear-gradient(180deg,#22345c,#14203f);color:#fff;font:700 12px system-ui,sans-serif;box-shadow:0 0 8px rgba(74,168,255,.35)}
#dbgP button:active{transform:scale(.96);filter:brightness(1.25)}
#dbgP button.hot{border-color:#ffe08a;background:linear-gradient(180deg,#ffc83d,#e48a00);color:#2a1600}
#dbgP .hd{display:flex;justify-content:space-between;align-items:center;font-size:14px}
#dbgP .hd button{width:40px;padding:4px}
#dbgS{margin-top:4px;color:#ffe08a;font-size:12px}`;document.head.appendChild(st);
const B=document.createElement('button');B.id='dbgB';B.textContent='🛠';document.body.appendChild(B);
const P=document.createElement('div');P.id='dbgP';document.body.appendChild(P);
const names={barb:'Guerrero',arch:'Arquera',giant:'Gigante',gob:'Duende',wb:'Bombardero',loon:'Aeronave',mage:'Mago',heal:'Sanadora',king:'Rey'};
const A=window.__dbgA=[];const act=(sec,label,fn,hot)=>{A.push({sec,label,fn,hot})};
const done=m=>{try{ui()}catch(e){}try{save()}catch(e){}try{snd('ui')}catch(e){}stat(m)};
const stat=m=>{const e=document.getElementById('dbgS');if(e)e.textContent=m||('Oro '+(S.g|0)+' · Elixir '+(S.e|0)+' · Gemas '+(S.gem|0)+' · Trofeos '+(S.tr|0))};
act('Recursos','+100.000 oro y elixir',()=>{S.g+=1e5;S.e+=1e5;done('Recursos añadidos')},1);
act('Recursos','+1.000.000 todo',()=>{S.g+=1e6;S.e+=1e6;done('Recursos añadidos')});
act('Recursos','+500 gemas',()=>{S.gem=(S.gem|0)+500;done('Gemas añadidas')});
act('Recursos','Llenar almacenes',()=>{S.g=Math.max(S.g,cap.g());S.e=Math.max(S.e,cap.e());done('Almacenes llenos')});
act('Recursos','Trofeos +100',()=>{S.tr=(S.tr|0)+100;done('Trofeos +100')});
act('Recursos','Quitar escudo',()=>{S.shield=0;done('Escudo quitado')});
act('Construcción','Completar todo ya',()=>{let n=0;for(const b of S.b)if(b.up>0){b.up=.01;n++}for(const o of(S.ob||[]))if(o.up>0){o.up=.01;n++}if(S.rs){S.rs.rem=.01;n++}done('Terminando '+n+' obras')},1);
act('Construcción','Ayuntamiento +1',()=>{const h=S.b.find(b=>b.t=='hall');if(h&&h.lv<10){h.lv++;h.max=h.hp=mhp(h)}done('Ayuntamiento nivel '+h.lv)});
act('Construcción','Ayuntamiento −1',()=>{const h=S.b.find(b=>b.t=='hall');if(h&&h.lv>1){h.lv--;h.max=h.hp=mhp(h)}done('Ayuntamiento nivel '+h.lv)});
act('Construcción','Ayuntamiento nivel 10',()=>{const h=S.b.find(b=>b.t=='hall');h.lv=10;h.max=h.hp=mhp(h);done('Ayuntamiento nivel 10')});
act('Construcción','Todo +1 nivel',()=>{for(const b of S.b){if(b.t=='hall')continue;try{if(b.lv<lcap(b)){b.lv++;b.max=b.hp=mhp(b)}}catch(e){}}done('Edificios +1 nivel')});
act('Construcción','Todo al máximo',()=>{for(const b of S.b){if(b.t=='hall')continue;try{b.lv=lcap(b);b.max=b.hp=mhp(b)}catch(e){}}done('Edificios al máximo')});
act('Construcción','Reparar todo',()=>{for(const b of S.b){b.hp=b.max;b.ruin=0}done('Todo reparado')});
act('Tropas','Ejército completo',()=>{const ks=Object.keys(TR).filter(k=>k!='king');let g=0;while(g++<400){let a=0;for(const k of ks){S.army[k]=(S.army[k]|0)+1;if(used(S.army)>campCap())S.army[k]--;else a=1}if(!a)break}done('Ejército lleno')},1);
act('Tropas','Vaciar ejército',()=>{for(const k in S.army)S.army[k]=0;done('Ejército vacío')});
for(const k of Object.keys(names).filter(k=>k!='king'))act('Tropas','+5 '+names[k],()=>{S.army[k]=(S.army[k]|0)+5;done(names[k]+' +5 (ignora capacidad)')});
act('Tropas','Mejorar tropas al máx',()=>{S.tl=S.tl||{};for(const k in TR){try{S.tl[k]=(TLV[k]||[0]).length}catch(e){}}done('Tropas al nivel máximo')});
act('Héroe','Rey: +10 tokens',()=>{S.tok=(S.tok|0)+10;done('Tokens +10')});
act('Héroe','Rey: nivel máximo',()=>{if(S.hero){S.hero.lv=10;S.hero.up=null;S.tl=S.tl||{};S.tl.king=10}done('Rey nivel 10')});
act('Héroe','Rey: curar / listo',()=>{if(S.hero){S.hero.rest=null;S.hero.up=null}done('Rey listo')});
act('Tropas','Hechizos +5',()=>{S.sp=S.sp||{};for(const k of['zap','heal','rage'])S.sp[k]=(S.sp[k]|0)+5;done('Hechizos +5')});
act('Batalla','Atacar ahora',()=>{P.style.display='none';try{startAttack()}catch(e){stat('Error: '+e.message)}},1);
act('Batalla','Campaña nivel +1',()=>{S.lv=(S.lv|0)+1;done('Campaña nivel '+S.lv)});
act('Batalla','Campaña nivel −1',()=>{S.lv=Math.max(0,(S.lv|0)-1);done('Campaña nivel '+S.lv)});
act('Efectos y sonido','Efecto construido',()=>{try{onBuilt81(S.b[0])}catch(e){}stat('Efecto construido')});
act('Efectos y sonido','Efecto subida nivel',()=>{try{onLvUp81(S.b[0])}catch(e){}stat('Efecto subida de nivel')});
for(const n of['lvup81','bdone81','place81','heal81'])act('Efectos y sonido','Sonido '+n.replace('81',''),()=>{try{snd(n)}catch(e){}});
act('Partida','Saltar tutorial',()=>{S.tut=TUTS.length;done('Tutorial saltado')});
act('Partida','Reiniciar partida',()=>{if(!confirm('¿Borrar la partida y empezar de cero?'))return;try{localStorage.removeItem(K)}catch(e){}S=fresh();ensureS();try{fit();clampCam()}catch(e){}done('Partida reiniciada')});
function render(){let h='<div class="hd"><b>🛠 Panel de pruebas (sin internet)</b><button data-x>✕</button></div><div id="dbgS"></div>';let sec='';
 A.forEach((a,i)=>{if(a.sec!=sec){if(sec)h+='</div>';sec=a.sec;h+='<h4>'+sec+'</h4><div class="gr">'}h+='<button data-i="'+i+'"'+(a.hot?' class="hot"':'')+'>'+a.label+'</button>'});
 P.innerHTML=h+'</div>';stat()}
B.addEventListener('click',()=>{try{AC&&AC.resume()}catch(e){}if(P.style.display=='block'){P.style.display='none';return}render();P.style.display='block'});
P.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.x!=null){P.style.display='none';return}const a=A[+b.dataset.i];if(a)try{a.fn()}catch(er){stat('Error: '+er.message)}});
})()}

/* ================= v85: HÉROE — Rey Guerrero (altar, niveles, descanso, Puño de Hierro) ================= */
(function(){
/* ---- tablas ---- */
const KL=[];for(let i=0;i<10;i++)KL.push({hp:Math.round(1700+i*125),dps:Math.round(120+i*13)});
window.KGL85=KL;TLV.king=KL;
/* mejora lv→lv+1: tokens y tiempo (provisional, se cambiará al conectar Stripe) */
const KUP=[{tok:1,t:7200},{tok:1,t:14400},{tok:2,t:21600},{tok:2,t:28800},{tok:3,t:43200},{tok:3,t:57600},{tok:4,t:72000},{tok:5,t:86400},{tok:6,t:115200}];
const KMAX=10,KFD=[.20,.25,.30,.35,.40,.45],KFN=[3,4,5,6,7,8],KFL=5;
const KREST=lv=>900+lv*180; /* descanso máximo (s) con daño total */
/* unidad (no enumerable: no aparece en las listas de entrenamiento) */
Object.defineProperty(TR,'king',{value:{n:'Rey Guerrero',e:'👑',sp:0,cost:0,hp:1700,dmg:120,v:1.6,rg:.55,rt:1.2,c:'#f5c542',hero:1},enumerable:false,writable:true,configurable:true});
DESC.kalt='Altar del Rey: aquí vive tu héroe, el Rey Guerrero. Tócalo para ver sus estadísticas y mejorarlo con tokens. No ocupa espacio en el campamento: se despliega una vez por ataque. Si cae o recibe daño, descansa en el altar; mientras más daño, más tarda. Solo ataca (no defiende).';
/* ---- estado ---- */
const altarOk=()=>S&&S.b&&S.b.find(b=>b.t=='kalt'&&!b.ruin&&!b.nb&&!(b.up>0));
function kH(){if(!S)return null;if(!altarOk()&&!(S.hero))return null;if(!S.hero)S.hero={lv:1,up:null,rest:null};const H=S.hero;H.lv=Math.max(1,Math.min(KMAX,H.lv|0||1));S.tl=S.tl||{};S.tl.king=H.lv;return H}
window.kLv=()=>{const H=S&&S.hero;return H?H.lv:1};
const kReady=()=>{const H=kH();return !!(H&&altarOk()&&!H.up&&!H.rest)};
window.KRDY85=kReady;
function kSyncArmy(){if(!S||!S.army)return;const v=kReady()?1:0;if(S.army.king!==v&&!(mode=='a'&&A&&A.on))S.army.king=v}
function kTick(dt){if(!S||!S.b)return;const H=kH();if(!H){if(S.army&&S.army.king&&!(mode=='a'&&A&&A.on))S.army.king=0;return}
 for(const f of['up','rest']){const o=H[f];if(!o)continue;if(o.rem==null)o.rem=o.T||0;o.rem-=dt;if(o.rem<=0){H[f]=null;if(f=='up'){H.lv=Math.min(KMAX,H.lv+1);S.tl=S.tl||{};S.tl.king=H.lv;try{snd('done')}catch(e){}}if(!CU)try{save()}catch(e){}}}
 kSyncArmy()}
const rsAdv85=rsAdv;rsAdv=function(dt){rsAdv85(dt);try{kTick(dt)}catch(e){console.error(e)}};
/* ---- descanso al terminar el ataque ---- */
const eA85=endAttack;
endAttack=function(sur){let kt=null,was=false;try{if(mode=='a'&&A&&A.on&&!RPL){was=true;kt=A.tr.find(t=>t.k=='king')||null}}catch(e){}
 const r=eA85(sur);
 try{if(was&&kt){const H=kH();if(H){const f=kt.hp<=0?1:Math.max(0,1-kt.hp/kt.max);let s=Math.round(KREST(H.lv)*f);if(f>0&&f<.05)s=0;if(s>0)H.rest={rem:s,T:s};S.army.king=0}}kSyncArmy()}catch(e){console.error(e)}
 return r};
/* ---- habilidad: Puño de Hierro ---- */
function kFist(){if(!A||!A.on)return false;const t=A.tr.find(o=>o.k=='king'&&o.hp>0);if(!t||t.ifu)return false;const lv=t.wl||tlv('king');if(lv<KFL)return false;
 const al=Math.max(1,Math.min(6,lv-KFL+1));t.ifu=1;t.ifr=10;t.ifm=1+KFD[al-1];t.hp=Math.min(t.max,t.hp+t.max*.25);
 const n=KFN[al-1],bi=Math.min(TLV.barb.length-1,al-1),B=TLV.barb[bi];
 for(let i=0;i<n;i++){const a=i/n*Math.PI*2+.4,px=t.x+Math.cos(a)*1.1,py=t.y+Math.sin(a)*1.1;A.tr.push({k:'barb',x:px,y:py,hp:B.hp,max:B.hp,dm:B.dps*TR.barb.rt,wl:bi+1,cd:0,tg:null,tc:'auto',fly:TR.barb.fly,sm:1,ifr:10,ifm:1+KFD[al-1],ao:i*700})}
 A.fx.push({k:'ring',x:t.x,y:t.y,r:3.2,t:.7,L:.7,c:'255,90,50'});A.fx.push({k:'hpulse',x:t.x,y:t.y,r:2.4,t:.9,L:.9});try{snd('rage')}catch(e){}
 return true}
window.kFist85=kFist;
window.kFistPress=function(){if(!A||!A.on||RPL||mode!='a')return;if(REC&&!RPL)REC.ev.push([A.tk|0,'k']);if(kFist())updFB()};
/* aura de furia en el campo */
const drT85=drT;drT=function(t){drT85(t);try{if(t.ifr>0&&t.hp>0){const[x,y]=P(t.x,t.y),big=t.k=='king',R=big?46:30;g.save();g.globalCompositeOperation='lighter';g.globalAlpha=.55+Math.sin(performance.now()/110)*.12;g.drawImage(glow81('255,70,40'),x-R,y-R*1.35,R*2,R*2);g.restore()}}catch(e){}};
/* posición del rey dibujado en el altar: no lo empujes fuera del edificio */
const pos81o=pos81;pos81=function(t){return t.k85?[t.x,t.y]:pos81o(t)};
/* ---- botón de la habilidad ---- */
let fb=null;
function mkFB(){if(fb)return fb;fb=document.createElement('button');fb.id='kfb';fb.innerHTML='<i>✊</i><b>Puño de Hierro</b>';fb.style.display='none';
 const st=document.createElement('style');st.textContent='#kfb{position:absolute;right:12px;bottom:18px;z-index:6;display:none;flex-direction:column;align-items:center;gap:2px;min-width:92px;padding:8px 10px;border-radius:16px;border:2px solid #ffb020;background:linear-gradient(#5b1a12,#2e0b07);color:#ffe9b0;font:800 11px system-ui;box-shadow:0 0 18px #ff5a2a99,inset 0 0 12px #ff8a3c55;animation:kfp 1.1s ease-in-out infinite}#kfb i{font-style:normal;font-size:26px;line-height:1}@keyframes kfp{50%{box-shadow:0 0 28px #ffb020,inset 0 0 16px #ffb020aa}}#kfb:active{transform:scale(.94)}body.land #kfb{bottom:84px}';document.head.appendChild(st);
 const host=document.getElementById('msg')?document.getElementById('msg').parentNode:document.body;host.appendChild(fb);
 const go=e=>{e.preventDefault();e.stopPropagation();kFistPress()};fb.addEventListener('pointerdown',e=>e.stopPropagation());fb.addEventListener('click',go);return fb}
function updFB(){const b=mkFB();let on=false;try{if(mode=='a'&&A&&A.on&&!RPL){const t=A.tr.find(o=>o.k=='king'&&o.hp>0);on=!!(t&&!t.ifu&&(t.wl||tlv('king'))>=KFL)}}catch(e){}
 b.style.display=on?'flex':'none'}
setInterval(()=>{try{updFB()}catch(e){}},150);
/* ---- repetición: evento 'k' ---- */
/* (se inserta en rpEvents desde extra80.py) */
window.kFistRp=()=>kFist();
/* ---- inicio del ataque: elegir al rey si es lo único ---- */
setInterval(()=>{try{if(mode=='a'&&A&&A.on&&!RPL&&!A.tr.length&&A.army.king&&!A.army[pick]&&!(PSP82&&SP[pick])){pick='king';PSP82=false}}catch(e){}},200);

/* ---- dibujo del altar ---- */
function drKAlt(b){
 const now=performance.now(),dk='#2b2417',mine=mode=='v'&&S&&S.b&&S.b.includes(b),H=mine?kH():null,rd=mine&&kReady();
 mPoly(b,[[.0,.1,0],[3.0,.05,0],[3.1,3.0,0],[.05,3.05,0]],'rgba(20,40,10,.22)');
 mBox(b,.1,.1,2.9,2.9,0,4,'#8f8672',dk);mBox(b,.3,.3,2.7,2.7,4,8,'#aa9f86',dk);
 /* escalones al frente */
 mBox(b,1.05,2.7,1.95,3.0,0,3,'#a49a82',dk);mBox(b,1.2,2.55,1.8,2.75,3,6,'#b8ad94',dk);
 /* pilares con brasero */
 for(const[cu,cv]of[[.55,.55],[2.45,.55],[.55,2.45],[2.45,2.45]]){mBox(b,cu-.2,cv-.2,cu+.2,cv+.2,8,20,'#8a7f68',dk);mBox(b,cu-.26,cv-.26,cu+.26,cv+.26,20,23,'#f5c542',dk);
  const[fx,fy]=PS(b,cu,cv,23),fl=Math.sin(now/130+cu*7+cv*3)*.5+.5;g.save();g.globalCompositeOperation='lighter';g.globalAlpha=.55+fl*.25;g.drawImage(glow81('255,150,40'),fx-13,fy-22,26,26);g.restore();
  g.fillStyle='#ffb020';g.beginPath();g.moveTo(fx-3.2,fy);g.quadraticCurveTo(fx-3,fy-7-fl*3,fx,fy-11-fl*4);g.quadraticCurveTo(fx+3,fy-7-fl*3,fx+3.2,fy);g.fill();g.fillStyle='#fff2a8';g.beginPath();g.moveTo(fx-1.5,fy);g.quadraticCurveTo(fx-1.4,fy-4,fx,fy-6-fl*2);g.quadraticCurveTo(fx+1.4,fy-4,fx+1.5,fy);g.fill()}
 /* pedestal */
 mOct(b,1.5,1.5,.82,8,13,'#cfc3a6',dk);mOct(b,1.5,1.5,.9,13,15.5,'#f5c542',dk);mOct(b,1.5,1.5,.66,15.5,16.5,'#6a1d16',dk);
 /* estandarte trasero */
 {const[ax,ay]=PS(b,1.5,.3,8),[bx,by]=PS(b,1.5,.3,46);g.strokeStyle='#5a4a2a';g.lineWidth=2.4;g.beginPath();g.moveTo(ax,ay);g.lineTo(bx,by);g.stroke();
  const w=Math.sin(now/420)*1.6;g.fillStyle='#b8301f';g.strokeStyle=dk;g.lineWidth=1;g.beginPath();g.moveTo(bx,by);g.lineTo(bx+22,by+2+w);g.lineTo(bx+22,by+22+w);g.lineTo(bx+11,by+28+w);g.lineTo(bx,by+22);g.closePath();g.fill();g.stroke();
  g.fillStyle='#f5c542';g.font='bold 13px system-ui';g.textAlign='center';g.textBaseline='middle';g.fillText('♛',bx+11,by+13+w*.6);g.textBaseline='alphabetic'}
 /* rey (o estado) */
 const[cx,cy]=PS(b,1.5,1.5,16.5);
 if(rd){const f=b.k85||(b.k85={k:'king',k85:1,x:b.x+1.5,y:b.y+1.5,hp:1,max:1,fx:1,mv:0,ao:Math.random()*4000});f.x=b.x+1.5;f.y=b.y+1.5;g.save();g.translate(0,-14);try{drA81(f)}catch(e){}g.restore()}
 else{g.save();g.globalCompositeOperation='lighter';g.globalAlpha=.5+Math.sin(now/500)*.12;g.drawImage(glow81('255,200,60'),cx-16,cy-24,32,32);g.restore();
  g.fillStyle='#f5c542';g.strokeStyle=dk;g.lineWidth=1;g.beginPath();g.moveTo(cx-9,cy-3);g.lineTo(cx-10,cy-14);g.lineTo(cx-4,cy-9);g.lineTo(cx,cy-17);g.lineTo(cx+4,cy-9);g.lineTo(cx+10,cy-14);g.lineTo(cx+9,cy-3);g.closePath();g.fill();g.stroke()}
 if(H&&(H.up||H.rest)){const o=H.up||H.rest,[tx,ty]=PS(b,1.5,1.5,52),txt=(H.up?'⏳ ':'💤 ')+fmtT(Math.max(0,o.rem));g.save();g.font='bold 11px system-ui';const w=g.measureText(txt).width+14;g.fillStyle='rgba(10,14,24,.85)';g.strokeStyle='#ffb02088';g.lineWidth=1;g.beginPath();g.roundRect?g.roundRect(tx-w/2,ty-9,w,18,9):g.rect(tx-w/2,ty-9,w,18);g.fill();g.stroke();g.fillStyle='#ffe9b0';g.textAlign='center';g.textBaseline='middle';g.fillText(txt,tx,ty+.5);g.restore()}
}
const drB085=drB0;drB0=function(b){if(b.t=='kalt'&&!b.ruin&&!b.nb){drKAlt(b);return}return drB085(b)};

/* ---- panel del Rey ---- */
const KUI={on:0};let kEl=null,kTm=null;
function kCss(){if(document.getElementById('kgcss'))return;const st=document.createElement('style');st.id='kgcss';st.textContent=`
#kgm{position:absolute;inset:0;z-index:9;display:none;align-items:center;justify-content:center;background:radial-gradient(#000a,#000d);padding:12px;backdrop-filter:blur(2px)}#kgm.on{display:flex}
#kgm .kc{width:min(400px,100%);max-height:96%;overflow:auto;background:linear-gradient(180deg,#141e32,#0b1120);border:2px solid #ffb02088;border-radius:22px;padding:14px 16px 16px;color:#e9eefc;font:14px/1.4 system-ui;box-shadow:0 10px 40px #000c,0 0 30px #ffb02033}
#kgm .kh{display:flex;align-items:center;gap:10px}#kgm .kh b{font-size:20px;color:#ffd36b;flex:1}#kgm .kx{background:#1d2840;border:1px solid #ffffff22;color:#fff;border-radius:12px;min-width:40px;min-height:40px;font-size:18px}
#kgm .kr{display:flex;gap:12px;margin:10px 0}#kgm canvas{width:84px;height:104px;border-radius:14px;background:radial-gradient(#3a2a12,#12161f);border:1px solid #ffb02055;flex:none}
#kgm .ks{flex:1;display:grid;gap:5px;align-content:center}#kgm .ks div{display:flex;justify-content:space-between;background:#ffffff0d;border-radius:10px;padding:5px 9px}#kgm .ks span{color:#8a97b4}#kgm .ks b{color:#fff}#kgm .ks i{color:#35e08a;font-style:normal;font-size:12px;margin-left:6px}
#kgm .kst{border-radius:12px;padding:9px 12px;margin:8px 0;text-align:center;font-weight:700}#kgm .kst.ok{background:#35e08a22;color:#7dffb8}#kgm .kst.ws{background:#ffb02022;color:#ffd36b}#kgm .kst.bd{background:#ff4d5e22;color:#ff8e99}
#kgm .kab{background:#ffffff0d;border:1px solid #ff8a3c55;border-radius:12px;padding:8px 11px;margin:8px 0;font-size:13px}#kgm .kab b{color:#ffb86b}#kgm .kab.lk{opacity:.6;border-color:#ffffff22}
#kgm button.kb{width:100%;min-height:50px;margin-top:8px;border-radius:14px;border:2px solid #0006;font:800 15px system-ui;color:#10240a;background:linear-gradient(#c4f77d,#6fcf33);box-shadow:0 3px 0 #1b5a0b}#kgm button.kb:disabled{background:#2a3350;color:#7f8bab;box-shadow:none}
#kgm button.kb.gm{background:linear-gradient(#9fe8ff,#3da8d8);color:#06222e;box-shadow:0 3px 0 #135a7a}#kgm button.kb.tk{background:linear-gradient(#ffe07a,#e29a1a);color:#3a2200;box-shadow:0 3px 0 #7a4a00}
#kgm .kt{display:flex;justify-content:space-between;align-items:center;background:#ffb02014;border:1px solid #ffb02044;border-radius:12px;padding:8px 12px;margin-top:8px}#kgm .kt small{color:#8a97b4}`;document.head.appendChild(st)}
function kBuild(){if(kEl)return kEl;kCss();kEl=document.createElement('div');kEl.id='kgm';const host=document.getElementById('msg')?document.getElementById('msg').parentNode:document.body;host.appendChild(kEl);
 kEl.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b){if(e.target===kEl)kClose();return}e.stopPropagation();const a=b.dataset.k;if(a=='x')kClose();else if(a=='up')kUpgrade();else if(a=='gem')kGem();else if(a=='buy'){try{snd('open')}catch(_){}try{window.ton90Open&&window.ton90Open('tokens')}catch(_){}}});return kEl}
function kClose(){KUI.on=0;if(kEl)kEl.classList.remove('on');clearInterval(kTm);kTm=null}
function kOpen(){kBuild();KUI.on=1;kEl.classList.add('on');kRender();clearInterval(kTm);kTm=setInterval(()=>{if(KUI.on)kRender()},500)}
function kPortrait(cv){const T=TAI81&&TAI81.king;if(!T||!T.im.complete||!T.im.naturalWidth)return false;const a=T.a,x=cv.getContext('2d');x.clearRect(0,0,cv.width,cv.height);x.imageSmoothingQuality='high';const q=a.cr||[0,0,a.cw,a.ch],r=Math.min((cv.width-8)/q[2],(cv.height-8)/q[3]),w=q[2]*r,h=q[3]*r;x.drawImage(T.im,a.cw+q[0],q[1],q[2],q[3],(cv.width-w)/2,cv.height-h-4,w,h);return true}
function kRender(){const H=kH();if(!H){kClose();return}const lv=H.lv,L=KL[lv-1],N=KL[lv],up=KUP[lv-1],tok=S.tok|0,key=[lv,H.up&&1,H.rest&&1,tok,S.gem|0].join();
 const t=(H.up||H.rest);let st;if(H.up)st=`<div class="kst ws">⏳ Mejorando a nivel ${lv+1} · ${fmtT(Math.max(0,H.up.rem))}</div>`;else if(H.rest)st=`<div class="kst bd">💤 Descansando · ${fmtT(Math.max(0,H.rest.rem))}</div>`;else st=`<div class="kst ok">✅ Listo para la batalla</div>`;
 const al=Math.max(1,Math.min(6,lv-KFL+1)),ab=lv>=KFL?`<div class=kab><b>✊ Puño de Hierro</b> · nivel ${al}<br>Una vez por batalla: el Rey se enfurece 10 s (+${Math.round(KFD[al-1]*100)}% daño y velocidad), recupera 25% de vida e invoca <b>${KFN[al-1]} guerreros</b> furiosos.</div>`:`<div class="kab lk"><b>✊ Puño de Hierro</b> · 🔒 Se desbloquea en el nivel ${KFL}<br>Invoca guerreros y enfurece al Rey.</div>`;
 let upb='';if(lv>=KMAX)upb=`<button class="kb" disabled>Nivel máximo</button>`;else{const dis=!!H.up||tok<up.tok;upb=`<button class="kb tk" data-k=up ${dis?'disabled':''}>⬆ Mejorar a nivel ${lv+1} · 🎟 ${up.tok} · ⏱ ${fmtT(up.t)}</button>`}
 let gb='';if(t){const c=gemCost(Math.max(0,t.rem));gb=`<button class="kb gm" data-k=gem ${(S.gem|0)<c?'disabled':''}>⚡ ${H.up?'Terminar mejora':'Terminar descanso'} · ${c} 💎</button>`}
 const h=`<div class=kc><div class=kh><span style="font-size:28px">👑</span><b>Rey Guerrero</b><button class=kx data-k=x>✕</button></div>
 <div class=kr><canvas width=168 height=208></canvas><div class=ks><div><span>Nivel</span><b>${lv} / ${KMAX}</b></div><div><span>❤️ Vida</span><b>${L.hp}${N?`<i>→ ${N.hp}</i>`:''}</b></div><div><span>⚔️ Daño/s</span><b>${L.dps}${N?`<i>→ ${N.dps}</i>`:''}</b></div><div><span>Descanso máx.</span><b>${fmtT(KREST(lv))}</b></div></div></div>
 ${st}${ab}${gb}${upb}<div class=kt><span>🎟 Tokens de mejora: <b>${tok}</b><br><small>Se compran con GRAM (TON)</small></span><button class="kb" data-k=buy style="width:auto;min-height:38px;margin:0;padding:0 14px;font-size:12px">Comprar</button></div></div>`;
 if(kEl.dataset.key!==key||!kEl.querySelector('.kc')){kEl.dataset.key=key;kEl.innerHTML=h}else{const s=kEl.querySelector('.kst');if(s)s.outerHTML=st.trim()}
 const cv=kEl.querySelector('canvas');if(cv&&!cv.dataset.d){if(kPortrait(cv))cv.dataset.d=1}}
let KB90=0;async function kUpgrade(){if(KB90)return;const H=kH();if(!H||H.up||H.lv>=KMAX)return;const u=KUP[H.lv-1];if((S.tok|0)<u.tok){try{snd('deny')}catch(e){}try{window.ton90Open&&window.ton90Open('tokens')}catch(_){}return}KB90=1;try{if(window.TK90&&TK90.on()){if(!(await TK90.spend(u.tok))){try{snd('deny')}catch(e){}kRender();return}}else S.tok=(S.tok|0)-u.tok}finally{KB90=0}const H2=kH();if(!H2||H2.up||H2.lv>=KMAX)return;H2.up={rem:u.t,T:u.t};kSyncArmy();try{snd(520)}catch(e){}save();kRender();try{ui()}catch(e){}}
async function kGem(){const H=kH();if(!H)return;const o=H.up||H.rest;if(!o)return;const c=gemCost(Math.max(0,o.rem));if((S.gem|0)<c){try{snd('deny')}catch(e){}return}if(!await gemPay(c)){try{snd('deny')}catch(e){}return}const o2=H.up||H.rest;if(o2){o2.rem=0;kTick(0)}kRender();try{ui()}catch(e){}}
/* botón del panel del edificio */
(function(){const p=document.getElementById('panel');if(p)p.addEventListener('click',e=>{const b=e.target.closest('[data-kg]');if(!b)return;e.stopImmediatePropagation();e.preventDefault();kOpen()},true)})();
window.kOpen85=kOpen;
/* ---- ajustes tras cargar partida ---- */
try{kH();kSyncArmy()}catch(e){}
})();

/* ===== v85: contador de obra en todas las estructuras + lista "En mejora" de la tienda ===== */
window.pill85=function(x,y,txt,col){g.save();g.font='bold 11px system-ui';const w=g.measureText(txt).width+14;g.fillStyle='rgba(10,14,24,.88)';g.strokeStyle=col||'#ffb02099';g.lineWidth=1;g.beginPath();g.roundRect?g.roundRect(x-w/2,y-9,w,18,9):g.rect(x-w/2,y-9,w,18);g.fill();g.stroke();g.fillStyle='#ffe9b0';g.textAlign='center';g.textBaseline='middle';g.fillText(txt,x,y+.5);g.restore()};
const drB85u=drB;drB=function(b){drB85u(b);try{if(mode=='v'&&b.up>0&&!b.ghost&&b.t!='wall'&&!TY[b.t].trap){const d=TY[b.t],[x,y]=P(b.x+d.s/2,b.y+d.s/2,d.h+46);pill85(x,y,(b.nb?'🔨 ':b.rpr?'🔧 ':'⏳ ')+fmtT(b.up))}}catch(e){}};
const upL=()=>S.b.filter(b=>b.up>0&&!b.ghost&&b.t!='wall'&&!TY[b.t].trap).sort((a,b)=>a.up-b.up);
window.upN=()=>{try{return upL().length+(S.b.some(b=>b.up>0&&b.t=='wall')?1:0)}catch(e){return 0}};
window.upPage=function(){const L=upL(),W=S.b.filter(b=>b.up>0&&b.t=='wall');let r='';
 const row=(i,ic,nm,st,t,p)=>`<button class=upr data-up=${i}><span class=upi>${ic}</span><span class=upt><b>${nm}</b><small>${st}</small><span class=upb><i style="width:${Math.round(p*100)}%"></i></span></span><span class=upm>⏳<b>${fmtT(t)}</b></span></button>`;
 for(const b of L){const d=TY[b.t],T=b.ut||b.up,st=b.nb?'🏗 Nueva construcción':b.rpr?'🔧 Reparando':'⬆ Nivel '+b.lv+' → '+(b.lv+1);r+=row(S.b.indexOf(b),ico(b.t),d.n,st,b.up,1-b.up/T)}
 if(W.length){const mx=Math.max(...W.map(b=>b.up)),T=Math.max(...W.map(b=>b.ut||b.up)),lv=Math.max(...W.map(b=>b.lv));r+=row(-1,ico('wall'),'Muros ×'+W.length,'⬆ Nivel '+lv+' → '+(lv+1),mx,1-mx/T)}
 return `<div class=shw><div class=shh>En mejora<small>Obras en curso · Constructores libres: ${builders()}/${nBld()}</small></div><div class=upl>${r||'<div class=upe>No hay estructuras en mejora.<br><small>Mejora un edificio desde su tarjeta.</small></div>'}</div></div>`};
(function(){const st=document.createElement('style');st.textContent=`.stp .stt{position:relative}.stt .bdg{position:absolute;top:2px;right:2px;min-width:20px;height:20px;padding:0 4px;border-radius:10px;background:#ff4d5e;color:#fff;font:800 12px system-ui;display:flex;align-items:center;justify-content:center;border:2px solid #0b1020;box-shadow:0 0 8px #ff4d5e}
.upl{display:flex;flex-direction:column;gap:8px;padding:6px 10px 12px;width:100%;box-sizing:border-box}.upr{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:14px;background:#141e32;border:1px solid #ffb02044;color:#e9eefc;font-family:'Baloo 2',system-ui,sans-serif}.upr:active{background:#1b2a48}
.upi{font-size:30px;line-height:1;flex:none;width:40px;text-align:center}.upt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.upt b{font-size:16px;color:#ffd36b}.upt small{color:#8ee9b6;font-size:13px;font-weight:700}.upb{display:block;height:6px;border-radius:4px;background:#0007;overflow:hidden;margin-top:3px}.upb i{display:block;height:100%;background:linear-gradient(#ffd45a,#ff9a00)}
.upm{flex:none;text-align:right;font-size:12px;color:#8a97b4;display:flex;flex-direction:column;align-items:flex-end}.upm b{font-size:15px;color:#fff}.upe{padding:34px 12px;text-align:center;color:#8a97b4;font-size:15px}`;document.head.appendChild(st);
 const sh=document.getElementById('shop');if(sh)sh.addEventListener('click',e=>{const b=e.target.closest('[data-up]');if(!b)return;e.stopImmediatePropagation();e.preventDefault();const i=+b.dataset.up;let t=i>=0?S.b[i]:S.b.find(x=>x.up>0&&x.t=='wall');if(!t)return;
  UI.shop=0;pk=t;tab='info';try{const q=P(t.x+TY[t.t].s/2,t.y+TY[t.t].s/2);cam.x=LW()/2-q[0]*cam.z;cam.y=(LH()-30)/2-q[1]*cam.z;clampCam()}catch(_){}try{snd('open')}catch(_){}shopDraw();ui()},true);
 setInterval(()=>{try{if(UI.shop&&UI.st=='u')shopDraw()}catch(e){}},1000)})();

/* ===== v85: HUD estilo referencia — iconos sueltos + paneles de cristal desenfocado (vertical) ===== */
(function(){
/* ---- iconos sueltos provisionales (se cambian por arte final con HI85IMG) ---- */
const defs=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<radialGradient id="hgC" cx=".35" cy=".28" r=".95"><stop offset="0" stop-color="#fff6b8"/><stop offset=".45" stop-color="#ffc936"/><stop offset="1" stop-color="#d8860a"/></radialGradient>
<linearGradient id="hgE" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb8ff"/><stop offset=".5" stop-color="#d04df0"/><stop offset="1" stop-color="#7a22b8"/></linearGradient>
<linearGradient id="hgG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8ffd2"/><stop offset=".55" stop-color="#2fd47a"/><stop offset="1" stop-color="#0c8446"/></linearGradient>
<linearGradient id="hgS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset=".55" stop-color="#4aa3f0"/><stop offset="1" stop-color="#2260b8"/></linearGradient>
<linearGradient id="hgT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0a0"/><stop offset=".55" stop-color="#ffbf2b"/><stop offset="1" stop-color="#c97a08"/></linearGradient>
<linearGradient id="hgH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7edf7"/><stop offset="1" stop-color="#7d8aa3"/></linearGradient>
<linearGradient id="hgW" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c97d3a"/><stop offset="1" stop-color="#8a4c18"/></linearGradient></defs></svg>`;
const SV=b=>`<svg class="bri hi" viewBox="0 0 48 48" aria-hidden="true">${b}</svg>`;
const HI={
 g:SV(`<circle cx="24" cy="26" r="20" fill="#6a3a05"/><circle cx="24" cy="24" r="20" fill="url(#hgC)" stroke="#5a3206" stroke-width="3"/><circle cx="24" cy="24" r="14" fill="none" stroke="#c47b0c" stroke-width="2.6"/><rect x="19" y="19" width="10" height="10" rx="2" fill="#a8610a" stroke="#5a3206" stroke-width="1.8"/><path d="M9.5 17A16 16 0 0 1 19 8.6" stroke="#fff" stroke-opacity=".85" stroke-width="3" fill="none" stroke-linecap="round"/>`),
 e:SV(`<path d="M24 3C24 3 39 20 39 31a15 15 0 0 1-30 0C9 20 24 3 24 3z" fill="url(#hgE)" stroke="#40105c" stroke-width="3" stroke-linejoin="round"/><ellipse cx="17.5" cy="29" rx="3.2" ry="6.2" fill="#fff" fill-opacity=".6" transform="rotate(18 17.5 29)"/><circle cx="29" cy="35" r="2.4" fill="#fff" fill-opacity=".45"/><circle cx="25.5" cy="38.5" r="1.3" fill="#fff" fill-opacity=".4"/>`),
 gm:SV(`<path d="M13 5h22l9 11-20 27L4 16z" fill="url(#hgG)" stroke="#07391f" stroke-width="3" stroke-linejoin="round"/><path d="M4 16h40M13 5l7 11 4 27 4-27 7-11M20 16l4-11 4 11" fill="none" stroke="#07391f" stroke-opacity=".55" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 8l-5 8" stroke="#fff" stroke-opacity=".8" stroke-width="2.6" stroke-linecap="round"/>`),
 tr:SV(`<path d="M13 5h22v13a11 11 0 0 1-22 0z" fill="url(#hgT)" stroke="#6a3c05" stroke-width="3" stroke-linejoin="round"/><path d="M13 9H6v4a7 7 0 0 0 8 7M35 9h7v4a7 7 0 0 1-8 7" fill="none" stroke="#6a3c05" stroke-width="3" stroke-linecap="round"/><rect x="21" y="29" width="6" height="7" fill="#e49a10" stroke="#6a3c05" stroke-width="2"/><rect x="14" y="36" width="20" height="7" rx="2" fill="url(#hgT)" stroke="#6a3c05" stroke-width="3"/><path d="M17 9v9" stroke="#fff" stroke-opacity=".8" stroke-width="2.6" stroke-linecap="round"/>`),
 sh:SV(`<path d="M24 3l17 6v13c0 11-7 18-17 23C14 40 7 33 7 22V9z" fill="url(#hgS)" stroke="#0f3a7a" stroke-width="3" stroke-linejoin="round"/><path d="M24 11l9 3.4v8c0 6-4 10-9 13z" fill="#fff" fill-opacity=".22"/>`),
 hm:SV(`<g transform="rotate(-38 24 24)"><rect x="21" y="16" width="6" height="28" rx="2.5" fill="url(#hgW)" stroke="#4a2608" stroke-width="2.6"/><rect x="9" y="6" width="30" height="14" rx="3.5" fill="url(#hgH)" stroke="#2c3446" stroke-width="3"/><path d="M12 10h24" stroke="#fff" stroke-opacity=".8" stroke-width="2.4" stroke-linecap="round"/></g>`)
};
window.HI85=HI;
/* arte final: cuando existan imágenes sueltas, HI85IMG={g:'data:...'} las usa en su lugar */
window.HI85SET=function(map){for(const k in map)BRI[k]='<img class="bri hi" src="'+map[k]+'" alt="">';try{ui()}catch(e){}};
const d=document.createElement('div');d.innerHTML=defs;document.body.appendChild(d.firstChild);
for(const k in HI)BRI[k]=HI[k];

/* ---- tarjeta del jugador ---- */
const pc=document.createElement('div');pc.id='h85pc';pc.innerHTML='<div class=pn><b></b><span class=pt><i class=pti></i><em></em></span></div><div class=pb2></div>';document.body.appendChild(pc);
const pti=pc.querySelector('.pti');pti.innerHTML=HI.tr;
pc.onclick=()=>{try{snd('open')}catch(e){}const b=document.querySelector('[data-prf]');if(b)b.click()};
let last='';
function upd(){try{const show=mode=='v'&&S&&S.b&&!document.body.classList.contains('ba')&&!document.body.classList.contains('land')&&document.getElementById('auth').style.display=='none';
 pc.style.display=show?'flex':'none';if(!show)return;pc.classList.toggle('dot',!!document.querySelector('.prfb i.dt'));const lg=(typeof leagueOf=='function')?leagueOf(S.tr|0):[0,'','⚪'],k=(S.name||'Jugador')+'|'+(S.tr|0)+'|'+lg[2];if(k==last)return;last=k;
 pc.querySelector('b').textContent=S.name||'Jugador';pc.querySelector('em').textContent=S.tr|0;pc.querySelector('.pb2').innerHTML=(S.tr|0)<50?HI.sh:lg[2]}catch(e){}}
setInterval(upd,400);upd();

/* ---- estilo ---- */
const st=document.createElement('style');st.textContent=`
body:not(.land):not(.ba) #top span.pill{position:fixed!important;margin:0!important;height:34px!important;min-height:0!important;padding:0 12px 0 40px!important;border-radius:13px!important;display:flex!important;align-items:center;justify-content:flex-end;overflow:visible!important;
 background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.36)!important;-webkit-backdrop-filter:blur(12px) saturate(1.35);backdrop-filter:blur(12px) saturate(1.35);
 border:1.5px solid rgba(255,255,255,.3)!important;box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4),inset 0 -1px 0 rgba(0,0,0,.25)!important;
 font:800 16px 'Baloo 2',system-ui,sans-serif!important;color:#fff!important;text-shadow:0 2px 0 rgba(0,0,0,.55),0 0 6px rgba(0,0,0,.4);flex:none!important;max-width:none!important;min-width:0!important}
body:not(.land):not(.ba) #top span.pill b.lv{position:relative;z-index:1;font-weight:800}
body:not(.land):not(.ba) #top span.pill em{position:absolute!important;left:-9px!important;top:50%!important;transform:translateY(-50%);width:46px!important;height:46px!important;border:0!important;background:none!important;box-shadow:none!important;border-radius:0!important;display:grid;place-items:center;overflow:visible;z-index:2}
body:not(.land):not(.ba) #top span.pill em .bri{width:46px!important;height:46px!important;filter:drop-shadow(0 3px 2px rgba(0,0,0,.55))}
body:not(.land):not(.ba) #top span.pill i.pb{position:absolute!important;left:32px;right:4px;top:4px;bottom:4px;height:auto!important;border-radius:9px!important;background:rgba(0,0,0,.30)!important;overflow:hidden;z-index:0;margin:0!important;display:block}
body:not(.land):not(.ba) #top span.pill i.pb u{display:block;height:100%!important;border-radius:9px;opacity:.92;box-shadow:inset 0 2px 0 rgba(255,255,255,.45)!important}
body:not(.land):not(.ba) #top .pill.gold,body:not(.land):not(.ba) #top .pill.elx,body:not(.land):not(.ba) #top .pill.gem,body:not(.land):not(.ba) #top .pill.shd{right:12px;left:auto!important;width:172px!important}
body:not(.land):not(.ba) #top .pill.gold{top:calc(12px + env(safe-area-inset-top,0px))}
body:not(.land):not(.ba) #top .pill.elx{top:calc(56px + env(safe-area-inset-top,0px))}
body:not(.land):not(.ba) #top .pill.gem{top:calc(100px + env(safe-area-inset-top,0px))}
body:not(.land):not(.ba) #top .pill.shd{top:calc(144px + env(safe-area-inset-top,0px))}
body:not(.land):not(.ba) #top .pill.tro{display:none!important}body:not(.land):not(.ba) #top button.prfb{display:none!important}#h85pc.dot::after{content:'';position:absolute;top:-5px;right:-5px;width:14px;height:14px;border-radius:50%;background:#ff4d5e;border:2px solid #0b1020;box-shadow:0 0 8px #ff4d5e}
body:not(.land):not(.ba) #top .pill.bld{left:22px!important;right:auto!important;width:84px!important;top:calc(74px + env(safe-area-inset-top,0px));padding-left:36px!important}
#h85pc{position:fixed;left:12px;top:calc(12px + env(safe-area-inset-top,0px));width:178px;height:54px;z-index:6;display:none;align-items:center;justify-content:space-between;gap:6px;padding:6px 8px 6px 12px;box-sizing:border-box;border-radius:14px;cursor:pointer;
 background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.36);-webkit-backdrop-filter:blur(12px) saturate(1.35);backdrop-filter:blur(12px) saturate(1.35);border:1.5px solid rgba(255,255,255,.3);box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4)}
#h85pc .pn{display:flex;flex-direction:column;min-width:0;line-height:1.05}#h85pc b{font:800 17px 'Baloo 2',system-ui,sans-serif;color:#fff;text-shadow:0 2px 0 rgba(0,0,0,.55);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:112px}
#h85pc .pt{display:flex;align-items:center;gap:3px;margin-top:2px}#h85pc .pti{display:block;width:24px;height:24px;margin-left:-3px}#h85pc .pti .bri{width:24px;height:24px;filter:drop-shadow(0 2px 1px rgba(0,0,0,.5))}
#h85pc em{font:800 16px 'Baloo 2',system-ui,sans-serif;font-style:normal;color:#ffd36b;text-shadow:0 2px 0 rgba(0,0,0,.55)}
#h85pc .pb2 .bri{width:34px;height:34px;opacity:.85}#h85pc .pb2{flex:none;width:36px;height:40px;display:grid;place-items:center;font-size:24px;filter:drop-shadow(0 3px 2px rgba(0,0,0,.5))}
/* fila: Tienda + iconos pequeños sueltos sobre cristal */
body:not(.land):not(.ba) .dock.main{position:fixed!important;left:0!important;right:0!important;bottom:calc(8px + env(safe-area-inset-bottom,0px))!important;width:auto!important;padding:0!important;background:none!important;border:0!important;box-shadow:none!important;display:block!important;pointer-events:none;z-index:6;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;transform:none!important;filter:none!important;height:0!important}
body:not(.land):not(.ba) .dock.main .db{pointer-events:auto}
body:not(.land):not(.ba) .dock.main .db[data-tab=shop]{position:fixed!important;left:114px!important;top:calc(74px + env(safe-area-inset-top,0px))!important;width:80px!important;height:34px!important;min-height:0!important;min-width:0!important;padding:0!important;border-radius:13px!important;margin:0!important;flex:none!important;
 display:flex!important;align-items:center;justify-content:center;font:800 15px 'Baloo 2',system-ui,sans-serif!important;color:#ffe9a8!important;text-shadow:0 2px 0 rgba(0,0,0,.55);
 background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.36)!important;-webkit-backdrop-filter:blur(12px) saturate(1.35);backdrop-filter:blur(12px) saturate(1.35);border:1.5px solid rgba(255,255,255,.3)!important;box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4)!important}
body:not(.land):not(.ba) .dock.main .db[data-tab=shop] i{display:none!important}
body:not(.land):not(.ba) .dock.main .db[data-ms],body:not(.land):not(.ba) .dock.main .db[data-l],body:not(.land):not(.ba) .dock.main .db[data-sl],
body:not(.land):not(.ba) #top button.hbg,body:not(.land):not(.ba) #top button[data-adm],body:not(.land):not(.ba) #brFl{position:fixed!important;width:42px!important;height:42px!important;min-width:0!important;min-height:0!important;padding:0!important;margin:0!important;border-radius:13px!important;flex:none!important;display:grid!important;place-items:center;font-size:0!important;
 background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.36)!important;-webkit-backdrop-filter:blur(12px) saturate(1.35);backdrop-filter:blur(12px) saturate(1.35);border:1.5px solid rgba(255,255,255,.3)!important;box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4)!important;color:#ffd36b!important;z-index:6}
body:not(.land):not(.ba) .dock.main .db[data-ms] i,body:not(.land):not(.ba) .dock.main .db[data-l] i,body:not(.land):not(.ba) .dock.main .db[data-sl] i{font-size:0!important;display:grid;place-items:center}
body:not(.land):not(.ba) .dock.main .db[data-ms] .bri,body:not(.land):not(.ba) .dock.main .db[data-l] .bri,body:not(.land):not(.ba) .dock.main .db[data-sl] .bri,body:not(.land):not(.ba) #top button.hbg .bri,body:not(.land):not(.ba) #brFl .bri{width:27px!important;height:27px!important;filter:drop-shadow(0 2px 2px rgba(0,0,0,.55))}
body:not(.land):not(.ba) .dock.main .db[data-ms]{left:12px!important;top:calc(116px + env(safe-area-inset-top,0px))!important;color:#7fe3ff!important}
body:not(.land):not(.ba) #top button.hbg{left:60px!important;top:calc(116px + env(safe-area-inset-top,0px))!important;right:auto!important;color:#e6ecff!important}
body:not(.land):not(.ba) #brFl{left:108px!important;top:calc(116px + env(safe-area-inset-top,0px))!important;color:#ff9a4a!important}
body:not(.land):not(.ba) .dock.main .db[data-l]{left:108px!important;top:calc(116px + env(safe-area-inset-top,0px))!important;color:#c79bff!important}
body:not(.land):not(.ba) .dock.main .db[data-sl]{left:12px!important;top:calc(164px + env(safe-area-inset-top,0px))!important;color:#ff7fc4!important}
body:not(.land):not(.ba) #top button[data-adm]{left:60px!important;top:calc(164px + env(safe-area-inset-top,0px))!important;font-size:18px!important}
body:not(.land):not(.ba) .dock.main .db[data-ms] b.dot,body:not(.land):not(.ba) .dock.main .db[data-sl] b.dot{position:absolute;top:-6px;right:-6px;min-width:18px;height:18px;border-radius:9px;background:#ff4d5e;color:#fff;font:800 11px system-ui;display:grid;place-items:center;border:2px solid #0b1020;box-shadow:0 0 8px #ff4d5e}
body:not(.land):not(.ba) #brSide{top:0;left:0}
body:not(.land):not(.ba) #e80b{display:none!important}
#brFl,#brSide{display:none!important}
body:not(.land):not(.ba) #brFl .dt{position:absolute;top:-6px;right:-6px}
body:not(.land):not(.ba) .dock.main .db.atk{position:fixed!important;left:50%!important;bottom:calc(16px + env(safe-area-inset-bottom,0px))!important;top:auto!important;transform:translateX(-50%);margin:0!important;display:flex!important}body:not(.land):not(.ba) .dock.main .db.atk:active{transform:translateX(-50%) scale(.94)!important}
`;document.head.appendChild(st);
})();

/* v85 iconos finales */
(function(){const M={"shop": "data:x", "atk": "data:x", "slot": "data:x", "rk": "data:x", "flame": "data:x", "menu": "data:x", "ms": "data:x", "sh": "data:x", "tr": "data:x", "hm": "data:x", "gm": "data:x", "e": "data:x", "g": "data:x"};
try{HI85SET(M)}catch(e){}
try{const p=document.querySelector('#h85pc .pti');if(p)p.innerHTML=BRI.tr}catch(e){}
const st=document.createElement('style');st.textContent=`
.bri.hi{object-fit:contain}
body:not(.land):not(.ba) .dock.main .db.atk .bri{width:34px;height:34px}
/* tutorial: no tapar el HUD ni bloquear toques */
body:not(.land):not(.ba) #tut{top:calc(216px + env(safe-area-inset-top,0px));width:min(94%,440px);padding:8px 10px;pointer-events:none}
body:not(.land):not(.ba) #tut button{pointer-events:auto}
body:not(.land):not(.ba) #tut .tface{width:42px;height:42px;font-size:26px}
body:not(.land):not(.ba) #tut .tmsg{font-size:12.5px}
body.tov #tut{width:min(94%,440px);padding:5px 8px;border-width:3px;border-radius:14px;gap:6px;box-shadow:0 4px 14px #000a;opacity:.96}
body.tov #tut .tface{width:30px;height:30px;font-size:18px;border-width:2px}
body.tov #tut .tmsg{font-size:11px;line-height:1.25}
body.tov #tut button{min-height:28px;font-size:11px;padding:2px 8px}
body.land #tut{pointer-events:none}body.land #tut button{pointer-events:auto}
`;document.head.appendChild(st);setInterval(()=>{try{document.body.classList.toggle('tov',!!(UI.shop||UI.train||UI.lab))}catch(e){}},150);})();

/* ===== v85: botón Eventos + menú de eventos + campaña goblin (mapa con nodos) ===== */
(function(){
const $q=s=>document.querySelector(s);
const IM85={};/* arte final: CAMP85SET({guide,node,nodeLk,nodeBoss,starOn,starOff,bg,evb,ev0,ev1,ev2}) */
window.CAMP85SET=function(m){Object.assign(IM85,m);try{cpDraw()}catch(e){}try{evBtnArt()}catch(e){}};
const im=(k,fb,cls)=>IM85[k]?`<img class="${cls||''}" src="${IM85[k]}" alt="">`:fb;
const STAR=(on,s)=>IM85[on?'starOn':'starOff']?`<img src="${IM85[on?'starOn':'starOff']}" style="width:${s}px;height:${s}px">`:`<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M12 2l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.7 5.7 21.4l1.5-7.1L1.8 9.4 9 8.6z" fill="${on?'#ffc928':'#4a3a2a'}" stroke="${on?'#6a3c05':'#241a10'}" stroke-width="1.8" stroke-linejoin="round"/>${on?'<path d="M9.4 8.9 12 4.6" stroke="#fff6b8" stroke-width="1.6" stroke-linecap="round" fill="none"/>':''}</svg>`;
const CAL=`<svg viewBox="0 0 48 48" class="bri hi"><rect x="6" y="9" width="36" height="34" rx="5" fill="#f4e3b8" stroke="#5a3206" stroke-width="3"/><path d="M6 14a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v7H6z" fill="#d8402c" stroke="#5a3206" stroke-width="3" stroke-linejoin="round"/><rect x="14" y="4" width="5" height="10" rx="2" fill="#8a8f9c" stroke="#3a3f4c" stroke-width="2"/><rect x="29" y="4" width="5" height="10" rx="2" fill="#8a8f9c" stroke="#3a3f4c" stroke-width="2"/><path d="M24 25l3 6.2 6.8.9-5 4.7 1.3 6.7-6.1-3.3-6.1 3.3 1.3-6.7-5-4.7 6.8-.9z" fill="#ffc928" stroke="#6a3c05" stroke-width="2" stroke-linejoin="round"/></svg>`;
const GOB=`<svg viewBox="0 0 80 80" width="100%" height="100%"><path d="M10 30 0 18c-1-2 1-3 3-2l16 5zM70 30 80 18c1-2-1-3-3-2l-16 5z" fill="#5fb53a" stroke="#1d3a0c" stroke-width="3" stroke-linejoin="round"/><ellipse cx="40" cy="42" rx="26" ry="24" fill="#7ed04a" stroke="#1d3a0c" stroke-width="3.5"/><ellipse cx="29" cy="38" rx="6" ry="7" fill="#fff" stroke="#1d3a0c" stroke-width="2.5"/><ellipse cx="51" cy="38" rx="6" ry="7" fill="#fff" stroke="#1d3a0c" stroke-width="2.5"/><circle cx="30" cy="39" r="3" fill="#1d3a0c"/><circle cx="50" cy="39" r="3" fill="#1d3a0c"/><path d="M26 54q14 14 28 0z" fill="#3b1608" stroke="#1d3a0c" stroke-width="3" stroke-linejoin="round"/><path d="M33 54h5l-2 5zM44 54h5l-3 5z" fill="#fff"/><path d="M36 46q4 3 8 0" stroke="#1d3a0c" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`;
const tot=()=>(S.camp||[]).reduce((a,b)=>a+(b|0),0);
const cur=()=>{const c=S.camp||[];for(let i=0;i<CAMP80.length;i++)if((c[i]|0)<3)return i;return -1};
const isOpen=i=>i==0||((S.camp||[])[i-1]|0)>=1;
/* ---------- botón Eventos ---------- */
const eb=document.createElement('button');eb.id='ev85b';eb.setAttribute('aria-label','Eventos');eb.innerHTML=CAL+'<span>Eventos</span><i class=dt style="display:none"></i>';document.body.appendChild(eb);
window.evBtnArt=function(){eb.querySelector('.bri,img')&&(eb.firstChild.outerHTML=IM85.evb?`<img class="bri hi" src="${IM85.evb}" alt="">`:CAL)};
eb.onclick=()=>{try{snd('open')}catch(e){}evOpen()};
/* ---------- menú de eventos ---------- */
const em=document.createElement('div');em.id='ev85m';document.body.appendChild(em);
function evCard(k,art,t,s,tag,dot,fb){return`<div class="evc" data-ev="${k}" style="${IM85[art]?`background-image:linear-gradient(90deg,#0c1220e8 28%,#0c122000),url(${IM85[art]})`:`background-image:${fb}`}"><div class=evt><b>${t}</b><small>${s}</small></div>${tag?`<em class=evg>${tag}</em>`:''}${dot?'<i class=evd></i>':''}</div>`}
function evDraw(){const c=cl80(),e=evNow(),n=cur();
 em.innerHTML=`<div class=evw><div class=evh><b>Eventos</b><div class=evx data-ev=x>✕</div></div><div class=evs>En curso</div><div class=evl>`+
  evCard('camp','ev0','Campaña goblin',n<0?'¡Completada! ⭐ '+tot()+'/'+CAMP80.length*3:'⭐ '+tot()+'/'+CAMP80.length*3+' · '+CAMP80[n],'Sin límite',n==0&&!(S.camp||[])[0],'linear-gradient(135deg,#3b5d1d,#7aa02f 60%,#c9a24a)')+
  evCard('streak','ev2','Racha diaria','Entra todos los días y gana gemas','30 días',(()=>{try{return !!$q('#brFl .dt')&&$q('#brFl .dt').style.display!='none'}catch(e){return 0}})(),'linear-gradient(135deg,#8a2a14,#e8742a 60%,#ffd15a)')+
  evCard('chest','ev1','Cofre del día','Gana estrellas en ataques y reclama oro y elixir','⏱ '+fT80(msToMid80()),c.d,'linear-gradient(135deg,#1d5a7a,#3da0d0 60%,#e8d27a)')+
  `</div><div class=evs>Próximamente</div><div class=evl><div class="evc lk"><div class=evt><b>Torneos y ligas</b><small>Compite con otros jugadores por premios</small></div><em class=evg>🔒</em></div></div></div>`;try{window.evExtra91&&evExtra91(em)}catch(x){}}
function evOpen(){try{window.evFetch91&&evFetch91()}catch(e){}evDraw();em.classList.add('on')}
function evClose(){em.classList.remove('on')}
em.onclick=e=>{const b=e.target.closest('[data-ev]');if(!b){if(e.target===em)evClose();return}const k=b.dataset.ev;try{snd('ui')}catch(x){}
 if(k=='x'){evClose();return}evClose();
 if(k=='camp')cpOpen();else if(k=='streak'){try{skOpen()}catch(x){}}
 else if(k=='today'){tab80='e';mod80.style.display='flex';draw80()}
 else if(k=='chest'){try{chOpen()}catch(x){console.warn(x)}}};
setInterval(()=>{if(em.classList.contains('on')&&!window.EVHOLD91)try{evDraw()}catch(e){}},1000);
/* ---------- campaña ---------- */
const cp=document.createElement('div');cp.id='cp85';document.body.appendChild(cp);let sel=-1,sc0=true;
const XS=[50,26,68,32,72,28,64,36,68,50];
function cpDraw(){if(!cp.classList.contains('on'))return;const n=cur(),c=S.camp||[],H=118,top=100,L=CAMP80.length,hh=top+L*H+140;
 const pos=i=>({x:XS[i],y:hh-140-i*H});
 let pth='';for(let i=0;i<L-1;i++){const a=pos(i),b=pos(i+1);pth+=`<path d="M${a.x*3.6} ${a.y} C${a.x*3.6} ${(a.y+b.y)/2},${b.x*3.6} ${(a.y+b.y)/2},${b.x*3.6} ${b.y}" class="${isOpen(i+1)?'po':''}"/>`}
 let nd='';for(let i=0;i<L;i++){const p=pos(i),s=c[i]|0,op=isOpen(i),bs=i==L-1,sz=bs?92:70;
  const art=bs?im('nodeBoss','',''):(op?im('node','',''):im('nodeLk','',''));
  nd+=`<div class="cn ${IM85.node?'art':''} ${op?'':'lk'} ${i==n?'cur':''} ${bs?'bs':''}" data-n=${i} style="left:${p.x}%;top:${p.y}px;width:${sz}px;height:${sz}px;margin:${-sz/2}px 0 0 ${-sz/2}px"><div class=cnb>${art}${op?'<b>'+(i+1)+'</b>':(IM85.nodeLk?'':'<b>🔒</b>')}</div>${op?`<span class=cst>${[0,1,2].map(k=>`<u class="${k==1?'mid':''}">${STAR(k<s,bs?24:20)}</u>`).join('')}</span>`:''}${i==n?'<small class=cgo>¡Aquí!</small>':''}</div>`}
 const msg=n<0?'¡Los derrotaste a todos, líder! Eres el terror de los goblins.':(c[0]|0)==0?'¡Hola, líder! Ataca la <b>'+CAMP80[0]+'</b> sin arriesgar tropas. 3 ⭐ dan 💎.':'Siguiente: <b>'+CAMP80[n]+'</b>. ¡Consigue 3 ⭐ para ganar 💎!';
 cp.innerHTML=`<div class=cph><div class=cpt>Campaña goblin</div><div class=cps>${STAR(1,22)}<b>${tot()}/${L*3}</b></div><div class=cpx data-c=x>✕</div></div><div class=cpm><div class=cpi style="height:${hh}px;${IM85.bg?`background:url(${IM85.bg}) top center/100% auto repeat-y`:''}"><svg class=cpp viewBox="0 0 360 ${hh}" preserveAspectRatio="none" width="100%" height="${hh}">${pth}</svg>${nd}</div></div><div class=cpg><div class=cpf>${im('guide',GOB,'')}</div><div class=cpb>${msg}</div></div><div class=cpd id=cpd></div>`;
 if(sc0){sc0=false;const m=cp.querySelector('.cpm'),t=n<0?0:pos(n).y;m.scrollTop=Math.max(0,t-m.clientHeight*.55)}
 cpSheet()}
function cpSheet(){const d=$q('#cpd');if(!d)return;if(sel<0){d.className='cpd';d.innerHTML='';return}const i=sel,s=(S.camp||[])[i]|0,b=npcBase(i),x2=evtOn('camp')?2:1;
 d.className='cpd on';d.innerHTML=`<div class=cpq><div class=cpx2 data-c=cl>✕</div><div class=cpn>${i==CAMP80.length-1?'👑 ':''}${CAMP80[i]}</div><div class=cpe>Nivel ${i+1}</div><div class=cpr>${[0,1,2].map(k=>`<u>${STAR(k<s,34)}</u>`).join('')}</div><div class=cpl>Botín: <b>${(b.g*x2).toLocaleString('es')} 🪙</b> <b>${(b.e*x2).toLocaleString('es')} 💧</b>${x2>1?' <em>¡×2 hoy!</em>':''}</div><div class=cpl>3 ⭐ por primera vez: <b>${CAMP_G80[i]} 💎</b>${s>=3?' ✅':''}</div><div class=cpgo data-c=go data-i=${i}>¡Atacar!</div></div>`}
function cpOpen(){sel=-1;sc0=true;cp.classList.add('on');cpDraw()}
window.cpOpen=cpOpen;
function cpClose(){cp.classList.remove('on');sel=-1}
cp.onclick=e=>{const b=e.target.closest('[data-c],[data-n]');if(!b){if(e.target.closest('.cpq'))return;if(sel>=0){sel=-1;cpSheet()}return}
 if(b.dataset.n!=null){const i=+b.dataset.n;try{snd('ui')}catch(x){}if(!isOpen(i)){toast80('Completa antes el nivel '+i);try{snd('deny')}catch(x){}return}sel=i;cpSheet();return}
 const k=b.dataset.c;if(k=='x')cpClose();else if(k=='cl'){sel=-1;cpSheet()}
 else if(k=='go'){const i=+b.dataset.i;if(!used(S.army)&&!freeTr()){toast80('Entrena tropas primero');return}cpClose();startNpc(i,CAMP80[i],{camp:1})}};
/* la pestaña Campaña del menú de misiones ahora abre este mapa */
mod80.addEventListener('click',e=>{const b=e.target.closest('button[data-e=t]');if(b&&b.dataset.i=='c'){e.stopPropagation();mod80.style.display='none';cpOpen()}},true);
setInterval(()=>{try{const ok=mode=='v'&&S&&S.b;eb.style.display=ok?'':'none';const d=eb.querySelector('.dt'),c=cl80();const dot=ok&&(c.d||((S.camp||[])[0]|0)==0&&used(S.army)>0);d.style.display=dot?'block':'none';if(cp.classList.contains('on')&&mode!='v')cpClose()}catch(e){}},500);
const st=document.createElement('style');st.textContent=`
#ev85b{position:fixed;left:calc(12px + env(safe-area-inset-left,0px));bottom:calc(22px + env(safe-area-inset-bottom,0px));z-index:6;width:64px;height:64px;border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;padding:0;border:1.5px solid rgba(255,255,255,.3);background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.36);-webkit-backdrop-filter:blur(12px) saturate(1.35);backdrop-filter:blur(12px) saturate(1.35);box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4);color:#fff;font:800 11px 'Baloo 2',system-ui,sans-serif}
#ev85b .bri,#ev85b img{width:34px;height:34px;filter:drop-shadow(0 2px 2px rgba(0,0,0,.55))}#ev85b span{margin-top:-1px;text-shadow:0 1px 2px #000}
#ev85b .dt{position:absolute;top:-5px;right:-5px;width:16px;height:16px;border-radius:50%;background:#ff4d5e;border:2px solid #0b1020}
body.ba #ev85b,body.land #ev85b{display:none!important}
#ev85m{position:fixed;inset:0;z-index:57;background:rgba(5,8,16,.72);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:12px}#ev85m.on{display:flex}
.evw{width:min(460px,100%);max-height:100%;overflow:auto;border-radius:22px;padding:14px;background:linear-gradient(180deg,rgba(40,56,92,.9),rgba(14,20,36,.94));border:1.5px solid rgba(255,255,255,.25);box-shadow:0 18px 50px #000a;color:#fff;font-family:'Baloo 2',system-ui,sans-serif}
.evh{display:flex;justify-content:space-between;align-items:center;font:800 24px Lilita One,'Baloo 2',system-ui,sans-serif;color:#ffd24a;text-shadow:0 2px 0 #000a}.evh .evx{cursor:pointer;width:38px;height:38px;display:grid;place-items:center;border-radius:12px;background:#d8402c;color:#fff;font-size:18px;border:2px solid #fff4}
.evs{margin:12px 2px 6px;font:800 15px 'Baloo 2',system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#9fb4d8}.evl{display:flex;flex-direction:column;gap:8px}
.evc{cursor:pointer;position:relative;display:flex;align-items:flex-end;min-height:84px;border-radius:16px;padding:10px 12px;background-size:cover;background-position:center;border:2px solid rgba(255,255,255,.3);box-shadow:0 4px 0 #0006;overflow:hidden;box-sizing:border-box}
.evc:active{transform:translateY(2px)}.evc.lk{opacity:.55;background:#202a40;cursor:default}
.evt{display:flex;flex-direction:column;max-width:72%;text-shadow:0 2px 3px #000}.evt b{font:800 19px 'Baloo 2',system-ui,sans-serif}.evt small{font-size:13px;opacity:.92;line-height:1.15}
.evg{position:absolute;top:8px;right:8px;font:800 12px 'Baloo 2',system-ui,sans-serif;font-style:normal;padding:2px 8px;border-radius:10px;background:rgba(0,0,0,.55);border:1px solid #fff4}
.evd{position:absolute;top:-4px;left:-4px;width:18px;height:18px;border-radius:50%;background:#ff4d5e;border:2px solid #0b1020}
#cp85{position:fixed;inset:0;z-index:58;display:none;flex-direction:column;overflow:hidden;color:#fff;font-family:'Baloo 2',system-ui,sans-serif;background:#d9bd83 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 .45 0 0 0 0 .32 0 0 0 0 .15 0 0 0 .22 0'/></filter><rect width='220' height='220' filter='url(%23n)'/></svg>")}
#cp85.on{display:flex}#cp85::before{content:"";position:absolute;inset:0;background:radial-gradient(120% 80% at 50% 40%,rgba(255,236,170,.0) 40%,rgba(120,70,20,.45));pointer-events:none;z-index:1}
.cph{position:relative;z-index:3;display:flex;align-items:center;gap:10px;padding:calc(10px + env(safe-area-inset-top,0px)) 12px 8px;background:linear-gradient(180deg,rgba(60,36,10,.82),rgba(60,36,10,0))}
.cpt{flex:1;font:800 20px Lilita One,'Baloo 2',system-ui,sans-serif;color:#ffe9a8;text-shadow:0 2px 0 #3a210d}
.cps{display:flex;align-items:center;gap:4px;padding:3px 12px 3px 8px;border-radius:14px;background:rgba(16,24,42,.5);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1.5px solid rgba(255,255,255,.3);font:800 18px 'Baloo 2',system-ui,sans-serif}
.cpx{cursor:pointer;width:38px;height:38px;display:grid;place-items:center;border-radius:12px;background:#d8402c;color:#fff;font-size:18px;border:2px solid #fff6;box-shadow:0 3px 0 #0006}
.cpm{position:relative;z-index:2;flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.cpi{position:relative;width:100%}.cpp{position:absolute;left:0;top:0;pointer-events:none}
.cpp path{fill:none;stroke:#8a5a22;stroke-opacity:.55;stroke-width:6;stroke-dasharray:2 13;stroke-linecap:round;vector-effect:non-scaling-stroke}.cpp path.po{stroke:#5a3410;stroke-opacity:.9}
.cn{cursor:pointer;position:absolute;display:flex;flex-direction:column;align-items:center}
.cnb{position:relative;width:100%;height:100%;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 28%,#c9ccd2,#7c8290 70%);border:5px solid #6b4626;box-shadow:0 5px 0 #3a210d,0 8px 12px #0006,inset 0 0 0 2px #e6c88c;box-sizing:border-box}
.cn.bs .cnb{background:radial-gradient(circle at 35% 28%,#fff1a0,#e0a21a 70%);border-color:#7a4a08;box-shadow:0 5px 0 #4a2a04,0 0 22px #ffd24a99,0 8px 12px #0006,inset 0 0 0 2px #fff0b0}
.cn.lk .cnb{background:radial-gradient(circle at 35% 28%,#9a958a,#5f5b52 70%);filter:saturate(.4) brightness(.85)}
.cnb img{position:absolute;inset:-6px;width:calc(100% + 12px);height:calc(100% + 12px);object-fit:contain}
.cn.art .cnb{background:none!important;border:0!important;box-shadow:none!important;filter:none}.cn.art .cnb img{inset:0;width:100%;height:100%;filter:drop-shadow(0 4px 3px #0007)}.cn.art.lk .cnb img{filter:drop-shadow(0 4px 3px #0007) brightness(.9)}.cn.art.cur .cnb{animation:cpb .7s infinite alternate}.cn.art.cur .cnb img{filter:drop-shadow(0 0 10px #fff35a) drop-shadow(0 4px 3px #0007)}
.cnb b{position:relative;font:800 28px 'Baloo 2',system-ui,sans-serif;color:#fff;text-shadow:0 2px 0 #3a210d,0 0 6px #000a;-webkit-text-stroke:1px #3a210d}.cn.bs .cnb b{font-size:36px}
.cst{position:absolute;bottom:-18px;display:flex;gap:0;align-items:flex-end}.cst u{text-decoration:none;display:block;line-height:0;filter:drop-shadow(0 2px 0 #3a210d)}.cst u.mid{margin:0 -2px 4px}
.cn.cur .cnb{animation:cpb .7s infinite alternate;box-shadow:0 5px 0 #3a210d,0 0 0 5px #fff35a,0 0 22px #ffe34a,inset 0 0 0 2px #e6c88c}@keyframes cpb{to{transform:translateY(-6px)}}
.cgo{position:absolute;top:-30px;font:800 13px 'Baloo 2',system-ui,sans-serif;padding:1px 9px;border-radius:10px;background:#fff35a;color:#3a210d;border:2px solid #3a210d;white-space:nowrap}
.cpg{position:absolute;left:8px;bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:4;display:flex;align-items:flex-end;gap:6px;max-width:calc(100% - 16px);pointer-events:none}
.cpf{flex:none;width:84px;height:92px;filter:drop-shadow(0 4px 4px #0006)}.cpf img{width:100%;height:100%;object-fit:contain}
.cpb{position:relative;margin-bottom:34px;padding:8px 12px;border-radius:14px;background:#fff6d8;color:#3a210d;border:3px solid #3a210d;font:700 14px/1.2 'Baloo 2',system-ui,sans-serif;box-shadow:0 3px 0 #0005;max-width:230px}
.cpb::before{content:"";position:absolute;left:-12px;bottom:12px;border:7px solid transparent;border-right:9px solid #3a210d}
.cpd{position:absolute;inset:0;z-index:6;display:none;align-items:flex-end;justify-content:center;background:rgba(10,6,2,.45)}.cpd.on{display:flex}
.cpq{position:relative;width:min(420px,100%);padding:16px 16px calc(16px + env(safe-area-inset-bottom,0px));border-radius:22px 22px 0 0;text-align:center;background:linear-gradient(180deg,#6a431f,#3a210d);border:4px solid #1c0f05;border-bottom:0;box-shadow:inset 0 0 0 2px #c99a52;display:flex;flex-direction:column;gap:6px;align-items:center}
.cpx2{cursor:pointer;position:absolute;top:8px;right:10px;font-size:20px;opacity:.8}.cpn{font:800 24px Lilita One,'Baloo 2',system-ui,sans-serif;color:#ffe9a8}.cpe{font-size:14px;opacity:.8;margin-top:-4px}.cpr{display:flex;gap:6px;align-items:flex-end}.cpr u{text-decoration:none;line-height:0}.cpr u:nth-child(2){margin-bottom:8px}
.cpl{font-size:15px}.cpl em{color:#ffd24a;font-style:normal;font-weight:800}
.cpgo{cursor:pointer;margin-top:6px;min-width:70%;padding:11px 0;border-radius:14px;background:linear-gradient(#ffe27a,#f0a020);color:#3a210d;font:800 20px 'Baloo 2',system-ui,sans-serif;border:3px solid #3a210d;box-shadow:0 4px 0 #3a210d;text-align:center}.cpgo:active{transform:translateY(3px);box-shadow:0 1px 0 #3a210d}
`;document.head.appendChild(st);
})();

/* ===== v85: menú propio del Cofre del día (dentro de Eventos) ===== */
(function(){
const TH=[3,6,10],RW=[400,1200,3000],GM=[1,2,4],NM=['Cofre de madera','Cofre de plata','Cofre de oro'];
const TC=[['#b06f2f','#6a3c12','#e0a964'],['#b9c2d6','#6b7487','#f2f5fc'],['#ffd24a','#b87a08','#fff3b0']];
const ds=()=>{if(!S.ds||S.ds.d!=day80())S.ds={d:day80(),n:0,c:[]};return S.ds};
const IMG=(k,fb,w)=>BRI[k]||fb;
function chestSVG(t,st){/* st: 0 bloqueado, 1 listo, 2 abierto */if(window.IC87&&IC87['chest'+t]){const M=IC87;return st==2?`<img class="c87" src="${M['chestO'+t]}" alt="">`:`<div class="c87w ${st==0?'lk':''}"><img class="c87" src="${M['chest'+t]}" alt="">${st==0?`<img class="c87l" src="${M.lock}" alt="">`:''}</div>`}const[m,d,l]=TC[t],id='c'+t+st;
 const body=`<rect x="10" y="44" width="80" height="38" rx="7" fill="${m}" stroke="#2a1608" stroke-width="3.5"/><path d="M12 56h76M12 68h76" stroke="${d}" stroke-width="2" opacity=".55"/><rect x="43" y="44" width="14" height="38" fill="${l}" stroke="#2a1608" stroke-width="3"/>`;
 const lidC=`<path d="M10 46C10 18 28 12 50 12s40 6 40 34z" fill="${m}" stroke="#2a1608" stroke-width="3.5" stroke-linejoin="round"/><path d="M22 36C24 24 34 20 46 19" stroke="#fff" stroke-opacity=".5" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="43" y="13" width="14" height="33" fill="${l}" stroke="#2a1608" stroke-width="3"/>`;
 const lock=st==0?`<rect x="42" y="42" width="16" height="16" rx="3" fill="#8a8f9c" stroke="#2a1608" stroke-width="2.5"/><path d="M45 42v-4a5 5 0 0 1 10 0v4" fill="none" stroke="#3a3f4c" stroke-width="3"/><circle cx="50" cy="50" r="2.2" fill="#2a1608"/>`:`<rect x="43" y="46" width="14" height="12" rx="3" fill="${l}" stroke="#2a1608" stroke-width="2.5"/><circle cx="50" cy="52" r="2.2" fill="#2a1608"/>`;
 if(st==2)return`<svg viewBox="0 0 100 92"><ellipse cx="50" cy="86" rx="40" ry="6" fill="#0006"/>${body}<ellipse cx="50" cy="42" rx="38" ry="10" fill="#fff3b0"/><circle cx="34" cy="36" r="8" fill="#ffc928" stroke="#6a3c05" stroke-width="2.5"/><circle cx="52" cy="32" r="8" fill="#ffc928" stroke="#6a3c05" stroke-width="2.5"/><circle cx="68" cy="37" r="7" fill="#ffc928" stroke="#6a3c05" stroke-width="2.5"/><path d="M12 40 4 14c14-6 30-6 40-2z" fill="${m}" stroke="#2a1608" stroke-width="3.5" stroke-linejoin="round"/></svg>`;
 return`<svg viewBox="0 0 100 92"><ellipse cx="50" cy="86" rx="40" ry="6" fill="#0006"/>${body}${lidC}${lock}${st==1?'<path d="M82 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2z M16 6l1.5 3.5 3.5 1.5-3.5 1.5L16 16l-1.5-3.5L11 11l3.5-1.5z" fill="#fff6b8"/>':''}</svg>`}
const el=document.createElement('div');el.id='ch85';document.body.appendChild(el);
function draw(){const d=ds(),n=d.n|0,pct=Math.min(100,n/10*100);
 el.innerHTML=`<div class=chw><div class=chh><div class=cht>Cofre del día</div><div class=chx data-h=x>✕</div></div>
 <div class=chp><div class=chn>Estrellas de hoy <b>${n}</b></div><div class=chbar><i style="width:${pct}%"></i>${TH.map((t,k)=>`<u style="left:${t/10*100}%" class="${n>=t?'on':''}">${t}</u>`).join('')}</div></div>
 <div class=chg>${TH.map((t,k)=>{const got=d.c.includes(k+1),rdy=n>=t&&!got,st=got?2:rdy?1:0;
  return`<div class="chc s${st} t${k}" ${rdy?`data-h=o data-i=${k+1}`:''}><div class=chn2>${NM[k]}</div><div class=chi>${chestSVG(k,st)}</div><div class=chr><span>${BRI.g||'🪙'} ${RW[k].toLocaleString('es')}</span><span>${BRI.e||'💧'} ${RW[k].toLocaleString('es')}</span><span>${BRI.gm||'💎'} ${GM[k]}</span></div><div class=chb>${got?'Reclamado':rdy?'¡Abrir!':t+' estrellas'}</div></div>`}).join('')}</div>
 <div class=chf>Gana estrellas en cualquier ataque. Se reinicia en <b>${fT80(msToMid80())}</b></div></div>`}
function open(){draw();el.classList.add('on')}
window.chOpen=open;
el.onclick=async e=>{const b=e.target.closest('[data-h]');if(!b){if(e.target===el)el.classList.remove('on');return}const k=b.dataset.h;
 if(k=='x'){el.classList.remove('on');return}
 if(k=='o'){const n=+b.dataset.i,d=ds();if(d.c.includes(n))return;try{snd('ui')}catch(x){}
  const r=await claim80('chest_'+day80()+'_'+n,[0,1,2,4][n]);
  if(r>=0){d.c.push(n);const v=[0,400,1200,3000][n];S.g=Math.min(cap.g(),S.g+v);S.e=Math.min(cap.e(),S.e+v);toast80('Cofre: +'+v+' 🪙💧'+(r>0?' +'+r+' 💎':''));try{save();ui()}catch(x){}}
  draw();const c=el.querySelector('.chc.t'+(n-1));if(c)c.classList.add('pop')}};
setInterval(()=>{if(el.classList.contains('on'))try{draw()}catch(e){}},1500);
const st=document.createElement('style');st.textContent=`
#ch85{position:fixed;inset:0;z-index:57;display:none;align-items:center;justify-content:center;padding:12px;background:radial-gradient(120% 90% at 50% 30%,rgba(86,40,150,.82),rgba(10,6,28,.94))}#ch85.on{display:flex}
#ch85::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 18%,#ffd24a33 0 2px,transparent 3px),radial-gradient(circle at 78% 26%,#fff6 0 2px,transparent 3px),radial-gradient(circle at 60% 80%,#ffd24a33 0 2px,transparent 3px),radial-gradient(circle at 30% 70%,#fff4 0 1.5px,transparent 3px);pointer-events:none}
.chw{position:relative;width:min(440px,100%);max-height:100%;overflow:auto;border-radius:24px;padding:14px;background:linear-gradient(180deg,#3a1d6a,#1a0d3a);border:3px solid #ffd24a;box-shadow:0 0 0 3px #5a3410,0 0 40px #b07bff66,0 18px 50px #000b;color:#fff;font-family:'Baloo 2',system-ui,sans-serif}
.chh{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:64px;margin:-4px -4px 6px;padding:8px 10px;border-radius:16px;background:linear-gradient(90deg,#0c0820e8 40%,#0c082000),var(--chb,none) center/cover}
.cht{font:800 25px Lilita One,'Baloo 2',system-ui,sans-serif;color:#ffe27a;text-shadow:0 2px 0 #5a3410,0 0 14px #ffb020aa}.chx{cursor:pointer;width:38px;height:38px;display:grid;place-items:center;border-radius:12px;background:#d8402c;border:2px solid #fff6;font-size:18px;box-shadow:0 3px 0 #0006}
.chp{padding:4px 6px 26px}.chn{font:800 16px 'Baloo 2',system-ui,sans-serif;color:#d9c8ff;margin-bottom:8px}.chn b{color:#ffd24a;font-size:22px}
.chbar{position:relative;height:14px;border-radius:8px;background:#0b0620;border:2px solid #6a4ab0}.chbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#ffb020,#ffe27a);box-shadow:0 0 10px #ffb020}
.chbar u{position:absolute;top:18px;transform:translateX(-50%);text-decoration:none;font:800 13px 'Baloo 2',system-ui,sans-serif;color:#9d8bd0}.chbar u.on{color:#ffd24a}
.chg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.chc{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px 8px;border-radius:16px;background:linear-gradient(180deg,#2a1558,#150a30);border:2px solid #5a3f98;text-align:center}
.chc.s1{border-color:#ffd24a;box-shadow:0 0 18px #ffb020aa;cursor:pointer;animation:chg 1s infinite alternate}.chc.s2{opacity:.8}.chc.pop{animation:chpop .5s}
@keyframes chg{to{box-shadow:0 0 30px #ffd24a}}@keyframes chpop{40%{transform:scale(1.12)}}
.chn2{font:800 13px 'Baloo 2',system-ui,sans-serif;color:#e6d9ff}.chi{width:88px;height:80px}.chi svg{width:100%;height:100%}.chc.s1 .chi{animation:chb .6s infinite alternate}@keyframes chb{to{transform:translateY(-5px) rotate(-3deg)}}
.chr{display:flex;flex-direction:column;gap:1px;font:700 13px 'Baloo 2',system-ui,sans-serif;align-items:center}.chr .bri,.chr img{display:inline-block!important;width:16px!important;height:16px!important;vertical-align:-3px;margin-right:3px}.chr span{display:block;white-space:nowrap}
.chb{margin-top:2px;padding:4px 10px;border-radius:10px;background:#2b1b52;border:2px solid #5a3f98;font:800 13px 'Baloo 2',system-ui,sans-serif;color:#b9a7e8}.chc.s1 .chb{background:linear-gradient(#ffe27a,#f0a020);color:#3a210d;border-color:#3a210d}.chc.s2 .chb{background:#1d5a3a;color:#bfffd2;border-color:#2f8a5a}
.chf{margin-top:12px;text-align:center;font-size:14px;color:#b9a7e8}.chf b{color:#ffd24a}
`;document.head.appendChild(st);
setInterval(()=>{try{if(window.CH85BG)el.style.setProperty('--chb','url('+window.CH85BG+')')}catch(e){}},2000);
})();

/* v86 arte campaña/eventos */
(function(){const M={"guide": "data:x", "nodeLk": "data:x", "node": "data:x", "nodeBoss": "data:x", "evb": "data:x", "starOn": "data:x", "starOff": "data:x", "bg": "data:x", "ev0": "data:x", "ev1": "data:x", "ev2": "data:x"};window.CH85BG=M.ev1;window.STAR86=M.starOn;try{CAMP85SET(M)}catch(e){}})();

/* ===== v86: emojis de recursos/botones -> iconos del juego ===== */
(function(){
const MAP={'🪙':'g','💧':'e','💎':'gm','🏆':'tr','🛡':'sh','🔨':'hm','🛠':'hm','⚔':'atk','🔥':'flame','📜':'ms','⭐':'*','⚙':'menu','🔒':'lock','👑':'crown','🎁':'gift','✅':'check','✔':'check','✓':'check','⏱':'hourglass','⏳':'hourglass','⚡':'bolt'};
const RX=/(🪙|💧|💎|🏆|🛡\uFE0F?|🔨|🛠\uFE0F?|⚔\uFE0F?|🔥|📜|⭐|⚙\uFE0F?|🔒|👑|🎁|✅|✔\uFE0F?|✓|⏱\uFE0F?|⏳|⚡)/;
const RXG=new RegExp(RX.source,'g');
const SKIP=/^(SCRIPT|STYLE|TEXTAREA|INPUT|OPTION|CANVAS|TITLE|SVG)$/;
function ico(ch){const k=MAP[ch.replace(/\uFE0F/,'')];if(!k)return null;let h;if(k=='*')h=window.STAR86?'<img class="bri hi" src="'+window.STAR86+'" alt="">':null;else if(window.IC87&&IC87[k]&&!BRI[k])h='<img class="bri hi" src="'+IC87[k]+'" alt="">';else h=BRI[k];if(!h)return null;
 const s=document.createElement('span');s.className='emi';s.setAttribute('aria-hidden','true');s.innerHTML=h;return s}
function conv(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const p=n.parentNode;return p&&!SKIP.test(p.nodeName.toUpperCase())&&!(p.closest&&p.closest('.emi,[contenteditable],#ch89'))&&RX.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),L=[];while(w.nextNode())L.push(w.currentNode);
 for(const n of L){const t=n.nodeValue,f=document.createDocumentFragment();let last=0,m;RXG.lastIndex=0;
  while((m=RXG.exec(t))){const ic=ico(m[0]);if(!ic)continue;if(m.index>last)f.appendChild(document.createTextNode(t.slice(last,m.index)));f.appendChild(ic);last=m.index+m[0].length}
  if(last==0)continue;if(last<t.length)f.appendChild(document.createTextNode(t.slice(last)));n.parentNode.replaceChild(f,n)}}
let q=new Set(),raf=0;
const mo=new MutationObserver(ms=>{for(const m of ms){if(m.type=='characterData'){if(m.target.parentNode)q.add(m.target.parentNode)}else for(const a of m.addedNodes)q.add(a.nodeType==3?a.parentNode:a)}
 if(!raf)raf=requestAnimationFrame(()=>{raf=0;const l=[...q];q=new Set();for(const e of l){try{if(e&&e.isConnected&&e.nodeType==1)conv(e)}catch(x){}}})});
mo.observe(document.body,{childList:true,subtree:true,characterData:true});
conv(document.body);
const st=document.createElement('style');st.textContent=`.emi{display:inline-block;line-height:0;vertical-align:-.2em;margin:0 .06em}.emi .bri,.emi img,.emi svg{width:1.18em!important;height:1.18em!important;display:inline-block;vertical-align:middle}`;document.head.appendChild(st);
})();

/* ===== v87: arte nuevo ===== */
(function(){const M={"chest0": "data:x", "chest1": "data:x", "chest2": "data:x", "chestO0": "data:x", "chestO1": "data:x", "chestO2": "data:x", "lgBronze": "data:x", "lgSilver": "data:x", "lgGold": "data:x", "ms": "data:x", "lock": "data:x", "crown": "data:x", "gift": "data:x", "check": "data:x", "hourglass": "data:x", "xbtn": "data:x", "bolt": "data:x", "evx": "data:x"};window.IC87=M;
const im=(k,c)=>'<img class="'+(c||'bri hi')+'" src="'+M[k]+'" alt="">';
const old=BRI.ms&&(BRI.ms.match(/src="([^"]+)"/)||[])[1];BRI.ms=im('ms');
if(old)document.querySelectorAll('img[src="'+old+'"]').forEach(i=>i.src=M.ms);
try{CAMP85SET({evx:M.evx})}catch(e){}
const st=document.createElement('style');st.textContent=`.c87w{position:relative;width:100%;height:100%}.c87{width:100%;height:100%;object-fit:contain;display:block}.c87w.lk .c87{filter:grayscale(.85) brightness(.6)}.c87l{position:absolute;left:50%;top:50%;width:38%;height:auto!important;transform:translate(-50%,-30%);object-fit:contain}.lg87{width:100%;height:100%;object-fit:contain}.xb87{width:34px;height:34px;object-fit:contain;display:block;pointer-events:none}.evx:has(.xb87),.chx:has(.xb87),.cpx:has(.xb87),.cpx2:has(.xb87){background:none!important;border:0!important;box-shadow:none!important;width:42px!important;height:42px!important;display:grid;place-items:center}`;document.head.appendChild(st);
setInterval(()=>{try{
 document.querySelectorAll('.evx,.chx,.cpx,.cpx2').forEach(b=>{if(!b.querySelector('.xb87')&&/^\s*[✕✖×]\s*$/.test(b.textContent))b.innerHTML=im('xbtn','xb87')});
 const pc=document.querySelector('#h85pc .pb2');if(pc){const t=S&&S.tr|0,k=t<50?null:t<120?'lgBronze':t<220?'lgSilver':t<350?'lgGold':null;
  if(k&&!pc.querySelector('.lg87[data-k="'+k+'"]'))pc.innerHTML='<img class="lg87" data-k="'+k+'" src="'+M[k]+'" alt="">'}
}catch(e){}},400);})();

/* ===== v88/89: Mini App de Telegram: entra y crea la cuenta solo, sin preguntar ===== */
(function(){
if(typeof OFFLINE!='undefined'&&OFFLINE)return;
let W=null,tried=0,busy=0;
function load(cb){if(window.Telegram&&Telegram.WebApp){cb();return}const s=document.createElement('script');s.src='https://telegram.org/js/telegram-web-app.js';s.onload=cb;document.head.appendChild(s)}
const st=document.createElement('style');st.textContent=`#tg88{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;padding:20px;background:#0b1a33 var(--poster) center/cover no-repeat;font-family:'Baloo 2','Baloo 2',system-ui,sans-serif;color:#fff}
#tg88::before{content:"";position:absolute;inset:0;background:#000a}
#tg88 .tgc{position:relative;width:100%;max-width:340px;padding:22px 18px;border-radius:20px;background:#101a2eee;border:2px solid #3a5a98;text-align:center;box-shadow:0 12px 40px #000a}
#tg88 h2{margin:0 0 6px;font:400 26px 'Lilita One',system-ui,sans-serif;color:#ffd24a}#tg88 p{margin:6px 0 14px;color:#c9d6f2;font-size:16px;line-height:1.3}
#tg88 .tgb{margin:8px 0 0;padding:13px;border-radius:14px;font:400 20px 'Lilita One',system-ui,sans-serif;cursor:pointer;color:#3a210d;background:linear-gradient(#ffe27a,#f0a020);border:2px solid #3a210d;user-select:none}
#tg88 .tgb.s{color:#e6eeff;background:#1d2c4c;border-color:#4a68a8}
#tg88 .tgs{width:34px;height:34px;margin:10px auto 0;border-radius:50%;border:4px solid #ffffff33;border-top-color:#ffd24a;animation:tgsp 1s linear infinite}@keyframes tgsp{to{transform:rotate(360deg)}}`;document.head.appendChild(st);
const el=document.createElement('div');el.id='tg88';document.body.appendChild(el);
const esc=s=>String(s||'').replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const show=h=>{el.innerHTML='<div class="tgc">'+h+'</div>';el.style.display='flex'},hide=()=>{el.style.display='none'};
function view(v,msg){
 if(v=='load')show('<h2>BASE RUSH</h2><p>Entrando con Telegram…</p><div class="tgs"></div>');
 else show('<h2>Ups</h2><p>'+esc(msg)+'</p><div class="tgb" data-a="retry">Reintentar</div><div class="tgb s" data-a="mail">Entrar con correo</div>')}
async function call(body){const r=await sb.functions.invoke('tg-auth',{body});
 if(r.error){let m='Sin conexión con el servidor';try{const j=await r.error.context.json();if(j&&j.error)m=j.error}catch(e){}throw new Error(m)}return r.data||{}}
window.TGCALL89=call;
async function run(){if(busy)return;busy=1;try{
 if(!sb)throw new Error('Sin conexión con el servidor');
 const d=await call({action:'auth',initData:W.initData});
 if(!d.token_hash)throw new Error(d.error||'No se pudo iniciar sesión');
 const v=await sb.auth.verifyOtp({token_hash:d.token_hash,type:'magiclink'});
 if(v.error||!v.data.session)throw new Error('No se pudo iniciar sesión');
 if(d.name)window.PENDNAME=d.name;
 hide();await enter(v.data.session.user);busy=0
 }catch(e){busy=0;view('err',e.message||'Error')}}
el.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(!a)return;
 if(a.dataset.a=='retry'){view('load');run()}else{hide();authEl.style.display='flex'}});
function init(){load(()=>{try{W=window.Telegram&&Telegram.WebApp;if(!W||!W.initData)return;
 try{W.ready();W.expand();W.setHeaderColor('#070b14');W.setBackgroundColor('#070b14');W.disableVerticalSwipes&&W.disableVerticalSwipes()}catch(e){}
 window.INTG89=1;document.documentElement.classList.add('tg88');
 const iv=setInterval(()=>{if(tried){clearInterval(iv);return}
  if(typeof sb=='undefined'||!sb||!window.LDS||!LDS.sess)return;
  tried=1;clearInterval(iv);
  if(getComputedStyle(authEl).display=='none')return;/* ya hay sesión */
  authEl.style.display='none';view('load');run()},200);
 }catch(e){console.warn('tg88',e)}})}
if(document.readyState=='complete')init();else addEventListener('load',init);
})();

/* ===== v89: inicio de sesión por correo + código, Telegram en navegador, cambio de nombre ===== */
(function(){
if(typeof OFFLINE!='undefined'&&OFFLINE)return;
const $=id=>document.getElementById(id),card=document.querySelector('#auth .acard');if(!card)return;
window.NM89=n=>{n=String(n||'').toLowerCase().replace(/[^a-z0-9_]/g,'').slice(0,16);return n.length>=3?n:''};
const st=document.createElement('style');st.textContent=`
#auth .atabs,#auth .afld,#auth #al,#auth #ar,#auth .afoot,#auth #abeta{display:none!important}
#auth.leg89 .afld:not(.acode){display:flex!important}#auth.leg89 #al{display:block!important}
#auth.leg89 #n89{display:none!important}
#n89{display:flex;flex-direction:column;gap:10px;width:100%}
#n89 .ad89{font:600 17px 'Baloo 2',sans-serif;color:#fff;text-align:center;text-shadow:0 2px 0 #000a,0 0 10px #000b;line-height:1.25;margin:2px 4px 6px}
#n89 input{width:100%;box-sizing:border-box;padding:15px 14px;border-radius:12px;border:2px solid #3b6fb5;background:#071a3ab0;color:#fff;font:600 18px 'Baloo 2',sans-serif;outline:0;backdrop-filter:blur(8px)}
#n89 input:focus{border-color:#7fdcff;box-shadow:0 0 0 3px #7fdcff44}#n89 input::placeholder{color:#9db4d6}
#n89 #ac89{text-align:center;letter-spacing:6px;font-size:26px}
#n89 .b89{display:flex;align-items:center;justify-content:center;gap:10px;padding:14px;border-radius:12px;cursor:pointer;user-select:none;font:400 22px 'Lilita One',sans-serif;background:linear-gradient(#ffc84a,#f08a00);border:2px solid #ffe08a;color:#4a2a00;text-shadow:0 1px 0 #ffe9a8;box-shadow:0 4px 0 #a85d00}
#n89 .b89:active{transform:translateY(3px);box-shadow:0 1px 0 #a85d00}#n89 .b89.off{opacity:.55;pointer-events:none}
#n89 .b89.tg{background:linear-gradient(#37d4ff,#0a9be0);border-color:#9be8ff;color:#06385a;text-shadow:0 1px 0 #c8f3ff;box-shadow:0 4px 0 #0870a8;font-size:19px}
#n89 .b89.tg svg{width:26px;height:26px;flex:none}
#n89 .l89{text-align:center;color:#bcd2f5;font:600 15px 'Baloo 2',sans-serif;text-decoration:underline;cursor:pointer;padding:4px}
#n89 .l89.off{opacity:.6;pointer-events:none;text-decoration:none}
#n89 .f89{font:600 14px 'Baloo 2',sans-serif;color:#dbe8ff;text-align:center;text-shadow:0 1px 0 #000a;margin:4px 6px 0;line-height:1.25}
#n89 .s89{display:none}#n89.cd .s89{display:flex;flex-direction:column;gap:10px}#n89.cd .e89{display:none}
#n89 .m89{font:600 16px 'Baloo 2',sans-serif;color:#fff;text-align:center;text-shadow:0 1px 0 #000a}
#am{text-align:center}
#rn89{position:fixed;inset:0;z-index:2147482000;display:none;align-items:center;justify-content:center;padding:20px;background:#000a;font-family:'Baloo 2',sans-serif;color:#fff}
#rn89 .rc{max-height:92vh;overflow:auto;text-align:left;width:100%;max-width:330px;padding:18px;border-radius:18px;background:#101a2e;border:2px solid #3a5a98;text-align:center}
#rn89 h3{text-align:center;margin:0 0 8px;font:400 24px 'Lilita One',sans-serif;color:#ffd24a}#rn89 p{margin:4px 0 10px;color:#c9d6f2;font-size:15px}
#rn89 input{width:100%;box-sizing:border-box;padding:12px;border-radius:12px;border:2px solid #4a68a8;background:#0a1224;color:#fff;font:700 18px 'Baloo 2',sans-serif;text-align:center;outline:0}
#rn89 .rb{margin-top:10px;padding:12px;border-radius:12px;font:400 19px 'Lilita One',sans-serif;cursor:pointer;color:#3a210d;background:linear-gradient(#ffe27a,#f0a020);border:2px solid #3a210d;user-select:none}
#rn89 .rb.s{color:#e6eeff;background:#1d2c4c;border-color:#4a68a8}#rn89 .rb.off{opacity:.5;pointer-events:none}#rn89 .rs{margin:0 0 12px;padding:10px;border-radius:12px;background:#0a1224;border:1px solid #2c4474}#rn89 .rt{font:400 18px 'Lilita One',sans-serif;color:#ffd24a;margin-bottom:4px}#rn89 .sm{font-size:13px;color:#9db4d6;margin:6px 0}#rn89 .rb{text-align:center}#rn89 .re{min-height:20px;margin-top:8px;color:#ff9a9a;font-size:15px}
.rnb89{display:inline-block;margin:0 0 0 8px;padding:3px 10px;border-radius:10px;background:linear-gradient(#ffe27a,#f0a020);color:#3a210d;font:400 15px 'Lilita One',sans-serif;vertical-align:middle;cursor:pointer}`;document.head.appendChild(st);
const TG='<svg viewBox="0 0 24 24" fill="#06385a"><path d="M21.9 3.6 2.7 11c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.6.4.8.8.8.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.3-.5-1.9-1.1-1.5zM8.6 13.6l9.4-5.9c.4-.3.8-.1.5.2l-7.8 7-.3 3.3z"/></svg>';
const box=document.createElement('div');box.id='n89';
box.innerHTML=`<div class="ad89">Construye una aldea, forma un ejército y defiéndela de los ataques. Tu progreso es el mismo: juega donde quieras.</div>
<div class="e89"><input id="ae89" type="email" placeholder="tú@correo.com" autocomplete="email" autocapitalize="none" spellcheck="false" inputmode="email"><div class="b89" id="as89">Enviar enlace</div></div>
<div class="s89"><div class="m89" id="am89"></div><div class="l89" id="ar89">Reenviar enlace</div><div class="l89" id="ax89">Cambiar correo</div></div>
<div class="b89 tg" id="at89">${TG}<span>Iniciar sesión a través de Telegram</span></div>
<div class="f89">Con Telegram entras al instante y sin contraseña. Tu cuenta y tu progreso quedan guardados.</div>
<div class="l89" id="al89">Tengo una cuenta con usuario y contraseña</div>`;
const am=$('am');card.insertBefore(box,am);
const msg=t=>{am.textContent=t||''};
const au=$('auth');let email='',cdT=0,cd=0;
function mapErr(e){const m=(e&&e.message)||String(e||'');
 if(/rate limit|security purposes|too many|over_email/i.test(m))return 'Espera un momento antes de pedir otro código.';
 if(/expired|invalid|otp|token/i.test(m))return 'Código incorrecto o vencido.';
 if(/invalid.*email|email.*invalid|valid email/i.test(m))return 'Correo no válido.';return m||'Error'}
function tick(){const r=$('ar89');if(cd>0){r.textContent='Reenviar enlace ('+cd+'s)';r.classList.add('off')}else{r.textContent='Reenviar enlace';r.classList.remove('off')}}
function startCd(){cd=60;tick();clearInterval(cdT);cdT=setInterval(()=>{cd--;tick();if(cd<=0)clearInterval(cdT)},1000)}
let pollT=0;
async function send(){const v=$('ae89').value.trim().toLowerCase();
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){msg('Escribe un correo válido.');return}
 if(!sb){msg('Sin conexión con el servidor');return}
 const b=$('as89');b.classList.add('off');msg('Enviando enlace…');
 try{const r=await sb.auth.signInWithOtp({email:v,options:{shouldCreateUser:true,emailRedirectTo:location.origin+location.pathname}});if(r.error)throw r.error;
  email=v;box.classList.add('cd');$('am89').textContent='Te enviamos un enlace a '+v+'. Ábrelo para entrar al juego (revisa también la carpeta de spam).';msg('');startCd();
  clearInterval(pollT);pollT=setInterval(async()=>{try{if(getComputedStyle(au).display=='none'){clearInterval(pollT);return}const g=await sb.auth.getSession();if(g.data&&g.data.session){clearInterval(pollT);window.PENDNAME=NM89(email.split('@')[0]);await enter(g.data.session.user)}}catch(e){}},2500)}
 catch(e){msg(mapErr(e))}finally{b.classList.remove('off')}}
$('as89').onclick=send;
$('ar89').onclick=()=>{if(cd>0)return;send()};
$('ax89').onclick=()=>{box.classList.remove('cd');msg('');clearInterval(cdT);clearInterval(pollT)};
$('ae89').addEventListener('keydown',e=>{if(e.key=='Enter'){e.preventDefault();send()}});
$('al89').onclick=()=>{au.classList.add('leg89');msg('Entra con tu usuario y contraseña de siempre.')};
/* Telegram en el navegador (Log in with Telegram, OIDC) */
let LOADED=0;function ldTg(){return new Promise((ok,no)=>{if(window.Telegram&&Telegram.Login){ok();return}const s=document.createElement('script');s.src='https://telegram.org/js/telegram-login.js';s.onload=ok;s.onerror=()=>no(new Error('No se pudo cargar Telegram'));document.head.appendChild(s)})}
$('at89').onclick=async()=>{if(!sb){msg('Sin conexión con el servidor');return}
 const b=$('at89');if(b.classList.contains('off'))return;b.classList.add('off');msg('Abriendo Telegram…');
 try{await ldTg();const cfg=await sb.functions.invoke('tg-auth',{body:{action:'cfg'}});if(cfg.error||!cfg.data||!cfg.data.bot_id)throw new Error('Telegram aún no está configurado');
  const data=await new Promise((ok,no)=>{try{Telegram.Login.auth({client_id:cfg.data.bot_id,scope:['profile'],lang:'es'},d=>{if(!d||d.error||!d.id_token)no(new Error((d&&d.error)||'Inicio cancelado'));else ok(d)})}catch(e){no(e)}});
  msg('Entrando…');const r=await sb.functions.invoke('tg-auth',{body:{action:'auth',id_token:data.id_token}});
  if(r.error){let m='No se pudo iniciar sesión';try{const j=await r.error.context.json();if(j&&j.error)m=j.error}catch(e){}throw new Error(m)}
  const d=r.data;if(!d||!d.token_hash)throw new Error('No se pudo iniciar sesión');
  const v=await sb.auth.verifyOtp({token_hash:d.token_hash,type:'magiclink'});if(v.error||!v.data.session)throw new Error('No se pudo iniciar sesión');
  if(d.name)window.PENDNAME=d.name;msg('');await enter(v.data.session.user)}
 catch(e){msg((e&&e.message)||'No se pudo iniciar sesión')}finally{b.classList.remove('off')}};
/* en la Mini App el botón de Telegram sobra (entra solo) */
setInterval(()=>{if(window.INTG89)$('at89').style.display='none'},500);
/* ---- ajustes de perfil: nombre (cada 7 días), correo, personalización ---- */
const rn=document.createElement('div');rn.id='rn89';document.body.appendChild(rn);
const close=()=>{rn.style.display='none'};
const esc=t=>String(t||'').replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const isFake=e=>/@clanclash\.game$/i.test(e||'');
async function openRn(sub){rn.style.display='flex';rn.innerHTML='<div class="rc"><h3>Ajustes de perfil</h3><p>Cargando…</p></div>';
 let s=null,u=null;try{const r=await sb.rpc('name_status');s=r.data}catch(e){}
 try{const g=await sb.auth.getUser();u=g.data&&g.data.user}catch(e){}
 const can=!s||s.can!==false,when=s&&s.next_at?new Date(s.next_at):null,em=(u&&u.email)||'',fake=isFake(em),pend=u&&u.new_email;
 const nameBox=can?`<input id="rni" maxlength="16" placeholder="nuevo_nombre" autocapitalize="none" autocomplete="off" spellcheck="false"><p class="sm">3 a 16 letras minúsculas, números o _ · una vez cada 7 días</p><div class="rb" id="rnok">Guardar nombre</div>`:`<p style="color:#ffd24a">Podrás cambiar tu nombre de nuevo el ${when?when.toLocaleString('es',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}):''}</p>`;
 const mailBox=fake?`<p>Tu cuenta no tiene correo. Vincúlalo para poder recuperarla y entrar desde cualquier lugar.</p>${pend?`<p style="color:#ffd24a">Falta confirmar: ${esc(pend)}. Abre el enlace que te enviamos.</p>`:''}<input id="rne2" type="email" placeholder="tú@correo.com" autocomplete="email" autocapitalize="none" spellcheck="false" style="text-transform:none"><div class="rb" id="rnm">Enviar enlace de confirmación</div>`:`<p>✔ Correo vinculado:<br><b>${esc(em)}</b></p>`;
 rn.innerHTML=`<div class="rc"><h3>Ajustes de perfil</h3>
 <div class="rs"><div class="rt">Nombre</div><p>Actual: <b>${esc((s&&s.name)||S.name||'')}</b></p>${nameBox}</div>
 <div class="rs"><div class="rt">Correo de la cuenta</div>${mailBox}</div>
 <div class="rs"><div class="rt">Personalización</div><p class="sm" style="margin:0">Próximamente: banners, insignias, marcos y más.</p></div>
 <div class="rb s" id="rnx">Cerrar</div><div class="re" id="rne"></div></div>`;
 $('rnx').onclick=close;const ok=$('rnok'),mb=$('rnm'),E=t=>{$('rne').textContent=t||''};
 if(ok)ok.onclick=async()=>{const v=($('rni').value||'').trim().toLowerCase();if(!/^[a-z0-9_]{3,16}$/.test(v)){E('Nombre no válido: 3 a 16 letras minúsculas, números o _');return}
  ok.classList.add('off');E('');
  try{const r=await sb.rpc('rename_player',{p_name:v});if(r.error)throw r.error;S.name=r.data.name;try{ui()}catch(e){}try{typeof prfLoad=='function'&&prfLoad().then(()=>ui())}catch(e){}close();typeof note=='function'&&note('Nombre cambiado a '+S.name)}
  catch(e){E((e.message||'Error').replace(/^.*?:\s*/,'')||'Error');ok.classList.remove('off')}};
 if(mb)mb.onclick=async()=>{const v=($('rne2').value||'').trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){E('Escribe un correo válido.');return}
  mb.classList.add('off');E('');
  try{const r=await sb.auth.updateUser({email:v},{emailRedirectTo:location.origin+location.pathname});if(r.error)throw r.error;E('');rn.querySelector('.rc').insertAdjacentHTML('afterbegin','');mb.textContent='Enlace enviado ✓';$('rne').style.color='#8dff9d';E('Te enviamos un enlace a '+v+'. Ábrelo para confirmar tu correo.')}
  catch(e){const m=e.message||'';E(/already|registered|exists/i.test(m)?'Ese correo ya está usado por otra cuenta.':/rate|security/i.test(m)?'Espera un momento antes de pedir otro enlace.':m||'Error');mb.classList.remove('off')}};}
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-rn89]');if(t){e.stopPropagation();openRn()}},true);
})();

/* ===== v89: CHAT GLOBAL (salas es/en) ===== */
(function(){
if(typeof OFFLINE!='undefined'&&OFFLINE)return;
const $=id=>document.getElementById(id);
const esc=t=>String(t==null?'':t).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
let room='es';try{const r=localStorage.getItem('chroom');room=r||((navigator.language||'es').toLowerCase().startsWith('es')?'es':'en')}catch(e){room=(navigator.language||'es').toLowerCase().startsWith('es')?'es':'en'}
let scope='g',msgs=[],open=0,unread=0,chan=null,chanRoom='',pollT=0,sendLock=0,sel=null;
const BUB='<svg viewBox="0 0 24 24" width="34" height="34"><path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="#ffe27a" stroke="#3a210d" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="10.5" r="1.4" fill="#3a210d"/><circle cx="12" cy="10.5" r="1.4" fill="#3a210d"/><circle cx="16" cy="10.5" r="1.4" fill="#3a210d"/></svg>';
const st=document.createElement('style');st.textContent=`
#ch89b{position:fixed;right:calc(12px + env(safe-area-inset-right,0px));bottom:calc(22px + env(safe-area-inset-bottom,0px));z-index:6;width:64px;height:64px;border-radius:18px;display:none;flex-direction:column;align-items:center;justify-content:center;padding:0;border:1.5px solid rgba(255,255,255,.3);background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.36);-webkit-backdrop-filter:blur(12px) saturate(1.35);backdrop-filter:blur(12px) saturate(1.35);box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4);color:#fff;font:800 11px 'Baloo 2',system-ui,sans-serif}
#ch89b span{text-shadow:0 1px 2px #000}#ch89b svg{filter:drop-shadow(0 2px 2px rgba(0,0,0,.55))}
#ch89b .un{position:absolute;top:-6px;right:-6px;min-width:20px;height:20px;padding:0 4px;box-sizing:border-box;border-radius:10px;background:#ff4d5e;border:2px solid #0b1020;font:800 12px/16px 'Baloo 2',sans-serif;text-align:center;display:none}
body.ba #ch89b,body.land #ch89b{display:none!important}
#ch89{position:fixed;inset:0;z-index:2147481000;display:none;flex-direction:column;height:100dvh;background:#0a1224;font-family:'Baloo 2','Baloo 2',system-ui,sans-serif;color:#fff}
#ch89 .hd{display:flex;align-items:center;gap:8px;padding:calc(10px + env(safe-area-inset-top,0px)) 12px 10px;background:linear-gradient(#18305a,#0f2040);border-bottom:2px solid #2c4a82}
#ch89 .hd h2{margin:0;font:400 24px 'Lilita One',sans-serif;color:#ffd24a;flex:1}
#ch89 .ct{display:flex;gap:8px;padding:8px 10px 0;background:#0f2040}#ch89 .ct div{flex:1;text-align:center;padding:7px 0;border-radius:12px;font:400 17px 'Lilita One',sans-serif;background:#1d2c4c;border:2px solid #4a68a8;color:#cfe0ff;cursor:pointer;user-select:none}#ch89 .ct div.on{background:linear-gradient(#ffe27a,#f0a020);border-color:#3a210d;color:#3a210d}#ch89 .ct div.no{display:none}
#ch89 .rm{display:flex;gap:6px;padding:8px 10px;background:#0f2040;border-bottom:2px solid #2c4a82}#ch89 .rm.off{display:none}#ch89 .rm div{padding:5px 11px;border-radius:12px;font:400 16px 'Lilita One',sans-serif;background:#1d2c4c;border:2px solid #4a68a8;color:#cfe0ff;cursor:pointer;user-select:none}
#ch89 .rm div.on{background:linear-gradient(#ffe27a,#f0a020);border-color:#3a210d;color:#3a210d}
#ch89 .cx{width:42px;height:42px;display:grid;place-items:center;cursor:pointer}#ch89 .cx img{width:38px;height:38px;object-fit:contain}
#ch89 .ls{flex:1;overflow-y:auto;padding:10px 10px 4px;display:flex;flex-direction:column;gap:7px;-webkit-overflow-scrolling:touch}
#ch89 .em{margin:auto;color:#8ea5cc;font-size:16px;text-align:center;padding:20px}
#ch89 .m{max-width:84%;padding:6px 10px 7px;border-radius:14px;background:#16264a;border:1px solid #2c4a82;align-self:flex-start;word-wrap:break-word;overflow-wrap:anywhere}
#ch89 .m.me{align-self:flex-end;background:#1f4a7a;border-color:#3b7cc0}
#ch89 .m .n{font:700 14px 'Baloo 2',sans-serif;display:flex;gap:6px;align-items:baseline}#ch89 .m .n i{font-style:normal;font-weight:600;font-size:11px;color:#8ea5cc}
#ch89 .m .t{font:500 16px/1.25 'Baloo 2',sans-serif;color:#f2f6ff;margin-top:1px}
#ch89 .m.adm .n b{color:#ffd24a}#ch89 .m .rp{color:#ff8a8a;font-size:12px}
#ch89 .in{display:flex;gap:8px;padding:8px 10px calc(10px + env(safe-area-inset-bottom,0px));background:#0f2040;border-top:2px solid #2c4a82}
#ch89 .in input{flex:1;min-width:0;padding:12px 12px;border-radius:12px;border:2px solid #4a68a8;background:#071328;color:#fff;font:600 17px 'Baloo 2',sans-serif;outline:0}
#ch89 .in .sd{padding:0 18px;display:grid;place-items:center;border-radius:12px;font:400 20px 'Lilita One',sans-serif;color:#3a210d;background:linear-gradient(#ffe27a,#f0a020);border:2px solid #3a210d;cursor:pointer;user-select:none}
#ch89 .in .sd.off{opacity:.5;pointer-events:none}
#ch89 .er{min-height:0;padding:0 12px;color:#ff9a9a;font-size:14px;background:#0f2040}#ch89 .er:not(:empty){padding:4px 12px}
#ch89 .sh{position:absolute;inset:0;background:#000a;display:none;align-items:flex-end}
#ch89 .sh>div{width:100%;padding:14px 14px calc(16px + env(safe-area-inset-bottom,0px));background:#101a2e;border-top:2px solid #3a5a98;border-radius:18px 18px 0 0}
#ch89 .sh p{margin:0 0 8px;color:#c9d6f2;font-size:15px;overflow-wrap:anywhere}
#ch89 .sh .b{margin-top:8px;padding:12px;text-align:center;border-radius:12px;font:400 19px 'Lilita One',sans-serif;color:#e6eeff;background:#1d2c4c;border:2px solid #4a68a8;cursor:pointer;user-select:none}
#ch89 .sh .b.r{color:#3a210d;background:linear-gradient(#ffb0a8,#e8584a);border-color:#3a210d}`;
document.head.appendChild(st);
const btn=document.createElement('button');btn.id='ch89b';btn.setAttribute('aria-label','Chat');btn.innerHTML=BUB+'<span>Chat</span><i class="un"></i>';document.body.appendChild(btn);
const pn=document.createElement('div');pn.id='ch89';
pn.innerHTML='<div class="hd"><h2>Chat</h2><div class="cx" id="ch89x"></div></div><div class="ct"><div data-s="g" class="on">Global</div><div data-s="c">Clan</div></div><div class="rm"><div data-r="es">ES</div><div data-r="en">EN</div><div data-r="pt">PT</div><div data-r="ru">RU</div></div><div class="ls" id="ch89l"></div><div class="er" id="ch89e"></div><div class="in"><input id="ch89i" maxlength="200" placeholder="Escribe un mensaje…" autocomplete="off" enterkeyhint="send"><div class="sd" id="ch89s">Enviar</div></div><div class="sh" id="ch89h"><div></div></div>';
document.body.appendChild(pn);
const xb=()=>{$('ch89x').innerHTML=(window.IC87&&IC87.xbtn)?'<img src="'+IC87.xbtn+'" alt="">':'✕'};xb();setTimeout(xb,3000);
const hue=s=>{let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%360;return h};
const hm=d=>{try{return new Date(d).toLocaleTimeString('es',{hour:'2-digit',minute:'2-digit'})}catch(e){return''}};
const adm=()=>typeof isAdm=='function'&&isAdm();
const L=()=>$('ch89l'),E=t=>{$('ch89e').textContent=t||''};
function row(m){const me=typeof ME!='undefined'&&m.user_id===ME,isA=m.name==='spidxr';
 return `<div class="m${me?' me':''}${isA?' adm':''}" data-id="${m.id}"><div class="n"><b style="color:${isA?'#ffd24a':'hsl('+hue(m.name)+',75%,72%)'}">${esc(m.name)}</b><i>${hm(m.created_at)}</i>${m.rep>0?'<span class="rp">⚑'+m.rep+'</span>':''}</div><div class="t">${esc(m.msg)}</div></div>`}
function draw(stick){const l=L();const near=l.scrollHeight-l.scrollTop-l.clientHeight<90;
 l.innerHTML=msgs.length?msgs.map(row).join(''):'<div class="em">'+(scope=='c'?'Aún no hay mensajes del clan.':'Aún no hay mensajes. ¡Sé el primero en saludar!')+'</div>';
 if(stick||near)l.scrollTop=l.scrollHeight}
function setUn(n){unread=n;const u=btn.querySelector('.un');u.style.display=n>0?'block':'none';u.textContent=n>9?'9+':n}
async function load(stick){try{const sc0=scope;const r=sc0=='c'?await sb.rpc('clan_chat_list'):await sb.rpc('chat_list',{p_room:room});if(sc0!=scope)return;if(r.error)throw r.error;msgs=r.data||[];if(open)draw(stick)}catch(e){if(open)E('No se pudo cargar el chat')}}
function sub(){if(chan&&chanRoom===room)return;try{if(chan)sb.removeChannel(chan)}catch(e){}chanRoom=room;
 try{chan=sb.channel('chat-'+room).on('postgres_changes',{event:'INSERT',schema:'public',table:'chat_msgs',filter:'room=eq.'+room},p=>{const m=p.new;if(scope!='g'||!m||msgs.some(x=>x.id===m.id))return;msgs.push({id:m.id,user_id:m.user_id,name:m.name,msg:m.msg,created_at:m.created_at,rep:0});if(msgs.length>80)msgs.shift();
   if(open)draw();else if(m.user_id!==ME)setUn(unread+1)}).subscribe()}catch(e){}}
function setRoom(r){room=r;try{localStorage.setItem('chroom',r)}catch(e){}pn.querySelectorAll('.rm div').forEach(d=>d.classList.toggle('on',d.dataset.r===r));setScope(scope,1)}
const inClan=()=>{try{return !!(window.CLAN90&&CLAN90.st&&CLAN90.st.in)}catch(e){return false}};
function setScope(sc,force){if(sc=='c'&&!inClan())sc='g';if(sc==scope&&!force)return;scope=sc;pn.querySelectorAll('.ct div').forEach(d=>{d.classList.toggle('on',d.dataset.s===sc);if(d.dataset.s=='c')d.classList.toggle('no',!inClan())});pn.querySelector('.rm').classList.toggle('off',sc=='c');
 const T=(window.T93&&T93.t)?T93.t:(x=>x);pn.querySelector('.hd h2').textContent=sc=='c'?'Chat del clan':'Chat global';$('ch89i').placeholder=sc=='c'?'Escribe al clan…':'Escribe un mensaje…';msgs=[];setUn(0);if(sc=='g')sub();clearInterval(pollT);pollT=setInterval(()=>load(),sc=='c'?4000:20000);load(true)}
pn.querySelector('.ct').addEventListener('click',e=>{const d=e.target.closest('[data-s]');if(d)setScope(d.dataset.s)});
function openC(){if(!sb||typeof ME=='undefined'||!ME)return;open=1;pn.style.display='flex';setUn(0);E('');scope='g';setRoom(room)}
function closeC(){open=0;pn.style.display='none';clearInterval(pollT);sheet(0)}
btn.addEventListener('click',openC);$('ch89x').addEventListener('click',closeC);
pn.querySelector('.rm').addEventListener('click',e=>{const d=e.target.closest('[data-r]');if(d&&d.dataset.r!==room)setRoom(d.dataset.r)});
async function send(){const i=$('ch89i'),t=i.value.trim();if(!t||sendLock)return;sendLock=1;$('ch89s').classList.add('off');E('');
 try{const r=scope=='c'?await sb.rpc('clan_chat_send',{p_msg:t}):await sb.rpc('chat_send',{p_room:room,p_msg:t});if(r.error)throw r.error;i.value='';const m=r.data;if(m&&!msgs.some(x=>x.id===m.id)){msgs.push({...m,rep:0});draw(true)}}
 catch(e){E((e.message||'Error').replace(/^.*?:\s*/,'').slice(0,90))}
 setTimeout(()=>{sendLock=0;$('ch89s').classList.remove('off')},1200)}
$('ch89s').addEventListener('click',send);$('ch89i').addEventListener('keydown',e=>{if(e.key=='Enter'){e.preventDefault();send()}});
function sheet(m){const h=$('ch89h');if(!m){h.style.display='none';sel=null;return}sel=m;const me=m.user_id===ME;
 h.firstElementChild.innerHTML=`<p><b>${esc(m.name)}</b>: ${esc(m.msg)}</p>`+(me?'':'<div class="b r" data-a="rep">Reportar mensaje</div>')+(adm()?'<div class="b" data-a="del">Borrar mensaje</div>'+(me?'':'<div class="b" data-a="m60">Silenciar 1 hora</div><div class="b" data-a="m1440">Silenciar 24 horas</div><div class="b" data-a="m0">Quitar silencio</div>'):'')+'<div class="b" data-a="x">Cerrar</div>';h.style.display='flex'}
L().addEventListener('click',e=>{const d=e.target.closest('.m');if(!d||scope=='c')return;const m=msgs.find(x=>String(x.id)===d.dataset.id);if(m)sheet(m)});
$('ch89h').addEventListener('click',async e=>{const a=e.target.closest('[data-a]'),k=a&&a.dataset.a;if(!a){if(e.target.id=='ch89h')sheet(0);return}const m=sel;if(!m||k=='x'){sheet(0);return}
 try{let r;if(k=='rep'){r=await sb.rpc('chat_report',{p_id:m.id});E('Reporte enviado. ¡Gracias!')}
  else if(k=='del'){r=await sb.rpc('chat_delete',{p_id:m.id});msgs=msgs.filter(x=>x.id!==m.id);draw()}
  else if(/^m\d+$/.test(k)){r=await sb.rpc('chat_mute',{p_user:m.user_id,p_minutes:+k.slice(1)});E(k=='m0'?'Silencio quitado':'Jugador silenciado')}
  if(r&&r.error)throw r.error}catch(err){E((err.message||'Error').slice(0,90))}sheet(0)});
/* visibilidad del botón: pueblo, con base y sesión online */
setInterval(()=>{try{const v=mode=='v'&&S&&S.b&&typeof ME!='undefined'&&ME&&!open&&!(typeof UI!='undefined'&&(UI.shop||UI.train||UI.lab));btn.style.display=v?'flex':'none';if(v&&!chan)sub()}catch(e){}},700);
})();

/* ===== v89: HUD compacto estilo referencia: recursos finos, rejilla de iconos arriba, martillo+ataque abajo, Tienda separada ===== */
(function(){
const V='body:not(.land):not(.ba)';
const GL='background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.36)!important;-webkit-backdrop-filter:blur(12px) saturate(1.35);backdrop-filter:blur(12px) saturate(1.35);border:1.5px solid rgba(255,255,255,.3)!important;box-shadow:0 4px 12px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4)!important';
const T=n=>`calc(${n}px + env(safe-area-inset-top,0px))`;
const st=document.createElement('style');st.textContent=`
/* recursos: finos */
${V} #top span.pill{height:26px!important;border-radius:11px!important;padding:0 9px 0 28px!important;font-size:14px!important}
${V} #top span.pill em{left:-8px!important;width:34px!important;height:34px!important}
${V} #top span.pill em .bri{width:34px!important;height:34px!important}
${V} #top span.pill i.pb{left:24px!important;top:3px!important;bottom:3px!important;border-radius:8px!important}
${V} #top .pill.gold,${V} #top .pill.elx,${V} #top .pill.gem,${V} #top .pill.shd{right:10px!important;width:124px!important}
${V} #top .pill.gold{top:${T(10)}!important}${V} #top .pill.elx{top:${T(40)}!important}${V} #top .pill.gem{top:${T(70)}!important}${V} #top .pill.shd{top:${T(100)}!important}
/* tarjeta del jugador */
#h85pc{left:10px!important;top:${T(10)}!important;width:172px!important;height:42px!important;padding:3px 7px 3px 10px!important;border-radius:12px!important}
#h85pc b{font-size:15px!important;max-width:110px!important}#h85pc .pti,#h85pc .pti .bri{width:19px!important;height:19px!important}#h85pc em{font-size:14px!important}
#h85pc .pb2{width:32px!important;height:34px!important}#h85pc .pb2 .bri,#h85pc .pb2 img{width:30px!important;height:30px!important}
/* fila 2: constructores + Tienda */
${V} #top .pill.bld{left:18px!important;width:76px!important;top:${T(58)}!important;padding-left:32px!important;height:28px!important}
#st89b{position:fixed;left:104px;top:${T(58)};width:78px;height:28px;z-index:6;display:none;align-items:center;justify-content:center;border-radius:11px;cursor:pointer;user-select:none;font:800 14px 'Baloo 2',system-ui,sans-serif;color:#ffe9a8;text-shadow:0 2px 0 rgba(0,0,0,.55);${GL}}
#st89b:active{transform:scale(.95)}
/* rejilla de iconos 4x2 */
${V} .dock.main .db[data-ms],${V} .dock.main .db[data-l],${V} .dock.main .db[data-sl],${V} #top button.hbg,${V} #top button[data-adm],${V} #ev85b,${V} #ch89b{width:38px!important;height:38px!important;border-radius:12px!important;position:fixed!important;padding:0!important}
${V} .dock.main .db[data-ms] .bri,${V} .dock.main .db[data-l] .bri,${V} .dock.main .db[data-sl] .bri,${V} #top button.hbg .bri{width:24px!important;height:24px!important}
${V} .dock.main .db[data-ms],${V} #ev85b{left:12px!important}${V} #top button.hbg,${V} #ch89b{left:56px!important}${V} .dock.main .db[data-l],${V} #top button[data-adm]{left:100px!important}${V} .dock.main .db[data-sl]{left:144px!important}
${V} .dock.main .db[data-ms],${V} #top button.hbg,${V} .dock.main .db[data-l],${V} .dock.main .db[data-sl]{top:${T(94)}!important}
${V} #ev85b,${V} #ch89b,${V} #top button[data-adm]{top:${T(138)}!important;bottom:auto!important;right:auto!important}
${V} #ev85b span,${V} #ch89b span{display:none!important}${V} #ev85b svg,${V} #ev85b img,${V} #ch89b svg{width:24px!important;height:24px!important}
${V} #ev85b .dt,${V} .dock.main .db[data-ms] b.dot,${V} .dock.main .db[data-sl] b.dot{top:-5px!important;right:-5px!important}
${V} #ch89b .un{top:-7px;right:-7px;min-width:17px;height:17px;font-size:11px;line-height:13px}
/* abajo: solo martillo + ataque, redondos y sin texto */
${V} .dock.main .db.atk,${V} .dock.main .db[data-tab=shop]{position:fixed!important;top:auto!important;bottom:calc(18px + env(safe-area-inset-bottom,0px))!important;width:70px!important;height:70px!important;min-width:0!important;min-height:0!important;border-radius:50%!important;padding:0!important;margin:0!important;display:flex!important;align-items:center;justify-content:center;font-size:0!important;flex:none!important;transform:none!important}
${V} .dock.main .db.atk{left:calc(50% + 12px)!important}${V} .dock.main .db[data-tab=shop]{left:calc(50% - 82px)!important}
${V} .dock.main .db.atk:active,${V} .dock.main .db[data-tab=shop]:active{transform:scale(.93)!important}
${V} .dock.main .db.atk .bfx{display:none}
${V} .dock.main .db[data-tab=shop]{background:radial-gradient(circle at 50% 28%,#6db4ff,#2a6ad2 58%,#163f94)!important;border:4px solid #f4c14a!important;box-shadow:0 5px 0 #8a5a10,0 9px 16px rgba(0,0,0,.45),inset 0 2px 0 rgba(255,255,255,.45)!important;color:#fff!important}
${V} .dock.main .db[data-tab=shop] i,${V} .dock.main .db.atk i{display:grid!important;place-items:center;font-size:0!important}
${V} .dock.main .db[data-tab=shop] .bri,${V} .dock.main .db.atk .bri{width:42px!important;height:42px!important;filter:drop-shadow(0 3px 2px rgba(0,0,0,.55))}
/* ajustes: filas compactas */
#menu .mbd,.mbd{display:block!important}.mbd .mr,.mbd button.mr{display:flex!important;align-items:center;flex:none!important;height:auto!important;min-height:52px!important;max-height:none!important;margin:0 0 8px!important}
.mbd .slr{margin:0 0 8px}.mbd .sg{margin:0 0 10px}
/* hub de Tienda */
#st89{position:fixed;inset:0;z-index:2147480000;display:none;align-items:center;justify-content:center;padding:14px;background:rgba(3,8,20,.72);font-family:'Baloo 2',system-ui,sans-serif;color:#fff}
#st89 .sc{width:100%;max-width:380px;max-height:92vh;display:flex;flex-direction:column;border-radius:20px;background:#0f1a30;border:2px solid #3a5a98;box-shadow:0 14px 44px #000a;overflow:hidden}
#st89 .hd{display:flex;align-items:center;gap:8px;padding:12px 12px 8px}#st89 .hd h2{margin:0;flex:1;font:400 26px 'Lilita One',sans-serif;color:#ffd24a}
#st89 .gq{display:flex;align-items:center;gap:4px;padding:3px 10px 3px 4px;border-radius:12px;background:#0a1224;border:1px solid #2c4474;font:800 15px 'Baloo 2',sans-serif}#st89 .gq .bri{width:24px;height:24px}
#st89 .cx{width:40px;height:40px;display:grid;place-items:center;cursor:pointer}#st89 .cx img{width:36px;height:36px;object-fit:contain}
#st89 .tb{display:flex;gap:6px;padding:0 12px 8px}#st89 .tb div{flex:1;text-align:center;padding:8px 4px;border-radius:12px;font:400 16px 'Lilita One',sans-serif;background:#1a2a4a;border:2px solid #3a5a98;color:#bcd0f5;cursor:pointer;user-select:none}
#st89 .tb div.on{background:linear-gradient(#ffe27a,#f0a020);border-color:#3a210d;color:#3a210d}
#st89 .bd{padding:4px 12px 14px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px}
#st89 .cd{position:relative;padding:10px 8px;border-radius:14px;background:#16264a;border:1.5px solid #2c4a82;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px}
#st89 .cd .nm{font:400 17px 'Lilita One',sans-serif;color:#fff}#st89 .cd .sv{width:54px;height:54px;display:grid;place-items:center;opacity:.8}#st89 .cd .sv svg,#st89 .cd .sv .bri{width:50px;height:50px}
#st89 .cd .sm{font:600 13px 'Baloo 2',sans-serif;color:#9db4d6}#st89 .cd .pr{font:800 15px 'Baloo 2',sans-serif;color:#7be39b;display:flex;align-items:center;gap:3px}#st89 .cd .pr .bri{width:20px;height:20px}
#st89 .cd .so{position:static;padding:1px 7px;border-radius:9px;background:#0a1224;border:1px solid #4a68a8;font:700 11px 'Baloo 2',sans-serif;color:#ffd24a}
#st89 .cd.w{grid-column:1/-1}`;
document.head.appendChild(st);
/* botón Tienda + hub */
const b=document.createElement('div');b.id='st89b';b.textContent='Tienda';document.body.appendChild(b);
const hub=document.createElement('div');hub.id='st89';document.body.appendChild(hub);
let tab='s';const esc=t=>String(t==null?'':t).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const soon='<span class="so">Próximamente</span>';
function body(){
 if(tab=='r')return '';if(tab=='s')return (typeof SHLD!='undefined'?SHLD:[]).map(c=>`<div class="cd">${soon}<div class="nm">${esc(c[0])}</div><div class="sv">${typeof shSvg=='function'?shSvg():BRI.sh}</div><div class="sm">⏱ ${esc(c[1])}</div><div class="sm">Recuperación: ${esc(c[2])}</div><div class="pr">${esc(c[3])} ${BRI.gm}</div></div>`).join('')+'<div class="cd w"><div class="sm">Los escudos mágicos aún no están disponibles.</div></div>';
 if(tab=='k')return [['Aspectos de aldea','Cambia el look de tu pueblo','hm'],['Skins de tropas','Estilos únicos para tu ejército','atk'],['Banners y marcos','Personaliza tu perfil','sh'],['Insignias','Muestra tus logros','tr']].map(c=>`<div class="cd">${soon}<div class="nm">${c[0]}</div><div class="sv">${BRI[c[2]]}</div><div class="sm">${c[1]}</div></div>`).join('');
 return ['Puñado de runas','Bolsa de runas','Cofre de runas'].map((n,i)=>`<div class="cd">${soon}<div class="nm">${n}</div><div class="sv">${BRI.gm}</div><div class="sm">${[80,500,1200][i]} runas</div></div>`).join('')+'<div class="cd w"><div class="sm">La compra de runas llegará pronto.</div></div>'}
function draw(){const xb=(window.IC87&&IC87.xbtn)?'<img src="'+IC87.xbtn+'" alt="">':'✕';
 hub.innerHTML=`<div class="sc"><div class="hd"><h2>Tienda</h2><div class="gq">${BRI.gm}${S.gem|0}</div><div class="cx" data-a="x">${xb}</div></div><div class="tb"><div data-t="s" class="${tab=='s'?'on':''}">Escudos</div><div data-t="k" class="${tab=='k'?'on':''}">Skins</div><div data-t="g" class="${tab=='g'?'on':''}">Runas</div><div data-t="r" class="${tab=='r'?'on':''}">Recursos</div></div><div class="bd">${body()}</div></div>`}
b.addEventListener('click',()=>{try{snd('open')}catch(e){}draw();hub.style.display='flex'});
hub.addEventListener('click',e=>{if(e.target===hub){hub.style.display='none';return}const t=e.target.closest('[data-t]'),x=e.target.closest('[data-a]');if(t){tab=t.dataset.t;draw()}else if(x)hub.style.display='none'});
setInterval(()=>{try{const ok=!document.body.classList.contains('land')&&!document.body.classList.contains('ba')&&mode=='v'&&S&&S.b&&!UI.shop&&!UI.train&&!UI.lab&&!UI.btl&&hub.style.display!='flex';b.style.display=ok?'flex':'none'}catch(e){}},300);
/* historial y venganza: abre el panel de historial directamente */
window.btlOpenMenu=function(){UI.btl=1;BTL.view='hist';BTL.top='bat';BTL.ht='def';try{btlLoadAll()}catch(e){}try{btlPoll()}catch(e){}ui()};
/* rango de la defensa seleccionada */
})();
(function(){const d0=draw;draw=function(){d0();try{if(mode!='v'||!pk||pk.ruin||pk.nb)return;const d=TY[pk.t];if(!d||!d.rg||d.trap)return;const[ax,ay]=P(pk.x+d.s/2,pk.y+d.s/2),rx=d.rg*TW*ER(),ry=d.rg*TH*ER();
 g.save();g.fillStyle='rgba(255,255,255,.12)';g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=2.5;g.setLineDash([10,7]);g.beginPath();g.ellipse(ax,ay,rx,ry,0,0,7);g.fill();g.stroke();
 if(d.mn){g.setLineDash([]);g.fillStyle='rgba(255,80,80,.22)';g.beginPath();g.ellipse(ax,ay,d.mn*TW*ER(),d.mn*TH*ER(),0,0,7);g.fill()}g.restore()}catch(e){}}})();


/* iconos del login */
try{const f=document.querySelectorAll('#auth .afld i');['user','lock','key'].forEach((k,n)=>{if(f[n])f[n].innerHTML=BRI[k]})}catch(e){}
/* ===== v75 BASE RUSH: tema neón, racha diaria, premios de liga, objetivos, ambiente ===== */
(function(){
const st=document.createElement('style');st.id='brcss';st.textContent=":root{--nb-bg:#070b14;--nb-pan:#0e1523;--nb-pan2:#141e32;--nb-bd:#ffb02047;--nb-amb:#ffb020;--nb-cy:#3de0ff;--nb-pu:#b07bff;--nb-gr:#35e08a;--nb-rd:#ff4d5e;--nb-tx:#e9eefc;--nb-mut:#8a97b4;--bg:#070b14;--line:#ffb02066;--ink:#e9eefc}\nhtml,body{font-family:'Baloo 2',system-ui,-apple-system,sans-serif!important}\nbody{background:radial-gradient(120% 70% at 50% 0,#14213f 0,#070b14 62%)!important;color:var(--nb-tx)!important;font-weight:600;text-shadow:none!important;letter-spacing:.2px}\nbutton,input,select,textarea{font-family:'Baloo 2',system-ui,sans-serif!important}\n.bri{width:1.25em;height:1.25em;display:block;filter:drop-shadow(0 0 5px currentColor)}\ncanvas#c{border:1px solid #ffb02040!important;border-radius:18px;box-shadow:0 0 0 1px #000,0 0 28px -6px #3de0ff55,inset 0 0 40px #000a;background:#0c1a26!important}\n/* ---- botones: cristal oscuro + ne\u00f3n del color de cada bot\u00f3n ---- */\nbutton{background:linear-gradient(180deg,#1b2740,#0f1729)!important;border:1.5px solid var(--c2,#3f94ea)!important;border-radius:14px!important;color:#fff!important;text-shadow:none!important;font-weight:700;letter-spacing:.6px;\n box-shadow:0 0 14px -4px var(--c2,#3f94ea),inset 0 1px 0 #ffffff26,inset 0 -10px 18px -12px var(--c2,#3f94ea)!important;transition:transform .08s,box-shadow .15s,filter .15s!important}\nbutton:hover:not(:disabled){box-shadow:0 0 20px -2px var(--c2,#3f94ea),inset 0 1px 0 #ffffff33,inset 0 -10px 18px -10px var(--c2,#3f94ea)!important}\nbutton:active:not(:disabled){transform:scale(.96)!important;filter:brightness(1.25)!important}\nbutton:disabled{opacity:.45!important;filter:grayscale(.8)!important;box-shadow:none!important;border-color:#3a455e!important}\nbutton small{text-shadow:none!important;color:#b9c4e0;font-weight:600}\nbutton.atk,.okb,button[data-m=1],button.okb{background:linear-gradient(180deg,var(--c1,#ffc24a),var(--c3,#e58308))!important;border-color:#ffe3a0!important;color:#1a1204!important;box-shadow:0 0 22px -2px var(--c2,#ffb020),inset 0 1px 0 #fff9!important;text-shadow:none!important}\nbutton.atk small,.okb small{color:#3a2604}\nbutton.cx,button[data-m2=close],button[data-sc=close],button[data-tc=close],button[data-oa=close],button[data-aa=close],button[data-x=1],button[data-no=1]{border-radius:12px!important}\n/* ---- HUD ---- */\n#top{gap:7px!important;align-items:center}\n#top span.pill{height:38px!important;margin-left:0!important;padding:3px 12px 3px 46px!important;background:linear-gradient(180deg,#141e34f2,#0a1120f2)!important;border:1px solid #ffffff1c!important;border-radius:13px!important;box-shadow:0 4px 14px #0009,inset 0 1px 0 #ffffff14!important;backdrop-filter:blur(6px);font-family:'Lilita One',system-ui,sans-serif!important;font-weight:700;font-size:12px!important;letter-spacing:.4px;color:#fff;min-width:0}\n#top span.pill.gold,#top span.pill.elx{min-width:132px!important;flex:1 1 132px;max-width:190px}\n#top span.pill em{left:5px!important;top:50%!important;width:30px!important;height:30px!important;border-radius:9px!important;border:1px solid currentColor!important;background:#ffffff0d!important;box-shadow:0 0 12px -2px currentColor,inset 0 0 8px #ffffff10!important;font-size:0!important;color:#fff}\n#top span.pill em .bri{width:19px;height:19px}\n#top .pill.gold{border-color:#ffb02040!important}#top .pill.gold em{color:#ffb020;background:#ffb02018!important}\n#top .pill.elx{border-color:#b07bff40!important}#top .pill.elx em{color:#c78bff;background:#b07bff18!important}\n#top .pill.tro em{color:#ffd166;background:#ffd16618!important}\n#top .pill.gem em{color:#35e08a;background:#35e08a18!important}\n#top .pill.bld em{color:#ff9a3d;background:#ff9a3d18!important}\n#top .pill.shd em{color:#4db8ff;background:#4db8ff18!important}\n#top .pill.tim em{color:#9ec9ff;background:#9ec9ff18!important}\n#top .pill.dmg em{color:#ff6a3d;background:#ff6a3d18!important}\n#top .pill .pb{height:4px!important;border-radius:3px!important;background:#ffffff14!important;margin-top:1px}\n#top .pill.gold .pb u{background:linear-gradient(90deg,#ff9a00,#ffd45a)!important;box-shadow:0 0 8px #ffb020}\n#top .pill.elx .pb u{background:linear-gradient(90deg,#8a4dff,#d79bff)!important;box-shadow:0 0 8px #b07bff}\n#top button{min-width:38px!important;min-height:38px!important;padding:0 8px!important;font-size:12px!important;border-radius:12px!important;--c2:#3de0ff}\n#top button.hbg{color:#ffb020!important;margin-left:auto;width:42px;padding:0!important;display:grid;place-items:center;color:#ffb020;--c2:#ffb020}\n#top button.hbg .bri{width:22px;height:22px}\n/* ---- barra inferior ---- */\n.dock.main{position:relative;gap:2px!important;padding:6px 8px 8px!important;background:linear-gradient(180deg,#121c32f5,#080d18f8);border:1px solid #ffb02033;border-radius:22px;box-shadow:0 -6px 30px #0009,0 0 24px -8px #ffb02055,inset 0 1px 0 #ffffff12;justify-content:space-around!important;align-items:flex-end;overflow:visible!important;width:min(100%,460px)}\n.dock.main .db{flex:1 1 0;min-width:0!important;min-height:56px!important;background:transparent!important;border:0!important;box-shadow:none!important;color:#8a97b4!important;font-size:12px!important;font-weight:700;letter-spacing:.8px;gap:2px;border-radius:14px!important}\n.dock.main .db i{font-size:0!important;color:currentColor}.dock.main .db .bri{width:26px;height:26px}\n.dock.main .db[data-tab=shop]{color:#ffb020!important}.dock.main .db[data-ms=1]{color:#3de0ff!important}.dock.main .db[data-l=1]{color:#b07bff!important}\n.dock.main .db:active{transform:scale(.92)!important}\n.dock.main .db.atk{flex:0 0 94px;min-height:78px!important;margin-top:-26px;border-radius:50%!important;width:94px;height:94px;align-self:flex-start;background:radial-gradient(circle at 50% 30%,#ffd978,#ffb020 55%,#e07a00)!important;border:3px solid #0b1020!important;color:#1a1204!important;box-shadow:0 0 0 2px #ffb020,0 0 30px #ffb020aa,0 8px 18px #000a,inset 0 2px 0 #fff9!important;animation:brpulse 2.4s ease-in-out infinite}\n.dock.main .db.atk .bri{width:34px;height:34px;filter:none;color:#2a1700}\n@keyframes brpulse{50%{box-shadow:0 0 0 2px #ffb020,0 0 44px #ffb020,0 8px 18px #000a,inset 0 2px 0 #fff9}}\n.db .dot{background:#ff4d5e!important;border:2px solid #0b1020!important;font-family:'Baloo 2'!important;box-shadow:0 0 10px #ff4d5e}\n.fixbar .db{--c2:#35e08a}\n/* ---- paneles ---- */\n.card{background:linear-gradient(180deg,#131d33f7,#0a101ff9)!important;border:1px solid #ffb02040!important;border-radius:18px!important;box-shadow:0 10px 30px #000a,0 0 22px -8px #ffb02066,inset 0 1px 0 #ffffff14!important;backdrop-filter:blur(8px)}\n.ov{background:radial-gradient(ellipse at 50% 0,#14213ff7 0,#070b14fb 70%)!important}\n#msg{background:radial-gradient(#000a,#000d)!important}\n#msg>div{background:linear-gradient(180deg,#131d33,#0a101f)!important;border:1px solid #ffb02055!important;border-radius:22px!important;box-shadow:0 0 40px -8px #ffb020aa,0 20px 50px #000c,inset 0 1px 0 #ffffff18!important;color:var(--nb-tx)}\n.mbox{background:linear-gradient(180deg,#131d33,#0a101f)!important;border:1px solid #ffb02055!important;border-radius:22px!important;box-shadow:0 0 40px -8px #ffb02088,0 20px 50px #000c!important;max-height:92vh;overflow:auto;min-width:min(92vw,360px);animation:brdrw .25s ease-out}\n@keyframes brdrw{from{transform:translateY(16px) scale(.97);opacity:0}}\n.mbox .hint,.hint,.sm{color:var(--nb-mut)!important}\ninput,.ad input{background:#0a101f!important;border:1px solid #ffffff22!important;border-radius:12px!important;color:#fff!important;box-shadow:inset 0 2px 8px #0008!important}\ninput:focus{outline:none;border-color:#3de0ff!important;box-shadow:0 0 0 3px #3de0ff33,inset 0 2px 8px #0008!important}\ninput[type=range]{accent-color:#ffb020;background:transparent!important;box-shadow:none!important;border:0!important}\n.shc,.tcard,.tc,.ch{border-radius:14px!important}\n.pb{background:#ffffff14!important;border:0!important;border-radius:4px}\n.pb u{border-radius:4px}\n/* tienda / barras antiguas */\n.shbar{background:linear-gradient(180deg,#121c32f8,#070b14)!important;border-top:1px solid #ffb02044!important;box-shadow:0 -8px 24px #000a}\n.shbar span{background:#0a101f!important;border:1px solid #ffb02044!important;border-radius:12px!important;font-family:'Lilita One',system-ui,sans-serif;font-size:13px!important;box-shadow:inset 0 0 12px #0008!important}\n.shh{font-family:'Lilita One',system-ui,sans-serif!important;color:#fff!important;text-shadow:0 0 14px #ffb02088!important}\n/* tarjetas de v73 (rival, comentarios, bloqueo) */\n#mmX,#fbM,#bgate{font-family:'Baloo 2',system-ui,sans-serif!important;background:#030610cc!important;backdrop-filter:blur(4px)}\n#mmX .mc,#fbM .fc,#bgate .fc{background:linear-gradient(180deg,#131d33,#0a101f)!important;border:1px solid #ffb02055!important;border-radius:22px!important;color:var(--nb-tx)!important;box-shadow:0 0 44px -8px #ffb020aa,0 24px 60px #000d,inset 0 1px 0 #ffffff18!important;animation:brdrw .3s}\n#mmX .mt{color:#ffb020!important;font-family:'Lilita One',system-ui,sans-serif;font-size:18px!important;letter-spacing:1px}\n#mmX .mn{color:#fff!important;font-family:'Lilita One',system-ui,sans-serif;font-size:26px!important;text-shadow:0 0 16px #3de0ff66}\n#mmX .ml,#mmX .ms{color:var(--nb-mut)!important;font-family:'Baloo 2',system-ui,sans-serif!important}\n#mmX .mg div,#mmX .mr,#fbM .fh{background:#0a101f!important;border:1px solid #ffffff1a!important;border-radius:14px!important;color:var(--nb-tx);font-family:'Baloo 2',system-ui,sans-serif!important;font-weight:600}\n#mmX .mg small{color:var(--nb-mut)!important}\n#mmX .mb button:first-child{--c2:#ff4d5e}#mmX .mb button{font-family:'Baloo 2',system-ui,sans-serif}\n#fbM .fc h2,#bgate .fc h2,#fbM .fc h3{color:#fff!important;font-family:'Lilita One',system-ui,sans-serif!important;font-size:19px!important;text-shadow:0 0 14px #ffb02066}\n#fbM textarea{background:#0a101f!important;color:#fff!important;border:1px solid #ffffff26!important;border-radius:12px!important;font-family:'Baloo 2',system-ui,sans-serif!important;font-weight:600}\n#fbM .fk button.on{outline:0!important;border-color:#ffb020!important;box-shadow:0 0 18px -2px #ffb020!important;opacity:1}\n#fbM .fh b{color:#3de0ff!important}#bgate .fc p,#fbM .fc p,#fbM .fc div{font-family:'Baloo 2',system-ui,sans-serif!important;color:var(--nb-tx)}\n#fbM .fc .sm,#fbM .fc small{color:var(--nb-mut)!important}\n/* perfil */\n#prfM{background:#030610cc!important;backdrop-filter:blur(4px);font-family:'Baloo 2',system-ui,sans-serif!important}\n#prfM .pw{background:linear-gradient(180deg,#121b2e,#0a101f)!important;border:1px solid #ffb02055!important;border-radius:24px!important;box-shadow:0 0 50px -10px #ffb020aa,0 24px 60px #000d!important}\n#prfM .ph{background:transparent!important;border-bottom:1px solid #ffffff14}\n#prfM .pt{background:#0e1523!important;border:1px solid #ffffff1a!important;border-bottom:0!important;color:var(--nb-mut)!important;font-family:'Lilita One',system-ui,sans-serif!important;font-size:13px!important;letter-spacing:.6px;border-radius:12px 12px 0 0!important}\n#prfM .pt.on,#prfM .pt[aria-selected=true]{background:linear-gradient(180deg,#ffc24a,#f59b00)!important;color:#1a1204!important;border-color:#ffe3a0!important}\n#prfM .px{background:linear-gradient(180deg,#ff6a78,#d62e40)!important;border:1px solid #ff9aa4!important}\n#prfM .pb{background:transparent!important;color:var(--nb-tx)!important}\n#prfM .pc{background:linear-gradient(135deg,#1a2848,#0f1730)!important;border:1px solid #3de0ff40!important;border-radius:18px!important;box-shadow:0 0 22px -10px #3de0ff;text-shadow:none!important}\n#prfM .nm{font-family:'Lilita One',system-ui,sans-serif;font-weight:800;font-size:22px}\n#prfM .xpb{background:#ffffff14!important;border-radius:7px}\n#prfM [class*=sec],#prfM .ps,#prfM .pr{background:#0a101f}\n/* ---- ajustes extra de HUD/bot\u00f3n perfil ---- */\n#top button.prfb{--c2:#ffb020;position:relative}\n/* ---- objetivos / racha ---- */\n#brSide{position:absolute;left:8px;top:calc(104px + env(safe-area-inset-top,0px));z-index:5;display:flex;flex-direction:column;gap:8px;pointer-events:none}\n#brSide button{pointer-events:auto;min-width:46px!important;width:48px;height:48px;min-height:48px!important;padding:0!important;display:grid;place-items:center;border-radius:14px!important;position:relative}\n#brSide button .bri{width:26px;height:26px}\n#brSide .fl{color:#ff8a3d!important;--c2:#ff8a3d}#brSide .fl.rdy{animation:brpulse2 1.6s infinite}\n@keyframes brpulse2{50%{box-shadow:0 0 26px 2px #ff8a3d,inset 0 -10px 18px -10px #ff8a3d!important;transform:scale(1.06)}}\n#brSide .dt{position:absolute;top:-4px;right:-4px;width:14px;height:14px;border-radius:50%;background:#ff4d5e;border:2px solid #0b1020;box-shadow:0 0 8px #ff4d5e}\n#brGoal{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(152px + env(safe-area-inset-bottom,0px));z-index:4;pointer-events:auto;min-width:200px;max-width:min(92%,360px);padding:6px 12px 8px;border-radius:14px;background:linear-gradient(180deg,#141e34e6,#0a1120e6);border:1px solid #3de0ff40;box-shadow:0 0 18px -6px #3de0ff,0 6px 16px #0008;font-size:13px;text-align:center;color:#cfe;font-weight:700;letter-spacing:.5px;cursor:pointer;display:none}\n#brGoal b{color:#ffb020;font-family:'Lilita One',system-ui,sans-serif;font-size:12px}\n#brGoal .gb{height:5px;border-radius:3px;background:#ffffff18;margin-top:5px;overflow:hidden}#brGoal .gb u{display:block;height:100%;background:linear-gradient(90deg,#3de0ff,#8a7bff);box-shadow:0 0 8px #3de0ff;transition:width .6s}\n#skM{position:fixed;inset:0;z-index:13;display:none;align-items:center;justify-content:center;background:#000b;backdrop-filter:blur(4px);padding:10px}\n#skM.on{display:flex}\n#skM .sk{width:min(100%,430px);max-height:94vh;overflow:auto;background:linear-gradient(180deg,#171f33,#0b101e);border:1px solid #ffb02055;border-radius:24px;padding:16px;box-shadow:0 0 50px -10px #ffb020aa,0 24px 60px #000d;animation:brdrw .3s}\n.sk .sh{display:flex;gap:12px;align-items:center}\n.sk .sf{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;color:#ff8a3d;background:#ff8a3d1c;border:1px solid #ff8a3d66;box-shadow:0 0 18px -2px #ff8a3d}.sk .sf .bri{width:28px;height:28px}\n.sk h2{margin:0;font-family:'Lilita One',system-ui,sans-serif;font-size:19px;color:#fff;display:flex;gap:8px;align-items:center;flex-wrap:wrap}\n.sk h2 em{font-style:normal;font-size:11px;color:#ffb020;border:1px solid #ffb02066;border-radius:999px;padding:2px 9px;background:#ffb02014}\n.sk .ss{font-size:13px;color:var(--nb-mut);margin-top:2px;font-weight:600}\n.sk .sx{margin-left:auto;min-width:40px!important;min-height:40px!important;padding:0!important;display:grid;place-items:center}\n.sk .sbig{margin:14px 0 12px;padding:14px;border-radius:18px;background:#0a0f1c;border:1px solid #ffffff14}\n.sk .sbig .r1{display:flex;justify-content:space-between;align-items:flex-end}\n.sk .sbig small{display:block;font-size:11px;letter-spacing:1px;color:var(--nb-mut);font-weight:700}\n.sk .sbig .n{font-family:'Lilita One',system-ui,sans-serif;font-size:34px;font-weight:800;line-height:1}.sk .sbig .n span{font-size:13px;color:#ffb020;margin-left:4px}\n.sk .sbig .t{font-family:'Lilita One',system-ui,sans-serif;color:#ffb020;font-size:18px;font-weight:800;text-align:right}\n.sk .sbig .rw{margin:6px 0 10px;font-size:13px;color:var(--nb-mut)}.sk .sbig .rw b{color:#ffb020}\n.sk .go{width:100%;min-height:54px;font-size:17px;letter-spacing:1px;background:linear-gradient(180deg,#ffc24a,#f59b00)!important;border-color:#ffe3a0!important;color:#1a1204!important;box-shadow:0 0 26px -2px #ffb020,inset 0 1px 0 #fff9!important}\n.sk .go:disabled{background:#1a2338!important;color:#8a97b4!important}\n.sk .pl{display:flex;justify-content:space-between;margin:4px 2px 8px;font-size:13px;font-weight:700;color:var(--nb-mut);letter-spacing:.6px}\n.sk .gr{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}\n.sk .dc{position:relative;aspect-ratio:1/1.05;border-radius:12px;background:#0d1324;border:1px solid #ffffff14;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;font-size:11px;color:var(--nb-mut);font-weight:700}\n.sk .dc b{font-family:'Lilita One',system-ui,sans-serif;font-size:14px;color:#cdd6ee}\n.sk .dc.sp{border-color:#b07bff66;background:linear-gradient(180deg,#1c1535,#0d1324)}.sk .dc.sp b{color:#d7b8ff}\n.sk .dc.dn{border-color:#35e08a55;background:#35e08a10}.sk .dc.dn b{color:#35e08a}.sk .dc .bri{width:15px;height:15px}\n.sk .dc.td{border:1.5px solid #ffb020;box-shadow:0 0 16px -2px #ffb020;background:#ffb0201a;color:#ffd38a}.sk .dc.td b{color:#ffb020}\n/* ---- toast de liga ---- */\n#brLg{white-space:nowrap;position:fixed;left:50%;top:18%;transform:translateX(-50%);z-index:32;pointer-events:none;text-align:center;font-family:'Lilita One',system-ui,sans-serif;animation:vlvl 3.2s both}\n#brLg div{font-size:26px;color:#ffe08a;font-weight:800;text-shadow:0 0 22px #ffb020}#brLg small{display:block;color:#35e08a;font-size:15px;margin-top:4px;text-shadow:0 0 10px #35e08a}\n/* ---- ambiente ---- */\n#brAmb{position:fixed;pointer-events:none;z-index:3;background:transparent!important;border:0!important;border-radius:18px;max-width:none}\n/* ---- login ---- */\n#auth{background:radial-gradient(70% 50% at 50% 0,#1a2d5a 0,transparent 70%),radial-gradient(60% 50% at 100% 100%,#3a1a5a88 0,transparent 70%),#060913!important;overflow:hidden;position:fixed}\n#auth::before{content:\"\";position:absolute;inset:-50% -50% 0;background-image:linear-gradient(#3de0ff22 1px,transparent 1px),linear-gradient(90deg,#3de0ff22 1px,transparent 1px);background-size:48px 48px;transform:perspective(500px) rotateX(62deg) translateY(0);transform-origin:50% 100%;animation:brgrid 5s linear infinite;mask-image:linear-gradient(transparent,#000 70%);-webkit-mask-image:linear-gradient(transparent,#000 70%);pointer-events:none;top:40%}\n@keyframes brgrid{to{background-position:0 48px}}\n#auth::after{content:\"\";position:absolute;width:420px;height:420px;border-radius:50%;left:50%;top:6%;transform:translateX(-50%);background:radial-gradient(#ffb02033,transparent 65%);filter:blur(10px);animation:brorb 6s ease-in-out infinite;pointer-events:none}\n@keyframes brorb{50%{transform:translateX(-50%) scale(1.15);opacity:.7}}\n#auth>div.acard{position:relative;z-index:2;width:min(92vw,380px);background:linear-gradient(180deg,#121a2cdd,#0a0f1ce8)!important;border:1px solid #ffb02044!important;border-radius:26px!important;box-shadow:0 0 60px -10px #ffb020aa,0 30px 70px #000d,inset 0 1px 0 #ffffff1a!important;padding:22px 20px 18px!important;backdrop-filter:blur(10px);display:flex;flex-direction:column;gap:10px;animation:brdrw .6s cubic-bezier(.2,1.2,.4,1)}\n.alogo{width:76px;height:76px;margin:0 auto -2px;display:grid;place-items:center;position:relative;color:#ffb020;filter:drop-shadow(0 0 14px #ffb020)}\n.alogo svg{width:100%;height:100%}.alogo .ring{transform-origin:50% 50%;animation:brspin 9s linear infinite}\n@keyframes brspin{to{transform:rotate(360deg)}}\n#auth h1.abrand{margin:0;text-align:center;font-family:'Lilita One',system-ui,sans-serif;font-weight:900;font-size:36px;letter-spacing:3px;color:#fff;line-height:1;text-shadow:0 0 20px #ffb02088}\n#auth h1.abrand span{background:linear-gradient(90deg,#ffb020,#ff6a3d);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none;filter:drop-shadow(0 0 10px #ffb02088)}\n#auth .atag{margin:0 0 4px;text-align:center;color:var(--nb-mut);font-size:14px;letter-spacing:2px;font-weight:600;text-transform:uppercase}\n#auth .atabs{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:4px;border-radius:14px;background:#060a14;border:1px solid #ffffff14}\n#auth .atabs button{min-height:38px!important;border:0!important;background:transparent!important;box-shadow:none!important;color:var(--nb-mut)!important;border-radius:10px!important;font-size:15px}\n#auth .atabs button.on{background:linear-gradient(180deg,#ffc24a,#f59b00)!important;color:#1a1204!important;box-shadow:0 0 16px -2px #ffb020!important}\n#auth .afld{display:flex;align-items:center;gap:10px;padding:0 12px;border-radius:14px;background:#0a101f;border:1px solid #ffffff1f;transition:.15s}\n#auth .afld:focus-within{border-color:#3de0ff;box-shadow:0 0 0 3px #3de0ff2a}\n#auth .afld i{color:var(--nb-mut);display:grid}#auth .afld i .bri{width:20px;height:20px;filter:none}\n#auth .afld:focus-within i{color:#3de0ff}\n#auth .afld input{flex:1;min-width:0;border:0!important;background:transparent!important;box-shadow:none!important;padding:14px 0!important;font-size:17px!important;width:auto!important;margin:0!important;outline:none!important}\n#auth .acode{display:none}#auth.reg .acode{display:flex}\n#auth #ar{display:none}#auth.reg #ar{display:block}#auth.reg #al{display:none}\n#auth .acta{width:100%;min-height:54px;font-size:18px;letter-spacing:1.5px;background:linear-gradient(180deg,#ffc24a,#f59b00)!important;border-color:#ffe3a0!important;color:#1a1204!important;box-shadow:0 0 28px -2px #ffb020,inset 0 1px 0 #fff9!important;margin-top:4px;animation:brpulse3 2.6s infinite}\n@keyframes brpulse3{50%{box-shadow:0 0 40px 0 #ffb020,inset 0 1px 0 #fff9}}\n#auth #am{min-height:18px;text-align:center;color:#ff7a88!important;font-size:14px}\n#auth .afoot{display:flex;justify-content:center;gap:8px;align-items:center;font-size:12px;color:var(--nb-mut);letter-spacing:1px}\n#auth .afoot .bt{color:#3de0ff;border:1px solid #3de0ff66;border-radius:999px;padding:2px 10px;background:#3de0ff12;font-weight:700}\n#abeta{text-align:center;font-size:13px;color:var(--nb-mut)}\n/* ---- carga ---- */\n#ldg{background:radial-gradient(70% 50% at 50% 30%,#1a2d5a 0,transparent 70%),#060913!important}\n#ldg .st{opacity:.6}\n#ldg h1{font-family:'Lilita One',system-ui,sans-serif!important;font-weight:900!important;letter-spacing:4px!important;color:#fff!important;text-shadow:0 0 24px #ffb02099!important}\n#ldg h1 span{background:linear-gradient(90deg,#ffb020,#ff6a3d);-webkit-background-clip:text;background-clip:text;color:transparent}\n#ldg .bar{border:1px solid #ffb02055!important;background:#0a0f1c!important;height:10px!important;box-shadow:0 0 16px -4px #ffb020!important}\n#ldg .bar b{background:linear-gradient(90deg,#ff9a00,#ffd45a)!important;box-shadow:0 0 14px #ffb020!important}\n#ldg .alogo{width:120px;height:120px;margin:0}\n#ldg .msg,#ldg .tip,#ldg .snd{color:var(--nb-mut)!important;font-weight:600}\n@media (prefers-reduced-motion:reduce){#auth::before,#auth::after,.alogo .ring,.dock.main .db.atk,#auth .acta{animation:none!important}}\n\n/* ---- men\u00fa lateral ---- */\n#menu{display:none;background:#02050ecc!important;backdrop-filter:blur(3px);justify-content:flex-end!important;align-items:stretch!important;z-index:20!important}\n.mdr{position:absolute;top:0;right:0;bottom:0;width:min(88vw,360px);display:flex;flex-direction:column;background:linear-gradient(180deg,#0f1626,#080c16);border-left:1px solid #ffb02044;box-shadow:-20px 0 60px #000c,-2px 0 24px -6px #ffb02066;animation:brslide .28s cubic-bezier(.2,.9,.3,1);padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n@keyframes brslide{from{transform:translateX(100%)}}\n.mhd{display:flex;align-items:center;gap:10px;padding:14px 14px 10px;border-bottom:1px solid #ffffff12}\n.mhd b{font-family:'Lilita One',system-ui,sans-serif;font-size:17px;letter-spacing:2px;color:#fff}.mhd b em{font-style:normal;color:#ffb020}\n.mlg{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;border:1.5px solid #ffb020;color:#ffb020;font-family:'Lilita One',system-ui,sans-serif;font-weight:900;box-shadow:0 0 14px -2px #ffb020}\n.mhd .mx,.mhd .mbk{min-width:38px!important;min-height:38px!important;width:38px;padding:0!important;display:grid;place-items:center;border-radius:11px!important;background:transparent!important;border:1px solid #ffffff1f!important;box-shadow:none!important;color:#cfd8f0!important}\n.mhd .mx{margin-left:auto}.mhd .mx .bri,.mhd .mbk .bri{width:20px;height:20px;filter:none}\n.mbd{flex:1;overflow:auto;padding:6px 12px 12px;display:flex;flex-direction:column;gap:6px}\n.ms{margin:14px 6px 4px;font-size:11px;letter-spacing:1.6px;color:#6f7c99;font-weight:700}\n.mr{display:flex!important;align-items:center;gap:12px;width:100%;min-height:52px!important;padding:8px 12px!important;text-align:left;justify-content:flex-start;background:#0e1523!important;border:1px solid #ffffff12!important;border-radius:14px!important;box-shadow:none!important;color:#e9eefc!important;font-size:16px!important;font-weight:600;letter-spacing:.2px}\n.mr:hover,.mr:active{background:#161f34!important;border-color:#ffb02055!important}\n.mr .mi{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;background:#ffffff0a;color:#ffb020}.mr .mi .bri{width:19px;height:19px}\n.mr .mt{flex:1}.mr .mt small{display:block;font-size:12px;color:#6f7c99;font-weight:500;margin-top:1px}\n.mr .mc{color:#5a6684;display:grid}.mr .mc .bri{width:16px;height:16px;filter:none}\n.mdot{width:9px;height:9px;border-radius:50%;background:#ff4d5e;box-shadow:0 0 8px #ff4d5e}\n.mr.tg .sw{width:44px;height:26px;border-radius:13px;background:#1b2438;border:1px solid #ffffff22;position:relative;flex:none;transition:.2s}\n.mr.tg .sw i{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#7d89a6;transition:.2s}\n.mr.tg.on .sw{background:#ffb02033;border-color:#ffb020;box-shadow:0 0 12px -2px #ffb020}.mr.tg.on .sw i{left:20px;background:#ffb020;box-shadow:0 0 8px #ffb020}\n.sg{display:flex;gap:6px;flex-wrap:wrap}\n.sg button{flex:1 1 0;min-width:64px!important;min-height:44px!important;background:#0e1523!important;border:1px solid #ffffff1c!important;box-shadow:none!important;color:#aab5d0!important;border-radius:12px!important}\n.sg button.on{background:linear-gradient(180deg,#ffc24a,#f59b00)!important;border-color:#ffe3a0!important;color:#1a1204!important;box-shadow:0 0 16px -2px #ffb020!important}\n.slr{background:#0e1523;border:1px solid #ffffff12;border-radius:14px;padding:10px 12px}\n.slh{display:flex;align-items:center;gap:10px;font-size:15px;margin-bottom:8px}.slh b{margin-left:auto;font-family:'Lilita One',system-ui,sans-serif;font-size:12px;color:#ffb020}\n.slh .mi{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;background:#ffffff0a;color:#ffb020}.slh .mi .bri{width:17px;height:17px}\n.mft{padding:10px 12px 12px;border-top:1px solid #ffffff12;display:flex;flex-direction:column;gap:8px}\n.mout{display:flex!important;align-items:center;justify-content:center;gap:10px;width:100%;min-height:50px!important;background:#0e1523!important;border:1px solid #ff4d5e66!important;color:#ff7a88!important;border-radius:14px!important;box-shadow:none!important;font-size:16px!important}\n.mout .bri{width:20px;height:20px;filter:none}.mout:active{background:#2a1119!important}\n.mv{text-align:center;font-size:11px;letter-spacing:1px;color:#56627f}\n/* ---- barra inferior: 5 espacios sim\u00e9tricos ---- */\n.dock.main .db.sp{visibility:hidden;pointer-events:none}\n.dock.main .db[data-sl]{color:#ff5fb0!important}\n#slotBtn{display:none!important}\n.fixbar,[data-rep],[data-fix]{display:none!important}\n/* ---- horizontal ---- */\nbody.land #panel{left:0!important;right:0!important;width:auto!important;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}\nbody.land .dock.main{position:relative!important;display:flex!important;width:min(100%,540px)!important;padding:4px 8px 6px!important;border-radius:18px;gap:0!important}\nbody.land .dock.main .db{position:static!important;flex:1 1 0!important;width:auto!important;height:auto!important;min-height:46px!important;min-width:0!important;font-size:11px!important;padding:2px!important;margin:0!important;left:auto!important;right:auto!important;bottom:auto!important}\nbody.land .dock.main .db .bri{width:22px;height:22px}\nbody.land .dock.main .db.atk{flex:0 0 74px!important;width:74px!important;height:74px!important;min-height:74px!important;margin-top:-22px!important;order:0!important;border-radius:50%!important;font-size:12px!important}\nbody.land .dock.main .db.atk .bri{width:28px;height:28px}\nbody.land #top span.pill{height:32px!important;padding-left:40px!important;font-size:11px!important}\nbody.land #top span.pill em{width:26px!important;height:26px!important}\nbody.land #brSide{top:calc(54px + env(safe-area-inset-top,0px))}\nbody.land #brGoal{bottom:calc(92px + env(safe-area-inset-bottom,0px));left:calc(50% - 0px)}\n@media (max-height:480px){.mdr{width:min(60vw,360px)}.mhd{padding:8px 12px}.mr{min-height:44px!important}#skM .sk{max-height:98vh}}\n.mbd>*{flex:none!important}\n/* ===== v78: HUD horizontal estilo CoC (compacto, esquinas) ===== */\nbody.land #top{position:fixed!important;inset:0!important;pointer-events:none;display:block!important;padding:0!important;height:auto!important}\nbody.land #top>*{pointer-events:auto}\nbody.land #top span.pill{position:fixed!important;height:26px!important;padding:2px 8px 2px 34px!important;font-size:10.5px!important;border-radius:10px!important;margin:0!important;display:flex!important;flex-direction:column;justify-content:center;min-width:0!important}\nbody.land #top span.pill em{width:22px!important;height:22px!important;left:3px!important;border-radius:7px!important}\nbody.land #top span.pill em .bri{width:14px;height:14px}\nbody.land #top span.pill .pb{height:3px!important}\nbody.land #top span.pill.gold,body.land #top span.pill.elx{width:150px!important;max-width:150px!important;flex:none!important;right:8px;left:auto!important}\nbody.land #top span.pill.gold{top:calc(8px + env(safe-area-inset-top,0px))!important}\nbody.land #top span.pill.elx{top:calc(38px + env(safe-area-inset-top,0px))!important}\nbody.land #top span.pill.gem{top:calc(68px + env(safe-area-inset-top,0px))!important;right:8px;left:auto!important;width:150px!important}\nbody.land #top span.pill.tro{top:calc(8px + env(safe-area-inset-top,0px))!important;left:54px!important;width:auto!important;min-width:70px!important}\nbody.land #top span.pill.bld{bottom:calc(10px + env(safe-area-inset-bottom,0px))!important;top:auto!important;right:8px;left:auto!important;width:auto!important}\nbody.land #top button.hbg{position:fixed!important;left:8px;top:calc(8px + env(safe-area-inset-top,0px));width:38px!important;min-width:38px!important;min-height:38px!important;margin:0!important}\nbody.land #top span.pill:not(.gold):not(.elx):not(.gem):not(.tro):not(.bld){display:none!important}\nbody.land #brSide{top:calc(54px + env(safe-area-inset-top,0px));left:8px}\nbody.land #panel{align-items:stretch!important;justify-content:flex-end!important;pointer-events:none}\nbody.land #panel>*{pointer-events:auto}\nbody.land .dock.main{position:fixed!important;left:0!important;right:0!important;bottom:0!important;width:auto!important;background:none!important;border:0!important;box-shadow:none!important;padding:0!important;pointer-events:none}\nbody.land .dock.main .db{pointer-events:auto;position:fixed!important;flex:none!important;width:58px!important;min-height:52px!important;height:52px!important;bottom:calc(10px + env(safe-area-inset-bottom,0px))!important;background:linear-gradient(180deg,#141e34f2,#0a1120f2)!important;border:1px solid #ffffff22!important;border-radius:14px!important;margin:0!important}\nbody.land .dock.main .db.atk{left:12px!important;right:auto!important;width:84px!important;height:84px!important;min-height:84px!important;border-radius:50%!important;margin:0!important;bottom:calc(10px + env(safe-area-inset-bottom,0px))!important}\nbody.land .dock.main .db:not(.atk):nth-of-type(1){right:calc(8px + 90px)!important;left:auto!important}\nbody.land .dock.main .db:not(.atk):nth-of-type(2){right:calc(8px + 154px)!important;left:auto!important}\nbody.land .dock.main .db:not(.atk):nth-of-type(4){right:calc(8px + 218px)!important;left:auto!important}\nbody.land .dock.main .db:not(.atk):nth-of-type(5){right:calc(8px + 282px)!important;left:auto!important}\nbody.land #brGoal{bottom:calc(100px + env(safe-area-inset-bottom,0px));left:12px}\nbody.land .dock.main .db.atk{background:radial-gradient(circle at 50% 35%,#ffd45a,#ff9a00 70%,#c76a00)!important;border:2px solid #fff5!important;box-shadow:0 0 22px #ffb02099!important;color:#1a0f00!important}\nbody.land #brGoal{left:108px!important;transform:none!important;bottom:calc(22px + env(safe-area-inset-bottom,0px))!important;max-width:34vw}\n/* v80: columna izquierda ordenada en horizontal (menu / perfil / admin / racha) */\nbody.land #top button.prfb{position:fixed!important;left:8px!important;top:calc(52px + env(safe-area-inset-top,0px))!important;right:auto!important;margin:0!important;width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;padding:0!important;z-index:6}\nbody.land #top button[data-adm]{position:fixed!important;left:56px!important;top:calc(52px + env(safe-area-inset-top,0px))!important;right:auto!important;margin:0!important;width:38px!important;height:38px!important;min-width:38px!important;min-height:38px!important;padding:0!important;font-size:18px!important;z-index:6}\nbody.land #brSide{top:calc(98px + env(safe-area-inset-top,0px))!important;left:8px!important}\n";document.head.appendChild(st);
const $=id=>document.getElementById(id);
const RM=(()=>{try{return matchMedia('(prefers-reduced-motion:reduce)').matches}catch(e){return false}})();
const ONLN=()=>typeof sb!='undefined'&&sb&&typeof ME!='undefined'&&ME&&!OFFLINE;
const el=(tag,id,cls)=>{const d=document.createElement(tag);if(id)d.id=id;if(cls)d.className=cls;return d};
const tutDone=()=>{try{return typeof TUTS=='undefined'||(S.tut||0)>=TUTS.length}catch(e){return true}};
/* ---- login: pestañas ---- */
(function(){const a=$('auth');if(!a)return;const set=r=>{a.classList.toggle('reg',r);$('atl').classList.toggle('on',!r);$('atr').classList.toggle('on',r);$('am').textContent=''};
 $('atl').onclick=()=>set(0);$('atr').onclick=()=>set(1);
 ['au','ap','ac'].forEach((id,i,ar)=>{$(id).addEventListener('keydown',e=>{if(e.key=='Enter'){e.preventDefault();(a.classList.contains('reg')?$('ar'):$('al')).click()}})})})();
/* ---- racha diaria ---- */
const SKRW=d=>({g:d%7==0?1500:300+d*40,e:d%7==0?1500:300+d*40,gm:d==30?100:d%7==0?20:d%3==0?5:2});
const dayKey=()=>new Date(typeof TNOW=='function'?TNOW():Date.now()).toISOString().slice(0,10);
const dayMinus=(k,n)=>new Date(Date.parse(k)-n*864e5).toISOString().slice(0,10);
let SK=null;
function skLocal(){const td=dayKey(),s=S&&S.sk;let cur=0;if(s&&(s.d==td||s.d==dayMinus(td,1)))cur=s.n|0;const can=!(s&&s.d==td);return{streak:cur,can,next:cur>=30?1:cur+1,total:(s&&s.t)|0,rw:SKRW(cur>=30?1:cur+1)}}
async function skLoad(){try{if(ONLN()){const r=await sb.rpc('streak_state');SK=(!r.error&&r.data)?r.data:null}else if(typeof S!='undefined'&&S&&S.b)SK=skLocal()}catch(e){SK=null}skBtn()}
async function skClaim(){if(!SK||!SK.can)return;let rw,day;
 if(ONLN()){const r=await sb.rpc('streak_claim');if(r.error||!r.data){try{snd('deny')}catch(e){}$('skM').querySelector('.go').textContent=(r.error&&r.error.message)||'Error';return}day=r.data.day;rw=r.data.rw;S.gem=r.data.gems}
 else{const td=dayKey(),l=skLocal();day=l.next;rw=SKRW(day);S.gem=(S.gem|0)+rw.gm;S.sk={d:td,n:day,t:l.total+1}}
 S.g=Math.min(cap.g(),S.g+rw.g);S.e=Math.min(cap.e(),S.e+rw.e);try{save();ui()}catch(e){}
 try{snd(990)}catch(e){}
 if(window.__juice){const r=$('skM').querySelector('.sk').getBoundingClientRect();window.__juice.spark(r.left+r.width/2,r.top+160,40,'#ffb020');window.__juice.confetti($('skM').querySelector('.sk'),day%7==0)}
 await skLoad();skDraw(day,rw)}
function skDraw(just,rw){const m=$('skM');if(!m||!SK)return;const cur=just||SK.streak,nx=SK.next,rr=SK.rw||SKRW(nx);
 let cells='';for(let d=1;d<=30;d++){const sp=d%7==0||d==30,dn=d<=SK.streak&&!(SK.can&&false),td=SK.can&&d==nx;cells+=`<div class="dc${sp?' sp':''}${dn?' dn':''}${td?' td':''}"><span>D${d}</span><b>${SKRW(d).gm}</b>${dn?BRI.chk:sp?BRI.box:BRI.gm}</div>`}
 m.innerHTML=`<div class=sk><div class=sh><div class=sf>${BRI.flame}</div><div><h2>Racha diaria <em>30 DÍAS</em></h2><div class=ss>Entra todos los días para multiplicar tus recompensas</div></div><button class=sx data-sk=x aria-label="Cerrar">${BRI.x}</button></div>
 <div class=sbig><div class=r1><div><small>DÍA</small><div class=n>${SK.streak}<span>/ 30 días seguidos</span></div></div><div><small style="text-align:right">RECLAMADOS</small><div class=t>${SK.total|0}</div></div></div>
 <div class=rw>${rw?'¡Recompensa recibida! ':''}Recompensa del día ${nx}: <b>+${rr.g} 🪙 +${rr.e} 💧 +${rr.gm} 💎</b></div>
 <button class=go data-sk=go ${SK.can?'':'disabled'}>${SK.can?'Reclamar día '+nx:'Vuelve mañana por el día '+nx}</button></div>
 <div class=pl><span>PLAN DE 30 DÍAS</span><span>💎 gemas por día</span></div><div class=gr>${cells}</div></div>`}
function skOpen(){if(!SK)return;skDraw();$('skM').classList.add('on')}
(function(){const m=el('div','skM');document.body.appendChild(m);m.addEventListener('click',e=>{if(e.target===m){m.classList.remove('on');return}const b=e.target.closest('[data-sk]');if(!b)return;if(b.dataset.sk=='x')m.classList.remove('on');else if(b.dataset.sk=='go')skClaim()})})();
/* botones laterales + objetivo */
const side=el('div','brSide');document.body.appendChild(side);
side.innerHTML=`<button class=fl id=brFl data-br=sk aria-label="Racha diaria">${BRI.flame}<i class=dt style="display:none"></i></button>`;
side.addEventListener('click',e=>{if(e.target.closest('[data-br=sk]')){try{snd('open')}catch(x){}skOpen()}});
function skBtn(){const b=$('brFl');if(!b)return;const vis=!!SK&&typeof mode!='undefined'&&mode=='v';b.style.display=vis?'':'none';b.classList.toggle('rdy',!!(SK&&SK.can));b.querySelector('.dt').style.display=SK&&SK.can?'':'none'}
const goal=el('div','brGoal');document.body.appendChild(goal);
goal.onclick=()=>{try{const g=goal.dataset.go;if(g=='sk')skOpen();else if(typeof showMissions=='function')showMissions()}catch(e){}};
const LG=()=>(typeof LEAGUES!='undefined')?LEAGUES:[[0,'Sin liga']];
function goalDraw(){try{const ok=typeof mode!='undefined'&&mode=='v'&&S&&S.b&&tutDone()&&!UI.shop&&!UI.train&&!UI.lab&&!sel&&!pk&&!(document.getElementById('msg').classList.contains('on'));
 if(!ok){goal.style.display='none';return}
 let h='',go='';
 if(SK&&SK.can){h=`🔥 <b>Racha diaria lista</b> · toca para reclamar`;go='sk'}
 else{const t=S.tr|0,L=LG();let nx=null;for(const l of L)if(l[0]>t){nx=l;break}
  if(nx){const cur=[...L].reverse().find(l=>l[0]<=t)||L[0],p=Math.max(0,Math.min(1,(t-cur[0])/(nx[0]-cur[0])));h=`Te faltan <b>${nx[0]-t}</b> 🏆 para ${nx[1]}<div class=gb><u style="width:${(p*100)|0}%"></u></div>`}
  else h='👑 <b>Liga máxima</b> · sigue defendiendo tu trono'}
 if(h!==goal._h){goal.innerHTML=h;goal._h=h}goal.dataset.go=go;goal.style.display='block'}catch(e){goal.style.display='none'}}
/* ---- premios de liga ---- */
const LGRW=[0,10,20,35,50,75,100,150,250];let lgBusy=0,lgLast=-1;
function lgIdx(t){let r=0;LG().forEach((l,i)=>{if((t|0)>=l[0])r=i});return r}
async function lgCheck(){if(lgBusy||!S||!S.b)return;const i=lgIdx(S.tr);if(i===lgLast)return;lgBusy=1;
 try{let gain=0;
  if(ONLN()){const r=await sb.rpc('league_claim');if(!r.error&&r.data){gain=r.data.gain|0;if(gain>0)S.gem=r.data.gems}else{lgBusy=0;return}}
  else{const c=S.lgc||0;for(let k=c+1;k<=i;k++)gain+=LGRW[k]|0;if(i>c){S.lgc=i;S.gem=(S.gem|0)+gain}}
  lgLast=i;
  if(gain>0){const d=el('div','brLg');d.innerHTML=`<div>${LG()[i][2]||''} LIGA ${String(LG()[i][1]).toUpperCase()}</div><small>+${gain} 💎 de recompensa</small>`;document.body.appendChild(d);setTimeout(()=>d.remove(),3300);try{snd(990)}catch(e){}if(window.__juice)window.__juice.spark(innerWidth/2,innerHeight*.22,36,'#ffd24a');try{ui();save()}catch(e){}}
 }catch(e){}lgBusy=0}
/* ---- ambiente: motas de luz, ondas al tocar, chispas de obra ---- */
const amb=el('canvas','brAmb');document.body.appendChild(amb);const ac=amb.getContext('2d');
let motes=[];const MN=()=>{try{return !BRFX.amb||GFX=='low'?0:GFX=='mid'?9:16}catch(e){return 10}};
function ambInit(){const n=MN();motes=[];for(let i=0;i<n;i++)motes.push({x:Math.random(),y:Math.random(),r:1+Math.random()*2.2,s:.01+Math.random()*.02,p:Math.random()*6.28,c:i%3==0?'61,224,255':'255,176,32'})}
let ripples=[],lastA=0;
function ambFrame(t){requestAnimationFrame(ambFrame);if(RM||document.hidden)return;if(t-lastA<33)return;const dt=(t-lastA)/1000;lastA=t;
 const v=typeof mode!='undefined'&&mode=='v'&&typeof cv!='undefined';if(!v){if(amb.width)ac.clearRect(0,0,amb.width,amb.height);return}
 const r=cv.getBoundingClientRect();if(amb.width!==Math.round(r.width)||amb.height!==Math.round(r.height)){amb.width=Math.round(r.width);amb.height=Math.round(r.height);ambInit()}
 amb.style.left=r.left+'px';amb.style.top=r.top+'px';amb.style.width=r.width+'px';amb.style.height=r.height+'px';
 ac.clearRect(0,0,amb.width,amb.height);if(motes.length!=MN())ambInit();
 for(const m of motes){m.p+=dt*1.2;m.y-=m.s*dt*3;m.x+=Math.sin(m.p)*.0006;if(m.y<-.05){m.y=1.05;m.x=Math.random()}const a=.25+.35*Math.sin(m.p*1.7)**2;ac.fillStyle=`rgba(${m.c},${a})`;ac.shadowColor=`rgba(${m.c},.9)`;ac.shadowBlur=8;ac.beginPath();ac.arc(m.x*amb.width,m.y*amb.height,m.r,0,6.283);ac.fill()}
 ac.shadowBlur=0;
 ripples=ripples.filter(p=>(p.t+=dt)<.55);for(const p of ripples){const k=p.t/.55;ac.strokeStyle=`rgba(61,224,255,${.7*(1-k)})`;ac.lineWidth=2.5*(1-k)+.5;ac.beginPath();ac.arc(p.x,p.y,8+k*34,0,6.283);ac.stroke()}}
requestAnimationFrame(ambFrame);
document.addEventListener('pointerdown',e=>{try{if(typeof mode=='undefined'||mode!='v'||e.target!==cv||RM||!BRFX.rip)return;const r=cv.getBoundingClientRect();ripples.push({x:e.clientX-r.left,y:e.clientY-r.top,t:0})}catch(x){}},true);
/* chispas de martillo sobre obras en curso (máx. 3 a la vez) */
function cscr(b){try{const d=TY[b.t],c=P(b.x+d.s/2,b.y+d.s/2,d.h*.45),r=cv.getBoundingClientRect(),k=r.width/cv.width;return[r.left+(c[0]*cam.z+cam.x)*k,r.top+(c[1]*cam.z+cam.y)*k]}catch(e){return null}}
setInterval(()=>{try{if(typeof mode=='undefined'||mode!='v'||document.hidden||RM||!window.__juice||!window.__juice.scr)return;if(GFX=='low')return;let n=0;for(const b of S.b){if(!(b.up>0)||b.t=='wall'||!b.t)continue;if(n++>=3)break;const p=cscr(b);if(!p||p[0]<0||p[1]<0||p[0]>innerWidth||p[1]>innerHeight)continue;window.__juice.spark(p[0]+(Math.random()-.5)*16,p[1]+8,4,'#ffb020')}}catch(e){}},900);
/* ---- menú lateral con categorías ---- */
const MN_={cat:null};
const row=(ic,txt,attr,extra)=>`<button class=mr ${attr}><span class=mi>${BRI[ic]}</span><span class=mt>${txt}</span>${extra||''}<span class=mc>${BRI.chev}</span></button>`;
const sw=(k,txt,sub)=>`<button class="mr tg${BRFX[k]?' on':''}" data-fx=${k}><span class=mt>${txt}${sub?`<small>${sub}</small>`:''}</span><span class=sw><i></i></span></button>`;
const seg=(attr,list,cur)=>`<div class=sg>${list.map(([k,n])=>`<button ${attr}=${k} class="${String(cur)==String(k)?'on':''}">${n}</button>`).join('')}</div>`;
const sl=(ic,txt,key,v)=>`<div class=slr><div class=slh><span class=mi>${BRI[ic]}</span>${txt}<b>${Math.round(v*100)}%</b></div><input type=range min=0 max=100 value=${Math.round(v*100)} data-vol=${key}></div>`;
const TITLES={aud:'Audio',gfx:'Gráficos',fx:'Efectos visuales',scr:'Pantalla'};
menuDraw=function(){let body='';const c=MN_.cat;
 if(!c){body=`<div class=ms>CUENTA</div>${OFFLINE?'':row('user','Mi perfil','data-m3=prf')}${SK?row('flame','Racha diaria','data-m3=sk',SK.can?'<i class=mdot></i>':''):''}${OFFLINE?'':row('chat','Enviar comentarios','data-m2=fb')}
  <div class=ms>BATALLA</div>${OFFLINE?'':row('atk','Historial y venganza','data-m3=hist')}
  <div class=ms>AJUSTES</div>${row('vol','Audio','data-cat=aud')}${row('gfx','Gráficos','data-cat=gfx')}${row('fx','Efectos visuales','data-cat=fx')}${row('scr','Pantalla','data-cat=scr')}
  <div class=ms>AYUDA</div>${row('help','Repetir tutorial','data-m2=tut')}`}
 else if(c=='aud')body=`${sl('vol','Música','mus',MV)}${sl('vol','Efectos de sonido','sfx',SV)}<button class="mr tg${MUTE?'':' on'}" data-m2=snd><span class=mt>Sonido general</span><span class=sw><i></i></span></button>`;
 else if(c=='gfx')body=`<div class=ms>CALIDAD GRÁFICA</div>${seg('data-g',[['low','Bajo'],['mid','Medio'],['high','Alto']],GFX)}<div class=ms>FPS MÁXIMOS</div>${seg('data-fps',[[20,'20'],[30,'30'],[60,'60'],[0,'Sin límite']],GFPS)}<div class=hint>Bajo o Medio mejoran el rendimiento en móviles lentos. Alto y Sin límite son la calidad completa.</div>`;
 else if(c=='fx')body=`${sw('spark','Partículas y chispas','Al completar mejoras, recolectar y ganar')}${sw('conf','Confeti de victoria')}${sw('amb','Motas de luz en la aldea','Se desactivan solas en gráficos Bajo')}${sw('rip','Ondas al tocar el mapa')}${sw('shk','Temblor de pantalla')}${sw('vib','Vibración')}`;
 else if(c=='scr')body=`<button class=mr data-m2=fs><span class=mi>${BRI.scr}</span><span class=mt>Pantalla completa</span></button><button class=mr data-m2=view><span class=mt>${VT?'Vista isométrica':'Vista cenital'}</span><span class=mc>${BRI.chev}</span></button><button class=mr data-m2=land><span class=mt>${FORCE?'Rotación automática':'Bloquear horizontal'}</span><span class=mc>${BRI.chev}</span></button>`;
 menuEl.innerHTML=`<div class=mdr><div class=mhd>${c?`<button class=mbk data-cat="">${BRI.back}</button><b>${TITLES[c]}</b>`:`<span class=mlg>B</span><b>BASE <em>RUSH</em></b>`}<button class=mx data-m2=close aria-label="Cerrar">${BRI.x}</button></div><div class=mbd>${body}</div>
  <div class=mft>${ONL?`<button class=mout data-m2=out>${BRI.out}<span>Cerrar sesión</span></button>`:''}<div class=mv>Base Rush · ${BUILD}</div></div></div>`};
menuEl.addEventListener('click',e=>{if(e.target===menuEl){menuEl.style.display='none';return}
 const k=e.target.closest('[data-cat]');if(k){MN_.cat=k.dataset.cat||null;try{snd('ui')}catch(x){}menuDraw();return}
 const f=e.target.closest('[data-fx]');if(f){BRFX[f.dataset.fx]=BRFX[f.dataset.fx]?0:1;brfxSave();menuDraw();return}
 const m=e.target.closest('[data-m3]');if(m){menuEl.style.display='none';if(m.dataset.m3=='sk')skOpen();else if(m.dataset.m3=='prac'){if(used(S.army)||S.army.king)startAttack();else note('<b>Sin tropas</b><br>Entrena tropas primero.')}else if(m.dataset.m3=='hist'){window.btlOpenMenu()}else{const p=document.querySelector('[data-prf]');if(p)p.click()}}});
/* abrir el menú nuevo desde ☰ */
document.getElementById('top').addEventListener('click',e=>{if(e.target.closest('[data-menu]')){e.stopImmediatePropagation();MN_.cat=null;menuEl.style.display='block';menuDraw();try{snd('open')}catch(x){}}},true);
/* ---- regeneración automática (sin reparar) ---- */
setInterval(()=>{try{if(typeof mode=='undefined'||mode!='v'||!S||!S.b||document.hidden)return;const rn=S.b.filter(b=>b.ruin);if(!rn.length)return;
 const n=Math.max(1,Math.ceil(rn.length/8));
 for(let i=0;i<n&&i<rn.length;i++){const b=rn[i];b.ruin=0;b.rpr=0;if(b.up>0&&!b.nb)b.up=0;b.max=mhp(b);b.hp=b.max;
  if(window.__juice&&window.__juice.scr){const p=window.__juice.scr(b);if(p&&p[0]>0&&p[1]>0&&p[0]<innerWidth&&p[1]<innerHeight){window.__juice.spark(p[0],p[1],10,'#35e08a')}}}
 try{snd('built')}catch(e){}try{ui()}catch(e){}}catch(e){}},450);
/* ---- ruleta en la barra inferior ---- */
document.getElementById('panel').addEventListener('click',e=>{const b=e.target.closest('[data-sl]');if(!b)return;try{const s=document.getElementById('slotBtn');if(s)s.click()}catch(x){}},true);
window.brSlotDot=()=>{try{const d=document.querySelector('#slotBtn .dot');return !!d&&getComputedStyle(d).display!='none'}catch(e){return false}};
window.brSlotOk=()=>{try{return typeof TUTS=='undefined'||(S.tut||0)>=TUTS.length}catch(e){return true}};
/* ---- bucle de estado ---- */
let wasV=false;
setInterval(()=>{try{const v=typeof mode!='undefined'&&mode=='v'&&S&&S.b;if(v&&!wasV){skLoad();lgLast=-1}wasV=!!v;skBtn();goalDraw();if(v&&tutDone())lgCheck()}catch(e){}},1200);
/* auto-abrir racha si hay premio y el tutorial terminó */
let auto=0;setInterval(()=>{try{if(auto||!SK||!SK.can||typeof mode=='undefined'||mode!='v'||!tutDone())return;if(document.getElementById('auth').style.display=='flex'||document.getElementById('msg').classList.contains('on')||UI.shop||UI.train)return;auto=1;skOpen()}catch(e){}},400);
window.__br={skLoad,skOpen,skClaim,SKRW};
})();

/* ===== PERFIL 90: pantalla nueva ===== */
const ART90={"0.21238938053097345": "data:x", "0.21301775147928995": "data:x", "0.21686746987951808": "data:x", "0.22570532915360503": "data:x", "0.22988505747126436": "data:x", "0.24439918533604887": "data:x", "0.25677603423680456": "data:x", "b_desert": "data:x", "b_fire": "data:x", "b_forest": "data:x", "b_night": "data:x", "b_prairie": "data:x", "b_sky": "data:x", "b_snow": "data:x", "b_volcano": "data:x", "d_crystal": "data:x", "d_dragon": "data:x", "d_golem": "data:x", "d_shield": "data:x", "d_sword": "data:x", "d_tower": "data:x", "d_tree": "data:x", "lg_bronce": "data:x", "lg_campeona": "data:x", "lg_cristal": "data:x", "lg_leyenda": "data:x", "lg_maestra": "data:x", "lg_none": "data:x", "lg_oro": "data:x", "lg_plata": "data:x", "lg_titan": "data:x", "b_pass": "data:x", "relic": "data:x"},HOLE90={};
const LGK90={'Sin liga':'lg_none','Bronce':'lg_bronce','Plata':'lg_plata','Oro':'lg_oro','Cristal':'lg_cristal','Maestra':'lg_maestra','Campeona':'lg_campeona','Titán':'lg_titan','Leyenda':'lg_leyenda'};
const BCOL90={b_prairie:['#6fbf3a','#2f6a14'],b_forest:['#c9a23a','#4a3a0e'],b_desert:['#e08a3a','#7a3a10'],b_snow:['#7fd0ff','#2a6a9a'],b_volcano:['#ff5a2a','#7a1a08'],b_sky:['#ffd25a','#a8761a'],b_night:['#8a6aff','#2a1a6a'],b_fire:['#e03a1a','#6a1208'],b_pass:['#c9a8ff','#4a1fb0']};
const CAT90={b_prairie:'Pradera',b_forest:'Bosque de duendes',b_desert:'Ruinas del desierto',b_snow:'Aurora helada',b_volcano:'Volcán',b_sky:'Cielo dorado',b_night:'Noche estrellada',b_fire:'Castillo en llamas',b_pass:'Estandarte Cristalino',
 t_new:'Recién llegado',t_raider:'Asaltante',t_star:'Cazaestrellas',t_builder:'Gran constructor',t_champ:'Campeón',t_legend:'Leyenda viva',t_pass:'Fiel al pase'};
function lgImg90(tr){const l=leagueOf(tr);return ART90[LGK90[l[1]]||'lg_none']}
function lgName90(tr){return leagueOf(tr)[1]}
function nextLg90(tr){for(const l of LEAGUES)if(l[0]>(tr|0))return l;return null}
function since90(iso){const t=Date.parse(iso);if(!t)return'—';const d=Math.floor((Date.now()-t)/864e5);if(d<1)return'Hoy';if(d<60)return d+(d==1?' día':' días');if(d<730){const m=Math.floor(d/30);return m+' meses'}return Math.floor(d/365)+' años'}
function emblem90(o,size,noFrame){const fr=null;
 const em=lgImg90(o.trophies),hole=fr?HOLE90[fr.slice(2)]||.7:.92,es=Math.round(size*hole*1.04);
 return `<div class=p90em style="width:${size}px;height:${size}px"><img class=p90lg src="${em}" style="width:${es}px;height:${es}px" alt="">${fr?`<img class=p90fr src="${ART90[fr]}" alt="">`:''}</div>`}
function badges90(a,s){return (a||[]).map(b=>`<span class=p90bd>${badgeHTML(b,s)}</span>`).join('')}
function nameHTML90(o,own){const e=o.equip||{},fx=e.namefx||'n_white',inl=e.bpos!='below'&&(o.shown||[]).length?`<span class=p90bi>${badges90(o.shown,30)}</span>`:'';
 const tt=e.title&&e.title!='t_none'?`<div class=p90tt>${esc(CAT90[e.title]||'')}</div>`:'';
 return `<div class=p90n><span class="p90nm ${fx}" style="font-size:${(o.name||'').length>13?19:(o.name||'').length>10?22:25}px">${esc(o.name||'Jugador')}</span>${inl}</div>${tt}<div class=p90pid ${own?'data-pcp=1':''}>${esc(o.pid||'')}${own?' 📋':''}</div>`}
function body90(o,own){
 const e=o.equip||{},ban=ART90[e.banner||'b_prairie'],tr=o.trophies|0,pk=Math.max(o.peak|0,tr),l=o.lvl||1,a=xpBase(l),b=xpBase(l+1),pc=Math.max(0,Math.min(100,((o.xp||0)-a)/(b-a)*100)),st=o.st||{},nx=nextLg90(tr),n=st.n|0,s3=st.s3|0,w=st.w|0,lo=st.l|0,tt=Math.max(1,s3+w+lo),pp=v=>(v/tt*100).toFixed(1);
 const dec=e.deco&&ART90[e.deco]?`<img class=p90dec src="${ART90[e.deco]}" alt="">`:'';
 const banStyle=ban?`background-image:url(${ban})`:'background:linear-gradient(135deg,#3b1d6e,#e0a82a)';
 const top=(st.top||[]).map(k=>{let ic='';try{ic=tIcon(k)}catch(x){}return ic?`<div class=p90tp><img src="${ic}" alt=""></div>`:''}).join('')||'<span class=p90mu>—</span>';
 const lg=(o.logros||[]).map(x=>`<div class=p90lo>${badgeHTML(x,60)}</div>`).join('')||'<div class=p90mu style="padding:10px 4px">Todavía no tiene logros.</div>';
 const nmLen=(o.name||'').length,inl=e.bpos!='below'&&(o.shown||[]).length?`<span class=p90bi>${badges90(o.shown,22)}</span>`:'';
 const ttl=e.title&&e.title!='t_none'?`<div class=p90tt><span>${esc(CAT90[e.title]||'')}</span></div>`:'';
 const bb=e.bpos=='below'&&(o.shown||[]).length?`<div class=p90bb>${badges90(o.shown,28)}</div>`:'';
 const slots=own?`<div class=p90sl><span>Vitrina</span>${[0,1,2].map(i=>{const x=(o.shown||[])[i];return `<div class="p90s${x?'':' e'}" data-pslot=${i}>${x?badgeHTML(x,40):'＋'}</div>`}).join('')}</div>`:'';
 return `<div class=p90card><div class=p90ban style="--bc:${(BCOL90[e.banner||'b_prairie']||BCOL90.b_prairie)[0]};--bd:${(BCOL90[e.banner||'b_prairie']||BCOL90.b_prairie)[1]}"><div class=p90flag><i class=p90fl></i><i class=p90bg style="${banStyle}"></i><i class=p90sh></i></div>${dec}<i class=p90fb></i>
 <div class=p90id><div class=p90emw>${emblem90(o,68,1)}</div><div class=p90who><div class=p90n><span class="p90nm ${e.namefx||'n_white'}" style="font-size:${nmLen>13?15:nmLen>10?17:19}px">${esc(o.name||'Jugador')}</span>${inl}</div>${ttl}</div></div>${bb}
 </div>
 <div class=p90line><span class=p90cn>🛡 ${o.clan?esc(o.clan):'Sin clan'}</span><span class=p90pid ${own?'data-pcp=1':''}>${esc(o.pid||'')}${own?' 📋':''}</span><span class=p90th>Ayuntamiento ${o.hall||1} · ${since90(o.since)}</span></div>
 <div class=p90xb><i style="width:${pc}%"></i><span>Nivel ${l} · ${(o.xp||0)-a} / ${b-a} XP</span></div></div>
 ${slots}
 <div class=p90H>Liga</div><div class=p90lgrow><div class=p90lt><div class=p90ltx><small>Ahora</small><b>${tr.toLocaleString('es')}</b><em>${lgName90(tr)}</em></div>${emblem90(o,64,1)}</div>
 <div class="p90lt r">${emblem90({trophies:pk,equip:{}},64,1)}<div class=p90ltx><small>Mejor</small><b>${pk.toLocaleString('es')}</b><em>${lgName90(pk)}</em></div></div></div>
 ${nx?`<div class=p90mu style="margin:-4px 4px 0">${nx[0]-tr} copas para ${nx[1]}</div>`:''}
 <div class=p90H>Asaltos<span>${n.toLocaleString('es')} en total</span></div><div class=p90pn>
 <div class=p90bar>${n?`<i class=c3 style="width:${pp(s3)}%"></i><i class=cw style="width:${pp(w)}%"></i><i class=cl style="width:${pp(lo)}%"></i>`:''}</div>
 <div class=p90lgd><span><u class=c3></u>3 estrellas <b>${s3}</b></span><span><u class=cw></u>Victorias <b>${w}</b></span><span><u class=cl></u>Fallos <b>${lo}</b></span></div>
 <div class=p90rw><span>Destrucción media</span><b>${st.avg|0}%</b></div><div class=p90rw><span>Suele atacar con</span><div class=p90tps>${top}</div></div></div>
 <div class=p90H>Clan</div><div class=p90pn><div class=p90rw><span>Donado</span><b>${(o.don||0).toLocaleString('es')}</b></div><div class=p90rw><span>Recibió</span><b>${(o.rec||0).toLocaleString('es')}</b></div></div>
 <div class=p90H>Logros<span>${o.nach|0}</span></div><div class=p90pn><div class=p90stp>${lg}</div></div>`}
function ach90(){const P0=PRF;if(!P0||!P0.def)return'';
 return `<div class=p90h2>Misiones de logros</div>`+P0.def.map(d=>{const t=ACH_T[d.k]||[d.k,''],v=Math.min(d.t,P0.m[d.m]||0),done=P0.c&&P0.c[d.k],rdy=!done&&v>=d.t;
  return `<div class="ar${done?' ok':''}"><span class=sr>${done||rdy?'★':'☆'}</span><div class=tx>${esc(t[0])}<small>${esc(t[1])}</small></div><div class=rw><span>✨ ${d.xp}</span><span>💎 ${d.g}</span></div>${done?'<div class=dn>¡Reclamado!</div>':rdy?`<button data-pcl=${d.k}>Reclamar</button>`:`<div class=pg><i style="width:${Math.round(v/d.t*100)}%"></i><span>${v.toLocaleString('es')}/${d.t.toLocaleString('es')}</span></div>`}</div>`}).join('')}
function shell90(t,inner){return `<div class=p90w><div class=p90hd><span>${t}</span><div class=p90x data-px=1>✕</div></div><div class="pb p90b">${inner}</div></div>`}
prfMain=function(){const o=PRV.mo;if(!o)return shell90('Mi perfil','<div class=p90mu style="text-align:center;padding:40px">Cargando…</div>');return shell90('Mi perfil',body90(o,1)+ach90())};
prfOther=function(){const o=PRV.o;if(!o)return shell90('Perfil de jugador','<div class=p90mu style="text-align:center;padding:40px">Cargando…</div>');if(o=='err')return shell90('Perfil de jugador','<div class=p90mu style="text-align:center;padding:40px">No se pudo cargar el perfil.</div>');return shell90('Perfil de jugador',body90(o,0))};
function mine90(){if(typeof sb=='undefined'||!sb||!ME)return;sb.rpc('profile_view',{p_player:ME}).then(r=>{if(!r.error&&r.data){PRV.mo=r.data;ui()}}).catch(()=>{})}
prfOpen=function(){if(OFFLINE||typeof sb=='undefined'||!sb){note('El perfil está disponible en el modo online.');return}PRV.on=1;PRV.view='main';prfLoad().then(()=>ui());mine90();ui()};
(function(){const st=document.createElement('style');st.textContent=`
#prfM .p90w{width:min(460px,100%);max-height:100%;display:flex;flex-direction:column;border-radius:22px;background:linear-gradient(180deg,#14233f,#0a1426);border:1px solid #ffb02066;box-shadow:0 0 50px -12px #ffb020aa,0 24px 60px #000d;overflow:hidden;color:#fff;font-family:'Lilita One',system-ui,sans-serif}
#prfM .p90hd{display:flex;align-items:center;justify-content:space-between;padding:10px 12px 8px 18px;font-size:20px;letter-spacing:.4px;flex:none}
#prfM .p90x{width:38px;height:34px;border-radius:10px;background:linear-gradient(#ff6a78,#d62e40);border:1px solid #ff9aa4;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:17px}
#prfM .p90b{padding:34px 10px 12px!important;gap:8px!important;color:#fff!important}
#prfM .p90mu{color:#8fa3cc;font-size:13px}
#prfM .p90card{flex:none;position:relative}
#prfM .p90emw{position:relative;flex:none}
#prfM .p90ban{position:relative;height:84px}
#prfM .p90flag{position:absolute;inset:0;filter:drop-shadow(0 3px 0 var(--bd))}
#prfM .p90flag i{position:absolute;display:block}
#prfM .p90fl{inset:0;background:linear-gradient(var(--bc),var(--bd));border-radius:9px 0 0 9px;clip-path:polygon(0 0,100% 0,calc(100% - 20px) 50%,100% 100%,0 100%)}
#prfM .p90bg{inset:3px;background-size:cover;background-position:center;border-radius:7px 0 0 7px;clip-path:polygon(0 0,100% 0,calc(100% - 20px) 50%,100% 100%,0 100%)}
#prfM .p90sh{inset:3px;border-radius:7px 0 0 7px;background:linear-gradient(90deg,#000b 0%,#0005 50%,#0000 100%);clip-path:polygon(0 0,100% 0,calc(100% - 20px) 50%,100% 100%,0 100%)}
#prfM .p90dec{position:absolute;right:16px;bottom:-12px;clip-path:inset(0 0 12px 0);height:116px;width:auto;max-width:100px;object-fit:contain;object-position:right bottom;z-index:3;filter:drop-shadow(0 4px 4px #000a)}
#prfM .p90fb{position:absolute;left:6px;right:24px;bottom:0;height:3px;background:var(--bd);z-index:4;border-radius:2px}
#prfM .p90id{position:absolute;inset:0;display:flex;gap:6px;padding:0 6px 0 8px;align-items:center;z-index:2}
#prfM .p90emw{position:relative;flex:none}
#prfM .p90who{flex:1;min-width:0;padding-right:106px;margin-top:-14px}
#prfM .p90bb{position:absolute;left:84px;bottom:-12px;display:flex;gap:2px;z-index:5}
#prfM .p90em{position:relative;display:flex;align-items:center;justify-content:center}
#prfM .p90lg{object-fit:contain;filter:drop-shadow(0 3px 4px #000b)}
#prfM .p90n{display:flex;align-items:center;gap:5px;flex-wrap:wrap}
#prfM .p90nm{line-height:1.05;word-break:break-word;text-shadow:0 2px 0 #000,0 0 4px #000}
#prfM .p90bi{display:inline-flex;gap:2px}#prfM .p90bd{display:inline-flex;align-items:center;justify-content:center}
#prfM .p90tt{margin-top:3px}#prfM .p90tt span{display:inline-block;font-size:11px;color:#fff;background:linear-gradient(#7a3cff,#4a1fb0);border:1px solid #c9a8ff;border-radius:10px;padding:0 10px;text-shadow:0 1px 0 #0008}
#prfM .p90tro{position:absolute;right:10px;bottom:5px;z-index:3;font-size:14px;background:#000b;border-radius:11px;padding:0 9px;color:#ffd76a}
#prfM .p90line{display:flex;gap:8px;flex-wrap:wrap;justify-content:space-between;align-items:center;padding:18px 4px 4px;font-size:13px;color:#fff}
#prfM .p90pid{cursor:pointer;color:#8fa3cc;font-size:11px}
#prfM .p90xb{position:relative;height:13px;border-radius:7px;background:#ffffff1a;overflow:hidden;margin:2px 2px 0}#prfM .p90xb i{display:block;height:100%;background:linear-gradient(#9dffb3,#2fc65e)}
#prfM .p90xb span{position:absolute;inset:0;text-align:center;font-size:10px;line-height:13px}
#prfM .p90sl{display:flex;gap:8px;align-items:center;background:#0b2a4d;border:1px solid #ffffff1f;border-radius:14px;padding:6px 10px;flex:none}
#prfM .p90sl>span{flex:1;font-size:14px;color:#8fa3cc}
#prfM .p90s{width:48px;height:48px;border-radius:11px;background:#ffffff0d;border:1px dashed #ffffff33;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#8fa3cc;font-size:22px}
#prfM .p90H{display:flex;justify-content:space-between;align-items:baseline;font-size:15px;letter-spacing:.8px;text-transform:uppercase;color:#cfe6ff;padding:6px 4px 0}#prfM .p90H span{font-size:12px;letter-spacing:0;color:#8fa3cc;text-transform:none}
#prfM .p90pn{background:#0a2547;border:1px solid #ffffff1a;border-radius:14px;padding:8px 12px;flex:none;box-shadow:inset 0 2px 8px #0006}
#prfM .p90lgrow{display:flex;gap:8px}
#prfM .p90lt{flex:1;min-width:0;display:flex;align-items:center;justify-content:space-between;gap:4px;border-radius:12px;padding:4px 10px;background:linear-gradient(135deg,#1c4f9c,#0f2a5c);border:1px solid #3de0ff44;min-height:68px}
#prfM .p90lt.r{justify-content:flex-start;background:linear-gradient(225deg,#1c4f9c,#0f2a5c)}
#prfM .p90ltx small{display:block;font-size:12px;color:#bcd2ff}#prfM .p90ltx b{display:block;font-size:21px;font-weight:400;color:#fff;line-height:1.05}#prfM .p90ltx em{font-style:normal;font-size:12px;color:#ffd76a}
#prfM .p90bar{display:flex;height:8px;border-radius:4px;background:#ffffff1a;overflow:hidden;margin:2px 0 8px}
#prfM .p90bar i{display:block;height:100%}#prfM .p90bar i.c3{background:#ffc93c}#prfM .p90bar i.cw{background:#2fb8ff}#prfM .p90bar i.cl{background:#ff4a5e}
#prfM .p90lgd{display:flex;justify-content:space-between;font-size:12px;padding-bottom:6px;border-bottom:1px solid #ffffff1f}
#prfM .p90lgd u{display:inline-block;width:9px;height:9px;border-radius:3px;margin-right:4px}#prfM .p90lgd u.c3{background:#ffc93c}#prfM .p90lgd u.cw{background:#2fb8ff}#prfM .p90lgd u.cl{background:#ff4a5e}
#prfM .p90rw{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #ffffff1f;font-size:14px}#prfM .p90rw:last-child{border-bottom:0}
#prfM .p90rw b{font-size:17px;font-weight:400}
#prfM .p90tps{display:flex;gap:4px}#prfM .p90tp{width:36px;height:36px;border-radius:8px;background:linear-gradient(#e0b04a,#b07a1e);border:1px solid #fff6;display:flex;align-items:center;justify-content:center}#prfM .p90tp img{height:28px;image-rendering:pixelated}
#prfM .p90stp{display:flex;gap:8px;overflow-x:auto;padding:4px 0;-webkit-overflow-scrolling:touch}
#prfM .p90lo{flex:none;display:flex;align-items:center}
#prfM .p90h2{font-size:15px;letter-spacing:.8px;text-transform:uppercase;color:#cfe6ff;margin:8px 4px 0}
#prfM .n_white{color:#fff}#prfM .n_gold{text-shadow:none!important;background:linear-gradient(#fff2b0,#f0b020);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 1px 0 #000) drop-shadow(0 0 2px #000) drop-shadow(0 0 3px #000)}
#prfM .n_sky{color:#9fe0ff}#prfM .n_green{color:#7dffb0}
#prfM .n_purple{text-shadow:none!important;background:linear-gradient(#f7e2ff,#c98aff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 1px 0 #000) drop-shadow(0 0 2px #000) drop-shadow(0 0 3px #000)}
#prfM .n_fire{text-shadow:none!important;background:linear-gradient(90deg,#ffe27a,#ff7a1a,#ff3a2a,#ff7a1a,#ffe27a);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:p90f 2.4s linear infinite;filter:drop-shadow(0 1px 0 #000) drop-shadow(0 0 2px #000) drop-shadow(0 0 3px #000)}
#prfM .n_rainbow{text-shadow:none!important;background:linear-gradient(90deg,#ff5a5a,#ffd25a,#5aff8a,#5ac8ff,#b45aff,#ff5a5a);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:p90f 3s linear infinite;filter:drop-shadow(0 1px 0 #000) drop-shadow(0 0 2px #000) drop-shadow(0 0 3px #000)}
#prfM .p90b .ar{background:#0a2547;border:1px solid #ffffff1a;color:#fff;text-shadow:none}#prfM .p90b .ar.ok{background:#0f2a1c;border-color:#2fc65e55}#prfM .p90b .ar .tx small{color:#8a97b4}#prfM .p90b .ar .rw span{background:#ffffff14}#prfM .p90b .ar .pg{background:#ffffff14}
@keyframes p90f{to{background-position:200% 0}}`;document.head.appendChild(st)})();

/* ===== P3: menú Personalizar ===== */
var CZ90={tab:'banner',items:null,err:0,d:{},modal:null,busy:0};
const CUT90=[['banner','Banners'],['badge','Insignias'],['namefx','Nombres'],['deco','Decoraciones'],['title','Títulos']];
const RQ90={lvl:'Nivel de perfil',hall:'Ayuntamiento',tr:'Récord de trofeos',atk:'Asaltos',s3:'Asaltos de 3 estrellas',win:'Victorias'};
const RC90={common:'#9fb2d6',rare:'#4aa8ff',epic:'#b36bff',legendary:'#ffb020',mythic:'#ff5a8a'};
const RN90={common:'Común',rare:'Rara',epic:'Épica',legendary:'Legendaria',mythic:'Mítica'};
function cuLoad(){if(typeof sb=='undefined'||!sb)return;sb.rpc('cosm_state').then(r=>{if(r.error||!r.data){CZ90.err=1;CZ90.msg=(r.error&&(r.error.message||r.error.details))||'sin datos';ui();return}CZ90.items=r.data.items||[];CZ90.err=0;if(PRV.mo)PRV.mo.equip=Object.assign({},r.data.equip||{});ui()}).catch(()=>{CZ90.err=1;ui()});prfLoad().then(()=>ui())}
function cuOpen(tab,slot){PRV.view='cust';CZ90.tab=tab||'banner';CZ90.d={};CZ90.modal=null;if(slot!=null)CZ90.modal={slot:slot};CZ90.items=null;CZ90.err=0;cuLoad();ui()}
function cuEq(){return (PRV.mo&&PRV.mo.equip)||{}}
function cuItem(id){return (CZ90.items||[]).find(x=>x.id==id)}
function cuReq(it){const r=it.req||{};if(r.t=='free')return'Disponible desde el inicio';if(r.t=='grant')return it.descr||'Exclusivo';return (it.descr||'')||`${RQ90[r.t]||r.t}: ${r.v}`}
function cuPreview(){const o=PRV.mo;if(!o)return'';const e=Object.assign({},cuEq(),CZ90.d);const x=body90(Object.assign({},o,{equip:e}),0);const i=x.indexOf('<div class=p90H>Liga');return `<div class=p90pv><div class=p90pvl>Así te ven los demás</div>${i>0?x.slice(0,i):x}</div>`}
function cuTile(it,k){const e=cuEq(),on=(CZ90.d[k]!==undefined?CZ90.d[k]:e[k])==it.id,own=it.owned,rc=RC90[it.rarity]||RC90.common;let v='';
 if(k=='banner'){const a=ART90[it.id];v=`<div class=p90tb style="${a?'background-image:url('+a+')':'background:linear-gradient(135deg,#3b1d6e,#e0a82a)'}"></div>`}
 else if(k=='deco'){const a=ART90[it.id];v=a?`<div class=p90td><img src="${a}" alt=""></div>`:`<div class=p90td><span class=p90mu>Ninguna</span></div>`}
 else if(k=='namefx')v=`<div class=p90tn><span class="p90nm ${it.id}" style="font-size:17px">${esc((PRV.mo&&PRV.mo.name)||'Jugador')}</span></div>`;
 else v=`<div class=p90tn><div class=p90tt><span>${esc(it.name)}</span></div></div>`;
 return `<div class="p90t${on?' on':''}${own?'':' lk'}" data-cui="${esc(it.id)}" data-cuk=${k} style="--rc:${rc}">${v}<div class=p90tl>${esc(it.name)}</div>${own?'':'<i class=p90lc>🔒</i>'}${on?'<i class=p90ck>✔</i>':''}</div>`}
function cuGrid(){if(CZ90.err)return '<div class=p90mu style="text-align:center;padding:30px">No se pudo cargar el catálogo.<br><small style="word-break:break-word">'+esc(CZ90.msg||'')+'</small><br><br><span class=p90btn data-cur=1>Reintentar</span></div>';
 if(!CZ90.items)return '<div class=p90mu style="text-align:center;padding:30px">Cargando…</div>';
 const k=CZ90.tab;
 if(k=='badge'){const own=(PRF&&PRF.owned)||[],sh=(PRF&&PRF.shown)||[],bp=cuEq().bpos=='below'?'below':'name';
  const pos=`<div class=p90seg><span class="${bp=='name'?'on':''}" data-cubp=name>Junto al nombre</span><span class="${bp=='below'?'on':''}" data-cubp=below>Debajo del banner</span></div>`;
  const g=own.length?own.map(b=>`<div class="p90t bd${sh.includes(b.id)?' on':''}" data-cubd="${esc(b.id)}" style="--rc:${RC90[b.rarity]||RC90.common}"><div class=p90tn>${badgeHTML(b,58)}</div><div class=p90tl>${esc(b.name)}</div>${sh.includes(b.id)?'<i class=p90ck>'+(sh.indexOf(b.id)+1)+'</i>':''}</div>`).join(''):'<div class=p90mu style="grid-column:1/-1;text-align:center;padding:24px">Todavía no tienes insignias. Cumple logros para ganarlas.</div>';
  return pos+`<div class=p90gr>${g}</div>`}
 let list=CZ90.items.filter(x=>x.kind==k);if(k=='title')list=[{id:'',kind:'title',name:'Sin título',owned:true,rarity:'common',req:{t:'free'}}].concat(list);
 return `<div class=p90gr>${list.map(it=>cuTile(it,k)).join('')}</div>`}
function cuAct(){const k=CZ90.tab;if(k=='badge'||!CZ90.items)return'';const sel=CZ90.d[k];if(sel===undefined)return'';
 const it=sel===''?{id:'',name:'Sin título',owned:true,req:{t:'free'}}:cuItem(sel);if(!it)return'';
 const rc=RC90[it.rarity]||RC90.common,r=it.req||{};
 let info=`<b>${esc(it.name)}</b>${it.rarity?`<span class=p90rr style="color:${rc}">${RN90[it.rarity]||''}</span>`:''}<small>${esc(cuReq(it))}</small>`;
 if(!it.owned&&it.cur!=null&&r.v){const p=Math.min(100,Math.round(it.cur/r.v*100));info+=`<div class=p90pgb><i style="width:${p}%"></i><span>${Math.floor(it.cur).toLocaleString('es')} / ${(+r.v).toLocaleString('es')}</span></div>`}
 const eq=cuEq()[k]||'',isOn=eq==sel;
 const btn=it.owned?(isOn?'<div class="p90btn off">Equipado</div>':`<div class=p90btn data-cue=1>Equipar</div>`):'<div class="p90btn off">🔒 Bloqueado</div>';
 return `<div class=p90act><div class=p90ai>${info}</div>${btn}</div>`}
function cuModal(){if(!CZ90.modal)return'';const sh=(PRF&&PRF.shown)||[],bid=CZ90.modal.id,sl=CZ90.modal.slot;
 const b=bid?((PRF&&PRF.owned)||[]).find(x=>x.id==bid):null;
 const slotBtns=[0,1,2].map(i=>{const x=sh[i];return `<div class=p90mb data-cum=s${i}>Espacio ${i+1}${x?'<small>ocupado · se reemplaza</small>':''}</div>`}).join('');
 const head=b?`<div style="display:flex;justify-content:center">${badgeHTML(b,76)}</div><div class=p90mn>${esc(b.name)}</div>`:'';
 return `<div class=p90ov data-cum=x><div class=p90md>${head}<div class=p90mq>${b?'¿Dónde colocar este trofeo?':'Espacio '+(sl+1)+': elige un trofeo'}</div>
 ${b?slotBtns+'<div class=p90mb data-cum=nm>Junto al nombre</div>':((PRF&&PRF.owned)||[]).map(x=>`<div class=p90mb data-cumb="${esc(x.id)}">${esc(x.name)}</div>`).join('')}
 <div class="p90mb dg" data-cum=cl>Vaciar vitrina</div><div class="p90mb gh" data-cum=x>Cancelar</div></div></div>`}
function cust90(){const o=PRV.mo;if(!o)return shell90('Personalizar','<div class=p90mu style="text-align:center;padding:40px">Cargando…</div>');
 const tabs=CUT90.map(t=>`<span class="${CZ90.tab==t[0]?'on':''}" data-cut=${t[0]}>${t[1]}</span>`).join('');
 return `<div class="p90w p90cw"><div class=p90hd><span>Personalizar</span><div class=p90x data-cub=1>✕</div></div>
 <div class=p90cs>${cuPreview()}<div class=p90tabs>${tabs}</div></div><div class="pb p90cg">${cuGrid()}</div>${cuAct()}${cuModal()}</div>`}
async function cuSet(kind,id){if(CZ90.busy)return;CZ90.busy=1;try{const r=await sb.rpc('set_equip',{p_kind:kind,p_id:id});if(r.error||!r.data)throw 0;if(PRV.mo)PRV.mo.equip=r.data;delete CZ90.d[kind];snd(990)}catch(e){snd('deny');note('No se pudo equipar.')}CZ90.busy=0;ui()}
async function cuBadges(ids){if(CZ90.busy)return;CZ90.busy=1;try{const r=await sb.rpc('set_badges',{p_ids:ids});if(r.error)throw 0;if(PRF)PRF.shown=r.data||[];snd(990);const m=await sb.rpc('profile_view',{p_player:ME});if(!m.error&&m.data)PRV.mo=Object.assign(m.data,{});}catch(e){snd('deny');note('No se pudo guardar.')}CZ90.busy=0;ui()}
document.addEventListener('click',e=>{const t=e.target;if(!t.closest||!t.closest('#prfM'))return;if(PRV.view=='other')return;
 const b=t.closest('[data-cut],[data-cui],[data-cue],[data-cub],[data-cubp],[data-cubd],[data-cum],[data-cumb],[data-cur],[data-pslot],[data-cuo]');if(!b)return;
 if(b.dataset.cuo==null&&b.dataset.pslot==null&&PRV.view!='cust')return;
 e.stopPropagation();e.stopImmediatePropagation();const d=b.dataset;
 if(d.cuo!=null){snd('open');cuOpen('banner')}
 else if(d.pslot!=null){snd('open');cuOpen('badge',+d.pslot)}
 else if(d.cut){CZ90.tab=d.cut;snd('ui');ui()}
 else if(d.cur!=null){CZ90.err=0;cuLoad();ui()}
 else if(d.cub!=null){PRV.view='main';CZ90.modal=null;snd('ui');mine90();ui()}
 else if(d.cui!=null){const k=d.cuk;CZ90.d[k]=d.cui;snd('ui');ui()}
 else if(d.cue!=null){const k=CZ90.tab,id=CZ90.d[k];if(id!==undefined)cuSet(k,id)}
 else if(d.cubp){cuSet('bpos',d.cubp)}
 else if(d.cubd){CZ90.modal={id:d.cubd,slot:0};snd('ui');ui()}
 else if(d.cumb){const sh=((PRF&&PRF.shown)||[]).slice(),s=CZ90.modal.slot,i=sh.indexOf(d.cumb);if(i>=0)sh.splice(i,1);sh.splice(Math.min(s,sh.length),0,d.cumb);CZ90.modal=null;cuBadges(sh.slice(0,3))}
 else if(d.cum){const m=CZ90.modal;if(d.cum=='x'){CZ90.modal=null;snd('ui');ui()}
  else if(d.cum=='cl'){CZ90.modal=null;cuBadges([])}
  else if(d.cum=='nm'&&m&&m.id){const sh=((PRF&&PRF.shown)||[]).filter(x=>x!=m.id);sh.unshift(m.id);CZ90.modal=null;cuSet('bpos','name').then(()=>cuBadges(sh.slice(0,3)))}
  else if(d.cum[0]=='s'&&m&&m.id){const s=+d.cum[1],sh=((PRF&&PRF.shown)||[]).slice(),i=sh.indexOf(m.id);if(i>=0)sh.splice(i,1);sh.splice(Math.min(s,sh.length),0,m.id);CZ90.modal=null;cuBadges(sh.slice(0,3))}}
},true);
(function(){const m=prfMain;prfMain=function(){if(PRV.view=='cust')return cust90();let h=m();return h.replace('<div class=p90sl>','<div class=p90cb data-cuo=1>🎨 Personalizar perfil</div><div class=p90sl>')}})();
(function(){const st=document.createElement('style');st.textContent=`
#prfM .p90cw{position:relative;height:min(760px,100%)}
#prfM .p90cs{flex:none;padding:30px 10px 0}
#prfM .p90pv{background:#0b1a33;border:1px solid #ffffff1a;border-radius:16px;padding:4px 8px 8px;position:relative}
#prfM .p90pvl{font-size:12px;letter-spacing:.8px;text-transform:uppercase;color:#8fa3cc;padding:6px 4px 14px}
#prfM .p90tabs{display:flex;gap:3px;margin:10px 0 6px;overflow-x:auto}
#prfM .p90tabs span{flex:1;white-space:nowrap;text-align:center;padding:8px 3px;border-radius:10px;background:#ffffff0f;color:#9fb2d6;font-size:12.5px;cursor:pointer}
#prfM .p90tabs span.on{background:linear-gradient(#ffc83a,#e08a10);color:#3a2200}
#prfM .p90cg{flex:1;overflow-y:auto;padding:6px 10px 10px!important}
#prfM .p90gr{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
#prfM .p90t{position:relative;border:2px solid var(--rc);border-radius:13px;background:#0a2040;padding:6px;cursor:pointer;display:flex;flex-direction:column;gap:5px}
#prfM .p90t.on{box-shadow:0 0 0 2px #fff,0 0 14px var(--rc)}
#prfM .p90t.lk .p90tb,#prfM .p90t.lk .p90td,#prfM .p90t.lk .p90tn{filter:grayscale(.8) brightness(.55)}
#prfM .p90tb{height:46px;border-radius:8px;background-size:cover;background-position:center}
#prfM .p90td{height:70px;border-radius:8px;background:#06142b;display:flex;align-items:center;justify-content:center;overflow:hidden}
#prfM .p90td img{max-height:64px;max-width:90%;object-fit:contain}
#prfM .p90tn{min-height:46px;border-radius:8px;background:#06142b;display:flex;align-items:center;justify-content:center;padding:4px;overflow:hidden}
#prfM .p90t.bd .p90tn{min-height:70px;background:none}
#prfM .p90tl{font-size:13px;text-align:center;color:#dbe8ff;line-height:1.1}
#prfM .p90lc{position:absolute;top:4px;right:6px;font-style:normal;font-size:15px}
#prfM .p90ck{position:absolute;top:-8px;left:-8px;min-width:22px;height:22px;border-radius:11px;background:#2fc65e;color:#fff;font-style:normal;font-size:13px;display:flex;align-items:center;justify-content:center;border:2px solid #0a1426}
#prfM .p90seg{display:flex;gap:4px;margin-bottom:8px;background:#ffffff0f;border-radius:10px;padding:3px}
#prfM .p90seg span{flex:1;text-align:center;padding:7px;border-radius:8px;font-size:14px;color:#9fb2d6;cursor:pointer}#prfM .p90seg span.on{background:#2b7be0;color:#fff}
#prfM .p90act{flex:none;display:flex;gap:10px;align-items:center;padding:10px 12px;background:#0b2a4d;border-top:1px solid #ffffff22}
#prfM .p90ai{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:16px}#prfM .p90ai small{font-size:12px;color:#9fb2d6;line-height:1.2}#prfM .p90rr{font-size:12px}
#prfM .p90pgb{position:relative;height:16px;border-radius:8px;background:#ffffff18;overflow:hidden;margin-top:3px}#prfM .p90pgb i{position:absolute;inset:0 auto 0 0;background:linear-gradient(#4aa8ff,#2b7be0)}#prfM .p90pgb span{position:relative;display:block;text-align:center;font-size:11px;line-height:16px}
#prfM .p90btn{flex:none;padding:11px 18px;border-radius:12px;background:linear-gradient(#5fd35f,#2d9a2d);border:1px solid #9aee9a;font-size:17px;cursor:pointer;text-align:center}
#prfM .p90btn.off{background:#ffffff14;border-color:#ffffff22;color:#8fa3cc;cursor:default}
#prfM .p90cb{flex:none;text-align:center;padding:11px;border-radius:13px;background:linear-gradient(#ffc83a,#e08a10);border:1px solid #ffe08a;color:#3a2200;font-size:18px;cursor:pointer}
#prfM .p90ov{position:absolute;inset:0;background:#000b;display:flex;align-items:center;justify-content:center;z-index:20;padding:16px}
#prfM .p90md{width:min(320px,100%);max-height:100%;overflow:auto;background:linear-gradient(#18305a,#0d1c38);border:1px solid #ffb02088;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px}
#prfM .p90mn{text-align:center;font-size:18px}#prfM .p90mq{text-align:center;font-size:16px;color:#cfe6ff;margin-bottom:4px}
#prfM .p90mb{padding:11px;border-radius:12px;background:#ffffff14;border:1px solid #ffffff22;text-align:center;font-size:17px;cursor:pointer;display:flex;flex-direction:column}#prfM .p90mb small{font-size:11px;color:#8fa3cc}
#prfM .p90mb.dg{background:#5a1a24;border-color:#ff6a78aa}#prfM .p90mb.gh{background:none}
`;document.head.appendChild(st)})();

/* ===== P5: Visita — ver la aldea de otro jugador sin atacar ===== */
var VIS90=0;
async function visit90(uid,name){
 if(OFFLINE||typeof sb=='undefined'||!sb||!uid||mode!='v'||VIS90)return;VIS90=1;
 try{const r=await sb.rpc('visit_village',{p_player:uid});
  if(r.error||!r.data){note(/Demasiadas/.test((r.error&&r.error.message)||'')?'Has visitado demasiado rápido. Espera un momento.':'No se pudo visitar esta aldea.');VIS90=0;return}
  const d=r.data;PRV.on=0;
  cloudRun(()=>{
   startReal('vis'+uid,{b:d.base,g:0,e:0});
   if(!E||!A){VIS90=0;return}
   for(const k in A.army)S.army[k]=A.army[k];for(const k in A.sp)S.sp[k]=A.sp[k];
   try{REC=null}catch(e){}
   A.army={};A.sp={};A.a0={};A.sp0={};A.time=900;A.prep=0;
   E.real=0;E.npc=1;E.visit=1;E.ci=-1;E.nm='Aldea de '+(d.name||name||'Jugador');E.f=1;E.sh=[];E.lg=0;E.le=0;
   document.body.classList.add('vis90');{const nm=document.getElementById('ahNm');let x=document.getElementById('ahLg');while(x&&x.parentElement&&!x.parentElement.contains(nm))x=x.parentElement;const P=x&&x.parentElement;if(P)for(const c of P.children)if(!c.contains(nm)&&c!==document.getElementById('ahEnd'))c.classList.add('vhid90');const y=document.getElementById('ahLe');if(y&&!y.closest('.vhid90')&&!y.contains(nm)){let z=y;while(z.parentElement&&!z.parentElement.contains(nm))z=z.parentElement;if(!z.contains(nm))z.classList.add('vhid90')}}const e=document.getElementById('ahEnd');if(e)e.textContent='Salir de la visita';
   VIS90=0;ui()});
 }catch(e){VIS90=0;note('No se pudo visitar esta aldea.')}}
(function(){const f=endAttack;endAttack=function(s){
 if(typeof E=='object'&&E&&E.visit&&mode=='a'&&A&&A.on){
  if(!s&&A.time>0)return; /* el fin automático por "sin tropas" no aplica en una visita */
  A.on=false;try{closeMsg()}catch(e){}cloudRun(()=>{document.body.classList.remove('vis90');mode='v';A=null;E=null;ui();save()});return}
 return f.apply(this,arguments)}})();
(function(){const o=prfOther;prfOther=function(){const h=o();if(!PRV.o||PRV.o=='err'||!PRV.ou||PRV.ou==ME)return h;
 return h.replace('<div class=p90H>Liga','<div class=p90cb data-cuv=1>👁 Visitar aldea</div><div class=p90H>Liga')}})();
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('#prfM [data-cuv]');if(!b)return;e.stopPropagation();e.stopImmediatePropagation();
 const o=PRV.o;visit90(PRV.ou,o&&o.name)},true);

(function(){const st=document.createElement('style');st.textContent='body.vis90 .ah-tl,body.vis90 .ah-tl *,body.vis90 .ah-dm,body.vis90 .ah-tm,body.vis90 .ah-tm *,body.vis90 #ahLg,body.vis90 #ahLe,body.vis90 .vhid90{visibility:hidden!important}body.vis90 #ahNm{visibility:visible!important}body.vis90 #ahEnd{font-size:0!important}body.vis90 #ahEnd::after{content:"Salir de la visita";font-size:16px;line-height:1.1}';document.head.appendChild(st)})();

/* ===== P4: Logros (90) con insignias ===== */
const ACHART90={"a_atk1": "data:x", "a_atk2": "data:x", "a_atk3": "data:x", "a_atk4": "data:x", "a_atk5": "data:x", "a_win1": "data:x", "a_win2": "data:x", "a_win3": "data:x", "a_win4": "data:x", "a_s31": "data:x", "a_s32": "data:x", "a_s33": "data:x", "a_dest": "data:x", "a_loot1": "data:x", "a_loot2": "data:x", "a_loot3": "data:x", "a_wall": "data:x", "a_solo": "data:x", "a_vet": "data:x", "a_def": "data:x", "a_tr1": "data:x", "a_tr2": "data:x", "a_tr3": "data:x", "a_tr4": "data:x", "a_hall1": "data:x", "a_hall2": "data:x", "a_hall3": "data:x", "a_hall4": "data:x", "a_build1": "data:x", "a_build2": "data:x", "a_build3": "data:x", "a_train1": "data:x", "a_train2": "data:x", "a_train3": "data:x", "a_arch": "data:x", "a_perfect": "data:x", "a_arsenal1": "data:x", "a_arsenal2": "data:x", "a_arsenal3": "data:x", "a_mage1": "data:x", "a_mage2": "data:x", "a_lvl1": "data:x", "a_lvl2": "data:x", "a_lvl3": "data:x", "a_lvl4": "data:x", "a_collect": "data:x", "a_research": "data:x", "a_100m": "data:x", "a_land": "data:x", "a_tasks": "data:x", "a_join": "data:x", "a_give1": "data:x", "a_give2": "data:x", "a_give3": "data:x", "a_recv1": "data:x", "a_recv2": "data:x", "a_found": "data:x", "a_vis1": "data:x", "a_vis2": "data:x", "a_pop": "data:x", "a_team": "data:x", "a_msg": "data:x", "a_streak1": "data:x", "a_streak2": "data:x", "a_streak3": "data:x", "a_streak4": "data:x", "a_old1": "data:x", "a_old2": "data:x", "a_old3": "data:x", "a_pio1": "data:x", "a_pio2": "data:x", "a_pio3": "data:x", "a_early": "data:x", "a_pass": "data:x", "l_bronce": "data:x", "l_plata": "data:x", "l_oro": "data:x", "l_cristal": "data:x", "l_maestra": "data:x", "l_campeona": "data:x", "l_titan": "data:x", "l_leyenda": "data:x", "a_top100": "data:x", "a_champ": "data:x", "a_buy1": "data:x", "a_buy2": "data:x", "a_buy3": "data:x", "a_premium": "data:x", "a_ambass": "data:x", "a_beta": "data:x"};
(function(){const bh=badgeHTML;badgeHTML=function(b,s){if(b&&b.id&&ACHART90[b.id])return `<img class=p90bi src="${ACHART90[b.id]}" alt="" draggable=false style="width:${s||64}px;height:${s||64}px">`;return bh(b,s)}})();
var AZ90={tab:'bat',busy:0};
const ACAT90=[['bat','⚔️ Batallas'],['dev','🏗️ Desarrollo'],['clan','🛡️ Clan'],['loy','⏳ Lealtad'],['tor','🏆 Torneos'],['sup','💎 Soporte']];
function acVal(d){const m=(PRF&&PRF.m)||{};return Math.max(0,+m[d.m]||0)}
function acStats(){const D=(PRF&&PRF.def)||[],c=(PRF&&PRF.c)||{};let ok=0,rd=0;D.forEach(d=>{if(c[d.k])ok++;else if(d.av&&d.m!='grant'&&acVal(d)>=d.t)rd++});return{ok,rd,n:D.length}}
ach90=function(){return''};
function acBtn(){if(!PRF||!PRF.def)return'<div class=p90cb data-cao=1>🏅 Logros</div>';const s=acStats();return `<div class=p90cb data-cao=1 style="margin-top:8px">🏅 Logros · ${s.ok}/${s.n}${s.rd?` · <b>${s.rd} por reclamar</b>`:''}</div>`}
function acRow(d){const c=(PRF.c||{})[d.k],v=acVal(d),rdy=!c&&d.av&&d.m!='grant'&&v>=d.t,got=!!c;
 const bdg={id:d.k,rarity:'common',name:d.name};
 let side='';
 if(got)side='<div class=p90dn>Reclamado</div>';
 else if(!d.av)side='<div class=p90mu>Próximamente</div>';
 else if(d.m=='grant')side='<div class=p90mu>Exclusivo</div>';
 else if(rdy)side=`<div class=p90btn data-cal="${d.k}">Reclamar</div>`;
 let prog='';
 if(!got&&d.av&&d.m!='grant'&&!rdy){if(d.m=='pio'){const rk=(PRF.m||{}).rank;prog=`<div class=p90pgb><i style="width:0"></i><span>Tu puesto: #${rk||'?'}</span></div>`}
  else{const p=Math.min(100,Math.floor(v/d.t*100));prog=`<div class=p90pgb><i style="width:${p}%"></i><span>${Math.min(v,d.t).toLocaleString('es')} / ${d.t.toLocaleString('es')}</span></div>`}}
 return `<div class="p90ar${got?' got':''}${rdy?' rdy':''}${!d.av?' soon':''}"><div class=p90ai2>${badgeHTML(bdg,54)}</div><div class=p90at><b>${esc(d.name)}</b><small>${esc(d.d)}</small>${prog}<span class=p90rw>✨ ${d.xp} XP <b style="font-weight:normal">·</b> ${d.g}<i class=gm></i></span></div>${side}</div>`}
function ach90screen(){const D=(PRF&&PRF.def)||[],s=acStats();
 const tabs=ACAT90.map(t=>{const n=D.filter(d=>d.cat==t[0]&&d.av&&d.m!='grant'&&!(PRF.c||{})[d.k]&&acVal(d)>=d.t).length;return `<span class="${AZ90.tab==t[0]?'on':''}" data-cat=${t[0]}>${t[1]}${n?`<i class=p90dt>${n}</i>`:''}</span>`}).join('');
 const rows=D.filter(d=>d.cat==AZ90.tab).map(acRow).join('')||('<div class=p90mu style="text-align:center;padding:30px">'+(window.PRFERR90?'No se pudieron cargar los logros.<br><small style="word-break:break-word">'+esc(window.PRFERR90)+'</small><br><small>Falta ejecutar un SQL en Supabase (v36a, v36b, v36c).</small>':'Cargando…')+'</div>');
 return `<div class="p90w p90cw"><div class=p90hd><span>Logros ${s.ok}/${s.n}</span><div class=p90x data-cab=1>✕</div></div><div class=p90cs style="padding:8px 10px 6px"><div class="p90tabs p90tabs2">${tabs}</div></div><div class="pb p90cg">${rows}</div></div>`}
(function(){const m=prfMain;prfMain=function(){if(PRV.view=='ach')return ach90screen();const h=m();return h.replace('<div class=p90sl>',acBtn()+'<div class=p90sl>')}})();
async function acClaim(k){if(AZ90.busy)return;AZ90.busy=1;try{const r=await sb.rpc('ach_claim',{p_key:k});if(r.error||!r.data)throw r.error||0;PRF=r.data;if(typeof GS!='undefined'&&GS&&PRF.gems!=null)S.gem=PRF.gems;const d=PRF.def.find(x=>x.k==k);snd(990);if(d)note(`¡${d.name}! +${d.xp} ✨ +${d.g} 💎`);mine90()}catch(e){snd('deny');note((e&&e.message)||'No se pudo reclamar.')}AZ90.busy=0;ui()}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('#prfM [data-cao],#prfM [data-cat],#prfM [data-cal],#prfM [data-cab]');if(!b)return;if(b.dataset.cab!=null&&PRV.view!='ach')return;if((b.dataset.cat||b.dataset.cal)&&PRV.view!='ach')return;
 e.stopPropagation();e.stopImmediatePropagation();const d=b.dataset;
 if(d.cao!=null){snd('open');PRV.view='ach';prfLoad().then(()=>ui());ui()}
 else if(d.cat){AZ90.tab=d.cat;snd('ui');ui()}
 else if(d.cal)acClaim(d.cal);
 else if(d.cab!=null){PRV.view='main';snd('ui');mine90();ui()}
},true);
/* progreso medido por el cliente: hechizos lanzados y muros destruidos en asaltos reales */
(function(){if(typeof castSp=='function'){const f=castSp;castSp=function(k,x,y){const b=(typeof A=='object'&&A&&A.sp)?A.sp[k]:0,r=f.apply(this,arguments);try{if(E&&E.real&&!E.visit&&A&&A.sp&&A.sp[k]<b)aRep('spell',1)}catch(e){}return r}}
 const g=endAttack;endAttack=function(s){try{if(E&&E.real&&!E.visit&&A&&A.on&&!A.wc&&E.b){A.wc=1;aRep('wall',E.b.filter(x=>x.t=='wall'&&x.hp<=0).length)}}catch(e){}return g.apply(this,arguments)}})();
(function(){const st=document.createElement('style');st.textContent=`
#prfM .p90bi{display:block;object-fit:contain;filter:drop-shadow(0 2px 3px #0008);-webkit-user-drag:none}
#prfM .p90tabs2{flex-wrap:wrap}#prfM .p90tabs2 span{flex:1 1 30%;position:relative;font-size:12px}
#prfM .p90dt{position:absolute;top:-5px;right:-3px;min-width:17px;height:17px;border-radius:9px;background:#e8433a;color:#fff;font-style:normal;font-size:11px;line-height:17px;text-align:center}
#prfM .p90ar{display:flex;gap:10px;align-items:center;padding:9px 10px;margin-bottom:7px;border-radius:13px;background:#0a2040;border:1px solid #ffffff18}
#prfM .p90ar .p90ai2{flex:none;width:54px;height:54px;filter:grayscale(.9) brightness(.55)}
#prfM .p90ar.got .p90ai2,#prfM .p90ar.rdy .p90ai2{filter:none}
#prfM .p90ar.rdy{border-color:#ffc83a;box-shadow:0 0 12px #ffc83a55}
#prfM .p90ar.soon{opacity:.6}
#prfM .p90at{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
#prfM .p90at b{font-size:16px;font-weight:normal}#prfM .p90at small{font-size:12px;color:#9fb2d6;line-height:1.2}
#prfM .p90rw{font-size:12px;color:#ffd98a;display:flex!important;align-items:center;justify-content:flex-start!important;width:max-content!important;gap:5px!important}#prfM .p90rw>*{margin:0!important}#prfM .p90rw .gm{display:inline-block!important;margin:0!important;float:none!important;position:static!important;width:15px!important;height:15px!important;flex:none}
#prfM .p90dn{flex:none;font-size:13px;color:#7be08a}
`;document.head.appendChild(st)})();

/* ===== v37 BASE RUSH: compra de Runas y Tokens con GRAM (TON), detección por MEMO ===== */
(function(){
const $=id=>document.getElementById(id);
const esc=t=>String(t==null?'':t).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const on=()=>{try{return !OFFLINE&&typeof sb!='undefined'&&sb&&typeof ME!='undefined'&&ME}catch(e){return false}};
const fmtN=n=>String(n|0).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const fmtP=nano=>{const v=Number(nano)/1e9;let s=(Math.round(v*100)/100).toFixed(2).replace(/0+$/,'').replace(/\.$/,'');return s.replace('.',',')};
const TOKI='<svg viewBox="0 0 32 32" class="t90i"><circle cx="16" cy="16" r="14" fill="#f4c14a" stroke="#8a5a10" stroke-width="2"/><circle cx="16" cy="16" r="9.5" fill="none" stroke="#b9791a" stroke-width="2"/><path d="M11 12h10M16 12v9" stroke="#8a5a10" stroke-width="2.6" stroke-linecap="round"/></svg>';
const TONI='<svg viewBox="0 0 32 32" class="t90g"><circle cx="16" cy="16" r="15" fill="#2a9df4"/><path d="M9 9.5h14l-7 14z" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/><path d="M16 9.5v14" stroke="#fff" stroke-width="2"/></svg>';
const st=document.createElement('style');st.id='ton90css';st.textContent=`
#st89 .bd.t90{display:block}
#st89 .t90h{font:400 18px 'Lilita One',sans-serif;color:#ffd24a;margin:6px 2px 6px}
#st89 .t90g2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
#st89 .t90c{position:relative;padding:10px 6px 8px;border-radius:14px;background:#16264a;border:1.5px solid #2c4a82;text-align:center;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;user-select:none}
#st89 .t90c:active{transform:scale(.97)}
#st89 .t90c .nm{font:400 15px 'Lilita One',sans-serif;color:#fff}
#st89 .t90c .ic{width:46px;height:46px;display:grid;place-items:center}#st89 .t90c .ic .bri,#st89 .t90c .ic svg{width:44px;height:44px;display:block}
#st89 .t90c .q{font:800 17px 'Baloo 2',sans-serif;color:#fff;display:flex;gap:5px;align-items:baseline;justify-content:center;flex-wrap:wrap}
#st89 .t90c .q s{font-size:12px;color:#9db4d6;font-weight:600}
#st89 .t90c .pr{margin-top:2px;padding:3px 10px;border-radius:10px;background:#0a1224;border:1px solid #35e08a;font:800 14px 'Baloo 2',sans-serif;color:#7be39b;display:flex;align-items:center;gap:4px}
#st89 .t90c .pr .t90g{width:15px;height:15px}
#st89 .t90c .bn{position:absolute;top:-6px;left:-4px;padding:1px 7px;border-radius:9px;background:linear-gradient(#ff9a3c,#e2611a);border:1.5px solid #5a2408;font:800 11px 'Baloo 2',sans-serif;color:#fff;transform:rotate(-6deg)}
#st89 .t90c .of{position:absolute;top:-6px;right:-4px;padding:1px 7px;border-radius:9px;background:linear-gradient(#ffe27a,#f0a020);border:1.5px solid #3a210d;font:800 10px 'Baloo 2',sans-serif;color:#3a210d;transform:rotate(5deg)}
#st89 .t90g3{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:8px}#st89 .t90g3 .t90c{padding:10px 3px 7px}#st89 .t90g3 .t90c .nm{font-size:13px}#st89 .t90g3 .t90c .q{font-size:15px}#st89 .t90g3 .t90c .pr{font-size:13px;padding:3px 7px}#st89 .t90g3 .t90c .ic .bri,#st89 .t90g3 .t90c .ic svg{width:38px;height:38px}#st89 .t90c .cl{font:600 10px 'Baloo 2',sans-serif;color:#ffb3a0}
#st89 .t90n{font:600 12px 'Baloo 2',sans-serif;color:#9db4d6;text-align:center;padding:4px 6px 0}
#tn90{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;padding:14px;background:rgba(3,8,20,.8);font-family:'Baloo 2',system-ui,sans-serif;color:#fff}
#tn90 .sc{width:100%;max-width:370px;max-height:94vh;overflow-y:auto;border-radius:20px;background:#0f1a30;border:2px solid #3a5a98;box-shadow:0 14px 44px #000a;padding:14px}
#tn90 h3{margin:0 0 4px;font:400 24px 'Lilita One',sans-serif;color:#ffd24a;text-align:center}
#tn90 .sm{font:600 13px 'Baloo 2',sans-serif;color:#9db4d6;text-align:center;margin:2px 0 8px}
#tn90 .big{display:flex;align-items:center;justify-content:center;gap:8px;font:800 22px 'Baloo 2',sans-serif;margin:4px 0 8px}
#tn90 .big .bri,#tn90 .big svg{width:32px;height:32px}
#tn90 .fl{margin:6px 0;padding:8px 10px;border-radius:12px;background:#0a1224;border:1px solid #2c4474}
#tn90 .fl label{display:block;font:700 11px 'Baloo 2',sans-serif;color:#7f95bd;text-transform:uppercase;letter-spacing:.5px}
#tn90 .fl .v{display:flex;align-items:center;gap:8px;font:800 14px/1.2 'Baloo 2',sans-serif;word-break:break-all}
#tn90 .fl .v span{flex:1}#tn90 .fl .cp{flex:none;padding:5px 11px;border-radius:9px;background:#1d3566;border:1px solid #4a68a8;font:800 12px 'Baloo 2',sans-serif;color:#cfe0ff;cursor:pointer}
#tn90 .fl.mm{border-color:#ffb020}#tn90 .fl.mm .v{font-size:18px;color:#ffd24a;letter-spacing:1px}
#tn90 .wr{font:700 12px 'Baloo 2',sans-serif;color:#ffb3a0;text-align:center;margin:6px 0}
#tn90 .bt{display:block;margin:8px 0 0;padding:11px;border-radius:14px;text-align:center;font:400 18px 'Lilita One',sans-serif;cursor:pointer;user-select:none;text-decoration:none}
#tn90 .bt.a{background:linear-gradient(#ffe27a,#f0a020);border:2px solid #3a210d;color:#3a210d}
#tn90 .bt.b{background:#1a2a4a;border:2px solid #3a5a98;color:#bcd0f5}
#tn90 .stt{margin-top:8px;padding:8px;border-radius:12px;background:#0a1224;text-align:center;font:700 13px 'Baloo 2',sans-serif;color:#9db4d6}
#tn90 .stt.ok{color:#7be39b;border:1px solid #35e08a}
#tn90 .stt .dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#ffb020;margin-right:6px;animation:t90p 1s infinite}
@keyframes t90p{50%{opacity:.25}}
`;
document.head.appendChild(st);

/* ---- billetera (servidor = fuente de verdad para runas y tokens) ---- */
const TK={on:()=>on()&&(typeof GS=='undefined'||GS),
 async spend(n){try{const r=await sb.rpc('spend_tokens',{p_n:n});if(r.error)throw r.error;S.tok=r.data|0;try{save()}catch(e){}return true}catch(e){await wallet();return false}}};
window.TK90=TK;
async function wallet(){if(!on())return;try{const r=await sb.rpc('wallet_state');if(r.error)throw r.error;S.gem=r.data.gems|0;S.tok=r.data.tokens|0;try{ui()}catch(e){}try{if(typeof kRender=='function'&&$('kEl'))kRender()}catch(e){}}catch(e){console.warn('wallet_state (falta online_v37.sql):',e.message||e)}}
window.wallet90=wallet;
try{const s0=srvSync;srvSync=async function(){await s0.apply(this,arguments);await wallet()}}catch(e){}

/* ---- catálogo ---- */
let SH=null,SHT=0;
async function shop(force){if(SH&&!force&&Date.now()-SHT<45000)return SH;const r=await sb.rpc('ton_shop');if(r.error)throw r.error;SH=r.data;SHT=Date.now();return SH}
const hub=()=>$('st89');
function cardHTML(p){
 const promo=p.bonus>0;
 const ic=p.kind=='gems'?(typeof BRI!='undefined'?BRI.gm:'💎'):TOKI;
 const nm=p.kind=='tokens'?esc(p.name):esc(p.name);
 return `<div class="t90c" data-tp="${esc(p.id)}">${promo?`<div class="bn">+${p.bonus}%</div>`:''}${p.tag?`<div class="of">${esc(p.tag)}</div>`:''}<div class="nm">${nm}</div><div class="ic">${ic}</div><div class="q">${promo?`<s>${fmtN(p.qty)}</s>`:''}<span>${fmtN(promo?p.qty_final:p.qty)}</span></div><div class="pr">${TONI}${fmtP(p.price_nano)} GRAM</div></div>`}
let focus=null;
/* ---- Tienda de Recursos: oro y elixir por runas (+ tokens por GRAM) ---- */
const RT=[{id:'r1',pct:25,per:200,n:['Montón de oro','Frasco de elixir']},{id:'r2',pct:50,per:230,n:['Saco de oro','Barril de elixir']},{id:'r3',pct:100,per:270,n:['Cofre de oro','Tanque de elixir']}];
let RB={bonus:0,label:null},RBT=0;
async function resBonus(){if(Date.now()-RBT<45000)return;RBT=Date.now();try{const r=await sb.rpc('res_promo');if(!r.error&&r.data)RB=r.data}catch(e){}}
function resInfo(kind,t){const c=kind=='g'?cap.g():cap.e(),have=kind=='g'?S.g:S.e,base=Math.floor(c*t.pct/100/100)*100||Math.floor(c*t.pct/100),withB=base+Math.floor(base*(RB.bonus|0)/100),free=Math.max(0,Math.floor(c-have)),got=Math.min(withB,free),cost=Math.max(1,Math.ceil(Math.ceil(base/t.per)*(got/Math.max(1,withB))));return{base,withB,free,got,cost}}
function resCard(kind,t,i){const x=resInfo(kind,t),full=x.free<1,ic=kind=='g'?BRI.g:BRI.e;
 return `<div class="t90c" data-rs="${kind}${t.id}">${RB.bonus>0?`<div class="bn">+${RB.bonus}%</div>`:''}<div class="nm">${esc(t.n[kind=='g'?0:1])}</div><div class="ic">${ic}</div><div class="q">${RB.bonus>0&&x.got>=x.withB?`<s>${fmtN(x.base)}</s>`:''}<span>${fmtN(x.got>0?x.got:x.withB)}</span></div>${!full&&x.got<x.withB?'<div class="cl">Lo que cabe</div>':''}<div class="pr" style="${full?'opacity:.45':''}">${full?'Almacén lleno':(typeof BRI!='undefined'?BRI.gm:'💎')+' '+fmtN(x.cost)}</div></div>`}
async function buyRes(code){const kind=code[0],t=RT.find(x=>x.id==code.slice(1));if(!t)return;const x=resInfo(kind,t);
 if(x.free<1){try{snd('deny')}catch(e){};return}
 if((S.gem|0)<x.cost){try{snd('deny')}catch(e){}try{note('Te faltan runas: ve a la pestaña Runas')}catch(e){}return}
 if(!(await gemPay(x.cost))){try{snd('deny')}catch(e){};return}
 if(kind=='g')S.g=Math.min(cap.g(),S.g+x.got);else S.e=Math.min(cap.e(),S.e+x.got);
 try{save();ui()}catch(e){}try{snd(520)}catch(e){}try{note('+'+fmtN(x.got)+(kind=='g'?' oro':' elixir'))}catch(e){}
 const h=hub();const tb=h&&h.querySelector('.tb [data-t=r]');if(tb)tb.click()}
async function fillRes(h,bd){bd.classList.add('t90');
 if(onlOK())await resBonus();
 const cur=h.querySelector('.tb [data-t].on');if(!cur||cur.dataset.t!='r')return;
 let tok='';if(onlOK()){try{const d=await shop();tok=d.packs.filter(p=>p.kind=='tokens').map(cardHTML).join('')}catch(e){}}
 bd.innerHTML=`<div class="t90h">Oro</div><div class="t90g3">${RT.map((t,i)=>resCard('g',t,i)).join('')}</div><div class="t90h">Elixir</div><div class="t90g3">${RT.map((t,i)=>resCard('e',t,i)).join('')}</div>${tok?`<div class="t90h">Tokens de mejora</div><div class="t90g2">${tok}</div><div class="t90n">Los tokens se pagan con GRAM (TON).</div>`:''}`}
const onlOK=()=>on();

async function fill(){
 const h=hub();if(!h||h.style.display!='flex')return;const on_=h.querySelector('.tb [data-t].on');if(!on_)return;
 if(on_.dataset.t=='r'){const bd0=h.querySelector('.bd');if(bd0)fillRes(h,bd0);return}
 if(on_.dataset.t!='g')return;
 const bd=h.querySelector('.bd');if(!bd)return;bd.classList.add('t90');
 if(!on()){bd.innerHTML='<div class="t90n">La compra con GRAM solo está disponible en modo online.</div>';return}
 bd.innerHTML='<div class="t90n">Cargando…</div>';
 try{const d=await shop();const g=d.packs.filter(p=>p.kind=='gems'),t=d.packs.filter(p=>p.kind=='tokens');
  const cur=h.querySelector('.tb [data-t].on');if(!cur||cur.dataset.t!='g')return;
  bd.innerHTML=`<div class="t90h">Runas</div><div class="t90g2">${g.map(cardHTML).join('')}</div><div class="t90h" id="t90tok">Tokens de mejora</div><div class="t90g2">${t.map(cardHTML).join('')}</div><div class="t90n">Pago con GRAM (TON). Tus compras se entregan solas al confirmarse el pago.</div>`;
  if(focus=='tokens'){focus=null;const e=$('t90tok');if(e)e.scrollIntoView()}
 }catch(e){bd.innerHTML='<div class="t90n">No se pudo cargar la tienda. Falta ejecutar online_v37.sql.</div>'}}
/* el hub redibuja todo con innerHTML al cambiar de pestaña → reinyectamos */
function hook(){const h=hub();if(!h||h._t90)return false;h._t90=1;new MutationObserver(()=>{setTimeout(fill,0)}).observe(h,{childList:true});
 h.addEventListener('click',e=>{const r=e.target.closest('[data-rs]');if(r){e.stopPropagation();buyRes(r.dataset.rs);return}const c=e.target.closest('[data-tp]');if(!c)return;e.stopPropagation();pay(c.dataset.tp)},true);return true}
const iv=setInterval(()=>{if(hook())clearInterval(iv)},400);
window.ton90Open=function(what){focus=what||null;const h=hub();if(!h)return;try{const k=$('kEl');if(k&&k.style.display!='none'){}}catch(e){}
 const b=$('st89b');if(b)b.click();setTimeout(()=>{const t=h.querySelector('.tb [data-t=g]');if(t)t.click()},30)};

/* ---- hoja de pago ---- */
const sheet=document.createElement('div');sheet.id='tn90';document.body.appendChild(sheet);
let ORD=null,PT=0,PBUSY=0;
const stopPoll=()=>{clearInterval(PT);PT=0};
function close(){stopPoll();sheet.style.display='none';ORD=null}
function tonLink(o){return 'https://app.tonkeeper.com/transfer/'+encodeURIComponent(o.address)+'?amount='+o.amount_nano+'&text='+encodeURIComponent(o.memo)}
function tonUri(o){return 'ton://transfer/'+encodeURIComponent(o.address)+'?amount='+o.amount_nano+'&text='+encodeURIComponent(o.memo)}
function sheetHTML(o,msg,okState){
 const ps=o.kind=='pass',ic=ps?'👑':o.kind=='gems'?(typeof BRI!='undefined'?BRI.gm:'💎'):TOKI;const unit=ps?'':o.kind=='gems'?'runas':(o.qty==1?'token':'tokens');
 if(okState)return `<div class="sc"><h3>¡Pago recibido!</h3><div class="big">${ps?'👑 Pase Premium':ic+'+'+fmtN(o.qty)}</div><div class="sm">${ps?'Premium activado para esta temporada.':'Ya está en tu cuenta.'} ¡Gracias por apoyar Base Rush!</div><div class="bt a" data-tn="x">Genial</div></div>`;
 return `<div class="sc"><h3>Pagar con GRAM</h3><div class="big">${ps?'👑 Pase de temporada Premium':ic+fmtN(o.qty)+' '+unit}</div>
 <div class="fl"><label>Monto exacto</label><div class="v"><span>${fmtP(o.amount_nano)} GRAM</span><div class="cp" data-cp="${(Number(o.amount_nano)/1e9)}">Copiar</div></div></div>
 <div class="fl"><label>Dirección de depósito</label><div class="v"><span>${esc(o.address)}</span><div class="cp" data-cp="${esc(o.address)}">Copiar</div></div></div>
 <div class="fl mm"><label>MEMO (obligatorio)</label><div class="v"><span>${esc(o.memo)}</span><div class="cp" data-cp="${esc(o.memo)}">Copiar</div></div></div>
 <div class="wr">⚠ Sin el MEMO exacto no podemos acreditar tu compra.</div>
 <a class="bt a" href="${esc(tonLink(o))}" target="_blank" rel="noopener" data-tn="app">Abrir en Tonkeeper</a>
 <a class="bt b" href="${esc(tonUri(o))}" data-tn="uri">Abrir otra billetera</a>
 <div class="bt b" data-tn="chk">Ya pagué · verificar</div>
 <div class="stt" id="tn90s">${msg||'<span class="dot"></span>Esperando tu pago…'}</div>
 <div class="bt b" data-tn="x" style="font-size:15px;padding:8px">Cerrar</div></div>`}
async function check(manual){
 if(!ORD||PBUSY)return;PBUSY=1;const s=()=>$('tn90s');
 try{if(manual&&s())s().innerHTML='<span class="dot"></span>Buscando tu pago en la red…';
  try{await sb.functions.invoke('ton-check',{body:{}})}catch(e){}
  const r=await sb.rpc('ton_order_status',{p_id:ORD.id});if(r.error)throw r.error;
  if(r.data.status=='paid'){stopPoll();const o=ORD;await wallet();sheet.innerHTML=sheetHTML(o,'',true);try{window.dispatchEvent(new Event('ton-paid'))}catch(e){};try{snd(520)}catch(e){};try{save()}catch(e){};return}
  if(Number(r.data.paid_nano||0)>0&&s())s().innerHTML='Recibimos '+fmtP(r.data.paid_nano)+' de '+fmtP(ORD.amount_nano)+' GRAM. Envía lo que falta con el mismo MEMO.';
  else if(manual&&s())s().innerHTML='Aún no vemos el pago (la red puede tardar ~30 s). Seguimos buscando…'}
 catch(e){if(s())s().textContent='No se pudo verificar ahora. Reintentando…'}finally{PBUSY=0}}
async function pay(id){
 if(!on()){return}
 sheet.style.display='flex';sheet.innerHTML='<div class="sc"><h3>Preparando pago…</h3></div>';
 try{const r=await sb.rpc('ton_order_create',{p_pack:id});if(r.error)throw r.error;ORD=r.data;
  sheet.innerHTML=sheetHTML(ORD);stopPoll();PT=setInterval(()=>check(false),7000);
  if(typeof aRep=='function'){}}
 catch(e){sheet.innerHTML=`<div class="sc"><h3>Ups</h3><div class="sm">${esc(e.message||'No se pudo crear el pedido')}</div><div class="bt b" data-tn="x">Cerrar</div></div>`}}
window.ton90Pay=pay;
sheet.addEventListener('click',async e=>{const c=e.target.closest('[data-cp]'),a=e.target.closest('[data-tn]');
 if(c){const v=c.dataset.cp;try{await navigator.clipboard.writeText(v)}catch(_){const t=document.createElement('textarea');t.value=v;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(__){}t.remove()}c.textContent='¡Copiado!';setTimeout(()=>{c.textContent='Copiar'},1200);return}
 if(!a){if(e.target===sheet)close();return}
 const k=a.dataset.tn;if(k=='x'){const was=ORD;close();const h=hub();if(h&&h.style.display=='flex')fill();return}
 if(k=='chk'){check(true);return}
 if(k=='app'||k=='uri'){setTimeout(()=>check(false),12000)}});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&ORD)check(false)});
})();

/* ===== v40 BASE RUSH: avisos por Telegram (el servidor envía; aquí solo se informa cuándo ocurrirán los eventos) ===== */
(function(){
const $=id=>document.getElementById(id);
const onl=()=>{try{return !OFFLINE&&typeof sb!='undefined'&&sb&&typeof ME!='undefined'&&ME}catch(e){return false}};
const NF={on:true,linked:false,loaded:false};

/* ---- eventos futuros de la aldea ---- */
function events(){const now=Date.now(),ev=[];
 try{for(const b of S.b){if(!(b.up>0)||b.ruin)continue;const d=TY[b.t];if(!d)continue;ev.push({k:'build',at:now+b.up*1000,l:(d.n||'Obra')})}}catch(e){}
 try{for(const o of(S.ob||[]))if(o.up>0)ev.push({k:'build',at:now+o.up*1000,l:'Limpieza'})}catch(e){}
 try{if(S.hero&&S.hero.up&&S.hero.up.rem>0)ev.push({k:'build',at:now+S.hero.up.rem*1000,l:'Héroe'})}catch(e){}
 try{if(S.rs&&S.rs.rem>0)ev.push({k:'build',at:now+S.rs.rem*1000,l:'Investigación'})}catch(e){}
 try{let mx=-1;for(const b of S.b){const d=TY[b.t];if(!d||!d.prod||b.ruin||b.nb||!(b.hp>0)||b.up>0)continue;const rate=prodRate(b)/3600;if(!(rate>0))continue;mx=Math.max(mx,Math.max(0,LIMF(b)-b.st)/rate)}
  if(mx>=0)ev.push({k:'full',at:now+mx*1000,l:''})}catch(e){}
 try{let mx=-1;for(const b of S.b){if(b.t!='rax'||b.ruin||b.nb||!b.q||!b.q.length||b.up>0)continue;let t=0;for(const j of b.q){const one=ttb(j.k,b);t+=(j.t==null?one:j.t)+Math.max(0,j.n-1)*one}mx=Math.max(mx,t)}
  const q=S.q||[];if(q.length){let t=0;for(const j of q){const one=tt(j.k);t+=(j.t==null?one:j.t)+Math.max(0,j.n-1)*one}mx=Math.max(mx,t)}
  if(mx>=0){let full=false;try{const qq=(typeof qsp=='function')?qsp():0;full=used(S.army)+qq>=campCap()}catch(e){}ev.push({k:'army',at:now+mx*1000,l:full?'full':''})}}catch(e){}
 ev.sort((a,b)=>a.at-b.at);
 /* obras: las 15 primeras; el resto no cabe en un solo aviso útil */
 let nb=0;return ev.filter(e=>e.k!='build'||++nb<=15).slice(0,25)}

/* ---- sincronizar con el servidor (solo cuando cambia algo) ---- */
let lastKey='',busy=0;
async function sync(force){if(!onl()||busy)return;try{if(typeof GS!='undefined'&&!GS)return}catch(e){}
 const ev=events(),key=ev.map(e=>e.k+Math.round(e.at/30000)+e.l).join('|');
 if(key==lastKey&&!force)return;busy=1;
 try{const r=await sb.rpc('notif_sync',{p_ev:ev.map(e=>({k:e.k,at:new Date(e.at).toISOString(),l:e.l}))});if(!r.error)lastKey=key;else console.warn('notif_sync (falta online_v40.sql):',r.error.message)}catch(e){}
 busy=0}
setInterval(()=>{try{if(!document.hidden)sync(false)}catch(e){}},20000);
document.addEventListener('visibilitychange',()=>{if(document.hidden)sync(true)});
window.addEventListener('pagehide',()=>{try{sync(true)}catch(e){}});
setTimeout(()=>{try{sync(true)}catch(e){}},6000);

async function load(){if(!onl())return;try{const r=await sb.rpc('notif_get');if(r.error)throw r.error;NF.on=!!r.data.on;NF.linked=!!r.data.linked;NF.loaded=true}catch(e){NF.loaded=false}}

/* ---- una sola fila en el menú: Avisos de Telegram: Sí/No (viene activado) ---- */
function label(){return NF.loaded&&!NF.linked?'Avisos de Telegram · vincular':'Avisos de Telegram · '+(NF.on?'Sí':'No')}
function inject(){const m=$('menu');if(!m)return;let b=m.querySelector('[data-ntf]');
 if(b){const tx=b.querySelector('.mt');if(tx&&tx.textContent!=label())tx.textContent=label();return}
 const au=[...m.querySelectorAll('.mr')].find(x=>/Audio/.test(x.textContent));if(!au)return;
 b=au.cloneNode(true);b.removeAttribute('data-cat');b.dataset.ntf='1';
 const ic=b.querySelector('.mi');if(ic)ic.innerHTML='<svg class="bri" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path fill="currentColor" fill-opacity=".2" d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>';
 const tx=b.querySelector('.mt');if(tx)tx.textContent=label();au.parentNode.insertBefore(b,au);if(!NF.loaded)load().then(()=>inject())}
const mo=new MutationObserver(inject);
const wait=setInterval(()=>{const m=$('menu');if(m){clearInterval(wait);mo.observe(m,{childList:true,subtree:true});inject()}},500);
document.addEventListener('click',async e=>{const b=e.target.closest('[data-ntf]');if(!b)return;e.stopImmediatePropagation();e.preventDefault();
 if(!onl())return;if(!NF.loaded)await load();
 if(!NF.linked){try{window.open('https://t.me/baserush_bot','_blank')}catch(_){}return}
 try{const r=await sb.rpc('notif_set',{p_on:!NF.on});if(!r.error){NF.on=!!r.data.on;NF.linked=!!r.data.linked}}catch(_){}
 inject()},true);
window.ntf90={sync,events,NF};
})();

/* ===== v42 BASE RUSH: Tareas (30 objetivos en 6 categorías, de fácil a difícil) ===== */
(function(){
const $=id=>document.getElementById(id);
const esc=t=>String(t==null?'':t).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const onl=()=>{try{return !OFFLINE&&typeof sb!='undefined'&&sb&&typeof ME!='undefined'&&ME}catch(e){return false}};
const fmt=n=>String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const TK={d:null,at:0,tab:'cons',busy:0,err:''};
const val=(d)=>Math.min(d.t,Number((TK.d.m||{})[d.m])||0);
const claimed=k=>!!(TK.d.c||{})[k];
const state=d=>claimed(d.k)?'done':(d.s>1&&!claimed('t_'+d.c+(d.s-1)))?'lock':(val(d)>=d.t?'ready':'act');
function cats(){const seen=[],o=[];for(const d of TK.d.def)if(!seen.includes(d.c)){seen.push(d.c);o.push({c:d.c,n:d.cn,i:d.ic})}return o}
const nReady=()=>TK.d?TK.d.def.filter(d=>state(d)=='ready').length:0;

const st=document.createElement('style');st.textContent=`
#tk90{position:fixed;inset:0;z-index:2147483100;display:none;align-items:center;justify-content:center;padding:12px;background:rgba(3,8,20,.82);font-family:'Baloo 2',system-ui,sans-serif;color:#fff}
#tk90 .sc{width:100%;max-width:400px;height:min(92vh,760px);display:flex;flex-direction:column;border-radius:20px;background:#0f1a30;border:2px solid #3a5a98;box-shadow:0 14px 44px #000a;overflow:hidden}
#tk90 .hd{display:flex;align-items:center;gap:8px;padding:12px 14px;font:400 24px 'Lilita One',sans-serif;color:#ffd24a}
#tk90 .hd span{flex:1}
#tk90 .x{width:36px;height:36px;border-radius:11px;background:linear-gradient(#ff6b6b,#d63a4a);border:2px solid #5a1020;display:grid;place-items:center;font:800 17px 'Baloo 2',sans-serif;color:#fff;cursor:pointer}
#tk90 .tb{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:0 10px 8px}
#tk90 .tb div{position:relative;padding:7px 4px;border-radius:12px;background:#1a2a4a;border:1.5px solid #2c4474;text-align:center;font:400 14px 'Lilita One',sans-serif;color:#9db4d6;cursor:pointer;user-select:none}
#tk90 .tb div.on{background:linear-gradient(#ffd24a,#f0a020);border-color:#3a210d;color:#3a210d}
#tk90 .tb i{position:absolute;top:-5px;right:-3px;min-width:18px;height:18px;border-radius:9px;background:#e63a4a;border:1.5px solid #fff;font:800 11px/15px 'Baloo 2',sans-serif;font-style:normal;color:#fff}
#tk90 .tb small{display:block;font:700 10px 'Baloo 2',sans-serif;opacity:.85}
#tk90 .ls{flex:1;overflow-y:auto;padding:4px 10px 12px;display:flex;flex-direction:column;gap:8px}
#tk90 .it{padding:10px;border-radius:14px;background:#16264a;border:1.5px solid #2c4a82}
#tk90 .it.ready{border-color:#35e08a;box-shadow:0 0 14px #35e08a44}
#tk90 .it.done{opacity:.6}#tk90 .it.lock{opacity:.45}
#tk90 .r1{display:flex;align-items:center;gap:8px}
#tk90 .st{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#0a1224;border:2px solid #4a68a8;font:800 14px 'Baloo 2',sans-serif;flex:none}
#tk90 .it.done .st{background:#1f8f4a;border-color:#35e08a}
#tk90 .nm{flex:1;font:400 16px 'Lilita One',sans-serif;line-height:1.1}
#tk90 .ds{font:600 12px 'Baloo 2',sans-serif;color:#9db4d6;margin:3px 0 6px}
#tk90 .pb{height:14px;border-radius:8px;background:#0a1224;border:1px solid #2c4474;overflow:hidden;position:relative}
#tk90 .pb i{display:block;height:100%;background:linear-gradient(#6cf08f,#1fa24a)}
#tk90 .pb b{position:absolute;inset:0;text-align:center;font:800 10px/14px 'Baloo 2',sans-serif;text-shadow:0 1px 2px #000}
#tk90 .rw{display:flex;align-items:center;justify-content:space-between;margin-top:6px;font:800 13px 'Baloo 2',sans-serif;color:#ffe27a}
#tk90 .bt{padding:5px 14px;border-radius:11px;background:linear-gradient(#6cf08f,#1fa24a);border:2px solid #0c4a20;font:400 15px 'Lilita One',sans-serif;color:#fff;cursor:pointer}
#tk90 .mu{text-align:center;padding:30px 12px;font:700 14px 'Baloo 2',sans-serif;color:#9db4d6}`;
document.head.appendChild(st);
const pn=document.createElement('div');pn.id='tk90';document.body.appendChild(pn);

function draw(){
 if(!TK.d){pn.innerHTML=`<div class=sc><div class=hd><span>Tareas</span><div class=x data-tk=x>✕</div></div><div class=mu>${TK.err?'No se pudieron cargar las tareas.<br><small style="word-break:break-word">'+esc(TK.err)+'</small><br><small>Falta ejecutar online_v42.sql en Supabase.</small><br><br><div class=bt data-tk=r style="display:inline-block">Reintentar</div>':'Cargando…'}</div></div>`;return}
 const C=cats(),D=TK.d.def,tot=D.length,dn=D.filter(d=>claimed(d.k)).length;
 const tabs=C.map(c=>{const L=D.filter(d=>d.c==c.c),rd=L.filter(d=>state(d)=='ready').length,dd=L.filter(d=>claimed(d.k)).length;
  return `<div class="${TK.tab==c.c?'on':''}" data-tk=t data-c=${c.c}>${c.i} ${esc(c.n)}<small>${dd}/${L.length}</small>${rd?`<i>${rd}</i>`:''}</div>`}).join('');
 const rows=D.filter(d=>d.c==TK.tab).map(d=>{const s=state(d),v=val(d),pc=Math.round(v/d.t*100);
  return `<div class="it ${s}"><div class=r1><div class=st>${s=='done'?'✓':s=='lock'?'🔒':d.s}</div><div class=nm>${esc(d.n)}</div></div><div class=ds>${esc(d.d)}</div>
  ${s=='done'?'':`<div class=pb><i style="width:${pc}%"></i><b>${fmt(v)} / ${fmt(d.t)}</b></div>`}
  <div class=rw><span>+${d.g} 💎 &nbsp;+${d.xp} ✨</span>${s=='ready'?`<div class=bt data-tk=c data-k=${d.k}>Reclamar</div>`:s=='done'?'<span>¡Completada!</span>':''}</div></div>`}).join('');
 pn.innerHTML=`<div class=sc><div class=hd><span>Tareas ${dn}/${tot}</span><div class=x data-tk=x>✕</div></div><div class=tb>${tabs}</div><div class=ls>${window.clan90?clan90.card():''}${rows}</div></div>`}

async function load(force){if(!onl())return;if(!force&&TK.d&&Date.now()-TK.at<20000)return;
 try{const r=await sb.rpc('tasks_state');if(r.error)throw r.error;TK.d=r.data;TK.at=Date.now();TK.err=''}catch(e){TK.err=(e&&e.message)||String(e)}}
async function open(){if(!onl()){return}pn.style.display='flex';draw();await load(true);try{if(window.clan90){await clan90.load(true);}}catch(_){}
 if(TK.d){const first=cats().find(c=>TK.d.def.some(d=>d.c==c.c&&state(d)=='ready'))||cats().find(c=>TK.d.def.some(d=>d.c==c.c&&!claimed(d.k)));if(first)TK.tab=first.c}
 draw();inject()}
pn.addEventListener('click',async e=>{const cb=e.target.closest('[data-cl90]');if(cb&&window.clan90){pn.style.display='none';clan90.open();return}const b=e.target.closest('[data-tk]');if(!b){if(e.target===pn)pn.style.display='none';return}const k=b.dataset.tk;
 if(k=='x'){pn.style.display='none';inject();return}
 if(k=='r'){open();return}
 if(k=='t'){TK.tab=b.dataset.c;draw();return}
 if(k=='c'&&!TK.busy){TK.busy=1;try{const r=await sb.rpc('task_claim',{p_key:b.dataset.k});if(r.error)throw r.error;TK.d=r.data;TK.at=Date.now();
   if(r.data.gems!=null&&typeof GS!='undefined'&&GS)S.gem=r.data.gems;try{snd(990)}catch(_){}try{ui()}catch(_){}
   try{if(typeof prfLoad=='function')prfLoad()}catch(_){}}catch(err){try{snd('deny')}catch(_){}await load(true)}TK.busy=0;draw()}});

/* fila en el menú, con el número de tareas listas */
function label(){const n=nReady();return 'Tareas'+(n?' ('+n+')':'')}
function inject(){const m=$('menu');if(!m)return;let b=m.querySelector('[data-tk90]');
 if(b){const tx=b.querySelector('.mt');if(tx&&tx.textContent!=label())tx.textContent=label();return}
 const au=[...m.querySelectorAll('.mr')].find(x=>/Audio/.test(x.textContent));if(!au)return;
 b=au.cloneNode(true);b.removeAttribute('data-cat');b.removeAttribute('data-ntf');b.dataset.tk90='1';
 const ic=b.querySelector('.mi');if(ic)ic.innerHTML='<svg class="bri" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2.5" fill="currentColor" fill-opacity=".2"/><path d="M9 4.5h6M9 11l1.8 1.8L14.5 9M9 17h6"/></svg>';
 const tx=b.querySelector('.mt');if(tx)tx.textContent=label();au.parentNode.insertBefore(b,au);load(false).then(()=>inject())}
const mo=new MutationObserver(inject);
const wait=setInterval(()=>{const m=$('menu');if(m){clearInterval(wait);mo.observe(m,{childList:true,subtree:true});inject()}},500);
document.addEventListener('click',e=>{const b=e.target.closest('[data-tk90]');if(!b)return;e.stopImmediatePropagation();e.preventDefault();try{const m=$('menu');if(m)m.style.display='none'}catch(_){}open()},true);
window.tasks90={open,TK};
})();

/* ===== v44 BASE RUSH: Clanes (fase 1) ===== */
(function(){
const $=id=>document.getElementById(id);
const esc=t=>String(t==null?'':t).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const onl=()=>{try{return !OFFLINE&&typeof sb!='undefined'&&sb&&typeof ME!='undefined'&&ME}catch(e){return false}};
const fmt=n=>String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const COST=30000;
const EMB=['🛡️','⚔️','🐉','🏰','🦁','🦅','🐺','🔥','⚡','💀','👑','🌟','🦂','🐻','🦈','🐲','🗡️','🏹','🌙','☀️'];
const emb=n=>EMB[(Math.max(1,Math.min(20,n|0))-1)];
const KIND={open:'Abierto',req:'Con solicitud',closed:'Cerrado'};
const ROLE={leader:'Líder',co:'Colíder',member:'Miembro'};
const LANGS={es:'ES',en:'EN',pt:'PT',ru:'RU'};const LANGN={es:'Español',en:'English',pt:'Português',ru:'Русский'};
const fp=n=>{n=+n||0;return n>=1e6?(n/1e6).toFixed(1).replace('.',',')+' M':n>=1e3?fmt(n):String(n)};
const ago=m=>m==null?'':m<5?'':m<60?m+'min':m<1440?Math.floor(m/60)+'h':Math.floor(m/1440)+'d';
const eb2=(e,l)=>`<div class=eb2><div class=em>${emb(e)}</div>${l?`<b>${l}</b>`:''}</div>`;
/* bonos que lee el juego (producción y descuento de construcción) */
const CL=window.CLAN90={prod:0,disc:0,st:null,at:0};
const U={view:'main',tab:'clan',q:'',list:null,busy:0,err:'',chat:[],reqs:[],cf:{name:'',tag:'',descr:'',emblem:1,kind:'open',hall:1,tr:0,lang:'es'},ef:null,msg:'',cc:null,wr:null,sel:{},size:10,offers:[],wnew:0,top:null,nc:0};

const st=document.createElement('style');st.textContent=`
#cl90{position:fixed;inset:0;z-index:2147483100;display:none;align-items:center;justify-content:center;padding:12px;background:rgba(3,8,20,.82);font-family:'Baloo 2',system-ui,sans-serif;color:#fff}
#cl90 .sc{width:100%;max-width:400px;height:min(92vh,760px);display:flex;flex-direction:column;border-radius:20px;background:#0f1a30;border:2px solid #3a5a98;box-shadow:0 14px 44px #000a;overflow:hidden}
#cl90 .hd{display:flex;align-items:center;gap:8px;padding:12px 14px;font:400 22px 'Lilita One',sans-serif;color:#ffd24a}
#cl90 .hd span{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#cl90 .x{width:36px;height:36px;border-radius:11px;background:linear-gradient(#ff6b6b,#d63a4a);border:2px solid #5a1020;display:grid;place-items:center;font:800 17px 'Baloo 2',sans-serif;color:#fff;cursor:pointer;flex:none}
#cl90 .tb{display:flex;gap:6px;padding:0 10px 8px}
#cl90 .tb div{flex:1;position:relative;padding:7px 2px;border-radius:12px;background:#1a2a4a;border:1.5px solid #2c4474;text-align:center;font:400 12.5px 'Lilita One',sans-serif;color:#9db4d6;cursor:pointer;user-select:none}
#cl90 .tb div.on{background:linear-gradient(#ffd24a,#f0a020);border-color:#3a210d;color:#3a210d}
#cl90 .tb i{position:absolute;top:-5px;right:-3px;min-width:18px;height:18px;border-radius:9px;background:#e63a4a;border:1.5px solid #fff;font:800 11px/15px 'Baloo 2',sans-serif;font-style:normal;color:#fff}
#cl90 .ls{flex:1;overflow-y:auto;padding:4px 10px 12px;display:flex;flex-direction:column;gap:8px}
#cl90 .it{padding:10px;border-radius:14px;background:#16264a;border:1.5px solid #2c4a82}
#cl90 .r1{display:flex;align-items:center;gap:8px}
#cl90 .em{width:42px;height:42px;border-radius:12px;background:#0a1224;border:2px solid #4a68a8;display:grid;place-items:center;font-size:24px;flex:none}
#cl90 .nm{flex:1;font:400 16px 'Lilita One',sans-serif;line-height:1.1;min-width:0}
#cl90 .nm small{display:block;font:600 11px 'Baloo 2',sans-serif;color:#9db4d6}
#cl90 .ds{font:600 12px 'Baloo 2',sans-serif;color:#9db4d6;margin:4px 0}
#cl90 .pb{height:14px;border-radius:8px;background:#0a1224;border:1px solid #2c4474;overflow:hidden;position:relative}
#cl90 .pb i{display:block;height:100%;background:linear-gradient(#6cf08f,#1fa24a)}
#cl90 .pb.y i{background:linear-gradient(#ffd24a,#f0a020)}
#cl90 .pb b{position:absolute;inset:0;text-align:center;font:800 10px/14px 'Baloo 2',sans-serif;text-shadow:0 1px 2px #000}
#cl90 .bt{display:inline-block;padding:6px 14px;border-radius:11px;background:linear-gradient(#6cf08f,#1fa24a);border:2px solid #0c4a20;font:400 15px 'Lilita One',sans-serif;color:#fff;cursor:pointer;text-align:center;user-select:none}
#cl90 .bt.b2{background:linear-gradient(#5d8ee8,#2d58b8);border-color:#10285a}
#cl90 .bt.r{background:linear-gradient(#ff6b6b,#d63a4a);border-color:#5a1020}
#cl90 .bt.s{padding:3px 8px;font-size:12px;border-radius:8px}
#cl90 .bt.off{opacity:.45;pointer-events:none}
#cl90 .mu{text-align:center;padding:26px 12px;font:700 14px 'Baloo 2',sans-serif;color:#9db4d6}
#cl90 .er{padding:8px 10px;border-radius:10px;background:#5a1020;border:1.5px solid #ff6b6b;font:700 12px 'Baloo 2',sans-serif;word-break:break-word}
#cl90 input,#cl90 textarea,#cl90 select{width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:1.5px solid #2c4a82;background:#0a1224;color:#fff;font:600 14px 'Baloo 2',sans-serif;outline:0}
#cl90 label{display:block;font:700 12px 'Baloo 2',sans-serif;color:#9db4d6;margin:6px 0 2px}
#cl90 .eg{display:grid;grid-template-columns:repeat(10,1fr);gap:4px}
#cl90 .eg div{aspect-ratio:1;border-radius:8px;background:#0a1224;border:1.5px solid #2c4474;display:grid;place-items:center;font-size:16px;cursor:pointer}
#cl90 .eg div.on{border-color:#ffd24a;background:#3a2a0a}
#cl90 .row2{display:flex;gap:8px}#cl90 .row2>*{flex:1}
#cl90 .mb{display:flex;align-items:center;gap:6px;padding:8px;border-radius:12px;background:#16264a;border:1.5px solid #2c4a82}
#cl90 .mb .nm{font-size:14px}
#cl90 .tag{font:800 10px 'Baloo 2',sans-serif;padding:1px 6px;border-radius:7px;background:#2c4a82;color:#ffe27a}
#cl90 .chat{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:4px;padding:0 10px}
#cl90 .cm{font:600 13px 'Baloo 2',sans-serif;word-break:break-word}#cl90 .cm b{color:#ffd24a}
#cl90 .cm.me b{color:#6cf08f}
#cl90 .cb{display:flex;gap:6px;padding:8px 10px 10px}
#cl90 .mis{border-color:#ffd24a;background:linear-gradient(#1e2c52,#16264a)}`;
document.head.appendChild(st);
const pn=document.createElement('div');pn.id='cl90';document.body.appendChild(pn);

/* ---------- datos ---------- */
const castle=()=>{try{return S.b.some(b=>b.t=='cclan'&&!b.ruin&&!b.nb&&!(b.up>0))}catch(e){return false}};
function apply(d){CL.st=d;CL.at=Date.now();if(d&&d.in){CL.prod=d.prod||0;CL.disc=d.disc||0}else{CL.prod=0;CL.disc=0}
 try{if(d&&d.gems!=null&&d.paid>0&&typeof S!='undefined'&&S){S.gem=d.gems;try{note('Misión de clan cumplida: +'+d.paid+' runas')}catch(_){}try{snd(990)}catch(_){}try{ui()}catch(_){}}}catch(_){}}
async function load(force){if(!onl())return CL.st;if(!force&&CL.st&&Date.now()-CL.at<15000)return CL.st;
 try{const r=await sb.rpc('clan_state');if(r.error)throw r.error;apply(r.data);U.err=''}catch(e){U.err=(e&&e.message)||String(e)}return CL.st}
async function call(fn,args){if(U.busy)return null;U.busy=1;U.err='';draw();let r=null;
 try{const x=await sb.rpc(fn,args||{});if(x.error)throw x.error;r=x.data}catch(e){U.err=(e&&e.message)||String(e);try{snd('deny')}catch(_){}}
 U.busy=0;return r}

/* ---------- misión semanal ---------- */
const mText=w=>w.kind=='stars'?'Consigan '+fmt(w.target)+' estrellas en asaltos':w.kind=='wins'?'Ganen '+fmt(w.target)+' asaltos':'Saqueen '+fmt(w.target)+' de oro y elixir';
function left(ms){let s=Math.max(0,(ms-Date.now())/1000|0);const d=s/86400|0,h=(s%86400)/3600|0,m=(s%3600)/60|0;return d?d+'d '+h+'h':h?h+'h '+m+'m':m+'m'}
function missionCard(){const d=CL.st;
 if(!d||!d.in)return `<div class="it mis"><div class=r1><div class=em>🛡️</div><div class=nm>Misión semanal del clan<small>Únete a un clan para participar</small></div></div><div class=ds>Cada lunes el clan tiene un objetivo común y los que aportan ganan runas.</div><div class="bt b2" data-cl90=open>Ver clanes</div></div>`;
 const w=d.week,pc=Math.min(100,Math.round(w.prog/w.target*100));
 return `<div class="it mis"><div class=r1><div class=em>${emb(d.emblem)}</div><div class=nm>Misión semanal · ${esc(d.name)}<small>${w.done?'¡Completada!':'Termina en '+left(w.ends)}</small></div></div>
 <div class=ds>${mText(w)}</div><div class="pb y"><i style="width:${pc}%"></i><b>${fmt(w.prog)} / ${fmt(w.target)}</b></div>
 <div class=ds>Tu aporte: ${fmt(w.mine)} · ${w.ok?'✅ ya cuentas para la recompensa':'necesitas 2 asaltos o el 3% del objetivo'}<br>Recompensa: +${w.reward} 💎 para cada miembro que aporte</div></div>`}

/* ---------- pantallas ---------- */
const head=(t,e)=>`<div class=hd><i class=eb>${e||'🛡️'}</i><span>${esc(t)}</span><div class=x data-cl=x>✕</div></div>`;
const errB=()=>U.err?`<div class=er>${esc(U.err)}${/does not exist|schema cache|Could not find/i.test(U.err)?'<br>Falta ejecutar online_v44a/b/c.sql en Supabase.':''}</div>`:'';
function tabs(list,cur){cur=cur||U.tab;const I=(window.UI93&&UI93.ico)||{};return `<div class="tb${I[list[0][0]]?' ic':''}">${list.map(([k,l,n])=>`<div class="${cur==k?'on':''}" data-cl=tab data-k=${k}>${I[k]?`<img src="${I[k]}" alt="">`:''}<span>${l}</span>${n?`<i>${n}</i>`:''}</div>`).join('')}</div>`}
function clanRow(c){const lock=c.kind!='open';return `<div class=it><div class=r1>${eb2(c.emblem,c.lvl)}<div class=nm>${esc(c.name)}${lock?' 🔒':''}<small class=ds2>${esc(c.descr||'Sin descripción')}</small><div class=st2><span>👥 ${c.n}/50</span><span>⚔️ ${fp(c.power)}</span><span class=tag>${LANGS[c.lang]||'ES'}</span></div></div><div class="bt s ${c.kind=='req'?'':'b2'}" data-cl=join data-id=${c.id}>${c.kind=='req'?'Solicitar':'Unirse'}</div></div></div>`}
function drawNo(){
 let body='';
 if(U.nc){const f=U.cf,ok=castle(),gold=(S.g|0)>=COST;
  body=`<div class=ls><div class="bt s r" data-cl=back style="align-self:flex-start">← Volver</div>${errB()}
  ${ok?'':'<div class=er>Necesitas construir el Castillo del Clan (Ayuntamiento 3+) en tu aldea para fundar un clan. Unirte a uno no requiere edificio.</div>'}
  <label>Nombre (3-20)</label><input data-f=name maxlength=20 value="${esc(f.name)}">
  <div class=row2><div><label>Etiqueta (2-5)</label><input data-f=tag maxlength=5 value="${esc(f.tag)}"></div><div><label>Tipo</label><select data-f=kind>${Object.keys(KIND).map(k=>`<option value=${k} ${f.kind==k?'selected':''}>${KIND[k]}</option>`).join('')}</select></div></div>
  <label>Descripción</label><textarea data-f=descr maxlength=120 rows=2>${esc(f.descr)}</textarea>
  <div class=row2><div><label>Ayuntamiento mín.</label><input data-f=hall type=number min=1 max=10 value="${f.hall}"></div><div><label>Trofeos mín.</label><input data-f=tr type=number min=0 max=5000 step=50 value="${f.tr}"></div></div>
  <label>Idioma del clan</label><select data-f=lang>${Object.keys(LANGN).map(k=>`<option value=${k} ${f.lang==k?'selected':''}>${LANGN[k]}</option>`).join('')}</select>
  <label>Emblema</label><div class=eg>${EMB.map((e,i)=>`<div class="${f.emblem==i+1?'on':''}" data-cl=emb data-n=${i+1}>${e}</div>`).join('')}</div>
  <div class="bt ${ok&&gold&&!U.busy?'':'off'}" data-cl=create style="margin-top:10px;display:block">Fundar clan · ${fmt(COST)} 🪙</div>${gold?'':'<div class=ds>Te faltan '+fmt(COST-(S.g|0))+' de oro.</div>'}</div>`;
 }else{
  body=`<div class=ls><div class="bt big" data-cl=newc>Crear un clan · ${fmt(COST)} 🪙</div><div class=ds style="text-align:center">Necesita un Castillo del Clan construido</div>
  <div class=row2><input data-f=q placeholder="Nombre o etiqueta…" value="${esc(U.q)}"><div class="bt b2 s" data-cl=search style="flex:none">Buscar</div></div>${errB()}
  <label>${U.q?'Resultados':'Todos los clanes'}</label>
  ${U.list==null?'<div class=mu>Cargando…</div>':U.list.length?U.list.map(clanRow).join(''):'<div class=mu>No hay clanes todavía. ¡Funda el primero!</div>'}</div>`}
 pn.innerHTML=`<div class=sc>${head('Clanes')}${body}</div>`}
function memberRow(m,d){const me=m.id==ME,mr=d.role,isL=mr=='leader',can=!me&&mr!='member'&&m.role!='leader'&&(isL||m.role=='member');
 const acts=can?`${isL?`<div class="bt b2 s" data-cl=role data-id=${m.id} data-r=${m.role=='co'?'member':'co'}>${m.role=='co'?'Bajar':'Subir'}</div>`:''}<div class="bt r s" data-cl=kick data-id=${m.id}>✕</div>`:'';
 return `<div class=mb><div class=nm>${esc(m.name)} <span class=tag>${ROLE[m.role]}</span><small>🏛 ${m.hall} · 🏆 ${fmt(m.trophies)} · aporte ${fmt(m.val)}</small></div>${acts}${isL&&!me?`<div class="bt s" data-cl=lead data-id=${m.id} title="Hacer líder">👑</div>`:''}</div>`}

/* ---------- guerra de clanes ---------- */
const fT=ms=>{const s=Math.max(0,(ms-Date.now())/1000|0),h=s/3600|0,m=(s%3600)/60|0;return h+'h '+String(m).padStart(2,'0')+'m'};
const starsT=n=>'★'.repeat(n)+'☆'.repeat(3-n);
async function warLoad(){try{const r=await sb.rpc('clan_war_state');if(r.error)throw r.error;U.wr=r.data;U.err=''}catch(e){U.err=(e&&e.message)||String(e)}}
async function offersLoad(){try{const r=await sb.rpc('clan_war_offers');if(!r.error)U.offers=r.data||[]}catch(_){}}
function selBox(sz){const d=CL.st,n=Object.keys(U.sel).length;
 return `<label>Tamaño del escuadrón</label><select data-f=wsize>${[10,15,20,25,30,35].map(v=>`<option value=${v} ${U.size==v?'selected':''} ${d.members.length<v?'disabled':''}>${v} contra ${v}${d.members.length<v?' (te faltan miembros)':''}</option>`).join('')}</select>
 <div class=ds style="display:flex;justify-content:space-between;align-items:center"><span>Combatientes marcados: <b>${n}/${U.size}</b></span><span class="bt s b2" data-cl=wbest>Elegir los mejores</span></div>
 <div style="display:flex;flex-direction:column;gap:4px;max-height:210px;overflow-y:auto">${d.members.map(m=>`<div class=mb data-cl=wsel data-id=${m.id} style="cursor:pointer;${U.sel[m.id]?'border-color:#ffd24a;background:#2a2a1a':''}"><div class=nm>${U.sel[m.id]?'✅ ':'⬜ '}${esc(m.name)}<small>🏛 ${m.hall} · 🏆 ${fmt(m.trophies)}</small></div></div>`).join('')}</div>`}
function warBody(){const w=U.wr,st=CL.st||{};
 if(!w)return `<div class=mu>${U.err?esc(U.err)+'<br>Falta ejecutar online_v46a/b/c.sql en Supabase.':'Cargando…'}</div>`;
 let r=`<div class=ls>${errB()}<div class=it><div class=r1><div class=em>${RLI(34)}</div><div class=nm>Reliquias: ${fmt(w.relics)}<small>Racha de victorias: ${st.streak||0}${st.sbonus?' · +'+st.sbonus+'% de producción':''}</small></div></div>
 <div class=ds>Tesorería de guerra: ${fmt(w.tg)} 🪙 · ${fmt(w.te)} 💧</div>${(w.tg+w.te)>0?'<div class="bt b2" data-cl=wcol>Recoger la tesorería</div>':''}</div>`;
 const g=w.war;
 if(!g||U.wnew){
  if(w.can){r+=`<div class=it><div class=nm style="font-size:18px">⚔️ Iniciar una guerra</div><div class=ds>Dos clanes del mismo tamaño luchan: cada combatiente tiene su base y 2 ataques. 23 h de preparación y 24 h de batalla.</div>${selBox()}
   <div class="bt ${Object.keys(U.sel).length==U.size&&!U.busy?'':'off'}" data-cl=wstart style="display:block;margin-top:8px">Iniciar guerra</div></div>
   <div class=ds style="margin:2px">Ofertas de otros clanes (mismo tamaño que el escuadrón marcado):</div>
   ${U.offers.length?U.offers.map(o=>`<div class=it><div class=r1><div class=em>${emb(o.emblem)}</div><div class=nm>${esc(o.name)} <span class=tag>${esc(o.tag)}</span><small>${o.size} contra ${o.size} · Nivel ${o.lvl}</small></div><div class="bt s ${o.size==U.size&&Object.keys(U.sel).length==U.size&&!U.busy?'':'off'}" data-cl=wacc data-id=${o.id}>Aceptar</div></div></div>`).join(''):'<div class=mu style="padding:8px">No hay ofertas ahora.</div>'}`}
  else r+='<div class=mu>Tu clan no está en guerra. El líder o un colíder puede iniciar una.</div>';
 }else if(g.state=='search'){
  r+=`<div class=it><div class=nm style="font-size:18px">🔎 Buscando rival…</div><div class=ds>Escuadrón de ${g.size}. Tu oferta está visible para otros clanes; si otro clan inicia una guerra del mismo tamaño, se emparejan solos (hasta 24 h).</div>${w.can?'<div class="bt r" data-cl=wcancel style="display:block">Cancelar búsqueda</div>':''}</div>`;
 }else{
  const me=g.side,ro=g.roster,mine=ro.filter(x=>x.side==me),en=ro.filter(x=>x.side!=me),sum=a=>a.reduce((n,x)=>n+x.stars,0),avg=a=>a.length?Math.round(a.reduce((n,x)=>n+x.pct,0)/g.size):0;
  const my=g.me,cm=me=='a'?g.ca:g.cb,ce=me=='a'?g.cb:g.ca;
  let head=g.state=='prep'?`Preparación · la batalla empieza en ${fT(g.prep_end)}`:g.state=='battle'?`¡Batalla! Termina en ${fT(g.battle_end)}`:(g.res.win=='tie'?'Empate':g.res.win==me?'¡Victoria!':'Derrota');
  r+=`<div class=it style="border-color:#ffd24a"><div class=r1><div class=nm style="font-size:18px">⚔️ ${esc(cm.name)} vs ${esc(ce.name)}<small>${head}${my&&g.state=='battle'?' · ataques restantes: '+my.atk:''}</small></div></div>
   <div class=r1 style="justify-content:space-around;margin-top:6px;font:400 22px 'Lilita One'"><div style="text-align:center">${sum(mine)} ★<small style="display:block;font:700 11px 'Baloo 2'">${avg(mine)}% · ${esc(cm.tag)}</small></div><div>—</div><div style="text-align:center">${sum(en)} ★<small style="display:block;font:700 11px 'Baloo 2'">${avg(en)}% · ${esc(ce.tag)}</small></div></div>
   ${g.state=='done'?`<div class=ds>Los combatientes que atacaron recibieron Reliquias, y el clan ganó XP.</div><div class="bt b2" data-cl=wnew style="display:block">${w.can?'Nueva guerra':'Entendido'}</div>`:''}</div>`;
  r+=en.map(e=>{const m=mine.find(x=>x.slot==e.slot)||{},canA=g.state=='battle'&&my&&my.atk>0&&e.stars<3;
   return `<div class=it><div class=r1><div class=st style="width:26px;height:26px;border-radius:50%;background:#0a1224;border:2px solid #4a68a8;display:grid;place-items:center;font:800 12px 'Baloo 2';flex:none">${e.slot}</div><div class=nm style="font-size:14px">${esc(e.name)}<small>🏛 ${e.hall} · ${starsT(e.stars)} ${e.pct}%</small></div>
   ${canA?`<div class="bt s" data-cl=watk data-slot=${e.slot}>Atacar</div>`:''}${g.state=='prep'||(g.state=='battle'&&my)?`<div class="bt s b2" data-cl=wspy data-slot=${e.slot}>Ver</div>`:''}</div>
   <div class=ds style="margin:2px 0 0 34px">Tu lado: ${esc(m.name||'?')} · 🏛 ${m.hall||'?'} · ${starsT(m.stars||0)} ${m.pct||0}%</div></div>`}).join('');
  const at=g.atts.slice(0,8);if(at.length)r+=`<div class=it><div class=ds style="margin:0 0 4px"><b>Últimos ataques</b></div>${at.map(a=>`<div class=ds style="margin:1px 0">${a.side==me?'🟢':'🔴'} ${esc(a.an||'?')} → base ${a.slot}: ${starsT(a.stars)} ${a.pct}%</div>`).join('')}</div>`}
 if(w.log&&w.log.length)r+=`<div class=it><div class=ds style="margin:0 0 4px"><b>Registro de guerras</b></div>${w.log.map(l=>{const res=l.res||{},won=res.win==l.me,t=res.win=='tie';const my=l.me=='a'?res.sa:res.sb,ot=l.me=='a'?res.sb:res.sa;
  return `<div class=ds style="margin:1px 0">${t?'🟡 Empate':won?'🟢 Victoria':'🔴 Derrota'} vs ${esc(l.vs||'?')} · ${l.size}v${l.size} · ${my}★ – ${ot}★</div>`}).join('')}</div>`;
 return r+'</div>'}
function launchWar(d,slot,spy){
 pn.style.display='none';
 if(spy){const orig=sb.rpc.bind(sb);const rs=sb.rpc;sb.rpc=(fn,a)=>{if(fn=='visit_village'){sb.rpc=rs;return Promise.resolve({data:{base:d.b,name:d.name}})}return orig(fn,a)};setTimeout(()=>{if(sb.rpc!==rs&&sb.rpc.toString().indexOf('visit_village')>=0)sb.rpc=rs},4000);
  try{visit90('war-spy',d.name)}catch(e){sb.rpc=rs}return}
 const go=()=>{startReal('war:'+d.war+':'+slot,{b:d.b,g:0,e:0,loot:{f:1,sh:[]}});if(E&&E.real){E.war={id:d.war,slot,name:d.name};E.nm='Guerra · '+(d.name||'Rival')}};
 try{cloudRun(go)}catch(e){go()}}
async function warGo(slot,spy){const d=await call('clan_war_target',{p_slot:slot,p_spy:!!spy});if(!d){draw();return}
 if(!spy&&!Object.values(S.army||{}).some(n=>n>0)){toast90('Entrena tropas antes de atacar');draw();return}
 launchWar(d,slot,spy)}
/* raid amistoso a un compañero: sin botín, sin perder tropas, sin trofeos ni repetición */
async function raidGo(uid,name){
 if(!Object.values(S.army||{}).some(n=>n>0)){toast90('Entrena tropas antes de un raid');return}
 try{const r=await sb.rpc('visit_village',{p_player:uid});if(r.error||!r.data){toast90('No se pudo cargar la aldea');return}
  const d=r.data,snap={army:{...S.army},sp:{...S.sp}};pn.style.display='none';
  cloudRun(()=>{startReal('raid:'+uid,{b:d.base,g:0,e:0,loot:{f:1,sh:[]}});if(E&&E.real){E.fr=snap;E.nm='Raid amistoso · '+(d.name||name);try{REC=null}catch(_){}}})
 }catch(e){toast90('No se pudo iniciar el raid')}}
const endA93=endAttack;endAttack=function(sur){
 if(!(typeof E=='object'&&E&&E.fr&&mode=='a'&&A&&A.on))return endA93.apply(this,arguments);
 A.on=false;const p=pct(),st3=stars(),fr=E.fr;S.army={...fr.army};S.sp={...fr.sp};try{REC=null}catch(_){}
 flash(`<b class="vti" style="color:#8fd0ff">Raid amistoso</b><div class="vst" data-s="${st3}"><i class="vs${st3>0?' on':''}"></i><i class="vs${st3>1?' on':''}"></i><i class="vs${st3>2?' on':''}"></i></div><span class="vrow">Destrucción: ${pctDisp(p)}%</span><br><span class="sm">Sin botín, sin perder tropas ni trofeos.</span><br><br><button id="ok">Volver a la aldea</button>`);
 $e('ok').onclick=()=>cloudRun(()=>{closeMsg();mode='v';A=null;E=null;ui();save();try{window.clan90&&clan90.open()}catch(_){}})};
/* el ataque de guerra se registra en el servidor de guerra, no como asalto normal */
const sendRaid0=sendRaid;sendRaid=async function(id,dep,sur){
 if(!(E&&E.war))return sendRaid0.apply(this,arguments);
 const w=E.war;try{
  const dmg=[];for(const b of E.b){if(b.t=='wall')continue;const fr=b.hp<=0?100:Math.round(100*(1-b.hp/b.max));if(fr>0)dmg.push([b.t,b.x,b.y,Math.min(100,fr)])}
  const tro={};for(const t of A.tr)tro[t.k]=(tro[t.k]||0)+1;
  const r=await sb.rpc('clan_war_attack',{p_slot:w.slot,p_dmg:dmg,p_dep:Math.max(1,dep|0),p_troops:tro});
  if(r.error)return{err:r.error.message};
  const d=r.data;try{toast90('Guerra: '+starsT(d.stars)+' · +'+d.relics+' Reliquias · +'+fmt(d.g)+' 🪙/💧 a la tesorería')}catch(_){}
  U.wr=null;return{gold:0,elixir:0,trophies:S.tr,shield:0}
 }catch(e){return{err:(e&&e.message)||'error'}}};
const TRN=k=>(typeof TR!='undefined'&&TR[k])?TR[k]:{n:k,e:'?'};
const chip=(k,n)=>`<span class=tag style="font-size:12px;padding:2px 7px">${TRN(k).e} ${esc(TRN(k).n)} ×${n}</span>`;
function ccBody(){const c=U.cc;if(!c)return `<div class=mu>${U.err?esc(U.err)+'<br>Falta ejecutar online_v45a/b.sql en Supabase.':'Cargando…'}</div>`;
 const own=Object.keys(c.troops).filter(k=>c.troops[k]>0),can=!c.asked&&!c.cool&&c.used<c.cap;
 const h=Math.floor(c.cool/3600),m=Math.floor(c.cool%3600/60);
 let r=`<div class=ls>${errB()}<div class=it><div class=r1><div class=em>🏰</div><div class=nm>Tu Castillo del Clan<small>${c.used}/${c.cap} espacios · defiende tu aldea y te acompaña en tu próximo ataque</small></div></div>
 <div class=ds>${own.length?own.map(k=>chip(k,c.troops[k])).join(' '):'Vacío. Pide refuerzos a tu clan.'}</div>
 <div class="bt ${can&&!U.busy?'':'off'}" data-cl=ccreq style="display:block">${c.asked?'Pedido enviado a tu clan':c.cool?'Podrás pedir en '+h+'h '+m+'m':c.used>=c.cap?'Castillo lleno':'Pedir refuerzos'}</div></div>
 <div class=ds style="margin:4px 2px 0">Ayuda a tus compañeros (máx. 5 tropas al día por jugador):</div>`;
 const mine=(typeof S!='undefined'&&S&&S.army)?S.army:{};
 const dk=['barb','arch','giant','gob','mage','loon'].filter(k=>(mine[k]|0)>0);
 if(!c.reqs.length)r+='<div class=mu>Nadie está pidiendo tropas ahora.</div>';
 for(const q of c.reqs){const room=10-q.used,tl=Object.keys(q.troops).filter(k=>q.troops[k]>0);
  r+=`<div class=it><div class=r1><div class=nm>${esc(q.name)}<small>${q.used}/10 espacios · hoy le diste ${q.given}/5</small></div></div>
  <div class=ds>${tl.length?tl.map(k=>chip(k,q.troops[k])).join(' '):'Sin tropas aún'}</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap">${dk.length?dk.map(k=>{const ok=TRN(k).sp<=room&&q.given<5&&!U.busy;return `<div class="bt s ${ok?'':'off'}" data-cl=don data-id=${q.id} data-k=${k}>${TRN(k).e} ${esc(TRN(k).n)} (${mine[k]})</div>`}).join(''):'<span class=ds>No tienes tropas entrenadas para donar.</span>'}</div></div>`}
 return r+'</div>'}
async function ccLoad(){try{const r=await sb.rpc('cc_state');if(r.error)throw r.error;U.cc=r.data;U.err=''}catch(e){U.err=(e&&e.message)||String(e)}}
const RLI=z=>`<img src="${ART90.relic}" style="width:${z}px;height:${z}px;vertical-align:-3px">`;
const LGN=['Bronce III','Bronce II','Bronce I','Plata III','Plata II','Plata I','Oro III','Oro II','Oro I','Cristal III','Cristal II','Cristal I','Maestro III','Maestro II','Maestro I','Campeón III','Campeón II','Campeón I'];
try{if(typeof BCOL90!='undefined'){BCOL90.b_relic=['#3fe0d0','#0c5a66'];BCOL90.b_war=['#e0483a','#6a1208'];BCOL90.b_champ=['#ffd24a','#3a2a08'];BCOL90.b_master=['#b06aff','#2a0a5a']}}catch(_){}
async function lgLoad(){try{const r=await sb.rpc('league_state');if(r.error)throw r.error;U.lg=r.data;if(U.lg.in)await btLoad();U.err='';if(U.lsel==null){U.lsel={};(U.lg.roster||[]).forEach(x=>U.lsel[x]=1)}}catch(e){U.err=(e&&e.message)||String(e)}}
async function lgShopLoad(){try{const r=await sb.rpc('league_shop_state');if(r.error)throw r.error;U.lgs=r.data;U.err=''}catch(e){U.err=(e&&e.message)||String(e)}}
async function btLoad(){try{const r=await sb.rpc('bat_state');if(r.error)throw r.error;U.bt=r.data}catch(e){U.btErr=(e&&e.message)||String(e)}}
const PATHN={pct10:'10% de tus almacenes de oro y elixir',rel40:'40 Reliquias',pct20:'20% de tus almacenes',pot_b:'Poción de constructor',rel75:'75 Reliquias',pot_r:'Poción de investigación',seal:'Sello del maestro (banner exclusivo)'};
function bar(n,v,l){const lv=l.filter(x=>v>=x).length;return `<div class=mb style="display:block"><div class=nm style="font-size:13px">${esc(n)}<small>${fmt(v)} · nivel ${lv}/3 (metas ${l.map(fmt).join(' / ')})</small></div><div style="height:6px;background:#0a1224;border-radius:4px;margin-top:4px"><div style="height:6px;border-radius:4px;background:#3fe0d0;width:${Math.min(100,v/l[2]*100)}%"></div></div></div>`}
function itemsBar(){const b=U.bt,it=(b&&b.items)||{};if(!(it.pb>0)&&!(it.pr>0))return '';
 return `<div class=it><div class=nm>🧪 Tus pociones<small>Quitan 1 hora de tiempo de espera</small></div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">${it.pb>0?`<div class="bt s ${U.busy?'off':''}" data-cl=bitem data-k=pb>Constructor (${it.pb})</div>`:''}${it.pr>0?`<div class="bt s ${U.busy?'off':''}" data-cl=bitem data-k=pr>Investigación (${it.pr})</div>`:''}</div></div>`}
function btBody(){const b=U.bt,l=U.lg;
 if(!b)return `<div class=mu>${U.btErr?esc(U.btErr)+'<br>Falta ejecutar online_v48a/b.sql en Supabase.':'Cargando…'}</div>`;
 const hd=`<div class=it style="border-color:#ffd24a"><div class=r1><div class=em>🏆</div><div class=nm style="font-size:18px">Batalla de clanes<small>${b.day==0?'Día de reparto: las tareas empiezan mañana':b.day>=13?'Día de resultados':'Día '+b.day+' de 12 · termina el día en '+fT(b.day_end||Date.now())}</small></div></div><div class=ds>Dura 2 semanas, alterna con la liga y no hay guerras normales mientras tanto. Tus Reliquias: ${RLI(15)} ${fmt(b.relics)}</div></div>`;
 if(!b.in)return `<div class=ls>${errB()}${hd}<div class=mu>${b.team?'Tu clan participa, pero tú no estás en la lista (se arma con los jugadores activos de la semana anterior).':'Tu clan no participa en esta Batalla: necesita al menos '+b.minmem+' jugadores con Ayuntamiento '+b.minhall+'+ que hayan atacado la semana anterior.'} La próxima temporada empieza en ${fT(b.next)}.</div>${b.prev?`<div class=it><div class=nm>Batalla anterior: puesto ${b.prev.place} · ${fmt(b.prev.total)} puntos<small>${b.prev.ok?'El clan alcanzó el tesoro':'No se alcanzó el tesoro: sin premio por puesto'}</small></div></div>`:''}${itemsBar()}</div>`;
 const sub=U.btv||'tasks';
 const tabsH=`<div class=tb>${[['tasks','Tareas'],['group','Grupo'],['path','Camino'],['guide','Guía']].map(([k,t])=>`<div class="${sub==k?'on':''}" data-cl=bsub data-k=${k}>${t}</div>`).join('')}</div>`;
 let body='';
 if(sub=='tasks'){body=b.day>=1&&b.day<=12?`<div class=it><div class=nm>Tus puntos: ${fmt(b.mine)}<small>Hoy: multiplicador del día ×${b.dm} · personal ×${b.pm}. Con ${fmt(b.need)} puntos entras en el premio por puesto.</small></div></div>
   ${b.tasks.map(t=>bar(t.n,t.v,t.l)).join('')}
   <div class=it><div class=nm>Tareas de prestigio de hoy<small>2 Reliquias por cada una</small></div>${b.prest.map(p=>`<div class=mb><div class=nm style="font-size:13px">${p.done?'✅':'⬜'} ${esc(p.name)}</div>${p.done&&!p.claimed?`<div class="bt s ${U.busy?'off':''}" data-cl=bprest data-slot=${p.slot}>Reclamar</div>`:p.claimed?'<span class=ds>Reclamada</span>':''}</div>`).join('')}</div>`
   :`<div class=it><div class=nm>Tus puntos: ${fmt(b.mine)}<small>${b.day==0?'Las tareas empiezan mañana.':'La Batalla terminó; mira el grupo para ver los puestos.'}</small></div></div>`;
 }else if(sub=='group'){body=`<div class=it><div class=nm>Grupo de la Batalla<small>Tesoro: ${fmt(b.tes)} puntos del clan para tener premio por puesto</small></div>${b.group.map((c,i)=>`<div class=mb style="${c.me?'border-color:#3fe0d0':''}"><div class=nm style="font-size:13px">${i+1}. ${esc(c.name)} <span class=tag>${esc(c.tag)}</span><small>${fmt(c.total)} puntos · ${c.n} jugadores${c.total>=b.tes?' · tesoro ✅':''}</small></div></div>`).join('')}</div>
   ${b.prev?`<div class=it><div class=nm>Batalla anterior: puesto ${b.prev.place} · ${fmt(b.prev.total)} puntos<small>${b.prev.ok?'Alcanzaron el tesoro':'Sin tesoro: sin premio por puesto'}</small></div></div>`:''}`;
 }else if(sub=='path'){body=`<div class=it><div class=nm>Camino personal<small>Tus puntos: ${fmt(b.mine)}. Se reclama al momento.</small></div>${b.path.map(s=>`<div class=mb><div class=nm style="font-size:13px">${fmt(s.pts)} · ${esc(PATHN[s.k])}</div>${s.claimed?'<span class=ds>✅</span>':b.mine>=s.pts?`<div class="bt s ${U.busy?'off':''}" data-cl=bpath data-pts=${s.pts}>Reclamar</div>`:'<span class=ds>🔒</span>'}</div>`).join('')}</div>${itemsBar()}`;
 }else{body=`<div class=it><div class=ds><b>Cómo funciona:</b> un día de reparto, 12 de tareas y uno de resultados. Los clanes se agrupan por fuerza y el puesto depende de los puntos de todos.<br><br><b>Puntos:</b> cada día hay 4 tareas (ataques, estrellas, botín, ataques con 2+★) y una de prestigio, con 3 niveles cada una. Puntos = base × multiplicador del día (hasta ×2.1) × multiplicador personal por trofeos (hasta ×2.5).<br><br><b>Premio por puesto:</b> si el clan llega al tesoro (${fmt(b.tes)} puntos), cada miembro con ${fmt(b.need)} puntos recibe Reliquias (1º 170, 2º 128, 3º 94, 4º 68, 5º 45, más cuanto mayor es la liga del clan) y el clan gana XP y niveles de Batalla (+1% de producción cada uno).<br><br><b>Camino personal:</b> premios por tus propios puntos hasta 20.000.</div></div>`}
 return `<div class=ls>${errB()}${hd}${tabsH}${body}</div>`}
function lgBody(){const l=U.lg,d=CL.st;
 if(!l)return `<div class=mu>${U.err?esc(U.err)+'<br>Falta ejecutar online_v47a/b/c.sql en Supabase.':'Cargando…'}</div>`;
 if(!l.in)return '<div class=mu>Únete a un clan para jugar la liga.</div>';
 if(l.phase=='bat')return btBody();
 const sz=l.cfg.size,n=Object.keys(U.lsel||{}).length;
 if(U.lgv=='ladder'){const a=U.lad;if(!a)return '<div class=mu>Cargando…</div>';
  return `<div class=ls>${errB()}<div class=it><div class=r1><div class=nm style="font-size:18px">Escalera de ligas<small>El número de la derecha es la recompensa del 1.º puesto de un grupo en ese peldaño.</small></div><div class="bt s b2" data-cl=lshop data-v=main>Volver</div></div></div>${a.rows.map(r=>`<div class=mb style="${r.lg==a.mine?'border-color:#3fe0d0;background:#12303a':''}"><div class=nm style="font-size:14px">${LGN[r.lg-1]}<small>${r.n} clanes</small></div><div class=nm style="flex:none;color:#ffd24a">${RLI(15)} ${fmt(r.prize)}</div></div>`).join('')}</div>`}
 const ph=l.phase,pv=l.prev;
 let r=`<div class=ls>${errB()}<div class=it style="border-color:#3fe0d0"><div class=r1><div class=em>🏅</div><div class=nm style="font-size:18px">Liga ${LGN[l.lg-1]}<small>Temporada ${l.n} · ${ph=='signup'?'Inscripción abierta, termina en '+fT(l.signup_end):ph=='war'?'Rondas en curso, terminan en '+fT(l.war_end):'Descanso hasta la próxima temporada ('+fT(l.next)+')'}</small></div></div>
  <div class=ds>Premio por puesto en tu liga: 1º ${RLI(15)} ${fmt(l.prize.first)} · último ${RLI(15)} ${fmt(l.prize.last)}. Cada combatiente cobra 5% + 12% por cada estrella que consiga (máx. 100%). Suben los 2 primeros y bajan los 2 últimos del grupo.</div>
  <div class=r1 style="gap:6px"><div class=ds style="flex:1">Tus Reliquias: <b>${RLI(15)} ${fmt(l.relics)}</b></div><div class="bt s b2" data-cl=lshop data-v=ladder>Escalera</div><div class="bt s b2" data-cl=lleague>Tienda</div></div></div>`;
 r+=itemsBar();
 if(pv&&pv.bonus_left>0&&l.role=='leader')r+=`<div class=it style="border-color:#ffd24a"><div class=nm>🎁 Bonos del líder: ${pv.bonus_left}<small>Cada uno da ${RLI(15)} ${fmt(pv.bonus_val)} a un combatiente de la temporada ${pv.season}.</small></div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-top:6px;max-height:130px;overflow-y:auto">${d.members.map(m=>`<div class=mb><div class=nm style="font-size:13px">${esc(m.name)}</div><div class="bt s ${U.busy?'off':''}" data-cl=lbon data-id=${m.id}>Dar</div></div>`).join('')}</div></div>`;
 if(pv)r+=`<div class=it><div class=nm>Temporada ${pv.season}: puesto ${pv.place}/${pv.g} ${pv.moved>0?'⬆ Ascenso':pv.moved<0?'⬇ Descenso':'= Te quedas'}<small>${pv.got>0?'Tú ganaste '+RLI(15)+' '+fmt(pv.got):'No participaste en el reparto'}</small></div></div>`;
 if(l.table.length){
  r+=`<div class=it><div class=nm>Clasificación del grupo<small>Estrellas · % de destrucción · victorias</small></div>${l.table.map(t=>`<div class=mb style="${t.me?'border-color:#3fe0d0':''}"><div class=nm style="font-size:13px">${t.rk}. ${esc(t.name)} <span class=tag>${esc(t.tag)}</span><small>${t.st} ★ · ${t.pc}% · ${t.wn} victorias</small></div></div>`).join('')}</div>
  <div class=it><div class=nm>Jornadas</div>${[...new Set(l.fix.map(f=>f.rnd))].map(rn=>`<div class=ds><b>Ronda ${rn+1}</b></div>${l.fix.filter(f=>f.rnd==rn).map(f=>`<div class=ds style="${f.mine?'color:#7fe8dc':''}">${esc(f.a)} ${f.sa!=null?f.sa+' ★ — '+f.sb+' ★ ':'vs '}${esc(f.b)}</div>`).join('')}`).join('')}
  ${l.live_war?'<div class="bt b2" data-cl=lgo style="display:block;margin-top:8px">⚔️ Ir a la guerra de hoy (1 ataque por combatiente)</div>':''}</div>`}
 if(ph=='signup'){
  if(!l.can)r+=`<div class=mu>${l.enrolled?'Tu clan está inscrito en la temporada.':'Tu clan aún no está inscrito. El líder o un colíder elige a los '+sz+' combatientes.'}</div>`;
  else if(l.clvl<l.cfg.minlv)r+=`<div class=mu>Tu clan debe ser nivel ${l.cfg.minlv} para entrar (ahora ${l.clvl}).</div>`;
  else if(d.members.length<sz)r+=`<div class=mu>Necesitas al menos ${sz} miembros para inscribirte.</div>`;
  else r+=`<div class=it><div class=nm style="font-size:16px">${l.enrolled?'✅ Inscritos · puedes cambiar la alineación':'Inscribir al clan'}<small>Marca exactamente ${sz} combatientes. Al empezar la temporada la alineación se cierra.</small></div>
   <div class=ds style="display:flex;justify-content:space-between;align-items:center"><span>Marcados: <b>${n}/${sz}</b></span><span class="bt s b2" data-cl=lbest>Elegir los mejores</span></div>
   <div style="display:flex;flex-direction:column;gap:4px;max-height:210px;overflow-y:auto">${d.members.map(m=>`<div class=mb data-cl=lsel data-id=${m.id} style="cursor:pointer;${U.lsel[m.id]?'border-color:#ffd24a;background:#2a2a1a':''}"><div class=nm>${U.lsel[m.id]?'✅ ':'⬜ '}${esc(m.name)}<small>🏛 ${m.hall} · 🏆 ${fmt(m.trophies)}</small></div></div>`).join('')}</div>
   <div class="bt ${n==sz&&!U.busy?'':'off'}" data-cl=lenr style="display:block;margin-top:8px">${l.enrolled?'Guardar alineación':'Inscribir'}</div>${l.enrolled?'<div class="bt r s" data-cl=lunenr style="display:block;margin-top:6px">Retirar al clan</div>':''}</div>`;
 }else if(!l.table.length)r+=`<div class=mu>${l.enrolled?'Tu clan estaba inscrito pero no encontró rivales en su liga esta temporada.':'Tu clan no participa en esta temporada. La próxima inscripción abre en '+fT(l.next)+'.'}</div>`;
 return r+'</div>'}
function topBody(){
 if(U.top==null)return `<div class=mu>Cargando…</div>`;
 return `<div class=ls>${errB()}<label>Top clanes por trofeos</label><div class=ds>Suma de trofeos de todos los miembros.</div>${U.top.map((c,i)=>`<div class="it tp ${CL.st&&CL.st.id==c.id?'mine':''}"><div class=r1><span class="rk r${i+1}">${i+1}</span>${eb2(c.emblem,c.lvl)}<div class=nm>${esc(c.name)}<div class=st2><span>👥 ${c.n}/50</span><span>🏆 ${fmt(c.trs)}</span><span>⚔️ ${fp(c.power)}</span></div></div></div></div>`).join('')||'<div class=mu>Aún no hay clanes.</div>'}</div>`}
function drawIn(){const d=CL.st,staff=d.role!='member',lv=d.lvl;
 const grp=(U.tab=='top'||U.tab=='lg')?U.tab:'clan';let t=tabs([['clan','Clan'],['top','Clasificación'],['lg','Liga']],grp);let body='';
 if(grp=='clan')t+=`<div class=sub>${[['clan','Resumen'],['mem','Gestión',d.reqs||0],['cc','Tropas'],['war','Guerra'],['set','Ajustes']].map(([k,l,n])=>`<div class="${U.tab==k?'on':''}" data-cl=tab data-k=${k}>${l}${n?` <i>${n}</i>`:''}</div>`).join('')}</div>`;
 if(U.tab=='mem'){
  body=`<div class=ls>${errB()}${(U.reqs||[]).map(r=>`<div class=mb><div class=nm>${esc(r.name)}<small>Solicita entrar · 🏛 ${r.hall} · 🏆 ${fmt(r.trophies)}</small></div><div class="bt s" data-cl=acc data-id=${r.id}>✔</div><div class="bt r s" data-cl=den data-id=${r.id}>✕</div></div>`).join('')}
  ${d.members.map(m=>memberRow(m,d)).join('')}</div>`;
 }else if(U.tab=='top'){body=topBody()
 }else if(U.tab=='war'){body=warBody()
 }else if(U.tab=='lg'){body=lgBody()
 }else if(U.tab=='cc'){body=ccBody()
 }else if(U.tab=='set'){
  const e=U.ef||(U.ef={descr:d.descr,emblem:d.emblem,kind:d.kind,hall:d.min_hall,tr:d.min_tr,lang:d.lang||'es'});
  body=`<div class=ls>${errB()}${staff?`<label>Descripción</label><textarea data-e=descr maxlength=120 rows=2>${esc(e.descr)}</textarea>
  <div class=row2><div><label>Tipo</label><select data-e=kind>${Object.keys(KIND).map(k=>`<option value=${k} ${e.kind==k?'selected':''}>${KIND[k]}</option>`).join('')}</select></div><div><label>Ayuntamiento mín.</label><input data-e=hall type=number min=1 max=10 value="${e.hall}"></div></div>
  <label>Trofeos mínimos</label><input data-e=tr type=number min=0 max=5000 step=50 value="${e.tr}">
  <label>Idioma del clan</label><select data-e=lang>${Object.keys(LANGN).map(k=>`<option value=${k} ${e.lang==k?'selected':''}>${LANGN[k]}</option>`).join('')}</select>
  <label>Emblema</label><div class=eg>${EMB.map((x,i)=>`<div class="${e.emblem==i+1?'on':''}" data-cl=eemb data-n=${i+1}>${x}</div>`).join('')}</div>
  <div class="bt" data-cl=save style="display:block;margin-top:8px">Guardar cambios</div>`:'<div class=mu>Solo el líder y los colíderes pueden editar el clan.</div>'}
  <div class="bt r" data-cl=leave style="display:block;margin-top:14px">Salir del clan</div></div>`;
 }else{
  const pc=lv>=25?100:Math.round((d.xp-d.xp_lo)/(d.xp_hi-d.xp_lo)*100),staffR=(U.reqs||[]).length;
  body=`<div class=ls>${errB()}<div class=it><div class=r1>${eb2(d.emblem,lv)}<div class=nm>${esc(d.name)}<small class=ds2>${esc(d.descr||'Sin descripción')}</small><div class=st2><span>👥 ${d.members.length}/50</span><span>⚔️ ${fp(d.power)}</span><span class=tag>${LANGS[d.lang]||'ES'}</span></div></div></div></div>
  <div class=lvr><span>Nivel de clan ${lv}</span><span>${lv>=25?'Máx.':fmt(d.xp-d.xp_lo)+' / '+fmt(d.xp_hi-d.xp_lo)+' XP'}</span></div><div class=pb><i style="width:${pc}%"></i></div>
  <div class=it><label style="margin:0 0 4px">El clan da</label><div class=pk><span>Minería de oro y elixir</span><b>+${d.prod}%</b></div><div class=pk><span>Costo de construcción</span><b>−${d.disc}%</b></div></div>
  ${missionCard()}
  ${d.role!='member'&&staffR?`<div class=it><label style="margin:0 0 4px">Solicitudes (${staffR})</label>${(U.reqs||[]).map(r=>`<div class=mb><div class=nm>${esc(r.name)}<small>🏛 ${r.hall} · 🏆 ${fmt(r.trophies)}</small></div><div class="bt s" data-cl=acc data-id=${r.id}>✔</div><div class="bt r s" data-cl=den data-id=${r.id}>✕</div></div>`).join('')}</div>`:''}
  <label>Participantes (${d.members.length}/50)</label>
  <div class=pl>${[...d.members].sort((a,b)=>b.trophies-a.trophies).map(m=>{const me=m.id==ME,on=m.seen!=null&&m.seen<5;
   return `<div class=pm><span class=sn>${on?'<i class=dot></i>':ago(m.seen)}</span><div class=pn2>${esc(m.name)}${me?' <em>(Tú)</em>':''}<small>🏆 ${fmt(m.trophies)}</small></div><span class=tag>${ROLE[m.role]}</span><span class=ay>AY ${m.hall}</span>${me?'':`<div class="ib" data-cl=visit data-id=${m.id} data-n="${esc(m.name)}" title="Visitar">🏠</div><div class="ib" data-cl=raid data-id=${m.id} data-n="${esc(m.name)}" title="Raid amistoso">⚔️</div>`}</div>`}).join('')}</div></div>`}
 pn.innerHTML=`<div class=sc>${head(d.name,emb(d.emblem))}${t}${body}</div>`;
 if(U.tab=='chat'){const c=$('cl90c');if(c)c.scrollTop=c.scrollHeight}}
function draw(){if(pn.style.display!='flex')return;
 const keep=document.activeElement&&document.activeElement.dataset?(document.activeElement.dataset.f||document.activeElement.dataset.e):null;
 if(!CL.st){pn.innerHTML=`<div class=sc>${head('Clanes')}<div class=mu>${U.err?esc(U.err)+'<br><br><div class="bt b2" data-cl=retry>Reintentar</div>':'Cargando…'}</div></div>`;return}
 if(CL.st.in)drawIn();else drawNo();
 if(keep){const el=pn.querySelector('[data-f="'+keep+'"],[data-e="'+keep+'"]');if(el&&el.tagName!='SELECT'&&el.type!='number'){el.focus();try{const l=el.value.length;el.setSelectionRange(l,l)}catch(_){}}}}

async function open(){if(!onl())return;pn.style.display='flex';U.err='';draw();await load(true);
 if(CL.st&&!CL.st.in){U.nc=0;U.tab='find';await search()}else{U.tab='clan';U.ef=null}
 draw()}
async function search(){const r=await call('clan_search',{p_q:U.q});if(r)U.list=r;draw()}
async function refresh(){await load(true);if(CL.st&&CL.st.in&&CL.st.reqs>0&&CL.st.role!='member'){const r=await sb.rpc('clan_reqs_list');if(!r.error)U.reqs=r.data}else U.reqs=[]}
async function chatLoad(){if(!CL.st||!CL.st.in)return;try{const r=await sb.rpc('clan_chat_list');if(!r.error){const n=r.data.length?r.data[r.data.length-1].id:0,o=U.chat.length?U.chat[U.chat.length-1].id:0;if(n!=o||r.data.length!=U.chat.length){U.chat=r.data;if(U.tab=='chat'&&!U.busy){const inp=pn.querySelector('[data-f=msg]');const v=inp?inp.value:'';U.msg=v;draw()}}}}catch(_){}}
setInterval(()=>{if(pn.style.display=='flex'&&U.tab=='chat'&&CL.st&&CL.st.in)chatLoad()},4000);
/* bonos al entrar y cada rato */
function boot(){if(!onl())return;load(true).then(()=>{try{if(typeof ui=='function')ui()}catch(_){}})}
setTimeout(boot,7000);setInterval(()=>{try{if(!document.hidden&&onl())load(true)}catch(_){}},180000);

/* ---------- eventos ---------- */
pn.addEventListener('input',e=>{const t=e.target;if(t.dataset.f=='wsize'){U.size=+t.value;U.sel={};draw();return}
 if(t.dataset.f){const k=t.dataset.f;if(k=='q')U.q=t.value;else if(k=='msg')U.msg=t.value;else U.cf[k]=(k=='hall'||k=='tr')?Number(t.value)||0:t.value}
 if(t.dataset.e&&U.ef){const k=t.dataset.e;U.ef[k]=(k=='hall'||k=='tr')?Number(t.value)||0:t.value}});
pn.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.dataset&&e.target.dataset.f=='msg'){e.preventDefault();doSend()}if(e.key=='Enter'&&e.target.dataset&&e.target.dataset.f=='q'){e.preventDefault();search()}});
async function doSend(){const m=(U.msg||'').trim();if(!m||U.busy)return;const r=await call('clan_chat_send',{p_msg:m});if(r){U.msg='';U.chat=U.chat.concat([r])}draw()}
async function after(){await refresh();draw()}
pn.addEventListener('click',async e=>{const b=e.target.closest('[data-cl],[data-cl90]');if(!b){if(e.target===pn)pn.style.display='none';return}
 if(b.dataset.cl90){U.tab='find';open();return}
 const k=b.dataset.cl,id=b.dataset.id;
 if(k=='x'){pn.style.display='none';try{if(window.tasks90&&tasks90.refreshCard)tasks90.refreshCard()}catch(_){}return}
 if(k=='retry'){open();return}
 if(k=='newc'){U.nc=1;U.err='';draw();return}
 if(k=='back'){U.nc=0;U.err='';draw();return}
 if(k=='visit'){pn.style.display='none';try{visit90(id,b.dataset.n)}catch(_){}return}
 if(k=='raid'){raidGo(id,b.dataset.n);return}
 if(k=='tab'){U.tab=b.dataset.k;U.err='';if(U.tab=='top'){U.top=null;draw();try{const r=await sb.rpc('clan_top100');if(r.error)throw r.error;U.top=r.data}catch(e){U.err=(e&&e.message)||String(e);U.top=[]}}if(U.tab=='mem')await refresh();if(U.tab=='cc'){U.cc=null;draw();await ccLoad()}if(U.tab=='war'){U.wr=null;U.wnew=0;draw();await warLoad();await load(true);if(U.wr&&!U.wr.war&&U.wr.can)await offersLoad()}if(U.tab=='lg'){U.lg=null;U.bt=null;U.btErr='';U.lsel=null;U.lgv='main';draw();await lgLoad();await load(true)}if(U.tab=='set')U.ef=null;draw();return}
 if(k=='emb'){U.cf.emblem=+b.dataset.n;draw();return}
 if(k=='eemb'){U.ef.emblem=+b.dataset.n;draw();return}
 if(k=='search'){await search();return}
 if(k=='join'){const r=await call('clan_join',{p_id:id});if(r){if(r.pending){U.err='';try{note('Solicitud enviada')}catch(_){}}else{await load(true);U.tab='clan'}}draw();return}
 if(k=='create'){if(!castle()||(S.g|0)<COST)return;const f=U.cf;
  try{await sb.rpc('save_state',{p_name:S.name,p_save:S})}catch(_){}
  const r=await call('clan_create',{p_name:f.name,p_tag:f.tag,p_descr:f.descr,p_emblem:f.emblem,p_kind:f.kind,p_hall:f.hall,p_tr:f.tr});
  if(r){try{if(f.lang&&f.lang!='es')await sb.rpc('clan_set_lang',{p_lang:f.lang})}catch(_){}U.nc=0;S.g=(S.g|0)-COST;try{save()}catch(_){}try{ui()}catch(_){}try{note('¡Clan fundado!')}catch(_){}U.tab='clan';await load(true)}draw();return}
 if(k=='send'){await doSend();return}

 if(k=='wsel'){const n=Object.keys(U.sel).length;if(U.sel[id])delete U.sel[id];else if(n<U.size)U.sel[id]=1;draw();return}
 if(k=='wbest'){U.sel={};[...CL.st.members].sort((a,b)=>b.trophies-a.trophies).slice(0,U.size).forEach(m=>U.sel[m.id]=1);draw();return}
 if(k=='wstart'){const r=await call('clan_war_start',{p_size:U.size,p_members:Object.keys(U.sel)});if(r){U.sel={};U.wnew=0;await warLoad();await load(true)}draw();return}
 if(k=='wacc'){const r=await call('clan_war_accept',{p_id:id,p_members:Object.keys(U.sel)});if(r){U.sel={};U.wnew=0;await warLoad();await load(true)}draw();return}
 if(k=='wcancel'){const r=await call('clan_war_cancel');if(r){await warLoad();await offersLoad()}draw();return}
 if(k=='wnew'){U.wnew=1;await offersLoad();draw();return}
 if(k=='wcol'){const r=await call('war_collect',{p_gmax:Math.max(0,Math.floor(cap.g()-S.g)),p_emax:Math.max(0,Math.floor(cap.e()-S.e))});if(r){S.g+=r.g;S.e+=r.e;try{ui()}catch(_){}try{save()}catch(_){}try{toast90('Recogido: +'+fmt(r.g)+' 🪙 +'+fmt(r.e)+' 💧')}catch(_){}await warLoad()}draw();return}
 if(k=='bsub'){U.btv=b.dataset.k;draw();return}
 if(k=='bprest'){const r=await call('bat_claim_prest',{p_slot:+b.dataset.slot});if(r){try{toast90('+2 Reliquias')}catch(_){}await btLoad()}draw();return}
 if(k=='bpath'){const r=await call('bat_claim_path',{p_pts:+b.dataset.pts,p_gmax:Math.floor(cap.g()),p_emax:Math.floor(cap.e())});if(r){if(r.g)S.g=Math.min(cap.g(),(S.g|0)+r.g);if(r.e)S.e=Math.min(cap.e(),(S.e|0)+r.e);try{ui()}catch(_){}try{save()}catch(_){}try{toast90('¡Recompensa reclamada!')}catch(_){}await btLoad()}draw();return}
 if(k=='bitem'){const kk=b.dataset.k;let ok=0;if(kk=='pb'){ok=S.b.some(x=>x.up>0)}else{ok=!!(S.rs&&S.rs.rem!=0)}
  if(!ok){try{toast90(kk=='pb'?'No hay construcciones en curso':'No hay investigación en curso')}catch(_){}return}
  const r=await call('bat_use_item',{p_k:kk});if(r){if(kk=='pb'){for(const x of S.b)if(x.up>0)x.up=Math.max(.01,x.up-3600)}else{if(S.rs.rem==null)S.rs.rem=Math.max(0,((S.rs.end||0)-Date.now())/1000);S.rs.rem=Math.max(.01,S.rs.rem-3600);S.rs.end=Date.now()+S.rs.rem*1000}
   try{save()}catch(_){}try{ui()}catch(_){}try{toast90('Poción usada: −1 hora')}catch(_){}await btLoad()}draw();return}
 if(k=='lsel'){const n=Object.keys(U.lsel).length;if(U.lsel[id])delete U.lsel[id];else if(n<U.lg.cfg.size)U.lsel[id]=1;draw();return}
 if(k=='lbest'){U.lsel={};[...CL.st.members].sort((a,b)=>b.trophies-a.trophies).slice(0,U.lg.cfg.size).forEach(m=>U.lsel[m.id]=1);draw();return}
 if(k=='lenr'){const r=await call('league_enroll',{p_members:Object.keys(U.lsel)});if(r){try{toast90('Alineación guardada')}catch(_){}U.lsel=null;await lgLoad()}draw();return}
 if(k=='lunenr'){const r=await call('league_unenroll');if(r){U.lsel=null;await lgLoad()}draw();return}
 if(k=='lbon'){const r=await call('league_bonus_give',{p_user:id});if(r){try{toast90('Bono entregado')}catch(_){}await lgLoad()}draw();return}
 if(k=='lleague'){pn.style.display='none';try{window.lg93&&lg93.open()}catch(_){}return}
 if(k=='lshop'){U.lgv=b.dataset.v;U.err='';if(U.lgv=='shop'){U.lgs=null;draw();await lgShopLoad()}if(U.lgv=='ladder'){U.lad=null;draw();try{const r=await sb.rpc('league_ladder');if(r.error)throw r.error;U.lad=r.data}catch(e){U.err=(e&&e.message)||String(e)}}draw();return}
 if(k=='lgo'){U.tab='war';U.wr=null;U.wnew=0;draw();await warLoad();await load(true);draw();return}
 if(k=='lbuy'){const r=await call('league_shop_buy',{p_id:id});if(r){if(r.g)S.g=Math.min(cap.g(),(S.g|0)+r.g);if(r.e)S.e=Math.min(cap.e(),(S.e|0)+r.e);if(r.gems!=null)S.gem=r.gems;try{ui()}catch(_){}try{save()}catch(_){}try{toast90(r.cosm?'¡Banner desbloqueado! Equípalo en tu perfil':'Compra hecha')}catch(_){}await lgShopLoad()}draw();return}
 if(k=='watk'){await warGo(+b.dataset.slot,false);return}
 if(k=='wspy'){await warGo(+b.dataset.slot,true);return}
 if(k=='ccreq'){const r=await call('cc_request');if(r)await ccLoad();draw();return}
 if(k=='don'){const kk=b.dataset.k;if(!(S.army[kk]>0))return;const r=await call('cc_donate',{p_to:id,p_k:kk});if(r){S.army[kk]--;try{ui()}catch(_){}try{save()}catch(_){}try{note('Tropa donada')}catch(_){}await ccLoad()}draw();return}
 if(k=='acc'||k=='den'){const r=await call('clan_manage',{p_act:k=='acc'?'accept':'deny',p_user:id});if(r!==null)await refresh();draw();return}
 if(k=='kick'){if(!confirm('¿Expulsar a este miembro?'))return;const r=await call('clan_manage',{p_act:'kick',p_user:id});if(r)await refresh();draw();return}
 if(k=='role'){const r=await call('clan_manage',{p_act:'role',p_user:id,p_val:b.dataset.r});if(r)await refresh();draw();return}
 if(k=='lead'){if(!confirm('¿Traspasar el liderazgo a este miembro? Pasarás a ser colíder.'))return;const r=await call('clan_manage',{p_act:'transfer',p_user:id});if(r)await refresh();draw();return}
 if(k=='save'){const e2=U.ef;const r=await call('clan_edit',{p_descr:e2.descr,p_emblem:e2.emblem,p_kind:e2.kind,p_hall:e2.hall,p_tr:e2.tr});if(r){try{if(e2.lang)await sb.rpc('clan_set_lang',{p_lang:e2.lang})}catch(_){}await refresh();try{note('Clan actualizado')}catch(_){}}draw();return}
 if(k=='leave'){if(!confirm('¿Seguro que quieres salir del clan?'))return;const r=await call('clan_leave');if(r){CL.prod=0;CL.disc=0;CL.st=null;U.chat=[];await load(true);U.tab='find';U.list=null;search()}draw();return}});

/* ---------- entradas: menú y panel del Castillo ---------- */
function inject(){const m=$('menu');if(!m)return;if(m.querySelector('[data-cl90m]'))return;
 const au=[...m.querySelectorAll('.mr')].find(x=>/Audio/.test(x.textContent));if(!au)return;
 const b=au.cloneNode(true);b.removeAttribute('data-cat');b.removeAttribute('data-ntf');b.removeAttribute('data-tk90');b.dataset.cl90m='1';
 const ic=b.querySelector('.mi');if(ic)ic.innerHTML='<svg class="bri" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path fill="currentColor" fill-opacity=".2" d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.500-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>';
 const tx=b.querySelector('.mt');if(tx)tx.textContent='Clan';au.parentNode.insertBefore(b,au)}
const mo=new MutationObserver(inject);
const wait=setInterval(()=>{const m=$('menu');if(m){clearInterval(wait);mo.observe(m,{childList:true,subtree:true});inject()}},500);
document.addEventListener('click',e=>{const b=e.target.closest('[data-cl90m]');if(!b)return;e.stopImmediatePropagation();e.preventDefault();try{const m=$('menu');if(m)m.style.display='none'}catch(_){}open()},true);
(function(){const p=document.getElementById('panel');if(p)p.addEventListener('click',e=>{const b=e.target.closest('[data-cc]');if(!b)return;e.stopImmediatePropagation();e.preventDefault();open()},true)})();

/* ---------- registrar el Castillo del Clan como edificio ---------- */
try{
 TY.cclan={n:'Castillo del Clan',s:3,h:40,hp:800,c:'#8a919a',r:'#5f86c8',e:'🏰',cost:10000,cur:'g',max:1};
 LIM.cclan=[0,0,1,1,1,1,1,1,1,1];BT.cclan=300;SPR_NO.cclan=1;
 DESC.cclan='Sede de tu clan. Constrúyelo para poder fundar un clan (30.000 de oro). Los clanes dan bonos de producción y construcción, chat y una misión semanal con runas.';
 if(CATS.mil&&CATS.mil[1].indexOf('cclan')<0)CATS.mil[1].push('cclan');
}catch(e){console.warn('cclan reg',e)}

/* ---------- dibujo ---------- */
function coin(b,u,v,z){const p=PS(b,u,v,z);g.beginPath();g.ellipse(p[0],p[1],4.200,2.400,0,0,6.283);g.fillStyle='#ffc83a';g.fill();g.strokeStyle='#9a6410';g.lineWidth=1;g.stroke();g.beginPath();g.ellipse(p[0],p[1]-1,2.800,1.300,0,0,6.283);g.fillStyle='#ffe58a';g.fill()}
function drCClan(b){const dk='#2b2f36';
 mPoly(b,[[-.1,-.1,0],[3.1,-.1,0],[3.1,3.1,0],[-.1,3.1,0]],'rgba(20,40,10,.22)');
 mBox(b,.1,.1,2.9,2.9,0,4,'#8a919a',dk);
 mBox(b,.2,.2,2.8,2.8,4,28,'#a8aeb6',dk);
 mBox(b,.1,.1,2.9,2.9,28,33,'#c3c8ce',dk);
 mPoly(b,[[.55,2.8,4],[1.45,2.8,4],[1.45,2.8,17],[1,2.8,21],[.55,2.8,17]],'#4a6a9c',dk);
 mPoly(b,[[2.8,1.55,4],[2.8,2.45,4],[2.8,2.45,17],[2.8,2,21],[2.8,1.55,17]],'#3d5a88',dk);
 mPoly(b,[[2.8,.7,10],[2.8,1,10],[2.8,1,15],[2.8,.7,15]],'#1c2028');
 mPoly(b,[[.55,.55,33.2],[2.45,.55,33.2],[2.45,2.45,33.2],[.55,2.45,33.2]],'#8b5a2b',dk);
 for(const c of [[.1,.1],[2.3,.1],[.1,2.3],[2.3,2.3]])mBox(b,c[0],c[1],c[0]+.6,c[1]+.6,33,40,'#c3c8ce',dk);
 coin(b,1.1,1.1,34);coin(b,1.5,1.3,34);coin(b,1.8,1.9,34);coin(b,1.2,1.9,34);
 coin(b,-.1,2.9,0);coin(b,.2,3.2,0);coin(b,3.1,1.2,0);coin(b,3.2,1.7,0);coin(b,2.9,3.1,0)}
const dr0=drB0;drB0=function(b){if(b&&b.t=='cclan'&&!b.ruin&&!b.nb){drCClan(b);return}return dr0(b)};

/* ---------- refuerzos en combate: defienden tu aldea y te acompañan al atacar ---------- */
const CC={pend:null,cur:null};
function toast90(t){const d=document.createElement('div');d.textContent=t;d.style.cssText='position:fixed;left:50%;top:84px;transform:translateX(-50%);z-index:2147483000;padding:8px 16px;border-radius:14px;background:#16264aee;border:2px solid #ffd24a;color:#fff;font:700 14px "Baloo 2",sans-serif;pointer-events:none';document.body.appendChild(d);setTimeout(()=>d.remove(),2600)}
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
async function ccReportLost(){const c=CC.cur;CC.cur=null;if(!c||!c.dt.length||!onl())return;const dead={};for(const d of c.dt)if(d.hp<=0)dead[d.k]=(dead[d.k]||0)+1;if(!Object.keys(dead).length)return;try{await sb.rpc('cc_lost',{p_id:c.id,p_dead:dead})}catch(_){}}
async function ccStart(id){if(!onl()||typeof id!='string'||!UUID.test(id))return;
 await Promise.resolve();if(!E||E.real!==id||!A)return;
 if(CC.cur&&CC.cur.id!==id)await ccReportLost();
 const E0=E;let of={},tk={};
 try{const r=await sb.rpc('cc_of',{p_id:id});if(!r.error&&r.data)of=r.data}catch(_){}
 if(!CC.pend){try{const r=await sb.rpc('cc_take');if(!r.error&&r.data)tk=r.data}catch(_){}}
 if(E!==E0||mode!='a'){if(Object.keys(tk).length){try{await sb.rpc('cc_return',{p_left:tk})}catch(_){}}return}
 /* defensores */
 const cb=E.b.find(b=>b.t=='cclan'&&b.hp>0)||E.b[0],hx=cb?cb.x+(TY[cb.t].s||3)/2:12,hy=cb?cb.y+(TY[cb.t].s||3)/2:12,dt=[];let i=0;
 for(const k of Object.keys(of))if(TR[k])for(let n=0;n<(of[k]|0)&&n<12;n++,i++){const a=i*2.4,x=hx+Math.cos(a)*(1.4+.25*(i%3)),y=hy+Math.sin(a)*(1.4+.25*(i%3)),D=TR[k];dt.push({k,x,y,hx:x,hy:y,hp:D.hp,max:D.hp,cd:0,mv:0,sw:0,d:1,lv:1,rm:1})}
 E.dt=dt;CC.cur={id,dt};
 /* refuerzos propios */
 const nn=Object.keys(tk).filter(k=>TR[k]&&tk[k]>0);
 if(nn.length&&A&&A.on){CC.pend={};let tot=0;for(const k of nn){A.army[k]=(A.army[k]||0)+tk[k];CC.pend[k]=tk[k];tot+=tk[k]}
  if(!A.army[pick])pick=Object.keys(TR).find(k=>A.army[k])||pick;try{ui()}catch(_){}try{toast90('Refuerzos del clan: +'+tot+' tropas')}catch(_){}}}
const sr0=startReal0;startReal0=function(id,d){const r=sr0.apply(this,arguments);try{ccStart(id)}catch(e){}return r};
/* al terminar el combate: las tropas del Castillo se gastan y se informa de los defensores caídos */
setInterval(()=>{try{if(mode!='a'){if(CC.pend){const p=CC.pend;CC.pend=null;for(const k in p)S.army[k]=Math.max(0,(S.army[k]|0)-p[k]);try{ui()}catch(_){}try{save()}catch(_){}}
  if(CC.cur)ccReportLost()}}catch(_){}},400);
/* simulación: defensores vs. tropas atacantes */
const sim0cc=sim;sim=function(dt){try{ccSim(dt)}catch(e){}return sim0cc.apply(this,arguments)};
function ccSim(dt){if(!E||!E.dt||!E.dt.length||!A||!A.on)return;
 for(const t of A.tr){if(t.hp<=0)continue;const D=TR[t.k];if(!D||!(D.dmg>0)||D.w||D.heal)continue;
  let bd=1e9,dd=null;for(const d of E.dt){if(d.hp<=0)continue;if(D.fly&&false)continue;const q=Math.hypot(t.x-d.x,t.y-d.y);if(q<bd){bd=q;dd=d}}
  if(dd&&bd<=Math.max(D.rg,.5)+.35){t.dcd=(t.dcd||0)-dt;t.cd=Math.max(t.cd||0,.2);if(t.dcd<=0){t.dcd=D.rt;dd.hp-=(t.dm||D.dmg)*(t.rm||1);A.shots.push({k:D.rg>=1?'ar':'m',tk:t.k,a:[t.x,t.y],b:[dd.x,dd.y],l:.25,L:.25})}}}
 for(const d of E.dt){if(d.hp<=0)continue;const D=TR[d.k];d.mv=0;if(d.sw>0)d.sw-=dt;
  let tg=null,bd=7;for(const t of A.tr){if(t.hp<=0)continue;if(TR[t.k]&&TR[t.k].fly&&D.rg<1)continue;const q=Math.hypot(t.x-d.x,t.y-d.y);if(q<bd){bd=q;tg=t}}
  if(!tg){const q=Math.hypot(d.hx-d.x,d.hy-d.y);if(q>.25){const a=Math.atan2(d.hy-d.y,d.hx-d.x);d.x+=Math.cos(a)*D.v*.7*dt;d.y+=Math.sin(a)*D.v*.7*dt;d.mv=1}continue}
  const rg=Math.max(D.rg,.55);
  if(bd>rg){const a=Math.atan2(tg.y-d.y,tg.x-d.x);d.x+=Math.cos(a)*D.v*dt;d.y+=Math.sin(a)*D.v*dt;d.mv=1}
  else{d.cd-=dt;if(d.cd<=0){d.cd=D.rt;tg.hp-=D.dmg;d.sw=.25;d.at=performance.now();d.tx=[tg.x,tg.y];A.shots.push({k:D.rg>=1?'ar':'m',tk:d.k,a:[d.x,d.y],b:[tg.x,tg.y],l:.25,L:.25})}}}}
const dw0cc=draw;draw=function(){dw0cc.apply(this,arguments);try{ccDraw()}catch(e){}};
function ccDraw(){if(mode!='a'||!E||!E.dt)return;for(const d of E.dt){if(d.hp<=0)continue;const p=P(d.x,d.y,0);g.save();g.fillStyle='rgba(230,50,60,.4)';g.strokeStyle='#ff4a5a';g.lineWidth=1.5;g.beginPath();g.ellipse(p[0],p[1]+3,13,6.500,0,0,6.283);g.fill();g.stroke();g.restore();drT(d)}}
window.clan90={open,load,card:missionCard,CL,castle};
})();

/* ===== v50: PAISAJES (se compran en la tienda, se cambian desde el Ayuntamiento) ===== */
(function(){
const LAND={
 volcan:{n:'Tierras volcánicas',p:150,src:'data:x',mg:{L:205,R:1860,T:362,B:1670,S:2048},bg:'#241512',vg:'30,10,4',m:{'#7fae47':'#6a5853','#93c64d':'#66544f','#b0da66':'#705e58'},tr:['#5a3b2c','#3a2519']},
 nieve:{n:'Valle nevado',p:150,src:'data:x',mg:{L:210,R:1820,T:400,B:1590,S:2048},bg:'#d6e6f2',vg:'190,215,235',m:{'#7fae47':'#e8f1f9','#93c64d':'#dce9f5','#b0da66':'#eef6fc'},tr:['#3f7f6a','#2a5f52']},
 cristal:{n:'Valle de cristal',p:0,x:1,src:'data:x',mg:{L:207,R:1841,T:401,B:1623,S:2048},bg:'#1c1030',vg:'40,14,70',m:{'#7fae47':'#5f5878','#93c64d':'#575070','#b0da66':'#675f82'},tr:['#9a6ad0','#6a3fa0']}};
const DEF={n:'Pradera (predeterminado)',src:BGM81.src,mg:Object.assign({},MG81),bg:null,vg:null};
const sk0=SK1;SK1=function(c){const r=sk0(c);if(r!==c)return r;const L=LAND[cur];return(L&&L.m[c])||c};
let cur='',pend=null;
const o0=BGM81.onload;BGM81.onload=function(){if(pend){Object.assign(MG81,pend);pend=null}if(o0)o0.apply(this,arguments)};
function apply(id){id=LAND[id]?id:'';if(id===cur)return;cur=id;const L=id?LAND[id]:DEF;
 window.LANDID91=id;window.LANDBG91=L.bg;window.LANDVG91=L.vg;pend=L.mg;BGM81.src=L.src;try{skinApply();if(id&&!SKIN80[S.skin]){PL.G=L.tr[0];PL.H=L.tr[1]}_tck=_tcp='';TCv=null;TCx=null}catch(e){}}
/* paisaje visto: el del dueño de la aldea que atacas o visitas */
window.LV91=undefined;let lvFor='';
async function fetchLV(id){if(!id||id==lvFor)return;lvFor=id;window.LV91=undefined;
 try{if(typeof sb=='undefined'||!sb||OFFLINE)return;const r=await sb.rpc('land_of',{p_id:id});if(lvFor==id&&!r.error)window.LV91=r.data||''}catch(e){}}
(function(){const sr=startReal;startReal=function(id,d){const r=sr.apply(this,arguments);try{if(E&&E.real){const u=String(id).startsWith('vis')?String(id).slice(3):String(id);if(/^[0-9a-f-]{36}$/.test(u))fetchLV(u);else{lvFor='';window.LV91=''}}}catch(e){}return r}})();
setInterval(()=>{try{if(typeof S!='undefined'&&S){
 if(S.skins&&S.skins.nevada&&!(S.lands&&S.lands.nieve)){S.lands=S.lands||{};S.lands.nieve=1;if(S.skin=='nevada'&&!S.land)S.land='nieve';S.skin='';try{save()}catch(e){}}
 let w=(S.land&&(S.lands||{})[S.land])?S.land:'';
 if(mode=='a'&&window.LV91!==undefined&&E&&(E.real||E.visit))w=LAND[window.LV91]?window.LV91:'';else if(mode!='a'){lvFor='';window.LV91=undefined}
 if(w!==cur)apply(w)}}catch(e){}},400);
const own=id=>!!((S.lands||{})[id]);const vis=id=>!LAND[id].x||own(id);
function use(id){S.land=id||'';apply(S.land);try{save()}catch(e){}}
async function buy(id){const L=LAND[id];if(!L||own(id))return;
 if((S.gem|0)<L.p){try{snd('deny')}catch(e){}try{note('Te faltan runas: ve a la pestaña Runas de la tienda')}catch(e){}return}
 if(!(await gemPay(L.p))){try{snd('deny')}catch(e){};return}
 S.lands=S.lands||{};S.lands[id]=1;use(id);try{ui()}catch(e){}try{snd(520)}catch(e){}try{note('¡Paisaje desbloqueado: '+L.n+'!')}catch(e){}}
const th=src=>`<img src="${src}" style="width:100%;height:84px;object-fit:cover;object-position:50% 52%;border-radius:10px;display:block" alt="">`;
/* ---- tienda: pestaña Skins ---- */
function shopBody(){return `<div class="t90h">Paisajes</div><div class="t90g2">${Object.keys(LAND).filter(vis).map(id=>{const L=LAND[id],o=own(id),on=cur==id;
  return `<div class="t90c" data-ld="${o?(on?'x':'u'):'b'}:${id}">${th(L.src)}<div class="nm">${L.n}</div><div class="pr" style="border-color:${o?'#ffd24a':'#35e08a'};color:${o?'#ffd24a':'#7be39b'}">${o?(on?'En uso':'Usar'):L.p+' 💎'}</div></div>`}).join('')}</div><div class="t90n">Se cambian desde el botón «Paisaje» del Ayuntamiento.</div>`}
function fillShop(){const h=document.getElementById('st89');if(!h||h.style.display!='flex')return;const t=h.querySelector('.tb [data-t].on');if(!t||t.dataset.t!='k')return;const bd=h.querySelector('.bd');if(!bd)return;bd.classList.add('t90');bd.innerHTML=shopBody()}
(function hook(){const h=document.getElementById('st89');if(!h||h._l91){if(!h)setTimeout(hook,500);return}h._l91=1;
 new MutationObserver(()=>setTimeout(fillShop,0)).observe(h,{childList:true});
 h.addEventListener('click',async e=>{const c=e.target.closest('[data-ld]');if(!c)return;e.stopPropagation();const[a,id]=c.dataset.ld.split(':');
  if(a=='b')await buy(id);else if(a=='u')use(id);fillShop()},true)})();
/* ---- Ayuntamiento: botón Paisaje ---- */
const m=document.createElement('div');m.id='ls91';m.style.cssText='position:fixed;inset:0;z-index:2147480000;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.6)';document.body.appendChild(m);
function draw(){const ids=['',...Object.keys(LAND).filter(vis)];
 m.innerHTML=`<div style="width:100%;max-width:380px;max-height:92vh;overflow:auto;background:#0e1523;border:1.5px solid #ffb02066;border-radius:20px;padding:12px;font-family:'Baloo 2',sans-serif;color:#e9eefc"><div style="display:flex;align-items:center;margin-bottom:8px"><b style="flex:1;font:400 20px 'Lilita One',sans-serif;color:#ffd24a">Paisaje</b><div data-lx=x style="cursor:pointer;padding:4px 10px;font-size:18px">✕</div></div>
 ${ids.map(id=>{const L=id?LAND[id]:DEF,o=!id||own(id),on=cur==id;return `<div style="display:flex;gap:10px;align-items:center;background:#16264a;border:1.5px solid ${on?'#3fe0d0':'#2c4a82'};border-radius:14px;padding:8px;margin-bottom:8px"><div style="width:96px;flex:none">${th(L.src)}</div><div style="flex:1;font:400 15px 'Lilita One',sans-serif">${L.n}<div style="font:600 12px 'Baloo 2',sans-serif;color:#9db4d6">${o?(on?'En uso':'Tuyo'):L.p+' 💎 · se compra en la tienda'}</div></div>${o?(on?'':`<div data-lx="u:${id}" style="cursor:pointer;padding:6px 12px;border-radius:10px;background:#35e08a;color:#062;font:800 14px 'Baloo 2'">Usar</div>`):`<div data-lx="s" style="cursor:pointer;padding:6px 12px;border-radius:10px;background:#ffb020;color:#321;font:800 14px 'Baloo 2'">Tienda</div>`}</div>`}).join('')}</div>`}
m.addEventListener('click',e=>{if(e.target===m){m.style.display='none';return}const c=e.target.closest('[data-lx]');if(!c)return;const a=c.dataset.lx;
 if(a=='x')m.style.display='none';else if(a=='s'){m.style.display='none';const b=document.getElementById('st89b');if(b)b.click();setTimeout(()=>{const t=document.querySelector('#st89 .tb [data-t=k]');if(t)t.click()},40)}
 else if(a.startsWith('u:')){use(a.slice(2));draw()}});
(function(){const p=document.getElementById('panel');if(p)p.addEventListener('click',e=>{const b=e.target.closest('[data-ls]');if(!b)return;e.stopImmediatePropagation();e.preventDefault();draw();m.style.display='flex'},true)})();
})();

/* ===== v51: eventos temporales (los crea el admin; el servidor decide cuándo están activos) ===== */
const toast91=t=>{const d=document.createElement('div');d.textContent=t;d.style.cssText='position:fixed;left:50%;top:84px;transform:translateX(-50%);z-index:2147483000;padding:8px 16px;border-radius:14px;background:#16264aee;border:2px solid #ffd24a;color:#fff;font:700 14px "Baloo 2",sans-serif;pointer-events:none';document.body.appendChild(d);setTimeout(()=>d.remove(),2600)};
window.EVS91={list:[],off:0};window.EVTM91=1;
const evLive91=k=>{const n=Date.now()+EVS91.off;return EVS91.list.filter(e=>(!k||e.kind==k)&&Date.parse(e.starts)<=n&&Date.parse(e.ends)>n)};
window.evMult91=()=>{try{return Math.max(1,...evLive91('loot').map(e=>+((e.params||{}).mult)||1))}catch(x){return 1}};
function evRecalc91(){try{const t=evLive91('train');EVTM91=t.length?Math.max(.05,1-Math.max(...t.map(e=>+((e.params||{}).pct)||0))/100):1}catch(x){EVTM91=1}
 try{const b=document.getElementById('ev85b');if(b){let i=b.querySelector('.ev91b');if(!i){i=document.createElement('i');i.className='ev91b';b.appendChild(i)}i.style.display=(evLive91().length||window.PS91flag)?'block':'none'}}catch(x){}}
let evBusy91=0,evSeen91={};try{evSeen91=JSON.parse(localStorage.getItem('br_evseen')||'{}')}catch(e){}
async function evFetch91(){if(OFFLINE||!GS||typeof sb=='undefined'||!sb||evBusy91)return;evBusy91=1;
 try{const r=await sb.rpc('events_state');if(!r.error&&r.data&&Array.isArray(r.data.list)){EVS91.list=r.data.list;const n=Date.parse(r.data.now);EVS91.off=isNaN(n)?0:n-Date.now();evRecalc91();
  for(const e of evLive91())if(!evSeen91[e.id]){evSeen91[e.id]=1;try{localStorage.setItem('br_evseen',JSON.stringify(evSeen91))}catch(x){}try{toast91('🎉 Evento: '+e.title)}catch(x){}break}}}catch(e){}evBusy91=0}
setInterval(()=>{try{evRecalc91()}catch(e){}},5000);setInterval(()=>{evFetch91()},180000);setTimeout(evFetch91,4000);setInterval(()=>{if(!window.EVS91.list.length)evFetch91()},45000);
(function(){const st=document.createElement('style');st.textContent='#ev85b{position:relative}#ev85b .ev91b{display:none;position:absolute;top:2px;right:2px;width:11px;height:11px;border-radius:50%;background:#ff4d6d;border:2px solid #fff;box-shadow:0 0 8px #ff4d6d}.evc.e91{height:auto;min-height:84px;flex-direction:column;align-items:stretch;gap:6px;padding:12px;background-image:linear-gradient(135deg,#1c2f6b,#5a3aa8 60%,#c9558a)!important;cursor:default}.e91 .evt{position:static}.e91 .e9r{font-size:.74rem;opacity:.92}.e91 .e9b{height:9px;border-radius:5px;background:#0006;overflow:hidden}.e91 .e9b i{display:block;height:100%;background:linear-gradient(90deg,#ffd24a,#ff9a3a)}.e91 .e9a{display:flex;gap:8px;align-items:center;justify-content:space-between}.e91 button{display:inline-block!important;width:auto!important;min-width:0!important;min-height:34px!important;margin:0!important;white-space:nowrap;text-align:center!important;text-shadow:none!important;box-shadow:none!important;background:linear-gradient(#ffd24a,#ff9a3a)!important;color:#3b1d00!important;border:0!important;border-radius:10px!important;padding:6px 14px!important;font:800 .8rem "Baloo 2",sans-serif!important}.e91 button:disabled{opacity:.55;filter:grayscale(.6)}.e91 em.evg{position:static;align-self:flex-start}';document.head.appendChild(st)})();
const fmt91=n=>(+n||0).toLocaleString('es');
const MET91={attacks:'ataques',stars:'estrellas',wins:'victorias'};
function evRew91(p){const a=[];if(+p.gems)a.push('💎 '+fmt91(p.gems));if(+p.g)a.push('🪙 '+fmt91(p.g));if(+p.e)a.push('🧪 '+fmt91(p.e));if(+p.relics)a.push('Reliquias '+fmt91(p.relics));return a.join(' · ')}
function evLeft91(e){const s=Math.max(0,Math.floor((Date.parse(e.ends)-(Date.now()+EVS91.off))/1000)),d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60);return d>0?d+'d '+h+'h':h>0?h+'h '+m+'m':m+'m '+(s%60)+'s'}
function evCard91(e){const p=e.params||{},t='<b>'+esc(e.title)+'</b>',tm='<em class=evg>⏱ '+evLeft91(e)+'</em>',d=e.descr?'<small>'+esc(e.descr)+'</small>':'';
 let body='';
 if(e.kind=='loot')body='<div class=e9r>💰 Botín de tus ataques a jugadores: <b>×'+(+p.mult||1)+'</b></div>';
 else if(e.kind=='train')body='<div class=e9r>🪖 Entrenar tropas: <b>−'+(+p.pct||0)+'%</b> de tiempo</div>';
 else if(e.kind=='quest'){const g=Math.max(1,+p.goal||1),v=Math.min(g,e.prog|0),ok=v>=g;
  body='<div class=e9r>🎯 '+(MET91[p.metric]?'Consigue '+fmt91(g)+' '+MET91[p.metric]:'Meta '+g)+' · '+fmt91(v)+'/'+fmt91(g)+'</div><div class=e9b><i style="width:'+Math.round(100*v/g)+'%"></i></div><div class=e9a><span class=e9r>Premio: '+evRew91(p)+'</span>'+(e.claimed?'<button disabled>Reclamado ✓</button>':ok?'<button data-e91="claim" data-id='+e.id+'>Reclamar</button>':'<button disabled>En progreso</button>')+'</div>'}
 else if(e.kind=='offer'){const L=p.item=='land'?{n:{volcan:'Tierras volcánicas',nieve:'Valle nevado'}[p.land]}:null,own=p.item=='land'&&S.lands&&S.lands[p.land];
  const what=p.item=='land'?'🏞 Paisaje '+esc(L&&L.n||p.land||''):'📦 '+evRew91({g:p.g,e:p.e});
  body='<div class=e9a><span class=e9r>'+what+'</span>'+(e.claimed||own?'<button disabled>'+(own&&!e.claimed?'Ya lo tienes':'Comprado ✓')+'</button>':'<button data-e91="buy" data-id='+e.id+'>💎 '+fmt91(p.price)+'</button>')+'</div>'}
 return '<div class="evc e91"><div class=evt>'+t+d+'</div>'+tm+body+'</div>'}
window.evExtra91=function(em){const l=em.querySelector('.evl'),L=evLive91(),pc=window.psCard91?psCard91():'';if(l&&(L.length||pc))l.insertAdjacentHTML('afterbegin',pc+L.map(evCard91).join(''))};
let evAct91=0;const em91=document.getElementById('ev85m');
em91.addEventListener('pointerdown',()=>{window.EVHOLD91=1;setTimeout(()=>{window.EVHOLD91=0},900)},true);
em91.addEventListener('click',async e=>{const b=e.target.closest&&e.target.closest('[data-e91]');if(!b)return;e.stopPropagation();window.EVHOLD91=0;if(b.dataset.e91=='pass'){em91.classList.remove('on');window.psOpen91&&psOpen91();return}if(evAct91||b.disabled)return;evAct91=1;const id=+b.dataset.id,k=b.dataset.e91;
 try{try{snd('ui')}catch(x){}
  if(k=='claim'){const r=await sb.rpc('event_claim',{p_id:id});if(r.error)throw r.error;const d=r.data;S.gem=d.gems;S.g=Math.min(cap.g(),S.g+(d.g|0));S.e=Math.min(cap.e(),S.e+(d.e|0));try{save();ui()}catch(x){}toast91('🎁 ¡Recompensa reclamada!')}
  else if(k=='buy'){const ev=EVS91.list.find(x=>x.id==id),p=(ev&&ev.params)||{};if(p.item=='land'&&S.lands&&S.lands[p.land]){toast91('Ya tienes este paisaje');evAct91=0;return}
   if((S.gem|0)<(+p.price||0)){toast91('Te faltan 💎 Runas');evAct91=0;return}
   const r=await sb.rpc('event_offer_buy',{p_id:id});if(r.error)throw r.error;const d=r.data;S.gem=d.gems;
   if(d.item=='land'&&d.land){S.lands=S.lands||{};S.lands[d.land]=1}else{S.g=Math.min(cap.g(),S.g+(d.g|0));S.e=Math.min(cap.e(),S.e+(d.e|0))}
   try{save();ui()}catch(x){}toast91('🛍 ¡Compra realizada!')}
  await evFetch91()}catch(er){toast91(((er&&er.message)||'No se pudo').replace(/^.*?:\s*/,'').slice(0,80))}
 evAct91=0},true);

/* ===== v52: pase de temporada (los datos viven en el servidor) ===== */
window.PS91={d:null,t:0,busy:0,tab:'p'};window.PS91flag=0;
const psOn91=()=>{try{return !OFFLINE&&GS&&typeof sb!='undefined'&&sb}catch(e){return false}};
const psNum91=n=>(+n||0).toLocaleString('es');
const PSCOS91={t_pass:'Título «Fiel al pase»',b_pass:'Estandarte Cristalino'},PSSK91={k_crystal:'Rey Cristalino'};const PSLAND91={cristal:'Valle de cristal'};
function psRew91(x){const q=psNum91(x.qty);return x.kind=='gems'?'💎 '+q:x.kind=='g'?'🪙 '+q:x.kind=='e'?'🧪 '+q:x.kind=='tokens'?'🔷 Token ×'+q:x.kind=='relics'?'<img src="'+ART90.relic+'" style="width:15px;height:15px;vertical-align:-3px"> ×'+q:x.kind=='cosm'?'🎖 '+esc(PSCOS91[x.ref]||x.ref):x.kind=='skin'?'👑 '+esc(PSSK91[x.ref]||x.ref):x.kind=='land'?'🏞 '+esc(PSLAND91[x.ref]||'Paisaje'):q}
function psFlag91(){const d=PS91.d;let n=0;if(d&&d.on){const L=d.lvl|0;for(const l of d.levels)if(l.lvl<=L){for(const x of l.free)if(!x.got)n++;if(d.prem)for(const x of l.prem)if(!x.got)n++}for(const m of d.missions)if(!m.claimed&&m.prog>=m.goal)n++}PS91flag=n;try{evRecalc91()}catch(e){}return n}
async function psFetch91(force){if(!psOn91()||PS91.busy)return PS91.d;if(!force&&PS91.d&&Date.now()-PS91.t<30000)return PS91.d;PS91.busy=1;
 try{const r=await sb.rpc('pass_state');if(!r.error&&r.data){PS91.d=r.data;PS91.t=Date.now();try{for(const l of r.data.levels||[])for(const x of (l.free||[]).concat(l.prem||[]))if(x.kind=='land'&&x.got&&x.ref)psLand91(x.ref)}catch(e){}const n=Date.parse(r.data.now);PS91.off=isNaN(n)?0:n-Date.now();psFlag91();ksk91(r.data.kskin)}}catch(e){}PS91.busy=0;return PS91.d}
setTimeout(()=>psFetch91(true),5000);setInterval(()=>psFetch91(true),300000);window.addEventListener('ton-paid',()=>psFetch91(true).then(()=>{try{psDraw91()}catch(e){}}));
/* ---- skin del Rey: recolor del sprite ---- */
function ksk91(id){try{const T=TAI81&&TAI81.king;if(!T)return;if(!T.orig)T.orig=T.im;
 if(id!='k_crystal'){if(T.im!==T.orig)T.im=T.orig;return}
 if(T.skin==='k_crystal'&&T.im!==T.orig)return;const im=T.orig;if(!(im.complete&&im.naturalWidth)){setTimeout(()=>ksk91(id),800);return}
 const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const x=c.getContext('2d');x.drawImage(im,0,0);const d=x.getImageData(0,0,c.width,c.height),p=d.data;
 for(let i=0;i<p.length;i+=4){if(p[i+3]<8)continue;const r=p[i]/255,g=p[i+1]/255,b=p[i+2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),dl=mx-mn,s=mx?dl/mx:0;let h=0;
  if(dl){h=mx==r?((g-b)/dl)%6:mx==g?(b-r)/dl+2:(r-g)/dl+4;h*=60;if(h<0)h+=360}
  let nh=h,ns=s,nv=mx;
  if(s<.22){nh=272;ns=.3+(1-mx)*.12;nv=Math.min(1,mx*1.04+.05)}
  else if(h>=38&&h<=62&&s>.5&&mx>.6){nh=h}
  else if(h<75||h>340){nh=322;ns=Math.min(1,s*.95);nv=Math.min(1,mx*1.05)}
  else if(h>=180&&h<=275){nh=(h+60)%360;ns=Math.min(1,s*1.05)}
  else nh=(h+40)%360;
  const C=nv*ns,X=C*(1-Math.abs((nh/60)%2-1)),m=nv-C;let R=0,G=0,B=0;const k=Math.floor(nh/60)%6;
  if(k==0){R=C;G=X}else if(k==1){R=X;G=C}else if(k==2){G=C;B=X}else if(k==3){G=X;B=C}else if(k==4){R=X;B=C}else{R=C;B=X}
  p[i]=(R+m)*255;p[i+1]=(G+m)*255;p[i+2]=(B+m)*255}
 x.putImageData(d,0,0);const n=new Image();n.onload=()=>{T.im=n;T.skin='k_crystal'};n.src=c.toDataURL('image/png')}catch(e){console.warn('skin',e)}}
/* ---- tarjeta en el menú Eventos ---- */
window.psCard91=function(){const d=PS91.d;if(!d||!d.on)return '';const left=Math.max(0,Math.floor((Date.parse(d.ends)-(Date.now()+(PS91.off||0)))/86400000));
 return '<div class="evc e91" style="background-image:linear-gradient(135deg,#3b1d7a,#7a3ac8 60%,#e0559a)!important"><div class=evt><b>👑 '+esc(d.name||'Pase de temporada')+'</b><small>Nivel '+(d.lvl|0)+'/'+d.max+' · quedan '+left+' días'+(d.prem?' · Premium':'')+'</small></div><div class=e9a><span class=e9r>'+(PS91flag?'🎁 Tienes '+PS91flag+' premio(s) por reclamar':'Misiones, premios y skin del Rey')+'</span><button data-e91="pass">Abrir pase</button></div></div>'};
/* ---- ventana del pase ---- */
const ps91=document.createElement('div');ps91.id='ps91';document.body.appendChild(ps91);
(function(){const st=document.createElement('style');st.textContent=`#ps91{position:fixed;inset:0;z-index:2000;display:none;background:rgba(8,4,24,.86);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);font-family:'Baloo 2',system-ui,sans-serif;color:#fff;overflow:hidden}
#ps91 .pw{position:absolute;inset:0;display:flex;flex-direction:column;max-width:560px;margin:0 auto}
#ps91 .hd{position:relative;flex:none;height:128px;background:#2a1260 center/cover;border-bottom:3px solid #c9a23a}
#ps91 .hd b{position:absolute;left:14px;bottom:30px;font:400 24px 'Lilita One','Baloo 2',sans-serif;text-shadow:0 2px 0 #000,0 0 12px #b66bff}
#ps91 .hd small{position:absolute;left:14px;bottom:10px;font-weight:700;font-size:12px;text-shadow:0 1px 2px #000}
#ps91 .x{position:absolute;right:10px;top:10px;width:34px;height:34px;border-radius:50%;background:#0009;border:2px solid #fff6;color:#fff;font:800 18px 'Baloo 2';display:flex;align-items:center;justify-content:center}
#ps91 .bar{flex:none;padding:8px 12px 4px}#ps91 .bar .t{display:flex;justify-content:space-between;font-weight:800;font-size:13px}
#ps91 .bar .b{height:12px;border-radius:7px;background:#0007;border:1px solid #fff3;overflow:hidden;margin-top:3px}#ps91 .bar .b i{display:block;height:100%;background:linear-gradient(90deg,#c46bff,#ff7ac6)}
#ps91 .pac{flex:none;display:flex;gap:6px;padding:4px 12px 6px;flex-wrap:wrap}
#ps91 button{display:inline-block!important;width:auto!important;min-width:0!important;min-height:36px!important;margin:0!important;white-space:nowrap;text-align:center!important;text-shadow:none!important;box-shadow:none!important;font:800 13px 'Baloo 2',system-ui,sans-serif!important;border:0!important;border-radius:11px!important;padding:6px 12px!important;color:#3b1d00!important;background:linear-gradient(#ffd24a,#ff9a3a)!important}
#ps91 button.v{color:#fff!important;background:linear-gradient(#a45bff,#6a2fd0)!important}#ps91 button:disabled{opacity:.5;filter:grayscale(.6)}
#ps91 .tb{flex:none;display:flex;gap:6px;padding:0 12px 6px}#ps91 .tb div{flex:1;text-align:center;padding:7px;border-radius:11px;background:#ffffff14;font-weight:800;font-size:13px;border:1.5px solid #fff2}#ps91 .tb div.on{background:linear-gradient(#a45bff,#6a2fd0);border-color:#fff7}
#ps91 .bd{flex:1;overflow:auto;padding:4px 12px 20px;-webkit-overflow-scrolling:touch}
#ps91 .rh,#ps91 .r{display:grid;grid-template-columns:38px 1fr 1fr;gap:6px;align-items:stretch;margin-bottom:6px}
#ps91 .rh{font-weight:800;font-size:12px;text-align:center;opacity:.85;position:sticky;top:0;background:#14083a;padding:4px 0;z-index:2}
#ps91 .r .n{display:flex;align-items:center;justify-content:center;border-radius:10px;background:#3b1d7a;font-weight:800}#ps91 .r.ok .n{background:linear-gradient(#ffd24a,#ff9a3a);color:#3b1d00}
#ps91 .r .c{position:relative;min-height:68px;border-radius:12px;padding:8px 10px;background:#ffffff12;border:1.5px solid #fff2;font-size:12.5px;font-weight:700;display:flex;flex-direction:column;justify-content:center;gap:2px}
#ps91 .r .c.p{background:linear-gradient(135deg,#4a2590aa,#a02f8baa);border-color:#e08cff66}#ps91 .r .c.cl{border-color:#ffd24a;box-shadow:0 0 10px #ffd24a88;cursor:pointer}
#ps91 .r .c.got{opacity:.55}#ps91 .r .c.lk::after{content:'🔒';position:absolute;right:8px;top:6px;font-size:14px;opacity:.9}
#ps91 .ri{display:flex;align-items:center;gap:9px}#ps91 .ri+.ri{margin-top:4px}
#ps91 .ic{flex:none;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:36px;line-height:1}
#ps91 .ic .emi,#ps91 .ic .bri,#ps91 .ic img{width:42px!important;height:42px!important;object-fit:contain;filter:drop-shadow(0 2px 2px rgba(0,0,0,.5))}
#ps91 .tx{display:flex;flex-direction:column;min-width:0}#ps91 .tx b{font-size:18px;line-height:1.1;font-weight:800;overflow-wrap:anywhere}#ps91 .tx small{font-size:11px;opacity:.78;font-weight:700}
#ps91 .gt{font-size:11.5px;font-weight:800;opacity:.9;margin-top:3px}
#ps91 .pv{position:relative;border-radius:14px;background:radial-gradient(circle at 50% 38%,#5a2aa8,#1a0a3c 75%);border:2px solid #e08cff66;overflow:hidden;margin-bottom:10px}
#ps91 .pv canvas{display:block;width:100%;max-width:240px;height:auto;margin:0 auto;background:transparent!important;border:0!important;box-shadow:none!important}#ps91 button.n{color:#fff!important;background:#ffffff1f!important;border:1.5px solid #ffffff33!important}
#ps91 .pvb{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;padding:6px 8px 10px}
#ps91 .m{display:flex;flex-direction:column;gap:4px;padding:9px 10px;border-radius:12px;background:#ffffff12;border:1.5px solid #fff2;margin-bottom:7px;font-size:13px;font-weight:700}
#ps91 .m .pb{height:8px;border-radius:5px;background:#0007;overflow:hidden}#ps91 .m .pb i{display:block;height:100%;background:linear-gradient(90deg,#ffd24a,#ff9a3a)}
#ps91 .m .ro{display:flex;justify-content:space-between;align-items:center;gap:8px}#ps91 h4{margin:8px 0 6px;font-size:13px;opacity:.85}
#ps91 .sk{padding:12px;border-radius:14px;background:linear-gradient(135deg,#3b1d7a,#a02f8b);border:2px solid #e08cff66;font-weight:700}`;document.head.appendChild(st)})();
function psCell91(x){const q=psNum91(x.qty);let ic,t,s;
 if(x.kind=='gems'){ic='💎';t='+'+q;s='Runas'}else if(x.kind=='g'){ic='🪙';t='+'+q;s='Oro'}else if(x.kind=='e'){ic='🧪';t='+'+q;s='Elixir'}
 else if(x.kind=='tokens'){ic='🔷';t='×'+q;s='Token de mejora'}else if(x.kind=='relics'){ic='<img src="'+ART90.relic+'" alt="">';t='×'+q;s='Reliquias'}
 else if(x.kind=='cosm'){ic='🎖';t=esc(PSCOS91[x.ref]||x.ref);s=(x.ref||'').charAt(0)=='b'?'Banner de perfil':'Título'}
 else if(x.kind=='skin'){ic='👑';t=esc(PSSK91[x.ref]||x.ref);s='Skin del Rey'}else if(x.kind=='land'){ic='🌄';t=esc(PSLAND91[x.ref]||'Paisaje');s='Paisaje exclusivo'}else{ic='🎁';t=q;s=''}
 return '<div class=ri><span class=ic>'+ic+'</span><span class=tx><b>'+t+'</b><small>'+s+'</small></span></div>'}
function psLeft91(d){const s=Math.max(0,Math.floor((Date.parse(d.ends)-(Date.now()+(PS91.off||0)))/1000)),dd=Math.floor(s/86400),h=Math.floor(s%86400/3600);return dd+'d '+h+'h'}
function psDraw91(){const d=PS91.d;if(ps91.style.display!='block')return;
 if(!d||!d.on){ps91.innerHTML='<div class=pw><div class=hd style="background-image:url('+ART90.b_pass+')"><div class=x data-ps=x>✕</div><b>Pase de temporada</b><small>'+(d&&d.starts?'Empieza el '+new Date(d.starts).toLocaleDateString('es',{day:'numeric',month:'long'}):'Cargando…')+'</small></div></div>';return}
 const L=d.lvl|0,xl=d.lvl_xp,cur=d.xp%xl,full=L>=d.max,n=psFlag91(),gp=d.gem_per_lvl;
 let h='<div class=pw><div class=hd style="background-image:url('+ART90.b_pass+')"><div class=x data-ps=x>✕</div><b>'+esc(d.name)+'</b><small>Termina en '+psLeft91(d)+(d.prem?' · 👑 Premium activo':'')+'</small></div>';
 h+='<div class=bar><div class=t><span>Nivel '+L+' / '+d.max+'</span><span>'+(full?'¡Completado!':cur+' / '+xl+' pts')+'</span></div><div class=b><i style="width:'+(full?100:Math.round(100*cur/xl))+'%"></i></div></div>';
 h+='<div class=pac>'+(d.prem?'':'<button class=v data-ps=prem>Premium · '+(d.price_nano/1e9)+' GRAM</button>')+'<button data-ps=all'+(n?'':' disabled')+'>Reclamar todo'+(n?' ('+n+')':'')+'</button>'+(full?'':'<button class=v data-ps=buy>+1 nivel · '+gp+' runas</button>')+'</div>';
 h+='<div class=tb><div data-ps=t1 class="'+(PS91.tab=='p'?'on':'')+'">Premios</div><div data-ps=t2 class="'+(PS91.tab=='m'?'on':'')+'">Misiones</div><div data-ps=t3 class="'+(PS91.tab=='s'?'on':'')+'">Skin</div></div><div class=bd>';
 if(PS91.tab=='p'){h+='<div class=rh><span></span><span>Gratis</span><span>👑 Premium</span></div>';
  for(const l of d.levels){const ok=l.lvl<=L,cell=(a,p)=>{const all=a.length&&a.every(x=>x.got),can=ok&&!all&&(!p||d.prem);return '<div class="c'+(p?' p':'')+(all?' got':can?' cl':'')+(p&&!d.prem&&!all?' lk':'')+'"'+(can?' data-ps=c data-l='+l.lvl:'')+'>'+a.map(psCell91).join('')+(all?'<div class=gt>✓ Reclamado</div>':'')+'</div>'};
   h+='<div class="r'+(ok?' ok':'')+'"><div class=n>'+l.lvl+'</div>'+cell(l.free,0)+cell(l.prem,1)+'</div>'}}
 else if(PS91.tab=='m'){for(const per of['d','w']){h+='<h4>'+(per=='d'?'Misiones de hoy':'Misiones de la semana')+'</h4>';
   for(const m of d.missions.filter(x=>x.per==per))h+='<div class=m><div class=ro><span>'+esc(m.name)+'</span><span>+'+m.xp+' pts</span></div><div class=pb><i style="width:'+Math.round(100*m.prog/m.goal)+'%"></i></div><div class=ro><span style="opacity:.8">'+m.prog+' / '+m.goal+'</span>'+(m.claimed?'<button disabled>Reclamada ✓</button>':m.prog>=m.goal?'<button data-ps=m data-id='+m.id+'>Reclamar</button>':'<button disabled>En progreso</button>')+'</div></div>'}
  h+='<div class=m style="opacity:.85">Las misiones diarias se reinician a medianoche (hora de Caracas) y las semanales cada lunes.</div>'}
 else{const own=(d.skins||[]).includes('k_crystal'),eq=d.kskin=='k_crystal',pv=PS91.pv||(PS91.pv={an:0,i:0,auto:1}),bt=(k,l,on)=>'<button class="'+(on?'v':'n')+'" data-ps="'+k+'">'+l+'</button>';
  h+='<div class=pv><canvas id=ps91cv width=480 height=480></canvas><div class=pvb>'+bt('pv:a0','Quieto',pv.an==0)+bt('pv:a2','Caminar',pv.an==2)+bt('pv:a3','Atacar',pv.an==3)+bt('pv:l','◀',0)+bt('pv:r','▶',0)+bt('pv:o','Girar solo',pv.auto)+'</div></div>'
  +'<div class=sk><div style="font-size:16px">👑 Rey Cristalino</div><div style="font-size:12.5px;opacity:.9;margin:4px 0 8px">Armadura y barba de cristal violeta y rosa, con destellos y esquirlas. Se gana al completar el nivel 30 del pase premium, junto con el paisaje exclusivo Valle de cristal.</div>'+(own?'<button class=v data-ps=eq>'+(eq?'Quitar skin':'Equipar skin')+'</button>':'<button disabled>🔒 Nivel 30 del pase premium</button>')+'</div>'}
 h+='</div></div>';
 if(PS91.last===h&&ps91.firstChild)return;const ob=ps91.querySelector('.bd'),stp=ob&&PS91.lt===PS91.tab?ob.scrollTop:0;PS91.last=h;PS91.lt=PS91.tab;ps91.innerHTML=h;const nb=ps91.querySelector('.bd');if(nb&&stp)nb.scrollTop=stp;
 if(PS91.tab=='s'&&!PS91.raf)PS91.raf=requestAnimationFrame(psPv91)}
/* vista previa 3D de la skin: la misma hoja de sprites del juego, con direcciones, animaciones y particulas */
const PSORD91=[2,1,0,7,6,5,4,3];
function psPv91(){PS91.raf=0;if(ps91.style.display!='block'||PS91.tab!='s')return;PS91.raf=requestAnimationFrame(psPv91);
 const cv=document.getElementById('ps91cv');if(!cv||typeof K3=='undefined'||!K3.ok)return;const c=cv.getContext('2d'),now=performance.now(),p=PS91.pv||(PS91.pv={an:0,i:0,auto:1});
 const sk=K3.sk&&K3.sk.k_crystal&&K3.sk.k_crystal.im,im=sk&&sk.complete&&sk.naturalWidth?sk:TAI81.king.orig||TAI81.king.im;if(!im||!im.naturalWidth)return;
 const a=K3D,sc=cv.width/a.cw*.98,i=p.auto?Math.floor(now/2200)%8:p.i,sec=PSORD91[i],row=K3DIR[sec]*4+p.an,mir=K3MIR[sec];
 let fi;if(p.an==3)fi=Math.min(5,Math.floor((now%1500)/110));else if(p.an==2)fi=Math.floor(now/90)%6;else fi=Math.floor(now/300)%6;
 c.clearRect(0,0,cv.width,cv.height);c.save();c.translate(cv.width/2,cv.height*.86);if(mir)c.scale(-1,1);c.imageSmoothingQuality='high';
 c.drawImage(im,fi*a.cw,row*a.ch,a.cw,a.ch,-a.ax*sc,-a.ay*sc,a.cw*sc,a.ch*sc);c.restore();
 try{if(K3.fx.k_crystal)K3.fx.k_crystal({ao:0},cv.width/2,cv.height*.86,a.hs*sc,now,c)}catch(e){}}
async function psOpen91(){ps91.style.display='block';psDraw91();await psFetch91(true);psDraw91()}
window.psOpen91=psOpen91;
setInterval(()=>{if(ps91.style.display=='block'&&!window.PSHOLD91)psDraw91()},1000);
ps91.addEventListener('pointerdown',()=>{window.PSHOLD91=1;setTimeout(()=>{window.PSHOLD91=0},700)},true);
let psAct91=0;
const psLand91=id=>{try{S.lands=S.lands||{};if(!S.lands[id]){S.lands[id]=1;save()}}catch(e){}};const psApply91=g=>{let a=0,b=0;for(const x of g||[]){if(x.kind=='g')a+=x.qty;else if(x.kind=='e')b+=x.qty;else if(x.kind=='land'&&x.ref)psLand91(x.ref)}if(a)S.g=Math.min(cap.g(),S.g+a);if(b)S.e=Math.min(cap.e(),S.e+b)};
ps91.addEventListener('click',async e=>{const b=e.target.closest('[data-ps]');if(!b){if(e.target===ps91)ps91.style.display='none';return}const k=b.dataset.ps;window.PSHOLD91=0;
 if(k=='x'){ps91.style.display='none';return}if(b.disabled||psAct91)return;
 if(k.indexOf('pv:')==0){const p=PS91.pv||(PS91.pv={an:0,i:0,auto:1}),m=k.slice(3);if(m=='a0')p.an=0;else if(m=='a2')p.an=2;else if(m=='a3')p.an=3;
  else if(m=='o')p.auto=p.auto?0:1;else{if(p.auto){p.i=Math.floor(performance.now()/2200)%8;p.auto=0}p.i=(p.i+(m=='r'?1:7))%8}
  psDraw91();return}
 if(k=='t1'||k=='t2'||k=='t3'){PS91.tab=k=='t1'?'p':k=='t2'?'m':'s';psDraw91();return}
 if(k=='prem'){ps91.style.display='none';if(window.ton90Pay)window.ton90Pay('pass1');return}
 psAct91=1;try{
  if(k=='all'||k=='c'){const r=await sb.rpc('pass_claim',{p_lvl:k=='c'?+b.dataset.l:null});if(r.error)throw r.error;S.gem=r.data.gems;psApply91(r.data.grants);try{save();ui()}catch(x){}toast91(r.data.grants.length?'🎁 ¡Premios reclamados!':'No hay premios nuevos')}
  else if(k=='m'){const r=await sb.rpc('pass_mission_claim',{p_id:b.dataset.id});if(r.error)throw r.error;toast91('+'+r.data.gain+' puntos del pase')}
  else if(k=='buy'){if((S.gem|0)<(PS91.d.gem_per_lvl|0)){toast91('Te faltan 💎 Runas');psAct91=0;return}const r=await sb.rpc('pass_buy_xp',{p_levels:1});if(r.error)throw r.error;S.gem=r.data.gems;try{save();ui()}catch(x){}toast91('¡Subiste al nivel '+r.data.lvl+'!')}
  else if(k=='eq'){const own=PS91.d.kskin=='k_crystal';const r=await sb.rpc('skin_equip',{p_skin:own?'':'k_crystal'});if(r.error)throw r.error;toast91(own?'Skin quitada':'👑 Skin equipada')}
  await psFetch91(true)}catch(er){toast91(((er&&er.message)||'No se pudo').replace(/^.*?:\s*/,'').slice(0,80))}
 psAct91=0;psDraw91()});

/* ===== v53: botones Pase (dorado) y Liga (azul/rojo) en la rejilla de iconos ===== */
(function(){
const T=n=>`calc(${n}px + env(safe-area-inset-top,0px))`;
const SVG_PASS='<svg viewBox="0 0 48 48" width="26" height="26"><defs><linearGradient id="p92g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe27a"/><stop offset="1" stop-color="#d9981c"/></linearGradient><linearGradient id="p92c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd0ff"/><stop offset="1" stop-color="#9b4de0"/></linearGradient></defs><path d="M24 3 42 9v13c0 11-7.5 19.500-18 23C13.500 41.500 6 33 6 22V9z" fill="url(#p92g)" stroke="#6b430a" stroke-width="2.500" stroke-linejoin="round"/><path d="M24 8 37 12.500V22c0 8-5.500 14.500-13 17.500C16.500 36.500 11 30 11 22v-9.500z" fill="#f3b83a" stroke="#a8700f" stroke-width="1.200"/><path d="M24 14l6.500 8.500L24 34l-6.500-11.500z" fill="url(#p92c)" stroke="#4a1f86" stroke-width="1.600" stroke-linejoin="round"/><path d="M24 14l-2 8.500h4z" fill="#fff" opacity=".55"/></svg>';
const SVG_LG='<svg viewBox="0 0 48 48" width="26" height="26"><defs><linearGradient id="l92b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fb0ff"/><stop offset="1" stop-color="#1f56c8"/></linearGradient><linearGradient id="l92r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff7a6b"/><stop offset="1" stop-color="#c4262f"/></linearGradient></defs><path d="M24 3l18 10v22L24 45 6 35V13z" fill="#e6b53a" stroke="#6b430a" stroke-width="2.500" stroke-linejoin="round"/><path d="M24 9l12.500 7v16L24 39 11.500 32V16z" fill="url(#l92b)" stroke="#12347a" stroke-width="1.500" stroke-linejoin="round"/><path d="M24 9l12.500 7L24 24z" fill="url(#l92r)"/><path d="M24 24l12.500-8v16L24 39z" fill="#ffd24a" opacity=".85"/><path d="M24 24 11.500 16v16L24 39z" fill="#1f56c8"/><path d="M24 9l-6 3.500 6 3.500 6-3.500z" fill="#fff" opacity=".45"/></svg>';
const st=document.createElement('style');
st.textContent=`#ps92b,#lg92b{position:fixed;left:12px;top:${T(182)};width:38px;height:38px;border-radius:12px;padding:0;z-index:6;display:none;align-items:center;justify-content:center;cursor:pointer;color:#fff;-webkit-tap-highlight-color:transparent}
#ps92b{background:linear-gradient(180deg,rgba(255,226,122,.55),rgba(217,152,28,.45))!important;border:1.5px solid #ffd24a!important;box-shadow:0 5px 14px rgba(0,0,0,.35),0 0 12px rgba(255,200,60,.55),inset 0 1px 0 rgba(255,255,255,.6)!important}
#lg92b{left:56px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.5)!important;border:1.5px solid rgba(255,255,255,.3)!important;box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4)!important}
#ps92b:active,#lg92b:active{transform:scale(.93)}
#ps92b img,#lg92b img{width:30px;height:30px;object-fit:contain;filter:drop-shadow(0 2px 2px rgba(0,0,0,.5))}
#ps92b i{display:none;position:absolute;top:-5px;right:-5px;width:14px;height:14px;border-radius:50%;background:#ff4d6d;border:2px solid #fff;box-shadow:0 0 8px #ff4d6d}
body.ba #ps92b,body.land #ps92b,body.ba #lg92b,body.land #lg92b{display:none!important}`;
document.head.appendChild(st);
const mk=(id,html,label)=>{const b=document.createElement('button');b.id=id;b.setAttribute('aria-label',label);b.title=label;b.innerHTML=html;document.body.appendChild(b);return b};
const ICO={ico_pass:'data:x',ico_league:'data:x'};const art=k=>ICO[k];
const ico=(k,svg)=>art(k)?'<img src="'+art(k)+'" alt="">':svg;
const pb=mk('ps92b',ico('ico_pass',SVG_PASS)+'<i></i>','Pase de temporada'),lb=mk('lg92b',ico('ico_league',SVG_LG),'Tienda de la liga');
const wait=ms=>new Promise(r=>setTimeout(r,ms));
pb.onclick=async()=>{try{await psOpen91();const d=PS91.d;if(!d||!d.on){const m=document.getElementById('ps91');if(m)m.style.display='none';toast91(d?'El pase no está activo ahora mismo':'No se pudo cargar el pase. Falta ejecutar online_v52a.sql en Supabase.')}}catch(e){toast91('No se pudo abrir el pase')}};
lb.onclick=()=>{try{window.lg93&&lg93.open()}catch(e){toast91('No se pudo abrir la tienda de la liga')}};
function sync(){const on=(typeof OFFLINE!='undefined'&&!OFFLINE)&&typeof mode!='undefined'&&mode=='v';
 pb.style.display=lb.style.display=on?'flex':'none';const n=window.PS91flag|0;pb.querySelector('i').style.display=n?'block':'none'}
setInterval(sync,1500);setTimeout(sync,800);
window.addEventListener('ton-paid',()=>setTimeout(sync,500));
})();

/* ===== v54: escudos mágicos (tienda) ===== */
(function(){
const IDS=[['1d','Escudo Mágico (1 día)',1440,100,5760],['2d','Escudo Mágico (2 días)',2880,150,10080],['7d','Escudo Mágico (1 semana)',10080,250,50400]];
const esc=t=>String(t==null?'':t).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const off=()=>(typeof OFFLINE!='undefined'&&OFFLINE)||typeof sb=='undefined'||!sb;
let ST=null,busy=0,lastLoad=0,msg='';
const now=()=>{try{return TNOW()}catch(_){return Date.now()}};
const dur=ms=>{const m=Math.max(0,Math.ceil(ms/6e4));if(m>=1440)return Math.floor(m/1440)+'d '+Math.floor(m%1440/60)+'h';if(m>=60)return Math.floor(m/60)+'h '+(m%60)+'m';return m+'m'};
const cdOf=id=>{if(off())return (S.shcd&&S.shcd[id])||0;return ST&&ST.cd&&ST.cd[id]?Date.parse(ST.cd[id]):0};
const sh=()=>typeof shSvg=='function'?shSvg():'🛡️';
function body(){
 const left=(S.shield||0)-now();
 let h=`<div class="cd w"><div class="sm">${left>0?'🛡️ Escudo activo: <b>'+dur(left)+'</b>':'Sin escudo activo'}</div><div class="sm">Atacar a otro jugador rompe tu escudo. Se acumulan hasta 10 días.</div>${msg?'<div class="sm" style="color:#ffd24a">'+esc(msg)+'</div>':''}</div>`;
 h+=IDS.map(([id,n,m,c,cd])=>{const t=cdOf(id),w=t-now(),lock=w>0,no=busy||lock||(S.gem|0)<c;
  return `<div class="cd" data-sh="${id}" style="${lock?'opacity:.62':''}"><div class="nm">${esc(n)}</div><div class="sv">${sh()}</div><div class="sm">⏱ ${m>=1440?m/1440+(m==1440?' día':' días'):''}</div><div class="sm">${lock?'Disponible en '+dur(w):'Recuperación: '+dur(cd*6e4)}</div><div class="pr" style="${no&&!lock?'opacity:.6':''}">${lock?'🔒':c+' '+(window.BRI?BRI.gm:'💎')}</div></div>`}).join('');
 return h}
function fill(){const h=document.getElementById('st89');if(!h||h.style.display!='flex')return;const t=h.querySelector('.tb [data-t].on');if(!t||t.dataset.t!='s')return;const bd=h.querySelector('.bd');if(!bd)return;bd.innerHTML=body();
 if(!off()&&Date.now()-lastLoad>20000){lastLoad=Date.now();load()}}
async function load(){try{const r=await sb.rpc('shield_state');if(r.error)throw r.error;ST=r.data;if(ST.gems!=null)S.gem=ST.gems;const u=ST.until?Date.parse(ST.until):0;S.shield=u>now()?u:0;msg=''}catch(e){msg='Falta ejecutar online_v54.sql en Supabase.'}fill()}
async function buy(id){if(busy)return;const c=IDS.find(x=>x[0]==id);if(!c)return;busy=1;msg='';
 try{
  if(off()){
   if(cdOf(id)>now())throw new Error('Ese escudo está en recuperación.');
   if((S.gem|0)<c[3])throw new Error('Te faltan runas.');
   const base=Math.max(now(),S.shield||0),nu=base+c[2]*6e4;if(nu>now()+10*864e5)throw new Error('Tu escudo no puede pasar de 10 días.');
   S.gem-=c[3];S.shield=nu;S.shcd=S.shcd||{};S.shcd[id]=now()+c[4]*6e4;
  }else{
   const r=await sb.rpc('shield_buy',{p_id:id});if(r.error)throw r.error;ST=r.data;S.gem=ST.gems;S.shield=Date.parse(ST.until)
  }
  try{save()}catch(_){}try{ui()}catch(_){}try{toast91('¡Escudo activado!')}catch(_){}
 }catch(e){msg=(e&&e.message)||String(e);try{toast91(msg)}catch(_){}}
 busy=0;const h=document.getElementById('st89');const g=h&&h.querySelector('.gq');if(g&&window.BRI)g.innerHTML=BRI.gm+(S.gem|0);fill()}
(function hook(){const h=document.getElementById('st89');if(!h){setTimeout(hook,500);return}if(h._s94)return;h._s94=1;
 new MutationObserver(()=>setTimeout(fill,0)).observe(h,{childList:true});
 h.addEventListener('click',e=>{const c=e.target.closest('[data-sh]');if(!c)return;e.stopPropagation();buy(c.dataset.sh)},true)})();
window.shield94={fill};
})();

/* ===== v59: rendimiento y más opciones de gráficos ===== */
(function(){
const g=k=>{try{return localStorage.getItem(k)}catch(_){return null}},st=(k,v)=>{try{localStorage.setItem(k,v)}catch(_){}};
let RES=+g('ccres')||0,TC=g('cctc')!=='0',BL=g('ccbl')!=='0',SF=g('ccfpsv')==='1';
function applyTc(){try{for(const k in GFXD)GFXD[k].tc=TC?1:0;_tck=_tcp='';TCv=null;TCx=null}catch(_){}}
function applyBl(){document.documentElement.classList.toggle('nobl',!BL)}
const css=document.createElement('style');css.textContent='html.nobl *,html.nobl *::before,html.nobl *::after{-webkit-backdrop-filter:none!important;backdrop-filter:none!important}#fpsv94{position:fixed;left:6px;top:calc(6px + env(safe-area-inset-top,0px));z-index:2147483600;background:rgba(0,0,0,.6);color:#7bff9a;font:700 12px/1 monospace;padding:3px 6px;border-radius:6px;pointer-events:none}';document.head.appendChild(css);
applyTc();applyBl();
/* resolución de render */
if(typeof rs2=='function'){const r0=rs2;rs2=function(){const k=GX&&GX.ks;if(RES&&GX)GX.ks=RES;try{return r0.apply(this,arguments)}finally{if(GX&&k!=null)GX.ks=k}}}
/* contador de FPS */
let el=null,raf=0;
function fpsLoop(){let n=0,t0=performance.now();const f=t=>{n++;if(t-t0>=1000){if(el)el.textContent=Math.round(n*1000/(t-t0))+' FPS · '+(typeof cv!='undefined'?cv.width+'×'+cv.height:'');n=0;t0=t}raf=requestAnimationFrame(f)};raf=requestAnimationFrame(f)}
function fpsOn(on){SF=on;st('ccfpsv',on?'1':'0');if(on&&!el){el=document.createElement('div');el.id='fpsv94';document.body.appendChild(el);fpsLoop()}else if(!on&&el){cancelAnimationFrame(raf);el.remove();el=null}}
if(SF)setTimeout(()=>fpsOn(true),1500);
/* menú: añade controles en Gráficos */
(function hook(){if(typeof menuDraw!='function'||typeof menuEl=='undefined'){setTimeout(hook,600);return}if(menuDraw._p94)return;
 const m0=menuDraw;menuDraw=function(){m0.apply(this,arguments);try{
  const bd=menuEl.querySelector('.mbd');if(!bd||!bd.querySelector('[data-g]'))return;
  const fr=bd.querySelector('[data-fps]');if(fr){const sg=fr.closest('.sg');if(sg)sg.innerHTML=[[20,'20'],[30,'30'],[60,'60'],[90,'90'],[120,'120'],[0,'Sin límite']].map(([k,n])=>`<button data-fps=${k} class="${GFPS==k?'on':''}">${n}</button>`).join('')}
  const d=document.createElement('div');d.innerHTML=`<div class=ms>RESOLUCIÓN DE RENDER</div><div class=sg>${[[0,'Auto'],[1,'1×'],[1.5,'1,5×'],[2,'2×'],[3,'Nativa']].map(([k,n])=>`<button data-res=${k} class="${RES==k?'on':''}">${n}</button>`).join('')}</div><div class=hint>Menos resolución = más FPS. «Auto» usa la del nivel de gráficos.</div>
  <div class=ms>RENDIMIENTO</div>
  <button class="mr tg${TC?' on':''}" data-p94=tc><span class=mt>Caché del terreno<small>Más FPS en la aldea (recomendado)</small></span><span class=sw><i></i></span></button>
  <button class="mr tg${(window.bcache94&&bcache94.on())?' on':''}" data-p94=bc><span class=mt>Caché de edificios<small>Muchos más FPS con aldeas grandes (recomendado)</small></span><span class=sw><i></i></span></button>
  <button class="mr tg${BL?' on':''}" data-p94=bl><span class=mt>Desenfoque de vidrio<small>Apágalo si el teléfono va lento</small></span><span class=sw><i></i></span></button>
  <button class="mr tg${SF?' on':''}" data-p94=fps><span class=mt>Mostrar FPS</span><span class=sw><i></i></span></button>`;
  bd.appendChild(d)}catch(e){}};
 menuDraw._p94=1;
 menuEl.addEventListener('click',e=>{
  const r=e.target.closest('[data-res]');if(r){e.stopPropagation();RES=+r.dataset.res||0;st('ccres',RES);try{rs2()}catch(_){}try{menuDraw()}catch(_){}return}
  const p=e.target.closest('[data-p94]');if(p){e.stopPropagation();const k=p.dataset.p94;
   if(k=='tc'){TC=!TC;st('cctc',TC?'1':'0');applyTc()}else if(k=='bc'){bcache94.set(!bcache94.on())} else if(k=='bl'){BL=!BL;st('ccbl',BL?'1':'0');applyBl()}else if(k=='fps')fpsOn(!SF);
   try{menuDraw()}catch(_){}}},true)})();

/* ===== caché de sprites de edificios estáticos (v59b) ===== */
(function(){
let BC=g('ccbc')!=='0';const WM=new WeakMap();let px=0,lastSc=0,lastScT=0,scr=null,scx=null;const MAXPX=16e6;
const sig=b=>b.t+'|'+b.lv+'|'+b.x+','+b.y+'|'+(b.hp<b.max?1:0)+(b.ruin?1:0)+(b.nb?1:0)+(b.rpr?1:0)+(b.up>0?1:0)+(b.ghost?1:0)+(b.rg!=null?1:0);
function box(b){const d=TY[b.t],s=d.s,h=(d.h||40)+90;let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(const[a,c]of[[b.x,b.y],[b.x+s,b.y],[b.x,b.y+s],[b.x+s,b.y+s]])for(const z of[0,h]){const q=P(a,c,z);x0=Math.min(x0,q[0]);x1=Math.max(x1,q[0]);y0=Math.min(y0,q[1]);y1=Math.max(y1,q[1])}return[Math.floor(x0-34),Math.floor(y0-24),Math.ceil(x1+34),Math.ceil(y1+30)]}
function free(e){if(e.c){px-=e.c.width*e.c.height;e.c=null;e.x=null}}
function paint(b,c,ctx,e,r){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,c.width,c.height);ctx.save();ctx.setTransform(r,0,0,r,-e.x0*r,-e.y0*r);const sg=g;g=ctx;try{prev(b)}finally{g=sg;ctx.restore()}}
function border(c,ctx){const w=c.width,h=c.height,a=ctx.getImageData(0,0,w,h).data;for(let x=0;x<w;x++){if(a[x*4+3]||a[((h-1)*w+x)*4+3])return 1}for(let y=0;y<h;y++){if(a[y*w*4+3]||a[(y*w+w-1)*4+3])return 1}return 0}
function mk(e,b,r){const[x0,y0,x1,y1]=box(b);e.x0=x0;e.y0=y0;e.w=x1-x0;e.h=y1-y0;e.r=r;const W=Math.ceil(e.w*r),H=Math.ceil(e.h*r);if(px+W*H>MAXPX)return 0;
 const c=document.createElement('canvas');c.width=W;c.height=H;e.c=c;e.x=c.getContext('2d');px+=W*H;return 1}
function same(e,b){const W=e.c.width,H=e.c.height;if(!scr)scr=document.createElement('canvas');if(scr.width<W||scr.height<H){scr.width=Math.max(scr.width,W);scr.height=Math.max(scr.height,H);scx=scr.getContext('2d',{willReadFrequently:true})}
 scx.setTransform(1,0,0,1,0,0);scx.clearRect(0,0,scr.width,scr.height);scx.save();scx.setTransform(e.r,0,0,e.r,-e.x0*e.r,-e.y0*e.r);const sg=g;g=scx;try{prev(b)}finally{g=sg;scx.restore()}
 const A=e.x.getImageData(0,0,W,H).data,B=scx.getImageData(0,0,W,H).data;for(let i=3;i<A.length;i+=4)if(Math.abs(A[i]-B[i])>2||(A[i]&&(Math.abs(A[i-3]-B[i-3])>3||Math.abs(A[i-2]-B[i-2])>3||Math.abs(A[i-1]-B[i-1])>3)))return 0;return 1}
const prev=drB;
drB=function(b){
 if(!BC||mode!='v'||b.t=='wall'||b.up>0||b.nb||b.rpr||b.ghost||b.ruin||b.hp<b.max||(typeof sel!='undefined'&&sel&&(sel===b||sel.b===b))||(window.BA81&&BA81.get&&BA81.get(b)))return prev(b);
 const now=performance.now(),m=g.getTransform(),sc=m.a;if(Math.abs(sc-lastSc)>.002){lastSc=sc;lastScT=now}
 const sg=sig(b);let e=WM.get(b);if(!e||e.sg!==sg){if(e)free(e);e={sg,t0:now,st:0};WM.set(b,e)}
 if(e.st==3){if(now-e.t3>30000)e.st=0,e.t0=now;return prev(b)}
 if(e.st==0){if(now-e.t0<300||now-lastScT<500)return prev(b);
  const[x0,y0,x1,y1]=box(b),ax=x0*m.a+m.e,bx=x1*m.a+m.e,ay=y0*m.d+m.f,by=y1*m.d+m.f;if(bx<0||ax>cv.width||by<0||ay>cv.height)return prev(b);
  const r=Math.min(sc,3);if(!mk(e,b,r)){e.st=3;e.t3=now;return prev(b)}paint(b,e.c,e.x,e,r);if(border(e.c,e.x)){free(e);e.st=3;e.t3=now+1e9;return prev(b)}e.st=1;e.tA=now;return prev(b)}
 if(e.st==1){if(now-e.tA<700)return prev(b);if(same(e,b)){e.st=2;e.tv=now}else{free(e);e.st=3;e.t3=now}return prev(b)}
 /* st 2 */
 if(now-e.tv>20000){e.tv=now;if(!same(e,b)){free(e);e.st=0;e.t0=now;return prev(b)}}
 if(now-lastScT>500&&(sc/e.r>1.18||sc/e.r<.85)){const r=Math.min(sc,3);free(e);if(mk(e,b,r)){paint(b,e.c,e.x,e,r)}else{e.st=3;e.t3=now;return prev(b)}}
 g.drawImage(e.c,e.x0,e.y0,e.w,e.h)};
window.bcache94={on:()=>BC,set:v=>{BC=!!v;st('ccbc',v?'1':'0')},stat:()=>({px,n:0})};
})();

window.perf94={res:()=>RES};
})();

/* ===== v60: sin aldea de práctica (online): Batalla lleva solo a Multijugador. En tutorial/offline se mantiene ===== */
(function(){const bm=btlMain,bo=btlOpen;
 const tut=()=>S&&S.tut!=null&&S.tut<TUTS.length,solo=()=>OFFLINE||!ONL||tut();
 btlMain=function(){if(solo())return bm();BTL.tab='multi';return bm().replace(/<div class=btabs>[\s\S]*?<\/div>/,'<div class=btabs><button class="bt on" data-bt=multi>Batalla</button></div>')};
 btlOpen=function(){bo.apply(this,arguments);if(!solo()){BTL.tab='multi';try{ui()}catch(_){}}};
})();
/* ===== v60: versión del simulador (la repetición la lleva para que el verificador use la misma) ===== */
const SIMV='60a';
(function(){const sr=startReal;startReal=function(id,d){const r=sr.apply(this,arguments);try{if(REC&&!RPL)REC.v=SIMV}catch(_){}return r}})();

/* ===== v54: rediseño de menús (Tienda, Clan, Tienda de la liga) ===== */
(function(){
const ICO={"clan": "data:x", "mem": "data:x", "chat": "data:x", "cc": "data:x", "war": "data:x", "lg": "data:x", "set": "data:x"};ICO.top=ICO.mem;window.UI93={ico:ICO};
const st=document.createElement('style');
st.textContent=`:root{--u-bshop:url(data:x);--u-bclan:url(data:x);--u-bliga:url(data:x);--u-panel:url(data:x);--u-ribbon:url(data:x);--u-close:url(data:x);--u-pill:url(data:x);--u-div:url(data:x);--u-tab:url(data:x);--u-tabon:url(data:x);--u-bg:url(data:x);--u-bgp:url(data:x);--u-by:url(data:x);--u-byp:url(data:x);--u-br:url(data:x);--u-brp:url(data:x);--u-cb:url(data:x);--u-cg:url(data:x);--u-cx:url(data:x);--u-cp:url(data:x)}
#cl90,#st89,#lg93{padding:0!important;background:#04060f!important;align-items:center!important;justify-content:center!important}
#lg93{position:fixed;inset:0;z-index:2147483100;display:none;font-family:'Baloo 2',system-ui,sans-serif;color:#fff}
#cl90 .sc,#st89 .sc,#lg93 .sc{--W:min(100vw,calc(100vh*750/1619));position:relative;width:var(--W)!important;max-width:none!important;height:calc(var(--W)*1619/750)!important;max-height:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;background:#0b1020 center/100% 100% no-repeat!important;padding:calc(var(--W)*.31) calc(var(--W)*.05 + 15px) calc(var(--W)*.04 + 14px)!important}
#st89 .sc{background-image:var(--u-bshop)!important}#cl90 .sc{background-image:var(--u-bclan)!important;padding-top:calc(var(--W)*.545)!important}#lg93 .sc{background-image:var(--u-bliga)!important;padding-left:calc(var(--W)*.09 + 15px)!important;padding-right:calc(var(--W)*.09 + 15px)!important}
#cl90 .sc::before,#st89 .sc::before,#lg93 .sc::before{content:'';position:absolute;left:5%;right:5%;top:13.5%;bottom:4%;border:18px solid transparent;border-image:var(--u-panel) 58 fill/18px stretch;pointer-events:none;z-index:0}
#cl90 .sc::before{top:24.6%}#lg93 .sc::before{left:9%;right:9%}
#cl90 .sc>*,#st89 .sc>*,#lg93 .sc>*{position:relative;z-index:1}
#cl90 .sc>.hd,#st89 .sc>.hd,#lg93 .sc>.hd{position:static;z-index:auto}
#cl90 .sc>.hd>span,#st89 .sc>.hd>.gq,#lg93 .sc>.hd>span{position:relative;z-index:1;color:#fff}
#st89 .hd,#lg93 .hd{display:flex;justify-content:center;padding:0!important;margin:0 0 6px;flex:none}
#st89 .hd h2,#lg93 .hd h2{position:absolute;left:50%;top:4.6%;width:84%;aspect-ratio:562/125;transform:translateX(-50%);margin:0;background:var(--u-ribbon) center/100% 100% no-repeat;display:flex;align-items:center;justify-content:center;font:400 22px 'Lilita One','Baloo 2',sans-serif!important;color:#fff!important;text-shadow:0 2px 0 #000,0 0 8px #000;padding-bottom:6px;z-index:4}
#st89 .cx,#lg93 .cx,#cl90 .x{position:absolute!important;right:3.5%;top:5.2%;width:38px!important;height:38px!important;background:var(--u-close) center/contain no-repeat!important;border:0!important;border-radius:0!important;font-size:0!important;z-index:5;cursor:pointer;display:block!important}
#st89 .cx img,#lg93 .cx img{display:none}
#cl90 .x{top:calc(var(--W)*.1);right:5%}
#st89 .gq,#lg93 .gq{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 16px 0 42px!important;background:var(--u-pill) left center/100% 100% no-repeat!important;border:0!important;border-radius:0!important;font:800 14px 'Baloo 2',sans-serif;margin-top:2px}
#st89 .gq .bri,#lg93 .gq img{width:22px;height:22px}
#cl90 .hd{display:block!important;padding:0!important;text-align:center;flex:none}
#cl90 .hd .eb{position:absolute;left:50%;top:calc(var(--W)*.16);transform:translateX(-50%);font-style:normal;font-size:calc(var(--W)*.135);line-height:1;z-index:5;filter:drop-shadow(0 3px 3px #000a)}
#cl90 .hd .eb .emi,#cl90 .hd .eb img{width:calc(var(--W)*.15);height:calc(var(--W)*.15)}
#cl90 .hd span:not(.emi){display:block;font:400 22px 'Lilita One','Baloo 2',sans-serif!important;color:#fff!important;text-shadow:0 2px 0 #000;line-height:1.05;margin-top:2px}
#cl90 .hd::after{content:'';display:block;height:14px;background:var(--u-div) center/contain no-repeat;margin:4px 0 2px}
#st89 .tb,#cl90 .tb,#lg93 .tb{display:flex;gap:4px;padding:0 0 6px!important;flex:none}
#st89 .tb div,#cl90 .tb:not(.ic) div{flex:1;height:36px;padding:0!important;border:9px solid transparent!important;border-image:var(--u-tab) 22 fill/9px 10px stretch!important;background:none!important;border-radius:0!important;display:flex;align-items:center;justify-content:center;font:800 13px 'Baloo 2',sans-serif!important;color:#cfd6ee!important;text-shadow:0 1px 1px #000;box-sizing:border-box}
#st89 .tb div.on,#cl90 .tb:not(.ic) div.on{border-image:var(--u-tabon) 24 fill/10px 12px stretch!important;color:#3b2300!important;text-shadow:0 1px 0 #fff8;height:40px;margin-top:-4px}
#cl90 .tb.ic{justify-content:space-between;gap:0;padding-top:6px!important}
#cl90 .tb.ic div{flex:1;position:relative;display:flex;flex-direction:column;align-items:center;background:none!important;border:0!important;padding:0!important;border-radius:0!important;opacity:.72;transition:transform .12s}
#cl90 .tb.ic div img{width:min(40px,9.5vw);height:min(40px,9.5vw);object-fit:contain}
#cl90 .tb.ic div span{font:800 9.5px 'Baloo 2',sans-serif;color:#cfd6ee;text-shadow:0 1px 2px #000;margin-top:-1px}
#cl90 .tb.ic div.on{opacity:1;transform:translateY(-3px) scale(1.1)}#cl90 .tb.ic div.on img{filter:drop-shadow(0 0 8px #ffd24a)}#cl90 .tb.ic div.on span{color:#ffd96a}
#cl90 .tb i{top:-4px;right:2px}
#st89 .bd{flex:1;min-height:0;padding:2px 4px 6px!important;gap:8px!important;align-content:start;overflow-y:auto}
#cl90 .ls,#cl90 .chat,#cl90 .mu{flex:1;min-height:0}
#cl90 .ls{padding:2px 2px 8px!important}
#st89 .cd,#lg93 .cd{border:13px solid transparent!important;border-image:var(--u-cb) 30 fill/13px stretch!important;background:none!important;border-radius:0!important;padding:0 0 2px!important;gap:2px!important;color:#fff;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;min-height:150px}
#st89 .cd:nth-child(4n+1),#lg93 .cd:nth-child(4n+1){border-image-source:var(--u-cx)!important}#st89 .cd:nth-child(4n+2){border-image-source:var(--u-cg)!important}#st89 .cd:nth-child(4n+4),#lg93 .cd:nth-child(4n+3){border-image-source:var(--u-cp)!important}
#st89 .cd .nm,#lg93 .cd .nm{font:400 15px 'Lilita One','Baloo 2',sans-serif;line-height:1.05;text-shadow:0 1px 2px #000}
#st89 .cd .sm,#lg93 .cd .sm{font:700 11px 'Baloo 2',sans-serif;color:#d6defa;opacity:.85}
#st89 .cd .so{background:rgba(0,0,0,.45)!important;border:1px solid #ffd24a!important}
#st89 .cd.w{min-height:0;grid-column:1/-1}
#lg93 .bd{flex:1;min-height:0;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px;align-content:start;padding:2px 2px 6px}
#lg93 .cd .ic{font-size:40px;line-height:1;margin-top:-2px;filter:drop-shadow(0 3px 2px #0008)}
#lg93 .bt{width:100%}
#lg93 .mu{grid-column:1/-1;text-align:center;padding:26px 12px;font:700 14px 'Baloo 2',sans-serif;color:#cfd6ee}
#cl90 .it,#cl90 .mb{border:11px solid transparent!important;border-image:var(--u-cb) 30 fill/11px stretch!important;background:none!important;border-radius:0!important;padding:0 2px!important}
#cl90 .mis{border-image-source:var(--u-cp)!important}
#cl90 .em{background:rgba(0,0,0,.35)!important;border-color:#ffd24a!important}
#cl90 .pb{background:rgba(0,0,0,.45)!important;border-color:#4a68a8!important}
#cl90 .bt,#lg93 .bt{display:inline-flex!important;align-items:center;justify-content:center;gap:5px;border:13px solid transparent!important;border-image:var(--u-bg) 34 40 fill/13px 17px stretch!important;background:none!important;border-radius:0!important;font:400 15px 'Lilita One','Baloo 2',sans-serif!important;text-shadow:0 2px 0 #0007;color:#fff!important;min-height:44px;padding:0 4px!important;white-space:nowrap;box-sizing:border-box;cursor:pointer;user-select:none}
#cl90 .bt.b2,#lg93 .bt.y{border-image-source:var(--u-by)!important;color:#3b2300!important;text-shadow:0 1px 0 #fff9}
#cl90 .bt.r{border-image-source:var(--u-br)!important}
#cl90 .bt.s,#lg93 .bt.s{min-height:34px;border-width:10px 14px!important;border-image-width:10px 14px!important;font-size:13px!important}
#cl90 .bt:active,#lg93 .bt:active{border-image-source:var(--u-bgp)!important}#cl90 .bt.b2:active,#lg93 .bt.y:active{border-image-source:var(--u-byp)!important}#cl90 .bt.r:active{border-image-source:var(--u-brp)!important}
#lg93 .bt.off,#cl90 .bt.off{opacity:.5;filter:grayscale(.6);pointer-events:none}
#cl90 .bt[style*="display:block"]{display:flex!important}

#cl90 .eb2{position:relative;flex:none}#cl90 .eb2 .em{width:52px;height:52px;font-size:28px}
#cl90 .eb2 b{position:absolute;right:-7px;bottom:-5px;min-width:24px;height:24px;border-radius:12px;background:#f6b21a;border:2px solid #3a210d;color:#3a210d;font:800 13px/20px 'Baloo 2',sans-serif;text-align:center;padding:0 3px;box-sizing:border-box}
#cl90 .ds2{display:block;font:600 12.5px 'Baloo 2',sans-serif;color:#cfd6ee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px}
#cl90 .st2{display:flex;gap:8px;align-items:center;margin-top:2px;font:800 12.5px 'Baloo 2',sans-serif;color:#9fd4ff;flex-wrap:wrap}
#cl90 .bt.big{display:flex!important;width:100%;min-height:50px;font-size:18px!important;border-image-source:var(--u-by)!important;color:#3b2300!important;text-shadow:0 1px 0 #fff9}
#cl90 .sub{display:flex;gap:4px;padding:0 0 6px;flex:none;overflow-x:auto}
#cl90 .sub div{position:relative;flex:1;text-align:center;padding:4px 6px;border-radius:10px;background:rgba(8,14,32,.7);border:1.5px solid #2c4474;font:800 12px 'Baloo 2',sans-serif;color:#9db4d6;white-space:nowrap;cursor:pointer}
#cl90 .sub div.on{background:linear-gradient(#ffd24a,#f0a020);border-color:#3a210d;color:#3a210d}
#cl90 .sub i{font-style:normal;background:#e63a4a;color:#fff;border-radius:9px;padding:0 5px;font-size:11px}
#cl90 .lvr{display:flex;justify-content:space-between;font:800 13px 'Baloo 2',sans-serif;color:#dfe8ff;padding:0 2px}
#cl90 .pk{display:flex;justify-content:space-between;font:700 14px 'Baloo 2',sans-serif;padding:3px 4px}#cl90 .pk b{color:#7be39b}
#cl90 .pl{display:flex;flex-direction:column;background:rgba(5,12,30,.55);border-radius:12px;padding:2px 8px}
#cl90 .pm{display:flex;align-items:center;gap:6px;padding:7px 0;border-bottom:1px solid rgba(120,160,230,.18)}#cl90 .pm:last-child{border:0}
#cl90 .sn{width:36px;text-align:center;font:800 11px 'Baloo 2',sans-serif;color:#8ea3c9;flex:none}
#cl90 .dot{display:inline-block;width:11px;height:11px;border-radius:50%;background:#35e08a;box-shadow:0 0 6px #35e08a}
#cl90 .pn2{flex:1;min-width:0;font:400 15px 'Lilita One',sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#cl90 .pn2 em{font-style:normal;color:#7be39b}#cl90 .pn2 small{display:block;font:700 11px 'Baloo 2',sans-serif;color:#ffd96a}
#cl90 .ay{font:800 12px 'Baloo 2',sans-serif;color:#9fd4ff;flex:none}
#cl90 .ib{flex:none;width:34px;height:34px;border-radius:9px;background:linear-gradient(#4a8be0,#2a58b0);border:2px solid #0f2a5a;display:grid;place-items:center;font-size:17px;cursor:pointer}#cl90 .ib:active{filter:brightness(.8)}
#cl90 .rk{width:28px;text-align:center;font:400 20px 'Lilita One',sans-serif;color:#9db4d6;flex:none}#cl90 .rk.r1{color:#ffd24a}#cl90 .rk.r2{color:#d8dfe8}#cl90 .rk.r3{color:#e0955a}
#cl90 .tp.mine{filter:drop-shadow(0 0 5px #ffd24a)}
#cl90 label{font:800 12px 'Baloo 2',sans-serif;color:#9fd4ff;text-transform:uppercase;letter-spacing:.5px;margin-top:2px}
#cl90 input,#cl90 textarea,#cl90 select{background:rgba(6,10,24,.75)!important}`;
document.head.appendChild(st);
/* ---- Tienda de la liga (menú propio) ---- */
const pn=document.createElement('div');pn.id='lg93';document.body.appendChild(pn);
const esc=t=>String(t==null?'':t).replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
const fmt=n=>String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const RL=z=>(window.ART90&&ART90.relic)?`<img src="${ART90.relic}" style="width:${z}px;height:${z}px;vertical-align:-4px">`:'🔶';
let D=null,err='',busy=0;
const ICN=i=>i.kind=='cosm'?'🎖️':(i.data&&i.data.g)?'🪙':(i.data&&i.data.e)?'🧪':(i.data&&i.data.gems)?'💎':'🎁';
function draw(){
 let b;
 if(!D)b=`<div class=mu>${err?esc(err)+'<br>Falta ejecutar online_v47a/b/c.sql en Supabase.':'Cargando…'}</div>`;
 else b=(err?`<div class=mu>${esc(err)}</div>`:'')+D.items.map(i=>{const off=i.owned||D.relics<i.cost||(i.kind=='pack'&&i.today>=3)||busy;
  return `<div class=cd><div class=ic>${ICN(i)}</div><div class=nm>${esc(i.name)}</div><div class=sm>${i.owned?'Ya lo tienes':i.kind=='pack'?'Hoy '+i.today+'/3':'Exclusivo'}</div><div class="bt y s ${off?'off':''}" data-a=buy data-id="${esc(i.id)}">${i.owned?'Tuyo':RL(16)+' '+fmt(i.cost)}</div></div>`}).join('');
 pn.innerHTML=`<div class=sc><div class=hd><h2>Tienda de la liga</h2><div class=cx data-a=x>✕</div></div><div class=hd style="margin-top:2px"><span class=gq>${RL(22)} ${D?fmt(D.relics):'…'} Reliquias</span></div><div class=bd>${b}</div></div>`}
async function load(){try{const r=await sb.rpc('league_shop_state');if(r.error)throw r.error;D=r.data;err=''}catch(e){err=(e&&e.message)||String(e)}draw()}
async function buy(id){if(busy)return;busy=1;draw();try{const r=await sb.rpc('league_shop_buy',{p_id:id});if(r.error)throw r.error;const x=r.data;
  if(x.g)S.g=Math.min(cap.g(),(S.g|0)+x.g);if(x.e)S.e=Math.min(cap.e(),(S.e|0)+x.e);if(x.gems!=null)S.gem=x.gems;try{ui()}catch(_){}try{save()}catch(_){}
  try{toast91(x.cosm?'¡Banner desbloqueado! Equípalo en tu perfil':'Compra hecha')}catch(_){}}catch(e){err=(e&&e.message)||String(e);try{toast91(err)}catch(_){}}
 busy=0;await load();err=''}
pn.addEventListener('click',e=>{if(e.target===pn){pn.style.display='none';return}const b=e.target.closest('[data-a]');if(!b)return;
 if(b.dataset.a=='x')pn.style.display='none';else if(b.dataset.a=='buy')buy(b.dataset.id)});
window.lg93={open:async()=>{if(typeof OFFLINE!='undefined'&&OFFLINE||typeof sb=='undefined'||!sb){try{toast91('La tienda de la liga es solo online')}catch(_){}return}
 D=null;err='';pn.style.display='flex';draw();await load()}};
})();
/* botones Eventos y Chat: mismo vidrio desenfocado que el resto */
(function(){const s=document.createElement('style');s.textContent=`#ev85b,#ch89b{background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 55%),rgba(16,24,42,.5)!important;border:1.5px solid rgba(255,255,255,.3)!important;box-shadow:0 5px 14px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.4)!important;-webkit-backdrop-filter:blur(12px) saturate(1.35)!important;backdrop-filter:blur(12px) saturate(1.35)!important}`;document.head.appendChild(s)})();

/* ===== v58: idiomas (ES / EN / PT / RU) ===== */
(function(){
const LS='lang93',OK=['es','en','pt','ru'];
let L='es';try{L=localStorage.getItem(LS)||''}catch(_){}
if(OK.indexOf(L)<0){const n=((navigator.language||'es')+'').slice(0,2).toLowerCase();L=OK.indexOf(n)>=0?n:'es'}
const IX={en:0,pt:1,ru:2}[L];
const D={"Clanes":["Clans","Clãs","Кланы"],"Clan":["Clan","Clã","Клан"],"Clasificación":["Ranking","Classificação","Рейтинг"],"Liga":["League","Liga","Лига"],"Tienda":["Shop","Loja","Магазин"],"Tienda de la liga":["League shop","Loja da liga","Магазин лиги"],"Chat":["Chat","Chat","Чат"],"Chat global":["Global chat","Chat global","Общий чат"],"Chat del clan":["Clan chat","Chat do clã","Чат клана"],"Global":["Global","Global","Общий"],"Eventos":["Events","Eventos","События"],"Pase":["Pass","Passe","Пропуск"],"Menú":["Menu","Menu","Меню"],"Mi perfil":["My profile","Meu perfil","Мой профиль"],"Cuenta":["Account","Conta","Аккаунт"],"CUENTA":["ACCOUNT","CONTA","АККАУНТ"],"BATALLA":["BATTLE","BATALHA","БИТВА"],"AJUSTES":["SETTINGS","AJUSTES","НАСТРОЙКИ"],"AYUDA":["HELP","AJUDA","ПОМОЩЬ"],"IDIOMA":["LANGUAGE","IDIOMA","ЯЗЫК"],"Idioma":["Language","Idioma","Язык"],"Racha diaria":["Daily streak","Sequência diária","Ежедневная серия"],"Enviar comentarios":["Send feedback","Enviar comentários","Отправить отзыв"],"Historial y venganza":["History & revenge","Histórico e vingança","История и месть"],"Audio":["Audio","Áudio","Звук"],"Gráficos":["Graphics","Gráficos","Графика"],"Efectos visuales":["Visual effects","Efeitos visuais","Визуальные эффекты"],"Pantalla":["Screen","Tela","Экран"],"Repetir tutorial":["Replay tutorial","Repetir tutorial","Повторить обучение"],"Música":["Music","Música","Музыка"],"Efectos de sonido":["Sound effects","Efeitos sonoros","Звуковые эффекты"],"Sonido general":["Master sound","Som geral","Общий звук"],"CALIDAD GRÁFICA":["GRAPHICS QUALITY","QUALIDADE GRÁFICA","КАЧЕСТВО ГРАФИКИ"],"FPS MÁXIMOS":["MAX FPS","FPS MÁXIMO","МАКС. FPS"],"Bajo":["Low","Baixo","Низкое"],"Medio":["Medium","Médio","Среднее"],"Alto":["High","Alto","Высокое"],"Sin límite":["No limit","Sem limite","Без лимита"],"Partículas y chispas":["Particles & sparks","Partículas e faíscas","Частицы и искры"],"Confeti de victoria":["Victory confetti","Confete da vitória","Конфетти победы"],"Motas de luz en la aldea":["Light motes in the village","Partículas de luz na aldeia","Огоньки в деревне"],"Ondas al tocar el mapa":["Ripples on map tap","Ondas ao tocar o mapa","Волны при касании карты"],"Temblor de pantalla":["Screen shake","Tremor de tela","Тряска экрана"],"Vibración":["Vibration","Vibração","Вибрация"],"Pantalla completa":["Fullscreen","Tela cheia","Полный экран"],"Vista isométrica":["Isometric view","Vista isométrica","Изометрический вид"],"Vista cenital":["Top-down view","Vista superior","Вид сверху"],"Cerrar sesión":["Log out","Sair","Выйти"],"Cerrar":["Close","Fechar","Закрыть"],"Cancelar":["Cancel","Cancelar","Отмена"],"Aceptar":["OK","Aceitar","ОК"],"Atrás":["Back","Voltar","Назад"],"Volver":["Back","Voltar","Назад"],"← Volver":["← Back","← Voltar","← Назад"],"Volver a la aldea":["Back to village","Voltar à aldeia","Назад в деревню"],"Cargando…":["Loading…","Carregando…","Загрузка…"],"Reintentar":["Retry","Tentar de novo","Повторить"],"Enviar":["Send","Enviar","Отправить"],"Buscar":["Search","Buscar","Поиск"],"Unirse":["Join","Entrar","Вступить"],"Solicitar":["Request","Solicitar","Подать заявку"],"Salir del clan":["Leave clan","Sair do clã","Покинуть клан"],"Resumen":["Summary","Resumo","Обзор"],"Gestión":["Management","Gestão","Управление"],"Tropas":["Troops","Tropas","Войска"],"Guerra":["War","Guerra","Война"],"Ajustes":["Settings","Ajustes","Настройки"],"Más":["More","Mais","Ещё"],"Líder":["Leader","Líder","Лидер"],"Colíder":["Co-leader","Colíder","Соруководитель"],"Miembro":["Member","Membro","Участник"],"Abierto":["Open","Aberto","Открытый"],"Con solicitud":["By request","Com solicitação","По заявке"],"Cerrado":["Closed","Fechado","Закрытый"],"Crear un clan":["Create a clan","Criar um clã","Создать клан"],"Necesita un Castillo del Clan construido":["Requires a built Clan Castle","Requer um Castelo do Clã construído","Нужен построенный Замок клана"],"Todos los clanes":["All clans","Todos os clãs","Все кланы"],"Resultados":["Results","Resultados","Результаты"],"Nombre o etiqueta…":["Name or tag…","Nome ou tag…","Имя или тег…"],"Sin descripción":["No description","Sem descrição","Без описания"],"Nombre (3-20)":["Name (3-20)","Nome (3-20)","Название (3-20)"],"Etiqueta (2-5)":["Tag (2-5)","Tag (2-5)","Тег (2-5)"],"Tipo":["Type","Tipo","Тип"],"Descripción":["Description","Descrição","Описание"],"Ayuntamiento mín.":["Min. Town Hall","Prefeitura mín.","Мин. ратуша"],"Trofeos mín.":["Min. trophies","Troféus mín.","Мин. трофеев"],"Trofeos mínimos":["Minimum trophies","Troféus mínimos","Минимум трофеев"],"Idioma del clan":["Clan language","Idioma do clã","Язык клана"],"Emblema":["Emblem","Emblema","Эмблема"],"Guardar cambios":["Save changes","Salvar alterações","Сохранить изменения"],"Solo el líder y los colíderes pueden editar el clan.":["Only the leader and co-leaders can edit the clan.","Só o líder e os colíderes podem editar o clã.","Только лидер и соруководители могут редактировать клан."],"EL CLAN DA":["THE CLAN GIVES","O CLÃ DÁ","КЛАН ДАЁТ"],"El clan da":["The clan gives","O clã dá","Клан даёт"],"Minería de oro y elixir":["Gold & elixir mining","Mineração de ouro e elixir","Добыча золота и эликсира"],"Costo de construcción":["Construction cost","Custo de construção","Стоимость строительства"],"Participantes":["Participants","Participantes","Участники"],"Top clanes por trofeos":["Top clans by trophies","Top clãs por troféus","Топ кланов по трофеям"],"Suma de trofeos de todos los miembros.":["Sum of all members' trophies.","Soma dos troféus de todos os membros.","Сумма трофеев всех участников."],"Aún no hay clanes.":["No clans yet.","Ainda não há clãs.","Кланов пока нет."],"No hay clanes todavía. ¡Funda el primero!":["No clans yet. Found the first one!","Ainda não há clãs. Funde o primeiro!","Кланов пока нет. Создай первый!"],"Visitar":["Visit","Visitar","Посетить"],"Raid amistoso":["Friendly raid","Raid amistoso","Дружеский рейд"],"Sin botín, sin perder tropas ni trofeos.":["No loot, no lost troops or trophies.","Sem saque, sem perder tropas nem troféus.","Без добычи, без потери войск и трофеев."],"Entrena tropas antes de un raid":["Train troops before a raid","Treine tropas antes de um raid","Обучи войска перед рейдом"],"Destrucción:":["Destruction:","Destruição:","Разрушение:"],"Escalera":["Ladder","Escada","Лестница"],"Escalera de ligas":["League ladder","Escada de ligas","Лестница лиг"],"Inscribir al clan":["Enroll clan","Inscrever o clã","Записать клан"],"Elegir los mejores":["Pick the best","Escolher os melhores","Выбрать лучших"],"Inscribir":["Enroll","Inscrever","Записать"],"Reliquias":["Relics","Relíquias","Реликвии"],"Tus Reliquias:":["Your Relics:","Suas Relíquias:","Твои реликвии:"],"Batalla de clanes":["Clan Battle","Batalha de clãs","Битва кланов"],"Tareas":["Tasks","Tarefas","Задания"],"Grupo":["Group","Grupo","Группа"],"Camino":["Path","Caminho","Путь"],"Guía":["Guide","Guia","Гид"],"Campeón":["Champion","Campeão","Чемпион"],"Campeón I":["Champion I","Campeão I","Чемпион I"],"Campeón II":["Champion II","Campeão II","Чемпион II"],"Campeón III":["Champion III","Campeão III","Чемпион III"],"Maestro I":["Master I","Mestre I","Мастер I"],"Maestro II":["Master II","Mestre II","Мастер II"],"Maestro III":["Master III","Mestre III","Мастер III"],"Cristal I":["Crystal I","Cristal I","Кристалл I"],"Cristal II":["Crystal II","Cristal II","Кристалл II"],"Cristal III":["Crystal III","Cristal III","Кристалл III"],"Oro I":["Gold I","Ouro I","Золото I"],"Oro II":["Gold II","Ouro II","Золото II"],"Oro III":["Gold III","Ouro III","Золото III"],"Plata I":["Silver I","Prata I","Серебро I"],"Plata II":["Silver II","Prata II","Серебро II"],"Plata III":["Silver III","Prata III","Серебро III"],"Bronce I":["Bronze I","Bronze I","Бронза I"],"Bronce II":["Bronze II","Bronze II","Бронза II"],"Bronce III":["Bronze III","Bronze III","Бронза III"],"Únete a un clan para jugar la liga.":["Join a clan to play the league.","Entre em um clã para jogar a liga.","Вступи в клан, чтобы играть в лигу."],"Únete a un clan para participar":["Join a clan to take part","Entre em um clã para participar","Вступи в клан, чтобы участвовать"],"Sin clan":["No clan","Sem clã","Без клана"],"Escudo Mágico (1 día)":["Magic Shield (1 day)","Escudo Mágico (1 dia)","Магический щит (1 день)"],"Escudo Mágico (2 días)":["Magic Shield (2 days)","Escudo Mágico (2 dias)","Магический щит (2 дня)"],"Escudo Mágico (1 semana)":["Magic Shield (1 week)","Escudo Mágico (1 semana)","Магический щит (1 неделя)"],"Sin escudo activo":["No active shield","Sem escudo ativo","Нет активного щита"],"Atacar a otro jugador rompe tu escudo. Se acumulan hasta 10 días.":["Attacking another player breaks your shield. They stack up to 10 days.","Atacar outro jogador quebra seu escudo. Acumulam até 10 dias.","Атака другого игрока снимает твой щит. Щиты суммируются до 10 дней."],"Ese escudo está en recuperación.":["That shield is on cooldown.","Esse escudo está em recuperação.","Этот щит на перезарядке."],"Tu escudo no puede pasar de 10 días.":["Your shield can't exceed 10 days.","Seu escudo não pode passar de 10 dias.","Щит не может превышать 10 дней."],"¡Escudo activado!":["Shield activated!","Escudo ativado!","Щит активирован!"],"Te faltan runas.":["Not enough runes.","Faltam runas.","Не хватает рун."],"Escudos":["Shields","Escudos","Щиты"],"Skins":["Skins","Skins","Скины"],"Runas":["Runes","Runas","Руны"],"Recursos":["Resources","Recursos","Ресурсы"],"Próximamente":["Coming soon","Em breve","Скоро"],"Próximo":["Next","Próximo","Далее"],"Skins de tropas":["Troop skins","Skins de tropas","Скины войск"],"Banners y marcos":["Banners & frames","Banners e molduras","Баннеры и рамки"],"Aspectos de aldea":["Village looks","Aspectos de aldeia","Облики деревни"],"Cambia el look de tu pueblo":["Change the look of your village","Mude o visual da sua aldeia","Измени вид своей деревни"],"Estilos únicos para tu ejército":["Unique styles for your army","Estilos únicos para o seu exército","Уникальные стили для твоей армии"],"Personaliza tu perfil":["Customize your profile","Personalize seu perfil","Настрой свой профиль"],"Puñado de runas":["Handful of runes","Punhado de runas","Горсть рун"],"Bolsa de runas":["Bag of runes","Bolsa de runas","Мешок рун"],"Cofre de runas":["Chest of runes","Baú de runas","Сундук рун"],"Pase de temporada":["Season pass","Passe de temporada","Пропуск сезона"],"Ya lo tienes":["You already own it","Você já tem","Уже есть"],"En uso":["In use","Em uso","Используется"],"Usar":["Use","Usar","Использовать"],"Tuyo":["Yours","Seu","Твой"],"Hoy":["Today","Hoje","Сегодня"],"Mañana":["Tomorrow","Amanhã","Завтра"],"Misiones diarias · se reinician en":["Daily missions · reset in","Missões diárias · reiniciam em","Ежедневные задания · сброс через"],"Misiones de hoy":["Today's missions","Missões de hoje","Задания на сегодня"],"Misiones de la semana":["Weekly missions","Missões da semana","Задания недели"],"Misiones de logros":["Achievement missions","Missões de conquistas","Задания достижений"],"Misiones y premios":["Missions & rewards","Missões e prêmios","Задания и награды"],"Niveles":["Levels","Níveis","Уровни"],"Reclamar":["Claim","Resgatar","Забрать"],"Reclamar día":["Claim day","Resgatar dia","Забрать день"],"PLAN DE 30 DÍAS":["30-DAY PLAN","PLANO DE 30 DIAS","ПЛАН НА 30 ДНЕЙ"],"Entra todos los días para multiplicar tus recompensas":["Log in every day to multiply your rewards","Entre todos os dias para multiplicar suas recompensas","Заходи каждый день, чтобы умножать награды"],"Mi ejército":["My army","Meu exército","Моя армия"],"Ejército":["Army","Exército","Армия"],"Héroe":["Hero","Herói","Герой"],"Héroes":["Heroes","Heróis","Герои"],"Investigación":["Research","Pesquisa","Исследования"],"Construcción":["Construction","Construção","Строительство"],"Defensa y escudo":["Defense & shield","Defesa e escudo","Защита и щит"],"Protege tus recursos de los ataques":["Protect your resources from attacks","Proteja seus recursos dos ataques","Защити ресурсы от атак"],"Un escudo te protege de ataques mientras te recuperas.":["A shield protects you from attacks while you recover.","Um escudo protege você de ataques enquanto se recupera.","Щит защищает от атак, пока ты восстанавливаешься."],"Si atacas a otro jugador, tu escudo de protección se rompe.":["If you attack another player, your shield breaks.","Se você atacar outro jogador, seu escudo quebra.","Если ты атакуешь другого игрока, твой щит снимается."],"Entrena tropas antes de atacar":["Train troops before attacking","Treine tropas antes de atacar","Обучи войска перед атакой"],"Necesitas tropas para atacar. Entrena tu ejército primero.":["You need troops to attack. Train your army first.","Você precisa de tropas para atacar. Treine seu exército primeiro.","Нужны войска для атаки. Сначала обучи армию."],"Cancelar búsqueda":["Cancel search","Cancelar busca","Отменить поиск"],"Busca un rival real, roba su botín y gana trofeos.":["Find a real rival, steal their loot and win trophies.","Encontre um rival real, roube o saque e ganhe troféus.","Найди реального соперника, укради добычу и получи трофеи."],"Te rendiste":["You surrendered","Você se rendeu","Ты сдался"],"¡Victoria!":["Victory!","Vitória!","Победа!"],"Derrota":["Defeat","Derrota","Поражение"],"Botín:":["Loot:","Saque:","Добыча:"],"Estrellas":["Stars","Estrelas","Звёзды"],"Trofeos":["Trophies","Troféus","Трофеи"],"Aldea de práctica":["Practice village","Aldeia de treino","Тренировочная деревня"],"Entrar con correo":["Sign in with email","Entrar com e-mail","Войти по почте"],"Usuario o contraseña incorrectos":["Wrong username or password","Usuário ou senha incorretos","Неверный логин или пароль"],"Error de conexión":["Connection error","Erro de conexão","Ошибка соединения"],"Sin conexión con el servidor":["No connection to the server","Sem conexão com o servidor","Нет связи с сервером"],"Conectando con el servidor…":["Connecting to the server…","Conectando ao servidor…","Подключение к серверу…"],"Cargando tu aldea…":["Loading your village…","Carregando sua aldeia…","Загрузка деревни…"],"Preparando el mapa…":["Preparing the map…","Preparando o mapa…","Подготовка карты…"],"Perfil de jugador":["Player profile","Perfil do jogador","Профиль игрока"],"Nivel de perfil":["Profile level","Nível do perfil","Уровень профиля"],"Insignias":["Badges","Insígnias","Значки"],"Títulos":["Titles","Títulos","Титулы"],"Logros":["Achievements","Conquistas","Достижения"],"Banner de perfil":["Profile banner","Banner do perfil","Баннер профиля"],"Fiel al pase":["Pass loyalist","Fiel ao passe","Верный пропуску"],"Estandarte Cristalino":["Crystal Standard","Estandarte Cristalino","Кристальное знамя"],"Rey Cristalino":["Crystal King","Rei Cristalino","Кристальный король"],"Premium activado para esta temporada.":["Premium activated for this season.","Premium ativado para esta temporada.","Премиум активирован на этот сезон."],"Pagar con GRAM":["Pay with GRAM","Pagar com GRAM","Оплатить GRAM"],"Ya pagué · verificar":["I paid · verify","Já paguei · verificar","Я оплатил · проверить"],"Abrir en Tonkeeper":["Open in Tonkeeper","Abrir no Tonkeeper","Открыть в Tonkeeper"],"Escribe un mensaje…":["Type a message…","Digite uma mensagem…","Напиши сообщение…"],"Escribe al clan…":["Write to the clan…","Escreva ao clã…","Напиши клану…"],"Aún no hay mensajes. ¡Sé el primero en saludar!":["No messages yet. Be the first to say hi!","Ainda não há mensagens. Seja o primeiro a dizer oi!","Сообщений пока нет. Поздоровайся первым!"],"Aún no hay mensajes del clan.":["No clan messages yet.","Ainda não há mensagens do clã.","Сообщений клана пока нет."],"No se pudo cargar el chat":["Couldn't load the chat","Não foi possível carregar o chat","Не удалось загрузить чат"],"Reportar mensaje":["Report message","Denunciar mensagem","Пожаловаться на сообщение"],"Reporte enviado. ¡Gracias!":["Report sent. Thank you!","Denúncia enviada. Obrigado!","Жалоба отправлена. Спасибо!"],"Has enviado muchos mensajes hoy. ¡Gracias!":["You've sent many messages today. Thanks!","Você enviou muitas mensagens hoje. Obrigado!","Ты отправил много сообщений сегодня. Спасибо!"],"Español":["Español","Español","Español"],"Entrenar":["Train","Treinar","Обучить"],"Mejorar":["Upgrade","Melhorar","Улучшить"],"Construir":["Build","Construir","Построить"],"Vender":["Sell","Vender","Продать"],"Mover":["Move","Mover","Переместить"],"Recolectar":["Collect","Coletar","Собрать"],"Nivel máx.":["Max level","Nível máx.","Макс. уровень"],"Nivel máximo":["Max level","Nível máximo","Макс. уровень"],"Sin constructor libre":["No free builder","Sem construtor livre","Нет свободного строителя"],"Sin tropas":["No troops","Sem tropas","Нет войск"],"Sin conexión":["Offline","Sem conexão","Нет связи"],"Modo prueba · sin conexión":["Test mode · offline","Modo teste · offline","Тестовый режим · офлайн"],"Mantén pulsado":["Hold","Mantenha pressionado","Удерживай"],"Venganza":["Revenge","Vingança","Месть"],"Venganza ya hecha":["Revenge already done","Vingança já feita","Месть уже совершена"],"Aún no has atacado a nadie.":["You haven't attacked anyone yet.","Você ainda não atacou ninguém.","Ты пока никого не атаковал."],"Nadie te ha atacado todavía.":["Nobody has attacked you yet.","Ninguém atacou você ainda.","Тебя пока никто не атаковал."],"Registro de ataque":["Attack log","Registro de ataque","Журнал атак"],"Registro de defensa":["Defense log","Registro de defesa","Журнал защиты"],"Registro de guerras":["War log","Registro de guerras","Журнал войн"],"Terrestres y aéreos":["Ground & air","Terrestres e aéreos","Наземные и воздушные"],"Daño por segundo":["Damage per second","Dano por segundo","Урон в секунду"],"Daño por ataque":["Damage per attack","Dano por ataque","Урон за атаку"],"Vida":["Health","Vida","Здоровье"],"Tiempo de entrenamiento":["Training time","Tempo de treinamento","Время обучения"],"Velocidad de movimiento":["Movement speed","Velocidade de movimento","Скорость движения"],"Velocidad de ataque":["Attack speed","Velocidade de ataque","Скорость атаки"],"Almacén de oro":["Gold storage","Armazém de ouro","Хранилище золота"],"Almacén de elixir":["Elixir storage","Armazém de elixir","Хранилище эликсира"],"Mina de oro":["Gold mine","Mina de ouro","Золотая шахта"],"Extractor de elixir":["Elixir collector","Extrator de elixir","Сборщик эликсира"],"Cuartel":["Barracks","Quartel","Казармы"],"Laboratorio":["Laboratory","Laboratório","Лаборатория"],"Ayuntamiento":["Town Hall","Prefeitura","Ратуша"],"Castillo del Clan":["Clan Castle","Castelo do Clã","Замок клана"],"Choza de constructores":["Builder's hut","Cabana do construtor","Хижина строителя"],"Cañón":["Cannon","Canhão","Пушка"],"Torre de arqueras":["Archer tower","Torre de arqueiras","Башня лучниц"],"Torre de magos":["Wizard tower","Torre de magos","Башня магов"],"Mortero":["Mortar","Morteiro","Мортира"],"Muro":["Wall","Muro","Стена"],"Muros":["Walls","Muros","Стены"],"Trampa con muelle":["Spring trap","Armadilha de mola","Пружинная ловушка"],"Bomba aérea":["Air bomb","Bomba aérea","Воздушная бомба"],"Guerrero":["Barbarian","Guerrero","Варвар"],"Arquera":["Archer","Arqueira","Лучница"],"Gigante":["Giant","Gigante","Гигант"],"Duende":["Goblin","Goblin","Гоблин"],"Mago":["Wizard","Mago","Маг"],"Dragón":["Dragon","Dragão","Дракон"],"Rey":["King","Rei","Король"],"Altar del Rey":["King's altar","Altar do Rei","Алтарь короля"],"Gemas añadidas":["Gems added","Gemas adicionadas","Самоцветы добавлены"],"Recursos añadidos":["Resources added","Recursos adicionados","Ресурсы добавлены"],"Compra hecha":["Purchase made","Compra feita","Покупка совершена"],"¡Compra realizada!":["Purchase complete!","Compra realizada!","Покупка завершена!"],"No se pudo comprar":["Couldn't buy","Não foi possível comprar","Не удалось купить"],"No se pudo guardar.":["Couldn't save.","Não foi possível salvar.","Не удалось сохранить."],"No se pudo":["Couldn't","Não foi possível","Не удалось"],"Menú → Gráficos":["Menu → Graphics","Menu → Gráficos","Меню → Графика"],"Termina en":["Ends in","Termina em","Заканчивается через"],"Disponible en":["Available in","Disponível em","Доступно через"],"Recuperación:":["Cooldown:","Recuperação:","Перезарядка:"],"En curso":["In progress","Em andamento","Идёт"],"Pronto":["Soon","Em breve","Скоро"],"Ahora":["Now","Agora","Сейчас"],"Campaña de duendes":["Goblin campaign","Campanha de goblins","Кампания гоблинов"],"Tablero del Imperio":["Empire Board","Tabuleiro do Império","Доска империи"],"Combate parejo":["Even Match","Combate equilibrado","Равный бой"],"Ir":["Go","Ir","Вперёд"],"Seleccionar":["Select","Selecionar","Выбрать"],"Sí":["Yes","Sim","Да"],"No":["No","Não","Нет"],"No, gracias":["No, thanks","Não, obrigado","Нет, спасибо"],"Código incorrecto o vencido.":["Wrong or expired code.","Código incorreto ou expirado.","Неверный или просроченный код."],"Correo no válido.":["Invalid email.","E-mail inválido.","Неверная почта."],"Escribe un correo válido.":["Enter a valid email.","Digite um e-mail válido.","Введи правильную почту."],"Ese usuario ya existe":["That username already exists","Esse usuário já existe","Такой логин уже есть"],"La contraseña necesita 6 caracteres o más":["The password needs 6 or more characters","A senha precisa de 6 ou mais caracteres","Пароль должен быть не короче 6 символов"],"Telegram aún no está configurado":["Telegram isn't set up yet","O Telegram ainda não está configurado","Telegram ещё не настроен"],"Iniciar sesión a través de Telegram":["Sign in with Telegram","Entrar com o Telegram","Войти через Telegram"],"Entrando con Telegram…":["Signing in with Telegram…","Entrando com o Telegram…","Вход через Telegram…"],"La beta ha terminado":["The beta has ended","A beta terminou","Бета завершена"],"Beta cerrada · termina en":["Closed beta · ends in","Beta fechada · termina em","Закрытая бета · заканчивается через"],"(Tú)":["(You)","(Você)","(Ты)"],"Escudo activo:":["Active shield:","Escudo ativo:","Активный щит:"],"Escudo Mágico":["Magic Shield","Escudo Mágico","Магический щит"],"Registrando ataque…":["Recording attack…","Registrando ataque…","Запись атаки…"],"Ataque cancelado":["Attack cancelled","Ataque cancelado","Атака отменена"],"Cofre del día":["Daily chest","Baú do dia","Сундук дня"],"Sin liga":["No league","Sem liga","Без лиги"],"Fundar clan":["Found clan","Fundar clã","Основать клан"],"Todavía no tiene logros.":["No achievements yet.","Ainda sem conquistas.","Пока нет достижений."],"Todavía no tienes insignias.":["You have no badges yet.","Você ainda não tem insígnias.","У тебя пока нет значков."],"Selecciona un jugador":["Select a player","Selecione um jogador","Выбери игрока"],"Configuración":["Settings","Configurações","Настройки"],"Tareas de prestigio de hoy":["Today's prestige tasks","Tarefas de prestígio de hoje","Задания престижа на сегодня"],"Premio por puesto:":["Rank reward:","Prêmio por posição:","Награда за место:"],"Día de reparto: las tareas empiezan mañana":["Draft day: tasks start tomorrow","Dia de sorteio: as tarefas começam amanhã","День распределения: задания начнутся завтра"],"Día de resultados":["Results day","Dia de resultados","День результатов"],"Aldea de":["Village of","Aldeia de","Деревня"],"Bono por victoria en la liga":["League victory bonus","Bônus por vitória na liga","Бонус за победу в лиге"],"Cargando imágenes…":["Loading images…","Carregando imagens…","Загрузка изображений…"],"Botín disponible:":["Available loot:","Saque disponível:","Доступная добыча:"],"Daño total":["Total damage","Dano total","Общий урон"],"Los escudos mágicos aún no están disponibles.":["Magic shields aren't available yet.","Os escudos mágicos ainda não estão disponíveis.","Магические щиты пока недоступны."],"Construye una aldea, forma un ejército y defiéndela de los ataques. Tu progreso es el mismo: juega donde quieras.":["Build a village, raise an army and defend it from attacks. Your progress is the same: play anywhere.","Construa uma aldeia, monte um exército e defenda-a dos ataques. Seu progresso é o mesmo: jogue onde quiser.","Построй деревню, собери армию и защищай её от атак. Прогресс общий: играй где угодно."],"Con Telegram entras al instante y sin contraseña. Tu cuenta y tu progreso quedan guardados.":["With Telegram you sign in instantly, no password. Your account and progress are saved.","Com o Telegram você entra na hora, sem senha. Sua conta e progresso ficam salvos.","С Telegram вход мгновенный и без пароля. Аккаунт и прогресс сохраняются."],"Cada giro cuesta 5 esmeraldas. Premios: parejas y tríos.":["Each spin costs 5 emeralds. Prizes: pairs and triples.","Cada giro custa 5 esmeraldas. Prêmios: pares e trios.","Каждое вращение стоит 5 изумрудов. Призы: пары и тройки."],"+1 slot de hechizo":["+1 spell slot","+1 slot de feitiço","+1 слот заклинания"],"+1 slot de hechizo ⚡":["+1 spell slot ⚡","+1 slot de feitiço ⚡","+1 слот заклинания ⚡"],"/ 30 días seguidos":["/ 30 days in a row","/ 30 dias seguidos","/ 30 дней подряд"],"30 DÍAS":["30 DAYS","30 DIAS","30 ДНЕЙ"],"DÍA":["DAY","DIA","ДЕНЬ"],"Avisos de Telegram":["Telegram alerts","Avisos do Telegram","Уведомления Telegram"],"Gana estrellas en ataques y reclama oro y elixir":["Earn stars in attacks and claim gold and elixir","Ganhe estrelas em ataques e resgate ouro e elixir","Зарабатывай звёзды в атаках и забирай золото и эликсир"],"Gana estrellas en cualquier ataque. Se reinicia en":["Earn stars in any attack. Resets in","Ganhe estrelas em qualquer ataque. Reinicia em","Зарабатывай звёзды в любой атаке. Сброс через"],"Gana una batalla contra un jugador":["Win a battle against a player","Vença uma batalha contra um jogador","Выиграй бой против игрока"],"Completar todo ya":["Finish everything now","Concluir tudo já","Завершить всё сейчас"],"Terminar ya":["Finish now","Concluir já","Завершить сейчас"],"Terminar cola ya":["Finish queue now","Concluir fila já","Завершить очередь сейчас"],"Vaciar ejército":["Empty army","Esvaziar exército","Очистить армию"],"Ejército lleno":["Army full","Exército cheio","Армия полна"],"Ejército vacío":["Army empty","Exército vazio","Армия пуста"],"Elige qué mejorar":["Choose what to upgrade","Escolha o que melhorar","Выбери, что улучшить"],"Selecciona una unidad para mejorarla.":["Select a unit to upgrade it.","Selecione uma unidade para melhorá-la.","Выбери юнит для улучшения."],"No hay construcciones en curso":["No constructions in progress","Nenhuma construção em andamento","Нет текущих построек"],"No hay investigación en curso":["No research in progress","Nenhuma pesquisa em andamento","Нет текущих исследований"],"Sin constructor":["No builder","Sem construtor","Нет строителя"],"Mejorar tropas al máx":["Max out troops","Maximizar tropas","Улучшить войска до макс."],"Máximo alcanzado":["Maximum reached","Máximo alcançado","Достигнут максимум"],"Todo al máximo":["Everything maxed","Tudo no máximo","Всё на максимуме"],"Salir de la visita":["Leave visit","Sair da visita","Выйти из визита"],"Aldea en crecimiento":["Growing village","Aldeia em crescimento","Растущая деревня"],"Récord de trofeos":["Trophy record","Recorde de troféus","Рекорд трофеев"],"Recién llegado":["Newcomer","Recém-chegado","Новичок"],"Perfil":["Profile","Perfil","Профиль"],"Armar":["Arm","Armar","Вооружить"],"Avisos de Telegram · Sí":["Telegram alerts · Yes","Avisos do Telegram · Sim","Уведомления Telegram · Да"],"Avisos de Telegram · No":["Telegram alerts · No","Avisos do Telegram · Não","Уведомления Telegram · Нет"],"Avisos de Telegram · vincular":["Telegram alerts · link","Avisos do Telegram · vincular","Уведомления Telegram · привязать"],"¡Listo!":["Done!","Pronto!","Готово!"],"ÚLTIMO PREMIO":["LAST PRIZE","ÚLTIMO PRÊMIO","ПОСЛЕДНИЙ ПРИЗ"],"· toca para reclamar":["· tap to claim","· toque para resgatar","· нажми, чтобы забрать"],"gemas por día":["gems per day","gemas por dia","самоцветов в день"],"Tengo una cuenta con usuario y contraseña":["I have an account with username and password","Tenho uma conta com usuário e senha","У меня есть аккаунт с логином и паролем"],"Tira de la palanca o pulsa GIRAR":["Pull the lever or tap SPIN","Puxe a alavanca ou toque em GIRAR","Потяни рычаг или нажми КРУТИТЬ"],"RESOLUCIÓN DE RENDER":["RENDER RESOLUTION","RESOLUÇÃO DE RENDER","РАЗРЕШЕНИЕ РЕНДЕРА"],"RENDIMIENTO":["PERFORMANCE","DESEMPENHO","ПРОИЗВОДИТЕЛЬНОСТЬ"],"Caché del terreno":["Terrain cache","Cache do terreno","Кэш рельефа"],"Más FPS en la aldea (recomendado)":["More FPS in the village (recommended)","Mais FPS na aldeia (recomendado)","Больше FPS в деревне (рекомендуется)"],"Desenfoque de vidrio":["Glass blur","Desfoque de vidro","Размытие стекла"],"Apágalo si el teléfono va lento":["Turn it off if your phone is slow","Desligue se o celular estiver lento","Отключи, если телефон тормозит"],"Mostrar FPS":["Show FPS","Mostrar FPS","Показывать FPS"],"Nativa":["Native","Nativa","Родное"],"Menos resolución = más FPS. «Auto» usa la del nivel de gráficos.":["Lower resolution = more FPS. \"Auto\" uses the graphics level's setting.","Menos resolução = mais FPS. \"Auto\" usa a do nível de gráficos.","Ниже разрешение — больше FPS. «Авто» берёт значение уровня графики."],"Caché de edificios":["Building cache","Cache de edifícios","Кэш зданий"],"Muchos más FPS con aldeas grandes (recomendado)":["Many more FPS with big villages (recommended)","Muito mais FPS em aldeias grandes (recomendado)","Намного больше FPS в больших деревнях (рекомендуется)"]};
const U=[ /* unidades de tiempo en ruso */ ];
const PT=[
 [/^Nivel (\d+)$/,['Level $1','Nível $1','Уровень $1']],
 [/^Nivel de clan (\d+)$/,['Clan level $1','Nível do clã $1','Уровень клана $1']],
 [/^Fundar clan · (.+)$/,['Found clan · $1','Fundar clã · $1','Основать клан · $1']],
 [/^Crear un clan · (.+)$/,['Create a clan · $1','Criar um clã · $1','Создать клан · $1']],
 [/^Participantes \((.+)\)$/,['Participants ($1)','Participantes ($1)','Участники ($1)']],
 [/^Solicitudes \((\d+)\)$/,['Requests ($1)','Solicitações ($1)','Заявки ($1)']],
 [/^Hoy (\d+)\/3$/,['Today $1/3','Hoje $1/3','Сегодня $1/3']],
 [/^Disponible en (.+)$/,['Available in $1','Disponível em $1','Доступно через $1']],
 [/^Recuperación: (.+)$/,['Cooldown: $1','Recuperação: $1','Перезарядка: $1']],
 [/^⏱ 1 día$/,['⏱ 1 day','⏱ 1 dia','⏱ 1 день']],
 [/^⏱ 2 días$/,['⏱ 2 days','⏱ 2 dias','⏱ 2 дня']],
 [/^⏱ 7 días$/,['⏱ 1 week','⏱ 1 semana','⏱ 1 неделя']],
 [/^(\d+) día$/,['$1 day','$1 dia','$1 день']],
 [/^(\d+) días$/,['$1 days','$1 dias','$1 дн.']],
 [/^Avisos de Telegram · (.+)$/,['Telegram alerts · $1','Avisos do Telegram · $1','Уведомления Telegram · $1']],
 [/^Reclamar día (\d+)$/,['Claim day $1','Resgatar dia $1','Забрать день $1']],
 [/^Recompensa del día (\d+):$/,['Day $1 reward:','Recompensa do dia $1:','Награда за день $1:']],
 [/^AY (\d+)$/,['TH $1','PF $1','Рат. $1']],
 [/^Tú ganaste (.+)$/,['You won $1','Você ganhou $1','Ты получил $1']],
 [/^Misión semanal · (.+)$/,['Weekly mission · $1','Missão semanal · $1','Задание недели · $1']],
 [/^Termina en (.+)$/,['Ends in $1','Termina em $1','Заканчивается через $1']],
 [/^Estrellas: (.+)$/,['Stars: $1','Estrelas: $1','Звёзды: $1']],
 [/^(\d+)\/(\d+) miembros$/,['$1/$2 members','$1/$2 membros','$1/$2 участников']]
];
const RUU={'min':'мин','h':'ч','d':'д'};
function tr(s){
 if(L=='es'||!s)return s;const t=s.trim();if(!t)return s;
 let v=D[t];if(v&&v[IX])return s.replace(t,v[IX]);
 for(const p of PT){const m=t.match(p[0]);if(m){return s.replace(t,p[1][IX].replace(/\$(\d)/g,(_,i)=>m[+i]))}}
 if(L=='ru'){const m=t.match(/^(\d+)(min|h|d)$/);if(m)return s.replace(t,m[1]+RUU[m[2]])}
 return s}
const MISS=window.I18N_MISS=window.I18N_MISS||{};
const SPA=/[áéíóúñ¿¡]|(^|\s)(de|el|la|los|las|tu|tus|para|con|una|que|por|del|al|más|sin|ya|hasta)(\s|$)/i;
const SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1,CANVAS:1,NOSCRIPT:1};
const orig=new WeakMap();
function node(n){
 if(n.nodeType==3){const p=n.parentNode;if(!p||SKIP[p.nodeName])return;if(p.closest&&p.closest('[data-noi],#ch89 .m .t,#ch89 .m .n,.pn2,.nm b'))return;
  const s=n.nodeValue;if(!s||!/[A-Za-zÁ-ú]/.test(s))return;const r=tr(s);if(r!==s){n.nodeValue=r}else if(L!='es'&&SPA.test(s)&&!D[s.trim()]&&s.trim().length>2)MISS[s.trim()]=1;return}
 if(n.nodeType!=1||SKIP[n.nodeName]&&n.nodeName!='INPUT'&&n.nodeName!='TEXTAREA')return;
 if(n.getAttribute){for(const a of ['placeholder','title','aria-label']){const v=n.getAttribute(a);if(v){const r=tr(v);if(r!==v)n.setAttribute(a,r)}}}
 for(let c=n.firstChild;c;c=c.nextSibling)node(c)}
if(L!='es'){
 document.documentElement.lang=L;
 let q=[],raf=0;const flush=()=>{raf=0;const a=q;q=[];for(const n of a)if(n.isConnected!==false)node(n)};
 new MutationObserver(ms=>{for(const m of ms){if(m.type=='childList')m.addedNodes.forEach(n=>q.push(n));else if(m.type=='characterData')q.push(m.target);else if(m.type=='attributes')q.push(m.target)}if(!raf)raf=requestAnimationFrame(flush)}).observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','title']});
 const go=()=>node(document.body);if(document.body)go();else document.addEventListener('DOMContentLoaded',go);
 const c0=window.confirm,a0=window.alert;window.confirm=m=>c0.call(window,tr(String(m)));window.alert=m=>a0.call(window,tr(String(m)))}
window.T93={t:tr,lang:()=>L,set(l){if(OK.indexOf(l)<0)return;try{localStorage.setItem(LS,l)}catch(_){}try{if(window.save)save()}catch(_){}setTimeout(()=>location.reload(),150)}};
window.i18nMissing=()=>Object.keys(MISS).sort();
/* selector de idioma en el menú lateral */
(function hook(){if(typeof menuDraw!='function'||typeof menuEl=='undefined'){setTimeout(hook,600);return}if(menuDraw._i93)return;
 const m0=menuDraw;menuDraw=function(){m0.apply(this,arguments);try{const top=menuEl.querySelector('.mlg');const bd=menuEl.querySelector('.mbd');if(!top||!bd)return;
  const d=document.createElement('div');d.setAttribute('data-noi','1');d.innerHTML=`<div class=ms>${L=='es'?'IDIOMA':tr('IDIOMA')}</div><div class=sg style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${[['es','Español'],['en','English'],['pt','Português'],['ru','Русский']].map(([k,n])=>`<button data-lang93=${k} class="${L==k?'on':''}">${n}</button>`).join('')}</div>`;
  const ay=[...bd.querySelectorAll('.ms')].find(x=>/AYUDA|HELP|AJUDA|ПОМОЩЬ/.test(x.textContent));if(ay)bd.insertBefore(d,ay);else bd.appendChild(d)}catch(e){}};
 menuDraw._i93=1;
 menuEl.addEventListener('click',e=>{const b=e.target.closest('[data-lang93]');if(b){e.stopPropagation();T93.set(b.dataset.lang93)}},true)})();
})();

/* ===== v53: Rey Enano 3D (hoja 5 direcciones x 4 anims; las otras 3 se espejan) ===== */
const K3D={"cw": 102, "ch": 102, "ax": 51.0, "ay": 81, "hs": 65, "cr": [21, 13, 63, 79], "cols": 6, "dirs": 5, "anims": 4, "b": ""},K3SK={"k_crystal": {"cw": 102, "ch": 102, "ax": 51.0, "ay": 82, "hs": 68, "cr": [21, 11, 63, 81], "cols": 6, "dirs": 5, "anims": 4, "b": ""}};
const K3={ok:0,old:null,sk:{},fx:{}};
(function(){const im=new Image();im.onload=()=>{try{const T=TAI81.king;if(!T)return;K3.old={im:T.im,a:T.a};T.im=im;T.a={cw:K3D.cw,ch:K3D.ch,ax:K3D.ax,ay:K3D.ay,hs:K3D.hs,cr:K3D.cr};T.orig=im;T.skin=null;K3.ok=1;
  for(const k in IC81)if(k.indexOf('king')==0)IC81[k]=null;try{ksk91(PS91.d&&PS91.d.kskin)}catch(e){}try{ui()}catch(e){}}catch(e){console.warn('k3d',e)}};im.src='data:image/webp;base64,'+K3D.b;
 for(const id in K3SK){const j=K3SK[id],i2=new Image();i2.src='data:image/webp;base64,'+j.b;K3.sk[id]={im:i2}}})();
/* sectores de pantalla (0=E,1=SE,2=S,3=SW,4=W,5=NW,6=N,7=NE) -> fila de direccion y espejo */
const K3DIR=[2,1,0,1,2,3,4,3],K3MIR=[0,0,0,1,1,1,0,0];
function k3Face(t,now){let dx=0,dy=0;
 if(t.at&&now-t.at<900&&t.tx){const a=P(t.x,t.y),b=P(t.tx[0],t.tx[1]);dx=b[0]-a[0];dy=b[1]-a[1]}
 else if(t.k3x!=null&&t.mv){const a=P(t.k3x,t.k3y),b=P(t.x,t.y);dx=b[0]-a[0];dy=b[1]-a[1]}
 t.k3x=t.x;t.k3y=t.y;
 if(t.k3v==null){t.k3v=[0,1]}
 const m=Math.hypot(dx,dy*2);if(m>.1){const ux=dx/m,uy=dy*2/m,w=(t.at&&now-t.at<900)?.5:.25;t.k3v=[t.k3v[0]*(1-w)+ux*w,t.k3v[1]*(1-w)+uy*w]}
 const an=Math.atan2(t.k3v[1],t.k3v[0]);return((Math.round(an/(Math.PI/4))%8)+8)%8}
function k3Draw(t){
 const T=TAI81.king,a=T.a,d=TD81.king,now=performance.now();if(t.ao==null)t.ao=Math.random()*5000;
 const dead=t.hp<=0;const sec=k3Face(t,now);if(!dead)bFace(t);else if(!t.fx)t.fx=1;
 const pq=pos81(t),q=P(pq[0],pq[1]),x=q[0],y=q[1];let an,fi,al=1,rot=0;
 if(dead){const u=(now-(t.dk||now))/1000;an=0;fi=0;rot=Math.min(1,u/.35);rot=rot*rot*(3-2*rot)*1.5;if(u>1.7)al=Math.max(0,1-(u-1.7)/.4);if(u>2.2)return true}
 else{const ms=t.at?now-t.at:9e9;
  if(ms<560){an=3;fi=Math.min(5,Math.floor(ms/560*6))}
  else if(t.mv){an=2;fi=Math.floor((now+t.ao)/90)%6}
  else{an=0;fi=Math.floor((now+t.ao)/300)%6}
  if(t.fl&&now-t.fl<120)al=.6}
 const vs=t.vu?.78:1,sc=d.h*vs/a.hs,W=a.cw*sc,H=a.ch*sc,row=K3DIR[sec]*4+an,mir=K3MIR[sec];
 g.save();g.globalAlpha*=al;g.translate(x,y);
 if(rot){g.translate(0,-2);g.rotate(rot*(mir?1:-1)*(Math.PI/2)/1.5);g.translate(0,2)}
 if(mir)g.scale(-1,1);g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
 g.drawImage(T.im,fi*a.cw,row*a.ch,a.cw,a.ch,-a.ax*sc,-a.ay*sc,W,H);g.restore();
 if(!dead&&T.skin&&K3.fx[T.skin])try{K3.fx[T.skin](t,x,y,d.h*vs,now)}catch(e){}
 if(!dead&&t.hp<t.max)bar(x,y-d.h*vs-6,Math.max(20,d.h*.6),t.hp/t.max);
 return true}
const drA81k3=drA81;drA81=function(t){if(t.k=='king'&&K3.ok&&TAI81.king.a.cw==K3D.cw){try{return k3Draw(t)}catch(e){console.warn('k3d',e);K3.ok=0;const T=TAI81.king;if(K3.old){T.im=K3.old.im;T.a=K3.old.a}}}return drA81k3(t)};
/* skins con hoja propia (hechas aparte): si existe una hoja para el id, se usa en vez del recolor */
const ksk91k3=ksk91;ksk91=function(id){try{const T=TAI81&&TAI81.king;if(T&&K3.ok&&id&&K3.sk[id]){const s=K3.sk[id].im;if(s.complete&&s.naturalWidth){T.im=s;T.skin=id}else setTimeout(()=>ksk91(id),500);return}
 if(T&&K3.ok&&T.skin&&K3.sk[T.skin]&&!(id&&K3.sk[id])){T.im=T.orig;T.skin=null}}catch(e){}const r=ksk91k3(id);try{const T=TAI81.king;if(T&&K3.ok&&T.im===T.orig&&id!='k_crystal')T.skin=null}catch(e){}return r};

/* icono del ejercito: recorte ajustado al personaje */
const ic81k3=ic81;ic81=function(k,big){if(k=='king'&&K3.ok&&TAI81.king.im.complete&&TAI81.king.a.cr){const key='king'+(big?'B':'');if(IC81[key])return IC81[key];
 const T=TAI81.king,a=T.a,q=a.cr,c=document.createElement('canvas'),s=big?2:1;c.width=48*s;c.height=60*s;const x=c.getContext('2d');x.imageSmoothingQuality='high';
 const r=Math.min((c.width-4)/q[2],(c.height-4)/q[3]),w=q[2]*r,h=q[3]*r;x.drawImage(T.im,a.cw+q[0],q[1],q[2],q[3],(c.width-w)/2,c.height-h-2,w,h);return IC81[key]=c.toDataURL()}
 return ic81k3(k,big)};
/* particulas de la skin cristal: destellos, esquirlas que suben y brillo de corona */
K3.fx.k_crystal=function(t,x,y,h,now,c2){const c=c2||g,ao=t.ao||0,T=(now+ao)/1000;c.save();c.globalCompositeOperation='lighter';
 const pu=.5+.5*Math.sin(T*2.2),R=h*.34;c.globalAlpha=.22+.12*pu;c.drawImage(glow81('210,120,255'),x-R,y-h*.98-R*.6,R*2,R*2);
 c.globalAlpha=.16+.1*pu;const R2=h*.5;c.drawImage(glow81('170,110,255'),x-R2,y-h*.5-R2,R2*2,R2*2);
 for(let i=0;i<8;i++){const ph=(T/1.9+i/8)%1,a=Math.sin(ph*Math.PI),px=x+Math.sin(i*2.4+T*.9)*h*.42,py=y-h*.08-ph*h*1.0,r=1.2+a*2.4;c.globalAlpha=a*.95;c.fillStyle=i&1?'rgb(170,215,255)':'rgb(255,175,255)';
  c.fillRect(px-r,py-.6,r*2,1.2);c.fillRect(px-.6,py-r,1.2,r*2)}
 for(let i=0;i<3;i++){const ph=(T/3.2+i/3)%1,a=Math.sin(ph*Math.PI),px=x+Math.sin(i*2.1+T*.6+1)*h*.5,py=y-h*.15-ph*h*.9,s=2+a*1.6,an=T*1.4+i;c.globalAlpha=a*.8;c.fillStyle='rgb(214,160,255)';
  c.save();c.translate(px,py);c.rotate(an*.3);c.beginPath();c.moveTo(0,-s*1.6);c.lineTo(s*.8,0);c.lineTo(0,s*1.6);c.lineTo(-s*.8,0);c.closePath();c.fill();c.restore()}
 c.restore()};

