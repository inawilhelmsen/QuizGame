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

function getRandomQuiz(numberOfQuizzes) {
    if(numberOfQuizzes < 1){
        throw "Invalid number of quizzes";
    }
    if(numberOfQuizzes > quizzes.length){
        throw "Too many number of quizzes."
    }
    const selection = Array(numberOfQuizzes);
    let i = 0;
    while( i < numberOfQuizzes) {
        const k = Math.floor(Math.random() * quizzes.length);
        if (selection.includes(k)) {
            continue;
        }
        selection[i] = k;
        i++;
    }
    return Array.from(selection).map(e => quizzes[e]);
}