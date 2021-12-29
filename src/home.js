import frontViewImage from "./rotisserie-la-victorienne.jpg";

export class Home {
  constructor(container) {
    this.container = container;
    this.homeContainer = document.createElement("div");
  }

  display() {
    this.#createHomeContainer();
    this.#createHeaders();
    this.#createImage();
    this.#createSchedule();
    this.#addAddress();
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

  #addAddress() {
    // container
    let addressContainer = document.createElement("div");
    addressContainer.classList.add("home-address-container");
    this.homeContainer.appendChild(addressContainer);
    let address = {
      streetName: "1231 Notre-Dame",
      cityProvincePostal: "Lavaltrie, QC J5T 1R7",
      phoneNumber: "Tel.: 450-586-1337",
    };

    // insert each line of address as p tag in container
    Object.entries(address).forEach(([key, value]) => {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = value;
      addressContainer.appendChild(paragraph);
    });
  }

  #createSchedule() {
    const schedule = {
      lundi: "11:30a.m.-8p.m.",
      mardi: "11:30a.m.-8p.m.",
      mercredi: "11:30a.m.-8p.m.",
      jeudi: "11:30a.m.-9p.m.",
      vendredi: "11:30a.m.-9p.m.",
      samedi: "11:30a.m.-10p.m.",
      dimanche: "11:30a.m.-8p.m.",
    };
    // container
    let scheduleContainer = document.createElement("div");
    scheduleContainer.classList.add("contact-hours-container");
    this.homeContainer.appendChild(scheduleContainer);
    // week days
    let weekDaysList = document.createElement("ul");
    scheduleContainer.appendChild(weekDaysList);
    weekDaysList.classList.add("contact-week-days-list");
    // opening and closing time
    let timeList = document.createElement("ul");
    scheduleContainer.appendChild(timeList);
    timeList.classList.add("contact-time-list");
    // insert each day and time from schedule in respective list
    for (let [weekDay, time] of Object.entries(schedule)) {
      // day
      let dayElement = document.createElement("li");
      dayElement.innerHTML = weekDay;
      weekDaysList.appendChild(dayElement);
      // time
      let timeElement = document.createElement("li");
      timeElement.innerHTML = time;
      timeList.appendChild(timeElement);
    }
  }
}
