const fs=require('fs'),path=require('path'),{make}=require('./ctx');
const NOHIT=new Set(['wall','wblock','bomb','spring','abomb']);
const simFile=v=>{const f=path.join(__dirname,'sims',String(v||'').replace(/[^A-Za-z0-9_.-]/g,'')+'.js');return fs.existsSync(f)?f:null};
const key=(t,x,y)=>t+'|'+(x|0)+'|'+(y|0);
const SIMSRC={};
function verifyJob(job){
 const R=job.replay,hard=[],soft=[];
 if(!R||!Array.isArray(R.b)||!Array.isArray(R.ev)||R.b.length>900||R.ev.length>6000||!R.army||typeof R.seed!='number')return{status:'error',note:'repetición no válida'};
 const f=simFile(R.v);if(!f)return{status:'skipped',note:'sin simulador para la versión '+R.v};
 const code=SIMSRC[f]||(SIMSRC[f]=fs.readFileSync(f,'utf8'));
 const {c,vm,err}=make(code);if(err)return{status:'error',note:'arranque: '+err};
 c.__R=R;c.__SAVE=job.save||null;
 let out;
 try{out=vm.runInContext(`(function(){const R=__R,o={};
  try{if(__SAVE){const S0=S;S=Object.assign(fresh(),JSON.parse(JSON.stringify(__SAVE)));try{ensureS()}catch(e){}o.exp={};for(const k in R.army){if(R.army[k]>0&&TR[k]){const m=tdm(k);o.exp[k]=[thp(k),m==null?null:m,tlv(k)]}}S=S0}}catch(e){o.expErr=String(e.message||e)}
  mode='v';S=fresh();S.tut=99;ensureS();
  const a0={...S.army},s0={...S.sp};RPL={R,id:1,sp:1,i:0,pause:0};REC=null;
  startReal0('replay',{b:R.b,g:0,e:0});Object.assign(S.army,a0);Object.assign(S.sp,s0);
  A.army={...R.army};A.sp={...(R.sp||{})};A.rs=R.seed>>>0;A.tk=0;A.acc=0;E.sh=[];E.f=1;A.prep=0;
  const cn=cen81(R.b);o.cn=cn;const snap=()=>{o.dmg=[];for(const b of E.b){if(b.t=='wall')continue;o.dmg.push([b.t,b.x-cn[0],b.y-cn[1],b.hp<=0?100:Math.round(100*(1-b.hp/b.max))])}};
  endAttack=function(){if(!o.dmg){snap();o.ended=1}if(A)A.on=false};
  let n=0;while(A&&A.on&&n<6200){atkTick();n++}
  o.n=n;o.on=!o.ended&&!!(A&&A.on);if(!o.dmg)snap();
  o.ty=Object.keys(TY);return o})()`,c,{timeout:40000})}catch(e){return{status:'error',note:'simulación: '+String(e.message||e).slice(0,200)}}
 const ty=new Set(out.ty),sm=new Map();for(const d of out.dmg)sm.set(key(d[0],d[1],d[2]),d[3]);
 /* resultado según la fórmula del servidor, sobre la aldea real del defensor */
 const real=Array.isArray(job.claim&&job.claim.base)?job.claim.base.map(x=>Array.isArray(x)?{t:x[0],x:x[1],y:x[2]}:x):null;
 const rb=real||R.b.map(a=>({t:a[0],x:a[1],y:a[2]}));
 const tot=rb.filter(b=>!NOHIT.has(b.t)).length;let dead=0,hall=false;const seen=new Set();
 for(const b of rb){if(NOHIT.has(b.t))continue;const k=key(b.t,b.x,b.y);if(seen.has(k))continue;seen.add(k);if((sm.get(k)||0)>=100){dead++;if(b.t=='hall')hall=true}}
 const spct=tot>0?Math.min(1,dead/tot):0,sstars=(spct>=.5?1:0)+(hall?1:0)+(spct>=1?1:0),sp=Math.round(spct*100);
 if(job.stars>sstars)hard.push({k:'stars',claim:job.stars,sim:sstars});
 if(job.pct>sp+1)hard.push({k:'pct',claim:job.pct,sim:sp});
 const cd=job.claim&&Array.isArray(job.claim.dmg)?job.claim.dmg:null;
 if(cd){const bad=[];for(const m of cd){if(!Array.isArray(m)||m[0]=='wall')continue;const sf=sm.get(key(m[0],m[1],m[2]))||0;if(Number(m[3])>sf+2)bad.push([m[0],m[1],m[2],Number(m[3]),sf])}if(bad.length)hard.push({k:'dmg',n:bad.length,ex:bad.slice(0,5)})}
 if(real){const A1=new Set(real.filter(b=>ty.has(b.t)).map(b=>key(b.t,b.x,b.y))),B1=new Set(R.b.filter(a=>ty.has(a[0])).map(a=>key(a[0],a[1],a[2])));let d=0;const ex=[];for(const k of A1)if(!B1.has(k)){d++;if(ex.length<4)ex.push('-'+k)}for(const k of B1)if(!A1.has(k)){d++;if(ex.length<4)ex.push('+'+k)}
  if(d>5)hard.push({k:'base',n:d,ex});else if(d>0)soft.push({k:'base',n:d,ex})}
 if(out.exp&&R.th){for(const k in R.th){const t=R.th[k],e=out.exp[k];if(!e||!t)continue;if(t[0]>e[0]*1.001+1)hard.push({k:'troop_hp',t:k,claim:t[0],max:e[0]});if(t[1]!=null&&e[1]!=null&&t[1]>e[1]*1.001+.01)hard.push({k:'troop_dmg',t:k,claim:t[1],max:e[1]})}}
 else if(!out.exp)soft.push({k:'sin_nivel',why:out.expErr||'sin partida del atacante'});
 const tl={};for(const e of R.ev)if(e[1]=='s')tl[e[2]]=(tl[e[2]]||0)+(+e[3]||1);
 for(const k in tl)if(tl[k]>(R.army[k]||0))hard.push({k:'army',t:k,used:tl[k],had:R.army[k]||0});
 if(out.on)soft.push({k:'sin_fin',n:out.n});
 return{status:hard.length?'flag':'ok',flags:{hard,soft},sim:{stars:sstars,pct:sp,ticks:out.n,v:R.v},note:hard.length?hard.map(h=>h.k).join(','):null}}
module.exports={verifyJob};
