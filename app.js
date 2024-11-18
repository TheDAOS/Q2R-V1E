let N = 10;
for (let i = 1; i <= N; i++) {

    let line = ""

    for (let j = 1; j <= N; j++) {
        if (j == 1 || i == 1 || i == N) {
            line += "* ";
        }
    }
    console.log(line);
}