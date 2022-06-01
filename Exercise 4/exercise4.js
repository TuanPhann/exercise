var isImage = document.querySelectorAll('.image img');
var isPrew = document.querySelector('.prew');
var isNext = document.querySelector('.next');
var isClose = document.querySelector('.close');
var isGalery = document.querySelector('.galery');
var isPicture = document.querySelector('.picture img');


var value = 0;
function showimage() {
    if (value == 0) {
        isPrew.classList.add('hide')
    } else {
        isPrew.classList.remove('hide')
    }


    if (value == isImage.length - 1) {
        isNext.classList.add('hide')
    } else {
        isNext.classList.remove('hide')
    }

    isPicture.src = isImage[value].src;
    isGalery.classList.add('show')

}



isImage.forEach(function (item, index) {
    item.onclick = function () {
        value = index;
        showimage()
    }
})

isClose.addEventListener('click', function () {
    isGalery.classList.remove('show')
})

document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        isGalery.classList.remove('show')
    }
}

isPrew.onclick = function () {
    if (value > 0) {
        value--
        showimage();
    }
}


isNext.onclick = function () {
    if (value < isImage.length - 1) {
        value++
        showimage()
    }


}



