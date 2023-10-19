const ReadLine = require("./readLine");
const Validate = require("./validate");
const Parse = require("./parse");

const handleGuessInput = async function () {
    let response;
    try {
        response = await ReadLine.readGuessInput();
        Validate.validateGuessInput(response);
    } catch(e) {
        throw e;
    };
    return response;
};

const handleCommandInput = async function () {
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

module.exports = { handleCommandInput, handleGuessInput };