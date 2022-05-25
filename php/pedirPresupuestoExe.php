<?php
                if(!empty($_POST['name']) && !empty($_POST['email'])) {

                    $name = $_POST['name'];
                    $telefono = $_POST['telefono'];
                    $origen = $_POST['origen'];
                    $destino = $_POST['destino'];
                    $tipoDestino = $_POST['tipoDestino'];
                    $planta = $_POST['planta'];
                    $descripcion = $_POST['descripcion'];
                    $cantBultos = $_POST['cantBultos'];

                    $asunto = "Presupuesto";
                    $msg = "Hola, que tal? ¿Me podrían pasar presupuesto?"."\r\n".
                            "Nombre y apellido: ".$name."\r\n".
                            "Teléfono: ".$telefono."\r\n".
                            "Origen: ".$origen."\r\n".
                            "Destino: ".$destino."\r\n".
                            "Tipo de destino: ".$tipoDestino."\r\n".
                            "Planta: ".$planta."\r\n".
                            "Descripción: ".$descripcion."\r\n".
                            "Cantidad de bultos, paquetes o cajas: ".$cantBultos."\r\n";
                    $emailClient = $_POST['email'];
                    $email = "bgatransporte@yahoo.com.ar";
                    //$email = "gonzalo90fa@gmail.com";
                    $header = "From: ".$emailClient. "\r\n";
                    $header .= "Reply-To: ".$emailClient. "\r\n";
                    $header .= "X-Mailer: PHP/". phpversion();
                    $mail = mail($email,$asunto,$msg,$header);
                    if($mail){
                        echo 1;
                    }else {
                        echo 0;
                    }
                }else {
                    echo 'error:incomplete';
                }
            
?>