// Quiz functionality for Family Therapy Interventions

const questions = [
    { question: "What is the first intervention in family therapy?", options: ["A", "B", "C", "D"], answer: "A" },
    { question: "Can you name a family therapy technique?", options: ["Technique 1", "Technique 2", "Technique 3", "Technique 4"], answer: "Technique 1" },
    { question: "What role does the therapist play?", options: ["A", "B", "C", "D"], answer: "B" },
    { question: "How many sessions are typically needed?", options: ["1-2", "3-5", "6-10", "More than 10"], answer: "3-5" },
    { question: "What is the goal of family therapy?", options: ["A", "B", "C", "D"], answer: "C" },
    { question: "Who can attend family therapy?", options: ["Only adults", "Only children", "The whole family", "Anyone"], answer: "The whole family" },
    { question: "What is assessment in therapy?", options: ["Introductory", "Diagnostic", "Follow-up", "Closure"], answer: "Diagnostic" },
    { question: "What type of therapy is used?", options: ["Individual", "Group", "Couples", "Family"], answer: "Family" },
    { question: "What is the therapist's responsibility?", options: ["Facilitate", "Direct", "Observe", "All of the above"], answer: "Facilitate" },
    { question: "What methods are employed?", options: ["Talking", "Activities", "Games", "All of the above"], answer: "All of the above" },
    { question: "What is the expected outcome?", options: ["Worsening", "Stability", "Improvement", "None"], answer: "Improvement" },
    { question: "When is therapy concluded?", options: ["When goals are met", "At therapist's discretion", "After a year", "When clients feel better"], answer: "When goals are met" }
];

let score = 0;

function showQuestions() {
    questions.forEach((q, index) => {
        console.log(`${index + 1}: ${q.question}`);
        q.options.forEach(option => console.log(`- ${option}`));
    });
}

function checkAnswer(selected, index) {
    if (selected === questions[index].answer) {
        score++;
    }
}

function displayScore() {
    console.log(`Your score is: ${score}/${questions.length}`);
}

// Example usage:
showQuestions();
checkAnswer("A", 0); // Call this for user-selected answers
checkAnswer("Technique 2", 1);
displayScore();