import printError from "../message/error/printError.js";

const nanValidation = (array) => {
    array.map((element) => {
        if(isNaN(element)) {
            printError();
        }
    });
}

export default nanValidation;