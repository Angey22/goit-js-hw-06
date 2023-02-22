//! Task condition:
// In the markup of the HTML document "task-04.html", to which this JS file (task-04.js) is connected, there is a "div#counter" tag, inside which are the tags: <button>-"data-action='decrement'", <button>-"data-action='increment'" and "span#value". Taking into account the initial components described above, it is necessary to write a JS script code that will ensure the operation of the automatic counter. The operation of the counter should be based on changing the numerical value displayed using the <span> tag, increasing it by 1 when the <button>-"data-action='increment'" button is pressed, and decreasing it by pressing the <button>-"data-action='decrement'" button. Additional requirements for the method of solving this task are:
    // 1. It is necessary to create a variable "counterValue" in which the current value of the counter will be stored and initialize its contents with the value "0".
    // 2. It is necessary to add click listeners to the buttons, inside which you need to create a function to increase or decrease the counter values.
    // 3. The new counter value interface must be updated by changing the value of the "counterValue" variable.


//! Solution of the task:
// 1. Creating a variable "counterValue" and setting its value - "0".
let counterValue = 0;

// 2. Creating a variable-link to the <span> (by "id" attribute - "value") of the presented in HTML document markup.
const valueEl = document.getElementById('value');

// 3. CCreating a variable-link to the <button>-"data-action='increment'" (by "data" selector) of the presented in HTML document markup.
const incrementBtn = document.querySelector('[data-action="increment"]');

// 4. Creating a variable-link to the <button>-"data-action='decrement'" (by "data" selector) of the presented in HTML document markup.
const decrementBtn = document.querySelector('[data-action="decrement"]');

// 5. Add a click listener to the "decrementBtn" button, inside which we will create a function for decrementing the counter values by decrementing the "counterValue" variable.
decrementBtn.addEventListener('click', () => valueEl.textContent = counterValue -= 1);

// 6. Add a click listener to the button "incrementBtn", inside which we create a function to increase the counter values by increasing the variable "counterValue".
incrementBtn.addEventListener('click', () => valueEl.textContent = counterValue += 1);
