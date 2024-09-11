/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

// const formEl = document.querySelector(".form");
// const formInput = document.querySelector(".form__input");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessage = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMessage.textContent = inputEl.validationMessage;
  errorMessage.classList.add(errorClass);
}

function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessage = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessage.textContent = "";
  errorMessage.classList.remove(errorClass);
}

function checkInputValidity(formEl, inputEl, config) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, config);
  } else {
    hideInputError(formEl, inputEl, config);
  }
}

function setEventListeners(formEl, config) {
  //Object destructuring - "Syntactic sugar" makes code more legible. //const inputSelector = inputSelector.config means the same as below. //creates a variable called `inputSelector` with the property `inputSelector.config`
  const { inputSelector } = config;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, config);
    });
  });
}

function enableValidation(config) {
  // use Spread operator [...] instead of Array.from() --> this grabs an array or array-like obj and makes a copy
  //best practice: instead of ".modal__form," refer to the object that contains all the selectors and classes
  const formEls = [...document.querySelectorAll(config.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, config);
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
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

enableValidation(config);

// const hasInvalidInput = ();
// const toggleButtonState = ();

/* -------------------------------------------------------------------------- */
/*                                  Event Handlers                            */
// /* -------------------------------------------------------------------------- */

// function setEventListeners(formEl) {
//   const formInputList = Array.from(formEl.querySelectorAll(".form__input"));

//   formInputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       checkInputValidity(formEl, inputElement);
//     });
//   });
// }

// /* -------------------------------------------------------------------------- */
// /*                               Event Listeners                              */
// /* -------------------------------------------------------------------------- */

// formInput.addEventListener("input", checkInputValidity);
