let a = 1;
let b = 10;
let x = 2;
let sum = 0;

for (; a <= b; a++) {
    if (a % x == 0){
    sum += a;
    }
}

console.log(sum);