import { About } from "../About/About"
import { Skills } from "../CardsSkills/CardSkills"
import { Contact } from "../Contact/Contact"
import { Hero } from "../Hero/Hero"
import { Nav } from "../Nav/Nav"

export const LandigPage = () => {


    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Contact />
        </>
    )
}