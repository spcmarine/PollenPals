import React, {useEffect, useState} from "react";



const CreateListing = ({navigate}) => {
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [userID, setUserID] = useState(window.sessionStorage.getItem("userID"))
    const [userName, setUserName] = useState(window.sessionStorage.getItem("username"))
    const [userEmail, setUserEmail] = useState(window.sessionStorage.getItem("userEmail"))

    const [userPlant, setUserPlant] = useState("")
    const [requestedPlants, setRequestedPlants] = useState([])
    const [location, setLocation] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [age, setAge] = useState("")
    const [size, setSize] = useState("")
    const [tip, setTip] = useState("")
    const [image, setImage] = useState("")


    const handleSubmit = async (event) =>{
        event.preventDefault();

        let response = await fetch( 'http://localhost:8080/listings',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
        },
        body:JSON.stringify(
            {
                userID: userID,
                userName: userName,
                userEmail: userEmail,
                userPlant: userPlant,
                requestedPlants: requestedPlants,
                userLocation: location,
                isAvailable: true,
                title: title,
                description: description,
                age: age,
                size: size,
                tip:tip,
                image: image

            })
        })
        if(response.status !== 201) {
            console.log(response.status)
            //navigate('/login')
          } else {
            let data = await response.json()
            window.localStorage.setItem("token", data.token)
            //window.sessionStorage.setItem("userEmail", data.email)
            //window.sessionStorage.setItem("userName", data.username)
            //console.log(data.username)
            navigate('/listings')
        
                }
        }
        const handleUserPlant = (event) => {
            setUserPlant(event.target.value)
        }

        const handleRequestedPlants = (event) => {
            setRequestedPlants(event.target.value)
        }

        const handleLocationChange = (event) => {
            setLocation(event.target.value)
        }

        const handleTitleChange = (event) => {
            setTitle(event.target.value)
            }
        
        const handleDescriptionChange = (event) => {
            setDescription(event.target.value)
            }

        const handleAgeChange = (event) => {
            setAge(event.target.value)
            }

        const handleSizeChange = (event) => {
            setSize(event.target.value)
            }

        const handleTipChange = (event) => {
            setTip(event.target.value)
            }

        const handleImageChange = (event) => {
            setImage(event.target.value)
            }

 
                return (
                    <div id='create-listing'>
                        <h1>Create Listing</h1>
                        <div id='create-listing-content'>
                            <form onSubmit={handleSubmit} id='create-listing-form'>
                                <label htmlFor='title'>Title</label>
                                <input type='text' id='title' name='title' placeholder="Title" onChange={handleTitleChange}/>
                                <label htmlFor='description'>Description</label>
                                <input type='text' id='description' name='description' placeholder="description" onChange={handleDescriptionChange}/>
                                <label htmlFor='plant'>Plant</label>
                                <input type='text' id='plant' name='plant' placeholder="Plant" onChange={handleUserPlant} />
                                <label htmlFor='location'>Location</label>
                                <input type='text' id='location' name='location' placeholder="Location" onChange={handleLocationChange}/>
                                <label htmlFor='age'>Age</label>
                                <input type='text' id='age' name='age' placeholder="Age" onChange={handleAgeChange}/>
                                <label htmlFor='size'>Size</label>
                                <input type='text' id='size' name='size' placeholder="Size" onChange={handleSizeChange}/>
                                <label htmlFor='tip'>Tip</label>
                                <input type='text' id='tip' name='tip' placeholder="Tip" onChange={handleTipChange}/>
                                <label htmlFor='requestedPlants'>Requested Plants</label>
                                <input type='text' id='requestedPlants' name='requestedPlants' placeholder="Requested Plants" onChange={handleRequestedPlants}/>     
                                <label htmlFor='image'>Image</label>
                                <input type='file' id='image' name='image' />
                                <button type='submit' id='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                )
            }

export default CreateListing;