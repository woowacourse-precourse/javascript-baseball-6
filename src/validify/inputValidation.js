import printError from "../message/error/printError.js";
import nanValidation from "./nanValidation.js";

const inputValidation = (arrayInput) => {
    nanValidation(arrayInput);

    if(arrayInput.length !== 3) {
        printError();
    }
}

export default inputValidation;