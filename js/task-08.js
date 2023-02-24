//! Task condition:
// In the markup of the HTML document "task-08.html", to which this JS file (task-08.js) is connected, there is a set of form tags - "form.login-form". Consisting of the main components: textual input tags and information sending buttons. Using these initial elements of the form, it is necessary to write a JS script code that will be manage this form of the login. At the same time, the control algorithm for this form should:
    // 1. Carry out the operation of sending the form on the event - 'submit'.
    // 2. When sending a form, the current page (tab) of the browser should not be rebooted.
    // 3. If the form has empty fields, then with the help of the "alert()" method, should display a warning message that all form fields must be filled.
    // 4. If the user has filled in all the fields and submitted the form, you need to collect the field values into an object, where the field name will be the property name and the field value will be the property value. To access form elements, you must use the "elements" property of the standard form processing event object.
    // 5. As a result of the script, you must:
        // - output to the browser console an object with the data entered as a result of filling out the form;
        // - clear the contents of form input text fields using the "rest()" method for this.


//! Solution of the task:
// 1. Creating a variable-link to the <form> tag (by "class" attribute - "login-form") of the presented in HTML document markup.
const formEl = document.querySelector('.login-form');

// 2. Hanging the listener on the <form> tag by the event 'submit', upon registration of which the execution of the callback function - "onFormSubmit".
formEl.addEventListener('submit', onFormSubmit);

// 3. Writing code callback function - " onFormSubmit" for the event 'submit'. Using the internal variable "event" as an argument of this function, which takes the value of the object describing the 'submit' event.
function onFormSubmit(event) {
    // 3.1. Disconnecting actions by default (reloading of the tab) for the 'submit' event.
    event.preventDefault();

    // 3.2. Performing the destructive operation of the standard object "event.currentTarget.elements" containing a set of data of the form.
    const { email, password } = event.currentTarget.elements;

    // 3.3. Creating the conditions for processing data coming from the form.
    if (email.value.trim() === "" || password.value.trim() === "") {
        // 3.3.1. If the text was not introduced into the appropriate fields of the form, then the text message will be displayed in the browser window.
        alert("There are incomplete fields in the form! To send data, it is necessary that all fields are filled.");
    } else {
        // 3.3.2. If the text was entered into the corresponding fields of the form, the following data processing will be performed.
        // 3.3.2.1. An object with a set of data entered into the form will be created.
        const formDataEvent = {
        email: email.value,
        password: password.value,
        };

        // 3.3.2.2. An object with a set of data entered into the form will be displayed into the browser log.
        console.log("formDataEvent:", formDataEvent)

        // 3.3.2.3. The values in the fields of the form will be cleared using the method "reset()".
        event.currentTarget.reset();
    };
};

