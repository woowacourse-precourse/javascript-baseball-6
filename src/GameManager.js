import {ERROR_MESSAGE} from "./Define.js";
import {CREATE_RANDOM_NUMBER} from "./Computer.js";
import {PLAYER_INPUT} from "./Player.js";
import {RETURN_RESULT} from "./GameRefree.js";

export const PRINT_ERROR_MESSAGE = () => {
    throw new Error(ERROR_MESSAGE);
};
export const  PLAY_GAME = async () =>{
    const RANDOM_NUMBER = CREATE_RANDOM_NUMBER();
    console.log("컴퓨터"+RANDOM_NUMBER);
    const PLAYER_NUMBER = (await PLAYER_INPUT()).split('').map(Number);
    await RETURN_RESULT(PLAYER_NUMBER,RANDOM_NUMBER);
}