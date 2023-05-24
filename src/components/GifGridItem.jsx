import PropTypes from 'prop-types'

const GifGridItem = ({ title, url, id }) => { 

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem

GifGridItem.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}