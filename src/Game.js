Demo.Game = function (game) {
	story = null; // the object to hold the story
	mainText = null; // the main paragraph text
	textStyle = null; // the obj to style the text
	buttonGroup = null; // something to hold all the choice buttons
	choiceList = []; // holds all current available choices
};

Demo.Game.prototype = {

    create: function () {
        // get the story
		this.story = new inkjs.Story(this.cache.getJSON("story"));
		
		// set up the style for the text
		this.textStyle = {
			fill: "#ffffff",
			font: "16px Arial",
			align: "left",
			wordWrap: true,
			wordWrapWidth: 620
		}

		// set up the main text
		this.mainText = this.add.text(10, 10, "", this.textStyle);

		// create the button group
		this.buttonGroup = this.add.group();

		// start the story
		this.continueStory();
    },
	
	// custom functions for dealing with phaser & ink start here!
	
	continueStory: function() {
		var txt = ""; // holds all of the main paragraph text

		// fetch story data from json until there's nothing left, then show the choices
		// using a do...while loop to make sure single-line paragraphs are displayed
		do {
			// add lines to the text variable
			txt += this.story.Continue(); // add the next line to the txt var

			// if this is the last line, render the text & the choices
			if (!this.story.canContinue) {
				// update the main paragraph text
				this.mainText.text = txt;
				
				// update the list of possible choices
				this.choiceList = this.story.currentChoices;
				
				// create the choices
				this.createChoices();
			}
		} while (this.story.canContinue);
	},
	
	createChoices: function() {
		// loop through the list of current choices
		for (var i = 0; i < this.choiceList.length; i++) {
			// get a reference to the current choice
			var choice = this.choiceList[i];
			
			// create a button for each choice
			var topMargin = this.mainText.height;
			var button = this.add.button(10, topMargin + (36 * i), "button", this.choiceClick, this, 1, 0, 0, 0, this.buttonGroup);
			// set a var on the button to keep track of which choice that button represents
			button.choiceIndex = choice.index;
			
			// create a text object for each choice
			var choiceText = this.add.text(10, 4, choice.text, this.textStyle);
			button.addChild(choiceText);
		}
	},
	
	choiceClick: function(btn) {	
		// remove buttons
		this.buttonGroup.callAll("kill");
		
		// pick the index and keep rolling
		this.story.ChooseChoiceIndex(btn.choiceIndex);
		this.continueStory();
	}

};
