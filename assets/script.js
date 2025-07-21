const form = document.getElementById('reglaForm');
const tabla = document.getElementById('tablaReglas').querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const idregla = document.getElementById('idregla').value;
    const regla = document.getElementById('regla').value;
    const respuesta = document.getElementById('respuesta').value;
    const canal = document.getElementById('canal').value;
    const modulo = document.getElementById('modulo').value;
    const estado = document.getElementById('estado').value;
    const inicio_estado = document.getElementById('inicio_estado').value;
    const fin_estado = document.getElementById('fin_estado').value;
    
    const nuevaFila = tabla.insertRow();
    
    nuevaFila.innerHTML = `
    <td>${idregla}</td>
    <td>${regla}</td>
    <td>${respuesta}</td>
    <td>${canal}</td>
    <td>${modulo}</td>
    <td>${estado}</td>
    <td>${inicio_estado}</td>
    <td>${fin_estado}</td>
    <td><button class="eliminar">Eliminar</button></td>
    `;
    
    console.log(idregla);
    console.log(regla);
    console.log(respuesta);
    console.log(canal);
    console.log(modulo);
    console.log(estado);
    console.log(inicio_estado);
    console.log(fin_estado);

    const botonEliminar = nuevaFila.querySelector('.eliminar');
    botonEliminar.addEventListener('click', function () {
        tabla.removeChild(nuevaFila);
    });
    
    form.reset();
});