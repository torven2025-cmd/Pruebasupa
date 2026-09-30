(() => {
"use strict";

/* =========================================================
   FRONTIER ASHES
   Survival 2D - Construction / Base / Raiding
========================================================= */

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

let W = innerWidth;
let H = innerHeight;
let DPR = Math.min(devicePixelRatio || 1, 2);

function resize() {
    W = innerWidth;
    H = innerHeight;

    DPR = Math.min(devicePixelRatio || 1, 2);

    canvas.width = W * DPR;
    canvas.height = H * DPR;

    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

addEventListener("resize", resize);
resize();


/* =========================================================
   WORLD
========================================================= */

const TILE = 32;
const WORLD_SIZE = 140;

const world = {
    trees: [],
    rocks: [],
    ores: [],
    animals: [],
    buildings: [],
    drops: [],
    projectiles: [],
    explosions: []
};


/* =========================================================
   UTILIDADES
========================================================= */

const rand = (a, b) => Math.random() * (b - a) + a;

const clamp = (v, min, max) =>
    Math.max(min, Math.min(max, v));

function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}


/* =========================================================
   ITEMS
========================================================= */

const items = {

    wood: {
        name: "Madera",
        icon: "W",
        max: 500
    },

    stone: {
        name: "Piedra",
        icon: "S",
        max: 500
    },

    iron: {
        name: "Hierro",
        icon: "Fe",
        max: 500
    },

    sulfur: {
        name: "Azufre",
        icon: "Su",
        max: 500
    },

    scrap: {
        name: "Chatarra",
        icon: "Sc",
        max: 500
    },

    fuel: {
        name: "Combustible",
        icon: "Fu",
        max: 200
    },

    bone: {
        name: "Hueso",
        icon: "B",
        max: 500
    },

    fat: {
        name: "Grasa",
        icon: "F",
        max: 500
    },

    meat: {
        name: "Carne",
        icon: "M",
        max: 100
    },

    rope: {
        name: "Fibra",
        icon: "R",
        max: 200
    },

    bow: {
        name: "Arco",
        icon: "AR",
        max: 1
    },

    arrow: {
        name: "Flecha",
        icon: "→",
        max: 100
    },

    pistol: {
        name: "Pistola",
        icon: "P",
        max: 1
    },

    ammo: {
        name: "Munición",
        icon: "A",
        max: 100
    },

    pickaxe: {
        name: "Pico",
        icon: "PI",
        max: 1
    },

    axe: {
        name: "Hacha",
        icon: "AX",
        max: 1
    },

    hammer: {
        name: "Martillo",
        icon: "HA",
        max: 1
    },

    c4: {
        name: "Carga",
        icon: "C4",
        max: 20
    },

    chest: {
        name: "Cofre",
        icon: "CH",
        max: 10
    },

    bed: {
        name: "Cama",
        icon: "CA",
        max: 3
    },

    cupboard: {
        name: "Armario",
        icon: "AC",
        max: 1
    }
};


/* =========================================================
   INVENTARIO INICIAL
========================================================= */

const inventory = {

    wood: 180,
    stone: 100,
    iron: 40,
    sulfur: 80,

    scrap: 0,
    fuel: 20,

    bone: 0,
    fat: 0,
    meat: 5,
    rope: 20,

    bow: 1,
    arrow: 20,

    pistol: 1,
    ammo: 18,

    pickaxe: 1,
    axe: 1,
    hammer: 1,

    c4: 2,

    chest: 1,
    bed: 1,
    cupboard: 1
};


/* =========================================================
   RECETAS
========================================================= */

const recipes = [

    {
        id: "arrow",
        name: "Flechas x4",
        cost: {
            wood: 2,
            stone: 1
        },
        output: 4
    },

    {
        id: "pickaxe",
        name: "Pico",
        cost: {
            wood: 15,
            stone: 30,
            rope: 5
        },
        output: 1
    },

    {
        id: "axe",
        name: "Hacha",
        cost: {
            wood: 15,
            stone: 20,
            rope: 5
        },
        output: 1
    },

    {
        id: "chest",
        name: "Cofre",
        cost: {
            wood: 60,
            iron: 10
        },
        output: 1
    },

    {
        id: "bed",
        name: "Cama",
        cost: {
            wood: 50,
            rope: 15
        },
        output: 1
    },

    {
        id: "c4",
        name: "Carga explosiva",
        cost: {
            sulfur: 80,
            iron: 20,
            fuel: 10
        },
        output: 1
    },

    {
        id: "ammo",
        name: "Munición x6",
        cost: {
            iron: 12,
            sulfur: 4
        },
        output: 6
    }

];


/* =========================================================
   TIPOS DE CONSTRUCCIÓN
========================================================= */

const buildTypes = {

    foundation: {

        name: "Fundación",

        cost: {
            wood: 30,
            stone: 10
        },

        hp: 180,

        color: "#76583d"

    },

    wall: {

        name: "Pared",

        cost: {
            wood: 20
        },

        hp: 120,

        color: "#805d3e"

    },

    door: {

        name: "Puerta",

        cost: {
            wood: 35
        },

        hp: 150,

        color: "#65452f"

    },

    chest: {

        name: "Cofre",

        cost: {
            wood: 60,
            iron: 10
        },

        hp: 80,

        color: "#6b492e"

    },

    bed: {

        name: "Cama",

        cost: {
            wood: 50,
            rope: 15
        },

        hp: 70,

        color: "#66584d"

    },

    cupboard: {

        name: "Armario",

        cost: {
            wood: 100,
            stone: 50,
            iron: 25
        },

        hp: 300,

        color: "#4b5350"

    }

};


/* =========================================================
   JUGADOR
========================================================= */

const player = {

    x: WORLD_SIZE * TILE / 2,
    y: WORLD_SIZE * TILE / 2,

    radius: 11,

    speed: 2.7,

    hp: 100,

    food: 100,

    water: 100,

    dirX: 1,
    dirY: 0,

    weapon: "bow",

    selectedSlot: 0,

    attackCooldown: 0,

    spawnX: WORLD_SIZE * TILE / 2,
    spawnY: WORLD_SIZE * TILE / 2
};


/* =========================================================
   CÁMARA
========================================================= */

const camera = {

    x: player.x,
    y: player.y

};


/* =========================================================
   CONTROLES
========================================================= */

const keys = {};

addEventListener("keydown", e => {

    keys[e.key.toLowerCase()] = true;

    if (e.key === "1") selectSlot(0);
    if (e.key === "2") selectSlot(1);
    if (e.key === "3") selectSlot(2);
    if (e.key === "4") selectSlot(3);
    if (e.key === "5") selectSlot(4);
    if (e.key === "6") selectSlot(5);
    if (e.key === "7") selectSlot(6);

    if (e.key.toLowerCase() === "b") toggleBuildMode();

    if (e.key.toLowerCase() === "e") interact();

    if (e.key.toLowerCase() === "i") openInventory();

    if (e.key.toLowerCase() === "c") openCraft();

});

addEventListener("keyup", e => {

    keys[e.key.toLowerCase()] = false;

});


/* =========================================================
   JOYSTICK
========================================================= */

const joystick = document.getElementById("joystick");
const stick = document.getElementById("stick");

const touch = {

    x: 0,
    y: 0,
    active: false

};


function moveJoystick(e) {

    const rect = joystick.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let x = e.clientX - centerX;
    let y = e.clientY - centerY;

    const max = 43;

    const magnitude = Math.hypot(x, y);

    if (magnitude > max) {

        x = x / magnitude * max;
        y = y / magnitude * max;

    }

    touch.x = x / max;
    touch.y = y / max;

    touch.active = true;

    stick.style.transform =
        `translate(${x}px, ${y}px)`;

}


joystick.addEventListener("pointerdown", e => {

    joystick.setPointerCapture(e.pointerId);

    moveJoystick(e);

});


joystick.addEventListener("pointermove", e => {

    if (touch.active) {

        moveJoystick(e);

    }

});


joystick.addEventListener("pointerup", () => {

    touch.x = 0;
    touch.y = 0;

    touch.active = false;

    stick.style.transform = "translate(0,0)";

});


/* =========================================================
   BOTONES
========================================================= */

document.getElementById("attackBtn").onclick = attack;

document.getElementById("interactBtn").onclick = interact;

document.getElementById("inventoryBtn").onclick = openInventory;

document.getElementById("craftBtn").onclick = openCraft;

document.getElementById("buildBtn").onclick = toggleBuildMode;

document.getElementById("closePanel").onclick = () => {

    document
        .getElementById("panel")
        .classList.add("hidden");

};


/* =========================================================
   INVENTARIO
========================================================= */

function addItem(id, amount) {

    if (!inventory[id]) {

        inventory[id] = 0;

    }

    inventory[id] += amount;

    if (items[id] && items[id].max) {

        inventory[id] =
            Math.min(
                inventory[id],
                items[id].max
            );

    }

    updateHotbar();

}


function canAfford(cost) {

    for (const [id, amount] of Object.entries(cost)) {

        if ((inventory[id] || 0) < amount) {

            return false;

        }

    }

    return true;

}


function payCost(cost) {

    for (const [id, amount] of Object.entries(cost)) {

        inventory[id] -= amount;

    }

}


/* =========================================================
   HOTBAR
========================================================= */

const hotbarItems = [

    "pickaxe",
    "axe",
    "bow",
    "pistol",
    "c4",
    "chest",
    "bed"

];


function updateHotbar() {

    const hotbar =
        document.getElementById("hotbar");

    hotbar.innerHTML = "";

    hotbarItems.forEach((id, index) => {

        const button =
            document.createElement("button");

        button.className =
            "slot " +
            (player.selectedSlot === index
                ? "selected"
                : "");

        button.innerHTML = `

            <div class="icon">
                ${items[id].icon}
            </div>

            <div class="name">
                ${items[id].name}
            </div>

            <div class="count">
                ${inventory[id] || 0}
            </div>

        `;

        button.onclick = () => {

            selectSlot(index);

        };

        hotbar.appendChild(button);

    });

}


function selectSlot(index) {

    player.selectedSlot = index;

    const id =
        hotbarItems[index];

    player.weapon = id;

    updateHotbar();

}


updateHotbar();


/* =========================================================
   PANEL
========================================================= */

function openPanel(title, html) {

    document.getElementById("panelTitle")
        .textContent = title;

    document.getElementById("panelBody")
        .innerHTML = html;

    document.getElementById("panel")
        .classList.remove("hidden");

}


/* =========================================================
   INVENTARIO
========================================================= */

function openInventory() {

    let html = `
        <div class="grid">
    `;

    for (const [id, amount] of Object.entries(inventory)) {

        if (amount <= 0) continue;

        html += `

            <div class="item">

                <strong>
                    ${items[id]?.name || id}
                </strong>

                <small>
                    ${items[id]?.icon || "?"}
                    · Cantidad: ${amount}
                </small>

            </div>

        `;

    }

    html += "</div>";

    openPanel("Inventario", html);

}


/* =========================================================
   CRAFTING
========================================================= */

function openCraft() {

    let html = `
        <div class="grid">
    `;

    recipes.forEach((recipe, index) => {

        const costText =
            Object.entries(recipe.cost)
                .map(([id, amount]) =>
                    `${items[id].name} ${amount}`
                )
                .join(" · ");

        html += `

            <div class="item">

                <strong>
                    ${recipe.name}
                </strong>

                <small>
                    ${costText}
                </small>

                <button data-craft="${index}">
                    FABRICAR
                </button>

            </div>

        `;

    });

    html += "</div>";

    openPanel("Fabricación", html);


    document
        .querySelectorAll("[data-craft]")
        .forEach(button => {

            button.onclick = () => {

                const recipe =
                    recipes[
                        Number(button.dataset.craft)
                    ];

                if (!canAfford(recipe.cost)) {

                    showHint(
                        "Faltan materiales"
                    );

                    return;

                }

                payCost(recipe.cost);

                addItem(
                    recipe.id,
                    recipe.output
                );

                showHint(
                    "Objeto fabricado"
                );

                openCraft();

            };

        });

}


/* =========================================================
   CONSTRUCCIÓN
========================================================= */

let buildMode = false;

let selectedBuild = "foundation";


function toggleBuildMode() {

    buildMode = !buildMode;

    if (buildMode) {

        showHint(
            "Modo construcción activado"
        );

        showBuildMenu();

    } else {

        showHint(
            "Modo construcción desactivado"
        );

    }

}


function showBuildMenu() {

    const html = `

        <div class="grid">

            <div class="item">

                <strong>Fundación</strong>

                <small>
                    Madera 30 · Piedra 10
                </small>

                <button onclick="selectBuild('foundation')">
                    SELECCIONAR
                </button>

            </div>


            <div class="item">

                <strong>Pared</strong>

                <small>
                    Madera 20
                </small>

                <button onclick="selectBuild('wall')">
                    SELECCIONAR
                </button>

            </div>


            <div class="item">

                <strong>Puerta</strong>

                <small>
                    Madera 35
                </small>

                <button onclick="selectBuild('door')">
                    SELECCIONAR
                </button>

            </div>


            <div class="item">

                <strong>Cofre</strong>

                <small>
                    Madera 60 · Hierro 10
                </small>

                <button onclick="selectBuild('chest')">
                    SELECCIONAR
                </button>

            </div>


            <div class="item">

                <strong>Cama</strong>

                <small>
                    Madera 50 · Fibra 15
                </small>

                <button onclick="selectBuild('bed')">
                    SELECCIONAR
                </button>

            </div>


            <div class="item">

                <strong>Armario de Control</strong>

                <small>
                    Madera 100 · Piedra 50 · Hierro 25
                </small>

                <button onclick="selectBuild('cupboard')">
                    SELECCIONAR
                </button>

            </div>

        </div>

    `;

    openPanel(
        "Construcción",
        html
    );

}


window.selectBuild = function(type) {

    selectedBuild = type;

    document
        .getElementById("panel")
        .classList.add("hidden");

    buildMode = true;

    showHint(
        "Haz clic donde quieras colocar " +
        buildTypes[type].name
    );

};


/* =========================================================
   MOUSE / TÁCTIL SOBRE EL MUNDO
========================================================= */

canvas.addEventListener(
    "pointerdown",
    e => {

        if (!buildMode) return;

        const worldPosition =
            screenToWorld(
                e.clientX,
                e.clientY
            );

        placeBuilding(
            worldPosition.x,
            worldPosition.y
        );

    }
);


/* =========================================================
   POSICIÓN DEL MUNDO
========================================================= */

function screenToWorld(screenX, screenY) {

    return {

        x:
            screenX -
            W / 2 +
            camera.x,

        y:
            screenY -
            H / 2 +
            camera.y

    };

}


/* =========================================================
   COLOCAR CONSTRUCCIÓN
========================================================= */

function placeBuilding(x, y) {

    const type =
        buildTypes[selectedBuild];

    const gridX =
        Math.round(x / TILE) * TILE;

    const gridY =
        Math.round(y / TILE) * TILE;


    if (
        distance(
            player,
            {
                x: gridX,
                y: gridY
            }
        ) > 150
    ) {

        showHint(
            "Estás demasiado lejos"
        );

        return;

    }


    if (!canAfford(type.cost)) {

        showHint(
            "Faltan materiales"
        );

        return;

    }


    const occupied =
        world.buildings.some(
            building => {

                return (
                    Math.abs(
                        building.x - gridX
                    ) < 28
                    &&
                    Math.abs(
                        building.y - gridY
                    ) < 28
                );

            }
        );


    if (occupied) {

        showHint(
            "Ese espacio está ocupado"
        );

        return;

    }


    payCost(type.cost);


    const building = {

        id:
            crypto.randomUUID
            ? crypto.randomUUID()
            : String(Date.now() + Math.random()),

        x: gridX,

        y: gridY,

        type: selectedBuild,

        hp: type.hp,

        maxHp: type.hp,

        owner: "player",

        locked: false,

        open: false

    };


    world.buildings.push(
        building
    );


    if (selectedBuild === "cupboard") {

        showHint(
            "Armario de Control colocado"
        );

    } else {

        showHint(
            type.name +
            " colocado"
        );

    }

}


/* =========================================================
   INTERACCIÓN
========================================================= */

function interact() {

    if (buildMode) {

        showBuildMenu();

        return;

    }


    const tree =
        nearest(
            world.trees,
            50
        );

    const rock =
        nearest(
            world.rocks,
            50
        );

    const ore =
        nearest(
            world.ores,
            50
        );

    const animal =
        nearest(
            world.animals,
            50
        );

    const building =
        nearest(
            world.buildings,
            55
        );


    const candidates = [

        tree,
        rock,
        ore,
        animal,
        building

    ].filter(Boolean);


    if (!candidates.length) {

        showHint(
            "No hay nada cerca"
        );

        return;

    }


    candidates.sort(
        (a, b) =>
            distance(player, a) -
            distance(player, b)
    );


    const target =
        candidates[0];


    if (
        target.type &&
        buildTypes[target.type]
    ) {

        interactBuilding(
            target
        );

        return;

    }


    if (target === tree) {

        target.hp--;

        addItem(
            "wood",
            12 +
            Math.floor(
                Math.random() * 9
            )
        );

        if (target.hp <= 0) {

            world.trees.splice(
                world.trees.indexOf(target),
                1
            );

        }

        showHint(
            "+ madera"
        );

        return;

    }


    if (target === rock) {

        target.hp--;

        addItem(
            "stone",
            8 +
            Math.floor(
                Math.random() * 8
            )
        );

        if (target.hp <= 0) {

            world.rocks.splice(
                world.rocks.indexOf(target),
                1
            );

        }

        showHint(
            "+ piedra"
        );

        return;

    }


    if (target === ore) {

        target.hp--;

        addItem(
            "iron",
            5 +
            Math.floor(
                Math.random() * 6
            )
        );

        if (target.hp <= 0) {

            world.ores.splice(
                world.ores.indexOf(target),
                1
            );

        }

        showHint(
            "+ hierro"
        );

        return;

    }


    if (target === animal) {

        damageAnimal(
            target,
            18
        );

    }

}


/* =========================================================
   INTERACTUAR CON ESTRUCTURAS
========================================================= */

function interactBuilding(building) {

    if (building.type === "chest") {

        openChest(building);

        return;

    }


    if (building.type === "bed") {

        player.spawnX =
            building.x;

        player.spawnY =
            building.y;

        showHint(
            "Punto de respawn establecido"
        );

        return;

    }


    if (building.type === "cupboard") {

        openCupboard(building);

        return;

    }


    if (building.type === "door") {

        building.open =
            !building.open;

        showHint(
            building.open
                ? "Puerta abierta"
                : "Puerta cerrada"
        );

    }

}


/* =========================================================
   COFRE
========================================================= */

function openChest(chest) {

    if (!chest.storage) {

        chest.storage = {

            wood: 0,
            stone: 0,
            iron: 0,
            sulfur: 0,
            scrap: 0,
            fuel: 0,
            meat: 0,
            bone: 0,
            fat: 0

        };

    }


    let html = `

        <div class="grid">

    `;


    Object.entries(
        chest.storage
    ).forEach(
        ([id, amount]) => {

            html += `

                <div class="item">

                    <strong>
                        ${items[id].name}
                    </strong>

                    <small>
                        Guardado: ${amount}
                    </small>

                    <button
                        onclick="takeFromChest(
                            '${chest.id}',
                            '${id}'
                        )">

                        SACAR 10

                    </button>

                </div>

            `;

        }
    );


    html += `
        </div>

        <hr>

        <button
            onclick="storeBasicResources(
                '${chest.id}'
            )">

            GUARDAR RECURSOS

        </button>
    `;


    openPanel(
        "Cofre",
        html
    );

}


window.takeFromChest =
function(chestId, itemId) {

    const chest =
        world.buildings.find(
            b => b.id === chestId
        );

    if (!chest) return;

    if (
        (chest.storage[itemId] || 0)
        <= 0
    ) {

        showHint(
            "El cofre está vacío"
        );

        return;

    }

    const amount =
        Math.min(
            10,
            chest.storage[itemId]
        );

    chest.storage[itemId]
        -= amount;

    addItem(
        itemId,
        amount
    );

    openChest(chest);

};


window.storeBasicResources =
function(chestId) {

    const chest =
        world.buildings.find(
            b => b.id === chestId
        );

    if (!chest) return;


    const resources = [

        "wood",
        "stone",
        "iron",
        "sulfur",
        "scrap",
        "fuel",
        "meat",
        "bone",
        "fat"

    ];


    resources.forEach(
        id => {

            if (
                inventory[id] > 0
            ) {

                chest.storage[id]
                    += inventory[id];

                inventory[id] = 0;

            }

        }
    );


    updateHotbar();

    openChest(chest);

    showHint(
        "Recursos guardados"
    );

};


/* =========================================================
   ARMARIO DE CONTROL
========================================================= */

function openCupboard(cupboard) {

    if (!cupboard.storage) {

        cupboard.storage = {

            wood: 0,
            stone: 0,
            iron: 0

        };

    }


    openPanel(

        "Armario de Control",

        `

        <div class="item">

            <strong>
                Núcleo de la base
            </strong>

            <small>
                Esta estructura protege
                el territorio de la base.
            </small>

            <p>
                Madera:
                ${cupboard.storage.wood}
            </p>

            <p>
                Piedra:
                ${cupboard.storage.stone}
            </p>

            <p>
                Hierro:
                ${cupboard.storage.iron}
            </p>

            <button
                onclick="depositUpkeep(
                    '${cupboard.id}'
                )">

                DEPOSITAR MATERIALES

            </button>

        </div>

        `

    );

}


window.depositUpkeep =
function(id) {

    const cupboard =
        world.buildings.find(
            b => b.id === id
        );

    if (!cupboard) return;


    if (!cupboard.storage) {

        cupboard.storage = {
            wood: 0,
            stone: 0,
            iron: 0
        };

    }


    const wood =
        Math.min(
            inventory.wood,
            50
        );

    const stone =
        Math.min(
            inventory.stone,
            25
        );

    const iron =
        Math.min(
            inventory.iron,
            10
        );


    inventory.wood -= wood;
    inventory.stone -= stone;
    inventory.iron -= iron;


    cupboard.storage.wood += wood;
    cupboard.storage.stone += stone;
    cupboard.storage.iron += iron;


    updateHotbar();

    openCupboard(cupboard);

};


/* =========================================================
   ANIMALES
========================================================= */

function damageAnimal(animal, damage) {

    animal.hp -= damage;

    if (animal.hp <= 0) {

        const index =
            world.animals.indexOf(
                animal
            );

        if (index !== -1) {

            world.animals.splice(
                index,
                1
            );

        }

        addItem("meat", 3);
        addItem("bone", 2);
        addItem("fat", 1);

        showHint(
            "Animal abatido"
        );

    }

}


/* =========================================================
   ATAQUE
========================================================= */

function attack() {

    if (
        player.attackCooldown > 0
    ) return;


    player.attackCooldown = 20;


    if (
        player.weapon === "c4"
    ) {

        useExplosive();

        return;

    }


    const animal =
        nearest(
            world.animals,
            90
        );


    if (animal) {

        const damage =
            player.weapon === "pistol"
                ? 30
                : 20;

        damageAnimal(
            animal,
            damage
        );

    }

}


/* =========================================================
   C4 / RAIDEO
========================================================= */

function useExplosive() {

    if (
        (inventory.c4 || 0) <= 0
    ) {

        showHint(
            "No tienes cargas"
        );

        return;

    }


    const building =
        nearest(
            world.buildings,
            85
        );


    if (!building) {

        showHint(
            "No hay una estructura cerca"
        );

        return;

    }


    inventory.c4--;

    updateHotbar();


    showHint(
        "Carga colocada"
    );


    setTimeout(() => {

        explodeBuilding(
            building
        );

    }, 1200);

}


function explodeBuilding(building) {

    if (
        !world.buildings.includes(
            building
        )
    ) return;


    const damage = 100;


    building.hp -= damage;


    world.explosions.push({

        x: building.x,
        y: building.y,

        life: 30,
        maxLife: 30

    });


    if (
        building.hp <= 0
    ) {

        const index =
            world.buildings.indexOf(
                building
            );

        if (index !== -1) {

            world.buildings.splice(
                index,
                1
            );

        }

        showHint(
            "Estructura destruida"
        );

    } else {

        showHint(
            "La estructura recibió daño"
        );

    }

}


/* =========================================================
   BUSCAR OBJETO CERCANO
========================================================= */

function nearest(list, maxDistance) {

    let closest = null;

    let closestDistance =
        maxDistance;


    for (const object of list) {

        const d =
            distance(
                player,
                object
            );

        if (
            d < closestDistance
        ) {

            closestDistance = d;

            closest = object;

        }

    }


    return closest;

}


/* =========================================================
   MENSAJES
========================================================= */

function showHint(text) {

    const hint =
        document.getElementById("hint");

    hint.textContent = text;

    hint.classList.add(
        "hintShow"
    );


    clearTimeout(
        showHint.timeout
    );


    showHint.timeout =
        setTimeout(() => {

            hint.classList.remove(
                "hintShow"
            );

        }, 1800);

}


/* =========================================================
   GENERAR RECURSOS
========================================================= */

for (let i = 0; i < 650; i++) {

    const x =
        rand(
            48,
            WORLD_SIZE * TILE - 48
        );

    const y =
        rand(
            48,
            WORLD_SIZE * TILE - 48
        );


    const type =
        Math.random();


    if (type < 0.50) {

        world.trees.push({

            x,
            y,

            hp: 3

        });

    }

    else if (type < 0.82) {

        world.rocks.push({

            x,
            y,

            hp: 3

        });

    }

    else {

        world.ores.push({

            x,
            y,

            hp: 4

        });

    }

}


/* =========================================================
   GENERAR ANIMALES
========================================================= */

for (let i = 0; i < 45; i++) {

    world.animals.push({

        x:
            rand(
                80,
                WORLD_SIZE * TILE - 80
            ),

        y:
            rand(
                80,
                WORLD_SIZE * TILE - 80
            ),

        hp: 40,

        maxHp: 40,

        vx: rand(-0.4, 0.4),

        vy: rand(-0.4, 0.4),

        wander:
            rand(30, 150),

        type:
            Math.random() < 0.72
                ? "deer"
                : "boar"

    });

}


/* =========================================================
   ACTUALIZACIÓN
========================================================= */

function update() {

    let dx =
        (keys["d"] ? 1 : 0) -
        (keys["a"] ? 1 : 0);

    let dy =
        (keys["s"] ? 1 : 0) -
        (keys["w"] ? 1 : 0);


    if (touch.active) {

        dx = touch.x;
        dy = touch.y;

    }


    const magnitude =
        Math.hypot(dx, dy);


    if (magnitude > 0) {

        dx /= magnitude;
        dy /= magnitude;


        player.dirX = dx;
        player.dirY = dy;


        player.x +=
            dx * player.speed;

        player.y +=
            dy * player.speed;

    }


    player.x =
        clamp(
            player.x,
            30,
            WORLD_SIZE * TILE - 30
        );


    player.y =
        clamp(
            player.y,
            30,
            WORLD_SIZE * TILE - 30
        );


    player.attackCooldown =
        Math.max(
            0,
            player.attackCooldown - 1
        );


    player.food =
        clamp(
            player.food - 0.003,
            0,
            100
        );


    player.water =
        clamp(
            player.water - 0.005,
            0,
            100
        );


    if (
        player.food === 0 ||
        player.water === 0
    ) {

        player.hp =
            clamp(
                player.hp - 0.01,
                0,
                100
            );

    }


    /* ANIMALES */

    for (const animal of world.animals) {

        animal.wander--;


        if (
            animal.wander <= 0
        ) {

            animal.vx =
                rand(-0.6, 0.6);

            animal.vy =
                rand(-0.6, 0.6);

            animal.wander =
                rand(60, 180);

        }


        const d =
            distance(
                animal,
                player
            );


        if (
            animal.type === "boar" &&
            d < 110
        ) {

            animal.vx =
                (player.x - animal.x) /
                Math.max(d, 1) *
                0.9;

            animal.vy =
                (player.y - animal.y) /
                Math.max(d, 1) *
                0.9;

        }


        if (
            animal.type === "boar" &&
            d < 24
        ) {

            player.hp -= 0.04;

        }


        animal.x += animal.vx;
        animal.y += animal.vy;

    }


    /* EXPLOSIONES */

    for (
        let i = world.explosions.length - 1;
        i >= 0;
        i--
    ) {

        const explosion =
            world.explosions[i];

        explosion.life--;

        if (
            explosion.life <= 0
        ) {

            world.explosions.splice(
                i,
                1
            );

        }

    }


    /* CÁMARA */

    camera.x +=
        (player.x - camera.x) *
        0.12;


    camera.y +=
        (player.y - camera.y) *
        0.12;


    /* HUD */

    document.getElementById("hp")
        .textContent =
        Math.round(player.hp);


    document.getElementById("food")
        .textContent =
        Math.round(player.food);


    document.getElementById("water")
        .textContent =
        Math.round(player.water);

}


/* =========================================================
   DIBUJO DEL MUNDO
========================================================= */

function draw() {

    ctx.clearRect(
        0,
        0,
        W,
        H
    );


    ctx.save();


    ctx.translate(
        W / 2 - camera.x,
        H / 2 - camera.y
    );


    const minX =
        Math.floor(
            (camera.x - W / 2) / TILE
        ) - 2;


    const maxX =
        Math.ceil(
            (camera.x + W / 2) / TILE
        ) + 2;


    const minY =
        Math.floor(
            (camera.y - H / 2) / TILE
        ) - 2;


    const maxY =
        Math.ceil(
            (camera.y + H / 2) / TILE
        ) + 2;


    /* TERRENO */

    for (
        let y = minY;
        y <= maxY;
        y++
    ) {

        for (
            let x = minX;
            x <= maxX;
            x++
        ) {

            const noise =
                Math.abs(
                    (
                        x * 928371 +
                        y * 364583
                    ) % 17
                );


            ctx.fillStyle =
                noise < 2
                    ? "#294331"
                    : noise < 5
                    ? "#2d4934"
                    : "#2a4531";


            ctx.fillRect(
                x * TILE,
                y * TILE,
                TILE,
                TILE
            );

        }

    }


    /* RECURSOS */

    for (
        const tree of world.trees
    ) {

        drawTree(tree);

    }


    for (
        const rock of world.rocks
    ) {

        drawRock(rock);

    }


    for (
        const ore of world.ores
    ) {

        drawOre(ore);

    }


    /* CONSTRUCCIONES */

    for (
        const building of world.buildings
    ) {

        drawBuilding(
            building
        );

    }


    /* ANIMALES */

    for (
        const animal of world.animals
    ) {

        drawAnimal(
            animal
        );

    }


    /* JUGADOR */

    drawPlayer();


    /* PREVISUALIZACIÓN */

    if (buildMode) {

        drawBuildPreview();

    }


    /* EXPLOSIONES */

    for (
        const explosion of world.explosions
    ) {

        drawExplosion(
            explosion
        );

    }


    ctx.restore();

}


/* =========================================================
   ÁRBOL
========================================================= */

function drawTree(tree) {

    ctx.fillStyle = "#182b1c";

    ctx.fillRect(
        tree.x - 4,
        tree.y - 2,
        8,
        18
    );


    ctx.fillStyle = "#315b35";

    ctx.fillRect(
        tree.x - 16,
        tree.y - 20,
        32,
        27
    );


    ctx.fillStyle = "#3d7041";

    ctx.fillRect(
        tree.x - 10,
        tree.y - 26,
        20,
        10
    );


    ctx.fillStyle = "#4a8047";

    ctx.fillRect(
        tree.x - 7,
        tree.y - 21,
        14,
        13
    );

}


/* =========================================================
   ROCA
========================================================= */

function drawRock(rock) {

    ctx.fillStyle = "#59645f";

    ctx.fillRect(
        rock.x - 15,
        rock.y - 9,
        30,
        18
    );


    ctx.fillStyle = "#79847e";

    ctx.fillRect(
        rock.x - 9,
        rock.y - 13,
        18,
        8
    );


    ctx.fillStyle = "#3f4945";

    ctx.fillRect(
        rock.x - 11,
        rock.y + 4,
        20,
        5
    );

}


/* =========================================================
   MINERAL
========================================================= */

function drawOre(ore) {

    ctx.fillStyle = "#555d59";

    ctx.fillRect(
        ore.x - 15,
        ore.y - 10,
        30,
        20
    );


    ctx.fillStyle = "#9b8154";

    ctx.fillRect(
        ore.x - 7,
        ore.y - 7,
        6,
        5
    );


    ctx.fillRect(
        ore.x + 4,
        ore.y + 1,
        6,
        5
    );

}


/* =========================================================
   CONSTRUCCIÓN
========================================================= */

function drawBuilding(building) {

    const hpPercent =
        building.hp /
        building.maxHp;


    /* SOMBRA */

    ctx.fillStyle =
        "#00000055";

    ctx.fillRect(
        building.x - 18,
        building.y - 13,
        36,
        36
    );


    if (
        building.type === "foundation"
    ) {

        ctx.fillStyle =
            "#6d5139";

        ctx.fillRect(
            building.x - 16,
            building.y - 16,
            32,
            32
        );


        ctx.fillStyle =
            "#8d6a49";

        ctx.fillRect(
            building.x - 14,
            building.y - 14,
            28,
            5
        );


        ctx.fillStyle =
            "#59422f";

        ctx.fillRect(
            building.x - 12,
            building.y - 5,
            24,
            4
        );

    }


    else if (
        building.type === "wall"
    ) {

        ctx.fillStyle =
            "#7d5b3e";

        ctx.fillRect(
            building.x - 15,
            building.y - 16,
            30,
            32
        );


        ctx.fillStyle =
            "#9b754f";

        ctx.fillRect(
            building.x - 13,
            building.y - 13,
            26,
            5
        );


        ctx.fillStyle =
            "#5d432f";

        ctx.fillRect(
            building.x - 10,
            building.y,
            20,
            4
        );

    }


    else if (
        building.type === "door"
    ) {

        ctx.fillStyle =
            building.open
                ? "#4c392b"
                : "#6c4c32";

        ctx.fillRect(
            building.x - 12,
            building.y - 17,
            24,
            34
        );


        if (!building.open) {

            ctx.fillStyle =
                "#a17850";

            ctx.fillRect(
                building.x - 9,
                building.y - 12,
                18,
                3
            );

        }

    }


    else if (
        building.type === "chest"
    ) {

        ctx.fillStyle =
            "#6b492e";

        ctx.fillRect(
            building.x - 14,
            building.y - 10,
            28,
            20
        );


        ctx.fillStyle =
            "#a47445";

        ctx.fillRect(
            building.x - 12,
            building.y - 8,
            24,
            5
        );


        ctx.fillStyle =
            "#29251d";

        ctx.fillRect(
            building.x - 3,
            building.y - 2,
            6,
            6
        );

    }


    else if (
        building.type === "bed"
    ) {

        ctx.fillStyle =
            "#403e3a";

        ctx.fillRect(
            building.x - 17,
            building.y - 9,
            34,
            18
        );


        ctx.fillStyle =
            "#8b7968";

        ctx.fillRect(
            building.x - 12,
            building.y - 7,
            24,
            12
        );


        ctx.fillStyle =
            "#c0a98e";

        ctx.fillRect(
            building.x - 13,
            building.y - 7,
            9,
            7
        );

    }


    else if (
        building.type === "cupboard"
    ) {

        ctx.fillStyle =
            "#4b5350";

        ctx.fillRect(
            building.x - 13,
            building.y - 17,
            26,
            34
        );


        ctx.fillStyle =
            "#69736f";

        ctx.fillRect(
            building.x - 10,
            building.y - 13,
            20,
            4
        );


        ctx.fillStyle =
            "#2e3532";

        ctx.fillRect(
            building.x - 3,
            building.y - 2,
            6,
            8
        );

    }


    /* BARRA DE VIDA */

    if (
        hpPercent < 1
    ) {

        ctx.fillStyle =
            "#191b1a";

        ctx.fillRect(
            building.x - 16,
            building.y - 23,
            32,
            4
        );


        ctx.fillStyle =
            "#b54c42";

        ctx.fillRect(
            building.x - 16,
            building.y - 23,
            32 * hpPercent,
            4
        );

    }

}


/* =========================================================
   PREVISUALIZACIÓN
========================================================= */

function drawBuildPreview() {

    const x =
        Math.round(
            (
                player.x +
                player.dirX * 48
            ) / TILE
        ) * TILE;


    const y =
        Math.round(
            (
                player.y +
                player.dirY * 48
            ) / TILE
        ) * TILE;


    const type =
        buildTypes[selectedBuild];


    ctx.globalAlpha = 0.45;

    ctx.fillStyle =
        type.color;


    ctx.fillRect(
        x - 15,
        y - 15,
        30,
        30
    );


    ctx.globalAlpha = 1;


    ctx.strokeStyle =
        "#d5c17a";


    ctx.lineWidth = 2;


    ctx.strokeRect(
        x - 16,
        y - 16,
        32,
        32
    );

}


/* =========================================================
   ANIMAL
========================================================= */

function drawAnimal(animal) {

    ctx.fillStyle =
        animal.type === "boar"
            ? "#55433b"
            : "#765d43";


    ctx.fillRect(
        animal.x - 10,
        animal.y - 6,
        20,
        12
    );


    ctx.fillRect(
        animal.x + 7,
        animal.y - 9,
        7,
        8
    );


    ctx.fillStyle =
        "#171717";


    ctx.fillRect(
        animal.x + 10,
        animal.y - 7,
        2,
        2
    );


    if (
        animal.hp < animal.maxHp
    ) {

        ctx.fillStyle =
            "#171b18";

        ctx.fillRect(
            animal.x - 12,
            animal.y - 17,
            24,
            3
        );


        ctx.fillStyle =
            "#a64b42";

        ctx.fillRect(
            animal.x - 12,
            animal.y - 17,
            24 *
            (
                animal.hp /
                animal.maxHp
            ),
            3
        );

    }

}


/* =========================================================
   JUGADOR
========================================================= */

function drawPlayer() {

    ctx.fillStyle =
        "#0b1110";

    ctx.fillRect(
        player.x - 10,
        player.y - 10,
        20,
        20
    );


    ctx.fillStyle =
        "#b9c5bc";

    ctx.fillRect(
        player.x - 7,
        player.y - 8,
        14,
        15
    );


    ctx.fillStyle =
        "#384d43";

    ctx.fillRect(
        player.x - 5,
        player.y - 2,
        10,
        9
    );


    ctx.fillStyle =
        "#d5c17a";


    ctx.fillRect(

        player.x +
        player.dirX * 8 - 2,

        player.y +
        player.dirY * 8 - 2,

        4,
        4

    );

}


/* =========================================================
   EXPLOSIÓN
========================================================= */

function drawExplosion(explosion) {

    const progress =
        1 -
        explosion.life /
        explosion.maxLife;


    const radius =
        12 +
        progress * 42;


    ctx.globalAlpha =
        1 - progress;


    ctx.fillStyle =
        "#d28a42";


    ctx.beginPath();

    ctx.arc(
        explosion.x,
        explosion.y,
        radius,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.fillStyle =
        "#e2c06b";


    ctx.beginPath();

    ctx.arc(
        explosion.x,
        explosion.y,
        radius * 0.45,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.globalAlpha = 1;

}


/* =========================================================
   GAME LOOP
========================================================= */

let lastTime =
    performance.now();


function gameLoop(time) {

    const delta =
        Math.min(
            40,
            time - lastTime
        );


    lastTime = time;


    update(delta);

    draw();


    requestAnimationFrame(
        gameLoop
    );

}


requestAnimationFrame(
    gameLoop
);

})();
