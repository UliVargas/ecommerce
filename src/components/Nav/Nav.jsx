import React from "react"
import { Link } from "react-router-dom"
import logo from "../../img/logo.svg"

export const Nav = () => {
    return (
        <div className="text-center w-full mx-auto py-6">
            <div className="mx-auto md:flex md:w-11/12 md:justify-between md:mx-auto container md:items-center">
                <div>
                    <Link to="/inicio">
                        <img  className="mx-auto text-center" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="text-white flex flex-col sm:flex-row sm:flex justify-center mt-4 lg:text-2xl gap-4 sm:gap-6 md:gap-x-16 md:mt-0">
                    <Link to="/acerca-de">
                        Acerca de mí
                    </Link>
                    <Link to="/habilidades">
                        Proyectos
                    </Link>
                    <Link to="/contacto">
                        Contacto
                    </Link>
                </div>
            </div>
        </div>
    )
}