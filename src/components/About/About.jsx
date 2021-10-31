import styles from "./About.module.css";
import profile from "../../img/profile.jpg"

export const About = () => {

    return (

        <div className={styles.container}>
            <h2>Acerca de mí</h2>
            <div className={`container ${styles.containerAbout}`}>
                <div className={styles.txt}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt ratione omnis temporibus? Quibusdam maiores officiis ad rem ab ipsa? Eaque fuga, ab nobis doloremque veniam esse nulla at atque.</p>
                </div>
                <div className={styles.img}>
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    )
};