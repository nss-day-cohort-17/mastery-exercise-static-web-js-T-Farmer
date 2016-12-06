function displayTree(treeObject) {
    numberOfChar = 1;
    var spaces = treeObject.height - 1;
    for(var i = 0; i < treeObject.height; i++) {
        addSpaces(treeObject.spaces);
        addChar(treeObject.charChzn);
        printLine();
        spaces--;
    }
    charString = "";
}


// Need a for-loop that +2 per iteration; levels = 7, base = 13
// Help from Callan: Use join function instead of just (+2) per iteration, as this allows for
// balance and left spacing needed to build the tree
// Got array properly framed including join argument to create needed spacing

// added treeHeight array again to add other space and create cascading effect

// Function that builds tree based on user input from index.html


function userInput() {
    if(charChzn.value === "" || selectedHeight.value === "") {
        alert("This is not a valid option. Please try again.");
    }   else {
        var pineTree = {
            height: selectedHeight.value,
            charChzn: charChzn.value
        };
        console.log(userInput.length);
    }
}


// Set var, event listeners, and input function


var selectedHeight = document.getElementById("selectedHeight");
var button = document.getElementById("buildButton");
var charChzn = document.getElementById("charChzn");

var numberOfChar = 1;
var charString = "";


function spaces(x) {
    for(; x > 0; x--) {
        charString += " ";
    }
}

function addChar(selectedChar) {
    for (var i = 1; i <= numberOfChar; i++) {
        charString += selectedChar;
    }
    numberOfChar += 2
}


function printLine() {
    console.log(charString + "\n");
    charString = "";
}


//Event listeners


button.addEventListener("click", userInput);
selectedHeight.addEventListener("keypress", enterPressed);
charChzn.addEventListener("keypress", enterPressed);


// SHEESH


function enterPressed(event) {
    var key = event.which || event.keyCode;
    if (key === 13) {
        userInput();
    }
}
