# Tic Tac Toe – CLI Game
_A JavaScript command-line Tic Tac Toe game built for Hackathon #1_

---

## Project Description
This is a fully interactive **Tic Tac Toe** game played in the terminal using **Node.js**.  
The game allows players to choose between **1-player** or **2-player** mode, displays the board after each move, and checks for win or draw conditions.

The internal board is stored using numbers:

- `-1` = empty  
- `1` = X  
- `0` = O  

A helper function (`translate()`) converts numbers into characters when printing the board.

---

## Installation & Usage

### **1. Clone the repo**
```bash
git clone <git@github.com:sanatehreem1/TicTacToeGame.git>
cd tictactoegame
```
### **2. Install Dependencies**
This game uses prompt-sync for terminal input:
```bash
npm install prompt-sync
```
### **3. Run the Game**
```bash
node script.js
```
### **4. How to Play**
- Enter **1** or **2** for the number of players
- Choose positions **1–9** to place your X or O
- First player to align 3 symbols wins
- If the board fills with no winner → **Draw**

Board layout:
```bash
 1 | 2 | 3
---|---|---
 4 | 5 | 6
---|---|---
 7 | 8 | 9
```