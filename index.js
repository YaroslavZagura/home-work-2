//ДЗ 3. Математичні операції
const firstNumber = prompt("Введіть перше число","");
const secondNumber = prompt("Введіть друге число","");
const add_1 = Number(firstNumber)+Number(secondNumber);
const sub_1 = Number(firstNumber)-Number(secondNumber);
const mult_1 = Number(firstNumber)*Number(secondNumber);
const div_1 = Number(firstNumber)/Number(secondNumber);
console.log("Сума введених чисел", add_1)
console.log("Різниця введених чисел", sub_1)
console.log("Результат множення введених чисел", mult_1)
console.log("Результат ділення введених чисел", div_1)
alert("Нейморно! А Ви знали, що:\n"+firstNumber+"+"+secondNumber+"="+add_1+" \n"+firstNumber+"-"+secondNumber+"="+sub_1+" \n"+firstNumber+"*"+secondNumber+"="+mult_1+" \n"+firstNumber+"/"+secondNumber+"="+div_1);

//ДЗ 4. Калькулятор
const action = prompt("Ввдіть в поле одну із операцій, яку хочете виконати:\nДля додавання введіть - add\nДля віднімання введіть - sub\nДля множення введіть - mult\nДля ділення введіть - div");
const oneNum = prompt("Введіть число для розрахунку","");
const twoNum = prompt("Введіть друге число для розрахунку","");
const add = Number(oneNum)+Number(twoNum);
const sub = Number(oneNum)-Number(twoNum);
const mult = Number(oneNum)*Number(twoNum);
const div = Number(oneNum)/Number(twoNum);
if (action == "add") alert (oneNum+" + "+twoNum+" = "+add);
if (action == "sub") alert (oneNum+" - "+twoNum+" = "+sub);
if (action == "mult") alert (oneNum+" * "+twoNum+" = "+mult);
if (action == "div") alert (oneNum+" / "+twoNum+" = "+div);

// ДЗ 5. Години в секунди
const hours = prompt("Введіть кількість ходи, щоб дізнатись скільки в них секунд","");
const seconds = Number(hours)*60;
console.log("Введена кількість годин", hours)
console.log("Обрахована кількість секунд", seconds)
alert("У "+hours+" год. "+seconds+" секунд");

// ДЗ 6. Середнє значення
const first = prompt("Введіть будь-яке число","");
const second = prompt("Введіть ще одне число","");
const third = prompt("Введіть число наостанок","");
const total = Number(first)+Number(second)+Number(third);
const average = total/3;
console.log("Перше число", first)
console.log("Друге число", second)
console.log("Третє число", third)
console.log("Сума трьох чисел",total)
console.log("Середнє", average)
alert("Середнє арифметичне Ваших чисел "+average);
