var config = {
    type: Phaser.AUTO,
    width: 800,
    height : 600,
    //Scene life cycle: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Scenes.html
    scene:[BootScene,TitleScene,GameScene,UIScene],
    physics: {
        default:'arcade',
        arcade: {
            debug:true,
            gravity:{
                y:0
            }
        }
    }
};

var game = new Phaser.Game(config);


