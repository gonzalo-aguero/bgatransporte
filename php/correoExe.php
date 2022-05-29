<?php
                if(!empty($_POST['nameCon']) && !empty($_POST['asuntoCon']) 
                && !empty($_POST['msgCon']) && !empty($_POST['emailCon'])) {
                    $nameCon = $_POST['nameCon'];
                    $asuntoCon = $_POST['asuntoCon'];
                    $msgCon = "Nombre: ".$nameCon."\r\n".$_POST['msgCon'];
                    $emailClientCon = $_POST['emailCon'];
                    $emailCon = "gonzaloaguerodev@gmail.com";

                    $header = "From: ".$emailClientCon. "\r\n";
                    $header .= "Reply-To: ".$emailClientCon. "\r\n";
                    $header .= "X-Mailer: PHP/". phpversion();
                    $mail = mail($emailCon,$asuntoCon,$msgCon,$header);
                    if($mail){
                        echo 1;
                    }else {
                        echo 0;
                    }
                }
            
?>