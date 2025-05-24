document.getElementById("loginForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const correctEmail = "g201210@sakarya.edu.tr";
  const correctPassword = "g201210564";

  if (email === "" || password === "") {
    alert("Lütfen tüm alanları doldurun!");
    e.preventDefault();
    return;
  }

  if (email !== correctEmail || password !== correctPassword) {
    alert("Kullanıcı adı veya şifre yanlış!");
    e.preventDefault();
    return;
  }
});
