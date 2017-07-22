// create the game object
var game = new Phaser.Game(640, 480, Phaser.AUTO, {preload: preload, create: create, update: update});

function preload() {
	// load json story
	game.load.json("story", "ink/phaser-ink-demo.json");
	console.log("preloaded");
}

function create() {
	var story = loadStory("story");
		
	style = {
		fill: "#ffffff",
		font: "18px Times New Roman",
		align: "left",
		wordWrap: true,
		wordWrapWidth: 620
	}

	mainText = game.add.text(10, 10, "Hello world!", style);

	buttonGroup = game.add.group();

	// start the story
	continueStory();
	console.log("created");
}

function update() {
	
}

// custom phaser + ink functions
function loadStory(json) {
	json = game.cache.getJSON(json);
	var story = new inkjs.Story(json);
	return story;
}

function continueStory() {
	var txt = "";

	// fetch story data from json until there's nothing left, then show the choices
	do {
		// add lines to the text variable
		txt += story.Continue(); // add the next line to the txt var

		// if we run out of lines, render the text & following choices
		if (!story.canContinue) {
			createParagraphText(txt);
			createChoices(story.currentChoices);
		}
	} while (story.canContinue);
}

function createParagraphText(t) {
	mainText.text = t;
}

function createChoices(choicesArr) {
	for (var i = 0; i < choicesArr.length; i++) {
		// get the choice obj
		var choice = choicesArr[i];
		
		// log its text & its index
		console.log(choice.text, choice.index);
	}
}