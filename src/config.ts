import { GameScene } from './scenes/game-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  version: '1.0',
  type: Phaser.AUTO,
  scene: [GameScene],
  scale: {
    parent: 'game',
    width: 600,
    height: 800
  },
  backgroundColor: 0x4ac7ff
};
