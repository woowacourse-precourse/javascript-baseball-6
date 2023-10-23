import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "./Message";

async function restart(App) {
    Console.print(MESSAGE.FINISH);
    Console.print(MESSAGE.RESTART);

    const input = await Console.readLineAsync('');
    Console.print(input)
    if (input === '1') {
        await App.play()
    } else if (input === '2') {
        Console.print(MESSAGE.END);
        App.isPlaying = false;
    } else {
        throw new Error(ERROR.RESTRAT);
    }
}

export default restart