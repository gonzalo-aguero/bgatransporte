<?php
    //error_reporting(0);
    //PRUEBAS
    /*$host = "localhost";
    $user = "root";
    $pass = "";
    $db = "bgatransportebd";*/
    
    //REAL
    $host = "localhost:3306";
    $user = "lqovlhgf_bga";
    $pass = "gustavobgatransporte250";
    $db = "lqovlhgf_bgatransportebd";
    $connection = mysqli_connect($host,$user,$pass,$db);
    mysqli_set_charset($connection, "utf8");
?>