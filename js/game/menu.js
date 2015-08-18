var menuStage;
var menuTextureButton;
var menuSpriteButton;
var menuTextButton;
var menuTextButtons = ["Одиночная игра","Карточная игра","Магазин","Персонаж","Рейтинг","Настройки","Пригласить"];

var menuStyleTextButton = {
    font : 'bold 12px Arial',
    fill : '#F7EDCA',
    stroke : '#500000',
    strokeThickness : 3,
    //dropShadow : true,
    //dropShadowColor : '#000000',
    //dropShadowAngle : Math.PI / 6,
    //dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 440
};

function menuShow()
{
	menuStage = new PIXI.Container();
	menuTextureButton = PIXI.Texture.fromImage('./assets/image/button.png');

	for(var i = 0; i < 7; i++)
	{
		menuTextButton = new PIXI.Text(menuTextButtons[i], menuStyleTextButton);
		menuTextButton.x = (170 / 2) - (menuTextButton.width / 2);
		menuTextButton.y = 20;
		console.log(menuTextButton.width);

		menuSpriteButton = new PIXI.Sprite(menuTextureButton);
		menuSpriteButton.name = "menuSpriteButton" + i;
		menuSpriteButton.position.x = (MAIN_WIDTH / 2) - (170 / 2);
		menuSpriteButton.position.y = (MAIN_HEIGH / 3) + (55 * i);
		menuSpriteButton.interactive = true;
		menuSpriteButton.tap = onMenuSpriteButtonClick;
		menuSpriteButton.click = onMenuSpriteButtonClick;
		menuSpriteButton.on('mousedown', onMenuButtonDown);
		menuSpriteButton.on('touchstart', onMenuButtonDown);
		menuSpriteButton.on('mouseup', onMenuButtonUp);
		menuSpriteButton.on('touchend', onMenuButtonUp);
		menuSpriteButton.on('mouseupoutside', onMenuButtonUp);
		menuSpriteButton.on('touchendoutside', onMenuButtonUp);

		menuSpriteButton.addChild(menuTextButton);
		menuStage.addChild(menuSpriteButton);
	}
	

	stage.addChild(menuStage);

	console.log("Create menu!");
}

function onMenuButtonDown()
{
    this.isdown = true;
    this.scale.set(0.95);
    this.position.x += 5; 
}

function onMenuButtonUp()
{
	if(this.isdown)
	{
    	this.isdown = false;
    	this.scale.set(1.0);
    	this.position.x -= 5;
    }
}

function onMenuSpriteButtonClick() 
{
	console.log(this.name);
}