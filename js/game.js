/* global Phaser */
// Copyright (c) 2024 Luke Di Bert. All rights reserved.
//
// Created by: Luke Di Bert
// Created on: Wednesday May 4th 2024

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
  default: 'arcade',
    arcade: {
      debug: true
    }
  },
  //set background color
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
      //we need to place it in the middle of the page
      autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)  
game.scene.add('titleScene', titleScene)
// start title
game.scene.start('splashScene')
