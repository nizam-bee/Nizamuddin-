<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>n.ai.in - Smartest Search</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"></script>
  <script defer src="firebase-config.js"></script>
  <script defer src="script.js"></script>
</head>
<body>
  <div class="top-right" id="authSection">
    <button id="loginBtn">Sign In</button>
  </div>

  <div class="container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/N_logo.svg/1200px-N_logo.svg.png" alt="n.ai.in" class="logo" />
    <h1>Welcome to <span>n.ai.in</span></h1>
    <input type="text" id="searchInput" placeholder="Search smarter than Google..." />
    <button onclick="performSearch()">Search</button>
    <div id="results"></div>
  </div>
</body>
</html>
