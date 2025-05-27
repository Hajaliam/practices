<?php

$conn = new MySQLi("localhost","root","root","mysql");
if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}
$name = $_POST['name'];
$email = $_POST['email'];

$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$stmt->execute();

$stmt->close();
$conn->close();
