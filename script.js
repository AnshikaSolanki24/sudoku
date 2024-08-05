let currentLevel = 0;
let isNextLevelButtonActive = false;
let timerInterval;
let startTime;

const sampleProblems = [
    [
        [5, 3, 0, 0, 0, 8, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 8],
        [0, 0, 0, 0, 4, 0, 5, 0, 7],
        [0, 5, 0, 7, 6, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 7, 0, 1],
        [7, 0, 0, 9, 2, 0, 8, 5, 0],
        [0, 6, 1, 0, 0, 7, 0, 0, 0],
        [0, 0, 7, 0, 0, 9, 0, 0, 0],
        [0, 0, 5, 0, 0, 0, 1, 7, 9],
    ],
    [
        [8, 0, 0, 4, 0, 6, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 4, 0, 3],
        [0, 1, 0, 7, 0, 0, 6, 5, 0],
        [5, 0, 9, 0, 3, 0, 7, 8, 0],
        [0, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 4, 8, 0, 2, 0, 1, 0, 3],
        [0, 5, 2, 0, 0, 0, 0, 9, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 9, 0, 2, 0, 0, 5],
    ],
    [
        [0, 0, 0, 8, 0, 0, 0, 0, 7],
        [0, 0, 3, 0, 0, 0, 6, 0, 0],
        [0, 8, 0, 0, 4, 0, 0, 5, 0],
        [0, 0, 0, 0, 0, 7, 0, 0, 0],
        [0, 6, 0, 0, 2, 0, 0, 0, 0],
        [0, 5, 0, 0, 0, 0, 0, 0, 0],
        [7, 0, 0, 0, 0, 5, 0, 0, 0],
        [0, 0, 0, 0, 0, 6, 0, 0, 8],
        [0, 0, 1, 0, 0, 0, 0, 0, 0]
    ],
    [
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 8, 0, 0, 0, 0, 0, 2],
    [0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 0],
    [2, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 5]
],
[
    [0, 0, 0, 0, 0, 3, 0, 0, 5],
    [0, 6, 0, 0, 9, 0, 0, 4, 0],
    [8, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 7, 0],
    [0, 0, 0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 8, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 3],
    [0, 0, 4, 7, 1, 0, 0, 0, 0],
    [0, 5, 7, 0, 0, 0, 0, 0, 0]
],
[
    [0, 0, 0, 7, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 8, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 7, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0],
    [4, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 0, 0, 7, 0]
],
[
    [5, 0, 0, 0, 0, 7, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
],
[
    [0, 0, 0, 0, 2, 0, 0, 0, 5],
    [0, 0, 0, 5, 0, 6, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
],
[
    [0, 0, 2, 0, 6, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
],
[
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

];

let solutionBoard = solveSudoku([...sampleProblems[currentLevel].map(row => [...row])]);
if (!solutionBoard) {
    alert("Error: No solution found for the initial puzzle.");
}

let sudokuBoard = [];

function createSudokuBoard() {
    const table = document.getElementById("sudokuBoard");

    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        sudokuBoard.push([]);

        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("maxlength", "1");
            input.addEventListener("input", () => validateInput(input));
            cell.appendChild(input);
            row.appendChild(cell);
            sudokuBoard[i][j] = input;

            input.value = sampleProblems[currentLevel][i][j] !== 0 ? sampleProblems[currentLevel][i][j] : '';
            input.readOnly = sampleProblems[currentLevel][i][j] !== 0;
        }

        table.appendChild(row);
    }

    startTimer();  // Start the timer when the board is created
}

function validateInput(input) {
    const value = parseInt(input.value);

    if (isNaN(value) || value < 1 || value > 9) {
        input.value = '';
    }
}

function submitAnswer() {
    if (!isBoardComplete()) {
        alert("Please complete the puzzle before submitting.");
        return;
    }

    if (checkUserAnswer()) {
        alert("Congratulations! Puzzle solved");
        stopTimer();  // Stop the timer when the puzzle is solved
        isNextLevelButtonActive = true;
        document.getElementById("nextLevelBtn").classList.add("active");
    } else {
        alert("Wrong answer. Please reset the highlighted numbers and try again.");
    }
}

function isBoardComplete() {
    return sudokuBoard.every(row => row.every(cell => cell.value !== ''));
}

function checkUserAnswer() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const userValue = parseInt(sudokuBoard[i][j].value);
            const correctValue = solutionBoard[i][j];

            if (userValue !== correctValue) {
                sudokuBoard[i][j].style.color = "red";
                return false;
            }
        }
    }

    return true;
}

function goToNextLevel() {
    if (isNextLevelButtonActive) {
        currentLevel++;
        isNextLevelButtonActive = false;
        document.getElementById("nextLevelBtn").classList.remove("active");
        resetBoard();
        createSudokuBoard();
    }
}

function resetBoard() {
    sudokuBoard = [];
    const table = document.getElementById("sudokuBoard");
    table.innerHTML = "";
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    document.getElementById("timer").textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function solveSudoku(board) {
    const solvedBoard = [...board.map(row => [...row])];
    if (solveSudokuHelper(solvedBoard)) {
        return solvedBoard;
    }
    return null;
}

function solveSudokuHelper(board) {
    const emptyCell = findEmptyCell(board);

    if (!emptyCell) {
        return true;
    }

    const [row, col] = emptyCell;

    for (let num = 1; num <= 9; num++) {
        if (isValidMove(row, col, num, board)) {
            board[row][col] = num;

            if (solveSudokuHelper(board)) {
                return true;
            }

            board[row][col] = 0;
        }
    }

    return false;
}

function findEmptyCell(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                return [i, j];
            }
        }
    }
    return null;
}

function isValidMove(row, col, num, board) {
    return (
        !isInRow(row, num, board) &&
        !isInColumn(col, num, board) &&
        !isInBox(row - (row % 3), col - (col % 3), num, board)
    );
}

function isInRow(row, num, board) {
    return board[row].includes(num);
}

function isInColumn(col, num, board) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) {
            return true;
        }
    }
    return false;
}

function isInBox(startRow, startCol, num, board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return true;
            }
        }
    }
    return false;
}

// Initialize the game
createSudokuBoard();
