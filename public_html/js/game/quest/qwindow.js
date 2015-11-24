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

var dragonLeftMovieClip;
var dragonRightMovieClip;

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
	
	if(type === QWINDOW_TYPE_EXIT_BATTLE)
	{
		qwindowBackgroundGraphics();
		qwindowBorder();
	}
	
	stage.addChild(qwindowStage);
}

function qwindowRemove()
{
	dragonLeftMovieClip = null;
	dragonRightMovieClip = null;
	stage.removeChild(qwindowStage);
	qwindowStage = null;
}

/* Чёрный фон */
function qwindowGlobalBackground()
{
	var graphics = new PIXI.Graphics();
	graphics.position.x = 0;
	graphics.position.y = 0;
	graphics.lineStyle(2, 0x000000, 1);
	graphics.clear();
	graphics.beginFill(0x000000, 0.25);
	graphics.drawRoundedRect(0, 0, MAIN_WIDTH, MAIN_HEIGH, 15);
	graphics.endFill();
	qwindowStage.addChild(graphics);
}

/* картинка фона окна */
function qwindowBackgroundImage()
{
	var backgroundSprite = new PIXI.Sprite(bgWindowTexture);
	backgroundSprite.position.x = MAIN_WIDTH / 4;
	backgroundSprite.position.y = MAIN_HEIGH / 4;
	backgroundSprite.scale.set(1.0);
	qwindowStage.addChild(backgroundSprite);
}

/* красный фон окна */
function qwindowBackgroundGraphicsRed()
{
	var graphics = new PIXI.Graphics();
	graphics.position.x = MAIN_WIDTH / 4;
	graphics.position.y = MAIN_HEIGH / 4;
	graphics.lineStyle(2, 0x620000, 1);
	graphics.clear();
	graphics.beginFill(0x620000, 0.8);
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
	dragonLeftMovieClip = new PIXI.extras.MovieClip(animTexDrugonLeft); 
	dragonLeftMovieClip.position.x = MAIN_WIDTH / 4; 
	dragonLeftMovieClip.position.y = MAIN_HEIGH / 4; 
	dragonLeftMovieClip.loop = true; 
	dragonLeftMovieClip.animationSpeed = 0.2; 
	dragonLeftMovieClip.play(); 
	qwindowStage.addChild(dragonLeftMovieClip);
	
	dragonRightMovieClip = new PIXI.extras.MovieClip(animTexDrugonRight); 
	dragonRightMovieClip.position.x = (MAIN_WIDTH / 4)+ 320; 
	dragonRightMovieClip.position.y = MAIN_HEIGH / 4; 
	dragonRightMovieClip.loop = true; 
	dragonRightMovieClip.animationSpeed = 0.2; 
	dragonRightMovieClip.play(); 
	qwindowStage.addChild(dragonRightMovieClip);
}

function qwindowText(text)
{
	qwindowText = new PIXI.Text(text, qwindowStyleText); 
	qwindowText.x = 0; 
	qwindowText.y = 0; 
	qwindowStage.addChild(qwindowText);
}