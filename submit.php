<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "contact@gooberspartyanimals.com"; // Your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from your website:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Message:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message. Please try again later.";
    }
}
?>
