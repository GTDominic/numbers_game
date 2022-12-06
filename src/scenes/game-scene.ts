import { GameCode } from "../scripts/gamecode";
import { Constants } from "../config";

export class GameScene extends Phaser.Scene {
  private gameboard = new GameCode;
  private gamestate: {
    selPos: {x: number, y: number},
    elements: Array<Array<{val: {value: number, visible: boolean}, rect: Phaser.GameObjects.Rectangle, number: Phaser.GameObjects.Text}>>,
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
      restart: {rect: Phaser.GameObjects.Rectangle, text: Phaser.GameObjects.Text, symbol: Phaser.GameObjects.Sprite},
      rowClear: {rect: Phaser.GameObjects.Rectangle, text: Phaser.GameObjects.Text, symbol: Phaser.GameObjects.Sprite},
    },
  } = {
    bar: null,
    buttons: {
      check: {rect: null, text: null, symbol: null},
      undo: {rect: null, text: null, symbol: null},
      help: {rect: null, text: null, symbol: null},
      restart: {rect: null, text: null, symbol: null},
      rowClear: {rect: null, text: null, symbol: null},
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

  private selection(x: number, y: number): void {
    // future feature TODO's:
    // Custom Color Support
    // Neighbor Highlighting
    // Call draw function only if necessary
    if(!this.gamestate.elements[y][x].val.visible) return;
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
    // Used to store the length of the displayed board before appending
    // Gets updated if rows get deleted
    let lengthT = this.gamestate.elements.length;
    if(this.gameboard.getBoardSizeY() > this.gamestate.elements.length) {
      for(let i = this.gamestate.elements.length; i < this.gameboard.getBoardSizeY(); i++) {
        this.gamestate.elements.push([]);
        for(let j = 0; j < this.gameboard.getBoardSizeX(i); j++) this.appendElement(j, i);
      }
      this.cameras.main.setBounds(0, 0, Constants.width, this.gamestate.elements.length * 30 + Constants.menuHeight);
      this.physics.world.setBounds(0, Constants.height / 2, Constants.width, this.gamestate.elements.length * 30 - Constants.height + Constants.menuHeight);
    }
    if(this.gameboard.getBoardSizeY() < this.gamestate.elements.length) {
      for(let i = this.gameboard.getBoardSizeY(); i < this.gamestate.elements.length; i++) {
        for(let j = 0; j < this.gamestate.elements[i].length; j++) this.deleteElement(j, i);
      }
      lengthT = this.gamestate.elements.length;
      this.cameras.main.setBounds(0, 0, Constants.width, this.gamestate.elements.length * 30 + Constants.menuHeight);
      this.physics.world.setBounds(0, Constants.height / 2, Constants.width, this.gamestate.elements.length * 30 - Constants.height + Constants.menuHeight);
    }
    if(lengthT == 0) return;
    if(this.gameboard.getBoardSizeX(lengthT - 1) > this.gamestate.elements[lengthT - 1].length) {
      for(let j = this.gamestate.elements[lengthT - 1].length; j < this.gameboard.getBoardSizeX(lengthT - 1); j++) this.appendElement(j, lengthT - 1);
    }
    if(this.gameboard.getBoardSizeX(lengthT - 1) < this.gamestate.elements[lengthT - 1].length) {
      for(let j = this.gameboard.getBoardSizeX(lengthT - 1); j < this.gamestate.elements[lengthT - 1].length; j++) this.deleteElement(j, lengthT - 1);
    }
    for(let i = 0; i < lengthT; i++) {
      for(let j = 0; j < this.gamestate.elements[i].length; j++) {
        if(this.gamestate.elements[i][j].val != this.gameboard.getValue(j, i)) this.updateElement(j, i);
      }
    }
  }

  private createMenu(): void {
    let buttonwidth = Constants.width / 5;
    this.menu.bar = this.add.rectangle(Constants.width / 2, Constants.height - Constants.menuHeight / 2, Constants.width, Constants.menuHeight, 0x000000);
    this.menu.bar.setScrollFactor(0);
    this.menu.bar.depth = 10;

    this.menu.buttons.check.rect = this.add.rectangle(
      buttonwidth / 2 + buttonwidth * 0, 
      Constants.height - Constants.menuHeight / 2, 
      buttonwidth, 
      Constants.menuHeight, 
      0x111111
    );
    this.menu.buttons.check.rect.depth = 11;
    this.menu.buttons.check.rect.strokeColor = 0xffffff;
    this.menu.buttons.check.rect.isStroked = true;
    this.menu.buttons.check.rect.lineWidth = 5;
    this.menu.buttons.undo.rect = this.add.rectangle(
      buttonwidth / 2 + buttonwidth * 1, 
      Constants.height - Constants.menuHeight / 2, 
      buttonwidth, 
      Constants.menuHeight, 
      0x111111
    );
    this.menu.buttons.undo.rect.depth = 11;
    this.menu.buttons.undo.rect.strokeColor = 0xffffff;
    this.menu.buttons.undo.rect.isStroked = true;
    this.menu.buttons.undo.rect.lineWidth = 5;
    this.menu.buttons.help.rect = this.add.rectangle(
      buttonwidth / 2 + buttonwidth * 2, 
      Constants.height - Constants.menuHeight / 2, 
      buttonwidth, 
      Constants.menuHeight, 
      0x111111
    );
    this.menu.buttons.help.rect.depth = 11;
    this.menu.buttons.help.rect.strokeColor = 0xffffff;
    this.menu.buttons.help.rect.isStroked = true;
    this.menu.buttons.help.rect.lineWidth = 5;
    this.menu.buttons.restart.rect = this.add.rectangle(
      buttonwidth / 2 + buttonwidth * 3, 
      Constants.height - Constants.menuHeight / 2, 
      buttonwidth, 
      Constants.menuHeight, 
      0x111111
    );
    this.menu.buttons.restart.rect.depth = 11;
    this.menu.buttons.restart.rect.strokeColor = 0xffffff;
    this.menu.buttons.restart.rect.isStroked = true;
    this.menu.buttons.restart.rect.lineWidth = 5;
    this.menu.buttons.rowClear.rect = this.add.rectangle(
      buttonwidth / 2 + buttonwidth * 4, 
      Constants.height - Constants.menuHeight / 2, 
      buttonwidth, 
      Constants.menuHeight, 
      0x111111
    );
    this.menu.buttons.rowClear.rect.depth = 11;
    this.menu.buttons.rowClear.rect.strokeColor = 0xffffff;
    this.menu.buttons.rowClear.rect.isStroked = true;
    this.menu.buttons.rowClear.rect.lineWidth = 5;

    this.menu.buttons.check.rect.setScrollFactor(0);
    this.menu.buttons.undo.rect.setScrollFactor(0);
    this.menu.buttons.help.rect.setScrollFactor(0);
    this.menu.buttons.restart.rect.setScrollFactor(0);
    this.menu.buttons.rowClear.rect.setScrollFactor(0);

    this.menu.buttons.check.text = this.add.text(
      buttonwidth * 0 + 10, Constants.height - Constants.menuHeight + 10, "Check", { fontFamily: 'monospace', fontSize: '15px'}
    );
    this.menu.buttons.check.text.depth = 12;
    this.menu.buttons.undo.text = this.add.text(
      buttonwidth * 1 + 10, Constants.height - Constants.menuHeight + 10, "Undo", { fontFamily: 'monospace', fontSize: '15px'}
    );
    this.menu.buttons.undo.text.depth = 12;
    this.menu.buttons.help.text = this.add.text(
      buttonwidth * 2 + 10, Constants.height - Constants.menuHeight + 10, "Help", { fontFamily: 'monospace', fontSize: '15px'}
    );
    this.menu.buttons.help.text.depth = 12;
    this.menu.buttons.restart.text = this.add.text(
      buttonwidth * 3 + 10, Constants.height - Constants.menuHeight + 10, "Restart", { fontFamily: 'monospace', fontSize: '15px'}
    );
    this.menu.buttons.restart.text.depth = 12;
    this.menu.buttons.rowClear.text = this.add.text(
      buttonwidth * 4 + 10, Constants.height - Constants.menuHeight + 10, "RowClear", { fontFamily: 'monospace', fontSize: '15px'}
    );
    this.menu.buttons.rowClear.text.depth = 12;

    this.menu.buttons.check.text.setScrollFactor(0);
    this.menu.buttons.undo.text.setScrollFactor(0);
    this.menu.buttons.help.text.setScrollFactor(0);
    this.menu.buttons.restart.text.setScrollFactor(0);
    this.menu.buttons.rowClear.text.setScrollFactor(0);

    // TODO:
    // Functions on button press
  }

  private appendElement(x: number, y: number): void {
    let xPos = x * 50 + 25;
    let yPos = y * 30 + 15;
    let properties = this.getProperties(x, y);
    this.gamestate.elements[y].push({
      val: {
        value: this.gameboard.getValue(x, y).value,
        visible: this.gameboard.getValue(x, y).visible,
      },
      rect: this.add.rectangle(xPos, yPos, 50, 30, properties.bgColor),
      number: this.add.text(xPos - 7, yPos - 12 , this.gameboard.getValue(x, y).value.toString(), { fontFamily: 'monospace', color: properties.tColor, fontSize: '25px'}),
    });
    this.gamestate.elements[y][x].rect.depth = 1;
    this.gamestate.elements[y][x].number.depth = 2;
    this.gamestate.elements[y][x].rect.setInteractive();
    this.gamestate.elements[y][x].rect.on('pointerup', () => this.selection(x, y));
  }

  private deleteElement(x: number, y: number): void {
    this.gamestate.elements[y][x].number.destroy();
    this.gamestate.elements[y][x].rect.destroy();
  }

  private updateElement(x: number, y: number): void {
    let properties = this.getProperties(x, y);
    this.gamestate.elements[y][x].rect.fillColor = properties.bgColor;
    this.gamestate.elements[y][x].number.setColor(properties.tColor);
    this.gamestate.elements[y][x].number.setText(this.gameboard.getValue(x, y).value.toString());
    this.gamestate.elements[y][x].val.value = this.gameboard.getValue(x, y).value;
    this.gamestate.elements[y][x].val.visible = this.gameboard.getValue(x, y). visible;
  }

  private getProperties(x: number, y: number): {bgColor: number, tColor: string} {
    if(this.gameboard.getValue(x, y).visible) return {bgColor: 0x000000, tColor: '#00ff00'};
    return {bgColor: 0x999999, tColor: '#000000'};
  }
}
