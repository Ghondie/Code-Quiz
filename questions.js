const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)

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
  nextButton.classList.remove('hide')
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
 questions =[
  {
    question: "Which method would you use to find an ID element?",
    answers: [
      {text: 'getElementsById', correct: false},
      {text: 'getElementByID', correct: false},
      {text: 'getElementsById', correct: true},
      {text: 'getElementbyId', correct: false}
    ],
  },]
//   {
//     title: "To see if two variables are equal in an if / else statement you would use ____.",
//     choices: ["=", "==", "'equals'", "!="],
//     answer: "=="
//   },
//   {
//     title: "Math.random() returns ____.",
//     choices: ["a number between 1 and 9", "a number between 0 and 9", "a number between 0 and 1", "a number between 0 and 99"],
//     answer: "a number between 0 and 1"
//   }, 
//   {
//     title: "The appendChild() method places a node as the ____ child.",
//     choices: ["first", "last place you left off", "random", "last"],
//     answer: "last"
//   }, 
//   {
//       title: "An array always begins at an index of:",
//       choices: ["-1", "0", "1", "null"],
//       answer: "0"
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