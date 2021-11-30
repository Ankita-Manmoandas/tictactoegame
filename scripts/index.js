//global variables
let player1;
let player2;
let player1Turn = true;
let form = document.querySelector("#form__game")
let cells = document.querySelectorAll(".cell")
const submitButton = document.querySelector(".submit")

const inputForm = document.querySelectorAll(".inputs")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
const winningPattern1 = document.querySelectorAll(".winningPattern1")
const dataCell = document.querySelectorAll("data-cell-index")
const resetButton= document.querySelector("#reset-button")
let gameDiv = document.querySelector("#div_game")

//players can enter their names
// when players submit their names- form is replaced with hi player1 and player 2 name. 
const handleClick = (e) => {
  player1 = input1.value
  player2 = input2.value
  
if (player1= input1.value || (player2 = input2.value)) {
  form.innerHTML = `It's so nice to meet you ${player1} and ${player2}.  
  <br>
  ${player1} you're crosses and you'll go first. 
  <br> ${player2} you're noughts.` 
} else  {
  alert("Please write your names to start the game")

}} 


 submitButton.addEventListener ("click" , handleClick);



//toggle to show which player's turn it is AND LINK IT TO THE CONDITION 
// let symbol= "x"

// const toggle = () => {
//   if (symbol== "x") {
//     form.innerHTML= `${player1}'s turn'`
//   } else {
//     symbol= "0"
//     form.innerHTML= `${player2}'s turn'`

// //   }
// }



// when player 1 clicks - x appears , when player 2 clicks 0 appears - and it shows on form.inner html that its player 1's turn


cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    if (player1Turn) {
      e.target.innerHTML = "x"
      player1Turn = false;
    } else {
      e.target.innerHTML = "O"
      player1Turn = true;
    }
    // Time to check for a win by calling the checkForWin function :) 
    // const checkResult = ()=> {
    //   if (
      const checkWinner = () => {
      checkForWin1ax(),
      checkForWin1bx (),
      checkForWin1cx (),
      checkForWin2ax (),
      checkForWin2bx (),
      checkForWin2cx (),
      checkForWin3ax (),
      checkForWin3bx ()
       }

       checkWinner ()
      


  
  // { 
  //   alert ("game over")
  // }
  // else {
  //   alert ("its a draw")
  // }

  // }

  // checkResult ()
  }
  ); 

  // const checkForDraw = () => {
  //   cells.forEach (drawFunction)

  //   function drawFunction (cells) {
  //     if (cells.length=== 9) {
  //       alert ("its a draw")
  //     }
  //   }

//horizontal wins starting from 1a-1c for player 1 (x) only 
const checkForWin1ax = () => {
 const pattern0 = cells[0].innerHTML;
 const pattern1 = cells[1].innerHTML;
 const pattern2 = cells[2].innerHTML;
  
 if (pattern0=="x" && pattern1=="x" && pattern2== "x")  {
   alert ("player 1 wins") ;
  //  form.innerHTML= ""; 


   
   
      
  } else if (pattern0=="O" && pattern1=="O" && pattern2== "O")  {
    console.log ("player 2 wins") 

  
 }}

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
  }} ) 

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




  // 1. Find all the divs via querySelectorAll (convert to array?)
  // const cellsArr = Array.from(cells);
  // console.log(cells)
  // let filterO= cellsArr.filter ((cell) => cell.innerHTML=="O"); 
  // console.log (filterO)



  

  // let checkO = (cells) => {
  //   if (cells.innerHTML = "O") {
  //     // return "O"

  //   } else {
  //     return "x"
  //   }
  //   cellsArr.filter(checkO)
   
  

  // 2. Challenge: Find all the divs with a 0

  // 3. Challenge: Find all the divs with a X



// 3. Is it a horizontal win? Yes/No- returns a boolean? 
//    ...... ??? 123? 456? 789?
// const checkHorizontalWin = (divsO, divsX) => {
//   if (divsO) {
//     alert("player 2 has won!")
//   } else {
//     alert("keep playing!")
//   }
// }

// }
// 4. Is it a vertical win? Yes/No
// 5. Is it a diagonal win? yes/No


  // winning patterns
//   let checkForPattern1 = (player1Turn) => {
//     if (player1Turn && (winningPattern1= e.target.innerHTML="x")){
//     alert( "player 1 has won")

//   } else {
//     alert("keep playing!")