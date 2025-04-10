let historial = [];

function limpiar() {
    document.getElementById('display').value = '';
}

function borrarCaracter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function agregarCaracter(caracter) {
    document.getElementById('display').value += caracter;
}

function calcular() {
    let display = document.getElementById('display');
    try {
        let resultado = eval(display.value);
        let operacion = `${display.value} = ${resultado}`;
        display.value = resultado;
        historial.push(operacion);
        actualizarHistorial();
    } catch (error) {
        display.value = 'Error';
    }
}

function actualizarHistorial() {
    let historialTextarea = document.getElementById('historial');
    historialTextarea.value = historial.join('\n');
}