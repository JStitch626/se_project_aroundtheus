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

const modalList = document.querySelectorAll(".modal");
/* Profile modal */
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");

/* Card modal */
const cardAddModal = document.querySelector("#card-add-modal");
const cardAddForm = cardAddModal.querySelector(".modal__form");

/* Preview image modal */
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__image-preview");
const previewImageDescription = document.querySelector(".modal__heading_image");

/* ---------------------------- Buttons ---------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const cardAddButton = document.querySelector("#card-add-button");
// find all close buttons
const closeButtons = document.querySelectorAll(".modal__close");

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
  document.addEventListener("keydown", handleEscKey);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscKey);
}

// Pulls card elements from cardTemplate
function getCardElement(cardData) {
  // cardData: { name: "...", link: ".."}
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewImageDescription.textContent = cardData.name;
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

function openProfileModal() {
  profileInputName.value = profileName.textContent;
  profileInputDescription.value = profileDescription.textContent;
  openPopup(profileEditModal);
}

function setProfileData() {
  profileName.textContent = profileInputName.value;
  profileDescription.textContent = profileInputDescription.value;
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  setProfileData();
  closePopup(profileEditModal);
}

function handleCardAddSubmit(e) {
  e.preventDefault();
  const name = cardInputTitle.value;
  const link = cardInputImage.value;
  renderCard({ name, link }, cardListElement);
  e.target.reset();
  closePopup(cardAddModal);
}

function handleOverlayClick(e) {
  if (e.target.classList.contains("modal_opened")) {
    //`e.target` is the opened modal, so you do not need `modal` var to search for it in DOM
    closePopup(e.target);
  }
}

function handleEscKey(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

/* ----------------------- Close modal event listeners ---------------------- */

/* Universal handler for any close buttons */
closeButtons.forEach((button) => {
  // find the closest popup
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closePopup(modal));
});

/* MouseEvent - click outside modal */
modalList.forEach((modal) => {
  modal.addEventListener("mousedown", handleOverlayClick);
});

/* ------------------------- Profile event listeners ------------------------ */
profileEditButton.addEventListener("click", openProfileModal);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

/* -------------------------- Card event listeners -------------------------- */
cardAddButton.addEventListener("click", () => {
  openPopup(cardAddModal);
});

cardAddForm.addEventListener("submit", handleCardAddSubmit);

/* ------------------------------ Initial cards ----------------------------- */
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});
