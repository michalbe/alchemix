ig.module(
	'game.main'
)
.requires(
	'plusplus.core.plusplus',
	'game.levels.level1'
)
.defines(function() {

	ig.EntityExtended.inject({
    update: function() {
      //if (this.pos.y < this.tileSize.y*4 && !this.isUiScreen) {
      //    this.zIndex = 10100;
      //} else {

      this.zIndex = this.pos.y + this.size.y - this.offset.y;
      //}
      this.parent();
    }
	});

	var myGameClass = ig.GameExtended.extend({
		init: function () {
			this.autoSort = true;
			this.parent();
			this.loadLevel(ig.global.LevelLevel1);
		}
	});
	ig.main( '#canvas', myGameClass, 60, 320, 240, 1, ig.LoaderExtended );
});
