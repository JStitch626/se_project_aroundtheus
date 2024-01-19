const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------- Card template elements ------------------------- */
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");

/* ----------------------------- Wrappers  ---------------------------- */
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardAddModal = document.querySelector("#card-add-modal");
const cardAddForm = cardAddModal.querySelector(".modal__form");

/* ---------------------------- Buttons ---------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const cardAddButton = document.querySelector("#card-add-button");
const cardAddCloseButton = cardAddModal.querySelector(".modal__close");
const cardLikeButton = document.querySelector(".card__like-button");

/* ---------------------------- Profile elements ---------------------------- */
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileInputName = document.querySelector("#profile-input-name");
const profileInputDescription = document.querySelector(
  "#profile-input-description"
);

/* ------------------------------ Card elements ------------------------------ */
const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__image");
const cardInputTitle = document.querySelector("#card-input-title");
const cardInputImage = document.querySelector("#card-input-image-url");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  cardImageElement.setAttribute("src", cardData.link);
  cardImageElement.setAttribute("alt", cardData.name);
  cardTitleElement.textContent = cardData.name;
  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function profileAutoFillIn() {
  profileInputName.value = profileName.textContent;
  profileInputDescription.value = profileDescription.textContent;
  openPopup(profileEditModal);
}

function fillProfileForm() {
  profileName.textContent = profileInputName.value;
  profileDescription.textContent = profileInputDescription.value;
}

function cardLikeActive(evt) {
  evt.preventDefault();
  const cardLikeButtonClick = cardLikeButton.querySelector(
    ".card__like-button_active"
  );
  cardLikeButtonClick.classList.toggle(".card__like-button_active");
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  fillProfileForm();
  closePopup(profileEditModal);
}

function handleCardAddSubmit(evt) {
  evt.preventDefault();
  const name = cardInputTitle.value;
  const link = cardInputImage.value;
  renderCard({ name, link }, cardListElement);
  closePopup(cardAddModal);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

/* ------------------------- profile event listeners ------------------------ */
profileEditButton.addEventListener("click", profileAutoFillIn);
profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

/* -------------------------- card event listeners -------------------------- */
cardAddButton.addEventListener("click", () => {
  openPopup(cardAddModal);
});
cardAddCloseButton.addEventListener("click", () => {
  closePopup(cardAddModal);
});
cardAddForm.addEventListener("submit", handleCardAddSubmit);

// cardLikeButton.addEventListener("click", () => {
//   cardLikeActive();
// });

//Replace 'for' loop with initialCards.forEach
// for (let i = 0; i < initialCards.length; i++) {
//   const card = initialCards[i];
// }

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});
