import { Link } from "react-router-dom";

function LinkNavBar({ link, nombre }) {
    return (
        <>
            <Link className="link" style={{ textDecoration: "none" }} to={link}>
                <button className="boton" >
                    {nombre}
                </button>
            </Link>

        </>);
}

export default LinkNavBar;