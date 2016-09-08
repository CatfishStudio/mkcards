module Fabrique {

    export class Settings extends Phaser.Group {
        public event: Phaser.Signal;

        constructor(game:Phaser.Game, parent:Phaser.Group){
            super(game, parent);
            this.init();
        }

        private init():void{
            this.event = new Phaser.Signal();
            
            let startX:number = (this.game.width / 2) - 150;
            let startY:number = (this.game.height / 2) - 150; 
            let polygon:Phaser.Polygon = new Phaser.Polygon([   
                new Phaser.Point(startX, startY), 
                new Phaser.Point(startX+10, startY-10), 
                new Phaser.Point(startX+300, startY-10), 
                new Phaser.Point(startX+310, startY),  
                new Phaser.Point(startX+310, startY+200),
                new Phaser.Point(startX+300, startY+210),
                new Phaser.Point(startX+10, startY+210),
                new Phaser.Point(startX, startY+200)
            ]);
            let graphicOverlay: Phaser.Graphics = new Phaser.Graphics(this.game, 0, 0);
            graphicOverlay.beginFill(0x000000, 0.5);
            graphicOverlay.drawRect(0, 0, this.game.width, this.game.height);
            graphicOverlay.endFill();
            
            graphicOverlay.beginFill(0x000000, 0.8);
            graphicOverlay.lineStyle(2, 0x777777, 1);
            graphicOverlay.drawPolygon(polygon)
            graphicOverlay.endFill();
            
            graphicOverlay.inputEnabled = true;
            this.addChild(graphicOverlay);

            let buttonClose = new Phaser.Button(this.game, startX+25, startY+150, Sheet.ButtonClose, this.onButtonClick, this, 1, 2);
            buttonClose.name = 'setting_close';
            this.addChild(buttonClose);
        }

         private onButtonClick(event) {
             this.event.dispatch(event);
         }

    }

}