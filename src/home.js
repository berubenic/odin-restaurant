import frontViewImage from "./rotisserie-la-victorienne.jpg";

export class Home {
  constructor(container) {
    this.container = container;
  }

  display() {
    this.#createDescription();
    this.#createImage();
    this.#addAddress();
  }

  #createDescription() {
    let descriptionContainer = document.createElement("div");
    this.container.appendChild(descriptionContainer);
    descriptionContainer.classList.add("home-description-container");
    let topDescription = "Bien plus qu'une Rôtisserie!";
    let bottomDescription = " Au plaisir de vous servir!";
    let header = document.createElement("h2");
    header.classList.add("home-top-description");
    header.innerHTML = topDescription;
    descriptionContainer.appendChild(header);
    let smallerHeader = document.createElement("h3");
    smallerHeader.classList.add("home-bottom-description");
    smallerHeader.innerHTML = bottomDescription;
    descriptionContainer.appendChild(smallerHeader);
  }

  #createImage() {
    let image = new Image();
    image.src = frontViewImage;
    image.classList.add("home-image");
    this.container.appendChild(image);
  }

  #addAddress() {
    let addressContainer = document.createElement("div");
    addressContainer.classList.add("home-address-container");
    this.container.appendChild(addressContainer);

    let firstLine = "1231 Notre-Dame";
    let secondLine = "Lavaltrie, QC J5T 1R7";
    let phoneNumber = "Tel.: 450-586-1337";

    let firstLineP = document.createElement("p");
    let secondLineP = document.createElement("p");
    let thirdLineP = document.createElement("p");

    firstLineP.innerHTML = firstLine;
    secondLineP.innerHTML = secondLine;
    thirdLineP.innerHTML = phoneNumber;

    addressContainer.appendChild(firstLineP);
    addressContainer.appendChild(secondLineP);
    addressContainer.appendChild(thirdLineP);
  }
}
