<?
$recipient = "t.kudryavska@gmail.com";
$subject = "Правда";
$check = '';
if (!empty($_POST["check"]) && is_array($_POST["check"]))
{
    $check = implode(" ", $_POST["check"]);
}
$message = "<html>\n<body>\n\n
Ось така Правда: <b>".$check."</b>\n</html>\n</body>\n";
$headers = "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient"
$verify = mail($recipient, $subject, $message, $headers);
if ($verify == true)
{
echo "<p>Сообщение отправлено</p>";
}
else
{
echo "<p>Сообщение не отправлено</p>";
}
  
?>