input.onButtonPressed(Button.A, function () {
    游戏者.move(-1)
})
input.onButtonPressed(Button.B, function () {
    游戏者.move(1)
})
let 果子: game.LedSprite = null
let 游戏者: game.LedSprite = null
游戏者 = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    果子 = game.createSprite(randint(0, 4), 0)
    basic.pause(200)
    while (果子.get(LedSpriteProperty.Y) < 4) {
        果子.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
    if (果子.isTouching(游戏者)) {
        game.addScore(1)
        果子.delete()
    } else {
        music.playMelody("C5 A B G A F G E ", 120)
        game.gameOver()
    }
    if (game.score() == 5) {
        果子.delete()
        music.playMelody("C5 G B A F A C5 B ", 120)
        basic.showString("youwin")
        game.gameOver()
    }
})
