import React, { useEffect, useState} from "react";
import styles from './listingFeed.module.css';
import ListingItem from '../listingItem/ListingItem';

const ListingFeed = ({ navigate, token, setToken }) => {

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

                const orderedListings = data.listings.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
                setListings(orderedListings);
            })
        }


}, [token, setToken])

    return(
        <div id='listing-feed' className={styles.listingFeed}>
            <div id='listing-feed-content'>
                {listings.map((listing)=> {
                    return (
                        <ListingItem 
                            username={listing.userName}
                            title={listing.title} 
                            description={listing.description} 
                            location={listing.userLocation} 
                            age={listing.age} 
                            tip={listing.tip} 
                            size={listing.size}
                            request={listing.requestedPlants}
                            type={listing.userPlant}
                            image={listing.image}
                            createdAt={listing.createdAt}
                            avatar={listing.userAvatar}
                            email={listing.userEmail}
                        >
                        </ListingItem>
                    )
                })}
            </div>
        </div>
    )
}

export default ListingFeed;