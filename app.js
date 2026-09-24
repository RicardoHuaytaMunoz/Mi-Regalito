// ==========================================
// BANCO DE PREGUNTAS (14 AÑOS DE HISTORIA)
// ==========================================
const questions = [
  // Bloque 1: Opción Múltiple (1 al 10)
  {
    type: "choice",
    tag: "Año 1 • Nuestro Origen",
    question: "¿Recuerdas con exactitud cuál fue nuestro primer plan o primera salida oficial a solas?",
    options: [
      { text: "Las Gambusinas", correct: true },
      { text: "Club Campestre Chosica", correct: false },
      { text: "Parque de la Amistad", correct: false },
      { text: "Cine UVK", correct: false }
    ],
    feedback: "¡Las Gambusinas! Ese día empezó todo este viaje inolvidable."
  },
  {
    type: "choice",
    tag: "Año 2 • Sabores Favoritos",
    question: "Si se trata de darnos un gustito el fin de semana sin pensarlo dos veces, ¿cuál gana siempre?",
    options: [
      { text: "Pizza del Boulevard", correct: true },
      { text: "Bubble tea", correct: true },
      { text: "Pollo Broaster de la esquina", correct: false },
      { text: "Ceviche carretillero", correct: false }
    ],
    feedback: "¡Totalmente! La pizza del Boulevard o un buen Bubble tea nunca fallan."
  },
  {
    type: "choice",
    tag: "Año 3 • Banda Sonora",
    question: "¿Qué música suena y automáticamente nos conecta en nuestros momentos juntos?",
    options: [
      { text: "Karol G, Rels B o cumbias románticas", correct: true },
      { text: "Latin Pop y Baladas noventeras", correct: false },
      { text: "Reggaetón viejito de discoteca", correct: false },
      { text: "Rock alternativo acústico", correct: false }
    ],
    feedback: "¡Exacto! Esas canciones marcan nuestros mejores recuerdos."
  },
  {
    type: "choice",
    tag: "Año 4 • Pequeñas Costumbres",
    question: "¿Qué es lo primero que suelo hacer cuando quiero sacarte una risa o molestarte con cariño?",
    options: [
      { text: "Molestar o morder", correct: true },
      { text: "Ponerme a dormir", correct: false },
      { text: "Mirar el celular en silencio", correct: false },
      { text: "Mirar al techo haciéndome el loco", correct: false }
    ],
    feedback: "¡Mordidas y risas garantizadas siempre!"
  },
  {
    type: "choice",
    tag: "Año 5 • Escapadas",
    question: "Si nos dicen 'escapada rápida de fin de semana ahora mismo', ¿cuál es nuestro destino ideal?",
    options: [
      { text: "Tingo María", correct: true },
      { text: "Tumbes", correct: true },
      { text: "Centro Comercial Arenales", correct: false },
      { text: "Parque de las Leyendas", correct: false }
    ],
    feedback: "¡Tingo María o las playas de Tumbes son nuestros lugares mágicos!"
  },
  {
    type: "choice",
    tag: "Año 6 • Mañanas en Casa",
    question: "¿Quiénes son los primeros o más propensos en decir 'solo 5 minutos más en la camita'?",
    options: [
      { text: "Ricardo", correct: true },
      { text: "Haru y Yuki", correct: true },
      { text: "Ive", correct: false }
    ],
    feedback: "¡Confirmadísimo! Imposible levantarse rápido con los consentidos."
  },
  {
    type: "choice",
    tag: "Año 7 • Refugio Juntos",
    question: "Cuando el día ha estado pesado y necesitamos desconectar del mundo, ¿cuál es el plan infalible?",
    options: [
      { text: "Un abrazo y maratón de películas", correct: true },
      { text: "Unas empanadas al paso", correct: false },
      { text: "Salir a caminar al mercado", correct: false },
      { text: "Revisar pendientes de la casa", correct: false }
    ],
    feedback: "Un abrazo fuerte y una buena peli arreglan cualquier día."
  },
  {
    type: "choice",
    tag: "Año 8 • Códigos Secretos",
    question: "¿Cuál es esa expresión clásica y única que nos decimos y nadie más entendería?",
    options: [
      { text: "WAWAWA", correct: true },
      { text: "GIGIRI", correct: false },
      { text: "ÑACAÑACA", correct: false }
    ],
    feedback: "¡WAWAWA! Solo nosotros entendemos nuestro lenguaje."
  },
  {
    type: "choice",
    tag: "Año 9 • Desconexión Perfecta",
    question: "¿Cómo definimos nuestra tarde ideal de descanso?",
    options: [
      { text: "Cine y canchita", correct: true },
      { text: "Mirar peli y 'dormir'", correct: true },
      { text: "Molestarnos sin parar", correct: false }
    ],
    feedback: "¡Películas, canchita y descanso total!"
  },
  {
    type: "choice",
    tag: "Año 10 • Nuestro Gran Proyecto",
    question: "¿Cuál es ese gran sueño en común que más nos emociona construir juntos?",
    options: [
      { text: "Meta de hogar y formar una familia", correct: true },
      { text: "Irnos a vivir a una isla desierta", correct: false },
      { text: "Adoptar un zoológico entero", correct: false }
    ],
    feedback: "Construir nuestro propio hogar y futuro paso a paso ❤️."
  },

  // Bloque 2: Emparejar / Enlazar (11 al 14)
  {
    type: "match",
    tag: "Año 11 • Momentos Clave",
    question: "Toca un momento de la izquierda y conéctalo con su recuerdo:",
    pairs: [
      { left: "Primer beso", right: "Yaktta" },
      { left: "Nuestra mejor anécdota", right: "Bote loco en Tingo María" },
      { left: "El viaje más divertido", right: "Tingo María y Cuzco" },
      { left: "Momento más random", right: "Niño llora por mordida de gato" }
    ],
    feedback: "¡Memoria intacta! Qué anécdotas tan memorables."
  },
  {
    type: "match",
    tag: "Año 12 • Gustos a la Mesa",
    question: "Empareja cada detalle culinario con su correspondiente:",
    pairs: [
      { left: "Plato favorito de él", right: "Ají de gallina, puré o pizza hawaiana" },
      { left: "Postre favorito de ella", right: "Torta zanahoria, besos de moza o mis abrazos" },
      { left: "Lo que siempre piden juntos", right: "Choripán o carne a la parrilla" }
    ],
    feedback: "¡Qué buen apetito tenemos juntos!"
  },
  {
    type: "match",
    tag: "Año 13 • Roles y Costumbres",
    question: "Empareja cada costumbre con quien lleva el mando:",
    pairs: [
      { left: "El que maneja la música", right: "Ive" },
      { left: "El que elige la película", right: "Ive" },
      { left: "El que elige el destino de viaje", right: "Ive" },
      { left: "El que busca dónde comer", right: "El hambre" }
    ],
    feedback: "¡La jefa indiscutible del viaje y la música! (Y el hambre guiándonos)."
  },
  {
    type: "match",
    tag: "Año 14 • Fechas Eternas",
    question: "Conecta cada hito con su momento en el calendario:",
    pairs: [
      { left: "Fecha en que se conocieron", right: "Hace 14 años en inicio de clases" },
      { left: "Día oficial de novios", right: "24 de abril" },
      { left: "Un viaje memorable", right: "Tingo María (1er viaje)" }
    ],
    feedback: "¡14 años construyendo la mejor historia de amor!"
  }
];

// Lista de Premios Aleatorios
const prizes = [
  "Una noche romántica especial ❤️",
  "Salida al cine con canchita gigante y dulces 🍿",
  "Cena romántica: Choripán, carnes a la parrilla o pizza 🍕",
  "Tarde cultural: Salida juntos al teatro 🎭",
  "Vale por una prenda especial que tú elijas 👗",
  "Vale por masajes relajantes y maratón de pelis en camita 🎬"
];

// ==========================================
// PLAYLIST (RUTAS ESTÁTICAS DIRECTAS)
// ==========================================
const playlist = [
  {
    title: "AMOR",
    artist: "Danny Ocean",
    src: "music/amor.mp3",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=150"
  },
  {
    title: "Tus Gafitas",
    artist: "KAROL G",
    src: "music/tus-gafitas.mp3",
    cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=150"
  },
  {
    title: "Still",
    artist: "KAROL G & Bruno Mars",
    src: "music/still.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150"
  },
  {
    title: "Eres para mí",
    artist: "Julieta Venegas",
    src: "music/eres-para-mi.mp3",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150"
  },
  {
    title: "Tú y Tú",
    artist: "Los Ángeles Azules & Cazzu",
    src: "music/tu-y-tu.mp3",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150"
  },
  {
    title: "BbY WOW",
    artist: "KAROL G & Judeline",
    src: "music/bby-wow.mp3",
    cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=150"
  },
  {
    title: "Risk It All",
    artist: "Bruno Mars",
    src: "music/risk-it-all.mp3",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=150"
  }
];

// ==========================================
// CONTROLADOR ROBUSTO DE AUDIO
// ==========================================
let currentTrackIndex = 0;
let audio = null;
let vinylDisk = null;
let tonearm = null;
let playBtn = null;

function loadTrack(index) {
  const track = playlist[index];
  const titleEl = document.getElementById("trackTitle");
  const artistEl = document.getElementById("trackArtist");
  const coverEl = document.getElementById("trackCover");

  if (titleEl) titleEl.innerText = track.title;
  if (artistEl) artistEl.innerText = track.artist;
  if (coverEl) coverEl.style.backgroundImage = `url('${track.cover}')`;
  
  if (audio) {
    audio.pause();
    audio.src = track.src;
    audio.load();
  }
}

function togglePlay() {
  if (!audio) return;
  if (audio.paused) {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (vinylDisk) vinylDisk.classList.add("spinning");
        if (tonearm) tonearm.classList.add("playing");
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }).catch(error => {
        console.warn("Autoplay prevenido por navegador. Requiere interacción manual:", error);
      });
    }
  } else {
    audio.pause();
    if (vinylDisk) vinylDisk.classList.remove("spinning");
    if (tonearm) tonearm.classList.remove("playing");
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play ml-0.5"></i>';
  }
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  togglePlay();
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  togglePlay();
}

function formatTime(sec) {
  if (isNaN(sec) || !isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function seekAudio(e) {
  if (!audio || !audio.duration) return;
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  audio.currentTime = (clickX / width) * audio.duration;
}

document.addEventListener("DOMContentLoaded", () => {
  createHearts();

  audio = document.getElementById("bgAudio");
  vinylDisk = document.getElementById("vinylDisk");
  tonearm = document.getElementById("turntableArm");
  playBtn = document.getElementById("playBtn");

  if (audio) {
    loadTrack(currentTrackIndex);

    audio.addEventListener("loadedmetadata", () => {
      const totEl = document.getElementById("totalDuration");
      if (totEl) totEl.innerText = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        const progressPct = (audio.currentTime / audio.duration) * 100;
        const progEl = document.getElementById("audioProgress");
        const curEl = document.getElementById("currentTime");
        const totEl = document.getElementById("totalDuration");

        if (progEl) progEl.style.width = `${progressPct}%`;
        if (curEl) curEl.innerText = formatTime(audio.currentTime);
        if (totEl) totEl.innerText = formatTime(audio.duration);
      }
    });

    audio.addEventListener("ended", nextTrack);
  }
});
