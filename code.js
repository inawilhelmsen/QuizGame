const quizzes =[
    {
        question: "Who is Will Wright?",
        answer0: "An NPC",
        answer1: "A character in Pleasantville",
        answer2: "The creator of The Sims franchise",
        indexOfCorrectA: 2
    },
    {
        question: "When was the first Sims game released?",
        answer0: "February, 2000",
        answer1: "March, 2002",
        answer2: "August, 1998",
        indexOfCorrectA: 0
    },
    {
        question: "What was the first expansion for The sims 2",
        answer0: "The Sims 2 University",
        answer1: "The Sims 2 Nightlife",
        answer2: "The Sims 2 Pets",
        indexOfCorrectA: 1
    }
];

let currentQuizIndex = 0;

function answerTag(prefix, answer, correct) {
    let onclick;
    if(correct){
        onclick = "alert('Correct! Good job.'); displayNewQuiz();"
    } else {
        onclick = "alert('Wrong...');"
    }
    const html = "<div class='answer' onclick=\""+onclick+"\">" + prefix + answer + "</div>";
    return html;
}

function displayQuiz (quiz) {
    let html = "<p class ='question'>Question: \"" + quiz.question + "\"</p>";
    html += answerTag("A: ",quiz.answer0, quiz.indexOfCorrectA == 0);
    html += answerTag("B: ",quiz.answer1, quiz.indexOfCorrectA == 1);
    html += answerTag("C: ",quiz.answer2, quiz.indexOfCorrectA == 2);
    const quizDiv = document.getElementById("quiz-div");
    quizDiv.innerHTML = html;
}

function displayNewQuiz() {
    let index = Math.floor(Math.random()* quizzes.length);
    if(index == currentQuizIndex){
        index = (index + 1) % quizzes.length;
    }
    const quiz = quizzes[index];
    currentQuizIndex = index;
    displayQuiz(quiz);

}
