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
pTitulo.textContent = 'sopa de pollo con fideos';
const ingredientes = ['1 pollo', '300 g de pollo', '1 cebolla' , '2 zanahorias', '1 papa', '100 g de fideos', 'aceite', 'sal'];
ingredientes.forEach(ingrediente => {
    const li = document.createElement('li');
    li.textContent = ingrediente;
    liIngredientes.appendChild(li);
});

//PROCEDIMIENTOO
pProcedimiento.textContent = 'Poner el pollo en una olla y cubrir con agua, llevar a ebullición y cocinar durante 1 hora, o hasta que el pollo esté cocido, retirar el pollo de la olla y reservar, colar el caldo y reservar, picar la cebolla, las zanahorias y la patata, calentar un poco de aceite de oliva en una olla a fuego medio, saltear la cebolla y las zanahorias durante unos 5 minutos, hasta que estén transparentes, añadir la patata y cocinar durante unos 10 minutos más, incorporar los fideos al caldo y cocinar según las instrucciones del paquete, desmenuzar el pollo y añadirlo a la sopa, salpimentar al gusto y servir caliente.';
imgReceta.src = 'img_recetas/Sopa de fideos con pollo.jpg';
imgReceta.alt = 'DESCRIBANLAA';

//INSERTAR PROCEDIMINETO
const contenedorPrincipal = document.getElementById('contenidoPrincipal');

// Insertar elementos en el DOM
contenedorPrincipal.appendChild(pTitulo);
contenedorPrincipal.appendChild(liIngredientes);
contenedorPrincipal.appendChild(pProcedimiento);
document.getElementById('imgReceta').appendChild(imgReceta);
