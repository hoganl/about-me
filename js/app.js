'use strict';

var userName = prompt('Hi! Glad you are here. What is your name?');

alert ('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
console.log('The users name is ' + userName + '.');

var answer1 = prompt('Do you think I like dogs?').toLowerCase().trim();
console.log(userName + ' thinks ' + answer1 + ', to me liking dogs.');

if (answer1 === 'yes'||answer1 === 'y') {
  alert('Right ' + userName + ', I have one adopted dog Hazel!');
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Sorry ' + userName + ', that is wrong. I love dogs. In fact I own a rescue named Hazel.');
} else {
  alert('Sorry, you did not enter a valid answer. Perhaps you made a typo. We will move on, but yes I love dogs.');
}

var answer2 = prompt('Next question! Do I have siblings?').toLowerCase().trim();
console.log(userName + ' thinks ' + answer2 + ', to me having siblings.');

if (answer2 === 'yes' || answer2 === 'y'){
  alert('That is correct ' + userName + '! I have 3 sisters and 3 brothers.');
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('That is incorrect ' + userName + ', I have 6 siblings! 3 brother and 3 sisters.');
} else {
  alert('Shucks, you did not enter a valid answer. We will move on, but I have 6 siblings.');
}

var answer3 = prompt('Third question! Do I have a boat?').toLowerCase().trim();
console.log(userName + ' thinks ' + answer3 + ', to me having a boat.');

if (answer3 === 'no' || answer3 === 'n'){
  alert('Awesome job ' + userName + '! I do not own a boat, but I do like to go out sailing with my friends.');
} else if (answer3 === 'yes' || answer3 === 'y'){
  alert('Uh oh ' + userName + ', you got this one wrong. I do not own one, but maybe I will one day.');
} else {
  alert('It looks like you entered an invalid answer. I do not own a boat.');
}

var answer4 = prompt('Next question! Do I like to travel to foriegn countries?').toLowerCase().trim();
console.log(userName + ' thinks ' + answer4 + ', to me liking to travel to foriegn countries.');

if (answer4 === 'yes' || answer4 === 'y'){
  alert('Right on ' + userName + '! I have actualy been to over 15 countries. Some of them for pleasure and some due to work. My favorite country so far is Croatia!');
} else if (answer4 === 'no' || answer4 === 'n'){
  alert('Nope, you got this one wrong ' + userName + ', I love traveling overseas! I have been to over 15 countries so far. In fact, I will be traveling to Japan next year!');
} else {
  alert('Dang, you must have typed your answer wrong. I love to travel!');
}

var answer5 = prompt('Final question! Do I have kids?').toLowerCase().trim();
console.log(userName + ' thinks ' + answer5 + ', to me having kids.');

if (answer5 === 'no' || answer5 === 'n'){
  alert('You rock ' + userName + ', I do not have any kids. Though I do call Hazel, my dog, my kid sometimes. Haha!');
} else if (answer5 === 'yes' || answer5 === 'y'){
  alert('You got this one wrong ' + userName + ', I actually do not have any kids. Having a dog can feel like having a kid sometimes.');
} else {
  alert('Shoot, you must have not entered a proper response. I will give you the answer any way. I do not have any kids.');
}