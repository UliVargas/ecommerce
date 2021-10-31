import { Link } from "react-router-dom"
import logo from "../../img/logo.svg"
import styles from "./Nav.module.css";

export const Nav = () => {
    return (
        <div className={`${styles.container} container`}>
            <Link to="/inicio">
                <img src={logo} alt="Logo" />
            </Link>
            <div className={styles.enlaces}>
                <Link to="/acerca-de">
                    Sobre Mí
                </Link>
                <Link to="/habilidades">
                    Proyectos
                </Link>
                <Link to="/contacto" className={styles.contacto}>
                    Contacto
                </Link>
            </div>
        </div>
    )
}