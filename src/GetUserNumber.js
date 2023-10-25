import {Console} from '@woowacourse/mission-utils';
import checkError from './CheckError';

const sliceString = async function transformUserInputStringToArray (userInput) {
    let user=[];
    for(let i=0;i<userInput.length;i++){
        user.push(parseInt(userInput.charAt(i)));

    }

    return user;
}
const getUserNumber = async function getUserNumberByReadLineAsync () {
    try {
        const USER_INPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');
        const IS_USER_INPUT_VALID = await checkError(USER_INPUT);
        
        if(!IS_USER_INPUT_VALID) throw new Error('[ERROR]');
        const user=  await sliceString(USER_INPUT);
        return user;
    }
    
    catch (error) {
        Console.print('[ERROR] 숫자가 잘못된 형식입니다.');
        return;
    }

    return;
}

export default getUserNumber;
