import React, {useState} from "react";
import styles from './signup.module.css';
import SignedOutNavbar from '../../components/SignedOutNavbar/SignedOutNavbar'

const SignUpForm = ({ navigate }) => {
    // State variables to manage the email and password input values
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        if (!validatePassword(password)) {
            setErrorMessage("Password must be between 6 and 20 characters and contain at least one number, one uppercase letter, one lowercase letter, and one special character");
            return; 
        }
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address");
            return;
        }

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
        const data = await response.json();
        
        if (response.status === 201) {
            navigate('/login');
        } else if (response.status === 409) {
            setErrorMessage(data.message)
            navigate('/signup');
        } else {
            setErrorMessage("Something went wrong. Please try again.")
            navigate('/signup');
        }
      } catch (error) {
      console.error("Error during fetch:", error);
      }
  };

  const validatePassword = (password) =>{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
    return regex.test(password);
  }

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
  }

  
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

console.log(styles)
  return (
    <div className={styles.pageWithNav}>
      <SignedOutNavbar className={styles.signedOutNavbar}></SignedOutNavbar>
      <div id='signup-front-page' className={styles.fullPage}>
        <div className={styles.leftMargin}/>
        <img id='signup-picture' className={styles.signupPicture} src="/SignupPic.png"></img>
        <div id='signup-form-area' className={styles.signupArea}>
          <h2 className={styles.signupHeader}>Join Us Here!</h2>
          <form id='signup-form' className={styles.signupForm} onSubmit={handleSubmit}>
            <input placeholder="Email" id='email' className={styles.email} type='text' value={email} onChange={handleEmailChange} />
            <input placeholder="Password" id='password' className={styles.password} type='password' value={password} onChange={handlePasswordChange} />     
            <input placeholder="Confirm Password" id='confirm-password' className={styles.password2} type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
            <input placeholder="First Name" id='first-name' className={styles.firstName} type='text' value={firstName} onChange={handleFirstNameChange} />
            <input placeholder="Last Name" id='last-name' className={styles.lastName} type='text' value={lastName} onChange={handleLastNameChange} />
            {/* Submit button */}
            <input className={styles.submit} id='submit' type="submit" value="Submit" />
          </form>
          <div id='signup-error-message' className={styles.errorMessage}>{errorMessage}</div>
          <div id='signup-login' className={styles.login}>Already have an account? <a id='signup-login-link' className={styles.loginLink} href='/login'>Login</a></div>
        </div>
        <div className={styles.rightMargin}/>
      </div>
    </div>
  );
}

export default SignUpForm;





