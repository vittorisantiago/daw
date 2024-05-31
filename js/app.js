document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el modal al cargar la página
    Swal.fire({
        title: 'Suscríbete a nuestro diario',
        text: 'Recibe las últimas noticias directamente en tu correo electrónico.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Suscribirme',
        cancelButtonText: 'Cerrar',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'subscription.html';
        }
    });

    // Función para mostrar la fecha actual
    var dateElement = document.querySelector(".current-date");
    
    function formatDate(date) {
        var daysOfWeek = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
        var day = daysOfWeek[date.getDay()];
        var dayOfMonth = date.getDate();
        var month = date.getMonth() + 1; // Los meses son de 0 a 11
        var year = date.getFullYear();
        return day + " " + dayOfMonth + "/" + month + "/" + year;
    }

    var currentDate = new Date();
    dateElement.textContent = formatDate(currentDate);

    // Funcionalidad del menú lateral
    var menuIcon = document.querySelector('.fa-bars');
    var closeMenuIcon = document.querySelector('.close-menu i');
    var sidebarMenu = document.querySelector('.sidebar-menu');
    var pageOverlay = document.createElement('div');

    // Crear un overlay (superposición) para cerrar el menú al hacer clic fuera de él
    pageOverlay.style.position = 'fixed';
    pageOverlay.style.top = 0;
    pageOverlay.style.left = 0;
    pageOverlay.style.width = '100%';
    pageOverlay.style.height = '100%';
    pageOverlay.style.backgroundColor = 'rgba(0 0 0 / 50%)';
    pageOverlay.style.zIndex = 999;
    pageOverlay.style.display = 'none';
    document.body.appendChild(pageOverlay);

    // Mostrar el menú lateral y el overlay al hacer clic en el icono del menú
    menuIcon.addEventListener('click', function() {
        sidebarMenu.classList.add('show'); // Añadir clase para mostrar el menú
        pageOverlay.style.display = 'block'; // Mostrar el overlay
    });

    // Cerrar el menú lateral y ocultar el overlay al hacer clic en el icono de cerrar
    closeMenuIcon.addEventListener('click', function() {
        sidebarMenu.classList.remove('show'); // Eliminar clase para ocultar el menú
        pageOverlay.style.display = 'none'; // Ocultar el overlay
    });

    // Cerrar el menú lateral y ocultar el overlay al hacer clic fuera del menú
    pageOverlay.addEventListener('click', function() {
        sidebarMenu.classList.remove('show'); // Eliminar clase para ocultar el menú
        pageOverlay.style.display = 'none'; // Ocultar el overlay
    });
});
