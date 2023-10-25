import printInputLengthError from "../message/error/printInputLengthError.js";
import nanValidation from "./nanValidation.js";

const inputValidation = (arrayInput) => {
    nanValidation(arrayInput);

    if(arrayInput.length !== 3) {
        printInputLengthError();
    }
}

export default inputValidation;