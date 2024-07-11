/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const formElement = document.querySelector(".form");
const formInput = document.querySelector(".form__input");
const formError = formElement.querySelector(`.${formInput.id}-error`);

/* -------------------------------------------------------------------------- */
/*                                  Event Handlers                                 */
/* -------------------------------------------------------------------------- */

const showInputError = (element) => {
  element.classList.add("form__input_type_error");
  formError.classList.add("form__input-error_active");
};

const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_active");
};
/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
formElement.addEventListener("submit", () => {
  evt.preventDefault();
});

formInput.addEventListener("input", () => {
  evt.target.validity.valid;
});

/* -------------------------------------------------------------------------- */
// pass all the settings on call

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// const checkInputValidity = ();
// const hasInvalidInput = ();
// const toggleButtonState = ();
