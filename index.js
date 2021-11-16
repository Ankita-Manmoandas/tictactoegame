  const cells = document.querySelectorAll (".cell")
  
  // show which players turn it is 

  // when player 1 clicks - x appears , when player 2 clicks 0 appears 
  let player1;
  let player2;

  //handlheclick 
  const handleClick = (e) => {
    cells.innerHTML = "X"

   
// player 1 is assinged x, player 2 is assigned 0
