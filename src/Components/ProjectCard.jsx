import React, {useState} from 'react'
import { Card,Modal,Row,Col } from 'react-bootstrap'
import Projectpic from '../Assets/photo-1572177812156-58036aae439c.avif'
function ProjectCard() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={Projectpic} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal
        size='lg'
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img style={{height:'200px'}} className='img-fluid' src={Projectpic} alt="Project Image" />
                </Col>
                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Project Oveview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur necessitatibus distinctio magni eligendi repudiandae facilis expedita. Culpa cum nemo asperiores, soluta est doloribus voluptatibus obcaecati amet perspiciatis unde laudantium
                    </p>
                    <p>Language Used : <span className='fw-bolder'>HTML,CSS,React</span></p>
                </Col>
            </Row>
            <div className='mt-3'>
            <a href='https://github.com/sajkm/Project-fair' target='_blank' className='me-3 btn'><i className='fa-brands fa-github fa-2x'></i></a>
            <a href='https://media-player-m04tem1kr-sajs-projects.vercel.app' target='_blank' className='me-3 btn'><i className='fa-solid fa-link fa-2x'></i></a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard