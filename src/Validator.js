class Validator {
    checkValidInput(userInput) {
        userInput = this.removeTrim(userInput)
        this.isNumber(userInput)
        this.isInvalidLength(userInput)
        this.isDuplicated(userInput)
    }

    isNumber(userInput) {
        if (isNaN(userInput)) throw new Error(this.message.PRINT_INVALID_ERROR_MESSAGE())
    }

    isInvalidLength(userInput) {
        if (userInput.length !== 3) throw new Error(this.message.PRINT_INVALID_ERROR_MESSAGE())
    }

    isDuplicated(userInput) {
        const list = userInput.split("")
        const set = new Set(list)
        const arr = [...set]
        console.log("userinput", userInput.split(""))
        console.log('set', set)
        console.log('arr', arr)
        if (arr.length !== 3) throw new Error(this.message.PRINT_INVALID_ERROR_MESSAGE)
    }

    removeTrim(input) {
        return input.split(" ").join("")
    }
}


export default Validator