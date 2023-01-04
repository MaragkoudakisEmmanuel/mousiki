input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 G C5 C5 C E A C5 ", 30000120)
    basic.showIcon(IconNames.Square)
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    music.playMelody("C5 B C F E D A G ", 120)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C F C5 D A G D C ", 500)
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showLeds(`
        # # # # #
        # # # # .
        . . # # .
        . . # # .
        . . # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("B F C G C5 C F C ", 500)
    music.playMelody("G B A G C5 B A B ", 120)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(415, music.beat(BeatFraction.Whole))
    basic.showString("Fox la la la")
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
})
basic.forever(function () {
    basic.showNumber(500)
    basic.showIcon(IconNames.Angry)
    basic.showString("Fox rta")
})
