
export default class Validation {
    static gameInputValidation(gameInput) {
        try {
            this.checkLength(gameInput);
            this.checkNumber(gameInput);
            this.checkRange(gameInput);
            this.checkDuplicate(gameInput);
        } catch (error) {
        throw error;
        }
        return true;
    }

    static checkLength(gameInput) {
        if(gameInput.length != 3) {
            throw new Error('[ERROR]숫자 3자리를 입력해주세요.')
        } return true;
    }

    static checkNumber(gameInput) {
        if(Number.isInteger(gameInput)) {
            throw new Error('[ERROR]숫자만 입력 가능합니다.')
        } return true
        
    }

    static checkRange(gameInput) {
        if(gameInput > 9 && gameInput < 0) {
            throw new Error('[ERROR]1~9 사이의 숫자를 입력해주세요.')
        } return true;
    }

    static checkDuplicate(gameInput) {
        let uniqueNumber = new Set(gameInput);
        if (uniqueNumber.size !== gameInput.length) {
            throw new Error('[ERROR]서로 다른 숫자를 입력해주세요.')
        }
    } 
}