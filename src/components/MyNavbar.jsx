
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun } from 'react-bootstrap-icons';


const MyNavbar = ({title}) => {

      const location = useLocation(); 
      console.log("LOCATION pathname", location.pathname);

      const navigate = useNavigate(); 

      const goHome = () => {
            navigate("/");
          };
 
        return (
            <Navbar bg="#676767" expand="lg">
            <Link to="/">
              <Navbar.Brand>{title}</Navbar.Brand>
              <Sun size={30} />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  to="/citySelected"
                  className={location.pathname === "/citySelected" ? "nav-link active" : "nav-link"}>
                  Select City
                </Link>
                <Button variant="link" onClick={goHome} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  Go to Home
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
      } 
export default MyNavbar