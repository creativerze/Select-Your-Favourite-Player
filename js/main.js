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
    alert("You can add only 5 player");
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalPlayer = array.length;
  console.log(totalPlayer);
});
