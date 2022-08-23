function getInputFieldById(inputFieldId) {
  const getInputField = document.getElementById(inputFieldId);
  const inputFieldString = getInputField.value;
  const inputField = parseInt(inputFieldString);
  return inputField;
}

function getTextFieldById(textFieldId, newAmount) {
  const getTextField = document.getElementById(textFieldId);
  getTextField.innerText = newAmount;
}
