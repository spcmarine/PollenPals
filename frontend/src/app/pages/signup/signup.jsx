import React, {useState} from "react";
import styles from './signup.css';

const SignUpForm = ({ navigate }) => {
    // State variables to manage the email and password input values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrimepassword, setConfirmePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


const handleSubmit = async (event) =>{
    event.preventDefault();

    // Send a POST request to the '/users' endpoint with email and password data and name 1st and 2nd
    fetch('/users', {
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
      })
        .then(response => {
          // Check the response status code
          if (response.status === 201) {
            // If the status code is 201 (Created), navigate to the login page
            navigate('/login');
          } else {
            // If the status code is not 201, navigate back to the signup page
            navigate('/signup');
          }
        })
    }

      // Function to handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
  }

  // Function to handle password input change
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
  }

    const handleConfrimePasswordChange = (event) => {
        setPassword(event.target.value);
}

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
  }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
  }


    return(
        <div>
            <form>
                <p>Email: </p>
                <input placeholder="Email" id='email' className={styles.email} type='text' value={email} onChange={handleEmailChange}></input>
                <p>Password: </p>
                <input placeholder="Password" id='password' className={styles.password} type='password' value={password} onChange={handlePasswordChange}></input>
                <p>ConfriemPassword: </p>
                <input placeholder="ConfrimePassword" id='Confrimepassword' className={styles.Confirmepassword} type='password' value={confrimepassword} onChange={handleConfrimePasswordChange}></input>
                <p>FirstName:</p>
                <input placeholder="First name" id='first-name' className={styles.firstName} type='first-name' value={firstName} onChange={handleFirstNameChange}></input>
                <p>SecondName</p>
                <input placeholder="Last name" id='last-name' className={styles.lastName} type='last-name' value={lastName} onChange={handleLastNameChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;





