module Fabrique {

    export class Tutorial extends Phaser.Sprite {

        constructor(game:Phaser.Game){
            super(game, 0, 0, Atlases.VideoHelp, 0);
            this.init();
        }

        private init():void{
            let graphics:Phaser.Graphics = this.game.add.graphics(0, 0);
            graphics.beginFill(0xFFFFFF, 1);
            graphics.lineStyle(1, 0xFFFFFF, 1);
            graphics.drawRect(0,0,100,400);
            graphics.endFill();

            let anim: Phaser.Animation = this.animations.add(Atlases.VideoHelp);
            anim.onComplete.add(this.onCompleteVideo, this);
            anim.play(15, false, false);
                        
        }

        private onCompleteVideo():void {

        }

    }

}