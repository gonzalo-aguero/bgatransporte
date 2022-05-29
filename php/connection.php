<?php
    $host = "localhost:3306";
    $user = "root";
    $pass = "";
    $db = "bga_transporte";
    $connection = mysqli_connect($host,$user,$pass,$db);
    mysqli_set_charset($connection, "utf8");
?>