
BasicGame.Game = function (game) {
	story = null;
	mainText = null;
	textStyle = null;
	buttonGroup = null;
	choiceList = [];
};

BasicGame.Game.prototype = {

    create: function () {

        // get story
		this.story = this.loadStory();
		console.log(this.story);
		
		this.textStyle = {
			fill: "#ffffff",
			font: "18px Times New Roman",
			align: "left",
			wordWrap: true,
			wordWrapWidth: 620
		}

		this.mainText = this.add.text(10, 10, "Hello world!", this.textStyle);

		this.buttonGroup = this.add.group();

		// start the story
		this.continueStory();
    },
	
	// custom functions for phaser + ink
	loadStory: function() {
		return new inkjs.Story(this.cache.getJSON("story"));
	},
	
	continueStory: function() {
		var txt = "";

		// fetch story data from json until there's nothing left, then show the choices
		do {
			// add lines to the text variable
			txt += this.story.Continue(); // add the next line to the txt var

			// if we run out of lines, render the text & following choices
			if (!this.story.canContinue) {
				this.createMainText(txt);
				this.choiceList = this.story.currentChoices;
				this.createChoices();
			}
		} while (this.story.canContinue);
	},
	
	createMainText: function(t) {
		this.mainText.text = t;
	},
	
	createChoices: function() {
		for (var i = 0; i < this.choiceList.length; i++) {
			var choice = this.choiceList[i];
			//console.log(choice.text + "[" + choice.index + "] ");
			
			// create a button for each choice
			var topMargin = this.mainText.height;
			var button = this.add.button(10, topMargin + (36 * i), "button", this.choiceClick, this, 1, 0, 0, 0, this.buttonGroup);
			button.choiceIndex = choice.index;
			
			// create a text object for each choice
			var choiceText = this.add.text(10, 4, choice.text, this.textStyle);
			button.addChild(choiceText);
		}
	},
	
	choiceClick: function(btn) {
		console.log("u clicked it");
		console.log(btn.choiceIndex);
		
		// remove buttons
		this.buttonGroup.callAll("kill");
	}

};
