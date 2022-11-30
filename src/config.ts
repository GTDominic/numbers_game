import { GameScene } from './scenes/game-scene';

export const Constants = {
  height: 800,
  width: 450,
};

export const GameConfig: Phaser.Types.Core.GameConfig = {
  version: '1.0',
  type: Phaser.AUTO,
  scene: [GameScene],
  scale: {
    parent: 'game',
    width: Constants.width,
    height: Constants.height
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    }
  },
  backgroundColor: 0x333333
};
