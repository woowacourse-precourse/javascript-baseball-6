import Compare from "./Compare.js";

function result(playerInputNumber, computerPickNumber) {
    const ball = Compare.compareBall(playerInputNumber, computerPickNumber);
    const strike = Compare.compareStrike(playerInputNumber, computerPickNumber);
    let ballResult = "";
    let strikeResult = "";
    if (ball > 0) {
        ballResult = ball + "볼 ";
    }
    if (strike > 0) {
        strikeResult = strike + "스트라이크";
    }
    let score = ballResult + strikeResult;
    if (score == "") {
        score = "낫싱";
    }
    return score;
}

export default result;