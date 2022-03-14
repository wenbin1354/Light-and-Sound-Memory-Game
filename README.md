# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **WenBin Lin**

Time spent: **6** hours spent in total

Link to project: (https://glitch.com/edit/#!/prework-light-and-sound-memory-game)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here: 
![](https://i.imgur.com/8HYRiMm.gif)

![](https://i.imgur.com/lkENiXB.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_random.asp
https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript
https://stackoverflow.com/questions/54637148/how-to-add-onclick-event-to-start-timer]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[There were not many challenges for the basic functions since the prework website clearly guide me through the directions and steps for me to complete this project. What is challenging to me is the additional features. For instance, the part where I have to randomize a secret pattern. What I did is I looked deep into the random functions through the web and implement it. I did a loop that loops through the array of pattern and reassigns every element into a random number, so that makes a secret random pattern. The most challenging feature for me is the custom ticking timer/clock. It took me a quite while to understand the setInverval and clearInverval function, I was looking at the w3school page at first but it is still confusing for me how do I create a ticking timer. So what I did is I searched for a specific keyword like "How to start with timer a button in HTML" on google and found some pages that helped me understand how it works. I found a stack flow page with a solution that is pretty similar to my situation, so I borrowed and edited the posted function/code and put it on my page.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Some questions I have are do we really have to have different files for js, CSS, and HTML to create a website? When I search through the web I saw people using <script> </script> to implement javascript. I don't have any questions other than that. This was a fun experience when creating the light and sound memory game. It is fun to see element pops out and appear on your website as you are creating your code and changes based on how you want to format them. I would definitely want to create more websites like this in the future.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project, I would fix some issues I have with my website. So in order to get the ticking timer going, I have a variable called timeleft, when I stop the game I set timeleft to 0 so it doesn't tick after I stopped the game. But I have another condition is when timeleft reaches 0 you lose the game, when you stop the game you lose the game, but that is not really what I want. And I want to fix the button issue of displaying image too, when it displays an image it went down a few pixels and come back after displaying.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/1cc7611d6c2e4588aa683bb666744616)


## License

    Copyright [WenBin Lin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.