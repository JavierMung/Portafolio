import "../Styles/home.css"
function Home() {
    return (<>
        <div>
            <div className="Titulo centrar">
                Javier Munguia
            </div>
            <div className="centrar">
                <img className="imagen-responsiva" alt="Descripción de la imagen" src="https://1.bp.blogspot.com/-7SmeSjToGZs/XsnKLzphF1I/AAAAAAAADds/MNQSQWpCJ6gKOLnN_UMrvrq_cK5imuvNwCLcBGAsYHQ/s1600/el%2Bcontador%2Bprofesional.png" />

            </div>
            <div className="centrar2 info">
                <div className="columna">
                    <p>
                        ¡Hola! Soy Javier Munguia, un apasionado desarrollador de 24 años con una mente creativa y una pasión por la innovación tecnológica.
                        <br />
                        <br />
                        Mi enfoque se centra en el desarrollo Web, tanto del lado del Frontend y Backend donde disfruto dando vida a ideas a través de interfaces intuitivas y experiencias de usuario cautivadoras.
                    </p>
                </div>
                <div className="columna">
                    <p>
                        A lo largo de mi carrera, he trabajado en diversos proyectos que abarcan desde [menciona algún tipo de proyecto específico] hasta [otro tipo de proyecto].
                        <br />
                        <br />
                        La tecnología está en constante evolución, y me encanta mantenerme al día con las últimas tendencias y herramientas. Siempre estoy buscando desafíos emocionantes que me permitan expandir mis habilidades y contribuir a soluciones creativas.
                    </p>
                </div>

            </div>
        </div>

    </>);
}

export default Home;