var renderer;
var stage;

function init()
{
	renderer = PIXI.autoDetectRenderer(MAIN_WIDTH, MAIN_HEIGH,{backgroundColor : MAIN_BACKGROUND_COLOR});
	document.body.appendChild(renderer.view);
	stage = new PIXI.Container();

	draw();

	preloaderShow();	// PRELOADER SHOW
}

window.addEventListener("load", init, false);

function draw() 
{
	requestAnimationFrame(draw);
	renderer.render(stage);
}