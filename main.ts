input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
let decibel = 0
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(16)
kitronik_halo_hd.setClapSensitivity(100)
basic.forever(function () {
    decibel = kitronik_halo_hd.readAverageSoundLevel()
    haloDisplay.range(0, decibel - 1).showColor(kitronik_halo_hd.colors(ZipLedColors.Blue))
    basic.pause(100)
    haloDisplay.clear()
})
basic.forever(function () {
    haloDisplay.range(decibel - 1, 1).showColor(kitronik_halo_hd.colors(ZipLedColors.Red))
    if (decibel > 30) {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(100)
})
