import React, {useState, useEffect} from 'react';
import styles from './ListingItem.module.css';


const ListingItem = ({title, description, tip, age, size, request, location, type, username, createdAt, avatar, image}) => {

    const requestString = request.join(", ");
    const date = `${createdAt.substring(8, 10)}-${createdAt.substring(5, 7)}-${createdAt.substring(0, 4)}`

    console.log(image)
    return (
        <listing className={styles.listingItem}>
            <img src={image || "defaultflower.jpeg"} alt='A lovely Image' className={styles.picture}/>
            <div className={styles.textArea}>
                <div className={styles.topBar}>
                    <div className={styles.usernameArea}>
                        <img className={styles.avatar} src={avatar}></img>
                        <h3>{username}</h3>
                    </div>
                    <div className={styles.date}>Date Posted: {date}</div>
                </div>
                <h3 className={styles.title}>&#128204; {title}</h3>
                <p className={styles.type}>&#127793; Plant: {type}</p>
                <p className={styles.description}>&#128466; {description}</p>
                <p className={styles.location}>&#127757; Location: {location}</p>
                <p className={styles.age}>&#128197; Age: {age}</p>
                <p className={styles.tip}>&#128161; Tip: {tip}</p>
                <p className={styles.size}>&#127795; Size: {size}</p>
                <p className={styles.request}>&#127802; Requests: {requestString}</p>
                <div className={styles.bottomBar}>
                    <div className={styles.date}></div>
                    <button className={styles.contactButton}>Contact Me Here</button>
                </div>
            </div>
        </listing>
    )
}

export default ListingItem;