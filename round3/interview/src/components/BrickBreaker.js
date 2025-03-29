class BrickBreaker {
    constructor() {
        this.grid = Array.from({ length: 7 }, () => Array(7).fill(" "));
        this.grid[6][3] = "o"; // Ball position
    }
    
    moveBall(direction) {
        console.log(`Moving ball ${direction}`);
    }
}const brickBreaker = new BrickBreaker();
brickBreaker.moveBall("St");
export default BrickBreaker;