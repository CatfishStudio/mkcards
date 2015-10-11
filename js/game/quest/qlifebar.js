var qlifebarStage;
var qlifebarGraphicsLeft;
var qlifebarGraphicsRigth;

var qlifebarStyleText = {
    font : 'bold 21px Arial',
    fill : '#F7EDCA',
    align:'left',
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
	qlifebarCreateLeftBar();
	qlifebarCreateRightBar();

	stageParent.addChild(qlifebarStage);
}

function qlifebarBackground()
{
	var lbText;
	var bgLeft = new PIXI.Sprite(lifebarTexture);
	bgLeft.position.x = 50;
	bgLeft.position.y = 90;
	qlifebarStage.addChild(bgLeft);

	lbText = new PIXI.Text(qlifebarGetFighterName(qGlobalUserFighterName), qlifebarStyleText);
	lbText.x = 50;
	lbText.y = 65;
	qlifebarStage.addChild(lbText);

	var bgRight = new PIXI.Sprite(lifebarTexture);
	bgRight.position.x = 600;
	bgRight.position.y = 90;
	qlifebarStage.addChild(bgRight);

	lbText = new PIXI.Text(qlifebarGetFighterName(levelAIName), qlifebarStyleText);
	lbText.x = 800 - lbText.width;
	lbText.y = 65;
	qlifebarStage.addChild(lbText);

	console.log("[LIFEBAR] Create lifebar!");
}

function qlifebarGetFighterName(fighterName)
{
	if(fighterName == "shaokahn") return "Shao Kahn";
	if(fighterName == "goro") return "Goro";
	if(fighterName == "liukang") return "Liu Kang";
	if(fighterName == "kunglao") return "Kung Lao";
	if(fighterName == "johnnycage") return "Johnny Cage";
	if(fighterName == "reptile") return "Reptile";
	if(fighterName == "subzero") return "Sub-Zero";
	if(fighterName == "shangtsung") return "Shang Tsung";
	if(fighterName == "kitana") return "Kitana";
	if(fighterName == "jax") return "Jax";
	if(fighterName == "mileena") return "Mileena";
	if(fighterName == "baraka") return "Baraka";
	if(fighterName == "scorpion") return "Scorpion";
	if(fighterName == "raiden") return "Raiden";
}

function qlifebarCreateLeftBar()
{
	qlifebarGraphicsLeft = new PIXI.Graphics();
	qlifebarGraphicsLeft.lineStyle(2, 0x0000FF, 1);
	qlifebarGraphicsLeft.beginFill(0x0000FF, 1);
	qlifebarGraphicsLeft.drawRect(0, 0, 198, 8);
	qlifebarGraphicsLeft.endFill();
	qlifebarGraphicsLeft.x = 54;
	qlifebarGraphicsLeft.y = 94;
	qlifebarStage.addChild(qlifebarGraphicsLeft);
}

function qlifebarCreateRightBar()
{
	qlifebarGraphicsRigth = new PIXI.Graphics();
	qlifebarGraphicsRigth.lineStyle(2, 0x0000FF, 1);
	qlifebarGraphicsRigth.beginFill(0x0000FF, 1);
	qlifebarGraphicsRigth.drawRect(0, 0, 198, 8);
	qlifebarGraphicsRigth.endFill();
	qlifebarGraphicsRigth.x = 604;
	qlifebarGraphicsRigth.y = 94;
	qlifebarStage.addChild(qlifebarGraphicsRigth);
}

function qlifebarReduceLeftBar(valueReduce)
{
	qlifebarGraphicsLeft.width -= valueReduce;
}

function qlifebarReduceRightBar(valueReduce)
{
	var posWidth = qlifebarGraphicsRigth.width;
	qlifebarGraphicsRigth.width -= valueReduce;
	qlifebarGraphicsRigth.x += (posWidth - qlifebarGraphicsRigth.width);
}