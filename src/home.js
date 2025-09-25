import PizzaImage from './assets/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space.jpg';



function home(){
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const headlineElem = document.createElement("h1");
  headlineElem.textContent = "Ba Sing Bites - Omashu's Hidden Culinary Gem";

  const img = document.createElement("img");
  img.src = PizzaImage;
  img.alt = "Pizza";

  const p = document.createElement("p");
  p.textContent = 'Tucked within the winding streets... (etc)';

  content.appendChild(headlineElem);
  content.appendChild(img);
  content.appendChild(p);
}


export {home};