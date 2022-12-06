export class GameCode {
    // 9xX
    private board: Array<Array<{visible: boolean, value: number}>>;

    constructor() {
        this.board = [
            [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
                {visible: false, value: 1},
                {visible: true, value: 1},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], [
                {visible: false, value: 1},
                {visible: true, value: 2},
                {visible: false, value: 3},
                {visible: true, value: 4},
                {visible: false, value: 5},
                {visible: true, value: 6},
                {visible: false, value: 7},
                {visible: true, value: 8},
                {visible: false, value: 9},
            ], [
                {visible: true, value: 1},
                {visible: false, value: 2},
                {visible: true, value: 3},
                {visible: false, value: 4},
                {visible: true, value: 5},
                {visible: false, value: 6},
                {visible: true, value: 7},
                {visible: false, value: 8},
                {visible: true, value: 9},
            ], 
        ]
    }

    public getBoardSizeY(): number {
        return this.board.length
    }

    public getBoardSizeX(index: number): number {
        return this.board[index].length;
    }

    public getValue(x: number, y: number): {visible: boolean, value: number} {
        return this.board[y][x];
    }

    public findNeighbours(x: number, y: number): {
        right: {x: number, y: number}, 
        left: {x: number, y: number}, 
        top: {x: number, y: number}, 
        bottom: {x: number, y: number}
    } {
        return {
            right: this.rekRightNeighbour(x + 1, y), 
            left: this.rekLeftNeighbour(x - 1, y), 
            top: this.rekTopNeighbour(x, y - 1), 
            bottom: this.rekBottomNeighbour(x, y + 1)
        };
    }

    public cross(e1: {x: number, y:number}, e2: {x: number, y:number}) {
        if(e1.x === e2.x) {
            if(e1.y > e2.y) {
                let check = this.rekTopNeighbour(e1.x, e1.y - 1);
                if(check.x !== e2.x || check.y !== e2.y) return;
            } else {
                let check = this.rekBottomNeighbour(e1.x, e1.y + 1);
                if(check.x !== e2.x || check.y !== e2.y) return;
            }
        } else {
            if(e1.y > e2.y || (e1.x > e2.x && e1.y === e2.y)) {
                let check = this.rekLeftNeighbour(e1.x - 1, e1.y);
                if(check.x !== e2.x || check.y !== e2.y) return;
            } else {
                let check = this.rekRightNeighbour(e1.x + 1, e1.y);
                if(check.x !== e2.x || check.y !== e2.y) return;
            }
        }
        if(this.board[e1.y][e1.x].value !== this.board[e2.y][e2.x].value && this.board[e1.y][e1.x].value + this.board[e2.y][e2.x].value !== 10) return;
        this.board[e1.y][e1.x].visible = false;
        this.board[e2.y][e2.x].visible = false;
    }

    private rekLeftNeighbour(x: number, y: number): {x: number, y: number} {
        if (y < 0) return null;
        if (x < 0) return this.rekLeftNeighbour(8, y - 1);
        if (!this.board[y][x].visible) return this.rekLeftNeighbour(x - 1, y);
        return {x: x, y: y};
    }

    private rekRightNeighbour(x: number, y: number): {x: number, y: number} {
        if (y >= this.board.length) return null;
        if (y == this.board.length - 1 && x >= this.board[y].length) return null;
        if (x > 8) return this.rekRightNeighbour(0, y + 1);
        if (!this.board[y][x].visible) return this.rekRightNeighbour(x + 1, y);
        return {x: x, y: y};
    }

    private rekTopNeighbour(x: number, y: number): {x: number, y: number} {
        if (y < 0) return null;
        if (!this.board[y][x].visible) return this.rekTopNeighbour(x, y - 1);
        return {x: x, y: y};
    }

    private rekBottomNeighbour(x: number, y: number): {x: number, y: number} {
        if (y >= this.board.length) return null;
        if (y == this.board.length - 1 && x >= this.board[y].length) return null;
        if (!this.board[y][x].visible) return this.rekBottomNeighbour(x, y + 1);
        return {x: x, y: y};
    }
}