import React from "react"
import { Footer } from "../Footer/Footer"

export const Contact = () => {

    return (
        <div>
            <div className="w-3/5 mx-auto p-10 font-semibold">
                <h2 className="text-center text-3xl font-bold text-gray-800">Contacto</h2>
                <form className="flex items-center h-5/6 p-10">
                    <div className="flex flex-col justify-center mx-auto">
                        <div className="grid grid-cols-3 gap-5 mb-6">
                            <div>
                                <label htmlFor="name">Nombre: </label>
                                <input type="text" id="name" className="text-gray-800 border-2 border-blue-400 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-2"/>
                            </div>

                            <div>
                                <label htmlFor="lastname">Apellido: </label>
                                <input type="text" id="lastname" className="text-gray-800 border-2 border-blue-400 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-2"/>
                            </div>

                            <div>
                                <label htmlFor="email">Correo: </label>
                                <input type="email" name="" id="email" className="text-gray-800 border-2 border-blue-400 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-2"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message">Mensaje: </label>
                            <textarea name="" id="message" cols="30" rows="10" className="text-gray-800 border-2 border-blue-400 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-2"/>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}