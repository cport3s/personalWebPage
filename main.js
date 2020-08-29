function fadeInBody() {
    document.body.style.animationName = 'fadeInAnimation';
    document.body.style.animationDuration = '2s';
}

function showInfoBox(classToToggle) {
    var personalInformation = document.getElementsByClassName(classToToggle);
    var contentList = document.getElementsByClassName('content');
    /* Loop through all "content" class elements to hide them */
    for (var i = 0; i < contentList.length; i++){
        contentList[i].style.display = 'none'
    }
    /* Show the clicked element */
    personalInformation[0].style.display = 'inline';
}