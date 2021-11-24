import { useEffect } from "react/cjs/react.development";
import { CardSkill } from "./CardSkill";
import styles from "./CardSkills.module.css";
import { useState } from "react";
import axios from "axios";


export const Skills = () => {
    
    //Estado local
    const [logos, setLogos] = useState([])
    
    //Lamado a la api
    const getLogos = async() => {
        const resolve = await axios.get("http://localhost:3001/logos")
        .then(data => data.data);
        setLogos(resolve)
    };


    //Ejecuta la funcion de llamado
    useEffect(() => {
        getLogos();
    }, [])

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