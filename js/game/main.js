var renderer;
var stage;

function init()
{
	renderer = PIXI.autoDetectRenderer(WIDTH, HEIGH,{backgroundColor : BACKGROUND_COLOR});
	document.body.appendChild(renderer.view);
	stage = new PIXI.Container();

	animate();

	bgShow();	
}

window.addEventListener("load", init, false);

function animate() 
{
	requestAnimationFrame(animate);
	renderer.render(stage);
}


function bgShow()
{
	var bgTexture = PIXI.Texture.fromImage('./img/background.jpg');
	var bgSprite = new PIXI.Sprite(bgTexture);
	
	bgSprite.position.x = 0;
	bgSprite.position.y = 0;

	stage.addChild(bgSprite);

	console.log("Background - show!");
}

