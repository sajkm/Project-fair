import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addprojectAPI } from "../Services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function AddProject({reqHeader}) {
  const [show, setShow] = useState(false);
  const [projectDetails,setProjectDetails] = useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })
  const [preview,setPreview] = useState("")
  const [token,setToken] = useState()

  const handleClose = () => {
    setShow(false)
    setProjectDetails({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
    setPreview("")
  };
  const handleShow = () => setShow(true);
  // console.log(projectDetails);
  
  useEffect(()=>{
    if(projectDetails.projectImage){
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  },[projectDetails.projectImage])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else{
      setToken("")
    }
  },[])

  const handleAdd = async(e)=>{
    e.preventDefault();
    const {title,languages,overview,projectImage,github,website} = projectDetails
    if(!title || !languages || !overview || !projectImage || !github || !website){
      toast.info("Please fill the form completely!!!")
    }else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)

      if(token){
         reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }

      
      const result = await addprojectAPI(reqBody,reqHeader)
      if(result.status===200){
        console.log(result.data);
        handleClose()
        alert("Project Added")

      }else{
        console.log(result);
        toast.warning(result.response.data);
      
      }
      
    }
  
  }
}




  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} centered size="lg" onHide={handleClose} keyboard={false}
      backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <label>
                <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                <img
                  className="img-fluid w-75  "
                  src={preview?preview:"https://lirp.cdn-website.com/343f0986cb9d4bc5bc00d8a4a79b4156/dms3rep/multi/opt/1274512-placeholder-640w.png"}
                  alt=""
                />
              </label>
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
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={2000} theme="colored"/>
    </>
  );
}

export default AddProject;