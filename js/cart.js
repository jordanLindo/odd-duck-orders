/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

// function loadCart() {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = new Cart(cartItems);
// }

function loadCart() {
  const cartItems = localStorage.getItem('cart');
  if (cartItems === null) {
    cart = new Cart([]);
  } else {
    cart = new Cart(JSON.parse(cartItems));
  }
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  console.log('renderCart')
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  tbody.innerText = '';
  console.log('in clear');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.querySelector('tbody');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let tableRow = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    let remove = document.createElement('td');
    let quantity = document.createElement('td');
    let item = document.createElement('td');
    let image = document.createElement('img');
    image.src = './assets/redX.svg';
    image.alt = 'Remove';
    image.id = cart.items[i].product;
    remove.appendChild(image);
    quantity.innerText = cart.items[i].quantity;
    item.innerText = cart.items[i].product;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableRow.appendChild(remove);
    tableRow.appendChild(quantity);
    tableRow.appendChild(item);
    tbody.appendChild(tableRow);
  }

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log('in removeItemFromCart');
  let cartChange = false;
  for (let i = 0; i < cart.items.length; i++) {
    if (event.target.id === cart.items[i].product) {
      console.log(i);
      cart.removeItem(i);
      cartChange = true
    }
    console.log(event.target.id);
  }
  if (cartChange){
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table
    renderCart();
    console.log(cartChange)
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
