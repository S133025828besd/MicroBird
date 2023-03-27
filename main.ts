let Bird_Location = 0
let random_bar = 0
input.onButtonPressed(Button.A, function () {
    Bird_Location += -1
})
input.onButtonPressed(Button.B, function () {
    Bird_Location += 1
})
function Generate_Pipe () {
    random_bar = randint(1, 5)
    if (random_bar == 1) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (random_bar == 2) {
        basic.showLeds(`
            . . . # .
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (random_bar == 3) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . . .
            . . . # .
            . . . # .
            `)
    }
    if (random_bar == 4) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            . . . # .
            `)
    }
    if (random_bar == 5) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            `)
    }
}
basic.forever(function () {
	
})
