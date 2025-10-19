export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    // ".card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    // ".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    // handleImageClick
    this._cardElement.addEventListener("click", () => {
      this._handleImageClick(this);
    });

    // ".card__image"
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handlePreviewPicture(this);
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
    // check if '= null' should be this.cardElement
  }

  _handlePreviewPicture() {
    this._cardElement.querySelector(".modal__image-preview").src = this._image;
    this._cardElement.querySelector(".modal__image-preview").alt = this._name;
    this._cardElement.querySelector(".modal__heading_image").textContent =
      this._name;
    openPopup(previewImageModal);
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    // get the card view
    // set event listeners
    this._setEventListeners();
    // return the card

    this._cardElement
      .querySelector(".card__image")
      .setAttribute("src", this._image);
    this._cardElement
      .querySelector(".card__image")
      .setAttribute("alt", this._name);
    this._cardElement.querySelector(".card__title").textContent = this._name;

    return this._cardElement;
  }
}
