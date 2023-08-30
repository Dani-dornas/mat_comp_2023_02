function PG_dds(termoInicial: number, razao: number, n: number): number {
    return termoInicial * Math.pow(razao, n - 1);
}

const n = 50;
const exemplo = PG_dds(1, 2, n)
console.log(`O termo na posição ${n} da progressão é: ${exemplo}`);
