var bgTexture;						// background.jpg
var buttonTexture;					// button.png
var borderTexture;					// border_screen.png
var blueportalTexture;				// blueportalImage.png

/* game.json */
var bgCharacterWindowTexture;		// character_background_small.png
var borderCharacterWindowTexture;	// character_border_small.png
var iconBarakaTexture;				// baraka.png
var iconGoroTexture;				// goro.png
var iconJaxTexture;					// jax.png
var iconJohnnycageTexture;			// johnycage.png
var iconKitanaTexture;				// kitana.png
var iconKunglaoTexture;				// kunglao.png
var iconLiukangTexture;				// liukang.png
var iconMileenaTexture;				// mileena.png
var iconRaidenTexture;				// raiden.png
var iconReptileTexture;				// reptile.png
var iconScorpionTexture;			// scorpion.png
var iconShangtsungTexture;			// shamgtsung.png
var iconShaokahnTexture;			// shaokahn.png
var iconSubzeroTexture;				// subzero.png
var characterHit1;					// character_hit_1.png
var characterHit2;					// character_hit_2.png
var characterHit3;					// character_hit_3.png
var characterHit4;					// character_hit_4.png
var characterHit5;					// character_hit_5.png

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

/* baraka.json */
var animTexBarakaDamageLeftToRight = [];
var animTexBarakaDamageRightToLeft = [];
var animTexBarakaHit1LeftToRight = [];
var animTexBarakaHit1RightToLeft = [];
var animTexBarakaHit2LeftToRight = [];
var animTexBarakaHit2RightToLeft = [];
var animTexBarakaHit3LeftToRight = [];
var animTexBarakaHit3RightToLeft = [];
var animTexBarakaHit4LeftToRight = [];
var animTexBarakaHit4RightToLeft = [];
var animTexBarakaHit5LeftToRight = [];
var animTexBarakaHit5RightToLeft = [];
var animTexBarakaLost = [];
var animTexBarakaStanceLeftToRight = [];
var animTexBarakaStanceRightToLeft = [];
var animTexBarakaVictory = [];


/* goro.json */
var animTexGoroDamageRightToLeft = [];
var animTexGoroHit1RightToLeft = [];
var animTexGoroHit2RightToLeft = [];
var animTexGoroHit3RightToLeft = [];
var animTexGoroHit4RightToLeft = [];
var animTexGoroHit5RightToLeft = [];
var animTexGoroLost = [];
var animTexGoroStanceRightToLeft = [];
var animTexGoroVictory = [];

/* jax.json */
var animTexJaxDamageLeftToRight = [];
var animTexJaxDamageRightToLeft = [];
var animTexJaxHit1LeftToRight = [];
var animTexJaxHit1RightToLeft = [];
var animTexJaxHit2LeftToRight = [];
var animTexJaxHit2RightToLeft = [];
var animTexJaxHit3LeftToRight = [];
var animTexJaxHit3RightToLeft = [];
var animTexJaxHit4LeftToRight = [];
var animTexJaxHit4RightToLeft = [];
var animTexJaxHit5LeftToRight = [];
var animTexJaxHit5RightToLeft = [];
var animTexJaxLost = [];
var animTexJaxStanceLeftToRight = [];
var animTexJaxStanceRightToLeft = [];
var animTexJaxVictory = [];

/* johnnycage.json */
var animTexJohnnycageDamageLeftToRight = [];
var animTexJohnnycageDamageRightToLeft = [];
var animTexJohnnycageHit1LeftToRight = [];
var animTexJohnnycageHit1RightToLeft = [];
var animTexJohnnycageHit2LeftToRight = [];
var animTexJohnnycageHit2RightToLeft = [];
var animTexJohnnycageHit3LeftToRight = [];
var animTexJohnnycageHit3RightToLeft = [];
var animTexJohnnycageHit4LeftToRight = [];
var animTexJohnnycageHit4RightToLeft = [];
var animTexJohnnycageHit5LeftToRight = [];
var animTexJohnnycageHit5RightToLeft = [];
var animTexJohnnycageLost = [];
var animTexJohnnycageStanceLeftToRight = [];
var animTexJohnnycageStanceRightToLeft = [];
var animTexJohnnycageVictory = [];

/* kitana.json */
var animTexKitanaDamageLeftToRight = [];
var animTexKitanaDamageRightToLeft = [];
var animTexKitanaHit1LeftToRight = [];
var animTexKitanaHit1RightToLeft = [];
var animTexKitanaHit2LeftToRight = [];
var animTexKitanaHit2RightToLeft = [];
var animTexKitanaHit3LeftToRight = [];
var animTexKitanaHit3RightToLeft = [];
var animTexKitanaHit4LeftToRight = [];
var animTexKitanaHit4RightToLeft = [];
var animTexKitanaHit5LeftToRight = [];
var animTexKitanaHit5RightToLeft = [];
var animTexKitanaLost = [];
var animTexKitanaStanceLeftToRight = [];
var animTexKitanaStanceRightToLeft = [];
var animTexKitanaVictory = [];

/* kunglao.json */
var animTexKunglaoDamageLeftToRight = [];
var animTexKunglaoDamageRightToLeft = [];
var animTexKunglaoHit1LeftToRight = [];
var animTexKunglaoHit1RightToLeft = [];
var animTexKunglaoHit2LeftToRight = [];
var animTexKunglaoHit2RightToLeft = [];
var animTexKunglaoHit3LeftToRight = [];
var animTexKunglaoHit3RightToLeft = [];
var animTexKunglaoHit4LeftToRight = [];
var animTexKunglaoHit4RightToLeft = [];
var animTexKunglaoHit5LeftToRight = [];
var animTexKunglaoHit5RightToLeft = [];
var animTexKunglaoLost = [];
var animTexKunglaoStanceLeftToRight = [];
var animTexKunglaoStanceRightToLeft = [];
var animTexKunglaoVictory = [];

/* liukang.json */
var animTexLiukangDamageLeftToRight = [];
var animTexLiukangDamageRightToLeft = [];
var animTexLiukangHit1LeftToRight = [];
var animTexLiukangHit1RightToLeft = [];
var animTexLiukangHit2LeftToRight = [];
var animTexLiukangHit2RightToLeft = [];
var animTexLiukangHit3LeftToRight = [];
var animTexLiukangHit3RightToLeft = [];
var animTexLiukangHit4LeftToRight = [];
var animTexLiukangHit4RightToLeft = [];
var animTexLiukangHit5LeftToRight = [];
var animTexLiukangHit5RightToLeft = [];
var animTexLiukangLost = [];
var animTexLiukangStanceLeftToRight = [];
var animTexLiukangStanceRightToLeft = [];
var animTexLiukangVictory = [];

/* mileena.json */
var animTexMileenaDamageLeftToRight = [];
var animTexMileenaDamageRightToLeft = [];
var animTexMileenaHit1LeftToRight = [];
var animTexMileenaHit1RightToLeft = [];
var animTexMileenaHit2LeftToRight = [];
var animTexMileenaHit2RightToLeft = [];
var animTexMileenaHit3LeftToRight = [];
var animTexMileenaHit3RightToLeft = [];
var animTexMileenaHit4LeftToRight = [];
var animTexMileenaHit4RightToLeft = [];
var animTexMileenaHit5LeftToRight = [];
var animTexMileenaHit5RightToLeft = [];
var animTexMileenaLost = [];
var animTexMileenaStanceLeftToRight = [];
var animTexMileenaStanceRightToLeft = [];
var animTexMileenaVictory = [];

/* raiden.json */
var animTexRaidenDamageLeftToRight = [];
var animTexRaidenDamageRightToLeft = [];
var animTexRaidenHit1LeftToRight = [];
var animTexRaidenHit1RightToLeft = [];
var animTexRaidenHit2LeftToRight = [];
var animTexRaidenHit2RightToLeft = [];
var animTexRaidenHit3LeftToRight = [];
var animTexRaidenHit3RightToLeft = [];
var animTexRaidenHit4LeftToRight = [];
var animTexRaidenHit4RightToLeft = [];
var animTexRaidenHit5LeftToRight = [];
var animTexRaidenHit5RightToLeft = [];
var animTexRaidenLost = [];
var animTexRaidenStanceLeftToRight = [];
var animTexRaidenStanceRightToLeft = [];
var animTexRaidenVictory = [];

/* reptile.json */
var animTexReptileDamageLeftToRight = [];
var animTexReptileDamageRightToLeft = [];
var animTexReptileHit1LeftToRight = [];
var animTexReptileHit1RightToLeft = [];
var animTexReptileHit2LeftToRight = [];
var animTexReptileHit2RightToLeft = [];
var animTexReptileHit3LeftToRight = [];
var animTexReptileHit3RightToLeft = [];
var animTexReptileHit4LeftToRight = [];
var animTexReptileHit4RightToLeft = [];
var animTexReptileHit5LeftToRight = [];
var animTexReptileHit5RightToLeft = [];
var animTexReptileLost = [];
var animTexReptileStanceLeftToRight = [];
var animTexReptileStanceRightToLeft = [];
var animTexReptileVictory = [];

/* scorpion.json */
var animTexScorpionDamageLeftToRight = [];
var animTexScorpionDamageRightToLeft = [];
var animTexScorpionHit1LeftToRight = [];
var animTexScorpionHit1RightToLeft = [];
var animTexScorpionHit2LeftToRight = [];
var animTexScorpionHit2RightToLeft = [];
var animTexScorpionHit3LeftToRight = [];
var animTexScorpionHit3RightToLeft = [];
var animTexScorpionHit4LeftToRight = [];
var animTexScorpionHit4RightToLeft = [];
var animTexScorpionHit5LeftToRight = [];
var animTexScorpionHit5RightToLeft = [];
var animTexScorpionLost = [];
var animTexScorpionStanceLeftToRight = [];
var animTexScorpionStanceRightToLeft = [];
var animTexScorpionVictory = [];

/* shangtsung.json */
var animTexShangtsungDamageLeftToRight = [];
var animTexShangtsungDamageRightToLeft = [];
var animTexShangtsungHit1LeftToRight = [];
var animTexShangtsungHit1RightToLeft = [];
var animTexShangtsungHit2LeftToRight = [];
var animTexShangtsungHit2RightToLeft = [];
var animTexShangtsungHit3LeftToRight = [];
var animTexShangtsungHit3RightToLeft = [];
var animTexShangtsungHit4LeftToRight = [];
var animTexShangtsungHit4RightToLeft = [];
var animTexShangtsungHit5LeftToRight = [];
var animTexShangtsungHit5RightToLeft = [];
var animTexShangtsungLost = [];
var animTexShangtsungStanceLeftToRight = [];
var animTexShangtsungStanceRightToLeft = [];
var animTexShangtsungVictory = [];

/* shaokahn.json */
var animTexShaokahnDamageRightToLeft = [];
var animTexShaokahnHit1RightToLeft = [];
var animTexShaokahnHit2RightToLeft = [];
var animTexShaokahnHit3RightToLeft = [];
var animTexShaokahnHit4RightToLeft = [];
var animTexShaokahnHit5RightToLeft = [];
var animTexShaokahnLost = [];
var animTexShaokahnStanceRightToLeft = [];
var animTexShaokahnVictory = [];

/* subzero.json */
var animTexSubzeroDamageLeftToRight = [];
var animTexSubzeroDamageRightToLeft = [];
var animTexSubzeroHit1LeftToRight = [];
var animTexSubzeroHit1RightToLeft = [];
var animTexSubzeroHit2LeftToRight = [];
var animTexSubzeroHit2RightToLeft = [];
var animTexSubzeroHit3LeftToRight = [];
var animTexSubzeroHit3RightToLeft = [];
var animTexSubzeroHit4LeftToRight = [];
var animTexSubzeroHit4RightToLeft = [];
var animTexSubzeroHit5LeftToRight = [];
var animTexSubzeroHit5RightToLeft = [];
var animTexSubzeroLost = [];
var animTexSubzeroStanceLeftToRight = [];
var animTexSubzeroStanceRightToLeft = [];
var animTexSubzeroVictory = [];

/**/