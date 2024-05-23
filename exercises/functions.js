// Functions

function suma(a, b) {
    return a + b;
}

var resultadoSuma = suma(5, 3);
console.log("Resultado de la suma:", resultadoSuma);



function sumaConValidacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}

sumaConValidacion('pedro', 3);

var num = 0.5;

function validateInteger(num) {
    return Number.isInteger(num);
}
console.log("El número", num, "es un número entero:", validateInteger(num));


function sumaConValidacionDeEnteros(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Uno de los parámetros no es un número entero");
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}

sumaConValidacionDeEnteros(5, 3.2);


function validarNumerosEnteros(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Uno de los parámetros no es un número entero");
        return Math.round(a) + Math.round(b);
    }
    return true;
}


function sumaConValidacionSeparada(a, b) {
    if (validarNumerosEnteros(a, b) !== true) {
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}

var resultadoSumaConValidacionSeparada = sumaConValidacionSeparada(5, 3);
console.log("Resultado de la suma con validación separada:", resultadoSumaConValidacionSeparada);
