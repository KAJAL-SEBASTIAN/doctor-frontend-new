import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from './Details';
import './Alldata.css';

function Alldata() {

    const base_url='https://doctor-backend-new.onrender.com/doctors'

    const[Alldata,setAlldata] = useState([])

    const fetchdata= async()=>{
        const result = await axios.get(base_url)
        console.log(result.Alldata);
        setAlldata(result.data)
    }
    console.log(setAlldata);
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div style={{marginTop:'80px'}}>
        <h1 className=' text-center m-3'  style={{color:'rgb(169, 208, 221)'}}>Our Doctors</h1>
  <Row>
           {
            Alldata.map(item=>(
                <Col  sm={12} md={6} lg={4} xl={3} >

                <Details  docterss = {item}/>
                </Col>

            ))
           }
        </Row>

    </div>

      
   
  )
}

export default Alldata