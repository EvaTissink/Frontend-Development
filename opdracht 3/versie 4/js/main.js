// -----------------------------JSON----------------------------- //

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://tomwesterhof.github.io/Frontend-voor-Designers/Opdracht%203/v3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var films = request.response;

    for (var i = 0; i < films.length; i++) {
        var myArticle = document.createElement('article');
        var myFooter = document.createElement('footer');
        var myH1 = document.createElement('h1');
        var myImg = document.createElement('img');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');

        //buttons
        var myLink = document.createElement('a');
        var imgLink = document.createElement('img');

        myH1.textContent = films[i].title;
        myImg.src = films[i].cover;
        myPara1.textContent = films[i].simple_plot;
        myPara2.textContent = films[i].plot;
        myPara3.textContent = films[i].release_date;
        imgLink.src = 'https://www.secondcloset.com/static/media/whiteArrowDown.44f28ff5.png';

        myArticle.appendChild(myH1);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myFooter);
        myArticle.appendChild(myLink);

        myFooter.appendChild(myPara2);
        myFooter.appendChild(myPara3);

        myLink.appendChild(imgLink);

        section.appendChild(myArticle);
    }
        doedelisteners()
};


// --------------------------INFO DROP--------------------------- //

function doedelisteners(){
var buttons = document.querySelectorAll('section article a');

console.log("buttons ", buttons);
console.log(buttons.length);

for (var i = 0; i < buttons.length; i++) {
    buttons[i].wiebenik = i;

    buttons[i].addEventListener("click", function () {
        var infonr = this.wiebenik+1;
        var info = document.querySelector('section article:nth-of-type('+infonr+') footer');
        info.classList.toggle('drop');
    });
  }
}




// --------------------------CAROUSEL-------------------------- //

var foto1 = document.querySelector('.foto1');
var foto2 = document.querySelector('.foto2');
var foto3 = document.querySelector('.foto3');

var bol1 = document.querySelector('.bol1');
var bol2 = document.querySelector('.bol2');
var bol3 = document.querySelector('.bol3');

var counter = 1;

var vorige = document.querySelector('.vorige');
var volgende = document.querySelector('.volgende');

function heen() {
    counter++;
//    console.log("counter: " + counter);
    if (counter == 1) {
        foto1.classList.add('show');
        foto1.classList.remove('hide');
        foto2.classList.add('hide');
        foto2.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol1.classList.add('active');
        bol2.classList.remove('active');
        bol3.classList.remove('active');
    }

    else if (counter == 2) {
        foto2.classList.add('show');
        foto2.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol2.classList.add('active');
        bol1.classList.remove('active');
        bol3.classList.remove('active');
    }

    else if (counter == 3) {
        foto3.classList.add('show');
        foto3.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto2.classList.add('hide');
        foto2.classList.remove('show');

        bol3.classList.add('active');
        bol1.classList.remove('active');
        bol2.classList.remove('active');
        counter = 0;
    }
}

function terug() {
    counter--;
//    console.log("counter: " + counter);
    if (counter == 0) {
        counter = 3;
    }
    if (counter == 1) {
        foto1.classList.add('show');
        foto1.classList.remove('hide');
        foto2.classList.add('hide');
        foto2.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol1.classList.add('active');
        bol2.classList.remove('active');
        bol3.classList.remove('active');
    }

    else if (counter == 2) {
        foto2.classList.add('show');
        foto2.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol2.classList.add('active');
        bol1.classList.remove('active');
        bol3.classList.remove('active');
    }

    else if (counter == 3) {
        foto3.classList.add('show');
        foto3.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto2.classList.add('hide');
        foto2.classList.remove('show');

        bol3.classList.add('active');
        bol1.classList.remove('active');
        bol2.classList.remove('active');
    }
}

volgende.addEventListener('click', heen)
vorige.addEventListener('click', terug)


window.addEventListener('keydown', function (e) {
  if (37 == e.keyCode) {
    terug();
  }

  else if (39 == e.keyCode) {
    heen();
  }
});
