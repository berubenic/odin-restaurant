import frontViewImage from "./rotisserie-la-victorienne.jpg";

export class Home {
  constructor(container) {
    this.container = container;
  }

  display() {
    this.#createTitle();
    this.#createDescription();
    this.#createImage();
  }

  #createTitle() {
    let title = "Rôtisserie La Victorienne";
    let header = document.createElement("h1");
    header.innerHTML = title;
    this.container.appendChild(header);
  }

  #createDescription() {
    let description = "Bien plus qu'une Rôtisserie! Au plaisir de vous servir!";
    let header = document.createElement("h2");
    header.innerHTML = description;
    this.container.appendChild(header);
  }

  #createImage() {
    let image = new Image();
    image.src = frontViewImage;
    this.container.appendChild(image);
  }
}
