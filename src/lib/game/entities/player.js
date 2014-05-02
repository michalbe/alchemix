ig.module(
  'game.entities.player'
).requires(
  'plusplus.abstractities.player'
).defines( function() {
  ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
    canFlipY: false,
    canFlipX: false,
    size: {x: 125, y: 50},
    offset: {x: 25, y: 130},
    animSheet: new ig.AnimationSheet( "media/sprites/char.png", 180, 180),
    animInit: "idleX",
    speed: {
      x: 500,
      y: 500
    },
    maxVelGrounded: {
        x: 500,
        y: 500
    },
    animSettings: {
      idleX: { sequence: [4], frameTime: 0.1 },
      moveDown: { sequence: [4, 5, 6, 7], frameTime: 0.09 },
      moveUp: { sequence: [12, 13, 14, 15], frameTime: 0.09 },
      moveRight: { sequence: [0, 1, 2, 3], frameTime: 0.09 },
      moveLeft: { sequence: [8, 9, 10, 11], frameTime: 0.09 }
    }
  });

});
