import Counted from "./Counted.js";

class Compare {
    static compareStrike(playerInputNumber, computerPickNumber) {
        let strike = 0;
        let i = 0;
        while (i < 3) {
            let j = 0;
            while (j < 3) {
                strike = strike + Counted.countedStrike(playerInputNumber, computerPickNumber, i, j);
                j++;
            }
            i++;
        }
        return strike;
    }

    static compareBall(playerInputNumber, computerPickNumber) {
        let ball = 0;
        let i = 0;
        while (i < 3) {
            let j = 0;
            while (j < 3) {
                ball = ball + Counted.countedBall(playerInputNumber, computerPickNumber, i, j);
                j++;
            }
            i++;
        }
        return ball;
    }
}

export default Compare;