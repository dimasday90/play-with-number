let dateData = document.getElementById('date')
function checkDigit(i) {
    return i<10 ? '0' + i : i
}

function time() {
    let today = new Date();
    let W = today.toDateString()
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkDigit(h);
    m = checkDigit(m);
    s = checkDigit(s);
    dateData.innerHTML = `Date: ${W} <---> Time: ${h}:${m}:${s}`
    let t = setTimeout(function(){time()}, 500);
}