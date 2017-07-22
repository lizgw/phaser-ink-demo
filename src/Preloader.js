
BasicGame.Preloader = function (game) {
};

BasicGame.Preloader.prototype = {

	preload: function () {
		// load story json
		this.load.json("story", "ink/phaser-ink-demo.json");
		
		// load images
		this.load.spritesheet("button", "assets/buttons.png", 620, 26);
	},

	create: function () {
		this.state.start('Game');
	}

};
