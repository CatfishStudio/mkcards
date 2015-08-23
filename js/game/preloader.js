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
	loader.add('barakaAtlas','./assets/image/quest/atlas/baraka.json');
	loader.add('liukangAtlas','./assets/image/quest/atlas/liukang.json');
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
	bgTexture = res.bgImage.texture; /* background.jpg */
	buttonTexture = res.buttonImage.texture; /* button.png */

	/* game.json */
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

	/* baraka.json */
	animTexBarakaStanceLeftToRight = loadAnimationTextures(10, 'baraka_stance_left_to_right_');
	animTexBarakaStanceRightToLeft = loadAnimationTextures(10, 'baraka_stance_right_to_left_');

	/* liukang.json */
	animTexLiukangStanceLeftToRight = loadAnimationTextures(8, 'liukang_stance_left_to_right_');
	animTexLiukangStanceRightToLeft = loadAnimationTextures(8, 'liukang_stance_right_to_left_');

	/**/


	console.log("Load assets complete!");
	
	bgShow();		// GAME BACKGROUND SHOW
	stage.removeChild(bgPreloaderSprite);
}

function loadAnimationTextures(countFrame, nameFrame)
{
	var nameTexture;
	var animTextures = [];
	for(var i = 1; i < countFrame; i++)
	{
		if(i < 10)
		{
			nameTexture = nameFrame + '0' + i + '.png'
		}else{
			nameTexture = nameFrame + i + '.png'
		}
		var texture = PIXI.Texture.fromFrame(nameTexture);
		animTextures.push(texture);
	}
	return animTextures;
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