let num = 4;

for (let i = 0; i < num; i++) {
    
    let line = "";

    for (let j = 0; j < i; j++) {
        line += " ";
    }

    for (let j = num; j > i; j--) {
        line += "*";
    }

    console.log(line);
}