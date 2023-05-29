// Sample product data
// Sample product data
const products = [
    { 
      name: 'Cup of Coffee',
      category: 'coffee',
      image: 'starbuckss1.png',
      characteristics: ['Capacity: 250ml', 'Material: Ceramic']
    },
    { 
      name: 'Coffee Packet (Beans)',
      category: 'packet',
      image: 'coffee_beans.jpg',
      characteristics: ['Weight: 500g', 'Type: Arabica']
    },
    { 
      name: 'Coffee Packet (Powder)',
      category: 'packet',
      image: 'coffee_powder.jpg',
      characteristics: ['Weight: 250g', 'Roast Level: Medium']
    },
    { 
      name: 'Coffee Machine',
      category: 'machine',
      image: 'coffee_machine.jpg',
      characteristics: ['Power: 1200W', 'Capacity: 1.5L']
    },
    { 
      name: 'Coffee Accessory (Thermos)',
      category: 'accessory',
      image: 'coffee_thermos.jpg',
      characteristics: ['Capacity: 500ml', 'Material: Stainless Steel']
    },
    { 
      name: 'Coffee Accessory (Glass)',
      category: 'accessory',
      image: 'coffee_glass.jpg',
      characteristics: ['Capacity: 300ml', 'Material: Borosilicate Glass']
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
      const productElement = document.createElement('div');
      productElement.textContent = product.name;
      productContainer.appendChild(productElement);
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
  