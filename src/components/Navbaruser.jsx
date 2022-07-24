import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import user from "../images/user.jpg";
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";
import { IoNotifications } from "react-icons/io5";
import { Badge } from "@mui/material";

function Navbaruser() {
  return (
    <Navbar className="tek">
      <Container>
        <Navbar.Brand href="/detail" className="logonav">
          TUNICALABS MEDIA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navpro">
          <div style={{ display: "block", padding: 30 }}>
            <Badge badgeContent={4} color={"error"}>
              <IoNotifications size={30} color="#fff" />
            </Badge>
          </div>
          <img src={user} alt=" " className="user_image" />
          <Nav className="me-auto">
            <NavDropdown title="Rajan" id="basic-nav-dropdown" className="drop">
              <NavDropdown.Item href="#action/3.1">
                <CgProfile /> Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <TbReportSearch /> Reports
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <FcSettings /> Settings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaruser;
