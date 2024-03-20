import React from 'react';
import './Home.css';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{marginTop:'70px'}}>
      <div id="home" className="banner">
      </div>
      <div className="overlay">
        <h1 className='head fs-4 m-2'>“Health is the greatest wealth.”</h1>
      </div>

      <div className="row text-dark" style={{ backgroundColor: 'white' }}>
        <div className="col-5">
          <img src="https://promedis.ro/wp-content/uploads/2017/04/about-us-img-1.jpg" className="img-fluid" style={{ marginLeft: '20px' }} alt="" />
        </div>
        <div className="col-7 container p-5">
        <p>Welcome to <span className="careone " style={{color:'rgb(96, 158, 160)'}}>CareOne</span>, a unique
         healthcare clinic where doctors from various hospitals come together to serve patients at different 
         times. CareOne isn't just a typical clinic; it's a hub where healthcare professionals collaborate
          to provide comprehensive care. Our platform bridges the gap between patients and healthcare
         providers, offering a seamless experience for those seeking medical advice, appointments, or
          essential healthcare resources.</p>

          <p>At CareOne, we understand that healthcare goes beyond traditional boundaries. It's about
           creating meaningful connections between patients and doctors, fostering empathy, understanding,
           and unwavering support. While our doctors primarily work in different hospitals, they also 
           dedicate part of their time to CareOne, ensuring personalized attention and comprehensive care
            for every individual.</p>
          <p>Our platform showcases a list of doctors based on their specialties, providing patients
           with easy access to top-rated healthcare professionals. These doctors, while primarily
            affiliated with other institutions, also serve at CareOne, enriching our clinic with their
           expertise and dedication. Whether you're looking for medical advice or scheduling appointments,
           CareOne is your go-to destination for all your healthcare needs.
           We're committed to
             delivering exceptional care and fostering a supportive healthcare community where patients and
              providers thrive together. Experience the difference with CareOne – because your health and
               well-being are our top priorities.</p>
        </div>
      </div>

      <h2 style={{ textAlign: "center", margin: "20px" }}>Our Mission</h2>
      <div className="container">
        <p>CareOne is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.</p>
      </div>
      <h2 style={{ textAlign: "center", margin: "25px" }}>Our approach to healthcare</h2>
      <div className="row">
        <MDBCard className='cards w-25' style={{ backgroundColor: 'rgb(169, 208, 221)' ,marginLeft:'150px'}}>
          <MDBCardImage src='https://www.practo.com/providers/static/images/pages/company/about/connect.svg' width={"100px"} height={"200px"} position='top' alt='...' />
          <MDBCardBody className='text-dark' >
            <MDBCardTitle>Connect</MDBCardTitle>
            <MDBCardText>
              We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. It’s about the deep connection between doctors and patients that leads to continuous care and sustained, better outcomes.
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>

        <MDBCard className='card w-25' style={{ backgroundColor: 'rgb(169, 208, 221)' }}>
          <MDBCardImage src='https://www.practo.com/providers/static/images/pages/company/about/trust.svg' width={"100px"} height={"200px"} position='top' alt='...' />
          <MDBCardBody className='text-dark'>
            <MDBCardTitle>Trust</MDBCardTitle>
            <MDBCardText>
              CareOne works on trust. We are aware of the responsibility placed on us by 30 crore+ patients and over a lakh doctors. We always have and always will do everything we possibly can to uphold this trust.
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>

        <MDBCard className='card w-25' style={{ backgroundColor: 'rgb(169, 208, 221)' }}>
          <MDBCardImage src='https://www.practo.com/providers/static/images/pages/company/about/transparency.svg' width={"100px"} height={"200px"} position='top' alt='...' />
          <MDBCardBody className='text-dark' >
            <MDBCardTitle>Transparency</MDBCardTitle>
            <MDBCardText>
              We believe in full disclosure. We believe in communicating openly and honestly, and holding ourselves to the highest ethical standards.
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </div>

      <div>
        <h2 className='text-center m-3 mb-3'>Gallery of Our Clinic</h2>
        <div className="row m-3 ">
          <div className="col " >
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
          <div className="col">
            <img src="https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
          <div className="col">
            <img src="https://plus.unsplash.com/premium_photo-1681995277879-42e0d91897e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
          <div className="col">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
        </div>
        <div className="row m-3">
          <div className="col">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
          <div className="col">
            <img src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
          <div className="col">
            <img src="https://plus.unsplash.com/premium_photo-1664302333192-b6df2f5c37bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
          <div className="col">
            <img src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="gallery-img" width={'300px'} height={'250px'} alt="" />
          </div>
        </div>
      </div>

      <Link to={'/data'}>
        <div className='text-center'>
          <button className='btn m-4 fs-3' style={{ backgroundColor: "rgb(96, 158, 160)", color: 'white' }}>Our Doctors</button>
        </div>
      </Link>
    </div>
  )
}

export default Home;
