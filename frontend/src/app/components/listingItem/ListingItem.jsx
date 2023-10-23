import React, {useState, useEffect} from 'react';

const ListingItem = ({title, description, tip, age, image, size, request, location}) => {

    return (
        <listing>
            <h3>{title}</h3>
        </listing>
    )
}

export default ListingItem;