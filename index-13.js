//випадок. якщо масив задано 1, а користувач обирає що з нього видалити
const ORIGINAL_ARRAY = [1, 2, 9, 2, 3, 4, 5, 5, 6, 2, 7, 8, 5, 9, 0];
console.warn(ORIGINAL_ARRAY);
const USER_CHOISE = +prompt('Перед Вами масив чисел. Виберіть число, яке хочете видалити\n'+ORIGINAL_ARRAY.join(', '));
function removeElement(item, array) {
    for(let i = 0; i < array.length; i++){                        
        if (array[i] === item) { 
            array.splice(i, 1);
            i--; 
        }
    }
}
removeElement(USER_CHOISE, ORIGINAL_ARRAY);
console.warn('масив після видалення вибраного користувачем числа: ');
console.warn(ORIGINAL_ARRAY);
alert('Ви вибрали число - '+USER_CHOISE);
alert('тепер масив виглядає так: \n'+ORIGINAL_ARRAY.join(', '));



//1 функція працює з різними масивами.
const ARR_2 = [11, 21, 32, 31, 48, 54, 17, 83, 59, 39, 80];
const ARR = [1, 2, 9, 2, 3, 4, 5, 5, 6, 2, 7, 8, 5, 9, 0];
function removeElements(array, item) {
    for(let i = 0; i < array.length; i++){                        
        if (array[i] === item) { 
            array.splice(i, 1);
            i--; 
        }
    }
}
removeElements(ARR_2, 32);
console.warn('масив після видалення елементу: ');
console.warn(ARR_2)

removeElements(ARR, 9);
console.warn('масив після видалення елементу: ');
console.warn(ARR);