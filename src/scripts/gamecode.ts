export class GameCode {
    // 9xX
    public board: Array<Array<{visible: boolean, value: number}>>;

    constructor() {
        this.board = [
            [
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
            ],
        ]
    }
}