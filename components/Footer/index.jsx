import style from "./styles.module.scss";

const Footer = ({}) => {
    return (
        <footer className={style.footer}>
            <img src="/logo.png"/>
            <p>2022 Treehouse Labs Inc</p>
        </footer>
    )
}

export default Footer;