document.addEventListener("DOMContentLoaded", () => {
    const question = document.getElementById("question"), btn1 = document.getElementById("btn-1"), btn2 = document.getElementById("btn-2"), progressBar = document.getElementById("progress-bar");

    const quizData = [
        { question: "Est-ce que JavaScript peut modifier le contenu HTML ?", correct: "VRAI" },
        { question: "CSS est un langage de programmation ?", correct: "FAUX" },
        { question: "HTML signifie HyperText Markup Language ?", correct: "VRAI" },
        { question: "JavaScript a été créé en 2005 ?", correct: "FAUX" }
    ];

    let currentQuestionIndex = 0, correctAnswers = 0, wrongAnswers = 0;

    function updateProgressBar() {
        progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
    }

    function displayQuestion() {
        if (currentQuestionIndex < quizData.length) {
            question.textContent = quizData[currentQuestionIndex].question;
            updateProgressBar();
        } else {
            const totalAnswers = quizData.length;
            question.innerHTML = `Merci d'avoir participé ! 🎉<br>Vous avez obtenu <b style="color: #4caf50">${correctAnswers}</b> réponses correctes sur <b style="color: #4caf50">${totalAnswers}</b> et <b style="color: red">${wrongAnswers}</b> réponses incorrectes sur <b style="color: red">${totalAnswers}</b>`;
            btn1.style.display = btn2.style.display = "none";
            progressBar.style.width = "100%";
        }
    }

    function handleAnswer(userAnswer) {
        userAnswer === quizData[currentQuestionIndex].correct ? correctAnswers++ : wrongAnswers++;
        currentQuestionIndex++;
        setTimeout(displayQuestion, 100);
    }

    btn1.addEventListener("click", () => handleAnswer("VRAI"));
    btn2.addEventListener("click", () => handleAnswer("FAUX"));
    displayQuestion();
});