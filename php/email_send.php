<?php
    $nome = $_POST['name']
    $email = $_POST['email']
    $phonenumber = $_POST['phonenumber']
    $message = $_POST['message']

    $arquivo = "
    <html>
        <div class="right-square">
            <h1>Me mande uma menssagem</h1>
            <form action="">
                <input type="text" name="" id="name" placeholder="Nome completo" required>
                <input type="text" name="" id="email" placeholder="Email" required>
                <input type="text" name="" id="phonenumber" placeholder="Celular" required>
                <textarea name="" id="message" placeholder="Sua menssagem" required></textarea>
                <div class="btn-submmit"><input type="button" value="EMAIL ENVIADO"></div>
            </form>
        </div>
    </html>
    ";

    $destino = "cariolanodocosta@gmail.com"
    $assunto = "Contato Pelo Portfolio"

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    $headers .= "From: $nome <$email>";

    mail($destino, $assunto, $arquivo, $headers);
  
    echo "<meta http-equiv='refresh' content='10;URL=../contato.html'>";
?>