//multiple choices
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');
const answerE = document.getElementById('E');

answerA.addEventListener ('click', e=>{
    answerA.style.backgroundColor = "salmon";
})

answerB.addEventListener ('click', e=>{
    answerB.style.backgroundColor = "salmon";
})

answerD.addEventListener ('click', e=>{
    answerD.style.backgroundColor = "salmon";
})

answerE.addEventListener ('click', e=>{
    answerE.style.backgroundColor = "salmon";
})
   
answerC.addEventListener ('click', e=>{
    answerC.style.backgroundColor = "green";
})



//blanck filling
const blankAnswer = document.querySelector('');
blankAnswer.addEventListener('submit', event=>{
  
if (blankAnswer = "a song"){
    alert('Well done!')
}else{
    alert('Try again!')
}
});