import style from './footer.module.css'

export function Footer() {
    return(
        <>
            <footer className={style.footer}>
                <ul className={style.copy}>
                    <li>Travelgram &copy;2024</li>
                </ul>
                <ul className={style.termos}>
                    <li>Termos de uso</li>
                    <li>Politica de privacidade</li>
                </ul>
            </footer>
        </>
    )
}