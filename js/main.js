let array = [];
function playerName(element) {
  // console.log(element.parentNode.children[0].innerText);
  const addPlayerName = element.parentNode.children[0].innerText;
  // console.log(addPlayerName);

  if (array.length < 5) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(addPlayerName);
    node.appendChild(textnode);
    const ul = document.getElementById("player-List");
    ul.appendChild(node);
    array.push(node);
    // console.log(array.length);
    element.disabled = true;
  } else {
    alert("You can select maximum 5 player");
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalPlayer = array.length;
  const perPlayerAmount = getInputFieldById("per-player");
  const playerTotalCost = perPlayerAmount * totalPlayer;
  // console.log(playerTotalCost);
  getTextFieldById("total-player-cost", playerTotalCost);
  return playerTotalCost;
});

document.getElementById("total-amount").addEventListener("click", function () {
  const managerCost = getInputFieldById("manager-price");
  const coachCost = getInputFieldById("coach-price");

  const getTotalPlayerCost = document.getElementById("total-player-cost");
  const totalPlayerCostString = getTotalPlayerCost.innerText;
  const totalPlayerCost = parseInt(totalPlayerCostString);

  const calculateTotalCost = managerCost + coachCost + totalPlayerCost;
  getTextFieldById("total-amount-sum", calculateTotalCost);
});
