class UIButton extends Phaser.GameObjects.Container{
    constructor(scene,x,y,key,hoverKey,text,targetCallback){
        super(scene,x,y);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.key = key;
        this.hoverKey = hoverKey;
        this.text = text;
        this.targetCallback = targetCallback;

        this.createButton();
        this.scene.add.existing(this);
    }

    createButton() {
        this.button = this.scene.add.image(0,0,this.key);
        //make the button interactive
        this.button.setInteractive();
        //scale the button
        this.button.setScale(1.4);

        //create the button text
        this.buttonText = this.scene.add.text(0,0,this.text,{fontsize: '26px', fill: '#fff'})
        Phaser.Display.Align.In.Center(this.buttonText,this.button);
    
        //add the two game objects to our container
        this.add(this.button);
        this.add(this.buttonText);


        this.button.on('pointerdown', () => {
            this.targetCallback();
        })
    
        this.button.on('pointerover', () => {
            this.button.setTexture(this.hoverKey);
        })
    
        this.button.on('pointerout', () => {
            this.button.setTexture(this.key);
        })
    };
}
