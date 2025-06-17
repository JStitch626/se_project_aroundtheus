class FormValidator {
  constructor(configObj, formElement) {
    this._formSelector = configObj.formSelector;
    this._inputSelector = configObj.inputSelector;
    this._submitButtonSelector = configObj.submitButtonSelector;
    this._inactiveButtonClass = configObj.inactiveButtonClass;
    this._inputErrorClass = configObj.inputErrorClass;
    this._errorClass = configObj.errorClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  enableValidation(config) {
    const formEls = [...document.querySelectorAll(config.formSelector)];
    formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      setEventListeners(formEl, config);
    });
  }
  enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  toggleButtonState(inputEls, submitButton, config) {
    if (hasInvalidInput(inputEls)) {
      return disableSubmitButton(submitButton, config);
    }
    enableSubmitButton(submitButton, config);
  }
}
