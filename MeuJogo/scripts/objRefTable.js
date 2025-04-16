const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Car,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.Bullet.Acts.SetAcceleration,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{fundo_batalha: 0},
	{Sólido: 0},
	{conteiner1: 0},
	{container2: 0},
	{Carro: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{tank11: 0},
	{ExploradorDeRotas: 0},
	{tank21: 0},
	{Projétil: 0},
	{bala1: 0},
	{Teclado: 0},
	{explosão: 0},
	{inicio: 0},
	{Mouse: 0},
	{bot_começar: 0},
	{Âncora: 0},
	{imigos_rest: 0}
];

self.InstanceType = {
	fundo_batalha: class extends self.ITiledBackgroundInstance {},
	conteiner1: class extends self.ISpriteInstance {},
	container2: class extends self.ISpriteInstance {},
	tank11: class extends self.ISpriteInstance {},
	tank21: class extends self.ISpriteInstance {},
	bala1: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	explosão: class extends self.ISpriteInstance {},
	inicio: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	bot_começar: class extends self.ISpriteFontInstance {},
	imigos_rest: class extends self.ISpriteFontInstance {}
}