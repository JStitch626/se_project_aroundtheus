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
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".card__image_preview");

/* ---------------------------- Buttons ---------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const cardAddButton = document.querySelector("#card-add-button");
const cardAddCloseButton = cardAddModal.querySelector(".modal__close");
const previewImageCloseButton =
  previewImageModal.querySelector(".modal__close");

/* ---------------------------------- Forms --------------------------------- */
/* Profile form elements */
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileInputName = document.querySelector("#profile-input-name");
const profileInputDescription = document.querySelector(
  "#profile-input-description"
);

/* Card form elements */
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

// Pulls card elements from cardTemplate
function getCardElement(cardData) {
  // cardData: { name: "...", link: ".."}
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  // Step 7/7 - read article; use visibility:hidden NOT display:none

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    // set the src of the image modal element
    // set the textContent of the caption element
    previewImage.value = cardData.link;
    previewImage.textContent = cardData.name;
    openPopup(previewImageModal);
  });

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

/* ---------------------- preview image event listener ---------------------- */
previewImageCloseButton.addEventListener("click", () => {
  closePopup(previewImageModal);
});

/* ------------------------------ Initial cards ----------------------------- */
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});
