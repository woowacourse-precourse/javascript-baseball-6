import { Console } from "@woowacourse/mission-utils"

export default async function getUserNum() {
    try {
        const userNum = await Console.readLineAsync();
        Console.print('숫자를 입력해주세요 : ' + userNum);
        const userNumArr = [...userNum].map(num => Number(num));
        const userNumSet = new Set(userNumArr);
        if (userNumArr.length !== 3) throw new Error('[ERROR] 세 자리 수가 아닙니다.');
        if (userNumArr.length !== userNumSet.size) throw new Error('[ERROR] 서로 다른 수가 아닙니다.');
        return userNumArr
    } catch (error) {
        Console.print(error.message)
        throw error
    }
}