(() => {
"use strict";

const canvas=document.getElementById("game"), ctx=canvas.getContext("2d");
ctx.imageSmoothingEnabled=false;
let W=innerWidth,H=innerHeight,DPR=Math.min(devicePixelRatio||1,2);
function resize(){W=innerWidth;H=innerHeight;DPR=Math.min(devicePixelRatio||1,2);canvas.width=W*DPR;canvas.height=H*DPR;canvas.style.width=W+"px";canvas.style.height=H+"px";ctx.setTransform(DPR,0,0,DPR,0,0)}
addEventListener("resize",resize); resize();

const TILE=32, WORLD=140;
const rand=(a,b)=>Math.random()*(b-a)+a;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);

const items={
 wood:{name:"Madera",icon:"W",max:500},
 stone:{name:"Piedra",icon:"S",max:500},
 iron:{name:"Hierro",icon:"Fe",max:500},
 sulfur:{name:"Azufre",icon:"Su",max:500},
 scrap:{name:"Chatarra",icon:"Sc",max:500},
 fuel:{name:"Combustible",icon:"Fu",max:200},
 bone:{name:"Hueso",icon:"B",max:500},
 fat:{name:"Grasa",icon:"F",max:500},
 meat:{name:"Carne",icon:"M",max:100},
 rope:{name:"Fibra",icon:"R",max:200},
 bow:{name:"Arco",icon:"Ar",max:1},
 arrow:{name:"Flecha",icon:"→",max:100},
 pistol:{name:"Pistola",icon:"P",max:1},
 ammo:{name:"Munición",icon:"A",max:100},
 pickaxe:{name:"Pico",icon:"Pi",max:1},
 axe:{name:"Hacha",icon:"Ax",max:1},
 hammer:{name:"Martillo",icon:"Ha",max:1},
 c4:{name:"Carga",icon:"C4",max:20},
 chest:{name:"Cofre",icon:"Ch",max:10},
 bed:{name:"Cama",icon:"Ca",max:3},
 cupboard:{name:"Armario",icon:"AC",max:1}
};

const inv={wood:0,stone:0,iron:0,sulfur:0,scrap:0,fuel:0,bone:0,fat:0,meat:0,rope:0,bow:1,arrow:12,pistol:1,ammo:18,pickaxe:1,axe:1,hammer:1,c4:2,chest:1,bed:1,cupboard:1};
const recipes=[
 {id:"arrow",name:"Flechas x4",cost:{wood:2,stone:1},out:4},
 {id:"pickaxe",name:"Pico",cost:{wood:15,stone:30,rope:5},out:1},
 {id:"axe",name:"Hacha",cost:{wood:15,stone:20,rope:5},out:1},
 {id:"chest",name:"Cofre",cost:{wood:60,iron:10},out:1},
 {id:"bed",name:"Cama",cost:{wood:50,rope:15},out:1},
 {id:"c4",name:"Carga explosiva",cost:{sulfur:80,iron:20,fuel:10},out:1},
 {id:"ammo",name:"Munición x6",cost:{iron:12,sulfur:4},out:6}
];

const world={trees:[],rocks:[],ores:[],animals:[],buildings:[],drops:[]};
function blocked(x,y){return x<40||y<40||x>WORLD*TILE-40||y>WORLD*TILE-40}
for(let i=0;i<650;i++){
 let x=rand(48,WORLD*TILE-48),y=rand(48,WORLD*TILE-48);
 const r=Math.random();
 if(r<.50)world.trees.push({x,y,hp:3});
 else if(r<.82)world.rocks.push({x,y,hp:3});
 else world.ores.push({x,y,hp:4});
}
for(let i=0;i<45;i++){
 let x=rand(80,WORLD*TILE-80),y=rand(80,WORLD*TILE-80);
 world.animals.push({x,y,hp:40,max:40,vx:rand(-.4,.4),vy:rand(-.4,.4),type:Math.random()<.72?"deer":"boar",wander:rand(30,150)});
}

const player={x:WORLD*TILE/2,y:WORLD*TILE/2,r:11,speed:2.7,hp:100,food:100,water:100,dirX:1,dirY:0,weapon:"bow",selected:0,attackCd:0};
let cam={x:player.x,y:player.y};
let buildMode=false, selectedBuild="wall", panel=null;
const keys={};
addEventListener("keydown",e=>{keys[e.key.toLowerCase()]=true;if(e.key==="1")player.weapon="bow";if(e.key==="2")player.weapon="pistol";if(e.key==="b")toggleBuild();if(e.key==="e")interact();if(e.key==="i")openInventory();if(e.key==="c")openCraft()});
addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false);

const touch={x:0,y:0,active:false};
const joy=document.getElementById("joystick"),stick=document.getElementById("stick");
function joyMove(e){
 const r=joy.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
 let x=e.clientX-cx,y=e.clientY-cy,m=Math.hypot(x,y),max=43;if(m>max){x=x/m*max;y=y/m*max}
 touch.x=x/max;touch.y=y/max;touch.active=true;stick.style.transform=`translate(${x}px,${y}px)`;
}
joy.addEventListener("pointerdown",e=>{joy.setPointerCapture(e.pointerId);joyMove(e)});
joy.addEventListener("pointermove",e=>{if(touch.active)joyMove(e)});
joy.addEventListener("pointerup",()=>{touch.x=touch.y=0;touch.active=false;stick.style.transform="translate(0,0)"});
document.getElementById("attackBtn").onclick=attack;
document.getElementById("interactBtn").onclick=interact;
document.getElementById("inventoryBtn").onclick=openInventory;
document.getElementById("craftBtn").onclick=openCraft;
document.getElementById("buildBtn").onclick=toggleBuild;
document.getElementById("closePanel").onclick=()=>document.getElementById("panel").classList.add("hidden");

function addItem(id,n){inv[id]=clamp((inv[id]||0)+n,0,items[id]?.max??9999);updateHotbar()}
function can(cost){return Object.entries(cost).every(([k,v])=>(inv[k]||0)>=v)}
function pay(cost){for(const [k,v] of Object.entries(cost))inv[k]-=v}

function openPanel(title,html){document.getElementById("panelTitle").textContent=title;document.getElementById("panelBody").innerHTML=html;document.getElementById("panel").classList.remove("hidden")}
function openInventory(){
 let html='<div class="grid">';
 for(const [id,n] of Object.entries(inv)) if(n>0) html+=`<div class="item"><strong>${items[id]?.name||id}</strong><small>${items[id]?.icon||"?"} · Cantidad: ${n}</small></div>`;
 html+='</div>';openPanel("Inventario",html);
}
function openCraft(){
 let html='<div class="grid">';
 recipes.forEach((r,i)=>{let c=Object.entries(r.cost).map(([k,v])=>`${items[k].name} ${v}`).join(" · ");html+=`<div class="item"><strong>${r.name}</strong><small>${c}</small><button data-craft="${i}">FABRICAR</button></div>`});
 html+='</div>';openPanel("Fabricación",html);
 document.querySelectorAll("[data-craft]").forEach(b=>b.onclick=()=>{let r=recipes[+b.dataset.craft];if(can(r.cost)){pay(r.cost);addItem(r.id,r.out);showHint("Objeto fabricado");openCraft()}else showHint("Faltan materiales")});
}
function toggleBuild(){buildMode=!buildMode;if(buildMode)showHint("Construcción: pulsa sobre el mundo para colocar");else showHint("Construcción desactivada")}
function updateHotbar(){
 const ids=["pickaxe","axe","bow","pistol","c4","chest","bed"];
 document.getElementById("hotbar").innerHTML=ids.map((id,i)=>`<button class="slot ${player.selected===i?"selected":""}" data-slot="${i}"><div class="icon">${items[id].icon}</div><div class="name">${items[id].name}</div><div class="count">${inv[id]||0}</div></button>`).join("");
 document.querySelectorAll("[data-slot]").forEach(b=>b.onclick=()=>{player.selected=+b.dataset.slot;const id=ids[player.selected];player.weapon=id;updateHotbar()});
}
updateHotbar();

function showHint(t){const h=document.getElementById("hint");h.textContent=t;h.classList.add("hintShow");clearTimeout(showHint.t);showHint.t=setTimeout(()=>h.classList.remove("hintShow"),1500)}

function nearest(list,max=48){let best=null,bd=max;for(const o of list){const d=Math.hypot(o.x-player.x,o.y-player.y);if(d<bd){bd=d;best=o}}return best}
function interact(){
 if(buildMode){placeBuild();return}
 let t=nearest(world.trees),r=nearest(world.rocks),o=nearest(world.ores),a=nearest(world.animals,50),best=[t,r,o,a].filter(Boolean).sort((x,y)=>dist(player,x)-dist(player,y))[0];
 if(!best){showHint("No hay nada cerca");return}
 if(best===t){best.hp--;addItem("wood",12+Math.floor(Math.random()*9));if(best.hp<=0){world.trees.splice(world.trees.indexOf(best),1);showHint("+ madera")}}
 else if(best===r){best.hp--;addItem("stone",8+Math.floor(Math.random()*8));if(best.hp<=0)world.rocks.splice(world.rocks.indexOf(best),1)}
 else if(best===o){best.hp--;addItem("iron",5+Math.floor(Math.random()*6));if(best.hp<=0)world.ores.splice(world.ores.indexOf(best),1)}
 else if(a){a.hp-=18;if(a.hp<=0){const idx=world.animals.indexOf(a);world.animals.splice(idx,1);addItem("meat",3);addItem("bone",2);addItem("fat",1);showHint("Animal abatido")}}
}
function attack(){
 if(player.attackCd>0)return;
 player.attackCd=18;
 const target=nearest(world.animals,90);
 if(target){
   target.hp-=player.weapon==="pistol"?30:20;
   if(target.hp<=0){world.animals.splice(world.animals.indexOf(target),1);addItem("meat",3);addItem("bone",2);addItem("fat",1)}
 }
}
function placeBuild(){
 const gx=Math.round((player.x+player.dirX*48)/32)*32,gy=Math.round((player.y+player.dirY*48)/32)*32;
 if(dist(player,{x:gx,y:gy})>80)return;
 const type=selectedBuild;
 const cost=type==="wall"?{wood:20}:{wood:30};
 if(!can(cost)){showHint("Faltan materiales");return}
 if(world.buildings.some(b=>Math.abs(b.x-gx)<28&&Math.abs(b.y-gy)<28)){showHint("Espacio ocupado");return}
 pay(cost);world.buildings.push({x:gx,y:gy,type,hp:type==="wall"?100:150,max: type==="wall"?100:150});showHint("Construcción colocada");
}
canvas.addEventListener("pointerdown",e=>{
 if(buildMode){
   const p=screenToWorld(e.clientX,e.clientY);
   const gx=Math.round(p.x/32)*32,gy=Math.round(p.y/32)*32;
   if(dist(player,{x:gx,y:gy})<110) placeBuildAt(gx,gy);
 }
});
function placeBuildAt(gx,gy){if(!can({wood:20})){showHint("Faltan madera");return}if(world.buildings.some(b=>Math.abs(b.x-gx)<28&&Math.abs(b.y-gy)<28)){showHint("Espacio ocupado");return}pay({wood:20});world.buildings.push({x:gx,y:gy,type:"wall",hp:100,max:100})}

function screenToWorld(sx,sy){return{x:sx-W/2+cam.x,y:sy-H/2+cam.y}}

function update(){
 let dx=(keys["d"]?1:0)-(keys["a"]?1:0),dy=(keys["s"]?1:0)-(keys["w"]?1:0);
 if(touch.active){dx=touch.x;dy=touch.y}
 const m=Math.hypot(dx,dy);if(m){dx/=m;dy/=m;player.dirX=dx;player.dirY=dy;player.x+=dx*player.speed;player.y+=dy*player.speed}
 player.x=clamp(player.x,30,WORLD*TILE-30);player.y=clamp(player.y,30,WORLD*TILE-30);
 player.attackCd=Math.max(0,player.attackCd-1);
 player.food=clamp(player.food-.003,0,100);player.water=clamp(player.water-.005,0,100);
 if(player.food===0||player.water===0)player.hp=clamp(player.hp-.01,0,100);
 for(const a of world.animals){
   a.wander--;
   if(a.wander<=0){a.vx=rand(-.6,.6);a.vy=rand(-.6,.6);a.wander=rand(60,180)}
   const d=Math.hypot(a.x-player.x,a.y-player.y);
   if(a.type==="boar"&&d<110){a.vx=(player.x-a.x)/Math.max(d,1)*.9;a.vy=(player.y-a.y)/Math.max(d,1)*.9}
   if(a.type==="boar"&&d<24){player.hp-=.04}
   a.x+=a.vx;a.y+=a.vy;
 }
 cam.x+=(player.x-cam.x)*.12;cam.y+=(player.y-cam.y)*.12;
 document.getElementById("hp").textContent=Math.round(player.hp);
 document.getElementById("food").textContent=Math.round(player.food);
 document.getElementById("water").textContent=Math.round(player.water);
}

function draw(){
 ctx.clearRect(0,0,W,H);
 ctx.save();ctx.translate(W/2-cam.x,H/2-cam.y);
 const minX=Math.floor((cam.x-W/2)/TILE)-2,maxX=Math.ceil((cam.x+W/2)/TILE)+2;
 const minY=Math.floor((cam.y-H/2)/TILE)-2,maxY=Math.ceil((cam.y+H/2)/TILE)+2;
 for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){
   const n=(x*928371+y*364583)%17;ctx.fillStyle=n<2?"#294331":n<5?"#2d4934":"#2a4531";ctx.fillRect(x*TILE,y*TILE,TILE,TILE);
 }
 for(const t of world.trees)drawTree(t);for(const r of world.rocks)drawRock(r);for(const o of world.ores)drawOre(o);
 for(const b of world.buildings)drawBuilding(b);for(const a of world.animals)drawAnimal(a);drawPlayer();
 if(buildMode){const p={x:Math.round((player.x+player.dirX*48)/32)*32,y:Math.round((player.y+player.dirY*48)/32)*32};ctx.fillStyle="#d5c17a66";ctx.fillRect(p.x-15,p.y-15,30,30)}
 ctx.restore();
}
function drawTree(t){ctx.fillStyle="#182b1c";ctx.fillRect(t.x-4,t.y-2,8,18);ctx.fillStyle="#315b35";ctx.fillRect(t.x-16,t.y-20,32,27);ctx.fillStyle="#3d7041";ctx.fillRect(t.x-10,t.y-26,20,10);ctx.fillStyle="#4a8047";ctx.fillRect(t.x-7,t.y-21,14,13)}
function drawRock(r){ctx.fillStyle="#59645f";ctx.fillRect(r.x-15,r.y-9,30,18);ctx.fillStyle="#79847e";ctx.fillRect(r.x-9,r.y-13,18,8);ctx.fillStyle="#3f4945";ctx.fillRect(r.x-11,r.y+4,20,5)}
function drawOre(o){ctx.fillStyle="#555d59";ctx.fillRect(o.x-15,o.y-10,30,20);ctx.fillStyle="#9b8154";ctx.fillRect(o.x-7,o.y-7,6,5);ctx.fillRect(o.x+4,o.y+1,6,5)}
function drawBuilding(b){ctx.fillStyle="#171c1a";ctx.fillRect(b.x-16,b.y-16,32,32);ctx.fillStyle=b.hp<40?"#9a4035":"#78583b";ctx.fillRect(b.x-14,b.y-14,28,28);ctx.fillStyle="#a47a50";ctx.fillRect(b.x-12,b.y-4,24,5);ctx.fillStyle="#4b3929";ctx.fillRect(b.x-3,b.y+5,6,7)}
function drawAnimal(a){ctx.fillStyle=a.type==="boar"?"#55433b":"#765d43";ctx.fillRect(a.x-10,a.y-6,20,12);ctx.fillRect(a.x+7,a.y-9,7,8);ctx.fillStyle="#171717";ctx.fillRect(a.x+10,a.y-7,2,2)}
function drawPlayer(){ctx.fillStyle="#0b1110";ctx.fillRect(player.x-10,player.y-10,20,20);ctx.fillStyle="#b9c5bc";ctx.fillRect(player.x-7,player.y-8,14,15);ctx.fillStyle="#384d43";ctx.fillRect(player.x-5,player.y-2,10,9);ctx.fillStyle="#d5c17a";ctx.fillRect(player.x+player.dirX*8-2,player.y+player.dirY*8-2,4,4)}

let last=performance.now();
function loop(now){const dt=Math.min(40,now-last);last=now;update();draw();requestAnimationFrame(loop)}
requestAnimationFrame(loop);
})();