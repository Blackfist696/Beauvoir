<!DOCTYPE html>
<html>
<head>
    <title>PC Display</title>
</head>
<body>

<h1 id="result">Waiting for QR code scan</h1>

<script>
    setInterval(() => {
        fetch("scan_log.txt?t=" + Date.now())
            .then(res => res.text())
            .then(text => {
                document.getElementById("result").innerText = text;
            });
    }, 1000);
</script>

</body>
</html>