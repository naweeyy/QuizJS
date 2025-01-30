document.addEventListener("DOMContentLoaded", () => {
    const question = document.getElementById("question"), btn1 = document.getElementById("btn-1"), btn2 = document.getElementById("btn-2"), progressBar = document.getElementById("progress-bar");

    const quizData = [
        { question: "HTML est un langage de programmation ?", correct: "FAUX" },
        { question: "Bootstrap est une bibliothèque CSS ?", correct: "VRAI" },
        { question: "Le Doctype HTML est obligatoire dans chaque document HTML ?", correct: "VRAI" },
        { question: "Java peut être utilisé pour développer des applications mobiles ?", correct: "VRAI" },
        { question: "C# est principalement utilisé pour le développement backend ?", correct: "VRAI" },
        { question: "JSON signifie JavaScript Object Network ?", correct: "FAUX" },
        { question: "Un fichier JavaScript avec l'extension .jsx est utilisé dans React ?", correct: "VRAI" },
        { question: "Git est un système de gestion de bases de données ?", correct: "FAUX" },
        { question: "PHP est un langage interprété côté serveur ?", correct: "VRAI" },
        { question: "Sass est une extension de CSS ?", correct: "VRAI" }
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