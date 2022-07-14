// Infix to postfix conversion using javascript.

const expression = 'a*b+5';
const postFix = infixToPostfix(expression);

console.log('Infix : ',expression);
console.log('PostFix : ',postFix);

// Converter Function Goes Here
function infixToPostfix(givenExpression) {
    // To extract each characters seperate from the expression 🎣
    const expression = givenExpression.split('');

    // Stack to store operators 
    let stack = [];
    // points to the top most stack element 🔝
    let top;
    // String to store operands & operators to consider as final postfix expression.
    let postfix = '';

    // Loop through each characters of the expression 
    for (let i = 0; (length = expression.length), i < length; i++) {
        const currElem = expression[i];

        // Check for an operator
        if (currElem == '/' || currElem == '*' || currElem == '%' || currElem == '+' || currElem == '-') {
            // Check if stack is empty 🐿️
            if (stack.length == 0) {
                stack.push(currElem);
                top = stack[stack.length - 1];
            }
            else {
                // Check for precedence 💪
                if (precedence(currElem) > precedence(top)) {
                    stack.push(currElem);
                    top = stack[stack.length - 1];
                }
                else if (precedence(currElem) <= precedence(top)) {
                    // Pop the stack element until current Operator's precedence is Lower or Equal to the stack's top most element 👊
                    while (precedence(currElem) <= precedence(top)) {
                        postfix += stack.pop();
                        top = stack[stack.length - 1];
                    }
                    stack.push(currElem);
                }

            }
        }
        // If an operand put it in to the postfix expression  😄
        else {
            postfix += currElem;
        }
    }

    // At the end of the loop our stack must return remaining items 
    while (stack.length != 0) {
        postfix += stack.pop();
    }

    // Returning final postfix expression .. 👍
    return postfix;

    // Operator Precedence 🥇 🥈 🥉
    function precedence(ch) {
        if (ch == '/' || ch == '*' || ch == '%') {
            return 2;
        } else if (ch == '+' || ch == '-') {
            return 1;
        } else {
            return -1;
        }
    }
}