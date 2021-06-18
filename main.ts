scene.setBackgroundImage(assets.image`background`)
effects.starField.startScreenEffect()
game.splash("Crisp", "Invaders")
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.y = 110
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 0)
