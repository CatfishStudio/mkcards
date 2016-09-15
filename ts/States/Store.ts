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
        private backMenuButton:Phaser.Button;
        private settingsButton:Phaser.Button;
        private backHalpButton:Phaser.Button;
        private selectButton:Phaser.Button;

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
            this.tween.stop();
            this.tween = null;
            this.slides.removeChildren()
            this.slides.removeAll();
            this.groupStore.removeChildren();
            this.groupStore.removeAll();
            this.game.stage.removeChildren();
        }

        private onCompleteVideo():void {
            this.tween.start();
            this.title.show();
            this.slides.show();
            if(Config.settintTutorial === true) this.tutorial.show((Constants.GAME_WIDTH / 2), (Constants.GAME_HEIGHT - 175));

            this.backMenuButton = new Phaser.Button(this.game, -25, 5, Sheet.ButtonBackMenuMini, this.onButtonClick, this, 1, 2, 2, 2);
            this.backMenuButton.name = 'back_menu';
            this.groupStore.addChild(this.backMenuButton);

            this.settingsButton = new Phaser.Button(this.game, (Constants.GAME_WIDTH / 2) - (255 / 2), 5, Sheet.ButtonSettings, this.onButtonClick, this, 1, 2, 2, 2);
            this.settingsButton.name = 'settings';
            this.groupStore.addChild(this.settingsButton);

            this.backHalpButton = new Phaser.Button(this.game, Constants.GAME_WIDTH - 230, 5, Sheet.ButtonHelpMini, this.onButtonClick, this, 1, 2, 2, 2);
            this.backHalpButton.name = 'help';
            this.groupStore.addChild(this.backHalpButton);

            this.selectButton = new Phaser.Button(this.game, (Constants.GAME_WIDTH / 2) - (255 / 2), (Constants.GAME_HEIGHT - 50), Sheet.ButtonSelectFighter, this.onButtonClick, this, 1, 2, 2, 2);
            this.selectButton.name = 'select_fighter';
            this.groupStore.addChild(this.selectButton);
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

        private onButtonClick(event) {
            switch (event.name) {
                case 'back_menu':
                    {
                        this.game.state.start(Menu.Name, true, false);
                        break;
                    }
                case 'settings':
                    {
                        this.settingsCreate();
                        break;
                    }
                case 'setting_close':
                    {
                        this.settingsClose();
                        break;
                    }
                case 'help':
                    {
                        
                        break;
                    }  
                case 'select_fighter':
                    {
                        
                        break;
                    }                                  
                default:
                    break;
            }
        }

        private settingsCreate() {
            this.tutorial.x = Constants.GAME_WIDTH;
            this.tutorial.y = (Constants.GAME_HEIGHT - 175);
            
            this.settings = new Settings(this.game, this.groupStore);
            this.settings.event.add(this.onButtonClick.bind(this));
        }
        
        private settingsClose() {
            this.settings.removeAll();
            this.groupStore.removeChild(this.settings);
            
            if(Config.settintTutorial === true){
                let tweenTutorial: Phaser.Tween = this.game.add.tween(this.tutorial);
                tweenTutorial.to({ x: (Constants.GAME_WIDTH / 2), y: (Constants.GAME_HEIGHT - 175)}, 500, 'Linear');
                tweenTutorial.start();
            }
        }

    }

}