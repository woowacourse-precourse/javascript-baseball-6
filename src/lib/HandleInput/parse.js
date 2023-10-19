const { COMMAND_HASH } = require("../Constants");

function parseCommandInput(input) {
    return COMMAND_HASH[input];
};

module.exports = {parseCommandInput};