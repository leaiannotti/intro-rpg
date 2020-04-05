class GameScene extends Phaser.Scene{
    constructor(){
        super('Game');
    }

    init(){
        this.scene.launch('UI');
        this.score = 0;
    }

    preload(){

    }

    create(){
        this.createAudio();
        this.createChest();
        this.createWalls();
        this.createPlayer();
        this.addCollisions();
        this.createInput();
    }

    update(){
        this.player.update(this.cursors);
    }

    createAudio(){
        this.goldPickupAudio = this.sound.add('goldSound',{loop: false, volume:0.2});
    }

    createPlayer(){
        this.player =  new Player(this,32,32,'characters',0);
    }

    createChest(){
        //create chest group
        this.chests = this.physics.add.group();
        //create chest position array
        this.chestPositions=[[100,100],[200,200],[300,300],[400,400],[500,500]]
        //create max numbers of chests simultaneos
        this.maxNumberOfChests = 3;
        for (let i = 0; i < this.maxNumberOfChests; i++){
            this.spawnChest();
        }
        
    }

    spawnChest(){
        const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)];
        let chest = this.chests.getFirstDead();
        if(!chest){
            const chest = new Chest(this,location[0],location[1],'items');
            this.chests.add(chest);
        }else{
            chest.setPosition(location[0],location[1]);
            chest.makeActive();
        }

    }

    createWalls(){
        this.wall = this.physics.add.image(500,100,'button1');
        this.wall.setImmovable();
    }

    createInput(){
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    addCollisions(){
        this.physics.add.collider(this.player,this.wall);
        this.physics.add.overlap(this.player,this.chests, this.collectChest,null,this);
    }

    collectChest(player,chest){
        this.goldPickupAudio.play();
        this.score += chest.coins;
        this.events.emit('updateScore',this.score);
        //make chest inactive
        chest.makeInactive();
        //spawn a new chest
        this.time.delayedCall(1000,this.spawnChest,[],this);
    }

}