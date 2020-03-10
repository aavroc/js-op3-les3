window.onload = function(){
    showShapes();
}

var arrShapeOptions = ["square", "circle", "triangle"];
var arrColorOptions = ["red", "green", "blue"];

function showShapes(){
    //JOUW CODE HIER
    addShapeToDom(arrShapeOptions[getRandomNumber()],arrColorOptions[getRandomNumber()]);
    addShapeToDom(arrShapeOptions[getRandomNumber()],arrColorOptions[getRandomNumber()]);
    addShapeToDom(arrShapeOptions[getRandomNumber()],arrColorOptions[getRandomNumber()]);
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
    //JOUW CODE HIER
}