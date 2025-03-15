let board = Array(9).fill(""), currentPlayer = "X", scores = { X: 0, O: 0 };

function makeMove(index) {
    if (board[index] || checkWin()) return;

    board[index] = currentPlayer;
    updateBoardUI(index);

    if (checkWin()) {
        displayMessage(`Winner: ${currentPlayer}`);
        scores[currentPlayer]++;
        updateScoreboard();
    } else if (board.every(square => square)) {
        displayMessage("It's a draw!");
    } else {
        switchPlayer();
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => 
        pattern.every(index => board[index] === currentPlayer)
    );
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function newRound() {
    board.fill("");
    document.querySelectorAll(".square").forEach(square => square.innerText = "");
    displayMessage("");
}

function newGame() {
    scores = { X: 0, O: 0 };
    newRound();
    updateScoreboard();
}

function updateBoardUI(index) {
    document.getElementById(index).innerText = currentPlayer;
}

function displayMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function updateScoreboard() {
    document.getElementById("scoreX").innerText = `X: ${scores.X}`;
    document.getElementById("scoreO").innerText = `O: ${scores.O}`;
}
