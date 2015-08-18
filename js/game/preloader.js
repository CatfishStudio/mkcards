

function loadAssets()
{
	
}

function preloaderShow()
{
	var loader = new PIXI.loaders.Loader(); // you can also create your own if you want
	loader.add('preloaderImage',"./assets/image/preloader.jpg");
	loader.once('complete',onAssetsLoaded);
	loader.load();

}

function onAssetsLoaded(loader, res) {
   
    var mkload = document.getElementById("mkload");
	mkload.parentNode.removeChild(mkload);

	var bgPreloaderSprite = new PIXI.Sprite(res.preloaderImage.texture);
	bgPreloaderSprite.position.x = 0;
	bgPreloaderSprite.position.y = 0;

	stage.addChild(bgPreloaderSprite);

	console.log("Preloader show!");
}