import { Home } from "./home";
import { Menu } from "./menu";

const container = document.getElementById("content");

const home = new Home(container);
const menu = new Menu(container);

home.display();

function clearAndLoadHome() {
  clearContainer();
  home.display();
}

function clearAndLoadMenu() {
  clearContainer();
  menu.display();
}

function clearAndLoadContact() {
  clearContainer();
}

function clearContainer() {
  container.innerHTML = "";
}

const homeTab = document.getElementById("home_tab");
homeTab.addEventListener("click", clearAndLoadHome);

const menuTab = document.getElementById("menu_tab");
menuTab.addEventListener("click", clearAndLoadMenu);

const contactTab = document.getElementById("contact_tab");
contactTab.addEventListener("click", clearAndLoadContact);
