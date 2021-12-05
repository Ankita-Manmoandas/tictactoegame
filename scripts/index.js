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
    // const checkResult = () => {
    //   if (
    //     const checkWinner = () => {
    //     checkForWin1ax(),
    //     checkForWin1bx (),
    //     checkForWin1cx (),
    //     checkForWin2ax (),
    //     checkForWin2bx (),
    //     checkForWin2cx (),
    //     checkForWin3ax (),
    //     checkForWin3bx ()
    //     }
    //     checkWinner ()
    checkForWinHorizontal (cells[0], cells[1], cells[2]),
    checkForWinHorizontal (cells[3], cells[4], cells[5])
  
    
  });


//winning patterns
const checkForWinHorizontal = (pattern0, pattern1, pattern2) => {
  if (pattern0.innerHTML=="x" && pattern1.innerHTML=="x" && pattern2.innerHTML== "x")  {
    alert ("player 1 wins") ;
   //  form.innerHTML= "";    
   } else if (pattern0.innerHTML=="O" && pattern1.innerHTML=="O" && pattern2.innerHTML== "O")  {
     alert ("player 2 wins") 
  }}
  



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

 const checkForWin1bx = () => {
  const pattern3 = cells[3].innerHTML;
  const pattern4 = cells[4].innerHTML;
  const pattern5 = cells[5].innerHTML;
   
  if (pattern3=="x" && pattern4=="x" && pattern5== "x")  {
    alert ("player 1 wins") 

  } else if (pattern3=="O" && pattern4=="O" && pattern5== "O")  {
   alert ("player 2 wins") 
}; 
 }

 const checkForWin1cx = () => {
  const pattern6 = cells[6].innerHTML;
  const pattern7 = cells[7].innerHTML;
  const pattern8 = cells[8].innerHTML;
   
  if (pattern6=="x" && pattern7=="x" && pattern8== "x")  
  { alert ("player 1 wins") 
  } else if (pattern6=="O" && pattern7=="O" && pattern8== "O")  {
    alert  ("player 2 wins") 
}; 
 }



 // vertical wins= 2a/b/c for player 1 (x)

 const checkForWin2ax = () => {
  const pattern0 = cells[0].innerHTML;
  const pattern3 = cells[3].innerHTML;
  const pattern6 = cells[6].innerHTML;
   
  if (pattern0=="x" && pattern3=="x" && pattern6== "x")  {
   alert ("player 1 wins")
  } else if (pattern0=="O" && pattern3=="O" && pattern6== "O")  {
    alert ("player 2 wins") 
 
 
   
  }}
 
  const checkForWin2bx = () => {
 
   const pattern1 = cells[1].innerHTML;
   const pattern4 = cells[4].innerHTML;
   const pattern7 = cells[7].innerHTML;
    
   if (pattern1=="x" && pattern4=="x" && pattern7== "x")  {
     alert ("player 1 wins") 
    } else if (pattern1=="O" && pattern4=="O" && pattern7== "O")  {
    alert ("player 2 wins") 

}}; 
  
 
  const checkForWin2cx = () => {
 
   const pattern2 = cells[2].innerHTML;
   const pattern5 = cells[5].innerHTML;
   const pattern8 = cells[8].innerHTML;
    
   if (pattern2=="x" && pattern5=="x" && pattern8== "x")  {
     alert ("player 1 wins") 
   } else if (pattern2=="O" && pattern5=="O" && pattern8== "O")  {
    alert ("player 2 wins") }}


   //diagnol wins for player 1 
   const checkForWin3ax = () => {
    const pattern0 = cells[0].innerHTML;
    const pattern4 = cells[4].innerHTML;
    const pattern8 = cells[8].innerHTML;
     
    if (pattern0=="x" && pattern4=="x" && pattern8== "x")  {
      alert ("player 1 wins")  
    }
    else if (pattern0=="O" && pattern4=="O" && pattern8== "O")  {
      alert ("player 2 wins") }
  
  };
   
    const checkForWin3bx = () => {
    const pattern2 = cells[2].innerHTML;
     const pattern4 = cells[4].innerHTML;
     const pattern6 = cells[6].innerHTML;
      
     if (pattern2=="x" && pattern4=="x" && pattern6== "x")  {
       alert ("player 1 wins") 
   }
   else if (pattern2=="O" && pattern4=="O" && pattern6== "O")  {
   alert("player 2 wins") }
  }})
// // check for draw
// checkForDraw= () => {
//   if (cells== "x" || "o" &&)





  //reset button
  let handleClickReset = () => {
    cells.forEach (resetFunction)

    function resetFunction (cells)  {
      cells.innerHTML= ("")
    }
    
    
  }
  resetButton.addEventListener("click", handleClickReset); 
