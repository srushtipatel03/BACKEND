// JavaScript "use strict"


// In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code. 

// 'use strict';

{
    // myVariable = 9;   
    // console.log(myVariable)
}

// Here, myVariable is created without declaring. This works as a global variable in JavaScript. However, if you use this in strict mode, the program will throw an error. 

// Strict Mode in Variable

// In strict mode, using a variable without declaring it throws an error.

{
    // console.log("some code");

    // // 'use strict' is ignored
    // "use strict";

        // x = 21; // does not throw an error
        // console.log(x);
}

// Strict Mode in Function
// You can also use strict mode inside a function.

{
    // myVariable = 9;
    // console.log(myVariable); // 9

    // function hello() {

    //     // applicable only for this function
    //     'use strict';

    //    let string = 'hello'; // throws an error
    // }

    // hello();
}

// If you use 'use strict'; inside a function, the code inside the function will be in strict mode.

{
    // function hello() {
    //     string = 'hello'; // throws an error
    // }

    // hello();

    // // Note : Strict mode doesn't apply to block statements with {} braces.
}


// Things Not Allowed in Strict Mode
// 1. Undeclared variable is not allowed.
{
    // 'use strict';
    
    // a = 'hello'; // throws an error
}

// 2. Undeclared objects are not allowed.

{
    // 'use strict';
    
    // person = {name: 'Carla', age: 25}; // throws an error
}

// 3. Deleting an object is not allowed.

{
    // 'use strict';
    
    // let person = {name: 'Carla'};
    
    // delete person; // throws an error
}

// 4. Duplicating a parameter name is not allowed.

{
    // "use strict";
    
    // function hello(p1, p1) { console.log('hello')}; // throws an error
    
    // hello();
}

// 5. Assigning to a non-writable property is not allowed.

{
    // 'use strict';
    
    // let obj1 = {};
    
    // Object.defineProperty(obj1, 'x', { value: 42, writable: false });
    
    // // assignment to a non-writable property
    // obj1.x = 9; // throws an error
}

// 6. Assigning to a getter-only property is not allowed.

{
    // 'use strict';
    
    // let obj2 = { get x() { return 17; } };
    
    // // assignment to a getter-only property
    // obj2.x = 5; // throws an error
}

// 7. Assigning to a new property on a non-extensible object is not allowed.

{
    // 'use strict';
    
    // let obj = {};
    // Object.preventExtensions(obj);
    // // Assignment to a new property on a non-extensible object
    // obj.newValue = 'new value'; // throws an error
}

// 8. Octal syntax is not allowed.

{
    // 'use strict';
    
    // let a = 010; // throws an error
}

// 9. The variable name arguments and eval are not allowed.

{
    // 'use strict';
    
    // let arguments = 'hello'; // throws an error
    
    // let eval = 44;
}

// 10. You cannot also use these reserved keywords in strict mode.

// implements interface let package private protected public static yield


// Benefits of Strict Mode

// The use of strict mode:

// helps to write a cleaner code
// changes previously accepted silent errors (bad syntax) into real errors and throws an error message
// makes it easier to write "secure" JavaScript