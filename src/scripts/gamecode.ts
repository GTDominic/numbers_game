export class GameCode {
    // 9xX
    private board: Array<Array<{visible: boolean, value: number}>>;
    private startnumbers: number[];
    private lastCross: {e1: {x: number, y: number}, e2: {x: number, y: number}};

    constructor(numbers: number[]) {
        this.board = [];
        this.startnumbers = numbers;
        this.appendArray([...this.startnumbers]);
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

    public check(): void {
        this.lastCross = null;
        let numbers: number[] = [];
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board[i].length; j++) {
                if(this.board[i][j].visible) numbers.push(this.board[i][j].value);
            }
        }
        this.appendArray(numbers);
    }

    public undo(): void {
        if(!this.lastCross) return;
        this.board[this.lastCross.e1.y][this.lastCross.e1.x].visible = true;
        this.board[this.lastCross.e2.y][this.lastCross.e2.x].visible = true;
        this.lastCross = null;
    }

    public restart(): void {
        this.board = [];
        this.appendArray([...this.startnumbers]);
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

    public help(): {e1: {x: number, y: number}, e2: {x: number, y: number}} {
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board[i].length; j++) {
                if(!this.board[i][j].visible) continue;
                let neighbor = this.rekBottomNeighbour(j, i + 1);
                if(neighbor) {
                    if(
                        this.board[i][j].value === this.board[neighbor.y][neighbor.x].value
                        || this.board[i][j].value + this.board[neighbor.y][neighbor.x].value == 10
                    ) return {e1: {x: j, y: i}, e2: neighbor};
                }
                neighbor = this.rekRightNeighbour(j + 1, i);
                if(neighbor) {
                    if(
                        this.board[i][j].value === this.board[neighbor.y][neighbor.x].value
                        || this.board[i][j].value + this.board[neighbor.y][neighbor.x].value == 10
                    ) return {e1: {x: j, y: i}, e2: neighbor};
                }
            }
        }
        return null;
    }

    public cross(e1: {x: number, y:number}, e2: {x: number, y:number}):void {
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
        this.lastCross = {e1: e1, e2: e2};
    }

    public clearRows(): void {
        this.lastCross = null;
        for(let i = 0; i < this.board.length - 1; i++) {
            let rDelete = true;
            for(let j = 0; j < this.board[i].length; j++) {
                if(this.board[i][j].visible) rDelete = false;
            }
            if(rDelete) {
                this.board.splice(i, 1);
                i--;
            }
        }
    }

    private appendArray(numbers: number[]):void {
        if(this.board.length !== 0) {
            if(this.board[this.board.length - 1].length < 9) {
                for(let i = this.board[this.board.length - 1].length - 1; i < 8; i++) {
                    if(numbers.length > 0) this.board[this.board.length - 1].push({visible: true, value: numbers.shift()});
                }
            }
        }
        while(numbers.length > 0) {
            this.board.push([]);
            for(let i = 0; i < 9; i++) {
                if(numbers.length > 0) this.board[this.board.length - 1].push({visible: true, value: numbers.shift()});
            }
        }
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