class ReturnError {

    sayError(userInput){
        if (isNaN(userInput.join(""))) {
            throw new Error('[ERROR] 숫자를 입력해야 합니다.')
        } else if (userInput.length != 3) {
            throw new Error('[ERROR] 숫자 3개를 입력해야 합니다.')
        } else if(Math.min(userInput) < 1 || Math.max(userInput) > 9 ){
            throw new Error('[ERROR] 1부터 9사이의 숫자를 입력해야 합니다.')
        } else if (new Set(userInput).size != 3) {
            throw new Error('[ERROR] 서로 다른 숫자 세개를 입력해야 합니다.')
        }
    }
}
export default ReturnError;