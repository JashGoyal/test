import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function Navbarmain() {
  return (
    <Navbar className="tek">
      <Container>
        <Navbar.Brand href="/" className="logonav">
          TUNICALABS MEDIA
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbarmain;
