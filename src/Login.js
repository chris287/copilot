// CREATE A MATERIAL UI 5 COMPONENT NAMED LOGIN WITH THE FOrm FIELDS AS FOLLOWS:
// 1. EMAIL
// 2. PASSWORD
// 3. SUBMIT BUTTON
// 4. FORGOT PASSWORD LINK
// 5. REGISTER LINK
// FORM SHOULD BE CENTER ALIGNED TO THE PAGE AND SHOULD HAVE BACKGROUND COLOR AS #ffffff
// PAGE SHOULD HAVE A BACKGROUND IMAGE FROM URL '/top-right.jpg' AND SHOULD BE FIT TO THE PAGE
// USE THE react-router-dom 6 LIBRARY FOR NAVIGATION
import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
 
function Login() {

  const handleLogin = () => {
    const data = { email: 'test@test', password: 'test' };
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  return (
    <div style={{ backgroundImage: "url('/top-right.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#ffffff', width: 'fit-content', margin: 'auto', padding: '20px', borderRadius: '10px' }}>
        <h1>LOGIN</h1>
        <form>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth>Submit</Button>
          <div style={{ marginTop: '20px' }}>
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;