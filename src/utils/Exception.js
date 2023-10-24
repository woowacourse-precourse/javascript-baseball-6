class Exception {
    static userNumberException(answer) {
        const answerSet = new Set(answer.split("")); // Set으로 함으로써 중복된 숫자 제거 가능

        if (answerSet.size !== 3 || isNaN(answer) || answer.includes("0")) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }
}

export default Exception;