import React, { useEffect, useState} from "react";
import styles from './listingFeed.module.css';
import ListingItem from '../listingItem/ListingItem';

const ListingFeed = ({ navigate }) => {

    const [token, setToken] = useState(window.localStorage.getItem("token"));
    //const [user, setUser] = useState(null);
    const [listings, setListings] = useState([]);

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
                //setUser(data.user);
                setListings(data.listings);
                //console.log('This is the test one')
                console.log(data.listings);
            })
        }


}, [token, setToken])

    return(
        <div id='listing-feed' className={styles.listingFeed}>
            <h1>Listing Feed</h1>
            <div id='listing-feed-content'>
                <ListingItem title={data.listings.title}></ListingItem>
            </div>
        </div>
    )
}

export default ListingFeed;