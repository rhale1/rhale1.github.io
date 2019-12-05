
function getOrder() {
var txt = "<h3>You Ordered:</h3>";
var txt2 = " ";
var runningTotal = 0;
var sizeTotal = 0;
var sizeArray = document.getElementsByClassName("size");
for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        txt += selectedSize+"<br>";
    }
}
if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
} else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
} else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
} else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
}
runningTotal = sizeTotal;
txt2 = " <br>"+"<i> Size: </i>"+ "$"+sizeTotal + txt2;
getMeat(runningTotal,txt,txt2); 
};

function getMeat(runningTotal,txt,txt2) {
var meatTotal = 0;
var selectedMeat = [];
var meatArray = document.getElementsByClassName("meats");
for (var j = 0; j < meatArray.length; j++) {
    if (meatArray[j].checked) {
        selectedMeat.push(meatArray[j].value);
        txt += meatArray[j].value+"<br>";
    }
}
var meatCount = selectedMeat.length;
if (meatCount > 1) {
    meatTotal = (meatCount - 1);
} else {
    meatTotal = 0;
}
runningTotal = (runningTotal + meatTotal);
txt2 = " <br>" + "<i> Meats: </i>"+ "$"+meatTotal + txt2 +"<br>";
getCheese(runningTotal,txt, txt2);
};

function getCheese(runningTotal,txt,txt2) {
var cheeseTotal = 0;
var cheeseArray = document.getElementsByClassName("cheese");
for (var k = 0; k < cheeseArray.length; k++) {
    if (cheeseArray[k].checked) {
        var selectedCheese = cheeseArray[k].value;
        txt += selectedCheese+"<br>";
        } 
    }
if (selectedCheese === "Extra Cheese") {
    cheeseTotal = 3; 
} else {
    cheeseTotal = 0;
}
runningTotal = (runningTotal + cheeseTotal);
txt2 = " <br>" +" <i>Cheese:</i> "+ "$"+cheeseTotal + txt2 +"<br>" ;
getCrust(runningTotal,txt,txt2);
};

function getCrust(runningTotal,txt,txt2) {
var crustTotal = 0;
var crustArray = document.getElementsByClassName("crust");
for (var c = 0; c < crustArray.length; c++) {
    if (crustArray[c].checked) {
        var selectedCrust = crustArray[c].value;
        txt += selectedCrust+"<br>";
        }
    }
if (selectedCrust === "Cheese Stuffed Crust") {
    crustTotal = 3; 
    } else {
        crustTotal = 0;
    }
runningTotal = (runningTotal + crustTotal);
txt2 = " <br>" +" <i>Crust:</i> "+ "$"+crustTotal + txt2 +"<br>" ;
getSauce(runningTotal,txt,txt2);
};

function getSauce(runningTotal,txt,txt2) {
var sauceTotal = 0;
var sauceArray = document.getElementsByClassName("sauce");
for (var s = 0; s < sauceArray.length; s++) {
    if (sauceArray[s].checked) {
        var selectedSauce = sauceArray[s].value;
        txt += selectedSauce+"<br>";
    }
}
runningTotal = (runningTotal + sauceTotal);
txt2 = "<br>" + " <i>Sauce:</i> "+ "$"+sauceTotal + txt2 +"<br>" ;
getVeggie(runningTotal,txt,txt2);
};

function getVeggie(runningTotal,txt,txt2) {
var veggieTotal = 0;
var selectedVeggie = [];
var veggieArray = document.getElementsByClassName("veggies");
for (var p = 0; p < veggieArray.length; p++) {
    if (veggieArray[p].checked) {
        selectedVeggie.push(veggieArray[p].value);
        txt += veggieArray[p].value+"<br>";
    }
}
var veggieCount = selectedVeggie.length;
if (veggieCount > 1) {
    veggieTotal = (veggieCount - 1);
} else {
    veggieTotal = 0;
}
runningTotal = (runningTotal + veggieTotal);
txt2 = "<br>"+" <i>Veggies:</i> "+ "$"+veggieTotal + txt2 +"<br>" ;

document.getElementById("displayTxt").innerHTML= txt;
document.getElementById("runningTotal2").innerHTML = "<h3>Running Total:</h3>" +txt2;
document.getElementById("totalPrice").innerHTML = "Total Price: $"+runningTotal+".00"+"</strong></h3>";
};

function cancelOrder() {
var unCheck= document.getElementsByTagName("input");
for (var i = 0; i < unCheck.length; i++) {
    unCheck[i].checked = false 
}
document.getElementById("displayTxt").innerHTML = " "; 
document.getElementById("totalPrice").innerHTML = " ";
document.getElementById("runningTotal2").innerHTML = " ";
};

