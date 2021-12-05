import React from "react";
import arr from "../../img/icon-arrow.svg"
import { Nav } from "../Nav/Nav";

export const Hero = () => {

    return (
            <div className="bg-image-hero shadow-md h-3/5 md:h-1/2 lg:h-screen">
                <Nav />
                <div className="h-1/3 sm:h-1/2 text-center flex flex-col justify-center items-center md:h-2/3 lg:h-4/5 text-white">
                    <div className="text-2xl md:text-4xl font-semibold md:leading-loose">
                        <h2>¡Hola! Mi nombres es <span className="text-blue-500  md:font-bold">Ulises</span></h2>
                        <h3 className="text-xl lg:text-3xl text-center">Desarrollador Full-Stack</h3>
                    </div>
                </div>
                <div className=" animate-bounce text-center">
                    <button className="w-10 h-10 flex justify-center items-center mx-auto"><img src={arr} alt="Arrow" /></button>
                </div>
            </div>
        )
};