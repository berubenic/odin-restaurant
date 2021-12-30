import frontViewImage from "./rotisserie-la-victorienne.jpg";
import awardOne from "./prix1-rotisserie-la-victorienne.jpg";
import awardTwo from "./prix2-rotisserie-la-victorienne.jpg";
import { Schedule } from "./schedule";
import { Address } from "./address";

const schedule = new Schedule();
const address = new Address();

export class Home {
  constructor(container) {
    this.container = container;
    this.homeContainer = document.createElement("div");
  }

  display() {
    this.#createHomeContainer();
    this.#createHeaders();
    this.#createImage();
    this.#createAwards();
    schedule.createSchedule(this.homeContainer);
    this.#createDeliveryMessage();
    address.createAddress(this.homeContainer);
  }

  #createHomeContainer() {
    this.container.appendChild(this.homeContainer);
    this.homeContainer.classList.add("home-container");
  }

  #createHeaders() {
    // container
    let headerContainer = document.createElement("div");
    this.homeContainer.appendChild(headerContainer);
    headerContainer.classList.add("home-header-container");
    // first header with text
    let firstHeader = document.createElement("h2");
    let firstHeaderText = "Bien plus qu'une Rôtisserie!";
    firstHeader.classList.add("home-first-header");
    firstHeader.innerHTML = firstHeaderText;
    headerContainer.appendChild(firstHeader);
    // second header with text
    let secondHeader = document.createElement("h3");
    let secondHeaderText = " Au plaisir de vous servir!";
    secondHeader.classList.add("home-second-header");
    secondHeader.innerHTML = secondHeaderText;
    headerContainer.appendChild(secondHeader);
  }

  #createImage() {
    let image = document.createElement("img");
    image.src = frontViewImage;
    image.classList.add("home-image");
    this.homeContainer.appendChild(image);
  }

  #createAwards() {
    // container
    let awardContainer = document.createElement("div");
    awardContainer.classList.add("home-award-container");
    this.homeContainer.appendChild(awardContainer);

    let imageOne = document.createElement("img");
    imageOne.src = awardOne;
    imageOne.classList.add("home-award-one");
    imageOne.classList.add("home-award-image");

    awardContainer.appendChild(imageOne);

    let imageTwo = document.createElement("img");
    imageTwo.src = awardTwo;
    imageTwo.classList.add("home-award-two");
    imageTwo.classList.add("home-award-image");
    awardContainer.appendChild(imageTwo);
  }

  #createDeliveryMessage() {
    let messageContainer = document.createElement("span");
    messageContainer.classList.add("home-delivery-message-container");
    this.homeContainer.appendChild(messageContainer);

    let text = "Commandez par téléphone ou au comptoir.";
    messageContainer.innerText = text;
  }
}
