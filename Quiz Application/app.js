const questions = [
    {
      question: "Who invented Java Programming?",
      options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
      correct: 1
    },
    {
      question: "Which statement is true about Java?",
      options: ["Java is a sequence-dependent programming language", " Java is a code dependent programming language", 
        " Java is a platform-dependent programming language", "Java is a platform-independent programming language"],
      correct: 3
    },
    {
      question: "Which component is used to compile, debug and execute the java programs?",
      options: ["JRE", "JIT", "JDK", "JVM"],
      correct: 3
    },
    {
      question: "Which one of the following is not a Java feature?",
      options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"],
      correct: 1
    },
    {
        question: "Which of these cannot be used for a variable name in Java?",
        options: [" identifier & keyword", "identifier", "keyword", "none of the mentioned"],
        correct: 0
    },
    {
        question: "What is the extension of java code files?",
        options: [".js", ".txt", ".class", ".java"],
        correct: 3
    },
    {
        question: "Which environment variable is used to set the java path?",
        options: ["MAVEN_Path", "JavaPATH", "JAVA", "JAVA_HOME"],
        correct: 3
    },
    {
        question: "What is not the use of “this” keyword in Java?",
        options: ["Referring to the instance variable when a local variable has the same name", 
            "Passing itself to the method of the same class",
             "Passing itself to another method", "Calling another constructor in constructor chaining"],
        correct: 0
    },
    {
        question: "Which of the following is a type of polymorphism in Java Programming?",
        options: ["Multiple polymorphism", "Compile time polymorphism", "Multilevel polymorphism", "Execution time polymorphism"],
        correct: 1
    },
    {
        question: "Which exception is thrown when java is out of memory?",
        options: ["MemoryError", "OutOfMemoryError", "MemoryOutOfBoundsException", "MemoryFullException"],
        correct: 1
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 60;
  let questionLeft = 10;
  
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }
  
  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
  
    questionContainer.textContent = questionData.question;
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.innerText = option;
      optionButton.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(optionButton);
    });
  }
  
  function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
      score++;
      console.log("checked" + selectedIndex);
    }
   
   let next = document.getElementById("next-btn");
   next.style.display = "block";
  
   
  }
  
  let questionNumber = document.getElementById("que");

  function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      document.getElementById("next-btn").style.display = "none";
      --questionLeft;
      
    } else {
      endQuiz();
    }
    questionNumber.innerText = questionLeft;   
  }
  
  function endQuiz() {

    let acheivment = document.getElementById("acheivment");
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("questions").style.display ="none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("score").textContent = score;
    clearInterval(timer);
    if(score > 8 ){
        acheivment.style.display = "block";
        acheivment.style.color = "orange";
    }
    else if( score <= 8 && score > 7){
        acheivment.style.color = "green";
        acheivment.innerText = "Good !";
        acheivment.style.display = "block";
    }
    else{
        acheivment.style.color = "red";
        acheivment.innerText = "Need to Study !";
        acheivment.style.display = "block";
    }
    
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    questionLeft = 10;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("que").innerText = questionLeft;
    loadQuestion();
    startTimer();
  }
  
  window.onload = () => {
    loadQuestion();
    startTimer();
  };
  