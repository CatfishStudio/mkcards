var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MortalKombatCards;
(function (MortalKombatCards) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, {
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
            this.state.add(MortalKombatCards.Boot.Name, MortalKombatCards.Boot, false);
            this.state.add(MortalKombatCards.Preloader.Name, MortalKombatCards.Preloader, false);
            this.state.add(MortalKombatCards.Menu.Name, MortalKombatCards.Menu, false);
        }
        Game.getInstance = function () {
            if (MortalKombatCards.Game.instance === null) {
                Game.instance = new Game();
            }
            return Game.instance;
        };
        Game.prototype.start = function () {
            this.state.start(MortalKombatCards.Boot.Name);
        };
        Game.instance = null;
        return Game;
    }(Phaser.Game));
    MortalKombatCards.Game = Game;
})(MortalKombatCards || (MortalKombatCards = {}));
var Constants = (function () {
    function Constants() {
    }
    Constants.GAME_WIDTH = 860;
    Constants.GAME_HEIGHT = 730;
    return Constants;
}());
var Images = (function () {
    function Images() {
    }
    Images.PreloaderImage = 'preloader.jpg';
    Images.BackgroundImage = 'background.png';
    Images.MenuImage = 'menu.png';
    Images.LogoImage = 'logo.png';
    Images.FightersImage = 'fighters.png';
    Images.UpgradeImage = 'upgrade.png';
    Images.preloadList = [
        Images.BackgroundImage,
        Images.MenuImage,
        Images.LogoImage,
        Images.FightersImage,
        Images.UpgradeImage
    ];
    return Images;
}());
var Atlases = (function () {
    function Atlases() {
    }
    Atlases.LogoAtlas = 'logo_atlas';
    Atlases.Video1 = 'video1';
    Atlases.Video2 = 'video2';
    Atlases.Video3 = 'video3';
    Atlases.preloadList = [
        Atlases.Video1,
        Atlases.Video2,
        Atlases.Video3
    ];
    return Atlases;
}());
var Sheet = (function () {
    function Sheet() {
    }
    Sheet.ButtonStartNewGame = 'button_start_new_game_sheet.png';
    Sheet.ButtonContinueGame = 'button_continue_game_sheet.png';
    Sheet.ButtonSettings = 'button_settings_sheet.png';
    Sheet.ButtonInvite = 'button_invite_sheet.png';
    Sheet.ButtonBlueClose = 'button_blue_close_sheet.png';
    Sheet.ButtonBlueBackMenu = 'button_blue_back_menu_sheet.png';
    Sheet.ButtonBlueSettings = 'button_blue_settings_sheet.png';
    Sheet.ButtonBlueChampionship = 'button_blue_championship_sheet.png';
    Sheet.preloadList1 = [
        Sheet.ButtonStartNewGame,
        Sheet.ButtonContinueGame,
        Sheet.ButtonSettings,
        Sheet.ButtonInvite
    ];
    Sheet.preloadList2 = [
        Sheet.ButtonBlueClose,
        Sheet.ButtonBlueBackMenu,
        Sheet.ButtonBlueSettings,
        Sheet.ButtonBlueChampionship
    ];
    return Sheet;
}());
var Fabrique;
(function (Fabrique) {
    var State = (function (_super) {
        __extends(State, _super);
        function State() {
            _super.apply(this, arguments);
            this.name = State.Name;
        }
        State.Name = 'default';
        return State;
    }(Phaser.State));
    Fabrique.State = State;
})(Fabrique || (Fabrique = {}));
var MortalKombatCards;
(function (MortalKombatCards) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.call(this);
            this.name = Boot.Name;
        }
        /*
        * Загружаем ассеты необходимые для прелоадера
        */
        Boot.prototype.init = function () {
            // отключаем контекстное меню
            this.game.canvas.oncontextmenu = function (e) {
                e.preventDefault();
            };
        };
        Boot.prototype.preload = function () {
            this.game.load.image(Images.PreloaderImage, 'assets/images/' + Images.PreloaderImage);
            this.game.load.atlas(Atlases.LogoAtlas, 'assets/atlas/' + Atlases.LogoAtlas + '.png', 'assets/atlas/' + Atlases.LogoAtlas + '.json');
        };
        Boot.prototype.create = function () {
            var _this = this;
            this.game.state.start(MortalKombatCards.Preloader.Name, true, false, {
                nextStage: MortalKombatCards.Menu.Name,
                preloadHandler: function () {
                    Images.preloadList.forEach(function (assetName) {
                        _this.game.load.image(assetName, 'assets/images/' + assetName);
                    });
                    Atlases.preloadList.forEach(function (assetName) {
                        _this.game.load.atlas(assetName, 'assets/atlas/' + assetName + '.png', 'assets/atlas/' + assetName + '.json');
                    });
                    Sheet.preloadList1.forEach(function (assetName) {
                        _this.game.load.spritesheet(assetName, 'assets/images/' + assetName, 255, 50);
                    });
                    Sheet.preloadList2.forEach(function (assetName) {
                        _this.game.load.spritesheet(assetName, 'assets/images/' + assetName, 255, 46);
                    });
                }
            });
        };
        Boot.prototype.shutdown = function () {
            //this.game.stage.removeChildren();
        };
        Boot.Name = 'booter';
        return Boot;
    }(Fabrique.State));
    MortalKombatCards.Boot = Boot;
})(MortalKombatCards || (MortalKombatCards = {}));
var MortalKombatCards;
(function (MortalKombatCards) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.call(this);
            this.name = Preloader.Name;
            this.loadPercent = 0;
        }
        Preloader.prototype.init = function (config) {
            this.config = config;
        };
        Preloader.prototype.preload = function () {
            this.game.add.sprite(0, 0, Images.PreloaderImage);
            //this.game.add.sprite(0,0, Images.TitleImage);
            this.logo = this.game.add.sprite(0, 0, Atlases.LogoAtlas, "load_1.png");
            this.logo.x = (this.game.world.width / 2) - (this.logo.width / 2);
            this.logo.y = (this.game.world.height / 2) - (this.logo.height / 2);
            this.game.load.onLoadStart.add(this.onLoadStart, this);
            this.game.load.onFileComplete.add(this.onFileComplete, this);
            this.game.load.onLoadComplete.add(this.onLoadComplete, this);
            this.config.preloadHandler();
            if (this.game.load.totalQueuedFiles() === 0) {
                this.onLoadComplete();
            }
        };
        Preloader.prototype.onLoadStart = function () {
            this.preloadText = this.game.add.text(625, 600, "ЗАГРУЗКА 0%", { font: "25px Arial", fill: "#202020" });
        };
        Preloader.prototype.onFileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
            this.loadPercent = Math.round(progress * 0.1);
            if (this.preloadText !== null) {
                this.logo.frameName = "load_" + this.loadPercent + ".png";
                this.preloadText.text = "ЗАГРУЗКА " + this.loadPercent + "0 %";
            }
        };
        Preloader.prototype.onLoadComplete = function () {
            this.logo.frameName = "load_" + this.loadPercent + ".png";
            this.game.stage.removeChildren();
            this.game.state.start(this.config.nextStage, true, false);
        };
        Preloader.Name = "preloader";
        return Preloader;
    }(Phaser.State));
    MortalKombatCards.Preloader = Preloader;
})(MortalKombatCards || (MortalKombatCards = {}));
var MortalKombatCards;
(function (MortalKombatCards) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
            this.name = Menu.Name;
        }
        Menu.prototype.create = function () {
            this.groupMenu = new Phaser.Group(this.game, this.stage);
            this.menuSprite = new Phaser.Sprite(this.game, -5, -5, Images.MenuImage);
            this.menuSprite.scale.set(1.025);
            this.groupMenu.addChild(this.menuSprite);
            this.tween = this.game.add.tween(this.menuSprite);
            this.tween.to({ x: -200, y: -5 }, 20000, 'Linear');
            this.tween.to({ x: 0, y: 0 }, 20000, 'Linear');
            this.tween.onComplete.add(this.onTweenComplete, this);
            this.videoSprite = new Phaser.Sprite(this.game, 0, 0, Atlases.Video1, 0);
            this.videoSprite.scale.set(2.6, 2.6);
            this.groupMenu.addChild(this.videoSprite);
            var anim = this.videoSprite.animations.add(Atlases.Video1);
            anim.onComplete.add(this.onCompleteVideo, this);
            anim.play(15, false, true);
            this.groupMenu.addChild(new Phaser.Sprite(this.game, 0, 0, Images.BackgroundImage));
        };
        Menu.prototype.shutdown = function () {
            this.groupMenu.removeChildren();
        };
        Menu.prototype.onCompleteVideo = function () {
            var _this = this;
            this.groupButtons = new Phaser.Group(this.game, this.groupMenu);
            this.groupButtons.x = -500;
            this.groupButtons.y = 0;
            this.groupButtons.addChild(new Phaser.Sprite(this.game, 35, 80, Images.LogoImage));
            var buttonStart = new Phaser.Button(this.game, 75, 400, Sheet.ButtonStartNewGame, this.onButtonClick, this, 1, 2);
            buttonStart.name = 'start';
            this.groupButtons.addChild(buttonStart);
            var buttonSettings = new Phaser.Button(this.game, 75, 475, Sheet.ButtonSettings, this.onButtonClick, this, 1, 2, 2, 2);
            buttonSettings.name = 'settings';
            this.groupButtons.addChild(buttonSettings);
            var buttonInvite = new Phaser.Button(this.game, 75, 550, Sheet.ButtonInvite, this.onButtonClick, this, 1, 2, 2, 2);
            buttonInvite.name = 'invite';
            this.groupButtons.addChild(buttonInvite);
            var tweenButtons = this.game.add.tween(this.groupButtons);
            tweenButtons.to({ x: 0, y: 0 }, 500, 'Linear');
            tweenButtons.onComplete.add(function () {
                _this.tween.start();
            }, this);
            tweenButtons.start();
        };
        Menu.prototype.onTweenComplete = function (event) {
            this.tween.start();
        };
        Menu.prototype.onButtonClick = function (event) {
            switch (event.name) {
                case 'start':
                    {
                        console.log("START");
                        //this.game.state.start(Drivers.Name, true, false);
                        break;
                    }
                case 'continue':
                    {
                        break;
                    }
                case 'settings':
                    {
                        this.settingsCreate();
                        break;
                    }
                case 'close':
                    {
                        this.settingsClose();
                        break;
                    }
                case 'invite':
                    {
                        break;
                    }
                default:
                    break;
            }
        };
        Menu.prototype.settingsCreate = function () {
            this.groupSettings = new Phaser.Group(this.game, this.groupMenu);
            var graphicOverlay = new Phaser.Graphics(this.game, 0, 0);
            graphicOverlay.beginFill(0xFFFFFF, 0.5);
            graphicOverlay.drawRect(0, 0, this.game.width, this.game.height);
            graphicOverlay.endFill();
            graphicOverlay.beginFill(0x0000AA, 0.8);
            graphicOverlay.drawRect((this.game.width / 2) - 150, (this.game.height / 2) - 150, 300, 150);
            graphicOverlay.endFill();
            graphicOverlay.inputEnabled = true;
            this.groupSettings.addChild(graphicOverlay);
            var buttonClose = new Phaser.Button(this.game, 50, 50, Sheet.ButtonBlueClose, this.onButtonClick, this, 1, 2);
            buttonClose.name = 'close';
            this.groupSettings.addChild(buttonClose);
        };
        Menu.prototype.settingsClose = function () {
            this.groupSettings.removeChildren();
            this.groupMenu.removeChild(this.groupSettings);
        };
        Menu.Name = "menu";
        return Menu;
    }(Phaser.State));
    MortalKombatCards.Menu = Menu;
})(MortalKombatCards || (MortalKombatCards = {}));
/// <reference path="..\node_modules\phaser\typescript\phaser.d.ts" />
/// <reference path="Data\Constants.ts" />
/// <reference path="Data\Images.ts" />
/// <reference path="Data\Atlases.ts" />
/// <reference path="Data\Sheets.ts" />
/// <reference path="Fabrique\State.ts" />
/// <reference path="States\Boot.ts" />
/// <reference path="States\Preloader.ts" />
/// <reference path="States\Menu.ts" />
/// <reference path="app.ts" /> 
