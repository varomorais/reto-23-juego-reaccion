input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= 2; index++) {
    	
    }
    game_started = true
})
function MuestraTiempo () {
	
}
input.onPinPressed(TouchPin.P2, function () {
    if (game_started) {
        game_started = false
        basic.showString("winB")
        puntB += 1
    } else {
        basic.showString("A")
        puntA += 1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (game_started) {
        game_started = false
        basic.showString("winA")
        puntA += 1
    } else {
        basic.showString("B")
        puntB += 1
    }
})
let game_started = false
let puntA = 0
let puntB = 0
