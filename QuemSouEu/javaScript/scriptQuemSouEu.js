window.addEventListener("load", (event) => {
  new cursoreffects.fairyDustCursor();
});

document.addEventListener('DOMContentLoaded', function() {
  const movelFechavel = document.getElementsByClassName('janela');
  const barraTitulo = document.getElementsByClassName('barra-titulo');

  let isMouseDown = false;
  let offsetX, offsetY;

  barraTitulo.addEventListener('mousedown', function(event) {
      isMouseDown = true;
      offsetX = event.clientX - movelFechavel.offsetLeft;
      offsetY = event.clientY - movelFechavel.offsetTop;
  });

  document.addEventListener('mousemove', function(event) {
      if (isMouseDown) {
          movelFechavel.style.top = event.clientY - offsetY + 'px';
          movelFechavel.style.left = event.clientX - offsetX + 'px';
      }
  });

  document.addEventListener('mouseup', function() {
      isMouseDown = false;
  });

  const btnFechar = document.getElementsByClassName('btn-fechar');
  btnFechar.addEventListener('click', function() {
      movelFechavel.style.display = 'none';
  });
});
