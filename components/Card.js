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
