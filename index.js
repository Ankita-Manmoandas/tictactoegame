let player1;
let player2;
  
  
  const cells = document.querySelectorAll (".cell")
  const submitButton = document.querySelector(".submit")
  const form = document.querySelector ("#form")
  const inputForm = document.querySelectorAll (".inputs")
  const input1 = document.querySelector ("#input1")
  const input2 = document.querySelector ("#input2")
  //players can enter their names
  // when players submit their names- form is replaced with hi player1 and player 2 name. 
const handleClick = (e) => {
  player1 = input1.value
  player2 = input2.value
  
if (player1= input1.value ||  (player2 = input2.value)) {
  form.innerHTML = `It's so nice to meet you ${player1} and ${player2}.  
  <br>
  ${player1} you're crosses. 
  <br> ${player2} you're noughts.
  <br> Let's play now! `

} else  {
  alert("Please write your names to start the game")

}} 


 submitButton.addEventListener ("click" , handleClick);

  

  // when player 1 clicks - x appears , when player 2 clicks 0 appears 


 

  //handlheclick 



// player 1 is assinged x, player 2 is assigned 0
