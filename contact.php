<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "beckyafyai@gmail.com"; 
    $subject = "New Message from Your Portfolio";
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
                document.getElementById('contactForm').style.display = 'none';
                document.getElementById('thankYou').style.display = 'block';
              </script>";
    } else {
        echo "Sheesh, seems like something went wrong. Please try again.";
    }
}
?>
