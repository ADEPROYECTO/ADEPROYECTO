document.addEventListener('DOMContentLoaded', function () {
    // LOGO
    const logo = document.createElement('img');
    logo.src = 'logo.jpg';
    
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('logo').appendChild(logo);

    // BUSCADOR
    const busquedaDiv = document.getElementById('barraDiv');
    const inputBuscar = document.createElement('input');
    const resultadoDiv = document.createElement('div'); // CAMBIO: era <ul>

    inputBuscar.setAttribute('type', 'text');
    inputBuscar.setAttribute('id', 'buscar');
    inputBuscar.setAttribute('placeholder', 'Buscar...');
    resultadoDiv.setAttribute('id', 'resultado');

    busquedaDiv.appendChild(inputBuscar);
    busquedaDiv.appendChild(resultadoDiv);

    function buscador() {
        const query = inputBuscar.value.trim().toLowerCase();
        resultadoDiv.innerHTML = '';

        const recetas = [
            { title: "Receta 1", image: "receta1.jpg", url: "recipe1.html" },
            { title: "Receta 2", image: "receta2.jpg", url: "recipe2.html" },
            { title: "Receta 3", image: "receta3.jpg", url: "recipe3.html" },
        ];

        recetas.forEach(receta => {
            if (receta.title.toLowerCase().includes(query)) {
                const enlace = document.createElement('a');
                enlace.href = receta.url;
                enlace.classList.add('resultado-item'); // Por si quieres estilos personalizados

                const imagen = document.createElement('img');
                imagen.src = receta.image;
                imagen.alt = receta.title;

                const spanTitulo = document.createElement('span');
                spanTitulo.textContent = receta.title;

                enlace.appendChild(imagen);
                enlace.appendChild(spanTitulo);

                resultadoDiv.appendChild(enlace);
            }
        });
    }

    inputBuscar.addEventListener('input', buscador);

    // ANUNCIO DERECHA
    const anuncioDerecha = document.getElementById('anuncioDerecha');
    const imgAnuncio = document.createElement('img');
    imgAnuncio.src = 'anuncioimgDerecha.png';
    imgAnuncio.alt = 'Anuncio';
    anuncioDerecha.appendChild(imgAnuncio);

    // INFORMACIÓN DE LA RECETA
    const pTitulo = document.createElement('p');
    const liIngredientes = document.createElement('ul');
    const pProcedimiento = document.createElement('p');
    const imgReceta = document.createElement('img');

    pTitulo.textContent = 'Tortillas de verdura';
    pTitulo.id = 'tituloReceta';

    const ingredientes = ['1 cebolla', '2 zanahorias', '1 papa', '1 litro de caldo de verduras', 'Aceite', 'Sal'];
    ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        liIngredientes.appendChild(li);
    });
    liIngredientes.id = 'liIngredientes';

    pProcedimiento.id = 'pProcedimiento';
    pProcedimiento.textContent = 'Picar la cebolla, el pimiento verde y el tomate en trozos pequeños. Calentar un poco de aceite de oliva en una sartén a fuego medio. Saltear la cebolla y el pimiento verde durante unos 5 minutos, hasta que estén tiernos. Añadir el tomate y cocinar durante un par de minutos más. Batir los huevos en un bol con sal y pimienta al gusto. Verter la mezcla de huevos en la sartén y cocinar a fuego lento hasta que la tortilla esté cuajada. Doblar la tortilla por la mitad y servir caliente.';

    imgReceta.src = 'Tortilla de verdura.jpg';
    imgReceta.alt = 'Tortilla de verdura';
    imgReceta.classList.add('imagenReceta');

    const contenedorPrincipal = document.getElementById('contenidoPrincipal');
    contenedorPrincipal.appendChild(pTitulo);
    contenedorPrincipal.appendChild(liIngredientes);
    contenedorPrincipal.appendChild(pProcedimiento);
    document.getElementById('imgReceta').appendChild(imgReceta);
});
