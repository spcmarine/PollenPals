import React, { useEffect, useState} from "react";
import styles from './listingFeed.module.css'

const ListingFeed = ({ navigate }) => {

    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(token) {
            fetch("/listings",{
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


}, [token, setToken])

    return(
        <div id='listing-feed' className={styles.listingFeed}>
            <h1>Listing Feed</h1>
            <div id='listing-feed-content'>
                {/* this should contain the listing componaet             */}
            </div>
        </div>
    )
}

export default ListingFeed;