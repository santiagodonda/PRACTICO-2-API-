// Obtener el ID del personaje de la URL
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

// Cargar datos JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const character = data.find(item => item.id == characterId);
        if (character) {
            showCharacterDetails(character);
        } else {
            document.getElementById('character-details').innerHTML = `<p>Personaje no encontrado.</p>`;
        }
    });

// Mostrar detalles del personaje
function showCharacterDetails(character) {
    const detailsContainer = document.getElementById('character-details');
    detailsContainer.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p><strong>Facción:</strong> ${character.faction}</p>
        <p><strong>Historia:</strong> ${character.lore}</p>
    `;
}
