import "../Styles/card.css"
import logo from '../img/github.svg'
function Card({ titulo, descripcion, }) {
    return (
        <>
            <div className="card" >
                <div className="boxButtomGitHub">
                    <a href="https://github.com/JavierMung">
                        <div className="botonGitHub">

                            <div>
                                <img alt="prop" width={20} height={20} src={logo} />
                            </div>
                            <div>
                                GitHub
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/JavierMung">

                        <div className="botonGitHub" style={{ padding: "5px" }}>
                            <div>
                                Ver Proyecto
                            </div>
                        </div>
                    </a>
                </div>
                <div style={{ padding: "20px" }}>
                    <h1>Titulo</h1>
                    <div className="bordeTitulo">
                        <div className="lineaTitulo">
                        </div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus molestias, expedita iste distinctio, tenetur nemo blanditiis iusto numquam beatae voluptatum sapiente dolor quas? Rem eveniet aliquid corporis ex quae!
                    </div>
                    <div className="boxImagenes" >
                        <div className="boxImagen">
                            <img alt="react" width={40} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" />
                        </div>
                        <div className="boxImagen">
                            <img alt="css" width={40} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" />
                        </div>
                        <div className="boxImagen">
                            <img alt="js" width={40} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
                        </div>
                        <div className="boxImagen">
                            <img alt="mysql" width={40} height={40} src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png" />
                        </div>
                        <div className="boxImagen">
                            <img alt="azure" width={40} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Card;