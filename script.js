// quiz.js

// Sample quiz questions about family therapy
const questions = [
    {
        question: "What is family therapy?",
        options: ["A form of therapy focused on family relationships", "An individual therapy", "A medication regimen", "A type of group therapy"],
        answer: 0
    },
    {
        question: "Who can benefit from family therapy?",
        options: ["Only children", "Only adults", "Families struggling with issues", "Only couples"],
        answer: 2
    },
    {
        question: "What is the goal of family therapy?",
        options: ["To improve individual behavior", "To resolve family conflicts", "To end all family disagreements", "To prescribe medication"],
        answer: 1
    }
];

// Function to create quiz UI
function createQuizUI() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, i) => {
            questionElement.innerHTML += `<label><input type='radio' name='question${index}' value='${i}'> ${option}</label><br>`;
        });

        quizContainer.appendChild(questionElement);
    });
    quizContainer.innerHTML += '<button onclick="submitQuiz()">Submit</button>';
}

// Function to handle form submission
function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name=question${index}]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });
    displayResults(score);
}

// Function to display results
function displayResults(score) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
}

// Initialize quiz UI on page load
window.onload = createQuizUI;