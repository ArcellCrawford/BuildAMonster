class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.armX =370
        this.armY=410
        this.armX1 = 230
        this.armY1 = 410
        this.legX=330
        this.legY=460
        this.leg1X=270
        this.leg1Y=460
        this.eyeX=300
        this.eyeY=310
        this.noseX=300
        this.noseY=340
        this.snotX=290
        this.snotY=370
        this.mouthX = 300 
        this.mouthY = 420
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        this.S =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.F =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.A =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.D =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.leg =this.add.sprite(this.legX, this.legY, "monsterParts", "leg_greenC.png");
        my.sprite.leg2 =this.add.sprite(this.leg1X, this.leg1Y, "monsterParts", "leg_blueC.png");

        //Arms of the sprite
        my.sprite.arm = this.add.sprite(this.armX, this.armY, "monsterParts", "arm_greenA.png");
        my.sprite.arm2 = this.add.sprite(this.armX1, this.armY1, "monsterParts", "arm_blueA.png");
       

        //Body of the sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        // monster eye
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY , "monsterParts", "eye_closed_happy.png");
     
        //Mouth
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png")

        //snot 
        my.sprite.snot = this.add.sprite(this.snotX, this.snotY, "monsterParts", "snot_small.png")
        
        //Nose
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_green.png")

      


        //flips the sprite across x axis 
        my.sprite.arm2.flipX = true
        my.sprite.leg2.flipX = true
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(Phaser.Input.Keyboard.JustDown(this.S)){
            my.sprite.mouth = this.add.sprite(this.bodyX, 420, "monsterParts", "mouthA.png")
        } 
        if(Phaser.Input.Keyboard.JustDown(this.F)){
            my.sprite.mouth = this.add.sprite(this.bodyX, 420, "monsterParts", "mouthB.png")
        } 
        if(this.A.isDown){
          // destroy(my.sprite.nose.pop) 
          this.noseX -= 1
          this.armX -=1
          this.armX1 -= 1
          this.leg1X -=1
          this.legX -= 1
          this.snotX -=1
          this.mouthX -= 1
          this.eyeX -= 1 
          this.bodyX -= 1

          console.log(this.noseX)
          //my.sprite.nose.reset()
          my.sprite.nose.alpha = 0
          my.sprite.arm.alpha = 0
          my.sprite.arm2.alpha = 0
          my.sprite.body.alpha = 0
          my.sprite.eye.alpha = 0
          my.sprite.mouth.alpha = 0
          my.sprite.snot.alpha = 0
          my.sprite.leg.alpha = 0
          my.sprite.leg2.alpha = 0

         my.sprite.leg =this.add.sprite(this.legX, this.legY, "monsterParts", "leg_greenC.png");
        my.sprite.leg2 =this.add.sprite(this.leg1X, this.leg1Y, "monsterParts", "leg_blueC.png");

        //Arms of the sprite
        my.sprite.arm = this.add.sprite(this.armX, this.armY, "monsterParts", "arm_greenA.png");
        my.sprite.arm2 = this.add.sprite(this.armX1, this.armY1, "monsterParts", "arm_blueA.png");
       

        //Body of the sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        // monster eye
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY , "monsterParts", "eye_closed_happy.png");
     
        //Mouth
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png")

        //snot 
        my.sprite.snot = this.add.sprite(this.snotX, this.snotY, "monsterParts", "snot_small.png")
        
        //Nose
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_green.png")

        my.sprite.arm2.flipX = true
        my.sprite.leg2.flipX = true
          
        } 
        if(this.D.isDown){
            this.noseX += 1
            this.armX +=1
            this.armX1 += 1
            this.leg1X +=1
            this.legX += 1
            this.snotX +=1
            this.mouthX += 1
            this.eyeX += 1 
            this.bodyX += 1
  
            console.log(this.noseX)
            //my.sprite.nose.reset()
            my.sprite.nose.alpha = 0
            my.sprite.arm.alpha = 0
            my.sprite.arm2.alpha = 0
            my.sprite.body.alpha = 0
            my.sprite.eye.alpha = 0
            my.sprite.mouth.alpha = 0
            my.sprite.snot.alpha = 0
            my.sprite.leg.alpha = 0
            my.sprite.leg2.alpha = 0
  
           my.sprite.leg =this.add.sprite(this.legX, this.legY, "monsterParts", "leg_greenC.png");
          my.sprite.leg2 =this.add.sprite(this.leg1X, this.leg1Y, "monsterParts", "leg_blueC.png");
  
          //Arms of the sprite
          my.sprite.arm = this.add.sprite(this.armX, this.armY, "monsterParts", "arm_greenA.png");
          my.sprite.arm2 = this.add.sprite(this.armX1, this.armY1, "monsterParts", "arm_blueA.png");
         
  
          //Body of the sprite
          my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
  
          // monster eye
          my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY , "monsterParts", "eye_closed_happy.png");
       
          //Mouth
          my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png")
  
          //snot 
          my.sprite.snot = this.add.sprite(this.snotX, this.snotY, "monsterParts", "snot_small.png")
          
          //Nose
          my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_green.png")
  
          my.sprite.arm2.flipX = true
          my.sprite.leg2.flipX = true
            
        } 

       
    }

}