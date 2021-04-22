const headerEl = document.getElementById('header--main')

window.addEventListener("scroll", function() {
    if(window.scrollY >= 58) {
        headerEl.style.height = '106px'
    }
    else {
        headerEl.style.height = '157px'
    }
})