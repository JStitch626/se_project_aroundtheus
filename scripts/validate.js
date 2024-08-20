/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const formSelector = document.querySelector(".form");
const inputSelector = document.querySelector(".form__input");
const buttonElement = document.querySelector(".modal__button");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function checkInputValidity(formSelector, inputSelector) {
  if (!inputSelector.validity.valid) {
    showInputError(
      formSelector,
      inputSelector,
      inputSelector.validationMessage
    );
  } else {
    hideInputError(formSelector, inputSelector);
  }
}

function hasInvalidInput(formList) {
  return formList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
}

function toggleButtonState(formList, buttonElement) {
  if (hasInvalidInput(formList)) {
    buttonElement.classList.add("modal__button_inactive");
  } else {
    buttonElement.classList.remove("modal__button_inactive");
  }
}

function setEventListeners(formSelector) {
  const inputList = Array.from(formSelector.querySelectorAll(".form__input"));
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, buttonElement);
    });
  });
}
// function setEventListeners(formSelector, validationObject) {
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
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formSelector);
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
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

enableValidation(validationObject);

/* -------------------------------------------------------------------------- */
/*                                  Event Handlers                            */
/* -------------------------------------------------------------------------- */

function showInputError(formSelector, inputSelector, errorMessage) {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_visible");
}

function hideInputError(formSelector, inputSelector) {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_visible");
  errorElement.textContent = "";
}

//Source: Discord - Prevent blank cards from being added
function disableSubmitButton(formSelector) {
  const buttonElement = formSelector.querySelector(".modal__button");
  buttonElement.disabled = true;
  buttonElement.classList.add("modal__button_inactive");
}

function enableSubmitButton(formSelector) {
  const buttonElement = formSelector.querySelector(".modal__button");
  buttonElement.disabled = false;
  buttonElement.classList.remove("modal__button_inactive");
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
formSelector.addEventListener("submit", () => {
  evt.preventDefault();
});
//refer to Ch6.L6

// Disable the button when the form opens
formSelector.addEventListener("reset", () => {
  disableSubmitButton(formSelector);
});

formSelector.addEventListener("input", (evt) => {
  const form = evt.currentTarget;

  if (form.checkInputValidity(formSelector, inputSelector)) {
    enableSubmitButton(formSelector);
  } else {
    disableSubmitButton(formSelector);
  }
});
