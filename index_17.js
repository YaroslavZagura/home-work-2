// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function sum () { 
    let add = 0; 
    const newSum = function(x) { 
        add = add + x; 
        return add; 
    } 
    return newSum;
} 
const totalSum = sum (); 
const sum3 = totalSum(3); 
const sum5 = totalSum(5); 
const sum20 = totalSum(20); 
console.log(sum3);
console.log(sum5);
console.log(sum20);