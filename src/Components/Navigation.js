import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {searchKeyword} from '../redux/actions/searchAction'

// 슬라이드부터 값을 매칭시켜 필터링 시킬줄 알아야 한다.

const Navigation = () => {
  let [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const onSearchInput = (e) => {
    e.preventDefault();
    dispatch()
  }

  return (
    <Navbar bg='dark' variant='dark'>
    <Container fluid>
      <Navbar.Brand href="#">
        <img 
        width={100} 
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/movies" className='nav-item'>Movies</Link>
        </Nav>
        <Form 
        onSubmit={onSearchInput}
        className="d-flex"
        >
          <Form.Control
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button 
          type='submit'
          variant="outline-danger"
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation;