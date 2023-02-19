const buttonEl = ["crash", "kick", "snare", "tom"];  //put all the kits in an array
const container = document.querySelector(".container"); //get the parent div of the kit button

buttonEl.forEach((kit)=>{          //do this for all the buttons individially
    let buttonEl = document.createElement("button");  
    buttonEl.classList.add("btn");  
    buttonEl.textContent = kit;
    container.appendChild(buttonEl);
    buttonEl.style.backgroundImage = "url(images/" + kit + ".png)"; //set the bg image of the button
    const audioEl = document.createElement("audio");
    container.appendChild(audioEl);     //Add the audio files dynamically
    audioEl.src = "sounds/" + kit + ".mp3";
    buttonEl.addEventListener("click", ()=>{        //add click event listener
        audioEl.play();
    });
    window.addEventListener("keydown", (e)=>{       //add keydown event listener along side with scaling effect on click
        if(e.key === kit.slice(0, 1)){
            audioEl.play();
            buttonEl.style.transform = "scale(0.9)";
            setTimeout(()=>{
                buttonEl.style.transform = "scale(1)";
            }, 1000);
        }
    })
});