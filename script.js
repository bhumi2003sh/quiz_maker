const questions = [
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },

    {
        question: "Which of the following oceans is between Africa and Australia?",
        answers:[
            {text: "Indian Ocean", correct: true},
            {text: "Arctic Ocean", correct: false},
            {text: "South Atlantic Ocean", correct: false},
            {text: "South Pacific Ocean", correct: false},
        ]
    },

    {
        question: "There is a sea that Africa borders to the south and Europe to the north. Which is that sea?",
        answers:[
            {text: "Mediterranean Sea", correct: true},
            {text: "Arabian Sea", correct: false},
            {text: "Black Sea", correct: false},
            {text: "Red Sea", correct: false},
        ]
    },

    {
        question: "A sea lies between Japan and the Korean Peninsula. Which sea is that?",
        answers:[
            {text: "Yellow", correct: false},
            {text:  "East China Sea", correct: false},
            {text: "Philippine Sea", correct: false},
            {text: "Sea of Japan", correct: true},
        ]
    },

    {
        question: "Which planet is known as the 'Watery Planet'?",
        answers:[
            {text: "Mercury", correct: false},
            {text: "Earth ", correct: true},
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: false},
        ]
    },

    {
        question: "What is part of a database that hols only one type of information",
        answers:[
            {text: "Report", correct: false},
            {text: "Field", correct: true},
            {text: "Record", correct: false},
            {text: "File", correct: false},
        ]
    },

    {
        question: "'.MOV' extension refers usually to what kind of file",
        answers:[
            {text: "Image File", correct: false},
            {text: "Animation/movie file", correct: true},
            {text: "Audio file", correct: false},
            {text: "MS Office document", correct: false},
        ]
    },

    {
        question: "What is the capital city of Australia?",
        answers:[
            {text: "Sydeny", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Canberra", correct: true},
            {text: "Brisbane", correct: false},
        ]
    },

    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers:[
            {text: "William Shakespeare", correct: true},
            {text: "Charles Dicken", correct: false},
            {text: " Jane Austen", correct: false},
            {text: "Mark Twain", correct: false},
        ]
    },

    {
        question: "Who is known as the father of modern physics?",
        answers:[
            {text: "Isaac Newton", correct: false},
            {text: "Albert Einstein", correct: true},
            {text: "Galileo Galilei", correct: false},
            {text: "Niels Bohr", correct: false},
        ]
    },

    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers:[
            {text: "China", correct: false},
            {text: "South Korea", correct: false},
            {text: "Japan", correct: true},
            {text: "Thailand", correct: false},
        ]
    },

    {
        question: "What is the smallest prime number?",
        answers:[
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "5", correct: false},
        ]
    },

    {
        question: "Which is the largest desert in the world?",
        answers:[
            {text: "Sahara Desert", correct: false},
            {text: "Arabian Desert", correct: false},
            {text: "Gobi Desert", correct: false},
            {text: "Antarctic Desert", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();