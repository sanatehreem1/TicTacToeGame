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