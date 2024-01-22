console.log(`In the foo function, you have the line let x = y = 0;. This line can be broken down into two parts:

y = 0;: This assigns the value 0 to the global variable y. Since there is no declaration keyword (var, let, or const) before y, it becomes a global variable.

let x = y;: This declares a local variable x using the let keyword and assigns it the current value of the global variable y. However, since there is no local declaration for y within the function, it refers to the global variable y.`)

function foo() {
    let x = y = 0;
    x++;
    y++;

    return x; 
}


console.log(foo(), typeof x, typeof y);

// console.log(y);  // 1
// console.log(x); // undefined

