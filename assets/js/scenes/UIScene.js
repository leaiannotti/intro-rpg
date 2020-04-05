class UIScene extends Phaser.Scene{
    constructor(){
        super('UI');
    }

    init(){
        this.gameScene = this.scene.get('Game');
    }

    create(){
        this.setupUIElements();
        this.setupEvents();
    }

    setupUIElements(){
        //create the score text game object
        console.log('setupUIElements start');
        this.scoreText = this.add.text(35,8,'Coins: 0 ', {fontSize: '16px', fill: '#bbb'});
        //include coin icon
        this.coinIcon = this.add.image(15,15,'items',3);
    }

    setupEvents(){
        this.gameScene.events.on('updateScore',(score) => {
            console.log('Cofre recogido ' + score);
            this.scoreText.setText(`Coins: ${score}`);
        })
    }

}