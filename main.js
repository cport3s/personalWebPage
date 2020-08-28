function fadeInBody() {
    document.body.style.animationName = 'fadeInAnimation';
    document.body.style.animationDuration = '2s';
}

function showInfoBox(classToToggle) {
    var personalInformation = document.getElementsByClassName(classToToggle);
    if (personalInformation[0].style.display == 'none') {
        personalInformation[0].style.display = 'inline';
    } else {
        personalInformation[0].style.display = 'none';
    }
}