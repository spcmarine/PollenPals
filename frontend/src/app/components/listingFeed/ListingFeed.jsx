import React, { useEffect, useState} from "react";
import styles from './listingFeed.module.css';
import ListingItem from '../listingItem/ListingItem';

const ListingFeed = ({ navigate }) => {

    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [user, setUser] = useState(null);
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
                setUser(data.user);
                console.log(data.user);
                setListings(data.listings);
            })
        }


}, [token, setToken])

    return(
        <div id='listing-feed' className={styles.listingFeed}>
            <h1>Listing Feed</h1>
            <div id='listing-feed-content'>
                {listings.map((listing)=> {
                    return (
                        <ListingItem 
                            title={listing.title} 
                            description={listing.description} 
                            location={listing.location} 
                            age={listing.age} 
                            tip={listing.tip} 
                            size={listing.size}
                            request={listing.request}
                        >
                        </ListingItem>
                    )
                })}
            </div>
        </div>
    )
}

export default ListingFeed;