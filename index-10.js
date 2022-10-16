const USER_ARR = [];
const AMOUNT = +prompt("Ведіть кількість елементів масиву");

for(let i = 0; i < AMOUNT; i++) {
    let elements = prompt("Введіть елемент масиву");
    USER_ARR.push(elements);
    console.log(USER_ARR);
}

console.log("Відсортований масив:", USER_ARR.sort());

if (AMOUNT > 3) {
    console.log("2-4 елементи це: ", USER_ARR.splice(1, 3));
    console.log("масив без 2-4 елементів: ", USER_ARR);
} else {
    console.log("неможливо вирізати елементи масиву з 2 по 4 включно, оскільки введено менше 4 елементів");
}


