export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    // ".card__like-button"
    // ".card__delete-button"
  }

  getView() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .cloneNode(true);
    console.log(cardElement);
    // console.log(cardElement);
    // get the card view
    // set event listeners
    this._setEventListeners();
    // return the card
  }
}
