const getKey = document.querySelector(".key");

window.addEventListener("keydown", e => {
  getKey.innerHTML = `<div class="table">
  <table>
  <thead>
  <th>Key</th>
  <th>Key Code</th>
  <th>Code</th>
  </thead>
  <tbody>
  <td>${e.key === " " ? "Space" : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tbody>
  </table>
  </div>`;
});
