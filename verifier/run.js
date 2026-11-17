/* Verificador de ataques. Uso: SUPABASE_URL=... SUPABASE_SERVICE_KEY=... node run.js [max] */
const {verifyJob}=require('./core');
const U=process.env.SUPABASE_URL,K=process.env.SUPABASE_SERVICE_KEY;
if(!U||!K){console.error('Faltan SUPABASE_URL / SUPABASE_SERVICE_KEY');process.exit(1)}
const rpc=async(fn,body)=>{const r=await fetch(U+'/rest/v1/rpc/'+fn,{method:'POST',headers:{apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json'},body:JSON.stringify(body)});const t=await r.text();if(!r.ok)throw new Error(fn+' '+r.status+' '+t.slice(0,200));return t?JSON.parse(t):null};
(async()=>{const max=+process.argv[2]||40;let done=0,t0=Date.now();
 while(done<max&&Date.now()-t0<9*60e3){const jobs=await rpc('vf_claim',{p_n:5});if(!jobs||!jobs.length)break;
  for(const j of jobs){let r;try{r=verifyJob(j)}catch(e){r={status:'error',note:String(e.message||e).slice(0,200)}}
   await rpc('vf_report',{p_raid:j.raid,p_status:r.status,p_sim:r.sim||null,p_flags:r.flags||null,p_note:r.note||null});done++;console.log('raid',j.raid,r.status,r.note||'')}}
 console.log('verificados',done)})().catch(e=>{console.error(e);process.exit(1)})
