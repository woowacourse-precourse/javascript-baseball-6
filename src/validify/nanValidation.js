import printInputError from "../message/error/printError.js";

const nanValidation = (array) => {
    array.map((element) => {
        if(isNaN(element)) {
            printInputError();
        }
    });
}

export default nanValidation;