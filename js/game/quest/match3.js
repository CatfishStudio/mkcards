const MATCH_COLUMNS = 6;
const MATCH_ROWS = 6;
const MATCH_CELL_WIDTH = 82;
const MATCH_CELL_HEIGHT = 82;
const MATCH_CELL_TYPE_DROP = "CELL_TYPE_DROP";
const MATCH_CELL_TYPE_CLEAR = "CELL_TYPE_CLEAR";
const MATCH_CELL_TYPE_EMPTY = "CELL_TYPE_EMPTY";
const MATCH_HIT_1 = "HIT_1";
const MATCH_HIT_2 = "HIT_2";
const MATCH_HIT_3 = "HIT_3";
const MATCH_HIT_4 = "HIT_4";
const MATCH_HIT_5 = "HIT_5";


var matchStage;						// главный stage
var matchMatrixCell = [];			// Матрица ячеек игрового поля
var matchMatrixUnit = [];			// Матрица юнитов на игровом поле

var matchMatrixFrontPosition = new Object();	// Матрица позиций x,y юнитов игрового поля
var matchMatrixBackPosition = new Object();		// Матрица позиций x,y юнитов за пределами игрового поля

/* Класс ячейки */
var MatchCell = function()
{
	var graphics = new PIXI.Graphics();
	graphics.lineStyle(2, 0x000000, 1);
	graphics.beginFill(0x000000, 0.75);
	graphics.drawRect(0, 0, MATCH_CELL_WIDTH, MATCH_CELL_HEIGHT);
	graphics.endFill();

	var cellType = MATCH_CELL_TYPE_CLEAR;

	var that = {
		getCellGraphics: function()
		{
			if(cellType == MATCH_CELL_TYPE_DROP) graphics = new PIXI.Graphics();
			return graphics;
		},
		getCellType: function()
		{
			return cellType;
		},
		setCellType: function(value)
		{
			cellType = value;
		},
		getX: function()
		{
			return graphics.position.x;
		},
		setX: function(value)
		{
			graphics.position.x = value;
		},
		getY: function()
		{
			return graphics.position.y;
		},
		setY: function(value)
		{
			graphics.position.y = value;
		}

	};
	return that;
};

/* Класс юнита */
var MatchUnit = function(uType, uName)
{
	var unitType = uType;
	var unitName = uName;
	var flagRemove = false;
	var posColumnI = 0;
	var posRowJ = 0;

	var sprite;
	
	var that = {
		getUnitSprite: function(uType)
		{
			if(unitType == MATCH_HIT_1) sprite = new PIXI.Sprite(hit1Texture);
			if(unitType == MATCH_HIT_2) sprite = new PIXI.Sprite(hit1Texture);
			if(unitType == MATCH_HIT_3) sprite = new PIXI.Sprite(hit1Texture);
			if(unitType == MATCH_HIT_4) sprite = new PIXI.Sprite(hit1Texture);
			if(unitType == MATCH_HIT_5) sprite = new PIXI.Sprite(hit1Texture);
			sprite.name = unitName;
			sprite.position.x = 0;
			sprite.position.y = 0;
			return sprite;
		},
		getUnitType: function()
		{
			return unitType;
		},
		setUnitType: function(value)
		{
			unitType = value;
		},
		getUnitName: function()
		{
			return unitName;
		},
		setUnitName: function(value)
		{
			unitName = value;
		},
		getUnitFlagRemove: function()
		{
			return flagRemove;
		},
		setUnitFlagRemove: function(value)
		{
			flagRemove = value;
		},
		getUnitPosColumnI: function()
		{
			return posColumnI;
		},
		setUnitPosColumnI: function(value)
		{
			posColumnI = value;
		},
		getUnitPosRowJ: function()
		{
			return posRowJ;
		},
		setUnitPosRowJ: function(value)
		{
			posRowJ = value;
		},
		getUnitPosX: function()
		{
			return sprite.position.x;
		},
		setUnitPosX: function(value)
		{
			sprite.position.x = value;
		},
		getUnitPosY: function()
		{
			return sprite.position.y;
		},
		setUnitPosY: function(value)
		{
			sprite.position.y = value;
		}
	}
}

/* Инициализация матриц позиций */
function initMatchMatrixPosotion()
{
	matchMatrixFrontPosition = new Object();
	matchMatrixBackPosition = new Object();
	for(var i = 0; i < MATCH_COLUMNS; i++)
	{
		for(var j = 0; j < MATCH_ROWS; j++)
		{
			matchMatrixFrontPosition["i"+ i + " : j" + j] = [180 + (MATCH_CELL_WIDTH * i), 120 + (MATCH_CELL_HEIGHT * j)]; // x,y
			matchMatrixBackPosition["i"+ i + " : j" + j] = [0,0]; // x,y
		}
	}
	console.log("MATCH [M: Front]" + matchMatrixFrontPosition);
	console.log(matchMatrixFrontPosition);
	console.log("MATCH [M: Back]" + matchMatrixBackPosition);
	console.log(matchMatrixBackPosition);
}

/* Создание игрового поля */
function createMatchField(levelJSON)
{
	initMatchMatrixPosotion();

	matchStage = new PIXI.Container();
	matchMatrixCell = [];
	matchMatrixUnit = [];

	var cell;	// ячейка
	var unit;	// юнит

	var index = 0;
	for(var i = 0; i < MATCH_COLUMNS; i++)
	{
		for(var j = 0; j < MATCH_ROWS; j++)
		{
			/* ячейка */
			cell = new MatchCell();
			cell.setCellType(levelJSON.data.Level.cell[index].cellType);
			cell.setX(180 + (MATCH_CELL_WIDTH * i));
			cell.setY(120 + (MATCH_CELL_HEIGHT * j));
			matchMatrixCell.push(cell);
			matchStage.addChild(matchMatrixCell[index].getCellGraphics());

			/* Юнит */
			unit = new MatchUnit(levelJSON.data.Level.cell[index].cellObject, "Unit_I_" + i + "_J_" + j);
			


			index++;
		}
	}


	/*
	var n = levelJSON.data.Level.cell.length;
	for(var i = 0; i < n; i++)
	{
		cell = new MatchCell();
		cell.setCellType("CELL_TYPE_EMPTY");
		matchMatrixCell.push(cell);

		levelWindowStage.addChild(cell.getCellGraphics());
		console.log("Колонка: " + levelJSON.data.Level.cell[i].cellColumn + "  Столбец: " + levelJSON.data.Level.cell[i].cellRow);		
	}
	*/

	console.log(levelJSON.data.Level.LevelNumber);
}