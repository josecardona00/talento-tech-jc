document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchContainer = document.querySelector('.search-container');
    const productCarousel = document.querySelector('.product-carousel');
    const products = productCarousel.querySelectorAll('.box'); // Asumiendo que los productos tienen la clase 'box'

    const createResultsContainer = () => {
        const resultsContainer = document.createElement('div');
        resultsContainer.classList.add('search-results');
        searchContainer.appendChild(resultsContainer);
        return resultsContainer;
    };

    const resultsContainer = createResultsContainer();

    const filterProducts = (query) => {
        resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
        if (query === '') return;

        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query.toLowerCase())) {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.textContent = productName;
                resultsContainer.appendChild(resultItem);
            }
        });
    };

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        filterProducts(query);
    });
});