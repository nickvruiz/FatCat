<?php
$data = json_decode(file_get_contents('php://input'), true);

// var_dump($data);

// Send to
$to = 'nick@fatcatonline.net';

$uname   = $data[0]['uname'];
$uemail  = $data[0]['uemail'];
$subject = $data[0]['usubject'];

// Build Message
$message  = 'Message from <strong>' . $uname . '</strong> ' . $from . '<br />';
$message .= $data[0]['umessage'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'To: Fat Cat <info@fatcatonline.net>' . "\r\n";
$headers .= 'From: ' . $uemail . "\r\n";

mail($to, $subject, $message, $headers);