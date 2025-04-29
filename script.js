function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  const resultText = roll === 6 ? "🎉 You Win!" : `You rolled a ${roll}. Try again!`;
  document.getElementById("result").innerText = resultText;
}
