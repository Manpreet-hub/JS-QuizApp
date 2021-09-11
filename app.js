const quizData=[{
    question:"JavaScript is a ___ -side programming language?",
    a:" Client",
    b:"Server",
    c:"Both",
    d:"None",
    correct:"c"
},
{
    question:"Which of the following will write the message “Hello DataFlair!” in an alert box?",
    a:"alertBox(“Hello DataFlair!”);",
    b:"alert(Hello DataFlair!);",
    c:"msgAlert(“Hello DataFlair!”);",
    d:"alert(“Hello DataFlair!”);",
    correct:"d"
},
{
    question:"What is the HTML tag under which one can write the JavaScript code?",
    a:" <javascript>",
    b:"<scripted>",
    c:"<script>",
    d:"<js>",
    correct:"c"
},
{
    question:"Which of the following is not a reserved word in JavaScript?",
    a:"interface",
    b:"throws",
    c:"program",
    d:"short",
    correct:"c"
},
{
    question:"Javascript is _ language?",
    a:"Dynamic computer programming language",
    b:"Javascript is an object-oriented programming language",
    c:"Javascript is a Scripting language",
    d:"All the Above",
    correct:"d"
}
]

const question=document.querySelector('#question');
const submitBtn=document.querySelector('#submit-btn');

const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const answerEls=document.querySelectorAll('.answer');
const totalQuizScore=document.querySelector('#quiz-score');

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deSelected();
    const currentQuizData=quizData[currentQuiz];

    question.innerText=currentQuizData.question;
    option1.innerText=currentQuizData.a;
    option2.innerText=currentQuizData.b;
    option3.innerText=currentQuizData.c;
    option4.innerText=currentQuizData.d;

}

function getSelected(){
   
    let answer;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }    
    });
    return answer;
}

 function deSelected(){
     answerEls.forEach((answerEl)=>{
         answerEl.checked=false;
     })
 }

submitBtn.addEventListener('click',()=>{
    const answer=getSelected();
 
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        } 
        currentQuiz++;
        if(currentQuiz < quizData.length)
        loadQuiz();

        else
        {
            totalQuizScore.innerHTML=`<h1>Your score : ${score}/ ${quizData.length}</h1>
            <button class="reload-btn" onClick="location.reload()">Play Again!!</button>
            `
        }
    }
    else{
        alert("Please select an option!")

    }
})