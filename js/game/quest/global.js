/* Характеристики пользователя */
var globalUserFighterName;					// Имя бойца пользователя
var globalUserHit1 = 0;						// Удар ногой
var globalUserHit2 = 0;						// Удар рукой
var globalUserHit3 = 0;						// Блок
var globalUserHit4 = 0;						// Апперкот
var globalUserHit5 = 0;						// С разворота
var globalUserLife = 200;					// количество жизни
var globalUserContinue = 9;					// количество повторов
var globalTournamentProgress = 12;			// Прогресс прохождения турника (индекс врага) с конца в начало
var globalExperiencePoints = 0;				// Очки опыта
var globalTotalPointsPlayerTournament = 0;	// Общие очки игрока за весь турнир
var globalTotalPointsPlayerLevel = 0;		// Общие очки игрока за уровень

/* Инициализация характеристик выбранного бойца */
function globalItinUserFighter()
{
	globalUserHit1 = globalFightersCharacteristics[globalUserFighterName][0];
	globalUserHit2 = globalFightersCharacteristics[globalUserFighterName][1];
	globalUserHit3 = globalFightersCharacteristics[globalUserFighterName][2];
	globalUserHit4 = globalFightersCharacteristics[globalUserFighterName][3];
	globalUserHit5 = globalFightersCharacteristics[globalUserFighterName][4];
	globalUserLife = 200;
	globalUserContinue = 9;
	globalTournamentProgress = 12;
	globalExperiencePoints = 0;
	globalTotalPointsPlayerTournament = 0;
	globalTotalPointsPlayerLevel = 0;
	console.log("GLOBAL[quest]: user init");
}

/* Очистка характеристик пользователя */
function globalClearUser()
{
	globalUserFighterName = null;
	globalUserHit1 = 0;
	globalUserHit2 = 0;
	globalUserHit3 = 0;
	globalUserHit4 = 0;
	globalUserHit5 = 0;
	globalUserLife = 200;
	globalUserContinue = 9;
	globalTournamentProgress = 12;
	globalExperiencePoints = 0;
	globalTotalPointsPlayerTournament = 0;
	globalTotalPointsPlayerLevel = 0;
	console.log("GLOBAL[quest]: user clear");
}


/* Характеристики всех бойцов по умолчанию */
var globalFightersCharacteristics; // 

/* Инициализация характеристик по умолчанию */
function globalInitFightersCharacteristics()
{
	globalFightersCharacteristics = new Object();
	globalFightersCharacteristics["shaokahn"] = [2,2,1,3,2,1200];
	globalFightersCharacteristics["goro"] = [2,2,2,2,2,1200];
	globalFightersCharacteristics["liukang"] = [2,1,1,1,2,0];
	globalFightersCharacteristics["kunglao"] = [1,2,1,2,1,0];
	globalFightersCharacteristics["johnnycage"] = [1,1,2,2,1,0];
	globalFightersCharacteristics["reptile"] = [1,1,1,2,2,0];
	globalFightersCharacteristics["subzero"] = [2,2,1,1,1,0];
	globalFightersCharacteristics["shangtsung"] = [1,1,1,3,1,0];
	globalFightersCharacteristics["kitana"] = [1,1,3,1,1,0];
	globalFightersCharacteristics["jax"] = [1,3,1,1,1,0];
	globalFightersCharacteristics["mileena"] = [1,2,2,1,1,0];
	globalFightersCharacteristics["baraka"] = [1,1,1,1,3,0];
	globalFightersCharacteristics["scorpion"] = [3,1,1,1,1,0];
	globalFightersCharacteristics["raiden"] = [2,1,2,1,2,0];
	console.log("GLOBAL[quest]: init fighters characteristics");
}

/* Характеристики ИИ */
var globalEnemiesAI;

/* Уровни */
var globalLevels;

/* Обучение */
var globalTutorialStep = 1;