const prompt = require('prompt-sync')();

let board = [-1,-2,-3,
             -4,-5,-6,
             -7,-8,-9];


function initialise(){
    let playerCount = prompt('How many players do you want? (1 or 2): ');
    board = [-1,-2,-3,
             -4,-5,-6,
             -7,-8,-9];
    turn(1, playerCount)
}

function translate(value){
    if (value == 1){
        return 'X';
    } else if (value == 0){
        return 'O';
    } else if (value < 0) {
        return ' ';
    } else {
        return '?';
    }
}

function writeBoard(board){
    betweenLine = '---|---|---';
    writtenBoard = ' ' + translate(board[0]) + ' | ' + translate(board[1]) + ' | ' + translate(board[2]) + ' \n' + betweenLine
               + '\n ' + translate(board[3]) + ' | ' + translate(board[4]) + ' | ' + translate(board[5]) + ' \n' + betweenLine 
               + '\n ' + translate(board[6]) + ' | ' + translate(board[7]) + ' | ' + translate(board[8]) + ' ';
    return writtenBoard;
}


function checkWin(board){
    for (i=0; i < 3; i++){
        if (board[i] == board[i+1] && board[i+1] == board[i+2]){
            return true;
        } else if (board[i + 0] == board[i+3] && board[i+3] == board[i+6]){
            return true;
        }
    }
    if (board[0] == board[4] && board[4] == board[9]){
        return true;
    } else if (board[2] == board[4] && board[4] == board[6]){
        return true;
    } else {
        return false;
    }
   
}


//sana's code


function turn(playerVal, playerNo){
    console.log('Current Board:\n' + writeBoard(board));

 // play a turn
    let move = prompt(`Player ${playerVal} (${translate(playerVal)}), choose a position (1–9): `);
    move = parseInt(move) - 1;

    if (move < 0 || move > 8) {
        console.log("Invalid position. Try again.");
        return turn(playerVal, playerNo);
    } else if (board[move] > -1) {
        console.log(" That spot is already taken. Try again.");
        return turn(playerVal, playerNo);
    } else{
        board[move] = playerVal;
    }
    
    //check if win (ill make the checkWin function)
    if (checkWin(board)) {
        // the checkwin needs 
        console.log(writeBoard(board));
        console.log(` Player ${playerNo} (${translate(playerVal)}) wins!`);
    } else if (Math.min(...board) > -1) {
        // Math.min(...array)
        console.log(writeBoard(board));
        console.log("It's a draw!");
    } else {
        turn(((playerVal + 1) % 2), 2);
    }
    
 
// we also need to do a switch player 


}

initialise()





