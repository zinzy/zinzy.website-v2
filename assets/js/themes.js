var body = document.querySelector("body"), // Creates a variable called body, so we can reference it more easily below.
  goLight = function() { // Creates a function called goLight that adds the 'dark' class to the body
    body.className = "";
  },
  goDark = function() { // Creates a function called goDark that removes the 'dark' class from the body
    body.className = "";
    body.classList.add("dark");
  },
  goTeal = function() {
      body.className = "";
      body.classList.add("teal");
    }

document.querySelector(".theme1").addEventListener("click", goLight, false); // Tells the first button to run the goLight function when clicked

document.querySelector(".theme2").addEventListener("click", goDark, false); // Tells the second button to run the goDark function when clicked

document.querySelector(".theme3").addEventListener("click", goTeal, false);

// Now let's do the bonus round!
var switchee = document.querySelector(".bonus__header"),
  switchButton = document.querySelector(".submit"),
  switcher = document.querySelector(".newText"),
  replaceText = function() {
    var switcherText = document.querySelector(".newText").value;
    switchee.innerHTML = switcherText;
  };

switchButton.addEventListener("click", replaceText, false); // Switch the text on click of the button

var switchImmediately = function() {
  switcher.addEventListener("keyup", replaceText, false); // Switch text every time you type a key in the input
};

switchImmediately(); // Invoke the function