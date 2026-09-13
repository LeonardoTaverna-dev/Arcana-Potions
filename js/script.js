/* ARCANA POTIONS — interações compartilhadas. Sem bibliotecas externas. */
(() => {
  'use strict';
  const potions = window.ARCANA_POTIONS;
  const money = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const storage = {
    read(key) { try { return localStorage.getItem(key); } catch { return null; } },
    write(key, value) { try { localStorage.setItem(key, value); } catch { /* A interface funciona mesmo sem persistência. */ } }
  };
  let toastTimer;
  function notify(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3500);
  }

  // Tema: atualização imediata, sem filas de temporizadores.
  const themeButton = document.getElementById('temaBtn');
  function syncTheme() {
    const eclipse = document.documentElement.dataset.theme === 'eclipse';
    document.getElementById('temaTexto').textContent = eclipse ? 'Eclipse' : 'Noturno';
    themeButton.setAttribute('aria-pressed', String(eclipse));
    themeButton.setAttribute('aria-label', eclipse ? 'Ativar tema Noturno' : 'Ativar tema Eclipse');
  }
  syncTheme();
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'eclipse' ? 'noturno' : 'eclipse';
    document.documentElement.dataset.theme = theme;
    storage.write('arcanaTema', theme);
    syncTheme();
  });

  // Bolsa: somente identificadores conhecidos e quantidades entre 1 e 99.
  function readBag() {
    try {
      const value = JSON.parse(storage.read('arcanaBolsa') || '[]');
      if (!Array.isArray(value)) return [];
      const unique = new Map();
      value.forEach(item => {
        if (item && potions.some(p => p.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0) {
          unique.set(item.id, { id: item.id, quantity: Math.min(item.quantity, 99) });
        }
      });
      return [...unique.values()];
    } catch { return []; }
  }
  let bag = readBag();
  function updateCount() {
    document.querySelectorAll('[data-bag-count]').forEach(el => { el.textContent = bag.reduce((sum, item) => sum + item.quantity, 0); });
  }
  function saveBag() { storage.write('arcanaBolsa', JSON.stringify(bag)); updateCount(); }
  updateCount();

  // Os cartões permanecem em HTML, inclusive quando o JavaScript está desativado.
  const filters = document.querySelectorAll('[data-filter]');
  function filterBy(category) {
    let count = 0;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = category !== 'todos' && card.dataset.category !== category;
      if (!card.hidden) count++;
    });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    document.getElementById('filter-count').textContent = `${count} ${count === 1 ? 'fórmula' : 'fórmulas'}`;
  }
  filters.forEach(button => button.addEventListener('click', () => filterBy(button.dataset.filter)));

  // Ficha da poção: a URL seleciona somente um item do catálogo local.
  function bottle(p) {
    return `<div class="specimen specimen-large" style="--potion:${p.color}" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="orbit-star">✧</span><div class="bottle"><div class="bottle-cork"></div><div class="bottle-neck"></div><div class="bottle-glass"><div class="bottle-liquid"></div><div class="bottle-label"><span>ARCANA</span><b>✦</b><small>NO. ${p.code}</small></div></div></div></div>`;
  }
  const detail = document.getElementById('product-detail');
  if (detail) {
    const potion = potions.find(p => p.id === new URLSearchParams(location.search).get('id'));
    if (!potion) {
      detail.innerHTML = '<div class="empty-state"><h1>Essência não encontrada.</h1><p>Esta fórmula não faz parte do arquivo.</p><a class="button" href="pocoes.html">Explorar as poções ↗</a></div>';
    } else {
      document.title = `${potion.name} | Arcana Potions`;
      detail.innerHTML = `<div class="product-layout">${bottle(potion)}<div class="product-copy"><p class="eyebrow">Fórmula ${potion.code} / ${potion.label}</p><h1>${potion.name}</h1><p>${potion.description}</p><dl class="product-facts"><div><dt>Efeito</dt><dd>${potion.effect}</dd></div><div><dt>Duração</dt><dd>${potion.hours} ${potion.hours === 1 ? 'hora' : 'horas'}</dd></div></dl><p class="product-warning"><strong>No universo da história</strong>${potion.side}</p><div class="product-price">${money(potion.price)}<small>Valor fictício · sem pagamento</small></div><button class="button" id="add-potion" type="button">Adicionar à bolsa +</button><p>${potion.lore}</p></div></div>`;
      document.getElementById('add-potion').addEventListener('click', () => {
        const existing = bag.find(item => item.id === potion.id);
        if (existing?.quantity === 99) { notify('Limite de 99 frascos por fórmula.'); return; }
        if (existing) existing.quantity++; else bag.push({ id: potion.id, quantity: 1 });
        saveBag();
        notify(`${potion.name} adicionada à bolsa.`);
      });
    }
  }

  // Renderização e ações da bolsa fictícia. Nenhuma requisição é enviada.
  const bagContent = document.getElementById('bag-content');
  function renderBag() {
    if (!bagContent) return;
    if (!bag.length) {
      bagContent.innerHTML = '<div class="empty-state"><p class="eyebrow">O próximo capítulo espera</p><h2>Sua bolsa está vazia.</h2><p>Escolha uma essência para começar sua coleção.</p><a class="button" href="pocoes.html">Explorar as poções ↗</a></div>';
      return;
    }
    const total = bag.reduce((sum, item) => sum + potions.find(p => p.id === item.id).price * item.quantity, 0);
    bagContent.innerHTML = `<div class="bag-layout"><div>${bag.map(item => {
      const p = potions.find(p => p.id === item.id);
      return `<article class="bag-item"><div><h2><a href="produto.html?id=${p.id}">${p.name}</a></h2><p>${p.label} · ${money(p.price)} por frasco</p><div class="quantity" role="group" aria-label="Quantidade de ${p.name}"><button type="button" data-action="decrease" data-id="${p.id}" aria-label="Diminuir quantidade de ${p.name}" ${item.quantity === 1 ? 'disabled' : ''}>−</button><span>${item.quantity}</span><button type="button" data-action="increase" data-id="${p.id}" aria-label="Aumentar quantidade de ${p.name}" ${item.quantity === 99 ? 'disabled' : ''}>+</button></div><button type="button" class="remove-button" data-action="remove" data-id="${p.id}" aria-label="Remover ${p.name} da bolsa">Remover</button></div><strong>${money(item.quantity * p.price)}</strong></article>`;
    }).join('')}</div><aside class="bag-summary"><h2>Sua coleção</h2><div class="bag-total"><span>Total fictício</span><strong>${money(total)}</strong></div><button class="button" type="button" data-action="finish">Concluir simulação ↗</button><p>Uma experiência escolar. Sem cobrança, entrega ou coleta de dados pessoais.</p></aside></div>`;
  }
  renderBag();
  bagContent?.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === 'finish') {
      bag = []; saveBag();
      bagContent.innerHTML = '<div class="empty-state"><p class="eyebrow">Simulação concluída</p><h2 tabindex="-1" id="completion-title">Seu capítulo foi escrito.</h2><p>A bolsa foi esvaziada. Nenhum pedido foi enviado e nenhum pagamento foi realizado.</p><a class="button" href="pocoes.html">Voltar ao arquivo ↗</a></div>';
      document.getElementById('completion-title').focus();
      return;
    }
    const item = bag.find(entry => entry.id === id);
    if (!item) return;
    if (action === 'increase') item.quantity = Math.min(99, item.quantity + 1);
    if (action === 'decrease') item.quantity = Math.max(1, item.quantity - 1);
    if (action === 'remove') bag = bag.filter(entry => entry.id !== id);
    saveBag(); renderBag();
    const replacement = bagContent.querySelector(`[data-action="${action}"][data-id="${id}"]:not(:disabled)`) || bagContent.querySelector('button:not(:disabled), a');
    replacement?.focus();
    notify(action === 'remove' ? 'Poção removida da bolsa.' : 'Quantidade atualizada.');
  });
  window.addEventListener('storage', event => {
    if (event.key === 'arcanaBolsa' || event.key === null) { bag = readBag(); updateCount(); renderBag(); }
  });
})();
