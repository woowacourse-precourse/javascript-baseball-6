class Validate {
    numberValidate = (number) => {
        if (number.length !== 3) throw new Error('[ERROR] 3자리 숫자를 입력해 주세요')
    }

}

module.exports = Validate;