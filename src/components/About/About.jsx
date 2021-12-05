import profile from "../../img/profile.jpg"

export const About = () => {

    return (
            <div className="text-center lg:h-screen">
                <div className="lg:h-full ">
                    <h2 className="lg:pt-10 text-gray-800 text-2xl lg:text-3xl font-bold">Acerca de mí</h2>
                    <div className="flex h-5/6 items-center ">
                        <div className="container p-6 flex flex-col-reverse lg:flex-row-reverse w-full gap-10">
                            <div className="text-left text-gray-900 leading-loose w-1/2">
                                <h4>Hola, soy Ulises!</h4>
                                <p>Soy desarrolador Full-Stack, lo que me permite ser versátil al momento de inicial un proyecto o servir de apoyo para alguno.</p>
                                <p>A partir del mes de agosto del 2021, comencé a programar, pero, no te confundas, estuve en un bootcamp con más de 800 horas de programación en total, con un proyecto individual implementando todas las tecnologías que menciono más adelante.</p>
                                <p>El armar un proyecto desde cero por mi cuenta fue un gran reto, lo que me preparó para poder ser de ayuda en tu causa.</p>
                                <p>Si te interesa colaborar conmigo, estaría encantado que pudiéramos hacerlo, ya que me encanta conocer nuevas personas para trabajar en equipo.</p>
                                <p>Te dejo un botón donde podrás contactarte conmigo.</p>
                                <button className="bg-blue-500 p-2 rounded-md my-4 text-white font-semibold hover:bg-blue-600 lg:my-10">Contactarme</button>
                            </div>
                            <div className="w-1/3">
                                <img className="rounded-md" src={profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};