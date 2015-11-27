var fightersStage;
var fightersLeftWindowSprite;
var fightersRightWindowSprite;
var fightersAnimation;

var fightersStyleText = {
    font : 'bold 13px Arial',
    fill : '#FFFFFF'
};

function fightersShow()
{
	fightersStage = new PIXI.Container();

	qGlobalClearUser();
	qGlobalInitFightersCharacteristics();

	createFightersLeftWindow("liukang");
	createFightersSelectPanel();
	createFightersRightWindow("liukang");
	createFightersButton();

	stage.addChild(fightersStage);
	// console.log("Create window: fighters");
}

/* LEFT WINDOW */
function createFightersLeftWindow(fighterName)
{
	fightersLeftWindowSprite = new PIXI.Sprite(bgCharacterWindowTexture);
	fightersLeftWindowSprite.name = "fightersLeftWindow";
	fightersLeftWindowSprite.position.x = (MAIN_WIDTH / 25);
	fightersLeftWindowSprite.position.y = (MAIN_HEIGH / 2.9);

	fightersAnimation = new PIXI.extras.MovieClip(animFightersTextures[fighterName + ":STANCE:LEFT_TO_RIGHT"]);
	fightersAnimation.position.x = 40;
	fightersAnimation.position.y = 30;
	fightersAnimation.scale.x += 0.5;
	fightersAnimation.scale.y += 0.5;
	fightersAnimation.loop = true;
	fightersAnimation.play();
	fightersAnimation.animationSpeed = 0.2;
	fightersLeftWindowSprite.addChild(fightersAnimation);

	var borderSprite = new PIXI.Sprite(borderCharacterWindowTexture);
	borderSprite.name = "fightersLeftWindowBorder";
	borderSprite.position.x = 0;
	borderSprite.position.y = 0;
	fightersLeftWindowSprite.addChild(borderSprite);

	fightersStage.addChild(fightersLeftWindowSprite);
}

/* RIGHT WINDOW */
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

	var fightersTextRus = ["Удар ногой","Удар рукой","Блок","Апперкот","С разворота"];
	var fightersTextEng = ["Hit leg","Hit hand","Defense","Uppercut","With reversal"];
	var fightersHits = ["5  x ","3  x ","3  x ","6  x ","10  x "];

	var fightersTextRightWindow;

	qGlobalUserFighterName = fighterName;

	for (var i = 0; i < 5; i++)
	{
		if(language === "rus")
		{
			fightersTextRightWindow = new PIXI.Text(fightersTextRus[i], fightersStyleText);
			fightersTextRightWindow.x = 60;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);

			fightersTextRightWindow = new PIXI.Text(fightersHits[i] + qGlobalFightersCharacteristics[qGlobalUserFighterName][i], fightersStyleText);
			fightersTextRightWindow.name = fightersTextEng[i];
			fightersTextRightWindow.x = 150;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);
		}else{
			fightersTextRightWindow = new PIXI.Text(fightersTextEng[i], fightersStyleText);
			fightersTextRightWindow.x = 60;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);

			fightersTextRightWindow = new PIXI.Text(fightersHits[i] + qGlobalFightersCharacteristics[qGlobalUserFighterName][i], fightersStyleText);
			fightersTextRightWindow.name = fightersTextEng[i];
			fightersTextRightWindow.x = 150;
			fightersTextRightWindow.y = 25 + (50 * i);
			fightersRightWindowSprite.addChild(fightersTextRightWindow);
		}
	}
	fightersStage.addChild(fightersRightWindowSprite);
}

/* FIGHTERS PANEL */
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
	iconButtonSprite.buttonMode = true;
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
	fightersAnimation.textures = animFightersTextures[this.name + ":STANCE:LEFT_TO_RIGHT"];

	// console.log("Fighters click icon button: " + this.name);
}


function createFightersButton()
{
	var fightersSpriteButton;
	var fightersTextButton;
	var textFightersButtonsRus = ["Назад","Настройки","Пригласить","Играть"];
	var textFightersButtonsEng = ["Back","Settings","Invite","Play"];
	var fightersStyleTextButton = {
    	font : 'bold 12px Arial',
    	fill : '#F7EDCA',
    	stroke : '#500000',
    	strokeThickness : 3,
    	wordWrap : true,
    	wordWrapWidth : 440
	};
	for(var i = 0; i < 4; i++)
	{
		if(language == "rus")
		{
			fightersTextButton = new PIXI.Text(textFightersButtonsRus[i], fightersStyleTextButton);
		}else{
			fightersTextButton = new PIXI.Text(textFightersButtonsEng[i], fightersStyleTextButton);
		}
		fightersTextButton.x = (170 / 2) - (fightersTextButton.width / 2);
		fightersTextButton.y = 20;

		fightersSpriteButton = new PIXI.Sprite(buttonTexture);
		fightersSpriteButton.name = textFightersButtonsEng[i];
		fightersSpriteButton.position.x = 35 + (200 * i);
		fightersSpriteButton.position.y = 650;
		fightersSpriteButton.interactive = true;
		fightersSpriteButton.buttonMode = true;

		fightersSpriteButton.tap = onFightersButtonClick;
		fightersSpriteButton.click = onFightersButtonClick;
		fightersSpriteButton.on('mousedown', onFightersButtonDown);
		fightersSpriteButton.on('touchstart', onFightersButtonDown);
		fightersSpriteButton.on('mouseup', onFightersButtonUp);
		fightersSpriteButton.on('touchend', onFightersButtonUp);
		fightersSpriteButton.on('mouseupoutside', onFightersButtonUp);
		fightersSpriteButton.on('touchendoutside', onFightersButtonUp);
		
		fightersSpriteButton.addChild(fightersTextButton);
		fightersStage.addChild(fightersSpriteButton);
	}

}

function onFightersButtonDown()
{
    this.isdown = true;
    this.scale.set(0.95);
    this.position.x += 5; 
}

function onFightersButtonUp()
{
	if(this.isdown)
	{
    	this.isdown = false;
    	this.scale.set(1.0);
    	this.position.x -= 5;
    }
}

function onFightersButtonClick() 
{
	if(this.name == "Back")
	{
		stage.removeChild(fightersStage);
		menuShow(); // MENU SHOW
	}
	if(this.name == "Settings")
	{
		qwindowCreate(QWINDOW_TYPE_SETTINGS);
	}
	if(this.name == "Invite")
	{
		
	}
	if(this.name == "Play")
	{
		qGlobalItinUserFighter();			// инициализация бойца пользователя
		qGlobalInitEnemiesAI();				// инициализация всех протичников
		qGlobalInitEnemiesCharacteristics();// инициализация прокачки характеристик врагов
		qGlobalInitLevels();				// инициализация уровней
		fightersAnimation.stop();			// останавливаем анимацию
		stage.removeChild(fightersStage);
		stairsShow();						// STAIRS SHOW
	}
	// console.log("Fighters click button: " + this.name);
}