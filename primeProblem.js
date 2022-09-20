function primeNumber(x) {
    let flag = true;
    for (let i = 2; i <= x; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
    }

    console.log(flag ? "Yes" : "No")
    console.log(flag ? "Yes" : "No")
    console.log(flag ? "Yes" : "No")
}
primeNumber(4);