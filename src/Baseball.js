import MESSEAGE from "./Constants.js";
//baseball 계산기는 예외처리 이후에 정상적인 input값이 들어왔다고 가정한다
// const baseball = new Baseball(input, radom)
// input : 문자열  random : 배열
// baseball 내부에서는 input도 배열로 변환해서 로직이 돌아간다.

class Baseball {
    constructor(input, random) {
        this.input = input.split('').map(Number)
        this.random = random   
    }

    ballNumber() {
        const ballArray = this.input.filter((element, index) => {
            return element !== this.random[index] && this.random.includes(element);
        })
        
        return ballArray.length;
    }

    ballResult() {
        return this.ballNumber() > 0 ? `${this.ballNumber()}${MESSEAGE.BALL}` : ''; 
    }

    strikeNumber() {
        const strikeArray = this.input.filter((element, index) => {
            return element === this.random[index];
        })
        
        return strikeArray.length;
    }

    strikeResult() {
        return this.strikeNumber() > 0 ? `${this.strikeNumber()}${MESSEAGE.STRIKE}` : '';
    }

    outcome() {
        if(this.ballNumber() === 0 && this.strikeNumber() === 0) {
            return `${MESSEAGE.NOTHING}`;
        }
        
        return [this.ballResult(), this.strikeResult()].join(' ').trim();
    }
}



export default Baseball

