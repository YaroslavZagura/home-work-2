// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію pow (num, degree)

const NUMBER = +prompt("Введіть число, яке треба звести в ступінь");
const DEGREE = +prompt("Введіть ступінь, в яку треба звести число");
function pow(num, degree) {
    if (degree == 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}
alert(`${NUMBER}^${DEGREE}=`+pow(NUMBER, DEGREE));