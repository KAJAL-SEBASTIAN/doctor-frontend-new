import React from 'react'
import './Header.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar fixed='top' style={{backgroundColor:"#d6f0ee"}}>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/' style={{color:'rgb(96, 158, 160)'}}>
      <i class="fa-solid fa-laptop-medical mx-3 fs-2 "></i>
    
      <h2 style={{color:'rgb(96, 158, 160)'}}>CareOne</h2>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  
 
  </div>

  
  )
}

export default Header