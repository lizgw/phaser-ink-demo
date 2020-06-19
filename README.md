# Phaser + Ink Demo
This is a tiny repo that demonstrates a way to integrate [Ink](https://github.com/inkle/ink) stories into [Phaser](http://phaser.io/). Feel free to clone it & use it as a template or use this code as a base for your own thing. You can see this demo up and running [here](https://lizgw.github.io/phaser-ink-demo/).

## The Basics
In order to use an ink story in phaser, you need to do a few things:

1. Write your story in ink.
2. Export it as a json file.
3. Snag the latest version of [inkjs](https://github.com/y-lohse/inkjs/releases) (this demo uses 1.6.0).
4. Set up your phaser project however your normally would & include the ink.js file somewhere.
5. Write a few functions that handle how you display the text & choices in your game. This demo has 3 functions for this:
	+ [continueStory()](https://github.com/lizgw/phaser-ink-demo/blob/master/src/Game.js#L36) - Displays the next part of the story & calls createChoices().
	+ [createChoices()](https://github.com/lizgw/phaser-ink-demo/blob/master/src/Game.js#L59) - Creates a button for each choice.
	+ [choiceClick()](https://github.com/lizgw/phaser-ink-demo/blob/master/src/Game.js#L77) - Runs when you select a choice & continues the story.

Most of the code in those functions will change depending on how you want to lay out your game, but the basics are there.

## Standing on the Shoulders of Giants
This demo was created with help from a lot of different places, and if you're looking to go farther with his here are some places to look:

+ [ink](https://github.com/inkle/ink) - The actual ink scripting language. If you want to have fancier things than just plain choices, this is where you learn how to do it.
+ [inkjs](https://github.com/y-lohse/inkjs/releases) - The reason any of this is possible.
+ [VampiroInkPhaser](https://github.com/delacannon/VampiroInkPhaser) - An entire game that integrates ink & phaser. This demo makes use of a few very, *very* simplified versions of some functions from this game.
+ And of course, [Phaser](http://phaser.io/).
