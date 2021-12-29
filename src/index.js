import { Home } from "./home";
import { Menu } from "./menu";
import { Nav } from "./nav";
import "./global.css";
import "./home.css";
import "./menu.css";

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
  clearContainer();
}

function clearContainer() {
  let container = document.getElementById("content");
  container.innerHTML = "";
}

const homeTab = document.getElementById("home_tab");
homeTab.addEventListener("click", clearAndLoadHome);

const menuTab = document.getElementById("menu_tab");
menuTab.addEventListener("click", clearAndLoadMenu);

const contactTab = document.getElementById("contact_tab");
contactTab.addEventListener("click", clearAndLoadContact);
