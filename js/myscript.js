
const ul = document.querySelector('ul');


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