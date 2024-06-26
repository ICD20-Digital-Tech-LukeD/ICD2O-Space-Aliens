/* global Phaser */
// Copyright (c) 2024 Luke Di Bert. All rights reserved.
//
// Created by: Luke Di Bert
// Created on: Wednesday May 5th 2024
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
    // variables
    this.menuSceneBackgroundImage = null
    this.startButton = null
    this.menuMusic = new Audio("./assets/menuSong.mp3")
  }
  // sets the background color of the title scene
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  // prints Title Scene in the console
  preload () {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', 'assets/spaceMenu.png')
    this.load.image('startButton', 'assets/start.png')
  }
  create (data){
    this.menuMusic.loop = true
    this.menuMusic.volume = 1
    this.menuMusic.play()
    // sets background
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    // sets the start button and adds functionality
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton').setScale(2.75)
    this.startButton.setInteractive({ userHandCursor: true})
    this.startButton.on('pointerdown', () => this.clickButton())
  }

  update (time, delta){
  }
    // when the button is clicked it switches to the game scene
    clickButton () {
      this.scene.start('instructionsScene')
      this.menuMusic.pause()
    }
  }  

export default MenuScene