function combiningTypes() {
    var userName = 'kastastin';
    // userName = 10; // Type 'number' is not assignable to type 'string'
    userName = 'bob';
    // string,number, boolean
    var userAge = 20;
    var isValid = true;
    // type string OR number
    var userId = 'abc1';
    userId = 123;
    // userId = true; // Type 'boolean' is not assignable to type 'string | number'
}
function objectTypes() {
    // let user: object;
    // user = 'kastastin'; // Type 'string' is not assignable to type 'object'
    var user;
    user = {
        id: 'abc',
        name: 'kastastin',
        age: 20,
        isAdmin: true,
    };
    // user = {};
    // Type '{}' is missing the following properties from type '{ id: string | number; name: string; age: number; isAdmin: boolean; }': id, name, age, isAdmin
}
function arrayTypes() {
    var hobbies;
    // alternative syntax
    // let hobbies: string[];
    // let users: { id: string | number; name: string }[];
    hobbies = ['sports', 'cooking', 'reading'];
}
function functionTypes() {
    function displayResult(result) {
        console.log(result);
    }
    function add(a, b) {
        var result = a + b;
        return result;
    }
    function calculate(a, b, calcFn) {
        return calcFn(a, b);
    }
    displayResult(calculate(2, 2, add));
}
functionTypes();
// npx tsc first-app.ts
