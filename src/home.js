import frontViewImage from "./rotisserie-la-victorienne.jpg";

const loadHome = function loadHome() {
  const contentDiv = document.getElementById("content");
  const home = new Home(contentDiv);
  home.createTitle();
  home.createDescription();
  home.createImage();
};

class Home {
  constructor(container) {
    this.container = container;
  }

  createTitle() {
    let title = "Rôtisserie La Victorienne";
    let header = document.createElement("h1");
    header.innerHTML = title;
    this.container.appendChild(header);
  }

  createDescription() {
    let description = "Bien plus qu'une Rôtisserie! Au plaisir de vous servir!";
    let header = document.createElement("h2");
    header.innerHTML = description;
    this.container.appendChild(header);
  }

  createImage() {
    let image = new Image();
    image.src = frontViewImage;
    this.container.appendChild(image);
  }
}

export { loadHome };
