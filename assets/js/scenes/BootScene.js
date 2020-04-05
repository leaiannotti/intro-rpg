class BootScene extends Phaser.Scene{
    constructor(){
        super('Boot');
    }

    preload(){
        //Load images
        this.loadImages();
        //Load spritesheets
        this.loadSpritesheets();
        //Load audios
        this.loadAudios();
       
    }

    create(){
        this.scene.start('Game');
    }

    loadImages(){
        this.load.image('button1', 'assets/images/ui/blue_button01.png');
        this.load.image('button2', 'assets/images/ui/blue_button02.png');
    }

    loadSpritesheets(){
        this.load.spritesheet('items','assets/images/items.png',{frameWidth: 32, frameHeight:32});
        this.load.spritesheet('characters','assets/images/characters.png',{frameWidth: 32, frameHeight:32});
      
    }

    loadAudios(){
        this.load.audio('goldSound',['assets/audio/Pickup.wav']);
    }

}