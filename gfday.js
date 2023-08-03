const lovelist = document.querySelector('.loveList');

let showMoreButton = document.getElementById("button1");
showMoreButton.addEventListener('click', function (e) {
    lovelist.classList.toggle('loveList');
});

const looklist = document.querySelector('.lookList');

let showMore2Button = document.getElementById("button2");
showMore2Button.addEventListener('click', function (e) {
    looklist.classList.toggle('lookList');
});

