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
	createStairsRightWindow(qGlobalUserFighterName);
	stairsTween();

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

function createStairsRightWindow(fighterName)
{
	stairsRightWindowSprite = new PIXI.Sprite(bgCharacterWindowTexture);
	stairsRightWindowSprite.name = "stairsRightWindow";
	stairsRightWindowSprite.position.x = (MAIN_WIDTH / 3) + (75 * 4.5);
	stairsRightWindowSprite.position.y = (MAIN_HEIGH / 2.9);

	var borderSprite = new PIXI.Sprite(borderCharacterWindowTexture);
	borderSprite.name = "stairsRightWindowBordet";
	borderSprite.position.x = 0;
	borderSprite.position.y = 0;
	stairsRightWindowSprite.addChild(borderSprite);

	stairsStage.addChild(stairsRightWindowSprite);
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

function stairsTween()
{
	createjs.Tween.get(stairsRightWindowSprite, {loop: true})
          .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
          .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 125}, 100)
          .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
    createjs.Ticker.setFPS(60);
    //createjs.Ticker.addEventListener("tick", stage);
}