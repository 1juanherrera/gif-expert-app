import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";
import GifGridItem from "./gifGridItem";


const GifGrid = ({ category }) => {

    const [ images, setImages ] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect( () => {
        getImages()
    }, [])



    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifGridItem 
                        key={image.id}
                        { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid 