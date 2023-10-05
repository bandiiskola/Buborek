var max_h = window.innerHeight
var max_w = window.innerWidth

document.getElementById("test").addEventListener("keypress", Letrehoz)

var id_counter = 0

function Letrehoz() {
    id_counter++
    var w = Math.floor(Math.random() * 100) + 50
    var x = Math.floor(Math.random() * max_w - w)
    var y = Math.floor(Math.random() * max_h - w)
    document.getElementById("test").innerHTML += "<img src='assets/images/bubble.gif' id='bubi_" + id_counter + "' style='position: absolute; top:" + x + "px; left:" + y + "px; width:" + w + "px'>"
    setTimeout(Megszuntet, 1500, 'bubi_' + id_counter)
}

function Megszuntet(id) {
    document.getElementById(id).remove();
    var audio=new Audio('assets/audio/pukk.wav')
    audio.play()
}