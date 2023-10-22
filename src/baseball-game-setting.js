class BaseballGameSettings {
    constructor() {
        this.restart = true
        this.gameStartMassege = `숫자 야구 게임을 시작합니다.`
        this.userInput = `숫자를 입력해주세요 : `
        this.ballSize = 3
        this.ballMinSize = 1
        this.ballMaxSize = 9
        this.reStartGame = 1
        this.stopGame = 2
        this.ballMessage = `볼`
        this.strikeMessage = `스트라이크`
        this.noStrikeNoBallMsg = `낫싱`
        this.GameStart = `숫자 야구 게임을 시작합니다.`
        this.restartOrStopMessage = `게임을 새로 시작하려면 ${this.reStartGame}, 종료하려면 ${this.stopGame}를 입력하세요.\n`
        this.gameWinMsg = `게임을 새로 시작하려면 ${this.reStartGame}, 종료하려면 ${this.stopGame}를 입력하세요.\n`
    }
}

const BaseballGameSetting = new BaseballGameSettings()
export default BaseballGameSetting