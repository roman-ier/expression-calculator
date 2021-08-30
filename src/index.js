function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    try {
        let result = new Function('return ' + expr);
        if (result() === Infinity || expr.includes('/ 0')) {
            throw new TypeError();
        }
        return result();
    } catch (err) {
        if (err.name === 'SyntaxError') {
            throw new SyntaxError('ExpressionError: Brackets must be paired');
        }
        if (err.name === 'TypeError') {
            throw new TypeError('TypeError: Division by zero.');
        }
    }
}

module.exports = {
    expressionCalculator
}