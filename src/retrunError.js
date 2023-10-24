class ReturnError {
    constructor(arr) {
        userInput = this.arr;
    }
    sayError(){
        if (isNaN(userInput.join(""))) {
            throw new Error('[ERROR] 숫자를 입력해야 합니다.')
        }
        else if (userInput.length != 3) {
            throw new Error('[ERROR] 숫자 3개를 입력해야 합니다.')
        }
        /*
        else if()){
            throw new Error('[ERROR] 1부터 9사이의 숫자를 입력해야 합니다.')
        }   */
        else if (new Set(userInput).size != 3) {
            throw new Error('[ERROR] 서로 다른 숫자 세개를 입력해야 합니다.')
        }

    }
    stop(){
        //애플리케이션 종료 ??????
    }
}