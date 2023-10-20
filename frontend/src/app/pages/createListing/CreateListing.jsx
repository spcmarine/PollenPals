import React, {useEffect, useState} from "react";



const CreateListing = ({navigate}) => {
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [location, setLocation] = useState("")


    const handleSubmit = async (event) =>{
        event.preventDefault();

        let response = await fetch( '/listing',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
        },
        body:JSON.stringify(
            {
                userID: "kdjflak",
                userName: "bob1",
                userEmail: "test@bob.com",
                userPlant: "Fren",
                requestedPlants: ["cheeseplant"],
                userLocation: location,
                isAvailable: true 
            })
        })
        if(response.status !== 201) {
            navigate('/login')
          } else {
            let data = await response.json()
            window.localStorage.setItem("token", data.token)
            window.sessionStorage.setItem("sessionUser", email)
            window.sessionStorage.setItem("currentUser", data.username)
            console.log(data.username)
            navigate('/home')
        
                }
        }
        const handleEmailChange = (event) => {
            setEmail(event.target.value)
  }

        const handlePasswordChange = (event) => {
            setPassword(event.target.value)
}
 
                return (
                    <div id='create-listing'>
                        <h1>Create Listing</h1>
                        <div id='create-listing-content'>
                            <form id='create-listing-form'>
                                <label htmlFor='title'>Title</label>
                                <input type='text' id='title' name='title' />
                                <label htmlFor='description'>Description</label>
                                <input type='text' id='description' name='description' />
                                <label htmlFor='price'>Price</label>
                                <input type='text' id='price' name='price' />
                                <label htmlFor='location'>Location</label>
                                <input type='text' id='location' name='location' />
                                <label htmlFor='image'>Image</label>
                                <input type='file' id='image' name='image' />
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                )
            }

export default CreateListing;