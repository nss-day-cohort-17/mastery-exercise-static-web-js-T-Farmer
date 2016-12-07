//redid my function to properly assign pineTree obj per Caitlin
//requires input of number and character
//once conditions are met, passes into next function to build pine tree

function userInput () {
    event.preventDefault();
    if (document.getElementById("height").value === "") {
        alert("Please make selections for both!");
    }   else if (document.getElementById("character").value === "") {
        alert("Please make selections for both!");
    }
        else {
            var pineTree = {
                height: "",
                character: ""
            }
            pineTree.height = document.getElementById("height").value;
            pineTree.character = document.getElementById("character").value;

            tree(pineTree);
        }
}

//function to build levels of tree using character and spacing iteration
//and starting new line at the end of each

function tree (pineTree) {
    for (var i = 0; i < pineTree.height; i++) {
    console.log(' '.repeat((pineTree.height - 1) - i) + pineTree.character.repeat(2*i + 1) +'\n')

    }
}

//once appropriate selections are made, log to console

function enterPressed (keyboardEvent) {
    event.preventDefault();
    console.log(keyboardEvent)
    if (keyboardEvent.key === "Enter") {
        userInput();
    }
}

//event listeners for html elements, enter, click


var button = document.getElementById("button");
button.addEventListener("click", userInput);

var userHeight = document.getElementById("height");
userHeight.addEventListener('keyup', enterPressed);

var userCharacter = document.getElementById("character");
userCharacter.addEventListener('keyup', enterPressed);
