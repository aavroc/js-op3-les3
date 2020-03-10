window.onload = function(){
    showShapes();
}

var arrShapeOptions = ["square", "circle", "triangle"];
var arrColorOptions = ["red", "green", "blue"];

var arrShownShapes = [];
var arrShownColors = [];

//JOUW CODE HIER

function showShapes(){
    //JOUW CODE HIER?
    addPreviousShapesToDom();
    
    removePreviousShapes();
    
    addShapeToDom(arrShapeOptions[getRandomNumber()],arrColorOptions[getRandomNumber()]);
    addShapeToDom(arrShapeOptions[getRandomNumber()],arrColorOptions[getRandomNumber()]);
    addShapeToDom(arrShapeOptions[getRandomNumber()],arrColorOptions[getRandomNumber()]);
    //JOUW CODE HIER?
}

function addShapeToDom(strShape, strColor){
    element = document.createElement("div");
    element.className = strShape;

    if (strShape == "triangle") {
        element.style.borderBottomColor = strColor;
    }
    else{
        element.style.backgroundColor = strColor;
    }
    
    document.getElementById("container").appendChild(element);  
}

function getRandomNumber(){
    intRandom = Math.floor(Math.random() * 3);
    return intRandom;
}

function removePreviousShapes(){
    document.getElementById("container").innerHTML = "";
}

function addPreviousShapesToDom(){
    elementClone = document.getElementById("container").cloneNode(true);
    document.getElementById("history").appendChild(elementClone);
}

