// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

 // Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushroom) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}


// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenP => {
    if (state.greenPeppers) {
      oneGreenP.style.visibility = 'visible';
    } else {
      oneGreenP.style.visibility = 'hidden';
    }
  });
}


// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const sauceB = document.querySelector('.sauce');

function renderWhiteSauce() {
  sauceB.classList.toggle("sauce-white");
}


// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const crustGf = document.querySelector('.crust')

function renderGlutenFreeCrust() {
  crustGf.classList.toggle("crust-gluten-free");
}


// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  document.querySelectorAll('.btn').forEach(oneBtn => {
    oneBtn.classList.toggle('active');
  });
}

document.querySelector('.btn').addEventListener('click', renderButtons);

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushroom = !state.mushroom;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', renderWhiteSauce);

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', renderGlutenFreeCrust);