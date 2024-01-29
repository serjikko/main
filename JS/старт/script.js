const word = prompt('ввод данных');
const length = word.length;

console.log(length);


const a = 5;
const b = 7;
const c = a * b;
console.log(c);


const first = 'John';
const second = 'Smith';
const totalLength = first.length + second.length;
console.log(totalLength);


const num = prompt('Enter the number: ');
const digit3 = num % 10;
const digit1 = (num - num % 100)/100;
const digit2 = (num - digit1 * 100 - digit3)/10;
console.log(digit1 + digit2 + digit3);

const num2 = prompt('ввод данных');
const compare = (num >= 10) && (num <= 99);

console.log(compare)


let sum = 0;
let number = 1;

while (number <= 100) {
    sum = sum + number;
    number++;
}

console.log(sum);


const age = prompt('ввод данных - сколько лет');

if (age < 18) {
      alert ('too young');
    } else if (age > 75) {
      alert ('too old');
    } else {
        alert ('access granted');
    }


    const sym = prompt('ввод данных - M or F');

    const gender = (sym === 'M') ? 'male' : 'female';

    console.log(gender);


// switch ()

const a1 = 7;
const b1 = '7DDDD';
if (a1 > b1) {
    console.log(a1);
    } else if (a1 < b1) {
    console.log(b1);
    } else if (a1 == b1) {
    console.log('Равенство');
    } else {
    console.log('Странный результат')
    }

const date1 = +prompt('ввод данных - какой месяц');
switch (date1) {
    case 1:  
    console.log('Январь')
    break;

    case 2:  
    console.log('Февраль')
    break;

    case 3:  
    console.log('Март')
    break;

    case 4:  
    console.log('Апрель')
    break;

    case 5:  
    console.log('Май')
    break;

    case 6:  
    console.log('Июнь')
    break;

    case 7:  
    console.log('Июль')
    break;

    case 8:  
    console.log('Август')
    break;

    case 9:  
    console.log('Сентябрь')
    break;

    case 10:  
    console.log('Октябрь')
    break;

    case 11:  
    console.log('Ноябрь')
    break;

    case 12:  
    console.log('Декабрь')
    break;

   
  default:
    console.log('Проверить ввод данных')
    break;


}


const circle = 26
const square = 16

const diametr = Math.sqrt(square)
console.log(diametr)
const max_radius = diametr/2
console.log(max_radius)

let pi = 3.14159265358979323846;
const radius = Math.sqrt(circle/pi)
console.log(radius)

// If (max_radius > radius) {
//     console.log('Поместился');
//     } else {
//         console.log('Не поместился');
//     }

const answer = (max_radius > radius) ? 'Поместился':'Не поместился';
console.log(answer)

let arr = [1, 2, 3, 4, 5];
let [val1,val2, ...val3] = arr
console.log(arr)

const text = 'text' * 5
console.log(text)



let number= prompt('Enter the number:');
let result = 0;
let j = 0;
for(let i=1; i<=number; i++){    
    if(i%2 != 0){
        j++;
        result = result+i;
        console.log(j, result);
    }
}
result = (result/j).toFixed(2);
console.log(result);