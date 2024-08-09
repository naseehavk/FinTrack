import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
       <Navbar className="" style={{backgroundColor:'#00c1d4',color:'y'}}>
        <Container>
          <Navbar.Brand style={{color: "#FFD43B",}} >
          <i className="fa-solid fa-piggy-bank" style={{color: "#FFD43B",}} />{' '}
            FinTrack</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
