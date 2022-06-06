<?php
require_once "mysql.php"; //configuration

$error = '';

if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])){
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);


    //validate if email is emoty
    if (empty($email)) {
        $error .= '<p class="error">Please enter email.</p>';
    }
    if (empty($password)) {
        $error .= '<p class="error">Please enter password.</p>';
    }

    if(empty($error)) {
        if ($query = $db->prepare('SELECT * FROM admins WHERE email = ?')) {
            $query->bind_param('s',$email);
            $query->execute();
            $query->store_result();
            $row=$query->fetch();
            if($row){
                    //redirect user to home page
                    header("location: home.html");
                    exit;
            } else{
                $error .= '<p class="error">No user exists with that email address.</p>';
            }
        }
        $query->close();
        
    }
    //close connection
    mysqli_close($db);
}
?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/Google-Stylel-Login.css">
    <link rel="stylesheet" href="assets/css/Navigation-Dark-Clean.css">
    <link rel="stylesheet" href="assets/css/styles.css">


</head>

<body>
    <div class="login-card" id="login_page">
        <img class="profile-img-card" src="assets/img/logo.png" alt="">
        <p class="profile-name-card"> </p>
        <form id = "form" action="" method="post" class="form-signin">
            <span class="reauth-email"> </span>
            <input id="email" name="email" class="form-control" type="email" required="" autofocus="" placeholder="Email address">
            <input id="password" name="password" class="form-control" type="password" required="" placeholder="Password">
            <div class="checkbox">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="formCheck-2">
                    <label class="form-check-label" for="formCheck-2">
                        Remember me
                    </label>
                </div>
            </div>

            <button type="submit" name="submit" class="btn btn-primary accordion-body btn-lg btn-signin" value="Login" id="sign_in">Sign in</button> 
        </form>
        <a href="#" class="forgot-password">
            Forgot your password?
        </a>
    </div>
    <div class="footer">
        <footer class="ps_footer_text" >Copyright © 2020, Internet Explorers, University of The Witwatersrand, Johannesburg. All rights reserved.</footer>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html> -->

<!-- HOMEPAGE -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Homepage</title>
    <link rel="stylesheet" href="assets/css/Navigation-Dark-Clean.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <nav class="navbar navbar-dark navbar-expand-md bg-dark navigation-clean">
        <div class="container">
            <a class="navbar-brand" href="#">Student Placement System</a>
            
            
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                <span class="visually-hidden">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navcol-1" class="collapse navbar-collapse">
                <ul class="nav navbar-nav ms-auto">
                    <li id = "home" class="nav-item" role="presentation"><a class="nav-link active" href="index.html">Home</a></li>
                </ul>
                <button id="out" class="btn btn-primary" type="button">Sign Out</button>
            </div>
        </div>
    </nav>
    <div class="container bg-light">

        <button id = "users" class="users" type="button" href="users.html">
            <span class="button__text">Users</span>
            <span class="button__icon">
                <ion-icon name="person-outline"></ion-icon>
            </span>
        </button>

        <button id = "protocols" class="users" type="button" href="protocols.html">
            <span class="button__text">Protocols</span>
            <span class="button__icon">
                <ion-icon name="book-outline"></ion-icon>

            </span>
        </button>
        
    </div>
    <div class="container bg-light">
        <!-- <a class="small" href="password.html">Forgot Password?</a> -->
        <button id = "events" class="users" type="button" href="events.html">
            <span class="button__text">Events</span>
            <span class="button__icon">
                <ion-icon name="calendar-number-outline"></ion-icon>
            </span>
        </button>
        <button id = "students" class="users" type="button" href="students.html">
            <span class="button__text">Students</span>
            <span class="button__icon">
                <ion-icon name="school-outline"></ion-icon>
            </span>
        </button>       
    </div>
    <div class="container bg-light">
        <button id = "groups" class="users" type="button" href="students.html">
            <span class="button__text">Groups</span>
            <span class="button__icon">
                <ion-icon name="people-outline"></ion-icon>

            </span>
        </button>       
        <button id = "specialties" class="users" type="button" href="events.html">
            <span class="button__text">Specialties</span>
            <span class="button__icon">
                <ion-icon name="medical-outline"></ion-icon>
            </span>
        </button>
    </div>

    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
        import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAZVQZO8XWR0UTPoSMLrRN7nSltUDW9Xzs",
          authDomain: "dfmpc-student-placement-system.firebaseapp.com",
          databaseURL: "https://dfmpc-student-placement-system-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "dfmpc-student-placement-system",
          storageBucket: "dfmpc-student-placement-system.appspot.com",
          messagingSenderId: "295214875936",
          appId: "1:295214875936:web:546dcdb4f822d1c4c84345",
          measurementId: "G-1JPG0HXVWQ"
        };
      
        // Initialize Firebase and variables
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        
      </script>
    <script>
        // sign out button, takes us back to login page
        var sign_out = document.getElementById("out");

        sign_out.addEventListener("click", function(){
            document.location.href = "index.html";
            
        })
        //users button, takes us to users page
        var users = document.getElementById("users");

        users.addEventListener("click", function(){
            document.location.href = "users.html";
            
        })
        // protocols button, takes us to protocols page
        var protocols = document.getElementById("protocols");

        protocols.addEventListener("click", function(){
            document.location.href = "protocols.html";
            
        })
        //events button, takes us to events page
        var events = document.getElementById("events");

        events.addEventListener("click", function(){
            document.location.href = "events.html";
            
        })

        //students button, takes us to students page
        var students = document.getElementById("students");

        students.addEventListener("click", function(){
            document.location.href = "students.html";
            
        })
        var specialties = document.getElementById("specialties");

        specialties.addEventListener("click", function(){
            document.location.href = "specialties.html";
            
        })

        var groups = document.getElementById("groups");

        groups.addEventListener("click", function(){
            document.location.href = "groups.html";
            
        })
    </script>
    <!-- icons import -->
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script> 
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>