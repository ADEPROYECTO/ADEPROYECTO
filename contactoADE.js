//TOMO ELEMENTO DIV
const formularioDiv = document.getElementById('formularioDiv');

//CREACION DE ELEMENTOS
const eForm = document.createElement('form');
const elblNombre = document.createElement('label');
const iNombre = document.createElement('input');
const elblCorreo = document.createElement('label');
const iCorreo = document.createElement('input');
const elblAsunto = document.createElement('label');
const iAsunto = document.createElement('input');
const elblMensaje = document.createElement('label');
const txtMensaje = document.createElement('textarea');
const btnEnviar = document.createElement('button');
const pConta = document.createElement('p');
const br = document.createElement('br');
const br2 = document.createElement('br');
const br3 = document.createElement('br');
const br4 = document.createElement('br');
const br5 = document.createElement('br');

//ATRIBUTOS 

pConta.textContent = 'Contáctanos';

elblNombre.textContent = 'Nombre:';
iNombre.setAttribute('type', 'text');
iNombre.setAttribute('id', 'nombre');

elblCorreo.textContent = 'Correo electrónico:';
iCorreo.setAttribute('type', 'email');
iCorreo.setAttribute('name', 'correo');

elblAsunto.textContent = 'Asunto:';
iAsunto.setAttribute('type', 'text');
iAsunto.setAttribute('name', 'asunto');

elblMensaje.textContent = 'Mensaje:';
txtMensaje.setAttribute('name', 'mensaje');

btnEnviar.textContent = 'Enviar';

//AGREGARLOS

eForm.appendChild(pConta);
eForm.appendChild(elblNombre);
eForm.appendChild(iNombre);
eForm.appendChild(br);
eForm.appendChild(elblCorreo);
eForm.appendChild(iCorreo);
eForm.appendChild(br2)
eForm.appendChild(elblAsunto);
eForm.appendChild(iAsunto);
eForm.appendChild(br3);
eForm.appendChild(elblMensaje);
eForm.appendChild(br4);
eForm.appendChild(txtMensaje);
eForm.appendChild(br5);
eForm.appendChild(btnEnviar);


//AGREGAR FORM

formularioDiv.appendChild(eForm);

//AGREGAR EVENT
btnEnviar.addEventListener('click', mandarFormulario);

//FUNCION
async function mandarFormulario(event) {
    event.preventDefault();

    const respuesta = await fetch('https://formspree.io/f/xjvnlqjk', {
        method: 'POST',
        body: new FormData(eForm),
        headers: {
            'Accept': 'application/json'
        }
    });

    // VERIFICA RESP DE FORMSPREE
    if (respuesta.ok) {
        alert('Gracias por tu mensaje. Te responderemos pronto.');
   
    } else {
        alert('Hubo un error al enviar el formulario');
    }
}

// AGREGAR EVENTO
btnEnviar.addEventListener('click', mandarFormulario);



// TOMA ELEMENTO
const botonDiv = document.getElementById('botonDiv');

// CREAR ELEMENTO
const btnRegresar = document.createElement('button');
const br6 = document.createElement('br');


// AGREGAR TXT
btnRegresar.textContent = 'Regresar';

botonDiv.appendChild(btnRegresar);
botonDiv.appendChild(br6);

btnRegresar.addEventListener('click', function() {

	window.location.href = 'index.html';

});

//RELOJJJJJ

 function ActualizarReloj() {
  // body...

  //crear objeto
  var LAHORA = new Date();
  var HORA = LAHORA.getHours();
  var MINS = LAHORA.getMinutes();
  var SEG = LAHORA.getSeconds();
  var AMPM = HORA>= 12 ? 'PM' : 'AM'; //condicion para saber si es am o pm
  HORA = HORA % 12;

  //si la hora es 0, establece 12
  if (HORA === 0) {HORA=12;}

  //agregar 0 a la izq cuando sea menos de 10 mins
  if (MINS<10) {MINS = "0" + MINS;}


  if (SEG<10) {SEG = "0" + SEG;}

  var timeFormat = HORA + ":" + MINS + ":" + SEG+" "+AMPM;

  document.getElementById("reloj").textContent = timeFormat;
}

setInterval(ActualizarReloj,1000);

ActualizarReloj();

