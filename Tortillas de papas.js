document.addEventListener('DOMContentLoaded', function() {

const logo = document.createElement('img');

logo.src = '/logo.jpg';
logo.addEventListener('click', () => {
            window.location.href = 'index.html';

});

document.getElementById('logo').appendChild(logo);

});


//buscador
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


//anuncio
const anuncioDerecha = document.getElementById('anuncioDerecha');
const img = document.createElement('img');

    
img.src = 'anuncioimgDerecha.png'; //
img.alt = 'Anuncio';
anuncioDerecha.appendChild(img);


//insertar infoo

//CREAR ELEMENTOS
const pTitulo = document.createElement('p');
const liIngredientes = document.createElement('ul');
const pProcedimiento = document.createElement('p');
const imgReceta = document.createElement('img');

//CREAR LISTASS
pTitulo.textContent = 'Tortilla de papa';
const ingredientes = ['500g de papas', '4 huevos' , '1 cebolla', 'aceite', 'sal'];
ingredientes.forEach(ingrediente => {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    liIngredientes.appendChild(li);
});

//PROCEDIMIENTOO
pProcedimiento.textContent = 'Pelar y cortar las papas en rodajas finas, picar la cebolla, calentar un poco de aceite de oliva en una sartén a fuego medio, saltear la cebolla durante unos 5 minutos, hasta que esté transparente, añadir las papas y cocinar durante 15-20 minutos, hasta que estén tiernas, batir los huevos en un bol con sal y pimienta al gusto, verter la mezcla de huevos en la sartén y cocinar a fuego lento hasta que la tortilla esté cuajada, doblar la tortilla por la mitad y servir caliente';
imgReceta.src = 'Tortillas de papas.jpg';
imgReceta.alt = 'DESCRIBANLAA';

//INSERTAR PROCEDIMINETO
const contenedorPrincipal = document.getElementById('contenidoPrincipal');

// Insertar elementos en el DOM
contenedorPrincipal.appendChild(pTitulo);
contenedorPrincipal.appendChild(liIngredientes);
contenedorPrincipal.appendChild(pProcedimiento);
document.getElementById('imgReceta').appendChild(imgReceta);
