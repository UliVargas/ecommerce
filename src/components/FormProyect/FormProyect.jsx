import React, { useState } from "react";
import styles from "./FormProyect.module.css"
import axios from "axios";

import { app } from '../../Firebase/db'

export const FormProyect = () => {

    const [form, setForm] = useState({
        title: "",
        description: "",
        images: []
    })

    const [img, setImg] = useState("");
    const [imgUpload, setImgUpload] = useState("");
    
    
    
    const handleImages = async(e) => {
        setImg(e.target.files[0])
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const uploadImage = async() => {
        const archivo = img;
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(archivo.name);
        await archivoPath.put(archivo);
        const enlaceImg = await archivoPath.getDownloadURL();
        setImgUpload(enlaceImg)
    }

    const axiosRequest = async() => {
        await axios.post("http://localhost:3001/proyectos", {
            title: form.title,
            description: form.description,
            images: imgUpload
        })
        console.log(imgUpload);
        alert("Archivo cargado")
        setImg("")
        setForm({
            title: "",
            description: "",
            images: []
        })
    } 
    
    const handleSubmit = async(e) => {
        e.preventDefault();
    };


    return (
        <>
            <form action="" onSubmit={handleSubmit} className={`container ${styles.containerForm}`}>
                <div className={styles.formInput}>
                    <label htmlFor="images">Imágenes</label>
                    <input type="file" id="images" onChange={handleImages} />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" value={form.title} name="title" onChange={handleChange} />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="desciption">Descripción</label>
                    <textarea name="description" id="description" value={form.description} cols="30" rows="10" onChange={handleChange} />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
};