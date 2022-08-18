const button=document.querySelector("button");
const body=document.querySelector("body");

const colors=["#ff6b81","#747d8c","#1289A7","#1abc9c","#c23616","#8e44ad"];

body.style.backgroundColor="#8c7ae6";

button.addEventListener("click",changeBC);

function changeBC(){
    const clrindex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[clrindex];
}