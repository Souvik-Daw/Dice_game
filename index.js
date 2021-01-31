var s=Math.floor(Math.random()*6)+1
if(s==1)
document.getElementsByClassName("img1")[0].setAttribute("src","Images/dice1.png");
else if(s==2)
document.getElementsByClassName("img1")[0].setAttribute("src","Images/dice2.png");
else if(s==3)
document.getElementsByClassName("img1")[0].setAttribute("src","Images/dice3.png");
else if(s==4)
document.getElementsByClassName("img1")[0].setAttribute("src","Images/dice4.png");
else if(s==5)
document.getElementsByClassName("img1")[0].setAttribute("src","Images/dice5.png");
else
document.getElementsByClassName("img1")[0].setAttribute("src","Images/dice6.png");

var s1=Math.floor(Math.random()*6)+1
if(s1==1)
document.getElementsByClassName("img2")[0].setAttribute("src","Images/dice1.png");
else if(s1==2)
document.getElementsByClassName("img2")[0].setAttribute("src","Images/dice2.png");
else if(s1==3)
document.getElementsByClassName("img2")[0].setAttribute("src","Images/dice3.png");
else if(s1==4)
document.getElementsByClassName("img2")[0].setAttribute("src","Images/dice4.png");
else if(s1==5)
document.getElementsByClassName("img2")[0].setAttribute("src","Images/dice5.png");
else
document.getElementsByClassName("img2")[0].setAttribute("src","Images/dice6.png");

if(s>s1)
{
    document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(s<s1)
{
    document.querySelector("h1").innerHTML="Player 2 Win";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}