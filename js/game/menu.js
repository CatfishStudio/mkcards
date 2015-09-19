var menuStage;

var menuStyleTextButton = {
    font : 'bold 12px Arial',
    fill : '#F7EDCA',
    stroke : '#500000',
    strokeThickness : 3,
    wordWrap : true,
    wordWrapWidth : 440
};

function menuShow()
{
	var menuSpriteButton;
	var menuTextButton;
	var menuTextButtonsRus = ["Одиночная игра","Карточная игра","Магазин","Персонаж","Рейтинг","Настройки","Пригласить"];
	var menuTextButtonsEng = ["Single player","Card game","Store","Personage","Rating","Settings","Invite"];

	menuStage = new PIXI.Container();
	
	for(var i = 0; i < menuTextButtonsRus.length; i++)
	{
		if(language == "rus")
		{
			menuTextButton = new PIXI.Text(menuTextButtonsRus[i], menuStyleTextButton);
		}else{
			menuTextButton = new PIXI.Text(menuTextButtonsEng[i], menuStyleTextButton);
		}
		menuTextButton.x = (170 / 2) - (menuTextButton.width / 2);
		menuTextButton.y = 20;
		
		menuSpriteButton = new PIXI.Sprite(buttonTexture);
		menuSpriteButton.name = "menuSpriteButton" + i;
		menuSpriteButton.position.x = (MAIN_WIDTH / 2) - (170 / 2);
		menuSpriteButton.position.y = (MAIN_HEIGH / 3) + (55 * i);
		menuSpriteButton.interactive = true;
		menuSpriteButton.buttonMode = true;
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
	console.log("Create window: menu");
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
	if(this.name == "menuSpriteButton0")
	{
		stage.removeChild(menuStage);
		fightersShow(); // FIGHTERS SHOW
	}
	console.log("Menu click button: " + this.name);
}