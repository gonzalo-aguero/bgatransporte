<?php
require('connection.php');
$operation = $_POST['operation'];
if($connection){
    if($operation == 'contar'){
        $sql = "SELECT * FROM eimg";
        $resultado = mysqli_query($connection,$sql);
        $numRegistros = mysqli_num_rows($resultado);
        echo $numRegistros;
    }else if($operation == 'load'){
        $idEImg = $_POST['idEImg'];
        $sql = "SELECT * FROM eimg WHERE idEImg= '$idEImg'";
        $resultado = mysqli_query($connection,$sql);
        $consulta = mysqli_fetch_array($resultado);
        $idEImg = $consulta[0];
        $idImg = $consulta[1];
        $sql = "SELECT * FROM imagenes WHERE idImg ='$idImg'";
        $resultado = mysqli_query($connection,$sql);
        $numRegistros = mysqli_num_rows($resultado);
        if($numRegistros >= 1){
            $consulta = mysqli_fetch_array($resultado);
            $idImg = $consulta[0];
            $imagen = $consulta[1];
            $categoria = $consulta[2];
            $anchoimg = $consulta[3];
            $altoimg = $consulta[4];
            echo '<img id="imagen'.$idEImg.'" src="data:image/jpg;base64,'.base64_encode($imagen).'"'.
                'style=" width:'.$anchoimg.'; height:'.$altoimg.' ">';
        }else{
            echo '';
        }
    }    
}else {
    echo 'noConnection';
}
?>