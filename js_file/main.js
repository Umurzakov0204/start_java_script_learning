const fun = (radius) => {
    return 4 * 3.14 * radius * radius;
}
console.log(fun(5))

// _____________________________
const abc = (num) => {
    if (num > 0) {
        return num;
    } else if (num < 0) {
        return -num;
    } else {
        return 0;
    }
}
console.log(abc())

// ______________________________
// PREDICATES => ПРЕДИКАТ
// === Оператор тождественности также сравнивает два ЗНАЕЧЕНИЯ и их ТИПЫ, и если они равны, возвращает true, иначе возвращает false
// == Оператор равенства сравнивает два ЗНАЧЕНИЯ, и если они равны, возвращает true, иначе возвращает false
// !== Сравнивает два ЗНАЕЧЕНИЯ и их ТИПЫ, и если они НЕ РАВНЫ, возвращает true, иначе возвращает false
// < Сравнивает два ЗНАЕЧЕНИЯ, и если первое меньше второго, то возвращает true, иначе возвращает false
// > Сравнивает два ЗНАЕЧЕНИЯ, и если первое больше второго, то возвращает true, иначе возвращает false
// <= Сравнивает два ЗНАЕЧЕНИЯ, и если первое меньше или равно второму, то возвращает true, иначе возвращает false
// >= Сравнивает два значения, и если первое больше или равно второму, то возвращает true, иначе возвращает false
console.log(512 === 512) //true
console.log(512 === 888) //false
console.log(512 !== 512) //false
console.log(512 > 500) //true
console.log(512 < -30) //false
console.log(512 >= 512) //true
console.log(512 >= 777) //false
console.log(512 <= 777) // true

// рекурсия
const factorial = (n) => {
    if (n === 1 ) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

const answer = factorial(3)
console.log(answer)
