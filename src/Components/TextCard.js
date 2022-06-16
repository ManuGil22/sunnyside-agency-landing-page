import '../Stylesheets/TextCard.css';

function TextCard({ title, text, color }) {
    return(
        <div className="container grid-item">
            <h1 className='title'>{title}</h1>
            <p className='text'>{text}</p>
            <div className={`underline ${color}`}><a>LEARN MORE</a></div>
        </div>
    )
}

export default TextCard;