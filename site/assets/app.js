(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  themeBtn?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-plan]');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const key = chip.getAttribute('data-filter');
      cards.forEach((card) => {
        const tags = (card.getAttribute('data-tags') || '').split(',');
        card.hidden = key !== 'all' && !tags.includes(key);
      });
    });
  });

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = '已复制';
        setTimeout(() => (btn.textContent = '复制提示'), 1500);
      } catch (_) {}
    });
  });
})();
