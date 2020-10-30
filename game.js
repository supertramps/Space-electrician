// array containing user inputs
let userInputs = [];

/**
 * clears the input field when called.
 *
 */
function clearField() {
  document.getElementById("answer").value = "";
}
/**
 * clears the error message when called.
 *
 */
function clearError() {
  document.getElementById("error").innerHTML = "";
}
/**
 * reads user input and presents outcome. Uses classList.toggle to show or hide elements (in our case <p> tags) depending on user input.
 * Also confirms input with the array userInputs so the user can't enter commands that he/she isn't allowed to at a certain state of the game.
 */

function getAnswer() {
  if (document.getElementById("error").innerHTML.startsWith("You tried")) {
    clearError();
  }

  var input = document.getElementById("answer").value;

  if (input === "start") {
    document.getElementById("intro").classList.toggle("hidden");
    document.getElementById("game-start").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "inspect" && userInputs.includes("start")) {
    document.getElementById("game-start").classList.toggle("hidden");
    document.getElementById("inspect").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "yes" && userInputs.includes("inspect")) {
    document.getElementById("inspect").classList.toggle("hidden");
    document.getElementById("use-hat").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "no" && userInputs.includes("inspect")) {
    document.getElementById("inspect").classList.toggle("hidden");
    document.getElementById("leave-room-no-hat").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "leave" && userInputs.includes("yes")) {
    document.getElementById("use-hat").classList.toggle("hidden");
    document.getElementById("leave-room-hat").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "exit" && userInputs.includes("start")) {
    document.getElementById("game-start").classList.toggle("hidden");
    document.getElementById("exit-room").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "east" && userInputs.includes("yes")) {
    document.getElementById("leave-room-hat").classList.toggle("hidden");
    document.getElementById("left").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "west" && userInputs.includes("yes")) {
    document.getElementById("leave-room-hat").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "cafeteria" && userInputs.includes("no")) {
    document.getElementById("leave-room-no-hat").classList.toggle("hidden");
    document.getElementById("left").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "electrical" && userInputs.includes("no")) {
    document.getElementById("leave-room-no-hat").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "left" && userInputs.includes("exit")) {
    document.getElementById("exit-room").classList.toggle("hidden");
    document.getElementById("left").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "back" && userInputs.includes("leave" || "exit")) {
    document.getElementById("left").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "right" && userInputs.includes("exit")) {
    document.getElementById("exit-room").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
    userInputs.push(input);
  } else if (input == "restart") {
    document.getElementById("right").classList.toggle("hidden");
    document.getElementById("intro").classList.toggle("hidden");
  } else {
    document.getElementById("error").innerHTML =
      "You tried  " + input + "  but nothing happened.";
  }
}

// I would absolutely choose a different method to build this game today. This is way too hacky and almost depends on luck if it runs well. Glad I tried it though so I know in the future.
