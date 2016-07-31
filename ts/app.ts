module MortalKombatCards{
        export class Game extends Phaser.Game {
                private static instance: Game = null;
                
                constructor() {
                        super({
                                enableDebug: false,
                                width: Constants.GAME_WIDTH,
                                height: Constants.GAME_HEIGHT,
                                renderer: Phaser.AUTO,
                                parent: 'content',
                                transparent: true,
                                antialias: true,
                                preserveDrawingBuffer: false,
                                physicsConfig: null,
                                seed: '',
                                state: null
                        });
                        
                        this.state.add(Boot.Name, Boot, false);
                        this.state.add(Preloader.Name, Preloader, false);
                        this.state.add(Menu.Name, Menu, false);
                }
                
                public static getInstance(): Game {
                        if(MortalKombatCards.Game.instance === null) {
                                Game.instance = new Game();
                        }
                        return Game.instance;
                }
                
                public start(): void {
                        this.state.start(Boot.Name);
                }
                
        }
}