function displayTree(treeObject){
    var treeHeight = parseInt(treeObject.height);
    var charChzn = treeObject.character;
    var pineTree = document.getElementById("pineTree");
    var pineTreeHTML = "";


// Need a for-loop that +2 per iteration; levels = 7, base = 13
// Help from Callan: Use join function instead of just (+2) per iteration, as this allows for
// balance and left spacing needed to build the tree
// Got array properly framed including join argument to create needed spacing

// added treeHeight array again to add other space and create cascading effect

for (var i = 0; i < treeHeight; i++) {
    treeBase += array(treeHeight - 1).join(" ");
    treeBase += array((1 + 2 * i) + 1).join(charChzn);
    treeBase += array(treeHeight - 1).join(" ");
    pineTreeHTML += "<div>" + treeBase + "</div>";
    pineTree.innerHTML = pineTreeHTML;
    console.log();
    };
}

// var xmas = function(tree) {
//   if (pineHieght.value === "", character.value === "") {
//   alert("Can't leave anything blank! Please fill in both questions.");
// }
//   tree.height = pineHieght.value
//   tree.key = character.value
//   for (var i = 0; i < tree.height; i++) {
//   var design = " ".repeat(tree.height - i);
//   design += tree.key.repeat((2 * i) + 1);
//   console.log(design);








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



var buildTheTree = document.getElementById("build");
var baseID = document.getElementById("treeHeight");
var charID = document.getElementById("charChzn");



buildTheTree.addEventListener("click", build);
baseID.addEventListener("onkeypress", pressedEnter);
charID.addEventListener("onkeypress", pressedEnter);


// SHEESH

function pressedEnter (a) {
    if (a.keyCode === 13 && (baseID === document.activeElement || charID === document.activeElement)){
        pineTreeObject();
    }
};
