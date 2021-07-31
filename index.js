const chalk = require('chalk');
//func for intro
function intro() 
{
  const chalk = require('chalk');
  console.log(chalk.black.bgYellow.bold("QUIZ TIME"))
  console.log("..............................")
  var readLineSync = require('readline-sync');
  var userName = readLineSync.question(chalk.black.bgCyan(" what is your name?")+"-");
  console.log("..............................")
  console.log(chalk.black.bgCyan("Hi!!! " + userName.toUpperCase() + " let's start the quiz.\n"));

}

intro();
var score = 0;

//array of objects
var questions = [
  {
    ques: "1. What is the full name of Shinchan? \n (a)Shinnosuke Ogawa \n (b)Shinnosuke Nohara \n (c)Suzuki Nohara \n (d)Shin Chan Nohara",
    ans: "b"
  },
  {
    ques: "2. What is the color of Shinchan's dog Shiro? \n (a) Pink \n (b)White  \n (c)Cream  \n (d)Yellow",
    ans: "b"
  },
  {
    ques: "4. What is the vegetable that Shinchan hates to eat? \n (a)Beans \n (b)Capsicum \n (c)Carrot \n (d)Garlic",
    ans: "b"
  }
]

//loop for questions
for (var i = 0; i < questions.length; i++)
 { quesLooping(questions[i].ques, questions[i].ans); }

//function to take value from user and increment score
function quesLooping(qu, an) {
  const chalk = require('chalk');
  var readline=require('readline-sync')
  var userAnswer = readline.question(qu+"\n");
  console.log("------------------------------")
  if (userAnswer == an) {
    score++;
  }
  console.log(chalk.black.bgYellow.bold("score " + score));
  console.log("------------------------------")

  
}
console.log(chalk.white.bgBlue("TOTALSCORE"+score))
console.log("------------------------------\n")
console.log(chalk.black.bgRed("finish"))
