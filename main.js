canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastpostionofX, lastpostionofY;  
color="black";
width_of_line=2;

canvas.addEventListener("mouseDown",my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseMove",my_mousemove);
function my_mousemove(e){
currentPostionOfX=e.clientX-canvas.offsetLeft;
currentPostionOfY=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(lastpostionofX,lastpostionofY);
ctx.lineTo(currentPostionOfX,currentPostionOfY);
ctx.stroke();
}
lastpostionofX=currentPostionOfX;
lastpostionofY=currentPostionOfY;
}
canvas.addEventListener("mouseUp",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseLeave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseLeave";
}
