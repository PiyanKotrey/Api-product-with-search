import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function TableComponent() {
  return (

    <>
    {
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
        <tr>
          <td>Leo Messi</td>
          <td>400M$</td>
          <td>Footballer</td>
          <td>
            <img style={{height:'100px',width:'150px'}} src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR3LLHu8cDaKNV42I04lWq2FZjq0cCIB3NI1AKo1pGZ_J1RkxeXOcWsl4vo6jKqRW99fSL6763ia6VAgWM'/>
          </td>
          <td>
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>{product.title}</td>
          <td>400M$</td>
          <td>Footballer</td>
          <td>
            <img style={{height:'100px',width:'150px'}} src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR3LLHu8cDaKNV42I04lWq2FZjq0cCIB3NI1AKo1pGZ_J1RkxeXOcWsl4vo6jKqRW99fSL6763ia6VAgWM'/>
          </td>
          <td>
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
    }
    </>
    
  )
}
