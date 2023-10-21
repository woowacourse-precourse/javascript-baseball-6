import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 입력값을 받아주는 함수
 * @param {string} message
 */

export const readLine = async (message) => MissionUtils.Console.readLineAsync(message);
