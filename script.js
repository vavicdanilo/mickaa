const btn=document.getElementById("startButton");
const msg=document.getElementById("message");

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];

function createConfetti(){

const colors=["#ff0000","#00ff00","#0099ff","#ffff00","#ff00ff","#ffffff"];

for(let i=0;i<250;i++){

pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height-canvas.height,
size:5+Math.random()*8,
speed:2+Math.random()*5,
color:colors[Math.floor(Math.random()*colors.length)],
dx:-2+Math.random()*4
});

}

animate();

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{

ctx.fillStyle=p.color;
ctx.fillRect(p.x,p.y,p.size,p.size);

p.y+=p.speed;
p.x+=p.dx;

});

requestAnimationFrame(animate);

}

btn.onclick=function(){

btn.style.display="none";

msg.classList.remove("hidden");

createConfetti();

}