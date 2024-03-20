import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

function Moredetails() {

    const{id}=useParams()
    console.log(id);

    const base_url='https://doctor-backend-new.onrender.com/doctors'

    const[moreData,SetmoreData] = useState({})



    const fetchmore = async()=>{
        const results =  await axios.get(`${base_url}/${id}`)
        console.log(results.data);
        SetmoreData(results.data)
    }
    useEffect(()=>{
        fetchmore()
    },[])
  return (
    <div style={{marginTop:'80px'}}>
       <div className="row container mt-3 p-5">
        <div className="col-8 " style={{marginLeft:'280px'}}>
        <MDBCard style={{backgroundColor:'rgb(169, 208, 221)',justifyItems:'center',textAlign:'center'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center  text-uppercase' style={{color:'rgb(108, 163, 163)'}}>{moreData.specialty}</MDBCardTitle>
        <MDBCardText >
        <MDBListGroup style={{ minWidthL: '22rem', backgroundColor:'rgb(169, 208, 221)'}} >
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}} className='text-dark'>Hospital: {moreData.hospital}</MDBListGroupItem>
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}} className='text-dark'>Name: {moreData.name}</MDBListGroupItem>
      
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}} className='text-dark'>Address:{moreData.address}</MDBListGroupItem>
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}} className='text-dark'>Contact:{moreData.phone}</MDBListGroupItem>
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}} className='text-dark'>Available Days:{moreData.available_days}</MDBListGroupItem>
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}} className='text-dark'>Available Time:{moreData.available_hours}</MDBListGroupItem>
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}} className='text-dark'>Rating:{moreData.rating}</MDBListGroupItem>
      <MDBListGroupItem style={{backgroundColor:'rgb(169, 208, 221)'}}><Comments revie ={moreData.reviews}/>
      <button className='btn m-2'>Book an Appointment</button>
      </MDBListGroupItem>
   
    </MDBListGroup>
        </MDBCardText>
      
      </MDBCardBody>
    </MDBCard>
        </div>
     
</div>



    </div>
  )
}

export default Moredetails