var renderer;
var stage;
var bgTexture;
var bgSprite;

function init()
{
	//var mkload = document.getElementById("mkload");
	//mkload.parentNode.removeChild(mkload);

	renderer = PIXI.autoDetectRenderer(MAIN_WIDTH, MAIN_HEIGH,{backgroundColor : MAIN_BACKGROUND_COLOR});
	document.body.appendChild(renderer.view);
	stage = new PIXI.Container();

	draw();

	preloaderShow();
	//bgShow();
	//menuShow();
}

window.addEventListener("load", init, false);

function draw() 
{
	requestAnimationFrame(draw);
	renderer.render(stage);
}

function bgShow()
{
	bgTexture = PIXI.Texture.fromImage('./assets/image/background.jpg');
	bgSprite = new PIXI.Sprite(bgTexture);
	
	bgSprite.position.x = 0;
	bgSprite.position.y = 0;

	stage.addChild(bgSprite);

	console.log("Create background!");
}

