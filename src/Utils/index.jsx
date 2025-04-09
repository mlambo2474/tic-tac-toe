// const CheckForRow = (board) => {
//     for(let i=0; i < 3; i++){
//         if(board[i*3] === board[i*3+1] && board[i*3+1] === board[i*3+2]){
//             console.log("we have a winner")
//             return true;
//         }
//     }
//     return false;
// }
const checkSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) {
    return false;
  }
  if (option1 === option2 && option2 === option3) {
    return true;
  }
};

export const CheckForwinner = (board) => {
  for (let i = 0; i < 9; i+=3) {
    if (checkSequence(board[i], board[i + 1], board[i + 2])) {
        console.log("we have a row winner")
      return true;
    }
  }

  for(let i = 0; i < 3; i+=1){
    if(checkSequence(board[i], board[i + 3], board[i + 6])){
        console.log("we have a column winner")
        return true;
    }
  }

  if(checkSequence(board[0], board[4], board[8])){
      console.log("we have a diagonal winner")
      return true;
  }
  if(checkSequence(board[2], board[4], board[6])){
      console.log("we have a diagonal winner")
      return true;
  }

  if(!board.includes(null)){
     return "draw"
  }
    return false;
};
