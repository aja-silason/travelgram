import style from '../components/gallery.module.css'
import { Image } from './image'

type GalleryProps = {
    imagesFiltered: any[]
}

export function Gallery({imagesFiltered}: GalleryProps) {
    return(
        <>
            <div className={style.galleryContainer}>
                {
                    imagesFiltered?.length !== 0 ? (
                        imagesFiltered?.map(image => {
                            return <Image src={image.url}/>
                        })
                    ) : (
                        <span>
                            Imagem nao encontrada
                        </span>
                    )
                } 
            </div>
        </>
    )
}