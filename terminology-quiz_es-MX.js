function submitAnswers() {

  const questions = {

    q1: {
      correct: "False",
      correctFeedback: "¡Correcto! No todas las personas conceptualizan las palabras de la misma forma.",
      incorrectFeedback: {
        "True": "Incorrecto. Las personas no comparten exactamente las mismas conceptualizaciones."
      }
    },

    q2: {
      correct: "use in a specific subject field",
      correctFeedback: "¡Correcto! El lenguaje especializado se usa en campos específicos.",
      incorrectFeedback: {
        "independent of any specific subject field": "Incorrecto. El lenguaje especializado sí pertenece a campos específicos."
      }
    },

    q3: {
      correct: "rendering of ideas",
      correctFeedback: "¡Correcto!",
      incorrectFeedback: {
        "written content": "Incorrecto. Ambas transmiten ideas.",
        "verbal content": "Incorrecto. Ambas transmiten ideas."
      }
    }

  };


  const form = document.forms["quizForm"];

  let totalCorrect = 0;


  for (const question in questions) {

    const radios = form[question];
    const feedback = document.getElementById("feedback_" + question);

    if (!radios) continue;

    let selected = "";

    for (let radio of radios) {
      if (radio.checked) {
        selected = radio.value;
      }
    }

    if (selected === "") {
      feedback.textContent = "Por favor responde esta pregunta.";
      feedback.style.color = "red";
      continue;
    }

    if (selected === questions[question].correct) {
      totalCorrect++;
      feedback.textContent = questions[question].correctFeedback;
      feedback.style.color = "green";
    }

    else {
      feedback.textContent =
        questions[question].incorrectFeedback[selected] || "Respuesta incorrecta.";
      feedback.style.color = "red";
    }

    feedback.setAttribute("role", "alert");
  }


  alert(`Obtuviste ${totalCorrect} de 3 respuestas correctas.`);

}
