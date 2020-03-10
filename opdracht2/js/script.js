window.onload = function(){
    showShapes();
}

function showShapes(){
    addSquareToDom();
    //JOUW CODE HIER

}

function addSquareToDom(){
    // document.getElementById("container").innerHTML = "<div class='square' style='background-color: red;'></div>"
    
    element = document.createElement("div");
    element.className = "square";
    element.style.backgroundColor = "red";
    document.getElementById("container").appendChild(element);
}

function addCircleToDom(){
    //JOUW CODE HIER
}

function addTriangleToDom(){
    //JOUW CODE HIER
}