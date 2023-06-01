// CREATE A TEST CASE FOR THE REGISTER COMPONENT THAT WILL TEST THE FOLLOWING
// 
// 1. SHOULD RENDER THE REGISTER COMPONENT PROPERLY
// 2. SHOULD HAVE A H1 ELEMENT WITH TEXT 'REGISTER'
// 3. SHOULD HAVE A H2 ELEMENT WITH TEXT 'CREATE YOUR ACCOUNT'
// 4. SHOULD HAVE A TEXTFIELD ELEMENT WITH PROPER LABEL AND VARIANT FOR EMAIL
// 5. SHOULD HAVE A TEXTFIELD ELEMENT WITH PROPER LABEL AND VARIANT FOR PASSWORD
// 6. SHOULD HAVE A TEXTFIELD ELEMENT WITH PROPER LABEL AND VARIANT FOR CONFIRM PASSWORD
// 7. SHOULD HAVE A BUTTON ELEMENT WITH PROPER VARIANT AND COLOR
// 8. SHOULD HAVE A LINK ELEMENT TO THE LOGIN PAGE
// 9. SHOULD HAVE A ALERT COMPONENT THAT IS NOT VISIBLE ON PAGE LOAD
// 10. SHOULD MAKE A POST API CALL TO THE ENDPOINT WHEN THE REGISTER BUTTON IS CLICKED
// 11. SHOULD SHOW THE ALERT COMPONENT WHEN THE REGISTER BUTTON IS CLICKED AND THE EMAIL IS NOT VALID
// 12. SHOULD SHOW THE ALERT COMPONENT WHEN THE REGISTER BUTTON IS CLICKED AND THE PASSWORD IS NOT VALID
// 13. SHOULD SHOW THE ALERT COMPONENT WHEN THE REGISTER BUTTON IS CLICKED AND THE PASSWORD AND CONFIRM PASSWORD DO NOT MATCH
// 14. SHOULD SHOW THE ALERT COMPONENT WHEN THE REGISTER BUTTON IS CLICKED AND THE EMAIL IS VALID AND THE PASSWORD IS VALID AND THE PASSWORD AND CONFIRM PASSWORD MATCH
// 15. SHOULD NAVIGATE TO THE LOGIN PAGE WHEN THE LOGIN LINK IS CLICKED
// 16. SHOULD NAVIGATE TO THE LOGIN PAGE WHEN THE ALERT CLOSE BUTTON IS CLICKED
// 
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';

// jest.mock('fetch');

describe('Register', () => {
  it('should render the Register component properly', () => {
    render(<BrowserRouter><Register /></BrowserRouter>);
    const register = screen.getByTestId('register');
    expect(register).toBeInTheDocument();
  });

  it('should have a h1 element with text REGISTER', () => {
    render(<BrowserRouter><Register /></BrowserRouter>);
    const h1 = screen.getByRole('heading', { name: 'REGISTER' });
    expect(h1).toBeInTheDocument();
  });

    it('should have a h2 element with text CREATE YOUR ACCOUNT', () => {
        render(<BrowserRouter><Register /></BrowserRouter>);
        const h2 = screen.getByRole('heading', { name: 'CREATE YOUR ACCOUNT' });
        expect(h2).toBeInTheDocument();
    });

    it('should have a textfield element with proper label for email', () => {
        render(<BrowserRouter><Register /></BrowserRouter>);
        const email = screen.getByLabelText('Email');
        expect(email).toBeInTheDocument();
        expect(email).toHaveAttribute('type', 'email');
    });

    it('should have a textfield element with proper label for password', () => {
        render(<BrowserRouter><Register /></BrowserRouter>);
        const password = screen.getByLabelText('Password');
        expect(password).toBeInTheDocument();
        expect(password).toHaveAttribute('type', 'password');
    });


})