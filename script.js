document.addEventListener("DOMContentLoaded", () => {
    const question = document.getElementById("question");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const response = document.getElementById("response");

    const quizData = [
        {
            question: "Est-ce que JavaScript peut modifier le contenu HTML ?",
            correct: "VRAI"
        },
        {
            question: "CSS est un langage de programmation ?",
            correct: "FAUX"
        },
        {
            question: "HTML signifie HyperText Markup Language ?",
            correct: "VRAI"
        },
        {
            question: "JavaScript a été créé en 2005 ?",
            correct: "FAUX"
        }
    ];

    let currentQuestionIndex = 0;

    function displayQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        question.textContent = currentQuestion.question;
        response.textContent = "";
        response.style.visibility = "hidden";
        response.style.color = "";
    }

    function handleAnswer(userAnswer) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (userAnswer === currentQuestion.correct) {
            response.textContent = "Bonne réponse !";
            response.style.color = "green";
        } else {
            response.textContent = "Mauvaise réponse...";
            response.style.color = "red";
        }

        response.style.visibility = "visible";

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            setTimeout(displayQuestion, 2000);
        } else {
            setTimeout(() => {
                question.textContent = "Quiz terminé !";
                response.textContent = "Merci d'avoir participé !";
                btn1.style.display = "none";
                btn2.style.display = "none";
            }, 2000);
        }
    }

    btn1.addEventListener("click", () => handleAnswer("VRAI"));
    btn2.addEventListener("click", () => handleAnswer("FAUX"));

    displayQuestion();
});