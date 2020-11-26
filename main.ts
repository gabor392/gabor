input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
    basic.showString("Hej Päris! ")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # # #
        . # . # .
        . . . . .
        `)
})
