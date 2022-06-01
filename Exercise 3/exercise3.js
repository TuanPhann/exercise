var isopen = document.querySelector('.open');
var isModal = document.querySelector('.modal');
var isIcon = document.querySelector('.modal_modification-header i')
var isClose = document.querySelector('.modal_modification-footer button')
var isModalTable = document.querySelector('.modal_table');

isopen.onclick = function () {
    isModal.classList.remove('hide')
}

isModal.onclick = function () {
    isModal.classList.add('hide')
}

isIcon.onclick = function () {
    isModal.classList.add('hide')
}

isClose.onclick = function () {
    isModal.classList.add('hide')
}

isModalTable.onclick = function (event) {
    event.stopPropagation()
}