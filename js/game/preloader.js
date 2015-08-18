var bgPreloaderSprite;

function preloaderShow()
{
	var loader = new PIXI.loaders.Loader();
	loader.add('preloaderImage',"./assets/image/preloader.jpg");
	loader.once('complete',onPreloaderLoaded);
	loader.load();

}

function onPreloaderLoaded(loader, res) 
{
    var mkload = document.getElementById("mkload");
	mkload.parentNode.removeChild(mkload);

	bgPreloaderSprite = new PIXI.Sprite(res.preloaderImage.texture);
	bgPreloaderSprite.position.x = 0;
	bgPreloaderSprite.position.y = 0;

	stage.addChild(bgPreloaderSprite);

	console.log("Preloader show!");

	loadAssets();		// LOAD ASSETS
}

function loadAssets()
{
	var loader = new PIXI.loaders.Loader();
	loader.add('bgImage',"./assets/image/background.jpg");
	loader.add('buttonImage',"./assets/image/button.png");
	loader.once('complete',onAssetsLoaded);
	loader.load();
}

function onAssetsLoaded(loader, res) 
{
	bgTexture = res.bgImage.texture;
	buttonTexture = res.buttonImage.texture;

	console.log("Load assets complete!");
	
	bgShow();		// GAME BACKGROUND SHOW
	stage.removeChild(bgPreloaderSprite);
}

function bgShow()
{
	bgSprite = new PIXI.Sprite(bgTexture);
	
	bgSprite.position.x = 0;
	bgSprite.position.y = 0;

	stage.addChild(bgSprite);

	console.log("Create background!");

	menuShow();			// MENU SHOW
}