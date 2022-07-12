class ParentThesesProblem {
    constructor(items) {
        this.items = items;
        this.stack = [];
    }

    checkExpression() {
        let push_count = 0;
        let pop_count = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] == '(') {
                push_count++;
                this.stack.push(this.items[i]);
            }
            else if (this.items[i] == ')') {
                // Checking Underflow Condition before pop operation.
                if (this.stack.length == 0) {
                    console.log(`Number of push : ${push_count}`);
                    console.log(`Number of pop : ${pop_count}`);
                    return '\nExpression is not valid  .. 👎';
                }
                else {
                    pop_count++;
                    this.stack.pop();
                }
            }
        }

        // At the end if stack is empty then our expression is valid
        if (this.stack.length == 0) {
            console.log(`Number of push : ${push_count}`);
            console.log(`Number of pop : ${pop_count}`);
            return '\nExpression is valid .. 👍';
        } else {
            console.log(`Number of push : ${push_count}`);
            console.log(`Number of pop : ${pop_count}`);
            return '\nExpression is not valid .. 👎';
        }

    }
}

// Creating expression
const expression = '3*4((5-6))-5'.split('');
// console.log(expression);
const myProblem = new ParentThesesProblem(expression);

console.log(myProblem.checkExpression())