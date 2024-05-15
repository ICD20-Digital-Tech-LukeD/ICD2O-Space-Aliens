/* global Phaser */
// Copyright (c) 2024 Luke Di Bert. All rights reserved.
//
// Created by: Luke Di Bert
// Created on: Wednesday May 5th 2024
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })
    // variables
    this.background = null
    this.ship = null
    this.fireMissle = false
  }
  // sets the background color of the title scene
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  // prints Title Scene in the console
  preload() {
    console.log('Game Scene')

    // images
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missle', 'assets/missile.png')
  }

  create(data) {
    // makes the background
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)
    // spawns the ship on the background
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')
    // adds ship to group
    this.missleGroup = this.physics.add.group()
  }

  update(time, delta) {
    // called 60 times a second, hopefully!
    //constant variable for the left arrow key
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    // constant variable for the right arrow key
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    // constant variable for the spacebar 
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    //checks if the left key is being pressed down
    if (keyLeftObj.isDown === true) {
      //moves the ship to the left
      this.ship.x = this.ship.x - 5
      //if the ship hits the border of the background it wraps around to the other side
      if (this.ship.x < 0) {
        this.ship.x = 1920
      }
    }
    //checks if the right key is being pressed down
    if (keyRightObj.isDown === true) {
      //moves the ship to the right
      this.ship.x = this.ship.x + 5
      //if the ship hits the border of the background it wraps around to the other side
      if (this.ship.x > 1920) {
        this.ship.x = 0
      }
      //checks if the spacebar is being pressed
      if (keySpaceObj.isDown === true) {
        if (this.fireMissle === false) {
          // fires missle
          this.fireMissle === true
          //makes a missle on the ship
          const aNewMissle = this.physics.add.sprite(this.ship.x, this.ship.y, 'missle')
          this.missleGroup.add(aNewMissle)
        }
      }
      if (keySpaceObj.isUp === true) {
        this.fireMissle === false
      }
    }
  }
}

export default GameScene