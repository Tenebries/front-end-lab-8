let naturalNumber = parseInt(prompt("Enter natural number from 1 to 20:"));

if (isNaN(naturalNumber) || !Number.isInteger(naturalNumber) || naturalNumber <= 0 || naturalNumber > 20) {
    console.error("Incorrect")
} else {
    let pyramid = [],
        n = 1;

    for (let i = 0; i < naturalNumber; i++) {
        pyramid[i] = '   '.repeat(naturalNumber - i + 1) + '[~]'.repeat(i + n);
        n++;
        console.log(pyramid[i]);
    }
}