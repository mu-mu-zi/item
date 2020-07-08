<?php
header("content-type:text/html;charset=utf-8");
$name = $_GET['username']; 
$pw = $_GET['password'];

$link = mysqli_connect('localhost','root','root','register');

$sql = "SELECT * FROM`register` WHERE `name`='$name' AND `password`='$pw'";

$res = mysqli_query($link,$sql);
$row = mysqli_fetch_assoc($res);
echo $name;
// print_r($row);
if($row){
    
    header('location:../pages/home.html');
}else{

    header('location:../pages/login.html');
};
?>