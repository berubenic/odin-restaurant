import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.GOOGLE_API_KEY;

const loader = new Loader({
  apiKey: API_KEY,
  version: "weekly",
});

export class Contact {
  constructor(container) {
    this.container = container;
  }

  display() {
    this.#displayAddress();
    this.#displayEmail();
    this.#displayMap();
  }

  #displayAddress() {
    let street = "1231 Notre-Dame";
    let city = "Lavaltrie, QC J5T 1R7";
    let phoneNumber = "Tel.: 450-586-1337";
    let addressDiv = document.createElement("div");
    let streetP = document.createElement("p");
    let cityP = document.createElement("p");
    let phoneNumberP = document.createElement("p");
    this.container.appendChild(addressDiv);
    addressDiv.appendChild(streetP);
    addressDiv.appendChild(cityP);
    addressDiv.appendChild(phoneNumberP);
    streetP.innerHTML = street;
    cityP.innerHTML = city;
    phoneNumberP.innerHTML = phoneNumber;
  }

  #displayEmail() {
    let email = "info@lavictorienne.ca";
    let emailDiv = document.createElement("div");
    let emailP = document.createElement("p");
    emailP.innerHTML = email;
    emailDiv.appendChild(emailP);
    this.container.appendChild(emailDiv);
  }

  #displayMap() {
    let mapDiv = document.createElement("div");
    mapDiv.setAttribute("id", "map");
    this.container.appendChild(mapDiv);
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
