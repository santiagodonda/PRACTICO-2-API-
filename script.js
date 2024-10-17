// Cargar datos JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        renderCards(data);

        // Buscador
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const query = searchInput.value.toLowerCase();
                const filteredData = data.filter(item =>
                    item.name.toLowerCase().includes(query) ||
                    item.faction.toLowerCase().includes(query)
                );
                renderCards(filteredData);
            }
        });
    });

// Renderizar tarjetas
function renderCards(data) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Limpiar contenido previo
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p><strong>Facción:</strong> ${item.faction}</p>
        `;

        // Agregar evento de clic para redirigir a detalle.html
        card.addEventListener('click', function() {
            window.location.href = `detalle.html?id=${item.id}`; // Redirige a detalle.html con el ID
        });

        container.appendChild(card);
    });
}
