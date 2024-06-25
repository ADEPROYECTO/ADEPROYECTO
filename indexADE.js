
//BUSCADOR HECHO POR EMILIA ESPINOZA
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
        { title: "Receta 1", image: "receta1.jpg", url: "recipe1.html" },
        { title: "Receta 2", image: "receta2.jpg", url: "recipe2.html" },
        { title: "Receta 3", image: "receta3.jpg", url: "recipe3.html" },
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






//CATALOGOOOOOOO HECHO POR ASHLEY VAZQUEZ
document.addEventListener('DOMContentLoaded', function() {
  const carruselInner = document.getElementById('carruselInner');
  const botonesControl = document.getElementById('botonesControl');

  const recetas = [
    { src: 'arroz con pollo.jpg', alt: 'arroz con pollo', link: 'ArrozConPollo.html' },
    { src: 'Crema de Verduras.jpg', alt: 'Crema de Verduras', link: 'CremaconVerduras.html' },
    { src: 'Ensalada de atun y frijoles.jpg', alt: 'Ensalada de atun y frijoles', link: 'Ensalada de pasta con atun.html' },
    { src: 'Crema de lentejas.jpg', alt: 'Crema de lentejas', link: 'Crema de lentejas.html' },
    { src: 'Ensalada de pasta fria.jpg', alt: 'Ensalada de pasta fria', link: 'Ensalada de pasta fria.html' },
    { src: 'Ensalada de tomate y queso.jpg', alt: 'Ensalada de tomate y queso', link: 'Ensalada de tomate y queso.html' },
    { src: 'Sandwich de atun.jpg', alt: 'Sandwich de atun', link: 'Sandwich de atun.html' },
    { src: 'Sopa de fideos con pollo.jpg', alt: 'Sopa de fideos con pollo', link: 'Sopa de fideos con pollo.html' },
    { src: 'Tortilla de verdura.jpg', alt: 'Tortilla de verdura.', link: 'Tortilla de verdura.html' },
    { src: 'arroz con pollo.jpg', alt: 'arroz con pollo', link: 'ArrozConPollo.html' },
    { src: 'Crema de Verduras.jpg', alt: 'Crema de Verduras', link: 'CremaconVerduras.html' },
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

//ANUNCIO HECHO POR ALAN DURON
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



