
function newquiz() {
    // Remove progress data and score history from localStorage
    localStorage.removeItem("quizProgress");
    localStorage.removeItem("scoreHistory");

    // Reset currentQuestion variable
    currentQuestion = 0;

    // Load first question
    loadQuestion();

    // Reset total score
    score = 0;
    totalScore.textContent = `Score: ${score}/${questions.length}`;

    // Hide score history container
    historycontainer.style.display='none';
}


const questions = [
    {
        question: "What is the capital of France?",
        optionA: "Paris",
        optionB: "London",
        optionC: "Madrid",
        answer: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        optionA: "Jupiter",
        optionB: "Saturn",
        
        optionC: "Earth",
        answer: "a"
    },
    {
        question: "What is the largest organ of the human body?",
        optionA: "Heart",
        optionB: "Liver",
        optionC: "Skin",
        answer: "c"
    }
];

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;

const questionEl = document.getElementById("question");
const optionAEl = document.getElementById("optionA");
const optionBEl = document.getElementById("optionB");
const optionCEl = document.getElementById("optionC");
const totalScore = document.querySelector('.total-score');
const historycontainer=document.querySelector('.history-container');
const scorehistoryEl = document.getElementById("score-history");
const reset=document.querySelector('.reset');
const quizCont=document.querySelector('.quiz-container');



// Check if progress data exists in localStorage
if (localStorage.getItem("quizProgress")) {
    const progressData = JSON.parse(localStorage.getItem("quizProgress"));
    currentQuestion = progressData.currentQuestion;
    selectedAnswer = progressData.selectedAnswer;
   
    loadQuestion();
    loadSelectedAnswer();
} else {
    loadQuestion();
}

// Retrieve score from localStorage
score = localStorage.getItem("quizScore") || 0;
totalScore.textContent = `Score: ${score}/${questions.length}`;

window.addEventListener("load", function () {
    if (selectedAnswer !== null) {
        document.querySelector(`input[name="answer"][value="${selectedAnswer}"]`).checked = true;
    }
});

function loadQuestion() {
   
    const currentQ = questions[currentQuestion];
    questionEl.textContent = currentQ.question;
    optionAEl.textContent = currentQ.optionA;
    optionBEl.textContent = currentQ.optionB;
    optionCEl.textContent = currentQ.optionC;
    const progressData = JSON.parse(localStorage.getItem("quizProgress"));
    if (progressData && progressData.score) {
        score = progressData.score;
    }

    totalScore.textContent = `Score: ${score}/${questions.length}`;
}


function saveProgress() {
    const progressData = {
        currentQuestion: currentQuestion,
        selectedAnswer: selectedAnswer,
        score: score
    };
    localStorage.setItem("quizProgress", JSON.stringify(progressData));
}

function nextQuestion() {
    selectedAnswer = document.querySelector(`input[name="answer"]:checked`)?.value;
    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    const currentQ = questions[currentQuestion];
    if (selectedAnswer === currentQ.answer) {
        score++;


            localStorage.setItem("quizScore", score);
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }
    
        currentQuestion++;
        selectedAnswer = null;
        saveProgress();
    
      
        
            if (currentQuestion < questions.length) {
                loadQuestion();
                historycontainer.style.display='none';

            } else {
                alert("Quiz complete!");
                localStorage.removeItem("quizProgress");
                localStorage.removeItem("quizScore");

                reset.style.display='block';
                quizCont.style.display='none';

                currentQuestion = 0;
                loadQuestion();
                historycontainer.style.display='block';
        
                // Update score history
                const scoreData = { score: score, date: new Date().toLocaleDateString() };
                const scoreHistory = JSON.parse(localStorage.getItem("scorehistory")) || [];
                scoreHistory.push(scoreData);
                localStorage.setItem("scorehistory", JSON.stringify(scoreHistory));
        
                // Display score if quiz is completed
                totalScore.textContent = `Total Score: ${score}/${questions.length}`;
                totalScore.classList.remove('hidden');
        
                // Display score history if quiz is completed
                displayScoreHistory();
             
            }
        }
        
        function displayScoreHistory() {
            const scoreHistoryEl = document.getElementById("score-history");
        
            // Retrieve score history from localStorage
            const scoreHistory = JSON.parse(localStorage.getItem("scorehistory")) || [];
        
            // Clear existing score history elements
            scoreHistoryEl.innerHTML = "";
        
            // Create new score history elements for each score
            for (let i = 0; i < scoreHistory.length; i++) {
                const scoreData = scoreHistory[i];
                const scoreEl = document.createElement("li");
                scoreEl.textContent = `Score: ${scoreData.score}/${questions.length} - Date: ${scoreData.date}`;
                scoreHistoryEl.appendChild(scoreEl);
            }
        }
       