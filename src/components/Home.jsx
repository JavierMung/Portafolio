import { Navigate } from "react-router-dom";
import "../Styles/home.css"
import { useSwipeable } from 'react-swipeable';
import { useState } from "react";

function Home() {
    const [swiftRight, setSwiftRight] = useState(false);
    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => {
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

                    <div className="centrar">
                        <img className="imagen-responsiva" alt="Descripción de la imagen" src="https://1.bp.blogspot.com/-7SmeSjToGZs/XsnKLzphF1I/AAAAAAAADds/MNQSQWpCJ6gKOLnN_UMrvrq_cK5imuvNwCLcBGAsYHQ/s1600/el%2Bcontador%2Bprofesional.png" />
                    </div>

                    <div className="centrar titulo">
                        <h1>Hola, soy Javier Munguia</h1>
                    </div>
                    <br />
                    <div className="centrar2 info">
                        <p>
                            Ua apasionado desarrollador con una mente creativa y una pasión por la innovación tecnológica.
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
            <div style={{ width: "95%" }}>
                Como egresado de la Escuela Superior de Cómputo del Instituto Politécnico Nacional, mi corazón late con un orgullo innegable. Esta institución no solo me proporcionó conocimientos sólidos en el campo de la informática, sino que también cultivó en mí una pasión por la excelencia, la innovación y la resolución de problemas.
                Cada día, agradezco la oportunidad de haber formado parte de una comunidad que valora el rigor académico, la dedicación y el espíritu colaborativo. Las aulas, los laboratorios y los proyectos compartidos con compañeros apasionados dejaron una marca indeleble en mi carrera como profesional de la computación.
                <div class="container">
                    <div>
                        <div class="content">
                            <h2>Jane Doe</h2>
                            <span>UI & UX Designer</span>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <h2>Alex Smith</h2>
                            <span>CEO Expert</span>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <h2>Emily New</h2>
                            <span>Web Designer</span>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <h2>Lisa Boley</h2>
                            <span>Marketing Coordinator</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;