var bgPreloaderSprite;
var preloaderProgressAssetsText;
var preloaderStyleText = { font : 'bold 48px Arial', fill : '#FFFF80', stroke : '#FF8000', strokeThickness : 2, wordWrap : true, wordWrapWidth : 600 }; 
var preloaderComplete = 0;  // количество завершенных процессов.
var preloaderPercentSounds = 0;
var preloaderPercentTextures = 0;

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

	// console.log("Preloader: show");
        
        preloaderProgressAssets();

	preloaderLoadAssets();
        preloaderLoadSounds();
}

function preloaderProgressAssets()
{
    preloaderProgressAssetsText = new PIXI.Text("Загрузка", preloaderStyleText); 
    preloaderProgressAssetsText.x = 280;
    preloaderProgressAssetsText.y = 550;
    stage.addChild(preloaderProgressAssetsText);
}

function preloaderLoadAssets()
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
	loader.on('complete',onAssetsLoaded);
	loader.on('progress',onProgressLoad);
	loader.load();
}

function onProgressLoad()
{
        preloaderPercentTextures = (Math.round(this.progress) / 2);
	preloaderProgressAssetsText.text = "Загрузка " + (preloaderPercentTextures + preloaderPercentSounds) + "%";
}

function onAssetsLoaded(loader, res) 
{
        preloaderComplete++;
        preloaderPercentTextures = 50;
        preloaderProgressAssetsText.text = "Загрузка " + (preloaderPercentTextures + preloaderPercentSounds) + "%";
    
        bgTexture = res.bgImage.texture; /* background.jpg */
	buttonTexture = res.buttonImage.texture; /* button.png */
	borderTexture = res.borderImage.texture; /* border_screen.png */
	blueportalTexture = res.blueportalImage.texture; /* blueportalImage.png */
	// console.log("Load assets textures - complete!");

	/* game.json */
	buttonPlusTextures = PIXI.Texture.fromFrame('character_button_plus.png');
	bgCharacterWindowTexture = PIXI.Texture.fromFrame('character_background_small.png');
	borderCharacterWindowTexture = PIXI.Texture.fromFrame('character_border_small.png');
	borderWindowTexture = PIXI.Texture.fromFrame('window_border.png');
	bgWindowTexture = PIXI.Texture.fromFrame('window_background.png');
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
	soundOnTexture = PIXI.Texture.fromFrame('sound.png');
	soundOffTexture = PIXI.Texture.fromFrame('sound_off.png');
	musicOnTexture = PIXI.Texture.fromFrame('music.png');
	musicOffTexture = PIXI.Texture.fromFrame('music_off.png');
	informationTexture = PIXI.Texture.fromFrame('information.png');
	
	// console.log("Load assets game.json - complete!");

	/* blood.json */
	animTexBlood = loadAnimationTextures(13, 'blood_');
	// console.log("Load assets blood.json - complete!");

	/* drugon.json */
	animTexDrugonLeft = loadAnimationTextures(20, 'drugon_left_');
	animTexDrugonRight = loadAnimationTextures(20, 'drugon_right_');
	// console.log("Load assets drugon.json - complete!");

	/* flash.json */
	animTexFlash = loadAnimationTextures(11, 'flash_');
	// console.log("Load assets flash.json - complete!");

	/* levels.json */
	texuresLevels = loadAnimationTextures(13, 'level_');
	// console.log("Load assets levels.json - complete!");

	/* baraka.json */
	animFightersTextures["baraka:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'baraka_damage_left_to_right_');
	animFightersTextures["baraka:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'baraka_damage_right_to_left_');
	animFightersTextures["baraka:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'baraka_hit_1_left_to_right_');
	animFightersTextures["baraka:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'baraka_hit_1_right_to_left_');
	animFightersTextures["baraka:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'baraka_hit_2_left_to_right_');
	animFightersTextures["baraka:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'baraka_hit_2_right_to_left_');
	animFightersTextures["baraka:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'baraka_hit_3_left_to_right_');
	animFightersTextures["baraka:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'baraka_hit_3_right_to_left_');
	animFightersTextures["baraka:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'baraka_hit_4_left_to_right_');
	animFightersTextures["baraka:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'baraka_hit_4_right_to_left_');
	animFightersTextures["baraka:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'baraka_hit_5_left_to_right_');
	animFightersTextures["baraka:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'baraka_hit_5_right_to_left_');
	animFightersTextures["baraka:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'baraka_lost_');
	animFightersTextures["baraka:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'baraka_lost_');
	animFightersTextures["baraka:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'baraka_stance_left_to_right_');
	animFightersTextures["baraka:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(9, 'baraka_stance_right_to_left_');
	animFightersTextures["baraka:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(10, 'baraka_victory_');
	animFightersTextures["baraka:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(10, 'baraka_victory_');
	// console.log("Load assets baraka.json - complete!");

	/* goro.json */
	animFightersTextures["goro:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'goro_damage_right_to_left_');;
	animFightersTextures["goro:HIT_1:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'goro_hit_1_right_to_left_');
	animFightersTextures["goro:HIT_2:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'goro_hit_2_right_to_left_');
	animFightersTextures["goro:HIT_3:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'goro_hit_3_right_to_left_');
	animFightersTextures["goro:HIT_4:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'goro_hit_4_right_to_left_');
	animFightersTextures["goro:HIT_5:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'goro_hit_5_right_to_left_');
	animFightersTextures["goro:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'goro_lost_');
	animFightersTextures["goro:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'goro_stance_right_to_left_');
	animFightersTextures["goro:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'goro_victory_');
	// console.log("Load assets goro.json - complete!");

	/* jax.json */
	animFightersTextures["jax:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'jax_damage_left_to_right_');
	animFightersTextures["jax:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'jax_damage_right_to_left_');
	animFightersTextures["jax:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'jax_hit_1_left_to_right_');
	animFightersTextures["jax:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'jax_hit_1_right_to_left_');
	animFightersTextures["jax:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'jax_hit_2_left_to_right_');
	animFightersTextures["jax:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'jax_hit_2_right_to_left_');
	animFightersTextures["jax:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'jax_hit_3_left_to_right_');
	animFightersTextures["jax:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'jax_hit_3_right_to_left_');
	animFightersTextures["jax:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'jax_hit_4_left_to_right_');
	animFightersTextures["jax:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'jax_hit_4_right_to_left_');
	animFightersTextures["jax:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'jax_hit_5_left_to_right_');
	animFightersTextures["jax:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'jax_hit_5_right_to_left_');
	animFightersTextures["jax:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'jax_lost_');
	animFightersTextures["jax:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'jax_lost_');
	animFightersTextures["jax:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'jax_stance_left_to_right_');
	animFightersTextures["jax:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'jax_stance_right_to_left_');
	animFightersTextures["jax:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'jax_victory_');
	animFightersTextures["jax:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'jax_victory_');
	// console.log("Load assets jax.json - complete!");

	/* johnnycage.json */
	animFightersTextures["johnnycage:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'johnnycage_damage_left_to_right_');
	animFightersTextures["johnnycage:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'johnnycage_damage_right_to_left_');
	animFightersTextures["johnnycage:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'johnnycage_hit_1_left_to_right_');
	animFightersTextures["johnnycage:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'johnnycage_hit_1_right_to_left_');
	animFightersTextures["johnnycage:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'johnnycage_hit_2_left_to_right_');
	animFightersTextures["johnnycage:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'johnnycage_hit_2_right_to_left_');
	animFightersTextures["johnnycage:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'johnnycage_hit_3_left_to_right_');
	animFightersTextures["johnnycage:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'johnnycage_hit_3_right_to_left_');
	animFightersTextures["johnnycage:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'johnnycage_hit_4_left_to_right_');
	animFightersTextures["johnnycage:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'johnnycage_hit_4_right_to_left_');
	animFightersTextures["johnnycage:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'johnnycage_hit_5_left_to_right_');
	animFightersTextures["johnnycage:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'johnnycage_hit_5_right_to_left_');
	animFightersTextures["johnnycage:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'johnnycage_lost_');
	animFightersTextures["johnnycage:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'johnnycage_lost_');
	animFightersTextures["johnnycage:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'johnnycage_stance_left_to_right_');
	animFightersTextures["johnnycage:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'johnnycage_stance_right_to_left_');
	animFightersTextures["johnnycage:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(14, 'johnnycage_victory_');
	animFightersTextures["johnnycage:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(14, 'johnnycage_victory_');
	// console.log("Load assets johnnycage.json - complete!");

	/* kitana.json */
	animFightersTextures["kitana:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'kitana_damage_left_to_right_');
	animFightersTextures["kitana:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'kitana_damage_right_to_left_');
	animFightersTextures["kitana:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'kitana_hit_1_left_to_right_');
	animFightersTextures["kitana:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'kitana_hit_1_right_to_left_');
	animFightersTextures["kitana:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'kitana_hit_2_left_to_right_');
	animFightersTextures["kitana:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'kitana_hit_2_right_to_left_');
	animFightersTextures["kitana:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'kitana_hit_3_left_to_right_');
	animFightersTextures["kitana:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'kitana_hit_3_right_to_left_');
	animFightersTextures["kitana:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'kitana_hit_4_left_to_right_');
	animFightersTextures["kitana:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'kitana_hit_4_right_to_left_');
	animFightersTextures["kitana:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'kitana_hit_5_left_to_right_');
	animFightersTextures["kitana:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'kitana_hit_5_right_to_left_');
	animFightersTextures["kitana:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'kitana_lost_');
	animFightersTextures["kitana:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'kitana_lost_');
	animFightersTextures["kitana:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'kitana_stance_left_to_right_');
	animFightersTextures["kitana:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'kitana_stance_right_to_left_');
	animFightersTextures["kitana:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(12, 'kitana_victory_');
	animFightersTextures["kitana:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(12, 'kitana_victory_');
	// console.log("Load assets kitana.json - complete!");

	/* kunglao.json */
	animFightersTextures["kunglao:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'kunglao_damage_left_to_right_');
	animFightersTextures["kunglao:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'kunglao_damage_right_to_left_');
	animFightersTextures["kunglao:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'kunglao_hit_1_left_to_right_');
	animFightersTextures["kunglao:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'kunglao_hit_1_right_to_left_');
	animFightersTextures["kunglao:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'kunglao_hit_2_left_to_right_');
	animFightersTextures["kunglao:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'kunglao_hit_2_right_to_left_');
	animFightersTextures["kunglao:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'kunglao_hit_3_left_to_right_');
	animFightersTextures["kunglao:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'kunglao_hit_3_right_to_left_');
	animFightersTextures["kunglao:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'kunglao_hit_4_left_to_right_');
	animFightersTextures["kunglao:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'kunglao_hit_4_right_to_left_');
	animFightersTextures["kunglao:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'kunglao_hit_5_left_to_right_');
	animFightersTextures["kunglao:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'kunglao_hit_5_right_to_left_');
	animFightersTextures["kunglao:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'kunglao_lost_');
	animFightersTextures["kunglao:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'kunglao_lost_');
	animFightersTextures["kunglao:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'kunglao_stance_left_to_right_');
	animFightersTextures["kunglao:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'kunglao_stance_right_to_left_');
	animFightersTextures["kunglao:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'kunglao_victory_');
	animFightersTextures["kunglao:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'kunglao_victory_');
	// console.log("Load assets kunglao.json - complete!");

	/* liukang.json */
	animFightersTextures["liukang:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'liukang_damage_left_to_right_');
	animFightersTextures["liukang:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'liukang_damage_right_to_left_');
	animFightersTextures["liukang:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'liukang_hit_1_left_to_right_');
	animFightersTextures["liukang:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'liukang_hit_1_right_to_left_');
	animFightersTextures["liukang:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'liukang_hit_2_left_to_right_');
	animFightersTextures["liukang:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'liukang_hit_2_right_to_left_');
	animFightersTextures["liukang:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'liukang_hit_3_left_to_right_');
	animFightersTextures["liukang:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'liukang_hit_3_right_to_left_');
	animFightersTextures["liukang:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'liukang_hit_4_left_to_right_');
	animFightersTextures["liukang:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'liukang_hit_4_right_to_left_');
	animFightersTextures["liukang:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'liukang_hit_5_left_to_right_');
	animFightersTextures["liukang:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'liukang_hit_5_right_to_left_');
	animFightersTextures["liukang:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'liukang_lost_');
	animFightersTextures["liukang:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'liukang_lost_');
	animFightersTextures["liukang:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'liukang_stance_left_to_right_');
	animFightersTextures["liukang:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'liukang_stance_right_to_left_');
	animFightersTextures["liukang:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'liukang_victory_');
	animFightersTextures["liukang:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(8, 'liukang_victory_');
	// console.log("Load assets liukang.json - complete!");

	/* mileena.json */
	animFightersTextures["mileena:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'mileena_damage_left_to_right_');
	animFightersTextures["mileena:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'mileena_damage_right_to_left_');
	animFightersTextures["mileena:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'mileena_hit_1_left_to_right_');
	animFightersTextures["mileena:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'mileena_hit_1_right_to_left_');
	animFightersTextures["mileena:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'mileena_hit_2_left_to_right_');
	animFightersTextures["mileena:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'mileena_hit_2_right_to_left_');
	animFightersTextures["mileena:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'mileena_hit_3_left_to_right_');
	animFightersTextures["mileena:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'mileena_hit_3_right_to_left_');
	animFightersTextures["mileena:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'mileena_hit_4_left_to_right_');
	animFightersTextures["mileena:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'mileena_hit_4_right_to_left_');
	animFightersTextures["mileena:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'mileena_hit_5_left_to_right_');
	animFightersTextures["mileena:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'mileena_hit_5_right_to_left_');
	animFightersTextures["mileena:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'mileena_lost_');
	animFightersTextures["mileena:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'mileena_lost_');
	animFightersTextures["mileena:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(12, 'mileena_stance_left_to_right_');
	animFightersTextures["mileena:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(12, 'mileena_stance_right_to_left_');
	animFightersTextures["mileena:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(12, 'mileena_victory_');
	animFightersTextures["mileena:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(12, 'mileena_victory_');
	// console.log("Load assets mileena.json - complete!");

	/* raiden.json */
	animFightersTextures["raiden:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'raiden_damage_left_to_right_');
	animFightersTextures["raiden:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'raiden_damage_right_to_left_');
	animFightersTextures["raiden:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'raiden_hit_1_left_to_right_');
	animFightersTextures["raiden:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'raiden_hit_1_right_to_left_');
	animFightersTextures["raiden:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'raiden_hit_2_left_to_right_');
	animFightersTextures["raiden:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'raiden_hit_2_right_to_left_');
	animFightersTextures["raiden:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'raiden_hit_3_left_to_right_');
	animFightersTextures["raiden:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'raiden_hit_3_right_to_left_');
	animFightersTextures["raiden:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'raiden_hit_4_left_to_right_');
	animFightersTextures["raiden:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'raiden_hit_4_right_to_left_');
	animFightersTextures["raiden:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'raiden_hit_5_left_to_right_');
	animFightersTextures["raiden:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'raiden_hit_5_right_to_left_');
	animFightersTextures["raiden:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'raiden_lost_');
	animFightersTextures["raiden:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'raiden_lost_');
	animFightersTextures["raiden:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(10, 'raiden_stance_left_to_right_');
	animFightersTextures["raiden:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(10, 'raiden_stance_right_to_left_');
	animFightersTextures["raiden:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(9, 'raiden_victory_');
	animFightersTextures["raiden:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(9, 'raiden_victory_');
	// console.log("Load assets raiden.json - complete!");

	/* reptile.json */
	animFightersTextures["reptile:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'reptile_damage_left_to_right_');
	animFightersTextures["reptile:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'reptile_damage_right_to_left_');
	animFightersTextures["reptile:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'reptile_hit_1_left_to_right_');
	animFightersTextures["reptile:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'reptile_hit_1_right_to_left_');
	animFightersTextures["reptile:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'reptile_hit_2_left_to_right_');
	animFightersTextures["reptile:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'reptile_hit_2_right_to_left_');
	animFightersTextures["reptile:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'reptile_hit_3_left_to_right_');
	animFightersTextures["reptile:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'reptile_hit_3_right_to_left_');
	animFightersTextures["reptile:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'reptile_hit_4_left_to_right_');
	animFightersTextures["reptile:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'reptile_hit_4_right_to_left_');
	animFightersTextures["reptile:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'reptile_hit_5_left_to_right_');
	animFightersTextures["reptile:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'reptile_hit_5_right_to_left_');
	animFightersTextures["reptile:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'reptile_lost_');
	animFightersTextures["reptile:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'reptile_lost_');
	animFightersTextures["reptile:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'reptile_stance_left_to_right_');
	animFightersTextures["reptile:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'reptile_stance_right_to_left_');
	animFightersTextures["reptile:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(4, 'reptile_victory_');
	animFightersTextures["reptile:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(4, 'reptile_victory_');
	// console.log("Load assets reptile.json - complete!");

	/* scorpion.json */
	animFightersTextures["scorpion:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'scorpion_damage_left_to_right_');
	animFightersTextures["scorpion:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'scorpion_damage_right_to_left_');
	animFightersTextures["scorpion:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'scorpion_hit_1_left_to_right_');
	animFightersTextures["scorpion:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'scorpion_hit_1_right_to_left_');
	animFightersTextures["scorpion:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'scorpion_hit_2_left_to_right_');
	animFightersTextures["scorpion:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'scorpion_hit_2_right_to_left_');
	animFightersTextures["scorpion:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'scorpion_hit_3_left_to_right_');
	animFightersTextures["scorpion:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'scorpion_hit_3_right_to_left_');
	animFightersTextures["scorpion:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'scorpion_hit_4_left_to_right_');
	animFightersTextures["scorpion:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'scorpion_hit_4_right_to_left_');
	animFightersTextures["scorpion:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'scorpion_hit_5_left_to_right_');
	animFightersTextures["scorpion:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'scorpion_hit_5_right_to_left_');
	animFightersTextures["scorpion:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'scorpion_lost_');
	animFightersTextures["scorpion:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'scorpion_lost_');
	animFightersTextures["scorpion:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'scorpion_stance_left_to_right_');
	animFightersTextures["scorpion:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'scorpion_stance_right_to_left_');
	animFightersTextures["scorpion:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'scorpion_victory_');
	animFightersTextures["scorpion:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'scorpion_victory_');
	// console.log("Load assets scorpion.json - complete!");

	/* shangtsung.json */
	animFightersTextures["shangtsung:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'shangtsung_damage_left_to_right_');
	animFightersTextures["shangtsung:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'shangtsung_damage_right_to_left_');
	animFightersTextures["shangtsung:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'shangtsung_hit_1_left_to_right_');
	animFightersTextures["shangtsung:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'shangtsung_hit_1_right_to_left_');
	animFightersTextures["shangtsung:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'shangtsung_hit_2_left_to_right_');
	animFightersTextures["shangtsung:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'shangtsung_hit_2_right_to_left_');
	animFightersTextures["shangtsung:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'shangtsung_hit_3_left_to_right_');
	animFightersTextures["shangtsung:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'shangtsung_hit_3_right_to_left_');
	animFightersTextures["shangtsung:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'shangtsung_hit_4_left_to_right_');
	animFightersTextures["shangtsung:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'shangtsung_hit_4_right_to_left_');
	animFightersTextures["shangtsung:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'shangtsung_hit_5_left_to_right_');
	animFightersTextures["shangtsung:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(7, 'shangtsung_hit_5_right_to_left_');
	animFightersTextures["shangtsung:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'shangtsung_lost_');
	animFightersTextures["shangtsung:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'shangtsung_lost_');
	animFightersTextures["shangtsung:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'shangtsung_stance_left_to_right_');
	animFightersTextures["shangtsung:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'shangtsung_stance_right_to_left_');
	animFightersTextures["shangtsung:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'shangtsung_victory_');
	animFightersTextures["shangtsung:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'shangtsung_victory_');
	// console.log("Load assets shangtsung.json - complete!");

	/* shaokahn.json */
	animFightersTextures["shaokahn:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'shaokahn_damage_right_to_left_');;
	animFightersTextures["shaokahn:HIT_1:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'shaokahn_hit_1_right_to_left_');
	animFightersTextures["shaokahn:HIT_2:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'shaokahn_hit_2_right_to_left_');
	animFightersTextures["shaokahn:HIT_3:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'shaokahn_hit_3_right_to_left_');
	animFightersTextures["shaokahn:HIT_4:RIGHT_TO_LEFT"] = loadAnimationTextures(5, 'shaokahn_hit_4_right_to_left_');
	animFightersTextures["shaokahn:HIT_5:RIGHT_TO_LEFT"] = loadAnimationTextures(6, 'shaokahn_hit_5_right_to_left_');
	animFightersTextures["shaokahn:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(11, 'shaokahn_lost_');
	animFightersTextures["shaokahn:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'shaokahn_stance_right_to_left_');
	animFightersTextures["shaokahn:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'shaokahn_victory_');
	// console.log("Load assets shaokahn.json - complete!");

	/* subzero.json */
	animFightersTextures["subzero:DAMAGE:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'subzero_damage_left_to_right_');
	animFightersTextures["subzero:DAMAGE:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'subzero_damage_right_to_left_');
	animFightersTextures["subzero:HIT_1:LEFT_TO_RIGHT"] = loadAnimationTextures(6, 'subzero_hit_1_left_to_right_');
	animFightersTextures["subzero:HIT_1:RIGHT_TO_LEFT"] =  loadAnimationTextures(6, 'subzero_hit_1_right_to_left_');
	animFightersTextures["subzero:HIT_2:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'subzero_hit_2_left_to_right_');
	animFightersTextures["subzero:HIT_2:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'subzero_hit_2_right_to_left_');
	animFightersTextures["subzero:HIT_3:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'subzero_hit_3_left_to_right_');
	animFightersTextures["subzero:HIT_3:RIGHT_TO_LEFT"] =  loadAnimationTextures(3, 'subzero_hit_3_right_to_left_');
	animFightersTextures["subzero:HIT_4:LEFT_TO_RIGHT"] = loadAnimationTextures(5, 'subzero_hit_4_left_to_right_');
	animFightersTextures["subzero:HIT_4:RIGHT_TO_LEFT"] =  loadAnimationTextures(5, 'subzero_hit_4_right_to_left_');
	animFightersTextures["subzero:HIT_5:LEFT_TO_RIGHT"] = loadAnimationTextures(8, 'subzero_hit_5_left_to_right_');
	animFightersTextures["subzero:HIT_5:RIGHT_TO_LEFT"] =  loadAnimationTextures(8, 'subzero_hit_5_right_to_left_');
	animFightersTextures["subzero:LOST:LEFT_TO_RIGHT"] = loadAnimationTextures(7, 'subzero_lost_');
	animFightersTextures["subzero:LOST:RIGHT_TO_LEFT"] = loadAnimationTextures(7, 'subzero_lost_');
	animFightersTextures["subzero:STANCE:LEFT_TO_RIGHT"] = loadAnimationTextures(12, 'subzero_stance_left_to_right_');
	animFightersTextures["subzero:STANCE:RIGHT_TO_LEFT"] = loadAnimationTextures(12, 'subzero_stance_right_to_left_');
	animFightersTextures["subzero:VICTORY:LEFT_TO_RIGHT"] = loadAnimationTextures(3, 'subzero_victory_');
	animFightersTextures["subzero:VICTORY:RIGHT_TO_LEFT"] = loadAnimationTextures(3, 'subzero_victory_');
	// console.log("Load assets subzero.json - complete!");

	/* levels */
	fieldLevels.push(res.level1); /* level1.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level2); /* level2.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level3); /* level3.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level4); /* level4.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level5); /* level5.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level6); /* level6.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level7); /* level7.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level8); /* level8.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level9); /* level9.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level10); /* level10.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level11); /* level11.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level12); /* level12.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level13); /* level13.json */	// console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	fieldLevels.push(res.level0); /* level0.json */ // console.log("Load assets level" + fieldLevels[fieldLevels.length - 1].data.Level.LevelNumber + ".json - complete!");
	

	// console.log("Load all assets - complete!");
	
        if(preloaderComplete === 2)
        {
            bgShow();		// GAME BACKGROUND SHOW
            stage.removeChild(bgPreloaderSprite);
            stage.removeChild(preloaderProgressAssetsText);
        }
}

function preloaderLoadSounds()
{
    var queue = new createjs.LoadQueue();
    createjs.Sound.alternateExtensions = ["mp3"];
    queue.installPlugin(createjs.Sound);
    queue.on("progress", onPreloaderSoundLoaderProcess);
    queue.on("complete", onPreloaderSoundLoaderComplete);
    queue.loadFile({"id":"music1", "src":"assets/music/quest/music1.mp3"});
    queue.loadFile({"id":"music2", "src":"assets/music/quest/music2.mp3"});
    queue.loadFile({"id":"music3", "src":"assets/music/quest/music3.mp3"});
    queue.loadFile({"id":"button", "src":"assets/sound/quest/button.mp3"});
    queue.loadFile({"id":"f_01", "src":"assets/sound/quest/f_01.mp3"});
    queue.loadFile({"id":"f_02", "src":"assets/sound/quest/f_02.mp3"});
    queue.loadFile({"id":"f_d_03", "src":"assets/sound/quest/f_d_03.mp3"});
    queue.loadFile({"id":"fight", "src":"assets/sound/quest/fight.mp3"});
    queue.loadFile({"id":"hit_1_5", "src":"assets/sound/quest/hit_1_5.mp3"});
    queue.loadFile({"id":"hit_2_4", "src":"assets/sound/quest/hit_2_4.mp3"});
    queue.loadFile({"id":"hit_block", "src":"assets/sound/quest/hit_block.mp3"});
    queue.loadFile({"id":"hit_move", "src":"assets/sound/quest/hit_move.mp3"});
    queue.loadFile({"id":"Lost", "src":"assets/sound/quest/Lost.mp3"});
    queue.loadFile({"id":"m_01", "src":"assets/sound/quest/m_01.mp3"});
    queue.loadFile({"id":"m_02", "src":"assets/sound/quest/m_02.mp3"});
    queue.loadFile({"id":"m_d_03", "src":"assets/sound/quest/m_d_03.mp3"});
    queue.loadFile({"id":"wins", "src":"assets/sound/quest/wins.mp3"});
}

function onPreloaderSoundLoaderProcess(event) 
{
    //preloaderProgressSoundText.text = "Загрузка звуков : ............... " + event.progress + " / " + event.total;
    preloaderPercentSounds = Math.round((event.loaded) * (50 / event.total));
    preloaderProgressAssetsText.text = "Загрузка " + (preloaderPercentTextures + preloaderPercentSounds) + "%";
}

function onPreloaderSoundLoaderComplete(event) 
{
    preloaderComplete++;
    if(preloaderComplete === 2)
    {
            bgShow();		// GAME BACKGROUND SHOW
            stage.removeChild(bgPreloaderSprite);
            stage.removeChild(preloaderProgressAssetsText);
    }
}



function loadAnimationTextures(countFrame, nameFrame)
{
	var nameTexture;
	var animTextures = [];
	for(var i = 1; i <= countFrame; i++)
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

	// console.log("Create game background");

	menuShow();			// MENU SHOW
}