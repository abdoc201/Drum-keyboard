const a=document.createElement("audio");
a.setAttribute("autoplay","");
const audio = [
    {key:"a",audioSrc:"../soundsEffect/drum.wav"},
    {key:"s",audioSrc:"../soundsEffect/piano.wav"},
    {key:"d",audioSrc:"../soundsEffect/whistle.wav"},
    {key:"f",audioSrc:"../soundsEffect/guitar.wav"},
    {key:"g",audioSrc:"../soundsEffect/drum.wav"},
    {key:"h",audioSrc:"../soundsEffect/piano.wav"},
    {key:"j",audioSrc:"../soundsEffect/whistle.wav"},
    {key:"k",audioSrc:"../soundsEffect/guitar.wav"},
    {key:"l",audioSrc:"../soundsEffect/drum.wav"}
    ];
document.addEventListener("keypress",(e)=>{
            for(let i =0 ; i<audio.length ; i++){
                if(e.key.toLowerCase() === audio[i].key) {
                    a.src=audio[i].audioSrc;
                    document.getElementById(e.key.toLowerCase()).classList.add("played");
                    setTimeout(()=>document.getElementById(e.key.toLowerCase()).classList.remove("played"),100);
                }
            }
        });
