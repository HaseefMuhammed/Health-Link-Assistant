console.log("Script Ideled")

var audio=new Audio("images/audio.m4a")

function playAudio(){
    audio.play();
}

function stopAudio(){
    audio.pause();
    audio.currentTime=0;
}

var ask = confirm ("Are you connected a bluetooth device ?");
if(ask==true){
    alert("Thankyou for connecting a bluetooth device")
}else{
    alert("Please connect a device for better experience !!!")
}