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

    const quiz = getRandomQuiz(1)[0];
    displayQuiz(quiz);

}