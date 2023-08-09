let query = document.querySelectorAll(".drum").length;
function listener(key){
    switch(key)
    {
        case 'w':
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
    
            case 'a':
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case 's':
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case 'd':
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
                
            case 'j':
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
           
            case 'k':
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            
            case 'l':
                let audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
       
            default:
                console.log("Error")
            break;
    }
}

for(let i = 0;i<query;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){let drumButton = this.innerHTML;
    listener(drumButton)
    buttonAnimation(drumButton);});
}


document.addEventListener("keydown",function(event){
    listener(event.key);
    buttonAnimation(event.key)
});

function buttonAnimation(key)
{
    let keyPressed = document.querySelector("." + key);
    keyPressed.classList.add("pressed");
    setTimeout(function(){
        keyPressed.classList.remove("pressed");
    },20);
}
 
