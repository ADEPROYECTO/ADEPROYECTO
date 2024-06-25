// Emilia Espinoza
document.addEventListener('DOMContentLoaded', function() {
  const carruselInner = document.getElementById('carruselInner');
  const botonesControl = document.getElementById('botonesControl');

  const recetas = [
    { src: 'huevosRancheros.jpg', alt: 'Huevos Rancheros', link: 'huevosRancheros.html' },
    { src: 'omeletteChamp.jpg', alt: 'Omelette de Champiñon', link: 'omeletteChamp.html' },
    { src: 'omeletteQueso.jpg', alt: 'Omelette de Queso', link: 'omeletteQueso.html' },
    { src: 'quesadillasEsp.jpg', alt: 'Quesadillas con Espinaca', link: 'quesadillaEsp.html' },
    { src: 'sandwichHuevo.jpg', alt: 'Sandwich de Huevo', link: 'sandwichHuevo.html' },
    { src: 'sandwichPollo.jpg', alt: 'Sandwich de Pollo', link: 'sandwichPollo.html' },
    { src: 'Sandwich de atun.jpg', alt: 'Sandwich de Atún', link: 'Sandwich de atun.html' },
    { src: 'tostadaHuevo.jpg', alt: 'Tostadas con Huevo', link: 'tostadaHuevo.html' },
    { src: 'Tortilla de verdura.jpg', alt: 'Tortilla de Verdura', link: 'Tortilla de verdura.html' },
    { src: 'natilla.jpg', alt: 'Natilla', link: 'natilla.html' },
  ];

  // Función para crear las imágenes y añadirlas al carruselInner
  function cargarImagenes() {
    recetas.forEach((imagen, index) => {
      const img = document.createElement('img');
      img.src = imagen.src;
      img.alt = imagen.alt;
      img.classList.add('carrusel-Elem');
      img.style.display = index < 3 ? 'block' : 'none'; // Mostrar las primeras 3 imágenes
      img.addEventListener('click', () => {
        window.location.href = imagen.link;
      });
      carruselInner.appendChild(img);
    });
  }

  // Inicializar el carrusel
  cargarImagenes();

  const Elementos = document.querySelectorAll('.carrusel-Elem');
  let ActualIndice = 0;

  function actualizarCarrusel() {
    Elementos.forEach((Elem, index) => {
      if (index >= ActualIndice && index < ActualIndice + 3) {
        Elem.style.display = 'block';
      } else {
        Elem.style.display = 'none';
      }
    });
  }

  document.querySelector('.prev').addEventListener('click', () => {
    ActualIndice = Math.max(0, ActualIndice - 3);
    actualizarCarrusel();
  });

  document.querySelector('.next').addEventListener('click', () => {
    ActualIndice = Math.min(Elementos.length - 3, ActualIndice + 3);
    actualizarCarrusel();
  });

  actualizarCarrusel();
});
