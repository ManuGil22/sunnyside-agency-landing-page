/* STYLESHEETS */
import '../Stylesheets/Gallery.css'

/* IMAGE IMPORTS*/
import galleryCone from '../images/desktop/image-gallery-cone.jpg'
import galleryMilkbottles from '../images/desktop/image-gallery-milkbottles.jpg'
import galleryOrange from '../images/desktop/image-gallery-orange.jpg'
import gallerySugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
    return (
        <div className='image-gallery-section'>
            <img className='milkbottles' src={galleryMilkbottles}></img>
            <img className='orange' src={galleryOrange}></img>
            <img className='cone' src={galleryCone}></img>
            <img className='sugarcubes' src={gallerySugarcubes}></img>
        </div>
    )
}

export default Gallery;