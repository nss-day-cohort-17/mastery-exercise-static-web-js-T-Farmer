// <!-- Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// ************* -->


// Will this be easier for me as join function or if else statement. Exploring...
// Variables corrected and set

function  pineTree(treeObject){
    var treeHeight =  parseInt(treeObject.height);
    var charChzn =   treeObject.character;
    var treeBase;
    var buildTree =    document.getElementById("buildTree");
    var buildTreeDiv =   "";


// Need a for-loop that +2 per iteration; levels = 7, base = 13
// Help from Callan: Use join function instead of just (+2) per iteration, as this allows for
// balance and left spacing needed to build the tree
// Got array properly framed including join argument to create needed spacing


// Function that builds tree based on user input from index.html

function pineTreeObject(){
    baseValue = document.getElementById("treeHeight").value;
    charValue = document.getElementById("charChzn").value;

if (baseValue && charValue) {
    alert("These are not valid options. Please try again.");
}

else    pineTree({
            height: baseValue,
            character: charChzn
    })

};
