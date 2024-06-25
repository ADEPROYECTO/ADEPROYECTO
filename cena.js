//Emilia Espinoza
document.addEventListener('DOMContentLoaded', function() {
  const carruselInner = document.getElementById('carruselInner');
  const botonesControl = document.getElementById('botonesControl');

  const recetas = [
    { src: 'arroz con pollo.jpg', alt: 'arroz con pollo', link: 'ArrozConPollo.html' },
    { src: 'omeletteChamp.jpg', alt: 'Omelette de champiñon', link: 'omeletteChamp.html' },
    { src: 'quesadillasEsp.jpg', alt: 'Quesadillas con espinaca', link: 'quesadillaEsp.html' },
    { src: 'sandwichHuevo.jpg', alt: 'Sandwich de huevo', link: 'sandwichHuevo.html' },
    { src: 'sandwichPollo.jpg', alt: 'sandwich de pollo', link: 'sandwichPollo.html' },
    { src: 'omeletteQueso.jpg', alt: 'omelette de queso', link: 'omeletteQueso.html' },
    { src: 'Sandwich de atun.jpg', alt: 'Sandwich de atun', link: 'Sandwich de atun.html' },
    { src: 'Ensalada de tomate y queso.jpg', alt: 'Ensalada', link: 'Ensalada de tomate y queso.html' },
    { src: 'Sopa de fideos con pollo.jpg', alt: 'sopa', link: 'Sopa de fideos con pollo.html' },
    { src: 'natilla.jpg', alt: 'natilla', link: 'natilla.html' },
  ];

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
