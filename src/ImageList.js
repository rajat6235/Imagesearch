import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'
const ImageList=props=>{
    const images=props.images.map((imagee)=>{
        return<ImageCard key={imagee.id} imagee={imagee}
        />
    });
    return <div className='image-list'> {images}</div>
}
export default ImageList;