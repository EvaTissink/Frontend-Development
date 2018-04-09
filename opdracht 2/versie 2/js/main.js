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
    console.log("counter: " + counter);
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
    console.log("counter: " + counter);
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
