const { COMMAND_HASH } = require("../Constants");

const parseCommandInput = function (input) {
    return COMMAND_HASH[input];
};

module.exports = { parseCommandInput };