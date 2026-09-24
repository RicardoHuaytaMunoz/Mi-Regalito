// ==========================================
// BANCO DE PREGUNTAS (14 AÑOS DE HISTORIA)
// ==========================================
const questions = [
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

const prizes = [
  "Una noche romántica especial ❤️",
  "Salida al cine con canchita gigante y dulces 🍿",
  "Cena romántica: Choripán, carnes a la parrilla o pizza 🍕",
  "Tarde cultural: Salida juntos al teatro 🎭",
  "Vale por una prenda especial que tú elijas 👗",
  "Vale por masajes relajantes y maratón de pelis en camita 🎬"
];

// ==========================================
// PLAYLIST EN STREAMING (MP3 100% FUNCIONAL)
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
// LÓGICA DEL CUESTIONARIO
// ==========================================
let currentIdx = 0;
let score = 0;
let selectedLeft = null;
let currentMatchesCount = 0;

window.startQuiz = function() {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  currentIdx = 0;
  score = 0;
  renderQuestion();
  
  // Iniciar la música automáticamente al comenzar si el usuario lo desea
  if (audio && audio.paused) {
    togglePlay();
  }
};

function renderQuestion() {
  const q = questions[currentIdx];
  const area = document.getElementById("interactiveArea");
  const feedback = document.getElementById("feedbackText");
  
  feedback.classList.remove("opacity-100");
  feedback.classList.add("opacity-0");
  feedback.innerText = "";
  area.innerHTML = "";

  const progressPct = ((currentIdx + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${progressPct}%`;
  document.getElementById("progressText").innerText = `Pregunta ${currentIdx + 1} de ${questions.length}`;
  document.getElementById("scoreText").innerText = `${score} Puntos`;
  document.getElementById("questionTag").innerText = q.tag;
  document.getElementById("questionTitle").innerText = q.question;

  if (q.type === "choice") {
    renderChoice(q, area);
  } else if (q.type === "match") {
    renderMatch(q, area);
  }
}

function renderChoice(q, container) {
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);

  shuffled.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn w-full p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:border-rose-200 transition-all";
    btn.innerText = opt.text;
    btn.onclick = () => selectChoice(opt, btn, q);
    container.appendChild(btn);
  });
}

function selectChoice(option, btn, q) {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.disabled = true);

  const feedback = document.getElementById("feedbackText");

  if (option.correct) {
    btn.classList.remove("bg-slate-50", "border-slate-200/80");
    btn.classList.add("bg-emerald-50", "border-emerald-400", "text-emerald-700");
    score++;
    document.getElementById("scoreText").innerText = `${score} Puntos`;
    feedback.innerText = `❤️ ${q.feedback}`;
    feedback.className = "text-xs text-center font-semibold text-emerald-600 opacity-100 transition-opacity";
    if (typeof confetti === "function") {
      confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
    }
  } else {
    btn.classList.remove("bg-slate-50", "border-slate-200/80");
    btn.classList.add("bg-rose-50", "border-rose-300", "text-rose-600");
    feedback.innerText = "¡Casi! Pero no te preocupes, sigues sumando amor.";
    feedback.className = "text-xs text-center font-semibold text-rose-500 opacity-100 transition-opacity";
  }

  setTimeout(nextQuestion, 1600);
}

function renderMatch(q, container) {
  currentMatchesCount = 0;
  selectedLeft = null;

  const matchWrapper = document.createElement("div");
  matchWrapper.className = "grid grid-cols-2 gap-3 text-xs";

  const leftCol = document.createElement("div");
  leftCol.className = "space-y-2";
  const rightCol = document.createElement("div");
  rightCol.className = "space-y-2";

  const shuffledRight = [...q.pairs].sort(() => Math.random() - 0.5);

  q.pairs.forEach((pair, idx) => {
    const lDiv = document.createElement("div");
    lDiv.className = "match-item p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 cursor-pointer text-center";
    lDiv.innerText = pair.left;
    lDiv.dataset.pairId = idx;
    lDiv.onclick = () => handleLeftClick(lDiv);
    leftCol.appendChild(lDiv);
  });

  shuffledRight.forEach(pair => {
    const rDiv = document.createElement("div");
    rDiv.className = "match-item p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 cursor-pointer text-center";
    rDiv.innerText = pair.right;
    const originalIdx = q.pairs.findIndex(p => p.right === pair.right);
    rDiv.dataset.pairId = originalIdx;
    rDiv.onclick = () => handleRightClick(rDiv, q);
    rightCol.appendChild(rDiv);
  });

  matchWrapper.appendChild(leftCol);
  matchWrapper.appendChild(rightCol);
  container.appendChild(matchWrapper);
}

function handleLeftClick(el) {
  if (el.classList.contains("matched")) return;
  document.querySelectorAll("#interactiveArea .match-item").forEach(item => {
    if (!item.classList.contains("matched")) item.classList.remove("selected");
  });
  el.classList.add("selected");
  selectedLeft = el;
}

function handleRightClick(el, q) {
  if (!selectedLeft || el.classList.contains("matched")) return;

  if (selectedLeft.dataset.pairId === el.dataset.pairId) {
    selectedLeft.classList.remove("selected");
    selectedLeft.classList.add("matched");
    el.classList.add("matched");
    selectedLeft = null;
    currentMatchesCount++;

    if (currentMatchesCount === q.pairs.length) {
      score++;
      document.getElementById("scoreText").innerText = `${score} Puntos`;
      const feedback = document.getElementById("feedbackText");
      feedback.innerText = `❤️ ${q.feedback}`;
      feedback.className = "text-xs text-center font-semibold text-emerald-600 opacity-100 transition-opacity";
      if (typeof confetti === "function") {
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
      }
      setTimeout(nextQuestion, 1600);
    }
  } else {
    el.classList.add("border-rose-300", "bg-rose-50");
    setTimeout(() => {
      el.classList.remove("border-rose-300", "bg-rose-50");
    }, 400);
  }
}

function nextQuestion() {
  currentIdx++;
  if (currentIdx < questions.length) {
    renderQuestion();
  } else {
    showPrizeScreen();
  }
}

function showPrizeScreen() {
  document.getElementById("quizScreen").classList.add("hidden");
  const prizeScreen = document.getElementById("prizeScreen");
  prizeScreen.classList.remove("hidden");
  document.getElementById("finalScoreMsg").innerText = `Obtuviste ${score} de 14 aciertos perfectos`;

  if (typeof confetti === "function") {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  }
}

window.revealPrize = function() {
  const hiddenState = document.getElementById("hiddenPrizeState");
  const revealedState = document.getElementById("revealedPrizeState");
  const prizeName = document.getElementById("prizeName");

  if (!hiddenState.classList.contains("hidden")) {
    const selected = prizes[Math.floor(Math.random() * prizes.length)];
    prizeName.innerText = selected;
    hiddenState.classList.add("hidden");
    revealedState.classList.remove("hidden");
    document.getElementById("cardBox").classList.add("prize-revealed");

    if (typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
    }
  }
};

window.restartQuiz = function() {
  document.getElementById("prizeScreen").classList.add("hidden");
  document.getElementById("hiddenPrizeState").classList.remove("hidden");
  document.getElementById("revealedPrizeState").classList.add("hidden");
  document.getElementById("cardBox").classList.remove("prize-revealed");
  window.startQuiz();
};

function createHearts() {
  const bg = document.getElementById("heartBg");
  if (!bg) return;
  const symbols = ["❤️", "💖", "🌸", "✨"];
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart text-sm";
    heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 95}%`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.fontSize = `${Math.floor(Math.random() * 12 + 14)}px`;
    bg.appendChild(heart);
  }
}

// ==========================================
// CONTROLADOR DEL REPRODUCTOR VINILO
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
    audio.src = track.src;
    audio.load();
  }
}

window.togglePlay = function() {
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      if (vinylDisk) vinylDisk.classList.add("spinning");
      if (tonearm) tonearm.classList.add("playing");
      if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }).catch(err => {
      console.warn("Reproducción en espera de interacción de usuario.");
    });
  } else {
    audio.pause();
    if (vinylDisk) vinylDisk.classList.remove("spinning");
    if (tonearm) tonearm.classList.remove("playing");
    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play ml-0.5"></i>';
  }
};

window.nextTrack = function() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  window.togglePlay();
};

window.prevTrack = function() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  window.togglePlay();
};

function formatTime(sec) {
  if (isNaN(sec) || !isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

window.seekAudio = function(e) {
  if (!audio || !audio.duration) return;
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  audio.currentTime = (clickX / width) * audio.duration;
};

document.addEventListener("DOMContentLoaded", () => {
  createHearts();

  audio = document.getElementById("bgAudio");
  vinylDisk = document.getElementById("vinylDisk");
  tonearm = document.getElementById("turntableArm");
  playBtn = document.getElementById("playBtn");

  if (audio) {
    loadTrack(currentTrackIndex);

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

    audio.addEventListener("ended", window.nextTrack);
  }
});
