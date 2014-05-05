ig.module(
  'game.entities.player'
).requires(
  'plusplus.abstractities.player'
).defines( function() {
  ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
    //canFlipY: false,
    //canFlipX: false,
    size: {x: 70, y: 120},
    //offset: {x: 25, y: 130},
    animSheet: new ig.AnimationSheet( "media/sprites/alchemix.png", 78, 127),
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
      idleX: { sequence: [5], frameTime: 0.1 },
      // moveX: { sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], frameTime: 0.04 }
      moveX: { sequence: [9,8,7,6,5,4,3,2,1,0], frameTime: 0.08 }
    }
  });

});
