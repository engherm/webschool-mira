const getStudentsBtn = document.getElementById('get-students-btn');
const body = document.querySelector('body');

function createTable(arr) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const trHead = document.createElement('tr');

  for (const key in arr[0]) {
    const th = document.createElement('th');
    th.innerText = key;
    trHead.append(th);
  }
  thead.append(trHead);
  table.append(thead);

  arr.forEach(createRow);
  function createRow(student) {
    const tr = document.createElement('tr');
    for (const key in student) {
      const td = document.createElement('td');
      td.innerText = student[key];
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(tbody);
  body.append(table);
}

// let toAppend = '';
// console.log("from create table", arr);
// for (const student of arr) {
//   console.log('student is: ', student);
//   toAppend +=
//   `
//   <tr>
//     <td>${student.id}</td>
//     <td>${student.name}</td>
//     <td>${student.age}</td>
//     <td>${student.gpa}</td>
//   </tr>
//   `
// }
// console.log('toAppend:', toAppend);
// tbody.innerHTML = toAppend;

getStudentsBtn.addEventListener('click', () => {
  fetch('http://localhost:8686/getStudents')
    .then((res) => res.json())
    .then((res) => createTable(res));
});
