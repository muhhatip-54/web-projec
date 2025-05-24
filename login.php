<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email    = trim($_POST["email"] ?? '');
    $password = trim($_POST["password"] ?? '');

  
    $correctEmail = "g201210@sakarya.edu.tr";
    $correctPassword = "g201210564";

  
    if ($email === $correctEmail && $password === $correctPassword) {
        echo "<h1 style='text-align:center; margin-top:20vh;'>Hoşgeldiniz :  $correctEmail</h1>";
    } else {
      
        header("Location: login.html");
        exit;
    }
}
?>
