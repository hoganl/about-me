'use strict';

var userName = prompt('Hi! Glad you are here. What is your name?');
alert ('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about me. Please answer the first 5 questions with y/n or yes/no. Good luck!');
console.log('The users name is ' + userName + '.');

var score = 0

function answer1() { 
  var answer1 = prompt('Do you think I like dogs?').toLowerCase().trim();
  console.log(userName + ' thinks ' + answer1 + ', to me liking dogs.');

  if (answer1 === 'yes'|| answer1 === 'y') {
    alert('Right ' + userName + ', I have one adopted dog Hazel!');
    score++;
  } else if (answer1 === 'no' || answer1 === 'n') {
    alert('Sorry ' + userName + ', that is wrong. I love dogs. In fact I own a rescue named Hazel.');
  } else {
    alert('Sorry, you did not enter a valid answer. Perhaps you made a typo. We will move on, but yes I love dogs.');
  }
}
answer1();

function answer2() {
  var answer2 = prompt('Next question! Do I have siblings?').toLowerCase().trim();
  console.log(userName + ' thinks ' + answer2 + ', to me having siblings.');

  if (answer2 === 'yes' || answer2 === 'y') {
    alert('That is correct ' + userName + '! I have 3 sisters and 3 brothers.');
    score++;
  } else if (answer1 === 'no' || answer1 === 'n') {
    alert('That is incorrect ' + userName + ', I have 6 siblings! 3 brother and 3 sisters.');
  } else {
    alert('Shucks, you did not enter a valid answer. We will move on, but I have 6 siblings.');
  }
}
answer2();

function answer3() {
  var answer3 = prompt('Third question! Do I have a boat?').toLowerCase().trim();
  console.log(userName + ' thinks ' + answer3 + ', to me having a boat.');

  if (answer3 === 'no' || answer3 === 'n') {
    alert('Awesome job ' + userName + '! I do not own a boat, but I do like to go out sailing with my friends.');
    score++;
  } else if (answer3 === 'yes' || answer3 === 'y') {
    alert('Uh oh ' + userName + ', you got this one wrong. I do not own one, but maybe I will one day.');
  } else {
    alert('It looks like you entered an invalid answer. I do not own a boat.');
  }
}
answer3();

function answer4() {
  var answer4 = prompt('Next question! Do I like to travel to foriegn countries?').toLowerCase().trim();
  console.log(userName + ' thinks ' + answer4 + ', to me liking to travel to foriegn countries.');

  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Right on ' + userName + '! I have actually been to over 15 countries. Some of them for pleasure and some due to work. My favorite country so far is Croatia!');
    score++;
  } else if (answer4 === 'no' || answer4 === 'n') {
    alert('Nope, you got this one wrong ' + userName + ', I love traveling overseas! I have been to over 15 countries so far. In fact, I will be traveling to Japan next year!');
  } else {
    alert('Dang, you must have typed your answer wrong. I love to travel!');
  }
}
answer4();

function answer5() {
  var answer5 = prompt('Fifth question! Do I have kids?').toLowerCase().trim();
  console.log(userName + ' thinks ' + answer5 + ', to me having kids.');

  if (answer5 === 'no' || answer5 === 'n') {
    alert('You rock ' + userName + ', I do not have any kids. Though I do call Hazel, my dog, my kid sometimes. Haha!');
    score++;
  } else if (answer5 === 'yes' || answer5 === 'y') {
    alert('You got this one wrong ' + userName + ', I actually do not have any kids. Having a dog can feel like having a kid sometimes.');
  } else {
    alert('Shoot, you must have not entered a proper response. I will give you the answer any way. I do not have any kids.');
  }
}
answer5();

function answer6() {
  var myNum = 3;
  var turns = 4;

  while (turns > 0) {
    var answer6 = parseInt (prompt('For this next questions, you will have to try and guess what is my favorite number is? You will have 4 tries to guess it. Happy guessing!'));
    console.log(userName + ' thinks ' + answer6 + ' is my favotite number.');
    if (answer6 === myNum) {
      alert(userName + ', you are correct!');
      score++;
      break;
    } else if (answer6 < myNum) {
      alert(userName + ', you are too low.');
    } else {
      alert(userName + ', you are too high.');
    } 
    turns--
    if (turns === 0){
      alert('Sorry, you are out of guesses. It was 3');
    }
  }
}
answer6();

function answer7() {
  var lacysStates = ['florida', 'california', 'north carolina', 'alabama', 'texas'];
  var turns = 6
  var correct = false

  while (turns > 0 && correct === false) {
    var answer7 = prompt('For my last question, can you guess a state that I have visited besides Washington?').toLowerCase().trim();
    console.log(userName + ' thinks I have visited ' + answer7 + '.');
    for (var i = 0; i < lacysStates.length; i++){
      if (answer7 === lacysStates[i]) {
        alert(userName + ', alright, you guessed one right!');
        correct = true;
        score++;
      }
    }
    if (correct === false) {
      alert(userName + ', sorry, I have not been to that state.');
    }
    turns--
    if (correct === true || turns === 0) {
        alert('The states that I have visited besides Washington are: Florida, California, North Carolina, Alabama, and Texas.');
    }
  }
}
answer7();

alert('You have answered ' + score + ' out of 7 questions correct!');
//delete this