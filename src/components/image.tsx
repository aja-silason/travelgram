import style from '../images.module.css'

export function Image({src}: any) {
    return(
        <>
            <img src={src} className={style.image}/>
        </>
    )
}