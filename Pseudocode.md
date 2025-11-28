# TicTacToeGame
A Tic Tac Toe game for Hackathon

List of functions:
- initialise game (choose no. of players etc.)
- function to log the board onto the console
- choose where to go
- check if win
- if 1 player maybe add algorithm ?


# Pseudocode

1. First step is to create an empty 3x3 board.

2. choosePosition(player symbol, no of players)
    position = input('choose where to go')
    if position taken:
        print error, try again
        choosePosition(same player, no of players)
    else:
        add player's icon to board
        if Winner():
            game ends!
        elif boardFull:
            draw
        else:
            if players = 1:
                algorithm
            else:
                choosePosition(other player, 2)

3. winner():
    for i 0 to 2:
        board[i][0] = board[i][1] = board[i][2]:
            return true
        board[0][i] = board[1][i] = board[2][i]:
            return true
    board[1][1] = board[0][0] = board[2][2]
            reutrn true
    board[2][0] = board[1][1] = board[0][2]
        
    [x,x,x],
    [x,x,x],
    [x,x,x]


[0, 1, 2]
[3, 4, 5]
[6, 7 ,8]

[0, 3, 6]
[1, 4, 7]
[2, 5, 8]

[0, 4, 8]
[2, 4, 6]

empty space on board = -1
player x = 1
player o = 0
to check if full = check smallest value on board

 X | X | O
---|---|---
 O |   | X 
---|---|---
 O | X | O 

write board: 
string = ' ' + translate(board[0][0]) + ' | ' + translate(board[0][1]) ..

translate(x):
    if x = 1:
        return 'X'
    elif x = 0:
        return 'O'
    elif x =-1:
        return ' '

1 player mode:

in turn(playerval, playerno):
    "take turn" code
    if not a win or a full board:
        if playerno = 2:
            turn(playerval +1%2 , 2)
        if playerno = 1:
            algorithm(difficulty level ?)


algorithm(difficulty):
    if diff = low:
        let pos = random(1 to 9)
        while board[pos] != -1:
            pos = random(1 to 9)
        board[pos] = 0 <-- o value
    if diff = high:
        the algorithm to always win/draw a game:
        - checks if the bot can win this turn, if so places an O there
        - checks if player can win next turn, if so places an O there
        ^ this needs to check all 24 possible cases!
        - if there are no next turn wins, try to fill each corner
