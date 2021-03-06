import Phaser from 'phaser'

import Boot from './scenes/Boot'
import Loader from './scenes/Loader'
  
import Stage1 from './scenes/Stage1'
import Stage1Event from './scenes/Stage1Event'
import Stage1Eventgame from './scenes/Stage1Eventgame'

import Stage2 from './scenes/Stage2'
import Stage2Event from './scenes/Stage2Event'
import Stage2Eventgame from './scenes/Stage2Eventgame'

import Stage3 from './scenes/Stage3'
import StageEndcredits from './scenes/StageEndcredits'

import StageStop from './scenes/StageStop'
import StageOver from './scenes/StageOver'
import StageResult from './scenes/StageResult'

export const config: Phaser.Types.Core.GameConfig = {
  title: 'Into the Forest',
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  parent: 'game-container',
  scale: {
    // mode: Phaser.Scale.MAX_ZOOM
    // mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
    // autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 2500 },
        debug: false
    }
  },
  scene: [Boot, Loader, Stage1, Stage1Event, Stage1Eventgame, Stage2, Stage2Event, Stage2Eventgame, Stage3, StageEndcredits, StageStop, StageOver, StageResult]
}
