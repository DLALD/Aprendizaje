// ===== DATOS =====
const STATIONS = [
  {
    icon: '🏛️', name: 'Edad Antigua', years: 'Siglos V a.C. – V d.C.',
    color: '#f59e0b', bg: '#fde68a',
    img: '../Recursos/TimeLine/1.jpeg',
    items: ['Niño y niña como propiedad de la familia o del Estado.', 'La niñez no era una etapa diferenciada.', 'Se esperaba que asumieran roles de adultos.'],
    context: [
      'En Grecia y Roma, el pater familias tenía poder absoluto sobre los hijos, incluyendo el derecho de vida o muerte. Los niños eran considerados propiedad legal del padre.',
      'En Esparta, los niños eran examinados al nacer: los débiles eran abandonados. La crianza era responsabilidad del Estado, orientada a formar guerreros desde los 7 años.',
      'En Roma, los niños comenzaban a trabajar junto a sus padres desde muy pequeños. No existía una etapa de juego o aprendizaje protegida; la vida adulta comenzaba muy pronto.'
    ],
    concepto: 'Infancia como preparación para la vida adulta.'
  },
  {
    icon: '⛪', name: 'Edad Media', years: 'Siglos V – XV',
    color: '#8b5cf6', bg: '#ddd6fe',
    img: '../Recursos/TimeLine/2.jpg',
    items: ['La infancia se vivió de manera diversa.', 'Los niños eran vistos como "adultos en miniatura".', 'Predominaba la formación religiosa y el aprendizaje por imitación.'],
    context: [
      'El historiador Philippe Ariès argumentó que en la Edad Media no existía el concepto moderno de infancia: los niños eran representados en el arte como adultos pequeños, con las mismas ropas y actividades.',
      'La Iglesia jugó un papel central en la educación medieval. Los monasterios eran los principales centros de enseñanza, y la formación religiosa era inseparable del aprendizaje cotidiano.',
      'El aprendizaje de oficios comenzaba entre los 7 y 10 años. Los niños eran enviados a casas de artesanos o nobles para aprender un oficio, lo que hoy llamaríamos trabajo infantil.'
    ],
    concepto: 'Niño = formación religiosa y social.'
  },
  {
    icon: '📖', name: 'Transición a la Modernidad', years: 'Siglos XVI – XVII',
    color: '#0ea5e9', bg: '#bae6fd',
    img: '../Recursos/TimeLine/3.jpg',
    items: ['Se fortalece la idea de familia y educación.', 'Se reconoce la necesidad de cuidar y formar a los niños.', 'Aparecen las primeras ideas sobre educación infantil.'],
    context: [
      'Juan Amos Comenio (1592–1670) escribió la primera obra sistemática de pedagogía infantil: la Didactica Magna. Propuso que todos los niños, sin importar su origen, merecían educación.',
      'La Reforma Protestante impulsó la alfabetización masiva para que los fieles pudieran leer la Biblia. Esto llevó a la creación de escuelas parroquiales en toda Europa.',
      'La familia nuclear comenzó a consolidarse como unidad social básica. Los padres empezaron a asumir mayor responsabilidad afectiva y educativa sobre sus hijos.'
    ],
    concepto: 'Niño = formación y preparación para la vida adulta.'
  },
  {
    icon: '🏫', name: 'Edad Moderna', years: 'Siglos XVIII – XIX',
    color: '#10b981', bg: '#bbf7d0',
    img: '../Recursos/TimeLine/4.jpeg',
    items: ['Se consolida la figura del niño como ser en desarrollo.', 'Surgen instituciones educativas y pedagógicas.', 'Se valora la infancia como etapa especial, aunque aún subordinada al adulto.'],
    context: [
      'Jean-Jacques Rousseau en su obra Émile (1762) planteó que el niño nace bueno y es la sociedad quien lo corrompe. Propuso una educación natural, respetando los ritmos del desarrollo infantil.',
      'Johann Heinrich Pestalozzi desarrolló métodos pedagógicos basados en la observación y la experiencia directa. Sus escuelas para niños pobres fueron pioneras en Europa.',
      'La Revolución Industrial transformó la infancia: millones de niños trabajaban en fábricas y minas en condiciones inhumanas. Esto generó las primeras leyes de protección laboral infantil.'
    ],
    concepto: 'Niño = ser en desarrollo y educable.'
  },
  {
    icon: '⚖️', name: 'Siglo XIX', years: 'Siglo XIX',
    color: '#ec4899', bg: '#fbcfe8',
    img: '../Recursos/TimeLine/5.jpg',
    items: ['Se impulsa la educación como derecho.', 'Se promueve la idea de la infancia como etapa única y valiosa.', 'Comienzan a aparecer leyes y políticas de protección.'],
    context: [
      'Friedrich Fröbel creó el primer Kindergarten en 1837 en Alemania, reconociendo el juego como actividad fundamental del desarrollo infantil. Su propuesta revolucionó la educación temprana.',
      'En Inglaterra, las Factory Acts (1833–1878) prohibieron el trabajo de niños menores de 9 años en fábricas textiles y establecieron horas máximas de trabajo. Fue el primer marco legal de protección infantil.',
      'La escolarización obligatoria se extendió por Europa y América. Francia (1882), Alemania e Inglaterra establecieron la educación primaria gratuita y obligatoria, reconociendo el derecho a aprender.'
    ],
    concepto: 'Niño = ser a proteger y educar.'
  },
  {
    icon: '🌍', name: 'Siglo XX', years: '1924 – 1959',
    color: '#f97316', bg: '#fed7aa',
    img: '../Recursos/TimeLine/6.jpg',
    items: ['1924: Declaración de Ginebra (primer reconocimiento de derechos del niño).', '1959: Declaración de los Derechos del Niño.', 'Aumenta la protección y la atención integral a la infancia.'],
    context: [
      'La Declaración de Ginebra de 1924, impulsada por Eglantyne Jebb y Save the Children, fue el primer documento internacional que reconoció que los niños tienen derechos específicos que los adultos deben garantizar.',
      'Las guerras mundiales evidenciaron la vulnerabilidad extrema de la infancia. Millones de niños quedaron huérfanos, desplazados o mutilados, lo que aceleró la creación de organismos internacionales de protección.',
      'La Declaración de los Derechos del Niño de 1959 estableció 10 principios fundamentales, incluyendo el derecho a la educación, la salud, el juego y la protección contra la explotación.'
    ],
    concepto: 'Niño = protegido y asistido.'
  },
  {
    icon: '📜', name: 'Ley 1098 de 2006', years: 'Colombia 2006',
    color: '#14b8a6', bg: '#99f6e4',
    img: '../Recursos/TimeLine/7.jpg',
    items: ['Código de Infancia y Adolescencia (Colombia).', 'Reconoce a todas las personas menores de 18 años como sujetos de derechos.', 'Refuerza el principio de protección integral y el derecho a la educación inclusiva y de calidad.'],
    context: [
      'El Código de Infancia y Adolescencia reemplazó al Código del Menor de 1989, que tenía un enfoque tutelar. El nuevo código adoptó el enfoque de derechos, reconociendo a niños y adolescentes como ciudadanos plenos.',
      'La ley establece la corresponsabilidad entre la familia, la sociedad y el Estado en la garantía de derechos. Ningún actor puede eximirse de su responsabilidad frente a la protección de la infancia.',
      'Incluye el Sistema de Responsabilidad Penal para Adolescentes, que diferencia el tratamiento jurídico de menores del de adultos, priorizando la restauración y la reintegración social.'
    ],
    concepto: 'Niño, niña y adolescente = titulares de derechos.'
  },
  {
    icon: '🌈', name: 'Siglo XXI', years: 'Siglo XXI',
    color: '#e11d48', bg: '#fecdd3',
    img: '../Recursos/TimeLine/8.jpeg',
    items: ['Infancias diversas: culturales, sociales, étnicas, de género, territoriales.', 'Se promueve la participación activa en la familia, la escuela y la sociedad.', 'Hacia una educación inclusiva, equitativa y de calidad.'],
    context: [
      'El concepto de "infancias" en plural reconoce que no existe una sola forma de ser niño o niña. Las experiencias varían profundamente según el territorio, la cultura, el género, la etnia y la clase social.',
      'La tecnología digital ha transformado radicalmente la infancia contemporánea. Los niños son nativos digitales que interactúan con el mundo a través de pantallas, lo que plantea nuevos desafíos de protección y educación.',
      'El Objetivo de Desarrollo Sostenible 4 (ODS 4) de la ONU busca garantizar una educación inclusiva, equitativa y de calidad para todos los niños del mundo antes de 2030.'
    ],
    concepto: 'Infancias diversas, participativas y con derechos.'
  }
];

// ===== HERO PRE-TIMELINE =====
const tlHeroTitle = document.getElementById('tlHeroTitle');
const tlCtaBtn    = document.getElementById('tlCtaBtn');
const TL_TITLE    = 'De la Antigüedad al Siglo XXI';

function startHeroTypewriter() {
  if (!tlHeroTitle || tlHeroTitle.dataset.typed) return;
  tlHeroTitle.dataset.typed = '1';
  tlHeroTitle.textContent = '';
  tlHeroTitle.classList.add('typing');
  let i = 0;
  const tick = () => {
    tlHeroTitle.textContent = TL_TITLE.slice(0, ++i);
    if (i < TL_TITLE.length) setTimeout(tick, 45);
    else tlHeroTitle.classList.remove('typing');
  };
  setTimeout(tick, 300);
}

if (tlCtaBtn) {
  tlCtaBtn.addEventListener('click', () => {
    document.querySelector('.gtl-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const heroObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { startHeroTypewriter(); heroObs.disconnect(); }
}, { threshold: 0.3 });
if (tlHeroTitle) heroObs.observe(tlHeroTitle.closest('.tl-hero'));

// ===== COUNTER ANIMADO STATS =====
function animateCounter(el, target, duration = 1200) {
  const isNum = /^\d+$/.test(target);
  if (!isNum) { el.textContent = target; return; }
  const end = parseInt(target);
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * end);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ===== RIPPLE EN PARADAS =====
function spawnRipple(btn, e) {
  const r = document.createElement('span');
  r.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
  btn.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
}

// ===== TYPEWRITER EN TÍTULO DEL PANEL =====
let twTimer = null;
function typewriter(el, text, speed = 28) {
  clearTimeout(twTimer);
  el.textContent = '';
  el.classList.add('typing');
  let i = 0;
  const tick = () => {
    el.textContent = text.slice(0, ++i);
    if (i < text.length) twTimer = setTimeout(tick, speed);
    else el.classList.remove('typing');
  };
  tick();
}

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
  if (tabId === 'historica' && tlHeroTitle) {
    delete tlHeroTitle.dataset.typed;
    tlHeroTitle.textContent = '';
    setTimeout(startHeroTypewriter, 400);
  }
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

// ===== GAME TIMELINE =====
const gtlPanel      = document.getElementById('gtlPanel');
const gtlPanelInner = document.getElementById('gtlPanelInner');
const gtlImg        = document.getElementById('gtlPanelImg');
const gtlBadge      = document.getElementById('gtlPanelBadge');
const gtlTag        = document.getElementById('gtlPanelTag');
const gtlTitle      = document.getElementById('gtlPanelTitle');
const gtlYears      = document.getElementById('gtlPanelYears');
const gtlList       = document.getElementById('gtlPanelList');
const gtlItemCtx    = document.getElementById('gtlItemCtx');
const gtlConcepto   = document.getElementById('gtlPanelConcepto');
const gtlPrev       = document.getElementById('gtlPrev');
const gtlNext       = document.getElementById('gtlNext');
const gtlClose      = document.getElementById('gtlClose');
const gtlFill       = document.getElementById('gtlFill');
const gtlLabel      = document.getElementById('gtlLabel');
const win7Notif     = document.getElementById('win7Notif');
const win7Icon      = document.getElementById('win7Icon');
const win7Title     = document.getElementById('win7Title');
const win7Text      = document.getElementById('win7Text');
const win7Close     = document.getElementById('win7Close');

const visited = new Set();
let current = -1;
let activeItemIdx = -1;

function updateProgress() {
  const pct = (visited.size / STATIONS.length) * 100;
  gtlFill.style.width = pct + '%';
  gtlLabel.textContent = `${visited.size} de ${STATIONS.length} etapas exploradas`;
}

// ===== NOTIFICACIÓN WIN7 =====
function showWin7(s, itemIdx, anchorEl) {
  win7Icon.src  = s.img;
  win7Icon.alt  = s.name;
  win7Title.textContent = s.items[itemIdx];
  win7Text.textContent  = s.context[itemIdx];
  win7Notif.hidden = false;
  win7Notif.style.animation = 'none';
  win7Notif.offsetHeight;
  win7Notif.style.animation = '';
  win7Notif.style.borderTopColor = s.color;

  // Posicionar junto al ítem usando coordenadas de viewport (fixed)
  const rect = anchorEl.getBoundingClientRect();
  const notifW = 268;
  const gap = 10;
  const spaceRight = window.innerWidth - rect.right;
  const tail = win7Notif.querySelector('.win7-notif-tail');

  if (spaceRight >= notifW + gap) {
    // Aparece a la derecha del ítem
    win7Notif.style.left = (rect.right + gap) + 'px';
    tail.style.cssText = 'left:-8px;right:auto;border-right:8px solid #c5dff5;border-left:none;';
  } else {
    // Aparece a la izquierda
    win7Notif.style.left = (rect.left - notifW - gap) + 'px';
    tail.style.cssText = 'left:auto;right:-8px;border-left:8px solid #c5dff5;border-right:none;';
  }
  win7Notif.style.top = Math.max(8, rect.top + rect.height / 2 - 30) + 'px';
  win7Notif.style.width = notifW + 'px';
}

function hideWin7() {
  win7Notif.hidden = true;
  activeItemIdx = -1;
  document.querySelectorAll('#gtlPanelList li').forEach(l => l.classList.remove('ctx-active'));
}

if (win7Close) win7Close.addEventListener('click', hideWin7);

// ===== CONTEXTO DE ÍTEM (legacy, ya no se usa visualmente) =====
function showItemContext() {}
function hideItemContext() { hideWin7(); }

function renderPanel(idx, direction = 0) {
  const s = STATIONS[idx];

  if (current !== -1 && current !== idx) {
    gtlPanelInner.style.transition = 'opacity .15s, transform .15s';
    gtlPanelInner.style.opacity = '0';
    gtlPanelInner.style.transform = `translateX(${direction > 0 ? '-40px' : '40px'})`;
  }

  hideItemContext();
  hideWin7();

  setTimeout(() => {
    gtlImg.src = s.img;
    gtlImg.alt = s.name;
    gtlBadge.textContent = `${s.icon} Etapa ${idx + 1}`;
    gtlTag.textContent = `Etapa ${idx + 1}`;
    gtlTag.style.background = s.color;
    gtlYears.textContent = s.years;
    gtlYears.style.background = s.color;
    // Re-disparar animación del badge de años
    gtlYears.style.animation = 'none';
    gtlYears.offsetHeight;
    gtlYears.style.animation = '';
    gtlConcepto.innerHTML = `<strong>Concepto clave:</strong> ${s.concepto}`;
    gtlConcepto.style.background = '';
    gtlConcepto.style.color = '#e2e8f0';
    gtlPanel.style.setProperty('--gtl-color', s.color);
    gtlTitle.style.color = s.color;

    typewriter(gtlTitle, `${s.icon} ${s.name}`);

    gtlList.innerHTML = '';
    s.items.forEach((it, i) => {
      const li = document.createElement('li');
      li.textContent = it;
      li.style.animationDelay = `${.08 + i * .1}s`;
      li.dataset.ctxIdx = i;
      li.title = 'Haz clic para más contexto';
      gtlList.appendChild(li);
    });

    gtlConcepto.style.animation = 'none';
    gtlConcepto.offsetHeight;
    gtlConcepto.style.animation = '';

    gtlPrev.disabled = idx === 0;
    gtlNext.disabled = idx === STATIONS.length - 1;

    gtlPanelInner.style.transition = 'opacity .28s, transform .28s';
    gtlPanelInner.style.opacity = '1';
    gtlPanelInner.style.transform = 'translateX(0)';
  }, current !== -1 && current !== idx ? 160 : 0);

  if (gtlPanel.hidden) {
    gtlPanel.hidden = false;
    setTimeout(() => gtlPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }

  document.querySelectorAll('.gtl-stop').forEach(b => b.classList.remove('active'));
  document.querySelector(`.gtl-stop[data-idx="${idx}"]`)?.classList.add('active', 'visited');

  visited.add(idx);
  updateProgress();
  current = idx;
}

// Clicks en paradas — con ripple
document.addEventListener('click', e => {
  const stop = e.target.closest('.gtl-stop[data-idx]');
  if (stop) { spawnRipple(stop, e); renderPanel(+stop.dataset.idx); return; }

  // Click en ítem de la lista
  const li = e.target.closest('#gtlPanelList li[data-ctx-idx]');
  if (li) {
    const i = +li.dataset.ctxIdx;
    const s = STATIONS[current];
    if (activeItemIdx === i) {
      hideWin7();
    } else {
      document.querySelectorAll('#gtlPanelList li').forEach(l => l.classList.remove('ctx-active'));
      li.classList.add('ctx-active');
      activeItemIdx = i;
      showWin7(s, i, li);
    }
  }
});

gtlPrev.addEventListener('click', () => renderPanel(current - 1, -1));
gtlNext.addEventListener('click', () => renderPanel(current + 1, 1));
gtlClose.addEventListener('click', () => {
  gtlPanel.hidden = true;
  document.querySelectorAll('.gtl-stop').forEach(b => b.classList.remove('active'));
  current = -1;
});

document.addEventListener('keydown', e => {
  if (gtlPanel.hidden) return;
  if (e.key === 'ArrowRight' && current < STATIONS.length - 1) renderPanel(current + 1, 1);
  if (e.key === 'ArrowLeft'  && current > 0)                   renderPanel(current - 1, -1);
  if (e.key === 'Escape') gtlClose.click();
});

// ===== INTERSECTION OBSERVER — REVEAL + COUNTERS =====
let observer;
function observeReveal() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      const num = entry.target.querySelector('.stat-num');
      if (num && !num.dataset.counted) {
        num.dataset.counted = '1';
        animateCounter(num, num.textContent.trim());
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.tab-section.active .reveal').forEach(el => observer.observe(el));
}

// ===== INIT =====
const initialSection = document.getElementById('inicio');
initialSection.style.display = 'block';
initialSection.offsetHeight;
initialSection.classList.add('active');
observeReveal();

// ===== GALERÍA DAZA =====
(function initGallery() {
  const gallery = document.getElementById('dazaGallery');
  if (!gallery) return;
  const slides = gallery.querySelectorAll('.gallery-slide');
  const dots   = gallery.querySelectorAll('.gallery-dot');
  const counter = document.getElementById('galleryCounter');
  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    if (counter) counter.textContent = `${current + 1} / ${slides.length}`;
  }

  function autoPlay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 3500);
  }

  document.getElementById('galleryPrev')?.addEventListener('click', () => { goTo(current - 1); autoPlay(); });
  document.getElementById('galleryNext')?.addEventListener('click', () => { goTo(current + 1); autoPlay(); });
  dots.forEach(dot => dot.addEventListener('click', () => { goTo(+dot.dataset.slide); autoPlay(); }));

  autoPlay();
})();
