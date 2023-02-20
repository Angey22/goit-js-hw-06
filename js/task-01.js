//! Task condition:
// In the markup of the HTML document "task-01.html" to which this JS file (task-01.js) is connected, there is a list of categories - "ul#categories". It is necessary to write a JS script code that:
    // 1. Counts and prints to the browser console the number of categories that are in "ul#categories", that is, counts and displays the value of the number of elements "li.item" in the corresponding list;
    // 2. For each "li.item" element from the "ul#categories" list, you need to find and output to the console the title text of the corresponding element (<h2> tag), and the number of elements in the nested list (the number of <li> tags in it).

// As a result of the execution of the script code, the following messages should be displayed in the browser console:
    /*
    * Number of categories: 3
    *
    * Category: Animals
    * Elements: 4
    * 
    * Category: Products
    * Elements: 3
    * 
    * Category: Technologies
    * Elements: 5
    */


//! Solution of the task:
// 1. Created a variable-link to the tag-<ul> (by "id" attribute) of the common list present in markup HTML document;
const commonListEl = document.getElementById('categories');

// 2. By using a variable-link "commonListEl", created a pseudo-array of the list "ul#categories", determined its length (the value of which is equal to the number of elements "li.item" in this list), and displayed template string with the corresponding content in the browser console.
console.dir(`Number of categories: ${commonListEl.children.length}`);

// 3. Using the loop "for...of" to iterate over the pseudo-array created using the variable-link "commonListEl".
for (let element of commonListEl.children) {
    // 3.1. Outputting an empty string to the browser console to visually separate the information output at each iteration of the loop.
    console.log('');

    // 3.2. Outputting of a template string to the browser console containing in it the text of the title of a single list item "ul#categories" (content his <h2> tag).
    console.log(`Category: ${element.firstElementChild.textContent}`);

    // 3.3. Outputting of a template string to the browser console containing a counted number of elements in the nested list (the number of <li> tags in it).
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
};

