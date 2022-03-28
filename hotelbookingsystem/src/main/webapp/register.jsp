<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<title>HotelBooking</title>

<link href="${contextPath}/resources/css/bootstrap.min.css"
	rel="stylesheet">
<link href="${contextPath}/resources/css/common.css" rel="stylesheet">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
<style>
.card {
	margin: 0 auto; /* Added */
	float: none; /* Added */
	margin-bottom: 10px; /* Added */
	width: 18rem;
}
</style>
</head>
<body>
	<center>
		<h1>HotelBooking</h1>
	</center>
	<br>
	<br>
	<div class="card">

		<div class="card-body">
			<h1 class="card-title">Sign up</h1>

			<form action=signUser>
				<label>First Name</label> <input type="text" name="firstName"><br>
				<br> <label>Last Name</label> <input type="text"
					name="lastName"><br> <br> <label>Email
					Address</label> <input type="text" name="email"><br> <br>
				<label>Password</label> <input type="password" name="password"><br>
				<br> <input type="submit" class="btn btn-primary"><br>
				<br> <a href="/login.jsp">Already have an account? Sign in</a>
			</form>
		</div>
	</div>





</body>
</html>