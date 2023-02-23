//! Task condition:
// In the markup of the HTML document "task-07.html", to which this JS file (task-07.js) is connected, there is a set of tags:
      // - separate tag "input#text" (type="range");
      // - separate <span> tag "span#text".
// Considering the source components described above, it is necessary to write a JS script code that will respond to changes in the value in the <input> tag (input event) and set the corresponding changes in the inline-style "font-size" of the <span> tag. As a result, when dragging the slider - the <input> tag, the size of the text in the <span> tag should change.


//! Solution of the task:
// 1. Creating a variable-link to the <input> tag (by "id" attribute - "font-size-control") of the presented in HTML document markup.
const inputRangeEl = document.getElementById('font-size-control');

// 2. Creating a variable-link to the <span> tag (by "id" attribute - "text") of the presented in HTML document markup.
const spanEl = document.getElementById('text');

// 3. Hanging the listener on the <input> tag by the event 'input', upon registration of which the execution of the function built into the listener is activated.
inputRangeEl.addEventListener('input', (event) => {
    // 3.1. Setting the text size of the <span> tag through the inline style "font-size".
    spanEl.style.fontSize = event.currentTarget.value + 'px';
});

