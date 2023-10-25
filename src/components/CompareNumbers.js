import printBallStrike from "./PrintBallStrike.js";

const compareNumbers = (computer_num, player_num) => {
    let strikes = 0;
    let balls = 0;
  
    for (let i = 0; i < player_num.length; i++) {
        if (player_num[i] === computer_num[i]) {
            strikes++;
        } else if (computer_num.includes(player_num[i])) {
            balls++;
        }
    }
    printBallStrike(strikes, balls);

    return strikes;
};

export default compareNumbers;