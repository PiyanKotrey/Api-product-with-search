import NavbarComponent from '@/components/NavbarComponent'
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Home() {
  const [productsList,setProductsList] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() =>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
      .then(productsList => setProductsList(productsList))
  },[])
  const filteredProducts = productsList.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
        <NavbarComponent></NavbarComponent>
        <h3>Product List Collection</h3>

        <InputGroup>
          <InputGroup.Text id="btnGroupAddon2">KotDraxler</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Find Product Here"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </InputGroup>
      
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Photos</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
      filteredProducts.map(product =>(
        <tr>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.category.name}</td>
          <td>
            <img style={{height:'100px',width:'150px'}} src={product.images}/>
          </td>
          <td>
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    
      
    </>
  );
}
