import { Outlet } from "react-router-dom";
import "./Styles/navBar.css"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <div style={{paddingTop:"6rem",paddingBottom:"4rem" , display: "flex", width: "100%", justifyContent: "center", overflow: "hidden", wordBreak: "break-word", flexWrap:"wrap" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
