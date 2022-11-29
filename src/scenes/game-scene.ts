import { GameCode } from "../scripts/gamecode";

export class GameScene extends Phaser.Scene {
  private gameboard = new GameCode;
  private gamestate: {
    selPos: {x: number, y: number},
    elements: Array<Array<{rect: any, number: any}>>,
  } = {
    selPos: {x: 0, y: 0},
    elements: [],
  };

  constructor() {
    super({
      key: "GameScene",
    });
  }

  create(): void {
    this.draw();
  }

  private draw(): void {
    for(let i = 0; i < this.gameboard.board.length; i++) {
      this.gamestate.elements.push([]);
      for(let j = 0; j < this.gameboard.board[i].length; j++) {
        let x = j * 70 + 35;
        let y = i * 50 + 25;
        if (this.gameboard.board[i][j].visible) {
          this.gamestate.elements[i].push({
            rect: this.add.rectangle(x, y, 70, 50, 0x000000), 
            number: this.add.text(x - 7, y - 15, this.gameboard.board[i][j].value.toString(), { fontFamily: 'monospace', color: '#00ff00', fontSize: '30px'}),
          });
        } else {
          this.gamestate.elements[i].push({
            rect: this.add.rectangle(x, y, 70, 50, 0x999999), 
            number: this.add.text(x - 7, y - 15, this.gameboard.board[i][j].value.toString(), { fontFamily: 'monospace', color: '#000000', fontSize: '30px'}),
          });
        }
      }
    }
  }
}
