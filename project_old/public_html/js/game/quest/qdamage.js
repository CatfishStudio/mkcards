var qdamageStyleTextHit = { 
	font : 'bold 24px Arial', 
	fill : '#D91A1A', 
	stroke : '#000000', 
	strokeThickness : 3, 
	wordWrap : true, 
	wordWrapWidth : 440 
};

var qdamageStyleTextBlock = { 
	font : 'bold 24px Arial', 
	fill : '#EDCD3E', 
	stroke : '#000000', 
	strokeThickness : 3, 
	wordWrap : true, 
	wordWrapWidth : 440 
};

var qdamagePositionIndex = 1;


function qdamageTextCreate(textDamage, posStartX, posStartY, posEndX, posEndY, blockDamage) 
{ 
	if(blockDamage === 0) var damageText = new PIXI.Text(textDamage, qdamageStyleTextHit); 
	else var damageText = new PIXI.Text(textDamage, qdamageStyleTextBlock); 
	
	damageText.name = "textDamage";
	damageText.x = posStartX; 
	damageText.y = posStartY; 
	damageText.ex = posEndX;
	damageText.ey = posEndY;
	
	levelStage.addChild(damageText); 
	
	if(qdamagePositionIndex === 1) qdamagePositionIndex = -1;
	else qdamagePositionIndex = 1;
	
	qdamageMove(damageText);
}

function qdamageMove(damageText)
{
	createjs.Tween.get(damageText, {loop: false})
		.to({x: damageText.ex + (25 * qdamagePositionIndex), y: damageText.ey}, 1000, createjs.Ease.getPowInOut(3))
		.call(onQDamageMoveComplete); // событие выполнено
	createjs.Ticker.setFPS(60);	
}

function onQDamageMoveComplete()
{
	levelStage.removeChild(this); 
}

