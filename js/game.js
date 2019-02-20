// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave, now choose your way",
            choices: [
                {
                    text: "Left",
                    nextLevel: "Left1",
                },

                {
                    text: "Right",
                    nextLevel: "Right1",
                },
            ]
        },
        end:{
            message: "You exit the cave!",
            choices: [
                {
                    text: "Go Back",
                    nextLevel: "start",
                }
            ]
        },
        deadEnd:{
            message: "You die in the cave!",
            choices: [
                {
                    text: "Load your save",
                    nextLevel: "start",
                }
            ]
        },
        /*
        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        */
        Left1:{
            message: "The cave has another split on your way!",
            choices: [
                {
                    text: 'Left',
                    nextLevel: 'Left2'
                },
                {
                    text: 'Right',
                    nextLevel: 'blackCave'
                }
            ]
        },
        Left2:{
            message: "You saw daylight",
            choices: [
                {
                    text: 'Go forward',
                    nextLevel: 'end'
                }
            ]
        },
        blackCave:{
            message: "The cave suddenly goes black",
            choices: [
                {
                    text: 'Wait',
                    nextLevel: (function(){
                        let r = Math.ceil(Math.random() * 3);
                        if (r < 3){
                            return "Left" + r;
                        }else{
                            return 'core';
                        }
                    })()
                }
            ]
        },
        
        Right1:{
            message: "The cave has another split on your way!",
            choices: [
                {
                    text: 'Left',
                    nextLevel: 'center'
                },
                {
                    text: 'Right',
                    nextLevel: 'dragon'
                }
            ]
        },
        
        dragon:{
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You see a dragon guarding treasure! Breathing fire at you!",
            choices: [
                {
                    text: 'Fight',
                    nextLevel: 'deadEnd'
                },
                {
                    text: 'Flee',
                    nextLevel: 'Left2'
                }
            ]
        },
        
        center:{
            background_image: "crystal.jpg",
            message: 'You witnessed crystals linger under the ceiling of the roof. Shiny!',
            choices: [
                {
                    text: 'Forward',
                    nextLevel: 'lastOne'
                },
                {
                    text: 'Backward',
                    nextLevel: 'Left1'
                }
            ]
        },
        
        lastOne:{
            message: 'There is no way back now!',
            choices: [
                {
                    text: 'Forward',
                    nextLevel: 'core'
                },
                {
                    text: 'Backward',
                    nextLevel: 'blackDeath'
                }
            ]
        },
        
        blackDeath:{
            message: 'You looked back, suddenly you saw a massive black figure jump and slash you',
            choices: [
                {
                    text: 'Give up life and die',
                    nextLevel: 'deadEnd'
                }
            ]
        },
        
        core:{
            background_image: "magma.jpg",
            message: 'You see magma running in front of you, now you are in the center of the planet',
            choices: [
                {
                    text: 'Witness the beauty of Earth',
                    nextLevel: 'newLife'
                },
                {
                    text: 'Close your eye and head back',
                    nextLevel: 'blackDeath'
                }
            ]
        },
        
        newLife:{
            message: 'You no longer inside the planet, you are now in a new universe',
            choices: [
                {
                    text: 'OK',
                    nextLevel: 'universe'
                }
            ]
        },
        
        universe:{
            message: 'You are now in a new universe',
            choices: [
                {
                    text: 'OK',
                    nextLevel: 'universe'
                },
                {
                    text: 'Transcendent',
                    nextLevel: 'reload'
                }
            ]
        },
        
        reload:{
            foo: function(){location.reload()},
            message: ''
        }
    }
};
