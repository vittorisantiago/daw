// Arrays

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mes 5:', meses[4]);
console.log('Mes 11:', meses[10]);

var mesesOrdenados = meses.slice(); // Crear una copia para no modificar el original
mesesOrdenados.sort();
console.log('Meses ordenados alfabéticamente:', mesesOrdenados);

meses.unshift('Inicio');
meses.push('Fin');
console.log('Agregar elementos al principio y al final:', meses);

meses.shift();
meses.pop();
console.log('Quitar elementos del principio y del final:', meses);

meses.reverse();
console.log('Array invertido:', meses);

var mesesUnidos = meses.join(' - ');
console.log('Array unido por guiones:', mesesUnidos);

meses.reverse();
var mesesMayoANoviembre = meses.slice(4, 11);
console.log('Copia de Mayo a Noviembre:', mesesMayoANoviembre);
