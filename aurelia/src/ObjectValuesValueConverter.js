export class ObjectValuesValueConverter {
    toView(obj) {
        // Create a temporary array to populate with object values
        let temp = [];

        // A basic for..in loop to get values
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of
        for (let val of obj) {
            temp.push(val);
        }

        return temp;
    }
}