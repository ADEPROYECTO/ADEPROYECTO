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
        { image: 'Ensalada de tomate y queso.jpg', title: 'Ensalada de tomate y queso', url: 'Ensalada de tomate y queso.html' },        
        { image: 'omeletteQueso.jpg', title: 'Omelette de queso', url: 'omeletteQueso.html' },        
        { image: "manzanasHorno.jpg", title: 'Manzanas al horno' , url: "manzanasHorno.html" },
        { image: "pastaTomate.jpg", title: 'Pasta de tomate' , url: "pastaTomate.html" },
        { image: "platanoFrito.jpg", title: 'Platano frito' , url: "platano frito.html" },
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
  { text: 'Comida', url: 'comidas.html' },
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
const catalogoDiv = document.getElementById('catalogo');

const hRecetas = document.createElement('h2');
hRecetas.textContent = 'Recetas recomendadas';
catalogoDiv.appendChild(hRecetas);

    const recetas = [
      { image: 'omeletteQueso.jpg', title: 'Omelette de queso', url: 'omeletteQueso.html' },        
      { image: "manzanasHorno.jpg", title: 'Manzanas al horno' , url: "manzanasHorno.html" },
      { image: "pastaTomate.jpg", title: 'Pasta de tomate' , url: "pastaTomate.html" },

    ];

    recetas.forEach(receta => {
      const enlace = document.createElement('a');
      enlace.href = receta.url;
      enlace.classList.add('receta-link');

      const imagen = document.createElement('img');
      imagen.src = receta.image;
      imagen.alt = receta.title;
      imagen.classList.add('receta-img');

      enlace.appendChild(imagen);
      catalogoDiv.appendChild(enlace);
    });

const hPostres = document.createElement('h2');
hPostres.textContent = 'Postres';
catalogoDiv.appendChild(hPostres);

    const postres = [
      { image: "platanoFrito.jpg", title: 'Platano frito' , url: "platano frito.html" },
      { image: "arrozLeche.jpg", title: 'Arroz con leche' , url: "arrozLeche.html" },      
      { image: "galletasAvena.jpg", title: 'Galletas de Avena' , url: "galletasAvena.html" },

    ];

    postres.forEach(postre => {
      const enlace = document.createElement('a');
      enlace.href = postre.url;
      enlace.classList.add('postre-link');

      const imagen = document.createElement('img');
      imagen.src = postre.image;
      imagen.alt = postre.title;
      imagen.classList.add('postre-img');

      enlace.appendChild(imagen);
      catalogoDiv.appendChild(enlace);
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
