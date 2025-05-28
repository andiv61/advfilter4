fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('products-container');
    
    // Проверка на пустой массив
    if (!products || products.length === 0) {
      container.innerHTML = '<p>Товары не найдены</p>';
      return;
    }
    
    products.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <h3>${product.Название}</h3>
          <p>Артикул: ${product.Артикул}</p>
          <p>Кросс-номера: ${product.КроссНомера}</p>
          <a href="${product.Ссылка}" target="_blank" class="buy-button">
            Посмотреть на andiv.ru
          </a>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error('Ошибка загрузки:', error);
    const container = document.getElementById('products-container');
    container.innerHTML = '<p class="error">Ошибка загрузки данных. Пожалуйста, попробуйте позже.</p>';
  });
