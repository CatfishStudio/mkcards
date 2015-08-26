/*======================================================================================================================*/
/* Вспомогательные функции */
function qGlobalRandomIndex()
{
	var indexRandom = Math.random();
	var index = Math.round(indexRandom);
	return index;
}
/*======================================================================================================================*/

/*======================================================================================================================*/
/* Характеристики пользователя */
var qGlobalUserFighterName;					// Имя бойца пользователя
var qGlobalUserHit1 = 0;						// Удар ногой
var qGlobalUserHit2 = 0;						// Удар рукой
var qGlobalUserHit3 = 0;						// Блок
var qGlobalUserHit4 = 0;						// Апперкот
var qGlobalUserHit5 = 0;						// С разворота
var qGlobalUserLife = 200;					// количество жизни
var qGlobalUserContinue = 9;					// количество повторов
var qGlobalTournamentProgress = 12;			// Прогресс прохождения турника (индекс врага) с конца в начало
var qGlobalExperiencePoints = 0;				// Очки опыта
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
	qGlobalExperiencePoints = 0;
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
/* Характеристики всех бойцов по умолчанию */
var qGlobalFightersCharacteristics; // 

/* Инициализация характеристик по умолчанию */
function qGlobalInitFightersCharacteristics()
{
	qGlobalFightersCharacteristics = new Object();
	qGlobalFightersCharacteristics["shaokahn"] = [2,2,1,3,2,1200];
	qGlobalFightersCharacteristics["goro"] = [2,2,2,2,2,1200];
	qGlobalFightersCharacteristics["liukang"] = [2,1,1,1,2,0];
	qGlobalFightersCharacteristics["kunglao"] = [1,2,1,2,1,0];
	qGlobalFightersCharacteristics["johnnycage"] = [1,1,2,2,1,0];
	qGlobalFightersCharacteristics["reptile"] = [1,1,1,2,2,0];
	qGlobalFightersCharacteristics["subzero"] = [2,2,1,1,1,0];
	qGlobalFightersCharacteristics["shangtsung"] = [1,1,1,3,1,0];
	qGlobalFightersCharacteristics["kitana"] = [1,1,3,1,1,0];
	qGlobalFightersCharacteristics["jax"] = [1,3,1,1,1,0];
	qGlobalFightersCharacteristics["mileena"] = [1,2,2,1,1,0];
	qGlobalFightersCharacteristics["baraka"] = [1,1,1,1,3,0];
	qGlobalFightersCharacteristics["scorpion"] = [3,1,1,1,1,0];
	qGlobalFightersCharacteristics["raiden"] = [2,1,2,1,2,0];
	console.log("GLOBAL[quest]: init fighters characteristics");
}
/*======================================================================================================================*/

/*======================================================================================================================*/
/* Характеристики ИИ */
var qGlobalEnemiesAI;
var qGlobalEnemy = {
    ai_name : null,
    ai_hit_1 : 0,
    ai_hit_2 : 0,
    ai_hit_3 : 0,
	ai_hit_4 : 0,
	ai_hit_5 : 0,
	ai_life : 0
};

/*  Инициализация списка врагов */
function qGlobalInitEnemiesAI()
{
	var fightersName = ["liukang", "kunglao", "johnnycage", "reptile", "subzero", "shangtsung", "kitana", "jax", "mileena", "baraka", "scorpion", "raiden"];
	var EnemiesAI = [];

	for (var i = 0; i < fightersName.length; i++)
	{
		if(fightersName[i] != qGlobalUserFighterName)
		{
			qGlobalEnemy.ai_name = fightersName[i];
			qGlobalEnemy.ai_hit_1 = qGlobalFightersCharacteristics[fightersName[i]][0];
			qGlobalEnemy.ai_hit_2 = qGlobalFightersCharacteristics[fightersName[i]][1];
			qGlobalEnemy.ai_hit_3 = qGlobalFightersCharacteristics[fightersName[i]][2];
			qGlobalEnemy.ai_hit_4 = qGlobalFightersCharacteristics[fightersName[i]][3];
			qGlobalEnemy.ai_hit_5 = qGlobalFightersCharacteristics[fightersName[i]][4];
			qGlobalEnemy.ai_life = qGlobalFightersCharacteristics[fightersName[i]][5];
			EnemiesAI.push(qGlobalEnemy);
			console.log("GLOBAL[quest][AI][EnemiesAI]: " + EnemiesAI[EnemiesAI.length - 1].ai_name + " LIFE: " + EnemiesAI[EnemiesAI.length - 1].ai_life);
		}
	}

	qGlobalEnemiesAI = [];

	qGlobalEnemy.ai_name = "shaokahn";
	qGlobalEnemy.ai_hit_1 = qGlobalFightersCharacteristics["shaokahn"][0];
	qGlobalEnemy.ai_hit_2 = qGlobalFightersCharacteristics["shaokahn"][1];
	qGlobalEnemy.ai_hit_3 = qGlobalFightersCharacteristics["shaokahn"][2];
	qGlobalEnemy.ai_hit_4 = qGlobalFightersCharacteristics["shaokahn"][3];
	qGlobalEnemy.ai_hit_5 = qGlobalFightersCharacteristics["shaokahn"][4];
	qGlobalEnemy.ai_life = qGlobalFightersCharacteristics["shaokahn"][5];
	qGlobalEnemiesAI.push(qGlobalEnemy);
	console.log("GLOBAL[quest][AI][qGlobalEnemiesAI]: " + qGlobalEnemiesAI[0].ai_name + " LIFE: " + qGlobalEnemiesAI[0].ai_life);

	qGlobalEnemy.ai_name = "goro";
	qGlobalEnemy.ai_hit_1 = qGlobalFightersCharacteristics["goro"][0];
	qGlobalEnemy.ai_hit_2 = qGlobalFightersCharacteristics["goro"][1];
	qGlobalEnemy.ai_hit_3 = qGlobalFightersCharacteristics["goro"][2];
	qGlobalEnemy.ai_hit_4 = qGlobalFightersCharacteristics["goro"][3];
	qGlobalEnemy.ai_hit_5 = qGlobalFightersCharacteristics["goro"][4];
	qGlobalEnemy.ai_life = qGlobalFightersCharacteristics["goro"][5];
	qGlobalEnemiesAI.push(qGlobalEnemy);
	console.log("GLOBAL[quest][AI][qGlobalEnemiesAI]: " + qGlobalEnemiesAI[1].ai_name + " LIFE: " + qGlobalEnemiesAI[1].ai_life);


}
/*======================================================================================================================*/

/*======================================================================================================================*/
/* Уровни */
var qGlobalLevels;

/*======================================================================================================================*/

/*======================================================================================================================*/
/* Обучение */
var qGlobalTutorialStep = 1;

/*======================================================================================================================*/