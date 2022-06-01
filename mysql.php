<?php

DEFINE('DBSERVER', 'dfmpc.mysql.database.azure.com');
DEFINE('DBUSERNAME', 'root_admin@dfmpc');
DEFINE ('DBPASSWORD', 'Password123');
DEFINE ('DBNAME', 'dfmpc_sps');


// Establish the connection
$db = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME);
//If connection failed, show the error
if ($db === false)
{
    die('Failed to connect to MySQL: '.mysqli_connect_error());
}

?>