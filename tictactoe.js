let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let scores = { "X": 0, "O": 0 };

function makeMove(index){
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("square")[index].innerText = currentPlayer;

        if (checkWin()) {
            document.getElementById("message").innerHTML = 'Winner: ' + currentPlayer;
            scores[currentPlayer]++;
        } else if (board.every(square => square !== "")) {
            document.getElementById("message").innerHTML = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern =>
        board[pattern[0]] === currentPlayer &&
        board[pattern[1]] === currentPlayer &&
        board[pattern[2]] === currentPlayer
    );
}

function newRound() {
    board = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".square").forEach(square => square.innerText = "");
    document.getElementById("message").innerText = "";
}

function newGame() {
    scores = { "X": 0, "O": 0 };
    newRound();
    updateScoreboard();
}