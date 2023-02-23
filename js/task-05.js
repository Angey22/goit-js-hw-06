//! Task condition:
// In the markup of the HTML document "task-04.html", to which this JS file (task-04.js) is connected, there is a set of tags:
    // - separate tag "input#name-input" (type="text");
    // -  - separate <h1> header tag, inside which is the "span#name-output" tag.
// Taking into account the initial components described above, it is necessary to write a JS script code that:
    // 1. When typing text in the "input#name-input" tag ('input' event), substitutes its current value in the "span#name-output" tag;
    // 2. If the <input> tag is empty, the string "Anonymous" should be displayed in the <span> tag.


//! Solution of the task:
// 1. Creating a variable-link to the <input> tag (by "id" attribute - "name-input") of the presented in HTML document markup.
const inputEl = document.getElementById('name-input');

// 2. Creating a variable-link to the <span> tag (by "id" attribute - "name-output") of the presented in HTML document markup.
const spanEl = document.getElementById('name-output');


// 3. We hang the listener on the <input> tag on the event 'input', upon registration of which the built-in function is activated.
inputEl.addEventListener('input', (event) => {
    // 3.1. Creating an internal variable and assigning it the value = to the current text literal entered in the <input> tag.
    const name = event.currentTarget.value;

    // 3.2. Checking the text entered in the <input> tag, and assign a text literal corresponding to the task condition to the <span> tag.
    if (name.trim() === '') {
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = name;
    }
});

//! Note: the "trim()" method is used to check for and ignore whitespace characters in the text area of the <input> tag.

