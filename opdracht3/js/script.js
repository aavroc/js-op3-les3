window.onload = function(){
    showShapes();
}

var arrShapeOptions = ["square", "circle", "triangle"];
var arrColorOptions = ["red", "green", "blue"];

function showShapes(){
    addShapeToDom("square","red");
    addShapeToDom("circle","green");
    addShapeToDom("triangle","blue");
}

function addShapeToDom(strShape, strColor){
    //JOUW CODE HIER
}

function addSquareToDom(){ 
    element = document.createElement("div");
    element.className = "square";
    element.style.backgroundColor = "red";
    document.getElementById("container").appendChild(element);
}

function addCircleToDom(){
    element = document.createElement("div");
    element.className = "circle";
    element.style.backgroundColor = "green";
    document.getElementById("container").appendChild(element);
}

function addTriangleToDom(){
    element = document.createElement("div");
    element.className = "triangle";
    element.style.borderBottomColor = "blue";
    document.getElementById("container").appendChild(element);
}