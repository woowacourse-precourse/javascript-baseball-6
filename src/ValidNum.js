import { ERROR } from "./Message"

function valid (input){
    if(input.length !== 3){
        throw new Error(ERROR.INPUT_LENGTH)
    }
    else if(!Number.isInteger(+input)) throw new Error(ERROR.NUM_INT)
}

export default valid