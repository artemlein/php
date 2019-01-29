<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>hi</title>
	<script type="text/javascript" src="https://vk.com/js/api/openapi.js?160"></script>
</head>
<body>
	<?php require 'stemauth/steamauth.php'l
	loginButton();

	if(isset($_SESSION['steamid'])){
		require 'steamauth/userInfo.php';
		echo $steamprofile['personaname'];
		echo "<a href='stemauth/logout.php'>Выйти</a>"
	}
	?>

	


	<form action="?login" method="post">
    	<input type="image" src="http://cdn.steamcommunity.com/public/images/signinthroughsteam/sits_small.png">
	</form>



		
		<script type="text/javascript">
		  VK.init({apiId: 6837543});
		</script>

		<!-- VK Widget -->
		<div id="vk_auth"></div>
		<script type="text/javascript">
		  VK.Widgets.Auth("vk_auth", {"authUrl":"/dev/Login"});
		</script>
	</body>
</html>