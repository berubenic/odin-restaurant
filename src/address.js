export class Address {
  constructor() {
    this.address = {
      streetName: "1231 Notre-Dame",
      cityProvincePostal: "Lavaltrie, QC J5T 1R7",
      phoneNumber: "Tel.: 450-586-1337",
    };
  }

  createAddress(classContainer) {
    let addressContainer = document.createElement("div");
    addressContainer.classList.add("global-address-container");
    classContainer.appendChild(addressContainer);

    // insert each line of address as span tag in container
    Object.entries(this.address).forEach(([key, value]) => {
      let span = document.createElement("span");
      span.innerHTML = value;
      addressContainer.appendChild(span);
    });
  }
}
