function checkParentTheses(expression) {
    let stack = [];

    for (let i = 0; i < expression.length; i++) {
        const currentElem = expression[i];
        
        if(currentElem == '{' || currentElem == '[' || currentElem == '('){
            stack.push(currentElem);
        }
        else if(currentElem == '}' || currentElem == ']' || currentElem == ')'){
            const deletedElem = stack.pop();

            // Checking whether deleted element is matching to the currentElement
            if((deletedElem == '{' && currentElem == '}') || (deletedElem == '[' && currentElem == ']') || (deletedElem == '(' && currentElem == ')')){
                continue;
            }
            else{
                return false;
            }
        }
    }

    // At the end our stack must be empty to declare the expression is valid.
    if(stack.length == 0){
        return true;
    }else {
        return false
    }
}

const expression = '3[4-3]*(3)'.split("");

const isBalanced = checkParentTheses(expression);
if(isBalanced){
    console.log(`Perfect balanced expression 👍 `);
}else{
    console.log(` Not a balanced expression 👎`);
}
