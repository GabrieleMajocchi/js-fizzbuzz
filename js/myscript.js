
const ul = document.querySelector('ul');

for(let i = 1 ; i < 101 ; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
        const li = document.createElement('li');
        li.append('FizzBuzz');
        ul.append(li);
        console.log(i);
    }
    else if (i % 3 === 0){
        const li = document.createElement('li');
        li.append('Fizz');
        ul.append(li);
        console.log(i);
    }
    else if (i % 5 === 0){
        const li = document.createElement('li');
        li.append('Buzz');
        ul.append(li);
        console.log(i);
    }
    else{
        const li = document.createElement('li');
        li.append(i);
        ul.append(li);
        console.log(i);
    }
}