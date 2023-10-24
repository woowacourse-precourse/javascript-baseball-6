import {Random, Console} from "@woowacourse/mission-utils";
import Message from "./Message.js";

class BaseballGame{

    #computerNumber; //컴퓨터가 생성한 수
    #replayFlag = 0; //리플레이 여부에 관한 플래그

    /**컴퓨터의 랜덤한 수 생성**/
    getComputerNumber(){
        const computer = [];
        while(computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if(!computer.includes(number)){
                computer.push(number);
            }
        }
        return computer;
    }

    /**플레이어 수 입력 요구 및 반환**/
    async getInputNumber(){
        const input = await Console.readLineAsync(Message.input);
        //예외처리//
        if(input.length !== 3 || input.includes(0) || isNaN(input)){
            throw new Error(Message.error);
        } else {
            if(input[0] === input[1] || input[0] === input[2] || input[1] === input[2]){
                throw new Error(Message.error);
            } else {
                const inputArray = input.split('').map(Number);
                return inputArray;
            }
        }
    }

    /**컴퓨터 수와 플레이어 수 비교**/
    async compare(){
        const computer = this.#computerNumber;
        const input = await this.getInputNumber();
        let ball = 0;
        let strike = 0;
        //볼 개수 세기//
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(computer[i] === input[j] && i !== j) ball++;
            }
        }
        //스트라이크 개수 세기//
        for(let i = 0; i < 3; i++){
            if(computer[i] === input[i]) strike++;
        }
        //결과 출력//
        this.resultMessage(ball, strike);
        if(strike === 3){
            return this.continueOrNot();
        } else{
            return this.compare();
        }
    }

    /**볼 스트라이크 개수 출력하기**/
    resultMessage(ball, strike){
        let message = '';
        if(ball > 0 && strike === 0) message = `${ball}볼`;
        if(strike > 0 && ball === 0) message = `${strike}스트라이크`;
        if(ball > 0 && strike > 0) message = `${ball}볼 ${strike}스트라이크`;
        if(strike === 0 && ball === 0) message = '낫싱';
        Console.print(message);
        return;
    }

    /**리플레이 여부 입력 요구 및 반환**/
    async continueOrNot(){
        const input = await Console.readLineAsync(Message.clear);
        if(input == 1){
            return this.start();
        } else if(input == 2){
            Console.print(Message.exit);
            return;
        } else{
            throw new Error(Message.error);
        }
    }

    /**게임 시작**/
    async start(){
        this.#computerNumber = this.getComputerNumber();
        if(this.#replayFlag === 0){
            Console.print(Message.start);
            this.#replayFlag = 1;
        } 
        return this.compare();
    }
}

export default BaseballGame;