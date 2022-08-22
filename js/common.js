function getIndexFieldById(indexFieldId) {
  const getIndexField = document.getElementById(indexFieldId);
  const indexFieldString = getIndexField.value;
  const indexField = parseInt(indexFieldString);
  return indexField;
}

function getTextFieldById(textFieldId, newAmount) {
  const getTextField = document.getElementById(textFieldId);
  getTextField.innerText = newAmount;
}
