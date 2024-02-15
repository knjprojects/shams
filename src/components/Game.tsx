"use client"
import { useState } from 'react';
import ball from '../../public/assets/ball.png'
/*export default function BouncingBall() {
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);

  const handleTouchStart = () => {
    setVelocity(-5); // Adjust the value to change the bounce intensity
  };

  const handleTouchEnd = () => {
    setVelocity(5); // Adjust the value to change the bounce intensity
  };

  const updatePosition = () => {
    setPosition((prevPosition) => prevPosition + velocity);
    setVelocity((prevVelocity) => prevVelocity + 0.2); // Adjust the value to change the bounce behavior
  };

  // Update the position on each frame
  requestAnimationFrame(updatePosition);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: '#f0f0f0',
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#0070f3',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: position,
        }}
      />
    </div>
  );
}*/
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const scene:any=this;
const GameComponent = () => {
  const gameRef:any = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: {
        preload: preload,
        create: create
      }
    };

    function preload() {
      // Preload assets
      scene.load.image('ball', ball);
    }

    function create() {
      // Create game objects and logic
      var ball:any = scene.physics.add.sprite(400, 100, 'ball');
    ball.setBounce(0.7);
    ball.setCollideWorldBounds(true);

    scene.input.on('pointerdown', function () {
        ball.setVelocityY(-300);
    }, scene);
    }


    gameRef.current = new Phaser.Game(config);

    return () => {
      gameRef.current.destroy(true);
    };
  }, []);

  const startGame = () => {
    // Start or restart the game
    gameRef.current.scene.start(); // Add your scene key if you have multiple scenes
  };

  return (
    <div>
      {/**<button onClick={startGame}>Start Game</button>
      <div id="phaser-game" /> */}
      
    </div>
  );
};

export default GameComponent;