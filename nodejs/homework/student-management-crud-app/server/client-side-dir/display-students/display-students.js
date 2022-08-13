const body = document.querySelector("body");
const displayStudentsBtn = document.getElementById("display-students-btn");

function displayData(arr) {
  if (arr.length !== 0) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    const tbody = document.createElement("tbody");

    // Get the key names and place them as the text of the th elements
    for (const key in arr[0]) {
      const th = document.createElement("th");
      th.innerText = key.toUpperCase();
      trHead.append(th);
    }

    thead.append(trHead);
    table.append(thead);

    // Get the values of the keys and arrange them in the rows accordingly
    arr.forEach((student) => {
      const tr = document.createElement("tr");
      for (const key in student) {
        const td = document.createElement("td");
        td.innerText = student[key];
        tr.append(td);
      }
      tbody.append(tr);
    });

    table.append(tbody);
    body.append(table);
  } else {
    const h3 = document.createElement("h3");
    h3.innerText = "No students registered in the class yet";
    body.append(h3);
  }
}

displayStudentsBtn.addEventListener("click", sendRequest);

function sendRequest() {
  displayStudentsBtn.removeEventListener("click", sendRequest);
  fetch("http://localhost:9876/api/crud")
    .then((res) => res.json())
    .then((res) => displayData(res));
}
