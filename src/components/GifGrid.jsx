import GifGridItem from "./gifGridItem";
import UseFetchGifs from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const { images, isLoading } = UseFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2 className="is-loading">Cargando...</h2> )
            }

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}