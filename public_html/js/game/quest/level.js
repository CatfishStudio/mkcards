var levelStage;					// главный stage
var levelWindowStage;			// stage окна
var levelAnimationLeftFighter;	// Анимация левого бойца (пользователь)
var levelAnimationRightFighter;	// Анимация правого бойца (ИИ)

var levelAIName = null;
var levelAIHit1 = 0;
var levelAIHit1 = 0;
var levelAIHit1 = 0;
var levelAIHit1 = 0;
var levelAIHit1 = 0;
var levelAILife = 0;

var levelUserBlock = false;
var levelAIBlock = false; 

var levelStyleText = {
    font : 'bold 13px Arial',
    fill : '#FFFFFF'
};

/* Главная функция =============================================================== */
function levelShow()
{
	levelStage = new PIXI.Container();
	levelWindowStage = new PIXI.Container();

	levelInitFighters();

	levelBackground();
	qlifebarShow(levelWindowStage, 0, 0);
	createLevelAnimationFighters();
	levelBorder();
	createLevelField();
	createLevelButton();
	qtimerShow(levelWindowStage, (MAIN_WIDTH / 2 - 25), 65, 0x000000, 0x000000, 0xFFFFFF);

	levelMask();

	levelStage.addChild(levelWindowStage);
	stage.addChild(levelStage);
	// console.log("Create window: level");
}
/* =========================================================================== */

/* Инициализация характеристик бойцов ================================================= */
function levelInitFighters()
{
	levelAIName = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_name;
	levelAIHit1 = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_hit_1;
	levelAIHit2 = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_hit_2;
	levelAIHit3 = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_hit_3;
	levelAIHit4 = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_hit_4;
	levelAIHit5 = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_hit_5;
	levelAILife = qGlobalEnemiesAI[qGlobalTournamentProgress].ai_life;
}
/* =========================================================================== */

/* Наложение маски =============================================================== */
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
/* =========================================================================== */

/* Наложение фоновой картинки и рамки ================================================= */
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
/* =========================================================================== */

/* Создание анимации бойцов ======================================================== */
function createLevelAnimationFighters()
{
	var leftFighterWidth = animFightersTextures[qGlobalUserFighterName + ":STANCE:LEFT_TO_RIGHT"][0].width;
	var leftFighterHeight = animFightersTextures[qGlobalUserFighterName + ":STANCE:LEFT_TO_RIGHT"][0].height;

	levelAnimationLeftFighter = new PIXI.extras.MovieClip(animFightersTextures[qGlobalUserFighterName + ":STANCE:LEFT_TO_RIGHT"]);
	levelAnimationLeftFighter.position.x = 125 - leftFighterWidth;
	levelAnimationLeftFighter.position.y = MAIN_HEIGH - leftFighterHeight - 180;
	levelAnimationLeftFighter.scale.x += 0.5;
	levelAnimationLeftFighter.scale.y += 0.5;
	levelAnimationLeftFighter.loop = false;
	levelAnimationLeftFighter.typeAnimation = "STANCE";
	levelAnimationLeftFighter.animationSpeed = 0.2;
	levelAnimationLeftFighter.onComplete = onLevelAnimationLeftFighterComplete;
	levelAnimationLeftFighter.play();
		
	levelWindowStage.addChild(levelAnimationLeftFighter);

	var rightFighterWidth = animFightersTextures[levelAIName + ":STANCE:LEFT_TO_RIGHT"][0].width;
	var rightFighterHeight = animFightersTextures[levelAIName + ":STANCE:LEFT_TO_RIGHT"][0].height;

	levelAnimationRightFighter = new PIXI.extras.MovieClip(animFightersTextures[levelAIName + ":STANCE:RIGHT_TO_LEFT"]);
	levelAnimationRightFighter.position.x = MAIN_WIDTH - rightFighterWidth - 100;
	levelAnimationRightFighter.position.y = MAIN_HEIGH - rightFighterHeight - 180;
	levelAnimationRightFighter.scale.x += 0.5;
	levelAnimationRightFighter.scale.y += 0.5;
	levelAnimationRightFighter.loop = false;
	levelAnimationRightFighter.typeAnimation = "STANCE";
	levelAnimationRightFighter.animationSpeed = 0.2;
	levelAnimationRightFighter.onComplete = onLevelAnimationRightFighterComplete;
	levelAnimationRightFighter.play();

	levelWindowStage.addChild(levelAnimationRightFighter);

	// console.log("level[animation]: " + qGlobalUserFighterName + " vs " + qGlobalEnemiesAI[qGlobalTournamentProgress].ai_name);
}
/* =========================================================================== */

/* АНИМАЦИЯ: Выполнение анимации удара, клока, урона ===================================== */
function levelUpdateAnimation(modeAI, hitType)
{
	if(modeAI === false) 																					// удар наносит пользователь
	{
		updateLevelAnimationLeftFighter(hitType);													// анимация пользователя
		if(levelAIBlock === false && hitType !== MATCH_HIT_3){
			updateLevelAnimationRightFighter("DAMAGE");	// ИИ получает повреждения только если не в блоке
			levelBloodAnimation(levelAnimationRightFighter, "FIGHTER_RIGHT");
		}
	}else{ 																											// удар наносит ИИ
		updateLevelAnimationRightFighter(hitType);													// анимация ИИ
		if(levelUserBlock === false && hitType !== MATCH_HIT_3) {
			updateLevelAnimationLeftFighter("DAMAGE"); 	// Пользователь получает повреждения только если не в блоке
			levelBloodAnimation(levelAnimationLeftFighter, "FIGHTER_LEFT");
		}
	}
}

/* Обновление анимации после хода */
function updateLevelAnimationLeftFighter(typeAnimation)
{
	var leftFighterWidth = animFightersTextures[qGlobalUserFighterName + ":" + typeAnimation + ":LEFT_TO_RIGHT"][0].width;
	var leftFighterHeight = animFightersTextures[qGlobalUserFighterName + ":" + typeAnimation + ":LEFT_TO_RIGHT"][0].height;

	if(typeAnimation === MATCH_HIT_3) levelUserBlock = true;	// включаем блок Пользователю
	
	levelAnimationLeftFighter.stop();
	levelAnimationLeftFighter.textures = animFightersTextures[qGlobalUserFighterName + ":" + typeAnimation + ":LEFT_TO_RIGHT"];
	levelAnimationLeftFighter.position.x = 125 - leftFighterWidth;
	levelAnimationLeftFighter.position.y = MAIN_HEIGH - leftFighterHeight - 180;
	levelAnimationLeftFighter.typeAnimation = typeAnimation;
	levelAnimationLeftFighter.gotoAndPlay(0);
}

function updateLevelAnimationRightFighter(typeAnimation)
{
	var rightFighterWidth = animFightersTextures[levelAIName + ":"+ typeAnimation +":RIGHT_TO_LEFT"][0].width;
	var rightFighterHeight = animFightersTextures[levelAIName + ":"+ typeAnimation +":RIGHT_TO_LEFT"][0].height;
	
	if(typeAnimation === MATCH_HIT_3) levelAIBlock = true;	// включаем блок ИИ

	levelAnimationRightFighter.stop();
	levelAnimationRightFighter.textures = animFightersTextures[levelAIName + ":"+ typeAnimation +":RIGHT_TO_LEFT"];
	levelAnimationRightFighter.position.x = MAIN_WIDTH - rightFighterWidth - 100;
	levelAnimationRightFighter.position.y = MAIN_HEIGH - rightFighterHeight - 180;
	levelAnimationRightFighter.typeAnimation = typeAnimation;
	levelAnimationRightFighter.gotoAndPlay(0);
}

/* События: завершена анимация */
function onLevelAnimationLeftFighterComplete()
{
	levelAnimationLeftFighter.stop();
	if(levelUserBlock === false) updateLevelAnimationLeftFighter("STANCE");		// возвращаемся в анимацию стойки если не активизирован блок
	else {
		if(this.typeAnimation !== MATCH_HIT_3) updateLevelAnimationLeftFighter("HIT_3");
	}
}

function onLevelAnimationRightFighterComplete()
{
	levelAnimationRightFighter.stop();
	if(levelAIBlock === false) updateLevelAnimationRightFighter("STANCE");			// возвращаемся в анимацию стойки если не активизирован блок
	else {
		if(this.typeAnimation !== MATCH_HIT_3) updateLevelAnimationRightFighter("HIT_3");
	}
}

function levelResetBlock(targetName)
{
	if(targetName === "USER" || targetName === "ALL")
	{
		levelUserBlock = false;
		updateLevelAnimationLeftFighter("STANCE");
	}
	if(targetName === "AI" || targetName === "ALL")
	{
		levelAIBlock = false;
		updateLevelAnimationRightFighter("STANCE");	
	}
	// console.log("level[blocks]: CLEAR!");
}

/* Анимация крови */
function levelBloodAnimation(fighter, type)
{
	var anim = new PIXI.extras.MovieClip(animTexBlood);
	if(type === "FIGHTER_LEFT")
	{
		anim.position.x = fighter.position.x - 75;
		anim.position.y = fighter.position.y - 45;
	}
	if(type === "FIGHTER_RIGHT")
	{
		anim.position.x = fighter.position.x - 50;
		anim.position.y = fighter.position.y - 45;
	}
	anim.loop = false;
	anim.animationSpeed = 0.2;
	anim.onComplete = onLevelAnimationBloodComplete;
	anim.play();
	levelStage.addChild(anim);
}

function onLevelAnimationBloodComplete()
{
	levelStage.removeChild(this);
}
/* =========================================================================== */

/* Создание игрового поля ========================================================== */
function createLevelField()
{
	createMatchField(qGlobalLevels[qGlobalTournamentProgress - 1].levelField);
	levelWindowStage.addChild(matchStage);
}
/* =========================================================================== */

/* Создание основных кнопок окна ===================================================== */
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
		if(language === "rus")
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
	if(this.name === "Settings")
	{
		matchUpdateField();
	}
}
/* =========================================================================== */

/* ПРОГРЕСС: Уменьшение значений LifeBars ====================================================== */
function levelReduceLifeBar(hitType, hitCount, hitModeAI) 
{
	var hitOne = (200 / qGlobalUserLife);
	var hitPlus = hitOne * (hitCount - 3);
	// console.log("[LIFEBAR]: " + qGlobalUserFighterName);

	if(hitType === MATCH_HIT_1)
	{
		if(hitModeAI === false) qlifebarReduceRightBar((hitOne * DAMAGE_HIT_1) + hitPlus);
		else qlifebarReduceLeftBar((hitOne * DAMAGE_HIT_1) + hitPlus);
	}
	if(hitType === MATCH_HIT_2)
	{
		if(hitModeAI === false) qlifebarReduceRightBar((hitOne * DAMAGE_HIT_2) + hitPlus);
		else qlifebarReduceLeftBar((hitOne * DAMAGE_HIT_2) + hitPlus);
	}
	if(hitType === MATCH_HIT_3)
	{
		if(hitModeAI === false) qlifebarReduceRightBar((hitOne * DAMAGE_HIT_3) + hitPlus);
		else qlifebarReduceLeftBar((hitOne * DAMAGE_HIT_3) + hitPlus);
	}
	if(hitType === MATCH_HIT_4)
	{
		if(hitModeAI === false) qlifebarReduceRightBar((hitOne * DAMAGE_HIT_4) + hitPlus);
		else qlifebarReduceLeftBar((hitOne * DAMAGE_HIT_4) + hitPlus);
	}
	if(hitType === MATCH_HIT_5)
	{
		if(hitModeAI === false) qlifebarReduceRightBar((hitOne * DAMAGE_HIT_5) + hitPlus);
		else qlifebarReduceLeftBar((hitOne * DAMAGE_HIT_5) + hitPlus);
	}
}
/* =========================================================================== */
