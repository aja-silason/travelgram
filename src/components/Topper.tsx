import logo from '../assets/travelgram-logo.svg'
import search from '../assets/search-ico.svg'
import profile from '../assets/Profile pic.png'  
import { Profile } from './profile'
import style from '../components/header.module.css'
import { useState } from 'react'
import { useFilterData } from '../hook/useFilterData'
import { Gallery } from './gallery'

export function Topper() {
    const [isHide, setIsHide] = useState<boolean>(false)

    const {handleSearch, filteredImage, imagesFiltered} = useFilterData()

    const handleInput = () => {
        setIsHide(!isHide)
    }   

    return(
        <>
        <div className={style.complement}>
            <header className={style.header}>
                <div className={style.logoContent}>
                <img src={logo} /><span>Travelgram</span>
                </div>
                <nav className={style.navigation}>
                    <ul>
                        <li><img src={search} onClick={handleInput}/></li>
                        <li><input type="text" value={filteredImage} className={isHide ? style.show : style.input} onChange={handleSearch}/></li>
                        <li className={style.hide}>Explorar</li>
                        <li className={style.hide}>Minhas viagens</li>
                        <li><img src={profile} /></li>
                    </ul>
                </nav>
            </header>

            <Profile />
        </div>

        <Gallery imagesFiltered={imagesFiltered}/>

        </>
    )
}