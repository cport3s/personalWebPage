function fadeInBody() {
    document.body.style.animationName = 'fadeInAnimation';
    document.body.style.animationDuration = '2s';
    var personalInformation = document.getElementsByClassName('personal_information');
    personalInformation[0].style.animationName = 'expandAnimation';
    personalInformation[0].style.animationDuration = '4s';

}