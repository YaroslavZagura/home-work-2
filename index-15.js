// І. Дан масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// Мої зауваження:
// В задачі нічого не сказано про ідентифікацію типів елементів у вкладених масивах і об'єктах ДАНОГО масиву.
// В моємому розумінні елемент ДАНОГО масиву не повинен враховувати числові значення у вкладених масивах, а повинен ідентифікувати 
// масиви і об'єкти всередині ДАНОГО масиву як object і пропускати їх вміст. Тому написана функція їх не бере до розрахунку.
// В задачі не уточнено чи брати до розрахунку числа, які записані в рядок. Оскільки по своїй суті такий елемент є рядком, а не числом, то
// числа, які записані в рядок до розрахунку не беру.

const TEST_ARR = [1, 42, 3, {id: 1, name: "John"}, "apple", 5, 9, "333", ["strArr1", 89, "strArr2"], 10, NaN, undefined, 0, false, true];
console.log(TEST_ARR);
function type(arr) {
    let sum = 0;
    let amaunt = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log("елемент "+arr[i]+" має тип елементу "+typeof arr[i]+". Це не число? - "+isNaN(arr[i])); // перевірка для себе на відповідність числу
        if (typeof arr[i] === "number" && isNaN(arr[i]) === false) {
            sum += arr[i];
            amaunt++
        }   
    }
    let avarege = sum/amaunt;
    console.log ("Сума числових значень масиву: "+sum);
    console.log ("Кількість числових значень масиву: "+amaunt);
    console.log ("Середнє арифметичне числових значень масиву: "+avarege);
}
const AVAREG = type(TEST_ARR);
console.log(AVAREG);


// ІІ. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.-
const USER_NUM_1 = +prompt('Ведіть перше число');
const USER_NUM_2 = +prompt('Ведіть друге число');
const USER_MATH_SIGN = prompt('Ведіть математичний символ для розрахунків: +, -, *, /, %, ^ (ступінь )');
function doMath(x, znak, y) {
    let result;
    switch(znak) {
        case '+':
            result = x + y;
            alert(x+znak+y+' = '+result);
        break;

        case '-':
            result = x - y;
            alert(x+znak+y+' = '+result);
        break;

        case '*':
            result = x * y;
            alert(x+znak+y+' = '+result);
        break;

        case '/':
            result = x / y;
            alert(x+znak+y+' = '+result);
        break;

        case '%':
            result = x * (y / 100);
            alert(x+znak+y+' = '+result);
        break;

        case '^':
            result = Math.pow(x, y);
            alert(x+znak+y+' = '+result);
        break;
    }
    return result;
}
const doMathResult = doMath(USER_NUM_1, USER_MATH_SIGN, USER_NUM_2);
console.log(doMathResult);


// ІІІ. Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function createArr() {
    let mainArr = [];
    let amountArr = +prompt("Введіть кількість масивів, які треба додати в масив");

    for(let i = 0; i < amountArr; i++) {
        mainArr.push([]);
        let amountElem = +prompt("Введіть кількість елементів вкладеного масиву №" + (i + 1));
        for(let j = 0; j < amountElem; j++) {
            let elem = prompt("Введіть елемент №"+(j + 1)+" вкладеного масиву №"+(i + 1) );
            mainArr[i].push(elem);
        }
    }
    console.warn(mainArr);
}
let result = createArr();



// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач

function createStr() {
    let userStr = prompt("Введіть вираз");
    let amauntLetter = +prompt("Введіть кількість літер, які треба видали з рядка"); 
    let letterDelete = [];
    
    for (let i = 0; i < amauntLetter; i++) {                       
        let letter = prompt("Введіть літеру №"+(i + 1));
        letterDelete.push(letter);
    }

    console.warn(userStr);
    console.warn(letterDelete);

    for (let j = 0; j < userStr.length; j++){ 
        for (let x = 0; x < letterDelete.length; x++) {
            if (userStr[j] == letterDelete[x]) {
                userStr = userStr.replace(userStr[j], "");
                j = 0;
            }
        }

    }
    console.warn(userStr);
    return userStr;
}
let resultStr = createStr();
console.log(resultStr);