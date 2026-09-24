// ===== DATOS DE ESTACIONES =====
const STATIONS = [
  {
    icon: '🏛️', name: 'Edad Antigua', years: 'Siglos V a.C. – V d.C.',
    color: '#f59e0b', bg: '#fde68a',
    items: [
      'Niño y niña como propiedad de la familia o del Estado.',
      'La niñez no era una etapa diferenciada.',
      'Se esperaba que asumieran roles de adultos.'
    ],
    concepto: 'Infancia como preparación para la vida adulta.'
  },
  {
    icon: '⛪', name: 'Edad Media', years: 'Siglos V – XV',
    color: '#8b5cf6', bg: '#ddd6fe',
    items: [
      'La infancia se vivió de manera diversa.',
      'Los niños eran vistos como "adultos en miniatura".',
      'Predominaba la formación religiosa y el aprendizaje por imitación.'
    ],
    concepto: 'Niño = formación religiosa y social.'
  },
  {
    icon: '📖', name: 'Transición a la Modernidad', years: 'Siglos XVI – XVII',
    color: '#0ea5e9', bg: '#bae6fd',
    items: [
      'Se fortalece la idea de familia y educación.',
      'Se reconoce la necesidad de cuidar y formar a los niños.',
      'Aparecen las primeras ideas sobre educación infantil.'
    ],
    concepto: 'Niño = formación y preparación para la vida adulta.'
  },
  {
    icon: '🏫', name: 'Edad Moderna', years: 'Siglos XVIII – XIX',
    color: '#10b981', bg: '#bbf7d0',
    items: [
      'Se consolida la figura del niño como ser en desarrollo.',
      'Surgen instituciones educativas y pedagógicas.',
      'Se valora la infancia como etapa especial, aunque aún subordinada al adulto.'
    ],
    concepto: 'Niño = ser en desarrollo y educable.'
  },
  {
    icon: '⚖️', name: 'Siglo XIX', years: 'Siglo XIX',
    color: '#ec4899', bg: '#fbcfe8',
    items: [
      'Se impulsa la educación como derecho.',
      'Se promueve la idea de la infancia como etapa única y valiosa.',
      'Comienzan a aparecer leyes y políticas de protección.'
    ],
    concepto: 'Niño = ser a proteger y educar.'
  },
  {
    icon: '🌍', name: 'Siglo XX', years: '1924 – 1959',
    color: '#f97316', bg: '#fed7aa',
    items: [
      '1924: Declaración de Ginebra (primer reconocimiento de derechos del niño).',
      '1959: Declaración de los Derechos del Niño.',
      'Aumenta la protección y la atención integral a la infancia.'
    ],
    concepto: 'Niño = protegido y asistido.'
  },
  {
    icon: '📜', name: 'Ley 1098 de 2006', years: 'Colombia 2006',
    color: '#14b8a6', bg: '#99f6e4',
    items: [
      'Código de Infancia y Adolescencia (Colombia).',
      'Reconoce a todas las personas menores de 18 años como sujetos de derechos.',
      'Refuerza el principio de protección integral y el derecho a la educación inclusiva y de calidad.'
    ],
    concepto: 'Niño, niña y adolescente = titulares de derechos.'
  },
  {
    icon: '🌈', name: 'Siglo XXI', years: 'Siglo XXI',
    color: '#e11d48', bg: '#fecdd3',
    items: [
      'Infancias diversas: culturales, sociales, étnicas, de género, territoriales.',
      'Se promueve la participación activa en la familia, la escuela y la sociedad.',
      'Hacia una educación inclusiva, equitativa y de calidad.'
    ],
    concepto: 'Infancias diversas, participativas y con derechos.'
  }
];

// ===== NAVEGACIÓN SPA =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabSections = document.querySelectorAll('.tab-section');

function showTab(tabId) {
  tabSections.forEach(sec => { sec.classList.remove('active'); sec.style.display = 'none'; });
  tabBtns.forEach(btn => btn.classList.remove('active'));

  const target = document.getElementById(tabId);
  const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (!target) return;

  target.style.display = 'block';
  target.offsetHeight;
  target.classList.add('active');
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelector('nav').classList.remove('open');
  document.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
  observeReveal();
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab));
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showTab(btn.dataset.tab); }
  });
});

// ===== MENÚ MÓVIL =====
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.textContent = isOpen ? '✕' : '☰';
});

// ===== TREN — MODAL =====
const modal      = document.getElementById('stationModal');
const modalClose = document.getElementById('modalClose');
const modalIcon  = document.getElementById('modalIcon');
const modalNum   = document.getElementById('modalNum');
const modalTitle = document.getElementById('modalTitle');
const modalYears = document.getElementById('modalYears');
const modalList  = document.getElementById('modalList');
const modalConc  = document.getElementById('modalConcepto');
const modalPrev  = document.getElementById('modalPrev');
const modalNext  = document.getElementById('modalNext');
const modalHeader   = document.getElementById('modalHeader');
const modalMinimap  = document.getElementById('modalMinimap');
const progressDots  = document.getElementById('progressDots');
const progressCount = document.getElementById('progressCount');

const visited = new Set();
let currentStation = 0;

// Crear puntos de progreso
STATIONS.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'pdot';
  d.id = `pdot-${i}`;
  progressDots.appendChild(d);
});

// Construir mini mapa del modal
function buildMinimap(activeIdx) {
  modalMinimap.innerHTML = '';
  STATIONS.forEach((s, i) => {
    // conector
    if (i > 0) {
      const line = document.createElement('div');
      line.className = 'mm-connector' + (visited.has(i - 1) && visited.has(i) ? ' mm-done' : '');
      modalMinimap.appendChild(line);
    }
    const dot = document.createElement('button');
    dot.className = 'mm-dot';
    dot.style.background = s.color;
    dot.style.setProperty('--mmc', s.color);
    dot.textContent = i + 1;
    dot.title = s.name;
    dot.setAttribute('aria-label', `Ir a estación ${i + 1}: ${s.name}`);
    if (i === activeIdx) dot.classList.add('mm-active');
    else if (visited.has(i)) dot.classList.add('mm-visited');
    else dot.classList.add('mm-unvisited');
    dot.addEventListener('click', () => openModal(i));
    modalMinimap.appendChild(dot);
  });
}

// Actualizar chips del panel de ayuda
function updateHelpPanel(activeIdx) {
  document.querySelectorAll('.help-chip').forEach(chip => {
    const id = +chip.dataset.id;
    chip.classList.remove('hc-visited', 'hc-active');
    if (id === activeIdx) chip.classList.add('hc-active');
    else if (visited.has(id)) chip.classList.add('hc-visited');
  });
}

function openModal(idx) {
  currentStation = idx;
  const s = STATIONS[idx];

  modal.style.setProperty('--modal-color', s.color);
  modal.style.setProperty('--modal-bg', s.bg);
  modalHeader.style.borderBottomColor = s.color;

  modalIcon.textContent  = s.icon;
  modalNum.textContent   = `Estación ${idx + 1}`;
  modalNum.style.background = s.color;
  modalTitle.textContent = s.name;
  modalTitle.style.color = s.color;
  modalYears.textContent = s.years;

  modalList.innerHTML = s.items.map(it => `<li>${it}</li>`).join('');
  modalConc.innerHTML = `<strong>Concepto clave:</strong> ${s.concepto}`;
  modalConc.style.background = s.bg;

  modalPrev.disabled = idx === 0;
  modalNext.disabled = idx === STATIONS.length - 1;
  modalPrev.style.background = s.color;
  modalNext.style.background = s.color;

  // Marcar visitada antes de construir el mapa
  visited.add(idx);
  document.querySelector(`.station[data-id="${idx}"]`)?.classList.add('visited');
  document.getElementById(`pdot-${idx}`)?.classList.add('done');
  progressCount.textContent = `${visited.size} / ${STATIONS.length}`;

  buildMinimap(idx);
  updateHelpPanel(idx);

  modal.hidden = false;
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  updateHelpPanel(-1); // quitar activo, mantener visitados
  document.querySelector(`.station[data-id="${currentStation}"]`)?.focus();
}

// Botones estación (tren)
document.querySelectorAll('.station').forEach(btn => {
  btn.addEventListener('click', () => openModal(+btn.dataset.id));
});

// Chips del panel de ayuda
document.querySelectorAll('.help-chip').forEach(chip => {
  chip.addEventListener('click', () => openModal(+chip.dataset.id));
});

modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => openModal(currentStation - 1));
modalNext.addEventListener('click', () => openModal(currentStation + 1));

// Cerrar con Escape o clic fuera
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
  if (!modal.hidden) {
    if (e.key === 'ArrowRight' && currentStation < STATIONS.length - 1) openModal(currentStation + 1);
    if (e.key === 'ArrowLeft'  && currentStation > 0)                   openModal(currentStation - 1);
  }
});

// ===== INTERSECTION OBSERVER — REVEAL =====
let observer;

function observeReveal() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.tab-section.active .reveal').forEach(el => observer.observe(el));
}

// ===== INIT =====
const initialSection = document.getElementById('inicio');
initialSection.style.display = 'block';
initialSection.offsetHeight;
initialSection.classList.add('active');
observeReveal();
