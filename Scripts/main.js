window.addEventListener('scroll', scrollEvent);

function scrollEvent(event){

    var backGroundRed = document.querySelector('.background__red');
    var backGroundBlue = document.querySelector('.background__blue');
 
    backGroundRed.style.opacity = window.scrollY / 1000;
    backGroundBlue.style.opacity = window.scrollX / 5000;
}

window.onload = function() {
    scrollEvent();
}

