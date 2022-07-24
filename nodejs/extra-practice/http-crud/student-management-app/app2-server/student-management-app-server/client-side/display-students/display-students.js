const displayStudentsBtn = document.getElementById('display-students-btn');
const tableContainer = document.getElementById('table-container');

function createTable(arr) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const trHead = document.createElement('tr');

  // extract keys from an object to be used as column headers in the table
  // each key will go into a th element. Once we have
  const sampleObj = arr[0]; // sample object to extract its keys
  for (const key in sampleObj) {
    const th = document.createElement('th');
    th.innerText = key;
    trHead.append(th);
  }
  thead.append(trHead);
  table.append(thead);

  arr.forEach(createRow);
  function createRow(student) {
    const tr = document.createElement('tr'); // create row for the current student in the forEach loop. 
    for (const key in student) {
      const td = document.createElement('td'); 
      td.innerText = student[key]; // extract the value at the current key
      tr.append(td);
    }
    tbody.append(tr);
  }
  // at this point tbody is ready to be appended to the table thus completing the table.
  table.append(tbody);
  tableContainer.append(table);
}

displayStudentsBtn.addEventListener('click', () => {
  fetch('http://localhost:5252/api/crud/students')
    .then((res) => res.json())
    .then((res) => createTable(res)); // here, res is an ARRAY of objects where each object represents a student in the class. We want to take all this array data and display it in a table on the page. So we pass 'res' to our 'createTable' function 
});
