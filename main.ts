let verktyg = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
})
input.onGesture(Gesture.Shake, function () {
    verktyg = 0
    if (verktyg) {
        basic.showIcon(IconNames.Square)
    } else if (verktyg) {
        basic.showIcon(IconNames.Scissors)
    } else if (verktyg) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Scissors)
})
basic.forever(function () {
	
})
