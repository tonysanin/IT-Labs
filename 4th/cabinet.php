<?php
     if(isset($_COOKIE['user_name']))
         $a = $_COOKIE['user_name'];
     else
        $a = "guest";
     echo "Hello, $a";
?>
<body>
    <br/>
<p3><a href = "index.php">Back</a></p3>
</body>
