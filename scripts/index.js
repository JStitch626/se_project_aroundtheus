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

/* ----------------------------- Profile elements ---------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileInputName = document.querySelector("#profile-input-name");
const profileInputDescription = document.querySelector(
  "#profile-input-description"
);

/* -------------------------- Card template element ------------------------- */
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");

/* ------------------------------ Card elements ------------------------------ */
const cardAddButton = document.querySelector("#card-add-button");
const cardAddModal = document.querySelector("#card-add-modal");
const cardAddCloseButton = cardAddModal.querySelector(".modal__close");

const cardInputTitle = document.querySelector("#card-input-title");
const cardInputImage = document.querySelector("#card-input-image");
const cardAddForm = cardAddModal.querySelector("#card-add-form");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// function openPopup() {
//   cardAddModal.classList.add("modal_opened");
// }

// function closePopup() {
//   profileEditModal.classList.remove("modal_opened");
//   cardAddModal.classList.remove("modal_opened");
// }

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

// function handleProfileEditSubmit(evt) {
//   evt.preventDefault();
//   fillProfileForm();
//   closePopup(profileEditModal);
// }

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", profileAutoFillIn);

cardAddButton.addEventListener("click", () => {
  openPopup(cardAddModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

cardAddCloseButton.addEventListener("click", () => {
  closePopup(cardAddModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

//Replace 'for' loop with initialCards.forEach
// for (let i = 0; i < initialCards.length; i++) {
//   const card = initialCards[i];
// }

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  console.log(cardElement);
  cardListElement.prepend(cardElement);
});
