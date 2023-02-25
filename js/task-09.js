//! Task condition:
// In the markup of the HTML document "task-09.html", to which this JS file (task-09.js) is connected, there is a set of tags:
    // - main <body> tag;
    // - tag <div> - "div.widget", inside which are tags <p> and <button> - "button.change-color";
    // - the <span> tag is "span.color" located inside the <p> tag.
// Considering the initial components described above, it is necessary to write the JS script code that will changes the background colors of the <body> element via an inline style when the "button.change-color" button is clicked, and outputs the code of color value to the page as the text content of the "span.color" tag. To generate a random color code, needed to use the original function - "getRandomHexColor()".

// Code of original function - "getRandomHexColor()".
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


//! Solution of the task:
// 1. Using the "object-links" pattern, created an object with a set of links to the elements of the HTML document necessary for the script to work.
const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
};

// 2. anging the listener on the tag "button.change-color" (on the event 'click'), and writing the code of the call-back function that is activated when this event is registered.
refs.btnEl.addEventListener('click', () => {
  // 2.1. Setting the parameter "background-color" to the <body> tag using the original function - "getRandomHexColor()".
  refs.bodyEl.style.backgroundColor = getRandomHexColor();

  // 2.2. Through a request for the content of the "background-color" attribute of the <body> tag, we display the color code on the page in the format "RGB".
  refs.spanEl.textContent = refs.bodyEl.style.backgroundColor;
});

