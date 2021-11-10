basic.forever(function () {
    // if the light level is above 128 then show string
    if (input.lightLevel() > 128) {
        basic.showString("Wakey Wakey")
    } else {
        // show image of person sleeping if light level is below 128 
        images.createBigImage(`
            . . . . . . # # . .
            . . . . . . . # # .
            . # # # . # # . . .
            . # . # . . # # . .
            . # # # . . . . . .
            `).scrollImage(1, 200)
    }
})
