import { Game, Scene } from "phaser";

class TitleScene extends Scene {
    public create() {
        this.add.text(0, 0, 'Hello World', { color: '#0f0' });
    }
}

async function main() {
    new Game({
        scene: [TitleScene],
        parent: 'root',
    });
}

main();