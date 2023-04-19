
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",OnButtonClick);
}

document.addEventListener("keydown",function(evt){
    makeSound(evt.key);
    buttonAnimation(evt.key);
});

function OnButtonClick()
{
    var buttonText=this.innerHTML;
    makeSound(buttonText);
    buttonAnimation(buttonText);
}

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
           break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s" :
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var Kick=new Audio('sounds/kick-bass.mp3');
            Kick.play();
            break;
        default :    
    }
}

function buttonAnimation(key)
{
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");
    },100);

}