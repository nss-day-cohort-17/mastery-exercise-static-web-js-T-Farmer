//redid my function to properly assign pineTree obj per Caitlin

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

function tree (pineTree) {
    for (var i = 0; i < pineTree.height; i++) {
    console.log(' '.repeat((pineTree.height - 1) - i) + pineTree.character.repeat(2*i + 1) +'\n')

    }
}

//event listeners for html elements, enter, click

function enterPressed (keyboardEvent) {
    event.preventDefault();
    console.log(keyboardEvent)
    if (keyboardEvent.key === "Enter") {
        userInput();
    }
}



var button = document.getElementById("button");
button.addEventListener("click", userInput);

var userHeight = document.getElementById("height");
userHeight.addEventListener('keyup', enterPressed);

var userCharacter = document.getElementById("character");
userCharacter.addEventListener('keyup', enterPressed);
