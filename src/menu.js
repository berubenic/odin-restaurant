export class Menu {
  constructor(container) {
    this.container = container;
    this.entrees = {
      "Salade du chef": "7,59",
      "Salade César": "7,59",
      "Escargots à l'ail": {
        Regulier: "7,59",
        Gratinés: "8,79",
      },
      "Bâtonnets de fromage": {
        "(4)": "6,39",
        "(6)": "8,79",
      },
    };
  }

  display() {
    this.#createTitle();
    this.#createEntrees();
  }

  #createTitle() {
    let title = "Menu";
    let header = document.createElement("h1");
    header.innerHTML = title;
    this.container.appendChild(header);
  }

  #createEntrees() {
    let title = "Entrées";
    let header = document.createElement("h2");
    header.innerHTML = title;
    this.container.appendChild(header);
    let list = document.createElement("div");
    this.container.appendChild(list);
    this.#addItemsToList(list);
  }

  #addItemsToList(list) {
    for (let [item, price] of Object.entries(this.entrees)) {
      let innerList = document.createElement("ul");
      list.appendChild(innerList);
      let innerListItem = document.createElement("li");
      innerList.appendChild(innerListItem);
      innerListItem.innerHTML = item;
      if (typeof price === "string") {
        let innerListPrice = document.createElement("li");
        innerList.appendChild(innerListPrice);

        innerListPrice.innerHTML = price;
      } else {
        for (let [option, secondPrice] of Object.entries(price)) {
          let innerOptionList = document.createElement("ul");
          innerList.appendChild(innerOptionList);
          let optionListItem = document.createElement("li");
          innerOptionList.appendChild(optionListItem);
          optionListItem.innerHTML = option;
          let optionListPrice = document.createElement("li");
          innerOptionList.appendChild(optionListPrice);
          optionListPrice.innerHTML = secondPrice;
        }
      }
    }
  }
}
