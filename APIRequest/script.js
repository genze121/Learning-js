const API_URL = "https://jsonplaceholder.typicode.com/posts";
const request = new XMLHttpRequest();
request.open("GET", API_URL);
request.onreadystatechange = function() {
  if (request.readyState === 4) {
    const responseData = JSON.parse(this.responseText);
    readData(responseData);
  }
};
request.send();

function readData(responseData) {
  const captureBody = document.querySelector("body");
  const element = document.createElement("div");
  element.classList.add("display");
  captureBody.appendChild(element);
  const insideDiv = document.createElement("div");
  insideDiv.classList.add("table");
  element.appendChild(insideDiv);
  const header = document.createElement("h1");
  header.innerHTML = "API RESPONSE DATA";
  insideDiv.appendChild(header);
  const table = document.createElement("table");
  insideDiv.appendChild(table);
  const tableHeader = document.createElement("thead");
  table.appendChild(tableHeader);
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  tableHeader.appendChild(th1);
  tableHeader.appendChild(th2);
  tableHeader.appendChild(th3);
  th1.innerHTML = `<td>User Id</td>`;
  th2.innerHTML = `<td>Title</td>`;
  th3.innerHTML = `<td>Body</td>`;
  const tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  responseData.forEach(element => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${element.id}</td> <td>${element.title}</td> <td>${element.body}</td>`;
    tableBody.appendChild(row);
  });
}
