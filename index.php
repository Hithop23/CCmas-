<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Meta Información SEO -->
  <meta name="title" content="CC Checker - Free credit card checker namso-gen.eu.org">
  <meta name="description" content="cc checker for free credit card numbers.">
  <meta name="keywords" content="cc, checker, mass cc checker, bin, generated cc, credit card, live, dead">
  <meta name="robots" content="index, follow">
  <meta name="language" content="English">
  <meta name="author" content="Saksham">

  <!-- Open Graph Meta Tags -->
  <meta property="og:url" content="https://namso-gen.eu.org">
  <meta property="og:image" content="https://rawcdn.githack.com/OshekharO/Entertainment-Index/17d005915d5e20780a46aef227f08367ca8efb3a/img/apple-touch-icon.png">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="website">
  <meta name="copyright" content="Copyright © 2023 OshekharO">

  <!-- Favicon e íconos -->
  <link rel="shortcut icon" href="https://rawcdn.githack.com/OshekharO/Entertainment-Index/17d005915d5e20780a46aef227f08367ca8efb3a/img/favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" sizes="180x180" href="https://rawcdn.githack.com/OshekharO/Entertainment-Index/17d005915d5e20780a46aef227f08367ca8efb3a/img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://rawcdn.githack.com/OshekharO/Entertainment-Index/17d005915d5e20780a46aef227f08367ca8efb3a/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://github.com/OshekharO/Entertainment-Index/blob/master/img/favicon-16x16.png">

  <title>Credit Card Checker</title>

  <!-- Bootstrap y estilos personalizados -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet">
</head>

<body class="bg-dark text-light">
  <div class="container text-center my-4">
    <h2 class="fs-3 fw-bold text-uppercase">Credit Card Checker</h2>

    <!-- Formulario de ingreso -->
    <form method="post" action="api.php" id="form" class="text-center mt-3">
      <label for="cc" class="form-label fs-6 font-monospace badge bg-danger">Card Numbers</label>
      <textarea class="form-control" rows="10" id="cc" name="cc" placeholder="53012724539xxxxx|05|2022|653" required></textarea>

      <div class="mt-3">
        <button type="submit" name="valid" class="btn btn-outline-success">START</button>
        <button type="button" id="stop" class="btn btn-outline-danger" disabled>STOP</button>
      </div>
    </form>

    <!-- Contadores -->
    <div class="row mt-4">
      <div class="col">
        <h4 class="text-success">Live - <span class="badge bg-success live">0</span></h4>
        <div class="alert alert-success success mt-2"></div>
      </div>
      <div class="col">
        <h4 class="text-danger">Die - <span class="badge bg-danger die">0</span></h4>
        <div class="alert alert-danger danger mt-2"></div>
      </div>
      <div class="col">
        <h4 class="text-warning">Unknown - <span class="badge bg-warning unknown">0</span></h4>
        <div class="alert alert-warning warning mt-2"></div>
      </div>
    </div>
  </div>

  <!-- jQuery y Script personalizado -->
  <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
  <script src="checker.js"></script> <!-- Archivo separado con el código JavaScript de manejo -->
</body>
</html>
