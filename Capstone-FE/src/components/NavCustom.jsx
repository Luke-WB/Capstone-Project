import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import { Badge, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, ricercaArticoli, trovaIdUser } from "../redux/action";
import logo from "../assets/img/Logo principale - white.png";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

function NavCustom() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);
  const carrello = useSelector((state) => state.user.carrello);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(trovaIdUser(token, username));
  }, []);

  return (
    <>
      <Navbar expand="lg" className="nav px-5">
        <Container fluid className="text-light">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="d-flex ">
            <img src={logo} alt="Logo Future Gaming" className="img mx-3" />
            <Nav className="me-auto my-2 my-lg-0 ms-2" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="white" href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/articoli">Articoli</Nav.Link>
              <Nav.Link href="/partnership">Partern-ship</Nav.Link>
            </Nav>
            <Nav className="ms-auto my-2 my-lg-0 me-4" style={{ maxHeight: "100px" }} navbarScroll>
              {token !== "" ? (
                <>
                  <NavDropdown title={`Ciao ${user.username}`} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profilo">Il mio profilo</NavDropdown.Item>
                    <NavDropdown.Item href="/ordini">I miei ordini</NavDropdown.Item>
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
                    {carrello.articoli !== undefined ? (
                      <Badge bg="badge" className="badge">
                        {carrello.articoli.length}
                      </Badge>
                    ) : (
                      <p></p>
                    )}
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
