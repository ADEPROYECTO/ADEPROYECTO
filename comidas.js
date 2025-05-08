const busquedaDiv = document.getElementById('barraDiv');

const inputBuscar = document.createElement('input');
const ulResultado = document.createElement('ul');

inputBuscar.setAttribute('type', 'text');
inputBuscar.setAttribute('id', 'buscar');
inputBuscar.setAttribute('placeholder', 'Buscar...');
ulResultado.setAttribute('id', 'resultado');

// Insertar los elementos en el contenedor
busquedaDiv.appendChild(inputBuscar);
busquedaDiv.appendChild(ulResultado);

function buscador() {
    const buscar = document.getElementById('buscar');
    const query = buscar.value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    const recetas = [
        { image: 'Ensalada de tomate y queso.jpg', title: 'Ensalada de tomate y queso', url: 'Ensalada de tomate y queso.html' },        
        { image: 'tacosPollo.jpg', title: 'Tacos de Pollo', url: 'tacosPollo.html' },        
        { image: "caldoVerduras.jpg", title: 'Caldo de verduras' , url: "caldoVerduras.html" },
        { image: "pastaTomate.jpg", title: 'Pasta de tomate' , url: "pastaTomate.html" },
        { image: "caldoPollo.jpg", title: 'Caldo de pollo' , url: "caldoPollo.html" },
        { image: 'Crema de lentejas.jpg', title: 'Crema de lentejas', url: 'Crema de lentejas.html' },
        { image: 'Ensalada de pasta fria.jpg', title: 'Ensalada de pasta fria', url: 'Ensalada de pasta fria.html' },
        { image: 'Ensalada de tomate y queso.jpg', title: 'Ensalada de tomate y queso', url: 'Ensalada de tomate y queso.html' },
        { image: 'Sandwich de atun.jpg', title: 'Sandwich de atun', url: 'Sandwich de atun.html' },
    ];
   
    recetas.forEach(receta => {
        if (receta.title.toLowerCase().includes(query)) {
            const enlace = document.createElement('a');
            enlace.href = receta.url;
            enlace.innerText = receta.title;

            const imagen = document.createElement('img');
            imagen.src = receta.image;
            imagen.alt = receta.title;
            imagen.style.display = 'block'; // Para que la imagen aparezca debajo del enlace

            resultado.appendChild(enlace);
            resultado.appendChild(imagen);
        }
    });
}

document.getElementById('buscar').addEventListener('input', buscador);


//MENU HECHO POR BRISA URREA

const menuDiv = document.getElementById('menu');


const opciones = [
  { text: 'Desayuno', url: 'desayunos.html' },
  { text: 'Comida', url: 'comida.html' },
  { text: 'Cena', url: 'cena.html' },
  { text: 'Contáctanos', url: 'contactoADE.html' }
];

const pTitulo1 = document.createElement('p');
pTitulo1.textContent = 'Opciones para ti';
pTitulo1.setAttribute('id', 'pTitulo1');
menuDiv.appendChild(pTitulo1);

const ulMenu= document.createElement('ul');
ulMenu.setAttribute('id', 'liOpciones');
menuDiv.appendChild(ulMenu);

opciones.forEach(opcion => {
  const liOpciones = document.createElement('li');
  const link = document.createElement('a');
  link.href = opcion.url;
  link.textContent = opcion.text;
  liOpciones.appendChild(link);
  ulMenu.appendChild(liOpciones);
});

menuDiv.appendChild(ulMenu);



// Emilia Espinoza
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
    { src: 'pastaTomate.jpg', alt: 'Pasta de Tomate', link: 'pastaTomate.html' },
    { src: 'Sopa de fideos con pollo.jpg', alt: 'Sopa de fideos con pollo', link: 'Sopa de fideos con pollo.html' },
    { src: 'papasQueso.jpg', alt: 'Papas con queso.', link: 'papasQueso.html' },
    { src: 'polloLimon.jpg', alt: 'Pollo con limon', link: 'polloLimon.html' },
    { src: 'Crema de Verduras.jpg', alt: 'Crema de Verduras', link: 'CremaconVerduras.html'},
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

const anuncioDiv = document.getElementById('anuncio');
const imagen = document.createElement('img');

   
imagen.src = 'anuncioimg.png'; //
imagen.alt = 'Anuncio';
anuncioDiv.appendChild(imagen);



 //RELOJ
 function ActualizarReloj() {
  // body...

  //crear objeto
  var LAHORA = new Date();
  var HORA = LAHORA.getHours();
  var MINS = LAHORA.getMinutes();
  var SEG = LAHORA.getSeconds();
  var DIA = LAHORA.getDate();
  var DIASEMANA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][LAHORA.getDay()];
  var MES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][LAHORA.getMonth()];
  var ANIO = LAHORA.getFullYear();


  var timeFormat = DIASEMANA+" "+DIA+" de "+MES+" de "+ANIO+". "+HORA + ":" + MINS + ":" + SEG+" "+"Horas";

  document.getElementById("reloj").textContent = timeFormat;
}

setInterval(ActualizarReloj,1000);

ActualizarReloj();
