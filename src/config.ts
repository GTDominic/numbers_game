import { GameScene } from './scenes/game-scene';
import { StartScene } from './scenes/start-scene';

export const Constants: {
  height: number,
  width: number,
  menuHeight: number,
  gamemodes: {name: string, startarray: number[], length: number}[],
} = {
  height: 800,
  width: 450,
  menuHeight: 70,
  gamemodes: [
    {name: '10 random numbers', startarray: null, length: 10},
    {name: '20 random numbers', startarray: null, length: 20},
    {name: '1 - 12', startarray: [1,2,3,4,5,6,7,8,9,1,0,1,1,1,2], length: null},
    {name: '1 - 13', startarray: [1,2,3,4,5,6,7,8,9,1,0,1,1,1,2,1,3], length: null},
  ]
};

export const GameConfig: Phaser.Types.Core.GameConfig = {
  version: '1.0',
  type: Phaser.AUTO,
  scene: [StartScene, GameScene],
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
