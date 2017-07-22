var Demo = {};

Demo.Boot = function (game) { };

Demo.Boot.prototype = {

    init: function () {
        this.input.maxPointers = 1;
    },

    create: function () {
        this.state.start('Preloader');
    }

};
