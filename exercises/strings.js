// Strings

var string = 'javascript es debilmente tipado';
var stringUpper = string.toUpperCase();
console.log('Texto en mayúsculas:', stringUpper);

var string2 = 'Programacion';
var primeros5 = string2.substring(0, 5);
console.log('Primeros 5 caracteres:', primeros5);

var string3 = 'Desarrollo web';
var ultimos3 = string3.substring(string3.length - 3);
console.log('Últimos 3 caracteres:', ultimos3);

var string4 = 'javascript';
var string4Mayuscula = string4.substring(0, 1).toUpperCase() + string4.substring(1).toLowerCase();
console.log('Primera letra en mayúscula:', string4Mayuscula);

var string5 = 'Hola mundo';
var primerEspacio = string5.indexOf(' ');
console.log('Posición del primer espacio en blanco:', primerEspacio);

var string6 = 'programación javascript';
var espacio = string6.indexOf(' ');
var primeraPalabra = string6.substring(0, espacio);
var segundaPalabra = string6.substring(espacio + 1);
var resultado = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase() + ' ' +
                segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
console.log('Primera letra de ambas palabras en mayúscula:', resultado);
