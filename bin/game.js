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
                antialias: true //ofcourse this is true
            });
            this.state.add(MortalKombatCards.Boot.Name, MortalKombatCards.Boot, false);
            this.state.add(MortalKombatCards.Preloader.Name, MortalKombatCards.Preloader, false);
            this.state.add(MortalKombatCards.Menu.Name, MortalKombatCards.Menu, false);
            this.state.add(MortalKombatCards.Store.Name, MortalKombatCards.Store, false);
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
var Config = (function () {
    function Config() {
    }
    Config.settintSound = true;
    Config.settintMusic = true;
    Config.settintTutorial = true;
    return Config;
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
    Images.ButtonOn = 'buttons_on.png';
    Images.ButtonOff = 'buttons_off.png';
    Images.Title = 'title.png';
    Images.ButtonLeft = 'button_left.png';
    Images.ButtonRight = 'button_right.png';
    Images.preloadList = [
        Images.BackgroundImage,
        Images.MenuImage,
        Images.LogoImage,
        Images.FightersImage,
        Images.UpgradeImage,
        Images.ButtonOn,
        Images.ButtonOff,
        Images.Title,
        Images.ButtonLeft,
        Images.ButtonRight
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
    Atlases.VideoHelp = 'video_help';
    Atlases.FightersCards = 'fighters_cards';
    Atlases.preloadList = [
        Atlases.Video1,
        Atlases.Video2,
        Atlases.Video3,
        Atlases.VideoHelp,
        Atlases.FightersCards
    ];
    return Atlases;
}());
var Sheet = (function () {
    function Sheet() {
    }
    Sheet.ButtonStartNewGame = 'button_start_new_game_sheet.png';
    Sheet.ButtonSettings = 'button_settings_sheet.png';
    Sheet.ButtonInvite = 'button_invite_sheet.png';
    Sheet.ButtonClose = 'button_close_sheet.png';
    Sheet.ButtonBackMenuMini = 'button_back_menu_mini_sheet.png';
    Sheet.ButtonHelpMini = 'button_help_mini_sheet.png';
    Sheet.ButtonBlueClose = 'button_blue_close_sheet.png';
    Sheet.ButtonBlueBackMenu = 'button_blue_back_menu_sheet.png';
    Sheet.ButtonBlueSettings = 'button_blue_settings_sheet.png';
    Sheet.ButtonBlueChampionship = 'button_blue_championship_sheet.png';
    Sheet.preloadList1 = [
        Sheet.ButtonStartNewGame,
        Sheet.ButtonSettings,
        Sheet.ButtonInvite,
        Sheet.ButtonClose,
        Sheet.ButtonBackMenuMini,
        Sheet.ButtonHelpMini
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
var Fabrique;
(function (Fabrique) {
    var Tutorial = (function (_super) {
        __extends(Tutorial, _super);
        function Tutorial(game, text) {
            _super.call(this, game, 0, 0, Atlases.VideoHelp, 0);
            this.text = text;
            this.init();
        }
        Tutorial.prototype.init = function () {
            var graphics = this.game.add.graphics(0, 0);
            graphics.beginFill(0x000000, 0);
            graphics.lineStyle(10, 0x000000, 1);
            graphics.drawRect(0, 0, 400, 116);
            graphics.endFill();
            graphics.beginFill(0x000000, 0.6);
            graphics.lineStyle(1, 0x000000, 1);
            graphics.drawRect(150, 0, 250, 116);
            graphics.endFill();
            graphics.beginFill(0x000000, 0.5);
            graphics.lineStyle(2, 0xFFFFFF, 0.5);
            graphics.drawRect(0, 0, 400, 116);
            graphics.endFill();
            this.addChild(graphics);
            var messageText = this.game.add.text(175, 10, this.text, { font: "18px Georgia", fill: "#FFFFFF", align: "left" });
            this.addChild(messageText);
            var anim = this.animations.add(Atlases.VideoHelp);
            anim.onComplete.add(this.onCompleteVideo, this);
            anim.play(10, true, false);
        };
        Tutorial.prototype.onCompleteVideo = function () {
        };
        Tutorial.prototype.show = function (x, y) {
            var tween = this.game.add.tween(this);
            tween.to({ x: x, y: y }, 500, 'Linear');
            tween.start();
        };
        return Tutorial;
    }(Phaser.Sprite));
    Fabrique.Tutorial = Tutorial;
})(Fabrique || (Fabrique = {}));
var Fabrique;
(function (Fabrique) {
    var Settings = (function (_super) {
        __extends(Settings, _super);
        function Settings(game, parent) {
            _super.call(this, game, parent);
            this.init();
        }
        Settings.prototype.init = function () {
            this.event = new Phaser.Signal();
            var startX = (Constants.GAME_WIDTH / 2) - 150;
            var startY = (Constants.GAME_HEIGHT / 2) - 150;
            /* bacground and border */
            var polygon = new Phaser.Polygon([
                new Phaser.Point(startX, startY),
                new Phaser.Point(startX + 10, startY - 10),
                new Phaser.Point(startX + 300, startY - 10),
                new Phaser.Point(startX + 310, startY),
                new Phaser.Point(startX + 310, startY + 200),
                new Phaser.Point(startX + 300, startY + 210),
                new Phaser.Point(startX + 10, startY + 210),
                new Phaser.Point(startX, startY + 200)
            ]);
            var graphicOverlay = new Phaser.Graphics(this.game, 0, 0);
            graphicOverlay.beginFill(0x000000, 0.5);
            graphicOverlay.drawRect(0, 0, this.game.width, this.game.height);
            graphicOverlay.endFill();
            graphicOverlay.beginFill(0x000000, 0.8);
            graphicOverlay.lineStyle(2, 0x777777, 1);
            graphicOverlay.drawPolygon(polygon);
            graphicOverlay.endFill();
            graphicOverlay.inputEnabled = true;
            this.addChild(graphicOverlay);
            /* title */
            var title = new Phaser.Text(this.game, startX + 35, startY + 5, "НАСТРОЙКИ ИГРЫ", { font: "24px Georgia", fill: "#FFFFFF", align: "left" });
            this.addChild(title);
            /* sound */
            var buttonSound;
            if (Config.settintSound === true)
                buttonSound = new Phaser.Button(this.game, startX + 25, startY + 50, Images.ButtonOn, this.onButtonClick, this);
            else
                buttonSound = new Phaser.Button(this.game, startX + 25, startY + 50, Images.ButtonOff, this.onButtonClick, this);
            buttonSound.name = 'sound';
            this.addChild(buttonSound);
            var labelSound = new Phaser.Text(this.game, startX + 90, startY + 55, "Звук", { font: "18px Georgia", fill: "#FFFFFF", align: "left" });
            this.addChild(labelSound);
            /* music */
            var buttonMusic;
            if (Config.settintMusic === true)
                buttonMusic = new Phaser.Button(this.game, startX + 155, startY + 50, Images.ButtonOn, this.onButtonClick, this);
            else
                buttonMusic = new Phaser.Button(this.game, startX + 155, startY + 50, Images.ButtonOff, this.onButtonClick, this);
            buttonMusic.name = 'music';
            this.addChild(buttonMusic);
            var labelMusic = new Phaser.Text(this.game, startX + 220, startY + 55, "Музыка", { font: "18px Georgia", fill: "#FFFFFF", align: "left" });
            this.addChild(labelMusic);
            /* tutorial */
            var buttonTutorial;
            if (Config.settintTutorial === true)
                buttonTutorial = new Phaser.Button(this.game, startX + 25, startY + 100, Images.ButtonOn, this.onButtonClick, this);
            else
                buttonTutorial = new Phaser.Button(this.game, startX + 25, startY + 100, Images.ButtonOff, this.onButtonClick, this);
            buttonTutorial.name = 'tutorial';
            this.addChild(buttonTutorial);
            var labelTutorial = new Phaser.Text(this.game, startX + 90, startY + 105, "Обучение в игре", { font: "18px Georgia", fill: "#FFFFFF", align: "left" });
            this.addChild(labelTutorial);
            /* button close */
            var buttonClose = new Phaser.Button(this.game, startX + 25, startY + 150, Sheet.ButtonClose, this.onButtonCloseClick, this, 1, 2);
            buttonClose.name = 'setting_close';
            this.addChild(buttonClose);
            this.updateTransform();
        };
        Settings.prototype.onButtonCloseClick = function (event) {
            this.event.dispatch(event);
        };
        Settings.prototype.onButtonClick = function (event) {
            switch (event.name) {
                case 'sound':
                    {
                        if (Config.settintSound === true) {
                            Config.settintSound = false;
                            this.removeChild(event);
                            event = new Phaser.Button(this.game, event.x, event.y, Images.ButtonOff, this.onButtonClick, this);
                            event.name = 'sound';
                            this.addChild(event);
                        }
                        else {
                            Config.settintSound = true;
                            this.removeChild(event);
                            event = new Phaser.Button(this.game, event.x, event.y, Images.ButtonOn, this.onButtonClick, this);
                            event.name = 'sound';
                            this.addChild(event);
                        }
                        break;
                    }
                case 'music':
                    {
                        if (Config.settintMusic === true) {
                            Config.settintMusic = false;
                            this.removeChild(event);
                            event = new Phaser.Button(this.game, event.x, event.y, Images.ButtonOff, this.onButtonClick, this);
                            event.name = 'music';
                            this.addChild(event);
                        }
                        else {
                            Config.settintMusic = true;
                            this.removeChild(event);
                            event = new Phaser.Button(this.game, event.x, event.y, Images.ButtonOn, this.onButtonClick, this);
                            event.name = 'music';
                            this.addChild(event);
                        }
                        break;
                    }
                case 'tutorial':
                    {
                        if (Config.settintTutorial === true) {
                            Config.settintTutorial = false;
                            this.removeChild(event);
                            event = new Phaser.Button(this.game, event.x, event.y, Images.ButtonOff, this.onButtonClick, this);
                            event.name = 'tutorial';
                            this.addChild(event);
                        }
                        else {
                            Config.settintTutorial = true;
                            this.removeChild(event);
                            event = new Phaser.Button(this.game, event.x, event.y, Images.ButtonOn, this.onButtonClick, this);
                            event.name = 'tutorial';
                            this.addChild(event);
                        }
                        break;
                    }
                default:
                    break;
            }
        };
        return Settings;
    }(Phaser.Group));
    Fabrique.Settings = Settings;
})(Fabrique || (Fabrique = {}));
var Fabrique;
(function (Fabrique) {
    var Title = (function (_super) {
        __extends(Title, _super);
        function Title(game, x, y, text) {
            _super.call(this, game, x, y, Images.Title);
            this.posX = 0;
            this.posY = 0;
            this.text = text;
            this.posX = ((Constants.GAME_WIDTH / 2) - (this.width / 2));
            this.posY = Constants.GAME_HEIGHT / 10;
            if (x >= 0)
                this.x = this.posX;
            if (y >= 0)
                this.y = this.posY;
            this.updateTransform();
            this.init();
        }
        Title.prototype.init = function () {
            var size = 12 * this.text.length;
            var posX = (this.width / 2) - (size / 2);
            var titleText = this.game.add.text(posX, 20, this.text, { font: "18px Georgia", fill: "#FFFFFF", align: "left" });
            this.addChild(titleText);
        };
        Title.prototype.show = function () {
            var tween = this.game.add.tween(this);
            tween.to({ x: this.posX, y: this.posY }, 500, 'Linear');
            tween.start();
        };
        return Title;
    }(Phaser.Sprite));
    Fabrique.Title = Title;
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
            if (this.loadPercent <= 0)
                this.loadPercent = 1;
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
    var Tutorial = Fabrique.Tutorial;
    var Settings = Fabrique.Settings;
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
            this.createButtons();
            this.groupMenu.addChild(new Phaser.Sprite(this.game, 0, 0, Images.BackgroundImage));
        };
        Menu.prototype.shutdown = function () {
            this.tween.stop();
            this.tween = null;
            this.groupButtons.removeAll();
            this.groupMenu.removeAll();
        };
        Menu.prototype.createButtons = function () {
            this.groupButtons = new Phaser.Group(this.game, this.groupMenu);
            this.groupButtons.x = -500;
            this.groupButtons.y = 0;
            this.groupButtons.visible = false;
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
            this.tutorial = new Tutorial(this.game, "Нажмите начать игру\nчтобы вступить в турнир.");
            this.tutorial.x = Constants.GAME_WIDTH;
            this.tutorial.y = (Constants.GAME_HEIGHT - 175);
            this.groupMenu.addChild(this.tutorial);
        };
        Menu.prototype.onCompleteVideo = function () {
            var _this = this;
            this.groupButtons.visible = true;
            var tweenButtons = this.game.add.tween(this.groupButtons);
            tweenButtons.to({ x: 0, y: 0 }, 500, 'Linear');
            tweenButtons.onComplete.add(function () {
                _this.tween.start();
                if (Config.settintTutorial === true)
                    _this.tutorial.show((Constants.GAME_WIDTH / 2), (Constants.GAME_HEIGHT - 175));
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
                        this.game.state.start(MortalKombatCards.Store.Name, true, false);
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
                case 'setting_close':
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
            this.tutorial.x = Constants.GAME_WIDTH;
            this.tutorial.y = (Constants.GAME_HEIGHT - 175);
            this.settings = new Settings(this.game, this.groupMenu);
            this.settings.event.add(this.onButtonClick.bind(this));
        };
        Menu.prototype.settingsClose = function () {
            this.settings.removeAll();
            this.groupMenu.removeChild(this.settings);
            if (Config.settintTutorial === true) {
                var tweenTutorial = this.game.add.tween(this.tutorial);
                tweenTutorial.to({ x: (Constants.GAME_WIDTH / 2), y: (Constants.GAME_HEIGHT - 175) }, 500, 'Linear');
                tweenTutorial.start();
            }
        };
        Menu.Name = "menu";
        return Menu;
    }(Phaser.State));
    MortalKombatCards.Menu = Menu;
})(MortalKombatCards || (MortalKombatCards = {}));
var MortalKombatCards;
(function (MortalKombatCards) {
    var Tutorial = Fabrique.Tutorial;
    var Settings = Fabrique.Settings;
    var Title = Fabrique.Title;
    var Store = (function (_super) {
        __extends(Store, _super);
        function Store() {
            _super.call(this);
            this.name = Store.Name;
        }
        Store.prototype.create = function () {
            this.groupStore = new Phaser.Group(this.game, this.stage);
            this.storeSprite = new Phaser.Sprite(this.game, -5, -5, Images.FightersImage);
            this.storeSprite.scale.set(1.025);
            this.groupStore.addChild(this.storeSprite);
            this.tween = this.game.add.tween(this.storeSprite);
            this.tween.to({ x: -200, y: -5 }, 20000, 'Linear');
            this.tween.to({ x: 0, y: 0 }, 20000, 'Linear');
            this.tween.onComplete.add(this.onTweenComplete, this);
            this.videoSprite = new Phaser.Sprite(this.game, 0, 0, Atlases.Video2, 0);
            this.videoSprite.scale.set(2.6, 2.6);
            this.groupStore.addChild(this.videoSprite);
            var anim = this.videoSprite.animations.add(Atlases.Video2);
            anim.onComplete.add(this.onCompleteVideo, this);
            anim.play(15, false, true);
            this.createContent();
            this.groupStore.addChild(new Phaser.Sprite(this.game, 0, 0, Images.BackgroundImage));
        };
        Store.prototype.shutdown = function () {
            this.tween.stop();
            this.tween = null;
            this.groupStore.removeAll();
        };
        Store.prototype.onCompleteVideo = function () {
            this.tween.start();
            this.title.show();
            this.slides.show();
            if (Config.settintTutorial === true)
                this.tutorial.show((Constants.GAME_WIDTH / 2), (Constants.GAME_HEIGHT - 175));
            this.backMenuButton = new Phaser.Button(this.game, -25, 5, Sheet.ButtonBackMenuMini, this.onButtonClick, this, 1, 2);
            this.backMenuButton.name = 'back_menu';
            this.groupStore.addChild(this.backMenuButton);
            this.settingsButton = new Phaser.Button(this.game, (Constants.GAME_WIDTH / 2) - (255 / 2), 5, Sheet.ButtonSettings, this.onButtonClick, this, 1, 2);
            this.settingsButton.name = 'settings';
            this.groupStore.addChild(this.settingsButton);
            this.backHalpButton = new Phaser.Button(this.game, Constants.GAME_WIDTH - 230, 5, Sheet.ButtonHelpMini, this.onButtonClick, this, 1, 2);
            this.backHalpButton.name = 'help';
            this.groupStore.addChild(this.backHalpButton);
        };
        Store.prototype.onTweenComplete = function (event) {
            this.tween.start();
        };
        Store.prototype.createContent = function () {
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
        };
        Store.prototype.onButtonClick = function (event) {
            switch (event.name) {
                case 'back_menu':
                    {
                        this.game.state.start(MortalKombatCards.Menu.Name, true, false);
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
                default:
                    break;
            }
        };
        Store.prototype.settingsCreate = function () {
            this.tutorial.x = Constants.GAME_WIDTH;
            this.tutorial.y = (Constants.GAME_HEIGHT - 175);
            this.settings = new Settings(this.game, this.groupStore);
            this.settings.event.add(this.onButtonClick.bind(this));
        };
        Store.prototype.settingsClose = function () {
            this.settings.removeAll();
            this.groupStore.removeChild(this.settings);
            if (Config.settintTutorial === true) {
                var tweenTutorial = this.game.add.tween(this.tutorial);
                tweenTutorial.to({ x: (Constants.GAME_WIDTH / 2), y: (Constants.GAME_HEIGHT - 175) }, 500, 'Linear');
                tweenTutorial.start();
            }
        };
        Store.Name = "store";
        return Store;
    }(Phaser.State));
    MortalKombatCards.Store = Store;
})(MortalKombatCards || (MortalKombatCards = {}));
/// <reference path="..\node_modules\phaser\typescript\phaser.d.ts" />
/// <reference path="Data\Constants.ts" />
/// <reference path="Data\Config.ts" />
/// <reference path="Data\Images.ts" />
/// <reference path="Data\Atlases.ts" />
/// <reference path="Data\Sheets.ts" />
/// <reference path="Data\Game.ts" />
/// <reference path="Fabrique\State.ts" />
/// <reference path="Fabrique\Objects\Tutorial.ts" />
/// <reference path="Fabrique\Objects\Settings.ts" />
/// <reference path="Fabrique\Objects\Title.ts" />
/// <reference path="States\Boot.ts" />
/// <reference path="States\Preloader.ts" />
/// <reference path="States\Menu.ts" />
/// <reference path="States\Store.ts" />
/// <reference path="app.ts" /> 
var Fabrique;
(function (Fabrique) {
    var Slides = (function (_super) {
        __extends(Slides, _super);
        function Slides(game, parent) {
            _super.call(this, game, parent);
            this.fighters = [];
            this.data = [
                [0, 'Cyrex', 'cyrex.png'],
                [1, 'Scorpion', 'scorpion.png'],
                [2, 'Sub-Zero', 'sub-zero.png']
            ];
            this.visible = false;
            this.init();
        }
        Slides.prototype.init = function () {
            for (var i = 0; i < this.data.length; i++) {
                var fighter = {};
                fighter.id = this.data[i][0];
                fighter.name = this.data[i][1];
                fighter.frame = this.data[i][2];
                this.fighters.push(fighter);
            }
            this.createSlides();
        };
        Slides.prototype.createSlides = function () {
            var posX = 25;
            var posY = 150;
            for (var i = 0; i < this.fighters.length; i++) {
                var sprite = new Phaser.Sprite(this.game, posX + (300 * i), posY, Atlases.FightersCards, this.fighters[i].frame);
                this.addChild(sprite);
            }
        };
        Slides.prototype.show = function () {
            this.alpha = 0;
            this.visible = true;
            var tween = this.game.add.tween(this);
            tween.to({ alpha: 1 }, 500, 'Linear');
            tween.start();
        };
        return Slides;
    }(Phaser.Group));
    Fabrique.Slides = Slides;
})(Fabrique || (Fabrique = {}));
var MortalKombatCards;
(function (MortalKombatCards) {
    var Tournament = (function (_super) {
        __extends(Tournament, _super);
        function Tournament() {
            _super.call(this);
            this.name = MortalKombatCards.Store.Name;
        }
        Tournament.prototype.create = function () {
            this.groupStore = new Phaser.Group(this.game, this.stage);
            this.storeSprite = new Phaser.Sprite(this.game, -5, -5, Images.FightersImage);
            this.storeSprite.scale.set(1.025);
            this.groupStore.addChild(this.storeSprite);
            this.tween = this.game.add.tween(this.storeSprite);
            this.tween.to({ x: -200, y: -5 }, 20000, 'Linear');
            this.tween.to({ x: 0, y: 0 }, 20000, 'Linear');
            this.tween.onComplete.add(this.onTweenComplete, this);
            this.videoSprite = new Phaser.Sprite(this.game, 0, 0, Atlases.Video3, 0);
            this.videoSprite.scale.set(2.6, 2.6);
            this.groupStore.addChild(this.videoSprite);
            var anim = this.videoSprite.animations.add(Atlases.Video3);
            anim.onComplete.add(this.onCompleteVideo, this);
            anim.play(15, false, true);
            this.groupStore.addChild(new Phaser.Sprite(this.game, 0, 0, Images.BackgroundImage));
        };
        Tournament.prototype.shutdown = function () {
            this.groupStore.removeAll();
        };
        Tournament.prototype.onCompleteVideo = function () {
            this.tween.start();
        };
        Tournament.prototype.onTweenComplete = function (event) {
            this.tween.start();
        };
        Tournament.Name = "tourtament";
        return Tournament;
    }(Phaser.State));
    MortalKombatCards.Tournament = Tournament;
})(MortalKombatCards || (MortalKombatCards = {}));
