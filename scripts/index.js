//global variables
let player1;
let player2;
let player1Turn = true;

//import html classes/IDs
let form = document.querySelector("form")
let cells = document.querySelectorAll(".cell")
const submitButton = document.querySelector(".form__submit")
const inputForm = document.querySelectorAll(".form__inputs")
let input1 = document.querySelector(".form__input-player1")
let input2 = document.querySelector(".form__input-player2")
const winningPattern1 = document.querySelectorAll(".winningPattern1")
const dataCell = document.querySelectorAll("data-cell-index")
const resetButton= document.querySelector(".game__reset-button")
let gameDiv = document.querySelector(".game__screen")
 
//players can enter their names
// when players submit their names- form is replaced with hi player1 and player 2 name. 
const handleClick = (e) => {

 player1= input1.value;
 player2= input2.value;

if (player1 !=="" && (player2!== "")) {
  form.innerHTML=`Hello ${player1} and ${player2}!! 
  <br>
  ${player1} you're crosses and you'll go first. 
  <br> ${player2} you're noughts.` 
} else {
  alert ("Please write your names to start the game")

}} 

 submitButton.addEventListener ("click" , handleClick);

// when player 1 clicks - x appears , when player 2 clicks 0 appears - and it shows on form.inner html that its player 1's turn
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    console.log(cell)
    if (input1.value=="" && (input2.value=="")) {    
      alert( "Please write your names to start the game")
      return
    }
    if (e.target.innerHTML === "" ) 
       {
        if (player1Turn) {
          form.innerHTML = `${player1}'s turn`
          e.target.innerHTML = "x"
          player1Turn = false;
        } else if (player1Turn!== true) {
          form.innerHTML = `${player2}'s turn`
          e.target.innerHTML = "O"
          player1Turn = true;
        }
        
      }

    // Time to check for a win by calling the checkForWin function :) 
   
    checkForWin (cells[0], cells[1],cells[2]),
    checkForWin (cells[3], cells[4],cells[5]),
    checkForWin (cells[6], cells[7],cells[8]),
    checkForWin (cells[0], cells[3], cells[6]),
    checkForWin (cells[1], cells[4], cells[7]),
    checkForWin (cells[2], cells[5], cells[8]),
    checkForWin (cells[0], cells[4], cells[8]),
    checkForWin (cells[2], cells[4], cells[6]),
    checkforDraw ()
    
  });


});

//check for draw

const checkforDraw = () => {
  let grid= "";
  cells.forEach(cell => {
    grid += cell.innerHTML
  })
  if (grid.length === 9) {
    alert("its a draw!")
  }}


//winning patterns
const checkForWin = (pattern0, pattern1, pattern2) => {
  if (pattern0.innerHTML=="x" && pattern1.innerHTML=="x" && pattern2.innerHTML== "x")  {
 form.innerHTML= `${player1} wins!! Click the rest button to play again`
   } else if (pattern0.innerHTML=="O" && pattern1.innerHTML=="O" && pattern2.innerHTML== "O")  {
    form.innerHTML= `${player2} wins!! Click the rest button to play again`
  }}
  

//refactored the following functions" 

// //horizontal wins starting from 1a-1c for player 1 (x) only 
// const checkForWin1ax = () => {
//  const pattern0 = cells[0].innerHTML;
//  const pattern1 = cells[1].innerHTML;
//  const pattern2 = cells[2].innerHTML;
  
//  if (pattern0=="x" && pattern1=="x" && pattern2== "x")  {
//    alert ("player 1 wins") ;
//   //  form.innerHTML= "";    
//   } else if (pattern0=="O" && pattern1=="O" && pattern2== "O")  {
//     console.log ("player 2 wins") 
//  }}


  //reset button
  let handleClickReset = () => {
    cells.forEach (resetFunction)

    function resetFunction (cells)  {
      cells.innerHTML= ("")

    }    
    
  }
  resetButton.addEventListener("click", handleClickReset); 
