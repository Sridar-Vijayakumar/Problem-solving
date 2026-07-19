/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] === num) return false;

            // Check column
            if (board[i][col] === num) return false;

            // Check 3x3 box
            const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(col / 3) + (i % 3);

            if (board[boxRow][boxCol] === num) return false;
        }

        return true;
    }

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                if (board[row][col] === '.') {

                    for (let num = 1; num <= 9; num++) {
                        const ch = num.toString();

                        if (isValid(row, col, ch)) {
                            board[row][col] = ch;

                            if (solve()) return true;

                            // Backtrack
                            board[row][col] = '.';
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    solve();
};