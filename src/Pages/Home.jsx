import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import titleimg from '../Assets/pngegg.png'


function Home() {
  return (
    <>
      <div className='bg-success container-fluid rounded' style={{width:'100%', height:'100vh'}}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Fair</h1>
            <p>One stop Destination for all Software Development Projects.Where user can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
            <button className='btn btn-warning'>Start To Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></button>
          </Col>
          <Col sm={12} md={6}>
            <img style={{marginTop:'100px'}} className='w-75' src={titleimg} alt="" />
          </Col>
        </Row>
      </div>
      {/*all projects*/}
       <div className="all-projects mt-5">
        <h1 className="text-center mb-5">Explore Our projects</h1>
        <marquee scrollAmount={25}>
          <div className='d-flex justify-content-between'>
            <div style={{width:'500px'}}>
              <ProjectCard/>
            </div>
            <div style={{width:'500px'}}>
              <ProjectCard/>
            </div>
            <div style={{width:'500px'}}>
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <div className='text-center'>
          <Link to={'/projects'}>View More Projects</Link>
        </div>
       </div>
    </>
  )
}

export default Home