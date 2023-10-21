import { Computer } from "./Computer.js";

export class BaseballGame {
    //게임 시작
    startGame() {
        console.log("숫자 야구 게임을 사작합니다.");
        const computer = new Computer();
        const answer = computer.createRandomNum();
    }
}