const GAME = Object.freeze({
        start : "숫자 야구 게임을 시작합니다.",
        inputNumber : "숫자를 입력해주세요 : ",
        gameEnd : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
        restart : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        inputRestart : "1입력",
        inputEnd : "게임 종료",

});

const RESULT = Object.freeze({
    nothing : "낫싱",
    strike : "스트라이크",
    ball : "볼",
});

const ERROR = Object.freeze({
    invalidNumLength : "[ERROR] 3자리의 숫자를 입력하세요.",
    invalidExit : "[ERROR] 1과 2중 하나를 입력하세요.",
    invalidRange : "[ERROR] 1에서 9 사이의 값을 입력하세요.",
    invalidNumberType : "[ERROR] 숫자를 입력하세요.",
    duplicateInput : "[ERROR] 중복된 숫자는 올 수 없습니다."
});

export { GAME, RESULT, ERROR };