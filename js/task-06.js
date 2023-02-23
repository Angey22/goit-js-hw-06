//! Task condition:
// In the markup of the HTML document "task-06.html", to which this JS file (task-06.js) is connected, there is a tag "input#validation-input" (type="text"). Taking into account the initial component described above, it is necessary to write a JS script code that when the focus is lost on the <input> tag ('blur' event), it will check its contents for the correct number of entered characters. In doing so:
    // - the valid number of characters entered in the <input> tag is determined by the corresponding value of the "data-length" attribute;
    // - if a suitable number of characters is entered, then the "border" of the <input> tag becomes green, if incorrect - red;
    // - to change the "border" color of the <input> tag, you must use the CSS-classes attributes "valid" and "invalid", which have already been added to the HTML markup of the document.


//! Solution of the task:
// 1. Creating a variable-link to the <input> tag (by "id" attribute - "validation-input") of the presented in HTML document markup.
const inputEl = document.getElementById('validation-input');

// 2. Creating an additional variable, to which we assign a numerical value from the "data-length" attribute of the <input> tag.
const validCharacterCount = Number(inputEl.getAttribute('data-length'));

// 3. Hanging the listener on the <input> tag by the event 'blur', upon registration of which the execution of the function built into the listener is activated.
inputEl.addEventListener('blur', (event) => {
    // 3.1. Creating a helper variable that is assigned a numeric value equal to the number of characters entered in the <input> tag.
    const currentCharacterCount = event.currentTarget.value.length;

    // 3.2. Setting the condition for changing the content of the "class" attribute, depending on the number of characters entered in the <input> tag.
    if (currentCharacterCount === 0) {
        inputEl.className = '';        
    } else {
        inputEl.className = currentCharacterCount === validCharacterCount ? 'valid' : 'invalid';
    };
    
});

