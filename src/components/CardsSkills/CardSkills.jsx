import { useEffect } from "react/cjs/react.development";
import { CardSkill } from "./CardSkill";
import { useState } from "react";
import { db } from "../../Firebase/db"
import { getDocs, collection } from "firebase/firestore"
export const Skills = () => {

    //Estado local
    const [logos, setLogos] = useState([])

    //Petición base de datos Firebase Firestore
    const getLogos = async() => {
        const peticion = await getDocs(collection(db, "logos"))
        const { docs } = peticion;
        const logos = docs.map(logo => logo.data())
        setLogos(logos)
    }

    useEffect(() => {
        getLogos()
    }, [])
    
    return (
        <div className="pt-10 text-center h-screen mx-auto shadow-md bg-gray-100">
            <h2 className="text-3xl font-bold pt-6 text-gray-800">Tecnologías</h2>
            <div className="container mt-6 w-3/4 lg:grid lg:justify-items-center items-center lg:h-5/6 grid grid-cols-2 sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
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
