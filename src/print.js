import { MissionUtils } from '@woowacourse/mission-utils';

const print = (string = '') => {
    MissionUtils.Console.print(string);
};

const printStartApp = () => {
    print('숫자 야구 게임을 시작합니다.');
};

const printEndGame = () => {
    print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
};

const printQuestionNewGame = () => {
    print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
};

const getMatchResult = ({ ballCount, strikeCount }) => {
    if (ballCount + strikeCount === 0) {
        return '낫싱';
    }

    const result = [];

    if (ballCount > 0) {
        result.push(`${ballCount}볼`);
    }
    
    if (strikeCount > 0) {
        result.push(`${strikeCount}스트라이크`);
    }

    return result.join(' ');
};

const printMatchResult = (matchResult) => {
    print(getMatchResult(matchResult));
};

export { 
    printStartApp, 
    printEndGame, 
    printQuestionNewGame, 
    printMatchResult
};