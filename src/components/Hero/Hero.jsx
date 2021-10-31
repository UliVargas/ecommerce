import hero from "../../img/ilustracion.svg"
import styles from "./Hero.module.css"

export const Hero = () => {

    return (

        <>
            <div className={`container ${styles.container}`}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroImg}>
                        <img src={hero} alt="Hero" />
                    </div>
                    <div className={styles.heroTxt}>
                        <h2>Hola, soy</h2>
                        <h1>Ulises Vargas</h1>
                        <h3>Desarrollador Full-Stack</h3>
                    </div>
                </div>
            </div>
        </>

    )
};