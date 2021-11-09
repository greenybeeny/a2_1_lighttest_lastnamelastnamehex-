basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("Wakey Wakey")
    } else {
        images.createBigImage(`
            . . . . . . # # . .
            . . . . . . . # # .
            . # # # . # # . . .
            . # . # . . # # . .
            . # # # . . . . . .
            `).scrollImage(1, 200)
    }
})
