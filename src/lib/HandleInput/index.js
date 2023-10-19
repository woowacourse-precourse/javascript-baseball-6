const ReadLine = require("./readLine");
const Validate = require("./validate");
const Parse = require("./parse");

async function handleGuessInput() {
    let response;
    try {
        response = await ReadLine.readGuessInput();
        Validate.validateGuessInput(response);
    } catch(e) {
        throw e;
    };
    return response;
};

async function handleCommandInput() {
    let response;
    try {
        response = await ReadLine.readCommandInput();
        Validate.validateCommandInput(response);
        response = Parse.parseCommandInput(response);
    } catch(e) {
        throw e;
    };
    return response;
};

module.exports = {handleCommandInput, handleGuessInput};