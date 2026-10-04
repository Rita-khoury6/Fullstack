let attempts=5;
 let input=document.getElementById('numinput');
 let checkbtn=document.getElementById('btnid');
 let rest1=document.getElementById('Reset');
 let mes=document.getElementById("Message");
  let attempt=document.getElementById('Attemps');
  let secretNumber;
   // const secretNumber=7;
  function createSecretNumber() { 
    secretNumber=Math.floor(Math.random()*10);
     console.log(secretNumber);
  
}
    
  function resetGame(){
    attempts=5;
    attempt.innerHTML=attempts;
    input.value='';
    mes.innerHTML='';
    checkbtn.disabled=false;
   createSecretNumber();
    
  }
  function showMessage(message){
    mes.innerText=message;
  }
  rest1.addEventListener('click',resetGame);
  createSecretNumber();
  function checkGuess(){
 
    
    attempts--;
    attempt.innerText=attempts;
    if(attempts <=0){
        attempt.innerHTML="Game Over Try  Again ";
        checkbtn.disabled=attempts<=0;
    }

    let entered=input.value.trim();
    console.log(entered);
    if(entered ===''){
        showMessage('Enter a number');
       
        return ;
    }
    else {
        let guess=Number(entered);
        if(!Number.isFinite(guess)||guess<1|| guess>10  ){
            showMessage('Choose a number from 1 to 10');
    }
if (guess === secretNumber) {
    showMessage('Correct ');
      checkbtn.disabled=true;
  
    } else if (guess > secretNumber) {
     showMessage( 'Too High');
    } else {
    showMessage ('Too low');
    }
}
 }
  checkbtn.addEventListener('click',function(){
    checkGuess();
  });
 input.addEventListener('keydown',function (event) {
  if(event.key==='Enter'){
    checkGuess();
  }
  
 })

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnOpen = document.querySelector('.helpbtn');
let btnClose = document.querySelector('.btn-close');
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
/////////////////////////////////////////////////
///////////------BONUS 3--------/////////////////
