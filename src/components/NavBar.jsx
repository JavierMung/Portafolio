import { useState, useEffect } from "react";
import LinkNavBar from "./LinkNavBar";
function NavBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
      const actualizarScroll = () => {
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const nuevoScrollPercentage = (window.scrollY / documentHeight) * 100;
  
        setScrollPercentage(Math.min(100, nuevoScrollPercentage)); // Limita el porcentaje a 100%
      };
  
      window.addEventListener('scroll', actualizarScroll);
  
      return () => {
        window.removeEventListener('scroll', actualizarScroll);
      };
    }, []);
  
  
    return (
        <div className="navBar">

            <LinkNavBar link={"/"} nombre={"About me"}/>
            <LinkNavBar link={"/skills"} nombre={"Skills"}/>
            <LinkNavBar link={"/contact"} nombre={"Contact"}/>


            <div
                className="navBarAfter"
                style={{
                    position: 'absolute',
                    content: '""',
                    borderBottom: '5px solid #c8c8c8',
                    width: `${scrollPercentage}%`,
                    bottom: 0,
                }}
            ></div>
        </div>
    );
}

export default NavBar;