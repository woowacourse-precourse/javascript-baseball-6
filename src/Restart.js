import { Console } from "@woowacourse/mission-utils";
import { ERROR, Message } from "./Message";

async function restart(App) {
    Console.print(Message.FINISH);
    Console.print(Message.RESTART);

    const input = await Console.readLineAsync('');
    Console.print(input)
    if (input === '1') {
        await App.play()
    } else if (input === '2') {
        Console.print(Message.END);
        App.isPlaying = false;
    } else {
        throw new Error(ERROR.RESTRAT);
    }
}

export default restart