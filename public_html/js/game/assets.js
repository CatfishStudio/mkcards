var bgTexture;				// background.jpg
var buttonTexture;			// button.png
var borderTexture;			// border_screen.png
var blueportalTexture;			// blueportalImage.png

/* game.json */
var buttonPlusTextures;			// character_button_plus.png
var bgCharacterWindowTexture;		// character_background_small.png
var borderCharacterWindowTexture;	// character_border_small.png
var iconBarakaTexture;			// baraka.png
var iconGoroTexture;			// goro.png
var iconJaxTexture;			// jax.png
var iconJohnnycageTexture;		// johnycage.png
var iconKitanaTexture;			// kitana.png
var iconKunglaoTexture;			// kunglao.png
var iconLiukangTexture;			// liukang.png
var iconMileenaTexture;			// mileena.png
var iconRaidenTexture;			// raiden.png
var iconReptileTexture;			// reptile.png
var iconScorpionTexture;		// scorpion.png
var iconShangtsungTexture;		// shamgtsung.png
var iconShaokahnTexture;		// shaokahn.png
var iconSubzeroTexture;			// subzero.png
var iconsFightersAll = new Object();    // массив иконок всех бойцов
var characterHit1;			// character_hit_1.png
var characterHit2;			// character_hit_2.png
var characterHit3;			// character_hit_3.png
var characterHit4;			// character_hit_4.png
var characterHit5;			// character_hit_5.png
var stairsUpTextures;			// Stairs_up.png
var stairsDownTextures;			// Stairs_down.png
var hit1Texture;			// hit_1.png
var hit2Texture;			// hit_2.png
var hit3Texture;			// hit_3.png
var hit4Texture;			// hit_4.png
var hit5Texture;			// hit_5.png
var lifebarTexture;			// lifebar.png

/* blood.json */
var animTexBlood = [];

/* drugon.json */
var animTexDrugonLeft = [];
var animTexDrugonRight = [];

/* flash.json */
var animTexFlash = [];

/* levels.json */
var texuresLevels = [];

/* level0.json, level1.json, level2.json, .., level13.json*/
var fieldLevels = [];

/* fighters animation 
 * baraka.json, goro.json, goro.json, jax.json, johnnycage.json,
 * kitana.json, kunglao.json, liukang.json, mileena.json, reptile.json
 * scorpion.json, shangtsung.json, shaokahn.json, subzero.json
*/
var animFightersTextures = Object();
