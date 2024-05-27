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
  { text: 'Recetas personalizadas', url: 'recetasPerso.html' },
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
      { title: "Receta 1", image: "receta1.jpg", url: "recipe1.html" },
      { title: "Receta 2", image: "receta2.jpg", url: "recipe2.html" },
      { title: "Receta 3", image: "receta3.jpg", url: "recipe3.html" },

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
      { title: "Postre 1", image: "postre1.jpg", url: "recipe4.html" },
      { title: "Postre 2", image: "postre2.jpg", url: "recipe5.html" },
      { title: "Postre 3", image: "postre3.jpg", url: "recipe6.html" },

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

