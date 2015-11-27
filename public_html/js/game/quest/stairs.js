var stairsStage;					// главный stage
var stairsWindowStage;				// stage окна
var stairsLeftWindowSprite;			// левое окно
var stairsRightWindowSprite;		// правое окно
var stairsButtonsPlus = [];			// массив кнопок плюс
var stairsUserCharacteres = [];		// массив характеристик пользователя для прокачки
var stairsPanelButtonPlus;			// панель кнопок плюс
var stairsUserIcon;					// иконка бойца пользователя
var stairsFightersIcons;			// столб иконок противников

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
	createStairsIcons();
	stairsBorder();
	createStairsRightWindow(qGlobalTournamentProgress);
	createStairsLeftWindow();
	createStairsButtonPlus();
	stairsMask();
	
	stairsTween();

	stage.addChild(stairsStage);
	// console.log("Create window: stairs");
}

/* Наложение маски */
function stairsMask()
{
	var posX = (MAIN_WIDTH - 800) / 2;
	var posY = (MAIN_HEIGH - 600) / 2.5;
	var thing = new PIXI.Graphics();
	//stage.addChild(thing);
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
}

function stairsBorder()
{
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
		if(language === "rus")
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
	// console.log("Stairs Enemy (Right window): " + qGlobalEnemiesAI[fighterIndex].ai_name);
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
		if(language === "rus")
		{
			stairsTextLeftWindow = new PIXI.Text(fightersTextRus[i], stairsStyleText);
			stairsTextLeftWindow.x = 55;
			stairsTextLeftWindow.y = 25 + (50 * i);
			stairsLeftWindowSprite.addChild(stairsTextLeftWindow);

			if(qGlobalExperiencePoints === 0) stairsTextLeftWindow = new PIXI.Text(fightersHits[i], stairsStyleText);
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

			if(qGlobalExperiencePoints === 0) stairsTextLeftWindow = new PIXI.Text(fightersHits[i], stairsStyleText);
			else stairsTextLeftWindow = new PIXI.Text(fightersHitsUpdate[i], stairsStyleText);
			stairsTextLeftWindow.x = 140;
			stairsTextLeftWindow.y = 25 + (50 * i);
			stairsUserCharacteres.push(stairsTextLeftWindow);
			stairsLeftWindowSprite.addChild(stairsUserCharacteres[stairsUserCharacteres.length - 1]);
		}
	}



	stairsWindowStage.addChild(stairsLeftWindowSprite);
	stairsStage.addChild(stairsWindowStage);
	// console.log("Stairs User (Left window): " + qGlobalUserFighterName);
}

/* Создание панели кнопок плюс для левого окна характеристик */
function createStairsButtonPlus()
{
	if(qGlobalExperiencePoints !== 0) 
	{
		stairsPanelButtonPlus = new PIXI.Container();
		stairsButtonsPlus = [];

		var stairsButtonPlus;
		for(var i = 0; i < 5; i++)
		{
			stairsButtonPlus = new PIXI.Sprite(buttonPlusTextures);
			stairsButtonPlus.name = "buttonPlus"+i;
			stairsButtonPlus.position.x = 163;
			stairsButtonPlus.position.y = 12 + (50 * i);
			stairsButtonPlus.interactive = true;
			stairsButtonPlus.buttonMode = true;

			stairsButtonPlus.tap = onStairsButtonClick;
			stairsButtonPlus.click = onStairsButtonClick;
			stairsButtonPlus.on('mousedown', onStairsButtonDown);
			stairsButtonPlus.on('touchstart', onStairsButtonDown);
			stairsButtonPlus.on('mouseup', onStairsButtonUp);
			stairsButtonPlus.on('touchend', onStairsButtonUp);
			stairsButtonPlus.on('mouseupoutside', onStairsButtonUp);
			stairsButtonPlus.on('touchendoutside', onStairsButtonUp);

			stairsButtonsPlus.push(stairsButtonPlus);
			if(i===0 & qGlobalUserHit1 < DAMAGE_MAX_HIT_1) stairsPanelButtonPlus.addChild(stairsButtonsPlus[stairsButtonsPlus.length -1]);
			if(i===1 & qGlobalUserHit2 < DAMAGE_MAX_HIT_2) stairsPanelButtonPlus.addChild(stairsButtonsPlus[stairsButtonsPlus.length -1]);
			if(i===2 & qGlobalUserHit3 < DAMAGE_MAX_HIT_3) stairsPanelButtonPlus.addChild(stairsButtonsPlus[stairsButtonsPlus.length -1]);
			if(i===3 & qGlobalUserHit4 < DAMAGE_MAX_HIT_4) stairsPanelButtonPlus.addChild(stairsButtonsPlus[stairsButtonsPlus.length -1]);
			if(i===4 & qGlobalUserHit5 < DAMAGE_MAX_HIT_5) stairsPanelButtonPlus.addChild(stairsButtonsPlus[stairsButtonsPlus.length -1]);
		}
		stairsLeftWindowSprite.addChild(stairsPanelButtonPlus);
	}
}

function removeStairsButtonPlus()
{
	var hits = ["5  x " + qGlobalUserHit1, "3  x " + qGlobalUserHit2, "3  x " + qGlobalUserHit3, "6  x " + qGlobalUserHit4, "10  x " + qGlobalUserHit5];
	if(qGlobalExperiencePoints === 0 || (qGlobalUserHit1 + qGlobalUserHit2 + qGlobalUserHit3 + qGlobalUserHit4 + qGlobalUserHit5) === 38)
	{
		stairsLeftWindowSprite.removeChild(stairsPanelButtonPlus);
		for(var i = 0; i < hits.length; i++)
		{
			stairsUserCharacteres[i].text = hits[i];
		}
	}
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
		if(language === "rus")
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
		stairsSpriteButton.buttonMode = true;

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
	if(this.name === "Back in menu")
	{
		stage.removeChild(stairsStage);
		menuShow(); 	// MENU SHOW
	}
	if(this.name === "Settings")
	{
		qwindowCreate(QWINDOW_TYPE_SETTINGS);
	}
	if(this.name === "Invite")
	{
		
	}
	if(this.name === "Fight")
	{
		stage.removeChild(stairsStage);
		levelShow();	// LEVEL SHOW
	}
	if(this.name === "buttonPlus0")
	{
		if(qGlobalUserHit1 < DAMAGE_MAX_HIT_1){
			qGlobalUserHit1++;
			qGlobalExperiencePoints--;
			stairsUserCharacteres[0].text = "x " + qGlobalUserHit1;	
			if(qGlobalUserHit1 >= DAMAGE_MAX_HIT_1) stairsPanelButtonPlus.removeChild(stairsButtonsPlus[0]);
		}
		removeStairsButtonPlus();
	}
	if(this.name === "buttonPlus1")
	{
		if(qGlobalUserHit2 < DAMAGE_MAX_HIT_2){
			qGlobalUserHit2++;
			qGlobalExperiencePoints--;
			stairsUserCharacteres[1].text = "x " + qGlobalUserHit2;	
			if(qGlobalUserHit2 >= DAMAGE_MAX_HIT_2) stairsPanelButtonPlus.removeChild(stairsButtonsPlus[1]);
		}
		removeStairsButtonPlus();
	}
	if(this.name === "buttonPlus2")
	{
		if(qGlobalUserHit3 < DAMAGE_MAX_HIT_3){
			qGlobalUserHit3++;
			qGlobalExperiencePoints--;
			stairsUserCharacteres[2].text = "x " + qGlobalUserHit3;	
			if(qGlobalUserHit3 >= DAMAGE_MAX_HIT_3) stairsPanelButtonPlus.removeChild(stairsButtonsPlus[2]);
		}
		removeStairsButtonPlus();
	}
	if(this.name === "buttonPlus3")
	{
		if(qGlobalUserHit4 < DAMAGE_MAX_HIT_4){
			qGlobalUserHit4++;
			qGlobalExperiencePoints--;
			stairsUserCharacteres[3].text = "x " + qGlobalUserHit4;	
			if(qGlobalUserHit4 >= DAMAGE_MAX_HIT_4) stairsPanelButtonPlus.removeChild(stairsButtonsPlus[3]);
		}
		removeStairsButtonPlus();
	}
	if(this.name === "buttonPlus4")
	{
		if(qGlobalUserHit5 < DAMAGE_MAX_HIT_5){
			qGlobalUserHit5++;
			qGlobalExperiencePoints--;
			stairsUserCharacteres[4].text = "x " + qGlobalUserHit5;	
			if(qGlobalUserHit5 >= DAMAGE_MAX_HIT_5) stairsPanelButtonPlus.removeChild(stairsButtonsPlus[4]);
		}
		removeStairsButtonPlus();
	}
	// console.log("Stairs click button: " + this.name);
}

/* Столбец иконок противников и иконка бойца игрока */
function createStairsIcons()
{
	stairsFightersIcons = new PIXI.Container();

	var icon;
	var stairsUpSprite;
	for (var i = 0; i < qGlobalEnemiesAI.length - 1; i++)
	{
		icon = new PIXI.Sprite(iconsFightersAll[qGlobalEnemiesAI[i].ai_name]);
		icon.position.x = 440;
		icon.position.y = 615 + (95 * i);
		icon.scale.set(0.85);
		stairsFightersIcons.addChild(icon);

		stairsUpSprite = new PIXI.Sprite(stairsUpTextures);
		stairsUpSprite.position.x = 335;
		stairsUpSprite.position.y = 600  + (95 * i);
		stairsFightersIcons.addChild(stairsUpSprite);
	}

	icon = new PIXI.Sprite(iconsFightersAll[qGlobalEnemiesAI[qGlobalEnemiesAI.length - 1].ai_name]);
	icon.position.x = 440;
	icon.position.y = 615 + (87.5 * qGlobalEnemiesAI.length);
	icon.scale.set(0.85);
	stairsFightersIcons.addChild(icon);

	var stairsDownSprite = new PIXI.Sprite(stairsDownTextures);
	stairsDownSprite.position.x = 275;
	stairsDownSprite.position.y = 600  + (87.5 * qGlobalEnemiesAI.length);
	stairsFightersIcons.addChild(stairsDownSprite);

	stairsWindowStage.addChild(stairsFightersIcons);

	stairsUserIcon = new PIXI.Sprite(iconsFightersAll[qGlobalUserFighterName]);
	stairsUserIcon.position.x = 360;
	stairsUserIcon.position.y = 505;
	stairsUserIcon.scale.set(0.85);
	stairsWindowStage.addChild(stairsUserIcon);

	
	// console.log("Stairs Fighters Icons");
}

/* Выполнение аминации, перемещения */
function stairsTween()
{
	// Перемещение левого и правого окна характеристик
	createjs.Tween.get(stairsRightWindowSprite, {loop: false})
		.to({x: 580}, 1000, createjs.Ease.getPowInOut(4));
		//.to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
		//.to({alpha: 0, y: 125}, 100)
		//.to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
		//.to({x: 100}, 800, createjs.Ease.getPowInOut(2));
	createjs.Tween.get(stairsLeftWindowSprite, {loop: false})
		.to({x: 75}, 1000, createjs.Ease.getPowInOut(4));

	// Перемещение лестницы бойцов
	var stairsPosition = [[0,-205,-110],[0,-300,-205],[0,-395,-300],[0,-490,-395],[0,-585,-490],[0,-680,-585],[0,-775,-680],[0,-870,-775],[0,-965,-870],[0,-1060,-965],[0,-1155,-1060],[0,-1250,-1155],[0,0,-1250]]; // [x][y][yMove]
	stairsFightersIcons.position.y = stairsPosition[qGlobalTournamentProgress][1];
	createjs.Tween.get(stairsFightersIcons, {loop: false})
		.to({x: stairsPosition[qGlobalTournamentProgress][0], y: stairsPosition[qGlobalTournamentProgress][2]}, 5000, createjs.Ease.getPowInOut(1));

    createjs.Ticker.setFPS(60);
    //createjs.Ticker.addEventListener("tick", stage);
}