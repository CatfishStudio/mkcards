var stairsStage;
var stairsLeftWindowSprite;
var stairsRightWindowSprite;

var stairsStyleText = {
    font : 'bold 13px Arial',
    fill : '#FFFFFF'
};

function stairsShow()
{
	stairsStage = new PIXI.Container();

	stairsBackground();
	createStairsButton();

	stage.addChild(stairsStage);
	console.log("Create window: stairs");
}

function stairsBackground()
{
	var background = new PIXI.Sprite(blueportalTexture);
	background.name = "stairsBackground";
	background.position.x = (MAIN_WIDTH - 800) / 2;
	background.position.y = (MAIN_HEIGH - 600) / 2.5;
	background.scale.x += 1.0;
	background.scale.y += 1.35;
	stairsStage.addChild(background);

	var border = new PIXI.Sprite(borderTexture);
	border.name = "stairsBorder";
	border.position.x = (MAIN_WIDTH - 800) / 2;
	border.position.y = (MAIN_HEIGH - 600) / 2.5;
	stairsStage.addChild(border);


	
}

function createStairsButton()
{
	var stairsSpriteButton;
	var stairsTextButton;
	var textStairsButtonsRus = ["Назад в меню","Настройки","Пригласить","Битва"];
	var textStairsButtonsEng = ["Back in menu","Settings","Invite","Fight"];
	var stairsStyleTextButton = {
    	font : 'bold 12px Arial',
    	fill : '#F7EDCA',
    	stroke : '#500000',
    	strokeThickness : 3,
    	wordWrap : true,
    	wordWrapWidth : 440
	};
	for(var i = 0; i < 4; i++)
	{
		if(language == "rus")
		{
			stairsTextButton = new PIXI.Text(textStairsButtonsRus[i], stairsStyleTextButton);
		}else{
			stairsTextButton = new PIXI.Text(textStairsButtonsEng[i], stairsStyleTextButton);
		}
		stairsTextButton.x = (170 / 2) - (stairsTextButton.width / 2);
		stairsTextButton.y = 20;

		stairsSpriteButton = new PIXI.Sprite(buttonTexture);
		stairsSpriteButton.name = textStairsButtonsEng[i];
		stairsSpriteButton.position.x = 35 + (200 * i);
		stairsSpriteButton.position.y = 650;
		stairsSpriteButton.interactive = true;

		stairsSpriteButton.tap = onStairsButtonClick;
		stairsSpriteButton.click = onStairsButtonClick;
		stairsSpriteButton.on('mousedown', onStairsButtonDown);
		stairsSpriteButton.on('touchstart', onStairsButtonDown);
		stairsSpriteButton.on('mouseup', onStairsButtonUp);
		stairsSpriteButton.on('touchend', onStairsButtonUp);
		stairsSpriteButton.on('mouseupoutside', onStairsButtonUp);
		stairsSpriteButton.on('touchendoutside', onStairsButtonUp);
		
		stairsSpriteButton.addChild(stairsTextButton);
		stairsStage.addChild(stairsSpriteButton);
	}

}

function onStairsButtonDown()
{
    this.isdown = true;
    this.scale.set(0.95);
    this.position.x += 5; 
}

function onStairsButtonUp()
{
	if(this.isdown)
	{
    	this.isdown = false;
    	this.scale.set(1.0);
    	this.position.x -= 5;
    }
}

function onStairsButtonClick() 
{
	if(this.name == "Back in menu")
	{
		stage.removeChild(stairsStage);
		menuShow(); // MENU SHOW
	}
	if(this.name == "Settings")
	{
		
	}
	if(this.name == "Invite")
	{
		
	}
	if(this.name == "Fight")
	{
		stage.removeChild(stairsStage);
	}
	console.log("Stairs click button: " + this.name);
}