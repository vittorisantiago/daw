// If else

// Utilicé mensaje modal de SweetAlert2. No se pedía, pero quería probarlo para Boggle.
var randomNumber = Math.random();
console.log('Número aleatorio:', randomNumber);

if (randomNumber >= 0.5) {
    Swal.fire({
        title: 'Mayor a 0.5',
        icon: 'success'
    });
} else {
    Swal.fire({
        title: 'Menor a 0.5',
        icon: 'info'
    });
}


var age = Math.floor(Math.random() * 101);
console.log('Edad:', age);

if (age < 2) {
    alert('Bebe');
} else if (age >= 2 && age <= 12) {
    alert('Niño');
} else if (age >= 13 && age <= 19) {
    alert('Adolescente');
} else if (age >= 20 && age <= 30) {
    alert('Joven');
} else if (age >= 31 && age <= 60) {
    alert('Adulto');
} else if (age >= 61 && age <= 75) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
}