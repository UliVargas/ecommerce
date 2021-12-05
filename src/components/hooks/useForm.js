// import { useState } from "react";
// import axios from "axios";
// import { app } from '../../Firebase/db'

// export const useForm = (initialForm) => {
//     const [form, setForm] = useState(initialForm)

//     const [img, setImg] = useState("");
//     const [imgUpload, setImgUpload] = useState("");
    
    
    
//     const handleImages = async(e) => {
//         setImg(e.target.files[0])
//     };

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     };

//     const uploadImage = async() => {
//         const archivo = img;
//         const storageRef = app.storage().ref();
//         const archivoPath = storageRef.child(archivo.name);
//         await archivoPath.put(archivo);
//         const enlaceImg = await archivoPath.getDownloadURL();
//         setImgUpload(enlaceImg)
//     }

//     const axiosRequest = async() => {
//         await axios.post("http://localhost:3001/proyectos", {
//             title: form.title,
//             description: form.description,
//             images: imgUpload
//         })
//         console.log(imgUpload);
//         alert("Archivo cargado")
//         setImg("")
//         setForm(initialForm)
//     } 
    
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//     };

//     return {
//         handleChange,
//         handleSubmit,
//         handleImages,
//         form,
//     }
// };