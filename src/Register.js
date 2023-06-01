// CREATE A FORM COMPONENT THAT HAS THE FOLLOWING:
// 1. EMAIL - MUI TEXT FIELD
// 2. PASSWORD - MUI TEXT FIELD
// 3. CONFIRM PASSWORD - MUI TEXT FIELD
// 4. REGISTER BUTTON - MUI BUTTON
// 5. LOGIN LINK - MUI LINK
// 6. USE THE react-router-dom 6 LIBRARY FOR NAVIGATION

// PAGE SHOULD HAVE A BACKGROUND IMAGE FROM URL '/top-right.jpg'

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, TextField, Button, Link as MuiLink, Alert } from '@mui/material';

function Register() {
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('error');

  // CREATE A ONFIELDCHANGE FUNCTION THAT WILL BE CALLED WHEN THE EMAIL OR PASSWORD OR CONFIRM PASSWORD FIELD IS CHANGED AND WILL DO THE FOLLOWING:
  // 1. SET THE STATE OF THE EMAIL OR PASSWORD OR CONFIRM PASSWORD FIELD TO THE VALUE OF THE FIELD
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // CREATE A FORM SUBMIT FUNCTION THAT WILL BE CALLED WHEN THE REGISTER BUTTON IS CLICKED AND WILL DO THE FOLLOWING:
  // 1. CHECK IF THE EMAIL IS VALID BY USING THE REGEX /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@deloitte.com/
  // 2. IF THE EMAIL IS NOT VALID, SET THE STATE OF THE ALERT MESSAGE TO 'INVALID EMAIL' AND SET THE STATE OF THE ALERT SEVERITY TO 'error'
  // 3. IF THE EMAIL IS VALID, CHECK IF THE PASSWORD IS VALID BY USING THE FOLLOWING RULES:
  // 3.1. PASSWORD SHOULD BE AT LEAST 8 CHARACTERS LONG
  // 3.2. PASSWORD SHOULD HAVE AT LEAST 1 UPPERCASE CHARACTER
  // 3.3. PASSWORD SHOULD HAVE AT LEAST 1 LOWERCASE CHARACTER
  // 3.4. PASSWORD SHOULD HAVE AT LEAST 1 NUMBER
  // 3.5. PASSWORD SHOULD HAVE AT LEAST 1 SPECIAL CHARACTER FROM THE FOLLOWING LIST !@#$%^&*()
  // 4. IF THE PASSWORD IS NOT VALID, SET THE STATE OF THE ALERT MESSAGE TO 'INVALID PASSWORD' AND SET THE STATE OF THE ALERT SEVERITY TO 'error'
  // 5. IF THE PASSWORD IS VALID, CHECK IF THE CONFIRM PASSWORD IS SAME AS THE PASSWORD
  // 6. IF THE CONFIRM PASSWORD IS NOT SAME AS THE PASSWORD, SET THE STATE OF THE ALERT MESSAGE TO 'PASSWORDS DO NOT MATCH' AND SET THE STATE OF THE ALERT SEVERITY TO 'error'
  // 7. IF THE CONFIRM PASSWORD IS SAME AS THE PASSWORD, SET THE STATE OF THE ALERT MESSAGE TO 'SUCCESSFULLY REGISTERED' AND SET THE STATE OF THE ALERT SEVERITY TO 'success'
  // 8. SET THE STATE OF THE SHOW ALERT TO TRUE
  // 9. USE THE setTimeout FUNCTION TO SET THE STATE OF THE SHOW ALERT TO FALSE AFTER 5 SECONDS
  // 10. USE THE setTimeout FUNCTION TO SET THE STATE OF THE ALERT MESSAGE TO '' AFTER 5 SECONDS
  // 11. USE THE setTimeout FUNCTION TO SET THE STATE OF THE ALERT SEVERITY TO '' AFTER 5 SECONDS

  // This function is called when the form is submitted
const formSubmit = (event) => {
  // Prevent the default behaviour of the form
  event.preventDefault();
  // Check if the email is a valid Deloitte email address
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@deloitte.com/))
  {
    // If not, set the alert message and severity
    setAlertMessage('INVALID EMAIL');
    setAlertSeverity('error');
  }
  else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/))
  {
    setAlertMessage('INVALID PASSWORD');
    setAlertSeverity('error');
  }
  else if (password !== confirmPassword)
  {
    setAlertMessage('PASSWORDS DO NOT MATCH');
    setAlertSeverity('error');
  }
  else
  {
    // If the email is valid, the password is valid and the passwords match, set the alert message and severity
    setAlertMessage('SUCCESSFULLY REGISTERED');
    setAlertSeverity('success');
    // Call the registerUser function
    registerUser();
  }
  // Show the alert
  setShowAlert(true);
  // Hide the alert after 5 seconds
  setTimeout(() => { setShowAlert(false); }, 5000);
  // Reset the alert message after 5 seconds
  setTimeout(() => { setAlertMessage(''); }, 5000);
  // Reset the alert severity after 5 seconds
  setTimeout(() => { setAlertSeverity(''); }, 5000);
};

  // CREATE A FUNCTION NAMED REGISTERUSER THAT MAKES AN API CALL TO THE ENDPOINT (USE REACT_APP_API_URL FROM .env FILE). THE API CALL SHOULD BE A FETCH POST REQUEST WITH THE FOLLOWING PARAMETERS:
  // 1. HEADER - 'Content-Type': 'application/json'
  // 2. BODY - { email: email, password: password }
  // CREATE A STATE VARIABLE NAMED REGISTRATIONRESPONSE AND SET IT TO THE VALUE OF THE REGISTRATION RESPONSE FROM THE API CALL
  // CREATE A STATE VARIABLE NAMED REGISTRATIONRESPONSESTATUS AND SET IT TO THE VALUE OF THE REGISTRATION RESPONSE STATUS FROM THE API CALL
  // CREATE A STATE VARIABLE NAMED REGISTRATIONRESPONSEHEADERS AND SET IT TO THE VALUE OF THE REGISTRATION RESPONSE HEADERS FROM THE API CALL
  // CREATE A STATE VARIABLE NAMED REGISTRATIONRESPONSEBODY AND SET IT TO THE VALUE OF THE REGISTRATION RESPONSE BODY FROM THE API CALL
  // USE THE useEffect FUNCTION TO CALL THE REGISTERUSER FUNCTION WHEN THE REGISTRATIONRESPONSESTATUS CHANGES
  // USE THE useEffect FUNCTION TO SET THE STATE OF THE SHOW ALERT TO TRUE WHEN THE REGISTRATIONRESPONSESTATUS CHANGES
  // USE THE useEffect FUNCTION TO SET THE STATE OF THE ALERT MESSAGE TO THE VALUE OF THE REGISTRATIONRESPONSEBODY WHEN THE REGISTRATIONRESPONSESTATUS CHANGES
  // USE THE useEffect FUNCTION TO SET THE STATE OF THE ALERT SEVERITY TO THE VALUE OF THE REGISTRATIONRESPONSESTATUS WHEN THE REGISTRATIONRESPONSESTATUS CHANGES
  // USE THE setTimeout FUNCTION TO SET THE STATE OF THE SHOW ALERT TO FALSE AFTER 5 SECONDS
  // USE THE setTimeout FUNCTION TO SET THE STATE OF THE ALERT MESSAGE TO '' AFTER 5 SECONDS
  // USE THE setTimeout FUNCTION TO SET THE STATE OF THE ALERT SEVERITY TO '' AFTER 5 SECONDS

  // CREATE A FUNCTION NAMED REGISTERUSER THAT MAKES AN API CALL TO THE ENDPOINT (USE REACT_APP_API_URL FROM .env FILE). THE API CALL SHOULD BE A FETCH POST REQUEST WITH THE FOLLOWING PARAMETERS:
  // This code registers a user in the database
 
const registerUser = () => {
  fetch(`${process.env.REACT_APP_API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
};



// CREATE A FUNCTION NAMED HANDLELOGIN THAT WILL BE CALLED WHEN THE LOGIN BUTTON IS CLICKED AND WILL DO THE FOLLOWING:
  // MAKE AN API CALL TO THE LOGIN API WITH URL(http://localhost:3000/login) WITH THE FOLLOWING PARAMETERS:
  // 1. EMAIL
  // 2. PASSWORD
  // USE FETCH API TO MAKE THE POST API CALL
  
  return (
    <>
      <div className='registration-container' style={{ backgroundImage: "url('/top-right.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center' }} data-testid='register'>
        <Container maxWidth="sm" style={{ backgroundColor: 'white', textAlign: 'center', padding: '50px 20px' }}>
          <h1>REGISTER</h1>
          <h2>CREATE YOUR ACCOUNT</h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Email" variant="outlined" fullWidth type='email' onChange={(event) => setEmail(event.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" variant="outlined" fullWidth type='password' onChange={(event) => setPassword(event.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Confirm Password" variant="outlined" type='password' fullWidth onChange={(event) => setConfirmPassword(event.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth onClick={(e)=>formSubmit(e)}>REGISTER</Button>
            </Grid>
            <Grid item xs={12}>
              <MuiLink component={Link} to="/login">Already have an account? Login</MuiLink>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* IMPORT A MUI ALERT COMPONENT THAT WILL BE DISPLAYED AT PAGE TOP WHEN THE SHOW ALERT STATE IS TRUE
      1. USE THE alertSeverity STATE FOR THE ALERT SEVERITY
      2. USE THE alertMessage STATE FOR THE ALERT MESSAGE 
      3. ALERT SHOULD BE POSITIONED AT THE TOP OF THE PAGE */}
      {showAlert && <Alert severity={alertSeverity} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, textAlign: 'center' }}>{alertMessage}</Alert>}
      
    </>
  );
}

export default Register;

