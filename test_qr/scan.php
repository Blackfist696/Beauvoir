<!DOCTYPE html>
<html>
<head>
    <title>Scan QR</title>
    <script src="https://unpkg.com/html5-qrcode"></script>
</head>
<body>
<h2>Scan QR Code</h2>
<div id="reader" style="width:300px"></div>

<script>
    function onScanSuccess(decodedText) {
        console.log("Scanned:", decodedText);

        fetch("get_data.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "text=" + encodeURIComponent(decodedText)
        });

        alert("Sent to PC: " + decodedText);
    }

    new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250
    }).render(onScanSuccess);
</script>

</body>
</html>