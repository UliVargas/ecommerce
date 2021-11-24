import { About } from "../../components/About/About"
import { Skills } from "../../components/CardsSkills/CardSkills"
import { Contact } from "../../components/Contact/Contact"
import { Hero } from "../../components/Hero/Hero"
import { Nav } from "../../components/Nav/Nav"
import { Proyects } from "../../components/Proyects/Proyects"

export const LandigPage = () => {


    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Proyects />
            <Contact />
        </>
    )
}