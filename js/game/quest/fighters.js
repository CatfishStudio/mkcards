var fightersStage;
var fightersLeftWindowSprite;
var fightersRightWindowSprite;

function fightersShow()
{

	fightersStage = new PIXI.Container();

	createFightersLeftWindow();
	createFightersSelectPanel();
	createFightersRightWindow();

	stage.addChild(fightersStage);
	console.log("Create window: fighters");
}


function createFightersLeftWindow()
{
	fightersLeftWindowSprite = new PIXI.Sprite(bgCharacterWindowTexture);
	fightersLeftWindowSprite.name = "fightersLeftWindow";
	fightersLeftWindowSprite.position.x = (MAIN_WIDTH / 25);
	fightersLeftWindowSprite.position.y = (MAIN_HEIGH / 2.9);

	var borderSprite = new PIXI.Sprite(borderCharacterWindowTexture);
	borderSprite.name = "fightersLeftWindowBorder";
	borderSprite.position.x = 0;
	borderSprite.position.y = 0;

	fightersLeftWindowSprite.addChild(borderSprite);	

	fightersStage.addChild(fightersLeftWindowSprite);
}

function createFightersRightWindow()
{
	fightersRightWindowSprite = new PIXI.Sprite(bgCharacterWindowTexture);
	fightersRightWindowSprite.name = "fightersRightWindow";
	fightersRightWindowSprite.position.x = (MAIN_WIDTH / 3) + (75 * 4.5);
	fightersRightWindowSprite.position.y = (MAIN_HEIGH / 2.9);

	var borderSprite = new PIXI.Sprite(borderCharacterWindowTexture);
	borderSprite.name = "fightersRightWindowBorder";
	borderSprite.position.x = 0;
	borderSprite.position.y = 0;

	fightersRightWindowSprite.addChild(borderSprite);	

	fightersStage.addChild(fightersRightWindowSprite);
}


function createFightersSelectPanel()
{
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 0), (MAIN_HEIGH / 2.9), iconLiukangTexture, "iconButtonLiukang");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 1), (MAIN_HEIGH / 2.9), iconKunglaoTexture, "iconButtonKunglao");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 2), (MAIN_HEIGH / 2.9), iconJohnnycageTexture, "iconButtonJohnnycage");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 3), (MAIN_HEIGH / 2.9), iconReptileTexture, "iconButtonReptile");

	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 0), (MAIN_HEIGH / 2.9) + (85 * 1), iconSubzeroTexture, "iconButtonSubzero");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 1), (MAIN_HEIGH / 2.9) + (85 * 1), iconShangtsungTexture, "iconButtonShangtsung");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 2), (MAIN_HEIGH / 2.9) + (85 * 1), iconKitanaTexture, "iconButtonKitana");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 3), (MAIN_HEIGH / 2.9) + (85 * 1), iconJaxTexture, "iconButtonJax");

	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 0), (MAIN_HEIGH / 2.9) + (85 * 2), iconMileenaTexture, "iconButtonMileena");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 1), (MAIN_HEIGH / 2.9) + (85 * 2), iconBarakaTexture, "iconButtonBaraka");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 2), (MAIN_HEIGH / 2.9) + (85 * 2), iconScorpionTexture, "iconButtonScorpion");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 3), (MAIN_HEIGH / 2.9) + (85 * 2), iconRaidenTexture, "iconButtonRaiden");
}

function createFightersIconButton(xPos, yPos, texture, name)
{
	var iconButtonSprite;
	iconButtonSprite = new PIXI.Sprite(texture);
	iconButtonSprite.name = name;
	iconButtonSprite.position.x = xPos;
	iconButtonSprite.position.y = yPos;
	iconButtonSprite.interactive = true;
	iconButtonSprite.tap = onFightersIconButtonClick;
	iconButtonSprite.click = onFightersIconButtonClick;
	iconButtonSprite.on('mousedown', onFightersIconButtonDown);
	iconButtonSprite.on('touchstart', onFightersIconButtonDown);
	iconButtonSprite.on('mouseup', onFightersIconButtonUp);
	iconButtonSprite.on('touchend', onFightersIconButtonUp);
	iconButtonSprite.on('mouseupoutside', onFightersIconButtonUp);
	iconButtonSprite.on('touchendoutside', onFightersIconButtonUp);

	fightersStage.addChild(iconButtonSprite);
}

function onFightersIconButtonDown()
{
    this.isdown = true;
    this.scale.set(0.95);
    this.position.x += 5; 
}

function onFightersIconButtonUp()
{
	if(this.isdown)
	{
    	this.isdown = false;
    	this.scale.set(1.0);
    	this.position.x -= 5;
    }
}

function onFightersIconButtonClick() 
{
	if(this.name == "")
	{
		
	}
	console.log("Fighters click icon button: " + this.name);
}
