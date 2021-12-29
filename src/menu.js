export class Menu {
  constructor(container) {
    this.container = container;
    this.menuContainer = document.createElement("div");
    this.menu = {
      Entrées: {
        Soupe: {
          prix: "4,19",
          description: "Choix: poulet et nouilles, poulet et riz, du jour",
          crème: "4,29",
        },
        "Salade du chef": "5,89",
        "Salade césar": "5,89",
        "Ailes de poulet": {
          description: "BBQ ou Buffalo",
          "(4)": "5,09",
          "(8)": "9,29",
          "(16)": "17,29",
          "(24)": "24,79",
        },
        "Calmars maison": {
          "(6oz)": "9,99",
          "(12oz)": "15,79",
        },
        "Rondelles d'oignon": {
          description: "Pâte à la bière",
          Régulier: "4,79",
          Grand: "6,89",
        },
        "Baluchons de crevettes": {
          "(3)": "7,19",
          "(5)": "9,69",
        },
        "Crevettes tempura": {
          "(4)": "6,09",
          "(6)": "8,49",
        },
        "Bouchées de macaroni au fromage": {
          "(3)": "7,29",
          "(5)": "7,69",
        },
        "Combo victorien": {
          description: "3 bâtonnets de fromage, +3 ailes",
          prix: "9,89",
        },
        "Trio victorien": {
          description:
            "3 bâtonnets de fromage, +3 ailes, +3 os de côtes levées",
          prix: "15,99",
        },
        "Bâtonnets de fromage": {
          "(4)": "5,99",
          "(6)": "8,39",
        },
        "Pain à l'ail": {
          prix: "4,49",
          "1/2": "3,19",
        },
        "Pain à l'ail gratiné": {
          prix: "7,29",
          "1/2": "4,29",
        },
        "Pelures de pommes de terre": {
          "(2)": "6,29",
          "(4)": "11,39",
        },
        Victos: {
          description:
            "Chips de pommes de terre style maison nappées de sauce cheddar, d’olives noires, de tomates, de bacon, d’échalotes et de fromage mozzarella, le tout servi avec de la salsa et de la crème sûre.",
          Régulier: "7,69",
          Grand: "16,49",
        },
      },
      "Pomme de terre au four garnie": {
        description:
          "Bacon, fromage fondu, échalotes. En accompagnement extra de 2,99",
        "Crème sûre": "4,69",
        Tzaziki: "4,69",
        Épinards: "4,69",
      },
      "Poulet rôti": {
        description:
          "*Servi avec pain, sauce BBQ, salade de chou + choix d’accompagnement: riz (basmati, sauvage, maison) ou pommes de terre (four, purée, frites). **Comptoir seulement",
        "Quart poitrine*": "15,29",
        "Quart cuisse*": "13,29",
        "Demi poulet": "18,59",
        "Demi (2 cuisses)": "16,29",
        "Duo économique": {
          description:
            "1 cuisse + 1 poitrine emballées dans 2 boîtes individuelles",
          prix: "21,49",
        },
        Familial: {
          description:
            "2 cuisses + 2 poitrines emballées dans 4 boîtes individuelles",
          prix: "36,99",
        },
        "Choix du chef**": {
          semaine: "8,49",
          "vendredi au dimanche": "8,79",
        },
      },
      "Côtes levées": {
        description:
          "*Servi avec pain, sauce BBQ, salade de chou + choix d’accompagnement: riz (basmati, sauvage, maison) ou pommes de terre (four, purée, frites).",
        "Côtes levées régulières (environ 6 os)*": "17,69",
        "Grandes côtes levées (environ 12 os)*": "25,19",
      },
      Combos: {
        description:
          "*Servi avec pain, sauce BBQ, salade de chou + choix d’accompagnement: riz (basmati, sauvage, maison) ou pommes de terre (four, purée, frites).",
        "Quart cuisse et côtes levées*": "21,69",
        "Quart poitrine et côtes levées*": "23,69",
        "4 filets de poitrine panés et côtes levées*": "25,09",
        "6 ailes et côtes levées*": "26,59",
        "Poitrine grillée et côtes levées*": {
          description:
            "Choix de saveurs: épinards et artichauts, thaïe, champignons, poivre ou teriyaki",
          prix: "26,59",
        },
      },
      "Poulet frit": {
        description:
          "Veuillez noter qu’il y a un délai d’attente supplémentaire de 30 minutes pour la cuisson du poulet frit.",
        "Avec accompagnement (sauces, frites, salade de chou et pain)": {
          description: "*viande blanche",
          "2 mcx": "10,89 ou 13,59*",
          "3 mcx": "13,09 ou 26,39*",
          "4 mcx": "14,99 ou 17,69*",
          "5 mcx": "16,59 ou 19,99*",
          "10 mcx": "37,29 ou 52,39*",
          "15 mcx": "43,79 ou 52,39*",
          "20 mcx": "52,69 ou 62,99*",
        },
        "Sans accompagnement": {
          description: "*viande blanche",
          "10 mcx": "25,29 ou 31,09*",
          "15 mcx": "31,89 ou 40,29*",
          "20 mcx": "38,79 ou 49,49*",
        },
      },
      Poulet: {
        description:
          "*Servi avec pain, sauce BBQ, salade de chou + choix d’accompagnement: riz (basmati, sauvage, maison) ou pommes de terre (four, purée, frites).",
        "Brochette de poulet": {
          description:
            "Servie avec choix de riz et de pommes de terre, un choix de légumes ou de salade (verte ou césar) ainsi qu'une salade de chou",
          Traditionnelle: "20,39",
          Thaïe: "20,99",
        },
        "Poitrine grillé": {
          description:
            "Choix de saveurs: épinards et artichauts, thaïe, champignons, poivre ou teriyaki. Servie avec pommes de terre, salade (verte ou césar) et salade de chou",
          prix: "20,39",
        },
        "Vol-au-vent": {
          description: "Servi avec pommes de terre, légumes et salade de chou",
          prix: "15,49",
        },
        "Pâté au poulet*": "14,59",
        "Gratin de poulet champignons*": "15,79",
        "Filets de poitrine panés*": {
          "(2)": "10,59",
          "(4)": "15,39",
          "(6)": "18,39",
        },
        "Croquettes*": {
          "(6)": "10,29",
          "(8)": "12,09",
        },
        "Ailes de poulet (BBQ, buffalo)": {
          "(8)": "16,79",
          "(12)": "20,99",
        },
      },
      "Sandwich et Burgers": {
        description:
          "*Servi avec pain, sauce BBQ, salade de chou + choix d’accompagnement: riz (basmati, sauvage, maison) ou pommes de terre (four, purée, frites).",
        "Club sandwich ou sandwich victorien*": {
          description: "Viande blanche extra 1,60",
          Régulier: "14,59",
          "1/2": "8,89",
        },
        "Sandwich poitrine de poulet grillée*": {
          description:
            "Avec fromage mozzarella fondu, tomates, laitue et bacon",
          prix: "17,89",
        },
        "Hot chicken*": {
          description: "Viande blanche extra 1,60",
          prix: "12,89",
        },
        "Sandwich de saucisses artisanales*": {
          description: "Demandez les saveurs disponibles",
          prix: "17,19",
        },
        "Wrap au poulet": {
          description:
            "Filets de poitrine panés avec mayonnaise, laitue et tomates",
          prix: "12,19",
        },
        "Burger au poulet pané*": {
          description: "Bacon et fromage extra 2,09",
          prix: "14,59",
        },
        "Burger au poulet parmesan pané*": "15,79",
        "Gros Hamburger (1/2 lb de viande hachée)*": {
          description:
            "Choix de condiments: moutarde, mayonnaise, ketchup, relish, tomates, laitue, oignons, cornichons, piments forts. Bacon et fromage extra 1,89$",
          prix: "15,89",
        },
        "Hamburger steak (1/2 lb de viande hachée)*": {
          description:
            "Servi avec oignons, légumes et choix de sauce « hot chicken », sauce champignons, sauce au poivre ou sauce BBQ",
          prix: "17,79",
        },
      },
      Poisson: {
        description:
          "Servi avec riz ou pommes de terre ainsi que des légumes, du citron et notre sauce tartare maison (excepté pour les brochettes)",
        "Fish and chips": {
          description: "Aiglefin",
          "(1)": "11,59",
          "(2)": "14,99",
        },
        "Sole poivre et citron": "15,99",
        "Saumon sésame teriyaki": "16,99",
        "Brochettes de crevettes": {
          description: "Servies avec riz, salade césar et légumes",
          prix: "17,49",
        },
      },
      Pâtes: {
        description: "Sauce à la viande maison",
        Sapghetti: {
          description: "2 boulettes de viande extra 3,19. Gratiné extra 2,69.",
          Régulier: "12,19",
          Grand: "14,89",
        },
        Lasagne: {
          Régulier: "16,69",
          Grand: "20,49",
        },
        "Poitrine de poulet parmesan": {
          description:
            "Poitrine de poulet légèrement panée, servie avec spaghetti sauce à la viande et gratinée avec fromage mozzarella",
          prix: "22,69",
        },
      },
      Salades: {
        "Salade du chef ou césar": "11,29",
        "Mélange de poulet sur salade": "14,69",
        "Poitrine de poulet rôtie sur salade": "14,89",
        "Cuisse de poulet sur salade": "13,79",
        "Poitrine grillée panés sur salade": "14,89",
        "2 Filets de poitrine panés sur salade": "15,49",
        "Salade de saumon": "16,79",
        "Salade de thon": "15,89",
      },
      "Faites changement": {
        "Poulet général tao": "15,99",
        "Nouilles frites aux crevettes": {
          description: "Avec beurre à l'ail",
          prix: "12,59",
        },
        "Riz frit au poulet": {
          description: "Extra champignons 1,59 et extra egg rolls 3,29",
          prix: "12,59",
        },
        "Riz frit aux crevettes": "13,99",
      },
      Enfants: {
        description:
          "*Servi avec riz ou pommes de terre ainsi que des légumes, du citron et notre sauce tartare maison (excepté pour les brochettes)",
        "Croquettes de poulet*": {
          "(3)": "7,69",
          "(5)": "7,99",
        },
        "Poulet popcorn*": "7,99",
        "Tranches de potrine de poulet*": "7,99",
        "Burger au poulet*": {
          description: "bacon et fromage extra 1,89",
          prix: "7,99",
        },
        "Cuisse de poulet*": "7,99",
        Spaghetti: {
          description: "gratiné extra 1,49",
          prix: "7,99",
        },
        Lasagne: "7,99",
        Poutine: "7,99",
        "Bouchées de macaroni au fromage": {
          "(3)": "7,69",
          "(5)": "7,99",
        },
      },
      "Menu méditerranéen": {
        subCategories: {
          Entrées: {
            Hummus: {
              description: "Pois chiches, tahini, citron et ail",
              prix: "4,79",
            },
            "Baba Ghanooj": {
              description: "Aubergine, huile d'olive, citron, tahini et ail",
              prix: "7,39",
            },
            "Feta et olives": {
              description: "Feta, concombres, tomates, olives noires et origan",
              prix: "8,59",
            },
            "Duo trempettes": {
              description: "Hummus et Baba Ghanooj",
              prix: "9,79",
            },
          },
          Salades: {
            Taboulé: {
              description:
                "Persil, oignons, tomates, citron, burgul et huile d'olive",
              Petit: "7,39",
              Grand: "9,79",
            },
            "Salade grecque": {
              description:
                "Fromage feta, tomates, olives, oignons rouges, concombres, huile d'olive et origan servis avec notre vinaigrette maison",
              Petit: "9,79",
              Grand: "13,39",
            },
            "Salade arménienne": {
              description:
                "Tomates, concombres, oignons rouges, échalotes et persil servis avec notre vinaigrette maison",
              prix: "12,19",
            },
          },
          Sandwich: {
            "Sandwich kafta avec frites": "12,19",
            "Sandwich shish taouk avec frites": "10,99",
          },
          Grillades: {
            description:
              "Servies avec 2 choix d'accompagnement. Choix de riz ainsi que choix de pommes de terres.",
            "2 brochettes de kafta": {
              description:
                "Un mélange de boeuf et d'agneau haché avec épices servi avec notre sauce à l'ail faite maison",
              prix: "18,49",
            },
            "2 brochettes de shish taouk": {
              description: "Servies avec notre sauce à l'ail faite maison",
              prix: "21,79",
            },
          },
        },
      },
      Desserts: {},
      "Casse-croûte": {},
      "Prix de groupe": {},
    };
  }

  display() {
    this.#createMenu();
    this.#createMenuNav();
  }

  #createTitle() {
    let title = "Menu";
    let header = document.createElement("h1");
    header.classList.add("menu-title");
    header.innerHTML = title;
    this.menuContainer.appendChild(header);
  }

  #createMenu() {
    this.container.appendChild(this.menuContainer);
    this.menuContainer.classList.add("menu-container");
    this.#createTitle();
    this.#createCategory(this.menu);
  }

  #createMenuNav() {
    let followDiv = document.createElement("div");
    followDiv.classList.add("menu-follow-container");
    this.container.prepend(followDiv);
    let navDiv = document.createElement("div");
    navDiv.classList.add("menu-nav-container");
    navDiv.classList.add("hidden");
    followDiv.prepend(navDiv);
    let navList = document.createElement("ul");
    navList.classList.add("menu-nav-list");
    navDiv.appendChild(navList);
    this.#addMenuCategoriesToList(navList);
    this.#addToggleButtonToMenuNav(followDiv);
  }

  #addToggleButtonToMenuNav(followDiv) {
    let navButton = document.createElement("button");
    navButton.setAttribute("type", "button");
    navButton.setAttribute("value", "off");
    navButton.innerHTML = `Menu \xa0\xa0\u25B6`;
    navButton.classList.add("menu-toggle-btn");
    navButton.addEventListener("click", this.#toggleMenuNav);
    followDiv.prepend(navButton);
  }

  #toggleMenuNav() {
    let navDiv = document.getElementsByClassName("menu-nav-container")[0];
    navDiv.classList.toggle("hidden");
    let navContainer = document.getElementById("nav");
    navContainer.classList.toggle("dimmed");
    let navButton = document.getElementsByClassName("menu-toggle-btn")[0];
    toggleMenuNavButtonValue(navButton);
    let menuContainer = document.getElementsByClassName("menu-container")[0];
    menuContainer.classList.toggle("dimmed");
    function toggleMenuNavButtonValue(navButton) {
      if (navButton.value === "on") {
        navButton.value = "off";
        navButton.innerHTML = `Menu \xa0\xa0\u25B6`;
      } else {
        navButton.value = "on";
        navButton.innerHTML = `Menu \xa0\xa0\u25BC`;
      }
    }
  }

  #addMenuCategoriesToList(navList) {
    for (let [categoryName, items] of Object.entries(this.menu)) {
      let listElement = document.createElement("li");
      listElement.classList.add("menu-nav-item");
      navList.appendChild(listElement);
      this.#createAnchorTagForCategory(listElement, categoryName);
    }
  }

  #createAnchorTagForCategory(listElement, categoryName) {
    let tag = document.createElement("a");
    tag.innerHTML = categoryName;
    tag.setAttribute("href", `#${categoryName}`);
    tag.classList.add("menu-nav-link");
    tag.addEventListener("click", this.#toggleMenuNav);
    listElement.appendChild(tag);
  }

  #createCategory(category, isSub = false) {
    for (let [categoryName, items] of Object.entries(category)) {
      let categoryContainer = document.createElement("div");
      this.menuContainer.appendChild(categoryContainer);
      categoryContainer.classList.add("menu-category-container");
      this.#createCategoryHeader(categoryName, isSub, categoryContainer);
      let listContainer = this.#createCategoryListContainer(categoryContainer);
      this.#addItemsToList(listContainer, items);
    }
  }

  #createCategoryHeader(title, isSub, categoryContainer) {
    let header = document.createElement("h2");
    header.classList.add("menu-category-header");
    header.setAttribute("id", title);
    if (isSub) {
      header = document.createElement("h3");
      header.classList.add("menu-sub-category-header");
    }
    header.innerHTML = title;
    categoryContainer.appendChild(header);
  }

  #createCategoryListContainer(categoryContainer) {
    let listContainer = document.createElement("div");
    listContainer.classList.add("menu-list-container");
    categoryContainer.appendChild(listContainer);
    return listContainer;
  }

  #addItemsToList(listContainer, items) {
    for (let [item, price] of Object.entries(items)) {
      if (item === "subCategories") {
        this.#createCategory(items.subCategories, true);
      } else if (item === "description") {
        let subCategoryDescriptionP = document.createElement("p");
        subCategoryDescriptionP.classList.add("menu-sub-category-description");
        subCategoryDescriptionP.innerHTML = price;
        listContainer.appendChild(subCategoryDescriptionP);
      } else {
        let list = document.createElement("ul");
        list.classList.add("menu-item-list");
        listContainer.appendChild(list);
        let listItem = document.createElement("li");
        listItem.classList.add("menu-list-item");
        list.appendChild(listItem);
        listItem.innerHTML = item;
        if (typeof price === "string") {
          let listPrice = document.createElement("li");
          list.appendChild(listPrice);
          listPrice.classList.add("menu-item-price");
          listPrice.innerHTML = price;
        } else {
          for (let [option, optionPrice] of Object.entries(price)) {
            this.#addOptionsToItem(option, optionPrice, list, listItem);
          }
        }
      }
    }
  }

  #addOptionsToItem(option, optionPrice, list, listItem) {
    if (option === "prix") {
      let listPrice = document.createElement("li");
      list.appendChild(listPrice);
      listPrice.classList.add("menu-item-price");
      listPrice.innerHTML = optionPrice;
      return;
    }
    if (option === "description") {
      let itemDescriptionP = document.createElement("p");
      itemDescriptionP.classList.add("menu-item-description");
      itemDescriptionP.innerHTML = optionPrice;
      listItem.appendChild(itemDescriptionP);
      return;
    }
    let optionList = document.createElement("ul");
    optionList.classList.add("menu-option-list");
    listItem.appendChild(optionList);
    let optionListItem = document.createElement("li");
    optionListItem.classList.add("menu-option-item");
    optionList.appendChild(optionListItem);
    optionListItem.innerHTML = option;
    let optionListPrice = document.createElement("li");
    optionListPrice.classList.add("menu-option-price");
    optionList.appendChild(optionListPrice);
    optionListPrice.innerHTML = optionPrice;
  }
}
