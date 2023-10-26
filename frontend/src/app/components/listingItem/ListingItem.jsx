import React, {useState, useEffect} from 'react';
import styles from './ListingItem.module.css';


const ListingItem = ({title, description, tip, age, size, request, location, type, username, createdAt, email, image, token}) => {


    const [contactButton, setContactButton] = useState("Contact Me Here")
    const requestString = request.join(", ");
    const date = `${createdAt.substring(8, 10)}-${createdAt.substring(5, 7)}-${createdAt.substring(0, 4)}`
    const [avatar, setAvatar] = useState("DefaultUser.jpg")

    useEffect(() => {
            fetch(`/users?email=${email}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAvatar(data.imageUrl)
                console.log(avatar)
            })
        })
    
    const showEmail = () => {
        setContactButton(email)
    }

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
                    <button className={styles.contactButton} onClick={showEmail}>{contactButton}</button>
                </div>
            </div>
        </listing>
    )
}

export default ListingItem;