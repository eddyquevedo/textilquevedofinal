import {Navbar, Container, Nav,NavDropdown,Badge} from "react-bootstrap"
import {NavLink,Link} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext';
import Logo from "../CartWidget/coser.svg";


function NavBarExample ({param1}) {
    const {cart,valorCart} = useCartContext()
    return (
        <div>
            <Navbar className="navBg" collapseOnSelect expand="lg" variant="dark" >
                <Container>
                <Navbar.Brand as={NavLink} to='/'> "MAQUINARIAS DON QUEVEDO" </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/'
                            className={({ isActive })=> isActive ? 'clase1' : 'clase2'
                        }> INICIO  </NavLink>
                        <NavLink to="/about"> QUIENES SOMOS </NavLink>
                        <NavDropdown title=" TIPOS " id="collasible-nav-dropdown">
                        <NavLink to="/categoria/maquina1" >MAQUINAS FAMILIARES</NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/categoria/maquina2">MAQUINAS SEMI-INDUSTRIALES</NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/categoria/maquina3">MAQUINAS INDUSTRIALES</NavLink>
                        <NavDropdown.Divider />
                        </NavDropdown>
                        <NavLink to=""> COMO LLEGAR </NavLink>
                        <NavLink to="/contact"> CONTACTO </NavLink>
                    </Nav>
                    <Nav>
                    <div>
                    <Link to="/carrito">
                    <img className="m-1 " src={Logo}height={55} width={50} alt =''/>
    <button className='btn btn-outline-primary'>
    <Badge bg="primary">{cart.length === 0 ? 0 : valorCart()}</Badge></button>
    </Link>
                    </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h2>{param1}</h2>
        </div>
    )
}
export default NavBarExample
