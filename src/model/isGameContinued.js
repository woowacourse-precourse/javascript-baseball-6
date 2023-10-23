const isGameContinued = function returnBooleanByUserGameDecision(decision) {
    if (decision === '1') {
        return true
    } else if (decision === '2') {
        return false
    }
}

export default isGameContinued;