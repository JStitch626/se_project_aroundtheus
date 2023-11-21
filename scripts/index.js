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

/*
console.log(initialCards);


const profileTitle = document.querySelector(".profile__title");
const nameInput = document.getElementsByName("name")[0];

nameInput.value = profileTitle.textContent; */

const profileEditButton = document.querySelector("#profile-edit-button");
const modalOpened = document.querySelector(".modal_opened");
const modalClose = document.querySelector(".modal__close");

profileEditButton.addEventListener("click", function (evt) {
  if (true) {
    modalOpened.setAttribute("style", "visibility: visible");
  } else {
    modalOpened.removeAttribute("style", "visibility: visible");
  }
});

profileEditButton;
modalOpened;
