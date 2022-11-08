import { Image } from 'antd';
import react, { useEffect, useState } from 'react';
import ProductPhotoService from '../../../services/auth/ProductPhotoService';
import styles from './Photos.module.scss';

const SlidePhoto = ({ code }) => {

    const [ photos , setPhotos ] = useState([]);
    const [ photoUrl , setPhotoUrl ] = useState("");
    const loadPhotos = async () => {
        try {
          let res = await ProductPhotoService.getAllPhotos(code);
          setPhotos(res.data);
          setPhotoUrl(res.data[0].photoURL);
        } catch (err) {
          console.log(err);
        }
      }

    useEffect(() => {
        loadPhotos();
    },[])

    return (
        <div className={styles.container}>
            <img className={styles.image_1} src={photoUrl} />
            <div className={styles.photos_container}>
               {photos?.map((photo) => 
                <img key={photo.id} className={styles.images} alt="images" src={photo.photoURL} onClick={() => setPhotoUrl(photo.photoURL)}></img>
               )}
            </div>
        </div>

    )
}

export default SlidePhoto;