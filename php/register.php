<?php
header("content-type:text/html;charset=utf-8");
$name = $_GET['username']; 
$pw = $_GET['password'];

$link = mysqli_connect('localhost','root','root','register');

$sql = "INSERT INTO `register` (`name`,`password`) VALUES ('$name' , '$pw')";

$res = mysqli_query($link,$sql);

if($res){
    header('location:../pages/login.html');
}else{
    echo 0;
}
?>