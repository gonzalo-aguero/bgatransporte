<?php
require('connection.php');
$operation = $_POST['operation'];
if($connection){
    if($operation == 'contar'){
        $sql = "SELECT * FROM etxt";
        $resultado = mysqli_query($connection,$sql);
        $numRegistros = mysqli_num_rows($resultado);
        echo $numRegistros;
    }else if($operation == 'load'){
        $idETxt = $_POST['idETxt'];
        $sql = "SELECT * FROM etxt WHERE idETxt=$idETxt";
        $resultado = mysqli_query($connection,$sql);
        $consulta = mysqli_fetch_array($resultado);
        $idETxt = $consulta[0];
        $idTxt = $consulta[1];
        $sql = "SELECT * FROM textos WHERE idTxt =$idTxt";
        $resultado = mysqli_query($connection,$sql);
        $numRegistros = mysqli_num_rows($resultado);
        if($numRegistros >= 1){
            $consulta = mysqli_fetch_array($resultado);
            $idITxt = $consulta[0];
            $titulo = $consulta[1];
            $categoria = $consulta[2];
            $texto = $consulta[3];
            $state = $consulta[4];
            $titleColor = $consulta[5];
            $textColor = $consulta[6];
            if($state == '11'){
                $mostrartitle = 'block';
                $mostrartxt = 'block';
            }else if($state == '01'){
                $mostrartitle = 'none';
                $mostrartxt = 'block';
            }else if($state == '10'){
                $mostrartitle = 'block';
                $mostrartxt = 'none';
            }else{
                $mostrartitle = 'none';
                $mostrartxt = 'none';
            }
            echo '<h2 class="tituloTexto" style="display:'.$mostrartitle.'; color:'.$titleColor.';">'.$titulo.'</h2>'
            .'<p id="texto'.$idETxt.'" style=" display:'.$mostrartxt.'; color:'.$textColor.';">'.$texto.'</p>';
        }else{
            echo '';
        }
    }    
}else {
    echo 'noConnection';
}
?>