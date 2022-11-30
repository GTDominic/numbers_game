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
    this.cameras.main.useBounds = true;
  }

  update(): void {
    this.input.on('wheel', (pointer: any, gameObjects: any, deltaX: any, deltaY: any, deltaZ: any) => {
      if(deltaY > 0) {
        console.log(deltaY + ' 1 ' + this.cameras.main.y);
        if(this.cameras.main.y > -(this.gameboard.board.length * 30 - this.sys.canvas.height)) this.cameras.main.y -= 0.1;
      }
      if(deltaY < 0) {
        console.log(deltaY + ' 2 ' + this.cameras.main.y);
        if(this.cameras.main.y < 0) this.cameras.main.y += 0.1;
      }
    })
  }

  private draw(): void {
    for(let i = 0; i < this.gameboard.board.length; i++) {
      this.gamestate.elements.push([]);
      for(let j = 0; j < this.gameboard.board[i].length; j++) {
        let x = j * 50 + 25;
        let y = i * 30 + 15;
        if (this.gameboard.board[i][j].visible) {
          this.gamestate.elements[i].push({
            rect: this.add.rectangle(x, y, 50, 30, 0x000000), 
            number: this.add.text(x - 7, y - 12, this.gameboard.board[i][j].value.toString(), { fontFamily: 'monospace', color: '#00ff00', fontSize: '25px'}),
          });
        } else {
          this.gamestate.elements[i].push({
            rect: this.add.rectangle(x, y, 50, 30, 0x999999), 
            number: this.add.text(x - 7, y - 12, this.gameboard.board[i][j].value.toString(), { fontFamily: 'monospace', color: '#000000', fontSize: '25px'}),
          });
        }
      }
    }
  }
}
