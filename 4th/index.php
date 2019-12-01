<?php
     if(isset($_POST['done']))
     {
         $a = $_POST['user_name'];
         setcookie('user_name', $a);
         echo "Вы ввели имя: ".$a;
     }
     elseif(isset($_COOKIE['user_name']))
     {
         $a = $_COOKIE['user_name'];
     }
     else
     {
        $a = 'Гость';
     }
?>
<html>
<body>
<form name = "Name"  method = "POST" >
  <label>Insert name</label><br>
  <input type = "text" name = "user_name" placeholder = "Name"><br /><br />
  <input type="submit" name = "done" value="Ввести">
</form>
<br>
<p3><a href = "cabinet.php">My cabinet</a></p3>
</body>
</html>
