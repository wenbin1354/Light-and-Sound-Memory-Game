// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [2, 2, 4, 3, 5, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var tonePlaying = false;
var guessCounter = 0;
var strikes = 0;
var timeleft = 60;

//time 
function startTimer(){
  if(gamePlaying){
    timeleft = 60;
    var downloadTimer = setInterval(function function1(){
      document.getElementById("countdown").innerHTML = timeleft + 
      "&nbsp"+"seconds remaining";

      timeleft -= 1;
      if(timeleft == -2){
          clearInterval(downloadTimer);
          document.getElementById("countdown").innerHTML = "Time is up!";
          loseGame();
      }
    }, 1000);
  }
}

//visibility of images
function toggleImage1(){
  document.querySelector("#image1").classList.toggle('hidden');
}
function toggleImage2(){
  document.querySelector("#image2").classList.toggle('hidden');
}
function toggleImage3(){
  document.querySelector("#image3").classList.toggle('hidden');
}
function toggleImage4(){
  document.querySelector("#image4").classList.toggle('hidden');
}
function toggleImage5(){
  document.querySelector("#image5").classList.toggle('hidden');
}



function startGame(){
  //initialize secret pattern
  for (var i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * 5) + 1;
    //randomize the pattern array into random number b/w 1 to 5
    console.log(pattern[i])
  }
  //initialize game variables
  clueHoldTime = 1000;
  progress = 0;
  gamePlaying = true;
  strikes = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  timeleft = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 80;
  console.log("clueholdtime is: " + clueHoldTime);
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!")
}


function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
        timeleft += 30;
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    strikes ++;
    console.log(strikes);
    if(strikes == 3){
      //GAME OVER: LOSE!
      timeleft = 0;
    }
    
  }
} 
  

// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 320,
  3: 370,
  4: 420,
  5: 470
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)