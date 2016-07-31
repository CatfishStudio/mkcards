var Q_TIMER_MAX_VALUE = 10;
var Q_TIMER_MIN_VALUE = 0;

var qtimerStage;
var qtimerText;
var qtimerCount;
var qtimerPause;
var qtimer;


var qtimerStyleText = {
    font : 'bold 36px Arial',
    fill : '#F7EDCA',
    stroke : '#500000',
    strokeThickness : 3,
    wordWrap : true,
    wordWrapWidth : 440
};

function qtimerShow(stageParent, posX, posY, backColor, borderColor, textColor)
{
        qtimerPause = false;
    
	qtimerCount = Q_TIMER_MAX_VALUE;
	
	qtimerStage = new PIXI.Container();
	qtimerStage.position.x = posX;
	qtimerStage.position.y = posY;

	var graphics = new PIXI.Graphics();
	graphics.lineStyle(2, borderColor, 1);
	graphics.beginFill(backColor, 0.75);
	graphics.drawRoundedRect(0, 0, 50, 50, 15);
	graphics.endFill();

	qtimerStage.addChild(graphics);
	
	qtimerText = new PIXI.Text(qtimerCount, qtimerStyleText);
	qtimerText.x = 2.5;
	qtimerText.y = 2.5;
	qtimerStage.addChild(qtimerText);

	stageParent.addChild(qtimerStage);

	if(qtimerPause === false) qtimer = setInterval(onQTimerComplete, 1000);

	// console.log("[TIMER] Create timer!");
}

function qtimerRemove() 
{
	qtimerStop();
	levelStage.removeChild(qtimerStage); 
	qtimerStage = null; 
}

function onQTimerComplete()
{
	if(qtimerCount === Q_TIMER_MIN_VALUE){	// таймер = минимум
	
		levelResetBlock("ALL");
	
		if(modeAI === true)
		{
			matchFieldBlocked = false; 	// поле разблокированно
			modeAI = false;				// ИИ отключен
			// console.log("[HIT]: USER наносит удар!");
		}else{
			matchFieldBlocked = true;	// поле заблокированно
			modeAI = true;				// ИИ включен
			matchCellColorBack();
			matchSelectUnit1 = null;
			matchSelectUnit2 = null;
			// console.log("[HIT]: AI наносит удар!");
		}
		qtimerCount = Q_TIMER_MAX_VALUE;	// устанавливаем максимальное значение таймера
		qtimerText.text = qtimerCount;	// показываем секунды
	}else{
		qtimerCount--;						// уменьшение таймера
		qtimerText.text = " " + qtimerCount;	// показываем секунды
		if(modeAI === true && qtimerCount === 8) { matchActionAI();}
	}
}

function qtimerStart()
{
	if(modeAI === true)
	{
		matchFieldBlocked = false; 	// поле разблокированно
		modeAI = false;					// ИИ отключен
		levelResetBlock("USER");		// убираем блок с Пользователя
		// console.log("[HIT START]: USER наносит удар!");
	}else{
		matchFieldBlocked = true;		// поле заблокированно
		modeAI = true;					// ИИ включен
		levelResetBlock("AI");			// убираем блок с ИИЫ
		matchCellColorBack();
		matchSelectUnit1 = null;
		matchSelectUnit2 = null;
		// console.log("[HIT START]: AI наносит удар!");
	}
	qtimerCount = Q_TIMER_MAX_VALUE;	// устанавливаем максимальное значение таймера
	qtimerText.text = qtimerCount;	// показываем секунды
	if(qtimerPause === false) qtimer = setInterval(onQTimerComplete, 1000);	// запуск таймера
}

function qtimerStop()
{
	clearInterval(qtimer);
}

function qtimerPauseBegin()
{
        qtimerPause = true;
        if(levelStage != null) clearInterval(qtimer);
}

function qtimerPauseEnd()
{
        qtimerPause = false;
	if(levelStage != null) qtimer = setInterval(onQTimerComplete, 1000);
}

