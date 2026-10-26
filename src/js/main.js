// Alternância do viewport Antes / Depois.
// O estado visual fica no CSS, sem estilos embutidos no JavaScript.
(function () {
  var vAntes = document.getElementById('vista-antes');
  var vDepois = document.getElementById('vista-depois');
  var bAntes = document.getElementById('btn-antes');
  var bDepois = document.getElementById('btn-depois');

  function mostrar(antes) {
    vAntes.hidden = !antes;
    vDepois.hidden = antes;
    bAntes.setAttribute('aria-pressed', String(antes));
    bDepois.setAttribute('aria-pressed', String(!antes));
  }

  bAntes.addEventListener('click', function () { mostrar(true); });
  bDepois.addEventListener('click', function () { mostrar(false); });
})();

// Fallback preparado para futuras imagens do portfólio.
// Não afeta os placeholders atuais, que permanecem no HTML.
(function () {
  document.querySelectorAll('.project-images img').forEach(function (img) {
    function usarPlaceholder() {
      var span = document.createElement('span');
      span.className = 'project-placeholder';
      span.textContent = img.closest('.project-before')
        ? '[adicionar foto]'
        : '[adicionar render 3D]';
      img.replaceWith(span);
    }
    img.addEventListener('error', usarPlaceholder, { once: true });
    if (img.complete && img.naturalWidth === 0) usarPlaceholder();
  });
})();
