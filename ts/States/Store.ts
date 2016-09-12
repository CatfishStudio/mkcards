module MortalKombatCards {

    import Tutorial = Fabrique.Tutorial;
    import Settings = Fabrique.Settings;
    import Title = Fabrique.Title;
    import Slides = Fabrique.Slides;

    export class Store extends Phaser.State{
        public static Name: string = "store";
        public name: string = Store.Name;

        private tween:Phaser.Tween;
        private groupStore: Phaser.Group;
        private videoSprite:Phaser.Sprite;
        private storeSprite:Phaser.Sprite;
        private title:Title;
        private slides:Slides;
        private tutorial:Tutorial;
        private settings:Settings;

        constructor() {
            super();
        }

        public create() {
            this.groupStore = new Phaser.Group(this.game, this.stage);

            this.storeSprite = new Phaser.Sprite(this.game, -5,-5, Images.FightersImage)
            this.storeSprite.scale.set(1.025);
            this.groupStore.addChild(this.storeSprite);

            this.tween = this.game.add.tween(this.storeSprite);
            this.tween.to({ x: -200, y: -5 }, 20000, 'Linear');
            this.tween.to({ x: 0, y: 0}, 20000, 'Linear');
            this.tween.onComplete.add(this.onTweenComplete, this);

            this.videoSprite = new Phaser.Sprite(this.game,0,0,Atlases.Video2,0);
            this.videoSprite.scale.set(2.6, 2.6);
            this.groupStore.addChild(this.videoSprite);

            let anim: Phaser.Animation = this.videoSprite.animations.add(Atlases.Video2);
            anim.onComplete.add(this.onCompleteVideo, this);
            anim.play(15, false, true);

            this.createContent();

            this.groupStore.addChild(new Phaser.Sprite(this.game, 0, 0, Images.BackgroundImage));

        }

        public shutdown(){
            this.groupStore.removeAll();
        }

        private onCompleteVideo():void {
            this.tween.start();
            this.title.show();
            this.slides.show();
            let tweenTutorial: Phaser.Tween = this.game.add.tween(this.tutorial);
            tweenTutorial.to({ x: (Constants.GAME_WIDTH / 2), y: (Constants.GAME_HEIGHT - 175)}, 500, 'Linear');
            if(Config.settintTutorial === true) tweenTutorial.start();
        }

        private onTweenComplete(event:any):void {
            this.tween.start();
        }

        private createContent():void {
            /* title */
            this.title = new Title(this.game, 0, -50, 'ВЫБОР БОЙЦА');
            this.groupStore.addChild(this.title);

            /* slider */
            this.slides = new Fabrique.Slides(this.game, this.groupStore);

            /* tutorial */
            this.tutorial = new Tutorial(this.game, "Нажмите начать игру\nчтобы вступить в турнир.");
            this.tutorial.x = Constants.GAME_WIDTH;
            this.tutorial.y = (Constants.GAME_HEIGHT - 175);
            this.groupStore.addChild(this.tutorial);
            
        }

    }

}