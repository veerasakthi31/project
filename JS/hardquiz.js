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
        question: "'Dandia' is a popular dance of",
        optionA: "gujarat",
        optionB: "delhi",
        optionC: "punjab",
        answer: "a"
    },
    {
        question: "The book of Parsis is",
        optionA: "Zend Avesta",
        optionB: "Bible",
        optionC: "Gita",
        answer: "a"
    },
    {
        question: "The National Anthem was first sung in the year",
        optionA: "1889",
        optionB: "1980",
        optionC: "1911",
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
if (localStorage.getItem("quizProgress2")) {
    const progressData = JSON.parse(localStorage.getItem("quizProgress2"));
    currentQuestion = progressData.currentQuestion;
    selectedAnswer = progressData.selectedAnswer;
   
    loadQuestion();
    loadSelectedAnswer();

} else {
    loadQuestion();
}

// Retrieve score from localStorage
score = localStorage.getItem("quizScore2") || 0;
totalScore.textContent = ` ${score}/${questions.length}`;

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
    const progressData = JSON.parse(localStorage.getItem("quizProgress2"));
    if (progressData && progressData.score) {
        score = progressData.score;
    }

    totalScore.textContent = ` ${score}/${questions.length}`;
}


function saveProgress() {
    const progressData = {
        currentQuestion: currentQuestion,
        selectedAnswer: selectedAnswer,
        score: score
    };
    localStorage.setItem("quizProgress2", JSON.stringify(progressData));
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


            localStorage.setItem("quizScore2", score);
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
                historycontainer.style.display='none';
        
                // Update score history
                const scoreData = { score: score, date: new Date().toLocaleDateString() };
                const scoreHistory = JSON.parse(localStorage.getItem("scoreHistory2")) || [];
                scoreHistory.push(scoreData);
                localStorage.setItem("scoreHistory2", JSON.stringify(scoreHistory));
        
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
            const scoreHistory = JSON.parse(localStorage.getItem("scoreHistory2")) || [];
        
            // Clear existing score history elements
            scorehistoryEl.innerHTML = "";
        
            // Create new score history elements for each score
            for (let i = 0; i < scoreHistory.length; i++) {
                const scoreData = scoreHistory[i];
                const scoreEl = document.createElement("li");
                scoreEl.textContent = `Score: ${scoreData.score}/${questions.length} - Date: ${scoreData.date}`;
                scoreHistoryEl.appendChild(scoreEl);
            }
        }
       