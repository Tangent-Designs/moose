<?php

$email = $_POST['email'];
$message = $_POST['textarea'];
$formcontent=" From: $email \n Message: $message";
$recipient = "moosesbarbershop@gmail.com";
$subject = "For the Moose Daddy";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: http://www.moosesbarbershop.com/');

?>



