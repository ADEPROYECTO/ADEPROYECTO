document.addEventListener('DOMContentLoaded', function() {

const logo = document.createElement('img');

logo.src = 'logo.jpg';
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
const brUno = document.createElement('br');
const brDos = document.createElement('br');
const brTres = document.createElement('br');
const brCuatro = document.createElement('br');

//CREAR LISTASS
pTitulo.textContent = 'Pasta de tomate';
const ingredientesPastaTomate = ['200g de pasta', '4 Tomates maduros', '1 Diente de ajo', '1/2 Cebolla', 'Aceite de oliva', 'Sal', 'Pimienta', 'Albahaca fresca (opcional)'];
ingredientesPastaTomate.forEach(ingrediente => {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    liIngredientes.appendChild(li);
});
pProcedimiento.textContent = "Cocina la pasta según las instrucciones del paquete. Pica los tomates, el ajo y la cebolla. En una sartén grande, calienta el aceite de oliva y saltea el ajo y la cebolla hasta que estén tiernos. Añade los tomates y cocina hasta que se deshagan y formen una salsa. Sazona con sal y pimienta al gusto. Mezcla la pasta cocida con la salsa de tomate y añade albahaca fresca si lo deseas.";
imgReceta.src = 'pastaTomate.jpg';
imgReceta.alt = 'pasta de tomate';
//INSERTAR PROCEDIMINETO
const contenedorPrincipal = document.getElementById('contenidoPrincipal');

// Insertar elementos en el DOM
contenedorPrincipal.appendChild(pTitulo);
contenedorPrincipal.appendChild(liIngredientes);
contenedorPrincipal.appendChild(pProcedimiento);
document.getElementById('imgReceta').appendChild(imgReceta);
