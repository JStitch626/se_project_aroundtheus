/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const formElement = document.querySelector(".form");
const formInput = document.querySelector(".form__input");
const buttonElement = document.querySelector(".modal__button");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function checkInputValidity(formElement, formInput) {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
}

function hasInvalidInput(formList) {
  return formList.some((formInput) => {
    return !formInput.validity.valid;
  });
}

function toggleButtonState(formList, buttonElement) {
  if (hasInvalidInput(formList)) {
    buttonElement.classList.add("modal__button_inactive");
  } else {
    buttonElement.classList.remove("modal__button_inactive");
  }
}

function setEventListeners(formElement) {
  const formList = Array.from(formElement.querySelectorAll(".form__input"));
  formList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      checkInputValidity(formElement, formInput);
      toggleButtonState(formList, buttonElement);
    });
  });
}
// function setEventListeners(formElement, validationObject) {
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
// }

function enableValidation(validationObject) {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
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

const validationObject = {
  formSelector: "form",
  inputSelector: "form__input",
  submitButtonSelector: "modal__button",
  inactiveButtonClass: "modal__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

enableValidation(validationObject);

/* -------------------------------------------------------------------------- */
/*                                  Event Handlers                            */
/* -------------------------------------------------------------------------- */

function showInputError(formElement, formInput, errorMessage) {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add("form__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("form__input-error_visible");
}

function hideInputError(formElement, formInput) {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_visible");
  formError.textContent = "";
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
formElement.addEventListener("submit", () => {
  evt.preventDefault();
});

formInput.addEventListener("input", checkInputValidity);
