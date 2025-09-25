import pizza from "./assets/11475282.png"

function menu(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const headlineElem = document.createElement("h1");
    headlineElem.textContent = "Menu";

    const ul = document.createElement("ul");
    ul.classList.add("ul-menu");

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.textContent = "Sugar";
    li2.textContent = "Milk";
    li3.textContent = "Pizza";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    const img = document.createElement("img");
    img.src = pizza;
    img.alt = "Pizza";


    content.appendChild(headlineElem);
    content.appendChild(ul);
    content.appendChild(img);
}

export {menu};