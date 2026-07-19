var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(row, col, index) {
        // Entire word has been found
        if (index === word.length) {
            return true;
        }

        // Invalid position or character mismatch
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // Temporarily mark this cell as visited
        const originalCharacter = board[row][col];
        board[row][col] = "#";

        const found =
            backtrack(row + 1, col, index + 1) ||
            backtrack(row - 1, col, index + 1) ||
            backtrack(row, col + 1, index + 1) ||
            backtrack(row, col - 1, index + 1);

        // Restore the cell for other searches
        board[row][col] = originalCharacter;

        return found;
    }

    // Try starting from every cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (backtrack(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};