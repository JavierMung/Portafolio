import { Navigate } from "react-router-dom";
import "../Styles/home.css"
import { useSwipeable } from 'react-swipeable';
import { useState } from "react";

function Contact() {
    const [swiftRight, setSwiftRight] = useState(false);
    const handlers = useSwipeable({
        onSwipedRight : (eventData) => {
            setSwiftRight(true)
        },

    });
    return (
        <>
            {
                swiftRight ? <Navigate to={"/skills"} /> : <></>
            }

            <div style={{ width: "80%" }}>
                <div {...handlers}>

                
                    <div className="centrar titulo">
                        <h1>Skills</h1>
                    </div>
                    <br />
                    <div className="centrar2 info">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, hic. Velit eos aliquid aperiam minus dolorum ad libero nobis accusantium quasi fugiat quae sit pariatur illo, quod dolores alias saepe.
                            <br />
                            <br />
                            Mi enfoque se centra en el desarrollo Web, tanto del lado del Frontend y Backend donde disfruto dando vida a ideas a través de interfaces intuitivas y experiencias de usuario cautivadoras.

                            A lo largo de mi carrera, he trabajado en diversos proyectos que abarcan desde [menciona algún tipo de proyecto específico] hasta [otro tipo de proyecto].
                            <br />
                            <br />
                            La tecnología está en constante evolución, y me encanta mantenerme al día con las últimas tendencias y herramientas. Siempre estoy buscando desafíos emocionantes que me permitan expandir mis habilidades y contribuir a soluciones creativas.
                        </p>
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}

export default Contact;