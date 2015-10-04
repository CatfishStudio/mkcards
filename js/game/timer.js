const TIMER_MAX_VALUE = 10;
const TIMER_MIN_VALUE = 0;

var timerStage;
var timerText;
var timerCount = TIMER_MAX_VALUE;
var timer;


var timerStyleText = {
    font : 'bold 36px Arial',
    fill : '#F7EDCA',
    stroke : '#500000',
    strokeThickness : 3,
    wordWrap : true,
    wordWrapWidth : 440
};

function timerShow(stageParent, posX, posY, backColor, borderColor, textColor)
{
	timerStage = new PIXI.Container();
	timerStage.position.x = posX;
	timerStage.position.y = posY;

	var graphics = new PIXI.Graphics();
	graphics.lineStyle(2, borderColor, 1);
	graphics.beginFill(backColor, 0.75);
	graphics.drawRoundedRect(0, 0, 50, 50, 15);
	graphics.endFill();

	timerStage.addChild(graphics);
	
	timerText = new PIXI.Text(timerCount, timerStyleText);
	timerText.x = 2.5;
	timerText.y = 2.5;
	timerStage.addChild(timerText);

	stageParent.addChild(timerStage);

	timer = setInterval(onTimerComplete, 1000);

	console.log("[TIMER] Create timer!");
}

function onTimerComplete()
{
	if(timerCount == TIMER_MIN_VALUE){	// таймер = минимум
		if(matchFieldBlocked == true)
		{
			matchFieldBlocked = false; 	// поле разблокированно
			modeAI = false;				// ИИ отключен
			console.log("[HIT]: USER наносит удар!");
		}else{
			matchFieldBlocked = true;	// поле заблокированно
			modeAI = true;				// ИИ включен
			matchCellColorBack();
			matchSelectUnit1 = null;
			matchSelectUnit2 = null;
			console.log("[HIT]: AI наносит удар!");
		}
		timerCount = TIMER_MAX_VALUE;	// устанавливаем максимальное значение таймера
		timerText.text = timerCount;	// показываем секунды
	}else{
		timerCount--;						// уменьшение таймера
		timerText.text = " " + timerCount;	// показываем секунды
	}
}

function timerStart()
{
	if(matchFieldBlocked == true)
	{
		matchFieldBlocked = false; 	// поле разблокированно
		modeAI = false;				// ИИ отключен
		console.log("[HIT]: USER наносит удар!");
	}else{
		matchFieldBlocked = true;	// поле заблокированно
		modeAI = true;				// ИИ включен
		matchCellColorBack();
		matchSelectUnit1 = null;
		matchSelectUnit2 = null;
		console.log("[HIT]: AI наносит удар!");
	}
	timerCount = TIMER_MAX_VALUE;	// устанавливаем максимальное значение таймера
	timerText.text = timerCount;	// показываем секунды
	timer = setInterval(onTimerComplete, 1000);	// запуск таймера
}

function timerStop()
{
	clearInterval(timer);
}