var qwindowStage;
var QWINDOW_NO_LIFE = "QWINDOW_NO_LIFE";
var QWINDOW_TYPE_WIN = "QWINDOW_TYPE_WIN";
var QWINDOW_TYPE_LOSE = "QWINDOW_TYPE_LOSE";
var QWINDOW_TYPE_EXIT_BATTLE= "QWINDOW_TYPE_EXIT_BATTLE";
var QWINDOW_TYPE_EXIT_GAME= "QWINDOW_TYPE_EXIT_GAME";
var QWINDOW_TYPE_SETTINGS = "QWINDOW_TYPE_SETTINGS";

var qwindowStyleText = { 
	font : 'bold 14px Arial', 
	fill : '#FFFFFF', 
	stroke : '#000000', 
	strokeThickness : 0, 
	align : 'center',
	wordWrap : true, 
	wordWrapWidth : 400
};

var qwindowButtonStyleText = { font : 'bold 12px Arial', fill : '#F7EDCA', stroke : '#500000', strokeThickness : 3, wordWrap : true, wordWrapWidth : 440 };

var qwindowDragonLeftMovieClip;
var qwindowDragonRightMovieClip;

function qwindowCreate(type)
{
	qwindowStage = new PIXI.Container();
	
	qwindowGlobalBackground();
	
	if(type === QWINDOW_NO_LIFE)
	{
		qwindowBackgroundGraphicsRed();
		qwindowButtonPanelNoLife();
		qwindowText("\n\n        У вас закончились жизни 0 из 9.\n\n   Вы можите выйти в меню и начать турнир заново.\n   Или пригласить в игру друга и получить в подарок жизнь.");
		qwindowBorder();
	}
	
	if(type === QWINDOW_TYPE_WIN)
	{
		qGlobalUserLife += 50;
		qGlobalTournamentProgress--;
		qGlobalExperiencePoints++;
		qGlobalTotalPointsPlayerTournament += qGlobalTotalPointsPlayerLevel;
		
		qwindowBackgroundImage();
		qwindowAnimationDragon();
		qwindowButtonPanelWin();
		if(qGlobalTournamentProgress < 0) qwindowText("\n\n\nВЫ ПОБЕДИЛИ В ТУРНИРЕ!!!\n                                                                                                 \nОчки за победу в турнире " + qGlobalTotalPointsPlayerTournament);
		else qwindowText("\n\n\nВЫ ПОБЕДИЛИ!\n                                                                                                \nОчки за победу " + qGlobalTotalPointsPlayerLevel);
		qwindowBorder();
	}
	
	if(type === QWINDOW_TYPE_LOSE)
	{
		qGlobalUserContinue--;
		qwindowBackgroundImage();
		qwindowAnimationDragon();
		qwindowButtonPanelLose();
		qwindowText("\n\n\nВы Проиграли!.\n                                  \nУ вас осталось  " + qGlobalUserContinue + " из 9 жизней" + ".\n\nВы можите выйти в меню и начать турнир заново.\nИли повторите попытку.");
		qwindowBorder();
	}
	
	if(type === QWINDOW_TYPE_EXIT_BATTLE)
	{
		qwindowBackgroundGraphicsRed();
		qwindowButtonPanelExitBattle();
		qwindowText("\n\n\n           Вы собираетесь покинуть битву.\n           В таком случае вы потеряете одну жизнь.\n           У вас останется " + (qGlobalUserContinue - 1) + " из 9" + ".\n\n           Продолжить выход из боя?");
		qwindowBorder();
	}
	
	if(type === QWINDOW_TYPE_EXIT_GAME)
	{
		qwindowBackgroundGraphicsRed();
		qwindowButtonPanelExitGame();
		qwindowText("\n\n\n           Вы собираетесь выйти в главное меню.\n           В таком случае прогресс будет потерян.\n\n           Продолжить выход в основное меню?");
		qwindowBorder();
	}
	
	if(type === QWINDOW_TYPE_SETTINGS)
	{
		qwindowBackgroundGraphicsBlack();
		qwindowButtonPanelSettings();
		qwindowText("   Настройки.\n                                                                                            \n\n\n            Звук                 Музыка            Информация");
		qwindowBorder();
	}
	
	qtimerPauseBegin();

	stage.addChild(qwindowStage);
}

function qwindowRemove()
{
	qwindowDragonLeftMovieClip = null;
	qwindowDragonRightMovieClip = null;
	stage.removeChild(qwindowStage);
	qwindowStage = null;
	qtimerPauseEnd();
}

/* Чёрный фон */
function qwindowGlobalBackground()
{
	var graphics = new PIXI.Graphics();
	graphics.hitArea = new PIXI.Rectangle(0, 0, MAIN_WIDTH, MAIN_HEIGH);
	graphics.interactive = true;
	graphics.lineStyle(2, 0x000000, 1);
	graphics.beginFill(0x000000, 0.15);
	graphics.drawRect(0, 0, MAIN_WIDTH, MAIN_HEIGH);
	graphics.endFill();
	qwindowStage.addChild(graphics);
}

/* картинка фона окна */
function qwindowBackgroundImage()
{
	var backgroundSprite = new PIXI.Sprite(bgWindowTexture);
	backgroundSprite.position.x = MAIN_WIDTH / 3.8;
	backgroundSprite.position.y = MAIN_HEIGH / 4;
	qwindowStage.addChild(backgroundSprite);
}

/* красный фон окна */
function qwindowBackgroundGraphicsRed()
{
	var graphics = new PIXI.Graphics();
	graphics.position.x = MAIN_WIDTH / 3.8;
	graphics.position.y = MAIN_HEIGH / 4;
	graphics.lineStyle(2, 0x150000, 1);
	graphics.beginFill(0x150000, 0.9);
	graphics.drawRect(2, 2, 395, 250);
	graphics.endFill();
	qwindowStage.addChild(graphics);
}

/* черный фон окна */
function qwindowBackgroundGraphicsBlack()
{
	var graphics = new PIXI.Graphics();
	graphics.position.x = MAIN_WIDTH / 3.8;
	graphics.position.y = MAIN_HEIGH / 4;
	graphics.lineStyle(2, 0x000000, 1);
	graphics.clear();
	graphics.beginFill(0x000000, 0.9);
	graphics.drawRoundedRect(0, 0, 400, 253, 15);
	graphics.endFill();
	qwindowStage.addChild(graphics);
}

/* рамка окна */
function qwindowBorder()
{
	var borderSprite = new PIXI.Sprite(borderWindowTexture);
	borderSprite.position.x = MAIN_WIDTH / 3.8;
	borderSprite.position.y = MAIN_HEIGH / 4;
	borderSprite.scale.set(1.0);
	qwindowStage.addChild(borderSprite);
}

/* Анимация драконов */
function qwindowAnimationDragon()
{
	qwindowDragonLeftMovieClip = new PIXI.extras.MovieClip(animTexDrugonLeft); 
	qwindowDragonLeftMovieClip.position.x = (MAIN_WIDTH / 3.8) + 2; 
	qwindowDragonLeftMovieClip.position.y = MAIN_HEIGH / 4; 
	qwindowDragonLeftMovieClip.loop = true; 
	qwindowDragonLeftMovieClip.animationSpeed = 0.2; 
	qwindowDragonLeftMovieClip.play(); 
	qwindowStage.addChild(qwindowDragonLeftMovieClip);
	
	qwindowDragonRightMovieClip = new PIXI.extras.MovieClip(animTexDrugonRight); 
	qwindowDragonRightMovieClip.position.x = (MAIN_WIDTH / 3.8) + 320; 
	qwindowDragonRightMovieClip.position.y = MAIN_HEIGH / 4; 
	qwindowDragonRightMovieClip.loop = true; 
	qwindowDragonRightMovieClip.animationSpeed = 0.2; 
	qwindowDragonRightMovieClip.play(); 
	qwindowStage.addChild(qwindowDragonRightMovieClip);
}

function qwindowText(text)
{
	var qwText = new PIXI.Text(text, qwindowStyleText); 
	qwText.x = (MAIN_WIDTH / 3.8) + 10; 
	qwText.y = (MAIN_HEIGH / 4) + 15; 
	qwindowStage.addChild(qwText);
}

function qwindowButtonPanelNoLife()
{
	var textButton = new PIXI.Text("Выйти в меню", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonExitMenu = new PIXI.Sprite(buttonTexture);
	buttonExitMenu.name = "buttonExitMenu";
	buttonExitMenu.position.x = (MAIN_WIDTH / 3.8) + 20;
	buttonExitMenu.position.y = (MAIN_HEIGH / 4) + 180;
	buttonExitMenu.interactive = true;
	buttonExitMenu.buttonMode = true;
	buttonExitMenu.tap = onqwindowButtonClick;
	buttonExitMenu.click = onqwindowButtonClick;
	buttonExitMenu.on('mousedown', onqwindowButtonDown);
	buttonExitMenu.on('touchstart', onqwindowButtonDown);
	buttonExitMenu.on('mouseup', onqwindowButtonUp);
	buttonExitMenu.on('touchend', onqwindowButtonUp);
	buttonExitMenu.on('mouseupoutside', onqwindowButtonUp);
	buttonExitMenu.on('touchendoutside', onqwindowButtonUp);
	buttonExitMenu.addChild(textButton);
	qwindowStage.addChild(buttonExitMenu);
	
	textButton = new PIXI.Text("Позвать друга", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonFriend = new PIXI.Sprite(buttonTexture);
	buttonFriend.name = "buttonFriend";
	buttonFriend.position.x = (MAIN_WIDTH / 3.8) + 200;
	buttonFriend.position.y = (MAIN_HEIGH / 4) + 180;
	buttonFriend.interactive = true;
	buttonFriend.buttonMode = true;
	buttonFriend.tap = onqwindowButtonClick;
	buttonFriend.click = onqwindowButtonClick;
	buttonFriend.on('mousedown', onqwindowButtonDown);
	buttonFriend.on('touchstart', onqwindowButtonDown);
	buttonFriend.on('mouseup', onqwindowButtonUp);
	buttonFriend.on('touchend', onqwindowButtonUp);
	buttonFriend.on('mouseupoutside', onqwindowButtonUp);
	buttonFriend.on('touchendoutside', onqwindowButtonUp);
	buttonFriend.addChild(textButton);
	qwindowStage.addChild(buttonFriend);
}

function qwindowButtonPanelWin()
{
	var textButton = new PIXI.Text("Рассказать", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonInvate = new PIXI.Sprite(buttonTexture);
	buttonInvate.name = "buttonInvate";
	buttonInvate.position.x = (MAIN_WIDTH / 3.8) + 20;
	buttonInvate.position.y = (MAIN_HEIGH / 4) + 180;
	buttonInvate.interactive = true;
	buttonInvate.buttonMode = true;
	buttonInvate.tap = onqwindowButtonClick;
	buttonInvate.click = onqwindowButtonClick;
	buttonInvate.on('mousedown', onqwindowButtonDown);
	buttonInvate.on('touchstart', onqwindowButtonDown);
	buttonInvate.on('mouseup', onqwindowButtonUp);
	buttonInvate.on('touchend', onqwindowButtonUp);
	buttonInvate.on('mouseupoutside', onqwindowButtonUp);
	buttonInvate.on('touchendoutside', onqwindowButtonUp);
	buttonInvate.addChild(textButton);
	qwindowStage.addChild(buttonInvate);
	
	textButton = new PIXI.Text("Продолжить", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonNext = new PIXI.Sprite(buttonTexture);
	buttonNext.name = "buttonNext";
	buttonNext.position.x = (MAIN_WIDTH / 3.8) + 200;
	buttonNext.position.y = (MAIN_HEIGH / 4) + 180;
	buttonNext.interactive = true;
	buttonNext.buttonMode = true;
	buttonNext.tap = onqwindowButtonClick;
	buttonNext.click = onqwindowButtonClick;
	buttonNext.on('mousedown', onqwindowButtonDown);
	buttonNext.on('touchstart', onqwindowButtonDown);
	buttonNext.on('mouseup', onqwindowButtonUp);
	buttonNext.on('touchend', onqwindowButtonUp);
	buttonNext.on('mouseupoutside', onqwindowButtonUp);
	buttonNext.on('touchendoutside', onqwindowButtonUp);
	buttonNext.addChild(textButton);
	qwindowStage.addChild(buttonNext);
}

function qwindowButtonPanelLose()
{
	var textButton = new PIXI.Text("Выйти в меню", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonExitMenu = new PIXI.Sprite(buttonTexture);
	buttonExitMenu.name = "buttonExitMenu";
	buttonExitMenu.position.x = (MAIN_WIDTH / 3.8) + 20;
	buttonExitMenu.position.y = (MAIN_HEIGH / 4) + 180;
	buttonExitMenu.interactive = true;
	buttonExitMenu.buttonMode = true;
	buttonExitMenu.tap = onqwindowButtonClick;
	buttonExitMenu.click = onqwindowButtonClick;
	buttonExitMenu.on('mousedown', onqwindowButtonDown);
	buttonExitMenu.on('touchstart', onqwindowButtonDown);
	buttonExitMenu.on('mouseup', onqwindowButtonUp);
	buttonExitMenu.on('touchend', onqwindowButtonUp);
	buttonExitMenu.on('mouseupoutside', onqwindowButtonUp);
	buttonExitMenu.on('touchendoutside', onqwindowButtonUp);
	buttonExitMenu.addChild(textButton);
	qwindowStage.addChild(buttonExitMenu);
	
	textButton = new PIXI.Text("Повторить", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonReplayBattle = new PIXI.Sprite(buttonTexture);
	buttonReplayBattle.name = "buttonReplayBattle";
	buttonReplayBattle.position.x = (MAIN_WIDTH / 3.8) + 200;
	buttonReplayBattle.position.y = (MAIN_HEIGH / 4) + 180;
	buttonReplayBattle.interactive = true;
	buttonReplayBattle.buttonMode = true;
	buttonReplayBattle.tap = onqwindowButtonClick;
	buttonReplayBattle.click = onqwindowButtonClick;
	buttonReplayBattle.on('mousedown', onqwindowButtonDown);
	buttonReplayBattle.on('touchstart', onqwindowButtonDown);
	buttonReplayBattle.on('mouseup', onqwindowButtonUp);
	buttonReplayBattle.on('touchend', onqwindowButtonUp);
	buttonReplayBattle.on('mouseupoutside', onqwindowButtonUp);
	buttonReplayBattle.on('touchendoutside', onqwindowButtonUp);
	buttonReplayBattle.addChild(textButton);
	qwindowStage.addChild(buttonReplayBattle);
}

function qwindowButtonPanelExitBattle()
{
	var textButton = new PIXI.Text("Да", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonYes = new PIXI.Sprite(buttonTexture);
	buttonYes.name = "buttonExitBattleYes";
	buttonYes.position.x = (MAIN_WIDTH / 3.8) + 20;
	buttonYes.position.y = (MAIN_HEIGH / 4) + 180;
	buttonYes.interactive = true;
	buttonYes.buttonMode = true;
	buttonYes.tap = onqwindowButtonClick;
	buttonYes.click = onqwindowButtonClick;
	buttonYes.on('mousedown', onqwindowButtonDown);
	buttonYes.on('touchstart', onqwindowButtonDown);
	buttonYes.on('mouseup', onqwindowButtonUp);
	buttonYes.on('touchend', onqwindowButtonUp);
	buttonYes.on('mouseupoutside', onqwindowButtonUp);
	buttonYes.on('touchendoutside', onqwindowButtonUp);
	buttonYes.addChild(textButton);
	qwindowStage.addChild(buttonYes);
	
	textButton = new PIXI.Text("Нет", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonNo = new PIXI.Sprite(buttonTexture);
	buttonNo.name = "buttonExitBattleNo";
	buttonNo.position.x = (MAIN_WIDTH / 3.8) + 200;
	buttonNo.position.y = (MAIN_HEIGH / 4) + 180;
	buttonNo.interactive = true;
	buttonNo.buttonMode = true;
	buttonNo.tap = onqwindowButtonClick;
	buttonNo.click = onqwindowButtonClick;
	buttonNo.on('mousedown', onqwindowButtonDown);
	buttonNo.on('touchstart', onqwindowButtonDown);
	buttonNo.on('mouseup', onqwindowButtonUp);
	buttonNo.on('touchend', onqwindowButtonUp);
	buttonNo.on('mouseupoutside', onqwindowButtonUp);
	buttonNo.on('touchendoutside', onqwindowButtonUp);
	buttonNo.addChild(textButton);
	qwindowStage.addChild(buttonNo);
}

function qwindowButtonPanelExitGame()
{
	var textButton = new PIXI.Text("Да", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonYes = new PIXI.Sprite(buttonTexture);
	buttonYes.name = "buttonExitGameYes";
	buttonYes.position.x = (MAIN_WIDTH / 3.8) + 20;
	buttonYes.position.y = (MAIN_HEIGH / 4) + 180;
	buttonYes.interactive = true;
	buttonYes.buttonMode = true;
	buttonYes.tap = onqwindowButtonClick;
	buttonYes.click = onqwindowButtonClick;
	buttonYes.on('mousedown', onqwindowButtonDown);
	buttonYes.on('touchstart', onqwindowButtonDown);
	buttonYes.on('mouseup', onqwindowButtonUp);
	buttonYes.on('touchend', onqwindowButtonUp);
	buttonYes.on('mouseupoutside', onqwindowButtonUp);
	buttonYes.on('touchendoutside', onqwindowButtonUp);
	buttonYes.addChild(textButton);
	qwindowStage.addChild(buttonYes);
	
	textButton = new PIXI.Text("Нет", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var buttonNo = new PIXI.Sprite(buttonTexture);
	buttonNo.name = "buttonExitGameNo";
	buttonNo.position.x = (MAIN_WIDTH / 3.8) + 200;
	buttonNo.position.y = (MAIN_HEIGH / 4) + 180;
	buttonNo.interactive = true;
	buttonNo.buttonMode = true;
	buttonNo.tap = onqwindowButtonClick;
	buttonNo.click = onqwindowButtonClick;
	buttonNo.on('mousedown', onqwindowButtonDown);
	buttonNo.on('touchstart', onqwindowButtonDown);
	buttonNo.on('mouseup', onqwindowButtonUp);
	buttonNo.on('touchend', onqwindowButtonUp);
	buttonNo.on('mouseupoutside', onqwindowButtonUp);
	buttonNo.on('touchendoutside', onqwindowButtonUp);
	buttonNo.addChild(textButton);
	qwindowStage.addChild(buttonNo);
}

function qwindowButtonPanelSettings()
{
	var textButton = new PIXI.Text("Закрыть", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var spriteButton = new PIXI.Sprite(buttonTexture);
	spriteButton.name = "buttonClose";
	spriteButton.position.x = (MAIN_WIDTH / 3.8) + 115;
	spriteButton.position.y = (MAIN_HEIGH / 4) + 180;
	spriteButton.interactive = true;
	spriteButton.buttonMode = true;
	spriteButton.tap = onqwindowButtonClick;
	spriteButton.click = onqwindowButtonClick;
	spriteButton.on('mousedown', onqwindowButtonDown);
	spriteButton.on('touchstart', onqwindowButtonDown);
	spriteButton.on('mouseup', onqwindowButtonUp);
	spriteButton.on('touchend', onqwindowButtonUp);
	spriteButton.on('mouseupoutside', onqwindowButtonUp);
	spriteButton.on('touchendoutside', onqwindowButtonUp);
	spriteButton.addChild(textButton);
	qwindowStage.addChild(spriteButton);
	
	var soundButton;
	if(sound === true) soundButton = new PIXI.Sprite(soundOnTexture);
	else soundButton = new PIXI.Sprite(soundOffTexture);
	soundButton.name = "buttonSound";
	soundButton.position.x = (MAIN_WIDTH / 3.8) + 75;
	soundButton.position.y = (MAIN_HEIGH / 4) + 125;
	soundButton.interactive = true;
	soundButton.buttonMode = true;
	soundButton.tap = onqwindowButtonClick;
	soundButton.click = onqwindowButtonClick;
	soundButton.on('mousedown', onqwindowButtonDown);
	soundButton.on('touchstart', onqwindowButtonDown);
	soundButton.on('mouseup', onqwindowButtonUp);
	soundButton.on('touchend', onqwindowButtonUp);
	soundButton.on('mouseupoutside', onqwindowButtonUp);
	soundButton.on('touchendoutside', onqwindowButtonUp);
	qwindowStage.addChild(soundButton);
	
	var musicButton;
	if(music === true) musicButton = new PIXI.Sprite(musicOnTexture);
	else musicButton = new PIXI.Sprite(musicOffTexture);
	musicButton.name = "buttonMusic";
	musicButton.position.x = (MAIN_WIDTH / 3.8) + 180;
	musicButton.position.y = (MAIN_HEIGH / 4) + 125;
	musicButton.interactive = true;
	musicButton.buttonMode = true;
	musicButton.tap = onqwindowButtonClick;
	musicButton.click = onqwindowButtonClick;
	musicButton.on('mousedown', onqwindowButtonDown);
	musicButton.on('touchstart', onqwindowButtonDown);
	musicButton.on('mouseup', onqwindowButtonUp);
	musicButton.on('touchend', onqwindowButtonUp);
	musicButton.on('mouseupoutside', onqwindowButtonUp);
	musicButton.on('touchendoutside', onqwindowButtonUp);
	qwindowStage.addChild(musicButton);
	
	var infoButton = new PIXI.Sprite(informationTexture);
	infoButton.name = "buttonInfo";
	infoButton.position.x = (MAIN_WIDTH / 3.8) + 285;
	infoButton.position.y = (MAIN_HEIGH / 4) + 125;
	infoButton.interactive = true;
	infoButton.buttonMode = true;
	infoButton.tap = onqwindowButtonClick;
	infoButton.click = onqwindowButtonClick;
	infoButton.on('mousedown', onqwindowButtonDown);
	infoButton.on('touchstart', onqwindowButtonDown);
	infoButton.on('mouseup', onqwindowButtonUp);
	infoButton.on('touchend', onqwindowButtonUp);
	infoButton.on('mouseupoutside', onqwindowButtonUp);
	infoButton.on('touchendoutside', onqwindowButtonUp);
	qwindowStage.addChild(infoButton);
}

function onqwindowButtonDown()
{
	this.isdown = true;
	this.scale.set(0.95);
	this.position.x += 5; 
}

function onqwindowButtonUp()
{
	if(this.isdown)
	{
		this.isdown = false;
		this.scale.set(1.0);
		this.position.x -= 5;
	}
}

function onqwindowButtonClick() 
{
	switch(this.name) {
		case "buttonClose":
			qwindowRemove();
			break;
		case "buttonSound":
			if(sound === true)
			{
				sound = false;
				this.texture = soundOffTexture;
			}else{
				sound = true;
				this.texture = soundOnTexture;
			}
			break;
		case "buttonMusic":
			if(music === true)
			{
				music = false;
				this.texture = musicOffTexture;
			}else{
				music = true;
				this.texture = musicOnTexture;
			}
			break;
		case "buttonInfo":
			break;
		case "buttonExitGameYes":
			qwindowRemove();
			levelRemove();
			menuShow(); 
			break;
		case "buttonExitGameNo":
			qwindowRemove();
			break;
		case "buttonExitBattleYes":
			qGlobalUserContinue--;
			qwindowRemove();
			levelRemove();
			stairsShow();
			break;
		case "buttonExitBattleNo":
			qwindowRemove();
			break;
		case "buttonExitMenu":
			qwindowRemove();
			levelRemove();
			menuShow(); 
			break;
		case "buttonReplayBattle":
			qwindowRemove();
			levelRemove();
			stairsShow();
			break;
		case "buttonInvate":
			// VK !!!!!!!!!
			break;
		case "buttonNext":
			if(qGlobalTournamentProgress < 0) 
			{
				qwindowRemove();
				levelRemove();
			} else {
				qwindowRemove();
				levelRemove();
				stairsShow();
			}
			break;
		case "buttonFriend":
			// VK !!!!!!!!!
			break;
		case "":
			break;
		case "":
			break;
		case "":
			break;
		default:
			break;
	}
}