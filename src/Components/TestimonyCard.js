import '../Stylesheets/TestimonyCard.css';

function TestimonyCard ({ imgSrc, testimony, clientName, clientPosition }){
    return(
        <div className='testimony-container'>
            <img className='avatar' src={imgSrc}></img>
            <p className='testimony'>{testimony}</p>
            <h2 className='name'>{clientName}</h2>
            <span className='position'>{clientPosition}</span>
        </div>
    )
};

export default TestimonyCard;