<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$mob = $_POST['mob'];
$adr = $_POST['adr'];
$gender = $_POST['gender'];

$conn = new mysqli('localhost','root', '', 'lazy');
if($conn -> connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registartion(fname, lname, email, mob, adr, gender)
        values(?, ?, ?, ?, ?, ?)");
    $stmt -> bind_param("ssssss",$fname, $lname, $email, $mob, $adr, $gender);
    $stmt -> execute();
    echo "Registration Successful....";
    $stmt -> close();
    $conn -> close();
}
?>

