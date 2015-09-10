/*======================================================================================================================*/
/* Генератор случайных чисел */
function qGlobalRandomIndex()
{
	var indexRandom = Math.random() / 0.1;
	var index = Math.round(indexRandom);
	return index;
}
/*======================================================================================================================*/

/*======================================================================================================================*/
/* ХАРАКТЕРИСТИКИ ПОЛЬЗОВАТЕЛЯ */
var qGlobalUserFighterName;					// Имя бойца пользователя
var qGlobalUserHit1 = 0;					// Удар ногой
var qGlobalUserHit2 = 0;					// Удар рукой
var qGlobalUserHit3 = 0;					// Блок
var qGlobalUserHit4 = 0;					// Апперкот
var qGlobalUserHit5 = 0;					// С разворота
var qGlobalUserLife = 200;					// количество жизни
var qGlobalUserContinue = 9;				// количество повторов
var qGlobalTournamentProgress = 12;			// Прогресс прохождения турника (индекс врага) с конца в начало
var qGlobalExperiencePoints = 0;			// Очки опыта
var qGlobalTotalPointsPlayerTournament = 0;	// Общие очки игрока за весь турнир
var qGlobalTotalPointsPlayerLevel = 0;		// Общие очки игрока за уровень

/* Инициализация характеристик выбранного бойца */
function qGlobalItinUserFighter()
{
	qGlobalUserHit1 = qGlobalFightersCharacteristics[qGlobalUserFighterName][0];
	qGlobalUserHit2 = qGlobalFightersCharacteristics[qGlobalUserFighterName][1];
	qGlobalUserHit3 = qGlobalFightersCharacteristics[qGlobalUserFighterName][2];
	qGlobalUserHit4 = qGlobalFightersCharacteristics[qGlobalUserFighterName][3];
	qGlobalUserHit5 = qGlobalFightersCharacteristics[qGlobalUserFighterName][4];
	qGlobalUserLife = 200;
	qGlobalUserContinue = 9;
	qGlobalTournamentProgress = 12;
	qGlobalExperiencePoints = 1;
	qGlobalTotalPointsPlayerTournament = 0;
	qGlobalTotalPointsPlayerLevel = 0;
	console.log("GLOBAL[quest]: user init");
}

/* Очистка характеристик пользователя */
function qGlobalClearUser()
{
	qGlobalUserFighterName = null;
	qGlobalUserHit1 = 0;
	qGlobalUserHit2 = 0;
	qGlobalUserHit3 = 0;
	qGlobalUserHit4 = 0;
	qGlobalUserHit5 = 0;
	qGlobalUserLife = 200;
	qGlobalUserContinue = 9;
	qGlobalTournamentProgress = 12;
	qGlobalExperiencePoints = 0;
	qGlobalTotalPointsPlayerTournament = 0;
	qGlobalTotalPointsPlayerLevel = 0;
	console.log("GLOBAL[quest]: user clear");
}
/*======================================================================================================================*/

/*======================================================================================================================*/
/* ХАРАКТЕРИСТИКИ ВСЕХ БОЙЦОВ ПО УМОЛЧАНИМЮ  */
var qGlobalFightersCharacteristics; 		// Список характеристик по умолчанию

/* Инициализация характеристик по умолчанию */
function qGlobalInitFightersCharacteristics()
{
	qGlobalFightersCharacteristics = new Object();
	qGlobalFightersCharacteristics["shaokahn"] = [2,2,1,3,2,1200];
	qGlobalFightersCharacteristics["goro"] = [2,2,2,2,2,1200];
	qGlobalFightersCharacteristics["liukang"] = [2,1,1,1,2,200];
	qGlobalFightersCharacteristics["kunglao"] = [1,2,1,2,1,200];
	qGlobalFightersCharacteristics["johnnycage"] = [1,1,2,2,1,200];
	qGlobalFightersCharacteristics["reptile"] = [1,1,1,2,2,200];
	qGlobalFightersCharacteristics["subzero"] = [2,2,1,1,1,200];
	qGlobalFightersCharacteristics["shangtsung"] = [1,1,1,3,1,200];
	qGlobalFightersCharacteristics["kitana"] = [1,1,3,1,1,200];
	qGlobalFightersCharacteristics["jax"] = [1,3,1,1,1,200];
	qGlobalFightersCharacteristics["mileena"] = [1,2,2,1,1,200];
	qGlobalFightersCharacteristics["baraka"] = [1,1,1,1,3,200];
	qGlobalFightersCharacteristics["scorpion"] = [3,1,1,1,1,200];
	qGlobalFightersCharacteristics["raiden"] = [2,1,2,1,2,200];
	console.log("GLOBAL[quest]: init fighters characteristics");
}
/*======================================================================================================================*/

/*======================================================================================================================*/
/* ХАРАКТЕРИСТИКИ ИИ */
var qGlobalEnemiesAI = [];				// Список всех врагов
var qGlobalEnemy = function()			// Класс врага
{
	var that = {
    	ai_name : null,
    	ai_hit_1 : 0,
    	ai_hit_2 : 0,
    	ai_hit_3 : 0,
		ai_hit_4 : 0,
		ai_hit_5 : 0,
		ai_life : 0
	};
	return that;
};

/*  Инициализация списка врагов */
function qGlobalInitEnemiesAI()
{
	var fightersName = ["liukang", "kunglao", "johnnycage", "reptile", "subzero", "shangtsung", "kitana", "jax", "mileena", "baraka", "scorpion", "raiden"];
	var EnemiesAI = [];
	var qGE;

	for (var i = 0; i < fightersName.length; i++)
	{
		if(fightersName[i] != qGlobalUserFighterName)
		{
			qGE = new qGlobalEnemy();
			qGE.ai_name = fightersName[i];
			qGE.ai_hit_1 = qGlobalFightersCharacteristics[fightersName[i]][0];
			qGE.ai_hit_2 = qGlobalFightersCharacteristics[fightersName[i]][1];
			qGE.ai_hit_3 = qGlobalFightersCharacteristics[fightersName[i]][2];
			qGE.ai_hit_4 = qGlobalFightersCharacteristics[fightersName[i]][3];
			qGE.ai_hit_5 = qGlobalFightersCharacteristics[fightersName[i]][4];
			qGE.ai_life = qGlobalFightersCharacteristics[fightersName[i]][5];
			EnemiesAI.push(qGE);
			console.log("GLOBAL[quest][AI][EnemiesAI]: " + EnemiesAI[EnemiesAI.length - 1].ai_name + " LIFE: " + EnemiesAI[EnemiesAI.length - 1].ai_life);
		}
	}

	qGlobalEnemiesAI = [];

	qGE = new qGlobalEnemy();
	qGE.ai_name = "shaokahn";
	qGE.ai_hit_1 = qGlobalFightersCharacteristics["shaokahn"][0];
	qGE.ai_hit_2 = qGlobalFightersCharacteristics["shaokahn"][1];
	qGE.ai_hit_3 = qGlobalFightersCharacteristics["shaokahn"][2];
	qGE.ai_hit_4 = qGlobalFightersCharacteristics["shaokahn"][3];
	qGE.ai_hit_5 = qGlobalFightersCharacteristics["shaokahn"][4];
	qGE.ai_life = qGlobalFightersCharacteristics["shaokahn"][5];
	qGlobalEnemiesAI.push(qGE);
	console.log("GLOBAL[quest][AI][qGlobalEnemiesAI]: " + qGlobalEnemiesAI[0].ai_name + " LIFE: " + qGlobalEnemiesAI[0].ai_life + "  HIT1:" + qGlobalEnemiesAI[0].ai_hit_1+ "  HIT2:" + qGlobalEnemiesAI[0].ai_hit_2+ "  HIT3:" + qGlobalEnemiesAI[0].ai_hit_3+ "  HIT4:" + qGlobalEnemiesAI[0].ai_hit_4+ "  HIT5:" + qGlobalEnemiesAI[0].ai_hit_5);

	qGE = new qGlobalEnemy();
	qGE.ai_name = "goro";
	qGE.ai_hit_1 = qGlobalFightersCharacteristics["goro"][0];
	qGE.ai_hit_2 = qGlobalFightersCharacteristics["goro"][1];
	qGE.ai_hit_3 = qGlobalFightersCharacteristics["goro"][2];
	qGE.ai_hit_4 = qGlobalFightersCharacteristics["goro"][3];
	qGE.ai_hit_5 = qGlobalFightersCharacteristics["goro"][4];
	qGE.ai_life = qGlobalFightersCharacteristics["goro"][5];
	qGlobalEnemiesAI.push(qGE);
	console.log("GLOBAL[quest][AI][qGlobalEnemiesAI]: " + qGlobalEnemiesAI[1].ai_name + " LIFE: " + qGlobalEnemiesAI[1].ai_life + "  HIT1:" + qGlobalEnemiesAI[1].ai_hit_1+ "  HIT2:" + qGlobalEnemiesAI[1].ai_hit_2+ "  HIT3:" + qGlobalEnemiesAI[1].ai_hit_3+ "  HIT4:" + qGlobalEnemiesAI[1].ai_hit_4+ "  HIT5:" + qGlobalEnemiesAI[1].ai_hit_5);

	for (var k = EnemiesAI.length; k > 0 ; k--)
	{
		var index = qGlobalRandomIndexEnemies(k);
		EnemiesAI[index].ai_life += 50 * (k - 1) *2;
		qGlobalEnemiesAI.push(EnemiesAI[index]);
		console.log("GLOBAL[quest][AI][EnemiesAI -> qGlobalEnemiesAI]: " + EnemiesAI[index].ai_name + " LIFE: " + EnemiesAI[index].ai_life + "  HIT1:" + EnemiesAI[index].ai_hit_1+ "  HIT2:" + EnemiesAI[index].ai_hit_2+ "  HIT3:" + EnemiesAI[index].ai_hit_3+ "  HIT4:" + EnemiesAI[index].ai_hit_4+ "  HIT5:" + EnemiesAI[index].ai_hit_5);
		EnemiesAI.splice(index, 1);
	}
}

/* Генератор случайного индекса врага */
function qGlobalRandomIndexEnemies(_count)
{
	var index = qGlobalRandomIndex();
	var result = Math.round((index * _count) * 0.1);
	if(result == _count) result--;
	return result;
}

/*  Инициализация прокачки ИИ в соответствии с уровнем */
function qGlobalInitEnemiesCharacteristics()
{
	var index = 0;
	var experiencePoints = 0;
	var n = qGlobalEnemiesAI.length - 1;
	for(var i = n; i >=0; i--)
	{
		experiencePoints = 13 - i;
		for(var j = 0; j < experiencePoints; j++)
		{
			index = qGlobalRandomIndexEnemiesCharacteristics();
			if (index == 1) qGlobalEnemiesAI[i].ai_hit_1++;
			if (index == 2) qGlobalEnemiesAI[i].ai_hit_2++;
			if (index == 3) qGlobalEnemiesAI[i].ai_hit_3++;
			if (index == 4) qGlobalEnemiesAI[i].ai_hit_4++;
			if (index == 5) qGlobalEnemiesAI[i].ai_hit_5++;
		}
		console.log("GLOBAL[quest][AI][Characteristics ++ " + experiencePoints + " ]: " + qGlobalEnemiesAI[i].ai_name + "  HIT1:" + qGlobalEnemiesAI[i].ai_hit_1+ "  HIT2:" + qGlobalEnemiesAI[i].ai_hit_2+ "  HIT3:" + qGlobalEnemiesAI[i].ai_hit_3+ "  HIT4:" + qGlobalEnemiesAI[i].ai_hit_4+ "  HIT5:" + qGlobalEnemiesAI[i].ai_hit_5);
	}
}

/* Генератор случайных чисел прокачки характеристик */
function qGlobalRandomIndexEnemiesCharacteristics()
{
	var index = qGlobalRandomIndex();
	if (index > 0 && index <= 2) return 1;
	if (index > 2 && index <= 4) return 2;
	if (index > 4 && index <= 6) return 3;
	if (index > 6 && index <= 8) return 4;
	if (index > 8 && index <= 10) return 5;
}
/*======================================================================================================================*/

/*======================================================================================================================*/
/* УРОВНИ */
var qGlobalLevels = [];					// Список всех уровней
var qGlobalLevel = function()			// Класс уровня
{
	var that = {
    	levelField : null,
    	backgroundTexture : null
    };
	return that;
};

/* Инициализация уровней */
function qGlobalInitLevels()
{
	var tLevels = [];
	var fLevels = [];

	for (var i = 0; i < texuresLevels.length; i++)
	{
		tLevels.push(texuresLevels[i]);
		fLevels.push(fieldLevels[i]);
	}	

	qGlobalLevels = [];

	for (var k = fLevels.length; k > 0 ; k--)
	{
		var index = qGlobalRandomIndexLevels(k);
		var qGL = new qGlobalLevel();
		qGL.levelField = fLevels[index];
		fLevels.splice(index, 1);

		index = qGlobalRandomIndexLevels(k);
		qGL.backgroundTexture = tLevels[index];
		tLevels.splice(index, 1);

		qGlobalLevels.push(qGL);
		console.log("GLOBAL[quest][Levels] Level : " + qGlobalLevels[qGlobalLevels.length - 1].levelField.data.Level.LevelNumber + "  Background : " + index);
	}

	/*
	console.log("SUPER " + fieldLevels[fieldLevels.length - 1].data.Level.LevelType);
	console.log("SUPER " + fieldLevels[fieldLevels.length - 1].data.Level.cell[0].cellObject);
	*/
}

/* Генератор случайного индекса уровней */
function qGlobalRandomIndexLevels(_count)
{
	var index = qGlobalRandomIndex();
	var result = Math.round((index * _count) * 0.1);
	if(result == _count) result--;
	return result;
}

/*======================================================================================================================*/

/*======================================================================================================================*/
/* ОБУЧЕНИЕ */
var qGlobalTutorialStep = 1;

/*======================================================================================================================*/