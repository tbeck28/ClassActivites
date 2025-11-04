const form = document.querySelector("form"); //grabbing the form
form.addEventListener("submit", (event) => { // adding an event listener to the submit button, getting values from the form
  event.preventDefault(); // preventing the form from being submitted without any of the inputs filled out
  console.log("The form was submitted!"); // showing that the form was submitted once filled out

  console.log("event", event); // logging the event

  const inputs = event.target.elements; // targeting the elements on the form
  console.log("form's input elements: ", inputs);
  
  let outputItems = "";
  
  for (let input of inputs) { // looping through all the inputs to see if the boxes are checked and creating a new list of the content from the form to input on a website
    if (input.type !== 'submit') {
      if ((input.type === 'checkbox' || input.type === 'radio') && !input.checked) {
        // If the checkbox or radio is not checked, skip this iteration
        continue;
      }
      
      // Create a new element
      const listItem = document.createElement("li");
      listItem.textContent = `${input.name}: ${input.value}`;
      
      // Append the new element to the items
      outputItems += listItem.outerHTML;
    }
    
    // Set the inner HTML of the output list to the list items
    document.getElementById("form-output").innerHTML = outputItems;
  }
  
  form.reset();
});