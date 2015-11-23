var qwindowStage;
var QWINDOW_TYPE_WIN = "QWINDOW_TYPE_WIN";
var QWINDOW_TYPE_LOSE = "QWINDOW_TYPE_LOSE";
var QWINDOW_TYPE_EXIT_BATTLE= "QWINDOW_TYPE_EXIT_BATTLE";
var QWINDOW_TYPE_EXIT_GAME= "QWINDOW_TYPE_EXIT_GAME";

function qwindowCreate(type)
{
	qwindowStage = new PIXI.Container();
	
	qwindowGlobalBackground();
	
	if(type === QWINDOW_TYPE_WIN)
	{
		qwindowBackgroundImage();
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
	stage.removeChild(qwindowStage);
	qwindowStage = null;
}

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

function qwindowBackgroundImage()
{
	var backgroundSprite = new PIXI.Sprite(bgWindowTexture);
	backgroundSprite.position.x = MAIN_WIDTH / 4;
	backgroundSprite.position.y = MAIN_HEIGH / 4;
	backgroundSprite.scale.set(1.0);
	
	qwindowStage.addChild(backgroundSprite);
}

function qwindowBackgroundGraphics()
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

function qwindowBorder()
{
	var borderSprite = new PIXI.Sprite(borderWindowTexture);
	borderSprite.position.x = MAIN_WIDTH / 4;
	borderSprite.position.y = MAIN_HEIGH / 4;
	borderSprite.scale.set(1.0);
	
	qwindowStage.addChild(borderSprite);
}