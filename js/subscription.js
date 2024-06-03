document.addEventListener("DOMContentLoaded", function() {
    // Variables para el formulario de suscripción
    var form = document.getElementById("subscription-form");
    var fullNameInput = document.getElementById("fullName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var ageInput = document.getElementById("age");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var postalCodeInput = document.getElementById("postalCode");
    var dniInput = document.getElementById("dni");
    var formTitle = document.getElementById("form-title");

    // Inicialmente ocultar el título "HOLA"
    formTitle.style.display = "none";
    
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

    var isSubscribed = localStorage.getItem('subscribed') === 'true';
    var submitButton = document.getElementById('subscribe-button');
    var subscribedMessage = document.getElementById('subscribed-message');

    if (isSubscribed) {
        submitButton.disabled = true;
        subscribedMessage.style.display = "block";
    }

    // Validar el nombre completo
    function validateFullName() {
        var fullName = fullNameInput.value.trim();
        if (fullName.length > 6 && fullName.includes(" ")) {
            showError(fullNameInput, "");
            return true;
        } else {
            showError(fullNameInput, "El nombre completo debe tener más de 6 letras y al menos un espacio.");
            return false;
        }
    }

    // Validar correo electrónico
    function validateEmail() {
        var email = emailInput.value.trim();
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailPattern.test(email)) {
            showError(emailInput, "");
            return true;
        } else {
            showError(emailInput, "Ingrese un correo electrónico válido.");
            return false;
        }
    }

    // Validar contraseña
    function validatePassword() {
        var password = passwordInput.value.trim();
        if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
            showError(passwordInput, "");
            return true;
        } else {
            showError(passwordInput, "La contraseña debe tener al menos 8 caracteres, con letras y números.");
            return false;
        }
    }

    // Validar confirmación de contraseña
    function validateConfirmPassword() {
        if (passwordInput.value === confirmPasswordInput.value) {
            showError(confirmPasswordInput, "");
            return true;
        } else {
            showError(confirmPasswordInput, "Las contraseñas no coinciden.");
            return false;
        }
    }

    // Validar edad
    function validateAge() {
        var age = parseInt(ageInput.value.trim(), 10);
        if (age >= 18) {
            showError(ageInput, "");
            return true;
        } else {
            showError(ageInput, "Debe ser mayor o igual a 18 años.");
            return false;
        }
    }

    // Validar teléfono
    function validatePhone() {
        var phone = phoneInput.value.trim();
        var phonePattern = /^[0-9]{7,}$/;
        if (phonePattern.test(phone)) {
            showError(phoneInput, "");
            return true;
        } else {
            showError(phoneInput, "El teléfono debe tener al menos 7 dígitos, sin espacios ni guiones.");
            return false;
        }
    }

    phoneInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Validar dirección
    function validateAddress() {
        var address = addressInput.value.trim();
        if (address.length >= 5 && address.includes(" ")) {
            showError(addressInput, "");
            return true;
        } else {
            showError(addressInput, "La dirección debe tener al menos 5 caracteres, con letras, números y un espacio.");
            return false;
        }
    }

    // Validar ciudad
    function validateCity() {
        var city = cityInput.value.trim();
        if (city.length >= 3) {
            showError(cityInput, "");
            return true;
        } else {
            showError(cityInput, "La ciudad debe tener al menos 3 caracteres.");
            return false;
        }
    }

    // Validar código postal
    function validatePostalCode() {
        var postalCode = postalCodeInput.value.trim();
        var postalCodePattern = /^[0-9]+$/;
        if (postalCodePattern.test(postalCode) && postalCode.length >= 3) {
            showError(postalCodeInput, "");
            return true;
        } else {
            showError(postalCodeInput, "El código postal debe tener al menos 3 caracteres y solo números.");
            return false;
        }
    }

    postalCodeInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Validar DNI
    function validateDNI() {
        var dni = dniInput.value.trim();
        var dniPattern = /^[0-9]{7,8}$/;
        if (dniPattern.test(dni)) {
            showError(dniInput, "");
            return true;
        } else {
            showError(dniInput, "El DNI debe tener 7 u 8 dígitos.");
            return false;
        }
    }

    dniInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Mostrar mensaje de error
    function showError(input, message) {
        var errorElement = document.getElementById("error-" + input.id);
        if (message) {
            errorElement.textContent = message;
            errorElement.style.display = "block";
        } else {
            errorElement.style.display = "none";
        }
    }

    // Manejar evento blur para validar el campo
    function handleBlur(event) {
        var input = event.target;
        switch (input.id) {
            case "fullName":
                validateFullName();
                break;
            case "email":
                validateEmail();
                break;
            case "password":
                validatePassword();
                break;
            case "confirmPassword":
                validateConfirmPassword();
                break;
            case "age":
                validateAge();
                break;
            case "phone":
                validatePhone();
                break;
            case "address":
                validateAddress();
                break;
            case "city":
                validateCity();
                break;
            case "postalCode":
                validatePostalCode();
                break;
            case "dni":
                validateDNI();
                break;
        }
    }

    // Manejar evento focus para limpiar el mensaje de error
    function handleFocus(event) {
        showError(event.target, "");
    }

    // Manejar evento submit para validar todos los campos
    function handleSubmit(event) {
        event.preventDefault();
        var isValid = true;
        if (!validateFullName()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validatePassword()) isValid = false;
        if (!validateConfirmPassword()) isValid = false;
        if (!validateAge()) isValid = false;
        if (!validatePhone()) isValid = false;
        if (!validateAddress()) isValid = false;
        if (!validateCity()) isValid = false;
        if (!validatePostalCode()) isValid = false;
        if (!validateDNI()) isValid = false;

        if (isValid) {
            Swal.fire({
                title: 'Formulario enviado con éxito!',
                text: 'La información ha sido cargada correctamente.',
                icon: 'success'
            }).then(function() {
                // Guardar el estado de suscripción en localStorage
                localStorage.setItem('subscribed', 'true');
                window.location.href = "daw-06.html";
            });
        } else {
            Swal.fire({
                title: 'Errores en el formulario',
                text: 'Por favor, revise los campos con errores.',
                icon: 'error'
            });
        }
    }

    // Manejar evento input para actualizar el título del formulario en tiempo real
    function handleInput(event) {
        if (event.target.id === "fullName") {
            var fullName = event.target.value.trim();
            if (fullName) {
                formTitle.textContent = "HOLA " + fullName;
                formTitle.style.display = "block";  // Mostrar el título cuando hay texto
            } else {
                formTitle.textContent = "HOLA";
                formTitle.style.display = "none";  // Ocultar el título cuando no hay texto
            }
        }
    }

    // Asignar event listeners
    fullNameInput.addEventListener("input", handleInput);

    fullNameInput.addEventListener("blur", handleBlur);
    emailInput.addEventListener("blur", handleBlur);
    passwordInput.addEventListener("blur", handleBlur);
    confirmPasswordInput.addEventListener("blur", handleBlur);
    ageInput.addEventListener("blur", handleBlur);
    phoneInput.addEventListener("blur", handleBlur);
    addressInput.addEventListener("blur", handleBlur);
    cityInput.addEventListener("blur", handleBlur);
    postalCodeInput.addEventListener("blur", handleBlur);
    dniInput.addEventListener("blur", handleBlur);

    fullNameInput.addEventListener("focus", handleFocus);
    emailInput.addEventListener("focus", handleFocus);
    passwordInput.addEventListener("focus", handleFocus);
    confirmPasswordInput.addEventListener("focus", handleFocus);
    ageInput.addEventListener("focus", handleFocus);
    phoneInput.addEventListener("focus", handleFocus);
    addressInput.addEventListener("focus", handleFocus);
    cityInput.addEventListener("focus", handleFocus);
    postalCodeInput.addEventListener("focus", handleFocus);
    dniInput.addEventListener("focus", handleFocus);

    form.addEventListener("submit", handleSubmit);
});
