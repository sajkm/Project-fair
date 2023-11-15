import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProject() {
  const [show, setShow] = useState(false);
  const [projectDetails,setProjectDetails] = useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(projectDetails);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} centered size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center   ">
              <img
                className="img-fluid w-75  "
                src="https://lirp.cdn-website.com/343f0986cb9d4bc5bc00d8a4a79b4156/dms3rep/multi/opt/1274512-placeholder-640w.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-3">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Project title"
                value={projectDetails.title}
                onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Language Used"
                value={projectDetails.languages}
                onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Github link"
                value={projectDetails.github}
                onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}
              />{" "}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="website Link"
                value={projectDetails.website}
                onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}
              />
            </div>
            <input type="text" className="form-control w-100" placeholder="Project Overview"  
            value={projectDetails.overview}
            onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;