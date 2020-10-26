/**
 * @function This function clears the input field when called.
 * @return null
 */
function clearField() {
  document.getElementById("answer").value = "";
}
/**
 * @function This function clears the error message when called.
 * @return null
 */
function clearError() {
  document.getElementById("error").innerHTML = "";
}
/**
 * @function This function reads user input and presents outcome.
 */
function getAnswer() {
  if (document.getElementById("error").innerHTML.startsWith("You tried")) {
    clearError();
  }

  var input = document.getElementById("answer").value;

  if (input === "start") {
    document.getElementById("intro").classList.toggle("hidden");
    document.getElementById("game-start").classList.toggle("hidden");
  } else if (input == "inspect") {
    document.getElementById("game-start").classList.toggle("hidden");
    document.getElementById("inspect").classList.toggle("hidden");
  } else if (input == "yes") {
    document.getElementById("inspect").classList.toggle("hidden");
    document.getElementById("use-hat").classList.toggle("hidden");
  } else if (input == "no") {
    document.getElementById("inspect").classList.toggle("hidden");
    document.getElementById("leave-room-no-hat").classList.toggle("hidden");
  } else if (input == "leave") {
    document.getElementById("use-hat").classList.toggle("hidden");
    document.getElementById("leave-room-hat").classList.toggle("hidden");
  } else if (input == "leave") {
    document.getElementById("use-hat").classList.toggle("hidden");
    document.getElementById("leave-room-hat").classList.toggle("hidden");
  } else if (input == "east") {
    document.getElementById("leave-room-hat").classList.toggle("hidden");
    document.getElementById("left").classList.toggle("hidden");
  } else if (input == "west") {
    document.getElementById("leave-room-hat").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
  } else if (input == "exit") {
    document.getElementById("game-start").classList.toggle("hidden");
    document.getElementById("exit-room").classList.toggle("hidden");
  } else if (input == "cafeteria") {
    document.getElementById("leave-room-no-hat").classList.toggle("hidden");
    document.getElementById("left").classList.toggle("hidden");
  } else if (input == "electrical") {
    document.getElementById("leave-room-no-hat").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
  } else if (input == "left") {
    document.getElementById("exit-room").classList.toggle("hidden");
    document.getElementById("left").classList.toggle("hidden");
  } else if (input == "back") {
    document.getElementById("left").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
  } else if (input == "right") {
    document.getElementById("exit-room").classList.toggle("hidden");
    document.getElementById("right").classList.toggle("hidden");
  } else if (input == "restart") {
    document.getElementById("right").classList.toggle("hidden");
    document.getElementById("intro").classList.toggle("hidden");
  } else {
    document.getElementById("error").innerHTML =
      "You tried  " + input + "  but nothing happened.";
  }
}
