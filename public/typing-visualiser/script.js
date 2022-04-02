const input = document.getElementById("input");
const output = document.getElementById("output");
const caretText = document.getElementById("caretText");
var text;
var letters;
var locked;
var delay = 500;

function SetupChars(input) {
    letters = input.split("");
    return(letters);
}

function Type() {
    locked = true;
    caretText.innerHTML = "_";
    for (let i = 0; i < letters.length; i++) { // Must be a 'let' variable!!
        setTimeout(() => {
            output.innerHTML += letters[i];
        }, 100 * i);
    }
    setTimeout(() => { // Typing animation finished
        Untype();
    }, 100 * letters.length + delay);
}

function Untype() {
    var tempText = text;
    for (let i = 0; i < letters.length; i++) { // Must be a 'let' variable!!
        setTimeout(() => {
            tempText = tempText.substring(0, tempText.length - 1)
            output.innerHTML = tempText;
        }, 40 * i);
    }
    setTimeout(() => { // Untyping animation finished
        locked = false;
    }, 100 * letters.length);
}

input.addEventListener("keyup", (e) => {
    if(e.key == "Enter" && !locked) {
        text = SetupChars(input.value);
        Type()
    }
})

// Shut up i was being lazy
async function caretAnim() {
    setInterval(() => {
        if (!locked) {
            if (caretText.innerHTML == "_") {
                caretText.innerHTML = "";
            }
            else {
                caretText.innerHTML = "_";
            }
        }
    }, 500);
}

caretAnim();
