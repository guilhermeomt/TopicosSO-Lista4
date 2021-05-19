let i = 1;
const sequence = document.querySelector('#sequence');

const addListItem = (string) => {
    const element = document.createElement('li');
    element.innerHTML = string;
    
    if (isNaN(string)) {
        element.classList.add('bold');
    }

    if (string === "FizzBuzz") {
        element.classList.add('fizzbuzz');
    }

    sequence.appendChild(element);
}

for (i = 1; i <= 100; i++) {
    string = '';

    divisibleBy3 = i % 3 === 0 ? "Fizz" : '';
    divisibleBy5 = i % 5 === 0 ? "Buzz" : '';

    string = divisibleBy3 || divisibleBy5 ? divisibleBy3 + divisibleBy5 : String(i);
    addListItem(string);
}   