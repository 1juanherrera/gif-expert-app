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

            <ol className="card-grid">
                {
                    images.map( ({ id, title }) => (
                        <GifGridItem key={id} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifGrid 