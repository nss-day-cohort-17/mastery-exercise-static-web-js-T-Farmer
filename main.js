function displayTree(treeObject) {
    numberOfChar = 1;
    var spaces = buildTree.height - 1;
    for(var i = 0; i < buildTree.height; i++) {
        addSpaces(spaces);
        addChar(buildTree.charChzn);
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

function pineTreeObject(){
    baseValue = document.getElementById("treeHeight").value;
    charValue = document.getElementById("charChzn").value;

if (baseValue && charValue) {
    alert("These are not valid options. Please try again.");
}

    pineTree({
            height: baseValue,
            character: charValue
    })

};



// Set var, event listeners, and input function



var selectedHeight = document.getElementById("selectedHeight");
var button = document.getElementById("buildButton");
var charChzn = document.getElementById("charChzn");

var numberOfChar = 1;
var CharString = "";



button.addEventListener("click", getInput);
selectedHeight.addEventListener("keypress", enterPressed);
CharUsed.addEventListener("keypress", enterPressed);


// SHEESH

function pressedEnter (a) {
    if (a.keyCode === 13 && (baseID === document.activeElement || charID === document.activeElement)){
        pineTreeObject();
    }
};
