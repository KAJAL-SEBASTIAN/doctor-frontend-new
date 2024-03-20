import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';

function Details({docterss}) {
    console.log(docterss);
  return (
    <div>

        <Link to={`view/${docterss.id}`}>

        <MDBCard className='m-4 text-dark' style={{backgroundColor:"rgb(96, 158, 160)",height:"320px",width:"280px"}}  alignment='center'>
      <MDBCardHeader  style={{backgroundColor:'rgb(169, 208, 221)'}}>{docterss.hospital}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle  >{docterss.name}</MDBCardTitle>
        <MDBCardTitle className='m-3'>{docterss.specialty}</MDBCardTitle>
        
        <MDBBtn href='' className=' m-2'  style={{backgroundColor:'rgb(169, 208, 221)'}}>Details</MDBBtn><br />
        <h6  className='m-3'  style={{color:'rgb(169, 208, 221)'}} >
        &#9733; {docterss.rating}
        </h6>
       
      </MDBCardBody>
   
    </MDBCard>



        </Link>


    </div>
  )
}

export default Details