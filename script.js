var player1=prompt("Enter player 1 name!");
var player2=prompt("Enter player 2 name!");


document.querySelector(".player1").textContent=player1;
document.querySelector(".player2").textContent=player2;

var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;

var dice1Image="dice_images/dice"+n1+".png";
document.querySelector(".img1").setAttribute("src",dice1Image);

var dice2Image="dice_images/dice"+n2+".png";
document.querySelector(".img2").setAttribute("src",dice2Image);


if(n1>n2){
    document.querySelector("h1").textContent="🏆 "+player1+" wins!";
}
else if(n1<n2){
    document.querySelector("h1").textContent="🏆 "+player2+" wins!";
}
else{
    document.querySelector("h1").textContent="🚫Match Draws!";
}