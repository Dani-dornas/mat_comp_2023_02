function fibonacciRecursivo_dds(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacciRecursivo_dds(n - 1) + fibonacciRecursivo_dds(n - 2);
    }
}

const indi = 6;
const result = fibonacciRecursivo_dds(indi);
console.log(`O termo na posição ${indi} da sequência de Fibonacci é: ${result}`);
