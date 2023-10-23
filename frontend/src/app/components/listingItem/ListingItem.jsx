import React, {useState, useEffect} from 'react';

const ListingItem = ({title, description, tip, age, size, request, location}) => {

    return (
        <listing>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{location}</p>
            <p>{age}</p>
            <p>{tip}</p>
            <p>{size}</p>
            <request>{request}</request>
        </listing>
    )
}

export default ListingItem;