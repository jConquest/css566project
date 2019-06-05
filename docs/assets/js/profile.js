
function login()
{
  let username = document.getElementById("username").value;
  alert(`Welcome ${username}!`);
  document.cookie = `username=${username}`;
}
