const prompt = require('prompt-sync')();

let board = [-1,-2,-3,
             -4,-5,-6,
             -7,-8,-9];


function initialise(){
    let playerCount = prompt('How many players do you want? (1 or 2): ');
    board = [-1,-2,-3,
             -4,-5,-6,
             -7,-8,-9];
    let botStrat = 0;
    if (playerCount == 1){
        console.log('Press 1 for easy difficulty bot, \nPress 2 for hard difficulty,');
        botStrat = prompt('Press 3 for extra hard difficulty (the bot will go first): ')
    }
    console.log('\n\n<<---- Game Start ---->>\n');
    if (botStrat < 3){
        turn(1, playerCount, botStrat)
    } else {
        algorithm(2, 1);
    }
    
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
        if (board[3*i] == board[3*i+1] && board[3*i+1] == board[3*i+2]){
            return true;
        } else if (board[i + 0] == board[i+3] && board[i+3] == board[i+6]){
            return true;
        }
    }
    if (board[0] == board[4] && board[4] == board[8]){
        return true;
    } else if (board[2] == board[4] && board[4] == board[6]){
        return true;
    } else {
        return false;
    }
   
}

function closeToWin(board){
    for (let i=0; i<3; i++){
        if (board[3*i] == board[3*i+1] && board[3*i+2] < 0){
            return 3*i+2;
        } else if (board[3*i] == board[3*i+2] && board[3*i+1] < 0){
            return 3*i+1;
        }else if (board[3*i+1] == board[3*i+2] && board[3*i] < 0){
            return 3*i;

        } else if (board[i+0] == board[i+3] && board[i+6] < 0){
            return i+6;
        } else if (board[i+0] == board[i+6] && board[i+3] < 0){
            return i+3;
        } else if (board[i+3] == board[i+6] && board[i+0] < 0){
            return i;
        } 
    }
    
    if (board[0] == board[4] && board[8] < 0){
        return 8;
    } else if (board[0] == board[8] && board[4] < 0){
        return 4;
    } else if (board[4] == board[8] && board[0] < 0){
        return 0;
    } else if (board[2] == board[4] && board[6] < 0){
        return 6;
    } else if (board[2] == board[6] && board[4] < 0){
        return 4;
    } else if (board[4] == board[6] && board[2] < 0){
        return 2;
    } else {
        return -1;
    }
}

function cornerFree(board){
    for (i=0; i<5;i++){
        if (board[2*i] < 0 && i != 2){
            return 2*i;
        }
    }
    return -1;
}

function randomGo(board, playerVal){
    let position = Math.floor(Math.random()*9);
    while (board[position] >= 0){
        position = Math.floor(Math.random()*9);
    }
    board[position] = playerVal;
    console.log(`Player ${playerVal} (${translate(playerVal)}) has chosen position ` + (position + 1) + '.' ); 
}

function algorithm(strat, playerVal){
    if (strat == 1){
        randomGo(board, playerVal);

    } else if (strat == 2){
        let pos = closeToWin(board);
        if (pos >= 0){
            board[pos] = playerVal;
            console.log(`Player ${playerVal} (${translate(playerVal)}) has chosen position ` + (pos + 1)  + '.');

        } else if (cornerFree(board) >= 0){
            let pos2 = cornerFree(board);
            board[pos2] = playerVal;
            console.log(`Player ${playerVal} (${translate(playerVal)}) has chosen position ` + (pos2 + 1)  + '.');
            
        } else{
            randomGo(board, playerVal);
        }
    }
    if (checkWin(board)) {
        // the checkwin needs 
        console.log('\nThe Final Board:\n' + writeBoard(board));
        console.log(`Player ${playerVal} (${translate(playerVal)}) wins!`);
    } else if (Math.min(...board) > -1) {
        // Math.min(...array)
        console.log('\nThe Final Board:\n' + writeBoard(board));
        console.log("It's a draw!");
    } else {
        turn(((playerVal + 1) % 2), 1, strat);
    }
    
}


//sana's code


function turn(playerVal, playerNo, diff){
    console.log('\nCurrent Board:\n' + writeBoard(board));

 // play a turn
    let move = prompt(`Player ${playerVal} (${translate(playerVal)}), choose a position (1-9): `);
    move = parseInt(move) - 1;

    if (move < 0 || move > 8) {
        console.log("Invalid position. Try again.");
        return turn(playerVal, playerNo, diff);
    } else if (board[move] > -1) {
        console.log("That spot is already taken. Try again.");
        return turn(playerVal, playerNo, diff);
    } else{
        board[move] = playerVal;
    }
    
    //check if win (ill make the checkWin function)
    if (checkWin(board)) {
        // the checkwin needs 
        console.log('\nThe Final Board:\n' + writeBoard(board));
        console.log(` Player ${playerVal} (${translate(playerVal)}) wins!`);
    } else if (Math.min(...board) > -1) {
        // Math.min(...array)
        console.log('\nThe Final Board:\n' + writeBoard(board));
        console.log("It's a draw!");
    } else if (playerNo == 2) {
        turn(((playerVal + 1) % 2), 2, diff);
    } else{
        algorithm(diff, ((playerVal + 1) % 2));
    }
    
 
// we also need to do a switch player 


}

initialise()
