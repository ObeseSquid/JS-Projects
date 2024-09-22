function incrementScore(team, value) {
  const scoreElement = document.getElementById(`${team}-score`);
  const currentScore = parseInt(scoreElement.innerText);
  const newScore = currentScore + value;
  scoreElement.innerText = newScore;
}

function incrementFouls(team, value) {
  const foulsElement = document.getElementById(`${team}-fouls`);
  const currentFouls = parseInt(foulsElement.innerText);
  const newFouls = currentFouls + value;
  foulsElement.innerText = newFouls;
}
