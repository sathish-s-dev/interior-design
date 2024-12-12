<?php

@include 'config.php';

if(isset($_POST['submit']))
{
 
   $email = $_POST['email'];
   $Q_Name = $_POST['Q_Name'];
   $Quotation = $_POST['Quotation'];
   $Cost = $_POST['Cost'];
   
   $sql = "INSERT INTO quotation(email,Q_Name, Quotation, Cost) 
			values('$email','$Q_Name','$Quotation','$Cost')";
			if (mysqli_query($conn ,$sql)){
					echo "<script>alert('Your response has been recorded');</script>";
			}else{
				echo "Error :" .$sql. "<br>" .mysqli_error($conn);
			};
	mysqli_close($conn);
};

?>
<html>
	<head>
	<meta name = "viewport" content = "with=device-width, initial-scale=1.0">
	<title>Corbel Design</title>
	<link rel="stylesheet" href="login.css">
	<link rel"stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
	<script src="https://kit.fontawesome.com/f99f4056b9.js"></script>
	</head>
	<body>
		<section class="body">
		<div class = "container">
		<div class="cover"></div>
			<form action = "#" name="frm1" method="POST" action="login.php">
			<div class = "Signup-form">
					<div class = "title">Quotation</div>
					<?php
					  if(isset($error)){
						 foreach($error as $error){
							echo '<span class="error-msg">'.$error.'</span>';
						 };
					  };
					  ?>
					<div class = "input-boxes">
						<div class = "input-box">
						<i class="fa-solid fa-envelope"></i>
						<input type="email" name="email" placeholder="User mail" required>
						</div>
						<div class = "input-box">
						<i class="fa-solid fa-envelope"></i>
						<input type="text" name="Q_Name" placeholder="Quotation name" required>
						</div>
						<div class = "input-box">
						<i class="fa-solid fa-lock"></i>
						<input type="file" name="Quotation" placeholder="Quotation" required>
						</div>
						<div class = "input-box">
						<i class="fa-solid fa-lock"></i>
						<input type="number" name="Cost" placeholder="Cost" required>
						</div>
						<div class = "button input-box">
						<input type="submit" name="submit" value="Submit">
						</div>
					</div>
				</div>
			</form>
		</div>
		</section>
		<script>
		var navLinks = document.getElementById("navLinks");
		function showMenu(){
			navLinks.style.right = "0";
		}
		function hideMenu(){
			navLinks.style.right = "-200px";
		}
		</script>
	</body>
</html>




A_Quotation.php