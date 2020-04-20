// the start screen, button 
var startQuiz = document.getElementById("start");
var start = document.getElementById("startScreen");


// target choices for the question, target the right answer section in question section
var questionsScreen = document.getElementById("questionsScreen");
var questionTitle = document.getElementById("question-title");
var a = document.getElementById("button-choice1");
var b = document.getElementById("button-choice2");
var c = document.getElementById("button-choice3");
var d = document.getElementById("button-choice4");
var answer = document.getElementById("answer");

// gotta target the time to display the time they have left
var time = document.getElementById("time");

// End Game Section
var endGame = document.getElementById("end-screen");
// target the final score for user after finish quiz
var score = document.getElementById("final-score");
var submit = document.getElementById("submit")

//setting the global var
var currentIndex  = 0;
var currentTime = 75;
var interval;

// on click for the start button
startQuiz.addEventListener("click", function(){
    //.classList and .add adds css class ("d-none") to the start screen itself
    startScreen.classList.add("d-none");
    //.classlist and .remove removes css class ("d-none") from our question section in html
    questionContainer.classList.remove("d-none");
    // create a generate question function passing through the current index, to get the questions to pop up 
    generateQuestion(currentIndex);
    // this will trigger timer upon starting the quiz    
    timer();
    //interval = setInterval(timer, 1000);
    // this will let the clicks of the buttons for the answer choices work when timer starts
    enableClicks();
});

// timer function for the timer to actually work
function timer() {
    // the interval will be set to a method of setInterval which will call a function at a specified time in millisecond 
    // so the function inside the setInterval method will be called, 
    interval = setInterval(function() {
        // the function will run with the argument of time var being displayed as the value of the currentTime with -- meaning decrementing it's value by one.
        time.innerHTML = currentTime--;
        // set condition for the if the answer was wrong, and add time penalty
        if(answer === 'Incorrect') {
            // if answer is "wrong answer" the timeLeft will be equal to value of time left substracted by ten 
            currentTime = currentTime - 10;
        }
           // if time left is zero then call method to clear the timer set by the method of setInterval
        if(currentTime === 0) {
            clearInterval(interval)
        }
    }, 1000)
}
// function for the clicks of the answer choices
function enableClicks() {
    // set addEventListener for the specified var that targeted the specified button, so in this case a var targeting for the first choice button is going to be "listened" for the click to excecute the function of generating the quiz.
    a.addEventListener('click', function() {
        generateQuiz(a);
    })
    b.addEventListener('click', function() {
        generateQuiz(b);
    })
    c.addEventListener('click', function() {
        generateQuiz(c);
    })
    d.addEventListener('click', function() {
        generateQuiz(d);
    })
}

// function to generate next question 
function generateQuestion(index) {

    if(index === questions.length) {
        clearInterval(interval);
        //.classList .add adds the CSS class "d-none" which is the class for the question section, to questionContainer making it appear
        questionContainer.classList.add("d-none");
        // .classList .remove removes the CSS class for the end game section which is also "d-none", makes it not appeat during the question section 
        endGame.classList.remove("d-none");
        // the score is displayed to be the time of the timer
        return score.innerHTML = time.innerHTML;
    }
     // setting the targeted element of the question and answer to it's actual object below
    questionTitle.innerHTML = questions[index].question;
    // .innerHTML displays the questions array and the options for answers in the specified variable for the choices buttons
    a.innerHTML = questions[index].options.a; 
    b.innerHTML = questions[index].options.b; 
    c.innerHTML = questions[index].options.c;
    d.innerHTML = questions[index].options.d;
}


 //main function for the quiz
function generateQuiz(UserChoice) {
    //set correct answer var equal to questions array and within that array the answer property is the correct answer
    let correctAnswer = questions[currentIndex].answer;
    // if user selected options equal to the value of the correctAnswer then display correct text
    if(UserChoice.innerHTML === correctAnswer) {
       answer.innerHTML = 'Correct'; 
       // if the options selected by user is not correct, user input not equal to correctAnswer then display incorrect text
    } else {
        answer.innerHTML = 'Incorrect';
        //then subtract 10 secs from the timer
        currentTime = currentTime - 10;
    }
    // ++ incremental operator for the currentIndex to go through loop
    currentIndex++;
     // wrong answer will pass currentIndex to the function generateQuestion again
    generateQuestion(currentIndex);
}

 // setting the questions and answers and correct answer with the variables below, questions are created as objects in an array, within each objects exist multiple properties that we set to being the correct answer and the options choices for the specific question
var questions = [
    {
        question: "What was the first anime series?",
            options: {
                a: "Jungle Taitei (kimba The White Lion)",
                b: "Doraemon",
                c: "Tetsuwan Atom (Astroy Boy)",
                d: "Mach Go Go Go (Speed Racer)",
            },
            answer: "Tetsuwan Atom (Astroy Boy)"
        
    },
    {
        question: "In 'Evangelion', where did Asuka Langley Sohryu previously live?",
        options: {
            a: "USA",
            b: "Germany",
            c: "England",
            d: "France",
        },
        answer: "Germany"
    },
    {
        question: "Which of these classic anime films wasn't directed by Hayao Miyazaki?",
        options: {
            a: "Grave of the Fireflies",
            b: "My Neighbour Totoro",
            c: "Spirited Away",
            d: "Ponyo on a Cliff by the Sea",
        },
        answer: "Grave of the Fireflies"
    },
    {
        question: "In 'Fullmetal Alchemist', what is Edward's and Alphonse's surname?",
            options: {
                a: "Ellis",
                b: "Elric",
                c: "Elwood",
                d: "Elvis",
            },
            answer: "Elric" 
    },
    {
        question: "Which series features a location called the Soul Society?",
            options: {
                a: "Yu Yu Hakusho",
                b: "Naruto",
                c: "Dragon Ball Z",
                d: "Bleach",
            },
            answer: "Bleach"
    },
    {
        question: "Final Question!!!! In 'My Hero Academia' the anime featured as the background of this quiz page; What is the name of the quirk that was passed down to Deku from the superhero All Might?!!!!!",
        options: {
            a: "All for One",
            b: "One for All",
            c: "Nothing at All",
            d: "Fall for One",
        },
        answer: "One for All"
    }
];