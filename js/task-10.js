//! Task condition:
// In the markup of the HTML document "task-10.html", to which this JS file (task-10.js) is connected, there is a set of tags:


// Code of original function - "getRandomHexColor()".
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


//! Solution of the task:
// 1. Using the "object-links" pattern, created an object with a set of links to the elements of the HTML document necessary for the script to work.
const refs = {
  inputEl: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divEl: document.getElementById('boxes'),
};

// 2.1.
const styleTag = document.createElement('style');
// 2.2. 
styleTag.innerHTML = `
#boxes {
  display: flex;
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box__text {
  display: inline-block;
  margin: 0;
  padding: 0;
}`;
// 2.3.
document.head.append(styleTag);

// 3.
refs.btnCreate.addEventListener('click', () => {
  const boxQuantity = Number(refs.inputEl.value);
  createBoxes(boxQuantity);
});

// 4.
refs.btnDestroy.addEventListener('click', destroyBoxes);


// 5.
function createBoxes(amount) {
  // 5.1.
  for (let i = 1; i <= amount; i += 1) {
    // 5.1.2.
    let boxEl = `boxEl_${i}`;
    let numBox = `numBox_${i}`;
    let boxSize = `${(i - 1) * 10 + 30}px`;

    // 5.1.3.
    boxEl = document.createElement('div');
    boxEl.classList.add('box');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = boxSize;
    boxEl.style.height = boxSize;

    // 5.1.4.
    numBox = document.createElement('p');
    numBox.classList.add('box__text');
    numBox.textContent = `${i}`;

    // 5.1.5.
    boxEl.appendChild(numBox);
    refs.divEl.appendChild(boxEl);
  };
};


// 6.
function destroyBoxes() {
  refs.inputEl.value = 0;
  refs.divEl.innerHTML = '';
}

