import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
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
            { insideDashboard &&
              <div className='btn btn-link ms-auto text-info fs-5 fw-bolder' style={{textDecoration:'none'}} >Logout <i class="fa-solid fa-arrow-up-from-bracket fa-rotate-90"></i></div>
            }
          </Container>
        </Navbar>
    </div>
  )
}

export default Header