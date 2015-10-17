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
	buttonPlusTextures = PIXI.Texture.fromFrame('character_button_plus.png');
	bgCharacterWindowTexture = PIXI.Texture.fromFrame('character_background_small.png');
	borderCharacterWindowTexture = PIXI.Texture.fromFrame('character_border_small.png');
	iconBarakaTexture = PIXI.Texture.fromFrame('baraka.png');
	iconsFightersAll["baraka"] = iconBarakaTexture;
	iconGoroTexture = PIXI.Texture.fromFrame('goro.png');
	iconsFightersAll["goro"] = iconGoroTexture;
	iconJaxTexture = PIXI.Texture.fromFrame('jax.png');
	iconsFightersAll["jax"] = iconJaxTexture;
	iconJohnnycageTexture = PIXI.Texture.fromFrame('johnnycage.png');
	iconsFightersAll["johnnycage"] = iconJohnnycageTexture;
	iconKitanaTexture = PIXI.Texture.fromFrame('kitana.png');
	iconsFightersAll["kitana"] = iconKitanaTexture;
	iconKunglaoTexture = PIXI.Texture.fromFrame('kunglao.png');
	iconsFightersAll["kunglao"] = iconKunglaoTexture;
	iconLiukangTexture = PIXI.Texture.fromFrame('liukang.png');
	iconsFightersAll["liukang"] = iconLiukangTexture;
	iconMileenaTexture = PIXI.Texture.fromFrame('mileena.png');
	iconsFightersAll["mileena"] = iconMileenaTexture;
	iconRaidenTexture = PIXI.Texture.fromFrame('raiden.png');
	iconsFightersAll["raiden"] = iconRaidenTexture;
	iconReptileTexture = PIXI.Texture.fromFrame('reptile.png');
	iconsFightersAll["reptile"] = iconReptileTexture;
	iconScorpionTexture = PIXI.Texture.fromFrame('scorpion.png');
	iconsFightersAll["scorpion"] = iconScorpionTexture;
	iconShangtsungTexture = PIXI.Texture.fromFrame('shangtsung.png');
	iconsFightersAll["shangtsung"] = iconShangtsungTexture;
	iconShaokahnTexture = PIXI.Texture.fromFrame('shaokahn.png');
	iconsFightersAll["shaokahn"] = iconShaokahnTexture;
	iconSubzeroTexture = PIXI.Texture.fromFrame('subzero.png');
	iconsFightersAll["subzero"] = iconSubzeroTexture;
	characterHit1 = PIXI.Texture.fromFrame('character_hit_1.png');
	characterHit2 = PIXI.Texture.fromFrame('character_hit_2.png');
	characterHit3 = PIXI.Texture.fromFrame('character_hit_3.png');
	characterHit4 = PIXI.Texture.fromFrame('character_hit_4.png');
	characterHit5 = PIXI.Texture.fromFrame('character_hit_5.png');
	stairsUpTextures = PIXI.Texture.fromFrame('Stairs_up.png');
	stairsDownTextures = PIXI.Texture.fromFrame('Stairs_down.png');
	hit1Texture = PIXI.Texture.fromFrame('hit_1.png');
	hit2Texture = PIXI.Texture.fromFrame('hit_2.png');
	hit3Texture = PIXI.Texture.fromFrame('hit_3.png');
	hit4Texture = PIXI.Texture.fromFrame('hit_4.png');
	hit5Texture = PIXI.Texture.fromFrame('hit_5.png');
	lifebarTexture = PIXI.Texture.fromFrame('lifebar.png');

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
	animFightersTextures["baraka:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'baraka_damage_left_to_right_');
	animFightersTextures["baraka:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'baraka_damage_right_to_left_');
	animFightersTextures["baraka:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'baraka_hit_1_left_to_right_');
	animFightersTextures["baraka:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'baraka_hit_1_right_to_left_');
	animFightersTextures["baraka:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'baraka_hit_2_left_to_right_');
	animFightersTextures["baraka:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'baraka_hit_2_right_to_left_');
	animFightersTextures["baraka:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'baraka_hit_3_left_to_right_');
	animFightersTextures["baraka:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'baraka_hit_3_right_to_left_');
	animFightersTextures["baraka:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'baraka_hit_4_left_to_right_');
	animFightersTextures["baraka:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'baraka_hit_4_right_to_left_');
	animFightersTextures["baraka:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'baraka_hit_5_left_to_right_');
	animFightersTextures["baraka:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'baraka_hit_5_right_to_left_');
	animFightersTextures["baraka:LOST"] = loadAnimationTextures(8, 'baraka_lost_');
	animFightersTextures["baraka:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(10, 'baraka_stance_left_to_right_');
	animFightersTextures["baraka:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(10, 'baraka_stance_right_to_left_');
	animFightersTextures["baraka:VICTORY"] = loadAnimationTextures(11, 'baraka_victory_');
	console.log("Load assets baraka.json - complete!");

	/* goro.json */
	animFightersTextures["goro:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'goro_damage_right_to_left_');;
	animFightersTextures["goro:HIT_1:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'goro_hit_1_right_to_left_');
	animFightersTextures["goro:HIT_2:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'goro_hit_2_right_to_left_');
	animFightersTextures["goro:HIT_3:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'goro_hit_3_right_to_left_');
	animFightersTextures["goro:HIT_4:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'goro_hit_4_right_to_left_');
	animFightersTextures["goro:HIT_5:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'goro_hit_5_right_to_left_');
	animFightersTextures["goro:LOST"] = loadAnimationTextures(7, 'goro_lost_');
	animFightersTextures["goro:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'goro_stance_right_to_left_');
	animFightersTextures["goro:VICTORY"] = loadAnimationTextures(4, 'goro_victory_');
	console.log("Load assets goro.json - complete!");

	/* jax.json */
	animFightersTextures["jax:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'jax_damage_left_to_right_');
	animFightersTextures["jax:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'jax_damage_right_to_left_');
	animFightersTextures["jax:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'jax_hit_1_left_to_right_');
	animFightersTextures["jax:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'jax_hit_1_right_to_left_');
	animFightersTextures["jax:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'jax_hit_2_left_to_right_');
	animFightersTextures["jax:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'jax_hit_2_right_to_left_');
	animFightersTextures["jax:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'jax_hit_3_left_to_right_');
	animFightersTextures["jax:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'jax_hit_3_right_to_left_');
	animFightersTextures["jax:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'jax_hit_4_left_to_right_');
	animFightersTextures["jax:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'jax_hit_4_right_to_left_');
	animFightersTextures["jax:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'jax_hit_5_left_to_right_');
	animFightersTextures["jax:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'jax_hit_5_right_to_left_');
	animFightersTextures["jax:LOST"] = loadAnimationTextures(8, 'jax_lost_');
	animFightersTextures["jax:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'jax_stance_left_to_right_');
	animFightersTextures["jax:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'jax_stance_right_to_left_');
	animFightersTextures["jax:VICTORY"] = loadAnimationTextures(8, 'jax_victory_');
	console.log("Load assets jax.json - complete!");

	/* johnnycage.json */
	animFightersTextures["johnnycage:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'johnnycage_damage_left_to_right_');
	animFightersTextures["johnnycage:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'johnnycage_damage_right_to_left_');
	animFightersTextures["johnnycage:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'johnnycage_hit_1_left_to_right_');
	animFightersTextures["johnnycage:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'johnnycage_hit_1_right_to_left_');
	animFightersTextures["johnnycage:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'johnnycage_hit_2_left_to_right_');
	animFightersTextures["johnnycage:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'johnnycage_hit_2_right_to_left_');
	animFightersTextures["johnnycage:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'johnnycage_hit_3_left_to_right_');
	animFightersTextures["johnnycage:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'johnnycage_hit_3_right_to_left_');
	animFightersTextures["johnnycage:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'johnnycage_hit_4_left_to_right_');
	animFightersTextures["johnnycage:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'johnnycage_hit_4_right_to_left_');
	animFightersTextures["johnnycage:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'johnnycage_hit_5_left_to_right_');
	animFightersTextures["johnnycage:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'johnnycage_hit_5_right_to_left_');
	animFightersTextures["johnnycage:LOST"] = loadAnimationTextures(8, 'johnnycage_lost_');
	animFightersTextures["johnnycage:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'johnnycage_stance_left_to_right_');
	animFightersTextures["johnnycage:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'johnnycage_stance_right_to_left_');
	animFightersTextures["johnnycage:VICTORY"] = loadAnimationTextures(15, 'johnnycage_victory_');
	console.log("Load assets johnnycage.json - complete!");

	/* kitana.json */
	animFightersTextures["kitana:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'kitana_damage_left_to_right_');
	animFightersTextures["kitana:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'kitana_damage_right_to_left_');
	animFightersTextures["kitana:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'kitana_hit_1_left_to_right_');
	animFightersTextures["kitana:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'kitana_hit_1_right_to_left_');
	animFightersTextures["kitana:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'kitana_hit_2_left_to_right_');
	animFightersTextures["kitana:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'kitana_hit_2_right_to_left_');
	animFightersTextures["kitana:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'kitana_hit_3_left_to_right_');
	animFightersTextures["kitana:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'kitana_hit_3_right_to_left_');
	animFightersTextures["kitana:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'kitana_hit_4_left_to_right_');
	animFightersTextures["kitana:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'kitana_hit_4_right_to_left_');
	animFightersTextures["kitana:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'kitana_hit_5_left_to_right_');
	animFightersTextures["kitana:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'kitana_hit_5_right_to_left_');
	animFightersTextures["kitana:LOST"] = loadAnimationTextures(8, 'kitana_lost_');
	animFightersTextures["kitana:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'kitana_stance_left_to_right_');
	animFightersTextures["kitana:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'kitana_stance_right_to_left_');
	animFightersTextures["kitana:VICTORY"] = loadAnimationTextures(13, 'kitana_victory_');
	console.log("Load assets kitana.json - complete!");

	/* kunglao.json */
	animFightersTextures["kunglao:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'kunglao_damage_left_to_right_');
	animFightersTextures["kunglao:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'kunglao_damage_right_to_left_');
	animFightersTextures["kunglao:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'kunglao_hit_1_left_to_right_');
	animFightersTextures["kunglao:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'kunglao_hit_1_right_to_left_');
	animFightersTextures["kunglao:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'kunglao_hit_2_left_to_right_');
	animFightersTextures["kunglao:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'kunglao_hit_2_right_to_left_');
	animFightersTextures["kunglao:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'kunglao_hit_3_left_to_right_');
	animFightersTextures["kunglao:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'kunglao_hit_3_right_to_left_');
	animFightersTextures["kunglao:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'kunglao_hit_4_left_to_right_');
	animFightersTextures["kunglao:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'kunglao_hit_4_right_to_left_');
	animFightersTextures["kunglao:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'kunglao_hit_5_left_to_right_');
	animFightersTextures["kunglao:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'kunglao_hit_5_right_to_left_');
	animFightersTextures["kunglao:LOST"] = loadAnimationTextures(8, 'kunglao_lost_');
	animFightersTextures["kunglao:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'kunglao_stance_left_to_right_');
	animFightersTextures["kunglao:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(9, 'kunglao_stance_right_to_left_');
	animFightersTextures["kunglao:VICTORY"] = loadAnimationTextures(9, 'kunglao_victory_');
	console.log("Load assets kunglao.json - complete!");

	/* liukang.json */
	animFightersTextures["liukang:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'liukang_damage_left_to_right_');
	animFightersTextures["liukang:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'liukang_damage_right_to_left_');
	animFightersTextures["liukang:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'liukang_hit_1_left_to_right_');
	animFightersTextures["liukang:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'liukang_hit_1_right_to_left_');
	animFightersTextures["liukang:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'liukang_hit_2_left_to_right_');
	animFightersTextures["liukang:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'liukang_hit_2_right_to_left_');
	animFightersTextures["liukang:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'liukang_hit_3_left_to_right_');
	animFightersTextures["liukang:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'liukang_hit_3_right_to_left_');
	animFightersTextures["liukang:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'liukang_hit_4_left_to_right_');
	animFightersTextures["liukang:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'liukang_hit_4_right_to_left_');
	animFightersTextures["liukang:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'liukang_hit_5_left_to_right_');
	animFightersTextures["liukang:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'liukang_hit_5_right_to_left_');
	animFightersTextures["liukang:LOST"] = loadAnimationTextures(8, 'liukang_lost_');
	animFightersTextures["liukang:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'liukang_stance_left_to_right_');
	animFightersTextures["liukang:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'liukang_stance_right_to_left_');
	animFightersTextures["liukang:VICTORY"] = loadAnimationTextures(9, 'liukang_victory_');
	console.log("Load assets liukang.json - complete!");

	/* mileena.json */
	animFightersTextures["mileena:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'mileena_damage_left_to_right_');
	animFightersTextures["mileena:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'mileena_damage_right_to_left_');
	animFightersTextures["mileena:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'mileena_hit_1_left_to_right_');
	animFightersTextures["mileena:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'mileena_hit_1_right_to_left_');
	animFightersTextures["mileena:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'mileena_hit_2_left_to_right_');
	animFightersTextures["mileena:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'mileena_hit_2_right_to_left_');
	animFightersTextures["mileena:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'mileena_hit_3_left_to_right_');
	animFightersTextures["mileena:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'mileena_hit_3_right_to_left_');
	animFightersTextures["mileena:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'mileena_hit_4_left_to_right_');
	animFightersTextures["mileena:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'mileena_hit_4_right_to_left_');
	animFightersTextures["mileena:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'mileena_hit_5_left_to_right_');
	animFightersTextures["mileena:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'mileena_hit_5_right_to_left_');
	animFightersTextures["mileena:LOST"] = loadAnimationTextures(8, 'mileena_lost_');
	animFightersTextures["mileena:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(13, 'mileena_stance_left_to_right_');
	animFightersTextures["mileena:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(13, 'mileena_stance_right_to_left_');
	animFightersTextures["mileena:VICTORY"] = loadAnimationTextures(13, 'mileena_victory_');
	console.log("Load assets mileena.json - complete!");

	/* raiden.json */
	animFightersTextures["raiden:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'raiden_damage_left_to_right_');
	animFightersTextures["raiden:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'raiden_damage_right_to_left_');
	animFightersTextures["raiden:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'raiden_hit_1_left_to_right_');
	animFightersTextures["raiden:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'raiden_hit_1_right_to_left_');
	animFightersTextures["raiden:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'raiden_hit_2_left_to_right_');
	animFightersTextures["raiden:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'raiden_hit_2_right_to_left_');
	animFightersTextures["raiden:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'raiden_hit_3_left_to_right_');
	animFightersTextures["raiden:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'raiden_hit_3_right_to_left_');
	animFightersTextures["raiden:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'raiden_hit_4_left_to_right_');
	animFightersTextures["raiden:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'raiden_hit_4_right_to_left_');
	animFightersTextures["raiden:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'raiden_hit_5_left_to_right_');
	animFightersTextures["raiden:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'raiden_hit_5_right_to_left_');
	animFightersTextures["raiden:LOST"] = loadAnimationTextures(8, 'raiden_lost_');
	animFightersTextures["raiden:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(11, 'raiden_stance_left_to_right_');
	animFightersTextures["raiden:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(11, 'raiden_stance_right_to_left_');
	animFightersTextures["raiden:VICTORY"] = loadAnimationTextures(10, 'raiden_victory_');
	console.log("Load assets raiden.json - complete!");

	/* reptile.json */
	animFightersTextures["reptile:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'reptile_damage_left_to_right_');
	animFightersTextures["reptile:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'reptile_damage_right_to_left_');
	animFightersTextures["reptile:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'reptile_hit_1_left_to_right_');
	animFightersTextures["reptile:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'reptile_hit_1_right_to_left_');
	animFightersTextures["reptile:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'reptile_hit_2_left_to_right_');
	animFightersTextures["reptile:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'reptile_hit_2_right_to_left_');
	animFightersTextures["reptile:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'reptile_hit_3_left_to_right_');
	animFightersTextures["reptile:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'reptile_hit_3_right_to_left_');
	animFightersTextures["reptile:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'reptile_hit_4_left_to_right_');
	animFightersTextures["reptile:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'reptile_hit_4_right_to_left_');
	animFightersTextures["reptile:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'reptile_hit_5_left_to_right_');
	animFightersTextures["reptile:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'reptile_hit_5_right_to_left_');
	animFightersTextures["reptile:LOST"] = loadAnimationTextures(8, 'reptile_lost_');
	animFightersTextures["reptile:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'reptile_stance_left_to_right_');
	animFightersTextures["reptile:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'reptile_stance_right_to_left_');
	animFightersTextures["reptile:VICTORY"] = loadAnimationTextures(5, 'reptile_victory_');
	console.log("Load assets reptile.json - complete!");

	/* scorpion.json */
	animFightersTextures["scorpion:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'scorpion_damage_left_to_right_');
	animFightersTextures["scorpion:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'scorpion_damage_right_to_left_');
	animFightersTextures["scorpion:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'scorpion_hit_1_left_to_right_');
	animFightersTextures["scorpion:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'scorpion_hit_1_right_to_left_');
	animFightersTextures["scorpion:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'scorpion_hit_2_left_to_right_');
	animFightersTextures["scorpion:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'scorpion_hit_2_right_to_left_');
	animFightersTextures["scorpion:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'scorpion_hit_3_left_to_right_');
	animFightersTextures["scorpion:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'scorpion_hit_3_right_to_left_');
	animFightersTextures["scorpion:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'scorpion_hit_4_left_to_right_');
	animFightersTextures["scorpion:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'scorpion_hit_4_right_to_left_');
	animFightersTextures["scorpion:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'scorpion_hit_5_left_to_right_');
	animFightersTextures["scorpion:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'scorpion_hit_5_right_to_left_');
	animFightersTextures["scorpion:LOST"] = loadAnimationTextures(8, 'scorpion_lost_');
	animFightersTextures["scorpion:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'scorpion_stance_left_to_right_');
	animFightersTextures["scorpion:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'scorpion_stance_right_to_left_');
	animFightersTextures["scorpion:VICTORY"] = loadAnimationTextures(4, 'scorpion_victory_');
	console.log("Load assets scorpion.json - complete!");

	/* shangtsung.json */
	animFightersTextures["shangtsung:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'shangtsung_damage_left_to_right_');
	animFightersTextures["shangtsung:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'shangtsung_damage_right_to_left_');
	animFightersTextures["shangtsung:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'shangtsung_hit_1_left_to_right_');
	animFightersTextures["shangtsung:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'shangtsung_hit_1_right_to_left_');
	animFightersTextures["shangtsung:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'shangtsung_hit_2_left_to_right_');
	animFightersTextures["shangtsung:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'shangtsung_hit_2_right_to_left_');
	animFightersTextures["shangtsung:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'shangtsung_hit_3_left_to_right_');
	animFightersTextures["shangtsung:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'shangtsung_hit_3_right_to_left_');
	animFightersTextures["shangtsung:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'shangtsung_hit_4_left_to_right_');
	animFightersTextures["shangtsung:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'shangtsung_hit_4_right_to_left_');
	animFightersTextures["shangtsung:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'shangtsung_hit_5_left_to_right_');
	animFightersTextures["shangtsung:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'shangtsung_hit_5_right_to_left_');
	animFightersTextures["shangtsung:LOST"] = loadAnimationTextures(8, 'shangtsung_lost_');
	animFightersTextures["shangtsung:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'shangtsung_stance_left_to_right_');
	animFightersTextures["shangtsung:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'shangtsung_stance_right_to_left_');
	animFightersTextures["shangtsung:VICTORY"] = loadAnimationTextures(6, 'shangtsung_victory_');
	console.log("Load assets shangtsung.json - complete!");

	/* shaokahn.json */
	animFightersTextures["shaokahn:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'shaokahn_damage_right_to_left_');;
	animFightersTextures["shaokahn:HIT_1:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'shaokahn_hit_1_right_to_left_');
	animFightersTextures["shaokahn:HIT_2:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'shaokahn_hit_2_right_to_left_');
	animFightersTextures["shaokahn:HIT_3:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'shaokahn_hit_3_right_to_left_');
	animFightersTextures["shaokahn:HIT_4:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'shaokahn_hit_4_right_to_left_');
	animFightersTextures["shaokahn:HIT_5:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'shaokahn_hit_5_right_to_left_');
	animFightersTextures["shaokahn:LOST"] = loadAnimationTextures(12, 'shaokahn_lost_');
	animFightersTextures["shaokahn:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'shaokahn_stance_right_to_left_');
	animFightersTextures["shaokahn:VICTORY"] = loadAnimationTextures(4, 'shaokahn_victory_');
	console.log("Load assets shaokahn.json - complete!");

	/* subzero.json */
	animFightersTextures["subzero:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'subzero_damage_left_to_right_');
	animFightersTextures["subzero:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'subzero_damage_right_to_left_');
	animFightersTextures["subzero:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'subzero_hit_1_left_to_right_');
	animFightersTextures["subzero:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'subzero_hit_1_right_to_left_');
	animFightersTextures["subzero:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'subzero_hit_2_left_to_right_');
	animFightersTextures["subzero:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'subzero_hit_2_right_to_left_');
	animFightersTextures["subzero:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'subzero_hit_3_left_to_right_');
	animFightersTextures["subzero:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(4, 'subzero_hit_3_right_to_left_');
	animFightersTextures["subzero:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'subzero_hit_4_left_to_right_');
	animFightersTextures["subzero:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'subzero_hit_4_right_to_left_');
	animFightersTextures["subzero:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'subzero_hit_5_left_to_right_');
	animFightersTextures["subzero:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(9, 'subzero_hit_5_right_to_left_');
	animFightersTextures["subzero:LOST"] = loadAnimationTextures(8, 'subzero_lost_');
	animFightersTextures["subzero:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(13, 'subzero_stance_left_to_right_');
	animFightersTextures["subzero:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(13, 'subzero_stance_right_to_left_');
	animFightersTextures["subzero:VICTORY"] = loadAnimationTextures(4, 'subzero_victory_');
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