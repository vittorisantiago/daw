// Añadimos eventos para los botones "Get All Characters" y "Filter Characters"
document.getElementById('getAllCharacters').addEventListener('click', getAllCharacters);
document.getElementById('filterCharacters').addEventListener('click', filterCharacters);

// Función para obtener todos los personajes
function getAllCharacters() {
    clearInputs();
    fetch('https://rickandmortyapi.com/api/character') // Hacemos una petición a la API para obtener todos los personajes. Usamos GET
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(data => displayCharacters(data.results)) // Mostramos los personajes en la pantalla
        .catch(error => showError(error));
}

// Función para filtrar personajes según los criterios ingresados
function filterCharacters() {
    // Obtenemos los valores de los filtros
    var name = document.getElementById('name').value;
    var status = document.getElementById('status').value;
    var species = document.getElementById('species').value;
    var type = document.getElementById('type').value;
    var gender = document.getElementById('gender').value;
    
    // Construimos la URL con los filtros
    var url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;
    
    // Hacemos una petición a la API con los filtros
    fetch(url)
        .then(response => response.json())
        .then(data => displayCharacters(data.results))
        .catch(error => showError(error));
}

// Función para mostrar los personajes en la pantalla
function displayCharacters(characters) {
    var charactersDiv = document.getElementById('characters'); // Obtenemos el contenedor de personajes
    var errorDiv = document.getElementById('error'); // Obtenemos el contenedor de errores
    charactersDiv.innerHTML = ''; // Limpiamos el contenedor
    errorDiv.innerHTML = '';

    // Iteramos sobre cada personaje y creamos un elemento para mostrarlo
    characters.forEach(character => {
        var characterElement = document.createElement('div'); // Creamos un div para el personaje
        characterElement.classList.add('character'); // Añadimos la clase 'character' al div
        
        // Añadimos el contenido HTML para el personaje
        characterElement.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Type: ${character.type}</p>
            <p>Gender: ${character.gender}</p>
        `;
        
        charactersDiv.appendChild(characterElement); // Añadimos el personaje al contenedor
    });
}

// Función para mostrar un mensaje de error
function showError() {
    var charactersDiv = document.getElementById('characters');
    var errorDiv = document.getElementById('error');
    charactersDiv.innerHTML = '';
    errorDiv.innerHTML = `<p>No pudimos encontrar tu personaje. Por favor intenta de nuevo.</p>`; // Mostramos el mensaje de error
}

// Función para limpiar todos los inputs
function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('status').value = '';
    document.getElementById('species').value = '';
    document.getElementById('type').value = '';
    document.getElementById('gender').value = '';
}