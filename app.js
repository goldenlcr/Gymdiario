// ─── EXERCISE DATA con GIFs directos de ExerciseDB ──────────────────────────
// GIFs: wger.de (open source, no API key needed)
const EXERCISES = {
  "Press de pecho maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0025.gif",
    youtube: "xUm0BiZCWlQ",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0026.gif",
    muscles: "Pectoral mayor, triceps, deltoides anterior",
    tips: ["Espalda pegada al respaldo durante todo el movimiento","Codos a 70 grados del cuerpo, no en cruz","Empuja hasta casi extender pero sin bloquear","Baja lento en 2-3 segundos sintiendo el estiramiento","Expulsa el aire al empujar"]
  },
  "Press de hombro maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0033.gif",
    youtube: "Wqq43dKW1TU",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0740.gif",
    muscles: "Deltoides anterior y lateral, triceps",
    tips: ["Espalda recta contra el respaldo sin arquear la lumbar","Sube hasta casi extender los brazos","Baja hasta que los codos queden a 90 grados","No encoja los hombros al subir","Agarre ligeramente mas ancho que los hombros"]
  },
  "Press inclinado maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0176.gif",
    youtube: "kFNcBRwGzHM",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0177.gif",
    muscles: "Pectoral superior, deltoides anterior, triceps",
    tips: ["Ajusta el asiento para que las asas queden a nivel del pecho alto","Empuja hacia arriba y ligeramente hacia adelante","Activa mas la parte alta del pecho que el press plano","Manten los pies firmes en el suelo","Contrae el pecho al final del movimiento"]
  },
  "Pec deck (aperturas maquina)": {
    gif: "https://v2.exercisedb.io/image/gifs/0175.gif",
    youtube: "Z57CtFmRMxA",
    gifAlt: "https://v2.exercisedb.io/image/gifs/1629.gif",
    muscles: "Pectoral mayor (contraccion maxima)",
    tips: ["No abras mas de lo que sientas estiramiento comodo","Codos ligeramente flexionados durante todo el movimiento","Junta los brazos apretando el pecho 1 segundo","Baja lento resistiendo el peso de vuelta","No uses impulso con el torso"]
  },
  "Extension triceps polea cuerda": {
    gif: "https://v2.exercisedb.io/image/gifs/0045.gif",
    youtube: "vB-1Rlm5jZQ",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0046.gif",
    muscles: "Triceps (las 3 cabezas)",
    tips: ["Codos pegados a los costados, no se mueven","Solo se mueven los antebrazos hacia abajo","Separa la cuerda al final para mayor contraccion","Baja hasta extension completa","No uses el cuerpo para ayudarte"]
  },
  "Remo en maquina agarre ancho": {
    gif: "https://v2.exercisedb.io/image/gifs/0697.gif",
    youtube: "GZbfZ033f74",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0698.gif",
    muscles: "Dorsal ancho, romboides, trapecio medio",
    tips: ["Pecho apoyado en el pad en todo momento","Jala los codos hacia atras y hacia arriba","Aprieta los omoplatos 1 segundo en la contraccion","Baja lento controlando el peso","No uses impulso con el torso"]
  },
  "Jalon al pecho maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0014.gif",
    youtube: "CAwf7n6Tuhs",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0015.gif",
    muscles: "Dorsal ancho, biceps, redondo mayor",
    tips: ["Inclinate ligeramente hacia atras","Jala hacia la parte alta del pecho, no al cuello","Los codos bajan y van hacia atras","Sube lento sin que los hombros suban con el peso","Aprieta los dorsales al final"]
  },
  "Remo en polea baja agarre neutro": {
    gif: "https://v2.exercisedb.io/image/gifs/0698.gif",
    youtube: "xQNkFl20Re0",
    gifAlt: "https://v2.exercisedb.io/image/gifs/1359.gif",
    muscles: "Dorsal, romboides, biceps",
    tips: ["Espalda erguida durante todo el movimiento","Jala hacia el ombligo apretando omoplatos","No te eches hacia atras con el torso","El movimiento es solo de brazos y espalda","Extiende bien los brazos al frente antes de cada rep"]
  },
  "Curl de biceps maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0066.gif",
    youtube: "av7-8igSXTs",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0067.gif",
    muscles: "Biceps braquial, braquial",
    tips: ["Ajusta el asiento para que los codos apoyen bien en el pad","Sube hasta maxima contraccion del biceps","Baja lento en fase negativa (3 segundos)","No balancees el torso para ayudarte","La tension es constante gracias a la maquina"]
  },
  "Face pull en polea": {
    gif: "https://v2.exercisedb.io/image/gifs/0290.gif",
    youtube: "HSoHeSt5oAo",
    gifAlt: "https://v2.exercisedb.io/image/gifs/1272.gif",
    muscles: "Deltoides posterior, manguito rotador, trapecio",
    tips: ["Polea a la altura de los ojos o ligeramente superior","Jala hacia tu cara separando los codos hacia arriba","Los pulgares apuntan hacia atras al final","Fundamental para salud del hombro","No uses peso excesivo, prioriza la tecnica"]
  },
  "Prensa de piernas": {
    gif: "https://v2.exercisedb.io/image/gifs/0356.gif",
    youtube: "GvRgijoJ2xY",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0357.gif",
    muscles: "Cuadriceps, gluteos, isquiotibiales",
    tips: ["Pies al ancho de hombros a media altura del plato","Baja hasta 90 grados de rodilla sin despegar la lumbar","No bloquees las rodillas arriba del todo","Pies mas altos activan mas gluteo","Pies mas bajos activan mas cuadriceps"]
  },
  "Extension de cuadriceps maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0344.gif",
    youtube: "YyvSfVjQeL0",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0345.gif",
    muscles: "Cuadriceps (4 cabezas)",
    tips: ["Rodillo justo encima del tobillo, no en el pie","Extiende hasta casi bloquear la rodilla","Aprieta el cuadriceps 1 segundo arriba","Baja lento en 3 segundos","No uses impulso en la subida"]
  },
  "Curl femoral maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0362.gif",
    youtube: "Orxowest56U",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0363.gif",
    muscles: "Isquiotibiales, gemelos",
    tips: ["Caderas bien apoyadas en el pad","Jala hasta casi tocar los gluteos con el rodillo","Baja lento en 3 segundos (fase clave)","No levantes las caderas al jalar","Punta del pie neutra o hacia abajo para mas activacion"]
  },
  "Abductor maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/1389.gif",
    youtube: "qOzPBDUmDnM",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0388.gif",
    muscles: "Gluteo medio, gluteo menor, tensor fascia lata",
    tips: ["Espalda recta contra el respaldo","Separa las piernas hacia afuera de forma controlada","Baja lento resistiendo el peso","No uses impulso para abrir mas","Importante para estabilidad de rodilla y cadera"]
  },
  "Elevacion de talones maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/1372.gif",
    youtube: "gwLzBJYoWlA",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0375.gif",
    muscles: "Gastrocnemio, soleo",
    tips: ["Sube hasta la punta maxima posible del pie","Baja hasta sentir estiramiento completo del gemelo","Rango completo de movimiento es clave","Los gemelos necesitan muchas reps para crecer","Puedes variar la punta del pie para activar mas partes"]
  },
  "Crunch abdominal maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0563.gif",
    youtube: "2lZoL-K84OY",
    gifAlt: "https://v2.exercisedb.io/image/gifs/2627.gif",
    muscles: "Recto abdominal, oblicuos",
    tips: ["Contrae el abdomen, no solo bajes la cabeza","Lleva el torso hacia adelante en arco","Aprieta el abdomen 1 segundo en la contraccion","Sube lento resistiendo el peso","Elige un peso donde sientas el musculo, no las cervicales"]
  },
  "Elevaciones laterales maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0748.gif",
    youtube: "3VcKaXpzqRo",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0749.gif",
    muscles: "Deltoides lateral",
    tips: ["Codos apoyados en los pads y ligeramente flexionados","Sube hasta la altura del hombro, no mas","Baja lento en 3 segundos (aqui se gana el musculo)","No encoja los trapecios al subir","Mucho mejor control que con mancuernas para principiantes"]
  },
  "Fondos en maquina asistida": {
    gif: "https://v2.exercisedb.io/image/gifs/0236.gif",
    youtube: "dX8jgHRLQWA",
    gifAlt: "https://v2.exercisedb.io/image/gifs/1460.gif",
    muscles: "Triceps, pectoral inferior, deltoides anterior",
    tips: ["La maquina contrarresta parte de tu peso corporal","Torso recto activa mas el triceps","Torso inclinado activa mas el pecho","Baja hasta 90 grados de codo controlado","Empuja hasta casi extender sin bloquear"]
  },
  "Extension triceps maquina": {
    gif: "https://v2.exercisedb.io/image/gifs/0041.gif",
    youtube: "O-oLB8lEgx4",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0042.gif",
    muscles: "Triceps (cabeza larga principalmente)",
    tips: ["Codos apoyados en el pad a la altura correcta","Empuja hacia abajo hasta extension completa","Aprieta el triceps 1 segundo abajo","Sube lento resistiendo el peso","No muevas los codos durante el ejercicio"]
  },
  "Jalon agarre neutro (V-bar)": {
    gif: "https://v2.exercisedb.io/image/gifs/0013.gif",
    youtube: "1HDFBhj5PcM",
    gifAlt: "https://v2.exercisedb.io/image/gifs/1321.gif",
    muscles: "Dorsal ancho inferior, biceps, redondo mayor",
    tips: ["Agarre con palmas enfrentadas en la barra V","Jala hacia la parte alta del pecho","El agarre neutro reduce estres en los codos","Activa especialmente el dorsal inferior","Inclinate ligeramente hacia atras al jalar"]
  },
  "Remo en maquina unilateral": {
    gif: "https://v2.exercisedb.io/image/gifs/0700.gif",
    youtube: "pYcpY20QaE8",
    gifAlt: "https://v2.exercisedb.io/image/gifs/1327.gif",
    muscles: "Dorsal, romboides (unilateral)",
    tips: ["Un brazo a la vez para mayor concentracion muscular","Jala hacia la cadera del mismo lado","Ideal para corregir desequilibrios entre lados","Empieza siempre por el lado mas debil","No rotar el torso al jalar"]
  },
  "Pull-over en polea": {
    gif: "https://v2.exercisedb.io/image/gifs/0295.gif",
    youtube: "kr5EFTdGGOk",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0296.gif",
    muscles: "Dorsal ancho, serrato anterior",
    tips: ["De pie frente a la polea alta","Brazos casi rectos durante todo el movimiento","Jala en arco hacia los muslos","El movimiento viene del dorsal, no de los brazos","Core tenso para no arquear la espalda"]
  },
  "Curl martillo en polea cuerda": {
    gif: "https://v2.exercisedb.io/image/gifs/0073.gif",
    youtube: "zC3nLlEvin4",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0074.gif",
    muscles: "Braquial, braquiorradial, biceps",
    tips: ["Agarra la cuerda con manos en posicion neutra","Codos fijos a los costados","Sube hasta maxima contraccion","Da mas grosor al brazo que el curl normal","Tension constante gracias al cable"]
  },
  "Curl de biceps en polea baja": {
    gif: "https://v2.exercisedb.io/image/gifs/0072.gif",
    youtube: "NFzTWp2qpiE",
    gifAlt: "https://v2.exercisedb.io/image/gifs/0289.gif",
    muscles: "Biceps braquial",
    tips: ["La tension es constante en todo el recorrido","Codos fijos, solo se mueven los antebrazos","Sube hasta maxima contraccion y aprieta 1 segundo","Baja lento resistiendo el cable","Superior a mancuernas por la tension constante abajo"]
  }
};

// ─── ROUTINE ─────────────────────────────────────────────────────────────────
const ROUTINE = {
  "Lunes - Push A": [
    {name:"Press de pecho maquina",sets:4,reps:"6-8"},
    {name:"Press de hombro maquina",sets:4,reps:"6-8"},
    {name:"Press inclinado maquina",sets:3,reps:"10-12"},
    {name:"Pec deck (aperturas maquina)",sets:3,reps:"12-15"},
    {name:"Extension triceps polea cuerda",sets:3,reps:"10-12"},
  ],
  "Martes - Pull A": [
    {name:"Remo en maquina agarre ancho",sets:4,reps:"6-8"},
    {name:"Jalon al pecho maquina",sets:4,reps:"6-8"},
    {name:"Remo en polea baja agarre neutro",sets:3,reps:"10-12"},
    {name:"Curl de biceps maquina",sets:3,reps:"10-12"},
    {name:"Face pull en polea",sets:3,reps:"15"},
  ],
  "Miercoles - Legs": [
    {name:"Prensa de piernas",sets:4,reps:"8-10"},
    {name:"Extension de cuadriceps maquina",sets:3,reps:"12-15"},
    {name:"Curl femoral maquina",sets:3,reps:"10-12"},
    {name:"Abductor maquina",sets:3,reps:"12-15"},
    {name:"Elevacion de talones maquina",sets:4,reps:"15-20"},
    {name:"Crunch abdominal maquina",sets:3,reps:"12-15"},
  ],
  "Jueves - Push B": [
    {name:"Press inclinado maquina",sets:4,reps:"10-12"},
    {name:"Pec deck (aperturas maquina)",sets:3,reps:"12-15"},
    {name:"Elevaciones laterales maquina",sets:4,reps:"12-15"},
    {name:"Fondos en maquina asistida",sets:3,reps:"10-12"},
    {name:"Extension triceps maquina",sets:3,reps:"10-12"},
  ],
  "Viernes - Pull B": [
    {name:"Jalon agarre neutro (V-bar)",sets:4,reps:"10-12"},
    {name:"Remo en maquina unilateral",sets:3,reps:"10-12"},
    {name:"Pull-over en polea",sets:3,reps:"12-15"},
    {name:"Curl martillo en polea cuerda",sets:3,reps:"10-12"},
    {name:"Curl de biceps en polea baja",sets:3,reps:"12-15"},
  ],
};

const DAY_SCHEDULE={1:"Lunes - Push A",2:"Martes - Pull A",3:"Miercoles - Legs",4:"Jueves - Push B",5:"Viernes - Pull B"};
const DAY_COLORS={
  "Lunes - Push A":{accent:"#f97316",dim:"#1a0a02",glow:"#f9731630"},
  "Martes - Pull A":{accent:"#06b6d4",dim:"#021318",glow:"#06b6d430"},
  "Miercoles - Legs":{accent:"#a855f7",dim:"#120820",glow:"#a855f730"},
  "Jueves - Push B":{accent:"#f97316",dim:"#1a0a02",glow:"#f9731630"},
  "Viernes - Pull B":{accent:"#06b6d4",dim:"#021318",glow:"#06b6d430"},
};
const DAY_ICONS={"Lunes - Push A":"🔥","Martes - Pull A":"💪","Miercoles - Legs":"🦵","Jueves - Push B":"🔥","Viernes - Pull B":"💪"};
const REST_PRESETS=[60,90,120,180];
const SK="gymLog_v4",BK="gymBody_v2",NK="gymNotes_v2";

// ─── FIREBASE ─────────────────────────────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const FB_CONFIG = {
  apiKey: "AIzaSyB_-dNHtC0wKgW7_psN5Mw2jXzVVQjCs38",
  authDomain: "gymdiario-dc2f8.firebaseapp.com",
  projectId: "gymdiario-dc2f8",
  storageBucket: "gymdiario-dc2f8.firebasestorage.app",
  messagingSenderId: "552125069746",
  appId: "1:552125069746:web:910fd1405571ede765ccab"
};

const fbApp = initializeApp(FB_CONFIG);
const db = getFirestore(fbApp);
const USER_ID = "user_main"; // single user app

async function fbSave(collection_name, data) {
  try {
    await setDoc(doc(db, collection_name, USER_ID), data);
  } catch(e) { console.warn("Firebase save failed, using localStorage", e); }
}

async function fbLoad(collection_name, fallback) {
  try {
    const snap = await getDoc(doc(db, collection_name, USER_ID));
    if(snap.exists()) return snap.data().value ?? fallback;
  } catch(e) { console.warn("Firebase load failed, using localStorage", e); }
  return fallback;
}

// ─── STATE ────────────────────────────────────────────────────────────────────
let log=ls(SK,{}),bodyLog=ls(BK,{}),notes=ls(NK,{});
let cloudReady=false;

// Load from Firebase on start, merge with localStorage
async function initCloud() {
  try {
    const [cloudLog, cloudBody, cloudNotes] = await Promise.all([
      fbLoad("gymLog", {}),
      fbLoad("gymBody", {}),
      fbLoad("gymNotes", {})
    ]);
    // Merge: cloud wins for existing keys, local fills the rest
    log = {...log, ...cloudLog};
    bodyLog = {...bodyLog, ...cloudBody};
    notes = {...notes, ...cloudNotes};
    lsSet(SK, log); lsSet(BK, bodyLog); lsSet(NK, notes);
    cloudReady = true;
    renderTrain(); updateHeader();
    showCloudStatus("Sincronizado con la nube");
  } catch(e) {
    showCloudStatus("Modo offline");
  }
}

function showCloudStatus(msg) {
  const el = document.getElementById("cloud-status");
  if(el) { el.textContent = msg; el.style.opacity="1"; setTimeout(()=>el.style.opacity="0", 3000); }
}

async function saveAll() {
  lsSet(SK, log); lsSet(BK, bodyLog); lsSet(NK, notes);
  if(cloudReady) {
    await Promise.all([
      fbSave("gymLog", {value: log}),
      fbSave("gymBody", {value: bodyLog}),
      fbSave("gymNotes", {value: notes})
    ]);
    showCloudStatus("Guardado en la nube");
  }
}
let selDay=DAY_SCHEDULE[new Date().getDay()]||"Lunes - Push A";
let curView="train",doneSets={},demoOpen={},chartOpen={};
let sessionStart=Date.now();
let restTimer=null,restLeft=null,restTotal=90,restRunning=false;
let deferredInstall=null;

function ls(k,fb){try{return JSON.parse(localStorage.getItem(k)||"null")??fb;}catch{return fb;}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch{}}
function today(){return new Date().toISOString().split("T")[0];}
function sKey(){return `${today()}_${selDay}`;}
function calc1RM(w,r){if(!w||!r)return 0;return Math.round(w*(1+r/30));}
function fmt(s){return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;}

// ─── GIF LOADER ───────────────────────────────────────────────────────────────
// Uses Exercisedb (no key needed for basic search via wger)
// Falls back to SVG illustration
// Direct URL GIF loader with fallback chain

async function loadExerciseGif(exName, imgEl, svgWrap) {
  const ex = EXERCISES[exName];
  if(!ex) { showSVG(svgWrap); return; }
  const urls = [ex.gif, ex.gifAlt].filter(Boolean);
  function tryNext(idx) {
    if(idx >= urls.length) { showSVG(svgWrap); return; }
    imgEl.onload = () => { imgEl.classList.remove("hidden"); svgWrap.style.display="none"; };
    imgEl.onerror = () => tryNext(idx+1);
    imgEl.src = urls[idx];
  }
  tryNext(0);
}

function showSVG(wrap) {
  wrap.style.display = "flex";
  if(!wrap.innerHTML.trim()) {
    wrap.innerHTML = makeSVGDemo(wrap.dataset.ex || "");
  }
}

// ─── SVG EXERCISE ILLUSTRATIONS ───────────────────────────────────────────────
function makeSVGDemo(exName) {
  const templates = {
    chest: svgChestPress(),
    shoulder: svgShoulderPress(),
    back: svgRowBack(),
    leg: svgLegPress(),
    bicep: svgBicepCurl(),
    tricep: svgTricepPush(),
    calf: svgCalfRaise(),
    ab: svgCrunch(),
  };
  const n = exName.toLowerCase();
  if(n.includes("pecho")||n.includes("pec deck")||n.includes("inclinado")||n.includes("fondos")) return templates.chest;
  if(n.includes("hombro")||n.includes("lateral")||n.includes("face pull")) return templates.shoulder;
  if(n.includes("remo")||n.includes("jalon")||n.includes("pull-over")||n.includes("curl")) return n.includes("curl")?templates.bicep:templates.back;
  if(n.includes("extension triceps")||n.includes("triceps maquina")||n.includes("tricep")) return templates.tricep;
  if(n.includes("prensa")||n.includes("cuadriceps")||n.includes("femoral")||n.includes("abductor")) return templates.leg;
  if(n.includes("talon")) return templates.calf;
  if(n.includes("crunch")||n.includes("abdominal")) return templates.ab;
  return templates.chest;
}

const svgStyle = `<style>
  .fig{fill:#2a2a2a;stroke:#444;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
  .acc{fill:none;stroke-width:2.5;stroke-linecap:round}
  .mach{fill:#1a1a1a;stroke:#333;stroke-width:1.5}
  .arr{marker-end:url(#arw)}
  @keyframes press{0%,100%{transform:translateX(0)}50%{transform:translateX(18px)}}
  @keyframes pull{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}
  @keyframes up{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
  @keyframes down{0%,100%{transform:translateY(0)}50%{transform:translateY(12px)}}
  @keyframes curl{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-50deg)}}
  @keyframes push{0%,100%{transform:translateY(0)}50%{transform:translateY(14px)}}
</style>
<defs><marker id="arw" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
  <path d="M0,0 L6,3 L0,6 Z" fill="#555"/>
</marker></defs>`;

function svgChestPress(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Bench -->
<rect class="mach" x="30" y="90" width="140" height="14" rx="4"/>
<rect class="mach" x="50" y="104" width="10" height="30" rx="2"/>
<rect class="mach" x="140" y="104" width="10" height="30" rx="2"/>
<!-- Machine frame -->
<rect class="mach" x="10" y="30" width="8" height="80" rx="2"/>
<rect class="mach" x="182" y="30" width="8" height="80" rx="2"/>
<!-- Person lying -->
<ellipse class="fig" cx="100" cy="86" rx="12" ry="12"/>
<rect class="fig" x="60" y="86" width="80" height="20" rx="6"/>
<!-- Arms animated -->
<g style="animation:press 2s ease-in-out infinite;transform-origin:100px 86px">
  <line class="fig" x1="75" y1="90" x2="22" y2="65" stroke-width="6"/>
  <line class="fig" x1="125" y1="90" x2="178" y2="65" stroke-width="6"/>
  <circle class="fig" cx="22" cy="65" r="5"/>
  <circle class="fig" cx="178" cy="65" r="5"/>
</g>
<text x="100" y="148" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">PRESS DE PECHO</text>
</svg>`;}

function svgShoulderPress(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Seat -->
<rect class="mach" x="80" y="100" width="40" height="10" rx="3"/>
<rect class="mach" x="85" y="110" width="8" height="35" rx="2"/>
<rect class="mach" x="107" y="110" width="8" height="35" rx="2"/>
<rect class="mach" x="65" y="40" width="8" height="70" rx="2"/>
<rect class="mach" x="127" y="40" width="8" height="70" rx="2"/>
<!-- Body -->
<ellipse class="fig" cx="100" cy="68" rx="11" ry="11"/>
<rect class="fig" x="78" y="78" width="44" height="30" rx="5"/>
<!-- Arms going up -->
<g style="animation:up 2s ease-in-out infinite;transform-origin:100px 85px">
  <line class="fig" x1="82" y1="85" x2="68" y2="55" stroke-width="6"/>
  <line class="fig" x1="118" y1="85" x2="132" y2="55" stroke-width="6"/>
  <rect class="fig" x="58" y="48" width="20" height="8" rx="3"/>
  <rect class="fig" x="122" y="48" width="20" height="8" rx="3"/>
</g>
<text x="100" y="150" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">PRESS HOMBRO</text>
</svg>`;}

function svgRowBack(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Cable machine -->
<rect class="mach" x="10" y="10" width="14" height="130" rx="3"/>
<circle class="mach" cx="17" cy="20" r="8"/>
<!-- Bench/seat -->
<rect class="mach" x="80" y="95" width="90" height="10" rx="3"/>
<rect class="mach" x="90" y="105" width="8" height="30" rx="2"/>
<rect class="mach" x="150" y="105" width="8" height="30" rx="2"/>
<!-- Person seated -->
<ellipse class="fig" cx="140" cy="80" rx="12" ry="12"/>
<rect class="fig" x="118" y="88" width="44" height="24" rx="5"/>
<!-- Arms pulling -->
<g style="animation:pull 2s ease-in-out infinite;transform-origin:130px 92px">
  <line class="fig" x1="120" y1="92" x2="35" y2="80" stroke-width="5"/>
  <line class="fig" x1="120" y1="96" x2="35" y2="84" stroke-width="5"/>
  <circle class="fig" cx="35" cy="82" r="6"/>
</g>
<text x="100" y="148" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">REMO / JALON</text>
</svg>`;}

function svgLegPress(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Machine frame -->
<rect class="mach" x="10" y="20" width="12" height="120" rx="3"/>
<rect class="mach" x="10" y="20" width="140" height="12" rx="3"/>
<!-- Seat -->
<rect class="mach" x="110" y="80" width="60" height="12" rx="3"/>
<rect class="mach" x="125" y="92" width="10" height="45" rx="2"/>
<!-- Footplate -->
<rect class="mach" x="22" y="50" width="50" height="40" rx="4"/>
<!-- Person -->
<ellipse class="fig" cx="155" cy="72" rx="14" ry="14"/>
<rect class="fig" x="125" y="84" width="44" height="14" rx="5"/>
<!-- Legs animated -->
<g style="animation:press 2s ease-in-out infinite;transform-origin:130px 90px">
  <line class="fig" x1="130" y1="90" x2="75" y2="70" stroke-width="7"/>
  <line class="fig" x1="130" y1="95" x2="75" y2="85" stroke-width="7"/>
  <circle class="fig" cx="75" cy="77" r="8"/>
</g>
<text x="100" y="150" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">PRENSA / PIERNA</text>
</svg>`;}

function svgBicepCurl(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Machine pad -->
<rect class="mach" x="70" y="85" width="60" height="10" rx="3"/>
<rect class="mach" x="75" y="95" width="10" height="45" rx="2"/>
<!-- Body -->
<ellipse class="fig" cx="100" cy="55" rx="14" ry="14"/>
<rect class="fig" x="78" y="67" width="44" height="30" rx="5"/>
<!-- Arm curling animated -->
<g style="animation:curl 2s ease-in-out infinite;transform-origin:100px 88px">
  <line class="fig" x1="88" y1="88" x2="72" y2="120" stroke-width="7"/>
  <line class="fig" x1="112" y1="88" x2="128" y2="120" stroke-width="7"/>
  <rect class="fig" x="60" y="118" width="30" height="8" rx="3"/>
  <rect class="fig" x="110" y="118" width="30" height="8" rx="3"/>
</g>
<text x="100" y="150" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">CURL BICEPS</text>
</svg>`;}

function svgTricepPush(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Cable machine top -->
<rect class="mach" x="85" y="5" width="30" height="12" rx="3"/>
<rect class="mach" x="97" y="17" width="6" height="30" rx="2"/>
<!-- Body standing -->
<ellipse class="fig" cx="100" cy="52" rx="13" ry="13"/>
<rect class="fig" x="80" y="63" width="40" height="40" rx="5"/>
<line class="fig" x1="80" y1="115" x2="75" y2="145" stroke-width="6"/>
<line class="fig" x1="120" y1="115" x2="125" y2="145" stroke-width="6"/>
<!-- Arms pushing down animated -->
<g style="animation:push 2s ease-in-out infinite;transform-origin:100px 70px">
  <line class="fig" x1="83" y1="70" x2="70" y2="110" stroke-width="6"/>
  <line class="fig" x1="117" y1="70" x2="130" y2="110" stroke-width="6"/>
  <line class="fig" x1="70" y1="110" x2="130" y2="110" stroke-width="5"/>
</g>
<text x="100" y="155" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">TRICEPS POLEA</text>
</svg>`;}

function svgCalfRaise(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Machine shoulder pad -->
<rect class="mach" x="60" y="55" width="80" height="12" rx="4"/>
<rect class="mach" x="70" y="45" width="8" height="15" rx="2"/>
<rect class="mach" x="122" y="45" width="8" height="15" rx="2"/>
<rect class="mach" x="60" y="38" width="80" height="10" rx="3"/>
<!-- Calf platform -->
<rect class="mach" x="70" y="140" width="60" height="8" rx="2"/>
<!-- Body animated (rising on toes) -->
<g style="animation:up 2s ease-in-out infinite;transform-origin:100px 100px">
  <ellipse class="fig" cx="100" cy="35" rx="13" ry="13"/>
  <rect class="fig" x="80" y="47" width="40" height="50" rx="5"/>
  <line class="fig" x1="85" y1="97" x2="80" y2="130" stroke-width="7"/>
  <line class="fig" x1="115" y1="97" x2="120" y2="130" stroke-width="7"/>
  <ellipse class="fig" cx="80" cy="136" rx="12" ry="6"/>
  <ellipse class="fig" cx="120" cy="136" rx="12" ry="6"/>
</g>
<text x="100" y="155" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">ELEVACION TALON</text>
</svg>`;}

function svgCrunch(){return `<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">${svgStyle}
<!-- Machine seat/back -->
<rect class="mach" x="60" y="70" width="80" height="60" rx="6"/>
<rect class="mach" x="75" y="125" width="15" height="20" rx="2"/>
<rect class="mach" x="110" y="125" width="15" height="20" rx="2"/>
<!-- Pad overhead -->
<rect class="mach" x="55" y="28" width="90" height="14" rx="4"/>
<!-- Person crunching animated -->
<g style="animation:down 2s ease-in-out infinite;transform-origin:100px 80px">
  <ellipse class="fig" cx="100" cy="60" rx="13" ry="13"/>
  <rect class="fig" x="82" y="71" width="36" height="30" rx="5"/>
</g>
<text x="100" y="152" text-anchor="middle" fill="#444" font-size="9" font-family="monospace">CRUNCH MAQUINA</text>
</svg>`;}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getPRs(){
  const p={};
  for(const key of Object.keys(log)){
    const dn=key.split("_").slice(1).join("_");
    const el=ROUTINE[dn]||[];
    for(const [ei,ed] of Object.entries(log[key])){
      const ex=el[ei];if(!ex)continue;
      for(const s of Object.values(ed)){const w=parseFloat(s.weight);if(w&&(!p[ex.name]||w>p[ex.name]))p[ex.name]=w;}
    }
  }
  return p;
}
function getStreak(){
  const dates=[...new Set(Object.keys(log).map(k=>k.split("_")[0]))].sort().reverse();
  if(!dates.length)return 0;
  let streak=0,cur=new Date();cur.setHours(0,0,0,0);
  for(const d of dates){const dd=new Date(d);dd.setHours(0,0,0,0);if((cur-dd)/86400000>1)break;streak++;cur=dd;}
  return streak;
}
function getWeekVols(){
  const wv={};
  for(const key of Object.keys(log)){
    const date=key.split("_")[0];
    const d=new Date(date);d.setDate(d.getDate()-((d.getDay()+6)%7));
    const wk=d.toISOString().split("T")[0];
    let vol=0;
    for(const ed of Object.values(log[key]))for(const s of Object.values(ed))vol+=(parseFloat(s.weight)||0)*(parseFloat(s.reps)||0);
    wv[wk]=(wv[wk]||0)+vol;
  }
  return wv;
}
function getExProg(name){
  const pts=[];
  for(const key of Object.keys(log).sort()){
    const date=key.split("_")[0],dn=key.split("_").slice(1).join("_");
    const el=ROUTINE[dn]||[];const ei=el.findIndex(e=>e.name===name);if(ei===-1)continue;
    const ed=log[key][ei];if(!ed)continue;
    const ws=Object.values(ed).map(s=>parseFloat(s.weight)).filter(Boolean);
    if(ws.length)pts.push({date,max:Math.max(...ws)});
  }
  return pts;
}
function getTodayWk(){const d=new Date();d.setDate(d.getDate()-((d.getDay()+6)%7));return d.toISOString().split("T")[0];}
function makeChart(data,color,h=55){
  if(data.length<2)return`<div style="height:${h}px;display:flex;align-items:center;justify-content:center;color:#2a2a2a;font-size:10px">Pocas sesiones aun</div>`;
  const vals=data.map(d=>d.max||0);
  const mn=Math.min(...vals),mx=Math.max(...vals),range=mx-mn||1;
  const W=300,H=h;
  const pts=vals.map((v,i)=>`${(i/(vals.length-1))*W},${H-((v-mn)/range)*(H-14)-7}`).join(" ");
  const area=`0,${H} `+vals.map((v,i)=>`${(i/(vals.length-1))*W},${H-((v-mn)/range)*(H-14)-7}`).join(" ")+` ${W},${H}`;
  const gid="g"+Math.random().toString(36).slice(2,8);
  const circles=vals.map((v,i)=>{const x=(i/(vals.length-1))*W,y=H-((v-mn)/range)*(H-14)-7;return`<circle cx="${x}" cy="${y}" r="3.5" fill="${color}" stroke="#090909" stroke-width="1.5"/>`;}).join("");
  return`<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:${h}px;overflow:visible"><defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.25"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs><polygon points="${area}" fill="url(#${gid})"/><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>${circles}<text x="2" y="${H}" font-size="9" fill="#444">${mn}kg</text><text x="${W-2}" y="10" font-size="9" fill="#444" text-anchor="end">${mx}kg</text></svg>`;
}

// ─── RENDER TRAIN ─────────────────────────────────────────────────────────────
function renderTrain(){
  const C=DAY_COLORS[selDay];
  const exs=ROUTINE[selDay];
  const curSess=log[sKey()]||{};
  const prs=getPRs();
  const todayDay=DAY_SCHEDULE[new Date().getDay()];

  const dayBtns=Object.keys(ROUTINE).map(day=>{
    const c=DAY_COLORS[day],sel=selDay===day;
    const todayBadge=todayDay===day?`<span style="font-size:8px;color:${c.accent};border:1px solid ${c.accent}44;padding:2px 6px;border-radius:10px;margin-left:auto">HOY</span>`:"";
    return`<button class="day-btn" data-day="${day}" style="background:${sel?c.dim:"#0e0e0e"};border-color:${sel?c.accent:"#1a1a1a"};box-shadow:${sel?`0 0 14px ${c.glow}`:"none"}">
      <span style="font-size:15px">${DAY_ICONS[day]}</span>
      <div style="flex:1"><div class="day-name-big" style="color:${sel?c.accent:"#444"}">${day.split(" - ")[0]}</div><div class="day-sub" style="color:${sel?"#999":"#2a2a2a"}">${day.split(" - ")[1]}</div></div>
      ${todayBadge}
    </button>`;
  }).join("");

  const restHTML=`<div class="card" style="padding:14px;margin-bottom:12px">
    <div class="sec-lbl" style="margin-bottom:10px">TEMPORIZADOR DE DESCANSO</div>
    <div class="rest-presets">${REST_PRESETS.map(s=>`<button class="rest-pre-btn" data-secs="${s}">${s<60?s+"s":s/60+"min"}</button>`).join("")}</div>
    <div class="rest-display" id="rest-disp">
      <svg width="64" height="64" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="26" fill="none" stroke="#1a1a1a" stroke-width="4"/>
        <circle id="rest-arc" cx="32" cy="32" r="26" fill="none" stroke="${C.accent}" stroke-width="4"
          stroke-dasharray="${2*Math.PI*26}" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 32 32)" style="transition:stroke-dashoffset 1s linear"/>
        <text id="rest-txt" x="32" y="37" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="monospace"></text>
      </svg>
      <div><div id="rest-msg" style="font-size:12px;color:#666;margin-bottom:6px">Descansando...</div>
        <button id="rest-cancel" style="padding:5px 12px;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;color:#666;font-size:10px;cursor:pointer;font-family:'Share Tech Mono',monospace">Cancelar</button>
      </div>
    </div>
  </div>`;

  const exsHTML=exs.map((ex,ei)=>{
    const ed=curSess[ei]||{};
    const pr=prs[ex.name];
    const prog=getExProg(ex.name);
    const lastMax=prog.length>1?prog[prog.length-2]?.max:null;
    const curMax=prog.length?prog[prog.length-1]?.max:null;
    const improved=curMax&&lastMax&&curMax>lastMax;
    const exData=EXERCISES[ex.name];

    let setsH=`<div class="sets-hdr"><span>#</span><span>KG</span><span>REPS</span><span>1RM</span><span>✓</span></div>`;
    for(let si=0;si<ex.sets;si++){
      const s=ed[si]||{};
      const dk=`${ei}_${si}`;
      const isDone=doneSets[dk];
      const rm=calc1RM(parseFloat(s.weight),parseFloat(s.reps));
      setsH+=`<div class="set-row${isDone?" done":""}" id="sr-${ei}-${si}">
        <div class="set-num">${si+1}</div>
        <input class="set-inp" style="color:${C.accent}" type="number" inputmode="decimal" placeholder="0" value="${s.weight||""}" data-ei="${ei}" data-si="${si}" data-field="weight"/>
        <input class="set-inp" type="number" inputmode="decimal" placeholder="0" value="${s.reps||""}" data-ei="${ei}" data-si="${si}" data-field="reps"/>
        <div class="set-rm" id="rm-${ei}-${si}">${rm?`~${rm}`:"-"}</div>
        <button class="set-ok" style="background:${isDone?C.accent:"#141414"};border:1px solid ${isDone?C.accent:"#222"};color:#000" data-dk="${dk}">${isDone?"✓":""}</button>
      </div>`;
    }

    const tipsHTML=exData?exData.tips.map(t=>`<div class="demo-tip">${t}</div>`).join(""):"";
    const musclesHTML=exData?`<div style="font-size:9px;color:${C.accent};margin-bottom:6px;letter-spacing:1px">${exData.muscles}</div>`:"";

    const demoHTML=`
      <div class="demo-panel${demoOpen[ei]?" open":""}" id="demo-${ei}">
        <div class="demo-img-wrap" id="demo-yt-wrap-${ei}">
          <div class="demo-loading" id="demo-loading-${ei}" style="font-size:10px;color:#444;text-align:center;padding:20px">Cargando...</div>
          <img id="demo-gif-${ei}" alt="${ex.name}" style="width:100%;max-height:240px;object-fit:cover;display:none;border-radius:0"/>
          <div class="demo-svg-wrap" id="demo-svg-${ei}" data-ex="${ex.name}" style="display:none">${makeSVGDemo(ex.name)}</div>
        </div>
        <div class="demo-tips">
          ${musclesHTML}
          <div class="demo-tip-title">TECNICA CORRECTA</div>
          ${tipsHTML}
        </div>
      </div>`;

    return`<div class="card">
      <div class="card-hdr">
        <div style="flex:1"><div class="ex-name">${ex.name}</div><div class="ex-meta">${ex.sets} series · ${ex.reps} reps</div></div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end">
          ${pr?`<span class="badge badge-pr">PR ${pr}kg</span>`:""}
          ${improved?`<span class="badge badge-up">MEJORA</span>`:""}
        </div>
      </div>
      <div class="card-body">
        ${setsH}
        <button class="demo-btn" data-ei="${ei}" style="color:${demoOpen[ei]?C.accent:"#444"};border-color:${demoOpen[ei]?C.accent+"44":"#1a1a1a"}">
          <span>${demoOpen[ei]?"▲":"▼"}</span>
          <span>${demoOpen[ei]?"OCULTAR DEMO":"VER DEMO + TECNICA"}</span>
        </button>
        ${demoHTML}
        <button class="toggle-chart" data-ei="${ei}" style="margin-top:4px">
          ${chartOpen[ei]?"▲ ocultar progreso":"▼ ver progreso"}
        </button>
        <div class="chart-wrap${chartOpen[ei]?" open":""}" id="chart-${ei}">${makeChart(prog,C.accent)}</div>
      </div>
    </div>`;
  }).join("");

  document.getElementById("view-train").innerHTML=dayBtns+restHTML+`<div class="sec-lbl">EJERCICIOS</div>`+exsHTML+
    `<div class="card" style="padding:12px"><div class="sec-lbl">NOTAS DE LA SESION</div>
      <textarea id="sess-notes" placeholder="Como te has sentido, algo a mejorar...">${notes[sKey()]||""}</textarea>
    </div>`;

  bindTrain();
  updatePB();
  updateRestUI();
}

function bindTrain(){
  const C=DAY_COLORS[selDay];

  document.querySelectorAll(".day-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{selDay=btn.dataset.day;doneSets={};demoOpen={};chartOpen={};sessionStart=Date.now();renderTrain();updateHeader();});
  });

  document.querySelectorAll(".set-inp").forEach(inp=>{
    inp.addEventListener("input",e=>{
      const {ei,si,field}=e.target.dataset;
      const k=sKey();
      if(!log[k])log[k]={};if(!log[k][ei])log[k][ei]={};if(!log[k][ei][si])log[k][ei][si]={};
      log[k][ei][si][field]=e.target.value;saveAll();
      const ed=log[k][ei][si];
      const rm=calc1RM(parseFloat(ed.weight),parseFloat(ed.reps));
      const rmEl=document.getElementById(`rm-${ei}-${si}`);
      if(rmEl)rmEl.textContent=rm?`~${rm}`:"-";
    });
  });

  document.querySelectorAll(".set-ok").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const dk=btn.dataset.dk;doneSets[dk]=!doneSets[dk];
      const [ei,si]=dk.split("_");
      const row=document.getElementById(`sr-${ei}-${si}`);
      if(row)row.classList.toggle("done",doneSets[dk]);
      btn.style.background=doneSets[dk]?C.accent:"#141414";
      btn.style.borderColor=doneSets[dk]?C.accent:"#222";
      btn.textContent=doneSets[dk]?"✓":"";
      updatePB();
    });
  });

  // Demo buttons
  document.querySelectorAll(".demo-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const ei=parseInt(btn.dataset.ei);
      demoOpen[ei]=!demoOpen[ei];
      const panel=document.getElementById(`demo-${ei}`);
      if(panel){
        panel.classList.toggle("open",demoOpen[ei]);
        if(demoOpen[ei]){
          // Load GIF
          const ex=ROUTINE[selDay][ei];
          const gifEl=document.getElementById(`demo-gif-${ei}`);
          const svgEl=document.getElementById(`demo-svg-${ei}`);
          const loadEl=document.getElementById(`demo-loading-${ei}`);
          const wrap=document.getElementById(`demo-yt-wrap-${ei}`);
          const exData=EXERCISES[ex.name];
          if(!exData||wrap.dataset.loaded) return;
          wrap.dataset.loaded="1";
          const urls=[exData.gif,exData.gifAlt].filter(Boolean);
          function tryNext(idx){
            if(idx>=urls.length){
              // All GIFs failed — YouTube iframe fallback
              loadEl&&(loadEl.style.display="none");
              if(exData.youtube&&!wrap.querySelector("iframe")){
                wrap.style.cssText+="position:relative;padding-bottom:56.25%;height:0;overflow:hidden";
                const ifr=document.createElement("iframe");
                ifr.src=`https://www.youtube.com/embed/${exData.youtube}?rel=0&modestbranding=1`;
                ifr.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;border:none";
                ifr.allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture";
                ifr.allowFullscreen=true;
                wrap.appendChild(ifr);
              } else {
                svgEl&&(svgEl.style.display="flex");
              }
              return;
            }
            gifEl.onload=()=>{loadEl&&(loadEl.style.display="none");gifEl.style.display="block";};
            gifEl.onerror=()=>tryNext(idx+1);
            gifEl.src=urls[idx];
          }
          tryNext(0);
        }
      }
      btn.style.color=demoOpen[ei]?C.accent:"#444";
      btn.style.borderColor=demoOpen[ei]?C.accent+"44":"#1a1a1a";
      btn.querySelector("span:first-child").textContent=demoOpen[ei]?"▲":"▼";
      btn.querySelector("span:last-child").textContent=demoOpen[ei]?"OCULTAR DEMO":"VER DEMO + TECNICA";
    });
  });

  document.querySelectorAll(".toggle-chart").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const ei=parseInt(btn.dataset.ei);chartOpen[ei]=!chartOpen[ei];
      document.getElementById(`chart-${ei}`)?.classList.toggle("open",chartOpen[ei]);
      btn.textContent=chartOpen[ei]?"▲ ocultar progreso":"▼ ver progreso";
    });
  });

  document.querySelectorAll(".rest-pre-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      startRest(parseInt(btn.dataset.secs));
      document.querySelectorAll(".rest-pre-btn").forEach(b=>{b.style.background="#161616";b.style.borderColor="#222";b.style.color="#555";});
      btn.style.background=C.accent;btn.style.borderColor=C.accent;btn.style.color="#000";
    });
  });

  document.getElementById("rest-cancel")?.addEventListener("click",stopRest);

  document.getElementById("sess-notes")?.addEventListener("input",e=>{
    notes[sKey()]=e.target.value;saveAll();
  });
}

// ─── REST TIMER ───────────────────────────────────────────────────────────────
function startRest(secs){
  if(restTimer)clearInterval(restTimer);
  restTotal=secs;restLeft=secs;restRunning=true;
  document.getElementById("rest-disp")?.classList.add("vis");
  updateRestUI();
  restTimer=setInterval(()=>{
    restLeft--;
    if(restLeft<=0){restLeft=0;restRunning=false;clearInterval(restTimer);restTimer=null;if(navigator.vibrate)navigator.vibrate([400,100,400]);}
    updateRestUI();
  },1000);
}
function stopRest(){
  if(restTimer)clearInterval(restTimer);restTimer=null;restRunning=false;restLeft=null;
  document.getElementById("rest-disp")?.classList.remove("vis");
  document.querySelectorAll(".rest-pre-btn").forEach(b=>{b.style.background="#161616";b.style.borderColor="#222";b.style.color="#555";});
}
function updateRestUI(){
  const arc=document.getElementById("rest-arc"),txt=document.getElementById("rest-txt"),msg=document.getElementById("rest-msg");
  if(!arc||restLeft==null)return;
  const C=DAY_COLORS[selDay];
  const circ=2*Math.PI*26,pct=restLeft/restTotal;
  arc.style.strokeDashoffset=circ*(1-pct);
  arc.style.stroke=restLeft<10?"#ef4444":C.accent;
  if(txt){txt.textContent=fmt(restLeft);txt.style.fill=restLeft<10?"#ef4444":"#fff";}
  if(msg){msg.textContent=restLeft===0?"A por ello! 💥":restRunning?"Descansando...":"Listo";msg.style.color=restLeft===0?"#4ade80":restLeft<10?"#ef4444":"#666";}
}

// ─── HEADER / NAV ─────────────────────────────────────────────────────────────
function updateHeader(){
  const C=DAY_COLORS[selDay];
  const s=getStreak();
  const sp=document.getElementById("streak-pill");
  if(sp){sp.textContent=`🔥 ${s}d`;sp.style.display=s>0?"":"none";}
  document.querySelectorAll(".nav-btn").forEach(btn=>{
    const a=btn.dataset.view===curView;
    btn.classList.toggle("active",a);
    btn.style.background=a?C.accent:"#161616";btn.style.color=a?"#000":"#444";
  });
  const pbw=document.getElementById("pb-wrap");if(pbw)pbw.style.display=curView==="train"?"block":"none";
  const clk=document.getElementById("clock");if(clk)clk.style.display=curView==="train"?"":"none";
  document.getElementById("inst-yes")&&(document.getElementById("inst-yes").style.background=C.accent);
}

function updatePB(){
  const exs=ROUTINE[selDay];
  const total=exs.reduce((a,e)=>a+e.sets,0);
  const done=Object.keys(doneSets).filter(k=>doneSets[k]).length;
  const C=DAY_COLORS[selDay];
  const fill=document.getElementById("pb-fill");const pct=document.getElementById("pb-pct");
  if(fill){fill.style.width=`${total?(done/total)*100:0}%`;fill.style.background=C.accent;}
  if(pct){pct.textContent=`${done}/${total}`;pct.style.color=C.accent;}
}

// ─── OTHER VIEWS ──────────────────────────────────────────────────────────────
function renderStats(){
  const prs=getPRs(),streak=getStreak();
  const totalSess=[...new Set(Object.keys(log).map(k=>k.split("_")[0]))].length;
  const wv=getWeekVols(),wkeys=Object.keys(wv).sort();
  const thisVol=Math.round(wv[getTodayWk()]||0);
  const lastVol=wkeys.length>=2?Math.round(wv[wkeys[wkeys.length-2]]||0):0;
  const diff=thisVol-lastVol;const C=DAY_COLORS[selDay];
  document.getElementById("view-stats").innerHTML=`<div class="sec-lbl">RESUMEN</div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon">📅</div><div class="stat-lbl">SESIONES</div><div class="stat-val" style="color:#e5e5e5">${totalSess}</div></div>
      <div class="stat-card"><div class="stat-icon">🔥</div><div class="stat-lbl">RACHA</div><div class="stat-val" style="color:#f97316">${streak}d</div></div>
      <div class="stat-card"><div class="stat-icon">📈</div><div class="stat-lbl">VOL SEMANA</div><div class="stat-val" style="color:${C.accent}">${thisVol}kg</div></div>
      <div class="stat-card"><div class="stat-icon">${diff>=0?"↑":"↓"}</div><div class="stat-lbl">VS ANT.</div><div class="stat-val" style="color:${diff>=0?"#4ade80":"#ef4444"}">${diff>=0?"+":""}${diff}kg</div></div>
    </div>
    ${wkeys.length>=2?`<div class="card" style="padding:12px;margin-bottom:12px"><div class="sec-lbl" style="margin-bottom:10px">VOLUMEN SEMANAL</div>${makeChart(wkeys.map(k=>({date:k,max:Math.round(wv[k])})),C.accent,65)}</div>`:""}
    <div class="card"><div style="padding:10px 12px;border-bottom:1px solid #161616;font-size:8px;color:#333;letter-spacing:2px">RECORDS PERSONALES</div>
    ${Object.entries(prs).length?Object.entries(prs).map(([n,w])=>`<div class="pr-row"><div class="pr-name">${n}</div><div class="pr-val">${w}kg</div></div>`).join(""):`<div style="padding:16px;text-align:center;color:#2a2a2a;font-size:11px">Entrena para ver tus PRs.</div>`}
    </div>`;
}

function renderProgress(){
  const C=DAY_COLORS[selDay];
  const all=[...new Set(Object.values(ROUTINE).flat().map(e=>e.name))];
  let html="";
  for(const name of all){
    const pts=getExProg(name);if(!pts.length)continue;
    const dn=Object.keys(ROUTINE).find(d=>ROUTINE[d].some(e=>e.name===name));
    const c=DAY_COLORS[dn]||{accent:C.accent};
    const diff=pts.length>1?pts[pts.length-1].max-pts[0].max:0;
    html+=`<div class="card">
      <div style="padding:10px 12px;border-bottom:1px solid #161616;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:10px;font-weight:700;color:#bbb;flex:1;padding-right:8px;font-family:'Barlow',sans-serif">${name}</div>
        <div style="text-align:right"><div style="font-size:14px;font-weight:700;color:${c.accent};font-family:'Barlow',sans-serif">${pts[pts.length-1]?.max}kg</div>${pts.length>1?`<div style="font-size:9px;color:${diff>0?"#4ade80":diff<0?"#ef4444":"#444"}">${diff>0?"+":""}${diff}kg</div>`:""}</div>
      </div>
      <div class="card-body">${makeChart(pts,c.accent,50)}<div style="display:flex;justify-content:space-between;margin-top:5px;font-size:8px;color:#333"><span>${pts[0]?.date}</span><span>${pts[pts.length-1]?.date}</span></div></div>
    </div>`;
  }
  if(!html)html=`<div class="empty-state"><div class="empty-icon">📊</div>Completa sesiones para<br>ver tu progreso aqui.</div>`;
  document.getElementById("view-progress").innerHTML=`<div class="sec-lbl">PROGRESO POR EJERCICIO</div>`+html;
}

function renderBody(){
  const C=DAY_COLORS[selDay];
  const bwKeys=Object.keys(bodyLog).sort();
  document.getElementById("view-body").innerHTML=`<div class="sec-lbl">PESO CORPORAL</div>
    <div class="card" style="padding:12px;margin-bottom:12px">
      <div style="font-size:10px;color:#444;margin-bottom:8px">Registro de hoy</div>
      <div class="bw-form"><input class="bw-inp" id="bw-inp" type="number" inputmode="decimal" step="0.1" placeholder="75.5"/>
        <button class="btn-primary" id="bw-add" style="background:${C.accent}">+ kg</button></div>
    </div>
    ${bwKeys.length>=2?`<div class="card" style="padding:12px;margin-bottom:12px"><div class="sec-lbl" style="margin-bottom:10px">EVOLUCION</div>${makeChart(bwKeys.map(d=>({date:d,max:bodyLog[d]})),C.accent,65)}</div>`:""}
    <div class="card"><div style="padding:10px 12px;border-bottom:1px solid #161616;font-size:8px;color:#333;letter-spacing:2px">HISTORIAL</div>
    ${bwKeys.length?bwKeys.slice().reverse().map(d=>`<div class="bw-hist-row"><div style="font-size:10px;color:#444">${new Date(d).toLocaleDateString("es-ES",{weekday:"short",day:"numeric",month:"short"})}</div><div style="font-size:13px;font-weight:700;color:${C.accent};font-family:'Barlow',sans-serif">${bodyLog[d]} kg</div></div>`).join(""):`<div style="padding:16px;text-align:center;color:#2a2a2a;font-size:11px">Aun no has registrado tu peso.</div>`}
    </div>`;
  document.getElementById("bw-add")?.addEventListener("click",()=>{
    const v=parseFloat(document.getElementById("bw-inp")?.value);
    if(!v)return;bodyLog[today()]=v;saveAll().then(()=>renderBody());
  });
}

function renderHistory(){
  const hist=Object.keys(log).sort().reverse().slice(0,30).map(key=>({date:key.split("_")[0],dn:key.split("_").slice(1).join("_"),data:log[key],key}));
  if(!hist.length){document.getElementById("view-history").innerHTML=`<div class="empty-state"><div class="empty-icon">📋</div>Aun no tienes sesiones.<br>Empieza a entrenar!</div>`;return;}
  let html="";
  for(const e of hist){
    const c=DAY_COLORS[e.dn]||{accent:"#555"};
    const el=ROUTINE[e.dn]||[];
    const vol=Math.round(Object.values(e.data).reduce((a,ed)=>a+Object.values(ed).reduce((b,s)=>b+(parseFloat(s.weight)||0)*(parseFloat(s.reps)||0),0),0));
    const n=notes[e.key];
    const rows=el.map((ex,ei)=>{const ed=e.data[ei];if(!ed)return"";const mw=Math.max(...Object.values(ed).map(s=>parseFloat(s.weight)||0));return`<div class="hist-row"><div class="hist-ex">${ex.name}</div><div class="hist-w">${mw>0?mw+"kg":"—"}</div></div>`;}).join("");
    html+=`<div class="card" style="border-color:${c.accent}18">
      <div style="padding:10px 12px;border-bottom:1px solid #161616;display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-size:10px;color:${c.accent};font-weight:700;font-family:'Barlow',sans-serif">${DAY_ICONS[e.dn]||""} ${e.dn}</div>
        <div style="font-size:8px;color:#333;margin-top:2px">${new Date(e.date).toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"})}</div></div>
        ${vol>0?`<div style="text-align:right"><div style="font-size:8px;color:#333">VOL</div><div style="font-size:15px;font-weight:700;color:${c.accent};font-family:'Barlow',sans-serif">${vol}<span style="font-size:8px">kg</span></div></div>`:""}
      </div>
      <div style="padding:8px 12px">${rows}${n?`<div class="hist-note">"${n}"</div>`:""}</div>
    </div>`;
  }
  document.getElementById("view-history").innerHTML=`<div class="sec-lbl">ULTIMAS SESIONES</div>`+html;
}

function renderSettings(){
  const C=DAY_COLORS[selDay];
  document.getElementById("view-settings").innerHTML=`<div class="sec-lbl">AJUSTES</div>
    <div class="card" style="padding:12px;margin-bottom:10px">
      <div style="font-size:10px;color:#666;margin-bottom:3px">Exportar CSV</div>
      <div style="font-size:9px;color:#333;margin-bottom:10px">Compatible con Excel. Incluye pesos, reps y 1RM estimado.</div>
      <button class="btn-block" id="btn-export" style="background:${C.accent};color:#000">EXPORTAR CSV</button>
      <div class="ok-msg" id="export-ok">Archivo descargado</div>
    </div>
    <div class="card" style="padding:12px;margin-bottom:10px">
      <div style="font-size:10px;color:#555;margin-bottom:4px">Datos guardados</div>
      <div style="font-size:11px;color:#333">${Object.keys(log).length} sesiones · ${Object.keys(bodyLog).length} pesos</div>
    </div>
    <div class="card" style="padding:12px">
      <div style="font-size:10px;color:#555;margin-bottom:10px">Zona peligrosa</div>
      <button class="btn-danger" id="btn-clear">BORRAR TODO EL HISTORIAL</button>
    </div>`;
  document.getElementById("btn-export")?.addEventListener("click",()=>{
    const rows=[["Fecha","Dia","Ejercicio","Serie","Peso(kg)","Reps","1RM"]];
    for(const key of Object.keys(log).sort()){
      const dn=key.split("_").slice(1).join("_"),date=key.split("_")[0];
      const el=ROUTINE[dn]||[];
      for(const [ei,ed] of Object.entries(log[key])){
        const ex=el[ei];if(!ex)continue;
        for(const [si,s] of Object.entries(ed))rows.push([date,dn,ex.name,parseInt(si)+1,s.weight||"",s.reps||"",calc1RM(parseFloat(s.weight),parseFloat(s.reps))||""]);
      }
    }
    const a=document.createElement("a");
    a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(rows.map(r=>r.join(",")).join("\n"));
    a.download=`entrenamiento_${today()}.csv`;a.click();
    const ok=document.getElementById("export-ok");if(ok){ok.style.display="block";setTimeout(()=>ok.style.display="none",3000);}
  });
  document.getElementById("btn-clear")?.addEventListener("click",()=>{
    if(confirm("Borrar TODO el historial? No se puede deshacer.")){
      log={};bodyLog={};notes={};saveAll().then(()=>renderSettings());
    }
  });
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function switchView(v){
  curView=v;
  document.querySelectorAll(".view").forEach(el=>el.classList.remove("active"));
  document.getElementById(`view-${v}`)?.classList.add("active");
  updateHeader();
  if(v==="train")renderTrain();
  else if(v==="stats")renderStats();
  else if(v==="progress")renderProgress();
  else if(v==="body")renderBody();
  else if(v==="history")renderHistory();
  else if(v==="settings")renderSettings();
  document.getElementById("content").scrollTop=0;
}

// ─── CLOCK ────────────────────────────────────────────────────────────────────
setInterval(()=>{
  const el=document.getElementById("clock");
  if(!el||curView!=="train")return;
  const e=Math.floor((Date.now()-sessionStart)/1000);
  const h=Math.floor(e/3600),m=Math.floor((e%3600)/60),s=e%60;
  const C=DAY_COLORS[selDay];
  el.innerHTML=`<span style="color:${C.accent};font-weight:700">${h>0?h+":":""}${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}</span>`;
},1000);

// ─── PWA ─────────────────────────────────────────────────────────────────────
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault();deferredInstall=e;
  document.getElementById("install-bar")?.classList.add("show");
});
document.getElementById("inst-yes")?.addEventListener("click",async()=>{
  if(!deferredInstall)return;
  deferredInstall.prompt();
  await deferredInstall.userChoice;
  deferredInstall=null;
  document.getElementById("install-bar")?.classList.remove("show");
});
document.getElementById("inst-no")?.addEventListener("click",()=>{
  document.getElementById("install-bar")?.classList.remove("show");
});
window.addEventListener("appinstalled",()=>document.getElementById("install-bar")?.classList.remove("show"));

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>switchView(btn.dataset.view)));
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
renderTrain();
updateHeader();
initCloud();
