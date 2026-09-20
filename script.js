// Current question number
let questionNumber = 1;

// User's score
let score = 0;


// Function to check the answer

function checkAnswer(answer) {

    // Question 1
    if (questionNumber == 1) {

        if (answer == 1) {

            document.getElementById("result").innerHTML =
                "Correct!";

            score = score + 1;

        } else {

            document.getElementById("result").innerHTML =
                "Wrong answer!";

        }

    }


    // Question 2
    else if (questionNumber == 2) {

        if (answer == 2) {

            document.getElementById("result").innerHTML =
                "Correct!";

            score = score + 1;

        } else {

            document.getElementById("result").innerHTML =
                "Wrong answer!";

        }

    }


    // Question 3
    else if (questionNumber == 3) {

        if (answer == 3) {

            document.getElementById("result").innerHTML =
                "Correct!";

            score = score + 1;

        } else {

            document.getElementById("result").innerHTML =
                "Wrong answer!";

        }

    }


    // Question 4
    else if (questionNumber == 4) {

        if (answer == 1) {

            document.getElementById("result").innerHTML =
                "Correct!";

            score = score + 1;

        } else {

            document.getElementById("result").innerHTML =
                "Wrong answer!";

        }

    }


    // Question 5
    else if (questionNumber == 5) {

        if (answer == 2) {

            document.getElementById("result").innerHTML =
                "Correct!";

            score = score + 1;

        } else {

            document.getElementById("result").innerHTML =
                "Wrong answer!";

        }

    }


    // Show updated score

    document.getElementById("score").innerHTML =
        "Score: " + score;

}



// Function for Next Question

function nextQuestion() {

    questionNumber = questionNumber + 1;


    // Question 2

    if (questionNumber == 2) {

        document.getElementById("question").innerHTML =
            "Which language is used to style a webpage?";

        document.getElementById("option1").innerHTML =
            "HTML";

        document.getElementById("option2").innerHTML =
            "CSS";

        document.getElementById("option3").innerHTML =
            "JavaScript";

        document.getElementById("option4").innerHTML =
            "Python";

    }


    // Question 3

    else if (questionNumber == 3) {

        document.getElementById("question").innerHTML =
            "Which language is used to make webpages interactive?";

        document.getElementById("option1").innerHTML =
            "HTML";

        document.getElementById("option2").innerHTML =
            "CSS";

        document.getElementById("option3").innerHTML =
            "JavaScript";

        document.getElementById("option4").innerHTML =
            "SQL";

    }


    // Question 4

    else if (questionNumber == 4) {

        document.getElementById("question").innerHTML =
            "Which HTML tag is used to create a paragraph?";

        document.getElementById("option1").innerText =
            "<p>";

        document.getElementById("option2").innerText =
            "<h1>";

        document.getElementById("option3").innerText =
            "<div>";

        document.getElementById("option4").innerText =
            "<br>";
    }


    // Question 5

    else if (questionNumber == 5) {

        document.getElementById("question").innerHTML =
            "Which CSS property changes text color?";

        document.getElementById("option1").innerHTML =
            "font-size";

        document.getElementById("option2").innerHTML =
            "color";

        document.getElementById("option3").innerHTML =
            "background";

        document.getElementById("option4").innerHTML =
            "text-style";

    }


    // Update question number

    document.getElementById("question-number").innerHTML =
        "Question " + questionNumber + " of 5";


    // Clear previous result

    document.getElementById("result").innerHTML = "";


    // If all questions are finished

    if (questionNumber > 5) {

        showResult();

    }

}



// Function to show final result

function showResult() {

    document.getElementById("question").style.display = "none";

    document.getElementById("option1").style.display = "none";

    document.getElementById("option2").style.display = "none";

    document.getElementById("option3").style.display = "none";

    document.getElementById("option4").style.display = "none";

    document.getElementById("next-button").style.display = "none";

    document.getElementById("result").style.display = "none";

    document.getElementById("final-result").style.display = "block";


    document.getElementById("final-score").innerHTML =
        "Your Score: " + score + " / 5";

}



// Function to restart quiz

function restartQuiz() {

    questionNumber = 1;

    score = 0;


    document.getElementById("question").style.display = "block";

    document.getElementById("option1").style.display = "block";

    document.getElementById("option2").style.display = "block";

    document.getElementById("option3").style.display = "block";

    document.getElementById("option4").style.display = "block";

    document.getElementById("next-button").style.display = "block";

    document.getElementById("result").style.display = "block";

    document.getElementById("final-result").style.display = "none";


    document.getElementById("question").innerHTML =
        "What does HTML stand for?";

    document.getElementById("option1").innerHTML =
        "Hyper Text Markup Language";

    document.getElementById("option2").innerHTML =
        "High Text Machine Language";

    document.getElementById("option3").innerHTML =
        "Hyper Tool Management Language";

    document.getElementById("option4").innerHTML =
        "Home Text Markup Language";


    document.getElementById("question-number").innerHTML =
        "Question 1 of 5";

    document.getElementById("score").innerHTML =
        "Score: 0";

    document.getElementById("result").innerHTML = "";

}
