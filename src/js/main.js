'use strict';

// Menu responsivo
const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.header-nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
  siteNav?.classList.toggle('open', !expanded);
});
siteNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menu');
}));

// Comparadores: teclado, toque, mouse e controle deslizante.
document.querySelectorAll('[data-comparison]').forEach(comparison => {
  const slider = comparison.querySelector('.comparison-range');
  if (!slider) return;
  const apply = value => {
    const clamped = Math.max(0, Math.min(100, Number(value)));
    comparison.style.setProperty('--split', `${clamped}%`);
    slider.value = String(clamped);
  };
  slider.addEventListener('input', () => apply(slider.value));
  comparison.addEventListener('pointerdown', event => {
    if (event.target.closest('a,button')) return;
    const rect = comparison.getBoundingClientRect();
    apply(Math.round((event.clientX - rect.left) / rect.width * 100));
  });
  apply(slider.value);
});

// Detalhes dos dois locais com as fotos reais enviadas.
const projects = {
  se: {
    title: 'Catedral da Sé de Olinda',
    image: 'assets/images/projetos/projeto-01-catedral-da-se/referencia.jpg',
    description: 'Referência arquitetônica da Catedral da Sé de Olinda. O projeto busca apresentar digitalmente suas formas, sua fachada e seus principais elementos estruturais.'
  },
  bica: {
    title: 'Bica de São Pedro',
    image: 'assets/images/projetos/projeto-02-bica-de-sao-pedro/referencia.jpg',
    description: 'Referência da Bica de São Pedro, em Olinda. O modelo 3D pretende tornar mais acessíveis seus volumes, proporções e detalhes arquitetônicos.'
  }
};
const dialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!dialog || !project) return;
    dialog.querySelector('#dialog-title').textContent = project.title;
    dialog.querySelector('#dialog-image').src = project.image;
    dialog.querySelector('#dialog-image').alt = `Foto de referência: ${project.title}`;
    dialog.querySelector('#dialog-description').textContent = project.description;
    dialog.showModal();
  });
});
dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
