function getAnswer() {
  var input = document.getElementById("answer").value;

  if (input === "inspect") {
    document.getElementById("game-start").classList.toggle(hidden);
    document.getElementById("inspect").classList.toggle(hidden);
    } else if (input == 'exit') {
    document.getElementById("game-start").classList.toggle(hidden);
    document.getElementById("exit-room").classList.toggle(hidden);
    } else { document.getElementById("error")}.innerHTML = "You tried doing ++answer++ but nothing happened." }
}
