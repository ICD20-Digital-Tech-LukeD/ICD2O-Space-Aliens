/* global Phaser */
// Copyright (c) 2024 Luke Di Bert. All rights reserved.
//
// Created by: Luke Di Bert
// Created on: Wednesday May 5th 2024
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
    // variables
    this.titleSceneBackgroundImage = null
    this.titleScenetext = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#000000', align: 'center' }
  }
  // sets the background color of the title scene
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  // prints Title Scene in the console
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', 'assets/spaceTitle.png')
  }
  
  create (data) {
    //sets background of title screen
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(1.5)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
    // sets text of title screen
    this.titleScenetext = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Raiders', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta){
    //when the run time hits 5 seconds switch to menu scene
  if (time > 5000) {
    this.scene.switch('menuScene')
    }
  }
}

export default TitleScene