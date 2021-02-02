<?php
	$errors = '';
	$myemail = 'mz2377@columbia.edu';//<-----Put Your email address here.
	if(empty($_POST['fname'])  || 
	   empty($_POST['lname'])  || 
	   empty($_POST['email']) || 
		{
		    $errors .= "\n Error: all fields are required";
		}

	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email']; 
	$assets = $_POST['assets']; 
	$features = $_POST['features'];
	$comment = $_POST['comment']; 

	if (!preg_match(
	"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
	$email))
		{
		    $errors .= "\n Error: Invalid email address";
		}


	if( empty($errors))

		{

		$to = $myemail;

		$email_subject = "Contact form submission: $fname $lname";

		$email_body = "You have received a new comment. ".

		" Here are the details:\n First Name: $fname \n Last Name: $lname \n ".

		"Email: $email\n Assets: $assets\n Features: $features\n Comments: $comment";

		$headers = "From: $myemail\n";

		$headers .= "Reply-To: $email";

		@mail($to,$email_subject,$email_body,$headers);

		//redirect to the 'thank you' page

		header('Location: contact-form-thank-you.html');

		} else {

			$to = $myemail;
			$email_subject = "errors!!";
			$email_body = "error: $errors";
			$headers = "From: $myemail\n";

			@mail($to,$email_subject,$email_body,$headers);

		}

?>