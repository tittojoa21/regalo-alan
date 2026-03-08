document.addEventListener('DOMContentLoaded', () => {
  // Configuración de imágenes con posiciones optimizadas por tipo
  const cardsData = [
    { // 1: Portada
      type: 'portada',
      title: '🎂 10·03·2026 🎂',
      subtitle: 'Feliz primer cumple juntos',
      emojis: '🤍🥳',
      foto: 'alan1.jpeg',
      objectPosition: 'center 40%' // Centrado un poco más arriba
    },
    { // 2: Historia
      type: 'historia',
      title: '📖 Nuestra historia',
      quote: '“Cada palabra es un hilo que teje la historia que quiero armar con vos”',
      text: 'Todo comenzó con unas simples miradas, un encuentro inesperado. Yo sabía que tenías algo diferente.',
      date: '2·11·2025',
      extra: 'Conectamos al instante, hablamos por horas y desde ese día no nos separamos.',
      foto: 'alan2.jpeg',
      objectPosition: 'center 30%'
    },
    { // 3: Construcción
      type: 'construccion',
      title: '🏗️ Construyendo',
      text: 'Fuimos armando pedazo a pedazo nuestra pequeña vida',
      gracias: 'Gracias por llegar a mi vida 🤍',
      foto: 'alan3.jpeg',
      objectPosition: 'center 20%'
    },
    { // 4: Sentimiento
      type: 'sentimiento',
      title: '💭 Lo que siento',
      quote: 'No pasa un instante sin pensar en vos',
      text: 'Pienso en lo afortunada que soy por tener al hombre más bueno, gracioso y compañero.',
      infinito: 'hasta el infinito 🚀🐢 y vuelta en tortuga 🐢',
      pieza: 'vos sos mi pieza de rompecabezas 🧩',
      foto: 'alan4.jpeg',
      objectPosition: 'center 50%'
    },
    { // 5: Fotos dobles
      type: 'fotos_dobles',
      title: '📸 Momentos',
      fotos: [
        { file: 'alan5.jpeg', position: 'center 60%' },
        { file: 'alan6.jpeg', position: 'center 40%' }
      ],
      emoji: '💚💜'
    },
    { // 6: Razones 1
      type: 'razones1',
      title: '💚 Razones 💜',
      reasons: ['Me escuchas', 'Verte reír', 'Estás a mi lado', 'Me diste un hogar'],
      foto: 'alan7.jpeg',
      objectPosition: 'center 30%'
    },
    { // 7: Razones 2
      type: 'razones2',
      title: '💚 Más razones 💜',
      reasons: ['Nos ayudamos', 'Verte progresar', 'Eres el amor de mi vida'],
      foto: 'alan8.jpeg',
      objectPosition: 'center 45%'
    },
    { // 8: Familia
      type: 'familia',
      title: '🏡 Familia',
      text: 'Construimos el amor, la madurez y la familia que hoy tenemos',
      foto: 'alan9.jpeg',
      objectPosition: 'center 50%'
    },
    { // 9: Calendario (sin foto)
      type: 'calendario',
      title: '📅 Septiembre 2025'
    },
    { // 10: Infinito
      type: 'infinito',
      title: '✨ Infinito',
      quote: 'Mi amor por vos no tiene límites',
      tortuga: '🐢 ∞ 🐢'
    },
    { // 11: Recuerdo especial
      type: 'recuerdo',
      title: '🌟 Recuerdo',
      text: 'Cada momento a tu lado es especial',
      foto: 'alan1.jpeg',
      objectPosition: 'center 60%'
    },
    { // 12: Promesas
      type: 'promesas',
      title: '🤝 Promesas',
      text: 'Siempre voy a estar para vos, hoy y siempre',
      foto: 'alan3.jpeg',
      objectPosition: 'center 35%'
    },
    { // 13: Aventuras
      type: 'aventuras',
      title: '🌍 Aventuras',
      text: 'Nos quedan miles de aventuras por vivir juntos',
      foto: 'alan5.jpeg',
      objectPosition: 'center 25%'
    },
    { // 14: Gratitud
      type: 'gratitud',
      title: '💕 Gratitud',
      text: 'Gracias por cada sonrisa, cada abrazo, cada momento',
      foto: 'alan7.jpeg',
      objectPosition: 'center 55%'
    },
    { // 15: Cierre con collage
      type: 'cierre',
      title: '# Feliz Cumpleaños',
      footer: 'Cada palabra es un hilo que teje la historia que quiero construir con vos.',
      fotos: [
        { file: 'alan2.jpeg', position: 'center 40%' },
        { file: 'alan4.jpeg', position: 'center 30%' },
        { file: 'alan6.jpeg', position: 'center 50%' },
        { file: 'alan8.jpeg', position: 'center 45%' }
      ]
    }
  ];

  const container = document.getElementById('cardsContainer');
  const progressFill = document.getElementById('progressFill');
  const cardCounter = document.getElementById('cardCounter');
  const btnReiniciar = document.getElementById('btnReiniciar');
  const swipeHint = document.getElementById('swipeHint');
  
  let currentIndex = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let cardElements = [];

  function getImagePath(filename) {
    return `images/${filename}`;
  }

  function renderCards() {
    container.innerHTML = '';
    cardElements = [];
    
    for (let i = 0; i < Math.min(3, cardsData.length - currentIndex); i++) {
      const index = currentIndex + i;
      const card = cardsData[index];
      const cardDiv = document.createElement('div');
      cardDiv.className = `card card-${i}`;
      cardDiv.setAttribute('data-index', index);
      
      let html = '';
      
      switch(card.type) {
        case 'portada':
          html = `
            <div class="portada-content">
              <div class="fecha-badge">${card.title}</div>
              <h1 style="font-size:2.2rem; color:#1f3a1f; margin:1rem 0;">${card.subtitle}</h1>
              <div class="foto-container">
                <img src="${getImagePath(card.foto)}" alt="${card.fotoAlt}" 
                     style="object-position: ${card.objectPosition};" loading="eager">
                <div class="foto-overlay">${card.fotoAlt}</div>
              </div>
              <div style="font-size:4rem; margin:1.5rem 0; animation:pulse 2s infinite;">${card.emojis}</div>
            </div>
          `;
          break;
          
        case 'historia':
          html = `
            <h2><i class="fa-regular fa-heart"></i> ${card.title}</h2>
            <div class="foto-container">
              <img src="${getImagePath(card.foto)}" alt="Momento especial" 
                   style="object-position: ${card.objectPosition};" loading="eager">
            </div>
            <div class="frase-destacada">${card.quote}</div>
            <div class="texto-historia">${card.text}</div>
            <div style="background:linear-gradient(135deg, #e0f0d5, #f0e5ff); padding:1.2rem; border-radius:24px; margin-top:0.8rem; border:2px solid white;">
              <p style="font-size:1.1rem;"><strong>${card.date}</strong> ✨</p>
              <p style="font-size:1rem; margin-top:0.5rem;">${card.extra}</p>
            </div>
          `;
          break;
          
        case 'construccion':
          html = `
            <h2><i class="fa-regular fa-building"></i> ${card.title}</h2>
            <div class="foto-container">
              <img src="${getImagePath(card.foto)}" alt="Construyendo juntos" 
                   style="object-position: ${card.objectPosition};" loading="eager">
            </div>
            <div class="texto-historia" style="font-size:1.3rem; text-align:center;">${card.text}</div>
            <div style="background:#d4f0c0; border-radius:60px; padding:1.2rem; text-align:center; margin:1rem 0; font-size:1.5rem; border:3px solid white; box-shadow:0 5px 0 #80a06c; animation:pulse 2s infinite;">
              ${card.gracias}
            </div>
          `;
          break;
          
        case 'sentimiento':
          html = `
            <h2><i class="fa-regular fa-star"></i> ${card.title}</h2>
            <div class="foto-container">
              <img src="${getImagePath(card.foto)}" alt="Sentimiento" 
                   style="object-position: ${card.objectPosition};" loading="eager">
            </div>
            <div class="frase-destacada">${card.quote}</div>
            <div class="texto-historia">${card.text}</div>
            <div class="infinito-especial">
              <span>${card.infinito}</span>
            </div>
            <p style="font-size:1.6rem; margin-top:1rem; text-align:center;">${card.pieza}</p>
          `;
          break;
          
        case 'fotos_dobles':
          html = `
            <h2><i class="fa-regular fa-images"></i> ${card.title}</h2>
            <div class="fotos-grid">
              <div class="foto-grid-item">
                <img src="${getImagePath(card.fotos[0].file)}" alt="Momento 1" 
                     style="object-position: ${card.fotos[0].position};" loading="eager">
              </div>
              <div class="foto-grid-item">
                <img src="${getImagePath(card.fotos[1].file)}" alt="Momento 2" 
                     style="object-position: ${card.fotos[1].position};" loading="eager">
              </div>
            </div>
            <div style="font-size:3rem; text-align:center; margin:1.2rem 0; animation:pulse 2s infinite;">${card.emoji}</div>
          `;
          break;
          
        case 'razones1':
        case 'razones2':
          const reasonsHtml = card.reasons.map(r => 
            `<div class="razon-item"><i class="fa-regular fa-heart"></i> ${r}</div>`
          ).join('');
          
          html = `
            <h2>${card.title}</h2>
            ${card.foto ? `
              <div class="foto-container" style="height:160px;">
                <img src="${getImagePath(card.foto)}" alt="Nosotros" 
                     style="object-position: ${card.objectPosition};" loading="eager">
              </div>
            ` : ''}
            <div class="razones-grid">
              ${reasonsHtml}
            </div>
          `;
          break;
          
        case 'familia':
          html = `
            <h2><i class="fa-regular fa-heart"></i> ${card.title}</h2>
            <div class="foto-container">
              <img src="${getImagePath(card.foto)}" alt="Familia" 
                   style="object-position: ${card.objectPosition};" loading="eager">
            </div>
            <div style="background:#ebdcff; border-radius:36px; padding:1.8rem; font-size:1.5rem; text-align:center; border:3px solid white; margin-top:1rem; box-shadow:0 5px 0 #b89fd6;">
              ${card.text}
            </div>
          `;
          break;
          
        case 'calendario':
          const weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
          const days = Array(30).fill(0).map((_, i) => i + 1);
          
          html = `
            <h2><i class="fa-regular fa-calendar"></i> ${card.title}</h2>
            <div class="mini-calendario">
              <div style="display:flex; justify-content:space-between; margin-bottom:1.2rem;">
                <span style="font-weight:800; font-size:1.5rem; color:#2f4f2f;">Septiembre</span>
                <span style="color:#6f4f9f; font-weight:600; background:#f0e4ff; padding:0.2rem 1rem; border-radius:30px;">2025</span>
              </div>
              <div class="grid-calendario">
                ${weekDays.map(d => 
                  `<div style="font-weight:700; color:#6f4f9f; text-align:center; font-size:0.9rem;">${d}</div>`
                ).join('')}
                ${days.map(d => 
                  `<div class="dia-calendario">${d}</div>`
                ).join('')}
                ${Array(5).fill(0).map(() => 
                  `<div class="dia-calendario vacio"></div>`
                ).join('')}
              </div>
              <div style="display:flex; justify-content:space-between; margin-top:1.5rem; font-size:1.1rem;">
                <span style="background:#f0e4ff; padding:0.3rem 1.2rem; border-radius:30px;">◀ BACK</span>
                <span style="background:#d4c0ff; padding:0.3rem 1.2rem; border-radius:30px; color:#2f4f2f;">NEXT ▶</span>
              </div>
            </div>
          `;
          break;
          
        case 'infinito':
          html = `
            <h2><i class="fa-regular fa-star"></i> ${card.title}</h2>
            <div class="frase-destacada" style="font-size:1.8rem;">${card.quote}</div>
            <div style="font-size:6rem; text-align:center; margin:2rem 0; animation:spinSlow 8s infinite linear; filter:drop-shadow(0 10px 15px rgba(150,100,200,0.3));">
              ${card.tortuga}
            </div>
          `;
          break;
          
        case 'recuerdo':
        case 'promesas':
        case 'aventuras':
        case 'gratitud':
          html = `
            <h2><i class="fa-regular fa-heart"></i> ${card.title}</h2>
            <div class="foto-container">
              <img src="${getImagePath(card.foto)}" alt="${card.title}" 
                   style="object-position: ${card.objectPosition};" loading="eager">
            </div>
            <div style="background:#f0fae6; border-radius:32px; padding:1.5rem; font-size:1.4rem; text-align:center; margin-top:1rem; border:2px solid white; box-shadow:0 4px 0 #b0c89c;">
              ${card.text}
            </div>
          `;
          break;
          
        case 'cierre':
          const fotosHtml = card.fotos ? `
            <div class="fotos-grid" style="margin:1.5rem 0;">
              ${card.fotos.map(foto => `
                <div class="foto-grid-item">
                  <img src="${getImagePath(foto.file)}" alt="Recuerdo" 
                       style="object-position: ${foto.position};" loading="eager">
                </div>
              `).join('')}
            </div>
          ` : '';
          
          html = `
            <div class="cierre-content">
              <h1 style="font-size:2.4rem; color:#1f3a1f; margin-bottom:1rem;"># ${card.title}</h1>
              ${fotosHtml}
              <div class="frase-destacada" style="font-size:1.3rem; background:#fafff0;">${card.footer}</div>
              <div style="font-size:5rem; margin:2rem 0; animation:heartBeat 2s infinite;">💚💜🤍</div>
            </div>
          `;
          break;
      }
      
      cardDiv.innerHTML = html;
      container.appendChild(cardDiv);
      cardElements.push(cardDiv);
    }
    
    updateUI();
  }

  function updateUI() {
    const total = cardsData.length;
    const viewed = currentIndex + 1;
    progressFill.style.width = `${(viewed / total) * 100}%`;
    cardCounter.textContent = `${viewed}/${total}`;
    
    if (currentIndex >= total - 1) {
      swipeHint.style.opacity = '0';
      setTimeout(() => { swipeHint.style.display = 'none'; }, 300);
      btnReiniciar.style.display = 'flex';
    } else {
      swipeHint.style.display = 'flex';
      swipeHint.style.opacity = '0.9';
      btnReiniciar.style.display = 'none';
    }
  }

  function setupDragEvents() {
    const topCard = document.querySelector('.card-0');
    if (!topCard) return;
    
    topCard.addEventListener('touchstart', handleDragStart, { passive: false });
    topCard.addEventListener('touchmove', handleDragMove, { passive: false });
    topCard.addEventListener('touchend', handleDragEnd);
    topCard.addEventListener('touchcancel', handleDragEnd);
    
    topCard.addEventListener('mousedown', handleDragStart);
    topCard.addEventListener('mousemove', handleDragMove);
    topCard.addEventListener('mouseup', handleDragEnd);
    topCard.addEventListener('mouseleave', handleDragEnd);
  }

  function handleDragStart(e) {
    if (currentIndex >= cardsData.length - 1) return;
    
    const card = e.target.closest('.card-0');
    if (!card) return;
    
    e.preventDefault();
    isDragging = true;
    startX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    card.style.transition = 'none';
    card.style.cursor = 'grabbing';
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    
    const card = document.querySelector('.card-0');
    if (!card) return;
    
    currentX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    const diffX = currentX - startX;
    
    if (Math.abs(diffX) > 5) {
      const rotation = diffX * 0.012;
      const scale = 1 - Math.abs(diffX) * 0.0006;
      const opacity = 1 - Math.min(Math.abs(diffX) * 0.0012, 0.4);
      
      card.style.transform = `translateX(${diffX}px) rotate(${rotation}deg) scale(${scale})`;
      card.style.opacity = opacity;
    }
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    e.preventDefault();
    
    const card = document.querySelector('.card-0');
    if (!card) return;
    
    card.style.cursor = 'grab';
    
    const diffX = currentX - startX;
    
    if (Math.abs(diffX) > 70 && currentIndex < cardsData.length - 1) {
      const direction = diffX > 0 ? 1 : -1;
      card.style.transition = 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.transform = `translateX(${direction * 700}px) rotate(${direction * 20}deg) scale(0.7)`;
      card.style.opacity = '0';
      
      setTimeout(() => {
        currentIndex++;
        renderCards();
        setupDragEvents();
      }, 200);
    } else {
      card.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.transform = '';
      card.style.opacity = '1';
    }
    
    isDragging = false;
    startX = 0;
    currentX = 0;
  }

  btnReiniciar.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = 0;
    renderCards();
    setupDragEvents();
    swipeHint.style.display = 'flex';
    swipeHint.style.opacity = '0.9';
  });

  // Precargar primera imagen para mejorar experiencia
  const preloadImages = () => {
    const firstCard = cardsData[0];
    if (firstCard.foto) {
      const img = new Image();
      img.src = getImagePath(firstCard.foto);
    }
  };
  
  preloadImages();
  renderCards();
  setupDragEvents();
});