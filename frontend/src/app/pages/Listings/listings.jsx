import React, { useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import ListingFeed from "../../components/listingFeed/ListingFeed";
import styles from './listings.module.css';

const Listings = ({ navigate }) => {
  
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    const createListing = () => {
      navigate('/create-listing')
    }

    if(!token) {

        useEffect(() => {
          console.log('Wanna log out?!');
          navigate('/login');
        })
      } else {
        return(
          <div className={styles.pageWithNav}>
          <Navbar navigate={navigate}/>
            <div id='homepage' className={styles.fullPage}>
              <div className={styles.marginLeft} />
              <div id='homepage-content' className={styles.content}>
                <h2 className={styles.createListing} onClick={createListing}>Create Listing <img src='Group.png' className={styles.plusImage}/></h2>
                <ListingFeed token={token} setToken={setToken}/>
              </div>
              <div className={styles.marginRight} />
            </div>
          </div>

        )
      }
    }
    
    export default Listings;
