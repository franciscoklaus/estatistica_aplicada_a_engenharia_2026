// Abre todos os <details> ao imprimir, para que as resoluções apareçam no papel.
window.addEventListener("beforeprint", function () {
  document.querySelectorAll("details").forEach(function (d) { d.open = true; });
});
