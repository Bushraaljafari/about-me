/* eslint-disable no-unused-vars */
'use strict';
// start from hear
//i made 8 question

alert('welcome in my page');

let namea = prompt('what is your name ?');
console.log(namea);
alert('hi,' + namea);

alert('we will play aguessing game about me lets go');
let score = 0;

function question1() {
  let go = prompt('my name is bushra!');
  //console.log(go);
  switch (go.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('corect bushra is my name');
    score++;
    break;
  case 'no':
  case 'n':
    alert('wrong my name is bushra');
    break;
  default:
    alert('please answer with yes or no to qustions');
    break;
  }

}
question1();


function question2(){
  let age = prompt('my age is 24!');
  //console.log(age);
  switch (age.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('correct my age is 24');
    score++;
    break;
  case 'no':
  case 'n':
    alert('sorry i am 24');
    break;
  default:
    alert('please answer with yes or no to qustions');
    break;
  }

}
question2();


function question3(){
  let favouritColor = prompt('my favourite color is blue!');
  //console.log(favouritColor);
  switch (favouritColor.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('no,it is red');

    break;
  case 'no':
  case 'n':
    alert('you right ,it is red');
    score++;
    break;
  default:
    alert('please answer with yes or no to qustions');
    break;
  }

}
question3();

function question4(){
  let study = prompt('i have an abachoular degree in civil engineer');
  //console.log(study);
  switch (study.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('yes i have it ');
    score++;

    break;
  case 'no':
  case 'n':
    alert('i am actually have it');
    break;
  default:
    alert('please answer with yes or no to qustions');
    break;
  }


}

question4();

function question5(){
  let travel = prompt('i like to travel ');
  //console.log(travel);
  switch (travel.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('of course yes ');
    score++;
    break;
  case 'no':
  case 'n':
    alert('what who doesnt like travel!');
    break;
  default:
    alert('please answer with yes or no to qustions');
    break;
  }

}
question5();

function question6(){

  let game = prompt('i am agamer ');
  //console.log(game);
  switch (game.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('no i am not agamer ');

    break;
  case 'no':
  case 'n':
    alert('you are right');
    score++;
    break;
  default:
    alert('please answer with yes or no to qustions');
    break;
  }
}

question6();

/*let game = prompt('i am agamer ');
//console.log(game);
if (game.toLowerCase === 'yes' || game.toLowerCase === 'y') {
    alert('no i am not agamer ');
}
else if (game.toLowerCase === 'no' || game.toLowerCase === 'n') { alert('you are right'); }*/





/*for (let i = 0; i < 4; i++) {
  let questionSixes=Number(prompt('know, try to guess number that i had in my mind , to make it easire on you choose number from 0 to 6'));
  if (questionSixes===5) {
    alert('you are correct');
    score++;
    break ;
  }
  else if (questionSixes>5){
    alert ('your answer is higher than main');


  }
  else {
    alert ('your answer is lower than main');



  }

  alert (' try again');

}
alert ('the correct answer is 5');*/



function question7(){
  for (let i = 0; i < 4; i++) {
    let questionSixes = Number(prompt('know, try to guess number that i had in my mind , to make it easire on you choose number from 0 to 6'));
    if (questionSixes === 5) {
      alert('you are correct');
      score++;
      break;
    }
    else if (questionSixes > 5) {
      alert('your answer is higher than main');


    }
    else if (questionSixes < 5) {
      alert('your answer is lower than main');



    }
    else {
      alert(' try again');

    }


    if (i === 3) {
      alert('the correct answer is 5');
    }

  }

}

question7();




/*Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.*/



let fruit = ['banana', 'apple', 'mango'];
for (let i = 0; i < 6; i++) {
  let guessFruit = prompt('guess my favorite fruit');
  let guessFruits = guessFruit.toLowerCase();
  const element1 = fruit[0];
  const element2 = fruit[0];
  const element3 = fruit[0];
  if (guessFruits === element1 || guessFruits === element2) {
    alert('you are alright');
    score++;
    break;
  }
  else if (guessFruits === element2 || guessFruits === element3) {
    alert('you are alright');
    score++;
    break;
  }

}
alert('my favorite fruit is banana,apple,mango');




alert(`thanks for playing ${namea} your score is ${score}`);






































