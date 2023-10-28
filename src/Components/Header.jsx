import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <Navbar className="bg-success">
          <Container>
            <Navbar.Brand >
            <Link to={'/'} className="fs-4" style={{textDecoration:'none',color:'white'}}>
            <i className="fa-brands fa-stack-overflow fa-bounce"></i>{" "}
              Project Fair
            </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header