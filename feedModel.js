const input = document.getElementById('archivo');
input.addEventListener('change', () => {
    const archivo = input.files[0];
    //hacer algo con el archivo cargado
})

const formulario = document.querySelector('form');
formulario.addEventListener('dragover', (evento) => {
  evento.preventDefault();
});
formulario.addEventListener('drop', (evento) => {
  evento.preventDefault();
  const archivo = evento.dataTransfer.files[0];
  // hacer algo con el archivo cargado
});

