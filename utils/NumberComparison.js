import { MissionUtils } from "@woowacourse/mission-utils";
class NumberComparison {
    static comparisonResult(computerNumber, userNumber) {
        let strikeCount = 0;
        let ballCount = 0;

        for (let i = 0; i < computerNumber.length; i++) {
            if (computerNumber[i] === userNumber[i]) {
                strikeCount++;
            } else if (userNumber.includes(computerNumber[i])) {
                ballCount++;
            }
        }

        return { strikeCount, ballCount };
    }

    static makeCountMessage(counts) {
        if (counts.strikeCount === 0 && counts.ballCount === 0) {
            return '낫싱';
        }
        if (counts.strikeCount === 0) {
            return `${counts.ballCount}볼`;
        }
        if (counts.ballCount === 0) {
            return `${counts.strikeCount}스트라이크`;
        }
        return `${counts.ballCount}볼 ${counts.strikeCount}스트라이크`;
    }
}

export default NumberComparison;