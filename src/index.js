import { Home } from "./home";
import { Menu } from "./menu";
import { Nav } from "./nav";
import { Contact } from "./contact";
import "./global.css";
import "./home.css";
import "./menu.css";
import "./contact.css";

const container = document.getElementById("content");
const navContainer = document.getElementById("nav");

const nav = new Nav(navContainer);
let home = new Home(container);

nav.display();
home.display();

function clearAndLoadHome() {
  let home = new Home(container);
  clearContainer();
  home.display();
}

function clearAndLoadMenu() {
  let menu = new Menu(container);
  clearContainer();
  menu.display();
}

function clearAndLoadContact() {
  let contact = new Contact(container);
  clearContainer();
  contact.display();
}

function clearContainer() {
  let container = document.getElementById("content");
  container.innerHTML = "";
}

function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

const homeTab = document.getElementById("home_tab");
homeTab.addEventListener("click", clearAndLoadHome);

const menuTab = document.getElementById("menu_tab");
menuTab.addEventListener("click", clearAndLoadMenu);

const contactTab = document.getElementById("contact_tab");
contactTab.addEventListener("click", clearAndLoadContact);
