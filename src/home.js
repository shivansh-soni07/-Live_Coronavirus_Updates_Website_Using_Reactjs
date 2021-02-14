import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import {Nav , Carousel, NavDropdown } from 'react-bootstrap'
import {Row , Col,showA,NavItem ,ToggleButton, Button} from 'react-bootstrap'

import { MenuItem } from 'react-bootstrap'
// import {Nav , Carousel, index, handleSelect } from 'react-bootstrap'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HealingIcon from '@material-ui/icons/Healing';



function _home() {

  

alert('If Using ,Mobile turn on Desktop Mode for Best Experience [click "ok" multiple times to open] ');
 
    return (
        <div className='home'>
        

            {/* ///////////////////////////////////////////navbar//////////////////////////////////// */}
   <Navbar navbar-collapse expand="lg" sticky='top' bg='danger' variant="dark">
    <Navbar.Brand href="/"><HealingIcon />CoronaUpdate</Navbar.Brand>
    <Nav className="mr-auto sm-col">
      <Nav.Link  className='navi'  href="https://www.instagram.com/___shivansh___soni/"><InstagramIcon /></Nav.Link>
      <Nav.Link  className='navi'  href="https://twitter.com/_Shivansh_Soni"> <TwitterIcon /></Nav.Link> 
      

      <Nav.Link className='navi' href="https://www.linkedin.com/in/shivansh-soni-262a421b6"> <LinkedInIcon /> </Nav.Link>
      <Nav.Link className='navi' href="https://www.facebook.com/shivansh.soni.3557"> <FacebookIcon /> </Nav.Link>

    </Nav>
    
  </Navbar>
    {/* ///////////////////////////////////////////////////////////////////// */}

    {/* carosuell/////////////////////////////////////// */}

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/1200x400/?coronavirus,vaccine"
      alt="First slide"
      />
    <Carousel.Caption>
    
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/1200x400/?medicine,bacteria"
      
      alt="Third slide"
      />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/1200x400/?facemask,virus"
    //   src="https://cdn.pixabay.com/photo/2020/05/15/18/46/corona-5174671_960_400.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



    

        </div>
    )
};







export default _home 

