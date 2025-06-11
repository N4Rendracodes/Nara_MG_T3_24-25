makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    I2C_LCD1602.clear()
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    music.setBuiltInSpeakerEnabled(true)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    music.setBuiltInSpeakerEnabled(false)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Speaker off", 0, 0)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    I2C_LCD1602.clear()
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
music.setBuiltInSpeakerEnabled(true)
basic.showIcon(IconNames.Yes)
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
