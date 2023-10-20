import React from "react";
import ReactDom from "react-router-dom";
import styles from './navbar.module.css'


const Navbar = () =>{

    return(
        <nav id='navbar' className={styles.navbar}>
            <div className={styles.pageLinks}>
            <div className={styles.pageLinksSingle}>
                <ul>     
                <li><a className={styles.listItem} href="/Profile">Profile</a></li>
                <li><a className={styles.listItem} href="/CreateListing">Create Listing</a></li> 
                </ul> 
            </div>
            
        </div>

        </nav>
    )
}

export default Navbar;