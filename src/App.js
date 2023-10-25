"use strict";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.answer = this.generateThreeNumber();
    }

    async play() {
        MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`);
        this.pitchNumber();
    }

    generateThreeNumber() {
        const threeDigitNumber = [];
        while (threeDigitNumber.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!threeDigitNumber.includes(number)) {
                threeDigitNumber.push(number);
            }
        }
        return threeDigitNumber;
    }

    pitchNumber() {
        MissionUtils.Console.readLineAsync(
            "숫자를 입력해 주세요 : ",
            (input) => {
                const inputArray = input.split("").map(Number);
                if (!this.isValidInput(inputArray)) {
                    MissionUtils.Console.print(
                        "유효하지 않은 입력입니다. 다시 시도해주세요."
                    );
                    this.pitchNumber();
                } else {
                    this.printResult(this.judgeBallStrike(this.answer, input));
                    if (result.strike === 3) {
                        this.askReplay();
                    } else {
                        this.pitchNumber();
                    }
                }
            }
        );
    }

    inValidGuess(inputStr) {
        const inputArr = [...inputStr].map(Number);
        const inputSet = new Set(inputArr);
        if (!/^[1-9]{3}$/.test(inputStr) || inputSet.size !== 3) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        return inputArr;
    }

    judgeBallStrike(threeDigitNumber, inputArr) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < threeDigitNumber.length; i++) {
            if (threeDigitNumber[i] === inputArr[i]) {
                strike++;
            } else if (threeDigitNumber.includes(inputArr[i])) {
                ball++;
            }
        }
        return { ball, strike };
    }

    askReplay() {
        MissionUtils.Console.readLineAsync(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료. 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        ).then((input) => {
            if (input === "1") {
                this.answer = this.generateThreeNumber();
                this.pitchNumber();
            } else if (input === "2") {
                MissionUtils.Console.print("게임을 종료합니다.");
            } else {
                this.askReplay();
            }
        });
    }

    printResult(ball, strike) {
        if (ball === 0 && strike === 0) {
            MissionUtils.Console.print("낫싱");
        } else {
            const result = [];
            if (ball > 0) {
                result.push(`볼: ${ball}`);
            }
            if (strike > 0) {
                result.push(`스트라이크: ${strike}`);
            }
            MissionUtils.Console.print(result.join(", "));
        }
    }
    //
}

const app = new App();
app.play();
