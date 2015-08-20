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

	console.log("Preloader: show");

	loadAssets();		// LOAD ASSETS
}

function loadAssets()
{
	var loader = new PIXI.loaders.Loader();
	loader.add('bgImage','./assets/image/background.jpg');
	loader.add('buttonImage','./assets/image/button.png');
	loader.add('gameAtlas','./assets/image/quest/atlas/game.json');
	loader.once('complete',onAssetsLoaded);
	loader.once('progress',onProgressLoad);
	loader.load();
}

function onProgressLoad()
{
	console.log("Progress load!");
}

function onAssetsLoaded(loader, res) 
{
	bgTexture = res.bgImage.texture;
	buttonTexture = res.buttonImage.texture;
	bgCharacterWindowTexture = PIXI.Texture.fromFrame('character_background_small.png');
	borderCharacterWindowTexture = PIXI.Texture.fromFrame('character_border_small.png');
	iconBarakaTexture = PIXI.Texture.fromFrame('baraka.png');
	iconGoroTexture = PIXI.Texture.fromFrame('goro.png');
	iconJaxTexture = PIXI.Texture.fromFrame('jax.png');
	iconJohnnycageTexture = PIXI.Texture.fromFrame('johnnycage.png');
	iconKitanaTexture = PIXI.Texture.fromFrame('kitana.png');
	iconKunglaoTexture = PIXI.Texture.fromFrame('kunglao.png');
	iconLiukangTexture = PIXI.Texture.fromFrame('liukang.png');
	iconMileenaTexture = PIXI.Texture.fromFrame('mileena.png');
	iconRaidenTexture = PIXI.Texture.fromFrame('raiden.png');
	iconReptileTexture = PIXI.Texture.fromFrame('reptile.png');
	iconScorpionTexture = PIXI.Texture.fromFrame('scorpion.png');
	iconShangtsungTexture = PIXI.Texture.fromFrame('shangtsung.png');
	iconShaokahnTexture = PIXI.Texture.fromFrame('shaokahn.png');
	iconSubzeroTexture = PIXI.Texture.fromFrame('subzero.png');
	characterHit1 = PIXI.Texture.fromFrame('character_hit_1.png');
	characterHit2 = PIXI.Texture.fromFrame('character_hit_2.png');
	characterHit3 = PIXI.Texture.fromFrame('character_hit_3.png');
	characterHit4 = PIXI.Texture.fromFrame('character_hit_4.png');
	characterHit5 = PIXI.Texture.fromFrame('character_hit_5.png');


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

	console.log("Create game background");

	menuShow();			// MENU SHOW
}