/* global Phaser */
// Copyright (c) 2024 Luke Di Bert. All rights reserved.
//
// Created by: Luke Di Bert
// Created on: Wednesday May 5th 2024
// This is the instructions Scene

class InstructionsScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionsScene' })
    // variables
    this.instructionsSceneBackgroundImage = null
    this.startButton = null
    this.instructionsMusic = new Audio("./assets/instructions.mp3")
  }
  // sets the background color of the title scene
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  // prints Title Scene in the console
  preload () {
    console.log('instructions Scene')
    this.load.image('instructionsSceneBackground', 'assets/instructions.png')
    this.load.image('startButton', 'assets/start.png')
  }
  
  create (data){
    this.instructionsMusic.loop = true
    this.instructionsMusic.volume = 0.7
    this.instructionsMusic.play()
    // sets background
    this.instructionsSceneBackgroundImage = this.add.sprite(0, 0, 'instructionsSceneBackground')
    this.instructionsSceneBackgroundImage.x = 1920 / 2
    this.instructionsSceneBackgroundImage.y = 1080 / 2
    // sets the start button and adds functionality
    this.startButton = this.add.sprite(1920 / 2, 1000, 'startButton').setScale(2.2)
    this.startButton.setInteractive({ userHandCursor: true})
    this.startButton.on('pointerdown', () => this.clickButton())
  }

  update (time, delta){
  }
    // when the button is clicked it switches to the game scene
    clickButton () {
      this.scene.start('gameScene')
      this.instructionsMusic.pause()
    }
  }

export default InstructionsScene