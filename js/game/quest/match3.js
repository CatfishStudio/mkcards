var matchStage;					// главный stage
var matrixCell = [];			// Матрица ячеек игрового поля

/* Класс ячейки */
var MatchCell = function()
{
	var graphics = new PIXI.Graphics();
	graphics.lineStyle(2, 0xFF00FF, 1);
	graphics.beginFill(0xFF00BB, 0.25);
	graphics.drawRoundedRect(150, 450, 300, 100, 15);
	graphics.endFill();

	var cellType = "CELL_TYPE_CLEAR";

	var that = {
		getCellGraphics: function()
		{
			if(cellType == "CELL_TYPE_EMPTY") graphics = new PIXI.Graphics();
			return graphics;
		},
		getCellType: function()
		{
			return cellType;
		},
		setCellType: function(value)
		{
			cellType = value;
		}
	};
	return that;
};

/* Создание игрового поля */
function createMatchField(levelJSON)
{
	matchStage = new PIXI.Container();

	var n = levelJSON.data.Level.cell.length;
	for(var i = 0; i < n; i++)
	{
		console.log("Колонка: " + levelJSON.data.Level.cell[i].cellColumn + "  Столбец: " + levelJSON.data.Level.cell[i].cellRow);		
	}

	console.log(levelJSON.data.Level.LevelNumber);
}