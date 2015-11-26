var qwindowStage;
var QWINDOW_TYPE_WIN = "QWINDOW_TYPE_WIN";
var QWINDOW_TYPE_LOSE = "QWINDOW_TYPE_LOSE";
var QWINDOW_TYPE_EXIT_BATTLE= "QWINDOW_TYPE_EXIT_BATTLE";
var QWINDOW_TYPE_EXIT_GAME= "QWINDOW_TYPE_EXIT_GAME";
var QWINDOW_TYPE_SETTINGS = "QWINDOW_TYPE_SETTINGS";

var qwindowStyleText = { 
	font : 'bold 14px Arial', 
	fill : '#FFFFFF', 
	stroke : '#000000', 
	strokeThickness : 3, 
	wordWrap : true, 
	wordWrapWidth : 440 
};

var qwindowButtonStyleText = { font : 'bold 12px Arial', fill : '#F7EDCA', stroke : '#500000', strokeThickness : 3, wordWrap : true, wordWrapWidth : 440 };

var qwindowDragonLeftMovieClip;
var qwindowDragonRightMovieClip;

function qwindowCreate(type)
{
	qwindowStage = new PIXI.Container();
	
	
	qwindowGlobalBackground();
	
	if(type === QWINDOW_TYPE_WIN)
	{
		qwindowBackgroundImage();
		qwindowAnimationDragon();
		qwindowText("Вы победили!\nОчки за победу " + qGlobalTotalPointsPlayerLevel);
		qwindowBorder();
	}
	
	if(type === QWINDOW_TYPE_SETTINGS)
	{
		qwindowBackgroundGraphicsBlack();
		qwindowButtonPanelSettings();
		qwindowBorder();
	}
	
	stage.addChild(qwindowStage);
}

function qwindowRemove()
{
	qwindowDragonLeftMovieClip = null;
	qwindowDragonRightMovieClip = null;
	stage.removeChild(qwindowStage);
	qwindowStage = null;
}

/* Чёрный фон */
function qwindowGlobalBackground()
{
	var graphics = new PIXI.Graphics();
	graphics.hitArea = new PIXI.Rectangle(0, 0, MAIN_WIDTH, MAIN_HEIGH);
	graphics.interactive = true;			// ОЧЕНЬ ВАЖНО!!! Необходимо для отключения интерактивности находящихся внизу объектов
	graphics.lineStyle(2, 0x000000, 1);
	graphics.beginFill(0x000000, 0.25);
	graphics.drawRect(0, 0, MAIN_WIDTH, MAIN_HEIGH);
	graphics.endFill();
	qwindowStage.addChild(graphics);
	
	
}

/* картинка фона окна */
function qwindowBackgroundImage()
{
	var backgroundSprite = new PIXI.Sprite(bgWindowTexture);
	backgroundSprite.position.x = MAIN_WIDTH / 4;
	backgroundSprite.position.y = MAIN_HEIGH / 4;
	qwindowStage.addChild(backgroundSprite);
}

/* красный фон окна */
function qwindowBackgroundGraphicsRed()
{
	var graphics = new PIXI.Graphics();
	graphics.position.x = MAIN_WIDTH / 4;
	graphics.position.y = MAIN_HEIGH / 4;
	graphics.lineStyle(2, 0x620000, 1);
	graphics.beginFill(0x620000, 0.8);
	graphics.drawRect(0, 0, 400, 253);
	graphics.endFill();
	qwindowStage.addChild(graphics);
}

/* черный фон окна */
function qwindowBackgroundGraphicsBlack()
{
	var graphics = new PIXI.Graphics();
	graphics.position.x = MAIN_WIDTH / 4;
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
	borderSprite.position.x = MAIN_WIDTH / 4;
	borderSprite.position.y = MAIN_HEIGH / 4;
	borderSprite.scale.set(1.0);
	qwindowStage.addChild(borderSprite);
}

/* Анимация драконов */
function qwindowAnimationDragon()
{
	qwindowDragonLeftMovieClip = new PIXI.extras.MovieClip(animTexDrugonLeft); 
	qwindowDragonLeftMovieClip.position.x = (MAIN_WIDTH / 4) + 2; 
	qwindowDragonLeftMovieClip.position.y = MAIN_HEIGH / 4; 
	qwindowDragonLeftMovieClip.loop = true; 
	qwindowDragonLeftMovieClip.animationSpeed = 0.2; 
	qwindowDragonLeftMovieClip.play(); 
	qwindowStage.addChild(qwindowDragonLeftMovieClip);
	
	qwindowDragonRightMovieClip = new PIXI.extras.MovieClip(animTexDrugonRight); 
	qwindowDragonRightMovieClip.position.x = (MAIN_WIDTH / 4) + 320; 
	qwindowDragonRightMovieClip.position.y = MAIN_HEIGH / 4; 
	qwindowDragonRightMovieClip.loop = true; 
	qwindowDragonRightMovieClip.animationSpeed = 0.2; 
	qwindowDragonRightMovieClip.play(); 
	qwindowStage.addChild(qwindowDragonRightMovieClip);
}

function qwindowText(text)
{
	qwindowText = new PIXI.Text(text, qwindowStyleText); 
	qwindowText.x = 0; 
	qwindowText.y = 0; 
	qwindowStage.addChild(qwindowText);
}

function qwindowButtonPanelWin()
{
	
}

function qwindowButtonPanelLose()
{
	
}

function qwindowButtonPanelExitBattle()
{
	
}

function qwindowButtonPanelExitGame()
{
	
}

function qwindowButtonPanelSettings()
{
	var textButton = new PIXI.Text("Закрыть", qwindowButtonStyleText);
	textButton.x = (170 / 2) - (textButton.width / 2);
	textButton.y = 20;
	
	var spriteButton = new PIXI.Sprite(buttonTexture);
	spriteButton.name = "buttonSettings";
	spriteButton.position.x = 100;
	spriteButton.position.y = 100;
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
	
}