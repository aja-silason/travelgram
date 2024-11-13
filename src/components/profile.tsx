import style from '../components/profile.module.css'
import profile from '../assets/girl.jfif'
import mapPin from '../assets/MapPin.svg' 
import flight from '../assets/flight.svg'
import gallery from '../assets/gallery.svg'
import { useFilterData } from '../hook/useFilterData'

type profile = {
    name: string,
    content: string,
    src: string
}

const profile1: profile = {
    name: 'Isabela Torres',
    content: "Amante de viagens, cultura e gastronomia. 🌍✈️ Aqui compartilho as histórias registradas em cada clique, explorando cantinhos fascinantes do nosso planeta a partir da movimentada cidade de São Paulo. 🏙️📸",
    src: profile
}

export function Profile() {

    const {imagesFiltered} = useFilterData()
    const qtdPicture = imagesFiltered?.length;
    return(
        <>
        <div className={style.container}>
            <div className={style.profile}>
                <div className={style.profileInfo}>
                    <img src={profile1.src} />
                    <div className={style.content}>
                        <h2>{profile1.name}</h2>
                        <p>{profile1.content}</p>
                    </div>
                </div>
                <ul className={style.pins}>
                    <li><img src={mapPin} /> <span>Luanda, Angola</span></li>
                    <li><img src={flight} /> <span>{qtdPicture} - paises</span></li>
                    <li><img src={gallery} /> <span>{qtdPicture} - fotos</span></li>
                </ul>
            </div>
        </div>
        </>
    )
}