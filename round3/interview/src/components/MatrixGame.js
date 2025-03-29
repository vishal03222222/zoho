class MatrixGame {
    constructor(size) {
        this.grid = Array.from({ length: size }, () => Array(size).fill("-"));
    }
    
    addAtom(row, col) {
        this.grid[row][col] = "X";
    }
    
    displayGrid() {
        console.log(this.grid.map(row => row.join(" ")).join("\n"));
    }
}
const matrixGame = new MatrixGame(3);
matrixGame.addAtom(1, 1);
matrixGame.displayGrid();
export default MatrixGame;
