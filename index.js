//****************Quiz_game
//https://replit.com/@Arpit1099/Quiz-game#index.js?embed=1&output=1

//https://replit.com/@Arpit1099/Quiz-game?embed=1&output=1#index.js

var que1 = {que:'what arpit want in his life?', ans:'adventure'};
var que2 = {que:'what is my next destination?', ans:'Himalaya'};
var que3 = {que:"Do Arpit have Girlfriend?",ans:"no"};

var highScore = [
  { name: 'Arpit', score: 3 },

  { name: 'Abhay', score: 2 },

  { name: 'Akash', score: 3 }
]


function play(question, answer){
  var userAnswer = rdlSync.question(question);

  if(userAnswer == answer){
    console.log("Correct Answer!");
    score++;
  }else{
    console.log("Wrong Answer");
  }

}

var score = 0;
var arpit = 0, abhay = 1, akash = 2;
var rdlSync = require('readline-sync');
var userName = rdlSync.question("May I Know Your Name Please. ");

play(que1.que, que1.ans);
play(que2.que, que2.ans);
play(que3.que, que3.ans);

if(userName.toLowerCase() == 'arpit')
  console.log("Your Score is: " + score +" & highscore is " + highScore[0].score);
else if(userName.toLowerCase() == 'abhay')
  console.log("Your Score is: " + score +" & highscore is " + highScore[1].score);
else if(userName.toLowerCase() == 'akash')
  console.log("Your Score is: " + score +" & highscore is " + highScore[2].score);
else
  console.log("Your Score is: " + score);
