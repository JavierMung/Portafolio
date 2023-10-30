import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Styles/navBar.css"
function App() {
  const [scrollPercentage, setScrollPercentage] = useState(10);

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
  var estilos = { margin: "5px", padding: "5px", borderRadius: "3px", fontSize: "1.1rem" }

  return (
    <>
      <div className="navBarContainer">
        <div
          className="navBar"
          style={{
            backgroundColor: "#2A2C33",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            width: "100%",
          }}
        >
          <div>
            <button style={estilos}>
              <Link to={"/"}>
                About me
              </Link>
            </button>
          </div>
          <div>
            <button style={estilos}>
              <Link to={"/about"}>
                Skills
              </Link>
            </button>
          </div>
          <div>
            <button style={estilos}>
              <Link to={"/contact"}>
                Contact
              </Link>
            </button>
          </div>
          <div
            className="navBarAfter"
            style={{
              position: 'absolute',
              content: '""',
              borderBottom: '5px solid red',
              width: `${scrollPercentage}%`,
              bottom: 0,
            }}
          ></div>
        </div> 
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "4.5rem" }}>
        <div style={{ display: "flex", width: "70%", justifyContent: "center", overflow: "hidden", wordBreak: "break-word" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
