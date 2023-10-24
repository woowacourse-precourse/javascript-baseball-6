import { messageIsOverlap, messageNotNumber, messageNotOneToNine, messageNotRestartNumber, messageNotThreeDigits } from "./allErrorMessage";

export function isValidGuess(guess) {
    if (guess.length !== 3) {
        throw new Error(messageNotThreeDigits);
    }
    if (isNaN(Number(guess))) {
        throw new Error(messageNotNumber);
    }
    if (new Set(guess).size !== guess.length) {
        throw new Error(messageIsOverlap);
    }
    if (guess < 1 && guess > 9) {
        throw new Error(messageNotOneToNine);
    }
}

export async function checkForReplay(replayInput) {
    if (replayInput !== '1' && replayInput !== '2') {
        throw new Error(messageNotRestartNumber);
    }
}
