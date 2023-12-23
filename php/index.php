<?php





if(isset($_POST["login"])){
    $host="localhost";
    $user="root";
    $password='';
    $db="gs";



    $conn = mysqli_connect($host , $user , $password , $db);
    if(conn-> connection_error){
        die("Connection Failec" .$conn->connect_error);
    }
    echo "connection succeeded";
   

}
?>