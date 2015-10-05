var levelStage;					// главный stage
var levelWindowStage;			// stage окна
var levelAnimationLeftFighter;	// Анимация левого бойца (пользователь)
var levelAnimationRightFighter;	// Анимация правого бойца (ИИ)

var levelStyleText = {
    font : 'bold 13px Arial',
    fill : '#FFFFFF'
};

/* Главная функция */
function levelShow()
{
	levelStage = new PIXI.Container();
	levelWindowStage = new PIXI.Container();

	levelBackground();
	createLevelAnimationFighters();
	levelBorder();
	createLevelField();
	createLevelButton();
	qtimerShow(levelWindowStage, (MAIN_WIDTH / 2 - 25), 65, 0x000000, 0x000000, 0xFFFFFF);

	levelMask();

	levelStage.addChild(levelWindowStage);
	stage.addChild(levelStage);
	console.log("Create window: level");
}

/* Наложение маски */
function levelMask()
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
        
	levelWindowStage.mask = thing;
}

/* Наложение фоновой картинки и рамки */
function levelBackground()
{
	var background = new PIXI.Sprite(qGlobalLevels[qGlobalTournamentProgress - 1].backgroundTexture);
	background.name = "stairsBackground";
	background.position.x = (MAIN_WIDTH - 800) / 2;
	background.position.y = (MAIN_HEIGH - 600) / 2.5;
	background.scale.x += 1.0;
	background.scale.y += 1.35;
	levelWindowStage.addChild(background);
}

function levelBorder()
{
	var border = new PIXI.Sprite(borderTexture);
	border.name = "stairsBorder";
	border.position.x = (MAIN_WIDTH - 800) / 2;
	border.position.y = (MAIN_HEIGH - 600) / 2.5;
	levelWindowStage.addChild(border);
}

/* Создание анимации бойцов */
function createLevelAnimationFighters()
{
	if(qGlobalUserFighterName == "liukang") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexLiukangStanceLeftToRight); }
	if(qGlobalUserFighterName == "kunglao") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexKunglaoStanceLeftToRight); }
	if(qGlobalUserFighterName == "johnnycage") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexJohnnycageStanceLeftToRight); }
	if(qGlobalUserFighterName == "reptile") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexReptileStanceLeftToRight); }
	if(qGlobalUserFighterName == "subzero") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexSubzeroStanceLeftToRight); }
	if(qGlobalUserFighterName == "shangtsung") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexShangtsungStanceLeftToRight); }
	if(qGlobalUserFighterName == "kitana") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexKitanaStanceLeftToRight); }
	if(qGlobalUserFighterName == "jax") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexJaxStanceLeftToRight); }
	if(qGlobalUserFighterName == "mileena") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexMileenaStanceLeftToRight); }
	if(qGlobalUserFighterName == "baraka") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexBarakaStanceLeftToRight); }
	if(qGlobalUserFighterName == "scorpion") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexScorpionStanceLeftToRight); }
	if(qGlobalUserFighterName == "raiden") { levelAnimationLeftFighter = new PIXI.extras.MovieClip(animTexRaidenStanceLeftToRight); }
	
	levelAnimationLeftFighter.position.x = 50;
	levelAnimationLeftFighter.position.y = 425;
	levelAnimationLeftFighter.scale.x += 0.5;
	levelAnimationLeftFighter.scale.y += 0.5;
	levelAnimationLeftFighter.play();
	levelAnimationLeftFighter.animationSpeed = 0.2;
	levelWindowStage.addChild(levelAnimationLeftFighter);

	var aiName = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_name;
	if(aiName == "liukang") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexLiukangStanceRightToLeft); }
	if(aiName == "kunglao") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexKunglaoStanceRightToLeft); }
	if(aiName == "johnnycage") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexJohnnycageStanceRightToLeft); }
	if(aiName == "reptile") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexReptileStanceRightToLeft); }
	if(aiName == "subzero") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexSubzeroStanceRightToLeft); }
	if(aiName == "shangtsung") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexShangtsungStanceRightToLeft); }
	if(aiName == "kitana") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexKitanaStanceRightToLeft); }
	if(aiName == "jax") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexJaxStanceRightToLeft); }
	if(aiName == "mileena") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexMileenaStanceRightToLeft); }
	if(aiName == "baraka") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexBarakaStanceRightToLeft); }
	if(aiName == "scorpion") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexScorpionStanceRightToLeft); }
	if(aiName == "raiden") { levelAnimationRightFighter = new PIXI.extras.MovieClip(animTexRaidenStanceRightToLeft); }
	
	levelAnimationRightFighter.position.x = 700;
	levelAnimationRightFighter.position.y = 425;
	levelAnimationRightFighter.scale.x += 0.5;
	levelAnimationRightFighter.scale.y += 0.5;
	levelAnimationRightFighter.play();
	levelAnimationRightFighter.animationSpeed = 0.2;
	levelWindowStage.addChild(levelAnimationRightFighter);

	console.log("level[animation]: " + qGlobalUserFighterName + " vs " + qGlobalEnemiesAI[qGlobalTournamentProgress].ai_name);
}

/* Создание игрового поля */
function createLevelField()
{
	createMatchField(qGlobalLevels[qGlobalTournamentProgress - 1].levelField);
	levelWindowStage.addChild(matchStage);
}

/* Создание основных кнопок окна */
function createLevelButton()
{
	var levelSpriteButton;
	var levelTextButton;
	var textLevelButtonsRus = ["Выйти в меню","Настройки","Пригласить","Закончить битву"];
	var textLevelButtonsEng = ["Exit in menu","Settings","Invite","End fight"];
	var levelStyleTextButton = {
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
			levelTextButton = new PIXI.Text(textLevelButtonsRus[i], levelStyleTextButton);
		}else{
			levelTextButton = new PIXI.Text(textLevelButtonsEng[i], levelStyleTextButton);
		}
		levelTextButton.x = (170 / 2) - (levelTextButton.width / 2);
		levelTextButton.y = 20;

		levelSpriteButton = new PIXI.Sprite(buttonTexture);
		levelSpriteButton.name = textLevelButtonsEng[i];
		levelSpriteButton.position.x = 35 + (200 * i);
		levelSpriteButton.position.y = 650;
		levelSpriteButton.interactive = true;
		levelSpriteButton.buttonMode = true;

		levelSpriteButton.tap = onLevelButtonClick;
		levelSpriteButton.click = onLevelButtonClick;
		levelSpriteButton.on('mousedown', onLevelButtonDown);
		levelSpriteButton.on('touchstart', onLevelButtonDown);
		levelSpriteButton.on('mouseup', onLevelButtonUp);
		levelSpriteButton.on('touchend', onLevelButtonUp);
		levelSpriteButton.on('mouseupoutside', onLevelButtonUp);
		levelSpriteButton.on('touchendoutside', onLevelButtonUp);
		
		levelSpriteButton.addChild(levelTextButton);
		levelStage.addChild(levelSpriteButton);
	}
}

/* События кнопок */
function onLevelButtonDown()
{
    this.isdown = true;
    this.scale.set(0.95);
    this.position.x += 5; 
}

function onLevelButtonUp()
{
	if(this.isdown)
	{
    	this.isdown = false;
    	this.scale.set(1.0);
    	this.position.x -= 5;
    }
}

function onLevelButtonClick() 
{
	if(this.name == "Settings")
	{
		matchUpdateField();
	}
}