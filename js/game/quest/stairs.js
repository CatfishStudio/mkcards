var stairsStage;
var stairsWindowStage;
var stairsLeftWindowSprite;
var stairsRightWindowSprite;
var stairsButtonsPlus = [];			// кнопки плюс
var stairsUserCharacteres = [];		// характеристики пользователя для прокачки
var stairsPanelButtonPlus;

var stairsStyleText = {
    font : 'bold 13px Arial',
    fill : '#FFFFFF'
};

/* Главная функция */
function stairsShow()
{
	stairsStage = new PIXI.Container();
	stairsWindowStage = new PIXI.Container();

	stairsBackground();
	createStairsButton();
	createStairsRightWindow(qGlobalTournamentProgress);
	createStairsLeftWindow();
	if(qGlobalExperiencePoints != 0) createStairsButtonPlus();
	stairsMask();
	
	stairsTween();

	stage.addChild(stairsStage);
	console.log("Create window: stairs");
}

/* Наложение маски */
function stairsMask()
{
	var posX = (MAIN_WIDTH - 800) / 2;
	var posY = (MAIN_HEIGH - 600) / 2.5;
	var thing = new PIXI.Graphics();
	stage.addChild(thing);
	thing.position.x = 0;
	thing.position.y = 0;
	thing.lineStyle(0);
	thing.clear();
    thing.beginFill(0x8bc5ff, 0.4);
    thing.moveTo(posX, posY);
    thing.lineTo(posX, posY);
    thing.lineTo(posX + 800, posY);
    thing.lineTo(posX + 800, posY + 600);
    thing.lineTo(posX, posY + 600);
        
	stairsWindowStage.mask = thing;
}

/* Наложение фоновой картинки и рамки */
function stairsBackground()
{
	var background = new PIXI.Sprite(blueportalTexture);
	background.name = "stairsBackground";
	background.position.x = (MAIN_WIDTH - 800) / 2;
	background.position.y = (MAIN_HEIGH - 600) / 2.5;
	background.scale.x += 1.0;
	background.scale.y += 1.35;
	stairsWindowStage.addChild(background);

	var border = new PIXI.Sprite(borderTexture);
	border.name = "stairsBorder";
	border.position.x = (MAIN_WIDTH - 800) / 2;
	border.position.y = (MAIN_HEIGH - 600) / 2.5;

	stairsWindowStage.addChild(border);
}

/* Создание правого окна характеристик */
function createStairsRightWindow(fighterIndex)
{
	stairsRightWindowSprite = new PIXI.Sprite(bgCharacterWindowTexture);
	stairsRightWindowSprite.name = "stairsRightWindow";
	stairsRightWindowSprite.position.x = MAIN_WIDTH;
	stairsRightWindowSprite.position.y = (MAIN_HEIGH / 3.6);

	var borderSprite = new PIXI.Sprite(borderCharacterWindowTexture);
	borderSprite.name = "stairsRightWindowBordet";
	borderSprite.position.x = 0;
	borderSprite.position.y = 0;
	stairsRightWindowSprite.addChild(borderSprite);

	var characterHitSprite 	= new PIXI.Sprite(characterHit1);
	characterHitSprite.name = "characterHit1";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 10;
	stairsRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit2);
	characterHitSprite.name = "characterHit2";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 60;
	stairsRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit3);
	characterHitSprite.name = "characterHit3";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 110;
	stairsRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit4);
	characterHitSprite.name = "characterHit4";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 160;
	stairsRightWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit5);
	characterHitSprite.name = "characterHit5";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 210;
	stairsRightWindowSprite.addChild(characterHitSprite);

	var fightersTextRus = ["Удар ногой","Удар рукой","Блок","Апперкот","С разворота"];
	var fightersTextEng = ["Hit leg","Hit hand","Defense","Uppercut","With reversal"];
	var fightersHits = ["5  x " + qGlobalEnemiesAI[fighterIndex].ai_hit_1, "3  x " + qGlobalEnemiesAI[fighterIndex].ai_hit_2, "3  x " + qGlobalEnemiesAI[fighterIndex].ai_hit_3, "6  x " + qGlobalEnemiesAI[fighterIndex].ai_hit_4, "10  x " + qGlobalEnemiesAI[fighterIndex].ai_hit_5];

	var stairsTextRightWindow;

	for (var i = 0; i < 5; i++)
	{
		if(language == "rus")
		{
			stairsTextRightWindow = new PIXI.Text(fightersTextRus[i], stairsStyleText);
			stairsTextRightWindow.x = 60;
			stairsTextRightWindow.y = 25 + (50 * i);
			stairsRightWindowSprite.addChild(stairsTextRightWindow);

			stairsTextRightWindow = new PIXI.Text(fightersHits[i], stairsStyleText);
			stairsTextRightWindow.x = 150;
			stairsTextRightWindow.y = 25 + (50 * i);
			stairsRightWindowSprite.addChild(stairsTextRightWindow);
		}else{
			stairsTextRightWindow = new PIXI.Text(fightersTextEng[i], stairsStyleText);
			stairsTextRightWindow.x = 60;
			stairsTextRightWindow.y = 25 + (50 * i);
			stairsRightWindowSprite.addChild(stairsTextRightWindow);

			stairsTextRightWindow = new PIXI.Text(fightersHits[i], stairsStyleText);
			stairsTextRightWindow.x = 150;
			stairsTextRightWindow.y = 25 + (50 * i);
			stairsRightWindowSprite.addChild(stairsTextRightWindow);
		}
	}

	stairsWindowStage.addChild(stairsRightWindowSprite);
	console.log("Stairs Enemy (Right window): " + qGlobalEnemiesAI[fighterIndex].ai_name);
}

/* Создание левого окна характеристик */
function createStairsLeftWindow()
{
	stairsLeftWindowSprite = new PIXI.Sprite(bgCharacterWindowTexture);
	stairsLeftWindowSprite.name = "stairsLeftWindow";
	stairsLeftWindowSprite.position.x = (stairsLeftWindowSprite.width * -1);
	stairsLeftWindowSprite.position.y = (MAIN_HEIGH / 3.6);

	var borderSprite = new PIXI.Sprite(borderCharacterWindowTexture);
	borderSprite.name = "stairsLeftWindowBordet";
	borderSprite.position.x = 0;
	borderSprite.position.y = 0;
	stairsLeftWindowSprite.addChild(borderSprite);

	var characterHitSprite 	= new PIXI.Sprite(characterHit1);
	characterHitSprite.name = "characterHit1";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 10;
	stairsLeftWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit2);
	characterHitSprite.name = "characterHit2";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 60;
	stairsLeftWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit3);
	characterHitSprite.name = "characterHit3";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 110;
	stairsLeftWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit4);
	characterHitSprite.name = "characterHit4";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 160;
	stairsLeftWindowSprite.addChild(characterHitSprite);

	characterHitSprite 	= new PIXI.Sprite(characterHit5);
	characterHitSprite.name = "characterHit5";
	characterHitSprite.position.x = 10;
	characterHitSprite.position.y = 210;
	stairsLeftWindowSprite.addChild(characterHitSprite);

	var fightersTextRus = ["Удар ногой","Удар рукой","Блок","Апперкот","С разворота"];
	var fightersTextEng = ["Hit leg","Hit hand","Defense","Uppercut","With reversal"];
	var fightersHits = ["5  x " + qGlobalUserHit1, "3  x " + qGlobalUserHit2, "3  x " + qGlobalUserHit3, "6  x " + qGlobalUserHit4, "10  x " + qGlobalUserHit5];
	var fightersHitsUpdate = ["x " + qGlobalUserHit1, "x " + qGlobalUserHit2, "x " + qGlobalUserHit3, "x " + qGlobalUserHit4, "x " + qGlobalUserHit5];

	stairsUserCharacteres = [];
	
	var stairsTextLeftWindow;
	for (var i = 0; i < 5; i++)
	{
		if(language == "rus")
		{
			stairsTextLeftWindow = new PIXI.Text(fightersTextRus[i], stairsStyleText);
			stairsTextLeftWindow.x = 55;
			stairsTextLeftWindow.y = 25 + (50 * i);
			stairsLeftWindowSprite.addChild(stairsTextLeftWindow);

			if(qGlobalExperiencePoints == 0) stairsTextLeftWindow = new PIXI.Text(fightersHits[i], stairsStyleText);
			else stairsTextLeftWindow = new PIXI.Text(fightersHitsUpdate[i], stairsStyleText);
			stairsTextLeftWindow.x = 140;
			stairsTextLeftWindow.y = 25 + (50 * i);
			stairsUserCharacteres.push(stairsTextLeftWindow);
			stairsLeftWindowSprite.addChild(stairsUserCharacteres[stairsUserCharacteres.length - 1]);
		}else{
			stairsTextLeftWindow = new PIXI.Text(fightersTextEng[i], stairsStyleText);
			stairsTextLeftWindow.x = 55;
			stairsTextLeftWindow.y = 25 + (50 * i);
			stairsLeftWindowSprite.addChild(stairsTextLeftWindow);

			if(qGlobalExperiencePoints == 0) stairsTextLeftWindow = new PIXI.Text(fightersHits[i], stairsStyleText);
			else stairsTextLeftWindow = new PIXI.Text(fightersHitsUpdate[i], stairsStyleText);
			stairsTextLeftWindow.x = 140;
			stairsTextLeftWindow.y = 25 + (50 * i);
			stairsUserCharacteres.push(stairsTextLeftWindow);
			stairsLeftWindowSprite.addChild(stairsUserCharacteres[stairsUserCharacteres.length - 1]);
		}
	}



	stairsWindowStage.addChild(stairsLeftWindowSprite);
	stairsStage.addChild(stairsWindowStage);
	console.log("Stairs User (Left window): " + qGlobalUserFighterName);
}

/* Создание панели кнопок плюс для левого окна характеристик */
function createStairsButtonPlus()
{
	stairsPanelButtonPlus = new PIXI.Container();
	stairsButtonsPlus = [];

	var stairsButtonPlus;
	for(var i = 0; i < 5; i++)
	{
		stairsButtonPlus = new PIXI.Sprite(buttonPlusTextures);
		stairsButtonPlus.name = "buttonPlus"+i;
		stairsButtonPlus.position.x = 160;
		stairsButtonPlus.position.y = 10 + (50 * i);
		stairsButtonPlus.interactive = true;

		stairsButtonPlus.tap = onStairsButtonClick;
		stairsButtonPlus.click = onStairsButtonClick;
		stairsButtonPlus.on('mousedown', onStairsButtonDown);
		stairsButtonPlus.on('touchstart', onStairsButtonDown);
		stairsButtonPlus.on('mouseup', onStairsButtonUp);
		stairsButtonPlus.on('touchend', onStairsButtonUp);
		stairsButtonPlus.on('mouseupoutside', onStairsButtonUp);
		stairsButtonPlus.on('touchendoutside', onStairsButtonUp);

		stairsButtonsPlus.push(stairsButtonPlus);
		stairsPanelButtonPlus.addChild(stairsButtonsPlus[stairsButtonsPlus.length -1]);
	}
	stairsLeftWindowSprite.addChild(stairsPanelButtonPlus);
}

/* Создание основных кнопок окна */
function createStairsButton()
{
	var stairsSpriteButton;
	var stairsTextButton;
	var textStairsButtonsRus = ["Назад в меню","Настройки","Пригласить","Битва"];
	var textStairsButtonsEng = ["Back in menu","Settings","Invite","Fight"];
	var stairsStyleTextButton = {
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
			stairsTextButton = new PIXI.Text(textStairsButtonsRus[i], stairsStyleTextButton);
		}else{
			stairsTextButton = new PIXI.Text(textStairsButtonsEng[i], stairsStyleTextButton);
		}
		stairsTextButton.x = (170 / 2) - (stairsTextButton.width / 2);
		stairsTextButton.y = 20;

		stairsSpriteButton = new PIXI.Sprite(buttonTexture);
		stairsSpriteButton.name = textStairsButtonsEng[i];
		stairsSpriteButton.position.x = 35 + (200 * i);
		stairsSpriteButton.position.y = 650;
		stairsSpriteButton.interactive = true;

		stairsSpriteButton.tap = onStairsButtonClick;
		stairsSpriteButton.click = onStairsButtonClick;
		stairsSpriteButton.on('mousedown', onStairsButtonDown);
		stairsSpriteButton.on('touchstart', onStairsButtonDown);
		stairsSpriteButton.on('mouseup', onStairsButtonUp);
		stairsSpriteButton.on('touchend', onStairsButtonUp);
		stairsSpriteButton.on('mouseupoutside', onStairsButtonUp);
		stairsSpriteButton.on('touchendoutside', onStairsButtonUp);
		
		stairsSpriteButton.addChild(stairsTextButton);
		stairsStage.addChild(stairsSpriteButton);
	}

}

/* События кнопок */
function onStairsButtonDown()
{
    this.isdown = true;
    this.scale.set(0.95);
    this.position.x += 5; 
}

function onStairsButtonUp()
{
	if(this.isdown)
	{
    	this.isdown = false;
    	this.scale.set(1.0);
    	this.position.x -= 5;
    }
}

function onStairsButtonClick() 
{
	if(this.name == "Back in menu")
	{
		stage.removeChild(stairsStage);
		menuShow(); // MENU SHOW
	}
	if(this.name == "Settings")
	{
		
	}
	if(this.name == "Invite")
	{
		
	}
	if(this.name == "Fight")
	{
		stage.removeChild(stairsStage);
	}
	if(this.name == "buttonPlus0")
	{
		if(qGlobalUserHit1 < DAMAGE_MAX_HIT_1){
			qGlobalUserHit1++;
			stairsUserCharacteres[0].text = "x " + qGlobalUserHit1;	
			if(qGlobalUserHit1 >= DAMAGE_MAX_HIT_1) stairsPanelButtonPlus.removeChild(stairsButtonsPlus[0]);
		}
		
	}
	if(this.name == "buttonPlus1")
	{
		stairsPanelButtonPlus.removeChild(stairsButtonsPlus[1]);
	}
	if(this.name == "buttonPlus2")
	{
		stairsPanelButtonPlus.removeChild(stairsButtonsPlus[2]);
	}
	if(this.name == "buttonPlus3")
	{
		stairsPanelButtonPlus.removeChild(stairsButtonsPlus[3]);
	}
	if(this.name == "buttonPlus4")
	{
		stairsPanelButtonPlus.removeChild(stairsButtonsPlus[4]);
	}
	console.log("Stairs click button: " + this.name);
}

/* Выполнение аминации, перемещения */
function stairsTween()
{
	createjs.Tween.get(stairsRightWindowSprite, {loop: false})
		.to({x: 580}, 1000, createjs.Ease.getPowInOut(4));
		//.to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
		//.to({alpha: 0, y: 125}, 100)
		//.to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
		//.to({x: 100}, 800, createjs.Ease.getPowInOut(2));
	createjs.Tween.get(stairsLeftWindowSprite, {loop: false})
		.to({x: 75}, 1000, createjs.Ease.getPowInOut(4));
    createjs.Ticker.setFPS(60);
    //createjs.Ticker.addEventListener("tick", stage);
}