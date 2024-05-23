/* global Phaser */
// Copyright (c) 2024 Luke Di Bert. All rights reserved.
//
// Created by: Luke Di Bert
// Created on: Wednesday May 4th 2024
// This is the Splash Scene

// this creates a class for the splash scene and makes a unique key that can be used later on
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })
  }

  init(data) {
    // this sets the background color of the splash scene
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  // this function puts Splash Scene into the console and loads the splash scene image into a key to be used later
  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/IMHSplashScene.jpg')
  }

  create(data) {
    // this is for my splash scene picture and to make it centered in the middle
    // Create the video object
    this.splashSceneImage = this.add.sprite(0, 0, 'splashSceneBackground');
    // screen dimensions for x 
    this.splashSceneImage.x = 1920 / 2
    // screen dimensions on y 
    this.splashSceneImage.y = 1080 / 2
  }
  // when the game updates every few hundred miliseconds it runs this function
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene

