import '../Stylesheets/ImageCard.css';

function ImageCard({ title, text, imgSrc, color }){
    return(
        <div className="img-container">
            <img className='image' src={imgSrc}></img>
            <div className={`img-info ${color}`}>
                <h1 className={`img-title ${title}`}>{title}</h1>
                <p className={`img-text ${text}`}>{text}</p>
            </div>
        </div>
    )
}

export default ImageCard;