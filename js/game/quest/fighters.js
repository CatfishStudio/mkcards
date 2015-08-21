var fightersStage;
var fightersLeftWindowSprite;
var fightersRightWindowSprite;

var fightersCharacteristics;

var fightersStyleText = {
    font : 'bold 13px Arial',
    fill : '#FFFFFF'
};

function fightersShow()
{
	fightersStage = new PIXI.Container();

	initFightersCharacteristics()
	createFightersLeftWindow();
	createFightersSelectPanel();
	createFightersRightWindow("liukang");

	stage.addChild(fightersStage);
	console.log("Create window: fighters");
}

function initFightersCharacteristics()
{
	fightersCharacteristics = new Object();
	//fightersCharacteristics["shaokahn"] = [2,2,1,3,2,1200];
	//fightersCharacteristics["goro"] = [2,2,2,2,2,1200];
	fightersCharacteristics["liukang"] = [2,1,1,1,2,0];
	fightersCharacteristics["kunglao"] = [1,2,1,2,1,0];
	fightersCharacteristics["johnnycage"] = [1,1,2,2,1,0];
	fightersCharacteristics["reptile"] = [1,1,1,2,2,0];
	fightersCharacteristics["subzero"] = [2,2,1,1,1,0];
	fightersCharacteristics["shangtsung"] = [1,1,1,3,1,0];
	fightersCharacteristics["kitana"] = [1,1,3,1,1,0];
	fightersCharacteristics["jax"] = [1,3,1,1,1,0];
	fightersCharacteristics["mileena"] = [1,2,2,1,1,0];
	fightersCharacteristics["baraka"] = [1,1,1,1,3,0];
	fightersCharacteristics["scorpion"] = [3,1,1,1,1,0];
	fightersCharacteristics["raiden"] = [2,1,2,1,2,0];
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

function createFightersRightWindow(fighterName)
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

	var characterHitSprite 	= new PIXI.Sprite(characterHit1);
	characterHitSprite.name = "characterHit1";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 10;
	fightersRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit2);
	characterHitSprite.name = "characterHit2";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 60;
	fightersRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit3);
	characterHitSprite.name = "characterHit3";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 110;
	fightersRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit4);
	characterHitSprite.name = "characterHit4";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 160;
	fightersRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit5);
	characterHitSprite.name = "characterHit5";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 210;
	fightersRightWindowSprite.addChild(characterHitSprite);

	var fightersTextRus = ["Удар ногой","Уран рукой","Блок","Апперкот","С разворота"];
	var fightersTextEng = ["Удар ногой","Уран рукой","Блок","Апперкот","С разворота"];
	var fightersHits = ["5 x","3 x","3 x","6 x","10 x"];

	var fightersTextRightWindow;

	for (var i = 0; i < 5; i++)
	{
		if(language == "rus")
		{
			fightersTextRightWindow = new PIXI.Text(fightersTextRus[i], fightersStyleText);
			fightersTextRightWindow.x = 60;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);

			fightersTextRightWindow = new PIXI.Text(fightersHits[i] + fightersCharacteristics[fighterName][i], fightersStyleText);
			fightersTextRightWindow.x = 150;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);
		}else{
			fightersTextRightWindow = new PIXI.Text(fightersTextEng[i], fightersStyleText);
			fightersTextRightWindow.x = 60;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);

			fightersTextRightWindow = new PIXI.Text(fightersHits[i] + fightersCharacteristics[fighterName][i], fightersStyleText);
			fightersTextRightWindow.x = 150;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);
		}
	}
	fightersStage.addChild(fightersRightWindowSprite);
}


function createFightersSelectPanel()
{
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 0), (MAIN_HEIGH / 2.9), iconLiukangTexture, "liukang");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 1), (MAIN_HEIGH / 2.9), iconKunglaoTexture, "kunglao");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 2), (MAIN_HEIGH / 2.9), iconJohnnycageTexture, "johnnycage");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 3), (MAIN_HEIGH / 2.9), iconReptileTexture, "reptile");

	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 0), (MAIN_HEIGH / 2.9) + (85 * 1), iconSubzeroTexture, "subzero");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 1), (MAIN_HEIGH / 2.9) + (85 * 1), iconShangtsungTexture, "shangtsung");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 2), (MAIN_HEIGH / 2.9) + (85 * 1), iconKitanaTexture, "kitana");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 3), (MAIN_HEIGH / 2.9) + (85 * 1), iconJaxTexture, "jax");

	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 0), (MAIN_HEIGH / 2.9) + (85 * 2), iconMileenaTexture, "mileena");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 1), (MAIN_HEIGH / 2.9) + (85 * 2), iconBarakaTexture, "baraka");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 2), (MAIN_HEIGH / 2.9) + (85 * 2), iconScorpionTexture, "scorpion");
	createFightersIconButton((MAIN_WIDTH / 3) + (75 * 3), (MAIN_HEIGH / 2.9) + (85 * 2), iconRaidenTexture, "raiden");
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
	fightersStage.removeChild(fightersRightWindowSprite);
	createFightersRightWindow(this.name);
	console.log("Fighters click icon button: " + this.name);
}
