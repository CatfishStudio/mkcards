var qlifebarStage;
var qlifebarText;

var qlifebarStyleText = {
    font : 'bold 36px Arial',
    fill : '#F7EDCA',
    stroke : '#500000',
    strokeThickness : 3,
    wordWrap : true,
    wordWrapWidth : 440
};

function qlifebarShow(stageParent, posX, posY)
{
	qlifebarStage = new PIXI.Container();
	qlifebarStage.position.x = posX;
	qlifebarStage.position.y = posY;

	qlifebarBackground();

	stageParent.addChild(qlifebarStage);
}

function qlifebarBackground()
{
	var bgLeft = new PIXI.Sprite(lifebarTexture);
	bgLeft.position.x = 50;
	bgLeft.position.y = 90;
	qlifebarStage.addChild(bgLeft);

	console.log("[LIFEBAR] Create lifebar!");
}