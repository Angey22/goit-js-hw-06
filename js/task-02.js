//! Task condition:
// In the markup of the HTML document "task-02.html" to which this JS file (task-02.js) is connected, there is a list (<ul> tag) - "ul#ingredients". Also, as the main data that should be used in solving this task, the code of the initial array of strings "ingredients" is given. Taking into account the initial components described above, it is necessary to write a JS script code that:
  // 1. For each element of the original array "ingredients":
    // - will create a separate element - the <li> tag, based on the use of the "document.createElement()" method;
    // - will add the text of the corresponding array element (the name of the ingredient) as the text content of the generated <li> tag;
    // - will add to each of the created <li> tags a "class" attribute with the value - "item".
  // 2. After performing the operations described in the 1st paragraph, you need to insert all the created <li> tags, in one operation, into the "ul#ingredients" list markup.

// The initial array of strings - "ingredients".
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//! Solution of the task:
// 1. Created a variable-link to the tag-<ul> (by "id" attribute - "ingredients") of the list presented in the markup HTML document;
const listEl = document.getElementById('ingredients');

// 2. We create a variable and assign it the value of the tags array, which will be created based on the processing by the "maз()" method of the original array - "ingredients".
const arryOfTags = ingredients.map(ingredient => {
  // 2.1. We create an auxiliary variable and assign it the value of the created empty <li> tag.
  const tagEl = document.createElement('li');

  // 2.2. Set the created <li> tag with the "class" attribute with the value - "item".
  tagEl.classList.add('item');

  // 2.3. Set the created tag <li> text content.
  tagEl.textContent = ingredient;

  // 2.4. We return as the value of the element for the array of tags the markup of the <li> tag with the necessary parameters. As a result, we get an array of <li> tags.
  return tagEl;
});

// 3. Inserting all the created <li> tags, in one operation, into the "ul#ingredients" list markup.
listEl.append(...arryOfTags);

