import React, { useEffect,useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import titleimg from '../Assets/pngegg.png'
import { homeProjectAPI } from '../Services/allAPI'


function Home() {
  const [loggedin,setLoggedin] = useState(false)
  const [homeProjects,setHomeProjects] = useState([])
  const getHomeProjects = async () =>{
    const result = await homeProjectAPI()
    if(result.status===200){
      setHomeProjects(result.data);
    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }
  console.log(homeProjects);
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }
    //api call
    getHomeProjects()
  },[])
  return (
    <>
    {/*landing section*/}
      <div className='bg-success container-fluid rounded' style={{width:'100%', height:'100vh'}}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Fair</h1>
            <p>One stop Destination for all Software Development Projects.Where user can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
            { loggedin?
              <Link to={'/dashboard'} className='btn btn-warning'>Manage your Projects<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>:
              <Link to={'/login'} className='btn btn-warning'>Start To Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
            }
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
            {
            homeProjects?.length>0?homeProjects.map(project=>(
            <div className='me-5'>
              <ProjectCard project={project}/>
            </div>
              )):null
            
            }
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