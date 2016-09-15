module Fabrique {

    export class FighterCard extends Phaser.Sprite {

        private dataFighter:Game.IFighter;

        constructor(game:Phaser.Game, x:number, y:number, data:Game.IFighter){
            super(game, x, y, Atlases.FightersCards, data.frame);
            this.dataFighter = data;
            this.init();
        }

        private init():void{
            
        }



    }

}
