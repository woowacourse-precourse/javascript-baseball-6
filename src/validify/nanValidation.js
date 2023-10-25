import printInputTypeError from "../message/error/printInputTypeError.js";

const nanValidation = (array) => {
    array.map((element) => {
        if(isNaN(element)) {
            printInputTypeError();
        }
    });
}

export default nanValidation;