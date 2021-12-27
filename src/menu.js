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
    let listContainer = document.createElement("div");
    this.container.appendChild(listContainer);
    this.#addItemsToList(listContainer);
  }

  #addItemsToList(listContainer) {
    for (let [item, price] of Object.entries(this.entrees)) {
      let list = document.createElement("ul");
      listContainer.appendChild(list);
      let listItem = document.createElement("li");
      list.appendChild(listItem);
      listItem.innerHTML = item;
      if (typeof price === "string") {
        let listPrice = document.createElement("li");
        list.appendChild(listPrice);

        listPrice.innerHTML = price;
      } else {
        for (let [option, optionPrice] of Object.entries(price)) {
          this.#addOptionsToItem(option, optionPrice, listItem);
        }
      }
    }
  }

  #addOptionsToItem(option, optionPrice, listItem) {
    let optionList = document.createElement("ul");
    listItem.appendChild(optionList);
    let optionListItem = document.createElement("li");
    optionList.appendChild(optionListItem);
    optionListItem.innerHTML = option;
    let optionListPrice = document.createElement("li");
    optionList.appendChild(optionListPrice);
    optionListPrice.innerHTML = optionPrice;
  }
}
