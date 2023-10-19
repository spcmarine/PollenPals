import React, {useState} from "react";
import styles from './signup.css';

const SignUpForm = ({ navigate }) => {
    // State variables to manage the email and password input values
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  


const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await fetch('http://localhost:8080/users', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              email: email, 
              password: password, 
              firstName: firstName, 
              lastName: lastName,
            })
        });
        
        if (response.status === 201) {
            navigate('/login');
        } else {
            navigate('/signup');
        }
      } catch (error) {
      console.error("Error during fetch:", error);
      }
  };

      // Function to handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
  }

  // Function to handle password input change
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
  }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
}

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
  }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
  }


  return (
    <div id='signup-front-page' className={styles.fullPage}>
      <div id='signup-form-area' className={styles.signupArea}>
        <h2>Join Us Here!</h2>
        <form id='signup-form' className={styles.signupForm} onSubmit={handleSubmit}>
          <input placeholder="Email" id='email' className={styles.email} type='text' value={email} onChange={handleEmailChange} />
          <input placeholder="Password" id='password' className={styles.password} type='password' value={password} onChange={handlePasswordChange} />     
          <input placeholder="Confirm Password" id='confirm-password' className={styles.username} type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <input placeholder="First Name" id='first-name' className={styles.firstName} type='text' value={firstName} onChange={handleFirstNameChange} />
          <input placeholder="Last Name" id='last-name' className={styles.lastName} type='text' value={lastName} onChange={handleLastNameChange} />
          {/* Submit button */}
          <input className={styles.submit} id='submit' type="submit" value="Submit" />
        </form>
        <div id='signup-login' className={styles.login}>Already have an account? <a id='signup-login-link' className={styles.loginLink} href='/login'>Login</a></div>
      </div>
    </div>
  );
}

export default SignUpForm;





