import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import MyProject from '../Components/MyProject'
import Profile from '../Components/Profile'


function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <>
    <Header insideDashboard/>
    <Row style={{marginTop:'100px'}}>
      <Col sm={12} md={8}>
       {/* my project*/}
       <h2>Welcome <span className='text-warning'>{username}</span></h2>
       <MyProject/>
      </Col>
      <Col sm={12} md={4}>
       {/* my profile*/}
       <Profile/>
      </Col>
    </Row>
    </>
   
  )
}

export default Dashboard