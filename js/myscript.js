
const ul = document.querySelector('ul');

var bgcolor = document.getElementsByClassName('rainbow')['0'];

var r = 0;
var g = 0;
var b = 0;

window.onload = function rainbow() {

	if (r <= 255 && g == 0 && b == 0) {
		r ++;
	}

	if (r == 255 && b == 0 && g <= 255) {
		g ++;
	}

	if (r == 255 && g == 255 && b <= 255) {
		b ++;
	}

	if (b == 255 && g == 255 && r > 0) {
		r --;
	}

	if (r == 0 && b == 255 && g > 0) {
		g --;
	}

	if (r == 0 && g == 0 && b > 0) {
		b --;
	}

	setTimeout(function() {
		rainbow();
	}, 10);

	bgcolor.style.background = 'rgb('+r+','+g+','+b+')';
}

const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () {
                            for(let i = 1 ; i < 101 ; i++){
                                if ((i % 3 === 0) && (i % 5 === 0)){
                                    const li = document.createElement('li');
                                    li.append('FizzBuzz');
                                    li.classList.add('fizzbuzz');
                                    ul.append(li);
                                    await timer(150);
                                }
                                else if (i % 3 === 0){
                                    const li = document.createElement('li');
                                    li.append('Fizz');
                                    li.classList.add('fizz');
                                    ul.append(li);
                                    await timer(150);
                                }
                                else if (i % 5 === 0){
                                    const li = document.createElement('li');
                                    li.append('Buzz');
                                    li.classList.add('buzz');
                                    ul.append(li);
                                    await timer(150);
                                }
                                else{
                                    const li = document.createElement('li');
                                    li.append(i);
                                    ul.append(li);
                                    await timer(150);
                                }
                            }
};

load();