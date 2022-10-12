// Вивести на сторінку в один рядок через кому числа від 10 до 20
let str = '';
for (let j = 10; j <= 20; j++) {
	str += j+", ";
}
console.log(str);

//Вивести квадрати чисел від 10 до 20
for (let x = 10; x < 21; x++) {
    console.log(x+" * "+x+" = "+x**2);
}

//Вивести таблицю множення на 7
for (let y = 0; y < 10; y++) {
    console.log(y+" * 7 = "+y*7);
}

//Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
for (let i=1; i<=15; i++) {
    sum = sum + i;
}
console.log("сума всіх цілих чисел від 1 до 15 дорівнює "+sum);

//Знайти добуток всіх цілих чисел від 15 до 35
let mult = 1;
for (let a=15; a<=35; a++) {
    mult = mult * a;
}
console.log("добуток всіх цілих чисел від 15 до 35 дорівнює "+mult);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let add = 0;
let average;
for (let k=1; k<=500; k++) {
    add = add + k;
    average = add/k;
}
console.log("середнє арифметичне всіх цілих чисел від 1 до 500 дорівнює "+average);

//Вивести лише суму парних чисел від 30 до 80
let total = 0;
let evenNumber = 30;
while (evenNumber <= 80) {
    if (evenNumber % 2 === 0){
        total = total + evenNumber;
    }
    evenNumber++;
}
console.log("сума лише парних чисел від 30 до 80 дорівнює "+total);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3
console.log("нижче вказані всі числа в діапазоні від 100 до 200 кратні 3");
let multiple = 100;
while (multiple <= 200) {
    if (multiple % 3 === 0){
        console.log(multiple);
    }20
    multiple++;
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників
// Знайти суму його парних дільників
let numbers = +prompt("Введіть число");
console.log("Ви ввели число "+numbers);
let pair;
let sumOfPair = 0;
let quantityOfPair = 0;
console.log("нижче вказані всі дільники введеного числа");
for (e = 1; e <= numbers; e++) {
    if (numbers % e === 0) {
        console.log(e);
    }
    if (numbers % e === 0 && e % 2 === 0) {
        pair = e;
        sumOfPair = sumOfPair + pair;
        quantityOfPair++;
    }
}
console.log("сума лише парних дільників введеного числа "+numbers+" становить "+sumOfPair);
console.log("Кількість лише парних дільників введеного числа "+numbers+" становить "+quantityOfPair);

// Надрукувати повну таблицю множення від 1 до 10
let firstMultiplier;
let secondMultiplier;
let result;
for (firstMultiplier = 1; firstMultiplier <= 9; firstMultiplier++) {
    for (secondMultiplier = 0; secondMultiplier <= 9; secondMultiplier++) {
        result = firstMultiplier * secondMultiplier;
        console.log (firstMultiplier+" * "+secondMultiplier+" = "+result)
    }
}