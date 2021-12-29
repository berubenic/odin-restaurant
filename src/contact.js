import { Loader } from "@googlemaps/js-api-loader";
import FacebookLogo from "./f_logo_RGB-Blue_100.png";
import InstagramLogo from "./Instagram_Glyph_Gradient_RGB.png";

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
    this.contactContainer.classList.add("contact-container");
    this.container.appendChild(this.contactContainer);
    this.#createDescription();
    this.#displayEmail();
    this.#displaySocials();
    this.#displayHours();
    this.#displayAddress();
    this.#displayMap();
  }

  #displayHours() {
    const hours = {
      lundi: "11:30a.m.-8p.m.",
      mardi: "11:30a.m.-8p.m.",
      mercredi: "11:30a.m.-8p.m.",
      jeudi: "11:30a.m.-9p.m.",
      vendredi: "11:30a.m.-9p.m.",
      samedi: "11:30a.m.-10p.m.",
      dimanche: "11:30a.m.-8p.m.",
    };
    let hoursDiv = document.createElement("div");
    let daysList = document.createElement("ul");
    let hoursList = document.createElement("ul");
    hoursDiv.appendChild(daysList);
    hoursDiv.appendChild(hoursList);
    hoursDiv.classList.add("contact-hours-container");
    daysList.classList.add("contact-hours-day-list");
    hoursList.classList.add("contact-hours-hours-list");
    this.contactContainer.appendChild(hoursDiv);
    for (let [days, time] of Object.entries(hours)) {
      let dayElement = document.createElement("li");
      let timeElement = document.createElement("li");
      dayElement.innerHTML = days;
      timeElement.innerHTML = time;
      daysList.appendChild(dayElement);
      hoursList.appendChild(timeElement);
    }
  }

  #createDescription() {
    let text = "Laissez nous un commentaire!";
    let p = document.createElement("p");
    p.innerHTML = text;
    this.contactContainer.appendChild(p);
  }

  #displayAddress() {
    let street = "1231 Notre-Dame";
    let city = "Lavaltrie, QC J5T 1R7";
    let phoneNumber = "Tel.: 450-586-1337";
    let addressDiv = document.createElement("div");
    let streetP = document.createElement("p");
    let cityP = document.createElement("p");
    let phoneNumberP = document.createElement("p");
    this.contactContainer.appendChild(addressDiv);
    addressDiv.classList.add("contact-address-container");
    addressDiv.appendChild(streetP);
    addressDiv.appendChild(cityP);
    addressDiv.appendChild(phoneNumberP);
    streetP.innerHTML = street;
    cityP.innerHTML = city;
    phoneNumberP.innerHTML = phoneNumber;
  }

  #displayEmail() {
    let email = "info@lavictorienne.ca";
    let emailP = document.createElement("a");
    emailP.classList.add("contact-email");
    emailP.setAttribute("href", "mailto:info@lavictorienne.ca");
    emailP.innerHTML = email;
    this.contactContainer.appendChild(emailP);
  }

  #displaySocials() {
    let socialDiv = document.createElement("div");
    socialDiv.classList.add("contact-social-container");
    this.contactContainer.appendChild(socialDiv);
    this.#createFBSocial(socialDiv);
    this.#createIGSocial(socialDiv);
  }

  #createFBSocial(socialDiv) {
    let anchor = document.createElement("a");
    let image = document.createElement("img");
    image.src = FacebookLogo;
    image.classList.add("logo");

    anchor.setAttribute(
      "href",
      "https://www.facebook.com/LaVictorienneLavaltrie/?fref=ts"
    );
    anchor.setAttribute("target", "_blank");
    anchor.appendChild(image);
    socialDiv.appendChild(anchor);
  }

  #createIGSocial(socialDiv) {
    let anchor = document.createElement("a");
    let image = document.createElement("img");
    image.src = InstagramLogo;
    image.classList.add("logo");
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
      const marker = new google.maps.Marker({
        position: restaurant,
        map: map,
      });
    });
  }
}
