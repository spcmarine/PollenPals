import React, { useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import ListingFeed from "../../components/listingFeed/ListingFeed";
import styles from './listings.css'

const Listings = ({ navigate }) => {
  
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
  
    useEffect(() => {
      if(token) {
        fetch("/listings", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(async data => {
            window.localStorage.setItem("token", data.token)
            setToken(window.localStorage.getItem("token"))
            setUser(data.user);
          })
      }
    }, [token, setToken, setUser])
    
    const logout = () => {
      window.localStorage.removeItem("token")
      navigate('/login')
    }

    if(token) {
        return(
          <>
          <Navbar navigate={navigate}/>
            <div id='homepage' className={styles.homepage}>
              <h1>Homepage</h1>
              <h2>listings</h2>
              <div id='homepage-content' className={styles.content}>
                <ListingFeed token={token}/>
                {/* this should contain the listing feed componaet             */}
              </div>
            </div>
          </>
        )
      } else {
        navigate('/login')
      }
    }
    
    export default Listings;
