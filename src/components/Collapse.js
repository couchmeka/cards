import { useState } from "react";
import {
  Card,
  Col,
 Collapse,
} from "react-bootstrap";










const Collapsed = ({characters}) =>{


  const [open, setOpen] = useState(false);

  // card mapping
  



    return (
      <Col key={characters.image}>
        {/* CSS styling */}
        <style type="text/css">
          {`
    
    #enlarge:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 26px rgba(0,0,0,0.20);
    transform: scale(1.1);
    
     }
  
   .card {
    margin-bottom: 25px;
    margin-top: 25px;
    display: flex;
    
     }
  
   
  
  
  `}
        </style>
        <div className="react-card">
          {/* card with collapse aria controls */}
          <Card
            id="enlarge"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="card"
            bg="warning"
            style={{ width: "18rem" }}
          >
            <Card.Header>
              <h2>{characters.name}</h2>{" "}
            </Card.Header>
            <Card.Img variant="top" src={characters.image} />
            <Card.Body bg="light">
              <Card.Title>{characters.name}</Card.Title>
              <Card.Text>
                Gender: {characters.gender} <br />
                Species: {characters.species} <br />
                Status: {characters.status}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* collapsable card */}
        <div style={{ minHeight: "150px", width: "10rem" }}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card id="enlarge" body style={{ width: "285px" }}>
                Episodes {characters.episode.length}
                <br />
                Location {characters.location.name}
                <br />
                Location {characters.origin.name}
              </Card>
            </div>
          </Collapse>
        </div>
      </Col>
    );

}


export default Collapsed