import styles from "./Contact.module.css";

export const Contact = () => {

    return (
        <div className={styles.container}>
            <form action="" className={`containerForm`}>
                
                   <div className={`${styles.containerForm}`}>
                    <div>
                        <div className={styles.containerInput}>
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" id="nombre"/>
                        </div>

                        <div className={styles.containerInput}>
                            <label htmlFor="correo">Correo: </label>
                            <input type="email" id="correo"/>
                        </div>

                    </div>
                            <div className={styles.containerInput}>
                                <label htmlFor="apellido">Apellido: </label>
                                <input type="text" id="apellido"/>
                            </div>

                        
                   </div>
                    <div className={`${styles.containerInput} ${styles.txt}`}>
                        <label htmlFor="mensaje">Mensaje: </label>
                        <textarea name="" id="mensaje" cols="30" rows="10" />
                    </div>

                    <input type="submit" value="Enviar" />

            </form>
        </div>
    )
}