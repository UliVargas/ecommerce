import React from "react";
import { useForm } from "../hooks/useForm";
import styles from "./FormProyect.module.css"

const initialForm = {
    images: [],
    title: "",
    description: ""
}

export const FormProyect = () => {
    const {
        form,
        handleChange,
        handleSubmit,
        handleImages
    } = useForm(initialForm);

    


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