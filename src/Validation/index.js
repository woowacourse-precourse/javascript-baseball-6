
class Validation {
    gameInputValidation(gameInput) {
        try {
            checkLength(gameInput);
            checkNumber(gameInput);
            checkRange(gameInput);
            checkDuplicate(gameInput);
        } catch (error) {
        throw error;
        }
        return 0;
    }

    checkLength(gameInput) {
        if (gameInput.length != 3) {
            throw new Error('[ERROR]숫자 3자리를 입력해주세요.')
        } return true;
    }

    checkNumber(gameInput) {
        if(Number.isInterger(gameInput)) {
            throw new Error('[ERROR]숫자만 입력 가능합니다.')
        } return true;
    }

    checkRange(gameInput) {
        if(gameInput > 9 && gameInput < 0) {
            throw new Error('[ERROR]1~9 사이의 숫자를 입력해주세요.')
        } return true;
    }

    checkDuplicate(gameInput) {
        let uniqueNumber = new Set(gameInput);
        if (uniqueNumber.size !== gameInput.length) {
            throw new Error('[ERROR]서로 다른 숫자를 입력해주세요.')
        }
    } 
}

module.exports = Validation