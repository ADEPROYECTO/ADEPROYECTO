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
const brUno = document.createElement('br');
const brDos = document.createElement('br');
const brTres = document.createElement('br');
const brCuatro = document.createElement('br');

//CREAR LISTASS
pTitulo.textContent = 'Ensalada de garbanzo y atún';
const ingredientesEnsaladaGarbanzoAtun = ['1 Lata de garbanzos cocidos', '1 Lata de atún', '1 Tomate', '1 Pepino', '1/2 Cebolla', '2 Cucharadas de aceite de oliva', 'Jugo de 1 limón', 'Sal', 'Pimienta', 'Perejil fresco (opcional)'];
ingredientesEnsaladaGarbanzoAtun.forEach(ingrediente => {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    liIngredientes.appendChild(li);
});
pProcedimiento.textContent = "Escurre y enjuaga los garbanzos. Escurre el atún y desmenúzalo. Corta el tomate, el pepino y la cebolla en cubos pequeños. En un tazón grande, mezcla los garbanzos, el atún, el tomate, el pepino y la cebolla. Adereza con el aceite de oliva, el jugo de limón, sal y pimienta al gusto. Añade perejil fresco picado si lo deseas. Mezcla bien y sirve.";
imgReceta.src = 'ensaladaGarbanzoAtun.jpg';
imgReceta.alt = 'ensalada de garbanzo y atún';
//INSERTAR PROCEDIMINETO
const contenedorPrincipal = document.getElementById('contenidoPrincipal');

// Insertar elementos en el DOM
contenedorPrincipal.appendChild(pTitulo);
contenedorPrincipal.appendChild(liIngredientes);
contenedorPrincipal.appendChild(pProcedimiento);
document.getElementById('imgReceta').appendChild(imgReceta);
