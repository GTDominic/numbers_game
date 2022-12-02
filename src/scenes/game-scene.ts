import { GameCode } from "../scripts/gamecode";
import { Constants } from "../config";

export class GameScene extends Phaser.Scene {
  private gameboard = new GameCode;
  private gamestate: {
    selPos: {x: number, y: number},
    elements: Array<Array<{rect: Phaser.GameObjects.Rectangle, number: Phaser.GameObjects.Text}>>,
    scrollHelper: any,
    cursors: any,
  } = {
    selPos: null,
    elements: [],
    scrollHelper: null,
    cursors: null,
  };
  private menu: {
    bar: Phaser.GameObjects.Rectangle,
    buttons: {
      check: {rect: Phaser.GameObjects.Rectangle, text: Phaser.GameObjects.Text, symbol: Phaser.GameObjects.Sprite},
      undo: {rect: Phaser.GameObjects.Rectangle, text: Phaser.GameObjects.Text, symbol: Phaser.GameObjects.Sprite},
      help: {rect: Phaser.GameObjects.Rectangle, text: Phaser.GameObjects.Text, symbol: Phaser.GameObjects.Sprite},
      cross: {rect: Phaser.GameObjects.Rectangle, text: Phaser.GameObjects.Text, symbol: Phaser.GameObjects.Sprite},
    },
  } = {
    bar: null,
    buttons: {
      check: {rect: null, text: null, symbol: null},
      undo: {rect: null, text: null, symbol: null},
      help: {rect: null, text: null, symbol: null},
      cross: {rect: null, text: null, symbol: null},
    },
  }

  constructor() {
    super({
      key: "GameScene",
    });
  }

  create(): void {
    this.draw();
    this.createMenu();
    this.gamestate.scrollHelper = this.physics.add.sprite(0, Constants.height / 2, '').setScale(0);
    this.cameras.main.startFollow(this.gamestate.scrollHelper, true, 0.5, 0.5);
    this.gamestate.scrollHelper.setCollideWorldBounds(true);
    this.cameras.main.useBounds = true;
    this.gamestate.cursors = this.input.keyboard.createCursorKeys();
  }

  update(): void {
    if(this.gamestate.cursors.down.isDown) this.gamestate.scrollHelper.setVelocityY(200);
    else if (this.gamestate.cursors.up.isDown) this.gamestate.scrollHelper.setVelocityY(-200);
    else this.gamestate.scrollHelper.setVelocityY(0);
  }

  private selection(element: any, x: number, y: number): void {
    // future feature TODO's:
    // Custom Color Support
    // Neighbor Highlighting
    // Call draw function only if necessary
    if(!this.gamestate.selPos) {
      this.gamestate.selPos = {x: x, y: y};
      this.gamestate.elements[y][x].number.setColor('#0000ff');
      return;
    }
    if(this.gamestate.selPos.x == x && this.gamestate.selPos.y == y) {
      this.gamestate.selPos = null;
      this.gamestate.elements[y][x].number.setColor('#00ff00');
      return;
    }
    this.gameboard.cross(this.gamestate.selPos, {x: x, y: y});
    this.gamestate.selPos = null;
    this.draw();
  }

  private draw(): void {
    
  }

  private draw_old(): void {
    for(let i = 0; i < this.gamestate.elements.length; i++) {
      for(let j = 0; j < this.gamestate.elements[i].length; j++) {
        this.gamestate.elements[i][j].number.destroy();
        this.gamestate.elements[i][j].rect.destroy();
      }
    }
    this.gamestate.elements = [];
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
          this.gamestate.elements[i][j].rect.depth = 1;
          this.gamestate.elements[i][j].number.depth = 2;
          this.gamestate.elements[i][j].rect.setInteractive();
          this.gamestate.elements[i][j].rect.on('pointerup', (element: any) => this.selection(element, j, i));
        } else {
          this.gamestate.elements[i].push({
            rect: this.add.rectangle(x, y, 50, 30, 0x999999), 
            number: this.add.text(x - 7, y - 12, this.gameboard.board[i][j].value.toString(), { fontFamily: 'monospace', color: '#000000', fontSize: '25px'}),
          });
          this.gamestate.elements[i][j].rect.depth = 1;
          this.gamestate.elements[i][j].number.depth = 2;
        }
      }
    }
    this.cameras.main.setBounds(0, 0, Constants.width, this.gameboard.board.length * 30);
    this.physics.world.setBounds(0, Constants.height / 2, Constants.width, this.gameboard.board.length * 30 - Constants.height);
  }

  private createMenu(): void {
    this.menu.bar = this.add.rectangle(0, Constants.height - 50, Constants.width, 50, 0x000000);
    this.menu.bar.setScrollFactor(0);
    this.menu.bar.setScale(2);
    this.menu.bar.depth = 10;
  }
}
