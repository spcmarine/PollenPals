import React, {useState}from 'react';
import styles from './PostImageUploader.module.css';


const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;




const PostImageUploader = ({ navigate, onImageUpload }) => {
    const [loading, setLoading] = useState(false);

    const PostCloudUpload = async (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        
        formData.append('file', file);
        formData.append('upload_preset', `${UPLOAD_PRESET}`);  
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { 
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            onImageUpload(data.secure_url);
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div class={styles.imageContainer}>
            <input type="file" onChange={PostCloudUpload} disabled={loading} className={styles.imageEntry}/>
            {loading && <p>Uploading...</p>}
            
        </div>
    );
}

export default PostImageUploader;
