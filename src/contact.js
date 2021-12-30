import { Loader } from "@googlemaps/js-api-loader";
import FacebookLogo from "./f_logo_RGB-Blue_100.png";
import InstagramLogo from "./Instagram_Glyph_Gradient_RGB.png";
import { Schedule } from "./schedule";
import { Address } from "./address";

const schedule = new Schedule();
const address = new Address();

const API_KEY = process.env.GOOGLE_API_KEY;

const loader = new Loader({
  apiKey: API_KEY,
  version: "weekly",
});

export class Contact {
  constructor(container) {
    this.container = container;
    this.contactContainer = document.createElement("div");
  }

  display() {
    this.#createContactContainer();
    this.#createHeader();
    this.#createEmail();
    this.#createSocials();
    schedule.createSchedule(this.contactContainer);
    address.createAddress(this.contactContainer);
    this.#displayMap();
  }

  #createContactContainer() {
    this.contactContainer.classList.add("contact-container");
    this.container.appendChild(this.contactContainer);
  }

  #createHeader() {
    let header = document.createElement("h2");
    let headerText = "Laissez nous un commentaire!";
    header.innerHTML = headerText;
    this.contactContainer.appendChild(header);
  }

  #createEmail() {
    let emailSpan = document.createElement("span");
    emailSpan.classList.add("contact-email");
    emailSpan.setAttribute("href", "mailto:info@lavictorienne.ca");
    let email = "info@lavictorienne.ca";
    emailSpan.innerHTML = email;
    this.contactContainer.appendChild(emailSpan);
  }

  #createSocials() {
    let socialContainer = document.createElement("div");
    socialContainer.classList.add("contact-social-container");
    this.contactContainer.appendChild(socialContainer);
    this.#createFBSocial(socialContainer);
    this.#createIGSocial(socialContainer);
  }

  #createFBSocial(socialDiv) {
    let image = document.createElement("img");
    image.src = FacebookLogo;
    image.classList.add("contact-social-logo");
    let anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      "https://www.facebook.com/LaVictorienneLavaltrie/?fref=ts"
    );
    anchor.setAttribute("target", "_blank");
    anchor.appendChild(image);
    socialDiv.appendChild(anchor);
  }

  #createIGSocial(socialDiv) {
    let image = document.createElement("img");
    image.src = InstagramLogo;
    image.classList.add("contact-social-logo");
    let anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      "https://www.instagram.com/rotisserielavictorienne/"
    );
    anchor.setAttribute("target", "_blank");
    anchor.appendChild(image);
    socialDiv.appendChild(anchor);
  }

  #displayMap() {
    let mapDiv = document.createElement("div");
    mapDiv.setAttribute("id", "map");
    this.contactContainer.appendChild(mapDiv);
    const restaurant = { lat: 45.882818879630626, lng: -73.27922154540192 };
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: restaurant,
        zoom: 16,
      });
      new google.maps.Marker({
        position: restaurant,
        map: map,
      });
    });
  }
}
