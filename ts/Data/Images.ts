class Images {
    public static PreloaderImage: string = 'preloader.jpg';

    public static BackgroundImage: string = 'background.png';
    public static MenuImage: string = 'menu.png';
    public static LogoImage: string = 'logo.png';
    public static FightersImage: string = 'fighters.png';
    public static UpgradeImage: string = 'upgrade.png';
    
    public static preloadList:Array<string> = [
        Images.BackgroundImage,
        Images.MenuImage,
        Images.LogoImage,
        Images.FightersImage,
        Images.UpgradeImage
    ]; 
}