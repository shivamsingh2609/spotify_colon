console.log("Welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay')
let myprogressbar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songs =[
    { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    // { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    // { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    // { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    // { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
    // { songName : "salamai ishq" , filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"}
]
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("play")
        // masterPlay.classList.remove('video-play-button-icon-in-black-and-white-color-vector.jpg' )
        masterPlay.setAttribute('src','pausebutton.png')
        gif.style.opacity = 1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('pausebutton.png')
        masterPlay.setAttribute('src','video-play-button-icon-in-black-and-white-color-vector.jpg' )
        gif.style.opacity = 0
    }

})
audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value =progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressbar.value*audioElement.duration)/100;
})