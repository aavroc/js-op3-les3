window.onload = function(){
    showShapes();
}

var arrShapeOptions = ["square", "circle", "triangle"];
var arrColorOptions = ["red", "green", "blue"];

function showShapes(){
    addShapeToDom(arrShapeOptions[0],arrColorOptions[0]);
    addShapeToDom(arrShapeOptions[1],arrColorOptions[1]);
    addShapeToDom(arrShapeOptions[2],arrColorOptions[2]);
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