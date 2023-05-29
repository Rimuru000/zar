// Sample product data
// Sample product data
const products = [
    { 
      name: 'Caramel Mocha',
      category: 'coffee',
      image: 'images/starbuckss1.png',
      characteristics: ['Capacity: 250ml', 'Material: Ceramic']
    },
    { 
        name: 'Classic Mocha',
        category: 'coffee',
        image: 'images/starbuckss2.png',
        characteristics: ['Capacity: 250ml', 'Material: Ceramic']
      },
      { 
        name: 'Chocolate Mocha',
        category: 'coffee',
        image: 'images/starbuckss3.png',
        characteristics: ['Capacity: 250ml', 'Material: Ceramic']
      },
      { 
        name: 'Strawberry Milk Coffee',
        category: 'coffee',
        image: 'images/starbuckss6.png',
        characteristics: ['Capacity: 250ml', 'Material: Ceramic']
      },
    { 
      name: 'Breakfast Blend(Beans)',
      category: 'packet',
      image: 'images/beanss1.png',
      characteristics: ['Weight: 500g', 'Type: Arabica']
    },
    { 
      name: 'Expresso Roast(Beans)',
      category: 'packet',
      image: 'images/beanss2.png',
      characteristics: ['Weight: 250g', 'Roast Level: Medium']
    },
    { 
      name: 'Coffee Machine SMEG',
      category: 'machine',
      image: 'images/machinebez1.jpeg',
      characteristics: ['Power: 1200W', 'Capacity: 1.5L']
    },
    { 
        name: 'Coffee Machine SMEG',
        category: 'machine',
        image: 'images/machinebez2.jpeg',
        characteristics: ['Power: 1200W', 'Capacity: 1.5L']
      },
    { 
      name: 'Thermos',
      category: 'accessory',
      image: 'images/termoss1.png',
      characteristics: ['Capacity: 500ml', 'Material: Stainless Steel']
    },
    { 
        name: 'Thermos',
        category: 'accessory',
        image: 'images/termoss2.png',
        characteristics: ['Capacity: 500ml', 'Material: Stainless Steel']
      },
      
      { 
        name: 'Bottle',
        category: 'accessory',
        image: 'images/baklashkas1.png',
        characteristics: ['Capacity: 500ml', 'Material: Stainless Steel']
      },
      { 
        name: 'Bottle',
        category: 'accessory',
        image: 'images/baklashkas2.png',
        characteristics: ['Capacity: 500ml', 'Material: Stainless Steel']
      },
    // Add more products as needed
  ];
  
  // Get DOM elements
  const searchInput = document.getElementById('search-input');
  const filterSelect = document.getElementById('filter-select');
  const productContainer = document.getElementById('product-container');
  
  // Display all products initially
  displayProducts(products);
  
  // Event listener for search button click
  document.getElementById('search-btn').addEventListener('click', searchProducts);
  
  // Function to display products
  function displayProducts(products) {
    productContainer.innerHTML = '';
  
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col');
      
        const card = document.createElement('div');
        card.classList.add('card');
      
        const image = document.createElement('img');
        image.src = product.image;
        image.classList.add('card-img-top');
        image.alt = 'Product Image';
      
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
      
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;
      
        const characteristics = document.createElement('p');
        characteristics.classList.add('card-text');
        characteristics.textContent = product.characteristics.join(', ');
      
        cardBody.appendChild(title);
        cardBody.appendChild(characteristics);
      
        card.appendChild(image);
        card.appendChild(cardBody);
      
        productCard.appendChild(card);
        productContainer.appendChild(productCard);
      });
      
  }
  
  // Function to filter and search products
  function searchProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
  
    const filteredProducts = products.filter(product => {
      if (filterValue === 'all') {
        return product.name.toLowerCase().includes(searchValue);
      } else {
        return (
          product.category === filterValue &&
          product.name.toLowerCase().includes(searchValue)
        );
      }
    });
  
    displayProducts(filteredProducts);
  }

  // Function to display products
function displayProducts(products) {
    productContainer.innerHTML = '';
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col');
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      image.src = product.image;
      image.classList.add('card-img-top');
      image.alt = 'Product Image';
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = product.name;
  
      const characteristics = document.createElement('p');
      characteristics.classList.add('card-text');
      characteristics.textContent = product.characteristics.join(', ');
  
      const buyButton = document.createElement('button');
      buyButton.classList.add('btn', 'btn-primary');
      buyButton.textContent = 'Buy';
      buyButton.addEventListener('click', () => {
        // Handle buy button click event here
        // You can redirect to a purchase page or perform any desired action
        console.log('Buy button clicked for product:', product.name);
      });
  
      cardBody.appendChild(title);
      cardBody.appendChild(characteristics);
      cardBody.appendChild(buyButton); // Append the buy button to the card body
  
      card.appendChild(image);
      card.appendChild(cardBody);
  
      productCard.appendChild(card);
      productContainer.appendChild(productCard);
    });
  }
  
  