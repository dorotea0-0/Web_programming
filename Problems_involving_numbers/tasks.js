//1.1 Проверка взаимной простоты двух чисел
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function areCoprime(a, b) {
    return gcd(a, b) === 1;
}

//1.2 Проверка простоты числа
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

//1.5 Найти все делители числа
function getDivisors(n) {
    const divisors = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}

// 1.9 Проверка числа Фибоначчи
function isFibonacci(n) {
    if (n < 0) return false;
    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }
    return b === n || n === 0;
}

// 1.10 Двойной факториал
function doubleFactorial(n) {
    let result = 1;
    const start = (n % 2 === 0) ? 2 : 1;
    for (let i = start; i <= n; i += 2) {
        result *= i;
    }
    return result;
}

// 1.1
console.log("Задача 1.1");
const a1 = 12, b1 = 25;
console.log(`Числа ${a1} и ${b1}: ${areCoprime(a1, b1) ? 'взаимно просты ' : 'не взаимно просты '}`);
console.log(`НОД(${a1}, ${b1}) = ${gcd(a1, b1)}\n`);

const a2 = 12, b2 = 18;
console.log(`Числа ${a2} и ${b2}: ${areCoprime(a2, b2) ? 'взаимно просты ' : 'не взаимно просты '}`);
console.log(`НОД(${a2}, ${b2}) = ${gcd(a2, b2)}\n`);

// 1.2
console.log("Задача 1.2");
[7, 12, 2, 1, 97].forEach(n => {
    console.log(`${n} — ${isPrime(n) ? 'простое' : 'составное'}`);
});
console.log();

// 1.5
console.log("Задача 1.5");
[12, 36, 1, 100].forEach(n => {
    const divs = getDivisors(n);
    console.log(`Делители ${n}: [${divs.join(', ')}]`);
});
console.log();

// 1.9
console.log("Задача 1.9");
[8, 13, 14, 21, 144, 4].forEach(n => {
    console.log(`${n} — ${isFibonacci(n) ? 'число Фибоначчи' : 'не число Фибоначчи'}`);
});
console.log();

// 1.10
console.log("Задача 1.10");
[6, 7, 10, 5].forEach(n => {
    const type = (n % 2 === 0) ? 'чётных' : 'нечётных';
    console.log(`${n}!! = ${doubleFactorial(n)}`);
});