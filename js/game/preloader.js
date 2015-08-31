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
	loader.add('blueportalImage','./assets/image/quest/texture/blueportal.png');
	loader.add('borderImage','./assets/image/quest/texture/border_screen.png');
	loader.add('gameAtlas','./assets/image/quest/atlas/game.json');
	loader.add('bloodAtlas','./assets/image/quest/atlas/blood.json');
	loader.add('drugonAtlas','./assets/image/quest/atlas/drugon.json');
	loader.add('flashAtlas','./assets/image/quest/atlas/flash.json');
	loader.add('levelsAtlas','./assets/image/quest/atlas/levels.json');
	loader.add('barakaAtlas','./assets/image/quest/atlas/baraka.json');
	loader.add('goroAtlas','./assets/image/quest/atlas/goro.json');
	loader.add('jaxAtlas','./assets/image/quest/atlas/jax.json');
	loader.add('johnnycageAtlas','./assets/image/quest/atlas/johnnycage.json');
	loader.add('kitanaAtlas','./assets/image/quest/atlas/kitana.json');
	loader.add('kunglaoAtlas','./assets/image/quest/atlas/kunglao.json');
	loader.add('liukangAtlas','./assets/image/quest/atlas/liukang.json');
	loader.add('mileenaAtlas','./assets/image/quest/atlas/mileena.json');
	loader.add('raidenAtlas','./assets/image/quest/atlas/raiden.json');
	loader.add('reptileAtlas','./assets/image/quest/atlas/reptile.json');
	loader.add('scorpionAtlas','./assets/image/quest/atlas/scorpion.json');
	loader.add('shangtsungAtlas','./assets/image/quest/atlas/shangtsung.json');
	loader.add('shaokahnAtlas','./assets/image/quest/atlas/shaokahn.json');
	loader.add('subzeroAtlas','./assets/image/quest/atlas/subzero.json');
	loader.add('level0','./assets/data/quest/levels/level0.json');
	loader.add('level1','./assets/data/quest/levels/level1.json');
	loader.add('level2','./assets/data/quest/levels/level2.json');
	loader.add('level3','./assets/data/quest/levels/level3.json');
	loader.add('level4','./assets/data/quest/levels/level4.json');
	loader.add('level5','./assets/data/quest/levels/level5.json');
	loader.add('level6','./assets/data/quest/levels/level6.json');
	loader.add('level7','./assets/data/quest/levels/level7.json');
	loader.add('level8','./assets/data/quest/levels/level8.json');
	loader.add('level9','./assets/data/quest/levels/level9.json');
	loader.add('level10','./assets/data/quest/levels/level10.json');
	loader.add('level11','./assets/data/quest/levels/level11.json');
	loader.add('level12','./assets/data/quest/levels/level12.json');
	loader.add('level13','./assets/data/quest/levels/level13.json');
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
	borderTexture = res.borderImage.texture; /* border_screen.png */
	blueportalTexture = res.blueportalImage.texture; /* blueportalImage.png */
	console.log("Load assets textures - complete!");

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
	console.log("Load assets game.json - complete!");

	/* blood.json */
	animTexBlood = loadAnimationTextures(14, 'blood_');
	console.log("Load assets blood.json - complete!");

	/* drugon.json */
	animTexDrugonLeft = loadAnimationTextures(21, 'drugon_left_');
	animTexDrugonRight = loadAnimationTextures(21, 'drugon_right_');
	console.log("Load assets drugon.json - complete!");

	/* flash.json */
	animTexFlash = loadAnimationTextures(12, 'flash_');
	console.log("Load assets flash.json - complete!");

	/* levels.json */
	texuresLevels = loadAnimationTextures(13, 'level_');
	console.log("Load assets levels.json - complete!");

	/* baraka.json */
	animTexBarakaDamageLeftToRight = loadAnimationTextures(4, 'baraka_damage_left_to_right_');
	animTexBarakaDamageRightToLeft = loadAnimationTextures(4, 'baraka_damage_right_to_left_');
	animTexBarakaHit1LeftToRight = loadAnimationTextures(7, 'baraka_hit_1_left_to_right_');
	animTexBarakaHit1RightToLeft =  loadAnimationTextures(7, 'baraka_hit_1_right_to_left_');
	animTexBarakaHit2LeftToRight = loadAnimationTextures(4, 'baraka_hit_2_left_to_right_');
	animTexBarakaHit2RightToLeft =  loadAnimationTextures(4, 'baraka_hit_2_right_to_left_');
	animTexBarakaHit3LeftToRight = loadAnimationTextures(4, 'baraka_hit_3_left_to_right_');
	animTexBarakaHit3RightToLeft =  loadAnimationTextures(4, 'baraka_hit_3_right_to_left_');
	animTexBarakaHit4LeftToRight = loadAnimationTextures(6, 'baraka_hit_4_left_to_right_');
	animTexBarakaHit4RightToLeft =  loadAnimationTextures(6, 'baraka_hit_4_right_to_left_');
	animTexBarakaHit5LeftToRight = loadAnimationTextures(8, 'baraka_hit_5_left_to_right_');
	animTexBarakaHit5RightToLeft =  loadAnimationTextures(8, 'baraka_hit_5_right_to_left_');
	animTexBarakaLost = loadAnimationTextures(8, 'baraka_lost_');
	animTexBarakaStanceLeftToRight = loadAnimationTextures(10, 'baraka_stance_left_to_right_');
	animTexBarakaStanceRightToLeft = loadAnimationTextures(10, 'baraka_stance_right_to_left_');
	animTexBarakaVictory = loadAnimationTextures(11, 'baraka_victory_');
	console.log("Load assets baraka.json - complete!");

	/* goro.json */
	animTexGoroDamageRightToLeft = loadAnimationTextures(5, 'goro_damage_right_to_left_');;
	animTexGoroHit1RightToLeft = loadAnimationTextures(6, 'goro_hit_1_right_to_left_');
	animTexGoroHit2RightToLeft = loadAnimationTextures(4, 'goro_hit_2_right_to_left_');
	animTexGoroHit3RightToLeft = loadAnimationTextures(4, 'goro_hit_3_right_to_left_');
	animTexGoroHit4RightToLeft = loadAnimationTextures(6, 'goro_hit_4_right_to_left_');
	animTexGoroHit5RightToLeft = loadAnimationTextures(6, 'goro_hit_5_right_to_left_');
	animTexGoroLost = loadAnimationTextures(7, 'goro_lost_');
	animTexGoroStanceRightToLeft = loadAnimationTextures(8, 'goro_stance_right_to_left_');
	animTexGoroVictory = loadAnimationTextures(4, 'goro_victory_');
	console.log("Load assets goro.json - complete!");

	/* jax.json */
	animTexJaxDamageLeftToRight = loadAnimationTextures(4, 'jax_damage_left_to_right_');
	animTexJaxDamageRightToLeft = loadAnimationTextures(4, 'jax_damage_right_to_left_');
	animTexJaxHit1LeftToRight = loadAnimationTextures(7, 'jax_hit_1_left_to_right_');
	animTexJaxHit1RightToLeft =  loadAnimationTextures(7, 'jax_hit_1_right_to_left_');
	animTexJaxHit2LeftToRight = loadAnimationTextures(4, 'jax_hit_2_left_to_right_');
	animTexJaxHit2RightToLeft =  loadAnimationTextures(4, 'jax_hit_2_right_to_left_');
	animTexJaxHit3LeftToRight = loadAnimationTextures(4, 'jax_hit_3_left_to_right_');
	animTexJaxHit3RightToLeft =  loadAnimationTextures(4, 'jax_hit_3_right_to_left_');
	animTexJaxHit4LeftToRight = loadAnimationTextures(6, 'jax_hit_4_left_to_right_');
	animTexJaxHit4RightToLeft =  loadAnimationTextures(6, 'jax_hit_4_right_to_left_');
	animTexJaxHit5LeftToRight = loadAnimationTextures(9, 'jax_hit_5_left_to_right_');
	animTexJaxHit5RightToLeft =  loadAnimationTextures(9, 'jax_hit_5_right_to_left_');
	animTexJaxLost = loadAnimationTextures(8, 'jax_lost_');
	animTexJaxStanceLeftToRight = loadAnimationTextures(8, 'jax_stance_left_to_right_');
	animTexJaxStanceRightToLeft = loadAnimationTextures(8, 'jax_stance_right_to_left_');
	animTexJaxVictory = loadAnimationTextures(8, 'jax_victory_');
	console.log("Load assets jax.json - complete!");

	/* johnnycage.json */
	animTexJohnnycageDamageLeftToRight = loadAnimationTextures(4, 'johnnycage_damage_left_to_right_');
	animTexJohnnycageDamageRightToLeft = loadAnimationTextures(4, 'johnnycage_damage_right_to_left_');
	animTexJohnnycageHit1LeftToRight = loadAnimationTextures(7, 'johnnycage_hit_1_left_to_right_');
	animTexJohnnycageHit1RightToLeft =  loadAnimationTextures(7, 'johnnycage_hit_1_right_to_left_');
	animTexJohnnycageHit2LeftToRight = loadAnimationTextures(4, 'johnnycage_hit_2_left_to_right_');
	animTexJohnnycageHit2RightToLeft =  loadAnimationTextures(4, 'johnnycage_hit_2_right_to_left_');
	animTexJohnnycageHit3LeftToRight = loadAnimationTextures(4, 'johnnycage_hit_3_left_to_right_');
	animTexJohnnycageHit3RightToLeft =  loadAnimationTextures(4, 'johnnycage_hit_3_right_to_left_');
	animTexJohnnycageHit4LeftToRight = loadAnimationTextures(6, 'johnnycage_hit_4_left_to_right_');
	animTexJohnnycageHit4RightToLeft =  loadAnimationTextures(6, 'johnnycage_hit_4_right_to_left_');
	animTexJohnnycageHit5LeftToRight = loadAnimationTextures(9, 'johnnycage_hit_5_left_to_right_');
	animTexJohnnycageHit5RightToLeft =  loadAnimationTextures(9, 'johnnycage_hit_5_right_to_left_');
	animTexJohnnycageLost = loadAnimationTextures(8, 'johnnycage_lost_');
	animTexJohnnycageStanceLeftToRight = loadAnimationTextures(8, 'johnnycage_stance_left_to_right_');
	animTexJohnnycageStanceRightToLeft = loadAnimationTextures(8, 'johnnycage_stance_right_to_left_');
	animTexJohnnycageVictory = loadAnimationTextures(15, 'johnnycage_victory_');
	console.log("Load assets johnnycage.json - complete!");

	/* kitana.json */
	animTexKitanaDamageLeftToRight = loadAnimationTextures(4, 'kitana_damage_left_to_right_');
	animTexKitanaDamageRightToLeft = loadAnimationTextures(4, 'kitana_damage_right_to_left_');
	animTexKitanaHit1LeftToRight = loadAnimationTextures(7, 'kitana_hit_1_left_to_right_');
	animTexKitanaHit1RightToLeft =  loadAnimationTextures(7, 'kitana_hit_1_right_to_left_');
	animTexKitanaHit2LeftToRight = loadAnimationTextures(4, 'kitana_hit_2_left_to_right_');
	animTexKitanaHit2RightToLeft =  loadAnimationTextures(4, 'kitana_hit_2_right_to_left_');
	animTexKitanaHit3LeftToRight = loadAnimationTextures(4, 'kitana_hit_3_left_to_right_');
	animTexKitanaHit3RightToLeft =  loadAnimationTextures(4, 'kitana_hit_3_right_to_left_');
	animTexKitanaHit4LeftToRight = loadAnimationTextures(6, 'kitana_hit_4_left_to_right_');
	animTexKitanaHit4RightToLeft =  loadAnimationTextures(6, 'kitana_hit_4_right_to_left_');
	animTexKitanaHit5LeftToRight = loadAnimationTextures(9, 'kitana_hit_5_left_to_right_');
	animTexKitanaHit5RightToLeft =  loadAnimationTextures(9, 'kitana_hit_5_right_to_left_');
	animTexKitanaLost = loadAnimationTextures(8, 'kitana_lost_');
	animTexKitanaStanceLeftToRight = loadAnimationTextures(7, 'kitana_stance_left_to_right_');
	animTexKitanaStanceRightToLeft = loadAnimationTextures(7, 'kitana_stance_right_to_left_');
	animTexKitanaVictory = loadAnimationTextures(13, 'kitana_victory_');
	console.log("Load assets kitana.json - complete!");

	/* kunglao.json */
	animTexKunglaoDamageLeftToRight = loadAnimationTextures(4, 'kunglao_damage_left_to_right_');
	animTexKunglaoDamageRightToLeft = loadAnimationTextures(4, 'kunglao_damage_right_to_left_');
	animTexKunglaoHit1LeftToRight = loadAnimationTextures(7, 'kunglao_hit_1_left_to_right_');
	animTexKunglaoHit1RightToLeft =  loadAnimationTextures(7, 'kunglao_hit_1_right_to_left_');
	animTexKunglaoHit2LeftToRight = loadAnimationTextures(4, 'kunglao_hit_2_left_to_right_');
	animTexKunglaoHit2RightToLeft =  loadAnimationTextures(4, 'kunglao_hit_2_right_to_left_');
	animTexKunglaoHit3LeftToRight = loadAnimationTextures(4, 'kunglao_hit_3_left_to_right_');
	animTexKunglaoHit3RightToLeft =  loadAnimationTextures(4, 'kunglao_hit_3_right_to_left_');
	animTexKunglaoHit4LeftToRight = loadAnimationTextures(6, 'kunglao_hit_4_left_to_right_');
	animTexKunglaoHit4RightToLeft =  loadAnimationTextures(6, 'kunglao_hit_4_right_to_left_');
	animTexKunglaoHit5LeftToRight = loadAnimationTextures(8, 'kunglao_hit_5_left_to_right_');
	animTexKunglaoHit5RightToLeft =  loadAnimationTextures(8, 'kunglao_hit_5_right_to_left_');
	animTexKunglaoLost = loadAnimationTextures(8, 'kunglao_lost_');
	animTexKunglaoStanceLeftToRight = loadAnimationTextures(9, 'kunglao_stance_left_to_right_');
	animTexKunglaoStanceRightToLeft = loadAnimationTextures(9, 'kunglao_stance_right_to_left_');
	animTexKunglaoVictory = loadAnimationTextures(9, 'kunglao_victory_');
	console.log("Load assets kunglao.json - complete!");

	/* liukang.json */
	animTexLiukangDamageLeftToRight = loadAnimationTextures(4, 'liukang_damage_left_to_right_');
	animTexLiukangDamageRightToLeft = loadAnimationTextures(4, 'liukang_damage_right_to_left_');
	animTexLiukangHit1LeftToRight = loadAnimationTextures(7, 'liukang_hit_1_left_to_right_');
	animTexLiukangHit1RightToLeft =  loadAnimationTextures(7, 'liukang_hit_1_right_to_left_');
	animTexLiukangHit2LeftToRight = loadAnimationTextures(4, 'liukang_hit_2_left_to_right_');
	animTexLiukangHit2RightToLeft =  loadAnimationTextures(4, 'liukang_hit_2_right_to_left_');
	animTexLiukangHit3LeftToRight = loadAnimationTextures(4, 'liukang_hit_3_left_to_right_');
	animTexLiukangHit3RightToLeft =  loadAnimationTextures(4, 'liukang_hit_3_right_to_left_');
	animTexLiukangHit4LeftToRight = loadAnimationTextures(6, 'liukang_hit_4_left_to_right_');
	animTexLiukangHit4RightToLeft =  loadAnimationTextures(6, 'liukang_hit_4_right_to_left_');
	animTexLiukangHit5LeftToRight = loadAnimationTextures(9, 'liukang_hit_5_left_to_right_');
	animTexLiukangHit5RightToLeft =  loadAnimationTextures(9, 'liukang_hit_5_right_to_left_');
	animTexLiukangLost = loadAnimationTextures(8, 'liukang_lost_');
	animTexLiukangStanceLeftToRight = loadAnimationTextures(8, 'liukang_stance_left_to_right_');
	animTexLiukangStanceRightToLeft = loadAnimationTextures(8, 'liukang_stance_right_to_left_');
	animTexLiukangVictory = loadAnimationTextures(9, 'liukang_victory_');
	console.log("Load assets liukang.json - complete!");

	/* mileena.json */
	animTexMileenaDamageLeftToRight = loadAnimationTextures(4, 'mileena_damage_left_to_right_');
	animTexMileenaDamageRightToLeft = loadAnimationTextures(4, 'mileena_damage_right_to_left_');
	animTexMileenaHit1LeftToRight = loadAnimationTextures(7, 'mileena_hit_1_left_to_right_');
	animTexMileenaHit1RightToLeft =  loadAnimationTextures(7, 'mileena_hit_1_right_to_left_');
	animTexMileenaHit2LeftToRight = loadAnimationTextures(4, 'mileena_hit_2_left_to_right_');
	animTexMileenaHit2RightToLeft =  loadAnimationTextures(4, 'mileena_hit_2_right_to_left_');
	animTexMileenaHit3LeftToRight = loadAnimationTextures(4, 'mileena_hit_3_left_to_right_');
	animTexMileenaHit3RightToLeft =  loadAnimationTextures(4, 'mileena_hit_3_right_to_left_');
	animTexMileenaHit4LeftToRight = loadAnimationTextures(6, 'mileena_hit_4_left_to_right_');
	animTexMileenaHit4RightToLeft =  loadAnimationTextures(6, 'mileena_hit_4_right_to_left_');
	animTexMileenaHit5LeftToRight = loadAnimationTextures(9, 'mileena_hit_5_left_to_right_');
	animTexMileenaHit5RightToLeft =  loadAnimationTextures(9, 'mileena_hit_5_right_to_left_');
	animTexMileenaLost = loadAnimationTextures(8, 'mileena_lost_');
	animTexMileenaStanceLeftToRight = loadAnimationTextures(13, 'mileena_stance_left_to_right_');
	animTexMileenaStanceRightToLeft = loadAnimationTextures(13, 'mileena_stance_right_to_left_');
	animTexMileenaVictory = loadAnimationTextures(13, 'mileena_victory_');
	console.log("Load assets mileena.json - complete!");

	/* raiden.json */
	animTexRaidenDamageLeftToRight = loadAnimationTextures(4, 'raiden_damage_left_to_right_');
	animTexRaidenDamageRightToLeft = loadAnimationTextures(4, 'raiden_damage_right_to_left_');
	animTexRaidenHit1LeftToRight = loadAnimationTextures(7, 'raiden_hit_1_left_to_right_');
	animTexRaidenHit1RightToLeft =  loadAnimationTextures(7, 'raiden_hit_1_right_to_left_');
	animTexRaidenHit2LeftToRight = loadAnimationTextures(4, 'raiden_hit_2_left_to_right_');
	animTexRaidenHit2RightToLeft =  loadAnimationTextures(4, 'raiden_hit_2_right_to_left_');
	animTexRaidenHit3LeftToRight = loadAnimationTextures(4, 'raiden_hit_3_left_to_right_');
	animTexRaidenHit3RightToLeft =  loadAnimationTextures(4, 'raiden_hit_3_right_to_left_');
	animTexRaidenHit4LeftToRight = loadAnimationTextures(6, 'raiden_hit_4_left_to_right_');
	animTexRaidenHit4RightToLeft =  loadAnimationTextures(6, 'raiden_hit_4_right_to_left_');
	animTexRaidenHit5LeftToRight = loadAnimationTextures(8, 'raiden_hit_5_left_to_right_');
	animTexRaidenHit5RightToLeft =  loadAnimationTextures(8, 'raiden_hit_5_right_to_left_');
	animTexRaidenLost = loadAnimationTextures(8, 'raiden_lost_');
	animTexRaidenStanceLeftToRight = loadAnimationTextures(11, 'raiden_stance_left_to_right_');
	animTexRaidenStanceRightToLeft = loadAnimationTextures(11, 'raiden_stance_right_to_left_');
	animTexRaidenVictory = loadAnimationTextures(10, 'raiden_victory_');
	console.log("Load assets raiden.json - complete!");

	/* reptile.json */
	animTexReptileDamageLeftToRight = loadAnimationTextures(4, 'reptile_damage_left_to_right_');
	animTexReptileDamageRightToLeft = loadAnimationTextures(4, 'reptile_damage_right_to_left_');
	animTexReptileHit1LeftToRight = loadAnimationTextures(7, 'reptile_hit_1_left_to_right_');
	animTexReptileHit1RightToLeft =  loadAnimationTextures(7, 'reptile_hit_1_right_to_left_');
	animTexReptileHit2LeftToRight = loadAnimationTextures(4, 'reptile_hit_2_left_to_right_');
	animTexReptileHit2RightToLeft =  loadAnimationTextures(4, 'reptile_hit_2_right_to_left_');
	animTexReptileHit3LeftToRight = loadAnimationTextures(4, 'reptile_hit_3_left_to_right_');
	animTexReptileHit3RightToLeft =  loadAnimationTextures(4, 'reptile_hit_3_right_to_left_');
	animTexReptileHit4LeftToRight = loadAnimationTextures(6, 'reptile_hit_4_left_to_right_');
	animTexReptileHit4RightToLeft =  loadAnimationTextures(6, 'reptile_hit_4_right_to_left_');
	animTexReptileHit5LeftToRight = loadAnimationTextures(9, 'reptile_hit_5_left_to_right_');
	animTexReptileHit5RightToLeft =  loadAnimationTextures(9, 'reptile_hit_5_right_to_left_');
	animTexReptileLost = loadAnimationTextures(8, 'reptile_lost_');
	animTexReptileStanceLeftToRight = loadAnimationTextures(8, 'reptile_stance_left_to_right_');
	animTexReptileStanceRightToLeft = loadAnimationTextures(8, 'reptile_stance_right_to_left_');
	animTexReptileVictory = loadAnimationTextures(5, 'reptile_victory_');
	console.log("Load assets reptile.json - complete!");

	/* scorpion.json */
	animTexScorpionDamageLeftToRight = loadAnimationTextures(4, 'scorpion_damage_left_to_right_');
	animTexScorpionDamageRightToLeft = loadAnimationTextures(4, 'scorpion_damage_right_to_left_');
	animTexScorpionHit1LeftToRight = loadAnimationTextures(7, 'scorpion_hit_1_left_to_right_');
	animTexScorpionHit1RightToLeft =  loadAnimationTextures(7, 'scorpion_hit_1_right_to_left_');
	animTexScorpionHit2LeftToRight = loadAnimationTextures(4, 'scorpion_hit_2_left_to_right_');
	animTexScorpionHit2RightToLeft =  loadAnimationTextures(4, 'scorpion_hit_2_right_to_left_');
	animTexScorpionHit3LeftToRight = loadAnimationTextures(4, 'scorpion_hit_3_left_to_right_');
	animTexScorpionHit3RightToLeft =  loadAnimationTextures(4, 'scorpion_hit_3_right_to_left_');
	animTexScorpionHit4LeftToRight = loadAnimationTextures(6, 'scorpion_hit_4_left_to_right_');
	animTexScorpionHit4RightToLeft =  loadAnimationTextures(6, 'scorpion_hit_4_right_to_left_');
	animTexScorpionHit5LeftToRight = loadAnimationTextures(9, 'scorpion_hit_5_left_to_right_');
	animTexScorpionHit5RightToLeft =  loadAnimationTextures(9, 'scorpion_hit_5_right_to_left_');
	animTexScorpionLost = loadAnimationTextures(8, 'scorpion_lost_');
	animTexScorpionStanceLeftToRight = loadAnimationTextures(8, 'scorpion_stance_left_to_right_');
	animTexScorpionStanceRightToLeft = loadAnimationTextures(8, 'scorpion_stance_right_to_left_');
	animTexScorpionVictory = loadAnimationTextures(4, 'scorpion_victory_');
	console.log("Load assets scorpion.json - complete!");

	/* shangtsung.json */
	animTexShangtsungDamageLeftToRight = loadAnimationTextures(4, 'shangtsung_damage_left_to_right_');
	animTexShangtsungDamageRightToLeft = loadAnimationTextures(4, 'shangtsung_damage_right_to_left_');
	animTexShangtsungHit1LeftToRight = loadAnimationTextures(7, 'shangtsung_hit_1_left_to_right_');
	animTexShangtsungHit1RightToLeft =  loadAnimationTextures(7, 'shangtsung_hit_1_right_to_left_');
	animTexShangtsungHit2LeftToRight = loadAnimationTextures(4, 'shangtsung_hit_2_left_to_right_');
	animTexShangtsungHit2RightToLeft =  loadAnimationTextures(4, 'shangtsung_hit_2_right_to_left_');
	animTexShangtsungHit3LeftToRight = loadAnimationTextures(4, 'shangtsung_hit_3_left_to_right_');
	animTexShangtsungHit3RightToLeft =  loadAnimationTextures(4, 'shangtsung_hit_3_right_to_left_');
	animTexShangtsungHit4LeftToRight = loadAnimationTextures(6, 'shangtsung_hit_4_left_to_right_');
	animTexShangtsungHit4RightToLeft =  loadAnimationTextures(6, 'shangtsung_hit_4_right_to_left_');
	animTexShangtsungHit5LeftToRight = loadAnimationTextures(8, 'shangtsung_hit_5_left_to_right_');
	animTexShangtsungHit5RightToLeft =  loadAnimationTextures(8, 'shangtsung_hit_5_right_to_left_');
	animTexShangtsungLost = loadAnimationTextures(8, 'shangtsung_lost_');
	animTexShangtsungStanceLeftToRight = loadAnimationTextures(8, 'shangtsung_stance_left_to_right_');
	animTexShangtsungStanceRightToLeft = loadAnimationTextures(8, 'shangtsung_stance_right_to_left_');
	animTexShangtsungVictory = loadAnimationTextures(6, 'shangtsung_victory_');
	console.log("Load assets shangtsung.json - complete!");

	/* shaokahn.json */
	animTexShaokahnDamageRightToLeft = loadAnimationTextures(4, 'shaokahn_damage_right_to_left_');;
	animTexShaokahnHit1RightToLeft = loadAnimationTextures(6, 'shaokahn_hit_1_right_to_left_');
	animTexShaokahnHit2RightToLeft = loadAnimationTextures(6, 'shaokahn_hit_2_right_to_left_');
	animTexShaokahnHit3RightToLeft = loadAnimationTextures(4, 'shaokahn_hit_3_right_to_left_');
	animTexShaokahnHit4RightToLeft = loadAnimationTextures(6, 'shaokahn_hit_4_right_to_left_');
	animTexShaokahnHit5RightToLeft = loadAnimationTextures(7, 'shaokahn_hit_5_right_to_left_');
	animTexShaokahnLost = loadAnimationTextures(12, 'shaokahn_lost_');
	animTexShaokahnStanceRightToLeft = loadAnimationTextures(8, 'shaokahn_stance_right_to_left_');
	animTexShaokahnVictory = loadAnimationTextures(4, 'shaokahn_victory_');
	console.log("Load assets shaokahn.json - complete!");

	/* subzero.json */
	animTexSubzeroDamageLeftToRight = loadAnimationTextures(4, 'subzero_damage_left_to_right_');
	animTexSubzeroDamageRightToLeft = loadAnimationTextures(4, 'subzero_damage_right_to_left_');
	animTexSubzeroHit1LeftToRight = loadAnimationTextures(7, 'subzero_hit_1_left_to_right_');
	animTexSubzeroHit1RightToLeft =  loadAnimationTextures(7, 'subzero_hit_1_right_to_left_');
	animTexSubzeroHit2LeftToRight = loadAnimationTextures(4, 'subzero_hit_2_left_to_right_');
	animTexSubzeroHit2RightToLeft =  loadAnimationTextures(4, 'subzero_hit_2_right_to_left_');
	animTexSubzeroHit3LeftToRight = loadAnimationTextures(4, 'subzero_hit_3_left_to_right_');
	animTexSubzeroHit3RightToLeft =  loadAnimationTextures(4, 'subzero_hit_3_right_to_left_');
	animTexSubzeroHit4LeftToRight = loadAnimationTextures(6, 'subzero_hit_4_left_to_right_');
	animTexSubzeroHit4RightToLeft =  loadAnimationTextures(6, 'subzero_hit_4_right_to_left_');
	animTexSubzeroHit5LeftToRight = loadAnimationTextures(9, 'subzero_hit_5_left_to_right_');
	animTexSubzeroHit5RightToLeft =  loadAnimationTextures(9, 'subzero_hit_5_right_to_left_');
	animTexSubzeroLost = loadAnimationTextures(8, 'subzero_lost_');
	animTexSubzeroStanceLeftToRight = loadAnimationTextures(13, 'subzero_stance_left_to_right_');
	animTexSubzeroStanceRightToLeft = loadAnimationTextures(13, 'subzero_stance_right_to_left_');
	animTexSubzeroVictory = loadAnimationTextures(4, 'subzero_victory_');
	console.log("Load assets subzero.json - complete!");

	/* levels */
	fieldLevels.push(res.level1); /* level1.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level2); /* level2.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level3); /* level3.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level4); /* level4.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level5); /* level5.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level6); /* level6.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level7); /* level7.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level8); /* level8.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level9); /* level9.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level10); /* level10.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level11); /* level11.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level12); /* level12.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level13); /* level13.json */	console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level0); /* level0.json */ console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	

	console.log("Load all assets - complete!");
	
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