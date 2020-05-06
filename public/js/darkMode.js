checkDarkMode()

checkPreviouslyLoaded()

function toggleDarkMode() {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        document.cookie = "darkMode=true"
    } else {
        document.cookie = "darkMode=false"
    }
}

function checkDarkMode() {
    darkModeCookie = getCookie('darkMode')
    if (darkModeCookie === "true") {
        document.body.classList.add('dark')
        document.getElementById('dark-mode-checkbox').checked = true
    } else {
        document.body.classList.remove('dark')
    }
}

function getCookie(cname) { //From https://www.w3schools.com/js/js_cookies.asp
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';')
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return "";
}



function checkPreviouslyLoaded() {
    previousLoad = getCookie('previousLoad')
    if (!previousLoad) return document.cookie = "previousLoad=true"

    let animatedElements = [
        [document.getElementById('hey')],
        [document.getElementById('see-ya')],
        [document.querySelector('#placeHolderPage p')],
        document.querySelectorAll('.social-icon'),
    ]

    animatedElements.forEach(elements => {
        elements.forEach(element => {
            element.classList.remove('animate')
        })
    })
}