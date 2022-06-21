import '../Stylesheets/ImageCard.css';

function ImageCard({ title, text, imgSrc, color, className }){
    return(
        <div className="img-container grid-item" >
            <img className={`image ${className ? className : ''}`} src={imgSrc}></img>
            <div className='relative-container'>
                <div className={`img-info ${color}`}>
                    <h1 className={`img-title ${title}`}>{title}</h1>
                    <p className={`img-text ${text}`}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;