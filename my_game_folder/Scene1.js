class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "/my_game_folder/assets/images/background.png");
        this.load.image("ship", "/my_game_folder/assets/images/ship.png");
        this.load.image("ship2", "/my_game_folder/assets/images/ship2.png");
        this.load.image("ship3", "/my_game_folder/assets/images/ship3.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}