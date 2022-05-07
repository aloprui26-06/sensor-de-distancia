let distancia = 0
basic.forever(function () {
    music.setVolume(255)
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 50 && maqueen.Ultrasonic(PingUnit.Centimeters) > 40) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 40 && maqueen.Ultrasonic(PingUnit.Centimeters) > 30) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 170)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 30 && maqueen.Ultrasonic(PingUnit.Centimeters) > 20) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 220)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 350)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10 && maqueen.Ultrasonic(PingUnit.Centimeters) > 1) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    }
})
