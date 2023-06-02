import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import { Badge, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "../redux/action";
import logo from "../assets/img/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

function NavCustom() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const carrello = useSelector((state) => state.user.carrello);
  const username = useSelector((state) => state.user.username);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUser(token, username));
  }, []);

  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container fluid className="text-light">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <img src={logo} alt="Logo Future Gaming" className="img" />
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="white" href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/articoli">Articoli</Nav.Link>
              <Nav.Link href="/">Sconti</Nav.Link>
              <Nav.Link href="/partnership">Partern-ship</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Cerca articoli" className="me-2" aria-label="Search" />
            </Form>
            <Nav className="ms-auto my-2 my-lg-0 me-4" style={{ maxHeight: "100px" }} navbarScroll>
              {token !== "" ? (
                <>
                  <NavDropdown title={`Ciao ${user.username}`} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profilo">Il mio profilo</NavDropdown.Item>
                    <NavDropdown.Item href="/ordini">I miei ordini</NavDropdown.Item>
                    <NavDropdown.Item href="/preferiti">Preferiti</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <Button
                      className="w-100 button"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </Button>
                  </NavDropdown>
                  <Button className="carrello" href="/carrello">
                    <FaShoppingCart className="icons me-2" />
                    <Badge bg="badge" className="badge">
                      {carrello.articoli.length}
                    </Badge>
                  </Button>
                </>
              ) : (
                <Nav.Link href="/login">
                  <AiOutlineUserAdd className="icons" /> | Accedi
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavCustom;
