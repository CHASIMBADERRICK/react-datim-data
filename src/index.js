import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = (elements) =>
  [].reduce.call(
    elements,
    (data, element) => {
      data[element.name] = element.value;
      return data;
    },
    {},
  );

const handleFormSubmit = (event) => {
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();

  // Call our function to get the form data.
  const data = formToJSON(form.elements);

  // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementsByClassName('results__display')[0];

  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
  dataContainer.textContent = JSON.stringify(data, null, '  ');

  // ...this is where we’d actually do something with the form data...
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);



// ej.base.enableRipple(true);

// var data = new ej.data.DataManager(window.hierarchyOrderdata).executeLocal(new ej.data.Query().take(15));
// var grid = new ej.grids.Grid({
//   dataSource: data,
//    columns: [
//             { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
//             { field: 'EmployeeID', headerText: 'Employee ID', width: 150, textAlign: 'Right' },
//             { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
//             { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
//         ]
// });
// grid.appendTo('#Grid');

// var button = new ej.buttons.Button({ cssClass: `e-primary` }, '#close');
// var submitbutton = new ej.buttons.Button({ cssClass: `e-primary` }, '#submit');

// document.getElementById("Gridform").addEventListener("submit", (e) => {
// e.preventDefault();
//   var value = parseInt(document.getElementById('multiplier').value, 10);
//   data = new ej.data.DataManager(window.hierarchyOrderdata).executeLocal(new ej.data.Query().where("EmployeeID", "equal", value).take(15))
//   grid.dataSource = data;
//   document.getElementById("userinput").style.display = "none";
//   document.getElementById("mtable").style.display = "";
//   document.getElementById("Gridform").reset();
// });
// document.getElementById("close").addEventListener("click", (e)=>{
// document.getElementById("mtable").style.display = "none";
// document.getElementById("userinput").style.display = "";
// });






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
