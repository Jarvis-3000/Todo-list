var demo = document.getElementById("list_container");
var dragged;

document.addEventListener("drag",function(event){
dragged=event.target;
})

document.addEventListener("dragstart",function(event){

    event.target.style.background="rgb(255, 94, 0)";
    event.target.style.opacity=.8;
})

document.addEventListener("dragover",function(event){
   event.preventDefault();
//    console.log(event.target.childNodes[0].textContent);
})

document.addEventListener("drop",function(event){

    dragged.style.background="orange";
    dragged.style.opacity=1;
    // console.log(dragged.textContent+"  "+event.target.textContent);

    // dragged.parentNode.removeChild(dragged);
    // event.target.parentNode.appendChild(dragged); 

    demo.insertBefore(dragged.parentNode,event.target.parentNode);
   
})

