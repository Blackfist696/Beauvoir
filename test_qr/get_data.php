<?php
if(isset($_POST['text'])) {
    $text = $_POST['text'];
    file_put_contents("scan_log.txt", $text);
}

?>