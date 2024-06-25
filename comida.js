//Emilia Espinoza
document.addEventListener('DOMContentLoaded', function() {
  const carruselInner = document.getElementById('carruselInner');
  const botonesControl = document.getElementById('botonesControl');

 const recetas = [
    { src: 'Ensalada de tomate y queso.jpg', alt: 'Ensalada de tomate y queso', link: 'Ensalada de tomate y queso.html' },
    { src: 'Ensalada de atun y frijoles.jpg', alt: 'Ensalada de atun y frijoles', link: 'Ensalada de pasta con atun.html' },
    { src: 'Crema de Verduras.jpg', alt: 'Crema de Verduras', link: 'CremaconVerduras.html' },
    { src: 'Crema de lentejas.jpg', alt: 'Crema de lentejas', link: 'Crema de lentejas.html' },
    { src: 'Ensalada de pasta fria.jpg', alt: 'Ensalada de pasta fria', link: 'Ensalada de pasta fria.html' },
    { src: 'Sandwich de atun.jpg', alt: 'Sandwich de atun', link: 'Sandwich de atun.html' },
    { src: 'arroz con pollo.jpg', alt: 'arroz con pollo', link: 'ArrozConPollo.html' },
    { src: 'Sopa de fideos con pollo.jpg', alt: 'Sopa de fideos con pollo', link: 'Sopa de fideos con pollo.html' },
    { src: 'Tortilla de verdura.jpg', alt: 'Tortilla de verdura.', link: 'Tortilla de verdura.html' },
    { src: 'arroz con pollo.jpg', alt: 'arroz con pollo', link: 'ArrozConPollo.html' },
    { src: 'Crema de Verduras.jpg', alt: 'Crema de Verduras', link: 'CremaconVerduras.html'},
   
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
