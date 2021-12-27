import navIcon from "./rotisserie-la-victorienne-icon.svg";

export class Nav {
  constructor(container) {
    this.container = container;
  }

  display() {
    this.#createNavIcon();
  }

  #createNavIcon() {
    let image = new Image();
    image.src = navIcon;
    image.classList.add("nav-icon");
    let navHeader = document.getElementById("nav_header");
    navHeader.appendChild(image);
  }
}
