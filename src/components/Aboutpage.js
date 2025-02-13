import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Aboutpage() {
  const universities = [
    {
      logo: '/universitieslogo/1.png',
      name: 'University 1',
      tuitionFee: '$20,000'
    },
    {
      logo: '/universitieslogo/2.png',
      name: 'University 2',
      tuitionFee: '$25,000'
    },
    {
      logo: '/universitieslogo/3.png',
      name: 'University 3',
      tuitionFee: '$30,000'
    },
    {
      logo: '/universitieslogo/4.png',
      name: 'University 4',
      tuitionFee: '$35,000'
    },
    {
      logo: '/universitieslogo/5.png',
      name: 'University 5',
      tuitionFee: '$40,000'
    }
  ];

  return (
    <div>
    <div>
     
      {universities.map((university, index) => (
        <Card key={index} style={{ marginBottom: '20px', width: '50rem' }}>
          <Card.Img variant="top" src={university.logo} style={{ height: '150px', objectFit: 'cover',width:'18rem' }} />
          <Card.Body>
            <Card.Title>{university.name}</Card.Title>
            <Card.Text>Average Tuition Fee: {university.tuitionFee}</Card.Text>
            <Button variant="outline-danger">
              <i className="fa fa-heart"></i> Like
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    <div className="footer" style={{ padding: '12px 24px', backgroundColor: '#333', display: 'flex', gap: '106px', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
        <div>
          <h4>About Us</h4>
          <p>Learn more about our mission and values.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </div>
    
  );
}

export default Aboutpage;
