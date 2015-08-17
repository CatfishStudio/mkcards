var menuStage;
var menuTextureButton;
var menuSpriteButton;
var menuTextButton;
var menuTextButtons = ["Кнопка1","Кнопка2","Кнопка3","Кнопка4","Кнопка5","Кнопка6","Кнопка7"];

var menuStyleTextButton = {
    font : 'bold italic 16px Arial',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
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
		menuTextButton.x = 25;
		menuTextButton.y = 15;

		menuSpriteButton = new PIXI.Sprite(menuTextureButton);
		menuSpriteButton.name = "menuSpriteButton" + i;
		menuSpriteButton.position.x = (MAIN_WIDTH / 2) - (170 / 2);
		menuSpriteButton.position.y = (MAIN_HEIGH / 3) + (55 * i);
		menuSpriteButton.interactive = true;
		menuSpriteButton.tap = onMenuSpriteButtonClick;
		menuSpriteButton.click = onMenuSpriteButtonClick;
		menuSpriteButton.on('mousedown', onMenuButtonDown);
    	menuSpriteButton.on('mouseup', onMenuButtonUp);

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
    this.isdown = false;
    this.scale.set(1.0);
    this.position.x -= 5;
}

function onMenuSpriteButtonClick() 
{
	console.log(this.name);
}