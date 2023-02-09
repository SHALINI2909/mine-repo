const submit = document.getElementById("submitform");

submit.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const data = { email: email, password: pass };
  postData(data);
});
function postData(data) {
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      window.location.href = "admin_dashboard.html";
    })
    .catch((err) => console.log(err));
}