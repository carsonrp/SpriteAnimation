class sailormars {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sailormars.png"), 
		0, 0, 45, 108, 12, 0.2);

	};
	update() {

	};
	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);

	};
}