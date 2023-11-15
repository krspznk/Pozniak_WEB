function fetchData() {
    fetch('https://api.jsonbin.io/v3/qs/65547a3e0574da7622c6dee1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.record && data.record.Products) {
          processProducts(data.record.Products);
        } else {
          console.error('Error: No products found in the API response');
        }
      })
      .catch(error => console.error('Error:', error));
  }

  function processProducts(productsData) {
    if (!productsData || !Array.isArray(productsData)) {
      console.error('Error: No products found in the API response');
      return;
    }

    class Product {
      constructor(name, group, price) {
        this.name = name;
        this.group = group;
        this.price = price;
      }
    }

    const electronicProducts = [];
    const industrialProducts = [];
    const groceryProducts = [];

    productsData.forEach(productData => {
      const product = new Product(productData.Name, productData.Group, productData.Price);

      switch (product.group) {
        case 'Electronic':
          electronicProducts.push(product);
          break;
        case 'Industrial Products':
          industrialProducts.push(product);
          break;
        case 'Grocery':
          groceryProducts.push(product);
          break;
      }
    });

    displayProducts('electronic-column', electronicProducts);
    displayProducts('industrial-column', industrialProducts);
    displayProducts('grocery-column', groceryProducts);
  }

  function displayProducts(columnId, products) {
    const column = document.getElementById(columnId);

    products.forEach(product => {
      const productElement = document.createElement('p');
      productElement.textContent = `${product.name} - $${product.price}`;
      column.appendChild(productElement);
    });
  }