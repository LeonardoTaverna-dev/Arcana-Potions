/* Aplicado antes da página aparecer, evitando um flash do tema anterior. */
(() => {
  try {
    const saved = localStorage.getItem('arcanaTema');
    document.documentElement.dataset.theme = saved === 'sangue' || saved === 'eclipse' ? 'eclipse' : 'noturno';
  } catch {
    document.documentElement.dataset.theme = 'noturno';
  }
})();
