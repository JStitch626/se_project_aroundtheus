/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const formElement = document.querySelector(".form");
const formInput = document.querySelector(".form__input");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function setEventListeners(formElement, config) {
  // look for all inputs inside form
  // loop through all inputs to see if all are valid
  // if input !valid
  // get validation message
  // add error class to input
  // display error message
  // disable button
  // if all inputs are valid
  // enable button
  // reset error messages
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", () => {
      e.preventDefault();
    });

    setEventListeners(formElement, config);
  });
}

// enabling validation by calling enableValidation()
// pass all the settings on call
// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// });
// the code below is the same as calling the enableValidation() fn above; puts the object in a variable

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);

// const hasInvalidInput = ();
// const toggleButtonState = ();

/* -------------------------------------------------------------------------- */
/*                                  Event Handlers                            */
/* -------------------------------------------------------------------------- */

function showInputError(formElement, inputElement, errorMessage) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("form__input-error_active");
}

function hideInputError(formElement, inputElement) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_active");
  formError.textContent = "";
}

function setEventListeners(formElement) {
  const formInputList = Array.from(
    formElement.querySelectorAll(".form__input")
  );

  formInputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
    });
  });
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
formElement.addEventListener("submit", () => {
  e.preventDefault();
});

formInput.addEventListener("input", checkInputValidity);
