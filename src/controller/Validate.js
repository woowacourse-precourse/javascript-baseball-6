class Validate {
    numberValidate = (number) => {
        if (number.length !== 3) throw new Error("[ERROR]")
    }
}

module.exports = Validate;
// export default Validate;
