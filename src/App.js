import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Forecast from "./Forecast/Forecast";
import CurrentTemp from "./Current/CurrentTemp"
import HomePage from "./HomePage/HomePage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="/">Weather</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="forecast">Forecast</Link>
              {/* <Nav.Link href="#home">Forecast</Nav.Link> */}
              {/* <Nav.Link href="#link">Historical</Nav.Link> */}
             </Nav>
             <Nav className="me-auto">
               <Link to="current">Current</Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="forecast" element={<Forecast></Forecast>}></Route>
          <Route path="current" element={<CurrentTemp></CurrentTemp>}></Route>
        </Routes>
       </header>


    </div>
  );
}

export default App;
