'use strict';

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  let found = false;
  for (let i = 0; i < this.items.length; i++) {
    const element = this.items[i];
    if(element.product === product){
      found = true
      element.quantity += quantity;
      break;
    }
  }
  if(!found){
    this.items.push(new CartItem(product,quantity));
  }
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem('cart',JSON.stringify(this.items));
};


Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  let localItems = JSON.parse(localStorage.getItem('cart'));
  let items = [];
  let posFound = item;
  for (let i = 0; i < localItems.length; i++) {
    const element = localItems[i];
    items.push(new CartItem(element.product, element.quantity));
  }

  //swap with end
  let end = items.length-1;
  let temp = new CartItem(items[posFound].product, items[posFound].quantity);
  items[posFound] = new CartItem(items[end].product, items[end].quantity);
  items[end] = temp;
  items.pop();
  this.items = items;
  
};

let CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product constructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');

}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
