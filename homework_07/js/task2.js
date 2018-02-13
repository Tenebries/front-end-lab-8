let isPlay = confirm('Do you want to play a game?');

if (isPlay === false) {
    console.log('You did not become a millionaire');
} else {
    let isAgain = true;

    while (isAgain) {
        let isContinue = true;
        let min = 0;
        let max = 5;
        let prize = 0;
        let prizes = [10, 5, 2];

        while (isContinue) {
            let randomNumber = parseInt(Math.random() * (max - min) + min);

            console.log(randomNumber); // del

            let attempt = 3;
            for (let i = 0; i < 3; i++) {
                let userNumber = parseInt(prompt('Enter number from 0 to ' + max +':\n' +
                    'Attempts left: ' + attempt + '\n' +
                    'Total prize: ' + prize + '\n' +
                    'Possible prize on current attempt: ' + prizes[i]));

                attempt--;
                if (i === 0 && userNumber === randomNumber) {
                    console.log(prizes[0] + '$');
                    prize += prizes[0];
                    isContinue = confirm('You want continue a game?');
                    if (isContinue === false) {
                        console.log('Thank you for a game. Your prize is: ' + prize + '$');
                        isAgain = confirm('You want play again?');
                    }
                    break;
                } else if (i === 1 && userNumber === randomNumber) {
                    console.log(prizes[1] + '$');
                    prize += prizes[1];
                    isContinue = confirm('You want continue a game?');
                    if (isContinue === false) {
                        console.log('Thank you for a game. Your prize is: ' + prize + '$');
                        isAgain = confirm('You want play again?');
                    }
                    break;
                } else if (i === 2 && userNumber === randomNumber) {
                    console.log(prizes[2] + '$');
                    prize += prizes[2];
                    isContinue = confirm('You want continue a game?');
                    if (isContinue === false) {
                        console.log('Thank you for a game. Your prize is: ' + prize + '$');
                        isAgain = confirm('You want play again?');
                    }
                    break;
                } else if (i === 2) {
                    console.log('Thank you for a game. Your prize is: ' + prize + '$');
                    isContinue = false;
                    isAgain = confirm('You want play again?');
                }
            }

            max = max * 2;
            prizes[0] = prizes[0] * 3;
            prizes[1] = prizes[1] * 3;
            prizes[2] = prizes[2] * 3;
        }
    }
}