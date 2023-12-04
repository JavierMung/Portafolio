import { Navigate } from "react-router-dom";
import "../Styles/home.css"
import { useSwipeable } from 'react-swipeable';
import { useState } from "react";
import Card from "./Card";

function Skills() {
    const [swiftRight, setSwiftRight] = useState(false);
    const [swiftLeft, setSwiftLeft] = useState(false);
    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => {
            setSwiftRight(true)
        },
        onSwipedRight: (eventData) => {
            setSwiftLeft(true)
        }
    });
    return (
        <>
            {
                swiftRight ? <Navigate to={"/contact"} /> : <></>
            }
            {
                swiftLeft ? <Navigate to={"/"} /> : <></>
            }
            <div {...handlers} style={{ width: "80%" }}>
                <div style={{ display:"flex", justifyContent:"center", marginTop:"2rem", marginBottom:"2rem"}}>
                    <div style={{ textAlign:"justify"}}>
                    Bienvenido a la sección donde comparto algunos de los proyectos en los que he trabajado. Cada proyecto es una oportunidad para aprender, crecer y aplicar mis habilidades de programación. Desde aplicaciones web hasta soluciones creativas, aquí tienes un vistazo a mi viaje como desarrollador.
                    Explora cada proyecto para obtener más detalles sobre la tecnología utilizada, los desafíos superados y los resultados logrados. Estoy emocionado de compartir mi pasión por la programación y cómo cada proyecto contribuye a mi constante búsqueda de conocimiento.
                    Gracias por visitar y espero que encuentres inspiración en estos proyectos tanto como yo lo hice al crearlos. ¡No dudes en ponerte en contacto si tienes alguna pregunta o si te gustaría colaborar en futuros proyectos!
                    </div>
                </div>
                <div style={{ gap: "15px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default Skills;