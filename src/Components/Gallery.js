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
            <img className='milkbottles' src={galleryMilkbottles} alt="gallery image"></img>
            <img className='orange' src={galleryOrange} alt="gallery image"></img>
            <img className='cone' src={galleryCone} alt="gallery image"></img>
            <img className='sugarcubes' src={gallerySugarcubes} alt="gallery image"></img>
        </div>
    )
}

export default Gallery;