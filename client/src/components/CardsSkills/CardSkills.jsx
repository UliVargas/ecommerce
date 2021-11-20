import { useEffect } from "react/cjs/react.development";
import { CardSkill } from "./CardSkill";
import styles from "./CardSkills.module.css";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/db"
import { useState } from "react";


export const Skills = () => {
    
    const [logos, setLogos] = useState([])

    useEffect(() => {
        async function logos() {
            const arrayLogos = [];
            const logosRequest = await getDocs(collection(db, "logos"));
            logosRequest.forEach(logo => {
                arrayLogos.push(logo.data())
            })
            setLogos(arrayLogos)
        }   
        logos()
    }, [setLogos])

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