import React, { useEffect, useState } from "react";
import styles from "./CreateListing.module.css";
import Navbar from '../../components/Navbar/Navbar'

const CreateListing = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userID, setUserID] = useState(window.sessionStorage.getItem("userID"));
  const [userName, setUserName] = useState(
    window.sessionStorage.getItem("username")
  );
  const [userEmail, setUserEmail] = useState(
    window.sessionStorage.getItem("userEmail")
  );

  const [userPlant, setUserPlant] = useState("");
  const [requestedPlants, setRequestedPlants] = useState([]);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [tip, setTip] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("http://localhost:8080/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userID: userID,
        userName: userName,
        userEmail: userEmail,
        userPlant: userPlant,
        userAvatar: window.sessionStorage.getItem("profileImage"),
        requestedPlants: requestedPlants,
        userLocation: location,
        isAvailable: true,
        title: title,
        description: description,
        age: age,
        size: size,
        tip: tip,
        image: image,
      }),
    });
    if (response.status !== 201) {
      console.log(response.status);
      //navigate('/login')
    } else {
      let data = await response.json();
      window.localStorage.setItem("token", data.token);
      //window.sessionStorage.setItem("userEmail", data.email)
      //window.sessionStorage.setItem("userName", data.username)
      //console.log(data.username)
      navigate("/listingspage");
    }
  };
  const handleUserPlant = (event) => {
    setUserPlant(event.target.value);
  };

  const handleRequestedPlants = (event) => {
    const plants = event.target.value
    const plantsArr = plants.split(', ')
    setRequestedPlants(plantsArr);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  return (
    <div className={styles.pageWithNav}>
      <Navbar navigate={navigate}></Navbar>
      <div className={styles.fullPage}>
        <div className={styles.leftMargin}/>
        <div id="create-listing" className={styles.creationArea}>
          <h1 className={styles.createListingHeader}>Hype up your plant!</h1>
          <div id="create-listing-content" className={styles.formArea}>
            <form onSubmit={handleSubmit} id="create-listing-form" className={styles.form}>
              <div className={styles.formTopHalf}>
                <div className={styles.imageArea}>
                  <label for="image">Select Image</label>
                  <input type="file" id="image" name="image" className={styles.imageEntry}/>
                </div>
                <div className={styles.formTopHalfRight}>
                  <input type="text" id="title" name="title" placeholder="&#128204; Title" className={styles.topHalfText} onChange={handleTitleChange}/>
                  <input type="text" id="plant" name="plant" placeholder="`&#127793;` Plant" className={styles.topHalfText} onChange={handleUserPlant} />
                  <input type="text" id="location" name="location" placeholder="&#127757; Location" className={styles.topHalfText} onChange={handleLocationChange}/>
                </div>
              </div>
              <input type="text" id="description" name="description" placeholder="&#128466; Description" className={styles.bottomText} onChange={handleDescriptionChange}/>
              <input type="text" id="age" name="age" placeholder="&#128197; Age" className={styles.bottomText} onChange={handleAgeChange}/>
              <input type="text" id="size" name="size" placeholder="&#127795; Size" className={styles.bottomText} onChange={handleSizeChange}/>
              <input type="text" id="tip" name="tip" placeholder="&#128161; Tip" className={styles.bottomText} onChange={handleTipChange}/>
              <input type="text" id="requestedPlants" name="requestedPlants" placeholder="&#127802; Requested Plants (separated by ', ')" className={styles.bottomText} onChange={handleRequestedPlants}/>
              <div className={styles.submitArea}>
                <button type="submit" className={styles.submit}>Create</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.rightMargin}/>
      </div>
    </div>
  );
};

export default CreateListing;