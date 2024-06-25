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
