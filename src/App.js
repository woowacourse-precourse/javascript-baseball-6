import {Console} from '@woowacourse/mission-utils';
import GameUtil from './GameUtil';

class App extends GameUtil{
    constructor(){
        super();
        this.init();
    }

    init(){
        this.randomNumber = super.generateRandomNumbers();
        Console.print('숫자 야구 게임을 시작합니다.');
    }

    async play(){
        try{
        const userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
        }catch(error){
            Console.print(error);
        }
    }
}

const app = new App();
app.play().catch(error=> Console.print(error));

export default App;