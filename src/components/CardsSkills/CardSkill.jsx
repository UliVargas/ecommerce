import styles from "./CardSkill.module.css";

export const CardSkill = ({name, image}) => {

    return (
        <div className={styles.container}>
            <img src={image} alt={name} title={name}/>
        </div>
    )
}