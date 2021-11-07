function random(lower,upper) {
    return Math.floor(Math.random()*(upper-lower+1))+lower
}

function changeBG() {
    var colorArr=new Array("#1e245a","#123456","#3fab43","#c3c4c5","#a56d7","#b4a5f6")
    var i=random(0,5)
    document.getElementById("imgBg").style.background=colorArr[i]
}