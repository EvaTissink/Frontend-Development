var pijl = document.querySelector('article header button');
var buttons = document.querySelectorAll('article button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].wiebenik = i;

    buttons[i].addEventListener("click", function () {
        var infonr = this.wiebenik+1;
        var info = document.querySelector('article:nth-of-type('+infonr+') header div');
        info.classList.toggle('drop');
    });
}
