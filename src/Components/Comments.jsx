import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Comments({revie}) {
    console.log(revie);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    
  
  return (
    <div >
<div className='text-center'>
<Button  style={{backgroundColor:'rgb(96, 158, 160)'}} onClick={handleShow}>
        Reviews
      </Button>
</div >
      {
        revie?.map(item=>(
           <div style={{borderRadius:"50px"}}>
<Modal  show={show} onHide={handleClose} className='mt-4' >
     
        <Modal.Title style={{backgroundColor:'rgb(108, 163, 163)',color:'black'}} className=' p-2' >Name :{item.patient_name} </Modal.Title>
      <Modal.Body style={{backgroundColor:'rgb(108, 163, 163)',color:'black'}} className=' p-2'>Date :{item.date}</Modal.Body>
      <Modal.Body style={{backgroundColor:'rgb(108, 163, 163)',color:'black'}} className=' p-2'>Rating : &#9733; {item.rating}</Modal.Body>
      <Modal.Title  style={{backgroundColor:'rgb(108, 163, 163)',color:'black'}}className=' fs-6 p-3'>Comment :{item.comments} </Modal.Title>
      <div className=' text-center p-5' style={{backgroundColor:'rgb(108, 163, 163)',color:'black'}}>
      <Button className='btn ' style={{backgroundColor:'white',color:'black'}} onClick={handleClose}>
          Close
        </Button>
      </div>
    </Modal>

           </div>

      
        ))
      }



    </div>
  )
}

export default Comments