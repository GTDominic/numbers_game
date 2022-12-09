import { Constants } from "../config";
import { randomInt, values } from "../scripts/shared";

export class StartScene extends Phaser.Scene {
    private menu: Array<{rect: Phaser.GameObjects.Rectangle, text: Phaser.GameObjects.Text}> = [];

    constructor() {
        super({
            key: "StartScene",
        });
    }

    create(): void {
        for(let i = 0; i < Constants.gamemodes.length; i++) {
            this.menu.push({
                rect: this.add.rectangle(20, 50 + 150 * i, Constants.width - 40, 100, 0x000000),
                text: this.add.text(30, 80 + 150 * i, Constants.gamemodes[i].name, { fontFamily: 'monospace', fontSize: '35px'}),
            });
            this.menu[i].rect.setOrigin(0,0);
            this.menu[i].rect.setInteractive();
            this.menu[i].rect.on('pointerup', () => this.startGame(i));
        }
    }

    private startGame(i: number): void {
        if(Constants.gamemodes[i].startarray) values.startarray = Constants.gamemodes[i].startarray;
        else {
            values.startarray = [];
            for(let j = 0; j < Constants.gamemodes[i].length; j++) {
                values.startarray.push(randomInt(1, 9));
            }
        }
        this.scene.stop('StartScene');
        this.scene.start('GameScene');
    }
}