export const GAME_MESSAGE = {
    gameStart: '숫자 야구 게임을 시작합니다.',
    gameContinueAsk: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    strike: '3스트라이크',
    successGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    nothing: '낫싱',
    inputNumberAsk: '숫자를 입력해주세요 : ',

    getStrikeAndBallMessage(ball, strike) {
        return `${ball}볼 ${strike}스트라이크`;
    },
};