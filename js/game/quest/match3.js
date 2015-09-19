const MATCH_COLUMNS = 6;
const MATCH_ROWS = 6;
const MATCH_CELL_WIDTH = 82;
const MATCH_CELL_HEIGHT = 82;
const MATCH_CELL_TYPE_DROP = "CELL_TYPE_DROP";
const MATCH_CELL_TYPE_CLEAR = "CELL_TYPE_CLEAR";
const MATCH_CELL_TYPE_EMPTY = "CELL_TYPE_EMPTY";
const MATCH_HIT_0 = "HIT_0";
const MATCH_HIT_1 = "HIT_1";
const MATCH_HIT_2 = "HIT_2";
const MATCH_HIT_3 = "HIT_3";
const MATCH_HIT_4 = "HIT_4";
const MATCH_HIT_5 = "HIT_5";


var matchStage;						// главный stage
var matchMatrixCell = new Object();	// Матрица ячеек игрового поля
var matchMatrixUnit = new Object();	// Матрица юнитов на игровом поле

var matchMatrixFrontPosition = new Object();	// Матрица позиций x,y юнитов игрового поля
var matchMatrixBackPosition = new Object();		// Матрица позиций x,y юнитов за пределами игрового поля

var matchSelectUnit1 = null;		// выбранный первый юнит
var matchSelectUnit2 = null;		// выбран второй юнит

var matchFieldBlocked = false;		// блокирование игрового поля

/* Инициализация матриц позиций ================================================================ */
function initMatchMatrixPosition()
{
	matchMatrixFrontPosition = new Object();
	matchMatrixBackPosition = new Object();
	for(var i = 0; i < MATCH_COLUMNS; i++)
	{
		for(var j = 0; j < MATCH_ROWS; j++)
		{
			matchMatrixFrontPosition["i"+i+":j"+j] = [180 + (MATCH_CELL_WIDTH * i), 120 + (MATCH_CELL_HEIGHT * j)]; // x,y
			matchMatrixBackPosition["i"+i+":j"+j] = [0,0]; // x,y
		}
	}
	console.log("MATCH [M: Front]" + matchMatrixFrontPosition);
	console.log(matchMatrixFrontPosition);
	console.log("MATCH [M: Back]" + matchMatrixBackPosition);
	console.log(matchMatrixBackPosition);
}

/* Создание игрового поля ====================================================================== */
function createMatchField(levelJSON)
{
	initMatchMatrixPosition();

	matchStage = new PIXI.Container();
	matchMatrixCell = new Object();
	matchMatrixUnit = new Object();

	/* ячейки */
	var index = 0;
	for(var iCell = 0; iCell < MATCH_COLUMNS; iCell++)
	{
		for(var jCell = 0; jCell < MATCH_ROWS; jCell++)
		{
			if(levelJSON.data.Level.cell[index].cellType != MATCH_CELL_TYPE_DROP)
			{
				var graphics = new PIXI.Graphics();
				graphics.lineStyle(2, 0x000000, 1);
				graphics.beginFill(0x000000, 0.75);
				graphics.drawRect(0, 0, MATCH_CELL_WIDTH, MATCH_CELL_HEIGHT);
				graphics.endFill();
				graphics.cellType = levelJSON.data.Level.cell[index].cellType;
				graphics.position.x = matchMatrixFrontPosition["i"+iCell+":j"+jCell][0];
				graphics.position.y = matchMatrixFrontPosition["i"+iCell+":j"+jCell][1];
				matchMatrixCell["i"+iCell+":j"+jCell] = graphics;
				matchStage.addChild(matchMatrixCell["i"+iCell+":j"+jCell]);
			}else{
				matchMatrixCell["i"+iCell+":j"+jCell] = null;
			}
			index++;
		}
	}

	/* Юниты */
	index = 0;
	for(var iUnit = 0; iUnit < MATCH_COLUMNS; iUnit++)
	{
		for(var jUnit = 0; jUnit < MATCH_ROWS; jUnit++)
		{
			if(levelJSON.data.Level.cell[index].cellObject != MATCH_HIT_0)
			{
				var sprite;
				if(levelJSON.data.Level.cell[index].cellObject == MATCH_HIT_1) sprite = new PIXI.Sprite(hit1Texture);
				if(levelJSON.data.Level.cell[index].cellObject == MATCH_HIT_2) sprite = new PIXI.Sprite(hit2Texture);
				if(levelJSON.data.Level.cell[index].cellObject == MATCH_HIT_3) sprite = new PIXI.Sprite(hit3Texture);
				if(levelJSON.data.Level.cell[index].cellObject == MATCH_HIT_4) sprite = new PIXI.Sprite(hit4Texture);
				if(levelJSON.data.Level.cell[index].cellObject == MATCH_HIT_5) sprite = new PIXI.Sprite(hit5Texture);
				sprite.name = "i"+iUnit+":j"+jUnit;
				sprite.position.x = matchMatrixFrontPosition["i"+iUnit+":j"+jUnit][0];
				sprite.position.y = matchMatrixFrontPosition["i"+iUnit+":j"+jUnit][1];
				sprite.interactive = true;

				sprite.unitType = levelJSON.data.Level.cell[index].cellObject;
				sprite.flagRemove = false;
				sprite.posColumnI = iUnit;
				sprite.posRowJ = jUnit;

				sprite.click = onMatchUnitClick;
				sprite.tap = onMatchUnitClick;
								
				matchMatrixUnit["i"+iUnit+":j"+jUnit] = sprite;
				matchStage.addChild(matchMatrixUnit["i"+iUnit+":j"+jUnit]);
				console.log("MATCH [Unit]: " + matchMatrixUnit["i"+iUnit+":j"+jUnit].name);
			}else{
				matchMatrixUnit["i"+iUnit+":j"+jUnit] = null;
			}
			index++;
		}
	}


}

/* Событие: нажатие на юнит */
function onMatchUnitClick() 
{
	if(matchFieldBlocked == false)
	{
		matchCellColorSelect(this.unitType, this.posColumnI, this.posRowJ);
		if(matchSelectUnit1 == null) 
		{
			matchSelectUnit1 = this;
		}else{
			if(matchSelectUnit2 == null) 
			{
				matchSelectUnit2 = this;
				matchExchangeUnits(); // меняем юниты местами
			}
		}
	}
	console.log("MATCH [Unit Click]: " + this.unitType);
}

/* Определение цвета ячеек Cell игрового поля ================================================= */
function matchCellColorSelect(unitType, colI, rowJ)
{
	matchMatrixCell["i"+colI+":j"+rowJ].clear();
	matchMatrixCell["i"+colI+":j"+rowJ].lineStyle(2, 0x000000, 1);
	if(unitType == MATCH_HIT_1) matchMatrixCell["i"+colI+":j"+rowJ].beginFill(0xFFFF80, 0.50);
	if(unitType == MATCH_HIT_2) matchMatrixCell["i"+colI+":j"+rowJ].beginFill(0xFF0000, 0.50);
	if(unitType == MATCH_HIT_3) matchMatrixCell["i"+colI+":j"+rowJ].beginFill(0xFF00FF, 0.50);
	if(unitType == MATCH_HIT_4) matchMatrixCell["i"+colI+":j"+rowJ].beginFill(0x0080FF, 0.50);
	if(unitType == MATCH_HIT_5) matchMatrixCell["i"+colI+":j"+rowJ].beginFill(0x00FF80, 0.50);
	matchMatrixCell["i"+colI+":j"+rowJ].drawRect(0, 0, MATCH_CELL_WIDTH, MATCH_CELL_HEIGHT);
	matchMatrixCell["i"+colI+":j"+rowJ].endFill();
}

function matchCellColorBack()
{
	matchMatrixCell["i"+matchSelectUnit1.posColumnI+":j"+matchSelectUnit1.posRowJ].clear();
	matchMatrixCell["i"+matchSelectUnit1.posColumnI+":j"+matchSelectUnit1.posRowJ].lineStyle(2, 0x000000, 1);
	matchMatrixCell["i"+matchSelectUnit1.posColumnI+":j"+matchSelectUnit1.posRowJ].beginFill(0x000000, 0.75);
	matchMatrixCell["i"+matchSelectUnit1.posColumnI+":j"+matchSelectUnit1.posRowJ].drawRect(0, 0, MATCH_CELL_WIDTH, MATCH_CELL_HEIGHT);
	matchMatrixCell["i"+matchSelectUnit1.posColumnI+":j"+matchSelectUnit1.posRowJ].endFill();
	matchMatrixCell["i"+matchSelectUnit2.posColumnI+":j"+matchSelectUnit2.posRowJ].clear();
	matchMatrixCell["i"+matchSelectUnit2.posColumnI+":j"+matchSelectUnit2.posRowJ].lineStyle(2, 0x000000, 1);
	matchMatrixCell["i"+matchSelectUnit2.posColumnI+":j"+matchSelectUnit2.posRowJ].beginFill(0x000000, 0.75);
	matchMatrixCell["i"+matchSelectUnit2.posColumnI+":j"+matchSelectUnit2.posRowJ].drawRect(0, 0, MATCH_CELL_WIDTH, MATCH_CELL_HEIGHT);
	matchMatrixCell["i"+matchSelectUnit2.posColumnI+":j"+matchSelectUnit2.posRowJ].endFill();
}

/* Обмен местами в массиве выбранных пользователем  объектов =================================== */
function matchExchangeUnits()
{
	matchFieldBlocked = true; // поле заблокированно

	var iUnit1 = matchSelectUnit1.posColumnI;
	var jUnit1 = matchSelectUnit1.posRowJ;
	var iUnit2 = matchSelectUnit2.posColumnI;
	var jUnit2 = matchSelectUnit2.posRowJ;

	if(iUnit2 > (iUnit1 - 2) && iUnit2 < (iUnit1 + 2) && jUnit2 > (jUnit1 - 2) && jUnit2 < (jUnit1 + 2) && ((iUnit2 == iUnit1 && jUnit2 != jUnit1) || (jUnit2 == jUnit1 && iUnit2 != iUnit1)))
	{
		console.log("MATCH [Unit 1]: I=" + iUnit1 + "   J=" + jUnit1 + "   TYPE="  + matchMatrixUnit["i"+iUnit1+":j"+jUnit1].unitType);
		matchMatrixUnit["i"+iUnit1+":j"+jUnit1] = matchSelectUnit2;
		matchMatrixUnit["i"+iUnit1+":j"+jUnit1].posColumnI = iUnit1;
		matchMatrixUnit["i"+iUnit1+":j"+jUnit1].posRowJ = jUnit1;
		matchMatrixUnit["i"+iUnit1+":j"+jUnit1].name = "i"+iUnit1+":j"+jUnit1;
		console.log("MATCH [Unit 1]: I=" + iUnit1 + "   J=" + jUnit1 + "   TYPE="  + matchMatrixUnit["i"+iUnit1+":j"+jUnit1].unitType);
	
		console.log("MATCH [Unit 2]: I=" + iUnit2 + "   J=" + jUnit2 + "   TYPE="  + matchMatrixUnit["i"+iUnit2+":j"+jUnit2].unitType);
		matchMatrixUnit["i"+iUnit2+":j"+jUnit2] = matchSelectUnit1;
		matchMatrixUnit["i"+iUnit2+":j"+jUnit2].posColumnI = iUnit2;
		matchMatrixUnit["i"+iUnit2+":j"+jUnit2].posRowJ = jUnit2;
		matchMatrixUnit["i"+iUnit2+":j"+jUnit2].name = "i"+iUnit2+":j"+jUnit2;
		console.log("MATCH [Unit 2]: I=" + iUnit2 + "   J=" + jUnit2 + "   TYPE="  + matchMatrixUnit["i"+iUnit2+":j"+jUnit2].unitType);
	
		createjs.Tween.get(matchMatrixUnit["i"+iUnit1+":j"+jUnit1], {loop: false})
			.to({x: matchMatrixFrontPosition["i"+iUnit1+":j"+jUnit1][0], y: matchMatrixFrontPosition["i"+iUnit1+":j"+jUnit1][1]}, 500, createjs.Ease.getPowInOut(4));
		createjs.Tween.get(matchMatrixUnit["i"+iUnit2+":j"+jUnit2], {loop: false})
			.to({x: matchMatrixFrontPosition["i"+iUnit2+":j"+jUnit2][0], y: matchMatrixFrontPosition["i"+iUnit2+":j"+jUnit2][1]}, 500, createjs.Ease.getPowInOut(4))
			.call(onCompleteMatchExchangeUnits);
		createjs.Ticker.setFPS(60);	

	}else{
		matchCellColorBack();
		matchSelectUnitsClear();
	}
}

function onCompleteMatchExchangeUnits()
{
	matchCellColorBack();
	matchBackExchangeUnits();
}

function matchBackExchangeUnits()
{
	var iUnit1 = matchSelectUnit1.posColumnI;
	var jUnit1 = matchSelectUnit1.posRowJ;
	var iUnit2 = matchSelectUnit2.posColumnI;
	var jUnit2 = matchSelectUnit2.posRowJ;

	matchMatrixUnit["i"+iUnit1+":j"+jUnit1] = matchSelectUnit2;
	matchMatrixUnit["i"+iUnit1+":j"+jUnit1].posColumnI = iUnit1;
	matchMatrixUnit["i"+iUnit1+":j"+jUnit1].posRowJ = jUnit1;
	matchMatrixUnit["i"+iUnit1+":j"+jUnit1].name = "i"+iUnit1+":j"+jUnit1;
	
	matchMatrixUnit["i"+iUnit2+":j"+jUnit2] = matchSelectUnit1;
	matchMatrixUnit["i"+iUnit2+":j"+jUnit2].posColumnI = iUnit2;
	matchMatrixUnit["i"+iUnit2+":j"+jUnit2].posRowJ = jUnit2;
	matchMatrixUnit["i"+iUnit2+":j"+jUnit2].name = "i"+iUnit2+":j"+jUnit2;
	
	createjs.Tween.get(matchMatrixUnit["i"+iUnit1+":j"+jUnit1], {loop: false})
		.to({x: matchMatrixFrontPosition["i"+iUnit1+":j"+jUnit1][0], y: matchMatrixFrontPosition["i"+iUnit1+":j"+jUnit1][1]}, 500, createjs.Ease.getPowInOut(4));
	createjs.Tween.get(matchMatrixUnit["i"+iUnit2+":j"+jUnit2], {loop: false})
		.to({x: matchMatrixFrontPosition["i"+iUnit2+":j"+jUnit2][0], y: matchMatrixFrontPosition["i"+iUnit2+":j"+jUnit2][1]}, 500, createjs.Ease.getPowInOut(4))
		.call(matchSelectUnitsClear);
	createjs.Ticker.setFPS(60);	
}

function matchSelectUnitsClear()
{
	matchSelectUnit1 = null;
	matchSelectUnit2 = null;
	matchFieldBlocked = false; // поле разблокированно
}