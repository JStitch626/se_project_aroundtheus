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
    return showInputError(formEl, inputEl, config);
  }
  hideInputError(formEl, inputEl, config);
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

// function enableSubmitButton(submitButton, { inactiveButtonClass }) {
//   submitButton.classList.remove(inactiveButtonClass);
//   submitButton.disabled = false;
// }

// function disableSubmitButton(submitButton, { inactiveButtonClass }) {
//   submitButton.classList.add(inactiveButtonClass);
//   submitButton.disabled = true;
// }

// function toggleButtonState(inputEls, submitButton, config) {
//   if (hasInvalidInput(inputEls)) {
//     return disableSubmitButton(submitButton, config);
//   }
//   enableSubmitButton(submitButton, config);
// }

function setEventListeners(formEl, config) {
  /* `config` should be taken from the `call` rather than the global scope then destructure using a var inside the function */
  const { inputSelector, submitButtonSelector } = config;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(submitButtonSelector);
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, config);
      toggleButtonState(inputEls, submitButton, config);
    });
  });
}

// function enableValidation(config) {
//   const formEls = [...document.querySelectorAll(config.formSelector)];
//   formEls.forEach((formEl) => {
//     formEl.addEventListener("submit", (e) => {
//       e.preventDefault();
//     });

//     setEventListeners(formEl, config);

//     // reset error messages
//   });
// }

const config = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

enableValidation(config);
