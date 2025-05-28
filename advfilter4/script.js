document.addEventListener('DOMContentLoaded', function() {
    // Загрузка данных из JSON-файла
    fetch('data/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных: ' + response.status);
            }
            return response.json();
        })
        .then(products => {
            displayProducts(products);
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            const container = document.getElementById('products-container');
            container.innerHTML = '<p class="error">Не удалось загрузить данные. Пожалуйста, попробуйте позже.</p>';
        });

    // Функция отображения товаров
    function displayProducts(products) {
        const container = document.getElementById('products-container');
        container.innerHTML = ''; // Очистка контейнера
        
        if (products.length === 0) {
            container.innerHTML = '<p>Товары не найдены</p>';
            return;
        }
        
        // Создание карточек для каждого товара
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-content">
                    <h3>${product.Название}</h3>
                    <p><strong>Артикул:</strong> ${product.Артикул}</p>
                    <p><strong>Кросс-номера:</strong> ${product.КроссНомера}</p>
                    <a href="${product.Ссылка}" target="_blank" class="buy-button">Посмотреть на andiv.ru</a>
                </div>
            `;
            
            container.appendChild(productCard);
        });
    }
});