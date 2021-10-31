import styles from "./About.module.css";
import profile from "../../img/profile.jpg"

export const About = () => {

    return (

        <div className={styles.container}>
            <h2>Acerca de mí</h2>
            <div className={`container ${styles.containerAbout}`}>
                <div className={styles.txt}>
                    <h4>Hola, soy Ulises!</h4>
                    <p>Soy desarrolador Full-Stack, lo que me permite ser versátil al momento de inicial un proyecto o servir de apoyo para alguno.</p>
                    <p>A partir del mes de agosto del 2021, comencé a programar, pero, no te confundas, estuve en un bootcamp con más de 800 horas de programación en total, con un proyecto individual implementando todas las tecnologías que menciono más adelante.</p>
                    <p>El armar un proyecto desde cero por mi cuenta fue un gran reto, lo que me preparó para poder ser de ayuda en tu causa.</p>
                    <p>Si te interesa colaborar conmigo, estaría encantado que pudiéramos hacerlo, ya que me encanta conocer nuevas personas para trabajar en equipo.</p>
                    <p>Te dejo un botón donde podrás contactarte conmigo.</p>
                    <button className={styles.btnContacto}>Contactarme</button>
                </div>
                <div className={styles.img}>
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    )
};