import React, {useState} from "react";
import './signup.css';

const SignUpForm = ({ navigate }) => {
    // State variables to manage the email and password input values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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


    return(
        <div>
            <form>
                <p>Email: </p>
                <input placeholder='Email' id='email' type='text' value={ email }></input>
                <p>Password: </p>
                <input placeholder="Password"></input>
                <p>ConfriemPassword: </p>
                <input placeholder="Comfirme Password"></input>
                <p>FirstName:</p>
                <input placeholder="fristname"></input>
                <p>SecondName</p>
                <input placeholder="second name" type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;





