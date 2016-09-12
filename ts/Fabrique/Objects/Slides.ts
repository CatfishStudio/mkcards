module Fabrique {

    export class Slides extends Phaser.Group {
        private fighters:Game.IFighter[] = [];
        private data:any[][] = [
            [0, 'Cyrex', 'cyrex.png'],
            [1, 'Scorpion', 'scorpion.png'],
            [2, 'Sub-Zero', 'sub-zero.png']
        ];

        constructor(game:Phaser.Game, parent:Phaser.Group){
            super(game, parent);
            this.visible = false;
            this.init();
        }

        private init():void{
            for(let i:number = 0; i < this.data.length; i++){
                let fighter:Game.IFighter = <Game.IFighter>{};
                fighter.id = this.data[i][0];
                fighter.name = this.data[i][1];
                fighter.frame = this.data[i][2];
                this.fighters.push(fighter);
            }
            this.createSlides();
        }

        private createSlides():void{
            let posX:number = 25;
            let posY:number = 150;
            for(let i:number = 0; i < this.fighters.length; i++){
                let sprite:Phaser.Sprite = new Phaser.Sprite(this.game, posX + (300 * i), posY, Atlases.FightersCards, this.fighters[i].frame);
                this.addChild(sprite);
            }
        }

        public show():void{
            this.alpha = 0;
            this.visible = true;
            let tween: Phaser.Tween = this.game.add.tween(this);
            tween.to({ alpha: 1}, 500, 'Linear');
            tween.start();

        }

    }

}