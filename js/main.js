let array = [];
function playerName(element) {
  // console.log(element.parentNode.children[0].innerText);
  const addPlayerName = element.parentNode.children[0].innerText;
  // console.log(addPlayerName);
  // return addPlayerName;

  if (array.length < 5) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(addPlayerName);
    node.appendChild(textnode);
    const ul = document.getElementById("player-List");
    ul.appendChild(node);
    array.push(node);
    // console.log(array.length);
  } else {
    alert("You can select only 5 player");
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalPlayer = array.length;
  const perPlayerAmount = getIndexFieldById("per-player");
  const playerTotalCost = perPlayerAmount * totalPlayer;
  // console.log(playerTotalCost);
  getTextFieldById("total-player-cost", playerTotalCost);
  // total - player - cost;
  return playerTotalCost;
});

document.getElementById("total-amount").addEventListener("click", function () {
  const managerCost = getIndexFieldById("manager-price");
  const coachCost = getIndexFieldById("coach-price");

  const getTotalPlayerCost = document.getElementById("total-player-cost");
  const totalPlayerCostString = getTotalPlayerCost.innerText;
  const totalPlayerCost = parseInt(totalPlayerCostString);

  const calculateTotalCost = managerCost + coachCost + totalPlayerCost;
  getTextFieldById("total-amount-sum", calculateTotalCost);
});
