const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random()- .5)
  currentQuestionIndex= 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])


}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStausClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStausClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  
}
function setStausClass(element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//questions
 questions =[
  {
    question: "Which method would you use to find an ID element?",
    answers: [
      {text: 'getElementsById', correct: false},
      {text: 'getElementByID', correct: false},
      {text: 'getElementsById', correct: true},
      {text: 'getElementbyId', correct: false}
    ],
  },

  {
    question: "To see if two variables are equal in an if / else statement you would use ____.",
    answers: [
      {text: "=", correct: false},
      {text: "==", correct: true},
      {text: "'equals'", correct: false},
      {text:  "!=", correct: false}
    ],
  },
  
  {
    question: "Math.random() returns ____.",
    answers: [
      {text: "a number between 1 and 9", correct: false},
      {text:  "a number between 0 and 9", correct: false},
      {text: "a number between 0 and 1", correct: true},
      {text: "a number between 0 and 99", correct: false}
    ],
  },

  {
    question: "An array always begins at an index of:",
    answers: [
      {text: '-1', correct: false},
      {text: "1", correct: false},
      {text: '0', correct: true},
      {text: "null", correct: false}
    ],
  },
  
  {
    question: "WThe appendChild() method places a node as the ____ child.",
    answers: [
      {text: "first", correct: false},
      {text: "last place you left off", correct: false},
      {text:  "last", correct: true},
      {text: "random", correct: false}
    ],
  },
 ]
  // {
  //   question: "Which method would you use to find an ID element?",
  //   answers: [
  //     {text: 'getElementsById', correct: false},
  //     {text: 'getElementByID', correct: false},
  //     {text: 'getElementsById', correct: true},
  //     {text: 'getElementbyId', correct: false}
  //   ],
  // },
  // {
  //   question: "Which method would you use to find an ID element?",
  //   answers: [
  //     {text: 'getElementsById', correct: false},
  //     {text: 'getElementByID', correct: false},
  //     {text: 'getElementsById', correct: true},
  //     {text: 'getElementbyId', correct: false}
  //   ],
  // },
  // {
  //   question: "Which method would you use to find an ID element?",
  //   answers: [
  //     {text: 'getElementsById', correct: false},
  //     {text: 'getElementByID', correct: false},
  //     {text: 'getElementsById', correct: true},
  //     {text: 'getElementbyId', correct: false}
  //   ],
  // },
  // {
  //   question: "Which method would you use to find an ID element?",
  //   answers: [
  //     {text: 'getElementsById', correct: false},
  //     {text: 'getElementByID', correct: false},
  //     {text: 'getElementsById', correct: true},
  //     {text: 'getElementbyId', correct: false}
  //   ],
  // },
  // {
  //   question: "Which method would you use to find an ID element?",
  //   answers: [
  //     {text: 'getElementsById', correct: false},
  //     {text: 'getElementByID', correct: false},
  //     {text: 'getElementsById', correct: true},
  //     {text: 'getElementbyId', correct: false}
  //   ],
  // },]

//  
//   {
//    
//   }, 
//   {
//       
//   },
//   {
//       title: "A function within an object is called a ____.",
//       choices: ["property", "key", "value", "method"],
//       answer: "method"
//   },
//   {
//       title: "The difference between the == and === operators does not involve:",
//       choices: ["strict comparison", "assignment", "type conversion", "abstract comparison"],
//       answer: "assignment"
//   },
//   {
//       title: "Which of the following statements does not create a loop?",
//       choices: ["switch", "for", "while", "do...while"],
//       answer: "switch"
//   },
//   {
//       title: "Which of the following is not a way to declare a variable?",
//       choices: ["var", "set", "let", "const"],
//       answer: "set"
//   },
//   {
//       title: "Which of the following functions is not dependent on the user?",
//       choices: ["alert", "prompt", "console.log()", "confirm"],
//       answer: "console.log()"
//   },
//   {
//     title: "Javascript variables can be ______ ",
//     choices: ["globally scoped", "function scoped", "locally scoped", "all of the above"],
//     answer: "all of the above"
//   }, 
// ];