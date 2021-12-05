import React from "react"

export const CardSkill = ({name, image}) => {

    return (
        <div className="shadow-lg p-8 bg-white rounded-md">
            <img className="mx-auto w-20 h-20 lg:w-16 lg:mx-auto lg:h-16" src={image} alt={name} title={name}/>
        </div>
    )
}