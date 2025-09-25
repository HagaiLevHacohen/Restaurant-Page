import laughingIMG from "./assets/35e53828-c6a6-41d4-9028-956359371c8b.jpg"

function about(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const headlineElem = document.createElement("h1");
    headlineElem.textContent = "About";

    const img = document.createElement("img");
    img.src = laughingIMG;
    img.alt = "laughing";


    content.appendChild(headlineElem);
    content.appendChild(img);
}

export {about};