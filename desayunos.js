//Emilia Espinoza
document.addEventListener('DOMContentLoaded', function() {
  const carruselInner = document.getElementById('carruselInner');
  const botonesControl = document.getElementById('botonesControl');

  const recetas = [
    { src: 'huevosRancheros.jpg', alt: 'huevos rancheros', link: 'huevosRancheros.html' },
    { src: 'omeletteChamp.jpg', alt: 'Omelette de champiñon', link: 'omeletteChamp.html' },
    { src: 'omeletteQueso.jpg', alt: 'omelette de queso', link: 'omeletteQueso.html' },
    { src: 'quesadillasEsp.jpg', alt: 'Quesadillas con espinaca', link: 'quesadillaEsp.html' },
    { src: 'sandwichHuevo.jpg', alt: 'Sandwich de huevo', link: 'sandwichHuevo.html' },
    { src: 'sandwichPollo.jpg', alt: 'sandwich de pollo', link: 'sandwichPollo.html' },
    { src: 'Sandwich de atun.jpg', alt: 'Sandwich de atun', link: 'Sandwich de atun.html' },
    { src: 'tostadaHuevo.jpg', alt: 'Tostadas con huevos', link: 'tostadaHuevo.html' },
    { src: 'Tortilla de verdura.jpg', alt: 'Tortilla de verdura.', link: 'Tortilla de verdura.html' },
    { src: 'natilla.jpg', alt: 'natilla', link: 'natilla.html' },
    { src: 'tostadasAguacte.jpg', alt: 'tostadas de aguacate', link: 'tostadasAguacate.html' },
  ];

  recetas.forEach(imagen => {
    const img = document.createElement('img');
    img.src = imagen.src;
    img.alt = imagen.alt;
    img.classList.add('carrusel-Elem');
    img.addEventListener('click', () => {
      window.location.href = imagen.link;
    });
    carruselInner.appendChild(img);
  });

  const Elementos = document.querySelectorAll('.carrusel-Elem');
  let ActualIndice = 0;

  function actualizarCarrusel() {
    Elementos.forEach((Elem, index) => {
      Elem.classList.toggle('active', index >= ActualIndice && index < ActualIndice + 3);
    });
  }

  const btnanterior = document.createElement('button');
  btnanterior.textContent = '❮';
  btnanterior.classList.add('carrusel-control', 'prev');
  btnanterior.addEventListener('click', () => {
    ActualIndice = Math.max(0, ActualIndice - 3);
    actualizarCarrusel();
  });
  botonesControl.appendChild(btnanterior);

  const btnsiguiente = document.createElement('button');
  btnsiguiente.textContent = '❯';
  btnsiguiente.classList.add('carrusel-control', 'next');
  btnsiguiente.addEventListener('click', () => {
    ActualIndice = Math.min(Elementos.length - 3, ActualIndice + 3);
    actualizarCarrusel();
  });
  botonesControl.appendChild(btnsiguiente);

  actualizarCarrusel();
});
