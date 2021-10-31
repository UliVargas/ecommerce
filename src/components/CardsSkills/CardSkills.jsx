import { CardSkill } from "./CardSkill";
import styles from "./CardSkills.module.css";
const logos = require("../../logos");

export const Skills = () => {
    

    return (
        <div className={`${styles.container}`}>
            <h2>Habilidades</h2>
            <div className={`container ${styles.containerCards}`}>
                {
                    logos.map(logo => (
                        <CardSkill
                            key={logo.id}
                            name={logo.name}
                            image={logo.image}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}