/* -------------------------- Card template elements ------------------------- */
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");

/* Card modal */
const cardAddModal = document.querySelector("#card-add-modal");
const cardAddForm = cardAddModal.querySelector(".modal__form");

const cardAddButton = document.querySelector("#card-add-button");

/* Card form elements */
const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__image");
const cardInputTitle = document.querySelector("#card-input-title");
const cardInputImage = document.querySelector("#card-input-image-url");

class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    // ...
    this._cardImageElement.addEventLister("click", () => {
      this.handleImageClick(this);
    });
  }
}
