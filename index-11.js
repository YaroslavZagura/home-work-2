const GIVEN_ARRAY = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.warn(GIVEN_ARRAY);
console.warn(GIVEN_ARRAY.length);


// Знайти суму та кількість позитивних елементів.
// Знайти добуток позитивних елементів.
let sumPositiveElements = 0;
let amauntPositive = 0
let addPositiveElements = 1;
for (let i = 0; i < GIVEN_ARRAY.length; i++) {
    if (GIVEN_ARRAY[i] > 0) {
        sumPositiveElements = sumPositiveElements + GIVEN_ARRAY[i];
        amauntPositive++;
        addPositiveElements = addPositiveElements * GIVEN_ARRAY[i];
        continue;
    }
}
console.warn("Сума позитивних елементів масиву: "+sumPositiveElements);
console.warn("Кількість позитивних елементів масиву: "+amauntPositive);
console.warn("Добуток позитивних елементів масиву: "+addPositiveElements);


// Знайти мінімальний елемент масиву та його порядковий номер.
let min = Math.min.apply(null, GIVEN_ARRAY)
console.warn("Мінімальний елемент масиву: "+min);
console.warn("Індекс мінімального елементу масиву: "+GIVEN_ARRAY.indexOf(min));


// Знайти максимальний елемент масиву та його порядковий номер.
let max = Math.max.apply(null, GIVEN_ARRAY)
console.warn("Максимальний елемент масиву: "+max);
console.warn("Індекс максимального елементу масиву: "+GIVEN_ARRAY.indexOf(max));


// Визначити кількість негативних елементів.
let amauntNegative = 0
for (let i = 0; i < GIVEN_ARRAY.length; i++) {
    if (GIVEN_ARRAY[i] < 0) {
        amauntNegative++;
        continue;
    }
}
console.warn("Кількість негативних елементів масиву: "+amauntNegative);


// Знайти кількість непарних позитивних елементів.
// Знайти суму непарних позитивних елементів.
let sumEvenPositiveElements = 0;
let amauntEvenPositive = 0
for (let i = 0; i < GIVEN_ARRAY.length; i++) {
    if (GIVEN_ARRAY[i] > 0 && GIVEN_ARRAY[i] % 2 !== 0) {
        sumEvenPositiveElements = sumEvenPositiveElements + GIVEN_ARRAY[i];
        amauntEvenPositive++;
        continue;
    }
}
console.warn("Сума НЕпарних позитивних елементів масиву: "+sumEvenPositiveElements);
console.warn("Кількість НЕпарних позитивних елементів масиву: "+amauntEvenPositive);


// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
let sumOddPositiveElements = 0;
let amauntOddPositive = 0
for (let i = 0; i < GIVEN_ARRAY.length; i++) {
    if (GIVEN_ARRAY[i] > 0 && GIVEN_ARRAY[i] % 2 === 0) {
        sumOddPositiveElements = sumOddPositiveElements + GIVEN_ARRAY[i];
        amauntOddPositive++;
        continue;
    }
}
console.warn("Сума парних позитивних елементів масиву: "+sumOddPositiveElements);
console.warn("Кількість парних позитивних елементів масиву: "+amauntOddPositive);



// Знайти найбільший серед елементів масиву, остальні обнулити.
// для практики альтернативний варіант пошуку максимального значення в масиві
let maxElement = GIVEN_ARRAY[0];
for (let i = 0; i < GIVEN_ARRAY.length; i++) {
    if (GIVEN_ARRAY[i] > maxElement) {
        maxElement = GIVEN_ARRAY[i];
    }
}
console.warn("max: "+maxElement);
let nullArr = [];
for (let i = 0; i < GIVEN_ARRAY.length; i++) {
    if (GIVEN_ARRAY[i] !== maxElement) {
        nullArr.push(0)
    } else {
        nullArr.push(maxElement)
    }
}
console.warn(nullArr);