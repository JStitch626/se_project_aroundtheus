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
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg]",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const modalOpened = document.querySelector(".modal_opened");
const modalCloseButton = document.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
//console.log(profileDescription.textContent);
//let editForm = document.querySelector(".modal__form");

profileEditButton.addEventListener("click", function (evt) {
  if (true) {
    modalOpened.setAttribute("style", "visibility: visible");
  } else {
    modalOpened.removeAttribute("style", "visibility: visible");
  }
});

modalCloseButton.addEventListener("click", function (evt) {
  if (true) {
    modalOpened.removeAttribute("style", "visibility: visible");
  }
});

// function editForm() {
//   let title = document.querySelector(".form__input_title");
//   let description = document.querySelector(".form__input_description");

//   editForm.insertHTML();
// }
