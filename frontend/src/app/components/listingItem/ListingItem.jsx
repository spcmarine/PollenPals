import React, {useState, useEffect} from 'react';
import styles from './ListingItem.module.css';


const ListingItem = ({title, description, tip, age, size, request, location, type}) => {

    return (
        <listing className={styles.listingItem}>
            <img src='defaultFlower.jpeg' alt='A lovely flower' className={styles.picture}/>
            <div className={styles.textArea}>
                <h3 className={styles.title}>&#128204; {title}</h3>
                <p className={styles.type}>&#127793; Plant: {type}</p>
                <p className={styles.description}>&#128466; {description}</p>
                <p className={styles.location}>&#127757; Location: {location}</p>
                <p className={styles.age}>&#128197; Age: {age}</p>
                <p className={styles.tip}>&#128161; Tip: {tip}</p>
                <p clssName={styles.size}>&#127795; Size: {size}</p>
                <p className={styles.request}>&#127802; Request: {request}</p>
            </div>
        </listing>
    )
}

export default ListingItem;