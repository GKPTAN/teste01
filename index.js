const curso = (assunto) => {
    let curso = assunto;
    console.log(curso);
}
let a = [10, 20, 30]
const [b] = [...a];
console.log(b);
export const soma = (a, b) => {
    return a + b;
};
for(let num in a) {
    if (num > 10) {
        num = num + 10
    };
};
curso();