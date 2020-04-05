class Chest extends Phaser.Physics.Arcade.Image{
    constructor(scene,x,y,key,frame){
        super(scene,x,y,key,frame);

        this.scene = scene; //La escena donde se va a añadir el game object
        this.coins = 10; //Valor del cofre

        //enable physics
        this.scene.physics.world.enable(this);
        //add the player to our existing scene
        this.scene.add.existing(this);
    }

    makeActive(){
        this.setActive(true);
        this.setVisible(true);
        this.body.checkCollision.none = false;
    }

    makeInactive(){
        this.setActive(false);
        this.setVisible(false);
        this.body.checkCollision.none = true;
    }
}