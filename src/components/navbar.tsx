import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavItem from "./navitem";


const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/aboutus" },
  { text: "Gallery ", href: "/gallery" },
  { text: "FAQ ", href: "/faq" },
  { text: "Contact", href: "/contactus" },
];
const Navigationbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <style>{`
      .bg{
        background-color :#182933;
        z-index :1000;
      }
     .logo {
      width: 6%; /* Adjust the width as needed */
      height: auto;
      
    }
    @media (max-width: 768px) {
      .wid{
        width:72%;
      }
      .logo{
        width :15% ;
        margin-left: 3vw;
      }
    }
    
    
    
    `}</style>
      {/* <header>
        <nav className={`nav`}>
          <Link href={"/"}>
            <img src="../../logo.png" alt="Loading.." className="image_logo" />
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </nav>
      </header> */}
      <Navbar className="bg" variant="dark" expand="lg">
      {/* fixed="top" */}
      <Container className="ps-0">
        <Navbar.Brand href="#" className="wid">
          <img
            src="../../logo.png"
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contactus">Contact</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navigationbar;

// 			
// 							<div className="collapse navbar-collapse" id="main_nav">
// 								<ul className="navbar-nav">
// 									<li className="nav-item active">
// 										<Link href="/" className="nav-link">
// 											Home
// 										</Link>
// 									</li>
// 									<li className="nav-item">
// 										<Link href="aboutus" className="nav-link">
// 											About
// 										</Link>
// 									</li>
// 									<li className="nav-item">
// 										<Link href="gallery" className="nav-link">
// 											Gallery
// 										</Link>
// 									</li>
// 									<li className="nav-item">
// 										<Link href="faq" className="nav-link">
// 											FAQ
// 										</Link>
// 									</li>
// 									<li className="nav-item">
// 										<Link href="contactus" className="nav-link">
// 											Contact
// 										</Link>
// 									</li>
// 								</ul>
// 							</div>
// 						</span>
// 					</button>
// 					<div className="collapse navbar-collapse" id="main_nav">
// 						<ul className="navbar-nav">
// 							<li className="nav-item active">
// 								<Link href="/" className="nav-link">
// 									Home
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link href="aboutus" className="nav-link">
// 									About
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link href="gallery" className="nav-link">
// 									Gallery
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link href="faq" className="nav-link">
// 									FAQ
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link href="contactus" className="nav-link">
// 									Contact
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		</>
// 	)
// }
{/* <li className="nav-item dropdown">
		   <Link className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me  </Link>
		    <ul className="dropdown-menu">
			  <li><Link className="dropdown-item" href="#"> Submenu item 1</Link></li>
			  <li><Link className="dropdown-item" href="#"> Submenu item 2 </Link></li>
			  <li><Link className="dropdown-item" href="#"> Submenu item 3 </Link></li>
		    </ul>
		</li> */}
{/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
