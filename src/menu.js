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
          "2 mcx": "10,89 <b>ou</b> 13,59*",
          "3 mcx": "13,09 <b>ou</b> 26,39*",
          "4 mcx": "14,99 <b>ou</b> 17,69*",
          "5 mcx": "16,59 <b>ou</b> 19,99*",
          "10 mcx": "37,29 <b>ou</b> 52,39*",
          "15 mcx": "43,79 <b>ou</b> 52,39*",
          "20 mcx": "52,69 <b>ou</b> 62,99*",
        },
        "Sans accompagnement": {
          description: "*viande blanche",
          "10 mcx": "25,29 <b>ou</b> 31,09*",
          "15 mcx": "31,89 <b>ou</b> 40,29*",
          "20 mcx": "38,79 <b>ou</b> 49,49*",
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
      Desserts: {
        "Assortiment de tartes et de gâteaux sur demande": "",
      },
      "Casse-croûte": {
        Frites: {
          Petit: "2,89",
          Moyen: "3,89",
          Grand: "6,09",
          Familial: "8,19",
        },
        "Patates frites douces extra": "1,19",
        "Patates grecques extra": "1,19",
        subCategories: {
          Poutine: {
            Régulière: {
              Régulier: "9,99",
              Grand: "11,99",
            },
            "Au poulet(viande blanche extra 1,60)": {
              Régulier: "10,99",
              Grand: "12,99",
            },
            Italienne: {
              Régulier: "10,99",
              Grand: "13,29",
            },
            "Vol-au-vent": {
              Régulier: "12,99",
              Grand: "15,29",
            },
            Poivre: {
              Régulier: "10,99",
              Grand: "13,29",
            },
            "Poulet popcorn": {
              Régulier: "11,99",
              Grand: "14,29",
            },
            Bacon: {
              Régulier: "10,99",
              Grand: "14,09",
            },
            Texas: {
              description:
                "Sauce BBQ, sauce hot chicken, sauce buffalo, filets de poitrine panés et échalotes.",
              Régulier: "13,99",
              Grand: "16,29",
            },
          },
        },
        "Poulet popcorn": {
          Régulier: "7,19",
          Grand: "13,39",
          Familial: "20,79",
        },
      },
      "Prix de groupe": {
        description: "Repas choix du chef par pseronne*",
        "12 à 25 pers.": "8,39",
        "26 à 50 pers.": "8,19",
        "51 à 100 pers.": "7,79",
        "100 pers. et +": "7,39",
      },
    };
  }

  display() {
    this.#createMenuContainer();
    this.#createMenu();
    this.#createMenuNav();
  }

  #createMenuContainer() {
    this.container.appendChild(this.menuContainer);
    this.menuContainer.classList.add("menu-container");
  }

  #createMenu() {
    this.#createMenuHeader();
    this.#createCategory(this.menu);
  }

  #createMenuHeader() {
    let menuHeaderText = "Menu";
    let firstHeader = document.createElement("h1");
    firstHeader.classList.add("menu-title");
    firstHeader.innerHTML = menuHeaderText;
    this.menuContainer.appendChild(firstHeader);

    let deliveryMessage = "Commandez par téléphone ou au comptoir.";
    let phoneNumber = "450-586-1337";
    let secondHeader = document.createElement("h2");
    secondHeader.classList.add("menu-delivery-message");
    secondHeader.innerHTML = deliveryMessage;
    this.menuContainer.appendChild(secondHeader);

    let thirdHeader = document.createElement("h3");
    thirdHeader.classList.add("menu-delivery-number");
    thirdHeader.innerHTML = phoneNumber;
    this.menuContainer.appendChild(thirdHeader);
  }

  #createMenuNav() {
    // container
    let navDiv = document.createElement("div");
    this.menuContainer.prepend(navDiv);
    navDiv.classList.add("menu-nav-container");
    // list of menu categories
    let navList = document.createElement("ul");
    navList.setAttribute("id", "menu_nav_list");
    navList.classList.add("menu-nav-list");
    navDiv.appendChild(navList);

    this.#addMenuCategoriesToList(navList);
    this.#addToggleButtonToMenuNavContainer(navDiv);
    this.#createScrollListener(navDiv);
  }

  #addMenuCategoriesToList(navList) {
    for (let [categoryName, items] of Object.entries(this.menu)) {
      // list element for each category in menu
      let listElement = document.createElement("li");
      listElement.classList.add("menu-nav-list-item");
      navList.appendChild(listElement);
      // anchor tag for each list element
      let link = document.createElement("a");
      link.classList.add("menu-nav-list-link");
      link.innerHTML = categoryName;
      link.setAttribute("href", `#${categoryName}`);
      link.addEventListener("click", this.#toggleMenuNavContainer);
      listElement.appendChild(link);
    }
  }

  #addToggleButtonToMenuNavContainer(navDiv) {
    let navButton = document.createElement("button");
    navButton.setAttribute("type", "button");
    navButton.setAttribute("id", "menu_nav_btn");
    navButton.innerHTML = `\u25BC Catégories `;
    navButton.classList.add("menu-nav-container-toggle-btn");
    navDiv.prepend(navButton);
    // Event Listener
    navButton.addEventListener("click", this.#toggleMenuNavContainer);
  }

  #toggleMenuNavContainer() {
    // toggle menu nav list with visible class
    let navList = document.getElementById("menu_nav_list");
    navList.classList.toggle("visible");
    // toggle menu and main nav with dimmed
    let mainNavContainer = document.getElementById("nav");
    mainNavContainer.classList.toggle("dimmed");
    let menuCategoryContainers = document.getElementsByClassName(
      "menu-category-container"
    );
    for (let index = 0; index < menuCategoryContainers.length; index++) {
      menuCategoryContainers[index].classList.toggle("dimmed");
    }
    // toggle button arrow
    (function toggleMenuNavButton() {
      let menuNavButton = document.getElementById("menu_nav_btn");
      if (navList.classList.contains("visible")) {
        menuNavButton.innerHTML = `\u25B2  Catégories`;
      } else {
        menuNavButton.innerHTML = `\u25BC Catégories `;
      }
    })();
  }

  #createScrollListener(navDiv) {
    window.addEventListener("scroll", function (evt) {
      // This value is your scroll distance from the top
      let distance_from_top = document.body.scrollTop;

      // The user has scrolled to the tippy top of the page. Set appropriate style.
      console.log(distance_from_top);
      if (distance_from_top === 0) {
        navDiv.classList.add("sticky");
      }

      // The user has scrolled down the page.
      if (distance_from_top > 0) {
        navDiv.classList.remove("sticky");
      }
    });
  }

  #createCategory(category, isSubCategory = false) {
    for (let [categoryName, items] of Object.entries(category)) {
      // create container
      let categoryContainer = document.createElement("div");
      this.menuContainer.appendChild(categoryContainer);
      categoryContainer.classList.add("menu-category-container");
      // create header
      this.#createCategoryHeader(
        categoryName,
        isSubCategory,
        categoryContainer
      );
      // create list container
      let listContainer =
        this.#createAndReturnCategoryListContainer(categoryContainer);
      // add items to list
      this.#addItemsToList(listContainer, items);
    }
  }

  #createCategoryHeader(title, isSubCategory, categoryContainer) {
    let header;
    if (isSubCategory === true) {
      // create sub category header
      header = document.createElement("h3");
      header.classList.add("menu-sub-category-header");
    } else {
      // create main category header
      header = document.createElement("h2");
      header.classList.add("menu-category-header");
    }
    header.setAttribute("id", title);
    header.innerHTML = title;
    categoryContainer.appendChild(header);
  }

  #createAndReturnCategoryListContainer(categoryContainer) {
    // create and return container
    let listContainer = document.createElement("div");
    listContainer.classList.add("menu-list-container");
    categoryContainer.appendChild(listContainer);
    return listContainer;
  }

  #addItemsToList(listContainer, items) {
    for (let [item, price] of Object.entries(items)) {
      // create sub category
      if (item === "subCategories") {
        this.#createCategory(items.subCategories, true);
      } else if (item === "description") {
        // menu category description
        let subCategoryDescriptionP = document.createElement("p");
        subCategoryDescriptionP.classList.add("menu-sub-category-description");
        subCategoryDescriptionP.innerHTML = price;
        listContainer.appendChild(subCategoryDescriptionP);
      } else {
        // menu item list (item name, item price)
        let list = document.createElement("ul");
        list.classList.add("menu-item-list");
        listContainer.appendChild(list);
        // menu item
        let listItem = document.createElement("li");
        listItem.classList.add("menu-list-item");
        listItem.innerHTML = item;
        list.appendChild(listItem);
        if (typeof price === "string") {
          // menu price
          let listPrice = document.createElement("li");
          listPrice.classList.add("menu-item-price");
          listPrice.innerHTML = price;
          list.appendChild(listPrice);
        } else {
          for (let [option, optionPrice] of Object.entries(price)) {
            if (option === "prix") {
              // menu item price
              let listPrice = document.createElement("li");
              list.appendChild(listPrice);
              listPrice.classList.add("menu-item-price");
              listPrice.innerHTML = optionPrice;
            } else if (option === "description") {
              // menu item description
              let itemDescriptionP = document.createElement("p");
              itemDescriptionP.classList.add("menu-item-description");
              itemDescriptionP.innerHTML = optionPrice;
              listItem.appendChild(itemDescriptionP);
            } else {
              // menu item options and price
              this.#addOptionsToItem(option, optionPrice, listItem);
            }
          }
        }
      }
    }
  }

  #addOptionsToItem(option, optionPrice, listItem) {
    // option list
    let optionList = document.createElement("ul");
    optionList.classList.add("menu-option-list");
    listItem.appendChild(optionList);
    // option item
    let optionListItem = document.createElement("li");
    optionListItem.classList.add("menu-option-item");
    optionListItem.innerHTML = option;
    optionList.appendChild(optionListItem);
    // option price
    let optionListPrice = document.createElement("li");
    optionListPrice.classList.add("menu-option-price");
    optionListPrice.innerHTML = optionPrice;
    optionList.appendChild(optionListPrice);
  }
}
